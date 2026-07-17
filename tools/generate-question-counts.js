/**
 * 生成 assets/generated/reading-question-counts.js
 *
 * 套题模式需要按题量筛选篇目（P1=13 / P2=13 / P3=14，合计 40 题），
 * 但题库浏览页不会载入全部题目 JS，无法在运行时统计题量，
 * 故在构建期把「examId -> 题量」固化成一份数据。
 *
 * 用法：node tools/generate-question-counts.js
 */
'use strict';

const fs = require('fs');
const path = require('path');

const EXAM_DIR = path.join(__dirname, '..', 'assets', 'generated', 'reading-exams');
const OUT_FILE = path.join(__dirname, '..', 'assets', 'generated', 'reading-question-counts.js');

function main() {
    const g = globalThis;
    g.window = g;
    const registry = {};
    g.__READING_EXAM_DATA__ = {
        register(key, value) { registry[key] = value; },
        get(key) { return registry[key]; }
    };

    const files = fs.readdirSync(EXAM_DIR).filter((f) => /^p\d-.*\.js$/.test(f));
    let failed = 0;
    for (const file of files) {
        try {
            require(path.join(EXAM_DIR, file));
        } catch (error) {
            failed += 1;
            console.warn('[question-counts] 载入失败:', file, error.message);
        }
    }

    const counts = {};
    Object.keys(registry).sort().forEach((examId) => {
        const data = registry[examId];
        const order = data && Array.isArray(data.questionOrder) ? data.questionOrder : null;
        if (order) counts[examId] = order.length;
    });

    const body = Object.keys(counts)
        .map((id) => '    ' + JSON.stringify(id) + ': ' + counts[id])
        .join(',\n');

    const output = `/**
 * 阅读题目题量（自动生成，请勿手动编辑）
 * 生成方式：node tools/generate-question-counts.js
 * 结构：window.__READING_EXAM_QUESTION_COUNTS__ = { examId: 题量 }
 */
(function registerReadingQuestionCounts(global) {
  'use strict';
  global.__READING_EXAM_QUESTION_COUNTS__ = {
${body}
  };
})(typeof window !== "undefined" ? window : globalThis);
`;

    fs.writeFileSync(OUT_FILE, output, 'utf8');
    console.log('已写入', path.relative(path.join(__dirname, '..'), OUT_FILE));
    console.log('篇目数:', Object.keys(counts).length, '载入失败:', failed);
}

main();
