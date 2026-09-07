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
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(origin + '/assets/generated/reading-exams/reading-practice-unified.html?examId=p1-low-111', { waitUntil: 'domcontentloaded' });
    await page.waitForFunction(() => document.readyState !== 'loading');

    const result = await page.evaluate(() => {
      const scroller = document.createElement('div');
      scroller.style.cssText = 'position:fixed;left:20px;top:20px;width:240px;height:120px;overflow:auto;z-index:2147483647;background:white';
      const content = document.createElement('div');
      content.style.height = '1200px';
      const item = document.createElement('div');
      item.className = 'drag-item';
      item.draggable = true;
      item.dataset.option = 'A';
      item.textContent = 'A';
      content.appendChild(item);
      scroller.appendChild(content);
      document.body.appendChild(scroller);

      const transfer = new DataTransfer();
      item.dispatchEvent(new DragEvent('dragstart', {
        bubbles: true,
        cancelable: true,
        clientX: 40,
        clientY: 40,
        dataTransfer: transfer
      }));
      content.dispatchEvent(new DragEvent('dragover', {
        bubbles: true,
        cancelable: true,
        clientX: 80,
        clientY: 80,
        dataTransfer: transfer
      }));
      const duringDrag = new WheelEvent('wheel', {
        bubbles: true,
        cancelable: true,
        clientX: 80,
        clientY: 80,
        deltaY: 160
      });
      content.dispatchEvent(duringDrag);
      const duringScrollTop = scroller.scrollTop;

      item.dispatchEvent(new DragEvent('dragend', { bubbles: true, dataTransfer: transfer }));
      scroller.scrollTop = 0;
      const afterDrag = new WheelEvent('wheel', {
        bubbles: true,
        cancelable: true,
        clientX: 80,
        clientY: 80,
        deltaY: 160
      });
      content.dispatchEvent(afterDrag);
      return {
        duringScrollTop,
        duringDefaultPrevented: duringDrag.defaultPrevented,
        afterScrollTop: scroller.scrollTop,
        afterDefaultPrevented: afterDrag.defaultPrevented
      };
    });

    assert.equal(errors.length, 0, errors.join('\n'));
    assert.ok(result.duringScrollTop >= 150, `expected drag wheel scroll, got ${result.duringScrollTop}`);
    assert.equal(result.duringDefaultPrevented, true, 'drag wheel event should be handled manually');
    assert.equal(result.afterScrollTop, 0, 'manual wheel bridge should stop after dragend');
    assert.equal(result.afterDefaultPrevented, false, 'normal wheel event should not be intercepted');
    console.log('Drag wheel scrolling test passed.');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
