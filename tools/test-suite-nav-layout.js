'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..');
const { chromium, firefox, webkit } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const server = http.createServer((req, res) => {
  const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
  fs.readFile(file, (error, body) => {
    if (error) { res.writeHead(404); res.end(); return; }
    res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : file.endsWith('.html') ? 'text/html' : 'application/octet-stream');
    res.end(body);
  });
});

async function verify(browserName, browserType, launchOptions) {
  const browser = await browserType.launch(Object.assign({ headless: true }, launchOptions));
  try {
    for (const viewport of [{ width: 1920, height: 1080 }, { width: 1280, height: 720 }]) {
      const page = await browser.newPage({ viewport });
      await page.goto('http://127.0.0.1:' + server.address().port + '/assets/generated/reading-exams/reading-practice-unified.html?examId=p2-high-16', { waitUntil: 'domcontentloaded' });
      await page.locator('#question-nav').waitFor();
      await page.evaluate(() => {
        const nav = document.getElementById('question-nav');
        nav.classList.add('question-nav--suite');
        nav.innerHTML = [1, 2, 3].map((part, partIndex) => {
          const first = partIndex === 0 ? 1 : partIndex === 1 ? 14 : 27;
          const last = partIndex === 2 ? 40 : first + 12;
          const items = Array.from({ length: last - first + 1 }, (_, i) =>
            '<button class="q-item" type="button">' + (first + i) + '</button>'
          ).join('');
          return '<div class="q-passage"><span class="q-passage__label">P' + part
            + '</span><div class="q-passage__items">' + items + '</div></div>';
        }).join('');
      });

      for (const fontClass of ['font-normal', 'font-large', 'font-xlarge']) {
        await page.evaluate((value) => { document.documentElement.className = value; }, fontClass);
        await page.waitForTimeout(80);
        const layout = await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(() => {
          const shell = document.querySelector('.shell').getBoundingClientRect();
          const nav = document.querySelector('.practice-nav').getBoundingClientRect();
          const header = document.querySelector('.header').getBoundingClientRect();
          resolve({
            shellTop: shell.top,
            shellBottom: shell.bottom,
            navTop: nav.top,
            navHeight: nav.height,
            headerBottom: header.bottom,
            reservedNav: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--practice-nav-height')),
            reservedHeader: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--practice-header-height'))
          });
        }))));
        assert.ok(Math.abs(layout.shellTop - layout.headerBottom) <= 1.5, browserName + ' header overlap at ' + fontClass);
        assert.ok(layout.shellBottom <= layout.navTop + 1.5, browserName + ' nav overlaps content at ' + fontClass + ': ' + JSON.stringify(layout));
        assert.ok(Math.abs(layout.reservedNav - layout.navHeight) <= 1.5, browserName + ' stale nav height at ' + fontClass);
        assert.ok(Math.abs(layout.reservedHeader - layout.headerBottom) <= 1.5, browserName + ' stale header height at ' + fontClass);
      }
      await page.close();
    }
    console.log('PASS:', browserName, 'suite navigation reserves space at all font sizes');
  } finally {
    await browser.close();
  }
}

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    await verify('Chromium', chromium, { channel: 'msedge' });
    await verify('Firefox', firefox);
    await verify('WebKit (Safari engine)', webkit);
  } finally {
    server.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
