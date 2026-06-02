/**
 * 导出 PDF 前的记录选择弹窗
 * 列出全部练习记录,按日期分组,允许用户挑选要导出的子集。
 */
(function (global) {
    'use strict';

    const STYLE_ID = 'practice-export-selector-style';
    const MODAL_ID = 'practice-export-selector-modal';

    function ensureStyle() {
        if (document.getElementById(STYLE_ID)) return;
        const style = document.createElement('style');
        style.id = STYLE_ID;
        style.textContent = `
            #${MODAL_ID} {
                position: fixed; inset: 0; z-index: 9999;
                background: rgba(13, 58, 35, 0.45);
                display: flex; align-items: center; justify-content: center;
                font-family: Arial, Helvetica, "Microsoft YaHei", sans-serif;
                opacity: 0; pointer-events: none;
                transition: opacity 0.18s ease;
            }
            #${MODAL_ID}.show { opacity: 1; pointer-events: auto; }
            #${MODAL_ID} .selector-card {
                width: min(720px, 92vw);
                max-height: 86vh;
                background: #ffffff;
                border-radius: 8px;
                border: 1px solid #bcd8c5;
                box-shadow: 0 18px 36px rgba(13, 58, 35, 0.25);
                display: flex; flex-direction: column;
                overflow: hidden;
                transform: translateY(8px);
                transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
            }
            #${MODAL_ID}.show .selector-card { transform: translateY(0); }
            #${MODAL_ID} .selector-head {
                background: linear-gradient(180deg, #14532d 0%, #1f7a4d 100%);
                color: #ffffff;
                padding: 14px 18px;
                display: flex; align-items: center; justify-content: space-between;
                border-bottom: 3px solid #ffd54a;
            }
            #${MODAL_ID} .selector-head h3 {
                margin: 0; font-size: 16px; letter-spacing: 0.04em;
            }
            #${MODAL_ID} .selector-head .close-btn {
                background: rgba(255,255,255,0.15);
                color: #ffffff; border: 1px solid rgba(255,255,255,0.35);
                width: 28px; height: 28px; border-radius: 4px;
                cursor: pointer; font-size: 16px; line-height: 24px;
            }
            #${MODAL_ID} .selector-head .close-btn:hover { background: rgba(255,255,255,0.25); }
            #${MODAL_ID} .selector-toolbar {
                padding: 12px 18px;
                background: #ecf6ef;
                border-bottom: 1px solid #bcd8c5;
                display: flex; flex-wrap: wrap; gap: 8px; align-items: center;
                font-size: 13px;
            }
            #${MODAL_ID} .selector-toolbar .summary {
                margin-right: auto; color: #14532d; font-weight: 600;
            }
            #${MODAL_ID} .selector-toolbar button {
                background: #ffffff; color: #1f7a4d;
                border: 1px solid #bcd8c5;
                padding: 5px 12px; border-radius: 4px;
                font-size: 12px; cursor: pointer;
                font-weight: 600; letter-spacing: 0.02em;
                transition: background 0.15s ease, color 0.15s ease;
            }
            #${MODAL_ID} .selector-toolbar button:hover {
                background: #1f7a4d; color: #ffffff;
            }
            #${MODAL_ID} .selector-list {
                flex: 1; overflow-y: auto;
                padding: 12px 18px 6px;
                background: #fafdfb;
            }
            #${MODAL_ID} .date-group { margin-bottom: 14px; }
            #${MODAL_ID} .date-group__head {
                display: flex; align-items: center; gap: 10px;
                padding: 6px 10px;
                background: #d4ead8;
                color: #14532d;
                border-left: 4px solid #1f7a4d;
                border-radius: 3px;
                margin-bottom: 6px;
                font-size: 13px; font-weight: 700;
            }
            #${MODAL_ID} .date-group__head .count {
                font-weight: 500; color: #4a6e58;
                background: rgba(255,255,255,0.6);
                padding: 1px 8px; border-radius: 3px;
                font-size: 11px;
            }
            #${MODAL_ID} .date-group__head label {
                cursor: pointer; display: flex; align-items: center; gap: 6px; flex: 1;
            }
            #${MODAL_ID} .record-row {
                display: flex; align-items: center; gap: 10px;
                padding: 8px 12px; margin: 4px 0;
                background: #ffffff;
                border: 1px solid #d4ead8;
                border-radius: 4px;
                font-size: 13px;
                color: #14532d;
                cursor: pointer;
                transition: background 0.12s ease, border-color 0.12s ease;
            }
            #${MODAL_ID} .record-row:hover {
                background: #ecf6ef; border-color: #bcd8c5;
            }
            #${MODAL_ID} .record-row.selected {
                background: #d4ead8; border-color: #1f7a4d;
            }
            #${MODAL_ID} .record-row input[type="checkbox"] { transform: scale(1.1); cursor: pointer; }
            #${MODAL_ID} .record-row .row-title {
                flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
            }
            #${MODAL_ID} .record-row .tag {
                background: #1f7a4d; color: #ffffff;
                font-size: 10.5px; font-weight: 600; padding: 1px 7px;
                border-radius: 3px; letter-spacing: 0.03em;
            }
            #${MODAL_ID} .record-row .row-meta {
                font-size: 11.5px; color: #5b7064; white-space: nowrap;
            }
            #${MODAL_ID} .record-row .row-score {
                color: #1f7a4d; font-weight: 700; white-space: nowrap;
            }
            #${MODAL_ID} .empty-state {
                padding: 60px 20px; text-align: center; color: #5b7064;
            }
            #${MODAL_ID} .selector-foot {
                padding: 12px 18px;
                background: #ffffff;
                border-top: 1px solid #bcd8c5;
                display: flex; gap: 10px; justify-content: flex-end; align-items: center;
            }
            #${MODAL_ID} .selector-foot .footer-hint {
                margin-right: auto; font-size: 12px; color: #5b7064;
            }
            #${MODAL_ID} .selector-foot button {
                padding: 8px 18px; border-radius: 4px; font-size: 13px; cursor: pointer;
                font-weight: 600; letter-spacing: 0.04em;
                border: 1px solid #14532d;
            }
            #${MODAL_ID} .btn-cancel {
                background: #ffffff; color: #1f7a4d; border-color: #bcd8c5;
            }
            #${MODAL_ID} .btn-cancel:hover { background: #ecf6ef; }
            #${MODAL_ID} .btn-confirm {
                background: linear-gradient(180deg, #1f7a4d 0%, #14532d 100%);
                color: #ffffff;
            }
            #${MODAL_ID} .btn-confirm:hover { filter: brightness(1.08); }
            #${MODAL_ID} .btn-confirm:disabled {
                background: #cccccc; border-color: #aaaaaa; color: #ffffff;
                cursor: not-allowed; filter: none;
            }
        `;
        document.head.appendChild(style);
    }

    class PracticeExportSelector {
        constructor() {
            this.records = [];
            this.selectedIds = new Set();
            this.element = null;
            this.handlers = null;
        }

        async open() {
            ensureStyle();
            const records = await this.loadRecords();
            this.records = records;
            if (!records || records.length === 0) {
                if (typeof window.showMessage === 'function') {
                    window.showMessage('当前没有练习记录,无法导出 PDF', 'warning');
                } else {
                    alert('当前没有练习记录,无法导出 PDF');
                }
                return;
            }

            // 默认全选
            this.selectedIds = new Set(records.map(r => r.id).filter(Boolean));
            this.render();
        }

        async loadRecords() {
            // 复用 MarkdownExporter 的统一加载入口
            if (!window.markdownExporter && typeof window.MarkdownExporter === 'function') {
                try { window.markdownExporter = new window.MarkdownExporter(); } catch (_) {}
            }
            if (window.markdownExporter && typeof window.markdownExporter.getPracticeRecordsUnified === 'function') {
                const raw = await window.markdownExporter.getPracticeRecordsUnified();
                if (Array.isArray(raw) && raw.length) {
                    return raw.slice().sort((a, b) => {
                        const ta = new Date(a.startTime || a.date || 0).getTime();
                        const tb = new Date(b.startTime || b.date || 0).getTime();
                        return tb - ta;
                    });
                }
            }
            return [];
        }

        groupByDate() {
            const buckets = new Map();
            this.records.forEach(record => {
                const d = new Date(record.startTime || record.date || 0);
                const key = isNaN(d.getTime())
                    ? '未知日期'
                    : `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
                if (!buckets.has(key)) buckets.set(key, []);
                buckets.get(key).push(record);
            });
            // 按日期倒序
            return Array.from(buckets.entries()).sort((a, b) => b[0].localeCompare(a[0]));
        }

        render() {
            this.close(); // 移除可能残留的旧弹窗

            const overlay = document.createElement('div');
            overlay.id = MODAL_ID;
            overlay.innerHTML = this.buildHtml();
            document.body.appendChild(overlay);
            this.element = overlay;

            requestAnimationFrame(() => overlay.classList.add('show'));

            this.attachHandlers();
            this.updateSummary();
        }

        buildHtml() {
            const groups = this.groupByDate();
            const groupsHtml = groups.map(([date, records]) => this.buildGroupHtml(date, records)).join('');
            return `
                <div class="selector-card" role="dialog" aria-modal="true" aria-label="选择要导出的记录">
                    <div class="selector-head">
                        <h3>📄 选择要导出的练习记录</h3>
                        <button type="button" class="close-btn" data-action="close" aria-label="关闭">×</button>
                    </div>
                    <div class="selector-toolbar">
                        <span class="summary" data-role="summary">已选 0 / ${this.records.length}</span>
                        <button type="button" data-action="select-all">全选</button>
                        <button type="button" data-action="select-none">全不选</button>
                        <button type="button" data-action="select-invert">反选</button>
                        <button type="button" data-action="select-today">今天</button>
                        <button type="button" data-action="select-week">最近 7 天</button>
                        <button type="button" data-action="select-month">最近 30 天</button>
                    </div>
                    <div class="selector-list">${groupsHtml || '<div class="empty-state">暂无可导出的记录。</div>'}</div>
                    <div class="selector-foot">
                        <span class="footer-hint">提示:取消勾选可剔除不想包含在 PDF 中的记录。</span>
                        <button type="button" class="btn-cancel" data-action="close">取消</button>
                        <button type="button" class="btn-confirm" data-action="confirm">导出选中 PDF</button>
                    </div>
                </div>
            `;
        }

        buildGroupHtml(date, records) {
            const rowsHtml = records.map(record => this.buildRowHtml(record)).join('');
            return `
                <section class="date-group" data-date="${escapeHtml(date)}">
                    <header class="date-group__head">
                        <label>
                            <input type="checkbox" data-action="toggle-group" data-date="${escapeHtml(date)}">
                            📅 ${escapeHtml(date)}
                        </label>
                        <span class="count">${records.length} 条</span>
                    </header>
                    ${rowsHtml}
                </section>
            `;
        }

        buildRowHtml(record) {
            const id = String(record.id || '').replace(/"/g, '&quot;');
            const metadata = record.metadata || {};
            const title = metadata.examTitle || metadata.title || record.title || record.examId || '未知题目';
            const category = metadata.category || record.category || 'Unknown';
            const score = resolveScore(record);
            const accuracy = resolveAccuracy(record);
            const startTime = formatTime(record.startTime || record.date);

            return `
                <label class="record-row" data-record-id="${id}">
                    <input type="checkbox" data-action="toggle-record" data-record-id="${id}">
                    <span class="tag">${escapeHtml(category)}</span>
                    <span class="row-title" title="${escapeHtml(title)}">${escapeHtml(title)}</span>
                    <span class="row-score">${score} · ${accuracy}%</span>
                    <span class="row-meta">${escapeHtml(startTime)}</span>
                </label>
            `;
        }

        attachHandlers() {
            const root = this.element;
            if (!root) return;

            const self = this;
            const onClick = (event) => {
                const action = event.target.dataset && event.target.dataset.action;
                if (!action) return;

                if (action === 'close') {
                    event.preventDefault();
                    self.close();
                    return;
                }
                if (action === 'confirm') {
                    event.preventDefault();
                    self.confirm();
                    return;
                }
                if (action === 'select-all') { self.selectAll(); return; }
                if (action === 'select-none') { self.selectNone(); return; }
                if (action === 'select-invert') { self.selectInvert(); return; }
                if (action === 'select-today') { self.selectRange(0); return; }
                if (action === 'select-week') { self.selectRange(7); return; }
                if (action === 'select-month') { self.selectRange(30); return; }
            };

            const onChange = (event) => {
                const target = event.target;
                if (!(target instanceof HTMLInputElement)) return;
                const action = target.dataset.action;

                if (action === 'toggle-record') {
                    const id = target.dataset.recordId;
                    if (!id) return;
                    if (target.checked) self.selectedIds.add(id);
                    else self.selectedIds.delete(id);
                    self.syncUi();
                } else if (action === 'toggle-group') {
                    const date = target.dataset.date;
                    if (!date) return;
                    const records = self.records.filter(r => bucketKey(r) === date);
                    records.forEach(r => {
                        if (target.checked) self.selectedIds.add(r.id);
                        else self.selectedIds.delete(r.id);
                    });
                    self.syncUi();
                }
            };

            const onBackdrop = (event) => {
                if (event.target === root) self.close();
            };

            const onKey = (event) => {
                if (event.key === 'Escape') self.close();
            };

            root.addEventListener('click', onClick);
            root.addEventListener('change', onChange);
            root.addEventListener('click', onBackdrop);
            document.addEventListener('keydown', onKey);

            this.handlers = { onClick, onChange, onBackdrop, onKey };
        }

        detachHandlers() {
            if (!this.handlers || !this.element) return;
            this.element.removeEventListener('click', this.handlers.onClick);
            this.element.removeEventListener('change', this.handlers.onChange);
            this.element.removeEventListener('click', this.handlers.onBackdrop);
            document.removeEventListener('keydown', this.handlers.onKey);
            this.handlers = null;
        }

        // ---------- 操作 ----------
        selectAll() {
            this.selectedIds = new Set(this.records.map(r => r.id).filter(Boolean));
            this.syncUi();
        }

        selectNone() {
            this.selectedIds.clear();
            this.syncUi();
        }

        selectInvert() {
            const next = new Set();
            this.records.forEach(r => {
                if (r.id && !this.selectedIds.has(r.id)) next.add(r.id);
            });
            this.selectedIds = next;
            this.syncUi();
        }

        selectRange(days) {
            const now = new Date();
            const threshold = new Date(now.getFullYear(), now.getMonth(), now.getDate() - days).getTime();
            const next = new Set();
            this.records.forEach(record => {
                const t = new Date(record.startTime || record.date || 0).getTime();
                if (!isNaN(t) && t >= threshold && record.id) {
                    next.add(record.id);
                }
            });
            this.selectedIds = next;
            this.syncUi();
        }

        // ---------- 渲染同步 ----------
        syncUi() {
            if (!this.element) return;

            // record-level
            this.element.querySelectorAll('input[data-action="toggle-record"]').forEach(input => {
                const id = input.dataset.recordId;
                const checked = id ? this.selectedIds.has(id) : false;
                input.checked = checked;
                const row = input.closest('.record-row');
                if (row) row.classList.toggle('selected', checked);
            });

            // group-level: 三态(全选/部分/未选)
            this.element.querySelectorAll('input[data-action="toggle-group"]').forEach(input => {
                const date = input.dataset.date;
                if (!date) return;
                const records = this.records.filter(r => bucketKey(r) === date);
                const selected = records.filter(r => this.selectedIds.has(r.id)).length;
                if (selected === 0) {
                    input.checked = false;
                    input.indeterminate = false;
                } else if (selected === records.length) {
                    input.checked = true;
                    input.indeterminate = false;
                } else {
                    input.checked = false;
                    input.indeterminate = true;
                }
            });

            this.updateSummary();
        }

        updateSummary() {
            if (!this.element) return;
            const summary = this.element.querySelector('[data-role="summary"]');
            if (summary) {
                summary.textContent = `已选 ${this.selectedIds.size} / ${this.records.length}`;
            }
            const confirmBtn = this.element.querySelector('[data-action="confirm"]');
            if (confirmBtn) {
                confirmBtn.disabled = this.selectedIds.size === 0;
            }
        }

        // ---------- 完成 ----------
        confirm() {
            if (this.selectedIds.size === 0) return;
            const ids = Array.from(this.selectedIds);
            this.close();

            // 调用 PdfExporter 导出
            if (typeof window.PdfExporter !== 'function') {
                if (typeof window.showMessage === 'function') {
                    window.showMessage('PDF 导出模块未就绪', 'warning');
                }
                return;
            }
            if (!window.pdfExporter || !(window.pdfExporter instanceof window.PdfExporter)) {
                window.pdfExporter = new window.PdfExporter();
            }
            window.pdfExporter.exportToPdf({
                recordIds: ids,
                title: ids.length === this.records.length ? null : `选中 ${ids.length} 条记录`
            });
        }

        close() {
            const existing = document.getElementById(MODAL_ID);
            if (existing) {
                this.detachHandlers();
                existing.classList.remove('show');
                setTimeout(() => {
                    if (existing.parentNode) existing.parentNode.removeChild(existing);
                }, 180);
            }
            this.element = null;
        }
    }

    // ---------- 工具函数 ----------
    function pad(n) { return n < 10 ? '0' + n : '' + n; }

    function bucketKey(record) {
        const d = new Date(record.startTime || record.date || 0);
        if (isNaN(d.getTime())) return '未知日期';
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    }

    function formatTime(value) {
        if (!value) return '—';
        const d = new Date(value);
        if (isNaN(d.getTime())) return String(value);
        return `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    function resolveScore(record) {
        if (window.markdownExporter && typeof window.markdownExporter.resolveScoreMetrics === 'function') {
            const m = window.markdownExporter.resolveScoreMetrics(record);
            return `${m.correct}/${m.total}`;
        }
        const c = record.correctAnswers || (record.scoreInfo && record.scoreInfo.correct) || 0;
        const t = record.totalQuestions || (record.scoreInfo && record.scoreInfo.total) || 0;
        return `${c}/${t}`;
    }

    function resolveAccuracy(record) {
        if (window.markdownExporter && typeof window.markdownExporter.resolveScoreMetrics === 'function') {
            return window.markdownExporter.resolveScoreMetrics(record).percentage;
        }
        if (typeof record.percentage === 'number') return Math.round(record.percentage);
        if (record.scoreInfo && typeof record.scoreInfo.percentage === 'number') return Math.round(record.scoreInfo.percentage);
        return 0;
    }

    function escapeHtml(value) {
        if (value == null) return '';
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    global.PracticeExportSelector = PracticeExportSelector;
})(typeof window !== 'undefined' ? window : this);
