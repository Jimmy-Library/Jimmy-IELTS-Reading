'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const { chromium, webkit } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = process.env.TEST_SOURCE_ROOT || path.resolve(__dirname, '..');
const server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (err, body) => {
        if (err) { res.writeHead(404); res.end(); return; }
        res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.html') ? 'text/html' : file.endsWith('.css') ? 'text/css' : 'application/octet-stream');
        res.end(body);
    });
});

async function openFrom(home, selector) {
    const button = home.locator(selector).first();
    try { await button.waitFor(); }
    catch (error) { console.error('LAUNCH', selector, await home.locator('body').innerText()); throw error; }
    const [page] = await Promise.all([home.waitForEvent('popup', { timeout: 15000 }), button.click()]);
    page.on('dialog', dialog => dialog.accept());
    await page.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__);
    assert.ok(home.url().includes('Jimmy'), 'the library must remain in its original tab');
    assert.equal(await home.evaluate(() => window.__blockedOpens), 0, 'all opens must occur during the user gesture');
    return page;
}

async function submit(page) {
    await page.locator('[data-passage-index="2"]').first().click();
    await page.waitForFunction(() => document.getElementById('exam-part-label').textContent.includes('3'));
    await page.locator('#submit-btn').click();
    await page.waitForFunction(() => document.body.classList.contains('practice-completed-mode'));
}

async function assertCompleted(home, suiteId) {
    await home.waitForFunction(() => typeof window.collectIncompleteDrafts === 'function');
    let state;
    for (let attempt = 0; attempt < 120; attempt++) {
        state = await home.evaluate(async id => ({
            rows: (await window.PracticeCore.store.listPracticeRecords()).filter(row => row.metadata?.suiteSessionId === id),
            drafts: window.collectIncompleteDrafts().filter(draft => draft.suiteSessionId === id),
            pending: JSON.parse(localStorage.getItem('ielts_offline_completion_queue_v1') || '[]').length
        }), suiteId);
        if (state.rows.length && !state.drafts.length && !state.pending) break;
        await home.waitForTimeout(150);
    }
    if (!state.rows.length || state.drafts.length || state.pending) console.error('RECORD STATE', suiteId, JSON.stringify(state));
    assert.equal(state.rows.length, 1, 'one complete record per attempt, including repeated recovery');
    assert.equal(state.rows[0].suiteEntries.length, 3);
    assert.equal(state.rows[0].totalQuestions, 40);
    assert.deepEqual(state.drafts, [], 'completed attempts must disappear from unfinished history');
    assert.equal(state.pending, 0, 'queue must be acknowledged only after saving');
}

(async () => {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const useWebKit = process.env.TEST_BROWSER === 'webkit';
    const browser = await (useWebKit ? webkit : chromium).launch(useWebKit ? { headless: true } : { headless: true, channel: 'msedge' });
    try {
        const context = await browser.newContext();
        await context.addInitScript(() => {
            localStorage.setItem('onboardingCompleted_v2', 'true');
            localStorage.setItem('hasSeenGplLicense', 'true');
            window.addEventListener('message', event => {
                if (window.__dropCompletionMessages && event.data?.type === 'SIMULATION_SUBMIT') event.stopImmediatePropagation();
            }, true);
            // Reproduce Safari's stricter popup policy even in headless test runners.
            let gesture = false;
            window.__blockedOpens = 0;
            document.addEventListener('click', () => {
                gesture = true;
                setTimeout(() => { gesture = false; }, 0);
            }, true);
            const nativeOpen = window.open.bind(window);
            window.open = (...args) => {
                if (!gesture) { window.__blockedOpens++; return null; }
                return nativeOpen(...args);
            };
        });
        const url = 'http://127.0.0.1:' + server.address().port + '/Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html';
        let home = await context.newPage();
        await home.goto(url);
        await home.locator('[data-daily-action=start]').waitFor();
        await home.evaluate(() => {
            const prepare = window.SuiteResources.prepare.bind(window.SuiteResources);
            window.SuiteResources.prepare = async (...args) => {
                await new Promise(resolve => setTimeout(resolve, 100));
                return prepare(...args);
            };
        });
        let page = await openFrom(home, '[data-daily-action=start]');
        const suiteId = await page.evaluate(() => new URL(location.href).searchParams.get('suiteSessionId'));
        const answerInput = page.locator('#question-groups input[type=radio], #question-groups input[type=text], #question-groups input:not([type])').first();
        const answerType = await answerInput.getAttribute('type');
        if (answerType === 'radio') await answerInput.check();
        else await answerInput.fill('saved answer');
        const answer = await answerInput.evaluate(node => ({ name: node.name, value: node.value, type: node.type }));
        await page.waitForTimeout(900);
        await page.close();
        await home.reload();
        await home.evaluate(() => window.app.navigateToView('practice'));
        await home.evaluate(() => window.filterRecordsByStatus('incomplete'));
        page = await openFrom(home, '[data-record-action=resume-draft]');
        assert.equal(await page.evaluate(() => new URL(location.href).searchParams.get('suiteSessionId')), suiteId);
        assert.equal(await page.locator('input[name="' + answer.name + '"]' + (answer.type === 'radio' ? ':checked' : '')).inputValue(), answer.value);
        // Simulate a suspended/reloaded library losing the live message and session.
        await home.evaluate(() => { window.__dropCompletionMessages = true; window.app.currentSuiteSession = null; });
        await home.evaluate(() => {
            window.__savedSuiteWriter = window.app._saveSuitePracticeRecord;
            window.__saveAttempts = 0;
            window.app._saveSuitePracticeRecord = async () => { window.__saveAttempts++; throw new Error('test: storage unavailable'); };
            localStorage.setItem('ielts_suite_progress::unrelated', JSON.stringify({ id: 'unrelated', sequence: [] }));
        });
        await submit(page);
        await home.waitForFunction(() => window.__saveAttempts > 0);
        assert.equal(await home.evaluate(async () => {
            const data = window.OfflineReady.listPendingCompletions()[0].envelope.data;
            return window.app.handlePracticeComplete(data.examId, data);
        }), false, 'a failed complete-suite save must not fall back to one passage');
        assert.equal(await home.evaluate(id => !!localStorage.getItem('ielts_suite_progress::' + id), suiteId), true);
        assert.equal(await home.evaluate(() => window.OfflineReady.listPendingCompletions().length), 1);
        await home.evaluate(() => {
            window.app._saveSuitePracticeRecord = window.__savedSuiteWriter;
            window.dispatchEvent(new Event('focus'));
        });
        await assertCompleted(home, suiteId);
        assert.equal(await home.evaluate(() => !!localStorage.getItem('ielts_suite_progress::unrelated')), true);
        // Old versions could leave a completed attempt in unfinished history after acknowledgement.
        await home.evaluate(id => {
            localStorage.setItem('ielts_suite_progress::' + id, JSON.stringify({ id, sequence: [] }));
            localStorage.setItem('ielts_suite_draft::' + id + '::p1', JSON.stringify({ draft: { answers: { q1: 'A' } } }));
            localStorage.removeItem('ielts_suite_progress::unrelated');
        }, suiteId);
        await home.evaluate(() => Promise.all([recoverOfflinePracticeCompletions(), recoverOfflinePracticeCompletions()]));
        await assertCompleted(home, suiteId);
        await page.close();

        // Also reproduce the old same-tab fallback, where the library no longer exists.
        await home.evaluate(() => window.app.navigateToView('suite'));
        page = await openFrom(home, 'button[data-suite-id="suite-001"]');
        const secondId = await page.evaluate(() => new URL(location.href).searchParams.get('suiteSessionId'));
        const practiceUrl = page.url();
        const sessionData = await page.evaluate(() => Object.fromEntries(Object.entries(sessionStorage)));
        await page.close();
        await home.evaluate(data => { for (const [key, value] of Object.entries(data)) sessionStorage.setItem(key, value); }, sessionData);
        await home.goto(practiceUrl);
        page = home;
        page.on('dialog', dialog => dialog.accept());
        await page.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__);
        await submit(page);
        await page.waitForFunction(() => JSON.parse(localStorage.getItem('ielts_offline_completion_queue_v1') || '[]').length === 1);
        await page.close();
        home = await context.newPage();
        await home.goto(url);
        await assertCompleted(home, secondId);
        await home.reload();
        await home.evaluate(() => window.app.navigateToView('practice'));
        await assertCompleted(home, secondId);
        console.log('PASS: daily and history-resume open separate tabs under strict popup rules; disconnected and same-tab submissions recover one complete 40-question record and remove all unfinished drafts.');
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
