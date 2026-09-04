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

console.log(`PASS: ${datasetScripts.length} exams have local datasets and answer keys; offline save hooks are present.`);
