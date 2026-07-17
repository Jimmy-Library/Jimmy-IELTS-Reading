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

    let pendingSuiteId = null;
    let rendered = false;

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

    function render() {
        const listEl = document.getElementById(LIST_ID);
        if (!listEl) return;

        const catalog = getCatalog();
        if (!catalog.length) {
            listEl.innerHTML = '<p class="suite-empty">题库尚未就绪，无法生成套题。请稍后重试。</p>';
            return;
        }

        const best = readBestScores();
        listEl.innerHTML = catalog.map((s) => suiteCardHtml(s, best[s.id])).join('');
        rendered = true;

        const countEl = document.getElementById('suite-total-count');
        if (countEl) countEl.textContent = String(catalog.length);
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
            const card = target.closest('[data-suite-id]');
            if (!card) return;
            openModal(card.dataset.suiteId);
        });
    }

    /** 视图激活入口：题库数据就绪后再渲染 */
    function initialize() {
        bindListOnce();
        const needsData = !global.completeExamIndex || !global.completeExamIndex.length;
        if (needsData && typeof global.ensureExamDataScripts === 'function') {
            Promise.resolve(global.ensureExamDataScripts())
                .then(() => {
                    if (global.SuiteCatalog) global.SuiteCatalog.invalidate();
                    render();
                })
                .catch((error) => {
                    console.error('[SuiteModeView] 加载题库数据失败:', error);
                    render();
                });
            return;
        }
        render();
    }

    global.SuiteModeView = {
        initialize: initialize,
        render: render,
        recordSuiteResult: recordSuiteResult,
        readBestScores: readBestScores
    };
})(typeof window !== 'undefined' ? window : globalThis);
