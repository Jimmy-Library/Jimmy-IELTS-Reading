'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const examDir = path.join(root, 'assets', 'generated', 'reading-exams');
const context = { console };
context.window = context;
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, 'assets', 'generated', 'reading-question-types.js'), 'utf8'), context);
vm.runInContext(fs.readFileSync(path.join(root, 'js', 'app', 'examActions.js'), 'utf8'), context);

const data = context.__READING_QUESTION_TYPES__;
const map = data && data.byExamId || {};
const exams = fs.readdirSync(examDir)
    .filter((name) => /^p\d+-(?:high|medium|low)-.+\.js$/.test(name))
    .map((name) => ({ id: name.replace(/\.js$/, ''), title: name, type: 'reading' }))
    .sort((left, right) => left.id.localeCompare(right.id));
const examIds = new Set(exams.map((exam) => exam.id));
const missing = exams.filter((exam) => !Array.isArray(map[exam.id]) || !map[exam.id].length).map((exam) => exam.id);
const stale = Object.keys(map).filter((id) => !examIds.has(id));
if (missing.length || stale.length) {
    throw new Error(`Index mismatch; missing=${missing.join(',')} stale=${stale.join(',')}`);
}

for (const type of data.types || []) {
    context.__browseQuestionType = type.key;
    context.__browseNewOnly = false;
    context.__browseSortMode = 'default';
    const actual = context.ExamActions.applyBrowsePostFilters(exams).map((exam) => exam.id).sort();
    const expected = exams.filter((exam) => map[exam.id].includes(type.key)).map((exam) => exam.id).sort();
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`Filter mismatch for ${type.key}`);
    }
    if (!actual.length) throw new Error(`Filter ${type.key} has no exams`);
}

console.log(`PASS: ${exams.length} exams are indexed and ${(data.types || []).length} question-type filters return the expected exams.`);