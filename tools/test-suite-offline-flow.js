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
        await practice.locator('#question-groups input[type=radio]').first().check();
        await practice.locator('#submit-btn').click();
        await practice.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[1]);
        await practice.locator('#submit-btn').click();
        await practice.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[2]);
        await practice.locator('#submit-btn').click();
        await home.waitForFunction(async () => (await window.storage.get('practice_records', [])).some(record => record.practiceMode === 'suite' || record.suiteSessionId || record.metadata?.practiceMode === 'suite'), { timeout: 20000 });
        console.log('PASS: real homepage later button dismisses; suite launches and submits through the host with all three sections saved.');
        await hostContext.close();
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());
