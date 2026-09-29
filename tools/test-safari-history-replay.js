'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const { chromium, webkit } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = process.env.TEST_SOURCE_ROOT || path.resolve(__dirname, '..');
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
    const useWebKit = process.env.TEST_BROWSER === 'webkit';
    const browser = await (useWebKit ? webkit : chromium).launch(useWebKit ? { headless: true } : { headless: true, channel: 'msedge' });
    try {
        const context = await browser.newContext();
        await context.addInitScript(() => {
            localStorage.setItem('onboardingCompleted_v2', 'true');
            localStorage.setItem('hasSeenGplLicense', 'true');
            let gesture = false;
            window.__blockedOpens = 0;
            document.addEventListener('click', () => {
                gesture = true;
                setTimeout(() => { gesture = false; }, 0);
            }, true);
            const open = window.open.bind(window);
            window.open = (...args) => {
                if (!gesture) { window.__blockedOpens++; return null; }
                return open(...args);
            };
            if (new URL(location.href).searchParams.get('review') === '1') {
                window.opener = null;
                window.addEventListener('message', event => {
                    if (['INIT_SESSION', 'INIT_EXAM_SESSION', 'REPLAY_PRACTICE_RECORD', 'REVIEW_CONTEXT'].includes(event.data?.type)) event.stopImmediatePropagation();
                }, true);
            }
        });
        const home = await context.newPage();
        await home.goto(origin + '/Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html');
        await home.locator('[data-daily-action=later]').last().click();
        await home.evaluate(() => window.app.navigateToView('suite'));
        const [page] = await Promise.all([home.waitForEvent('popup'), home.locator('button[data-suite-id="suite-001"]').click()]);
        page.on('dialog', dialog => dialog.accept());
        await page.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__);
        const picks = [];
        for (let i = 0; i < 3; i++) {
            await switchTo(page, i);
            const input = page.locator('#question-groups input[type=radio], #question-groups input[type=text], #question-groups input:not([type])').first();
            if (await input.getAttribute('type') === 'radio') await input.check();
            else await input.fill('answer-' + i);
            const pick = await input.evaluate(node => ({ name: node.name, type: node.type, value: node.value }));
            picks.push(pick);
            await page.evaluate(name => window.setPracticeMarkedQuestions([name]), pick.name);
            await annotate(page, i);
        }
        await page.locator('#submit-btn').click();
        await page.waitForFunction(() => document.body.classList.contains('practice-completed-mode'));
        let record;
        for (let i = 0; i < 100 && !record; i++) {
            record = await home.evaluate(async () => (await window.PracticeCore.store.listPracticeRecords()).find(item => item.suiteEntries?.length === 3));
            if (!record) await home.waitForTimeout(150);
        }
        assert.ok(record, 'complete suite stored');
        await page.close();
        await home.reload();
        await home.evaluate(() => window.app.navigateToView('practice'));
        await home.evaluate(() => window.filterRecordsByStatus('completed'));
        const title = home.locator('[data-record-action=details][data-record-id="' + record.id + '"]');
        await title.waitFor();
        await home.evaluate(() => {
            const fetch = window.practiceHistoryEnhancer.fetchRecordById.bind(window.practiceHistoryEnhancer);
            window.practiceHistoryEnhancer.fetchRecordById = async (...args) => {
                await new Promise(resolve => setTimeout(resolve, 150));
                return fetch(...args);
            };
        });
        const [review] = await Promise.all([home.waitForEvent('popup', { timeout: 15000 }), title.click()]);
        assert.ok(home.url().includes('Jimmy'), 'history must remain open');
        assert.equal(await home.evaluate(() => window.__blockedOpens), 0);
        async function checkAll(target) {
            await target.locator('#question-nav.question-nav--suite').waitFor();
            for (const i of [0, 1, 2, 0]) {
                await switchTo(target, i);
                await check(target, i);
                const pick = picks[i];
                const answer = target.locator('input[name="' + pick.name + '"]' + (pick.type === 'radio' ? ':checked' : ''));
                assert.equal(await answer.inputValue(), pick.value, 'saved answer P' + (i + 1));
                assert.equal(await answer.isDisabled(), true, 'history must be read-only');
                assert.deepEqual(await target.evaluate(() => window.getPracticeMarkedQuestions()), [pick.name]);
            }
            assert.equal(await target.locator('#review-load-status').count(), 0);
        }
        await checkAll(review);
        await review.reload();
        await checkAll(review);
        const replayUrl = review.url();
        const metadataOnly = await home.evaluate(record => {
            const entries = record.suiteEntries;
            delete record.suiteEntries;
            record.metadata.suiteEntries = entries;
            return window.app._buildReviewReplayEntriesFromRecord(record);
        }, record);
        assert.equal(metadataOnly.length, 3, 'legacy metadata-only suite records must keep all passages');
        metadataOnly.forEach((entry, i) => assert.equal(entry.notes[0].comment, 'Passage ' + i + ' 中文笔记'));
        await review.close();
        await home.close();
        const standalone = await context.newPage();
        await standalone.goto(replayUrl);
        await checkAll(standalone);
        await standalone.goto(replayUrl.replace(/reviewSessionId=[^&]+/, 'reviewSessionId=missing'));
        await standalone.locator('#review-load-status').waitFor();
        assert.equal(await standalone.locator('#submit-btn').isDisabled(), true);
        console.log('PASS: actual history click opens complete marked suite under strict popup rules; P1/P2/P3 answers, highlights, notes and flags survive dropped messages, refresh and no opener; legacy nested entries restored.');
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
