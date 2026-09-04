/**
 * 套题目录：把题库现有的 P1/P2/P3 组合成 100 套固定套题
 *
 * 设计要点：
 * - 每套 = 1 篇 P1 + 1 篇 P2 + 1 篇 P3，合计正好 40 题，与雅思 40 题
 *   分数表对齐；因此只选用标准题量的篇目（见 STANDARD_QUESTION_COUNT），
 *   题量异常的个别篇目不参与组卷。
 * - Fixed catalog: every suite keeps the same three exam IDs across reloads and future question additions.
 * - 允许单篇在不同套题中重复出现（题库篇数不足以支撑 100 套全不重复）。
 */
(function initSuiteCatalog(global) {
    'use strict';

    const SUITE_COUNT = 100;
    const CATEGORIES = ['P1', 'P2', 'P3'];

    // Frozen mapping: newly added questions must never reshuffle existing suites.
    const FIXED_CATALOG_EXAM_IDS = [
        [
            "p1-low-111",
            "p2-low-147",
            "p3-high-181"
        ],
        [
            "p1-high-200",
            "p2-high-234",
            "p3-low-71"
        ],
        [
            "p1-medium-119",
            "p2-high-225",
            "p3-medium-152"
        ],
        [
            "p1-medium-1045",
            "p2-high-236",
            "p3-high-174"
        ],
        [
            "p1-medium-1041",
            "p2-medium-10",
            "p3-medium-18"
        ],
        [
            "p1-low-1038",
            "p2-high-16",
            "p3-high-89"
        ],
        [
            "p1-low-138",
            "p2-high-123",
            "p3-low-85"
        ],
        [
            "p1-high-101",
            "p2-medium-121",
            "p3-medium-154"
        ],
        [
            "p1-low-99",
            "p2-low-06",
            "p3-low-95"
        ],
        [
            "p1-medium-1003",
            "p2-high-134",
            "p3-low-07"
        ],
        [
            "p1-low-13",
            "p2-high-124",
            "p3-medium-179"
        ],
        [
            "p1-low-67",
            "p2-low-62",
            "p3-low-78"
        ],
        [
            "p1-low-114",
            "p2-low-051",
            "p3-low-198"
        ],
        [
            "p1-high-05",
            "p2-medium-58",
            "p3-high-157"
        ],
        [
            "p1-low-127",
            "p2-high-136",
            "p3-low-100"
        ],
        [
            "p1-low-02",
            "p2-low-94",
            "p3-low-38"
        ],
        [
            "p1-low-47",
            "p2-low-39",
            "p3-low-74"
        ],
        [
            "p1-high-1071",
            "p2-low-50",
            "p3-medium-169"
        ],
        [
            "p1-low-48",
            "p2-high-235",
            "p3-high-212"
        ],
        [
            "p1-low-53",
            "p2-high-239",
            "p3-low-98"
        ],
        [
            "p1-medium-161",
            "p2-medium-217",
            "p3-high-159"
        ],
        [
            "p1-medium-63",
            "p2-low-242",
            "p3-medium-244"
        ],
        [
            "p1-medium-1019",
            "p2-low-102",
            "p3-low-1061"
        ],
        [
            "p1-high-92",
            "p2-medium-243",
            "p3-low-166"
        ],
        [
            "p1-low-113",
            "p2-high-201",
            "p3-medium-168"
        ],
        [
            "p1-low-223",
            "p2-low-75",
            "p3-high-218"
        ],
        [
            "p1-low-80",
            "p2-low-51",
            "p3-low-55"
        ],
        [
            "p1-medium-29",
            "p2-high-137",
            "p3-medium-197"
        ],
        [
            "p1-low-84",
            "p2-low-73",
            "p3-low-999"
        ],
        [
            "p1-high-105",
            "p2-medium-146",
            "p3-low-165"
        ],
        [
            "p1-medium-117",
            "p2-low-41",
            "p3-high-04"
        ],
        [
            "p1-high-1021",
            "p2-low-140",
            "p3-high-221"
        ],
        [
            "p1-low-107",
            "p2-medium-86",
            "p3-medium-66"
        ],
        [
            "p1-high-171",
            "p2-high-130",
            "p3-medium-185"
        ],
        [
            "p1-low-52",
            "p2-high-139",
            "p3-high-229"
        ],
        [
            "p1-low-68",
            "p2-low-240",
            "p3-high-164"
        ],
        [
            "p1-high-1008",
            "p2-low-49",
            "p3-high-32"
        ],
        [
            "p1-high-1931",
            "p2-high-145",
            "p3-high-150"
        ],
        [
            "p1-low-1009",
            "p2-high-21",
            "p3-high-228"
        ],
        [
            "p1-medium-1043",
            "p2-low-122",
            "p3-low-59"
        ],
        [
            "p1-low-1029",
            "p2-high-131",
            "p3-low-28"
        ],
        [
            "p1-low-116",
            "p2-high-1015",
            "p3-low-56"
        ],
        [
            "p1-medium-33",
            "p2-low-125",
            "p3-low-175"
        ],
        [
            "p1-medium-20",
            "p2-high-19",
            "p3-low-151"
        ],
        [
            "p1-low-1014",
            "p2-high-23",
            "p3-low-190"
        ],
        [
            "p3-medium-1018",
            "p2-medium-213",
            "p3-low-76"
        ],
        [
            "p1-high-1046",
            "p2-high-232",
            "p3-low-43"
        ],
        [
            "p1-low-160",
            "p2-high-17",
            "p3-low-88"
        ],
        [
            "p1-high-1073",
            "p2-high-14",
            "p3-high-206"
        ],
        [
            "p1-low-70",
            "p2-high-09",
            "p3-high-184"
        ],
        [
            "p1-high-31",
            "p2-medium-209",
            "p3-high-189"
        ],
        [
            "p1-medium-1007",
            "p2-medium-058",
            "p3-high-192"
        ],
        [
            "p1-high-1783",
            "p2-low-104",
            "p3-low-83"
        ],
        [
            "p1-medium-1389",
            "p2-high-128",
            "p3-high-1051"
        ],
        [
            "p1-medium-115",
            "p2-low-222",
            "p3-medium-22"
        ],
        [
            "p1-low-45",
            "p2-high-120",
            "p3-high-204"
        ],
        [
            "p1-high-211",
            "p2-high-141",
            "p3-medium-177"
        ],
        [
            "p1-medium-1042",
            "p2-high-133",
            "p3-low-186"
        ],
        [
            "p1-low-30",
            "p2-low-77",
            "p3-medium-188"
        ],
        [
            "p1-medium-1005",
            "p2-medium-93",
            "p3-low-42"
        ],
        [
            "p1-medium-1063",
            "p2-medium-144",
            "p3-high-180"
        ],
        [
            "p1-high-1031",
            "p2-high-233",
            "p3-high-03"
        ],
        [
            "p1-high-79",
            "p2-low-148",
            "p3-low-12"
        ],
        [
            "p1-medium-1040",
            "p2-low-65",
            "p3-low-97"
        ],
        [
            "p1-low-81",
            "p2-low-37",
            "p3-low-158"
        ],
        [
            "p1-high-118",
            "p2-low-64",
            "p3-low-163"
        ],
        [
            "p1-high-230",
            "p2-high-25",
            "p3-low-172"
        ],
        [
            "p1-high-01",
            "p2-low-103",
            "p3-medium-162"
        ],
        [
            "p1-high-231",
            "p2-low-135",
            "p3-low-153"
        ],
        [
            "p1-low-46",
            "p2-low-142",
            "p3-medium-155"
        ],
        [
            "p1-high-227",
            "p2-low-132",
            "p3-medium-183"
        ],
        [
            "p1-high-240",
            "p2-low-143",
            "p3-low-44"
        ],
        [
            "p1-low-112",
            "p2-medium-126",
            "p3-low-54"
        ],
        [
            "p1-medium-182",
            "p2-high-192",
            "p3-medium-241"
        ],
        [
            "p1-high-90",
            "p2-medium-129",
            "p3-high-173"
        ],
        [
            "p1-medium-60",
            "p2-high-91",
            "p3-high-15"
        ],
        [
            "p1-high-82",
            "p2-high-233",
            "p3-low-240"
        ],
        [
            "p1-low-11",
            "p2-high-21",
            "p3-high-178"
        ],
        [
            "p1-low-35",
            "p2-high-232",
            "p3-medium-1929"
        ],
        [
            "p1-low-72",
            "p2-low-147",
            "p3-low-187"
        ],
        [
            "p1-low-149",
            "p2-medium-129",
            "p3-low-36"
        ],
        [
            "p1-low-106",
            "p2-low-103",
            "p3-high-167"
        ],
        [
            "p1-low-69",
            "p2-medium-243",
            "p3-high-170"
        ],
        [
            "p1-low-1011",
            "p2-low-62",
            "p3-high-161"
        ],
        [
            "p3-high-1012",
            "p2-low-64",
            "p3-medium-176"
        ],
        [
            "p1-high-24",
            "p2-high-136",
            "p3-high-89"
        ],
        [
            "p1-low-34",
            "p2-medium-217",
            "p3-low-36"
        ],
        [
            "p1-low-40",
            "p2-low-140",
            "p3-low-163"
        ],
        [
            "p1-high-1049",
            "p2-high-137",
            "p3-high-173"
        ],
        [
            "p1-medium-1068",
            "p2-high-128",
            "p3-high-212"
        ],
        [
            "p1-low-109",
            "p2-medium-126",
            "p3-low-1061"
        ],
        [
            "p1-high-1028",
            "p2-low-65",
            "p3-medium-162"
        ],
        [
            "p1-high-216",
            "p2-high-234",
            "p3-high-192"
        ],
        [
            "p1-high-110",
            "p2-high-14",
            "p3-medium-197"
        ],
        [
            "p1-medium-1054",
            "p2-high-91",
            "p3-low-43"
        ],
        [
            "p1-high-27",
            "p2-high-235",
            "p3-medium-244"
        ],
        [
            "p1-high-229",
            "p2-high-130",
            "p3-low-74"
        ],
        [
            "p1-high-194",
            "p2-high-131",
            "p3-medium-183"
        ],
        [
            "p1-medium-1255",
            "p2-high-225",
            "p3-high-167"
        ],
        [
            "p1-low-108",
            "p2-medium-209",
            "p3-high-228"
        ]
    ];

    // 各部分的标准题量，三者相加 = 40
    const STANDARD_QUESTION_COUNT = { P1: 13, P2: 13, P3: 14 };
    const TOTAL_QUESTIONS = 40;


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

    function frequencyRank(value) {
        const normalized = String(value == null ? '' : value).trim().toLowerCase();
        if (['high', '高频', 'ultra-high', '超高频', 'very-high', 'high frequency'].includes(normalized)) return 0;
        if (['medium', 'mid', '次高频', '中频', 'medium frequency'].includes(normalized)) return 1;
        if (['low', '低频', 'low frequency'].includes(normalized)) return 2;
        return 3;
    }

    function normalizePracticeStats(rawStats) {
        const stats = new Map();
        if (rawStats instanceof Map) {
            rawStats.forEach((value, key) => stats.set(String(key), value || {}));
            return stats;
        }
        if (rawStats && typeof rawStats === 'object') {
            Object.keys(rawStats).forEach((key) => stats.set(String(key), rawStats[key] || {}));
        }
        return stats;
    }

    function dailyTieBreak(dateKey, category, examId) {
        const text = `${dateKey}|${category}|${examId}`;
        let hash = 2166136261;
        for (let i = 0; i < text.length; i += 1) {
            hash ^= text.charCodeAt(i);
            hash = Math.imul(hash, 16777619);
        }
        return hash >>> 0;
    }

    /**
     * 每日推荐：未做过优先，其次按高频→次高频→低频排列；同级题目按日期稳定轮换。
     * practiceStats: { [examId]: { count, lastAt } }
     */
    function buildDailyRecommendation(options = {}) {
        const dateKey = String(options.dateKey || new Date().toISOString().slice(0, 10));
        const stats = normalizePracticeStats(options.practiceStats);
        const pools = buildPools();
        const missing = CATEGORIES.filter((category) => !pools[category].length);
        if (missing.length) return null;

        const preferredExamIds = Array.isArray(options.examIds)
            ? options.examIds.map((id) => String(id))
            : [];
        const preferredEntries = CATEGORIES.map((category, index) => (
            pools[category].find((entry) => entry.id === preferredExamIds[index]) || null
        ));
        const canReuseSavedRecommendation = preferredEntries.every(Boolean);

        const entries = canReuseSavedRecommendation ? preferredEntries : CATEGORIES.map((category) => {
            const ranked = pools[category].slice().sort((left, right) => {
                const leftStat = stats.get(String(left.id)) || {};
                const rightStat = stats.get(String(right.id)) || {};
                const leftCount = Math.max(0, Number(leftStat.count) || 0);
                const rightCount = Math.max(0, Number(rightStat.count) || 0);
                const unseenDifference = Number(leftCount > 0) - Number(rightCount > 0);
                if (unseenDifference) return unseenDifference;
                const frequencyDifference = frequencyRank(left.frequency) - frequencyRank(right.frequency);
                if (frequencyDifference) return frequencyDifference;
                if (leftCount !== rightCount) return leftCount - rightCount;
                const leftLastAt = Number(leftStat.lastAt) || 0;
                const rightLastAt = Number(rightStat.lastAt) || 0;
                if (leftCount > 0 && leftLastAt !== rightLastAt) return leftLastAt - rightLastAt;
                return dailyTieBreak(dateKey, category, left.id) - dailyTieBreak(dateKey, category, right.id);
            });
            return ranked[0];
        });

        const unseenCount = entries.filter((entry) => {
            const stat = stats.get(String(entry.id)) || {};
            return !(Number(stat.count) > 0);
        }).length;
        const highFrequencyCount = entries.filter((entry) => frequencyRank(entry.frequency) === 0).length;
        return {
            id: 'daily-recommendation-' + dateKey,
            number: 0,
            name: '今日推荐练习',
            dateKey,
            isDailyRecommendation: true,
            entries,
            examIds: entries.map((entry) => entry.id),
            totalQuestions: entries.reduce((sum, entry) => sum + (entry.questionCount || 0), 0),
            recommendationMeta: {
                unseenCount,
                highFrequencyCount,
                allUnseen: unseenCount === entries.length
            }
        };
    }

    const dynamicSuites = new Map();

    function getDailyRecommendation(options = {}) {
        const suite = buildDailyRecommendation(options);
        if (suite) dynamicSuites.set(suite.id, suite);
        return suite;
    }


    let cachedCatalog = null;

    function buildCatalog() {
        const pools = buildPools();
        const missing = CATEGORIES.filter((c) => !pools[c].length);
        if (missing.length) {
            console.warn('[SuiteCatalog] 缺少可用篇目的部分:', missing.join('/'));
            return [];
        }

        const entriesById = new Map();
        CATEGORIES.forEach((category) => {
            pools[category].forEach((entry) => entriesById.set(String(entry.id), entry));
        });

        const suites = [];
        FIXED_CATALOG_EXAM_IDS.forEach((examIds, index) => {
            const entries = examIds.map((examId) => entriesById.get(String(examId)) || null);
            if (entries.some((entry) => !entry)) {
                console.warn('[SuiteCatalog] fixed suite is missing an exam:', index + 1, examIds);
                return;
            }
            suites.push({
                id: 'suite-' + String(index + 1).padStart(3, '0'),
                number: index + 1,
                name: '\u5957\u9898 ' + String(index + 1).padStart(3, '0'),
                entries: entries,
                examIds: examIds.slice(),
                totalQuestions: entries.reduce((sum, entry) => sum + (entry.questionCount || 0), 0)
            });
        });
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
        return dynamicSuites.get(key)
            || getCatalog().find((s) => s.id === key || String(s.number) === key)
            || null;
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
        getDailyRecommendation: getDailyRecommendation,
        invalidate: invalidate
    };
})(typeof window !== 'undefined' ? window : globalThis);
