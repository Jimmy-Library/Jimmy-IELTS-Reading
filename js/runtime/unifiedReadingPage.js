(function initUnifiedReadingPage(global) {
    'use strict';

    const MESSAGE_SOURCE = 'practice_page';
    const INIT_RETRY_MS = 1500;
    const SIMULATION_DRAFT_SYNC_MS = 1200;
    const SINGLE_DRAFT_KEY_PREFIX = 'ielts_single_draft::';
    const ANNOTATION_RECOVERY_KEY_PREFIX = 'ielts_annotation_recovery::';
    const EXPLANATION_STYLE_ID = 'reading-explanation-style';
    const PRACTICE_TIMER_BRIDGE_KEY = '__IELTS_PRACTICE_TIMER__';
    const PRACTICE_TIMER_EVENT = 'practiceTimerStateChange';
    const EXPLANATION_SPLIT_KINDS = new Set([
        'single_choice',
        'multi_choice',
        'true_false_not_given',
        'yes_no_not_given'
    ]);
    const navStatus = new Map();
    const scriptCache = new Map();
    let offlineRuntimePromise = null;

    function ensureOfflineRuntime() {
        if (global.OfflineReady) return Promise.resolve(global.OfflineReady);
        if (offlineRuntimePromise) return offlineRuntimePromise;
        offlineRuntimePromise = loadScript('../../../js/runtime/offlineReady.js')
            .then(() => global.OfflineReady || null)
            .catch((error) => {
                console.warn('[UnifiedReadingPage] Offline support unavailable:', error);
                return null;
            });
        return offlineRuntimePromise;
    }

    function getAnswerMatchCore() {
        const core = global.AnswerMatchCore;
        if (!core || typeof core !== 'object') {
            return null;
        }
        return core;
    }

    const state = {
        examId: null,
        dataKey: null,
        sessionId: null,
        suiteSessionId: null,
        reviewSessionId: null,
        reviewRecordId: null,
        reviewEntryIndex: 0,
        reviewMode: false,
        reviewViewMode: null,
        readOnly: false,
        forceResume: false,
        reviewContext: null,
        suiteReviewMode: false,
        pageStartTime: Date.now(),
        pagePausedAtMs: null,
        pagePausedOffsetMs: 0,
        simulationGlobalAnchorMs: null,
        suiteTimerAnchorMs: null,
        suiteTimerMode: null,
        suiteTimerLimitSeconds: null,
        ready: false,
        submitted: false,
        initTimer: null,
        manifestLoaded: false,
        dataset: null,
        explanation: null,
        lastResults: null,
        simulationMode: false,
        simulationCtx: null,
        simulationContextReady: false,
        simulationDraftSyncTimer: null,
        simulationDraftFingerprint: '',
        singleDraftSaveTimer: null,
        singleDraftHandlersBound: false,
        suiteSequenceExamIds: [],
        suiteBooting: true,
        suiteRestoreDone: false,
        suiteDatasets: null,
        suiteNavigating: false,
        // 交卷后的本地三篇回顾：{ summary, answersByExam }
        suiteLocalReview: null,
        localReviewRenderToken: 0,
        localReviewRenderSettled: true,
        suiteBlueprint: null,
        suiteBlueprintKey: '',
        lastInitSignature: '',
        lastReplaySignature: '',
        sessionReadySent: false,
        parentWindow: global.opener || global.parent || null
    };

    const dom = {
        title: null,
        subtitle: null,
        left: null,
        groups: null,
        results: null,
        nav: null,
        submitBtn: null,
        resetBtn: null
    };

    function getPracticeTimerBridge() {
        return global[PRACTICE_TIMER_BRIDGE_KEY];
    }

    function getPracticeTimerSnapshot() {
        return getPracticeTimerBridge().getSnapshot();
    }

    function getPageElapsedSeconds() {
        const referenceNow = Number.isFinite(state.pagePausedAtMs)
            ? state.pagePausedAtMs
            : Date.now();
        return Math.max(
            0,
            Math.round((referenceNow - state.pageStartTime - state.pagePausedOffsetMs) / 1000)
        );
    }

    function syncPagePauseState(isRunning) {
        const running = isRunning !== false;
        const now = Date.now();
        if (!running) {
            if (!Number.isFinite(state.pagePausedAtMs)) {
                state.pagePausedAtMs = now;
            }
            return;
        }
        if (Number.isFinite(state.pagePausedAtMs)) {
            state.pagePausedOffsetMs += Math.max(0, now - state.pagePausedAtMs);
            state.pagePausedAtMs = null;
        }
    }

    function resolvePracticeTiming(minDurationSeconds = 0) {
        const snapshot = getPracticeTimerSnapshot();
        return {
            duration: Math.max(minDurationSeconds, Math.round(Number(snapshot.durationSeconds))),
            startTimeMs: Math.floor(Number(snapshot.effectiveStartTimeMs)),
            endTimeMs: Math.floor(Number(snapshot.effectiveEndTimeMs))
        };
    }

    function decodeParam(value) {
        if (!value) return '';
        try {
            return decodeURIComponent(value.replace(/\+/g, ' '));
        } catch (_) {
            return value;
        }
    }

    // 秒 →「X 分 Y 秒」（套题总用时 / 每篇停留时间显示用）
    function formatDurationLabel(seconds) {
        const total = Math.max(0, Math.round(Number(seconds) || 0));
        return `${Math.floor(total / 60)} 分 ${String(total % 60).padStart(2, '0')} 秒`;
    }

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function parseQuery() {
        const params = new URLSearchParams(global.location.search);
        state.examId = decodeParam(params.get('examId')) || null;
        state.dataKey = decodeParam(params.get('dataKey')) || state.examId;
        // 回顾模式：URL 带 review=1 时同步进入只读回顾态（不弹续做、禁高亮、冻结计时）
        const reviewFlag = decodeParam(params.get('review')).trim();
        if (reviewFlag === '1' || reviewFlag.toLowerCase() === 'true') {
            state.reviewMode = true;
            state.readOnly = true;
        }
        // 续做模式：URL 带 resume=1 时，从「未完成」列表进入，直接恢复草稿不再弹窗
        // （sessionStorage 在跨窗口打开时不可靠，URL 参数才是可靠信道）
        const resumeFlag = decodeParam(params.get('resume')).trim();
        if (resumeFlag === '1' || resumeFlag.toLowerCase() === 'true') {
            state.forceResume = true;
        }
        const suiteSessionId = decodeParam(params.get('suiteSessionId')) || null;
        if (suiteSessionId) {
            state.suiteSessionId = suiteSessionId;
        }
        const suiteTimerAnchorMs = Number(params.get('suiteTimerAnchorMs') || params.get('globalTimerAnchorMs'));
        if (Number.isFinite(suiteTimerAnchorMs) && suiteTimerAnchorMs > 0) {
            state.suiteTimerAnchorMs = Math.floor(suiteTimerAnchorMs);
            state.simulationGlobalAnchorMs = Math.floor(suiteTimerAnchorMs);
        }
        const suiteTimerMode = decodeParam(params.get('suiteTimerMode')).trim().toLowerCase();
        if (suiteTimerMode === 'countdown' || suiteTimerMode === 'elapsed') {
            state.suiteTimerMode = suiteTimerMode;
        }
        const suiteTimerLimitSeconds = Number(params.get('suiteTimerLimitSeconds'));
        if (Number.isFinite(suiteTimerLimitSeconds) && suiteTimerLimitSeconds >= 0) {
            state.suiteTimerLimitSeconds = Math.floor(suiteTimerLimitSeconds);
        }
        const queryFlowMode = decodeParam(params.get('suiteFlowMode')).trim().toLowerCase();
        if (queryFlowMode === 'simulation') {
            const rawIndex = Number(params.get('suiteSequenceIndex'));
            const rawTotal = Number(params.get('suiteSequenceTotal'));
            const currentIndex = Number.isFinite(rawIndex) ? Math.max(0, rawIndex) : 0;
            const total = Number.isFinite(rawTotal) && rawTotal > 0 ? rawTotal : 3;
            const isLast = currentIndex >= total - 1;
            state.simulationMode = true;
            state.simulationCtx = {
                currentIndex,
                total,
                isLast,
                canPrev: currentIndex > 0,
                canNext: !isLast,
                flowMode: 'simulation'
            };
            // 套题全部小节 examId（逗号分隔）。通过 URL 直接下发，确保「打开即三篇」，
            // 不再单纯依赖父窗口 SIMULATION_CONTEXT 消息（该消息可能因时序竞态丢失，导致只显示一篇）。
        }
        // 套题小节序列由 URL 直接下发，模拟/经典/驻足三种流程通用：
        // 经典流程没有页内跨篇导航，但仍需要它来定位并恢复当前小节的已存作答。
        const seqIdsRaw = decodeParam(params.get('suiteSequenceExamIds'));
        if (seqIdsRaw) {
            const ids = seqIdsRaw.split(',').map((s) => s.trim()).filter(Boolean);
            if (ids.length > 1) {
                state.suiteSequenceExamIds = ids;
            }
        }
    }

    function captureDom() {
        dom.title = document.getElementById('exam-title');
        dom.subtitle = document.getElementById('exam-subtitle');
        dom.partLabel = document.getElementById('exam-part-label');
        dom.partInstruction = document.getElementById('exam-part-instruction');
        dom.suiteCustomModeBadge = document.getElementById('suite-custom-mode-badge');
        dom.left = document.getElementById('left');
        dom.groups = document.getElementById('question-groups');
        dom.results = document.getElementById('results');
        dom.nav = document.getElementById('question-nav');
        dom.submitBtn = document.getElementById('submit-btn');
        dom.resetBtn = document.getElementById('reset-btn');
    }

    function loadScript(url) {
        if (!url) {
            return Promise.reject(new Error('reading_exam_script_missing'));
        }
        if (scriptCache.has(url)) {
            return scriptCache.get(url);
        }
        const promise = new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = url;
            script.defer = true;
            script.onload = () => { script.remove(); resolve(true); };
            script.onerror = () => { script.remove(); scriptCache.delete(url); reject(new Error(`reading_exam_script_failed:${url}`)); };
            document.head.appendChild(script);
        });
        scriptCache.set(url, promise);
        return promise;
    }

    async function ensureManifest() {
        if (global.__READING_EXAM_MANIFEST__) {
            return global.__READING_EXAM_MANIFEST__;
        }
        await loadScript('./manifest.js');
        return global.__READING_EXAM_MANIFEST__ || {};
    }

    async function ensureDataset() {
        const manifest = await ensureManifest();
        const entry = manifest[state.dataKey] || manifest[state.examId];
        const registry = global.__READING_EXAM_DATA__;
        if (!entry) {
            throw new Error(`reading_exam_manifest_entry_missing:${state.examId}`);
        }
        if (!registry || typeof registry.get !== 'function') {
            throw new Error('reading_exam_registry_missing');
        }
        if (!registry.has(entry.dataKey)) {
            await loadScript(entry.script);
        }
        const dataset = registry.get(entry.dataKey);
        if (!dataset) {
            throw new Error(`reading_exam_dataset_missing:${entry.dataKey}`);
        }
        state.dataset = dataset;
        state.dataKey = entry.dataKey;
        return dataset;
    }

    // 加载指定 examId 的数据集（不修改当前页 state，供套题导航构建全局题号）
    async function loadDatasetFor(examId) {
        if (!examId) return null;
        if (state.suiteDatasets && state.suiteDatasets.has(String(examId))) return state.suiteDatasets.get(String(examId));
        let manifest = {};
        try {
            manifest = await ensureManifest();
        } catch (_) {
            return null;
        }
        const entry = manifest[examId];
        if (!entry || !entry.dataKey) return null;
        const registry = global.__READING_EXAM_DATA__;
        if (!registry || typeof registry.get !== 'function') return null;
        if (!registry.has(entry.dataKey)) {
            try {
                await loadScript(entry.script);
            } catch (_) {
                return null;
            }
        }
        return registry.get(entry.dataKey) || null;
    }

    // 读取某小节在本套题会话中已作答的题目集合（来自草稿镜像）
    function getAnsweredSetForExam(examId) {
        const set = new Set();
        const suiteSessionId = state.suiteSessionId ? String(state.suiteSessionId).trim() : '';
        const targetExamId = examId ? String(examId).trim() : '';
        if (!suiteSessionId || !targetExamId) {
            return set;
        }
        try {
            const saved = readSuiteSavedEntry(targetExamId);
            const answers = saved && saved.draft && saved.draft.answers;
            if (answers && typeof answers === 'object') {
                Object.keys(answers).forEach((qid) => {
                    const value = answers[qid];
                    const hasValue = Array.isArray(value)
                        ? value.length > 0
                        : (value != null && String(value).trim() !== '');
                    if (hasValue) {
                        set.add(qid);
                    }
                });
            }
        } catch (_) {
            // ignore malformed mirror
        }
        return set;
    }

    /**
     * 读取套题中某一篇的完整作答（当前篇直接从 DOM 收集，其余篇取草稿镜像）。
     * 注意：镜像会在交卷后被 clearSimulationDraftMirror 清除，需在此之前调用。
     */
    function getDraftForExam(examId) {
        const targetExamId = examId ? String(examId).trim() : '';
        const currentExamId = state.examId ? String(state.examId).trim() : '';
        if (targetExamId && targetExamId === currentExamId) {
            return collectCurrentDraft();
        }
        const suiteSessionId = state.suiteSessionId ? String(state.suiteSessionId).trim() : '';
        if (!suiteSessionId || !targetExamId) {
            return {};
        }
        try {
            const sessionRaw = global.sessionStorage
                ? global.sessionStorage.getItem('ielts_sim_draft::' + suiteSessionId + '::' + targetExamId)
                : null;
            const localRaw = global.localStorage
                ? global.localStorage.getItem('ielts_suite_draft::' + suiteSessionId + '::' + targetExamId)
                : null;
            const sessionSaved = JSON.parse(sessionRaw || 'null');
            const localSaved = JSON.parse(localRaw || 'null');
            const progress = readSuiteProgress();
            const progressDraft = progress?.draftsByExam?.[targetExamId];
            const candidates = [
                { draft: sessionSaved?.draft, savedAt: Number(sessionSaved?.updatedAt) || 0 },
                { draft: localSaved?.draft, savedAt: Number(localSaved?.savedAt) || 0 },
                {
                    draft: progressDraft,
                    savedAt: Number(progress?.draftSavedAtByExam?.[targetExamId])
                        || Number(progress?.updatedAt)
                        || 0
                }
            ].filter((entry) => entry.draft && typeof entry.draft === 'object');
            const contentful = candidates.filter((entry) => draftHasContent(entry.draft));
            const pool = contentful.length ? contentful : candidates;
            pool.sort((left, right) => right.savedAt - left.savedAt);
            return pool[0]?.draft || {};
        } catch (_) {
            return {};
        }
    }

    /**
     * 逐篇计算套题成绩，返回可直接渲染的小节数组。
     * 每篇用自己的 answerKey 与 questionOrder，题号沿用该篇的显示编号。
     */
    function buildSuiteResultSections() {
        const blueprint = state.suiteBlueprint;
        if (!blueprint || !Array.isArray(blueprint.passages) || blueprint.passages.length <= 1) {
            return null;
        }

        // 作答快照：交卷后草稿镜像会被清除，这里留存供「停留在页面回顾三篇」与导出使用
        const answersByExam = {};

        const sections = blueprint.passages.map((passage) => {
            const dataset = passage.dataset || (passage.isCurrent ? state.dataset : null);
            const answerKey = (dataset && dataset.answerKey) || {};
            const order = Array.isArray(dataset && dataset.questionOrder)
                ? dataset.questionOrder
                : Object.keys(answerKey);
            const passageDraft = getDraftForExam(passage.examId);
            const answers = passageDraft.answers && typeof passageDraft.answers === 'object'
                ? passageDraft.answers
                : {};
            const markedQuestions = Array.isArray(passageDraft.markedQuestions)
                ? passageDraft.markedQuestions.slice()
                : [];
            const highlights = Array.isArray(passageDraft.highlights)
                ? passageDraft.highlights.slice()
                : [];
            const notes = Array.isArray(passageDraft.notes)
                ? passageDraft.notes.map((note) => Object.assign({}, note))
                : [];
            answersByExam[passage.examId] = answers;

            let correct = 0;
            let total = 0;
            const rows = order.map((questionId) => {
                const userAnswer = answers[questionId] || '';
                const correctAnswer = answerKey[questionId];
                const isCorrect = compareQuestionAnswer(questionId, userAnswer, correctAnswer, dataset);
                const weight = questionWeight(questionId, correctAnswer, dataset);
                total += weight;
                if (isCorrect) correct += weight;
                return {
                    questionId,
                    label: labelFromDataset(dataset, questionId),
                    userAnswer,
                    correctAnswer,
                    isCorrect
                };
            });

            // 该篇「停留做题时间」：当前篇取本页计时，其余篇取各自草稿里累计的 elapsed
            const savedEntryForPassage = passage.isCurrent ? null : readSuiteSavedEntry(passage.examId);
            const passageDuration = passage.isCurrent
                ? Math.max(0, Math.round(getPageElapsedSeconds()))
                : Math.max(0, Math.round(Number(savedEntryForPassage && savedEntryForPassage.elapsed) || 0));

            return {
                examId: passage.examId,
                label: passage.label,
                title: passage.title || '',
                isCurrent: passage.isCurrent,
                rows,
                markedQuestions,
                highlights,
                notes,
                duration: passageDuration,
                correct,
                total,
                percentage: total > 0 ? Math.round((correct / total) * 100) : 0
            };
        });

        const totalCorrect = sections.reduce((sum, s) => sum + s.correct, 0);
        const totalQuestions = sections.reduce((sum, s) => sum + s.total, 0);
        return {
            sections,
            answersByExam,
            correct: totalCorrect,
            total: totalQuestions,
            percentage: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
        };
    }

    /**
     * 回顾模式：把主页面下发的三篇小节整理成与交卷时一致的结构。
     * 题号沿用各篇自己的显示编号；该篇数据集未载入时退回原始 questionId。
     */
    async function buildSuiteSummaryFromReviewEntries(entries) {
        const blueprintById = new Map();
        if (state.suiteBlueprint && Array.isArray(state.suiteBlueprint.passages)) {
            state.suiteBlueprint.passages.forEach((passage) => {
                blueprintById.set(String(passage.examId), passage);
            });
        }

        // 回顾模式不走 simulation，blueprint 通常为空；按需载入各篇数据集，
        // 以还原真实题号（P1 1-13 / P2 14-26 / P3 27-40）与题目顺序
        const datasetById = new Map();
        await Promise.all(entries.map(async (entry) => {
            const examId = String(entry.examId || '');
            if (!examId) return;
            const passage = blueprintById.get(examId);
            if (passage && passage.dataset) {
                datasetById.set(examId, passage.dataset);
                return;
            }
            if (examId === String(state.examId || '') && state.dataset) {
                datasetById.set(examId, state.dataset);
                return;
            }
            try {
                datasetById.set(examId, await loadDatasetFor(examId));
            } catch (error) {
                console.warn('[UnifiedReadingPage] 回顾载入数据集失败:', examId, error);
            }
        }));

        const answersByExam = {};

        const sections = entries.map((entry, index) => {
            const examId = String(entry.examId || '');
            const passage = blueprintById.get(examId);
            const dataset = datasetById.get(examId) || null;
            answersByExam[examId] = normalizeReplayMap(entry.answers || {});

            const comparison = normalizeReplayMap(entry.answerComparison || {});
            const answers = normalizeReplayMap(entry.answers || {});
            const correctAnswers = normalizeReplayMap(entry.correctAnswers || {});
            const order = Array.isArray(dataset && dataset.questionOrder) && dataset.questionOrder.length
                ? dataset.questionOrder
                : Object.keys(comparison);

            let correct = 0;
            let total = 0;
            const rows = order.map((questionId) => {
                const raw = comparison[questionId];
                const cmp = (raw && typeof raw === 'object' && !Array.isArray(raw)) ? raw : {};
                const userAnswer = Object.prototype.hasOwnProperty.call(cmp, 'userAnswer')
                    ? cmp.userAnswer
                    : (answers[questionId] || '');
                const correctAnswer = Object.prototype.hasOwnProperty.call(cmp, 'correctAnswer')
                    ? cmp.correctAnswer
                    : (correctAnswers[questionId] != null
                        ? correctAnswers[questionId]
                        : (dataset && dataset.answerKey ? dataset.answerKey[questionId] : ''));
                const isCorrect = typeof cmp.isCorrect === 'boolean'
                    ? cmp.isCorrect
                    : compareAnswers(userAnswer, correctAnswer);
                total += 1;
                if (isCorrect) correct += 1;
                return {
                    questionId,
                    label: dataset ? labelFromDataset(dataset, questionId) : String(questionId).replace(/^q/i, ''),
                    userAnswer,
                    correctAnswer,
                    isCorrect
                };
            });

            // 记录里已有得分时以其为准，避免与保存时的判定口径不一致
            const scored = entry.scoreInfo || {};
            const finalCorrect = Number.isFinite(Number(scored.correct)) ? Number(scored.correct) : correct;
            const finalTotal = Number.isFinite(Number(scored.total)) && Number(scored.total) > 0
                ? Number(scored.total)
                : total;

            return {
                examId,
                label: (passage && passage.label) || entry.category || ('Part ' + (index + 1)),
                title: entry.title || (passage && passage.title) || '',
                isCurrent: entry.isCurrent === true,
                dataset,
                rows,
                markedQuestions: Array.isArray(entry.markedQuestions) ? entry.markedQuestions.slice() : [],
                highlights: Array.isArray(entry.highlights) ? entry.highlights.slice() : [],
                notes: Array.isArray(entry.notes) ? entry.notes.map((note) => Object.assign({}, note)) : [],
                duration: Number(entry.duration) || 0,
                correct: finalCorrect,
                total: finalTotal,
                percentage: finalTotal > 0 ? Math.round((finalCorrect / finalTotal) * 100) : 0
            };
        });

        const totalCorrect = sections.reduce((sum, s) => sum + s.correct, 0);
        const totalQuestions = sections.reduce((sum, s) => sum + s.total, 0);
        const totalDuration = sections.reduce((sum, section) => sum + (Number(section.duration) || 0), 0);
        return {
            sections,
            answersByExam,
            duration: totalDuration,
            correct: totalCorrect,
            total: totalQuestions,
            percentage: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0
        };
    }

    /**
     * 交卷后转入「本地三篇回顾」：题号导航改为就地切换小节，
     * 不再向主页面派发跳转（此时套题会话已结算，消息无人接收）。
     */
    function enterLocalSuiteReview(summary) {
        state.suiteLocalReview = {
            summary,
            answersByExam: (summary && summary.answersByExam) || {}
        };
        state.localReviewRenderSettled = true;
        setReadOnlyMode(true);
        state.reviewViewMode = 'review';
    }

    function syncCurrentLocalReviewAnnotations() {
        const local = state.suiteLocalReview;
        if (!local || !local.summary || !Array.isArray(local.summary.sections) || !state.localReviewRenderSettled) return;
        const section = local.summary.sections.find((item) => String(item.examId) === String(state.examId));
        if (!section) return;
        section.highlights = collectHighlights();
        section.notes = typeof global.getPracticeNotes === 'function' ? global.getPracticeNotes() : [];
        section.markedQuestions = typeof global.getPracticeMarkedQuestions === 'function'
            ? global.getPracticeMarkedQuestions()
            : (section.markedQuestions || []);
    }

    function configureHistorySuiteReview(summary) {
        if (!summary || !Array.isArray(summary.sections) || summary.sections.length <= 1) return;
        const currentIndex = Math.max(0, summary.sections.findIndex((section) => section.isCurrent));
        const passages = summary.sections.map((section, index) => {
            const dataset = section.dataset || null;
            const order = Array.isArray(dataset?.questionOrder) ? dataset.questionOrder : [];
            return {
                index,
                examId: section.examId,
                label: `P${index + 1}`,
                title: section.title || dataset?.meta?.title || '',
                isCurrent: index === currentIndex,
                dataset,
                questions: order.map((questionId) => ({
                    localQuestionId: questionId,
                    label: labelFromDataset(dataset, questionId)
                })),
                answeredSet: new Set((section.rows || [])
                    .filter((row) => Array.isArray(row.userAnswer)
                        ? row.userAnswer.some((value) => String(value == null ? '' : value).trim())
                        : String(row.userAnswer == null ? '' : row.userAnswer).trim())
                    .map((row) => row.questionId))
            };
        });
        state.suiteReviewMode = true;
        state.suiteSequenceExamIds = passages.map((passage) => passage.examId);
        state.suiteBlueprint = { passages };
        state.suiteBlueprintKey = `history-review::${state.reviewSessionId || ''}::${state.suiteSequenceExamIds.join('|')}`;
        enterLocalSuiteReview(summary);
    }

    /** 就地切换到套题中的某一篇（仅交卷后的本地回顾使用） */
    async function renderSuitePassageLocally(targetIndex) {
        const blueprint = state.suiteBlueprint;
        const local = state.suiteLocalReview;
        if (!blueprint || !local || !Array.isArray(blueprint.passages)) return;
        const passage = blueprint.passages[targetIndex];
        if (!passage) return;
        syncCurrentLocalReviewAnnotations();
        const renderToken = ++state.localReviewRenderToken;
        state.localReviewRenderSettled = false;

        let dataset = passage.dataset;
        if (!dataset) {
            try {
                dataset = await loadDatasetFor(passage.examId);
                passage.dataset = dataset;
            } catch (error) {
                if (renderToken === state.localReviewRenderToken) state.localReviewRenderSettled = true;
                console.error('[UnifiedReadingPage] 回顾载入小节失败:', passage.examId, error);
                return;
            }
        }
        if (renderToken !== state.localReviewRenderToken) return;

        // 切换当前篇：渲染其文章与题目，并回填该篇作答
        state.examId = passage.examId;
        state.dataKey = passage.examId;
        state.dataset = dataset;
        renderDataset(dataset);

        const answers = local.answersByExam[passage.examId] || {};
        applyReplayAnswersToDom(answers);
        setReadOnlyMode(true);

        blueprint.passages.forEach((item, index) => {
            item.isCurrent = index === targetIndex;
        });
        const section = local.summary?.sections?.find((item) => item.examId === passage.examId) || null;
        const answerComparison = {};
        (section?.rows || []).forEach((row) => {
            answerComparison[row.questionId] = {
                userAnswer: row.userAnswer,
                correctAnswer: row.correctAnswer,
                isCorrect: row.isCorrect
            };
        });
        state.lastResults = {
            answers,
            answerComparison,
            correct: Number(section?.correct) || 0,
            total: Number(section?.total) || 0,
            percentage: Number(section?.percentage) || 0
        };
        navStatus.clear();
        updateNavStatuses(state.lastResults);

        // 结果面板保持三篇合计，切换小节不应把它冲掉
        renderSuiteResults(local.summary);
        try {
            await renderExplanations();
        } catch (_) {
            // 解析渲染失败不影响回顾
        }
        if (renderToken !== state.localReviewRenderToken || String(state.examId) !== String(passage.examId)) return;
        applyHighlights(section?.highlights || []);
        if (typeof global.setPracticeNotes === 'function') {
            global.setPracticeNotes(section?.notes || []);
        }
        if (typeof global.setPracticeMarkedQuestions === 'function') {
            global.setPracticeMarkedQuestions(section?.markedQuestions || []);
        }
        state.localReviewRenderSettled = true;
    }

    function suiteResultRowsHtml(rows, markedQuestions = []) {
        const markedSet = new Set(markedQuestions.map((value) => String(value).replace(/^q/i, '')));
        return rows.map((row) => {
            const isMarked = markedSet.has(String(row.questionId).replace(/^q/i, ''));
            const userAnswer = Array.isArray(row.userAnswer)
                ? row.userAnswer.join(', ')
                : (row.userAnswer || '未作答');
            const correctAnswer = Array.isArray(row.correctAnswer)
                ? row.correctAnswer.join(', ')
                : (row.correctAnswer || '');
            return `
                <tr${isMarked ? ' class="suite-print__marked-row"' : ''}>
                    <td>${isMarked ? '<strong class="suite-print__mark-star">★</strong> ' : ''}${row.label}</td>
                    <td>${userAnswer}</td>
                    <td>${correctAnswer}</td>
                    <td class="${row.isCorrect ? 'result-correct' : 'result-incorrect'}">${row.isCorrect ? '✓' : '✗'}</td>
                </tr>
            `;
        }).join('');
    }

    /** 交卷后按 P1/P2/P3 分篇呈现三篇结果，并给出总分与雅思分数 */
    // 顶部成绩条：提交后在页面顶部清晰显示「答对 X / 共 N 题」，套题另给雅思分数
    function ensureScoreBanner() {
        if (dom.scoreBanner && document.body.contains(dom.scoreBanner)) return dom.scoreBanner;
        const banner = document.createElement('section');
        banner.className = 'practice-score-banner';
        banner.setAttribute('aria-live', 'polite');
        banner.hidden = true;
        const anchor = document.querySelector('.exam-instruction-banner');
        if (anchor && anchor.parentNode) {
            anchor.parentNode.insertBefore(banner, anchor.nextSibling);
        } else if (document.querySelector('.shell')) {
            const shell = document.querySelector('.shell');
            shell.parentNode.insertBefore(banner, shell);
        } else {
            document.body.insertBefore(banner, document.body.firstChild);
        }
        dom.scoreBanner = banner;
        return banner;
    }

    function suiteBandLabel(correct, total) {
        const core = global.IeltsBandScore;
        if (!core || typeof core.scoreSuite !== 'function') return null;
        try {
            return core.scoreSuite(correct, total) || null;
        } catch (error) {
            console.error('[UnifiedReadingPage] 计算分数失败:', error);
            return null;
        }
    }

    function renderScoreBanner(info) {
        if (!info || !Number.isFinite(Number(info.total)) || Number(info.total) <= 0) return;
        const banner = ensureScoreBanner();
        const correct = Number(info.correct) || 0;
        const total = Number(info.total) || 0;
        const percentage = Number.isFinite(Number(info.percentage))
            ? Math.round(Number(info.percentage))
            : Math.round((correct / total) * 100);
        const bandHtml = info.bandLabel
            ? `<span class="practice-score-banner__band">雅思 ${info.bandLabel}${info.estimated ? '（折算）' : ''}</span>`
            : '';
        banner.innerHTML = `
            <span class="practice-score-banner__title">${info.title || '本次答题'}</span>
            <span class="practice-score-banner__main">答对 <strong>${correct}</strong> / 共 <strong>${total}</strong> 题</span>
            <span class="practice-score-banner__rate">正确率 ${percentage}%</span>
            ${bandHtml}
        `;
        banner.hidden = false;
    }

    function hideScoreBanner() {
        if (dom.scoreBanner) {
            dom.scoreBanner.hidden = true;
            dom.scoreBanner.innerHTML = '';
        }
    }

    function renderSuiteResults(summary) {
        if (!dom.results || !summary || !Array.isArray(summary.sections)) return;

        const bandInfo = global.IeltsBandScore && typeof global.IeltsBandScore.scoreSuite === 'function'
            ? global.IeltsBandScore.scoreSuite(summary.correct, summary.total)
            : null;
        const bandHtml = bandInfo && bandInfo.bandLabel
            ? `<span class="suite-result-band">雅思 ${bandInfo.bandLabel}${bandInfo.estimated ? '（折算）' : ''}</span>`
            : '';

        const sectionsHtml = summary.sections.map((section) => `
            <section class="suite-result-section${section.isCurrent ? ' is-current' : ''}">
                <div class="suite-result-section__head">
                    <span class="suite-result-section__tag">${section.label}</span>
                    <span class="suite-result-section__title">${section.title}</span>
                    <span class="suite-result-section__time">停留 ${formatDurationLabel(section.duration)}</span>
                    <span class="suite-result-section__score">${section.correct}/${section.total} · ${section.percentage}%</span>
                </div>
                <table class="results-table">
                    <thead>
                        <tr><th>题号</th><th>你的答案</th><th>正确答案</th><th>结果</th></tr>
                    </thead>
                    <tbody>${suiteResultRowsHtml(section.rows)}</tbody>
                </table>
            </section>
        `).join('');

        dom.results.innerHTML = `
            <h4>套题结果 · 三篇合计</h4>
            <p class="suite-result-total">得分 ${summary.correct} / ${summary.total} · ${summary.percentage}% ${bandHtml}</p>
            <p class="suite-result-duration">总用时 ${formatDurationLabel(summary.duration)}${summary.sections && summary.sections.length ? ` · 三篇停留时间 ${summary.sections.map((sec) => `${sec.label} ${formatDurationLabel(sec.duration)}`).join(' / ')}` : ''}</p>
            ${sectionsHtml}
        `;
        dom.results.style.display = 'block';
    }

    function labelFromDataset(dataset, questionId) {
        const map = (dataset && dataset.questionDisplayMap) || {};
        if (map[questionId]) {
            return map[questionId];
        }
        return String(questionId).replace(/^q/i, '');
    }

    function passageLabelFromDataset(dataset, index) {
        const category = dataset && dataset.meta && dataset.meta.category
            ? String(dataset.meta.category).trim()
            : '';
        return category || `P${index + 1}`;
    }

    // 构建套题题目导航蓝图：合并所有小节的题目，支持一次看到全部 ~40 题并跨篇跳转
    async function ensureSuiteBlueprint() {
        const ids = Array.isArray(state.suiteSequenceExamIds) ? state.suiteSequenceExamIds : [];
        if (!state.simulationMode || ids.length <= 1) {
            state.suiteBlueprint = null;
            state.suiteBlueprintKey = '';
            return;
        }
        const key = `${state.suiteSessionId || ''}::${ids.join('|')}::${state.examId || ''}`;
        if (state.suiteBlueprintKey === key && state.suiteBlueprint) {
            // 已构建，仅刷新跨篇作答状态
            refreshSuiteAnsweredSets();
            buildQuestionNav();
            return;
        }

        const currentExamId = state.examId != null ? String(state.examId).trim() : '';
        const datasets = await Promise.all(ids.map((examId) => {
            if (String(examId).trim() === currentExamId) {
                return Promise.resolve(state.dataset);
            }
            return loadDatasetFor(examId);
        }));
        const missingDatasetIndex = datasets.findIndex((dataset) => !dataset || !dataset.answerKey);
        if (missingDatasetIndex >= 0) {
            throw new Error('suite_dataset_incomplete:' + ids[missingDatasetIndex]);
        }

        const passages = ids.map((examId, index) => {
            const dataset = datasets[index];
            const isCurrent = String(examId).trim() === currentExamId;
            const order = Array.isArray(dataset && dataset.questionOrder) ? dataset.questionOrder : [];
            const questions = order.map((qid) => ({
                localQuestionId: qid,
                label: labelFromDataset(dataset, qid)
            }));
            return {
                index,
                examId: String(examId),
                isCurrent,
                label: `P${index + 1}`,
                title: (dataset && dataset.meta && dataset.meta.title) || '',
                // 保留数据集：交卷时据此就地算出三篇的成绩（含各自 answerKey）
                dataset,
                questions,
                answeredSet: isCurrent ? null : getAnsweredSetForExam(examId)
            };
        });

        state.suiteBlueprint = { passages };
        state.suiteBlueprintKey = key;
        refreshSuiteAnsweredSets();
        buildQuestionNav();
        updateNavStatuses();
    }

    function refreshSuiteAnsweredSets() {
        if (!state.suiteBlueprint || !Array.isArray(state.suiteBlueprint.passages)) {
            return;
        }
        state.suiteBlueprint.passages.forEach((passage) => {
            if (!passage.isCurrent) {
                passage.answeredSet = getAnsweredSetForExam(passage.examId);
            }
        });
    }

    async function ensureExplanationManifest() {
        if (global.__READING_EXPLANATION_MANIFEST__) {
            return global.__READING_EXPLANATION_MANIFEST__;
        }
        await loadScript('../reading-explanations/manifest.js');
        return global.__READING_EXPLANATION_MANIFEST__ || {};
    }

    async function ensureExplanationDataset() {
        const registry = global.__READING_EXPLANATION_DATA__;
        if (!registry || typeof registry.get !== 'function') {
            return null;
        }
        let manifest = {};
        try {
            manifest = await ensureExplanationManifest();
        } catch (_) {
            return null;
        }
        const entry = manifest[state.dataKey] || manifest[state.examId];
        if (!entry || !entry.dataKey || !entry.script) {
            return null;
        }
        if (!registry.has(entry.dataKey)) {
            try {
                await loadScript(entry.script);
            } catch (_) {
                return null;
            }
        }
        const payload = registry.get(entry.dataKey);
        state.explanation = payload || null;
        return state.explanation;
    }

    // 按指定篇目加载解析数据（套题导出 PDF 时要为三篇分别取，不能只用当前页的 state.dataKey）
    async function loadExplanationPayloadFor(examId, dataKey) {
        const registry = global.__READING_EXPLANATION_DATA__;
        if (!registry || typeof registry.get !== 'function') return null;
        let manifest = {};
        try {
            manifest = await ensureExplanationManifest();
        } catch (_) {
            return null;
        }
        const entry = manifest[dataKey] || manifest[examId];
        if (!entry || !entry.dataKey || !entry.script) return null;
        if (!registry.has(entry.dataKey)) {
            try {
                await loadScript(entry.script);
            } catch (_) {
                return null;
            }
        }
        return registry.get(entry.dataKey) || null;
    }

    // 套题 PDF 用：把某篇的逐题解析渲染成打印版 HTML（与页面上的解析卡同一套类名与内容）
    function buildPrintExplanationHtml(payload, dataset, section) {
        const sections = Array.isArray(payload && payload.questionExplanations) ? payload.questionExplanations : [];
        if (!sections.length) return '';
        const displayMap = (dataset && dataset.questionDisplayMap) || {};
        const rowMap = {};
        ((section && section.rows) || []).forEach((row) => {
            rowMap[String(row.questionId)] = row;
        });
        const renderValue = (value) => {
            if (Array.isArray(value)) {
                if (!value.length) return '';
                return `<ul class="reading-explanation-list">${value
                    .map((line) => `<li>${escapeHtml(String(line))}</li>`).join('')}</ul>`;
            }
            return escapeHtml(String(value == null ? '' : value));
        };
        const cards = [];
        sections.forEach((sec) => {
            (Array.isArray(sec.items) ? sec.items : []).forEach((item) => {
                const qid = String(item.questionId || '');
                if (!qid) return;
                const number = displayMap[qid] || qid.replace(/^q/i, '');
                const outcome = rowMap[qid] || null;
                const userText = outcome ? formatAnswerForDisplay(outcome.userAnswer) : '';
                const blank = outcome ? !userText : true;
                const correct = !!(outcome && outcome.isCorrect === true);
                const rows = [
                    ['题目', item.stem],
                    ['翻译', item.translation],
                    ['答案', formatAnswerForDisplay(item.answer)],
                    ['你的答案', outcome ? (userText || '未作答') : null],
                    ['词性分析', item.wordClass],
                    ['定位句', item.locating && item.locating.quote
                        ? `第 ${item.locating.paragraph || '?'} 段：${item.locating.quote}` : ''],
                    ['同义替换', Array.isArray(item.synonyms) ? item.synonyms : (item.synonyms ? [item.synonyms] : null)],
                    ['定位技巧', item.locatingTip],
                    ['解析', item.analysis],
                    ['辨析', Array.isArray(item.traps) ? item.traps : (item.traps ? [item.traps] : null)]
                ];
                const body = rows.map(([label, value]) => {
                    if (value == null || value === '' || (Array.isArray(value) && !value.length)) return '';
                    let chip = '';
                    let rowClass = 'reading-explanation-card__row';
                    if (label === '答案') {
                        rowClass += ' reading-explanation-card__row--answer';
                        chip = '<span class="reading-explanation-chip reading-explanation-chip--is-answer">正确答案</span>';
                    }
                    if (label === '你的答案' && outcome) {
                        rowClass += blank ? ' is-blank' : (correct ? ' is-correct' : ' is-wrong');
                        chip = `<span class="reading-explanation-chip reading-explanation-chip--${blank ? 'is-blank' : (correct ? 'is-correct' : 'is-wrong')}">${blank ? '未作答' : (correct ? '✓ 正确' : '✗ 错误')}</span>`;
                    }
                    return `<div class="${rowClass}"><span class="reading-explanation-card__key">${escapeHtml(label)}：</span>${renderValue(value)}${chip}</div>`;
                }).join('');
                cards.push(`
                    <div class="reading-explanation-card reading-question-explanation" data-question-id="${escapeHtml(qid)}">
                        <div class="reading-explanation-card__label">Q${escapeHtml(String(number))} 讲解</div>
                        ${body}
                    </div>
                `);
            });
        });
        if (!cards.length) return '';
        return `
            <div class="suite-print__explanations">
                <h3 class="suite-print__ak-title">题目解析 Explanations</h3>
                ${cards.join('')}
            </div>
        `;
    }

    function ensureExplanationStyles() {
        if (document.getElementById(EXPLANATION_STYLE_ID)) {
            return;
        }
        const style = document.createElement('style');
        style.id = EXPLANATION_STYLE_ID;
        style.textContent = `
            /* ===== 解析排版：统一字号梯度 17 / 16 / 14 / 11 =====
               基准 16px（试卷正文 18px 的下一级），行高一律 1.75；
               卡片标题 17px、行标签 14px、角标 11px，靠字重与颜色分层。
               试卷样式 #left li, #right li 是 18px，下面用更高优先级把卡片内的字号锁死。 */
            :is(#left, #right) :is(.reading-explanation-card, .reading-question-explanation-list) :is(p, li) {
                font-size: 16px;
                line-height: 1.75;
                color: #1f2937;
            }
            .reading-explanation-card {
                margin: 12px 0 16px;
                padding: 12px 14px 12px 16px;
                border: 1px solid rgba(37, 99, 235, 0.18);
                border-left: 4px solid rgba(37, 99, 235, 0.85);
                border-radius: 10px;
                background: rgba(239, 246, 255, 0.7);
                font-size: 16px;
                line-height: 1.75;
                color: #1f2937;
            }
            .reading-explanation-card__label {
                margin: 0 0 9px;
                padding-bottom: 7px;
                border-bottom: 1px dashed rgba(37, 99, 235, 0.28);
                font-size: 17px;
                line-height: 1.4;
                font-weight: 700;
                letter-spacing: 0.02em;
                color: #1d4ed8;
            }
            .reading-explanation-card__text {
                font-size: 16px;
                line-height: 1.75;
                color: #1f2937;
                white-space: pre-wrap;
            }
            .reading-explanation-card__row {
                display: flex;
                align-items: baseline;
                margin-top: 8px;
                font-size: 16px;
                line-height: 1.75;
                color: #1f2937;
            }
            .reading-explanation-card__row:first-child { margin-top: 0; }
            .reading-explanation-card__key {
                flex: 0 0 5.4em;
                font-size: 14px;
                font-weight: 700;
                line-height: 2;
                color: #1d4ed8;
                white-space: nowrap;
            }
            .reading-explanation-card__row > *:not(.reading-explanation-card__key) {
                flex: 1 1 auto;
                min-width: 0;
                max-width: 100%;
            }
            .reading-explanation-card__row--answer .reading-explanation-card__key { color: #047857; }
            .reading-explanation-card__row--answer > *:not(.reading-explanation-card__key) {
                font-weight: 700;
                color: #065f46;
            }
            .reading-explanation-card__quote { color: #334155; font-style: italic; }
            .reading-explanation-list {
                margin: 0;
                padding-left: 1.35em;
            }
            .reading-explanation-list li { margin-top: 3px; }
            .reading-explanation-link {
                display: inline-block;
                margin-top: 10px;
                font-size: 14px;
                font-weight: 600;
                color: #1d4ed8;
                text-decoration: none;
                border-bottom: 1px dashed currentColor;
                cursor: pointer;
            }
            .reading-explanation-link:hover { color: #1e40af; }
            .locating-mark {
                background: rgba(253, 224, 71, 0.38);
                border-bottom: 1px solid rgba(202, 138, 4, 0.55);
                border-radius: 3px 3px 0 0;
                cursor: pointer;
            }
            .locating-mark:hover { background: rgba(253, 224, 71, 0.62); }
            .locating-badge {
                display: inline-block;
                margin: 0 2px 0 1px;
                padding: 0 5px;
                font-size: 11px;
                font-weight: 700;
                line-height: 16px;
                vertical-align: super;
                border-radius: 8px;
                background: #f59e0b;
                color: #fff;
                cursor: pointer;
                user-select: none;
            }
            .locating-mark.is-flashing, .question-item.is-flashing,
            .tfng-item.is-flashing, .match-question-item.is-flashing,
            .summary-completion.is-flashing, .question-row.is-flashing {
                animation: locatingFlash 1.6s ease-out 2;
                outline: 2px solid rgba(245, 158, 11, 0.85);
                outline-offset: 2px;
                border-radius: 6px;
            }
            @keyframes locatingFlash {
                0% { background-color: rgba(253, 224, 71, 0.85); }
                100% { background-color: transparent; }
            }
            /* 顶部成绩条：提交后清晰显示答对数 / 总题数（套题另附分数） */
            .practice-score-banner {
                display: flex;
                align-items: center;
                flex-wrap: wrap;
                gap: 8px 18px;
                margin: 8px 18px 4px;
                padding: 10px 18px;
                border: 1px solid #cfd8de;
                border-left: 6px solid #267dbb;
                border-radius: 3px;
                background: #f4f8fb;
                color: #12374f;
                font-size: 17px;
                line-height: 1.5;
            }
            .practice-score-banner[hidden] { display: none; }
            .practice-score-banner__title {
                font-size: 15px;
                font-weight: 700;
                color: #456;
            }
            .practice-score-banner__main { font-size: 17px; }
            .practice-score-banner__main strong {
                font-size: 23px;
                font-weight: 700;
                color: #0b5ea8;
                padding: 0 2px;
            }
            .practice-score-banner__rate {
                font-size: 15px;
                color: #456;
            }
            .practice-score-banner__band {
                margin-left: auto;
                padding: 2px 12px;
                border-radius: 999px;
                background: #b45309;
                color: #fff;
                font-size: 17px;
                font-weight: 700;
                letter-spacing: 0.02em;
            }
            /* 解析卡：考生答案与对错标记 */
            .reading-explanation-chip {
                display: inline-block;
                margin-left: 8px;
                padding: 1px 9px;
                border-radius: 10px;
                border: 1px solid #d1d5db;
                background: #f3f4f6;
                color: #4b5563;
                font-size: 13px;
                font-weight: 700;
                line-height: 1.6;
                white-space: nowrap;
            }
            .reading-explanation-chip--is-answer {
                border-color: #86efac;
                background: #dcfce7;
                color: #14532d;
            }
            .reading-explanation-chip--is-correct {
                border-color: #86efac;
                background: #dcfce7;
                color: #14532d;
            }
            .reading-explanation-chip--is-wrong {
                border-color: #fca5a5;
                background: #fee2e2;
                color: #991b1b;
            }
            .reading-explanation-card__row.is-correct > *:not(.reading-explanation-card__key) { color: #15803d; }
            .reading-explanation-card__row.is-wrong > *:not(.reading-explanation-card__key) { color: #b91c1c; }
            .reading-explanation-card__row.is-blank > *:not(.reading-explanation-card__key) { color: #6b7280; }
            /* 套题 PDF：解析区紧凑排版，避免动辄几十页 */
            .suite-print__explanations { margin-top: 16px; }
            .suite-print__explanations .reading-explanation-card {
                margin: 9px 0;
                padding: 8px 10px;
                font-size: 11px;
                line-height: 1.6;
                break-inside: avoid;
                page-break-inside: avoid;
            }
            .suite-print__explanations .reading-explanation-card__label {
                margin-bottom: 5px;
                padding-bottom: 4px;
                font-size: 12px;
            }
            .suite-print__explanations .reading-explanation-card__row {
                margin-top: 4px;
                font-size: 11px;
                line-height: 1.6;
            }
            .suite-print__explanations .reading-explanation-card__key {
                flex: 0 0 5.2em;
                font-size: 10.5px;
                line-height: 1.7;
            }
            .suite-print__explanations .reading-explanation-list li {
                margin-top: 2px;
                font-size: 11px;
                line-height: 1.6;
            }
            .suite-print__explanations .reading-explanation-chip {
                margin-left: 6px;
                padding: 0 6px;
                font-size: 10px;
            }
            .reading-group-explanation,
            .reading-question-explanation { margin-top: 10px; scroll-margin-top: 12px; }
            .reading-question-explanation-item { scroll-margin-top: 12px; }
            .reading-question-explanation-list {
                margin-top: 10px;
                padding: 10px 12px;
                border: 1px dashed rgba(59, 130, 246, 0.45);
                border-radius: 8px;
                background: rgba(239, 246, 255, 0.45);
            }
            .reading-question-explanation-list h5 {
                margin: 0 0 8px;
                font-size: 17px;
                font-weight: 700;
                line-height: 1.45;
                color: #1e3a8a;
            }
            .reading-question-explanation-list .reading-question-explanation-item + .reading-question-explanation-item {
                margin-top: 9px;
            }

        `;
        document.head.appendChild(style);
    }

    function clearExplanations() {
        document.querySelectorAll(
            '.reading-explanation-card, .reading-group-explanation, .reading-question-explanation, .reading-question-explanation-list'
        ).forEach((node) => node.remove());
    }

    function parseQuestionNumber(value) {
        const match = String(value || '').match(/\d+/);
        return match ? Number(match[0]) : null;
    }

    function questionNumberFromId(questionId) {
        const label = displayLabel(questionId);
        const parsed = parseQuestionNumber(label);
        if (parsed != null) {
            return parsed;
        }
        return parseQuestionNumber(questionId);
    }

    // questionRange 允许 {start,end} 或 "1-6" / "Questions 1–6" 这样的字符串
    function normalizeQuestionRange(range) {
        if (range && Number.isFinite(Number(range.start)) && Number.isFinite(Number(range.end))) {
            return { start: Number(range.start), end: Number(range.end) };
        }
        const nums = String(range == null ? '' : range).match(/\d+/g);
        if (nums && nums.length >= 2) {
            return { start: Number(nums[0]), end: Number(nums[1]) };
        }
        if (nums && nums.length === 1) {
            return { start: Number(nums[0]), end: Number(nums[0]) };
        }
        return null;
    }

    function sectionOverlap(section, numbers = []) {
        const range = normalizeQuestionRange(section?.questionRange);
        if (!range || !Number.isFinite(range.start) || !Number.isFinite(range.end)) {
            return 0;
        }
        return numbers.filter((value) => Number.isFinite(value) && value >= range.start && value <= range.end).length;
    }

    function pickSectionForGroup(questionNumbers = [], preferMode = null) {
        return pickSectionsForGroup(questionNumbers, preferMode)[0] || null;
    }

    // 一个 DOM 题组可能横跨多个解析小节（例如 27–40 一段里含选择/摘要/判断三节），
    // 逐题渲染时必须把每个相交小节都取出来，否则只有第一节的题目能拿到讲解卡。
    function pickSectionsForGroup(questionNumbers = [], preferMode = null) {
        const sections = Array.isArray(state.explanation?.questionExplanations) ? state.explanation.questionExplanations : [];
        const filtered = preferMode ? sections.filter((item) => item?.mode === preferMode) : sections;
        return filtered
            .map((section, index) => ({ section, index, score: sectionOverlap(section, questionNumbers) }))
            .filter((entry) => entry.score > 0)
            .sort((a, b) => (b.score - a.score) || (a.index - b.index))
            .map((entry) => entry.section);
    }

    function createExplanationCard(label, text, className = '') {
        const card = document.createElement('div');
        card.className = `reading-explanation-card ${className}`.trim();
        if (label) {
            const header = document.createElement('div');
            header.className = 'reading-explanation-card__label';
            header.textContent = label;
            card.appendChild(header);
        }
        const body = document.createElement('div');
        body.className = 'reading-explanation-card__text';
        body.textContent = String(text || '').trim();
        card.appendChild(body);
        return card;
    }

    // ===== 解析定位句联动（ReadingExplanationV2：每题带 locating 段号+原句） =====
    function collectExplanationItems() {
        const sections = Array.isArray(state.explanation?.questionExplanations)
            ? state.explanation.questionExplanations : [];
        const items = [];
        sections.forEach((section) => {
            (Array.isArray(section?.items) ? section.items : []).forEach((item) => {
                if (item && (item.questionId || Number.isFinite(Number(item.questionNumber)))) items.push(item);
            });
        });
        return items;
    }

    function findExplanationItem(questionId) {
        const wanted = String(questionId || '');
        const num = Number(String(wanted).replace(/^q/i, ''));
        return collectExplanationItems().find((item) => String(item.questionId || '') === wanted
            || (Number.isFinite(num) && Number(item.questionNumber) === num)) || null;
    }

    function resolveLocating(questionId) {
        const item = findExplanationItem(questionId);
        const locating = item && item.locating;
        if (!locating || !locating.quote) return null;
        return { questionId: String(item.questionId || questionId), paragraph: locating.paragraph || '', quote: String(locating.quote) };
    }

    // 文章的正文段落（跳过标题、导语、以及解析卡片）
    function passageBodyParagraphs() {
        if (!dom.left) return [];
        return Array.from(dom.left.querySelectorAll('p')).filter((el) => {
            if (el.closest('.reading-explanation-card')) return false;
            const text = (el.textContent || '').trim();
            if (!text) return false;
            if (/^you should spend about/i.test(text)) return false;
            return true;
        });
    }

    function locateParagraphElement(paragraph) {
        const label = String(paragraph == null ? '' : paragraph).trim();
        const paragraphs = passageBodyParagraphs();
        if (!paragraphs.length) return null;
        const asNumber = Number(label.replace(/[^0-9]/g, ''));
        if (Number.isFinite(asNumber) && asNumber >= 1 && asNumber <= paragraphs.length) {
            return paragraphs[asNumber - 1];
        }
        if (/^[A-Za-z]$/.test(label)) {
            const letter = label.toUpperCase();
            const hit = paragraphs.find((el) => new RegExp(`(^|[^A-Za-z])${letter}([^A-Za-z]|$)`).test((el.textContent || '').slice(0, 40)));
            if (hit) return hit;
        }
        return null;
    }

    // 忽略标点前后的空格：`"Life , by"` 与 `"Life, by"` 视为同一串，同时记录回真实下标
    function buildLoosePunctuation(text) {
        const BEFORE = ',.;:!?)]}\u00bb\u201d\u2019';
        const AFTER = '([{\u00ab\u201c\u2018';
        let out = '';
        const index = [];
        for (let i = 0; i < text.length; i += 1) {
            const ch = text[i];
            const prev = out[out.length - 1] || '';
            const next = text[i + 1] || '';
            // 标点前的空格（"Life , by"）与左括号后的空格都视为不存在
            if (ch === ' ' && (BEFORE.includes(next) || AFTER.includes(prev))) continue;
            out += ch;
            index.push(i);
        }
        return { text: out, index: index };
    }

    // 题号可能是区间（例如 38-40 一组判断题）：角标取区间首个题号，避免整组没有角标
    function explanationBadgeNumber(value) {
        const first = String(value == null ? '' : value).split(/[-~\u2013\u2014]/)[0].trim();
        const number = Number(first);
        return Number.isFinite(number) ? number : null;
    }

    // 在元素内按「忽略空白差异」的方式把 quote 找出来并包成可点击标记
    function wrapQuoteInElement(root, quote, questionId, badgeNumber) {
        if (!root || !quote) return false;
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        const nodes = [];
        let combined = '';
        let node;
        while ((node = walker.nextNode())) {
            // 跳过角标数字本身：它插在句子里，会污染引文匹配
            if (node.parentElement && node.parentElement.closest('.locating-badge')) continue;
            // 不跳过已标记节点：同一句可能被多道题引用，需要补挂题号角标
            nodes.push({ node: node, start: combined.length });
            combined += node.nodeValue || '';
        }
        if (!combined) return false;
        let normalized = '';
        const map = [];
        for (let i = 0; i < combined.length; i += 1) {
            const ch = combined[i];
            if (/\s/.test(ch)) {
                if (normalized.endsWith(' ') || !normalized) continue;
                normalized += ' ';
                map.push(i);
            } else {
                normalized += ch;
                map.push(i);
            }
        }
        const target = String(quote).replace(/\s+/g, ' ').trim().replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"');
        const haystack = normalized.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"');
        let matchLen = target.length;
        let at = haystack.indexOf(target);
        if (at < 0) {
            // 引文来自「去标签后的纯文本」，标签边界可能多出空格（原文 "Wonderful Life</em>, by"
            // 去标签后成为 "Wonderful Life , by"），而 DOM 拼接出来没有这个空格。
            // 退一步：忽略标点前后的空格再匹配一次，并换回真实下标。
            const looseHay = buildLoosePunctuation(haystack);
            const looseTarget = buildLoosePunctuation(target).text;
            const looseAt = looseTarget ? looseHay.text.indexOf(looseTarget) : -1;
            if (looseAt < 0) return false;
            at = looseHay.index[looseAt];
            matchLen = looseHay.index[looseAt + looseTarget.length - 1] - at + 1;
        }
        const rawStart = map[at];
        const rawEnd = map[at + matchLen - 1] + 1;
        const segments = nodes.filter((entry) => entry.start < rawEnd && (entry.start + (entry.node.nodeValue || '').length) > rawStart);
        if (!segments.length) return false;
        let first = null;
        segments.forEach((entry) => {
            const value = entry.node.nodeValue || '';
            const from = Math.max(0, rawStart - entry.start);
            const to = Math.min(value.length, rawEnd - entry.start);
            const piece = entry.node.splitText(from);
            if (to - from < piece.nodeValue.length) piece.splitText(to - from);
            const existing = piece.parentElement && piece.parentElement.closest('.locating-mark');
            if (existing) {
                // 这段文字已经被别的题标记过：只把本题题号登记上去
                const owned = String(existing.dataset.question || '').split(/\s+/).filter(Boolean);
                if (!owned.includes(String(questionId))) {
                    existing.dataset.question = owned.concat(String(questionId)).join(' ');
                }
                if (!first) first = existing;
                return;
            }
            const mark = document.createElement('span');
            mark.className = 'locating-mark';
            mark.dataset.question = String(questionId);
            piece.parentNode.insertBefore(mark, piece);
            mark.appendChild(piece);
            if (!first) first = mark;
        });
        if (first && first.dataset.question && !String(first.dataset.question).split(/\s+/).includes(String(questionId))) {
            first.dataset.question = String(first.dataset.question).split(/\s+/).filter(Boolean).concat(String(questionId)).join(' ');
        }
        if (first && badgeNumber != null && String(badgeNumber).trim() !== ''
            && !first.querySelector('.locating-badge[data-question="' + String(questionId) + '"]')) {
            const badge = document.createElement('span');
            badge.className = 'locating-badge';
            badge.dataset.question = String(questionId);
            badge.textContent = String(badgeNumber);
            badge.title = `第 ${badgeNumber} 题的定位句（点击跳到题目）`;
            first.insertBefore(badge, first.firstChild);
        }
        return true;
    }

    function decorateLocatingSentences() {
        if (!dom.left || !state.explanation) return;
        const items = collectExplanationItems();
        if (!items.length) return;
        ensureExplanationStyles();
        let marked = 0;
        items.forEach((item) => {
            const locating = item && item.locating;
            if (!locating || !locating.quote) return;
            const questionId = String(item.questionId || '');
            if (!questionId || dom.left.querySelector(`.locating-mark[data-question~="${escapeSelector(questionId)}"]`)) return;
            const badge = explanationBadgeNumber(item.questionNumber);
            // 先在该段内找；段落序号与 DOM 对不上时（标题/导语/分节差异）退回整篇再找一次
            const scoped = locateParagraphElement(locating.paragraph);
            if ((scoped && wrapQuoteInElement(scoped, locating.quote, questionId, badge))
                || wrapQuoteInElement(dom.left, locating.quote, questionId, badge)) {
                marked += 1;
            }
        });
        return marked;
    }

    function flashElement(el) {
        if (!el) return;
        el.classList.remove('is-flashing');
        void el.offsetWidth;
        el.classList.add('is-flashing');
        setTimeout(() => el.classList.remove('is-flashing'), 3400);
    }

    function scrollToQuestion(questionId) {
        if (!dom.groups) return false;
        const groupEl = dom.groups;
        const container = locateQuestionContainer(groupEl, questionId);
        if (!container) return false;
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        flashElement(container);
        return true;
    }

    // 原文角标 → 该题讲解的开头（统一落点；没有讲解卡时退回题目本身）
    function scrollToExplanation(questionId) {
        const qid = String(questionId || '').trim();
        if (!qid) return false;
        const selector = `.reading-question-explanation[data-question-id~="${escapeSelector(qid)}"], `
            + `.reading-question-explanation-item[data-question-id~="${escapeSelector(qid)}"]`;
        const card = document.querySelector(selector);
        if (!card) return scrollToQuestion(qid);
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        flashElement(card);
        return true;
    }

    function scrollToLocating(questionId) {
        if (!dom.left) return false;
        const mark = dom.left.querySelector(`.locating-mark[data-question~="${escapeSelector(String(questionId))}"]`);
        if (!mark) return false;
        mark.scrollIntoView({ behavior: 'smooth', block: 'center' });
        flashElement(mark);
        return true;
    }

    function bindExplanationNavigation() {
        if (state.explanationNavBound) return;
        state.explanationNavBound = true;
        document.addEventListener('click', (event) => {
            const badge = event.target.closest('.locating-badge, .locating-mark');
            if (badge) {
                const qid = String(badge.dataset.question || '').split(/\s+/).filter(Boolean)[0];
                if (qid) {
                    event.preventDefault();
                    scrollToExplanation(qid);
                }
                return;
            }
            const link = event.target.closest('.reading-explanation-link');
            if (link) {
                event.preventDefault();
                scrollToLocating(link.dataset.question || '');
            }
        });
    }

    // V2 结构化解析卡片（题目/翻译/答案/定位句/同义替换/技巧/辨析/词性）
    // 解析卡上的小标记（正确答案 / 对错判定）
    function makeExplanationChip(text, className) {
        const chip = document.createElement('span');
        chip.className = 'reading-explanation-chip' + (className ? ' reading-explanation-chip--' + className : '');
        chip.textContent = text;
        return chip;
    }

    // 考生答案按原样展示（数组按顿号连接）
    function formatAnswerForDisplay(value) {
        if (Array.isArray(value)) {
            return value.map((entry) => String(entry == null ? '' : entry).trim()).filter(Boolean).join(', ');
        }
        return String(value == null ? '' : value).trim();
    }

    function createStructuredExplanationCard(item, number) {
        const card = document.createElement('div');
        card.className = 'reading-explanation-card reading-question-explanation';
        const cardQid = String((item && item.questionId) || (Number.isFinite(Number(number)) ? 'q' + number : ''));
        if (cardQid) card.dataset.questionId = cardQid;
        // 考生作答与判定：解析里直接标出「你的答案」以及对错
        const comparison = (state.lastResults && state.lastResults.answerComparison) || null;
        const outcome = (cardQid && comparison && comparison[cardQid]) ? comparison[cardQid] : null;
        const userAnswerText = outcome ? formatAnswerForDisplay(outcome.userAnswer) : '';
        const header = document.createElement('div');
        header.className = 'reading-explanation-card__label';
        header.textContent = `Q${number} 讲解`;
        card.appendChild(header);
        const rows = [
            ['题目', item.stem],
            ['翻译', item.translation],
            ['答案', item.answer],
            ['你的答案', outcome ? (userAnswerText || '未作答') : null],
            ['词性分析', item.wordClass],
            ['定位句', item.locating && item.locating.quote
                ? `第 ${item.locating.paragraph || '?'} 段：${item.locating.quote}`
                : ''],
            ['同义替换', Array.isArray(item.synonyms) ? item.synonyms : (item.synonyms ? [item.synonyms] : null)],
            ['定位技巧', item.locatingTip],
            ['解析', item.analysis],
            ['辨析', Array.isArray(item.traps) ? item.traps : (item.traps ? [item.traps] : null)]
        ];
        rows.forEach(([label, value]) => {
            if (value == null || value === '' || (Array.isArray(value) && !value.length)) return;
            const row = document.createElement('div');
            row.className = 'reading-explanation-card__row';
            if (label === '答案') row.classList.add('reading-explanation-card__row--answer');
            const key = document.createElement('span');
            key.className = 'reading-explanation-card__key';
            key.textContent = `${label}：`;
            row.appendChild(key);
            if (Array.isArray(value)) {
                const ul = document.createElement('ul');
                ul.className = 'reading-explanation-list';
                value.forEach((line) => {
                    const li = document.createElement('li');
                    li.textContent = String(line);
                    ul.appendChild(li);
                });
                const holder = document.createElement('div');
                holder.appendChild(ul);
                row.appendChild(holder);
            } else if (label === '定位句') {
                const span = document.createElement('span');
                span.className = 'reading-explanation-card__quote';
                span.textContent = String(value);
                row.appendChild(span);
            } else {
                const span = document.createElement('span');
                span.textContent = String(value);
                row.appendChild(span);
                if (label === '答案') {
                    row.appendChild(makeExplanationChip('正确答案', 'is-answer'));
                }
                if (label === '你的答案' && outcome) {
                    const blank = !userAnswerText;
                    const correct = outcome.isCorrect === true;
                    row.appendChild(makeExplanationChip(
                        blank ? '未作答' : (correct ? '✓ 正确' : '✗ 错误'),
                        blank ? 'is-blank' : (correct ? 'is-correct' : 'is-wrong')
                    ));
                    row.classList.add(blank ? 'is-blank' : (correct ? 'is-correct' : 'is-wrong'));
                }
            }
            card.appendChild(row);
        });
        if (item.locating && item.locating.quote) {
            const link = document.createElement('a');
            link.className = 'reading-explanation-link';
            link.href = 'javascript:void(0)';
            link.dataset.question = String(item.questionId || ('q' + number));
            link.textContent = '📍 回到原文定位句';
            card.appendChild(link);
        }
        return card;
    }

    function createGroupMarkup(group) {
        const lead = group.leadHtml ? `<div class="unified-group__lead">${group.leadHtml}</div>` : '';
        const questionIds = Array.isArray(group.questionIds) ? group.questionIds.join(',') : '';
        const allowOptionReuseFlag = resolveAllowOptionReuse(group);
        const allowOptionReuse = typeof allowOptionReuseFlag === 'boolean'
            ? ` data-allow-option-reuse="${allowOptionReuseFlag ? 'true' : 'false'}"`
            : '';
        return `
            <section class="unified-group" data-group-id="${group.groupId}" data-question-ids="${questionIds}"${allowOptionReuse}>
                ${lead}
                ${group.bodyHtml || ''}
            </section>
        `;
    }

    function renderDataset(dataset) {
        clearExplanations();
        const passageHtml = (dataset.passage?.blocks || [])
            .map((block) => block?.bodyHtml || block?.html || '')
            .join('\n');
        const groupsHtml = (dataset.questionGroups || [])
            .map((group) => createGroupMarkup(group))
            .join('\n');
        const questionCount = Array.isArray(dataset.questionOrder) ? dataset.questionOrder.length : 0;

        document.title = dataset.meta?.title || 'IELTS 阅读练习';
        if (dom.title) {
            dom.title.textContent = dataset.meta?.title || 'IELTS 阅读练习';
        }
        if (dom.subtitle) {
            dom.subtitle.textContent = `统一阅读页 · ${dataset.meta?.category || ''} · ${questionCount} 题`;
        }
        const categoryMatch = String(dataset.meta?.category || '').match(/P\s*([123])/i);
        const partNumber = categoryMatch ? categoryMatch[1] : '1';
        const displayedNumbers = (Array.isArray(dataset.questionOrder) ? dataset.questionOrder : [])
            .map((questionId) => questionNumberFromId(questionId))
            .filter((value) => Number.isFinite(value));
        const firstQuestion = displayedNumbers.length ? Math.min(...displayedNumbers) : null;
        const lastQuestion = displayedNumbers.length ? Math.max(...displayedNumbers) : null;
        if (dom.partLabel) {
            dom.partLabel.textContent = `Part ${partNumber}`;
        }
        if (dom.partInstruction) {
            dom.partInstruction.textContent = firstQuestion != null && lastQuestion != null
                ? `Read the passage and answer Questions ${firstQuestion}–${lastQuestion}.`
                : 'Read the passage and answer the questions.';
        }
        if (dom.suiteCustomModeBadge) {
            dom.suiteCustomModeBadge.hidden = !(
                state.suiteSessionId || state.simulationMode || state.suiteLocalReview || state.suiteReviewMode
            );
        }
        if (dom.left) {
            dom.left.innerHTML = passageHtml;
            const firstHeading = dom.left.querySelector(':scope > h1:first-child, :scope > h2:first-child');
            if (firstHeading && /reading\s+passage/i.test(firstHeading.textContent || '')) {
                firstHeading.classList.add('practice-passage-preface');
                const prefaceText = firstHeading.nextElementSibling;
                if (prefaceText && prefaceText.tagName === 'P' && /questions?|reading\s+passage/i.test(prefaceText.textContent || '')) {
                    prefaceText.classList.add('practice-passage-preface');
                }
            }
        }
        if (dom.groups) {
            dom.groups.innerHTML = groupsHtml;
        }
        applyNbHints();
        if (dom.results) {
            dom.results.style.display = 'none';
            dom.results.innerHTML = '';
        }
    }

    function resolveAllowOptionReuse(group) {
        if (!group || typeof group !== 'object') {
            return false;
        }
        if (typeof group.allowOptionReuse === 'boolean') {
            return group.allowOptionReuse;
        }
        const html = String(group.bodyHtml || '').toLowerCase();
        if (!html) {
            return false;
        }
        if (html.includes('data-clone="true"') || html.includes("data-clone='true'")) {
            return true;
        }
        if (/(nb[^a-z0-9]*you may use|可重复使用|可重复选|可多次使用)/i.test(html)) {
            return true;
        }
        return false;
    }

    const NB_HINT_TEXT = 'NB You may use any letter more than once.';
    // 题干里已内联的"可重复使用"说明，改由独立的 NB 行呈现，此处需先移除避免重复
    const INLINE_REUSE_SENTENCE = /\s*You may use any (?:letter|option)[^.]*\.\s*/i;

    /**
     * 定位 NB 行的插入位置：题目正文开始前的最后一段说明文字。
     * 题号段落形如"20 To deal with..."，据此判断正文起点。
     */
    function findInstructionAnchor(groupEl) {
        const paragraphs = Array.from(groupEl.querySelectorAll('p'));
        let anchor = null;
        for (const p of paragraphs) {
            const isQuestionItem = /^\s*\d+[\s.、]/.test(p.textContent || '')
                || p.querySelector('input');
            if (isQuestionItem) {
                break;
            }
            anchor = p;
        }
        return anchor || groupEl.querySelector('h4, h3');
    }

    function applyNbHints() {
        if (!dom.groups) return;
        const groups = Array.from(dom.groups.querySelectorAll('.unified-group'));
        groups.forEach((groupEl) => {
            if (groupEl.dataset.allowOptionReuse !== 'true') {
                return;
            }
            if (groupEl.querySelector('.nb-hint')) {
                return;
            }

            // 题目本身已写明 NB 的保持原样，避免改动既有排版
            if (/\bNB\b/.test((groupEl.textContent || '').toUpperCase())) {
                return;
            }

            const anchor = findInstructionAnchor(groupEl);

            // 题干内联该说明时先摘除，NB 行取而代之
            if (anchor && INLINE_REUSE_SENTENCE.test(anchor.innerHTML || '')) {
                anchor.innerHTML = anchor.innerHTML.replace(INLINE_REUSE_SENTENCE, '');
            }

            const hint = document.createElement('p');
            hint.className = 'nb-hint';
            const em = document.createElement('em');
            em.textContent = NB_HINT_TEXT;
            hint.appendChild(em);

            if (anchor) {
                anchor.insertAdjacentElement('afterend', hint);
            } else {
                groupEl.insertAdjacentElement('afterbegin', hint);
            }
        });
    }

    function displayLabel(questionId) {
        const map = state.dataset?.questionDisplayMap || {};
        if (map[questionId]) {
            return map[questionId];
        }
        return String(questionId).replace(/^q/i, '');
    }

    function buildQuestionNav() {
        if (!dom.nav) return;
        const practiceNav = dom.nav.closest('.practice-nav');

        // 套题模式：当前篇展开题号，其他篇显示完成进度并支持跨篇跳转。
        const blueprint = state.suiteBlueprint;
        if ((state.simulationMode || state.suiteLocalReview || state.suiteReviewMode)
            && blueprint && Array.isArray(blueprint.passages) && blueprint.passages.length > 1) {
            dom.nav.classList.add('question-nav--suite');
            if (practiceNav) practiceNav.classList.add('practice-nav--suite-active');
            dom.nav.innerHTML = blueprint.passages.map((passage) => {
                const partLabel = /^P([1-3])$/i.test(String(passage.label || ''))
                    ? `Part ${String(passage.label).match(/\d/)[0]}`
                    : String(passage.label || 'Part');
                if (!passage.isCurrent) {
                    const answeredCount = passage.answeredSet && typeof passage.answeredSet.size === 'number'
                        ? passage.answeredSet.size
                        : 0;
                    return `<div class="q-passage q-passage--summary"><button class="q-passage__label q-passage__label--btn" data-passage-index="${passage.index}" type="button">${partLabel}</button><span class="q-passage__progress">${answeredCount} of ${passage.questions.length}</span></div>`;
                }
                const items = passage.questions.map((q) => {
                    const status = navStatus.get(q.localQuestionId) || '';
                    return `<button class="q-item ${status}" data-question-id="${q.localQuestionId}" type="button">${q.label}</button>`;
                }).join('');
                return `<div class="q-passage is-current"><span class="q-passage__label">${partLabel}</span><div class="q-passage__items">${items}</div></div>`;
            }).join('');
            return;
        }

        dom.nav.classList.remove('question-nav--suite');
        if (practiceNav) practiceNav.classList.remove('practice-nav--suite-active');
        const order = Array.isArray(state.dataset?.questionOrder) ? state.dataset.questionOrder : [];
        dom.nav.innerHTML = order.map((questionId) => {
            const status = navStatus.get(questionId) || '';
            const label = displayLabel(questionId);
            return `<button class="q-item ${status}" data-question-id="${questionId}" type="button">${label}</button>`;
        }).join('');
    }

    function normalizeQuestionId(rawValue) {
        if (!rawValue) return null;
        const value = String(rawValue).trim().toLowerCase();
        const match = value.match(/q(\d+)/);
        return match ? `q${match[1]}` : null;
    }

    function isQuestionIdMatch(value, target) {
        return normalizeQuestionId(value) === normalizeQuestionId(target);
    }

    function findQuestionAnchor(questionId) {
        const directCandidates = [
            document.getElementById(`${questionId}-anchor`),
            document.querySelector(`[data-question="${questionId}"]`),
            document.querySelector(`[data-question-id="${questionId}"]`),
            document.querySelector(`[name="${questionId}"]`)
        ].filter(Boolean);
        if (directCandidates.length) {
            return directCandidates[0];
        }

        const groups = document.querySelectorAll('.unified-group[data-question-ids]');
        for (const group of groups) {
            const values = (group.dataset.questionIds || '').split(',').map((entry) => entry.trim()).filter(Boolean);
            if (values.some((entry) => isQuestionIdMatch(entry, questionId))) {
                return group;
            }
        }
        return null;
    }

    function updateNavStatuses(results = null) {
        const order = Array.isArray(state.dataset?.questionOrder) ? state.dataset.questionOrder : [];
        order.forEach((questionId) => {
            if (!results) {
                navStatus.set(questionId, hasAnswer(questionId) ? 'answered' : '');
                return;
            }
            const entry = results.answerComparison?.[questionId];
            if (!entry) {
                navStatus.set(questionId, hasAnswer(questionId) ? 'answered' : '');
                return;
            }
            navStatus.set(questionId, entry.isCorrect ? 'correct' : 'incorrect');
        });
        refreshSuiteAnsweredSets();
        buildQuestionNav();
        syncPrimaryActionButtons();
    }

    function navClickHandler(event) {
        // 套题模式：点击其他小节的题号或小节标签，跳转到对应小节
        const passageTrigger = event.target.closest('[data-passage-index]');
        if (passageTrigger) {
            const targetIndex = Number(passageTrigger.dataset.passageIndex);
            if (Number.isInteger(targetIndex)) {
                // 交卷后套题会话已结算，跳转消息无人接收，改为就地切换
                if (state.suiteLocalReview) {
                    renderSuitePassageLocally(targetIndex);
                } else {
                    dispatchSimulationNavigateTo(targetIndex);
                }
            }
            return;
        }

        const button = event.target.closest('.q-item[data-question-id]');
        if (!button) return;
        const questionId = button.dataset.questionId;
        const target = findQuestionAnchor(questionId);
        if (target && typeof global.scrollToElement === 'function') {
            global.scrollToElement(target);
            return;
        }
        target?.scrollIntoView?.({ behavior: 'smooth', block: 'center' });
    }

    function attachNavListeners() {
        dom.nav?.addEventListener('click', navClickHandler);
    }

    function resolvePassageTargets() {
        if (!dom.left) return [];
        const wrapped = Array.from(dom.left.querySelectorAll('.paragraph-wrapper > p'));
        if (wrapped.length) {
            return wrapped;
        }
        const paragraphs = Array.from(dom.left.querySelectorAll('p')).filter((node) => {
            const text = (node.textContent || '').trim();
            return text.length > 0 && !/you should spend about/i.test(text);
        });
        return paragraphs;
    }

    function renderPassageExplanations() {
        const notes = Array.isArray(state.explanation?.passageNotes) ? state.explanation.passageNotes : [];
        if (!notes.length) {
            return;
        }
        const targets = resolvePassageTargets();
        if (!targets.length) {
            return;
        }
        ensureExplanationStyles();
        const size = Math.min(notes.length, targets.length);
        for (let index = 0; index < size; index += 1) {
            const note = notes[index];
            const target = targets[index];
            if (!note || !target) continue;
            const label = note.label || `${state.explanation?.meta?.noteType || '段落讲解'} ${index + 1}`;
            const card = createExplanationCard(label, note.text || '', 'reading-passage-explanation');
            target.insertAdjacentElement('afterend', card);
        }
    }

    function locateQuestionContainer(groupEl, questionId) {
        const escaped = escapeSelector(questionId);
        const directByAnchor = groupEl.querySelector(`#${escaped}-anchor`);
        if (directByAnchor) {
            return directByAnchor.closest('.question-item, .tfng-item, .match-question-item, .question-row, .summary-completion')
                || directByAnchor.parentElement;
        }
        const inputByName = groupEl.querySelector(`[name="${escaped}"]`);
        if (inputByName) {
            return inputByName.closest('.question-item, .tfng-item, .match-question-item, .question-row, .summary-completion');
        }
        const byData = groupEl.querySelector(`[data-question="${escaped}"]`);
        if (byData) {
            return byData.closest('.question-item, .match-question-item, .paragraph-wrapper, .summary-completion') || byData.parentElement;
        }
        return null;
    }

    function renderGroupExplanation(groupEl, section, questionNumbers) {
        const title = section?.sectionTitle || `题型讲解（Q${questionNumbers[0] || ''}）`;
        const text = section?.text || '';
        if (!text) {
            return;
        }
        const card = createExplanationCard(title, text, 'reading-group-explanation');
        groupEl.appendChild(card);
    }

    // V2 条目 = 带结构化字段（stem/analysis/locating 等），其余沿用旧的整段文本卡片
    function isStructuredExplanation(item) {
        return !!(item && (item.stem || item.analysis || item.translation || item.locating));
    }

    function buildExplanationCard(item, number) {
        return isStructuredExplanation(item)
            ? createStructuredExplanationCard(item, number)
            : createExplanationCard(`Q${number} 讲解`, item && item.text ? item.text : '', 'reading-question-explanation');
    }

    function renderPerQuestionExplanations(groupEl, section, questionPairs) {
        const itemMap = new Map();
        (section?.items || []).forEach((item) => {
            // 题号可能是区间（如 "38-40" 一组多选）：按区间首个题号登记，保证该题仍能拿到讲解卡
            const number = parseQuestionNumber(item?.questionNumber);
            if (number == null) return;
            if (itemMap.has(number)) return;
            itemMap.set(number, item);
        });
        if (!itemMap.size) {
            renderGroupExplanation(groupEl, section, questionPairs.map((pair) => pair.number));
            return;
        }

        const fallback = [];
        questionPairs.forEach(({ questionId, number }) => {
            const item = itemMap.get(number);
            if (!item || (!isStructuredExplanation(item) && !item.text)) return;
            // 同一道题在页面上可能出现在多个题组里（题组 questionIds 互相重叠），
            // 只渲染第一处，避免同一题出现两张讲解卡。
            if (questionId && document.querySelector(
                `.reading-question-explanation[data-question-id~="${escapeSelector(questionId)}"], `
                + `.reading-question-explanation-item[data-question-id~="${escapeSelector(questionId)}"]`)) {
                return;
            }
            const container = locateQuestionContainer(groupEl, questionId);
            if (container) {
                const card = buildExplanationCard(item, number);
                if (questionId) card.dataset.questionId = questionId;
                container.appendChild(card);
            } else {
                fallback.push({ number, item, questionId });
            }
        });

        if (!fallback.length) {
            return;
        }
        const wrapper = document.createElement('div');
        wrapper.className = 'reading-question-explanation-list';
        const heading = document.createElement('h5');
        heading.textContent = section?.sectionTitle || '题目讲解';
        wrapper.appendChild(heading);
        fallback.forEach(({ number, item, questionId }) => {
            const card = buildExplanationCard(item, number);
            card.classList.add('reading-question-explanation-item');
            if (questionId) card.dataset.questionId = questionId;
            wrapper.appendChild(card);
        });
        groupEl.appendChild(wrapper);
    }

    function renderQuestionExplanations() {
        if (!dom.groups) return;
        const groups = Array.from(dom.groups.querySelectorAll('.unified-group'));
        if (!groups.length) return;
        ensureExplanationStyles();

        const datasetGroups = Array.isArray(state.dataset?.questionGroups) ? state.dataset.questionGroups : [];
        groups.forEach((groupEl, index) => {
            const group = datasetGroups[index] || {};
            const questionIds = Array.isArray(group.questionIds) ? group.questionIds : [];
            const questionPairs = questionIds.map((questionId) => ({
                questionId,
                number: questionNumberFromId(questionId)
            })).filter((pair) => Number.isFinite(pair.number));
            const questionNumbers = questionPairs.map((pair) => pair.number);
            const splitMode = EXPLANATION_SPLIT_KINDS.has(group.kind);
            const matchedSections = pickSectionsForGroup(questionNumbers, null);
            const anySection = matchedSections[0] || null;
            // V2 解析是逐题结构化数据（含 locating 等字段），不管题型都应逐题渲染到题目下方
            const structured = matchedSections.some((section) => Array.isArray(section?.items)
                && section.items.some(isStructuredExplanation));

            if (splitMode || structured) {
                const preferred = splitMode ? pickSectionsForGroup(questionNumbers, 'per_question') : [];
                const renderList = (preferred.length ? preferred : matchedSections)
                    .filter((section) => Array.isArray(section?.items) && section.items.length);
                renderList.forEach((section) => {
                    const pairs = questionPairs.filter((pair) => sectionOverlap(section, [pair.number]) > 0);
                    if (!pairs.length) return;
                    renderPerQuestionExplanations(groupEl, section, pairs);
                });
                if (renderList.length) {
                    return;
                }
                if (anySection) {
                    renderGroupExplanation(groupEl, anySection, questionNumbers);
                }
                return;
            }

            const section = pickSectionForGroup(questionNumbers, 'group') || anySection;
            if (section) {
                renderGroupExplanation(groupEl, section, questionNumbers);
            }
        });
    }

    // 交卷及练习记录回顾时显示已经通过题号校验的解析。
    // 没有解析数据的文章仍按原样显示，不生成占位或推测内容。
    const SHOW_EXPLANATIONS_AFTER_SUBMIT = true;

    async function renderExplanations() {
        // 仍先清理，避免切换小节/回顾时残留上一篇的解析节点
        clearExplanations();
        if (!SHOW_EXPLANATIONS_AFTER_SUBMIT) {
            return;
        }
        const explanation = await ensureExplanationDataset();
        if (!explanation) {
            return;
        }
        renderPassageExplanations();
        renderQuestionExplanations();
        // 原文定位句标记（带题号角标，点击跳题）＋ 解析卡片回原文链接
        bindExplanationNavigation();
        decorateLocatingSentences();
    }

    function getDropzones() {
        return Array.from(document.querySelectorAll('.paragraph-dropzone, .match-dropzone, .drop-target-summary'));
    }

    function ensureDropzoneHolder(dropzone) {
        if (!dropzone) return null;
        if (dropzone.classList.contains('drop-target-summary')) {
            return dropzone; // inline dropzones operate on themselves
        }
        let holder = dropzone.querySelector('.dropped-items');
        if (!holder) {
            holder = document.createElement('div');
            holder.className = 'dropped-items';
            dropzone.appendChild(holder);
        }
        return holder;
    }

    function updateDropzoneState(dropzone) {
        if (!dropzone) return;
        const hasValue = !!String(dropzone.dataset.answerValue || '').trim();
        dropzone.classList.toggle('dropzone-filled', hasValue);
        dropzone.classList.toggle('dropzone-empty', !hasValue);
    }

    function clearDropzone(dropzone) {
        if (!dropzone) return;
        dropzone.dataset.answerValue = '';
        dropzone.dataset.answerLabel = '';
        if (dropzone.classList.contains('drop-target-summary')) {
            dropzone.innerHTML = '';
        } else {
            const holder = ensureDropzoneHolder(dropzone);
            if (holder) {
                holder.innerHTML = '';
            }
        }
        updateDropzoneState(dropzone);
    }

    function getDropzonePayload(dropzone) {
        if (!dropzone) return null;
        const value = String(dropzone.dataset.answerValue || '').trim();
        if (!value) return null;
        return {
            value,
            label: String(dropzone.dataset.answerLabel || value).trim(),
            sourceDropzoneId: String(dropzone.dataset.dropzoneId || '').trim()
        };
    }

    function buildDragPayload(item) {
        if (!item) return null;
        const sourceDropzone = item.closest('.paragraph-dropzone, .match-dropzone, .drop-target-summary');
        return {
            value: item.dataset.heading || item.dataset.option || item.dataset.word || item.dataset.value || item.dataset.answerValue || item.textContent.trim(),
            label: item.dataset.answerLabel || item.dataset.word || item.dataset.value || item.textContent.trim(),
            sourceDropzoneId: sourceDropzone?.dataset?.dropzoneId || ''
        };
    }

    function parseDragPayload(rawValue) {
        if (!rawValue) return null;
        try {
            const payload = JSON.parse(rawValue);
            if (!payload || typeof payload !== 'object') {
                return null;
            }
            return {
                value: String(payload.value || payload.label || '').trim(),
                label: String(payload.label || payload.value || '').trim(),
                sourceDropzoneId: String(payload.sourceDropzoneId || '').trim()
            };
        } catch (_) {
            const fallback = String(rawValue).trim();
            if (!fallback) {
                return null;
            }
            return {
                value: fallback,
                label: fallback,
                sourceDropzoneId: ''
            };
        }
    }

    function attachDraggableBehavior(item) {
        if (!item || item.dataset.dragBound === '1') {
            return;
        }
        item.dataset.dragBound = '1';
        item.addEventListener('dragstart', (event) => {
            const payload = buildDragPayload(item);
            if (!payload || !payload.value) {
                event.preventDefault();
                return;
            }
            event.dataTransfer?.setData('text/plain', JSON.stringify(payload));
            event.dataTransfer.effectAllowed = 'move';
            item.classList.add('dragging');
        });
        item.addEventListener('dragend', () => {
            item.classList.remove('dragging');
        });
    }

    function setDropzoneAnswer(dropzone, value, label) {
        if (!dropzone) return;
        const normalizedValue = String(value || '').trim();
        const normalizedLabel = String(label || value || '').trim();
        dropzone.dataset.answerValue = normalizedValue;
        dropzone.dataset.answerLabel = normalizedLabel;
        const holder = ensureDropzoneHolder(dropzone);
        if (!holder) {
            return;
        }
        holder.innerHTML = '';
        if (normalizedValue) {
            const item = document.createElement('div');
            item.className = 'drag-item drag-item--assigned';
            item.textContent = normalizedLabel;
            item.dataset.answerValue = normalizedValue;
            item.dataset.answerLabel = normalizedLabel;
            item.setAttribute('draggable', 'true');
            attachDraggableBehavior(item);

            if (dropzone.classList.contains('drop-target-summary')) {
                dropzone.innerHTML = '';
                dropzone.appendChild(item);
            } else {
                holder.appendChild(item);
            }
        }
        updateDropzoneState(dropzone);
    }

    function handleDropOnDropzone(dropzone, payload) {
        if (!dropzone || !payload || !payload.value) {
            return;
        }
        const sourceDropzone = payload.sourceDropzoneId
            ? document.querySelector(`[data-dropzone-id="${payload.sourceDropzoneId}"]`)
            : null;
        if (sourceDropzone && sourceDropzone === dropzone) {
            updateDropzoneState(dropzone);
            return;
        }
        const previousPayload = getDropzonePayload(dropzone);
        setDropzoneAnswer(dropzone, payload.value, payload.label);
        if (sourceDropzone && sourceDropzone !== dropzone) {
            if (previousPayload && previousPayload.value) {
                setDropzoneAnswer(sourceDropzone, previousPayload.value, previousPayload.label);
            } else {
                clearDropzone(sourceDropzone);
            }
        }
        updateNavStatuses();
    }

    function handleDropBackToPool(payload) {
        if (!payload || !payload.sourceDropzoneId) {
            return;
        }
        const sourceDropzone = document.querySelector(`[data-dropzone-id="${payload.sourceDropzoneId}"]`);
        if (!sourceDropzone) {
            return;
        }
        clearDropzone(sourceDropzone);
        updateNavStatuses();
    }

    function attachDragDrop() {
        // practice-page-ui.js already manages drag boundaries and placing items.
        // We only need to ensure the dropzones have the correct structure initialized.
        getDropzones().forEach((dropzone, index) => {
            if (!dropzone.dataset.dropzoneId) {
                dropzone.dataset.dropzoneId = `dropzone-${index + 1}`;
            }
            ensureDropzoneHolder(dropzone);
            updateDropzoneState(dropzone);
        });
    }

    function getCheckboxAnswers() {
        const grouped = new Map();
        document.querySelectorAll('input[type="checkbox"][name]').forEach((input) => {
            const name = input.name;
            if (!grouped.has(name)) {
                grouped.set(name, []);
            }
            if (input.checked) {
                grouped.get(name).push(String(input.value).trim());
            }
        });
        return grouped;
    }

    function expandQuestionSequence(rawValue) {
        if (!rawValue) return [];
        const value = String(rawValue).trim().toLowerCase();
        const numbers = (value.match(/\d+/g) || []).map((entry) => Number(entry));
        if ((value.includes('-') || value.includes('–')) && numbers.length > 2) {
            return numbers.map((entry) => `q${entry}`);
        }
        if ((value.includes('-') || value.includes('–')) && numbers.length === 2 && numbers[1] >= numbers[0]) {
            const ids = [];
            for (let current = numbers[0]; current <= numbers[1]; current += 1) {
                ids.push(`q${current}`);
            }
            return ids;
        }
        if (value.includes('_') && numbers.length >= 2) {
            return numbers.map((entry) => `q${entry}`);
        }
        const normalized = normalizeQuestionId(value);
        return normalized ? [normalized] : [];
    }

    function getTextualAnswer(questionId) {
        const aliases = resolveAnswerAliases(questionId);
        const fieldMap = new Map();
        aliases.forEach((alias) => {
            document.querySelectorAll(`[name="${alias}"]`).forEach((field) => {
                if (!fieldMap.has(field)) {
                    fieldMap.set(field, true);
                }
            });
        });
        const fields = Array.from(fieldMap.keys());
        const values = [];
        for (const field of fields) {
            if (field.type === 'radio') continue;
            if (field.tagName === 'SELECT') {
                const value = String(field.value || '').trim();
                if (value) {
                    values.push(value);
                }
                continue;
            }
            const value = String(field.value || '').trim();
            if (value) {
                values.push(value);
            }
        }
        if (!values.length) {
            aliases.forEach((alias) => {
                const inputById = document.getElementById(`${alias}_input`);
                if (!inputById || !('value' in inputById)) {
                    return;
                }
                const value = String(inputById.value || '').trim();
                if (value) {
                    values.push(value);
                }
            });
        }
        if (!values.length) {
            return '';
        }
        if (values.length === 1) {
            return values[0];
        }
        return values;
    }

    function getDropzoneAnswer(questionId) {
        const dropzone = findDropzoneByQuestionId(questionId);
        if (!dropzone) {
            return '';
        }
        const explicitValue = String(dropzone.dataset.answerValue || '').trim();
        if (explicitValue) {
            return explicitValue;
        }
        const items = dropzone.querySelectorAll('.drag-item, .draggable-word, .card');
        if (!items.length) {
            return '';
        }
        return Array.from(items).map((item) => normalizeDragValue(item)).filter(Boolean).join(', ');
    }

    function splitAnswerTokens(rawValue) {
        if (Array.isArray(rawValue)) {
            return rawValue.map((item) => String(item == null ? '' : item).trim()).filter(Boolean);
        }
        const text = String(rawValue == null ? '' : rawValue).trim();
        if (!text) return [];
        if (text.includes(',')) {
            return text.split(',').map((item) => String(item || '').trim()).filter(Boolean);
        }
        return [text];
    }

    function resolveAnswerAliases(questionId) {
        const normalized = normalizeQuestionId(questionId);
        if (!normalized) return [];
        const numeric = normalized.replace(/^q/i, '');
        const displayMap = state.dataset?.questionDisplayMap || {};
        const displayLabel = String(displayMap[normalized] || '').trim();
        return Array.from(new Set([
            normalized,
            numeric,
            `question${numeric}`,
            displayLabel,
            displayLabel ? `q${displayLabel}` : ''
        ].filter(Boolean)));
    }

    function findDropzoneByQuestionId(questionId) {
        const aliases = resolveAnswerAliases(questionId);
        for (let index = 0; index < aliases.length; index += 1) {
            const alias = aliases[index];
            const escaped = escapeSelector(alias);
            const selector = [
                `.match-dropzone[data-question="${escaped}"]`,
                `.match-dropzone[data-question-id="${escaped}"]`,
                `.drop-target-summary[data-question="${escaped}"]`,
                `.drop-target-summary[data-question-id="${escaped}"]`,
                `.dropzone[data-target="${escaped}"]`,
                `.dropzone[data-question="${escaped}"]`,
                `.paragraph-dropzone[data-question="${escaped}"]`,
                `.match-dropzone[data-target="${escaped}"]`,
                `.paragraph-dropzone[data-target="${escaped}"]`,
                `#${escaped}-dropzone`,
                `#${escaped}-target`
            ].join(', ');
            let direct = null;
            try {
                direct = document.querySelector(selector);
            } catch (_) {
                direct = null;
            }
            if (direct) {
                return direct;
            }
            const anchor = document.getElementById(`${alias}-anchor`);
            const paragraphZone = anchor?.parentElement?.querySelector?.('.paragraph-dropzone');
            if (paragraphZone) {
                return paragraphZone;
            }
        }
        return null;
    }

    function applyDropzoneAnswer(questionId, rawValue) {
        const dropzone = findDropzoneByQuestionId(questionId);
        if (!dropzone) {
            return false;
        }
        const tokens = splitAnswerTokens(rawValue);
        if (!tokens.length) {
            clearDropzone(dropzone);
            return true;
        }
        const value = canonicalizeAnswerToken(tokens[0]);
        if (!value) {
            clearDropzone(dropzone);
            return true;
        }
        setDropzoneAnswer(dropzone, value, value);
        return true;
    }

    function normalizeDragValue(item) {
        if (!item) return '';
        const dataset = item.dataset || {};
        const explicit = String(
            dataset.answerValue
            || dataset.key
            || dataset.option
            || dataset.heading
            || dataset.word
            || dataset.value
            || ''
        ).trim();
        if (explicit) {
            return canonicalizeAnswerToken(explicit);
        }
        const text = String(item.textContent || '').trim();
        if (!text) {
            return '';
        }
        const leading = text.match(/^([A-Za-z])(?:[.)])?\s+/);
        if (leading) {
            return leading[1].toUpperCase();
        }
        return canonicalizeAnswerToken(text);
    }

    function alignCheckboxAnswersToExpectedSlots(selectedValues, expectedValues) {
        const core = getAnswerMatchCore();
        if (core && typeof core.alignAnswerSetToExpectedSlots === 'function') {
            return core.alignAnswerSetToExpectedSlots(selectedValues, expectedValues);
        }
        const selected = selectedValues.map(canonicalizeAnswerToken).filter(Boolean);
        const expected = expectedValues.map((value) => {
            const tokens = splitAnswerTokens(value);
            return tokens.length === 1 ? canonicalizeAnswerToken(tokens[0]) : '';
        });
        const aligned = new Array(expected.length).fill('');
        const used = new Set();
        expected.forEach((expectedToken, expectedIndex) => {
            const selectedIndex = selected.findIndex((token, index) => !used.has(index) && token === expectedToken);
            if (selectedIndex >= 0) {
                aligned[expectedIndex] = selected[selectedIndex];
                used.add(selectedIndex);
            }
        });
        const remaining = selected.filter((_, index) => !used.has(index));
        return aligned.map((value) => value || remaining.shift() || '');
    }

    function resolveCheckboxQuestionIds(name) {
        const groups = Array.isArray(state.dataset?.questionGroups) ? state.dataset.questionGroups : [];
        const owner = groups.find((group) => {
            if (!group || group.kind !== 'multi_choice' || !Array.isArray(group.questionIds)) {
                return false;
            }
            const bodyHtml = String(group.bodyHtml || '');
            return bodyHtml.includes(`name="${name}"`) || bodyHtml.includes(`name='${name}'`);
        });
        if (owner) {
            return owner.questionIds.map(normalizeQuestionId).filter(Boolean);
        }
        return expandQuestionSequence(name);
    }

    function parseRequestedSelectionCount(input) {
        const container = input?.closest?.('.group, .unified-group, [data-question-group]');
        const text = String(container?.textContent || '').replace(/\s+/g, ' ').trim();
        if (!text) return 0;
        const words = {
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5,
            six: 6
        };
        const match = text.match(/\b(one|two|three|four|five|six|\d+)\b\s+(?:letters?|answers?|options?|points?|statements?|features?|choices?|items?)/i);
        if (!match) return 0;
        const token = String(match[1] || '').toLowerCase();
        return words[token] || Number(token) || 0;
    }

    function resolveCheckboxSelectionLimit(input) {
        if (!(input instanceof HTMLInputElement) || input.type !== 'checkbox' || !input.name) {
            return 0;
        }
        const cached = Number(input.dataset.maxSelections);
        if (Number.isInteger(cached) && cached > 0) {
            return cached;
        }
        const escapedName = escapeSelector(input.name);
        const inputs = Array.from(document.querySelectorAll('input[type="checkbox"][name="' + escapedName + '"]'));
        if (!inputs.length) return 0;

        const questionIds = resolveCheckboxQuestionIds(input.name);
        const explicitLimit = Number(input.closest('[data-limit]')?.dataset?.limit || input.dataset.limit);
        let limit = Number.isInteger(explicitLimit) && explicitLimit > 0
            ? explicitLimit
            : (questionIds.length > 1 ? questionIds.length : parseRequestedSelectionCount(input));
        if (!limit && questionIds.length === 1) {
            const expected = state.dataset?.answerKey?.[questionIds[0]];
            if (Array.isArray(expected) && expected.length > 1) {
                limit = expected.length;
            }
        }
        limit = Math.min(inputs.length, Math.max(0, Number(limit) || 0));
        if (limit > 0) {
            inputs.forEach((item) => {
                item.dataset.maxSelections = String(limit);
            });
        }
        return limit;
    }

    function syncCheckboxSelectionLimit(changedInput) {
        if (!(changedInput instanceof HTMLInputElement) || changedInput.type !== 'checkbox' || !changedInput.name) {
            return;
        }
        const limit = resolveCheckboxSelectionLimit(changedInput);
        if (!limit) return;
        const escapedName = escapeSelector(changedInput.name);
        const inputs = Array.from(document.querySelectorAll('input[type="checkbox"][name="' + escapedName + '"]'));
        let checked = inputs.filter((item) => item.checked);
        if (checked.length > limit) {
            if (changedInput.checked) {
                changedInput.checked = false;
            } else {
                checked.slice(limit).forEach((item) => {
                    item.checked = false;
                });
            }
            checked = inputs.filter((item) => item.checked);
        }
        if (state.readOnly) return;
        const atLimit = checked.length >= limit;
        inputs.forEach((item) => {
            if (item.checked) {
                if (item.dataset.selectionLimitDisabled === 'true') {
                    item.disabled = false;
                    delete item.dataset.selectionLimitDisabled;
                }
                return;
            }
            if (atLimit) {
                item.disabled = true;
                item.dataset.selectionLimitDisabled = 'true';
                item.title = '本题最多选择 ' + limit + ' 项';
            } else if (item.dataset.selectionLimitDisabled === 'true') {
                item.disabled = false;
                delete item.dataset.selectionLimitDisabled;
                item.removeAttribute('title');
            }
        });
    }

    function syncAllCheckboxSelectionLimits() {
        const processedNames = new Set();
        document.querySelectorAll('input[type="checkbox"][name]').forEach((input) => {
            if (processedNames.has(input.name)) return;
            processedNames.add(input.name);
            syncCheckboxSelectionLimit(input);
        });
    }
    function collectAnswers() {
        const order = Array.isArray(state.dataset?.questionOrder) ? state.dataset.questionOrder : [];
        const answers = {};
        const checkboxGroups = getCheckboxAnswers();

        checkboxGroups.forEach((values, name) => {
            const questionIds = resolveCheckboxQuestionIds(name);
            if (!questionIds.length) {
                return;
            }
            const sorted = values.slice().sort((left, right) => left.localeCompare(right, 'en'));
            if (questionIds.length === 1) {
                answers[questionIds[0]] = sorted.length > 1 ? sorted : (sorted[0] || '');
                return;
            }
            const expectedValues = questionIds.map((questionId) => state.dataset?.answerKey?.[questionId]);
            const aligned = alignCheckboxAnswersToExpectedSlots(sorted, expectedValues);
            questionIds.forEach((questionId, index) => {
                answers[questionId] = aligned[index] || '';
            });
        });

        order.forEach((questionId) => {
            if (Object.prototype.hasOwnProperty.call(answers, questionId)) {
                return;
            }
            const radios = document.querySelectorAll(`input[type="radio"][name="${questionId}"]`);
            if (radios.length) {
                const checked = Array.from(radios).find((input) => input.checked);
                answers[questionId] = checked ? String(checked.value).trim() : '';
                return;
            }
            const dropzoneAnswer = getDropzoneAnswer(questionId);
            if (dropzoneAnswer) {
                answers[questionId] = dropzoneAnswer;
                return;
            }
            answers[questionId] = getTextualAnswer(questionId);
        });

        return answers;
    }

    function normalizeAnswerValue(value) {
        const core = getAnswerMatchCore();
        if (Array.isArray(value)) {
            if (core && typeof core.splitAnswerTokens === 'function') {
                return core.splitAnswerTokens(value);
            }
            return value.map((entry) => canonicalizeAnswerToken(entry)).filter(Boolean);
        }
        if (value == null) return '';
        return canonicalizeAnswerToken(value);
    }

    function canonicalizeAnswerToken(value) {
        const core = getAnswerMatchCore();
        if (core && typeof core.normalizeToken === 'function') {
            return core.normalizeToken(value);
        }
        if (value == null) return '';
        const cleaned = String(value)
            .replace(/[“”]/g, '"')
            .replace(/[‘’]/g, "'")
            .replace(/[‐‑‒–—]/g, '-')
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/^[\s"'`()[\]{}<>.,;:!?]+|[\s"'`()[\]{}<>.,;:!?]+$/g, '');
        if (!cleaned) {
            return '';
        }
        const lowered = cleaned.toLowerCase();
        if (['true', 'yes'].includes(lowered)) return 'true';
        if (['false', 'no'].includes(lowered)) return 'false';
        if (['ng', 'notgiven', 'not-given'].includes(lowered)) return 'not given';
        if (/^[a-z]$/i.test(cleaned)) return cleaned.toUpperCase();
        const leadingOption = cleaned.match(/^([A-Za-z])(?:[.)])?\s+/);
        if (leadingOption && cleaned.length > 2) {
            return leadingOption[1].toUpperCase();
        }
        return cleaned;
    }

    function compareAnswers(userAnswer, correctAnswer) {
        const core = getAnswerMatchCore();
        if (core && typeof core.compareAnswers === 'function') {
            return core.compareAnswers(userAnswer, correctAnswer) === true;
        }
        const toTokens = (value) => {
            const source = Array.isArray(value) ? value : splitAnswerTokens(value);
            return Array.from(new Set(
                source.map((entry) => canonicalizeAnswerToken(entry)).filter(Boolean)
            ));
        };
        const actualTokens = toTokens(userAnswer);
        const expectedTokens = toTokens(correctAnswer);
        if (!actualTokens.length && !expectedTokens.length) {
            return null;
        }
        if (!actualTokens.length || !expectedTokens.length) {
            return false;
        }
        const tokenEquivalent = (left, right) => {
            if (left === right) {
                return true;
            }
            if (/^[A-Z]$/.test(left) || /^[A-Z]$/.test(right)) {
                return false;
            }
            const looseLeft = String(left).toLowerCase().replace(/[^a-z0-9]+/g, '');
            const looseRight = String(right).toLowerCase().replace(/[^a-z0-9]+/g, '');
            return !!looseLeft && looseLeft === looseRight;
        };
        const tokenSetEqual = (leftValues, rightValues) => (
            leftValues.length === rightValues.length
            && leftValues.every((leftItem) => rightValues.some((rightItem) => tokenEquivalent(leftItem, rightItem)))
        );
        if (Array.isArray(correctAnswer)) {
            if (actualTokens.length === 1) {
                return expectedTokens.some((token) => tokenEquivalent(token, actualTokens[0]));
            }
            return tokenSetEqual(actualTokens, expectedTokens);
        }
        if (actualTokens.length > 1 || expectedTokens.length > 1) {
            return tokenSetEqual(actualTokens, expectedTokens);
        }
        return tokenEquivalent(actualTokens[0], expectedTokens[0]);
    }

    function isMultiChoiceQuestion(questionId, dataset = state.dataset) {
        const groups = Array.isArray(dataset?.questionGroups) ? dataset.questionGroups : [];
        return groups.some((group) => (
            group
            && group.kind === 'multi_choice'
            && Array.isArray(group.questionIds)
            && group.questionIds.includes(questionId)
        ));
    }

    function compareQuestionAnswer(questionId, userAnswer, correctAnswer, dataset = state.dataset) {
        const acceptedAnswers = dataset?.acceptedAnswers?.[questionId];
        if (Array.isArray(acceptedAnswers) && acceptedAnswers.length > 0) {
            return acceptedAnswers.some((answer) => compareAnswers(userAnswer, answer));
        }
        if (isMultiChoiceQuestion(questionId, dataset) && Array.isArray(correctAnswer)) {
            const core = getAnswerMatchCore();
            if (core && typeof core.compareAnswerSets === 'function') {
                return core.compareAnswerSets(userAnswer, correctAnswer) === true;
            }
            const actual = splitAnswerTokens(userAnswer);
            const expected = splitAnswerTokens(correctAnswer);
            const actualSet = Array.from(new Set(actual.map(canonicalizeAnswerToken).filter(Boolean)));
            const expectedSet = Array.from(new Set(expected.map(canonicalizeAnswerToken).filter(Boolean)));
            return actualSet.length === expectedSet.length
                && actualSet.every((token) => expectedSet.includes(token));
        }
        return compareAnswers(userAnswer, correctAnswer);
    }

    function questionWeight(questionId, correctAnswer, dataset = state.dataset) {
        const normalized = normalizeAnswerValue(correctAnswer);
        if (isMultiChoiceQuestion(questionId, dataset) && Array.isArray(normalized) && normalized.length > 0) {
            return normalized.length;
        }
        return 1;
    }

    function hasAnswer(questionId) {
        const answers = collectAnswers();
        const value = answers[questionId];
        return Array.isArray(value) ? value.some(Boolean) : !!String(value || '').trim();
    }

    function buildResults() {
        const answers = collectAnswers();
        const answerKey = state.dataset?.answerKey || {};
        const questionOrder = Array.isArray(state.dataset?.questionOrder) ? state.dataset.questionOrder : Object.keys(answerKey);
        const answerComparison = {};
        const details = {};
        let correctCount = 0;
        let totalQuestions = 0;

        questionOrder.forEach((questionId) => {
            const userAnswer = answers[questionId] || '';
            const correctAnswer = answerKey[questionId];
            const isCorrect = compareQuestionAnswer(questionId, userAnswer, correctAnswer, state.dataset);
            const weight = questionWeight(questionId, correctAnswer, state.dataset);
            totalQuestions += weight;
            if (isCorrect) {
                correctCount += weight;
            }
            answerComparison[questionId] = {
                questionId,
                userAnswer,
                correctAnswer,
                isCorrect
            };
            details[questionId] = {
                questionId,
                userAnswer,
                correctAnswer,
                isCorrect
            };
        });

        const accuracy = totalQuestions > 0 ? correctCount / totalQuestions : 0;
        return {
            answers,
            answerComparison,
            correctAnswers: answerKey,
            scoreInfo: {
                correct: correctCount,
                total: totalQuestions,
                totalQuestions,
                accuracy,
                percentage: Math.round(accuracy * 100),
                details,
                source: 'unified_reading_page'
            }
        };
    }

    function renderResults(results) {
        if (!dom.results) return;
        const rows = Object.values(results.answerComparison).map((entry) => {
            const label = displayLabel(entry.questionId);
            const userAnswer = Array.isArray(entry.userAnswer) ? entry.userAnswer.join(', ') : (entry.userAnswer || '未作答');
            const correctAnswer = Array.isArray(entry.correctAnswer) ? entry.correctAnswer.join(', ') : entry.correctAnswer;
            const status = entry.isCorrect ? '✓' : '✗';
            return `
                <tr>
                    <td>${label}</td>
                    <td>${userAnswer}</td>
                    <td>${correctAnswer || ''}</td>
                    <td class="${entry.isCorrect ? 'result-correct' : 'result-incorrect'}">${status}</td>
                </tr>
            `;
        }).join('');
        dom.results.innerHTML = `
            <h4>答题结果</h4>
            <p>得分 ${results.scoreInfo.correct} / ${results.scoreInfo.totalQuestions} · ${results.scoreInfo.percentage}%</p>
            <table class="results-table">
                <thead>
                    <tr>
                        <th>题号</th>
                        <th>你的答案</th>
                        <th>正确答案</th>
                        <th>结果</th>
                    </tr>
                </thead>
                <tbody>${rows}</tbody>
            </table>
        `;
        dom.results.style.display = 'block';
    }

    function escapeSelector(value) {
        if (global.CSS && typeof global.CSS.escape === 'function') {
            try {
                return global.CSS.escape(value);
            } catch (_) {
                // ignore and use fallback
            }
        }
        return String(value).replace(/["\\]/g, '\\$&');
    }

    function normalizeReplayQuestionId(rawValue) {
        if (rawValue == null) return '';
        const raw = String(rawValue).trim();
        if (!raw) return '';
        const splitIndex = raw.lastIndexOf('::');
        const value = splitIndex >= 0 ? raw.slice(splitIndex + 2) : raw;
        const direct = normalizeQuestionId(value);
        if (direct) return direct;
        const digits = value.match(/(\d+)/);
        return digits ? `q${digits[1]}` : value.toLowerCase();
    }

    function normalizeReplayMap(rawMap = {}) {
        const normalized = {};
        if (!rawMap || typeof rawMap !== 'object') {
            return normalized;
        }
        Object.entries(rawMap).forEach(([key, value]) => {
            const normalizedKey = normalizeReplayQuestionId(key);
            if (!normalizedKey) return;
            normalized[normalizedKey] = value;
        });
        return normalized;
    }

    function buildReplayResults(entry = {}) {
        const normalizedAnswers = normalizeReplayMap(entry.answers || {});
        const normalizedCorrectAnswers = normalizeReplayMap(entry.correctAnswers || {});
        const normalizedComparison = {};
        const rawComparison = normalizeReplayMap(entry.answerComparison || {});
        const questionIds = new Set([
            ...Object.keys(normalizedAnswers),
            ...Object.keys(normalizedCorrectAnswers),
            ...Object.keys(rawComparison),
            ...(Array.isArray(entry.allQuestionIds)
                ? entry.allQuestionIds.map((item) => normalizeReplayQuestionId(item)).filter(Boolean)
                : [])
        ]);

        let correctCount = 0;
        questionIds.forEach((questionId) => {
            const rawEntry = rawComparison[questionId];
            const comparisonEntry = (rawEntry && typeof rawEntry === 'object' && !Array.isArray(rawEntry))
                ? rawEntry
                : {};
            const userAnswer = Object.prototype.hasOwnProperty.call(comparisonEntry, 'userAnswer')
                ? comparisonEntry.userAnswer
                : (Object.prototype.hasOwnProperty.call(normalizedAnswers, questionId) ? normalizedAnswers[questionId] : '');
            const correctAnswer = Object.prototype.hasOwnProperty.call(comparisonEntry, 'correctAnswer')
                ? comparisonEntry.correctAnswer
                : (Object.prototype.hasOwnProperty.call(normalizedCorrectAnswers, questionId) ? normalizedCorrectAnswers[questionId] : '');
            let isCorrect = typeof comparisonEntry.isCorrect === 'boolean'
                ? comparisonEntry.isCorrect
                : compareAnswers(userAnswer, correctAnswer);
            if (isCorrect) {
                correctCount += 1;
            }
            normalizedComparison[questionId] = {
                questionId,
                userAnswer,
                correctAnswer,
                isCorrect
            };
        });

        const totalQuestions = questionIds.size;
        const scoreInfo = Object.assign({}, entry.scoreInfo || {});
        scoreInfo.correct = Number.isFinite(Number(scoreInfo.correct)) ? Number(scoreInfo.correct) : correctCount;
        scoreInfo.total = Number.isFinite(Number(scoreInfo.total)) ? Number(scoreInfo.total) : totalQuestions;
        scoreInfo.totalQuestions = Number.isFinite(Number(scoreInfo.totalQuestions)) ? Number(scoreInfo.totalQuestions) : scoreInfo.total;
        scoreInfo.accuracy = scoreInfo.totalQuestions > 0 ? scoreInfo.correct / scoreInfo.totalQuestions : 0;
        scoreInfo.percentage = Number.isFinite(Number(scoreInfo.percentage))
            ? Number(scoreInfo.percentage)
            : Math.round(scoreInfo.accuracy * 100);

        return {
            answers: normalizedAnswers,
            correctAnswers: normalizedCorrectAnswers,
            answerComparison: normalizedComparison,
            scoreInfo
        };
    }

    function applyReplayAnswersToDom(answers = {}) {
        // 成组勾选/单选（DOM name 形如 q6_7，覆盖第 6、7 题共用一个选项池）：
        // 作答键是 q6/q7，按 name="q6" 查元素永远查不到，回看时整组显示为空。
        // 这里先按组名展开回填，再跳过这些题号，避免逐题查找落空。
        const replayGroupedIds = new Set();
        const replayGroupedInputs = new Map();
        document.querySelectorAll('input[type="radio"][name], input[type="checkbox"][name]').forEach((input) => {
            const groupName = String(input.getAttribute('name') || '').trim();
            if (!groupName) return;
            // 与保存侧（collectAnswers → resolveCheckboxQuestionIds）同一口径，
            // 组名形如 q7-8 / q6-7-8-9 时按题目组展开，避免与题号错配
            const questionIds = resolveCheckboxQuestionIds(groupName);
            if (!Array.isArray(questionIds) || questionIds.length <= 1) return;
            const existing = replayGroupedInputs.get(groupName) || { questionIds, inputs: [] };
            existing.inputs.push(input);
            replayGroupedInputs.set(groupName, existing);
        });
        replayGroupedInputs.forEach((group) => {
            const mergedValues = [];
            group.questionIds.forEach((questionId) => {
                replayGroupedIds.add(questionId);
                if (!Object.prototype.hasOwnProperty.call(answers, questionId)) return;
                splitAnswerTokens(answers[questionId]).forEach((entry) => {
                    const normalized = canonicalizeAnswerToken(entry);
                    if (normalized) mergedValues.push(normalized);
                });
            });
            const normalizedValues = Array.from(new Set(mergedValues));
            group.inputs.forEach((input) => {
                const candidate = canonicalizeAnswerToken(
                    input.value || input.dataset?.option || input.dataset?.value || input.id || ''
                );
                input.checked = normalizedValues.includes(candidate)
                    || normalizedValues.some((value) => compareAnswers(input.value, value));
            });
        });

        Object.entries(answers).forEach(([questionId, rawValue]) => {
            const normalizedId = normalizeReplayQuestionId(questionId);
            if (!normalizedId) return;
            if (replayGroupedIds.has(normalizedId)) return;
            if (applyDropzoneAnswer(normalizedId, rawValue)) {
                return;
            }
            const aliases = Array.from(new Set([
                normalizedId,
                normalizedId.replace(/^q/i, ''),
                `question${normalizedId.replace(/^q/i, '')}`
            ])).filter(Boolean);

            const valueList = Array.isArray(rawValue)
                ? rawValue.map((item) => String(item).trim()).filter(Boolean)
                : String(rawValue == null ? '' : rawValue).split(',').map((item) => item.trim()).filter(Boolean);
            const firstValue = valueList[0] || '';

            aliases.forEach((alias) => {
                const escapedAlias = escapeSelector(alias);
                const selector = [
                    `input[name="${escapedAlias}"]`,
                    `textarea[name="${escapedAlias}"]`,
                    `select[name="${escapedAlias}"]`,
                    `input[id="${escapedAlias}"]`,
                    `textarea[id="${escapedAlias}"]`,
                    `select[id="${escapedAlias}"]`
                ].join(', ');
                const fields = Array.from(document.querySelectorAll(selector));
                fields.forEach((field) => {
                    if (!(field instanceof HTMLElement)) return;
                    if (field instanceof HTMLInputElement) {
                        if (field.type === 'radio') {
                            const candidate = String(field.value || field.dataset?.option || '').trim();
                            field.checked = valueList.includes(candidate) || valueList.includes(field.id || '');
                            return;
                        }
                        if (field.type === 'checkbox') {
                            const candidate = String(field.value || field.dataset?.option || '').trim();
                            field.checked = valueList.includes(candidate) || valueList.includes(field.id || '');
                            return;
                        }
                        field.value = firstValue;
                        return;
                    }
                    if (field instanceof HTMLTextAreaElement || field instanceof HTMLSelectElement) {
                        field.value = firstValue;
                    }
                });
            });
        });
    }

    function setReadOnlyMode(enabled) {
        state.readOnly = Boolean(enabled);
        document.body.classList.toggle('review-readonly-mode', state.readOnly);
        if (dom.submitBtn) {
            if (!dom.submitBtn.dataset.defaultLabel) {
                dom.submitBtn.dataset.defaultLabel = dom.submitBtn.textContent || 'Submit';
            }
            dom.submitBtn.disabled = state.readOnly;
            if (state.readOnly) {
                dom.submitBtn.textContent = '回顾模式';
            } else {
                dom.submitBtn.textContent = dom.submitBtn.dataset.defaultLabel;
            }
        }
        if (dom.resetBtn) {
            dom.resetBtn.disabled = state.readOnly;
        }
        const controls = document.querySelectorAll('input, textarea, select');
        controls.forEach((control) => {
            if (control instanceof HTMLInputElement || control instanceof HTMLTextAreaElement || control instanceof HTMLSelectElement) {
                control.disabled = state.readOnly;
            }
        });
        syncPrimaryActionButtons();
        refreshSimulationDraftSyncLifecycle();
    }

    function syncSimulationRuntimeFlags() {
        try {
            global.__UNIFIED_READING_SIMULATION_MODE__ = Boolean(state.simulationMode);
            global.__UNIFIED_READING_SIMULATION_IS_LAST__ = Boolean(state.simulationCtx && state.simulationCtx.isLast);
        } catch (_) {
            // ignore
        }
    }

    function syncPrimaryActionButtons() {
        if (dom.submitBtn && !dom.submitBtn.dataset.defaultLabel) {
            dom.submitBtn.dataset.defaultLabel = dom.submitBtn.textContent || 'Submit';
        }
        if (dom.submitBtn && !dom.submitBtn.dataset.defaultType) {
            dom.submitBtn.dataset.defaultType = dom.submitBtn.getAttribute('type') || '';
        }
        if (dom.resetBtn && !dom.resetBtn.dataset.defaultLabel) {
            dom.resetBtn.dataset.defaultLabel = dom.resetBtn.textContent || 'Reset';
        }
        if (dom.resetBtn && !dom.resetBtn.dataset.defaultType) {
            dom.resetBtn.dataset.defaultType = dom.resetBtn.getAttribute('type') || '';
        }
        const ctx = state.simulationCtx && typeof state.simulationCtx === 'object' ? state.simulationCtx : null;
        const simulationEnabled = Boolean(state.simulationMode && ctx);
        syncSimulationRuntimeFlags();

        if (!simulationEnabled || state.reviewMode) {
            if (dom.submitBtn) {
                dom.submitBtn.style.display = '';
                if (dom.submitBtn.dataset.defaultType) {
                    dom.submitBtn.setAttribute('type', dom.submitBtn.dataset.defaultType);
                }
                if (!state.readOnly) {
                    dom.submitBtn.textContent = dom.submitBtn.dataset.defaultLabel || 'Submit';
                }
            }
            if (dom.resetBtn) {
                dom.resetBtn.style.display = '';
                if (dom.resetBtn.dataset.defaultType) {
                    dom.resetBtn.setAttribute('type', dom.resetBtn.dataset.defaultType);
                }
                if (!state.readOnly) {
                    dom.resetBtn.textContent = dom.resetBtn.dataset.defaultLabel || 'Reset';
                }
                dom.resetBtn.disabled = state.readOnly;
            }
            return;
        }
        if (dom.resetBtn) {
            dom.resetBtn.style.display = '';
            dom.resetBtn.setAttribute('type', 'button');
            dom.resetBtn.textContent = '上一题';
            dom.resetBtn.disabled = state.readOnly || !ctx.canPrev;
        }
        if (dom.submitBtn) {
            dom.submitBtn.style.display = '';
            dom.submitBtn.setAttribute('type', 'button');
            dom.submitBtn.textContent = ctx.isLast ? 'Submit' : '下一题';
            dom.submitBtn.disabled = state.readOnly;
        }
    }

    function ensureReviewNavStyle() {
        if (document.getElementById('review-nav-style')) return;
        const style = document.createElement('style');
        style.id = 'review-nav-style';
        style.textContent = `
            #review-nav-bar { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); display: inline-flex; align-items: center; gap: 8px; z-index: 2; }
            #review-nav-bar button { border: 1px solid rgba(148, 163, 184, 0.6); border-radius: 6px; padding: 4px 10px; background: #fff; color: #0f172a; cursor: pointer; font-size: 12px; font-weight: 600; }
            #review-nav-bar button:disabled { opacity: 0.4; cursor: not-allowed; }
        `;
        document.head.appendChild(style);
    }

    function ensureReviewNavBar() {
        let bar = document.getElementById('review-nav-bar');
        if (bar) return bar;
        ensureReviewNavStyle();
        bar = document.createElement('div');
        bar.id = 'review-nav-bar';
        bar.innerHTML = `
            <button type="button" data-review-dir="prev">上一题</button>
            <button type="button" data-review-dir="next">下一题</button>
        `;
        bar.addEventListener('click', (event) => {
            const button = event.target instanceof HTMLElement ? event.target.closest('button[data-review-dir]') : null;
            if (!button || button.disabled) return;
                const direction = button.getAttribute('data-review-dir') || '';
                if (!direction) return;
                const barNode = button.closest('#review-nav-bar');
                const finalizeOnNext = Boolean(
                    direction === 'next'
                    && barNode
                    && barNode.dataset
                    && barNode.dataset.finalizeOnNext === 'true'
                );
                postMessage('REVIEW_NAVIGATE', {
                    direction,
                    sessionId: null,
                    reviewSessionId: state.reviewSessionId || state.reviewContext?.reviewSessionId || null,
                    suiteSessionId: state.suiteSessionId || state.reviewContext?.suiteSessionId || null,
                    suiteReviewMode: state.suiteReviewMode === true,
                    currentIndex: Number.isInteger(state.reviewContext?.currentIndex) ? state.reviewContext.currentIndex : state.reviewEntryIndex,
                    finalizeOnNext
                });
            });
        const header = document.querySelector('body > header') || document.querySelector('header');
        if (header) {
            try {
                if (global.getComputedStyle(header).position === 'static') {
                    header.style.position = 'relative';
                    header.dataset.reviewNavPatched = '1';
                }
            } catch (_) {
                header.style.position = 'relative';
                header.dataset.reviewNavPatched = '1';
            }
            header.appendChild(bar);
        } else {
            document.body.insertAdjacentElement('afterbegin', bar);
        }
        return bar;
    }

    function setReviewNavVisibility(visible) {
        const bar = ensureReviewNavBar();
        bar.style.display = visible ? 'inline-flex' : 'none';
    }

    function resetToAnsweringPresentation() {
        state.lastResults = null;
        state.submitted = false;
        document.body.classList.remove('single-submitted-mode');
        if (dom.results) {
            dom.results.style.display = 'none';
            dom.results.innerHTML = '';
        }
        clearExplanations();
        updateNavStatuses();
    }

    function applyReviewContext(data = {}) {
        const contextExamId = data && data.examId != null ? String(data.examId).trim() : '';
        const currentExamId = state.examId != null ? String(state.examId).trim() : '';
        if (contextExamId && currentExamId && contextExamId !== currentExamId) {
            return;
        }
        state.reviewContext = data;
        state.suiteReviewMode = Boolean(data.suiteReviewMode);
        const viewMode = data.viewMode === 'answering' ? 'answering' : 'review';
        state.reviewViewMode = viewMode;
        if (data.reviewSessionId) {
            state.reviewSessionId = data.reviewSessionId;
        }
        if (Number.isInteger(data.currentIndex)) {
            state.reviewEntryIndex = data.currentIndex;
        }
        const bar = ensureReviewNavBar();
        const prevBtn = bar.querySelector('button[data-review-dir="prev"]');
        const nextBtn = bar.querySelector('button[data-review-dir="next"]');
        const shouldShowNav = data.showNav !== false;
        setReviewNavVisibility(shouldShowNav);
        const currentIndex = Number.isFinite(Number(data.currentIndex)) ? Number(data.currentIndex) : state.reviewEntryIndex;
        const total = Number.isFinite(Number(data.total)) ? Number(data.total) : 1;
        bar.dataset.reviewIndex = String(currentIndex);
        bar.dataset.reviewTotal = String(total);
        bar.dataset.viewMode = viewMode;
        bar.dataset.finalizeOnNext = data.finalizeOnNext ? 'true' : 'false';
        if (prevBtn) prevBtn.disabled = !data.canPrev;
        if (nextBtn) nextBtn.disabled = !data.canNext;
        if (viewMode === 'answering') {
            state.reviewMode = false;
            resetToAnsweringPresentation();
            setReadOnlyMode(false);
        } else {
            state.reviewMode = true;
            setReadOnlyMode(data.readOnly !== false);
        }
    }

    function resolveReplayArray(data, entry, field) {
        const candidates = [
            data && data[field],
            entry && entry[field],
            entry && entry.metadata && entry.metadata[field],
            entry && entry.realData && entry.realData[field],
            entry && entry.realData && entry.realData.metadata && entry.realData.metadata[field],
            entry && entry.rawData && entry.rawData[field],
            entry && entry.rawData && entry.rawData.metadata && entry.rawData.metadata[field],
            entry && entry.results && entry.results[field],
            entry && entry.results && entry.results.metadata && entry.results.metadata[field]
        ];
        for (let index = 0; index < candidates.length; index += 1) {
            if (Array.isArray(candidates[index]) && candidates[index].length) {
                return candidates[index].slice();
            }
        }
        return [];
    }

    async function applyReplayRecord(data = {}) {
        const entry = data.entry && typeof data.entry === 'object' ? data.entry : data;
        const entryExamId = entry && entry.examId != null ? String(entry.examId).trim() : '';
        const currentExamId = state.examId != null ? String(state.examId).trim() : '';
        if (entryExamId && currentExamId && entryExamId !== currentExamId) {
            return;
        }
        const replayResults = buildReplayResults(entry);
        const replayMarks = resolveReplayArray(data, entry, 'markedQuestions');
        if (data.reviewSessionId) {
            state.reviewSessionId = data.reviewSessionId;
        }
        if (Number.isInteger(data.reviewEntryIndex)) {
            state.reviewEntryIndex = data.reviewEntryIndex;
        }
        const replayHighlights = resolveReplayArray(data, entry, 'highlights');
        const replayNotes = resolveReplayArray(data, entry, 'notes');
        state.reviewRecordId = data.recordId || entry.recordId || null;
        state.reviewMode = true;
        state.reviewViewMode = 'review';
        applyReplayAnswersToDom(replayResults.answers || {});
        state.lastResults = replayResults;
        state.submitted = true;

        // 套题回顾：一次呈现三篇；单篇回顾维持原样
        let reviewSuiteSummary = null;
        if (Array.isArray(data.suiteReviewEntries) && data.suiteReviewEntries.length > 1) {
            try {
                reviewSuiteSummary = await buildSuiteSummaryFromReviewEntries(data.suiteReviewEntries);
            } catch (suiteError) {
                console.error('[UnifiedReadingPage] 构建套题回顾结果失败:', suiteError);
            }
        }
        if (reviewSuiteSummary) {
            configureHistorySuiteReview(reviewSuiteSummary);
            renderSuiteResults(reviewSuiteSummary);
            const band = suiteBandLabel(reviewSuiteSummary.correct, reviewSuiteSummary.total);
            renderScoreBanner({
                title: '套题结果',
                correct: reviewSuiteSummary.correct,
                total: reviewSuiteSummary.total,
                percentage: reviewSuiteSummary.percentage,
                bandLabel: band && band.bandLabel ? band.bandLabel : '',
                estimated: !!(band && band.estimated)
            });
        } else {
            renderResults(replayResults);
            const info = replayResults.scoreInfo || {};
            renderScoreBanner({
                title: '本次答题',
                correct: info.correct,
                total: info.totalQuestions,
                percentage: info.percentage
            });
        }
        await renderExplanations();
        updateNavStatuses(replayResults);
        setReadOnlyMode(data.readOnly !== false);
        // 回顾模式：计时固定为记录的完成用时并锁定（不再走动、不可点击启停）
        freezeReviewTimer(Number(reviewSuiteSummary?.duration ?? entry.duration ?? data.duration) || 0);
        // 题目渲染和标记组件可能分属不同脚本；立即恢复并做两次短延迟重试，避免偶发丢标记
        const restoreAnnotations = () => {
            if (replayHighlights.length && typeof applyHighlights === 'function') {
                try {
                    applyHighlights(replayHighlights);
                } catch (_) {
                    // ignore highlight restore failures
                }
            }
            if (typeof global.setPracticeNotes === 'function') {
                try {
                    global.setPracticeNotes(replayNotes);
                } catch (_) {
                    // ignore note restore failures
                }
            }
            if (typeof global.setPracticeMarkedQuestions === 'function') {
                try {
                    global.setPracticeMarkedQuestions(replayMarks);
                } catch (_) {
                    // ignore mark replay failures
                }
            }
        };
        restoreAnnotations();
        global.setTimeout(restoreAnnotations, 80);
        global.setTimeout(restoreAnnotations, 240);
    }

    function buildEnvelope(type, payload) {
        return {
            type,
            data: Object.assign({
                examId: state.examId,
                sessionId: state.sessionId,
                suiteSessionId: state.suiteSessionId,
                suiteTimerAnchorMs: state.suiteTimerAnchorMs,
                globalTimerAnchorMs: state.suiteTimerAnchorMs,
                suiteTimerMode: state.suiteTimerMode,
                suiteTimerLimitSeconds: state.suiteTimerLimitSeconds,
                source: MESSAGE_SOURCE
            }, payload || {}),
            source: MESSAGE_SOURCE
        };
    }

    function postMessage(type, payload) {
        const envelope = buildEnvelope(type, payload);
        if ((type === 'PRACTICE_COMPLETE' || type === 'SIMULATION_SUBMIT')
            && envelope.data
            && envelope.data.partialSubmit !== true
            && global.OfflineReady
            && typeof global.OfflineReady.queueCompletion === 'function') {
            global.OfflineReady.queueCompletion(envelope);
        }
        const candidates = [global.opener, state.parentWindow, global.parent];
        const visited = new Set();
        for (let index = 0; index < candidates.length; index += 1) {
            const target = candidates[index];
            if (!target || target === global || visited.has(target)) {
                continue;
            }
            visited.add(target);
            try {
                target.postMessage(envelope, '*');
                state.parentWindow = target;
                return;
            } catch (_) {
                // try next candidate
            }
        }
    }

    function stopInitLoop() {
        if (state.initTimer) {
            clearInterval(state.initTimer);
            state.initTimer = null;
        }
    }

    function sendSessionReady() {
        postMessage('SESSION_READY', {
            url: global.location.href,
            pageType: 'unified-reading',
            title: state.dataset?.meta?.title || document.title,
            reviewMode: state.reviewMode,
            readOnly: state.readOnly,
            reviewSessionId: state.reviewSessionId,
            reviewEntryIndex: state.reviewEntryIndex,
            suiteTimerAnchorMs: state.suiteTimerAnchorMs,
            globalTimerAnchorMs: state.suiteTimerAnchorMs,
            suiteTimerMode: state.suiteTimerMode,
            suiteTimerLimitSeconds: state.suiteTimerLimitSeconds
        });
        state.sessionReadySent = true;
    }

    function buildInitSignature(data = {}) {
        return JSON.stringify({
            examId: data && data.examId != null ? String(data.examId).trim() : '',
            sessionId: data && data.sessionId != null ? String(data.sessionId).trim() : '',
            suiteSessionId: data && data.suiteSessionId != null ? String(data.suiteSessionId).trim() : '',
            reviewSessionId: data && data.reviewSessionId != null ? String(data.reviewSessionId).trim() : '',
            reviewEntryIndex: Number.isInteger(data && data.reviewEntryIndex) ? data.reviewEntryIndex : 0,
            reviewMode: Boolean(data && data.reviewMode),
            readOnly: data && Object.prototype.hasOwnProperty.call(data, 'readOnly') ? Boolean(data.readOnly) : null,
            suiteFlowMode: data && typeof data.suiteFlowMode === 'string' ? data.suiteFlowMode.trim().toLowerCase() : '',
            suiteTimerAnchorMs: Number.isFinite(Number(data && (data.suiteTimerAnchorMs ?? data.globalTimerAnchorMs))) ? Number(data && (data.suiteTimerAnchorMs ?? data.globalTimerAnchorMs)) : null,
            suiteTimerMode: data && typeof data.suiteTimerMode === 'string' ? data.suiteTimerMode.trim().toLowerCase() : '',
            suiteTimerLimitSeconds: Number.isFinite(Number(data && data.suiteTimerLimitSeconds)) ? Number(data.suiteTimerLimitSeconds) : null,
            globalTimerAnchorMs: Number.isFinite(Number(data && data.globalTimerAnchorMs)) ? Number(data.globalTimerAnchorMs) : null
        });
    }

    function buildReplaySignature(data = {}) {
        const entry = data && data.entry && typeof data.entry === 'object' ? data.entry : {};
        const entryExamId = entry && entry.examId != null ? String(entry.examId).trim() : '';
        const currentExamId = state.examId != null ? String(state.examId).trim() : '';
        return JSON.stringify({
            examId: entryExamId || currentExamId,
            reviewSessionId: data && data.reviewSessionId != null ? String(data.reviewSessionId).trim() : '',
            suiteSessionId: data && data.suiteSessionId != null ? String(data.suiteSessionId).trim() : '',
            reviewEntryIndex: Number.isInteger(data && data.reviewEntryIndex) ? data.reviewEntryIndex : 0
        });
    }

    function startInitLoop() {
        stopInitLoop();
        if ((!global.opener || global.opener.closed) && global.parent === global) return;
        let attempts = 0;
        postMessage('REQUEST_INIT', {});
        state.initTimer = setInterval(() => {
            if (state.sessionId || ++attempts > 20) {
                stopInitLoop();
                return;
            }
            postMessage('REQUEST_INIT', {});
        }, INIT_RETRY_MS);
    }

    function getSimulationDraftStorageKey() {
        const suiteSessionId = state.suiteSessionId ? String(state.suiteSessionId).trim() : '';
        const examId = state.examId ? String(state.examId).trim() : '';
        if (!suiteSessionId || !examId) {
            return '';
        }
        return `ielts_sim_draft::${suiteSessionId}::${examId}`;
    }

    function cloneDraftSafely(draft) {
        if (!draft || typeof draft !== 'object') {
            return null;
        }
        try {
            return JSON.parse(JSON.stringify(draft));
        } catch (_) {
            return {
                answers: draft.answers && typeof draft.answers === 'object' ? { ...draft.answers } : {},
                highlights: Array.isArray(draft.highlights) ? draft.highlights.slice() : [],
                scrollY: Number.isFinite(Number(draft.scrollY)) ? Number(draft.scrollY) : 0
            };
        }
    }

    function buildDraftFingerprint(draft) {
        if (!draft || typeof draft !== 'object') {
            return '';
        }
        try {
            return JSON.stringify(draft);
        } catch (_) {
            return '';
        }
    }

    function persistSimulationDraftMirror(draft) {
        const key = getSimulationDraftStorageKey();
        if (!key || !global.sessionStorage || !draft || !draftHasContent(draft)) {
            return;
        }
        try {
            global.sessionStorage.setItem(key, JSON.stringify({
                draft,
                updatedAt: Date.now()
            }));
        } catch (_) {
            // ignore sessionStorage failures in restricted environments
        }
    }

    function restoreSimulationDraftMirror() {
        const key = getSimulationDraftStorageKey();
        if (!key || !global.sessionStorage) {
            return null;
        }
        try {
            const raw = global.sessionStorage.getItem(key);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            if (!parsed || typeof parsed !== 'object') {
                return null;
            }
            return parsed.draft && typeof parsed.draft === 'object'
                ? parsed.draft
                : null;
        } catch (_) {
            return null;
        }
    }

    function clearSimulationDraftMirror() {
        const key = getSimulationDraftStorageKey();
        if (!key || !global.sessionStorage) {
            return;
        }
        try {
            global.sessionStorage.removeItem(key);
        } catch (_) {
            // ignore sessionStorage failures in restricted environments
        }
    }

    function stopSimulationDraftSync() {
        if (state.simulationDraftSyncTimer) {
            clearInterval(state.simulationDraftSyncTimer);
            state.simulationDraftSyncTimer = null;
        }
    }

    function collectCurrentDraft() {
        const answers = collectAnswers();
        return {
            answers,
            highlights: collectHighlights(),
            notes: typeof global.getPracticeNotes === 'function' ? global.getPracticeNotes() : [],
            scrollLeft: dom.left ? dom.left.scrollTop : 0,
            scrollQuestions: document.getElementById('right')?.scrollTop || 0,
            markedQuestions: (typeof global.getPracticeMarkedQuestions === 'function')
                ? global.getPracticeMarkedQuestions()
                : [],
            scrollY: global.scrollY || 0
        };
    }

    // ===== 单篇模式：本地草稿缓存 + 续做 =====

    function getSingleDraftStorageKey() {
        const examId = state.examId ? String(state.examId).trim() : '';
        if (!examId) {
            return '';
        }
        return `${SINGLE_DRAFT_KEY_PREFIX}${examId}`;
    }

    // 是否处于「应当保存单篇草稿」的状态
    function isSingleDraftEligible() {
        return Boolean(
            !state.simulationMode
            && !state.readOnly
            && !state.reviewMode
            && !state.submitted
            && state.examId
        );
    }

    function draftHasContent(draft) {
        if (!draft || typeof draft !== 'object') {
            return false;
        }
        const hasAnswers = draft.answers
            && typeof draft.answers === 'object'
            && Object.values(draft.answers).some((value) => (
                Array.isArray(value)
                    ? value.some((entry) => entry != null && String(entry).trim() !== '')
                    : value != null && String(value).trim() !== ''
            ));
        const hasHighlights = Array.isArray(draft.highlights) && draft.highlights.length > 0;
        const hasNotes = Array.isArray(draft.notes) && draft.notes.length > 0;
        const hasMarks = Array.isArray(draft.markedQuestions) && draft.markedQuestions.length > 0;
        return Boolean(hasAnswers || hasHighlights || hasNotes || hasMarks);
    }

    function saveSingleDraft(reason = 'auto') {
        if (!isSingleDraftEligible()) {
            return;
        }
        const key = getSingleDraftStorageKey();
        if (!key || !global.localStorage) {
            return;
        }
        const draft = cloneDraftSafely(collectCurrentDraft());
        if (!draftHasContent(draft)) {
            // 没有任何作答/高亮则不写入（也清掉历史空草稿）
            return;
        }
        try {
            global.localStorage.setItem(key, JSON.stringify({
                draft,
                savedAt: Date.now(),
                fingerprint: buildDraftFingerprint(draft),
                elapsed: getPageElapsedSeconds(),
                examTitle: state.dataset?.meta?.title || ''
            }));
        } catch (_) {
            // ignore localStorage failures in restricted environments
        }
    }

    function readSingleDraft() {
        const key = getSingleDraftStorageKey();
        if (!key || !global.localStorage) {
            return null;
        }
        try {
            const raw = global.localStorage.getItem(key);
            if (!raw) {
                return null;
            }
            const parsed = JSON.parse(raw);
            return parsed && parsed.draft && typeof parsed.draft === 'object' ? parsed : null;
        } catch (_) {
            return null;
        }
    }

    function clearSingleDraft() {
        const key = getSingleDraftStorageKey();
        if (!key || !global.localStorage) {
            return;
        }
        try {
            global.localStorage.removeItem(key);
        } catch (_) {
            // ignore
        }
    }

    // ===== 套题单篇草稿持久化（ielts_suite_draft::<suiteId>::<examId>）=====
    const SUITE_DRAFT_KEY_PREFIX = 'ielts_suite_draft::';

    function getSuiteDraftStorageKey() {
        const suiteId = state.suiteSessionId ? String(state.suiteSessionId).trim() : '';
        const examId = state.examId ? String(state.examId).trim() : '';
        if (!suiteId || !examId) {
            return '';
        }
        return `${SUITE_DRAFT_KEY_PREFIX}${suiteId}::${examId}`;
    }

    function isSuiteDraftEligible() {
        // 只要处于套题会话（模拟/经典/驻足任一流程）就要保存作答：
        // 经典流程没有页内切篇，宿主按小节重开本页时必须能从这里恢复作答。
        return Boolean(
            !state.suiteBooting
            && !state.readOnly
            && !state.reviewMode
            && !state.submitted
            && state.suiteSessionId
            && state.examId
        );
    }

    function countAnsweredAcrossSuiteDrafts(draftsByExam) {
        let count = 0;
        Object.values(draftsByExam || {}).forEach((draft) => {
            const answers = draft && draft.answers && typeof draft.answers === 'object' ? draft.answers : {};
            Object.values(answers).forEach((value) => {
                if (Array.isArray(value) ? value.length > 0 : value !== null && value !== undefined && String(value).trim() !== '') {
                    count += 1;
                }
            });
        });
        return count;
    }

    function mirrorSuiteProgressFromPage(draft, savedAt, elapsed) {
        if (!global.localStorage || !state.suiteSessionId || !state.examId) return;
        const progressKey = 'ielts_suite_progress::' + String(state.suiteSessionId);
        try {
            const raw = global.localStorage.getItem(progressKey);
            const progress = raw ? JSON.parse(raw) : null;
            if (!progress || !Array.isArray(progress.sequence) || !progress.sequence.length) return;
            const sequenceIds = progress.sequence.map((item) => String(item && item.examId || '')).filter(Boolean);
            const pageIds = Array.isArray(state.suiteSequenceExamIds)
                ? state.suiteSequenceExamIds.map(String).filter(Boolean)
                : [];
            const lockedIds = Array.isArray(progress.lockedExamIds)
                ? progress.lockedExamIds.map(String).filter(Boolean)
                : sequenceIds.slice();
            const isSameSequence = lockedIds.length === sequenceIds.length
                && lockedIds.every((examId, index) => examId === sequenceIds[index])
                && (!pageIds.length || (pageIds.length === lockedIds.length
                    && pageIds.every((examId, index) => examId === lockedIds[index])));
            if (!isSameSequence || !lockedIds.includes(String(state.examId))) return;
            progress.lockedExamIds = lockedIds;
            progress.draftsByExam = progress.draftsByExam && typeof progress.draftsByExam === 'object'
                ? progress.draftsByExam
                : {};
            if (!draftHasContent(draft)) return;
            progress.elapsedByExam = progress.elapsedByExam && typeof progress.elapsedByExam === 'object'
                ? progress.elapsedByExam
                : {};
            progress.draftSavedAtByExam = progress.draftSavedAtByExam && typeof progress.draftSavedAtByExam === 'object'
                ? progress.draftSavedAtByExam
                : {};
            progress.draftsByExam[String(state.examId)] = draft;
            progress.draftSavedAtByExam[String(state.examId)] = savedAt;
            progress.elapsedByExam[String(state.examId)] = Math.max(0, Number(elapsed) || 0);
            const contextIndex = Number(state.simulationCtx && state.simulationCtx.currentIndex);
            const fallbackIndex = lockedIds.indexOf(String(state.examId));
            progress.currentIndex = Number.isInteger(contextIndex) && contextIndex >= 0 && contextIndex < lockedIds.length
                ? contextIndex
                : Math.max(0, fallbackIndex);
            progress.activeExamId = lockedIds[progress.currentIndex] || String(state.examId);
            progress.answeredCount = countAnsweredAcrossSuiteDrafts(progress.draftsByExam);
            progress.totalQuestions = Number(progress.totalQuestions) || 40;
            progress.elapsed = Math.round(Object.values(progress.elapsedByExam).reduce((sum, value) => (
                sum + (Number.isFinite(Number(value)) ? Math.max(0, Number(value)) : 0)
            ), 0));
            progress.updatedAt = savedAt;
            global.localStorage.setItem(progressKey, JSON.stringify(progress));
        } catch (_) {}
    }

    function saveSuiteDraft(reason = 'auto') {
        if (!isSuiteDraftEligible()) return;
        const key = getSuiteDraftStorageKey();
        if (!key || !global.localStorage) return;
        const draft = cloneDraftSafely(collectCurrentDraft());
        if (!draft || !draftHasContent(draft)) return;
        const savedAt = Date.now();
        const elapsed = getPageElapsedSeconds();
        try {
            global.localStorage.setItem(key, JSON.stringify({
                draft,
                savedAt,
                fingerprint: buildDraftFingerprint(draft),
                elapsed,
                examTitle: state.dataset?.meta?.title || '',
                examId: String(state.examId),
                sequenceIndex: Number(state.simulationCtx && state.simulationCtx.currentIndex) || 0,
                sequenceExamIds: Array.isArray(state.suiteSequenceExamIds) ? state.suiteSequenceExamIds.map(String) : [],
                suiteSessionId: state.suiteSessionId
            }));
            mirrorSuiteProgressFromPage(draft, savedAt, elapsed);
        } catch (_) {}
    }

    function readSuiteDraft() {
        const key = getSuiteDraftStorageKey();
        if (!key || !global.localStorage) {
            return null;
        }
        try {
            const raw = global.localStorage.getItem(key);
            if (!raw) return null;
            const parsed = JSON.parse(raw);
            return parsed && parsed.draft && typeof parsed.draft === 'object'
                ? parsed.draft
                : null;
        } catch (_) {
            return null;
        }
    }

    function clearSuiteDraft() {
        const key = getSuiteDraftStorageKey();
        if (!key || !global.localStorage) {
            return;
        }
        try {
            global.localStorage.removeItem(key);
        } catch (_) {
            // ignore
        }
    }

    function clearSuiteDraftsForSession(suiteSessionId) {
        if (!suiteSessionId || !global.localStorage) {
            return;
        }
        const prefix = `${SUITE_DRAFT_KEY_PREFIX}${suiteSessionId}::`;
        try {
            const toRemove = [];
            for (let i = 0; i < global.localStorage.length; i += 1) {
                const k = global.localStorage.key(i);
                if (k && k.indexOf(prefix) === 0) toRemove.push(k);
            }
            toRemove.forEach(k => global.localStorage.removeItem(k));
        } catch (_) {
            // ignore
        }
    }

    function scheduleSingleDraftSave() {
        if (!isSingleDraftEligible()) {
            return;
        }
        if (state.singleDraftSaveTimer) {
            return;
        }
        state.singleDraftSaveTimer = global.setTimeout(() => {
            state.singleDraftSaveTimer = null;
            saveSingleDraft('debounced');
        }, 800);
    }

    // 绑定单篇模式下的自动保存触发点（仅绑定一次）
    function bindSingleDraftHandlers() {
        if (state.singleDraftHandlersBound) {
            return;
        }
        state.singleDraftHandlersBound = true;

        const flush = () => saveSingleDraft('flush');

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                flush();
            }
        });
        global.addEventListener('pagehide', flush, { capture: true });
        global.addEventListener('beforeunload', flush, { capture: true });
        document.addEventListener('freeze', flush, { capture: true });

        // 作答 / 高亮变化时 debounce 保存
        document.addEventListener('change', scheduleSingleDraftSave, true);
        document.addEventListener('input', scheduleSingleDraftSave, true);
        document.addEventListener('mouseup', scheduleSingleDraftSave, true);
        global.addEventListener('practiceAnnotationsChanged', () => {
            saveSingleDraft('annotation');
        });
    }

    // 续做弹窗：检测到已保存草稿时询问「继续 / 重做」
    function showResumePrompt(savedDraft, isSuite = false) {
        return new Promise((resolve) => {
            const overlay = document.createElement('div');
            overlay.id = 'single-draft-resume-overlay';
            overlay.style.cssText = [
                'position:fixed', 'inset:0', 'z-index:99999',
                'display:flex', 'align-items:center', 'justify-content:center',
                'background:rgba(15,23,42,0.55)'
            ].join(';');

            const card = document.createElement('div');
            card.style.cssText = [
                'background:#fff', 'color:#1e293b', 'border-radius:14px',
                'max-width:380px', 'width:86%', 'padding:24px 22px',
                'box-shadow:0 18px 48px rgba(15,23,42,0.35)',
                'font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif',
                'text-align:center'
            ].join(';');

            const elapsed = Number(savedDraft.elapsed) || 0;
            const mm = Math.floor(elapsed / 60);
            const ss = elapsed % 60;
            const elapsedText = elapsed > 0
                ? `（上次用时 ${mm}:${ss < 10 ? '0' + ss : ss}）`
                : '';

            const title = document.createElement('div');
            title.style.cssText = 'font-size:1.05rem;font-weight:600;margin-bottom:8px;';
            title.textContent = isSuite ? '检测到未完成的套题练习' : '检测到未完成的做题记录';

            const desc = document.createElement('div');
            desc.style.cssText = 'font-size:0.85rem;opacity:0.7;margin-bottom:20px;line-height:1.5;';
            desc.textContent = `${isSuite ? '整套三篇的答案与标记已保存。' : ''}要从上次的进度继续，还是重新开始？${elapsedText}`;

            const btnRow = document.createElement('div');
            btnRow.style.cssText = 'display:flex;gap:12px;justify-content:center;';

            const makeBtn = (label, primary) => {
                const b = document.createElement('button');
                b.type = 'button';
                b.textContent = label;
                b.style.cssText = [
                    'flex:1', 'padding:10px 0', 'border-radius:9px', 'cursor:pointer',
                    'font-size:0.9rem', 'border:1px solid',
                    primary ? 'border-color:#2563eb;background:#2563eb;color:#fff'
                            : 'border-color:#cbd5e1;background:#fff;color:#475569'
                ].join(';');
                return b;
            };

            const continueBtn = makeBtn('从上次继续', true);
            const restartBtn = makeBtn('重新开始', false);

            const close = (choice) => {
                if (overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
                resolve(choice);
            };

            continueBtn.addEventListener('click', () => close('continue'));
            restartBtn.addEventListener('click', () => close('restart'));

            btnRow.appendChild(continueBtn);
            btnRow.appendChild(restartBtn);
            card.appendChild(title);
            card.appendChild(desc);
            card.appendChild(btnRow);
            overlay.appendChild(card);
            document.body.appendChild(overlay);
        });
    }

    // 单篇模式启动：若有草稿则询问续做
    async function initSingleDraftFlow() {
        // 套题/模拟模式或回顾只读模式同步即可判定，直接跳过（回顾不弹续做）
        if (state.simulationMode || state.suiteSessionId || state.reviewMode || state.readOnly) {
            return;
        }
        // 回顾/只读模式经由异步消息设置，稍等一拍再判定，避免在回顾窗口误弹续做框
        await new Promise((resolve) => global.setTimeout(resolve, 600));
        if (!isSingleDraftEligible()) {
            return;
        }
        bindSingleDraftHandlers();
        const saved = readSingleDraft();
        if (!saved || !draftHasContent(saved.draft)) {
            return;
        }
        // 从「未完成」列表点「继续做题」进入：带强制续做标记，直接恢复、不再弹窗
        // 优先信任 URL 参数 resume=1（跨窗口可靠），同时兼容旧的 sessionStorage 信道
        const forceKey = `ielts_force_resume::${state.examId}`;
        let forceResume = Boolean(state.forceResume);
        try {
            if (global.sessionStorage && global.sessionStorage.getItem(forceKey) === '1') {
                forceResume = true;
                global.sessionStorage.removeItem(forceKey);
            }
        } catch (_) {
            // ignore sessionStorage access failures
        }
        if (forceResume) {
            try {
                applyDraftToDom(saved.draft);
                restorePageElapsed(Number(saved.elapsed) || 0);
            } catch (error) {
                console.warn('[SingleDraft] 强制续做恢复失败:', error);
            }
            return;
        }
        const choice = await showResumePrompt(saved);
        // 弹窗期间若进入回顾态则放弃恢复
        if (!isSingleDraftEligible()) {
            return;
        }
        if (choice === 'continue') {
            try {
                applyDraftToDom(saved.draft);
                restorePageElapsed(Number(saved.elapsed) || 0);
            } catch (error) {
                console.warn('[SingleDraft] 恢复草稿失败:', error);
            }
        } else {
            clearSingleDraft();
        }
    }

    // 回顾：把计时固定为完成用时并锁定（禁止启停）
    function freezeReviewTimer(durationSeconds) {
        const bridge = global[PRACTICE_TIMER_BRIDGE_KEY];
        if (!bridge) {
            return;
        }
        try {
            if (typeof bridge.setElapsedSeconds === 'function') {
                bridge.setElapsedSeconds(Math.max(0, Math.floor(Number(durationSeconds) || 0)));
            }
            if (typeof bridge.setRunning === 'function') {
                bridge.setRunning(false);
            }
            if (typeof bridge.lock === 'function') {
                bridge.lock();
            }
        } catch (_) {
            // ignore timer bridge failures
        }
    }

    // 续做：把页面计时与 UI 计时恢复到上次用时
    function restorePageElapsed(elapsedSeconds) {
        const elapsed = Math.max(0, Math.floor(Number(elapsedSeconds) || 0));
        if (!elapsed) {
            return;
        }
        state.pageStartTime = Date.now() - elapsed * 1000;
        state.pagePausedAtMs = null;
        state.pagePausedOffsetMs = 0;
        const bridge = global[PRACTICE_TIMER_BRIDGE_KEY];
        if (bridge && typeof bridge.setElapsedSeconds === 'function') {
            try {
                bridge.setElapsedSeconds(elapsed);
            } catch (_) {
                // ignore timer bridge failures
            }
        }
    }

    function syncSimulationDraftSnapshot(reason = 'periodic') {
        // 套题三种流程（模拟/经典/驻足）都要本地保存作答：
        // 经典流程没有页内切篇，宿主重开本小节页时只能靠这份草稿恢复作答。
        if (state.suiteBooting || state.readOnly || state.submitted || !state.suiteSessionId || !state.examId) {
            return;
        }
        const draft = collectCurrentDraft();
        const fingerprint = buildDraftFingerprint(draft);
        if (reason === 'periodic' && fingerprint && fingerprint === state.simulationDraftFingerprint) {
            return;
        }
        state.simulationDraftFingerprint = fingerprint;
        const mirroredDraft = cloneDraftSafely(draft);
        if (!mirroredDraft || !draftHasContent(mirroredDraft)) {
            return;
        }
        persistSimulationDraftMirror(mirroredDraft);
        // 额外写一份到 localStorage（套题单篇草稿，关页不丢失）
        saveSuiteDraft(reason);
        const restartPending = state.suiteRestartPending === true;
        state.suiteRestartPending = false;
        // 只有模拟流程才向宿主回报草稿：经典/驻足流程没有这条信道，
        // 乱发消息会干扰宿主对当前小节的判断。
        if (!state.simulationMode) {
            return;
        }
        postMessage('SIMULATION_DRAFT_SYNC', {
            draft: mirroredDraft,
            restartSuite: restartPending,
            elapsed: getPageElapsedSeconds()
        });
    }

    function bindSuiteDraftFlushHandlers() {
        if (state.suiteDraftFlushHandlersBound) return;
        state.suiteDraftFlushHandlersBound = true;
        const flush = () => syncSimulationDraftSnapshot('flush');
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) flush();
        });
        global.addEventListener('pagehide', flush, { capture: true });
        global.addEventListener('beforeunload', flush, { capture: true });
        document.addEventListener('freeze', flush, { capture: true });
        document.addEventListener('change', flush, true);
        document.addEventListener('input', flush, true);
        global.addEventListener('practiceAnnotationsChanged', flush);
    }

    function refreshSimulationDraftSyncLifecycle() {
        const shouldSync = Boolean(
            !state.suiteBooting
            && !state.submitted
            && state.suiteSessionId
            && state.examId
            && !state.readOnly
            // 模拟流程等待宿主上下文就绪；经典/驻足流程没有该消息，直接开始同步
            && (state.simulationContextReady || !state.simulationMode)
        );
        if (!shouldSync) {
            stopSimulationDraftSync();
            return;
        }
        bindSuiteDraftFlushHandlers();
        if (!state.simulationDraftSyncTimer) {
            state.simulationDraftSyncTimer = setInterval(() => {
                syncSimulationDraftSnapshot('periodic');
            }, SIMULATION_DRAFT_SYNC_MS);
        }
        syncSimulationDraftSnapshot('activate');
    }

    function applyDraftToDom(draft) {
        if (!draft || typeof draft !== 'object') {
            return;
        }
        if (draft.answers && typeof draft.answers === 'object') {
            const answers = draft.answers;
            const groupedHandledQuestionIds = new Set();
            const groupedChoiceInputs = new Map();

            document.querySelectorAll('input[type="radio"][name], input[type="checkbox"][name]').forEach((input) => {
                const groupName = String(input.getAttribute('name') || '').trim();
                if (!groupName) return;
                const questionIds = resolveCheckboxQuestionIds(groupName);
                if (!Array.isArray(questionIds) || questionIds.length <= 1) return;
                const existing = groupedChoiceInputs.get(groupName) || {
                    questionIds,
                    inputs: []
                };
                existing.inputs.push(input);
                groupedChoiceInputs.set(groupName, existing);
            });

            groupedChoiceInputs.forEach((group) => {
                const mergedValues = [];
                group.questionIds.forEach((questionId) => {
                    groupedHandledQuestionIds.add(questionId);
                    if (!Object.prototype.hasOwnProperty.call(answers, questionId)) {
                        return;
                    }
                    splitAnswerTokens(answers[questionId]).forEach((entry) => {
                        const normalized = canonicalizeAnswerToken(entry);
                        if (normalized) {
                            mergedValues.push(normalized);
                        }
                    });
                });
                const normalizedValues = Array.from(new Set(mergedValues));
                group.inputs.forEach((input) => {
                    const candidate = canonicalizeAnswerToken(
                        input.value || input.dataset?.option || input.dataset?.value || input.id || ''
                    );
                    input.checked = normalizedValues.includes(candidate)
                        || normalizedValues.some((value) => compareAnswers(input.value, value));
                });
            });

            Object.entries(answers).forEach(([qid, value]) => {
                const normalized = normalizeQuestionId(qid);
                if (!normalized) return;
                if (groupedHandledQuestionIds.has(normalized)) {
                    return;
                }
                if (applyDropzoneAnswer(normalized, value)) {
                    return;
                }
                const escapedId = escapeSelector(normalized);
                // Radio / checkbox
                const choices = document.querySelectorAll(
                    `input[type="radio"][name="${escapedId}"], input[type="checkbox"][name="${escapedId}"]`
                );
                if (choices.length) {
                    const normalizedValues = splitAnswerTokens(value)
                        .map((entry) => canonicalizeAnswerToken(entry))
                        .filter(Boolean);
                    choices.forEach((input) => {
                        const candidate = canonicalizeAnswerToken(
                            input.value || input.dataset?.option || input.dataset?.value || input.id || ''
                        );
                        input.checked = normalizedValues.includes(candidate) || compareAnswers(input.value, value);
                    });
                    return;
                }
                // Text input
                const textInput = document.querySelector(`input[data-question-id="${escapedId}"], input#${escapedId}`);
                if (textInput && textInput.type !== 'radio' && textInput.type !== 'checkbox') {
                    textInput.value = Array.isArray(value) ? value.join(', ') : (value || '');
                    return;
                }
                const namedTextFields = Array.from(
                    document.querySelectorAll(`input[name="${escapedId}"], textarea[name="${escapedId}"]`)
                ).filter((field) => field.type !== 'radio' && field.type !== 'checkbox');
                if (namedTextFields.length) {
                    const normalizedTextValue = Array.isArray(value) ? value.join(', ') : (value || '');
                    namedTextFields.forEach((field) => {
                        field.value = normalizedTextValue;
                    });
                    return;
                }
                // Select
                const select = document.querySelector(`select[data-question-id="${escapedId}"], select#${escapedId}`);
                if (select) {
                    for (let i = 0; i < select.options.length; i++) {
                        if (compareAnswers(select.options[i].value, value)) {
                            select.selectedIndex = i;
                            break;
                        }
                    }
                }
                const namedSelects = document.querySelectorAll(`select[name="${escapedId}"]`);
                namedSelects.forEach((namedSelect) => {
                    for (let i = 0; i < namedSelect.options.length; i++) {
                        if (compareAnswers(namedSelect.options[i].value, value)) {
                            namedSelect.selectedIndex = i;
                            break;
                        }
                    }
                });
            });
        }
        if (Array.isArray(draft.highlights)) {
            applyHighlights(draft.highlights);
        }
        if (typeof global.setPracticeNotes === 'function') global.setPracticeNotes(draft.notes || []);
        if (dom.left) dom.left.scrollTop = Number(draft.scrollLeft) || 0;
        const rightPane = document.getElementById('right');
        if (rightPane) rightPane.scrollTop = Number(draft.scrollQuestions) || 0;
        if (Array.isArray(draft.markedQuestions)) {
            const restoreMarks = () => {
                if (typeof global.setPracticeMarkedQuestions === 'function') {
                    global.setPracticeMarkedQuestions(draft.markedQuestions);
                }
            };
            restoreMarks();
            global.setTimeout(restoreMarks, 80);
        }
        syncAllCheckboxSelectionLimits();
        if (typeof draft.scrollY === 'number') {
            global.scrollTo(0, draft.scrollY);
        }
    }

    function unwrapHighlights(root) {
        if (!root) return;
        root.querySelectorAll('.hl').forEach((highlight) => {
            const parent = highlight.parentNode;
            if (!parent) return;
            while (highlight.firstChild) {
                parent.insertBefore(highlight.firstChild, highlight);
            }
            parent.removeChild(highlight);
            parent.normalize();
        });
    }

    function resolveHighlightKind(node) {
        if (!(node instanceof HTMLElement)) {
            return 'highlight';
        }
        if (node.dataset && node.dataset.hlType === 'note') {
            return 'note';
        }
        if (node.dataset && node.dataset.hlType === 'pink') {
            return 'pink';
        }
        return 'highlight';
    }

    function applyHighlightKind(node, kind = 'highlight') {
        if (!(node instanceof HTMLElement)) {
            return;
        }
        node.classList.add('hl');
        if (kind === 'note') {
            node.dataset.hlType = 'note';
        } else if (kind === 'pink') {
            node.dataset.hlType = 'pink';
        } else {
            delete node.dataset.hlType;
        }
    }

    function resolveHighlightRoot(scope) {
        if (scope === 'left') return dom.left;
        return dom.groups;
    }

    function collectHighlights() {
        const records = [];
        const addScopeHighlights = (scope, root) => {
            if (!root) return;
            const fullText = String(root.textContent || '');
            Array.from(root.querySelectorAll('.hl')).forEach((node) => {
                const rawText = String(node.textContent || '');
                const text = rawText.trim();
                if (!text) return;
                let hit = -1;
                try {
                    const beforeRange = document.createRange();
                    beforeRange.selectNodeContents(root);
                    beforeRange.setEndBefore(node);
                    hit = beforeRange.toString().length + rawText.length - rawText.trimStart().length;
                } catch (_) {
                    hit = fullText.indexOf(text);
                }
                if (hit < 0) return;
                let occurrence = 0;
                let occurrenceCursor = 0;
                while (occurrenceCursor < hit) {
                    const occurrenceHit = fullText.indexOf(text, occurrenceCursor);
                    if (occurrenceHit < 0 || occurrenceHit >= hit) break;
                    occurrence += 1;
                    occurrenceCursor = occurrenceHit + Math.max(1, text.length);
                }
                records.push({
                    scope,
                    text,
                    kind: resolveHighlightKind(node),
                    noteId: node.dataset.noteId || '',
                    groupId: node.dataset.highlightGroupId || '',
                    reviewHighlight: node.dataset.reviewHighlight === 'true',
                    occurrence,
                    startOffset: hit,
                    endOffset: hit + text.length,
                    before: fullText.slice(Math.max(0, hit - 20), hit),
                    after: fullText.slice(hit + text.length, hit + text.length + 20)
                });
            });
        };
        addScopeHighlights('left', dom.left);
        addScopeHighlights('groups', dom.groups);
        return records;
    }

    function resolveRangeFromOffsets(root, start, end) {
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
        let node = walker.nextNode();
        let offset = 0;
        let startNode = null;
        let endNode = null;
        let startOffset = 0;
        let endOffset = 0;
        while (node) {
            const text = node.textContent || '';
            const nextOffset = offset + text.length;
            if (!startNode && start >= offset && start <= nextOffset) {
                startNode = node;
                startOffset = Math.max(0, start - offset);
            }
            if (!endNode && end >= offset && end <= nextOffset) {
                endNode = node;
                endOffset = Math.max(0, end - offset);
            }
            if (startNode && endNode) {
                break;
            }
            offset = nextOffset;
            node = walker.nextNode();
        }
        if (!startNode || !endNode) {
            return null;
        }
        const range = document.createRange();
        range.setStart(startNode, startOffset);
        range.setEnd(endNode, endOffset);
        return range;
    }

    function applyHighlightRecord(record) {
        if (!record || !record.text) return;
        const root = resolveHighlightRoot(record.scope);
        if (!root) return;
        const fullText = String(root.textContent || '');
        if (!fullText) return;
        const highlightKind = record.kind === 'note'
            ? 'note'
            : (record.kind === 'pink' ? 'pink' : 'highlight');
        const normalizedRecordText = String(record.text || '').replace(/\s+/g, ' ').trim();
        const startOffset = Number(record.startOffset);
        const endOffset = Number(record.endOffset);
        if (
            Number.isFinite(startOffset)
            && Number.isFinite(endOffset)
            && endOffset > startOffset
            && startOffset >= 0
            && endOffset <= fullText.length
        ) {
            const segment = fullText.slice(startOffset, endOffset);
            const normalizedSegment = String(segment || '').replace(/\s+/g, ' ').trim();
            const offsetLooksValid = !normalizedRecordText
                || normalizedSegment === normalizedRecordText
                || normalizedSegment.includes(normalizedRecordText)
                || normalizedRecordText.includes(normalizedSegment);
            if (offsetLooksValid) {
                const offsetRange = resolveRangeFromOffsets(root, startOffset, endOffset);
                if (offsetRange && !offsetRange.collapsed) {
                    if (wrapRestoredHighlightRange(offsetRange, highlightKind, record).length) return;
                }
            }
        }
        let cursor = 0;
        let hit = -1;
        const requiredOccurrence = Number.isFinite(Number(record.occurrence)) ? Number(record.occurrence) : 0;
        for (let index = 0; index <= requiredOccurrence; index += 1) {
            hit = fullText.indexOf(record.text, cursor);
            if (hit < 0) break;
            cursor = hit + record.text.length;
        }
        if (hit < 0) {
            return;
        }
        const expectedBefore = String(record.before || '').trim();
        const expectedAfter = String(record.after || '').trim();
        if (expectedBefore && !fullText.slice(Math.max(0, hit - expectedBefore.length), hit).includes(expectedBefore)) {
            return;
        }
        if (expectedAfter && !fullText.slice(hit + record.text.length, hit + record.text.length + expectedAfter.length).includes(expectedAfter)) {
            return;
        }
        const range = resolveRangeFromOffsets(root, hit, hit + record.text.length);
        if (!range || range.collapsed) {
            return;
        }
        wrapRestoredHighlightRange(range, highlightKind, record);
    }

    function wrapRestoredHighlightRange(range, kind, record = {}) {
        if (!range || range.collapsed) return [];
        const root = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
            ? range.commonAncestorContainer.parentNode
            : range.commonAncestorContainer;
        if (!root) return [];
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.textContent) return NodeFilter.FILTER_REJECT;
                try { return range.intersectsNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
                catch (_) { return NodeFilter.FILTER_REJECT; }
            }
        });
        const segments = [];
        let node = walker.nextNode();
        while (node) {
            const segment = range.cloneRange();
            const nodeRange = document.createRange();
            nodeRange.selectNodeContents(node);
            try {
                if (range.compareBoundaryPoints(Range.START_TO_START, nodeRange) <= 0) segment.setStart(node, 0);
                if (range.compareBoundaryPoints(Range.END_TO_END, nodeRange) >= 0) segment.setEnd(node, node.textContent.length);
                if (segment.startContainer === node && segment.endContainer === node && !segment.collapsed) segments.push(segment);
            } catch (_) { /* ignore */ }
            node = walker.nextNode();
        }
        const spans = [];
        segments.reverse().forEach((segment) => {
            try {
                const span = document.createElement('span');
                applyHighlightKind(span, kind);
                if (record.noteId) span.dataset.noteId = record.noteId;
                if (record.groupId) span.dataset.highlightGroupId = record.groupId;
                if (record.reviewHighlight) span.dataset.reviewHighlight = 'true';
                segment.surroundContents(span);
                spans.unshift(span);
            } catch (_) { /* keep remaining segments */ }
        });
        return spans;
    }

    function applyHighlights(records = []) {
        unwrapHighlights(dom.left);
        unwrapHighlights(dom.groups);
        if (!Array.isArray(records) || !records.length) {
            return;
        }
        records.forEach((record) => applyHighlightRecord(record));
    }

    function dispatchSimulationNavigate(direction) {
        if (!state.simulationMode || !state.simulationCtx || state.readOnly) {
            return;
        }
        const currentIndex = Number(state.simulationCtx.currentIndex);
        navigateSuiteLocally(currentIndex + (direction === 'prev' ? -1 : 1)).catch(showSuiteLoadError);
    }

    // 跨篇跳转到指定小节（套题题目导航）
    function dispatchSimulationNavigateTo(targetIndex) {
        if (!state.simulationMode || !state.simulationCtx || state.readOnly) {
            return;
        }
        if (!Number.isInteger(targetIndex)) {
            return;
        }
        const currentIndex = Number(state.simulationCtx.currentIndex);
        if (Number.isInteger(currentIndex) && targetIndex === currentIndex) {
            return;
        }
        navigateSuiteLocally(targetIndex).catch(showSuiteLoadError);
    }

    /**
     * 底栏主按钮：套题里非最后一篇时充当「下一题」，最后一篇才是整套交卷。
     * P1/P2 不单独交卷，作答会自动保存；最后一篇才提交整套。
     */
    async function handlePrimaryAction() {
        if (state.readOnly) {
            return;
        }
        if (state.simulationMode && state.simulationCtx && !state.simulationCtx.isLast) {
            syncSimulationDraftSnapshot('submit');
            dispatchSimulationNavigate('next');
            return;
        }
        await handleSubmit();
    }

    async function handleSubmit() {
        if (state.readOnly) {
            return;
        }
        if (state.simulationMode) {
            syncSimulationDraftSnapshot('submit');
        }
        // 在任何异步结算工作开始前固定真实作答时长，并立即停止计时。
        const timing = resolvePracticeTiming(1);
        freezeReviewTimer(timing.duration);
        state.submitted = true;
        const results = buildResults();
        state.lastResults = results;
        document.body.classList.add('practice-completed-mode');

        // 套题：无论当前在哪一篇，交卷即结算整套并呈现三篇合并结果。
        // 必须赶在下方 clearSimulationDraftMirror 之前算，否则其余篇的作答已被清除。
        let suiteSummary = null;
        if (state.simulationMode) {
            try {
                suiteSummary = buildSuiteResultSections();
                if (suiteSummary) suiteSummary.duration = timing.duration;
            } catch (suiteError) {
                console.error('[UnifiedReadingPage] 构建套题结果失败:', suiteError);
            }
        }
        if (suiteSummary) {
            renderSuiteResults(suiteSummary);
            // 交卷后留在本页：题号导航可就地切换三篇，回看文章、题目与作答
            enterLocalSuiteReview(suiteSummary);
            const band = suiteBandLabel(suiteSummary.correct, suiteSummary.total);
            renderScoreBanner({
                title: '套题结果',
                correct: suiteSummary.correct,
                total: suiteSummary.total,
                percentage: suiteSummary.percentage,
                bandLabel: band && band.bandLabel ? band.bandLabel : '',
                estimated: !!(band && band.estimated)
            });
        } else {
            renderResults(results);
            renderScoreBanner({
                title: '本次答题',
                correct: results.scoreInfo.correct,
                total: results.scoreInfo.totalQuestions,
                percentage: results.scoreInfo.percentage
            });
        }
        await renderExplanations();
        updateNavStatuses(results);
        const messageType = state.simulationMode ? 'SIMULATION_SUBMIT' : 'PRACTICE_COMPLETE';
        // 套题：随交卷一并上报三篇成绩，主页面据此直接结算整套。
        // 只有本页持有各篇 answerKey，未访问过的篇章也只能由这里算出成绩。
        const suitePayload = suiteSummary
            ? {
                finalizeSuite: true,
                suiteSections: suiteSummary.sections.map((section) => ({
                    examId: section.examId,
                    title: section.title,
                    category: section.label,
                    answers: (suiteSummary.answersByExam && suiteSummary.answersByExam[section.examId]) || {},
                    answerComparison: section.rows.reduce((map, row) => {
                        map[row.questionId] = {
                            questionId: row.questionId,
                            userAnswer: row.userAnswer,
                            correctAnswer: row.correctAnswer,
                            isCorrect: row.isCorrect
                        };
                        return map;
                    }, {}),
                    scoreInfo: {
                        correct: section.correct,
                        total: section.total,
                        accuracy: section.total > 0 ? section.correct / section.total : 0,
                        percentage: section.percentage
                    },
                    markedQuestions: section.markedQuestions || [],
                    highlights: section.highlights || [],
                    notes: section.notes || []
                }))
            }
            : null;
        postMessage(messageType, Object.assign({
            duration: timing.duration,
            startTime: new Date(timing.startTimeMs).toISOString(),
            endTime: new Date(timing.endTimeMs).toISOString()
        }, suitePayload || {}, {
            metadata: {
                examId: state.examId,
                examTitle: state.dataset?.meta?.title || '',
                title: state.dataset?.meta?.title || '',
                category: state.dataset?.meta?.category || '',
                frequency: state.dataset?.meta?.frequency || '',
                type: 'reading',
                examType: 'reading',
                practiceMode: state.suiteSessionId ? 'suite' : 'single',
                renderMode: 'unified-reading',
                dataKey: state.dataKey,
                markedQuestions: (typeof global.getPracticeMarkedQuestions === 'function')
                    ? global.getPracticeMarkedQuestions()
                    : [],
                // 保存高亮，供练习记录回看时还原
                highlights: collectHighlights(),
                notes: typeof global.getPracticeNotes === 'function' ? global.getPracticeNotes() : []
            }
        }, results));
        if (state.simulationMode && state.simulationCtx && state.simulationCtx.isLast) {
            stopSimulationDraftSync();
            clearSimulationDraftMirror();
            state.simulationDraftFingerprint = '';
        }
        // 单篇模式：提交后标记完成并清除本地草稿（不再自动保存）
        if (!state.simulationMode) {
            state.submitted = true;
            document.body.classList.add('single-submitted-mode');
            if (state.singleDraftSaveTimer) {
                global.clearTimeout(state.singleDraftSaveTimer);
                state.singleDraftSaveTimer = null;
            }
            clearSingleDraft();
        } else {
            // 套题模式：清除当前篇的草稿
            clearSuiteDraft();
        }
    }

    function handleReset() {
        if (state.readOnly) {
            return;
        }
        if (state.simulationMode && state.simulationCtx) {
            if (state.simulationCtx.canPrev) {
                dispatchSimulationNavigate('prev');
            }
            return;
        }
        state.reviewMode = false;
        document.body.classList.remove('practice-completed-mode', 'single-submitted-mode');
        hideScoreBanner();
        resetToAnsweringPresentation();
        setReadOnlyMode(false);
        document.querySelectorAll('input[type="radio"], input[type="checkbox"]').forEach((input) => {
            input.checked = false;
        });
        syncAllCheckboxSelectionLimits();
        document.querySelectorAll('input[type="text"], textarea').forEach((input) => {
            input.value = '';
        });
        document.querySelectorAll('select').forEach((select) => {
            select.selectedIndex = 0;
        });
        getDropzones().forEach((dropzone) => {
            clearDropzone(dropzone);
        });
        if (dom.results) {
            dom.results.style.display = 'none';
            dom.results.innerHTML = '';
        }
        clearExplanations();
        applyHighlights([]);
        if (typeof global.setPracticeMarkedQuestions === 'function') {
            try {
                global.setPracticeMarkedQuestions([]);
            } catch (_) {
                // ignore
            }
        }
        state.pageStartTime = Date.now();
        state.pagePausedAtMs = null;
        state.pagePausedOffsetMs = 0;
        const timerBridge = global[PRACTICE_TIMER_BRIDGE_KEY];
        if (timerBridge && typeof timerBridge.setElapsedSeconds === 'function') {
            try {
                timerBridge.setElapsedSeconds(0);
            } catch (_) {
                // ignore
            }
        }
        clearSingleDraft();
        updateNavStatuses();
    }

    /**
     * 套题：把三篇（文章 + 题目 + 该篇答案对照）拼成一份打印内容。
     * 不直接打印页面，因为页面同一时刻只渲染一篇。
     */
    function applyPrintAnnotations(root, highlights, notes, scope = 'left') {
        if (!root) return;
        const noteList = Array.isArray(notes) ? notes.filter(Boolean) : [];
        const noteMap = new Map(noteList.map((note) => [String(note.id || ''), note]));
        const records = (Array.isArray(highlights) ? highlights : [])
            .filter((item) => item && (
                scope === 'left'
                    ? (!item.scope || item.scope === 'left')
                    : item.scope === scope
            ))
            .slice();

        // Older passage Notes did not persist a scope on the note object. Keep the
        // text fallback for the passage only; question Notes are linked by noteId.
        if (scope === 'left') noteList.forEach((note, index) => {
            const noteId = String(note.id || '');
            const linked = records.some((item) => item.noteId && String(item.noteId) === noteId);
            if (!linked && String(note.text || '').trim()) {
                records.push({
                    scope: 'left',
                    text: String(note.text || '').trim(),
                    kind: 'note',
                    noteId: noteId || ('print-note-' + index),
                    occurrence: 0
                });
            }
        });

        const pendingComments = [];
        const renderedNotes = new Set();
        records.forEach((record) => {
            let range = null;
            const start = Number(record.startOffset);
            const end = Number(record.endOffset);
            const fullText = String(root.textContent || '');
            if (Number.isFinite(start) && Number.isFinite(end) && end > start && end <= fullText.length) {
                const savedText = String(record.text || '').replace(/\s+/g, ' ').trim();
                const offsetText = fullText.slice(start, end).replace(/\s+/g, ' ').trim();
                if (!savedText || savedText === offsetText || savedText.includes(offsetText) || offsetText.includes(savedText)) {
                    range = resolveRangeFromOffsets(root, start, end);
                }
            }
            if (!range && String(record.text || '').trim()) {
                const text = String(record.text || '').trim();
                let from = 0;
                let found = -1;
                const occurrence = Math.max(0, Number(record.occurrence) || 0);
                for (let index = 0; index <= occurrence; index += 1) {
                    found = fullText.indexOf(text, from);
                    if (found < 0) break;
                    from = found + text.length;
                }
                if (found >= 0) range = resolveRangeFromOffsets(root, found, found + text.length);
            }
            if (!range || range.collapsed) return;
            const kind = record.kind === 'pink'
                ? 'pink'
                : ((record.kind === 'note' || record.noteId) ? 'note' : 'highlight');
            const marks = wrapRestoredHighlightRange(range, kind, record);
            marks.forEach((mark) => {
                mark.classList.add('pdf-inline-highlight');
                if (kind === 'pink') mark.classList.add('pdf-inline-highlight--pink');
                if (kind === 'note') mark.classList.add('pdf-inline-note');
            });
            const noteId = String(record.noteId || '');
            const note = noteId ? noteMap.get(noteId) : null;
            if (note && !renderedNotes.has(noteId) && marks.length) {
                renderedNotes.add(noteId);
                pendingComments.push({ anchor: marks[marks.length - 1], note });
            }
        });

        pendingComments.forEach(({ anchor, note }) => {
            const comment = String(note.comment || '').trim();
            if (!anchor || !comment) return;
            const label = document.createElement('span');
            label.className = 'pdf-inline-note-comment';
            label.textContent = `【Note：${comment}】`;
            anchor.insertAdjacentElement('afterend', label);
        });
    }

    // 套题 PDF 用：任意解析数据取出逐题条目（collectExplanationItems 只认当前页的 state.explanation）
    function collectExplanationItemsFromPayload(payload) {
        const sections = Array.isArray(payload?.questionExplanations) ? payload.questionExplanations : [];
        const items = [];
        sections.forEach((section) => {
            (Array.isArray(section?.items) ? section.items : []).forEach((item) => {
                if (item && (item.questionId || Number.isFinite(Number(item.questionNumber)))) items.push(item);
            });
        });
        return items;
    }

    // 套题 PDF 用：把解析里的原文定位句在文章里标出来（高亮 + 题号角标），与页面上的一致
    function applyLocatingMarksToPrintRoot(root, payload) {
        if (!root || !payload) return 0;
        const items = collectExplanationItemsFromPayload(payload);
        let marked = 0;
        items.forEach((item) => {
            const quote = item && item.locating && item.locating.quote;
            if (!quote) return;
            const questionId = String(item.questionId || '');
            if (!questionId) return;
            const badge = explanationBadgeNumber(item.questionNumber != null ? item.questionNumber : item.displayNumber);
            if (wrapQuoteInElement(root, quote, questionId, badge)) marked += 1;
        });
        return marked;
    }

    const SUITE_PRINT_LOCATING_STYLE_ID = 'suite-print-locating-style';

    // 打印时背景色默认被丢弃，这里显式声明 print-color-adjust，并把角标做成可打印的小圆点
    function ensureSuitePrintLocatingStyles() {
        if (document.getElementById(SUITE_PRINT_LOCATING_STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = SUITE_PRINT_LOCATING_STYLE_ID;
        style.textContent = `
            #suite-print-root .suite-print__article-legend {
                margin: 0 0 8px;
                font-size: 9pt;
                color: #92400e;
            }
            #suite-print-root .locating-mark {
                background: #fff3b0 !important;
                border-bottom: 1px solid #c2410c;
                padding: 0 1px;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
            #suite-print-root .locating-badge {
                display: inline-block;
                min-width: 13px;
                margin: 0 2px 0 1px;
                padding: 0 3px;
                border-radius: 7px;
                background: #c2410c !important;
                color: #fff !important;
                font-size: 8pt;
                line-height: 13px;
                text-align: center;
                vertical-align: super;
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
            }
        `;
        document.head.appendChild(style);
    }

    function buildAnnotatedPassageHtml(dataset, section, payload) {
        const root = document.createElement('div');
        root.innerHTML = (dataset?.passage?.blocks || [])
            .map((block) => block?.bodyHtml || block?.html || '')
            .join('\n');
        applyPrintAnnotations(root, section?.highlights || [], section?.notes || [], 'left');
        const locatingCount = applyLocatingMarksToPrintRoot(root, payload);
        if (locatingCount > 0) {
            const legend = document.createElement('p');
            legend.className = 'suite-print__article-legend';
            legend.textContent = `底色标注为各题原文定位句，角标为题号（共 ${locatingCount} 处）。`;
            root.insertBefore(legend, root.firstChild);
        }
        return root.innerHTML;
    }

    function buildAnnotatedQuestionHtml(dataset, section) {
        const root = document.createElement('div');
        root.innerHTML = (dataset?.questionGroups || [])
            .map((group) => createGroupMarkup(group))
            .join('\n');
        applyPrintAnnotations(root, section?.highlights || [], section?.notes || [], 'groups');
        return root.innerHTML;
    }

    async function buildSuitePrintContainer(local) {
        syncCurrentLocalReviewAnnotations();
        const sourceSummary = local.summary;
        const blueprint = state.suiteBlueprint;
        if (!sourceSummary || !blueprint || !Array.isArray(blueprint.passages)) return null;
        const summary = Object.assign({}, sourceSummary, {
            sections: (sourceSummary.sections || []).map((section) => Object.assign({}, section, {
                rows: (section.rows || []).map((row) => Object.assign({}, row, {
                    userAnswer: Array.isArray(row.userAnswer) ? row.userAnswer.slice() : row.userAnswer,
                    correctAnswer: Array.isArray(row.correctAnswer) ? row.correctAnswer.slice() : row.correctAnswer
                })),
                markedQuestions: (section.markedQuestions || []).slice(),
                highlights: (section.highlights || []).map((item) => Object.assign({}, item)),
                notes: (section.notes || []).map((item) => Object.assign({}, item))
            }))
        });
        const passages = blueprint.passages.map((passage) => Object.assign({}, passage));
        const datasets = await Promise.all(passages.map(async (passage) => {
            if (passage.dataset) return passage.dataset;
            const section = summary.sections.find((item) => String(item.examId) === String(passage.examId));
            if (section && section.dataset) return section.dataset;
            return loadDatasetFor(passage.examId);
        }));

        const container = document.createElement('div');
        container.id = 'suite-print-root';

        const bandInfo = global.IeltsBandScore && typeof global.IeltsBandScore.scoreSuite === 'function'
            ? global.IeltsBandScore.scoreSuite(summary.correct, summary.total)
            : null;
        const head = document.createElement('div');
        head.className = 'suite-print__head';
        const durationSeconds = Math.max(0, Math.round(Number(summary.duration) || 0));
        const durationLabel = `${Math.floor(durationSeconds / 60)} 分 ${String(durationSeconds % 60).padStart(2, '0')} 秒`;
        head.innerHTML = `
            <h1>IELTS 阅读套题 · 三篇合并</h1>
            <p>总分 ${summary.correct} / ${summary.total} · ${summary.percentage}%${bandInfo && bandInfo.bandLabel ? ' · 雅思 ' + bandInfo.bandLabel : ''} · 总用时 ${durationLabel}</p>
        `;
        container.appendChild(head);

        for (let i = 0; i < passages.length; i += 1) {
            const passage = passages[i];
            const dataset = datasets[i];
            if (!dataset) throw new Error(`套题 PDF 缺少 ${passage.examId} 的题目数据`);
            const section = summary.sections.find((s) => String(s.examId) === String(passage.examId));
            if (!section) throw new Error(`套题 PDF 缺少 ${passage.examId} 的练习记录`);
            // 新版解析：套题 PDF 也带上逐题解析（含考生作答与对错判定）；
            // 同一个 payload 还要给文章标原文定位句，所以先取数据再渲染文章。
            ensureSuitePrintLocatingStyles();
            let explanationPayload = null;
            try {
                explanationPayload = await loadExplanationPayloadFor(passage.examId, passage.examId);
            } catch (explainError) {
                console.error('[UnifiedReadingPage] 套题 PDF 解析渲染失败:', explainError);
            }
            const passageHtml = buildAnnotatedPassageHtml(dataset, section, explanationPayload);
            // 完整题目：与单篇导出一致，按题组渲染全部题目（题干、选项、填空原样呈现）
            const questionsHtml = buildAnnotatedQuestionHtml(dataset, section);
            let explanationHtml = '';
            if (explanationPayload) {
                try {
                    explanationHtml = buildPrintExplanationHtml(explanationPayload, dataset, section);
                } catch (explainError) {
                    console.error('[UnifiedReadingPage] 套题 PDF 解析渲染失败:', explainError);
                }
            }

            const block = document.createElement('section');
            block.className = 'suite-print__passage';
            block.innerHTML = `
                <h2 class="suite-print__title">
                    <span class="suite-print__tag">${passage.label}</span>
                    ${dataset.meta?.title || passage.examId}
                    ${section && Number(section.duration) ? `<span class="suite-print__score">停留用时 ${formatDurationLabel(section.duration)}</span>` : ''}
                    ${section ? `<span class="suite-print__score">${section.correct}/${section.total} · ${section.percentage}%</span>` : ''}
                </h2>
                <div class="suite-print__article">${passageHtml}</div>
                <div class="suite-print__questions" data-suite-print-questions="1">${questionsHtml}</div>
                ${section ? `
                <div class="suite-print__answerkey">
                    <h3 class="suite-print__ak-title">参考答案 Answer Key</h3>
                    ${section.markedQuestions?.length ? `<p>★ 标记题：${section.markedQuestions.join(', ')}</p>` : ''}
                    <table class="results-table suite-print__answers">
                        <thead><tr><th>题号</th><th>你的答案</th><th>正确答案</th><th>结果</th></tr></thead>
                        <tbody>${suiteResultRowsHtml(section.rows, section.markedQuestions)}</tbody>
                    </table>
                </div>` : ''}
                ${explanationHtml}
            `;
            container.appendChild(block);
        }
        return container;
    }

    function decorateCurrentPrintNotes() {
        const notes = typeof global.getPracticeNotes === 'function' ? global.getPracticeNotes() : [];
        const noteMap = new Map(notes.map((note) => [String(note?.id || ''), note]));
        const added = [];
        const decorated = [];
        const noteAnchors = new Map();
        document.querySelectorAll('#left .hl[data-note-id], #question-groups .hl[data-note-id]').forEach((mark) => {
            const noteId = String(mark.dataset.noteId || '');
            const note = noteMap.get(noteId);
            const comment = String(note?.comment || '').trim();
            mark.classList.add('pdf-inline-highlight', 'pdf-inline-note');
            decorated.push(mark);
            if (comment) noteAnchors.set(noteId, { mark, comment });
        });
        noteAnchors.forEach(({ mark, comment }, noteId) => {
            const label = document.createElement('span');
            label.className = 'pdf-inline-note-comment';
            label.dataset.noteId = noteId;
            label.textContent = `【Note：${comment}】`;
            mark.insertAdjacentElement('afterend', label);
            added.push(label);
        });
        return () => {
            added.forEach((node) => node.remove());
            decorated.forEach((mark) => mark.classList.remove('pdf-inline-highlight', 'pdf-inline-note'));
        };
    }

    async function waitForPrintReady(root = document) {
        const targetDocument = root && root.nodeType === Node.DOCUMENT_NODE
            ? root
            : ((root && root.ownerDocument) || document);
        const targetWindow = targetDocument.defaultView || global;
        try {
            if (targetDocument.fonts && targetDocument.fonts.ready) {
                await Promise.race([
                    targetDocument.fonts.ready,
                    new Promise((resolve) => global.setTimeout(resolve, 800))
                ]);
            }
        } catch (_) {
            // ignore font readiness failures
        }
        const images = Array.from((root || document).querySelectorAll?.('img') || []);
        await Promise.all(images.map((image) => {
            if (image.complete) return Promise.resolve();
            return new Promise((resolve) => {
                image.addEventListener('load', resolve, { once: true });
                image.addEventListener('error', resolve, { once: true });
                global.setTimeout(resolve, 800);
            });
        }));
        await new Promise((resolve) => {
            let settled = false;
            const done = () => {
                if (settled) return;
                settled = true;
                resolve();
            };
            global.setTimeout(done, 250);
            try {
                targetWindow.requestAnimationFrame(() => targetWindow.requestAnimationFrame(done));
            } catch (_) {
                done();
            }
        });
    }

    async function printWhenReady(root = document) {
        await waitForPrintReady(root);
        await new Promise((resolve, reject) => {
            let settled = false;
            const done = () => {
                if (settled) return;
                settled = true;
                global.removeEventListener('afterprint', done);
                resolve();
            };
            global.addEventListener('afterprint', done, { once: true });
            try {
                global.print();
                global.setTimeout(done, 1800);
            } catch (error) {
                global.removeEventListener('afterprint', done);
                reject(error);
            }
        });
    }

    async function handleExportPdf() {
        const local = state.suiteLocalReview;
        const exportBtn = document.getElementById('export-pdf-btn');
        if (exportBtn && exportBtn.disabled) return;
        // 同步打开打印页，保留 Safari/Chrome 的用户点击授权；随后再异步拼装三篇内容。
        const printWindow = local ? global.open('', '_blank') : null;
        if (printWindow) {
            printWindow.document.open();
            printWindow.document.write('<!doctype html><html><head><meta charset="UTF-8"><title>正在准备套题 PDF</title></head><body style="font-family:Arial,sans-serif;padding:32px">正在准备套题 PDF…</body></html>');
            printWindow.document.close();
        }
        let container = null;
        const originalLabel = exportBtn ? exportBtn.textContent : '';
        if (exportBtn) {
            exportBtn.disabled = true;
            exportBtn.textContent = '准备PDF…';
        }
        try {
            // 单篇：直接打印整页（文章 + 题目 + 作答 + 高亮 + 练习详情）
            if (!local) {
                const removePrintNotes = decorateCurrentPrintNotes();
                let cleaned = false;
                const cleanup = () => {
                    if (cleaned) return;
                    cleaned = true;
                    global.removeEventListener('afterprint', cleanup);
                    removePrintNotes();
                };
                global.addEventListener('afterprint', cleanup, { once: true });
                // 保持在原始点击调用栈中触发，避免 Safari 把打印视为异步弹窗而拦截。
                global.print();
                global.setTimeout(cleanup, 5000);
                return;
            }
            container = await buildSuitePrintContainer(local);
            if (!container) {
                if (printWindow && !printWindow.closed) printWindow.close();
                await printWhenReady(document);
                return;
            }
            if (printWindow && !printWindow.closed) {
                const styleMarkup = Array.from(document.head.querySelectorAll('style, link[rel="stylesheet"]'))
                    .map((node) => node.outerHTML)
                    .join('\n');
                printWindow.document.open();
                printWindow.document.write(`<!doctype html><html><head><meta charset="UTF-8"><base href="${escapeHtml(global.location.href)}"><title>IELTS 阅读套题 PDF</title>${styleMarkup}<style>body{height:auto!important;overflow:visible!important;background:#fff!important;padding:0 18px}#suite-print-root{display:block!important}.suite-print-toolbar{position:sticky;top:0;z-index:10;display:flex;justify-content:flex-end;gap:8px;padding:10px;background:rgba(255,255,255,.94);border-bottom:1px solid #dbe3e8}.suite-print-toolbar button{padding:8px 14px;border:1px solid #1f7a4d;border-radius:6px;background:#1f7a4d;color:#fff;font-weight:700;cursor:pointer}.suite-print-toolbar button:first-child{background:#fff;color:#1f7a4d}@media print{.suite-print-toolbar{display:none!important}}</style></head><body class="suite-printing"><div class="suite-print-toolbar"><button type="button" onclick="window.close()">关闭</button><button type="button" onclick="window.print()">打印 / 另存为 PDF</button></div>${container.outerHTML}</body></html>`);
                printWindow.document.close();
                await waitForPrintReady(printWindow.document);
                printWindow.focus();
                printWindow.print();
                return;
            }
            document.body.appendChild(container);
            document.body.classList.add('suite-printing');
            await printWhenReady(container);
        } catch (error) {
            console.error('[UnifiedReading] 导出 PDF 失败:', error);
        } finally {
            document.body.classList.remove('suite-printing');
            if (container && container.parentNode) {
                container.parentNode.removeChild(container);
            }
            if (exportBtn) {
                exportBtn.disabled = false;
                exportBtn.textContent = originalLabel || '导出PDF';
            }
        }
    }

    function attachActionListeners() {
        document.addEventListener('click', (event) => {
            const target = event.target instanceof Element ? event.target.closest('#submit-btn, #reset-btn') : null;
            if (!target) return;
            if (target.id === 'submit-btn') {
                if (state.simulationMode && state.simulationCtx && !state.simulationCtx.isLast) return;
                const prompt = state.simulationMode
                    ? 'Are you sure you want to submit the full practice test? You will not be able to change your answers afterward.'
                    : 'Are you sure you want to submit your answers? You will not be able to change them afterward.';
                if (!global.confirm(prompt)) {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                }
                return;
            }
            if (state.simulationMode && state.simulationCtx) return;
            if (!global.confirm('Are you sure you want to reset this practice? All answers on this page will be cleared.')) {
                event.preventDefault();
                event.stopImmediatePropagation();
            }
        }, true);
        dom.submitBtn?.addEventListener('click', handlePrimaryAction);
        dom.resetBtn?.addEventListener('click', handleReset);
        const exportBtn = document.getElementById('export-pdf-btn');
        exportBtn?.addEventListener('click', handleExportPdf);
        document.addEventListener('change', (event) => {
            const target = event.target;
            if (target instanceof HTMLInputElement && target.type === 'checkbox') {
                syncCheckboxSelectionLimit(target);
            }
            updateNavStatuses();
        }, true);
        document.addEventListener('input', () => updateNavStatuses());
        syncAllCheckboxSelectionLimits();
        document.addEventListener('drop', () => {
            global.setTimeout(() => updateNavStatuses(), 0);
        }, true);
    }

    function syncSuiteModeState() {
        const isSuiteMode = !!state.suiteSessionId;
        if (document.body && document.body.dataset) {
            document.body.dataset.suiteMode = isSuiteMode ? 'true' : 'false';
        }
        if (typeof global.updatePracticeSuiteModeUI === 'function') {
            try {
                global.updatePracticeSuiteModeUI(isSuiteMode);
            } catch (_) {
                // ignore sync errors between scripts
            }
        }
    }

    function handleIncoming(event) {
        const payload = event?.data;
        if (!payload || typeof payload !== 'object') {
            return;
        }
        const type = String(payload.type || payload.action || '').toUpperCase();
        const data = payload.data || {};
        if (state.suiteRestoreDone && state.simulationMode && (type === 'INIT_SESSION' || type === 'INIT_EXAM_SESSION')) {
            if (data.suiteSessionId && data.suiteSessionId !== state.suiteSessionId) return;
            if (data.sessionId) state.sessionId = data.sessionId;
            stopInitLoop();
            if (!state.sessionReadySent) sendSessionReady();
            return;
        }
        if (type === 'INIT_SESSION' || type === 'INIT_EXAM_SESSION') {
            const initSignature = buildInitSignature(data);
            const isDuplicateInit = initSignature && initSignature === state.lastInitSignature;
            const incomingExamId = data && data.examId != null ? String(data.examId).trim() : '';
            const currentExamId = state.examId != null ? String(state.examId).trim() : '';
            if (incomingExamId && currentExamId && incomingExamId !== currentExamId) {
                return;
            }
            if (incomingExamId && !currentExamId) {
                state.examId = incomingExamId;
            }
            if (data.sessionId) {
                state.sessionId = data.sessionId;
            }
            if (data.suiteSessionId) {
                state.suiteSessionId = data.suiteSessionId;
            }
            const initTimerAnchorMs = Number(data.suiteTimerAnchorMs ?? data.globalTimerAnchorMs);
            if (Number.isFinite(initTimerAnchorMs) && initTimerAnchorMs > 0) {
                state.suiteTimerAnchorMs = Math.floor(initTimerAnchorMs);
                state.simulationGlobalAnchorMs = Math.floor(initTimerAnchorMs);
            }
            if (typeof data.suiteTimerMode === 'string') {
                const normalizedTimerMode = data.suiteTimerMode.trim().toLowerCase();
                if (normalizedTimerMode === 'countdown' || normalizedTimerMode === 'elapsed') {
                    state.suiteTimerMode = normalizedTimerMode;
                }
            }
            if (Number.isFinite(Number(data.suiteTimerLimitSeconds))) {
                state.suiteTimerLimitSeconds = Number(data.suiteTimerLimitSeconds);
            }
            if (data.reviewSessionId) {
                state.reviewSessionId = data.reviewSessionId;
            }
            if (Number.isInteger(data.reviewEntryIndex)) {
                state.reviewEntryIndex = data.reviewEntryIndex;
            }
            const initFlowMode = data && typeof data.suiteFlowMode === 'string'
                ? data.suiteFlowMode.trim().toLowerCase()
                : '';
            if (initFlowMode === 'simulation') {
                const rawIndex = Number(data.suiteSequenceIndex);
                const rawTotal = Number(data.suiteSequenceTotal);
                const currentIndex = Number.isFinite(rawIndex) ? Math.max(0, rawIndex) : 0;
                const total = Number.isFinite(rawTotal) && rawTotal > 0 ? rawTotal : 3;
                const isLast = currentIndex >= total - 1;
                state.simulationMode = true;
                state.simulationContextReady = false;
                state.simulationCtx = {
                    currentIndex,
                    total,
                    isLast,
                    canPrev: currentIndex > 0,
                    canNext: !isLast,
                    flowMode: 'simulation'
                };
            } else if (initFlowMode) {
                state.simulationMode = false;
                state.simulationContextReady = false;
                state.simulationCtx = null;
            }
            if (data.reviewMode) {
                state.reviewMode = true;
                setReadOnlyMode(data.readOnly !== false);
            }
            syncPrimaryActionButtons();
            refreshSimulationDraftSyncLifecycle();
            syncSuiteModeState();
            stopInitLoop();
            if (isDuplicateInit && state.sessionReadySent) {
                return;
            }
            state.lastInitSignature = initSignature;
            sendSessionReady();
            return;
        }
        if (type === 'REPLAY_PRACTICE_RECORD') {
            const replaySignature = buildReplaySignature(data || {});
            if (replaySignature && replaySignature === state.lastReplaySignature) {
                return;
            }
            state.lastReplaySignature = replaySignature;
            applyReplayRecord(data || {}).catch(() => {});
            return;
        }
        if (type === 'REVIEW_CONTEXT') {
            applyReviewContext(data || {});
            return;
        }
        if (type === 'SUITE_NAVIGATE' && data.url) {
            const targetSuiteSessionId = typeof data.suiteSessionId === 'string' ? data.suiteSessionId.trim() : '';
            const currentSuiteSessionId = typeof state.suiteSessionId === 'string' ? state.suiteSessionId.trim() : '';
            if (targetSuiteSessionId && currentSuiteSessionId && targetSuiteSessionId !== currentSuiteSessionId) {
                return;
            }
            global.location.href = data.url;
            return;
        }
        if (type === 'SIMULATION_CONTEXT') {
            // The page owns restored drafts and timing once its local startup
            // finishes. Late host snapshots must not overwrite current edits.
            if (state.suiteRestoreDone && state.simulationContextReady) return;
            const contextExamId = data && data.examId != null ? String(data.examId).trim() : '';
            const currentExamId = state.examId != null ? String(state.examId).trim() : '';
            if (contextExamId && currentExamId && contextExamId !== currentExamId) {
                return;
            }
            const flowMode = data && typeof data.flowMode === 'string'
                ? data.flowMode.trim().toLowerCase()
                : 'simulation';
            if (flowMode !== 'simulation') {
                state.simulationMode = false;
                state.simulationContextReady = false;
                state.simulationCtx = null;
                state.suiteSequenceExamIds = [];
                state.suiteBlueprint = null;
                state.suiteBlueprintKey = '';
                stopSimulationDraftSync();
                clearSimulationDraftMirror();
                state.simulationDraftFingerprint = '';
                syncPrimaryActionButtons();
                return;
            }
            state.simulationMode = true;
            state.simulationContextReady = true;
            state.simulationCtx = data;
            if (Array.isArray(data.suiteSequenceExamIds)) {
                state.suiteSequenceExamIds = data.suiteSequenceExamIds.map(String);
            }
            const simulationTimerAnchorMs = Number(data.globalTimerAnchorMs ?? data.suiteTimerAnchorMs);
            if (Number.isFinite(simulationTimerAnchorMs)) {
                state.simulationGlobalAnchorMs = simulationTimerAnchorMs;
                state.suiteTimerAnchorMs = simulationTimerAnchorMs;
            }
            if (typeof data.suiteTimerMode === 'string') {
                const normalizedTimerMode = data.suiteTimerMode.trim().toLowerCase();
                if (normalizedTimerMode === 'countdown' || normalizedTimerMode === 'elapsed') {
                    state.suiteTimerMode = normalizedTimerMode;
                }
            }
            if (Number.isFinite(Number(data.suiteTimerLimitSeconds))) {
                state.suiteTimerLimitSeconds = Number(data.suiteTimerLimitSeconds);
            }
            const elapsedSeconds = Number.isFinite(Number(data.elapsed)) ? Number(data.elapsed) : 0;
            state.pageStartTime = Date.now() - (elapsedSeconds * 1000);
            state.pagePausedAtMs = null;
            state.pagePausedOffsetMs = 0;
            syncPrimaryActionButtons();
            const draftFromParent = data && data.draft && typeof data.draft === 'object'
                ? data.draft
                : null;
            const draft = draftFromParent || restoreSimulationDraftMirror() || readSuiteDraft();
            if (draft) {
                applyDraftToDom(draft);
                state.simulationDraftFingerprint = buildDraftFingerprint(draft);
                persistSimulationDraftMirror(cloneDraftSafely(draft));
            }
            refreshSimulationDraftSyncLifecycle();
            updateNavStatuses();
            // 构建/刷新套题题目导航蓝图（异步加载其余小节题目）
            ensureSuiteBlueprint().catch(() => {});
            return;
        }
        if (type === 'SUITE_FORCE_CLOSE') {
            state.simulationContextReady = false;
            stopSimulationDraftSync();
            clearSimulationDraftMirror();
            state.simulationDraftFingerprint = '';
            try {
                global.close();
            } catch (_) {
                // ignore
            }
        }
    }

    function attachMessageBridge() {
        global.addEventListener('message', handleIncoming);
    }

    function attachPracticeTimerBridge() {
        global.addEventListener(PRACTICE_TIMER_EVENT, (event) => {
            const detail = event && event.detail && typeof event.detail === 'object'
                ? event.detail
                : null;
            if (!detail || typeof detail.running !== 'boolean') {
                return;
            }
            syncPagePauseState(detail.running);
            // 模考模式倒计时归零：自动交卷（整套结算），与真实机考一致
            if (detail.reason === 'timer_expired'
                || (detail.mode === 'countdown'
                    && Number.isFinite(detail.limitSeconds)
                    && Number(detail.displaySeconds) <= 0)) {
                handleCountdownExpiry();
            }
        });
    }

    function attachAnnotationPersistenceBridge() {
        const persist = (reason = 'change') => {
            if (!(state.submitted || state.readOnly || document.body.classList.contains('practice-completed-mode'))) {
                return;
            }
            syncCurrentLocalReviewAnnotations();
            const identity = state.reviewRecordId || state.reviewSessionId || state.suiteSessionId || state.sessionId || 'latest';
            const recoveryKey = `${ANNOTATION_RECOVERY_KEY_PREFIX}${encodeURIComponent(String(state.examId || 'unknown'))}::${encodeURIComponent(String(identity))}`;
            const payload = {
                recordId: state.reviewRecordId || null,
                reviewSessionId: state.reviewSessionId || null,
                highlights: collectHighlights(),
                notes: typeof global.getPracticeNotes === 'function' ? global.getPracticeNotes() : [],
                annotationRecoveryKey: recoveryKey,
                annotationSavedAt: Date.now(),
                annotationReason: reason
            };
            try {
                global.localStorage.setItem(recoveryKey, JSON.stringify(Object.assign({
                    version: 1,
                    examId: state.examId,
                    sessionId: state.sessionId,
                    suiteSessionId: state.suiteSessionId
                }, payload)));
            } catch (_) {}
            postMessage('PRACTICE_ANNOTATIONS_UPDATE', payload);
        };
        global.addEventListener('practiceAnnotationsChanged', () => persist('change'));
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) persist('visibilitychange');
        });
        global.addEventListener('pagehide', () => persist('pagehide'), { capture: true });
        global.addEventListener('beforeunload', () => persist('beforeunload'), { capture: true });
        document.addEventListener('freeze', () => persist('freeze'), { capture: true });
    }

    // 倒计时结束：仅执行一次，提示后按「交卷」流程自动结算整套
    function handleCountdownExpiry() {
        if (state.countdownExpiryHandled || state.readOnly || state.submitted) {
            return;
        }
        state.countdownExpiryHandled = true;
        // 套题模式：时间到不自动交卷，先让用户选「继续做题」或「交卷」。
        // 继续则计时从 60:00 起改为正计时，最后照实记录总用时。
        if (state.simulationMode) {
            showSuiteTimeoutPrompt();
            return;
        }
        try {
            if (typeof global.showMessage === 'function') {
                global.showMessage('考试时间到，已自动交卷。', 'info');
            }
        } catch (_) { /* ignore */ }
        Promise.resolve()
            .then(() => handleSubmit())
            .catch((error) => {
                console.error('[UnifiedReadingPage] 倒计时自动交卷失败:', error);
                state.countdownExpiryHandled = false;
            });
    }

    // 套题超时对话框：继续做题（转为正计时）/ 交卷。不提供暂停，计时始终在走。
    function showSuiteTimeoutPrompt() {
        if (state.suiteTimeoutPromptShown) return;
        state.suiteTimeoutPromptShown = true;
        const overlay = document.createElement('div');
        overlay.id = 'suite-timeout-overlay';
        overlay.style.cssText = ['position:fixed', 'inset:0', 'z-index:99999', 'display:flex',
            'align-items:center', 'justify-content:center', 'background:rgba(15,23,42,0.55)'].join(';');
        const card = document.createElement('div');
        card.style.cssText = ['background:#fff', 'color:#1e293b', 'border-radius:14px', 'max-width:400px',
            'width:88%', 'padding:24px 22px', 'box-shadow:0 18px 48px rgba(15,23,42,0.35)',
            'font-family:-apple-system,BlinkMacSystemFont,\'Segoe UI\',Roboto,sans-serif', 'text-align:center'].join(';');
        const title = document.createElement('div');
        title.style.cssText = 'font-size:1.05rem;font-weight:600;margin-bottom:8px;';
        title.textContent = '考试时间到';
        const desc = document.createElement('div');
        desc.style.cssText = 'font-size:0.85rem;opacity:0.75;margin-bottom:20px;line-height:1.6;';
        desc.textContent = '60 分钟已用完。继续做题将按已用时间正计时（从 60:00 起累加），总用时与每篇停留时间都会照实记录；也可以现在就交卷。';
        const row = document.createElement('div');
        row.style.cssText = 'display:flex;gap:12px;justify-content:center;';
        const mk = (label, primary) => {
            const b = document.createElement('button');
            b.type = 'button';
            b.textContent = label;
            b.style.cssText = ['flex:1', 'padding:10px 0', 'border-radius:9px', 'cursor:pointer', 'font-size:0.9rem',
                'border:1px solid', primary
                    ? 'border-color:#2563eb;background:#2563eb;color:#fff'
                    : 'border-color:#cbd5e1;background:#fff;color:#475569'].join(';');
            return b;
        };
        const continueBtn = mk('继续做题', true);
        const submitBtn = mk('立即交卷', false);
        const close = () => { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); };
        continueBtn.addEventListener('click', () => {
            close();
            state.suiteOvertime = true;
            // 计时继续跑（套题不可暂停），显示层会自动转为 60:00 起正计时
            const bridge = getPracticeTimerBridge();
            if (bridge && typeof bridge.setRunning === 'function') bridge.setRunning(true);
        });
        submitBtn.addEventListener('click', () => {
            close();
            Promise.resolve().then(() => handleSubmit()).catch((error) => {
                console.error('[UnifiedReadingPage] 超时交卷失败:', error);
                state.countdownExpiryHandled = false;
                state.suiteTimeoutPromptShown = false;
            });
        });
        row.appendChild(continueBtn);
        row.appendChild(submitBtn);
        card.appendChild(title);
        card.appendChild(desc);
        card.appendChild(row);
        overlay.appendChild(card);
        document.body.appendChild(overlay);
    }

    async function bootstrap() {
        parseQuery();
        captureDom();
        if (state.simulationMode && !state.reviewMode) {
            const bridge = getPracticeTimerBridge();
            bridge?.setRunning(false);
            if (dom.groups) dom.groups.textContent = '正在准备整套三篇题目和答案…';
            if (!global.SuiteResources) await loadScript('../../../js/runtime/suiteResources.js');
            const bundle = await global.SuiteResources.prepare(state.suiteSequenceExamIds);
            state.suiteDatasets = new Map(bundle.examIds.map((id, i) => [id, bundle.datasets[i]]));
        }
        const dataset = await ensureDataset();
        renderDataset(dataset);
        buildQuestionNav();
        attachNavListeners();
        attachDragDrop();

        // Ensure drag items can return home when replaced or discarded
        function initDragPools() {
            document.querySelectorAll('.pool-items').forEach((pool, index) => {
                if (!pool.id) {
                    pool.id = `practice-pool-${index}`;
                }
            });
            document.querySelectorAll('.pool-items .drag-item').forEach((item) => {
                if (!item.dataset.originPool) {
                    const pool = item.closest('.pool-items');
                    if (pool?.id) {
                        item.dataset.originPool = pool.id;
                    }
                }
            });
        }
        initDragPools();

        attachActionListeners();
        attachMessageBridge();
        attachPracticeTimerBridge();
        attachAnnotationPersistenceBridge();
        syncSuiteModeState();
        updateNavStatuses();
        // 套题模拟模式：加载后立即据 URL 下发的 examId 序列构建三篇导航蓝图，
        // 保证「打开即三篇」，不依赖父窗口消息时序（消息到达后 ensureSuiteBlueprint 幂等复用）。
        if (state.simulationMode
            && Array.isArray(state.suiteSequenceExamIds)
            && state.suiteSequenceExamIds.length > 1) {
            await ensureSuiteBlueprint();
        }
        // Cache the opened page, all loaded question data, and answer keys for offline submission.
        const offlineRuntime = await ensureOfflineRuntime();
        if (offlineRuntime && typeof offlineRuntime.cacheCurrentPage === 'function') {
            offlineRuntime.cacheCurrentPage().catch(() => {});
        }
        // 回顾只读模式：加载即应用只读（设 body 类，禁用输入/高亮），等回放数据到达再冻结计时
        if (state.reviewMode || state.readOnly) {
            setReadOnlyMode(true);
        }
        if (state.simulationMode && !state.reviewMode) await initSuiteDraftFlow();
        // 经典/驻足流程：宿主按小节打开本页时，直接恢复该小节已保存的作答。
        // 没有这一步，重新打开（或刷新）前面做过的一篇会呈现整篇空白，
        // 表现为「回看前面的题目时所有题目被重置」。
        if (!state.simulationMode && state.suiteSessionId && !state.reviewMode && !state.readOnly) {
            try {
                const savedEntry = readSuiteSavedEntry(state.examId);
                if (savedEntry && draftHasContent(savedEntry.draft)) {
                    applyDraftToDom(savedEntry.draft);
                    state.simulationDraftFingerprint = buildDraftFingerprint(savedEntry.draft);
                    state.suiteRestoreDone = true;
                }
            } catch (error) {
                console.warn('[SuiteDraft] 小节作答恢复失败:', error);
            }
        }
        state.suiteBooting = false;
        refreshSimulationDraftSyncLifecycle();
        // 单篇模式：检测本地草稿并询问续做
        initSingleDraftFlow().catch((error) => {
            console.warn('[SingleDraft] 续做流程初始化失败:', error);
        });
        startInitLoop();
    }

    function showSuiteLoadError(error) {
        console.error('[SuitePractice]', error);
        global.alert('套题尚未加载完整，进度已保留。请检查网络后刷新重试。');
    }

    function readSuiteProgress() {
        try {
            const progress = JSON.parse(global.localStorage.getItem('ielts_suite_progress::' + state.suiteSessionId) || 'null');
            const ids = progress && (progress.lockedExamIds || (progress.sequence || []).map(item => String(item.examId)));
            if (!Array.isArray(ids) || ids.length !== 3 || !ids.every((id, i) => String(id) === state.suiteSequenceExamIds[i])) return null;
            return progress;
        } catch (_) { return null; }
    }

    function readSuiteSavedEntry(examId) {
        let directEntry = null;
        try {
            const entry = JSON.parse(global.localStorage.getItem('ielts_suite_draft::' + state.suiteSessionId + '::' + examId) || 'null');
            if (entry && (!entry.sequenceExamIds || entry.sequenceExamIds.every((id, i) => id === state.suiteSequenceExamIds[i]))) {
                directEntry = entry;
            }
        } catch (_) {}
        const progress = readSuiteProgress();
        const progressEntry = progress ? {
            draft: progress.draftsByExam?.[examId],
            elapsed: progress.elapsedByExam?.[examId] || 0,
            savedAt: Number(progress.draftSavedAtByExam?.[examId]) || Number(progress.updatedAt) || 0
        } : null;
        const candidates = [directEntry, progressEntry]
            .filter((entry) => entry && entry.draft && typeof entry.draft === 'object');
        const contentful = candidates.filter((entry) => draftHasContent(entry.draft));
        const pool = contentful.length ? contentful : candidates;
        pool.sort((left, right) => Number(right.savedAt || right.updatedAt || 0) - Number(left.savedAt || left.updatedAt || 0));
        return pool[0] || null;
    }

    async function initSuiteDraftFlow() {
        const progress = readSuiteProgress();
        const savedEntries = state.suiteSequenceExamIds.map(readSuiteSavedEntry);
        const hasProgress = savedEntries.some(entry => entry && (Number(entry.elapsed) > 0 || draftHasContent(entry.draft)));
        const navigationType = global.performance?.getEntriesByType('navigation')[0]?.type;
        // 宿主（或题号导航）按「具体某一篇」打开本页时：URL 已指明目标小节，
        // 直接恢复该篇作答即可，不要弹「从上次继续 / 重新开始」弹窗——
        // 弹窗会挡住已恢复的答案，选「重新开始」还会清掉整套三篇的草稿，
        // 表现为「点题号跳到别的篇章后所有做题记录被重置」。
        const targetedIndex = state.suiteSequenceExamIds.indexOf(state.examId);
        const hasExplicitPassageTarget = targetedIndex >= 0 && state.suiteSequenceExamIds.length > 1;
        const choice = (!hasExplicitPassageTarget && hasProgress && (navigationType === 'reload' || !state.forceResume))
            ? await showResumePrompt({ elapsed: progress?.elapsed || 0 }, true)
            : 'continue';
        if (choice === 'restart') {
            state.suiteRestartPending = true;
            clearSuiteDraftsForSession(state.suiteSessionId);
            state.suiteSequenceExamIds.forEach(id => {
                try { global.sessionStorage.removeItem('ielts_sim_draft::' + state.suiteSessionId + '::' + id); } catch (_) {}
            });
            if (progress) {
                progress.draftsByExam = {};
                progress.elapsedByExam = {};
                progress.results = [];
                progress.elapsed = progress.answeredCount = progress.currentIndex = 0;
                progress.globalTimerAnchorMs = progress.suiteTimerAnchorMs = Date.now();
                global.localStorage.setItem('ielts_suite_progress::' + state.suiteSessionId, JSON.stringify(progress));
            }
        }
        const elapsed = choice === 'restart' ? 0 : Math.max(0, Number(progress?.elapsed) || 0);
        state.suiteTimerAnchorMs = state.simulationGlobalAnchorMs = Date.now() - elapsed * 1000;
        const bridge = getPracticeTimerBridge();
        bridge?.applySuiteTimerContext?.({
            suiteTimerAnchorMs: state.suiteTimerAnchorMs,
            suiteTimerMode: state.suiteTimerMode || 'elapsed',
            suiteTimerLimitSeconds: state.suiteTimerLimitSeconds
        }, 'resume');
        state.simulationContextReady = true;
        const idx = choice === 'restart'
            ? 0
            : (hasExplicitPassageTarget
                ? targetedIndex
                : Number(progress?.currentIndex ?? state.simulationCtx?.currentIndex ?? 0));
        await displaySuitePassage(Math.min(2, Math.max(0, idx)));
        state.suiteRestoreDone = true;
        global.__UNIFIED_SUITE_LOCAL_READY__ = true;
        bridge?.setRunning(true);
    }

    async function displaySuitePassage(targetIndex) {
        const examId = state.suiteSequenceExamIds[targetIndex];
        const dataset = state.suiteDatasets?.get(examId);
        if (!dataset) throw new Error('suite_dataset_incomplete:' + examId);
        state.examId = examId;
        state.dataKey = examId;
        state.dataset = dataset;
        state.explanation = null;
        state.lastResults = null;
        state.simulationCtx = { currentIndex: targetIndex, total: 3, isLast: targetIndex === 2,
            canPrev: targetIndex > 0, canNext: targetIndex < 2, flowMode: 'simulation' };
        state.simulationDraftFingerprint = '';
        renderDataset(dataset);
        attachDragDrop();
        if (typeof global.setPracticeMarkedQuestions === 'function') global.setPracticeMarkedQuestions([]);
        const saved = readSuiteSavedEntry(examId);
        applyDraftToDom(saved?.draft || { answers: {}, highlights: [], notes: [], markedQuestions: [] });
        state.pageStartTime = Date.now() - Math.max(0, Number(saved?.elapsed) || 0) * 1000;
        state.pagePausedAtMs = null;
        state.pagePausedOffsetMs = 0;
        const url = new URL(global.location.href);
        url.searchParams.set('examId', examId);
        url.searchParams.set('dataKey', examId);
        url.searchParams.set('suiteSequenceIndex', String(targetIndex));
        url.searchParams.set('suiteTimerAnchorMs', String(state.suiteTimerAnchorMs));
        try { global.history.replaceState(null, '', url.href); } catch (_) {}
        syncPrimaryActionButtons();
        syncAllCheckboxSelectionLimits();
        await ensureSuiteBlueprint();
    }

    async function navigateSuiteLocally(targetIndex) {
        if (state.suiteBooting || state.suiteNavigating || state.readOnly || targetIndex < 0 || targetIndex > 2) return;
        state.suiteNavigating = true;
        try {
            const previousId = state.examId;
            const draft = collectCurrentDraft();
            const resultSnapshot = buildResults();
            const elapsed = getPageElapsedSeconds();
            syncSimulationDraftSnapshot('navigate');
            await displaySuitePassage(targetIndex);
            // Inform the host without asking it to open another URL.
            postMessage('SIMULATION_NAVIGATE', { examId: previousId, localNavigation: true, targetIndex,
                draft: draftHasContent(draft) ? draft : null, resultSnapshot, elapsed });
            syncSimulationDraftSnapshot('navigate');
        } finally {
            state.suiteNavigating = false;
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        bootstrap().catch((error) => {
            console.error('[UnifiedReadingPage] 初始化失败:', error);
            if (dom.groups) {
                dom.groups.textContent = '整套题目尚未准备完整，已保留练习进度。请检查网络后刷新重试。';
                const retry = document.createElement('button');
                retry.type = 'button';
                retry.textContent = '重新加载';
                retry.addEventListener('click', () => global.location.reload());
                dom.groups.appendChild(retry);
            }
        });
    });
})(typeof window !== 'undefined' ? window : globalThis);
