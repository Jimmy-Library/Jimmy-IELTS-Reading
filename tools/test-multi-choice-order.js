'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const core = require('../js/utils/answerMatchCore.js');

const examsDir = path.resolve(__dirname, '../assets/generated/reading-exams');
const files = fs.readdirSync(examsDir)
    .filter((name) => /^p\d+-(?:high|medium|low)-.+\.js$/.test(name));
let examCount = 0;
let groupCount = 0;
let splitGroupCount = 0;
let arrayGroupCount = 0;
let ownerOverrideCount = 0;
let radioOnlyGroupCount = 0;
const failures = [];

function expandLegacyName(rawValue) {
    const value = String(rawValue || '').trim().toLowerCase();
    const numbers = (value.match(/\d+/g) || []).map(Number);
    if ((value.includes('-') || value.includes('–')) && numbers.length > 2) return numbers.map((n) => `q${n}`);
    if ((value.includes('-') || value.includes('–')) && numbers.length === 2 && numbers[1] >= numbers[0]) {
        return Array.from({ length: numbers[1] - numbers[0] + 1 }, (_, index) => `q${numbers[0] + index}`);
    }
    if (value.includes('_') && numbers.length >= 2) return numbers.map((n) => `q${n}`);
    return numbers.length ? [`q${numbers[0]}`] : [];
}

for (const file of files) {
    let dataset = null;
    const window = {
        __READING_EXAM_DATA__: {
            register(_examId, value) {
                dataset = value;
            }
        }
    };
    vm.runInNewContext(fs.readFileSync(path.join(examsDir, file), 'utf8'), { window }, { filename: file });
    if (!dataset) continue;
    examCount += 1;

    for (const group of dataset.questionGroups || []) {
        if (!group || group.kind !== 'multi_choice') continue;
        groupCount += 1;
        const ids = Array.isArray(group.questionIds) ? group.questionIds : [];
        const expectedValues = ids.map((id) => dataset.answerKey && dataset.answerKey[id]);
        const checkboxNames = Array.from(String(group.bodyHtml || '').matchAll(/<input\b[^>]*type=["']checkbox["'][^>]*>/gi))
            .map((match) => (match[0].match(/\bname=["']([^"']+)["']/i) || [])[1])
            .filter(Boolean);
        if (!checkboxNames.length) {
            radioOnlyGroupCount += 1;
            continue;
        }
        for (const name of new Set(checkboxNames)) {
            const legacyIds = expandLegacyName(name);
            if (JSON.stringify(legacyIds) !== JSON.stringify(ids)) ownerOverrideCount += 1;
        }

        if (ids.length > 1) {
            splitGroupCount += 1;
            const expectedTokens = expectedValues.map((value) => core.splitAnswerTokens(value));
            if (expectedTokens.some((tokens) => tokens.length !== 1)) {
                failures.push(`${file}/${group.groupId}: split group has a non-scalar answer`);
                continue;
            }
            const reversed = expectedTokens.map((tokens) => tokens[0]).reverse();
            const aligned = core.alignAnswerSetToExpectedSlots(reversed, expectedValues);
            ids.forEach((id, index) => {
                if (!core.areTokensEquivalent(aligned[index], expectedTokens[index][0])) {
                    failures.push(`${file}/${group.groupId}/${id}: reverse-order alignment failed`);
                }
            });
            continue;
        }

        const expected = expectedValues[0];
        const tokens = core.splitAnswerTokens(expected);
        if (tokens.length > 1) {
            arrayGroupCount += 1;
            if (core.compareAnswerSets(tokens.slice().reverse(), expected) !== true) {
                failures.push(`${file}/${group.groupId}: reverse-order set comparison failed`);
            }
            if (core.compareAnswerSets(tokens.slice(1), expected) !== false) {
                failures.push(`${file}/${group.groupId}: incomplete selection was accepted`);
            }
        }
    }
}

if (failures.length) {
    console.error(failures.join('\n'));
    process.exit(1);
}
console.log(`PASS: ${groupCount - radioOnlyGroupCount} checkbox multi-choice groups across ${examCount} exams (${splitGroupCount} split-key, ${arrayGroupCount} array-key, ${ownerOverrideCount} owner-name override; ${radioOnlyGroupCount} mislabeled radio-only group skipped) accept answers in any order.`);