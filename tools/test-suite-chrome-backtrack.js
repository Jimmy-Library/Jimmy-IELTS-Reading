'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const root = path.resolve(__dirname, '..');
const ids = ['p1-low-1038', 'p2-high-16', 'p3-high-89'];
const sessionId = 'chrome-backtrack-regression';
const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const filename = path.resolve(root, '.' + pathname);
    if (!filename.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    fs.readFile(filename, (error, body) => {
        if (error) { res.writeHead(404); res.end(); return; }
        res.setHeader('Content-Type', filename.endsWith('.js') ? 'text/javascript' : filename.endsWith('.html') ? 'text/html' : filename.endsWith('.css') ? 'text/css' : 'application/octet-stream');
        res.end(body);
    });
});

(async () => {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const origin = `http://127.0.0.1:${server.address().port}`;
    let browser;
    try { browser = await chromium.launch({ channel: 'chrome', headless: true }); }
    catch { browser = await chromium.launch({ headless: true }); }
    try {
        const context = await browser.newContext();
        const page = await context.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        await page.goto(origin + '/Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html');
        await page.evaluate(({ ids, sessionId }) => {
            localStorage.setItem(`ielts_suite_progress::${sessionId}`, JSON.stringify({
                id: sessionId, kind: 'suite', title: 'Chrome backtrack', lockedExamIds: ids,
                sequence: ids.map(examId => ({ examId, exam: { id: examId } })),
                currentIndex: 0, draftsByExam: {}, elapsedByExam: {}, elapsed: 0
            }));
        }, { ids, sessionId });
        const query = new URLSearchParams({
            examId: ids[0], suiteSessionId: sessionId, suiteFlowMode: 'simulation',
            suiteSequenceIndex: '0', suiteSequenceTotal: '3', suiteSequenceExamIds: ids.join(','),
            suiteTimerMode: 'elapsed', suiteTimerAnchorMs: String(Date.now())
        });
        await page.goto(origin + '/assets/generated/reading-exams/reading-practice-unified.html?' + query);
        await page.waitForFunction(() => window.__UNIFIED_SUITE_LOCAL_READY__ === true);

        const p1 = page.locator('#question-groups input[type=radio]').first();
        await p1.check();
        const p1Picked = await p1.evaluate(node => ({ name: node.name, value: node.value }));
        await page.locator('#submit-btn').click();
        await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[1]);

        // Legacy Chrome tabs may hold a newer snapshot with only blank values.
        // Its timestamp must not let it erase the real, answered progress.
        await page.evaluate(({ sessionId, ids }) => {
            const answers = Object.fromEntries(Array.from({ length: 14 }, (_, index) => [`q${index + 1}`, '']));
            const savedAt = Date.now() + 60000;
            const emptySnapshot = {
                draft: { answers, highlights: [], notes: [], markedQuestions: [] },
                savedAt, updatedAt: savedAt, sequenceExamIds: ids
            };
            localStorage.setItem(`ielts_suite_draft::${sessionId}::${ids[0]}`, JSON.stringify(emptySnapshot));
            sessionStorage.setItem(`ielts_sim_draft::${sessionId}::${ids[0]}`, JSON.stringify(emptySnapshot));
        }, { sessionId, ids });

        const grouped = page.locator('#question-groups input[type=checkbox]').filter({ hasNot: page.locator('[disabled]') });
        assert.ok(await grouped.count() > 0, 'suite-006 P2 must contain grouped checkboxes');
        const first = grouped.first();
        const groupName = await first.getAttribute('name');
        const sameGroup = page.locator(`#question-groups input[type=checkbox][name="${groupName}"]`);
        await sameGroup.nth(0).check();
        if (await sameGroup.count() > 1) await sameGroup.nth(1).check();
        const p2Values = await sameGroup.evaluateAll(nodes => nodes.filter(node => node.checked).map(node => node.value));
        assert.ok(p2Values.length > 0);

        await page.locator('#submit-btn').click();
        await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[2]);
        const p3 = page.locator('#question-groups input[type=radio]').first();
        await p3.check();
        const p3Picked = await p3.evaluate(node => ({ name: node.name, value: node.value }));

        for (let cycle = 0; cycle < 3; cycle += 1) {
            await page.locator('[data-passage-index="0"]').first().click();
            await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[0]);
            assert.equal(await page.locator(`input[name="${p1Picked.name}"]:checked`).inputValue(), p1Picked.value);

            await page.locator('[data-passage-index="1"]').first().click();
            await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[1]);
            assert.deepEqual(await page.locator(`#question-groups input[type=checkbox][name="${groupName}"]:checked`).evaluateAll(nodes => nodes.map(node => node.value)), p2Values);

            await page.locator('[data-passage-index="2"]').first().click();
            await page.waitForFunction(id => new URL(location.href).searchParams.get('examId') === id, ids[2]);
            assert.equal(await page.locator(`input[name="${p3Picked.name}"]:checked`).inputValue(), p3Picked.value);
        }

        const saved = await page.evaluate(({ sessionId, ids }) => {
            const session = JSON.parse(localStorage.getItem(`ielts_suite_progress::${sessionId}`) || '{}');
            return ids.map(id => Object.keys(session.draftsByExam?.[id]?.answers || {}).length);
        }, { sessionId, ids });
        assert.ok(saved.every(count => count > 0), `all passages must retain answers: ${saved.join(',')}`);
        assert.deepEqual(errors, []);
        console.log(`PASS Chrome: P1/P2 grouped/P3 answers survived three backward-forward navigation cycles; saved=${saved.join(',')}`);
        await context.close();
    } finally {
        await browser.close();
        server.close();
    }
})().catch(error => { console.error(error); process.exitCode = 1; });
