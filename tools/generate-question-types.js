/**
 * Generate assets/generated/reading-question-types.js.
 *
 * Existing manually reviewed classifications are preserved. Exams missing from
 * the index are inferred from question-group metadata and instructions. IDs
 * recorded in autoDetectedExamIds are re-inferred on every run, so edits to a
 * newly added exam remain in sync.
 *
 * Usage:
 *   node tools/generate-question-types.js
 *   node tools/generate-question-types.js --check
 */
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const EXAM_DIR = path.join(ROOT, 'assets', 'generated', 'reading-exams');
const OUT_FILE = path.join(ROOT, 'assets', 'generated', 'reading-question-types.js');

const TYPE_DEFINITIONS = [
    { key: 'mc', cn: '单选/多选', en: 'Multiple Choice' },
    { key: 'tfng', cn: '判断 TFNG', en: 'True / False / Not Given' },
    { key: 'ynng', cn: '观点 YNNG', en: 'Yes / No / Not Given' },
    { key: 'matching-info', cn: '段落信息匹配', en: 'Matching Information' },
    { key: 'matching-headings', cn: '标题匹配', en: 'Matching Headings' },
    { key: 'matching-features', cn: '特征匹配', en: 'Matching Features' },
    { key: 'matching-endings', cn: '句子结尾匹配', en: 'Matching Sentence Endings' },
    { key: 'sentence', cn: '句子填空', en: 'Sentence Completion' },
    { key: 'summary-list', cn: '摘要填空(有选项)', en: 'Summary (word list)' },
    { key: 'summary-passage', cn: '摘要填空(无选项)', en: 'Summary (from passage)' },
    { key: 'note', cn: '笔记填空', en: 'Note Completion' },
    { key: 'table', cn: '表格填空', en: 'Table Completion' },
    { key: 'flowchart', cn: '流程图填空', en: 'Flowchart Completion' },
    { key: 'diagram', cn: '图表标注', en: 'Diagram Label Completion' },
    { key: 'short-answer', cn: '简答', en: 'Short-answer Questions' }
];
const TYPE_KEYS = new Set(TYPE_DEFINITIONS.map((entry) => entry.key));
const TYPE_ORDER = new Map(TYPE_DEFINITIONS.map((entry, index) => [entry.key, index]));

function loadExistingIndex() {
    if (!fs.existsSync(OUT_FILE)) return { byExamId: {}, autoDetectedExamIds: [] };
    const context = { window: {} };
    vm.runInNewContext(fs.readFileSync(OUT_FILE, 'utf8'), context, { filename: OUT_FILE });
    return context.window.__READING_QUESTION_TYPES__ || { byExamId: {}, autoDetectedExamIds: [] };
}

function loadExams() {
    const registry = {};
    const previousWindow = global.window;
    const previousRegistry = global.__READING_EXAM_DATA__;
    global.window = global;
    global.__READING_EXAM_DATA__ = {
        register(id, value) { registry[id] = value; },
        get(id) { return registry[id]; }
    };
    const files = fs.readdirSync(EXAM_DIR)
        .filter((name) => /^p\d+-(?:high|medium|low)-.+\.js$/.test(name))
        .sort();
    const failures = [];
    for (const file of files) {
        try {
            const fullPath = path.join(EXAM_DIR, file);
            delete require.cache[require.resolve(fullPath)];
            require(fullPath);
        } catch (error) {
            failures.push(`${file}: ${error.message}`);
        }
    }
    global.window = previousWindow;
    global.__READING_EXAM_DATA__ = previousRegistry;
    if (failures.length) {
        throw new Error(`Failed to load exam data:\n${failures.join('\n')}`);
    }
    return registry;
}

function normalizedInstruction(group) {
    return String(group && group.bodyHtml || '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&nbsp;/gi, ' ')
        .replace(/&[a-z]+;/gi, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
}

function inferMatchingType(group) {
    const text = normalizedInstruction(group);
    const html = String(group && group.bodyHtml || '').toLowerCase();
    if (/list of headings|correct heading|matching-headings|headings-pool/.test(`${text} ${html}`)) {
        return 'matching-headings';
    }
    if (/sentence endings?|correct ending|list of endings|matching-endings/.test(`${text} ${html}`)) {
        return 'matching-endings';
    }
    if (
        /which paragraph contains|paragraph contains the following|which section contains|reading passage has \w+ paragraphs|match each statement with the correct paragraph/.test(text)
        || /matching-table/.test(html) && /paragraph/.test(text)
    ) {
        return 'matching-info';
    }
    return 'matching-features';
}

function summaryUsesWordList(group) {
    const text = normalizedInstruction(group);
    const html = String(group && group.bodyHtml || '').toLowerCase();
    return /list of words|word list|using the list|choose.*(?:letters?|words?).*below/.test(text)
        || /options-pool|options-list|summary-option|drag-item/.test(html);
}

function inferGroupType(group) {
    const kind = String(group && group.kind || '').trim().toLowerCase().replace(/-/g, '_');
    switch (kind) {
        case 'single_choice':
        case 'multi_choice':
        case 'multiple_choice': return 'mc';
        case 'true_false_not_given': return 'tfng';
        case 'yes_no_not_given': return 'ynng';
        case 'short_answer': return 'short-answer';
        case 'sentence_completion': return 'sentence';
        case 'table_completion': return 'table';
        case 'note_completion':
        case 'notes_completion': return 'note';
        case 'flow_chart_completion':
        case 'flowchart_completion': return 'flowchart';
        case 'diagram_completion': return 'diagram';
        case 'summary_completion': return summaryUsesWordList(group) ? 'summary-list' : 'summary-passage';
        case 'matching': return inferMatchingType(group);
        case 'classification': return 'matching-features';
        default: return '';
    }
}

function inferExamTypes(exam) {
    const detected = new Set();
    for (const group of exam && exam.questionGroups || []) {
        const key = inferGroupType(group);
        if (key) detected.add(key);
    }
    return Array.from(detected).sort((left, right) => TYPE_ORDER.get(left) - TYPE_ORDER.get(right));
}

function normalizeExistingTypes(values) {
    return Array.from(new Set((Array.isArray(values) ? values : []).filter((key) => TYPE_KEYS.has(key))))
        .sort((left, right) => TYPE_ORDER.get(left) - TYPE_ORDER.get(right));
}

function buildIndex() {
    const exams = loadExams();
    const existing = loadExistingIndex();
    const existingMap = existing.byExamId && typeof existing.byExamId === 'object' ? existing.byExamId : {};
    const priorAuto = new Set(Array.isArray(existing.autoDetectedExamIds) ? existing.autoDetectedExamIds : []);
    const byExamId = {};
    const autoDetectedExamIds = [];
    const failures = [];

    for (const examId of Object.keys(exams).sort()) {
        const preserved = !priorAuto.has(examId) ? normalizeExistingTypes(existingMap[examId]) : [];
        const types = preserved.length ? preserved : inferExamTypes(exams[examId]);
        if (!types.length) {
            failures.push(`${examId}: no question types detected`);
            continue;
        }
        byExamId[examId] = types;
        if (!preserved.length) autoDetectedExamIds.push(examId);
    }
    if (failures.length) {
        throw new Error(`Question-type detection failed:\n${failures.join('\n')}`);
    }
    return {
        generatedAt: existing.generatedAt || new Date().toISOString().slice(0, 10),
        source: '人工分类索引 + 题目数据自动识别',
        types: TYPE_DEFINITIONS,
        byExamId,
        autoDetectedExamIds
    };
}

function serialize(index) {
    return `/**
 * 阅读题型分类数据（自动生成，请勿手动编辑）
 * 生成方式：node tools/generate-question-types.js
 * 新增题目会从 questionGroups.kind 和题目指令自动识别；已有人工分类保持不变。
 */
(function registerReadingQuestionTypes(global) {
  'use strict';
  global.__READING_QUESTION_TYPES__ = ${JSON.stringify(index, null, 2)};
})(typeof window !== 'undefined' ? window : globalThis);
`;
}

function main(options = {}) {
    const checkOnly = options.checkOnly === true || process.argv.includes('--check');
    const index = buildIndex();
    const existing = loadExistingIndex();
    const classificationChanged = JSON.stringify(existing.byExamId || {}) !== JSON.stringify(index.byExamId)
        || JSON.stringify(existing.autoDetectedExamIds || []) !== JSON.stringify(index.autoDetectedExamIds);
    if (!checkOnly && classificationChanged) {
        index.generatedAt = new Date().toISOString().slice(0, 10);
    }
    const output = serialize(index);
    if (checkOnly) {
        const current = fs.existsSync(OUT_FILE) ? fs.readFileSync(OUT_FILE, 'utf8') : '';
        if (current !== output) {
            throw new Error('reading-question-types.js is out of date; run node tools/generate-question-types.js');
        }
        console.log(`[question-types] PASS: ${Object.keys(index.byExamId).length} exams indexed, ${index.autoDetectedExamIds.length} auto-detected`);
        return index;
    }
    fs.writeFileSync(OUT_FILE, output, 'utf8');
    console.log(`[question-types] wrote ${path.relative(ROOT, OUT_FILE)}`);
    console.log(`[question-types] exams: ${Object.keys(index.byExamId).length}, auto-detected: ${index.autoDetectedExamIds.length}`);
    return index;
}

if (require.main === module) main();
module.exports = { main, buildIndex, inferExamTypes, inferGroupType };