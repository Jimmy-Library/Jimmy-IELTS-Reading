#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const projectRoot = path.resolve(__dirname, '..');
const examDir = path.join(projectRoot, 'assets', 'generated', 'reading-exams');
const explanationDir = path.join(projectRoot, 'assets', 'generated', 'reading-explanations');
const sourceFile = process.argv[2];

if (!sourceFile || !fs.existsSync(sourceFile)) {
    throw new Error('Usage: node tools/import-zyz-reading-explanations.js <PASSAGE-by-ZYZ...html>');
}

function evaluateFile(file, registryName) {
    let payload = null;
    const registry = { register(_key, value) { payload = value; } };
    const context = {
        window: { [registryName]: registry },
        globalThis: { [registryName]: registry },
        [registryName]: registry
    };
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), context, { filename: file });
    return payload;
}

function loadManifest() {
    const context = { window: {} };
    const source = fs.readFileSync(path.join(examDir, 'manifest.js'), 'utf8');
    vm.runInNewContext(source, context);
    return context.window.__READING_EXAM_MANIFEST__ || {};
}

function loadZyzLibrary(file) {
    const wrapper = fs.readFileSync(file, 'utf8');
    const match = wrapper.match(/<script id="zyz-integrity-payload"[^>]*>([A-Za-z0-9+/=]+)<\/script>/);
    if (!match) throw new Error('ZYZ integrity payload not found');
    const html = Buffer.from(match[1], 'base64').toString('utf8');
    const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/g)].map((item) => item[1]);
    const libraryScript = scripts.find((item) => item.startsWith('window.__STUDENT_LIBRARY__'));
    if (!libraryScript) throw new Error('ZYZ student library not found');
    const context = { window: {} };
    vm.runInNewContext(libraryScript, context);
    return context.window.__STUDENT_LIBRARY__;
}

function normalizeTitle(value) {
    return String(value || '')
        .normalize('NFKD')
        .replace(/[\u3400-\u9fff【】（）]/g, ' ')
        .replace(/&/g, ' and ')
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .trim()
        .toLowerCase()
        .replace(/\b(the|a|an)\b/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function questionNumberMap(source) {
    const responseById = new Map((source.responseSlots || []).map((slot) => [slot.responseSlotId, slot]));
    const scoreById = new Map((source.scoreSlots || []).map((slot) => [slot.scoreSlotId, slot]));
    const result = new Map();
    (source.reviewEntries || []).forEach((entry) => {
        const score = scoreById.get(entry.scoreSlotId);
        const response = score && responseById.get((score.responseSlotIds || [])[0]);
        const number = Number(response && response.displayNumber);
        if (Number.isFinite(number)) result.set(number, entry);
    });
    return result;
}

function answerText(value) {
    if (Array.isArray(value)) return value.join(' / ');
    if (value == null || value === '') return '—';
    return String(value);
}

function reviewText(entry, correctAnswer) {
    const lines = [];
    const translation = entry.questionTranslation
        || (entry.extensions && entry.extensions.zhReviewV01 && entry.extensions.zhReviewV01.questionTranslation);
    if (translation) lines.push('题目翻译：' + translation);
    lines.push('答案：' + answerText(correctAnswer));
    (entry.evidence || []).forEach((evidence, index) => {
        const prefix = (entry.evidence || []).length > 1 ? '定位 ' + (index + 1) : '定位';
        const location = evidence.location ? '（' + evidence.location + '）' : '';
        if (evidence.quote) lines.push(prefix + location + '：' + evidence.quote);
        if (evidence.translation) lines.push('原文译文：' + evidence.translation);
    });
    if (entry.explanation) lines.push('解析：' + entry.explanation);
    if (Array.isArray(entry.distractors) && entry.distractors.length) {
        lines.push('干扰项：' + entry.distractors.join('；'));
    }
    return lines.join('\n');
}

function makeExplanation(examId, dataset, source, sourceName) {
    const reviews = questionNumberMap(source);
    const displayMap = dataset.questionDisplayMap || {};
    const sections = (dataset.questionGroups || []).map((group) => {
        const pairs = (group.questionIds || []).map((questionId) => {
            const match = String(displayMap[questionId] || questionId).match(/\d+/);
            const number = match ? Number(match[0]) : NaN;
            const entry = reviews.get(number);
            return {
                questionId,
                questionNumber: number,
                text: entry ? reviewText(entry, dataset.answerKey && dataset.answerKey[questionId]) : ''
            };
        }).filter((item) => Number.isFinite(item.questionNumber) && item.text);
        if (!pairs.length) return null;
        const numbers = pairs.map((item) => item.questionNumber);
        const splitKinds = new Set([
            'single_choice',
            'multi_choice',
            'true_false_not_given',
            'yes_no_not_given'
        ]);
        const split = splitKinds.has(group.kind);
        return {
            sectionTitle: 'Questions ' + Math.min(...numbers) + '–' + Math.max(...numbers) + ' 逐题解析',
            mode: split ? 'per_question' : 'group',
            questionRange: { start: Math.min(...numbers), end: Math.max(...numbers) },
            text: split ? '' : pairs.map((item) => 'Q' + item.questionNumber + '\n' + item.text).join('\n\n'),
            items: pairs
        };
    }).filter(Boolean);
    return {
        schemaVersion: 'ReadingExplanationV1',
        examId,
        meta: {
            examId,
            title: dataset.meta && dataset.meta.title,
            category: dataset.meta && dataset.meta.category,
            sourceDoc: path.basename(sourceName),
            noteType: '逐题解析',
            matchedTitle: source.title + (source.titleZh ? ' ' + source.titleZh : '')
        },
        passageNotes: [],
        questionExplanations: sections
    };
}

function explanationSource(examId, payload) {
    return [
        '(function registerReadingExplanationData(global) {',
        "  'use strict';",
        '  if (!global.__READING_EXPLANATION_DATA__ || typeof global.__READING_EXPLANATION_DATA__.register !== "function") {',
        '    throw new Error("reading_explanation_registry_missing");',
        '  }',
        '  global.__READING_EXPLANATION_DATA__.register(' + JSON.stringify(examId) + ', ' + JSON.stringify(payload, null, 2) + ');',
        '})(typeof window !== "undefined" ? window : globalThis);',
        ''
    ].join('\n');
}

function rebuildManifest() {
    const entries = {};
    fs.readdirSync(explanationDir)
        .filter((file) => /^p[123]-.+\.js$/i.test(file))
        .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
        .forEach((file) => {
            const examId = file.replace(/\.js$/i, '');
            const payload = evaluateFile(path.join(explanationDir, file), '__READING_EXPLANATION_DATA__');
            if (!payload) return;
            entries[examId] = {
                examId,
                dataKey: examId,
                script: '../reading-explanations/' + file,
                title: payload.meta && payload.meta.title ? payload.meta.title : examId
            };
        });
    const output = [
        '(function registerReadingExplanationManifest(global) {',
        "  'use strict';",
        '  global.__READING_EXPLANATION_MANIFEST__ = ' + JSON.stringify(entries, null, 2) + ';',
        '})(typeof window !== "undefined" ? window : globalThis);',
        ''
    ].join('\n');
    fs.writeFileSync(path.join(explanationDir, 'manifest.js'), output, 'utf8');
    return Object.keys(entries).length;
}

const manualAliases = new Map([
    ['passage.b007.p1-061.the-last-man-who-knew-everything', ['p1-low-113']],
    ['passage.b007.p2-050.how-well-do-people-concentrate', ['p2-high-128']],
    ['passage.b006.p3-025.jean-piaget', ['p3-medium-162']]
]);

const library = loadZyzLibrary(sourceFile);
const manifest = loadManifest();
const byTitle = new Map();
Object.values(manifest).forEach((entry) => {
    const key = normalizeTitle(entry.title);
    if (!byTitle.has(key)) byTitle.set(key, []);
    byTitle.get(key).push(entry);
});

const imported = [];
const skipped = [];
for (const source of library.sources || []) {
    const direct = byTitle.get(normalizeTitle(source.title)) || [];
    const aliases = (manualAliases.get(source.passageId) || [])
        .map((examId) => manifest[examId])
        .filter(Boolean);
    const candidates = [...new Map([...direct, ...aliases].map((entry) => [entry.examId, entry])).values()];
    let importedForSource = 0;
    for (const entry of candidates) {
        const outputFile = path.join(explanationDir, entry.examId + '.js');
        const examFile = path.join(examDir, path.basename(entry.script || ''));
        if (fs.existsSync(outputFile) || !fs.existsSync(examFile)) continue;
        const dataset = evaluateFile(examFile, '__READING_EXAM_DATA__');
        if (!dataset || (dataset.questionOrder || []).length !== (source.reviewEntries || []).length) continue;
        const payload = makeExplanation(entry.examId, dataset, source, sourceFile);
        if (!payload.questionExplanations.length) continue;
        fs.writeFileSync(outputFile, explanationSource(entry.examId, payload), 'utf8');
        imported.push({ examId: entry.examId, title: entry.title, questions: source.reviewEntries.length });
        importedForSource += 1;
    }
    if (!importedForSource && !candidates.some((entry) => fs.existsSync(path.join(explanationDir, entry.examId + '.js')))) {
        skipped.push({
            passageId: source.passageId,
            title: source.title,
            reason: candidates.length ? 'no-compatible-local-exam' : 'no-title-match'
        });
    }
}

const manifestCount = rebuildManifest();
console.log(JSON.stringify({
    importedCount: imported.length,
    imported,
    manifestCount,
    skippedCount: skipped.length,
    skipped
}, null, 2));
