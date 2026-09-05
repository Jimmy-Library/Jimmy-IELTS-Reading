/**
 * 套题模式视图
 *
 * 展示套题目录（100 套，每套 P1+P2+P3 共 40 题），
 * 选择套题后弹出模式选择：自由模式（正计时不限时）/ 模考模式（倒计时 60 分钟）。
 */
(function initSuiteModeView(global) {
    'use strict';

    const LIST_ID = 'suite-list';
    const MODAL_ID = 'suite-mode-modal';
    const BEST_STORAGE_KEY = 'suite_catalog_best_scores';
    const DAILY_MODAL_ID = 'daily-suite-recommendation-modal';
    const DAILY_PROMPT_DATE_KEY = 'daily_suite_prompt_seen_v1';
    const DAILY_CACHE_PREFIX = 'daily_suite_recommendation_v1::';

    let pendingSuiteId = null;
    let rendered = false;
    let dailyRecommendation = null;
    let dailyRecommendationPromise = null;
    let dailyPromptTimer = null;

    function getCatalog() {
        if (!global.SuiteCatalog || typeof global.SuiteCatalog.getCatalog !== 'function') {
            return [];
        }
        return global.SuiteCatalog.getCatalog() || [];
    }

    function escapeHtml(value) {
        return String(value == null ? '' : value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }


    function getLocalDateKey() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        return year + '-' + month + '-' + day;
    }

    function readJsonStorage(key, fallback) {
        try {
            const raw = global.localStorage && global.localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallback;
        } catch (_) {
            return fallback;
        }
    }

    function writeJsonStorage(key, value) {
        try {
            if (global.localStorage) global.localStorage.setItem(key, JSON.stringify(value));
        } catch (_) {
            // 缓存不可用时仍允许当次推荐
        }
    }

    function parseTime(value) {
        if (value == null || value === '') return 0;
        if (typeof value === 'number' && Number.isFinite(value)) return value;
        const parsed = Date.parse(value);
        return Number.isFinite(parsed) ? parsed : 0;
    }

    function collectExamIds(source, bucket) {
        if (!source || typeof source !== 'object') return;
        ['examId', 'examID'].forEach((key) => {
            if (source[key] != null && source[key] !== '') bucket.add(String(source[key]));
        });
        ['examIds', 'suiteExamIds'].forEach((key) => {
            if (Array.isArray(source[key])) {
                source[key].forEach((id) => {
                    if (id != null && id !== '') bucket.add(String(id));
                });
            }
        });
        ['entries', 'suiteEntries', 'sequence', 'exams'].forEach((key) => {
            if (!Array.isArray(source[key])) return;
            source[key].forEach((item) => {
                if (item == null) return;
                if (typeof item === 'string' || typeof item === 'number') {
                    bucket.add(String(item));
                    return;
                }
                if (item.exam && typeof item.exam === 'object') collectExamIds(item.exam, bucket);
                collectExamIds(item, bucket);
            });
        });
    }

    function addRecordToStats(stats, record, weight) {
        if (!record || typeof record !== 'object') return;
        const ids = new Set();
        collectExamIds(record, ids);
        collectExamIds(record.metadata, ids);
        collectExamIds(record.realData, ids);
        collectExamIds(record.session, ids);
        const lastAt = Math.max(
            parseTime(record.updatedAt), parseTime(record.endTime), parseTime(record.completedAt),
            parseTime(record.timestamp), parseTime(record.date), parseTime(record.createdAt)
        );
        ids.forEach((id) => {
            const previous = stats[id] || { count: 0, lastAt: 0 };
            stats[id] = {
                count: Math.max(0, Number(previous.count) || 0) + (weight || 1),
                lastAt: Math.max(Number(previous.lastAt) || 0, lastAt)
            };
        });
    }

    async function buildPracticeStats() {
        const stats = {};
        try {
            const store = global.PracticeCore && global.PracticeCore.store;
            const records = store && typeof store.listPracticeRecords === 'function'
                ? await store.listPracticeRecords()
                : [];
            (Array.isArray(records) ? records : []).forEach((record) => addRecordToStats(stats, record, 1));
        } catch (error) {
            console.warn('[SuiteModeView] 读取练习记录失败，使用本地进度生成推荐:', error);
        }

        try {
            const store = global.localStorage;
            if (store) {
                for (let i = 0; i < store.length; i += 1) {
                    const key = store.key(i);
                    if (!key || key.indexOf('ielts_suite_progress::') !== 0) continue;
                    const draft = readJsonStorage(key, null);
                    if (draft) addRecordToStats(stats, draft, 1);
                }
            }
        } catch (_) {
            // localStorage 不可用时跳过未完成套题
        }
        return stats;
    }

    async function prepareDailyRecommendation() {
        if (dailyRecommendation) return dailyRecommendation;
        if (dailyRecommendationPromise) return dailyRecommendationPromise;

        dailyRecommendationPromise = Promise.resolve()
            .then(() => {
                const needsData = !global.completeExamIndex || !global.completeExamIndex.length;
                return needsData && typeof global.ensureExamDataScripts === 'function'
                    ? global.ensureExamDataScripts()
                    : null;
            })
            .then(async () => {
                if (!global.SuiteCatalog || typeof global.SuiteCatalog.getDailyRecommendation !== 'function') {
                    return null;
                }
                const dateKey = getLocalDateKey();
                const cached = readJsonStorage(DAILY_CACHE_PREFIX + dateKey, null);
                const practiceStats = await buildPracticeStats();
                dailyRecommendation = global.SuiteCatalog.getDailyRecommendation({
                    dateKey: dateKey,
                    practiceStats: practiceStats,
                    examIds: cached && Array.isArray(cached.examIds) ? cached.examIds : []
                });
                if (dailyRecommendation) {
                    writeJsonStorage(DAILY_CACHE_PREFIX + dateKey, {
                        dateKey: dateKey,
                        examIds: dailyRecommendation.examIds
                    });
                }
                return dailyRecommendation;
            })
            .catch((error) => {
                console.error('[SuiteModeView] 生成每日推荐失败:', error);
                return null;
            })
            .finally(() => {
                dailyRecommendationPromise = null;
            });
        return dailyRecommendationPromise;
    }

    /** 历史最好成绩：{ suiteId: { band, bandLabel, correct, total, mode, at } } */
    function readBestScores() {
        try {
            const raw = localStorage.getItem(BEST_STORAGE_KEY);
            const parsed = raw ? JSON.parse(raw) : null;
            return parsed && typeof parsed === 'object' ? parsed : {};
        } catch (_) {
            return {};
        }
    }

    function writeBestScores(map) {
        try {
            localStorage.setItem(BEST_STORAGE_KEY, JSON.stringify(map || {}));
        } catch (_) {
            // 存储不可用时静默降级，不影响做题
        }
    }

    /**
     * 记录某套题的最好成绩（按答对题数取高）
     */
    function recordSuiteResult(suiteId, result) {
        if (!suiteId || !result) return;
        const map = readBestScores();
        const prev = map[suiteId];
        const isBetter = !prev || Number(result.correct || 0) > Number(prev.correct || 0);
        if (isBetter) {
            map[suiteId] = {
                band: result.band != null ? result.band : null,
                bandLabel: result.bandLabel || '',
                correct: Number(result.correct || 0),
                total: Number(result.total || 0),
                mode: result.mode || '',
                at: Date.now()
            };
            writeBestScores(map);
            if (rendered) render();
        }
    }

    function suiteCardHtml(suite, best) {
        const parts = suite.entries.map((entry) => (
            '<div class="suite-card__part">'
            + '<span class="suite-card__part-tag">' + escapeHtml(entry.category) + '</span>'
            + '<span class="suite-card__part-title" title="' + escapeHtml(entry.title) + '">'
            + escapeHtml(entry.title) + '</span>'
            + '</div>'
        )).join('');

        const bestHtml = best
            ? '<span class="suite-card__best" title="历史最好成绩">最好 ' + escapeHtml(best.bandLabel || '—')
              + ' <em>' + Number(best.correct || 0) + '/' + Number(best.total || 0) + '</em></span>'
            : '<span class="suite-card__best suite-card__best--empty">未练习</span>';

        return ''
            + '<div class="suite-card" data-suite-id="' + escapeHtml(suite.id) + '">'
            +   '<div class="suite-card__header">'
            +     '<span class="suite-card__no">' + escapeHtml(suite.name) + '</span>'
            +     bestHtml
            +   '</div>'
            +   '<div class="suite-card__parts">' + parts + '</div>'
            +   '<div class="suite-card__footer">'
            +     '<span class="suite-card__meta">' + Number(suite.totalQuestions || 0) + ' 题</span>'
            +     '<button class="btn btn-sm btn-primary suite-card__start" type="button" '
            +       'data-suite-id="' + escapeHtml(suite.id) + '">开始</button>'
            +   '</div>'
            + '</div>';
    }


    function dailyRecommendationCardHtml(suite, best) {
        if (!suite) return '';
        const meta = suite.recommendationMeta || {};
        const reason = meta.allUnseen
            ? '根据高频题目与练习记录，今天优先为你挑选了 3 篇未做过的文章。'
            : '已优先避开做过的题目；当前组合中有 ' + Number(meta.unseenCount || 0) + ' 篇未练习文章。';
        const parts = suite.entries.map((entry) => (
            '<div class="daily-suite-card__part">'
            + '<span class="daily-suite-card__tag">' + escapeHtml(entry.category) + '</span>'
            + '<span class="daily-suite-card__title" title="' + escapeHtml(entry.title) + '">'
            + escapeHtml(entry.title) + '</span>'
            + (String(entry.frequency || '').toLowerCase() === 'high' || String(entry.frequency || '') === '高频'
                ? '<span class="daily-suite-card__frequency">高频</span>' : '')
            + '</div>'
        )).join('');
        const bestText = best
            ? '最好成绩 ' + escapeHtml(best.bandLabel || '—') + ' · ' + Number(best.correct || 0) + '/' + Number(best.total || 0)
            : Number(meta.unseenCount || 0) + '/3 篇未练习';

        return ''
            + '<section class="daily-suite-card" data-suite-id="' + escapeHtml(suite.id) + '" aria-label="今日推荐练习">'
            +   '<div class="daily-suite-card__intro">'
            +     '<span class="daily-suite-card__eyebrow">DAILY PRACTICE · 每日更新</span>'
            +     '<div class="daily-suite-card__heading-row">'
            +       '<h3 class="daily-suite-card__heading">今日推荐练习</h3>'
            +       '<span class="daily-suite-card__date">' + escapeHtml(suite.dateKey) + '</span>'
            +     '</div>'
            +     '<p class="daily-suite-card__reason">' + escapeHtml(reason) + '</p>'
            +   '</div>'
            +   '<div class="daily-suite-card__parts">' + parts + '</div>'
            +   '<div class="daily-suite-card__actions">'
            +     '<span class="daily-suite-card__status">' + bestText + ' · 共 ' + Number(suite.totalQuestions || 0) + ' 题</span>'
            +     '<button class="btn btn-primary daily-suite-card__start" type="button" data-suite-id="'
            +       escapeHtml(suite.id) + '">开始今日练习</button>'
            +   '</div>'
            + '</section>';
    }

    /** 读取本地缓存中所有「未完成」的套题进度，按最近保存时间倒序 */
    function readUnfinishedSuiteProgress() {
        const list = [];
        try {
            const store = global.localStorage;
            if (!store) return list;
            for (let i = 0; i < store.length; i += 1) {
                const key = store.key(i);
                if (!key || key.indexOf('ielts_suite_progress::') !== 0) continue;
                let parsed = null;
                try { parsed = JSON.parse(store.getItem(key)); } catch (_) { parsed = null; }
                if (!parsed || !Array.isArray(parsed.sequence) || !parsed.sequence.length) continue;
                list.push({
                    key: key,
                    suiteSessionId: key.slice('ielts_suite_progress::'.length),
                    title: parsed.title || '套题练习',
                    answeredCount: Number(parsed.answeredCount) || 0,
                    elapsed: Number(parsed.elapsed) || 0,
                    savedAt: Number(parsed.updatedAt || parsed.savedAt) || 0
                });
            }
        } catch (_) { /* localStorage 不可用时静默降级 */ }
        list.sort((a, b) => (b.savedAt || 0) - (a.savedAt || 0));
        return list;
    }

    function formatElapsed(sec) {
        const s = Math.max(0, Math.floor(Number(sec) || 0));
        const m = Math.floor(s / 60);
        const r = s % 60;
        return m + ':' + (r < 10 ? '0' + r : r);
    }

    /** 未完成套题的「继续 / 重新做题 / 删除」提示条（每次打开套题模式都会询问） */
    function resumeBannerHtml(draft) {
        if (!draft) return '';
        const savedText = draft.savedAt ? new Date(draft.savedAt).toLocaleString() : '未知时间';
        return ''
            + '<div class="suite-resume-banner" data-suite-resume-id="' + escapeHtml(draft.suiteSessionId) + '"'
            + ' style="border:1px solid #f59e0b;background:rgba(245,158,11,0.08);border-radius:12px;padding:14px 16px;margin-bottom:16px;">'
            +   '<div style="font-weight:600;margin-bottom:4px;">检测到未完成的套题练习</div>'
            +   '<div style="font-size:0.82rem;opacity:0.75;margin-bottom:10px;">'
            +     escapeHtml(draft.title) + '　·　已做 ' + draft.answeredCount + ' 题　·　用时 '
            +     formatElapsed(draft.elapsed) + '　·　' + escapeHtml(savedText)
            +   '</div>'
            +   '<div style="display:flex;gap:10px;flex-wrap:wrap;">'
            +     '<button type="button" class="btn btn-sm" data-suite-resume-action="continue" style="border:1px solid #2563eb;background:#2563eb;color:#fff;border-radius:8px;padding:6px 14px;cursor:pointer;">继续做题</button>'
            +     '<button type="button" class="btn btn-sm" data-suite-resume-action="restart" style="border:1px solid #cbd5e1;background:#fff;color:#475569;border-radius:8px;padding:6px 14px;cursor:pointer;">重新做题</button>'
            +     '<button type="button" class="btn btn-sm" data-suite-resume-action="dismiss" style="border:1px solid #cbd5e1;background:#fff;color:#475569;border-radius:8px;padding:6px 14px;cursor:pointer;">删除记录</button>'
            +   '</div>'
            + '</div>';
    }

    function render() {
        const listEl = document.getElementById(LIST_ID);
        if (!listEl) return;

        const catalog = getCatalog();
        if (!catalog.length) {
            listEl.innerHTML = '<p class="suite-empty">题库尚未就绪，无法生成套题。请稍后重试。</p>';
            return;
        }

        const best = readBestScores();
        // 打开套题模式即询问是否继续未完成的套题（断点重做）
        const unfinished = readUnfinishedSuiteProgress();
        const bannerHtml = unfinished.slice(0, 3).map((draft) => resumeBannerHtml(draft)).join('');
        const dailyHtml = dailyRecommendation
            ? dailyRecommendationCardHtml(dailyRecommendation, best[dailyRecommendation.id])
            : '';
        listEl.innerHTML = bannerHtml + dailyHtml + catalog.map((s) => suiteCardHtml(s, best[s.id])).join('');
        rendered = true;
    }

    /** 处理未完成套题提示条上的操作 */
    function handleResumeAction(action, suiteSessionId) {
        if (!suiteSessionId) return;
        const ensure = typeof global.ensureSessionSuiteReady === 'function'
            ? global.ensureSessionSuiteReady()
            : Promise.resolve();
        if (action === 'continue') {
            Promise.resolve(ensure).then(() => {
                if (global.app && typeof global.app.resumeSuiteDraft === 'function') {
                    return global.app.resumeSuiteDraft(suiteSessionId);
                }
                if (typeof global.resumeSuiteDraft === 'function') {
                    return global.resumeSuiteDraft(suiteSessionId);
                }
                global.showMessage && global.showMessage('套题续做模块未就绪，请刷新后重试。', 'warning');
            });
        } else if (action === 'restart') {
            if (typeof global.confirm === 'function'
                && !global.confirm('重新做题会清空这套题已保存的答案，从头开始（仍是原来的三篇）。确定吗？')) {
                return;
            }
            Promise.resolve(ensure).then(() => {
                if (global.app && typeof global.app.restartSuiteDraft === 'function') {
                    return global.app.restartSuiteDraft(suiteSessionId);
                }
                if (typeof global.restartSuiteDraft === 'function') {
                    return global.restartSuiteDraft(suiteSessionId);
                }
                global.showMessage && global.showMessage('套题续做模块未就绪，请刷新后重试。', 'warning');
            });
        } else if (action === 'dismiss') {
            if (typeof global.confirm === 'function'
                && !global.confirm('确定删除这条未完成的套题记录吗？该操作不可恢复。')) {
                return;
            }
            if (typeof global.deleteIncompleteDraft === 'function') {
                global.deleteIncompleteDraft('ielts_suite_progress::' + suiteSessionId);
            } else {
                try { global.localStorage.removeItem('ielts_suite_progress::' + suiteSessionId); } catch (_) {}
            }
            render();
        }
    }


    function isDailyPromptBlocked() {
        if (!document.body) return true;
        if (document.body.classList.contains('boot-active')
            || document.body.classList.contains('onboarding-tour-active')) return true;
        const boot = document.getElementById('boot-overlay');
        if (!boot) return false;
        const style = global.getComputedStyle ? global.getComputedStyle(boot) : null;
        return !boot.hidden && (!style || (style.display !== 'none' && style.visibility !== 'hidden' && Number(style.opacity || 1) > 0));
    }

    function closeDailyPrompt() {
        const modal = document.getElementById(DAILY_MODAL_ID);
        if (modal) { modal.hidden = true; modal.remove(); }
        if (document.body) document.body.classList.remove('daily-suite-modal-open');
    }

    function focusDailyRecommendation() {
        if (global.app && typeof global.app.navigateToView === 'function') {
            global.app.navigateToView('suite');
        } else if (typeof global.showView === 'function') {
            global.showView('suite');
        } else {
            const button = document.querySelector('[data-view="suite"]');
            if (button instanceof HTMLElement) button.click();
        }
        prepareDailyRecommendation().then(() => {
            render();
            global.setTimeout(() => {
                const card = document.querySelector('.daily-suite-card');
                if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    card.classList.add('is-focused');
                    global.setTimeout(() => card.classList.remove('is-focused'), 1200);
                }
            }, 120);
        });
    }

    function ensureDailyPromptModal() {
        let modal = document.getElementById(DAILY_MODAL_ID);
        if (modal) return modal;
        modal = document.createElement('div');
        modal.id = DAILY_MODAL_ID;
        modal.className = 'daily-suite-modal';
        modal.hidden = true;
        modal.innerHTML = ''
            + '<div class="daily-suite-modal__backdrop" data-daily-action="later"></div>'
            + '<div class="daily-suite-modal__panel" role="dialog" aria-modal="true" aria-labelledby="daily-suite-title">'
            +   '<button class="daily-suite-modal__close" type="button" data-daily-action="later" aria-label="今天稍后提醒">×</button>'
            +   '<span class="daily-suite-modal__eyebrow">TODAY\'S PICK</span>'
            +   '<h3 class="daily-suite-modal__title" id="daily-suite-title">今天的推荐练习已准备好</h3>'
            +   '<p class="daily-suite-modal__summary" id="daily-suite-summary"></p>'
            +   '<div class="daily-suite-modal__entries" id="daily-suite-entries"></div>'
            +   '<div class="daily-suite-modal__actions">'
            +     '<button class="btn daily-suite-modal__secondary" type="button" data-daily-action="later">稍后再做</button>'
            +     '<button class="btn daily-suite-modal__secondary" type="button" data-daily-action="view">查看套题</button>'
            +     '<button class="btn btn-primary daily-suite-modal__primary" type="button" data-daily-action="start">开始练习</button>'
            +   '</div>'
            +   '<p class="daily-suite-modal__note">每日首次进入提示一次；当天推荐保持不变。</p>'
            + '</div>';
        document.body.appendChild(modal);
        modal.addEventListener('click', (event) => {
            const target = event.target instanceof Element ? event.target : event.target && event.target.parentElement;
            const button = target && target.closest('[data-daily-action]');
            if (!button) return;
            event.preventDefault();
            event.stopPropagation();
            const action = button.getAttribute('data-daily-action');
            closeDailyPrompt();
            if (action === 'start' && dailyRecommendation) {
                openModal(dailyRecommendation.id);
            } else if (action === 'view') {
                focusDailyRecommendation();
            }
        }, true);
        modal.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') { event.preventDefault(); closeDailyPrompt(); }
        });
        return modal;
    }

    function showDailyPrompt(suite) {
        if (!suite || readJsonStorage(DAILY_PROMPT_DATE_KEY, '') === getLocalDateKey()) return false;
        const modal = ensureDailyPromptModal();
        const meta = suite.recommendationMeta || {};
        const summary = modal.querySelector('#daily-suite-summary');
        const entries = modal.querySelector('#daily-suite-entries');
        if (summary) {
            summary.textContent = meta.allUnseen
                ? '结合高频题目和你的做题记录，已选出 3 篇未做过的文章。'
                : '已尽量避开做过的题目，本套包含 ' + Number(meta.unseenCount || 0) + ' 篇未练习文章。';
        }
        if (entries) {
            entries.innerHTML = suite.entries.map((entry) => (
                '<div class="daily-suite-modal__entry">'
                + '<span>' + escapeHtml(entry.category) + '</span>'
                + '<strong>' + escapeHtml(entry.title) + '</strong>'
                + '</div>'
            )).join('');
        }
        writeJsonStorage(DAILY_PROMPT_DATE_KEY, getLocalDateKey());
        modal.hidden = false;
        if (document.body) document.body.classList.add('daily-suite-modal-open');
        const startButton = modal.querySelector('[data-daily-action="start"]');
        if (startButton instanceof HTMLElement) startButton.focus({ preventScroll: true });
        return true;
    }

    function scheduleDailyPrompt() {
        if (readJsonStorage(DAILY_PROMPT_DATE_KEY, '') === getLocalDateKey()) return;
        prepareDailyRecommendation().then((suite) => {
            if (!suite) return;
            let attempts = 0;
            const tryShow = () => {
                attempts += 1;
                if (!isDailyPromptBlocked()) {
                    showDailyPrompt(suite);
                    dailyPromptTimer = null;
                    return;
                }
                if (attempts < 1200) dailyPromptTimer = global.setTimeout(tryShow, 500);
            };
            dailyPromptTimer = global.setTimeout(tryShow, 700);
        });
    }

    function ensureModal() {
        let modal = document.getElementById(MODAL_ID);
        if (modal) return modal;

        modal = document.createElement('div');
        modal.id = MODAL_ID;
        modal.className = 'suite-mode-modal';
        modal.hidden = true;
        modal.innerHTML = ''
            + '<div class="suite-mode-modal__backdrop" data-suite-close="1"></div>'
            + '<div class="suite-mode-modal__panel" role="dialog" aria-modal="true" aria-labelledby="suite-mode-title">'
            +   '<h3 class="suite-mode-modal__title" id="suite-mode-title">选择练习模式</h3>'
            +   '<p class="suite-mode-modal__subtitle" id="suite-mode-subtitle"></p>'
            +   '<div class="suite-mode-modal__options">'
            +     '<button class="suite-mode-option" type="button" data-mode="free">'
            +       '<span class="suite-mode-option__name">自由模式</span>'
            +       '<span class="suite-mode-option__desc">正计时，不限时间。适合精读与查漏补缺。</span>'
            +     '</button>'
            +     '<button class="suite-mode-option suite-mode-option--mock" type="button" data-mode="mock">'
            +       '<span class="suite-mode-option__name">模考模式</span>'
            +       '<span class="suite-mode-option__desc">倒计时 60 分钟，还原真实考试节奏。</span>'
            +     '</button>'
            +   '</div>'
            +   '<button class="suite-mode-modal__cancel" type="button" data-suite-close="1">取消</button>'
            + '</div>';
        document.body.appendChild(modal);

        modal.addEventListener('click', (event) => {
            const target = event.target instanceof HTMLElement ? event.target : null;
            if (!target) return;
            if (target.closest('[data-suite-close]')) {
                closeModal();
                return;
            }
            const option = target.closest('.suite-mode-option');
            if (option) {
                const mode = option.dataset.mode || 'free';
                launch(pendingSuiteId, mode);
            }
        });

        return modal;
    }

    function openModal(suiteId) {
        const suite = global.SuiteCatalog && global.SuiteCatalog.getSuite(suiteId);
        if (!suite) return;
        pendingSuiteId = suiteId;

        const modal = ensureModal();
        const subtitle = modal.querySelector('#suite-mode-subtitle');
        if (subtitle) {
            subtitle.textContent = suite.name + '　·　'
                + suite.entries.map((e) => e.category).join(' + ')
                + '　·　共 ' + suite.totalQuestions + ' 题';
        }
        modal.hidden = false;
        document.addEventListener('keydown', onKeydown);
    }

    function closeModal() {
        const modal = document.getElementById(MODAL_ID);
        if (modal) modal.hidden = true;
        pendingSuiteId = null;
        document.removeEventListener('keydown', onKeydown);
    }

    function onKeydown(event) {
        if (event.key === 'Escape') closeModal();
    }

    function launch(suiteId, mode) {
        if (!suiteId) return;
        closeModal();

        // suitePracticeMixin 在 session-suite 懒加载分组里（依赖 practice-suite），
        // ensureSessionSuiteReady 会加载两者并重新把 mixin 挂到 app 上
        const ready = typeof global.ensureSessionSuiteReady === 'function'
            ? global.ensureSessionSuiteReady()
            : Promise.resolve();

        Promise.resolve(ready)
            .then(() => {
                const app = global.app;
                if (!app || typeof app.startCatalogSuite !== 'function') {
                    global.showMessage && global.showMessage('套题模块未就绪，请刷新页面重试。', 'error');
                    return null;
                }
                return app.startCatalogSuite(suiteId, mode);
            })
            .catch((error) => {
                console.error('[SuiteModeView] 启动失败:', error);
                global.showMessage && global.showMessage('套题启动失败，请稍后重试。', 'error');
            });
    }

    function bindListOnce() {
        const listEl = document.getElementById(LIST_ID);
        if (!listEl || listEl.dataset.bound === '1') return;
        listEl.dataset.bound = '1';
        listEl.addEventListener('click', (event) => {
            const target = event.target instanceof HTMLElement ? event.target : null;
            if (!target) return;
            // 未完成套题提示条：继续 / 重新做题 / 删除
            const resumeBtn = target.closest('[data-suite-resume-action]');
            if (resumeBtn) {
                const banner = resumeBtn.closest('[data-suite-resume-id]');
                const suiteSessionId = banner ? banner.getAttribute('data-suite-resume-id') : '';
                handleResumeAction(resumeBtn.getAttribute('data-suite-resume-action'), suiteSessionId);
                return;
            }
            const card = target.closest('[data-suite-id]');
            if (!card) return;
            openModal(card.dataset.suiteId);
        });
    }

    /** 视图激活入口：题库数据与每日推荐就绪后再渲染 */
    function initialize() {
        bindListOnce();
        const needsData = !global.completeExamIndex || !global.completeExamIndex.length;
        const dataReady = needsData && typeof global.ensureExamDataScripts === 'function'
            ? Promise.resolve(global.ensureExamDataScripts())
            : Promise.resolve();

        dataReady
            .then(() => {
                if (global.SuiteCatalog) global.SuiteCatalog.invalidate();
                return prepareDailyRecommendation();
            })
            .then(() => render())
            .catch((error) => {
                console.error('[SuiteModeView] 加载套题数据失败:', error);
                render();
            });
    }

    global.SuiteModeView = {
        initialize: initialize,
        render: render,
        recordSuiteResult: recordSuiteResult,
        readBestScores: readBestScores,
        getDailyRecommendation: prepareDailyRecommendation,
        showDailyRecommendation: focusDailyRecommendation,
        scheduleDailyPrompt: scheduleDailyPrompt
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', scheduleDailyPrompt, { once: true });
    } else {
        scheduleDailyPrompt();
    }
})(typeof window !== 'undefined' ? window : globalThis);
