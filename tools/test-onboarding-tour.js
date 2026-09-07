'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const server = http.createServer((req, res) => {
  const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (error, body) => {
    if (error) { res.writeHead(404); res.end(); return; }
    res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : file.endsWith('.html') ? 'text/html' : 'application/octet-stream');
    res.end(body);
  });
});

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    await context.addInitScript(() => localStorage.setItem('onboardingCompleted_v2', 'true'));
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(origin + '/Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => window.OnboardingTour && document.querySelector('#category-overview [data-action="start-suite-mode"]'));
    await page.evaluate(() => window.OnboardingTour.start(true));
    await page.waitForSelector('.onboarding-tooltip.is-visible .onboarding-welcome__roadmap');
    assert.match(await page.locator('.onboarding-tooltip__content').innerText(), /不会自动开始考试或修改答案/);
    assert.equal(await page.locator('[data-action="skip"]').innerText(), '暂时跳过');

    await page.locator('[data-action="next"]').click();
    await page.waitForFunction(() => document.querySelector('.onboarding-tooltip.is-visible .onboarding-tooltip__focus')?.textContent.includes('开启套题模式'));
    assert.equal((await page.locator('.onboarding-tooltip__phase').innerText()).trim(), '套题练习');
    assert.equal((await page.locator('.onboarding-tooltip__progress-text').innerText()).trim(), '第 1 步 · 共 15 步');

    const overlap = await page.evaluate(() => {
      const tooltip = document.querySelector('.onboarding-tooltip');
      const target = document.querySelector('#category-overview [data-action="start-suite-mode"]');
      const a = tooltip.getBoundingClientRect();
      const b = target.getBoundingClientRect();
      return Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left))
        * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top));
    });
    assert.equal(overlap, 0, `guide tooltip overlaps its highlighted target by ${overlap}px²`);

    await page.locator('[data-action="skip"]').click();
    await page.waitForFunction(() => !document.body.classList.contains('onboarding-tour-active'));
    assert.equal(errors.length, 0, errors.join('\n'));
    console.log('Onboarding tour clarity and placement test passed.');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
