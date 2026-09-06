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
    const context = await browser.newContext();
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(origin + '/assets/generated/reading-exams/reading-practice-unified.html?examId=p1-low-111', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => document.querySelectorAll('#question-groups .unified-group').length > 0);
    assert.equal(await page.locator('#btnDictionary').evaluate(el => getComputedStyle(el).display), 'none');
    await page.locator('#submit-btn').click();
    await page.waitForFunction(() => document.body.classList.contains('practice-completed-mode'));
    await page.evaluate(() => {
      const walker = document.createTreeWalker(document.getElementById('left'), NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) {
        const match = node.data.match(/[A-Za-z]{5,}/);
        if (!match) continue;
        const range = document.createRange();
        range.setStart(node, match.index);
        range.setEnd(node, match.index + match[0].length);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        node.parentElement.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        break;
      }
    });
    await page.waitForFunction(() => getComputedStyle(document.getElementById('selbar')).display === 'flex');
    assert.notEqual(await page.locator('#btnDictionary').evaluate(el => getComputedStyle(el).display), 'none');
    assert.notEqual(await page.locator('#btnTranslate').evaluate(el => getComputedStyle(el).display), 'none');
    assert.notEqual(await page.locator('#btnAddVocabulary').evaluate(el => getComputedStyle(el).display), 'none');
    await page.locator('#btnDictionary').click();
    await page.waitForFunction(() => document.getElementById('vocabulary-lookup-panel')?.classList.contains('is-open'));
    assert.equal(errors.length, 0, errors.join('\n'));
    console.log('Practice vocabulary selection test passed.');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
