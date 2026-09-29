'use strict';
const fs = require('fs');
const path = require('path');
const http = require('http');
const vm = require('vm');
const assert = require('assert/strict');
const { chromium, webkit } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const root = path.resolve(__dirname, '..');
const id = 'p1-high-227';
const answers = ['FALSE', 'TRUE', 'NOT GIVEN', 'TRUE', 'TRUE', 'NOT GIVEN', 'FALSE', 'lecturer', 'whalers', 'Europe', 'merchants', 'fuel', 'climate'];
let exam, explanation;
const context = { window: {
    __READING_EXAM_DATA__: { register: (_, data) => { exam = data; } },
    __READING_EXPLANATION_DATA__: { register: (_, data) => { explanation = data; } }
} };
for (const kind of ['reading-exams', 'reading-explanations']) {
    vm.runInNewContext(fs.readFileSync(path.join(root, 'assets/generated', kind, id + '.js'), 'utf8'), context);
}
const paragraphs = Array.from(exam.passage.blocks[0].html.matchAll(/<p>(.*?)<\/p>/gs), m => m[1]).slice(1);
assert.equal(paragraphs.length, 8, 'all source paragraphs must be present');
assert.ok(paragraphs[3].includes('natural history lecturer'));
assert.ok(paragraphs[3].includes('Show me the fin, and I will name the fish'));
assert.ok(paragraphs[4].startsWith('But this is where the case becomes interesting'));
assert.ok(paragraphs[7].includes('the legacy of Judd'));
assert.equal(exam.questionGroups[0].kind, 'true_false_not_given');
assert.equal(exam.questionGroups[1].kind, 'note_completion');
const items = explanation.questionExplanations.flatMap(group => group.items);
assert.equal(items.length, 13);
for (let n = 1; n <= 13; n++) {
    assert.equal(exam.answerKey['q' + n], answers[n - 1]);
    const item = items.find(item => item.questionId === 'q' + n);
    assert.equal(item.answer, answers[n - 1]);
    assert.ok(paragraphs[Number(item.locating.paragraph) - 1].includes(item.locating.quote), 'Q' + n + ': quote must occur in its stated paragraph');
    if (n >= 8) assert.ok(new RegExp('\\b' + answers[n - 1] + '\\b', 'i').test(paragraphs.join(' ')));
}
const server = http.createServer((req, res) => {
    const file = path.resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (err, body) => {
        if (err) { res.writeHead(404); res.end(); return; }
        res.setHeader('Content-Type', file.endsWith('.js') ? 'text/javascript' : file.endsWith('.html') ? 'text/html' : file.endsWith('.css') ? 'text/css' : 'application/octet-stream');
        res.end(body);
    });
});
(async () => {
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    const useWebKit = process.env.TEST_BROWSER === 'webkit';
    const browser = await (useWebKit ? webkit : chromium).launch(useWebKit ? { headless: true } : { headless: true, channel: 'msedge' });
    try {
        for (const q8 of ['lecturer', 'scientist']) {
            const page = await browser.newPage();
            page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
            page.on('dialog', dialog => dialog.accept());
            await page.goto('http://127.0.0.1:' + server.address().port + '/assets/generated/reading-exams/reading-practice-unified.html?examId=' + id);
            await page.waitForFunction(() => window.OfflineReady && document.querySelector('[name=q8]'));
            assert.equal(await page.locator('#reset-btn').count(), 0);
            for (let n = 1; n <= 13; n++) {
                const answer = n === 8 ? q8 : answers[n - 1];
                if (n <= 7) await page.locator(`input[name=q${n}][value="${answer}"]`).check();
                else await page.locator(`input[name=q${n}]`).fill(answer);
            }
            await page.evaluate(() => {
                const queue = window.OfflineReady.queueCompletion;
                window.OfflineReady.queueCompletion = envelope => {
                    window.__whaleSubmission = JSON.parse(JSON.stringify(envelope.data));
                    return queue(envelope);
                };
            });
            // Finish editing before clicking the fixed footer, including WebKit's focus scroll.
            await page.locator('[name=q13]').press('Tab');
            await page.locator('#submit-btn').click();
            try { await page.waitForFunction(() => window.__whaleSubmission); }
            catch (error) {
                console.error('SUBMISSION:', q8, await page.evaluate(() => ({
                    bodyClass: document.body.className,
                    button: document.getElementById('submit-btn')?.outerHTML,
                    results: document.getElementById('results')?.innerText,
                    queue: localStorage.getItem('ielts_offline_completion_queue_v1')?.slice(0, 300)
                })));
                throw error;
            }
            const result = await page.evaluate(() => window.__whaleSubmission);
            assert.equal(result.answerComparison.q8.isCorrect, q8 === 'lecturer');
            assert.equal(Object.values(result.answerComparison).filter(item => item.isCorrect).length, q8 === 'lecturer' ? 13 : 12);
            const q8Card = page.locator('.reading-question-explanation[data-question-id=q8]');
            await q8Card.waitFor();
            assert.ok((await q8Card.innerText()).includes('lecturer'));
            assert.ok(await page.locator('#left .locating-mark[data-question~=q8]').count() > 0);
            await page.close();
        }
        console.log('PASS: complete Whale passage; 13 evidence-linked explanations; lecturer scores 13/13 and scientist scores 12/13; review location rendered.');
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => server.close());



