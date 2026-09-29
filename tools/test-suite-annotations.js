'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const { chromium, webkit } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const ids = ['p1-low-111', 'p2-low-147', 'p3-high-181'];
const server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (err, body) => {
        if (err) { res.writeHead(404); res.end(); return; }
        res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.html') ? 'text/html' : file.endsWith('.css') ? 'text/css' : 'application/octet-stream');
        res.end(body);
    });
});
async function annotate(page, index, actions = [[2, 'btnHL'], [3, 'btnNote']]) {
    for (const [paragraph, action] of actions) {
        await page.evaluate(({ paragraph }) => {
            const root = document.querySelectorAll('#left p')[paragraph];
            const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
            let node; while ((node = walker.nextNode()) && node.textContent.trim().length < 15) {}
            const range = document.createRange(); range.setStart(node, 0); range.setEnd(node, 12);
            const selection = getSelection(); selection.removeAllRanges(); selection.addRange(range);
            document.dispatchEvent(new MouseEvent('mouseup', { bubbles: true }));
        }, { paragraph });
        await page.waitForTimeout(120);
        await page.evaluate(action => document.getElementById(action).click(), action);
    }
    await page.locator('.note-item__textarea').last().fill('Passage ' + index + ' 中文笔记');
    if (await page.locator('#close-note').isVisible()) await page.locator('#close-note').click();
}
async function switchTo(page, index) {
    if ((await page.locator('#exam-part-label').innerText()).includes(String(index + 1))) return;
    await page.locator('[data-passage-index="' + index + '"]').first().click();
    await page.waitForFunction(index => document.getElementById('exam-part-label')?.textContent.includes(String(index + 1)), index);
}
async function check(page, index) {
    await page.waitForTimeout(300);
    assert.equal(await page.evaluate(() => window.getPracticeNotes()[0]?.comment), 'Passage ' + index + ' 中文笔记', 'note P' + (index + 1));
    assert.ok(await page.locator('#left .hl').count() >= 2, 'highlights P' + (index + 1) + ': ' + JSON.stringify(await page.locator('#left .hl').allTextContents()));
}
(async () => {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const origin = 'http://127.0.0.1:' + server.address().port;
    const browser = await (process.env.TEST_BROWSER === 'webkit' ? webkit : chromium).launch(process.env.TEST_BROWSER === 'webkit' ? { headless: true } : { headless: true, channel: 'msedge' });
    try {
        const context = await browser.newContext();
        await context.addInitScript(() => {
            localStorage.setItem('onboardingCompleted_v2', 'true');
            localStorage.setItem('hasSeenGplLicense', 'true');
        });
        const home = await context.newPage();
        await home.goto(origin + '/Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html');
        await home.locator('[data-daily-action=later]').last().click();
        await home.evaluate(() => window.app.navigateToView('suite'));
        const practicePopup = home.waitForEvent('popup');
        await home.locator('button[data-suite-id="suite-001"]').click();
        const page = await practicePopup;
        page.on('dialog', d => d.accept());
        await page.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__);
        assert.equal(await page.locator('#reset-btn').count(), 0);
        for (let i = 0; i < 3; i++) {
            if (i) await switchTo(page, i);
            await annotate(page, i);
            await check(page, i);
        }
        await switchTo(page, 0);
        const oldDraft = await page.evaluate(() => {
            const suite = new URL(location.href).searchParams.get('suiteSessionId');
            const exam = new URL(location.href).searchParams.get('examId');
            return { key: 'ielts_sim_draft::' + suite + '::' + exam,
                value: sessionStorage.getItem('ielts_sim_draft::' + suite + '::' + exam) };
        });
        await page.evaluate(() => document.querySelector('.note-item__delete').click());
        await page.evaluate(old => sessionStorage.setItem(old.key, old.value), oldDraft);
        await page.reload();
        await page.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__);
        assert.deepEqual(await page.evaluate(() => window.getPracticeNotes()), [], 'deleted Note must not return from a longer stale snapshot');
        assert.equal(await page.locator('#left .hl').count(), 1);
        await annotate(page, 0, [[3, 'btnNote']]);
        for (const i of [0, 1, 2, 0, 2]) { await switchTo(page, i); await check(page, i); }
        await page.reload();
        await page.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__);
        await check(page, 2);
        await page.evaluate(() => {
            const queue = window.OfflineReady.queueCompletion;
            window.OfflineReady.queueCompletion = envelope => {
                window.__testSubmitted = JSON.parse(JSON.stringify(envelope.data));
                return queue(envelope);
            };
        });
        await page.locator('#submit-btn').click();
        await page.waitForFunction(() => document.body.classList.contains('practice-completed-mode'));
        await page.waitForFunction(() => window.__testSubmitted);
        const sections = await page.evaluate(() => window.__testSubmitted.suiteSections);
        assert.equal(sections.length, 3);
        sections.forEach((section, i) => {
            assert.equal(section.notes[0].comment, 'Passage ' + i + ' 中文笔记');
            assert.equal(section.highlights.length, 2);
        });
        for (const i of [0, 1, 2, 0, 2]) { await switchTo(page, i); await check(page, i); }
        await page.close();
        let record;
        for (let attempt = 0; attempt < 100 && !record; attempt++) {
            record = await home.evaluate(async () => (await window.PracticeCore.store.listPracticeRecords()).find(item => item.suiteEntries?.length === 3));
            if (!record) await home.waitForTimeout(150);
        }
        if (!record) console.log(await home.evaluate(() => ({ queue: localStorage.getItem('ielts_offline_completion_queue_v1')?.slice(0, 800), records: localStorage.getItem('practice_records')?.slice(0, 800) })));
        assert.ok(record, 'submitted suite must be saved in practice history');
        record.suiteEntries.forEach((entry, i) => {
            assert.equal(entry.notes[0].comment, 'Passage ' + i + ' 中文笔记');
            assert.equal(entry.highlights.length, 2);
        });
        const popupPromise = home.waitForEvent('popup');
        await home.evaluate(record => window.app.openPracticeRecordReplay(record), record);
        const review = await popupPromise;
        review.on('pageerror', error => console.log('REVIEW ERROR:', error.message));
        try { await review.locator('#question-nav.question-nav--suite').waitFor(); }
        catch (error) { console.log('REVIEW:', review.url(), (await review.locator('body').innerText()).slice(0, 900)); throw error; }
        for (const i of [0, 1, 2, 0, 2]) { await switchTo(review, i); await check(review, i); }
        await review.close();
        const updated = await home.evaluate(async record => {
            await Promise.all(record.suiteEntries.map((entry, index) => window.app._persistPracticeAnnotations(entry.examId, {
                recordId: record.id, highlights: entry.highlights,
                notes: entry.notes.map(note => ({ ...note, comment: 'updated-' + index })),
                annotationSavedAt: Date.now()
            })));
            return (await window.PracticeCore.store.listPracticeRecords()).find(item => item.id === record.id);
        }, record);
        updated.suiteEntries.forEach((entry, i) => assert.equal(entry.notes[0].comment, 'updated-' + i));
        const cleared = await home.evaluate(async record => {
            await window.app._persistPracticeAnnotations(record.suiteEntries[0].examId, {
                recordId: record.id, highlights: [], notes: [], annotationSavedAt: Date.now()
            });
            const saved = (await window.PracticeCore.store.listPracticeRecords()).find(item => item.id === record.id);
            return window.app._buildReviewReplayEntriesFromRecord(saved);
        }, record);
        assert.deepEqual(cleared[0].notes, [], 'history must keep an intentional Note deletion');
        assert.deepEqual(cleared[0].highlights, [], 'history must not borrow highlights from another passage');
        assert.equal(cleared[1].notes[0].comment, 'updated-1');
        console.log('PASS: P1/P2/P3 notes and highlights survive switching, reload, submission, closed-page history replay and concurrent history updates; Reset removed.');
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
