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

async function testBrowser(name, browserType, launchOptions) {
  const browser = await browserType.launch(Object.assign({ headless: true }, launchOptions));
  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    const origin = 'http://127.0.0.1:' + server.address().port;
    await page.goto(origin + '/assets/generated/reading-exams/reading-practice-unified.html?examId=p2-high-16', { waitUntil: 'domcontentloaded' });
    await page.locator('.drag-item[draggable="true"]').first().waitFor();
    await page.locator('.match-dropzone').first().waitFor();

    const firstItem = page.locator('.drag-item[draggable="true"]').first();
    const firstZone = page.locator('.match-dropzone').first();
    const firstText = (await firstItem.textContent()).trim();
    await firstItem.dragTo(firstZone);
    assert.match(await firstZone.textContent(), new RegExp(firstText.replace(/[.*+?^${}()|[]\\]/g, '\\$&')));

    // Regression for WebKit/embedded browsers that report a Text node as the
    // event target. Native Element.closest() is unavailable on that target.
    const textNodeDrop = await page.evaluate(() => {
      const item = document.querySelector('.pool-items .drag-item[draggable="true"]');
      const zone = document.querySelectorAll('.match-dropzone')[1];
      if (!item || !zone || !item.firstChild) return { supported: false };
      const targetText = document.createTextNode(' ');
      zone.appendChild(targetText);
      let transfer = null;
      try { transfer = new DataTransfer(); } catch (_) { /* protected environment */ }
      const makeDragEvent = (type) => {
        try {
          return new DragEvent(type, { bubbles: true, cancelable: true, dataTransfer: transfer });
        } catch (_) {
          return new Event(type, { bubbles: true, cancelable: true });
        }
      };
      item.firstChild.dispatchEvent(makeDragEvent('dragstart'));
      targetText.dispatchEvent(makeDragEvent('dragover'));
      targetText.dispatchEvent(makeDragEvent('drop'));
      const placed = zone.querySelector('.drag-item, .draggable-word, .card');
      return { supported: true, placed: Boolean(placed), text: placed?.textContent || '' };
    });
    assert.equal(textNodeDrop.supported, true);
    assert.equal(textNodeDrop.placed, true, name + ': Text-node drop target was not accepted');

    // Keyboard/assistive fallback: click an option, then its answer box.
    const clickItem = page.locator('.pool-items .drag-item[draggable="true"]').first();
    const clickZone = page.locator('.match-dropzone').nth(2);
    const clickText = (await clickItem.textContent()).trim();
    await clickItem.click();
    await clickZone.click();
    assert.match(await clickZone.textContent(), new RegExp(clickText.replace(/[.*+?^${}()|[]\\]/g, '\\$&')));
    assert.equal(errors.length, 0, name + ' page errors:\n' + errors.join('\n'));
    console.log('PASS:', name, 'native drag, Text-node drop, and click fallback');
  } finally {
    await browser.close();
  }
}

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    await testBrowser('Chromium', chromium, { channel: 'msedge' });
    await testBrowser('Firefox', firefox);
    await testBrowser('WebKit (Safari engine)', webkit);
  } finally {
    server.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
