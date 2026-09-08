'use strict';

const fs = require('fs');
const path = require('path');
const http = require('http');
const assert = require('assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

const root = path.resolve(__dirname, '..');
const server = http.createServer((req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const filename = path.resolve(root, '.' + pathname);
    if (!filename.startsWith(root + path.sep)) {
        res.writeHead(403);
        res.end();
        return;
    }
    fs.readFile(filename, (error, body) => {
        if (error) {
            res.writeHead(404);
            res.end();
            return;
        }
        res.setHeader('Content-Type', filename.endsWith('.js')
            ? 'text/javascript'
            : (filename.endsWith('.css') ? 'text/css' : (filename.endsWith('.html') ? 'text/html' : 'application/octet-stream')));
        res.end(body);
    });
});

(async () => {
    await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
    const origin = 'http://127.0.0.1:' + server.address().port;
    const browser = await chromium.launch({ channel: 'msedge', headless: true });
    try {
        const context = await browser.newContext();
        await context.addInitScript(() => {
            localStorage.setItem('onboardingCompleted_v2', 'true');
            localStorage.setItem('hasSeenGplLicense', 'true');
            localStorage.setItem('daily_suite_prompt_date_v1', new Date().toISOString().slice(0, 10));
        });
        const page = await context.newPage();
        const pageErrors = [];
        page.on('pageerror', (error) => pageErrors.push(error.message));
        await page.goto(origin + '/Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html');
        await page.waitForFunction(() => window.SuiteCatalog && window.SuiteResources);
        const result = await page.evaluate(async () => {
            const suites = window.SuiteCatalog.getCatalog();
            const failures = [];
            for (const suite of suites) {
                try {
                    const bundle = await window.SuiteResources.prepare(suite.examIds);
                    if (!bundle || !Array.isArray(bundle.datasets) || bundle.datasets.length !== 3) {
                        failures.push(suite.id + ': incomplete bundle');
                    }
                } catch (error) {
                    failures.push(suite.id + ': ' + (error && error.message ? error.message : String(error)));
                }
            }
            // 再次打开第一套，覆盖题目数据被 retain 清理后重新注册的场景。
            try {
                await window.SuiteResources.prepare(suites[0].examIds);
            } catch (error) {
                failures.push('suite-001-reopen: ' + (error && error.message ? error.message : String(error)));
            }
            return { count: suites.length, failures };
        });
        assert.equal(result.count, 100);
        assert.deepEqual(result.failures, []);
        assert.deepEqual(pageErrors, []);
        console.log('PASS: all 100 fixed suites load three complete passages and can reopen evicted resources.');
        await context.close();
    } finally {
        await browser.close();
        server.close();
    }
})().catch((error) => {
    console.error(error);
    process.exitCode = 1;
    server.close();
});
