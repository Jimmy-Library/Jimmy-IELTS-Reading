/**
 * 练习页面通用UI脚本
 * 提供计时器、设置面板、笔记面板、文本高亮与面板拖拽等交互
 */
(function () {
    const QUESTION_ID_SUFFIX_PATTERN = /[-_](anchor|nav|target)$/i;

    document.addEventListener('DOMContentLoaded', function () {
        const PRACTICE_TIMER_BRIDGE_KEY = '__IELTS_PRACTICE_TIMER__';
        const PRACTICE_TIMER_EVENT = 'practiceTimerStateChange';
        let settingsOpen = false;
        let notesOpen = false;
        let timerRunning = true;
        let timerLocked = false;
        let seconds = 0;
        let timer;
        let localTimerAnchorMs = Date.now();
        const suiteTimerContext = {
            active: false,
            anchorMs: null,
            mode: 'elapsed',
            limitSeconds: null,
            pausedAtMs: null,
            pausedOffsetMs: 0,
            source: ''
        };
        let submissionLocked = false;
        let isResizing = false;
        const selbar = document.getElementById('selbar');
        let lastRange = null;
        let currentHlNode = null;
        let keepToolbar = false;
        // 多笔记状态
        let notesList = [];
        let noteIdCounter = 0;
        injectPracticeUIStyles();

        const overlay = document.querySelector('.overlay');
        const settingsPanel = document.getElementById('settings-panel');
        const notesPanel = document.getElementById('notes-panel');
        const headerControls = document.querySelector('.header-controls');
        const timerEl = document.getElementById('timer');
        const submitBtn = document.getElementById('submit-btn');
        const resetBtn = document.getElementById('reset-btn');
        const suiteFlowModeSection = document.getElementById('suite-flow-mode-section');

        function toFiniteNumber(value) {
            const numeric = Number(value);
            return Number.isFinite(numeric) ? numeric : null;
        }

        function normalizeSuiteTimerMode(value) {
            const normalized = String(value || '').trim().toLowerCase();
            if (normalized === 'countdown') {
                return 'countdown';
            }
            if (normalized === 'elapsed') {
                return 'elapsed';
            }
            return null;
        }

        function formatTimerSeconds(totalSeconds) {
            const safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
            const minutes = String(Math.floor(safeSeconds / 60)).padStart(2, '0');
            const secs = String(safeSeconds % 60).padStart(2, '0');
            return `${minutes}:${secs}`;
        }

        function readSuiteTimerContext(source = {}) {
            if (!source || typeof source !== 'object') {
                return null;
            }
            const anchorCandidate =
                source.suiteTimerAnchorMs
                ?? source.globalTimerAnchorMs
                ?? source.anchorMs
                ?? source.timerAnchorMs;
            const anchorMs = toFiniteNumber(anchorCandidate);
            if (!Number.isFinite(anchorMs) || anchorMs <= 0) {
                return null;
            }
            const mode = normalizeSuiteTimerMode(source.suiteTimerMode ?? source.mode);
            const limitCandidate =
                source.suiteTimerLimitSeconds
                ?? source.timerLimitSeconds
                ?? source.limitSeconds;
            const limitSeconds = toFiniteNumber(limitCandidate);
            return {
                anchorMs: Math.floor(anchorMs),
                mode,
                limitSeconds: Number.isFinite(limitSeconds) && limitSeconds >= 0 ? Math.floor(limitSeconds) : null
            };
        }

        function getSuiteTimerElapsedSeconds() {
            if (!suiteTimerContext.active || !Number.isFinite(suiteTimerContext.anchorMs)) {
                return null;
            }
            const referenceNow = (!timerRunning && Number.isFinite(suiteTimerContext.pausedAtMs))
                ? suiteTimerContext.pausedAtMs
                : Date.now();
            const effectiveNow = referenceNow - suiteTimerContext.pausedOffsetMs;
            return Math.max(0, (effectiveNow - suiteTimerContext.anchorMs) / 1000);
        }

        function getPracticeTimerSnapshot() {
            const now = Date.now();
            const suiteElapsedSeconds = getSuiteTimerElapsedSeconds();
            const elapsedSeconds = suiteElapsedSeconds != null
                ? Math.max(0, suiteElapsedSeconds)
                : Math.max(0, Number(seconds) || 0);
            const durationSeconds = Math.max(0, Math.round(elapsedSeconds));
            const effectiveEndTimeMs = now;
            const effectiveStartTimeMs = Math.max(0, effectiveEndTimeMs - (durationSeconds * 1000));
            return {
                running: timerRunning,
                elapsedSeconds,
                durationSeconds,
                displaySeconds: suiteElapsedSeconds != null
                    ? (
                        suiteTimerContext.mode === 'countdown' && Number.isFinite(suiteTimerContext.limitSeconds)
                            ? Math.max(0, Math.ceil(suiteTimerContext.limitSeconds - elapsedSeconds))
                            : Math.floor(elapsedSeconds)
                    )
                    : Math.max(0, Math.floor(Number(seconds) || 0)),
                effectiveStartTimeMs,
                effectiveEndTimeMs,
                anchorMs: suiteTimerContext.active && Number.isFinite(suiteTimerContext.anchorMs)
                    ? suiteTimerContext.anchorMs
                    : localTimerAnchorMs,
                mode: suiteTimerContext.active ? (suiteTimerContext.mode || 'elapsed') : 'elapsed',
                limitSeconds: suiteTimerContext.active ? suiteTimerContext.limitSeconds : null,
                source: suiteTimerContext.active ? (suiteTimerContext.source || 'suite') : 'local',
                pausedAtMs: suiteTimerContext.active && Number.isFinite(suiteTimerContext.pausedAtMs)
                    ? suiteTimerContext.pausedAtMs
                    : null,
                pausedOffsetMs: suiteTimerContext.active
                    ? Math.max(0, Number(suiteTimerContext.pausedOffsetMs) || 0)
                    : 0
            };
        }

        function emitPracticeTimerState(reason = 'state_change') {
            const snapshot = getPracticeTimerSnapshot();
            snapshot.reason = reason;
            window.dispatchEvent(new CustomEvent(PRACTICE_TIMER_EVENT, {
                detail: snapshot
            }));
            return snapshot;
        }

        window[PRACTICE_TIMER_BRIDGE_KEY] = {
            eventName: PRACTICE_TIMER_EVENT,
            getSnapshot: getPracticeTimerSnapshot,
            // 续做：把本地计时器秒数设为指定值（仅非套题/本地计时模式有效）
            setElapsedSeconds: function (value) {
                const next = Math.max(0, Math.floor(Number(value) || 0));
                seconds = next;
                renderTimerDisplay();
                updateTimerVisualState();
                emitPracticeTimerState('set_elapsed');
            },
            // 启停计时
            setRunning: function (running) {
                setTimerRunning(!!running);
            },
            // 锁定计时器（回顾模式：禁止点击启停）
            lock: function () {
                timerLocked = true;
                if (timerRunning) {
                    setTimerRunning(false);
                }
                updateTimerVisualState();
            }
        };

        function updateTimerVisualState() {
            if (!timerEl) return;
            timerEl.style.opacity = timerRunning ? '1' : '0.5';
            timerEl.classList.toggle('paused', !timerRunning);
        }

        function renderTimerDisplay() {
            if (!timerEl) return;
            if (suiteTimerContext.active && Number.isFinite(suiteTimerContext.anchorMs)) {
                const elapsedSeconds = getSuiteTimerElapsedSeconds();
                if (elapsedSeconds == null) {
                    timerEl.textContent = formatTimerSeconds(seconds);
                    return;
                }
                let displaySeconds = Math.floor(elapsedSeconds);
                if (suiteTimerContext.mode === 'countdown' && Number.isFinite(suiteTimerContext.limitSeconds)) {
                    displaySeconds = Math.max(0, Math.ceil(suiteTimerContext.limitSeconds - elapsedSeconds));
                }
                timerEl.textContent = formatTimerSeconds(displaySeconds);
                timerEl.dataset.timerMode = suiteTimerContext.mode || 'elapsed';
                timerEl.dataset.timerState = timerRunning ? 'running' : 'paused';
                timerEl.dataset.timerSource = suiteTimerContext.source || '';
                if (suiteTimerContext.mode === 'countdown') {
                    timerEl.classList.toggle('timer-expired', displaySeconds <= 0);
                } else {
                    timerEl.classList.remove('timer-expired');
                }
                return;
            }
            timerEl.dataset.timerState = timerRunning ? 'running' : 'paused';
            timerEl.classList.remove('timer-expired');
            timerEl.textContent = formatTimerSeconds(seconds);
        }

        function startTimer() {
            if (!timerEl) return;
            if (timer) {
                clearInterval(timer);
            }
            renderTimerDisplay();
            updateTimerVisualState();
            timer = setInterval(() => {
                if (!timerRunning) {
                    if (suiteTimerContext.active) {
                        renderTimerDisplay();
                    }
                    return;
                }
                if (!suiteTimerContext.active) {
                    seconds += 1;
                }
                renderTimerDisplay();
            }, 1000);
        }

        function applySuiteTimerContext(source = {}, reason = 'query') {
            const context = readSuiteTimerContext(source);
            if (!context) {
                return false;
            }
            const normalizedMode = context.mode || 'elapsed';
            const contextChanged =
                !suiteTimerContext.active
                || suiteTimerContext.anchorMs !== context.anchorMs
                || suiteTimerContext.mode !== normalizedMode
                || suiteTimerContext.limitSeconds !== context.limitSeconds;
            suiteTimerContext.active = true;
            suiteTimerContext.anchorMs = context.anchorMs;
            suiteTimerContext.mode = normalizedMode;
            suiteTimerContext.limitSeconds = context.limitSeconds;
            suiteTimerContext.source = reason;
            if (contextChanged) {
                suiteTimerContext.pausedAtMs = null;
                suiteTimerContext.pausedOffsetMs = 0;
            }
            renderTimerDisplay();
            updateTimerVisualState();
            emitPracticeTimerState(reason || 'suite_context');
            return true;
        }

        function setTimerRunning(nextRunning) {
            const normalized = !!nextRunning;
            if (suiteTimerContext.active && Number.isFinite(suiteTimerContext.anchorMs)) {
                const now = Date.now();
                if (!normalized) {
                    if (!Number.isFinite(suiteTimerContext.pausedAtMs)) {
                        suiteTimerContext.pausedAtMs = now;
                    }
                } else if (Number.isFinite(suiteTimerContext.pausedAtMs)) {
                    suiteTimerContext.pausedOffsetMs += Math.max(0, now - suiteTimerContext.pausedAtMs);
                    suiteTimerContext.pausedAtMs = null;
                }
            }
            timerRunning = normalized;
            updateTimerVisualState();
            renderTimerDisplay();
            emitPracticeTimerState(normalized ? 'resume' : 'pause');
        }

        function closeAllPanels() {
            notesOpen = false;
            settingsOpen = false;
            if (notesPanel) notesPanel.style.display = 'none';
            if (settingsPanel) settingsPanel.style.display = 'none';
            if (overlay) overlay.style.display = 'none';
        }

        // ===== 多笔记系统 =====

        // 笔记在文章中的标注元素；标注被取消后会取不到，此时该笔记失去位置信息
        function getNoteAnchorEl(note) {
            if (!note || !note.id) return null;
            return document.querySelector('.hl[data-note-id="' + note.id + '"]');
        }

        /**
         * 按标注在文章中的先后顺序排列笔记，编号即排序后的位置。
         * 标注已被取消的笔记没有位置可依，统一沉到末尾并保持相对次序
         *（Array.prototype.sort 稳定，无需额外记录插入序）。
         */
        function sortNotesByArticleOrder() {
            notesList.sort((a, b) => {
                const elA = getNoteAnchorEl(a);
                const elB = getNoteAnchorEl(b);
                if (!elA && !elB) return 0;
                if (!elA) return 1;
                if (!elB) return -1;
                const relation = elA.compareDocumentPosition(elB);
                if (relation & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
                if (relation & Node.DOCUMENT_POSITION_PRECEDING) return 1;
                return 0;
            });
        }

        function renderNotesList() {
            const listEl = document.getElementById('notes-list');
            const emptyEl = document.getElementById('notes-list-empty');
            if (!listEl) return;

            sortNotesByArticleOrder();

            // 清除旧内容，保留 empty 占位
            listEl.querySelectorAll('.note-item').forEach(el => el.remove());

            if (notesList.length === 0) {
                if (emptyEl) emptyEl.style.display = 'block';
                const deleteAllBtn = document.getElementById('notes-delete-all');
                if (deleteAllBtn) deleteAllBtn.style.display = 'none';
                return;
            }

            if (emptyEl) emptyEl.style.display = 'none';
            const deleteAllBtn = document.getElementById('notes-delete-all');
            if (deleteAllBtn) deleteAllBtn.style.display = 'inline-block';

            notesList.forEach((note, index) => {
                const item = document.createElement('div');
                item.className = 'note-item';
                item.dataset.noteId = note.id;

                // 头部：Part + 选中文本 + 删除按钮
                const header = document.createElement('div');
                header.className = 'note-item__header';

                const partLabel = document.createElement('span');
                partLabel.className = 'note-item__part';
                partLabel.textContent = 'Note ' + (index + 1);

                const textSpan = document.createElement('span');
                textSpan.className = 'note-item__text';
                textSpan.textContent = note.text;

                const deleteBtn = document.createElement('button');
                deleteBtn.className = 'note-item__delete';
                deleteBtn.title = '删除此笔记';
                deleteBtn.textContent = '×';
                deleteBtn.addEventListener('click', () => deleteNote(note.id));

                header.appendChild(partLabel);
                header.appendChild(textSpan);
                header.appendChild(deleteBtn);

                // 文本框
                const textarea = document.createElement('textarea');
                textarea.className = 'note-item__textarea';
                textarea.placeholder = 'Record ideas';
                textarea.value = note.comment || '';
                textarea.addEventListener('input', (e) => {
                    note.comment = e.target.value;
                });
                // 阻止点击 textarea 时关闭面板
                textarea.addEventListener('click', (e) => {
                    e.stopPropagation();
                });

                item.appendChild(header);
                item.appendChild(textarea);
                listEl.appendChild(item);
            });
        }

        function addNote(text, part, anchorEl) {
            const note = {
                id: 'note-' + (++noteIdCounter),
                text: text,
                part: part || 'Part 1',
                comment: ''
            };
            // 与文章中的标注建立关联，排序据此确定笔记在文中的位置
            if (anchorEl instanceof HTMLElement) {
                anchorEl.dataset.noteId = note.id;
            }
            notesList.push(note);
            renderNotesList();
            return note;
        }

        function deleteNote(noteId) {
            notesList = notesList.filter(n => n.id !== noteId);
            renderNotesList();
        }

        function deleteAllNotes() {
            if (notesList.length === 0) return;
            if (!confirm('确定要删除所有笔记吗？')) return;
            notesList = [];
            // 同时清除所有高亮标注
            document.querySelectorAll('.hl[data-hl-type="note"]').forEach(el => {
                const parent = el.parentNode;
                if (parent) {
                    while (el.firstChild) {
                        parent.insertBefore(el.firstChild, el);
                    }
                    parent.removeChild(el);
                    parent.normalize();
                }
            });
            renderNotesList();
        }

        function ensurePracticeConfig() {
            if (!window.practiceConfig || typeof window.practiceConfig !== 'object') {
                window.practiceConfig = {};
            }
            if (!window.practiceConfig.suite || typeof window.practiceConfig.suite !== 'object') {
                window.practiceConfig.suite = {};
            }
            return window.practiceConfig;
        }

        function resolveSuiteAutoAdvance() {
            const config = ensurePracticeConfig();
            if (typeof config.suite.autoAdvanceAfterSubmit === 'boolean') {
                return config.suite.autoAdvanceAfterSubmit;
            }
            try {
                const persisted = window.localStorage && window.localStorage.getItem('suite_auto_advance_after_submit');
                if (persisted === 'true' || persisted === 'false') {
                    const parsed = persisted === 'true';
                    config.suite.autoAdvanceAfterSubmit = parsed;
                    return parsed;
                }
            } catch (_) {
                // ignore storage access errors
            }
            config.suite.autoAdvanceAfterSubmit = true;
            return true;
        }

        function updateSuiteFlowModeButtons() {
            const isAutoAdvance = resolveSuiteAutoAdvance();
            document.querySelectorAll('.settings-option[data-suite-flow-mode]').forEach((btn) => {
                const mode = String(btn.dataset.suiteFlowMode || '').trim().toLowerCase();
                const active = (mode === 'auto' && isAutoAdvance) || (mode === 'manual' && !isAutoAdvance);
                btn.classList.toggle('active', !!active);
            });
        }

        function postSuiteConfigUpdate(autoAdvanceAfterSubmit) {
            const target = window.opener || window.parent;
            if (!target || target === window || typeof target.postMessage !== 'function') {
                return;
            }
            target.postMessage({
                type: 'SUITE_CONFIG_UPDATE',
                data: {
                    autoAdvanceAfterSubmit: !!autoAdvanceAfterSubmit,
                    source: 'practice_page'
                }
            }, '*');
        }

        function applySuiteModeVisibility(isSuiteMode) {
            if (!suiteFlowModeSection) {
                return;
            }
            // 套题流程模式已迁移到进入套题前的弹窗选择，练习页设置菜单不再允许中途切换
            suiteFlowModeSection.style.display = 'none';
        }

        window.updatePracticeSuiteModeUI = function updatePracticeSuiteModeUI(isSuiteMode) {
            applySuiteModeVisibility(!!isSuiteMode);
        };

        window.scrollToElement = function (target) {
            const element = typeof target === 'string'
                ? document.getElementById(target)
                : target instanceof HTMLElement
                    ? target
                    : null;
            if (!element) return false;
            const pane = element.closest('.pane');
            if (pane && typeof pane.scrollTo === 'function') {
                const offsetTop = element.offsetTop - 20;
                pane.scrollTo({ top: offsetTop < 0 ? 0 : offsetTop, behavior: 'smooth' });
            } else if (typeof element.scrollIntoView === 'function') {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            if (typeof element.focus === 'function') {
                try {
                    element.focus({ preventScroll: true });
                } catch (_) {
                    element.focus();
                }
            }
            return true;
        };

        function positionSelbarForRect(rect) {
            if (!selbar) return;
            selbar.style.display = 'flex';
            requestAnimationFrame(() => {
                const top = window.scrollY + rect.top - selbar.offsetHeight - 8;
                const left = window.scrollX + rect.left + rect.width / 2 - selbar.offsetWidth / 2;
                selbar.style.top = `${top > 0 ? top : (window.scrollY + rect.bottom + 8)}px`;
                selbar.style.left = `${Math.max(8, left)}px`;
            });
        }

        function createHighlightSpan(type = 'default') {
            const span = document.createElement('span');
            span.className = 'hl';
            if (type === 'note') {
                span.dataset.hlType = 'note';
            }
            return span;
        }

        function markHighlightAsNote(node) {
            if (!(node instanceof HTMLElement)) {
                return;
            }
            node.classList.add('hl');
            node.dataset.hlType = 'note';
        }

        // 计算 range 端点在 hlNode 文本中的偏移量（从节点开头算起的字符数）
        function offsetWithinNode(node, container, offset) {
            try {
                const r = document.createRange();
                r.setStart(node, 0);
                r.setEnd(container, offset);
                return r.toString().length;
            } catch (_) {
                return -1;
            }
        }

        // 把已存在高亮里被选中的那部分单词单独升级为粉色，其余保持原样（棕色）
        // 返回 true 表示成功做了局部拆分
        function highlightPartialAsPink(hlNode, range) {
            if (!(hlNode instanceof HTMLElement) || !range) return false;
            if (!hlNode.contains(range.startContainer) || !hlNode.contains(range.endContainer)) {
                return false;
            }
            const full = hlNode.textContent || '';
            let start = offsetWithinNode(hlNode, range.startContainer, range.startOffset);
            let end = offsetWithinNode(hlNode, range.endContainer, range.endOffset);
            if (start < 0 || end < 0) return false;
            if (end < start) { const t = start; start = end; end = t; }
            start = Math.max(0, Math.min(start, full.length));
            end = Math.max(0, Math.min(end, full.length));
            if (end <= start) return false;

            const baseKind = hlNode.dataset && hlNode.dataset.hlType ? hlNode.dataset.hlType : '';
            // 已是粉色且整体被选中——无需拆分
            if (baseKind === 'pink' && start === 0 && end === full.length) {
                return false;
            }
            const before = full.slice(0, start);
            const middle = full.slice(start, end);
            const after = full.slice(end);
            const parent = hlNode.parentNode;
            if (!parent) return false;

            const makeSpan = (text, kind) => {
                const span = document.createElement('span');
                span.className = 'hl';
                if (kind) span.dataset.hlType = kind;
                span.textContent = text;
                return span;
            };

            const frag = document.createDocumentFragment();
            if (before) frag.appendChild(makeSpan(before, baseKind));
            frag.appendChild(makeSpan(middle, 'pink'));
            if (after) frag.appendChild(makeSpan(after, baseKind));
            parent.replaceChild(frag, hlNode);
            parent.normalize();
            return true;
        }

        function updateSelbar() {
            if (!selbar) return;
            const sel = window.getSelection();
            if (!sel || sel.rangeCount === 0 || sel.isCollapsed) {
                if (!keepToolbar && !currentHlNode) {
                    selbar.style.display = 'none';
                    currentHlNode = null;
                }
                return;
            }
            const range = sel.getRangeAt(0);
            let container = range.commonAncestorContainer;
            if (container.nodeType === Node.TEXT_NODE) {
                container = container.parentElement;
            }

            const leftPane = document.getElementById('left');
            const rightPane = document.getElementById('right');
            const isInAllowedPane =
                (leftPane && leftPane.contains(container)) ||
                (rightPane && rightPane.contains(container));
            const highlightNode =
                container instanceof HTMLElement
                    ? (container.matches('.hl') ? container : container.closest('.hl'))
                    : null;
            const isHighlighted = !!highlightNode;

            if (!isInAllowedPane && !isHighlighted) {
                selbar.style.display = 'none';
                return;
            }

            lastRange = range.cloneRange();
            currentHlNode = isHighlighted ? highlightNode : null;
            positionSelbarForRect(range.getBoundingClientRect());
        }

        function isReviewReadonly() {
            return document.body.classList.contains('review-readonly-mode');
        }

        function doHighlight() {
            if (!selbar) return;
            // 回顾只读模式：禁止新增/修改高亮
            if (isReviewReadonly()) {
                if (selbar) selbar.style.display = 'none';
                return;
            }
            const sel = window.getSelection();

            // 已存在高亮：第二次点击 Highlight 把棕色升级为粉色（不影响蓝色笔记）
            if (currentHlNode instanceof HTMLElement) {
                const existingKind = currentHlNode.dataset && currentHlNode.dataset.hlType;
                if (existingKind === 'note') {
                    // 蓝色笔记不参与粉色升级
                    currentHlNode = null;
                    sel?.removeAllRanges();
                    selbar.style.display = 'none';
                    return;
                }
                // 若当前存在一段“高亮内部的子选区”，只把选中的那部分单词升级为粉色
                const liveRange = (sel && sel.rangeCount && !sel.isCollapsed) ? sel.getRangeAt(0) : null;
                const full = currentHlNode.textContent || '';
                let handled = false;
                if (liveRange
                    && currentHlNode.contains(liveRange.startContainer)
                    && currentHlNode.contains(liveRange.endContainer)) {
                    const s = offsetWithinNode(currentHlNode, liveRange.startContainer, liveRange.startOffset);
                    const e = offsetWithinNode(currentHlNode, liveRange.endContainer, liveRange.endOffset);
                    const coversAll = (Math.min(s, e) <= 0 && Math.max(s, e) >= full.length);
                    if (!coversAll) {
                        handled = highlightPartialAsPink(currentHlNode, liveRange);
                    }
                }
                // 没有子选区（例如直接点击整段高亮）：整段升级为粉色
                if (!handled && existingKind !== 'pink') {
                    currentHlNode.dataset.hlType = 'pink';
                }
                currentHlNode = null;
                sel?.removeAllRanges();
                selbar.style.display = 'none';
                return;
            }

            if (!lastRange || lastRange.collapsed) return;
            try {
                const span = createHighlightSpan();
                lastRange.surroundContents(span);
            } catch (error) {
                console.error('[PracticePageUI] Highlighting failed:', error);
            }
            sel?.removeAllRanges();
            selbar.style.display = 'none';
        }

        function removeHighlight() {
            // 回顾只读模式：禁止删除高亮
            if (isReviewReadonly()) {
                if (selbar) selbar.style.display = 'none';
                return;
            }
            const sel = window.getSelection();
            let targetNode = currentHlNode;
            if (!targetNode && lastRange) {
                const ancestor = lastRange.commonAncestorContainer;
                targetNode =
                    ancestor.nodeType === Node.TEXT_NODE
                        ? ancestor.parentElement?.closest('.hl')
                        : ancestor.closest('.hl');
            }
            if (targetNode && targetNode.parentNode) {
                const hlType = targetNode.dataset && targetNode.dataset.hlType;
                if (hlType === 'pink') {
                    // 粉色：降级回棕色，保留高亮
                    delete targetNode.dataset.hlType;
                } else {
                    // 棕色或其它：彻底取消高亮
                    const parent = targetNode.parentNode;
                    while (targetNode.firstChild) {
                        parent.insertBefore(targetNode.firstChild, targetNode);
                    }
                    parent.removeChild(targetNode);
                    parent.normalize();
                }
            }
            currentHlNode = null;
            sel?.removeAllRanges();
            if (selbar) selbar.style.display = 'none';
        }

        const initialSuiteTimerContext = (() => {
            try {
                const params = new URLSearchParams(window.location.search || '');
                return {
                    suiteTimerAnchorMs: params.get('suiteTimerAnchorMs') || params.get('globalTimerAnchorMs'),
                    suiteTimerMode: params.get('suiteTimerMode'),
                    suiteTimerLimitSeconds: params.get('suiteTimerLimitSeconds')
                };
            } catch (_) {
                return null;
            }
        })();
        if (initialSuiteTimerContext) {
            applySuiteTimerContext(initialSuiteTimerContext, 'query');
        }

        // --- Header buttons ---
        if (timerEl) startTimer();

        const settingsBtn = document.getElementById('settings-btn');
        const noteBtn = document.getElementById('note-btn');
        const closeNoteBtn = document.getElementById('close-note');

        if (settingsBtn && settingsPanel) {
            settingsBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                settingsOpen = !settingsOpen;
                settingsPanel.style.display = settingsOpen ? 'block' : 'none';
            });
        }

        if (timerEl) {
            timerEl.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (submissionLocked || timerLocked) return;
                setTimerRunning(!timerRunning);
            });
        }

        function openNotesPanel() {
            closeAllPanels();
            notesOpen = true;
            notesPanel.style.display = 'flex';
            // 每次打开都重新渲染，标注被增删后编号与顺序保持最新
            renderNotesList();
            // 右侧边栏不铺遮罩，避免挡住做题区
        }

        if (noteBtn && notesPanel) {
            noteBtn.addEventListener('click', () => {
                openNotesPanel();
            });
        }

        // 眼睛图标：显示/隐藏全部标注高亮
        const notesEyeBtn = document.getElementById('notes-eye');
        if (notesEyeBtn) {
            notesEyeBtn.addEventListener('click', () => {
                document.body.classList.toggle('notes-hide-marks');
            });
        }

        // DELETE ALL：清空全部笔记
        const notesDeleteAllBtn = document.getElementById('notes-delete-all');
        if (notesDeleteAllBtn) {
            notesDeleteAllBtn.addEventListener('click', () => {
                deleteAllNotes();
            });
        }

        document
            .querySelectorAll('.settings-option[data-size]')
            .forEach((btn) => {
                btn.addEventListener('click', function () {
                    document.documentElement.className = `font-${this.dataset.size}`;
                    document
                        .querySelectorAll('.settings-option[data-size]')
                        .forEach((b) => b.classList.remove('active'));
                    this.classList.add('active');
                });
            });

        document
            .querySelectorAll('.settings-option[data-mode]')
            .forEach((btn) => {
                btn.addEventListener('click', function () {
                    document.body.classList.toggle('dark-mode', this.dataset.mode === 'dark');
                    document
                        .querySelectorAll('.settings-option[data-mode]')
                        .forEach((b) => b.classList.remove('active'));
                    this.classList.add('active');
                });
            });

        // mode toggle moved to pre-start popup; keep legacy nodes inert
        document.querySelectorAll('.settings-option[data-suite-flow-mode]').forEach((btn) => {
            btn.disabled = true;
        });

        if (closeNoteBtn) closeNoteBtn.addEventListener('click', closeAllPanels);
        if (overlay) overlay.addEventListener('click', closeAllPanels);

        document.addEventListener('click', (e) => {
            if (!settingsPanel || !headerControls) return;
            if (!settingsPanel.contains(e.target) && !headerControls.contains(e.target)) {
                settingsPanel.style.display = 'none';
                settingsOpen = false;
            }
        });

        applySuiteModeVisibility(document.body && document.body.dataset && document.body.dataset.suiteMode === 'true');

        // --- Pane resizing ---
        const divider = document.getElementById('divider');
        const leftPane = document.getElementById('left');
        if (divider && leftPane) {
            divider.addEventListener('mousedown', (e) => {
                isResizing = true;
                document.body.style.cursor = 'ew-resize';
                e.preventDefault();
            });
            document.addEventListener('mousemove', (e) => {
                if (!isResizing) return;
                const shell = document.querySelector('.shell');
                if (!shell) return;
                const rect = shell.getBoundingClientRect();
                const leftWidth = ((e.clientX - rect.left) / rect.width) * 100;
                leftPane.style.width = `${Math.max(20, Math.min(80, leftWidth))}%`;
            });
            document.addEventListener('mouseup', () => {
                if (isResizing) {
                    isResizing = false;
                    document.body.style.cursor = '';
                }
            });
        }

        // --- Selection toolbar events ---
        document.addEventListener('mouseup', () => setTimeout(updateSelbar, 10));
        document.addEventListener('selectionchange', () => setTimeout(updateSelbar, 10));
        document.addEventListener(
            'mousedown',
            (e) => {
                keepToolbar = !!e.target.closest('#selbar, .hl');
            },
            true
        );

        if (selbar) {
            document.addEventListener(
                'click',
                (e) => {
                    const target = e.target;

                    // Check if the click is on an interactive element that should not hide the toolbar
                    const isInteractiveElement = target instanceof HTMLElement && (
                        // Audio controls
                        target.tagName === 'AUDIO' ||
                        target.tagName === 'VIDEO' ||
                        target.closest('audio') ||
                        target.closest('video') ||
                        // Buttons (including audio player controls)
                        target.tagName === 'BUTTON' ||
                        target.closest('button') ||
                        // Input elements
                        target.tagName === 'INPUT' ||
                        target.tagName === 'SELECT' ||
                        target.tagName === 'TEXTAREA' ||
                        // Common audio player control classes
                        target.classList.contains('play-pause-btn') ||
                        target.classList.contains('audio-control') ||
                        target.closest('.audio-player') ||
                        target.closest('.audio-controls')
                    );

                    const clickedHighlight =
                        target instanceof HTMLElement
                            ? target.closest('.hl')
                            : null;

                    const activeSel = window.getSelection();
                    const hasLiveSelection = !!(activeSel && activeSel.rangeCount && !activeSel.isCollapsed);

                    if (clickedHighlight && hasLiveSelection) {
                        // 用户在高亮内部拖选了一段文字：保留选区，交给 updateSelbar 定位，
                        // 以便后续把选中的那部分单词局部升级为粉色（不要清除选区）。
                        currentHlNode = clickedHighlight;
                    } else if (clickedHighlight) {
                        currentHlNode = clickedHighlight;
                        lastRange = null;
                        positionSelbarForRect(clickedHighlight.getBoundingClientRect());
                        window.getSelection()?.removeAllRanges();
                        setTimeout(() => {
                            keepToolbar = false;
                        }, 0);
                    } else if (!selbar.contains(e.target) && !isInteractiveElement) {
                        selbar.style.display = 'none';
                        currentHlNode = null;
                    }
                },
                true
            );
        }

        const btnHighlight = document.getElementById('btnHL');
        const btnUnhighlight = document.getElementById('btnUH');
        const btnNote = document.getElementById('btnNote');

        if (btnHighlight) btnHighlight.addEventListener('click', doHighlight);
        if (btnUnhighlight) btnUnhighlight.addEventListener('click', removeHighlight);
        if (btnNote && notesPanel) {
            btnNote.addEventListener('click', function () {
                // 回顾只读模式：不新增笔记标注
                if (isReviewReadonly()) {
                    if (selbar) selbar.style.display = 'none';
                    return;
                }
                const text = (
                    currentHlNode
                        ? currentHlNode.textContent
                        : lastRange
                            ? lastRange.cloneContents().textContent
                            : ''
                ).trim();
                if (text) {
                    // Mark the selected text with blue note highlight
                    let anchorEl = null;
                    if (!currentHlNode && lastRange && !lastRange.collapsed) {
                        try {
                            const span = createHighlightSpan('note');
                            lastRange.surroundContents(span);
                            anchorEl = span;
                        } catch (e) {
                            console.error('[PracticePageUI] Note highlight failed:', e);
                        }
                    } else if (currentHlNode) {
                        markHighlightAsNote(currentHlNode);
                        anchorEl = currentHlNode;
                    }
                    // 添加新笔记到列表
                    const part = resolveNotePartLabel();
                    addNote(text, part, anchorEl);
                    openNotesPanel();
                }
                window.getSelection()?.removeAllRanges();
                if (selbar) selbar.style.display = 'none';
            });
        }

        // 推断当前选区所属 Part（多篇时按 left 区段序号，单篇默认 Part 1）
        function resolveNotePartLabel() {
            try {
                const sel = window.getSelection();
                let node = sel && sel.rangeCount ? sel.getRangeAt(0).commonAncestorContainer : null;
                if (node && node.nodeType === Node.TEXT_NODE) {
                    node = node.parentElement;
                }
                const passages = Array.from(document.querySelectorAll('#left .passage, #left [data-passage-index]'));
                if (node && passages.length > 1) {
                    const host = node.closest('.passage, [data-passage-index]');
                    const idx = host ? passages.indexOf(host) : -1;
                    if (idx >= 0) {
                        return 'Part ' + (idx + 1);
                    }
                }
            } catch (_) {
                // ignore
            }
            return 'Part 1';
        }

        const DRAGGABLE_ITEM_SELECTOR = '.drag-item, .drag-item-clone, .draggable-word, .card';
        const ACTIVE_DRAG_ITEM_SELECTOR = '.drag-item, .draggable-word, .card';
        const POOL_CONTAINER_SELECTOR = '.pool-items, .cardpool, #word-options';
        const POOL_OPTION_SELECTOR = '.pool-items .drag-item, .cardpool .drag-item, .cardpool .card, #word-options .draggable-word';
        const DROP_ZONE_SELECTOR = '.paragraph-dropzone .dropped-items, .match-dropzone, .dropzone, .drop-target-summary';
        const GENERIC_DROP_ZONE_SELECTOR = '.dropzone, .drop-target-summary';

        function getPoolContainers() {
            return document.querySelectorAll(POOL_CONTAINER_SELECTOR);
        }

        function isPoolContainer(element) {
            return !!(element && ((element.classList && (element.classList.contains('pool-items') || element.classList.contains('cardpool'))) || element.id === 'word-options'));
        }

        function isDragItemElement(element) {
            return !!(
                element &&
                element.classList &&
                (
                    element.classList.contains('drag-item') ||
                    element.classList.contains('drag-item-clone') ||
                    element.classList.contains('draggable-word') ||
                    element.classList.contains('card')
                )
            );
        }

        function isDropTargetContainer(element) {
            return !!(
                element &&
                element.classList &&
                (
                    element.classList.contains('dropped-items') ||
                    element.classList.contains('match-dropzone') ||
                    element.classList.contains('dropzone') ||
                    element.classList.contains('drop-target-summary')
                )
            );
        }

        function shouldClearOnDrop(element) {
            return !!(
                element &&
                element.classList &&
                (
                    element.classList.contains('dropped-items') ||
                    element.classList.contains('match-dropzone') ||
                    element.classList.contains('drop-target-summary')
                )
            );
        }

        function isAnswerValueContainer(element) {
            return !!(
                element &&
                element.classList &&
                (
                    element.classList.contains('match-dropzone') ||
                    element.classList.contains('dropzone') ||
                    element.classList.contains('paragraph-dropzone') ||
                    element.classList.contains('dropped-items') ||
                    element.classList.contains('drop-target-summary')
                )
            );
        }

        function getOriginPool(item) {
            if (!item || !(item instanceof HTMLElement)) {
                return null;
            }
            const originId = item.dataset.originPool;
            return originId ? document.getElementById(originId) : null;
        }

        function detectPoolReuse(pool) {
            if (!pool) return false;
            const explicitReuse = pool.dataset.allowReuse;
            if (explicitReuse === 'true') return true;
            if (explicitReuse === 'false') return false;

            const unifiedGroup = pool.closest('.unified-group');
            const groupReuse = unifiedGroup?.dataset?.allowOptionReuse;
            if (groupReuse === 'true' || groupReuse === 'false') {
                pool.dataset.allowReuse = groupReuse;
                return groupReuse === 'true';
            }

            const hasCloneTemplate = !!pool.querySelector('[data-clone="true"]');
            if (hasCloneTemplate) {
                pool.dataset.allowReuse = 'true';
                return true;
            }
            pool.dataset.allowReuse = 'false';
            return false;
        }

        function markAssignedItem(item, sourcePool, isPoolClone) {
            if (!item) return item;
            if (sourcePool?.id && !item.dataset.originPool) {
                item.dataset.originPool = sourcePool.id;
            }
            item.dataset.assignedItem = 'true';
            if (isPoolClone) {
                item.dataset.poolClone = 'true';
            } else {
                delete item.dataset.poolClone;
            }
            return item;
        }

        function createAssignedClone(item, sourcePool) {
            if (!item) return null;
            const clone = item.cloneNode(true);
            clone.classList.remove('dragging');
            clone.removeAttribute('id');
            clone.dataset.dragClone = 'true';
            return markAssignedItem(clone, sourcePool, true);
        }

        function ensurePoolIds() {
            getPoolContainers().forEach((pool, index) => {
                if (!pool.id) {
                    pool.id = `practice-pool-${index}`;
                }
                detectPoolReuse(pool);
            });

            document.querySelectorAll(POOL_OPTION_SELECTOR).forEach((item) => {
                if (!item.dataset.originPool) {
                    const pool = item.closest(POOL_CONTAINER_SELECTOR);
                    if (pool?.id) {
                        item.dataset.originPool = pool.id;
                    }
                }
                delete item.dataset.assignedItem;
                delete item.dataset.poolClone;
            });
        }

        ensurePoolIds();

        function focusQuestionById(questionId) {
            const normalized = normalizeQuestionId(questionId) || questionId;
            if (!normalized) return false;
            const elements = findAnswerElements(normalized, true);
            if (elements.length) {
                const focusTarget =
                    elements.find((element) =>
                        element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT'
                    ) || elements[0];
                if (focusTarget) {
                    if (!window.scrollToElement(focusTarget)) {
                        focusTarget.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                    if (typeof focusTarget.focus === 'function') {
                        try {
                            focusTarget.focus({ preventScroll: true });
                        } catch (_) {
                            focusTarget.focus();
                        }
                    }
                    return true;
                }
            }
            const anchor =
                document.getElementById(`${normalized}-anchor`) ||
                document.getElementById(normalized);
            if (anchor) {
                window.scrollToElement(anchor);
                return true;
            }
            return false;
        }

        const navContainer = document.querySelector('.practice-nav');
        const markedQuestions = new Set();
        let markedStorageKey = null;

        function resolveMarkedStorageKey() {
            if (markedStorageKey) {
                return markedStorageKey;
            }
            const bodyExamId = document.body && document.body.dataset
                ? (document.body.dataset.examId || document.body.dataset.dataKey || '')
                : '';
            let queryExamId = '';
            try {
                const params = new URLSearchParams(window.location.search || '');
                queryExamId = params.get('examId') || params.get('dataKey') || '';
            } catch (_) {
                queryExamId = '';
            }
            const examId = String(bodyExamId || queryExamId || window.__PRACTICE_EXAM_ID__ || 'unknown').trim();
            markedStorageKey = `practice_marked_questions::${examId}`;
            return markedStorageKey;
        }

        function persistMarkedQuestions() {
            try {
                window.sessionStorage.setItem(resolveMarkedStorageKey(), JSON.stringify(Array.from(markedQuestions)));
            } catch (_) {
                // ignore storage failures under file://
            }
        }

        function restoreMarkedQuestions() {
            try {
                const raw = window.sessionStorage.getItem(resolveMarkedStorageKey());
                if (!raw) {
                    return;
                }
                const saved = JSON.parse(raw);
                if (!Array.isArray(saved)) {
                    return;
                }
                saved.forEach((value) => {
                    const normalized = normalizeQuestionId(value);
                    if (normalized) {
                        markedQuestions.add(normalized);
                    }
                });
            } catch (_) {
                // ignore parse/storage errors
            }
        }

        function applyMarkedClasses() {
            if (!navContainer) {
                return;
            }
            navContainer.querySelectorAll('.q-item').forEach((item) => {
                const questionId = normalizeQuestionId(item.dataset.question || item.dataset.questionId || item.textContent || '');
                if (!questionId) {
                    return;
                }
                item.classList.toggle('marked', markedQuestions.has(questionId));
                if (markedQuestions.has(questionId)) {
                    item.setAttribute('title', '已标记（Shift+点击可取消）');
                } else {
                    item.removeAttribute('title');
                }
            });
        }

        function toggleMarkedQuestion(questionId) {
            const normalized = normalizeQuestionId(questionId);
            if (!normalized) {
                return;
            }
            if (markedQuestions.has(normalized)) {
                markedQuestions.delete(normalized);
            } else {
                markedQuestions.add(normalized);
            }
            persistMarkedQuestions();
            applyMarkedClasses();
        }

        window.getPracticeMarkedQuestions = function getPracticeMarkedQuestions() {
            return Array.from(markedQuestions);
        };

        window.setPracticeMarkedQuestions = function setPracticeMarkedQuestions(values) {
            markedQuestions.clear();
            if (Array.isArray(values)) {
                values.forEach((value) => {
                    const normalized = normalizeQuestionId(value);
                    if (normalized) {
                        markedQuestions.add(normalized);
                    }
                });
            }
            persistMarkedQuestions();
            applyMarkedClasses();
        };

        if (navContainer) {
            restoreMarkedQuestions();
            navContainer.addEventListener('click', (event) => {
                const item = event.target.closest('.q-item');
                if (!item) {
                    return;
                }
                const questionId = item.dataset.question || item.dataset.questionId || item.textContent;
                if (event.shiftKey) {
                    toggleMarkedQuestion(questionId);
                    event.preventDefault();
                    return;
                }
                const explicitTarget = item.dataset.target || item.getAttribute('data-scroll-target');
                if (explicitTarget && window.scrollToElement(explicitTarget)) {
                    event.preventDefault();
                    return;
                }
                const match = item.id && item.id.match(/^q(\d+)-nav$/i);
                const fallback =
                    item.dataset.question ||
                    item.dataset.questionId ||
                    (match ? `q${match[1]}` : item.textContent?.trim());
                if (fallback && focusQuestionById(fallback)) {
                    event.preventDefault();
                    return;
                }
                if (fallback && window.scrollToElement(`${fallback}-anchor`)) {
                    event.preventDefault();
                }
            });
            navContainer.addEventListener('dblclick', (event) => {
                const item = event.target.closest('.q-item');
                if (!item) {
                    return;
                }
                toggleMarkedQuestion(item.dataset.question || item.dataset.questionId || item.textContent);
                event.preventDefault();
            });
            const navObserver = new MutationObserver(() => {
                applyMarkedClasses();
            });
            navObserver.observe(navContainer, { childList: true, subtree: true });
            applyMarkedClasses();
        }

        function disableAnswerInputs() {
            const root = document.getElementById('questions-container') || document;
            root.querySelectorAll('input, textarea, select').forEach((element) => {
                if (!element || ['button', 'submit', 'reset'].includes((element.type || '').toLowerCase())) {
                    return;
                }
                if (element.disabled) {
                    return;
                }
                element.disabled = true;
                element.dataset.practiceLocked = 'true';
            });
            document.querySelectorAll(DRAGGABLE_ITEM_SELECTOR).forEach((item) => {
                item.setAttribute('draggable', 'false');
                item.classList.add('drag-item-locked');
            });
        }

        function lockPracticeAfterSubmit() {
            if (submissionLocked) {
                return;
            }
            submissionLocked = true;
            if (timer) {
                clearInterval(timer);
                timer = null;
            }
            setTimerRunning(false);
            const audio = document.getElementById('listening-audio');
            if (audio) {
                try {
                    audio.pause();
                } catch (_) { }
                const playPauseBtn = document.getElementById('play-pause-btn');
                if (playPauseBtn) {
                    playPauseBtn.innerHTML = '&#9658;';
                }
            }
            if (submitBtn) {
                submitBtn.disabled = true;
            }
            if (resetBtn) {
                resetBtn.disabled = true;
            }
            const exitBtn = document.getElementById('exit-btn');
            if (exitBtn) {
                exitBtn.style.display = 'block';
            }
            disableAnswerInputs();
        }

        function returnItemToPool(item) {
            if (!item) return;
            const pool = getOriginPool(item);
            if (item.dataset.poolClone === 'true' || (!pool && item.dataset.assignedItem === 'true')) {
                item.remove();
                return;
            }
            let targetPool = pool;
            if (!targetPool) {
                targetPool = document.querySelector(POOL_CONTAINER_SELECTOR);
            }
            if (!targetPool) return;
            item.classList.remove('dragging');
            delete item.dataset.assignedItem;
            delete item.dataset.poolClone;
            targetPool.appendChild(item);
        }

        function clearDropzone(zone, exceptItem) {
            if (!zone) return;
            const existingItems = zone.querySelectorAll(ACTIVE_DRAG_ITEM_SELECTOR);
            existingItems.forEach((existing) => {
                if (exceptItem && existing === exceptItem) return;
                returnItemToPool(existing);
            });
        }

        const dragState = {
            item: null,
            sourceContainer: null,
            sourcePool: null,
            sourceAllowsReuse: false
        };
        let clickSelectedItem = null;
        const autoScrollState = {
            interval: null,
            active: false
        };

        function stopAutoScroll() {
            if (autoScrollState.interval) {
                cancelAnimationFrame(autoScrollState.interval);
                autoScrollState.interval = null;
            }
            autoScrollState.active = false;
        }

        function getScrollContainer(element) {
            if (!element) return null;
            let el = element;
            while (el && el !== document.body && el !== document.documentElement) {
                const style = window.getComputedStyle(el);
                const overflowY = style.overflowY;
                if (overflowY === 'auto' || overflowY === 'scroll') {
                    if (el.scrollHeight > el.clientHeight) {
                        return el;
                    }
                }
                el = el.parentElement;
            }
            return (document.scrollingElement || document.documentElement);
        }

        function startAutoScroll(clientY, scrollContainer) {
            const container = scrollContainer || (document.scrollingElement || document.documentElement);
            const rect = container === (document.scrollingElement || document.documentElement)
                ? { top: 0, bottom: window.innerHeight, height: window.innerHeight }
                : container.getBoundingClientRect();

            const edgeThreshold = 80; // px from top/bottom to trigger scroll
            const maxSpeed = 15;     // px per frame max
            const distanceFromTop = clientY - rect.top;
            const distanceFromBottom = rect.bottom - clientY;

            let direction = 0;
            let speed = 0;

            if (distanceFromTop < edgeThreshold && distanceFromTop > 0) {
                direction = -1;
                speed = maxSpeed * (1 - distanceFromTop / edgeThreshold);
            } else if (distanceFromBottom < edgeThreshold && distanceFromBottom > 0) {
                direction = 1;
                speed = maxSpeed * (1 - distanceFromBottom / edgeThreshold);
            }

            if (direction === 0) {
                stopAutoScroll();
                return;
            }

            if (!autoScrollState.active) {
                autoScrollState.active = true;
                function scrollLoop() {
                    if (!autoScrollState.active) return;
                    container.scrollBy(0, direction * speed);
                    autoScrollState.interval = requestAnimationFrame(scrollLoop);
                }
                scrollLoop();
            }
        }

        function setClickSelectedItem(item) {
            if (clickSelectedItem && clickSelectedItem !== item) {
                clickSelectedItem.classList.remove('drag-click-selected');
            }
            clickSelectedItem = item || null;
            if (clickSelectedItem) {
                clickSelectedItem.classList.add('drag-click-selected');
            }
        }

        function clearClickSelectedItem() {
            if (clickSelectedItem) {
                clickSelectedItem.classList.remove('drag-click-selected');
            }
            clickSelectedItem = null;
        }
        function resetDragState() {
            if (dragState.item) {
                dragState.item.classList.remove('dragging');
            }
            dragState.item = null;
            dragState.sourceContainer = null;
            dragState.sourcePool = null;
            dragState.sourceAllowsReuse = false;
        }

        function handleDragStart(event) {
            const target = event.target.closest(ACTIVE_DRAG_ITEM_SELECTOR);
            if (!target) return;
            const sourcePool = target.closest(POOL_CONTAINER_SELECTOR);
            dragState.item = target;
            dragState.sourceContainer = target.parentElement;
            dragState.sourcePool = sourcePool || getOriginPool(target);
            dragState.sourceAllowsReuse = !!(sourcePool && detectPoolReuse(sourcePool));
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData(
                'text/plain',
                target.dataset.answerValue
                || target.dataset.heading
                || target.dataset.option
                || target.dataset.word
                || target.dataset.value
                || target.textContent
                || ''
            );
            requestAnimationFrame(() => target.classList.add('dragging'));
        }

        function handleDragEnd() {
            resetDragState();
            stopAutoScroll();
        }

        function resolveDropContainer(target) {
            if (!target) return null;
            const paragraphZone = target.closest('.paragraph-dropzone');
            if (paragraphZone) {
                return paragraphZone.querySelector('.dropped-items') || paragraphZone;
            }
            const matchZone = target.closest('.match-dropzone');
            if (matchZone) {
                let holder = matchZone.querySelector('.dropped-items');
                if (!holder) {
                    holder = document.createElement('div');
                    holder.className = 'dropped-items';
                    matchZone.appendChild(holder);
                }
                return holder;
            }
            const genericZone = target.closest(GENERIC_DROP_ZONE_SELECTOR);
            if (genericZone) {
                return genericZone;
            }
            const pool = target.closest(POOL_CONTAINER_SELECTOR);
            if (pool) {
                return pool;
            }
            return null;
        }

        function resolveDraggedItem(container) {
            if (!dragState.item || !container) {
                return null;
            }
            if (isPoolContainer(dragState.sourceContainer) && dragState.sourceAllowsReuse && !isPoolContainer(container)) {
                return createAssignedClone(dragState.item, dragState.sourcePool || dragState.sourceContainer);
            }
            return markAssignedItem(dragState.item, dragState.sourcePool, false);
        }

        function moveItemToContainer(item, container) {
            if (!item || !container) return;

            // If dropping on top of another drag-item, redirect to its parent container
            if (isDragItemElement(container)) {
                container = container.parentElement;
            }

            if (shouldClearOnDrop(container)) {
                clearDropzone(container, item);
            }

            if (isPoolContainer(container)) {
                if (item.dataset.poolClone === 'true') {
                    item.remove();
                    return;
                }
                item.classList.remove('dragging');
                delete item.dataset.assignedItem;
                delete item.dataset.poolClone;
                container.appendChild(item);
                return;
            }

            item.classList.remove('dragging');
            item.dataset.assignedItem = 'true';
            container.appendChild(item);
        }

        function handleDragOver(event) {
            const container = resolveDropContainer(event.target);
            if (!container) return;
            event.preventDefault();
            container.classList.add('drag-over');

            // Auto-scroll when dragging near viewport or scroll-container edges
            const scrollContainer = getScrollContainer(event.target);
            startAutoScroll(event.clientY, scrollContainer);
        }

        function handleDragLeave(event) {
            const container = resolveDropContainer(event.target);
            if (container) {
                container.classList.remove('drag-over');
            }
        }

        function handleDrop(event) {
            const container = resolveDropContainer(event.target);
            if (!container || !dragState.item) return;
            event.preventDefault();
            stopAutoScroll();
            const previousContainer = dragState.sourceContainer || dragState.item.parentElement;
            const draggedItem = resolveDraggedItem(container);
            container.classList.remove('drag-over');
            moveItemToContainer(draggedItem, container);
            resetDragState();
            if (previousContainer && previousContainer !== container) {
                handleAnswerInteraction(previousContainer);
            }
            handleAnswerInteraction(container);
            clearClickSelectedItem();
        }

        document.addEventListener('dragstart', handleDragStart);
        document.addEventListener('dragend', handleDragEnd);
        document.addEventListener('dragover', handleDragOver);
        document.addEventListener('dragleave', handleDragLeave);
        document.addEventListener('drop', handleDrop);

        function applyClickAssign(targetContainer) {
            if (!clickSelectedItem || !targetContainer) return;
            const sourceContainer = clickSelectedItem.parentElement;
            const sourcePool = clickSelectedItem.closest(POOL_CONTAINER_SELECTOR) || getOriginPool(clickSelectedItem);
            const sourceAllowsReuse = !!(sourcePool && detectPoolReuse(sourcePool));
            dragState.item = clickSelectedItem;
            dragState.sourceContainer = sourceContainer;
            dragState.sourcePool = sourcePool;
            dragState.sourceAllowsReuse = sourceAllowsReuse;

            const draggedItem = resolveDraggedItem(targetContainer);
            moveItemToContainer(draggedItem, targetContainer);
            resetDragState();

            if (sourceContainer && sourceContainer !== targetContainer) {
                handleAnswerInteraction(sourceContainer);
            }
            handleAnswerInteraction(targetContainer);
            clearClickSelectedItem();
        }

        document.addEventListener('click', (event) => {
            const target = event.target instanceof HTMLElement ? event.target : null;
            if (!target) return;

            const dragItem = target.closest(ACTIVE_DRAG_ITEM_SELECTOR);
            if (dragItem && dragItem instanceof HTMLElement) {
                if (clickSelectedItem === dragItem) {
                    clearClickSelectedItem();
                } else {
                    setClickSelectedItem(dragItem);
                }
                return;
            }

            const targetContainer = resolveDropContainer(target);
            if (targetContainer && !isPoolContainer(targetContainer) && clickSelectedItem) {
                applyClickAssign(targetContainer);
                return;
            }

            if (clickSelectedItem) {
                clearClickSelectedItem();
            }
        }, true);

        // Double-click to return assigned drag items back to the option pool
        document.addEventListener('dblclick', (event) => {
            const target = event.target instanceof HTMLElement ? event.target : null;
            if (!target) return;
            const dragItem = target.closest(ACTIVE_DRAG_ITEM_SELECTOR);
            if (!dragItem || !(dragItem instanceof HTMLElement)) return;
            // Only handle items that are already assigned (placed in a dropzone)
            if (dragItem.dataset.assignedItem !== 'true') return;
            const dropzone = dragItem.closest('.match-dropzone, .paragraph-dropzone, .drop-target-summary');
            const container = dropzone || dragItem.parentElement;
            returnItemToPool(dragItem);
            clearClickSelectedItem();
            handleAnswerInteraction(container);
        });

        function resetPracticePage() {
            if (submissionLocked) {
                return;
            }
            const exitBtn = document.getElementById('exit-btn');
            if (exitBtn) {
                exitBtn.style.display = 'none';
            }
            // 清空输入
            document.querySelectorAll('input').forEach((input) => {
                if (input.type === 'radio' || input.type === 'checkbox') {
                    input.checked = false;
                } else if (input.type !== 'button' && input.type !== 'submit' && input.type !== 'reset') {
                    input.value = '';
                }
            });
            document.querySelectorAll('textarea').forEach((textarea) => {
                textarea.value = '';
            });
            document.querySelectorAll('select').forEach((select) => {
                select.selectedIndex = 0;
            });

            // 移除高亮
            document.querySelectorAll('.hl').forEach((highlight) => {
                const parent = highlight.parentNode;
                if (!parent) return;
                while (highlight.firstChild) {
                    parent.insertBefore(highlight.firstChild, highlight);
                }
                parent.removeChild(highlight);
                parent.normalize();
            });

            // 清空拖拽题结果
            document.querySelectorAll(DROP_ZONE_SELECTOR).forEach((zone) => {
                clearDropzone(zone);
            });

            // 将所有拖拽选项放回原池
            document.querySelectorAll(ACTIVE_DRAG_ITEM_SELECTOR).forEach((item) => {
                const container = item.parentElement;
                if (isDropTargetContainer(container)) {
                    returnItemToPool(item);
                }
                item.setAttribute('draggable', 'true');
                item.classList.remove('drag-item-locked');
            });

            document.querySelectorAll('.answer-correct, .answer-wrong').forEach((el) => {
                el.classList.remove('answer-correct', 'answer-wrong');
            });
            document.querySelectorAll('.practice-nav .q-item').forEach((item) => {
                item.classList.remove('answered', 'correct', 'incorrect', 'marked');
            });
            markedQuestions.clear();
            persistMarkedQuestions();
            const resultsContainer = document.getElementById('results');
            if (resultsContainer) {
                resultsContainer.innerHTML = '';
                resultsContainer.style.display = '';
            }

            // Reset only the local timer when we are not in suite mode.
            if (!suiteTimerContext.active) {
                timerRunning = true;
                seconds = 0;
                localTimerAnchorMs = Date.now();
            }
            updateTimerVisualState();
            renderTimerDisplay();
            emitPracticeTimerState('reset');
        }

        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                const simulationMode = window.__UNIFIED_READING_SIMULATION_MODE__ === true;
                if (simulationMode) {
                    return;
                }
                resetPracticePage();
            });
        }

        if (submitBtn) {
            submitBtn.addEventListener('click', () => {
                const simulationMode = window.__UNIFIED_READING_SIMULATION_MODE__ === true;
                if (simulationMode) {
                    return;
                }
                lockPracticeAfterSubmit();
            });
        }

        const exitBtn = document.getElementById('exit-btn');
        if (exitBtn) {
            exitBtn.addEventListener('click', () => {
                window.close();
            });
        }

        document.addEventListener('change', (event) => {
            if (!(event.target instanceof HTMLElement)) {
                return;
            }
            handleAnswerInteraction(event.target);
        }, true);

        document.addEventListener('input', (event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
                handleAnswerInteraction(target);
            }
        }, true);

        document.addEventListener('click', (event) => {
            const target = event.target;
            if (!(target instanceof HTMLElement)) {
                return;
            }
            if (target.matches('input[type="radio"], input[type="checkbox"]')) {
                handleAnswerInteraction(target);
            }
        }, true);

        document.addEventListener('practiceResultsReady', (event) => {
            const detail = event && event.detail ? event.detail : {};
            const status = detail.status || 'final';
            if (status !== 'final' && status !== 'update') {
                showResultsPending();
                return;
            }
            handleResultsReady(detail);
            revealTranscriptPane();
            lockPracticeAfterSubmit();
        });

        // Keep suite timer state in sync with the host window and query params.
        (function setupSuiteTimerContextListener() {
            window.addEventListener('message', function (event) {
                const msg = event && event.data;
                if (!msg || typeof msg.type !== 'string') return;
                const type = String(msg.type).trim().toUpperCase();
                if (
                    type === 'INIT_SESSION'
                    || type === 'INIT_EXAM_SESSION'
                    || type === 'SESSION_READY'
                    || type === 'SIMULATION_CONTEXT'
                ) {
                    const payload = msg.data && typeof msg.data === 'object' ? msg.data : {};
                    applySuiteTimerContext(payload, type);
                }
            });
        })();

        Object.assign(window[PRACTICE_TIMER_BRIDGE_KEY], {
            applySuiteTimerContext,
            setRunning: setTimerRunning,
            resetLocalTimer: function resetLocalTimer() {
                if (suiteTimerContext.active) {
                    return getPracticeTimerSnapshot();
                }
                timerRunning = true;
                seconds = 0;
                localTimerAnchorMs = Date.now();
                updateTimerVisualState();
                renderTimerDisplay();
                return emitPracticeTimerState('reset');
            }
        });

        // --- 无尽模式：监听来自父窗口的倒计时指令 ---
        (function setupEndlessCountdownListener() {
            var endlessCountdownActive = false;

            function applyEndlessTimer(seconds) {
                if (!timerEl) return;
                timerEl.textContent = seconds + 's';
                timerEl.style.background = 'rgba(248, 113, 113, 0.8)';
            }

            function resetEndlessTimer() {
                if (!timerEl) return;
                timerEl.style.background = '';
            }

            window.addEventListener('message', function (event) {
                var msg = event && event.data;
                if (!msg || typeof msg.type !== 'string') return;

                if (msg.type === 'ENDLESS_COUNTDOWN') {
                    endlessCountdownActive = true;
                    var secs = (msg.data && typeof msg.data.seconds === 'number') ? msg.data.seconds : 5;
                    applyEndlessTimer(secs);
                    var exitBtn = document.getElementById('exit-btn');
                    if (exitBtn) {
                        exitBtn.style.display = 'block';
                        exitBtn.textContent = '\u9000\u51fa\u65e0\u5c3d\u6a21\u5f0f';
                        exitBtn.onclick = function () {
                            var opener = window.opener;
                            if (opener && !opener.closed) {
                                try {
                                    opener.postMessage({ type: 'ENDLESS_USER_EXIT' }, '*');
                                    if (typeof opener.stopEndlessPractice === 'function') {
                                        opener.stopEndlessPractice();
                                    } else if (opener.AppActions && typeof opener.AppActions.stopEndlessPractice === 'function') {
                                        opener.AppActions.stopEndlessPractice();
                                    }
                                } catch (_) {}
                            }
                            window.close();
                        };
                    }
                } else if (msg.type === 'ENDLESS_COUNTDOWN_TICK') {
                    if (!endlessCountdownActive) return;
                    var remaining = (msg.data && typeof msg.data.seconds === 'number') ? msg.data.seconds : 0;
                    applyEndlessTimer(remaining);
                    if (remaining <= 0) {
                        endlessCountdownActive = false;
                        resetEndlessTimer();
                    }
                }
            });
        })();

        setupAudioPlayer();
        initializeTranscriptPane();
    });

    let practiceUIStylesInjected = false;
    let transcriptState = null;
    const NO_ANSWER_PLACEHOLDER = '-';
    let pendingResultsTimeout = null;

    function injectPracticeUIStyles() {
        if (practiceUIStylesInjected) return;
        practiceUIStylesInjected = true;
        const style = document.createElement('style');
        style.textContent = `
.practice-nav .q-item {
    transition: background-color 0.2s ease, color 0.2s ease;
}
.practice-nav .q-item.answered {
    background-color: #dbeafe;
    color: #1e3a8a;
}
.practice-nav .q-item.correct {
    background-color: #bbf7d0;
    color: #166534;
}
.practice-nav .q-item.incorrect {
    background-color: #fecaca;
    color: #7f1d1d;
}
.practice-nav .q-item.marked {
    box-shadow: inset 0 0 0 2px #f59e0b;
    background-image: linear-gradient(180deg, rgba(245, 158, 11, 0.18), rgba(245, 158, 11, 0.06));
}
.answer-correct {
    background-color: #ecfccb !important;
    border-color: #65a30d !important;
}
.answer-wrong {
    background-color: #fee2e2 !important;
    border-color: #dc2626 !important;
}
.practice-results-summary {
    border-top: 1px solid #e5e7eb;
    margin-top: 24px;
    padding-top: 16px;
}
.practice-results-summary table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
}
.practice-results-summary th,
.practice-results-summary td {
    border: 1px solid #e5e7eb;
    padding: 8px;
    text-align: left;
}
.practice-results-summary tr.correct {
    background-color: #f0fdf4;
}
.practice-results-summary tr.incorrect {
    background-color: #fef2f2;
}
.practice-results-pending {
    opacity: 0.85;
}
.practice-results-loading {
    margin: 12px 0;
    color: #6b7280;
    font-size: 0.95rem;
}
.drag-item-locked {
    opacity: 0.55;
    pointer-events: none;
}
.drag-click-selected {
    outline: 2px solid #2563eb !important;
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}
.options label, .checkbox-group label {
    display: block;
    margin-bottom: 10px;
    cursor: pointer;
    line-height: 1.5;
}
.matching-table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
}
.matching-table th, .matching-table td {
    border: 1px solid #e5e7eb;
    padding: 12px;
    text-align: center;
    vertical-align: middle;
}
.matching-table th {
    background-color: #f9fafb;
    font-weight: 600;
    color: #4b5563;
}
.matching-table th:first-child, .matching-table td:first-child {
    text-align: left;
    min-width: 120px;
}
.matching-table tbody tr {
    transition: background-color 0.15s ease-in-out;
}
.matching-table tbody tr:hover {
    background-color: #f3f4f6;
}
.matching-table input[type="radio"] {
    cursor: pointer;
    transform: scale(1.15);
}
`;
        document.head.appendChild(style);
    }

    function normalizeQuestionId(questionId) {
        if (questionId === undefined || questionId === null) return null;
        const raw = String(questionId).trim();
        if (!raw) return null;
        const cleaned = raw.replace(QUESTION_ID_SUFFIX_PATTERN, '');
        const dropzoneMatch = cleaned.match(/^q(\d+)-dropzone$/i);
        if (dropzoneMatch) return 'q' + dropzoneMatch[1];
        if (/^q[\w-]+/i.test(cleaned)) return cleaned.replace(/^Q/, 'q');
        const numeric = cleaned.match(/^\d+/);
        if (numeric) return 'q' + numeric[0];
        const questionMatch = cleaned.match(/^question[-_\s]*(\d+)/i);
        if (questionMatch) return 'q' + questionMatch[1];
        return cleaned;
    }

    function deriveQuestionId(element) {
        if (!element) return null;
        const dataset = element.dataset || {};
        const candidates = [
            element.name,
            dataset.question,
            dataset.questionId,
            dataset.for,
            element.id ? element.id.replace(/(_input|-input|_answer|-target)$/i, '') : null
        ];
        for (let i = 0; i < candidates.length; i++) {
            const normalized = normalizeQuestionId(candidates[i]);
            if (normalized) return normalized;
        }
        let parent = element.parentElement;
        while (parent && parent !== document.body) {
            const parentId = normalizeQuestionId(parent.dataset?.question || parent.id);
            if (parentId) return parentId;
            parent = parent.parentElement;
        }
        return null;
    }

    function findNavItem(questionId) {
        const normalized = normalizeQuestionId(questionId);
        if (!normalized) return null;
        const key = normalized.toLowerCase();
        const candidates = [
            document.getElementById(`${key}-nav`),
            document.querySelector(`.practice-nav .q-item[data-question="${key}"]`),
            document.querySelector(`.practice-nav .q-item[data-question-id="${key}"]`)
        ];
        for (let i = 0; i < candidates.length; i++) {
            if (candidates[i]) return candidates[i];
        }
        return null;
    }

    function setNavStatus(questionId, status) {
        const item = findNavItem(questionId);
        if (!item) return;
        const isMarked = item.classList.contains('marked');
        item.classList.remove('answered', 'correct', 'incorrect');
        if (isMarked) {
            item.classList.add('marked');
        }
        if (!status) return;
        if (status === 'answered') {
            item.classList.add('answered');
        } else if (status === 'correct') {
            item.classList.add('answered', 'correct');
        } else if (status === 'incorrect') {
            item.classList.add('answered', 'incorrect');
        }
    }

    function handleAnswerInteraction(element) {
        const questionId = deriveQuestionId(element);
        if (!questionId) return;
        const hasValue = questionHasValue(questionId);
        setNavStatus(questionId, hasValue ? 'answered' : null);
    }

    function findAnswerElements(questionId, includeDropZones = false) {
        const normalized = normalizeQuestionId(questionId);
        if (!normalized) return [];
        const matches = [];
        document.querySelectorAll('input, textarea, select').forEach((element) => {
            const derived = deriveQuestionId(element);
            if (derived && derived.toLowerCase() === normalized.toLowerCase()) {
                matches.push(element);
            }
        });
        if (includeDropZones) {
            const candidateSelectors = [
                `.match-dropzone[data-question="${normalized}"]`,
                `.match-dropzone[data-question-id="${normalized}"]`,
                `.dropzone[data-question="${normalized}"]`,
                `.dropzone[data-target="${normalized}"]`,
                `.paragraph-dropzone[data-question="${normalized}"]`,
                `[data-question="${normalized}"] .dropped-items`,
                `#${normalized}-anchor .dropped-items`,
                `#${normalized} .dropped-items`,
                `#${normalized}-dropzone`,
                `#${normalized}-target`,
                `.drop-target-summary[data-question="${normalized}"]`
            ];
            candidateSelectors.forEach((selector) => {
                document.querySelectorAll(selector).forEach((el) => matches.push(el));
            });
        }
        return Array.from(new Set(matches));
    }

    function questionHasValue(questionId) {
        const elements = findAnswerElements(questionId, true);
        return elements.some((element) => {
            if (!element) return false;
            if (element.matches('input[type="radio"]')) {
                const name = element.name;
                if (name) {
                    return Array.from(document.querySelectorAll(`input[type="radio"][name="${name}"]`)).some(
                        (item) => item.checked
                    );
                }
                return element.checked;
            }
            if (element.matches('input[type="checkbox"]')) {
                const name = element.name;
                if (name) {
                    return Array.from(document.querySelectorAll(`input[type="checkbox"][name="${name}"]`)).some(
                        (item) => item.checked
                    );
                }
                return element.checked;
            }
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                return String(element.value || '').trim() !== '';
            }
            if (element.tagName === 'SELECT') {
                if (element.multiple) {
                    return Array.from(element.selectedOptions || []).length > 0;
                }
                return String(element.value || '').trim() !== '';
            }
            if (isAnswerValueContainer(element)) {
                return !!element.querySelector(DRAGGABLE_ITEM_SELECTOR);
            }
            return false;
        });
    }

    function highlightAnswerFields(questionId, state) {
        const elements = findAnswerElements(questionId, true);
        const className = state === null ? null : state ? 'answer-correct' : 'answer-wrong';
        elements.forEach((element) => {
            element.classList.remove('answer-correct', 'answer-wrong');
            if (className) {
                element.classList.add(className);
            }
        });
    }

    function compareAnswerValues(a, b) {
        if (a === undefined || a === null || b === undefined || b === null) {
            return false;
        }
        const normalize = (value) => String(value).replace(/\s+/g, ' ').trim().toLowerCase();
        const toList = (value) => {
            if (Array.isArray(value)) {
                return value.map(item => normalize(item)).filter(Boolean);
            }
            const text = normalize(value);
            if (!text) return [];
            if (/^[a-z](?:\s*,\s*[a-z])+$/i.test(text)) {
                return text.split(',').map(item => normalize(item)).filter(Boolean);
            }
            return [text];
        };
        const left = toList(a);
        const right = toList(b);
        if (left.length !== right.length) {
            return false;
        }
        const leftSorted = left.slice().sort();
        const rightSorted = right.slice().sort();
        return leftSorted.every((item, index) => item === rightSorted[index]);
    }

    function formatAnswerValue(value) {
        if (value === undefined || value === null) {
            return NO_ANSWER_PLACEHOLDER;
        }
        if (Array.isArray(value)) {
            const formatted = value
                .map((item) => formatAnswerValue(item))
                .filter((text) => text && text !== NO_ANSWER_PLACEHOLDER);
            return formatted.length ? formatted.join(', ') : NO_ANSWER_PLACEHOLDER;
        }
        if (typeof value === 'object') {
            try {
                const serialized = JSON.stringify(value);
                return serialized === '{}' || serialized === '[]'
                    ? NO_ANSWER_PLACEHOLDER
                    : serialized;
            } catch (_) {
                return NO_ANSWER_PLACEHOLDER;
            }
        }
        const text = String(value).trim();
        if (!text || /^no answer$/i.test(text)) {
            return NO_ANSWER_PLACEHOLDER;
        }
        return text;
    }

    function pickValueFromStore(store, normalizedKey, fallbackKey) {
        if (!store) {
            return undefined;
        }
        if (Object.prototype.hasOwnProperty.call(store, normalizedKey)) {
            return store[normalizedKey];
        }
        if (fallbackKey && Object.prototype.hasOwnProperty.call(store, fallbackKey)) {
            return store[fallbackKey];
        }
        return undefined;
    }

    function resolveQuestionOrder(results) {
        const answers = results.answers || {};
        const correctAnswers = results.correctAnswers || {};
        const comparison = results.answerComparison || {};
        const fallbackSet = new Set();
        const collectKeys = (source) => {
            Object.keys(source || {}).forEach((key) => {
                const normalized = normalizeQuestionId(key) || key;
                if (normalized) {
                    fallbackSet.add(normalized);
                }
            });
        };
        collectKeys(answers);
        collectKeys(correctAnswers);
        collectKeys(comparison);
        const fallbackKeys = Array.from(fallbackSet)
            .filter(Boolean)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

        if (Array.isArray(results.allQuestionIds) && results.allQuestionIds.length) {
            const ordered = [];
            const seen = new Set();
            results.allQuestionIds.forEach((rawKey) => {
                const normalized = normalizeQuestionId(rawKey) || rawKey;
                if (normalized && !seen.has(normalized)) {
                    seen.add(normalized);
                    ordered.push(normalized);
                }
            });
            fallbackKeys.forEach((key) => {
                if (!seen.has(key)) {
                    seen.add(key);
                    ordered.push(key);
                }
            });
            return ordered;
        }

        return fallbackKeys;
    }

    function formatQuestionLabel(questionId) {
        if (!questionId) {
            return '';
        }
        const normalized = normalizeQuestionId(questionId) || questionId;
        const trimmed = normalized.replace(/^q/i, '');
        const numericMatch = trimmed.match(/\d+/);
        return numericMatch ? numericMatch[0] : trimmed || normalized;
    }

    function showResultsPending() {
        const container = document.getElementById('results');
        if (!container) return;
        container.style.display = 'block';
        container.classList.add('practice-results-visible', 'practice-results-pending');
        container.innerHTML = '<p class="practice-results-loading">正在收集中，请稍候...</p>';
        if (pendingResultsTimeout) {
            clearTimeout(pendingResultsTimeout);
        }
        pendingResultsTimeout = setTimeout(() => {
            container.classList.remove('practice-results-pending');
            pendingResultsTimeout = null;
        }, 3000);
    }

    function renderResultsSummary(results) {
        const container = document.getElementById('results');
        if (!container) return;
        container.style.display = 'block';
        container.classList.add('practice-results-visible');
        container.classList.remove('practice-results-pending');
        if (pendingResultsTimeout) {
            clearTimeout(pendingResultsTimeout);
            pendingResultsTimeout = null;
        }
        const comparison = results.answerComparison || {};
        const answers = results.answers || {};
        const correctAnswers = results.correctAnswers || {};
        const orderedKeys = resolveQuestionOrder(results);

        container.innerHTML = '';
        if (!orderedKeys.length) {
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.className = 'practice-results-summary';

        const heading = document.createElement('h4');
        heading.textContent = 'Answer Summary';
        wrapper.appendChild(heading);

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const headRow = document.createElement('tr');
        ['Question', 'Your Answer', 'Correct Answer', 'Result'].forEach((label) => {
            const th = document.createElement('th');
            th.textContent = label;
            headRow.appendChild(th);
        });
        thead.appendChild(headRow);
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        orderedKeys.forEach((key) => {
            const normalized = normalizeQuestionId(key) || key;
            const entry = comparison[normalized] || comparison[key] || {};
            const userAnswerRaw = entry.hasOwnProperty('userAnswer')
                ? entry.userAnswer
                : pickValueFromStore(answers, normalized, key);
            const correctAnswerRaw = entry.hasOwnProperty('correctAnswer')
                ? entry.correctAnswer
                : pickValueFromStore(correctAnswers, normalized, key);
            const userAnswer = formatAnswerValue(userAnswerRaw);
            const correctAnswer = formatAnswerValue(correctAnswerRaw);
            const hasUserAnswer = userAnswer !== NO_ANSWER_PLACEHOLDER;

            let isCorrect = null;
            if (entry.hasOwnProperty('isCorrect')) {
                isCorrect = entry.isCorrect;
            } else if (hasUserAnswer && correctAnswerRaw !== undefined && correctAnswerRaw !== null) {
                isCorrect = compareAnswerValues(userAnswerRaw, correctAnswerRaw);
            }

            const row = document.createElement('tr');
            if (isCorrect === true) {
                row.className = 'correct';
            } else if (isCorrect === false) {
                row.className = 'incorrect';
            }

            const resultText = isCorrect === null
                ? '–'
                : (isCorrect ? '✅' : '❌');

            const columns = [
                formatQuestionLabel(normalized),
                userAnswer,
                correctAnswer,
                resultText
            ];
            columns.forEach((text) => {
                const td = document.createElement('td');
                td.textContent = text;
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        wrapper.appendChild(table);
        container.appendChild(wrapper);
    }

    function handleResultsReady(results) {
        renderResultsSummary(results);
        const comparison = results.answerComparison || {};
        const answers = results.answers || {};
        const correctAnswers = results.correctAnswers || {};
        const orderedKeys = resolveQuestionOrder(results);

        orderedKeys.forEach((key) => {
            const normalized = normalizeQuestionId(key);
            if (!normalized) return;
            const entry = comparison[normalized] || comparison[key] || {};
            const userAnswer = entry.hasOwnProperty('userAnswer')
                ? entry.userAnswer
                : pickValueFromStore(answers, normalized, key);
            const hasAnswer =
                userAnswer !== undefined &&
                userAnswer !== null &&
                String(userAnswer).trim() !== '' &&
                !/^no answer$/i.test(String(userAnswer).trim());
            const correctAnswer = entry.hasOwnProperty('correctAnswer')
                ? entry.correctAnswer
                : pickValueFromStore(correctAnswers, normalized, key);
            let isCorrect = null;
            if (entry.hasOwnProperty('isCorrect')) {
                isCorrect = entry.isCorrect;
            } else if (hasAnswer && correctAnswer !== undefined && correctAnswer !== null) {
                isCorrect = compareAnswerValues(userAnswer, correctAnswer);
            }

            if (isCorrect === null) {
                setNavStatus(normalized, hasAnswer ? 'answered' : null);
                highlightAnswerFields(normalized, null);
            } else if (isCorrect) {
                setNavStatus(normalized, 'correct');
                highlightAnswerFields(normalized, true);
            } else {
                setNavStatus(normalized, 'incorrect');
                highlightAnswerFields(normalized, false);
            }
        });
    }

    function setupAudioPlayer() {
        const audio = document.getElementById('listening-audio');
        const playPauseBtn = document.getElementById('play-pause-btn');
        const progressContainer = document.getElementById('progress-container');
        const progressBar = document.getElementById('progress-bar');
        const timeDisplay = document.getElementById('time-display');
        const volumeSlider = document.getElementById('volume-slider');
        const speedSelect = document.getElementById('playback-speed');

        // 即使audio元素不存在，也要确保播放按钮是启用的
        if (playPauseBtn) {
            playPauseBtn.disabled = false;
        }

        // 如果关键元素不存在，提前返回但不影响按钮状态
        if (!audio || !playPauseBtn || !progressContainer || !progressBar || !timeDisplay) {
            console.warn('[PracticePageUI] 音频播放器元素不完整，跳过初始化');
            return;
        }

        let isScrubbing = false;

        function formatTime(time) {
            if (!Number.isFinite(time) || time < 0) {
                return '00:00';
            }
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }

        function updateProgress() {
            if (!Number.isFinite(audio.duration) || audio.duration <= 0) {
                timeDisplay.textContent = `${formatTime(audio.currentTime)} / 00:00`;
                return;
            }
            const percentage = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = `${Math.min(100, Math.max(0, percentage))}%`;
            timeDisplay.textContent = `${formatTime(audio.currentTime)} / ${formatTime(audio.duration)}`;
        }

        function scrub(clientX) {
            const rect = progressContainer.getBoundingClientRect();
            if (!rect.width) return;
            const position = Math.min(Math.max(0, clientX - rect.left), rect.width);
            const percent = position / rect.width;
            if (Number.isFinite(audio.duration) && audio.duration > 0) {
                audio.currentTime = percent * audio.duration;
            }
            progressBar.style.width = `${percent * 100}%`;
        }

        playPauseBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play().then(() => {
                    playPauseBtn.innerHTML = '&#10074;&#10074;';
                }).catch((error) => {
                    console.warn('[PracticePageUI] 无法播放音频:', error);
                });
            } else {
                audio.pause();
                playPauseBtn.innerHTML = '&#9658;';
            }
        });

        audio.addEventListener('timeupdate', updateProgress);
        audio.addEventListener('loadedmetadata', updateProgress);

        progressContainer.addEventListener('mousedown', (event) => {
            isScrubbing = true;
            scrub(event.clientX);
        });

        document.addEventListener('mousemove', (event) => {
            if (isScrubbing) {
                event.preventDefault();
                scrub(event.clientX);
            }
        });

        document.addEventListener('mouseup', () => {
            isScrubbing = false;
        });

        if (volumeSlider) {
            volumeSlider.addEventListener('input', (event) => {
                const value = Number(event.target.value);
                if (Number.isFinite(value)) {
                    audio.volume = Math.min(1, Math.max(0, value));
                }
            });
        }

        if (speedSelect) {
            speedSelect.addEventListener('change', (event) => {
                const value = Number(event.target.value);
                if (Number.isFinite(value) && value > 0) {
                    audio.playbackRate = value;
                }
            });
        }
    }

    function getTranscriptElements() {
        return {
            shell: document.querySelector('.shell'),
            rightPane: document.getElementById('right'),
            transcript: document.getElementById('transcript-content')
        };
    }

    function initializeTranscriptPane() {
        const { shell, rightPane, transcript } = getTranscriptElements();
        if (!shell || !rightPane || !transcript) {
            transcriptState = 'missing';
            return;
        }

        if (!rightPane.dataset.originalDisplay) {
            rightPane.dataset.originalDisplay = window.getComputedStyle(rightPane).display || '';
        }

        const bodyMode =
            document.body && document.body.dataset ? document.body.dataset.transcriptMode : undefined;
        const transcriptMode =
            transcript.dataset.transcriptMode ||
            rightPane.dataset.transcriptMode ||
            bodyMode ||
            'auto';
        const hasAudio = !!document.getElementById('listening-audio');
        const originallyHidden = (rightPane.dataset.originalDisplay || '').includes('none');
        const shouldDelay = transcriptMode !== 'always' && hasAudio && originallyHidden;

        if (shouldDelay) {
            transcriptState = 'hidden';
            shell.classList.remove('split');
            rightPane.style.display = 'none';
            return;
        }

        shell.classList.add('split');
        rightPane.style.display =
            rightPane.dataset.originalDisplay && rightPane.dataset.originalDisplay !== 'none'
                ? rightPane.dataset.originalDisplay
                : 'block';
        transcriptState = 'visible';
    }

    function revealTranscriptPane() {
        if (transcriptState !== 'hidden') {
            return;
        }
        const { shell, rightPane, transcript } = getTranscriptElements();
        if (!shell || !rightPane || !transcript) {
            return;
        }
        shell.classList.add('split');
        rightPane.style.display =
            rightPane.dataset.originalDisplay && rightPane.dataset.originalDisplay !== 'none'
                ? rightPane.dataset.originalDisplay
                : 'block';
        transcriptState = 'visible';
    }
})();
