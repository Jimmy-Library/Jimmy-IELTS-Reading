(function initSuiteResources(global) {
    'use strict';
    const currentScript = document.currentScript;
    const root = new URL('../../', currentScript.src);
    const scripts = new Map();
    const pending = new Map();
    let dbPromise;

    function loadScript(path) {
        const url = new URL(path, root).href;
        if (scripts.has(url)) return scripts.get(url);
        const promise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            const timer = global.setTimeout(() => finish(new Error('资源加载超时，请重试')), 25000);
            function finish(error) {
                global.clearTimeout(timer);
                script.onload = script.onerror = null;
                script.remove();
                if (error) { scripts.delete(url); reject(error); } else resolve();
            }
            script.src = url;
            script.onload = () => finish();
            script.onerror = () => finish(new Error('套题资源未下载完整，请联网重试'));
            document.head.appendChild(script);
        });
        scripts.set(url, promise);
        return promise;
    }

    function database() {
        if (!dbPromise) dbPromise = new Promise((resolve) => {
            if (!global.indexedDB) return resolve(null);
            const timer = global.setTimeout(() => resolve(null), 3000);
            try {
                const request = global.indexedDB.open('JimmyReadingSuiteResources', 1);
                request.onupgradeneeded = () => {
                    if (!request.result.objectStoreNames.contains('suites')) request.result.createObjectStore('suites', { keyPath: 'key' });
                };
                request.onsuccess = () => { global.clearTimeout(timer); request.result.onversionchange = () => request.result.close(); resolve(request.result); };
                request.onerror = request.onblocked = () => { global.clearTimeout(timer); resolve(null); };
            } catch (_) { global.clearTimeout(timer); resolve(null); }
        });
        return dbPromise;
    }

    async function readBundle(key) {
        const db = await database();
        if (db) {
            const result = await new Promise((resolve) => {
                try {
                    const request = db.transaction('suites').objectStore('suites').get(key);
                    request.onsuccess = () => resolve(request.result || null);
                    request.onerror = () => resolve(null);
                } catch (_) { resolve(null); }
            });
            if (result) return result;
        }
        try { return JSON.parse(global.sessionStorage.getItem('ielts_suite_resources::' + key) || 'null'); } catch (_) { return null; }
    }

    async function saveBundle(bundle) {
        const db = await database();
        if (db) {
            const saved = await new Promise((resolve) => {
                try {
                    const tx = db.transaction('suites', 'readwrite');
                    tx.objectStore('suites').put(bundle);
                    tx.oncomplete = () => resolve(true);
                    tx.onerror = tx.onabort = () => resolve(false);
                } catch (_) { resolve(false); }
            });
            if (saved) return;
        }
        try { global.sessionStorage.setItem('ielts_suite_resources::' + bundle.key, JSON.stringify(bundle)); } catch (_) { /* In-memory bundle still supports all three passages. */ }
    }

    function validDataset(data, examId) {
        return Boolean(data && data.examId === examId && data.passage && Array.isArray(data.passage.blocks)
            && data.passage.blocks.length && Array.isArray(data.questionGroups) && data.questionGroups.length
            && Array.isArray(data.questionOrder) && data.questionOrder.length && data.answerKey
            && data.questionOrder.every((id) => Object.prototype.hasOwnProperty.call(data.answerKey, id)));
    }

    async function prepare(examIds) {
        const ids = Array.isArray(examIds) ? examIds.map(String) : [];
        if (ids.length !== 3 || new Set(ids).size !== 3) throw new Error('套题必须包含固定的三篇题目');
        const key = '2026-09-05::' + ids.join('|');
        if (pending.has(key)) return pending.get(key);
        const task = (async () => {
            if (!global.__READING_EXAM_DATA__) await loadScript('js/runtime/readingExamRegistry.js');
            if (!global.__READING_EXAM_MANIFEST__) await loadScript('assets/generated/reading-exams/manifest.js');
            const registry = global.__READING_EXAM_DATA__;
            const stored = await readBundle(key);
            const complete = stored && Array.isArray(stored.datasets) && stored.datasets.length === 3
                && stored.datasets.every((data, i) => validDataset(data, ids[i]));
            if (complete) stored.datasets.forEach((data, i) => { if (!registry.has(ids[i])) registry.register(ids[i], data); });
            const datasets = await Promise.all(ids.map(async (id) => {
                const entry = global.__READING_EXAM_MANIFEST__[id];
                if (!entry) throw new Error('题库中未找到套题篇目：' + id);
                if (!registry.has(entry.dataKey)) {
                    await loadScript(new URL(entry.script, new URL('assets/generated/reading-exams/', root)).href);
                }
                const data = registry.get(entry.dataKey);
                if (!validDataset(data, id)) throw new Error('套题正文或答案不完整：' + id);
                return data;
            }));
            const bundle = { key, examIds: ids, datasets };
            if (!complete) await saveBundle(bundle);
            // Keep only the current suite in memory; other prepared suites live
            // on disk and can be restored when the learner resumes them.
            if (typeof registry.retain === 'function') registry.retain(ids);
            return bundle;
        })();
        pending.set(key, task);
        try { return await task; } finally { pending.delete(key); }
    }

    global.SuiteResources = { prepare, validDataset };
})(window);
