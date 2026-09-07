'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const root = path.resolve(__dirname, '..');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const ids = ['p1-low-111', 'p2-low-147', 'p3-high-181'];
const server = http.createServer((req, res) => {
    if (req.url === '/test-start.html') { res.setHeader('Content-Type', 'text/html'); res.end('<!doctype html><title>Test</title>'); return; }
    const name = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!name.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    fs.readFile(name, (error, body) => {
        if (error) { res.writeHead(404); res.end(); return; }
        res.setHeader('Content-Type', name.endsWith('.js') ? 'text/javascript' : name.endsWith('.css') ? 'text/css' : name.endsWith('.html') ? 'text/html' : 'application/octet-stream');
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
        page.on('pageerror', e => errors.push(e.message));
        await page.goto(origin + '/test-start.html');
        await page.evaluate(({ ids }) => {
            localStorage.setItem('test-history-sentinel', 'preserved');
            localStorage.setItem('ielts_suite_progress::test-suite', JSON.stringify({
                id: 'test-suite', kind: 'suite', title: 'Test suite', lockedExamIds: ids,
                sequence: ids.map(examId => ({ examId, exam: { id: examId } })),
                currentIndex: 0, draftsByExam: {}, elapsedByExam: {}, elapsed: 0
            }));
        }, { ids });
        const query = new URLSearchParams({
            examId: ids[0], suiteSessionId: 'test-suite', suiteFlowMode: 'simulation',
            suiteSequenceIndex: '0', suiteSequenceTotal: '3', suiteSequenceExamIds: ids.join(','),
            suiteTimerMode: 'elapsed', suiteTimerAnchorMs: String(Date.now())
        });
        await page.goto(origin + '/assets/generated/reading-exams/reading-practice-unified.html?' + query);
        await page.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__ === true);
        assert.equal(await page.locator('#part-submit-btn').count(), 0);
        assert.equal(await page.locator('#submit-btn').innerText(), '下一题');
        const input = page.locator('#question-groups input[type=radio]').first();
        await input.check();
        const picked = await input.evaluate(node => ({ name: node.name, value: node.value }));
        await page.locator('#submit-btn').click();
        await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[1]);
        assert.equal(await page.locator('#submit-btn').innerText(), '下一题');
        await page.waitForFunction(() => !!navigator.serviceWorker.controller);
        await page.evaluate(() => window.OfflineReady.cacheCurrentPage());
        await context.setOffline(true);
        await page.locator('#submit-btn').click();
        await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[2]);
        assert.equal(await page.locator('#submit-btn').innerText(), 'Submit');
        // Reload the offline page: choose continue and retain the same suite.
        await page.reload();
        await page.getByText('检测到未完成的套题练习', { exact: true }).waitFor();
        await page.getByRole('button', { name: '从上次继续', exact: true }).click();
        await page.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__ === true);
        await page.locator('#reset-btn').click();
        await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[1]);
        await page.locator('#reset-btn').click();
        await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[0]);
        assert.equal(await page.locator('input[name="' + picked.name + '"]:checked').inputValue(), picked.value);
        await page.locator('#submit-btn').click();
        await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[1]);
        await page.locator('#submit-btn').click();
        await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[2]);
        await page.locator('#submit-btn').click();
        await page.locator('.suite-result-total').waitFor();
        assert.match(await page.locator('.suite-result-total').innerText(), /40/);
        await page.waitForFunction(() => JSON.parse(localStorage.getItem('ielts_offline_completion_queue_v1') || '[]').length > 0);
        assert.equal(await page.evaluate(() => localStorage.getItem('test-history-sentinel')), 'preserved');
        assert.deepEqual(errors, []);
        console.log('PASS: all three passages ready, offline P1/P2/P3 navigation, refresh/resume, 40-question submission and history preservation.');
        await context.close();
        const hostContext = await browser.newContext();
        await hostContext.addInitScript(() => {
            localStorage.setItem('onboardingCompleted_v2', 'true');
            localStorage.setItem('hasSeenGplLicense', 'true');
        });
        const home = await hostContext.newPage();
        home.on('console', msg => { if (msg.type() === 'error') console.log('HOST:', msg.text().slice(0, 200)); });
        await home.goto(origin + '/Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html');
        await home.locator('[data-daily-action=later]').last().waitFor({ state: 'visible', timeout: 60000 });
        await home.locator('[data-daily-action=later]').last().click();
        assert.equal(await home.locator('#daily-suite-recommendation-modal').count(), 0);
        await home.evaluate(() => window.app.navigateToView('suite'));
        await home.locator('button[data-suite-id="suite-001"]').click();
        const popupPromise = home.waitForEvent('popup');
        await home.locator('[data-mode=free]').click();
        const practice = await popupPromise;
        practice.on('pageerror', error => console.log('PRACTICE ERROR:', error.message));
        practice.on('console', msg => { if (msg.type() === 'error') console.log('PRACTICE:', msg.text()); });
        try { await practice.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__ === true); }
        catch (error) { console.log('PRACTICE URL:', practice.url(), 'BODY:', (await practice.locator('body').innerText()).slice(0, 1500)); throw error; }
        await practice.evaluate(() => {
            const root = document.querySelector('#left p');
            const textNode = root && Array.from(root.childNodes).find(node => node.nodeType === Node.TEXT_NODE && (node.textContent || '').trim().length > 12);
            if (!textNode) throw new Error('missing annotation test text');
            const range = document.createRange();
            range.setStart(textNode, 1);
            range.setEnd(textNode, Math.min(11, textNode.textContent.length));
            const span = document.createElement('span');
            span.className = 'hl';
            span.dataset.hlType = 'note';
            span.dataset.noteId = 'note-test';
            span.dataset.highlightGroupId = 'test-group';
            range.surroundContents(span);
            window.setPracticeNotes([{ id: 'note-test', text: span.textContent, part: 'Part 1', comment: '套题导出 Note' }]);
            window.dispatchEvent(new CustomEvent('practiceAnnotationsChanged', { detail: { reason: 'test' } }));
        });
        await practice.locator('#question-groups input[type=radio]').first().check();
        await practice.locator('#submit-btn').click();
        await practice.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[1]);
        await practice.locator('#submit-btn').click();
        await practice.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[2]);
        await practice.locator('#submit-btn').click();
        await home.waitForFunction(async () => (await window.storage.get('practice_records', [])).some(record => record.practiceMode === 'suite' || record.suiteSessionId || record.metadata?.practiceMode === 'suite'), { timeout: 20000 });
        const annotationResult = await home.evaluate(async () => {
            const records = await window.storage.get('practice_records', []);
            const record = records.find(item => item && (item.suiteMode || item.suiteSessionId || item.metadata?.practiceMode === 'suite'));
            const first = record && record.suiteEntries && record.suiteEntries[0];
            const exporter = window.pdfExporter || (typeof window.PdfExporter === 'function' ? new window.PdfExporter() : null);
            const html = exporter && record ? exporter.buildRecordHtml(record) : '';
            return {
                sections: record && record.suiteEntries ? record.suiteEntries.length : 0,
                highlights: first && Array.isArray(first.highlights) ? first.highlights.length : 0,
                note: first && Array.isArray(first.notes) ? first.notes[0] : null,
                pdfHasNote: html.includes('套题导出 Note')
            };
        });
        assert.equal(annotationResult.sections, 3);
        assert.ok(annotationResult.highlights >= 1);
        assert.equal(annotationResult.note && annotationResult.note.comment, '套题导出 Note');
        assert.equal(annotationResult.pdfHasNote, true);
        await practice.evaluate(() => {
            const root = document.querySelector('#left p');
            const node = root && Array.from(root.childNodes).find(item => item.nodeType === Node.TEXT_NODE && (item.textContent || '').trim().length > 8);
            if (!node) throw new Error('missing post-submit highlight text');
            const range = document.createRange();
            range.setStart(node, 0);
            range.setEnd(node, Math.min(7, node.textContent.length));
            const span = document.createElement('span');
            span.className = 'hl';
            span.dataset.reviewHighlight = 'true';
            span.dataset.highlightGroupId = 'post-submit-group';
            range.surroundContents(span);
            window.dispatchEvent(new CustomEvent('practiceAnnotationsChanged', { detail: { reason: 'post-submit-test' } }));
        });
        await home.waitForFunction(async (examId) => {
            const records = await window.PracticeCore.store.listPracticeRecords();
            const record = records.find(item => item && Array.isArray(item.suiteEntries));
            const entry = record && record.suiteEntries.find(item => String(item.examId) === String(examId));
            return !!(entry && Array.isArray(entry.highlights) && entry.highlights.some(item => item.groupId === 'post-submit-group'));
        }, ids[2]);
        console.log('PASS: real homepage later button dismisses; suite launches and submits through the host with all three sections saved.');
        await hostContext.close();
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
