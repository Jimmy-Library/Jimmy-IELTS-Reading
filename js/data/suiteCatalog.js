/**
 * 套题目录：把题库现有的 P1/P2/P3 组合成 100 套固定套题
 *
 * 设计要点：
 * - 每套 = 1 篇 P1 + 1 篇 P2 + 1 篇 P3，合计正好 40 题，与雅思 40 题
 *   分数表对齐；因此只选用标准题量的篇目（见 STANDARD_QUESTION_COUNT），
 *   题量异常的个别篇目不参与组卷。
 * - 确定性：同一份题库下，第 N 套永远是同样三篇（种子 PRNG + 按 examId
 *   排序的候选池），用户可以反复重做同一套、进度也能对上号。
 * - 允许单篇在不同套题中重复出现（题库篇数不足以支撑 100 套全不重复）。
 */
(function initSuiteCatalog(global) {
    'use strict';

    const SUITE_COUNT = 100;
    const CATEGORIES = ['P1', 'P2', 'P3'];

    // 各部分的标准题量，三者相加 = 40
    const STANDARD_QUESTION_COUNT = { P1: 13, P2: 13, P3: 14 };
    const TOTAL_QUESTIONS = 40;

    // 固定种子：保证每次生成的 100 套完全一致
    const SEED = 0x51ED7E5;

    /** mulberry32：小巧的确定性 PRNG */
    function createRandom(seed) {
        let t = seed >>> 0;
        return function random() {
            t = (t + 0x6D2B79F5) >>> 0;
            let x = t;
            x = Math.imul(x ^ (x >>> 15), x | 1);
            x ^= x + Math.imul(x ^ (x >>> 7), x | 61);
            return ((x ^ (x >>> 14)) >>> 0) / 4294967296;
        };
    }

    function getQuestionCount(examId) {
        const registry = global.__READING_EXAM_DATA__;
        const data = registry && typeof registry.get === 'function'
            ? registry.get(examId)
            : null;
        if (data && Array.isArray(data.questionOrder)) {
            return data.questionOrder.length;
        }
        return null;
    }

    /**
     * 题量信息只在题目 JS 载入后才有；题库浏览页并不会载入全部题目，
     * 因此这里以题号映射表（构建期产物）为准，取不到再退回运行时读取。
     */
    function resolveQuestionCount(exam) {
        const meta = global.__READING_EXAM_QUESTION_COUNTS__;
        if (meta && typeof meta === 'object' && meta[exam.id] != null) {
            return Number(meta[exam.id]);
        }
        return getQuestionCount(exam.id);
    }

    function getExamIndex() {
        if (typeof global.getExamIndexState === 'function') {
            const state = global.getExamIndexState();
            if (Array.isArray(state) && state.length) return state;
        }
        if (Array.isArray(global.completeExamIndex) && global.completeExamIndex.length) {
            return global.completeExamIndex;
        }
        return [];
    }

    /**
     * 按类别整理候选池：只保留标准题量的阅读篇目，并按 examId 升序排列，
     * 使组卷结果不受题库数组顺序影响。
     */
    function buildPools() {
        const index = getExamIndex();
        const pools = { P1: [], P2: [], P3: [] };

        index.forEach((exam) => {
            if (!exam || !exam.id) return;
            const type = String(exam.type || 'reading').toLowerCase();
            if (type !== 'reading') return;
            const category = String(exam.category || '').trim().toUpperCase();
            if (!pools[category]) return;

            const count = resolveQuestionCount(exam);
            // 题量未知时保守放行（多数篇目为标准题量）；已知且非标准则排除
            if (count != null && count !== STANDARD_QUESTION_COUNT[category]) return;

            pools[category].push({
                id: String(exam.id),
                title: exam.title || '',
                category: category,
                frequency: exam.frequency || '',
                questionCount: count != null ? count : STANDARD_QUESTION_COUNT[category]
            });
        });

        CATEGORIES.forEach((c) => {
            pools[c].sort((a, b) => a.id.localeCompare(b.id));
        });
        return pools;
    }

    /**
     * 生成不重复的取用序列：把候选池整体打乱后依次取用，取完再重新打乱，
     * 这样 100 套里同一篇的出现次数尽量均摊，而不是随机撞车。
     */
    function makeDealer(pool, random) {
        let bag = [];
        return function deal() {
            if (!bag.length) {
                bag = pool.slice();
                for (let i = bag.length - 1; i > 0; i -= 1) {
                    const j = Math.floor(random() * (i + 1));
                    const tmp = bag[i];
                    bag[i] = bag[j];
                    bag[j] = tmp;
                }
            }
            return bag.pop();
        };
    }

    let cachedCatalog = null;

    function buildCatalog() {
        const pools = buildPools();
        const missing = CATEGORIES.filter((c) => !pools[c].length);
        if (missing.length) {
            console.warn('[SuiteCatalog] 缺少可用篇目的部分:', missing.join('/'));
            return [];
        }

        const random = createRandom(SEED);
        const dealers = {
            P1: makeDealer(pools.P1, random),
            P2: makeDealer(pools.P2, random),
            P3: makeDealer(pools.P3, random)
        };

        const suites = [];
        for (let i = 0; i < SUITE_COUNT; i += 1) {
            const entries = CATEGORIES.map((c) => dealers[c]());
            suites.push({
                id: 'suite-' + String(i + 1).padStart(3, '0'),
                number: i + 1,
                name: '套题 ' + String(i + 1).padStart(3, '0'),
                entries: entries,
                examIds: entries.map((e) => e.id),
                totalQuestions: entries.reduce((sum, e) => sum + (e.questionCount || 0), 0)
            });
        }
        return suites;
    }

    function getCatalog(options) {
        const force = !!(options && options.force);
        if (force || !cachedCatalog || !cachedCatalog.length) {
            cachedCatalog = buildCatalog();
        }
        return cachedCatalog;
    }

    function getSuite(suiteId) {
        const key = String(suiteId == null ? '' : suiteId);
        return getCatalog().find((s) => s.id === key || String(s.number) === key) || null;
    }

    function invalidate() {
        cachedCatalog = null;
    }

    global.SuiteCatalog = {
        SUITE_COUNT: SUITE_COUNT,
        TOTAL_QUESTIONS: TOTAL_QUESTIONS,
        STANDARD_QUESTION_COUNT: STANDARD_QUESTION_COUNT,
        getCatalog: getCatalog,
        getSuite: getSuite,
        invalidate: invalidate
    };
})(typeof window !== 'undefined' ? window : globalThis);
