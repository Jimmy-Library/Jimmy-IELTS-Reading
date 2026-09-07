'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const { chromium, webkit } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const root = path.resolve(__dirname, '..');
const ids = ['p1-low-111', 'p2-low-147', 'p3-high-181'];
const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const name = path.resolve(root, '.' + pathname);
    if (!name.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    fs.readFile(name, (error, body) => {
        if (error) { res.writeHead(404); res.end(); return; }
        res.setHeader('Content-Type', name.endsWith('.js') ? 'text/javascript' : name.endsWith('.css') ? 'text/css' : name.endsWith('.html') ? 'text/html' : 'application/octet-stream');
        res.end(body);
    });
});

async function selectAcrossTextNodes(page, selector, skip = 0) {
    return page.evaluate(({ selector, skip }) => {
        const roots = Array.from(document.querySelectorAll(selector));
        const root = roots[skip] || roots[0];
        if (!root) return false;
        let probe = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const originalNodes = [];
        let probeNode = probe.nextNode();
        while (probeNode) { if ((probeNode.textContent || '').trim()) originalNodes.push(probeNode); probeNode = probe.nextNode(); }
        if (originalNodes.length < 2 && originalNodes[0] && originalNodes[0].textContent.length > 6) {
            const tail = originalNodes[0].splitText(Math.floor(originalNodes[0].textContent.length / 2));
            const em = document.createElement('em');
            tail.parentNode.insertBefore(em, tail);
            em.appendChild(tail);
        }
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
        const nodes = [];
        let node = walker.nextNode();
        while (node) { if ((node.textContent || '').trim()) nodes.push(node); node = walker.nextNode(); }
        const range = document.createRange();
        range.setStart(nodes[0], Math.min(1, nodes[0].textContent.length));
        range.setEnd(nodes[nodes.length - 1], Math.max(1, Math.min(nodes[nodes.length - 1].textContent.length, 8)));
        const selection = getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        return !range.collapsed;
    }, { selector, skip });
}

async function runIn(engineName, browserType, launchOptions = {}) {
    const browser = await browserType.launch(Object.assign({ headless: true }, launchOptions));
    try {
        const page = await browser.newPage();
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        const progress = {
            id: 'annotation-' + engineName, lockedExamIds: ids,
            sequence: ids.map((examId) => ({ examId, exam: { id: examId } })),
            currentIndex: 0, draftsByExam: {}, elapsedByExam: {}, elapsed: 0,
            suiteTimerMode: 'countdown', suiteTimerLimitSeconds: 3600
        };
        await page.addInitScript(({ key, progress }) => localStorage.setItem(key, JSON.stringify(progress)), {
            key: 'ielts_suite_progress::annotation-' + engineName, progress
        });
        const query = new URLSearchParams({
            examId: ids[0], suiteSessionId: 'annotation-' + engineName,
            suiteFlowMode: 'simulation', suiteSequenceIndex: '0', suiteSequenceTotal: '3',
            suiteSequenceExamIds: ids.join(','), suiteTimerMode: 'countdown',
            suiteTimerLimitSeconds: '3600', suiteTimerAnchorMs: String(Date.now())
        });
        await page.goto(origin + '/assets/generated/reading-exams/reading-practice-unified.html?' + query);
        await page.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__ === true);

        assert.match(await page.locator('#timer').innerText(), /^(60:00|59:\d{2})$/);
        await page.locator('#timer').click();
        const paused = await page.locator('#timer').innerText();
        await page.waitForTimeout(1250);
        assert.equal(await page.locator('#timer').innerText(), paused);
        await page.locator('#timer').click();
        await page.waitForTimeout(2200);
        assert.notEqual(await page.locator('#timer').innerText(), paused);

        assert.equal(await selectAcrossTextNodes(page, '#left p'), true);
        await page.waitForTimeout(120);
        await page.evaluate(() => document.getElementById('btnHL').click());
        assert.ok(await page.locator('#left .hl').count() >= 2, engineName + ': cross-node highlight');

        assert.equal(await selectAcrossTextNodes(page, '#left p', 1), true);
        await page.waitForTimeout(120);
        await page.evaluate(() => document.getElementById('btnNote').click());
        await page.locator('.note-item__textarea').last().fill('Safari note persistence test');
        await page.waitForTimeout(80);
        const saved = await page.evaluate((key) => JSON.parse(localStorage.getItem(key) || 'null'), 'ielts_suite_draft::annotation-' + engineName + '::' + ids[0]);
        assert.ok(saved && saved.draft && saved.draft.highlights.length >= 2);
        assert.equal(saved.draft.notes[0].comment, 'Safari note persistence test');

        if (await page.locator('#close-note').isVisible()) await page.locator('#close-note').click();
        await page.locator('#submit-btn').click();
        await page.waitForFunction((id) => new URL(location.href).searchParams.get('examId') === id, ids[1]);
        await page.locator('#reset-btn').click();
        await page.waitForFunction((id) => new URL(location.href).searchParams.get('examId') === id, ids[0]);
        assert.ok(await page.locator('#left .hl').count() >= 2);
        assert.equal(await page.evaluate(() => window.getPracticeNotes()[0].comment), 'Safari note persistence test');
        assert.deepEqual(errors, []);
        console.log('PASS ' + engineName + ': cross-node highlights, notes, storage restore and 60-minute pause/resume.');
    } finally {
        await browser.close();
    }
}

let origin;
(async () => {
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    origin = 'http://127.0.0.1:' + server.address().port;
    await runIn('chromium', chromium, { channel: 'msedge' });
    await runIn('webkit', webkit);
})().catch((error) => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
