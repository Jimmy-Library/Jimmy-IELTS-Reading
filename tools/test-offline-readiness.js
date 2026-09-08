'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const examDir = path.join(root, 'assets', 'generated', 'reading-exams');

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), 'utf8');
}

const context = vm.createContext({ console });
context.globalThis = context;
const registered = Object.create(null);
context.__READING_EXAM_DATA__ = {
  register(key, value) {
    registered[key] = value;
  }
};

const problems = [];
const datasetScripts = fs.readdirSync(examDir).filter((name) => /^p[123]-(?:high|medium|low)-.+\.js$/i.test(name));
for (const scriptName of datasetScripts) {
  const scriptPath = path.join(examDir, scriptName);
  const examId = path.basename(scriptName, '.js');
  try {
    vm.runInContext(fs.readFileSync(scriptPath, 'utf8'), context, { filename: scriptPath });
  } catch (error) {
    problems.push(`${examId}: dataset failed to load (${error.message})`);
    continue;
  }
  const dataset = registered[examId];
  if (!dataset) {
    problems.push(`${examId}: dataset was not registered`);
    continue;
  }
  const answerKey = dataset.answerKey;
  if (!answerKey || typeof answerKey !== 'object' || Object.keys(answerKey).length === 0) {
    problems.push(`${examId}: answerKey is empty`);
  }
  if (!dataset.passage || !Array.isArray(dataset.passage.blocks) || dataset.passage.blocks.length === 0) {
    problems.push(`${examId}: passage is empty`);
  }
  if (!Array.isArray(dataset.questionGroups) || dataset.questionGroups.length === 0) {
    problems.push(`${examId}: questionGroups is empty`);
  }
  if (!Array.isArray(dataset.questionOrder) || dataset.questionOrder.length === 0) {
    problems.push(`${examId}: questionOrder is empty`);
  } else if (answerKey && dataset.questionOrder.some((id) => !Object.prototype.hasOwnProperty.call(answerKey, id))) {
    problems.push(`${examId}: questionOrder contains an item without an answer`);
  }
}

const indexContext = vm.createContext({ console, window: {} });
vm.runInContext(read('assets/scripts/complete-exam-data.js'), indexContext, { filename: 'complete-exam-data.js' });
vm.runInContext(read('assets/generated/reading-question-counts.js'), indexContext, { filename: 'reading-question-counts.js' });
vm.runInContext(read('js/data/suiteCatalog.js'), indexContext, { filename: 'suiteCatalog.js' });
const suites = indexContext.window.SuiteCatalog.getCatalog();
if (suites.length !== 100) {
  problems.push(`fixed suite catalog has ${suites.length} suites instead of 100`);
}
suites.forEach((suite) => {
  const expectedCategories = ['P1', 'P2', 'P3'];
  if (!Array.isArray(suite.entries) || suite.entries.length !== 3) {
    problems.push(`${suite.id}: does not contain exactly three passages`);
    return;
  }
  if (suite.totalQuestions !== 40) {
    problems.push(`${suite.id}: contains ${suite.totalQuestions} questions instead of 40`);
  }
  suite.entries.forEach((entry, index) => {
    if (entry.category !== expectedCategories[index]) {
      problems.push(`${suite.id}: position ${index + 1} is ${entry.category}, expected ${expectedCategories[index]}`);
    }
    const dataset = registered[entry.id];
    if (!dataset) {
      problems.push(`${suite.id}: dataset is unavailable for ${entry.id}`);
    }
  });
});
const manifestContext = vm.createContext({ console, window: {} });
vm.runInContext(read('assets/generated/reading-exams/manifest.js'), manifestContext, { filename: 'manifest.js' });
const manifest = manifestContext.window.__READING_EXAM_MANIFEST__ || {};
const generatedIndexEntries = (indexContext.window.completeExamIndex || []).filter((exam) =>
  exam && exam.hasHtml && /assets\/generated\/reading-exams\/?$/i.test(String(exam.path || '')) && /\.js$/i.test(String(exam.filename || ''))
);
for (const exam of generatedIndexEntries) {
  const target = path.join(examDir, exam.filename);
  if (!fs.existsSync(target)) problems.push(`${exam.id}: indexed dataset is missing (${exam.filename})`);
  if (!manifest[exam.id]) problems.push(`${exam.id}: generated dataset is missing from manifest`);
}

const mainHtml = read('Jimmy阅读机考.html');
const unified = read('js/runtime/unifiedReadingPage.js');
const mainJs = read('js/main.js');
const checks = [
  [mainHtml.includes("var noticeSeenKey = 'browser_notice_seen_v1'") && mainHtml.includes('localStorage.getItem(noticeSeenKey)'), 'browser notice is not persisted across visits'],
  [mainHtml.includes('js/runtime/offlineReady.js'), 'offline runtime is not loaded by the main page'],
  [unified.includes('await ensureSuiteBlueprint()'), 'suite datasets are not awaited before practice starts'],
  [unified.includes('queueCompletion'), 'completed practice is not queued before delivery'],
  [mainJs.includes('recoverOfflinePracticeCompletions'), 'pending offline completions are not recovered'],
  [fs.existsSync(path.join(root, 'service-worker.js')), 'service worker is missing']
];
checks.forEach(([ok, message]) => {
  if (!ok) problems.push(message);
});

if (problems.length) {
  console.error(`FAIL: ${problems.length} offline readiness issue(s)`);
  problems.forEach((problem) => console.error(`- ${problem}`));
  process.exit(1);
}

console.log(`PASS: ${datasetScripts.length} exams have local datasets and answer keys; ${generatedIndexEntries.length} generated links resolve; offline save hooks are present.`);
