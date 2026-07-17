/**
 * 雅思学术类阅读分数换算
 *
 * 依据学术类（Academic Reading）40 题完整分数转换表。
 * 表格下限为「答对 4-5 题 → 2.5 分」，再往下官方表未给出，
 * 故不臆造分数，统一返回 band = null、label = '<2.5'。
 */
(function initIeltsBandScore(global) {
    'use strict';

    const TOTAL_QUESTIONS = 40;

    // [最少答对题数, 最多答对题数, 雅思分数]，按分数从高到低
    const ACADEMIC_READING_BANDS = [
        [39, 40, 9.0],
        [37, 38, 8.5],
        [35, 36, 8.0],
        [33, 34, 7.5],
        [30, 32, 7.0],
        [27, 29, 6.5],
        [23, 26, 6.0],
        [19, 22, 5.5],
        [15, 18, 5.0],
        [13, 14, 4.5],
        [10, 12, 4.0],
        [8, 9, 3.5],
        [6, 7, 3.0],
        [4, 5, 2.5]
    ];

    function toCorrectCount(value) {
        const n = Math.floor(Number(value));
        return Number.isFinite(n) && n > 0 ? n : 0;
    }

    /**
     * 按 40 题标准换算雅思分数
     * @param {number} correct 答对题数
     * @returns {{band: number|null, label: string, exact: boolean}}
     */
    function bandForCorrect(correct) {
        const hits = toCorrectCount(correct);
        for (let i = 0; i < ACADEMIC_READING_BANDS.length; i += 1) {
            const [min, max, band] = ACADEMIC_READING_BANDS[i];
            if (hits >= min && hits <= max) {
                return { band: band, label: band.toFixed(1), exact: true };
            }
        }
        // 答对 0-3 题：官方表未给出，不臆造
        return { band: null, label: '<2.5', exact: true };
    }

    /**
     * 换算套题成绩。题目总数非 40 时按比例折算到 40 题再查表，并标记为估算。
     * @param {number} correct 答对题数
     * @param {number} total 题目总数
     */
    function scoreSuite(correct, total) {
        const hits = toCorrectCount(correct);
        const questions = toCorrectCount(total);
        if (questions <= 0) {
            return {
                correct: 0,
                total: 0,
                accuracy: 0,
                percentage: 0,
                band: null,
                bandLabel: '—',
                estimated: false
            };
        }

        const accuracy = Math.min(1, hits / questions);
        const isStandard = questions === TOTAL_QUESTIONS;
        // 非标准题数（个别篇目题量异常）时折算，避免直接套用 40 题的分界点
        const normalizedCorrect = isStandard
            ? hits
            : Math.round(accuracy * TOTAL_QUESTIONS);
        const result = bandForCorrect(normalizedCorrect);

        return {
            correct: hits,
            total: questions,
            accuracy: accuracy,
            percentage: Math.round(accuracy * 100),
            band: result.band,
            bandLabel: result.label,
            estimated: !isStandard
        };
    }

    global.IeltsBandScore = {
        TOTAL_QUESTIONS: TOTAL_QUESTIONS,
        BANDS: ACADEMIC_READING_BANDS,
        bandForCorrect: bandForCorrect,
        scoreSuite: scoreSuite
    };
})(typeof window !== 'undefined' ? window : globalThis);
