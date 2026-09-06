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
    const ext = path.extname(file);
    res.setHeader('Content-Type', ext === '.js' ? 'text/javascript' : ext === '.css' ? 'text/css' : ext === '.html' ? 'text/html' : 'application/octet-stream');
    res.end(body);
  });
});

(async () => {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await chromium.launch({ channel: 'msedge', headless: true });
  try {
    const page = await browser.newPage();
    const cases = [
      ['p2-medium-243', /The internal body clock/i],
      ['p3-medium-244', /Look who was talking/i]
    ];
    for (const [examId, titlePattern] of cases) {
      const failures = [];
      const onResponse = response => { if (response.status() === 404) failures.push(response.url()); };
      page.on('response', onResponse);
      await page.goto(origin + '/assets/generated/reading-exams/reading-practice-unified.html?examId=' + examId, { waitUntil: 'domcontentloaded' });
      await page.waitForFunction(() => document.querySelectorAll('#question-groups .unified-group').length > 0);
      assert.match(await page.locator('#exam-title').innerText(), titlePattern);
      assert.deepEqual(failures, [], examId + ' requested missing resources');
      page.off('response', onResponse);
    }
    console.log('PASS: reported article links load without 404 and render their questions.');
  } finally {
    await browser.close();
    server.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
