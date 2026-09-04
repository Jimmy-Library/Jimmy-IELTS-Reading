'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const read = (relativePath) => fs.readFileSync(path.join(root, relativePath), 'utf8');
const localValues = new Map();
const sessionValues = new Map();
const makeStorage = (values) => ({
  get length() { return values.size; },
  key(index) { return Array.from(values.keys())[index] || null; },
  getItem(key) { return values.has(String(key)) ? values.get(String(key)) : null; },
  setItem(key, value) { values.set(String(key), String(value)); },
  removeItem(key) { values.delete(String(key)); }
});

const context = vm.createContext({
  console,
  localStorage: makeStorage(localValues),
  sessionStorage: makeStorage(sessionValues),
  location: { protocol: 'https:' }
});
context.window = context;
context.globalThis = context;
vm.runInContext(read('assets/scripts/complete-exam-data.js'), context);
vm.runInContext(read('assets/generated/reading-question-counts.js'), context);
vm.runInContext(read('js/data/suiteCatalog.js'), context);

const firstCatalog = context.SuiteCatalog.getCatalog().map((suite) => suite.examIds.join('|'));
context.SuiteCatalog.invalidate();
const rebuiltCatalog = context.SuiteCatalog.getCatalog().map((suite) => suite.examIds.join('|'));
if (firstCatalog.length !== 100 || JSON.stringify(firstCatalog) !== JSON.stringify(rebuiltCatalog)) {
  throw new Error('Fixed suite catalog changed after rebuild');
}

vm.runInContext(read('js/app/suitePracticeMixin.js'), context);
const mixin = context.ExamSystemAppMixins && context.ExamSystemAppMixins.suitePractice;
if (!mixin) throw new Error('Suite practice mixin did not load');

const suiteId = 'suite_resume_test';
const ids = ['p1-low-111', 'p2-low-147', 'p3-high-181'];
const snapshot = {
  sequence: ids.map((examId) => ({ examId, exam: { id: examId } })),
  lockedExamIds: ids.slice(),
  currentIndex: 0,
  updatedAt: 100,
  draftsByExam: {},
  elapsedByExam: {}
};
localValues.set(`ielts_suite_draft::${suiteId}::${ids[1]}`, JSON.stringify({
  savedAt: 200,
  elapsed: 35,
  draft: { answers: { q14: 'A' } }
}));
const hydrated = mixin._hydrateSuiteSnapshotDrafts(snapshot, suiteId);
if (!hydrated || hydrated.currentIndex !== 1 || hydrated.activeExamId !== ids[1]
  || hydrated.draftsByExam[ids[1]].answers.q14 !== 'A') {
  throw new Error('Suite draft did not reopen the matching passage');
}
const mismatched = mixin._hydrateSuiteSnapshotDrafts({
  sequence: snapshot.sequence,
  lockedExamIds: [ids[2], ids[1], ids[0]]
}, suiteId);
if (mismatched !== null) throw new Error('Mismatched suite sequence was accepted');

const progressKey = `ielts_suite_progress::${suiteId}`;
localValues.set(progressKey, '{}');
sessionValues.set('ielts_sim_session', '{}');
const holder = { currentSuiteSession: { id: suiteId }, _persistedSuiteProgressKey: progressKey };
mixin._clearSessionStorage.call(holder, { preserveLocalProgress: true });
if (!localValues.has(progressKey) || sessionValues.has('ielts_sim_session')) {
  throw new Error('Interrupted suite progress was not preserved locally');
}

const viewSource = read('js/views/suiteModeView.js');
const practiceSource = read('js/app/suitePracticeMixin.js');
const runtimeSource = read('js/runtime/unifiedReadingPage.js');
if (!viewSource.includes('unfinished.slice(0, 3)')) throw new Error('Recent three unfinished suites are not rendered');
if (practiceSource.includes('selectionPool[Math.floor(Math.random()')) throw new Error('Random suite selection remains');
if (!runtimeSource.includes('mirrorSuiteProgressFromPage')) throw new Error('Passage drafts do not update suite progress directly');

console.log('PASS: 100 fixed suites; three unfinished entries; matching three-passage draft recovery.');
