/**
 * PDF 导出器
 * 复用 MarkdownExporter 的记录加载/分组/比对逻辑,把练习记录渲染成
 * 适合打印的 HTML 页面,并自动调起浏览器打印对话框(可保存为 PDF)。
 */
class PdfExporter {
    constructor() {
        this.storage = window.storage;
        this.markdown = window.markdownExporter || (typeof window.MarkdownExporter === 'function' ? new window.MarkdownExporter() : null);
    }

    // ---------- 数据加载(委托给 MarkdownExporter 已有逻辑) ----------
    async loadRecordsAndIndex() {
        if (!this.markdown && typeof window.MarkdownExporter === 'function') {
            this.markdown = new window.MarkdownExporter();
        }
        if (!this.markdown) {
            throw new Error('MarkdownExporter 未就绪,无法读取练习记录');
        }
        const practiceRecords = await this.markdown.getPracticeRecordsUnified();
        let examIndex = [];
        if (this.storage && typeof this.storage.get === 'function') {
            try {
                const idx = await this.storage.get('exam_index', []);
                examIndex = Array.isArray(idx) ? idx : [];
            } catch (_) { /* ignore */ }
        }
        if ((!Array.isArray(examIndex) || examIndex.length === 0) && Array.isArray(window.examIndex)) {
            examIndex = window.examIndex;
        }
        return { practiceRecords, examIndex };
    }

    // ---------- 入口 ----------
    /**
     * 导出 PDF
     * @param {Object} [options]
     * @param {string[]} [options.recordIds] 仅导出 ID 在该数组中的记录;不传则导出全部
     * @param {string}   [options.title]     报告标题(可选,例如"选中记录")
     */
    async exportToPdf(options) {
        const opts = options || {};
        const filterIds = Array.isArray(opts.recordIds) && opts.recordIds.length > 0
            ? new Set(opts.recordIds)
            : null;

        // 用户点击按钮的同步调用栈中,先打开窗口避免被浏览器拦截
        const printWindow = window.open('', '_blank');
        if (!printWindow) {
            if (typeof window.showMessage === 'function') {
                window.showMessage('浏览器拦截了导出窗口,请允许本站弹窗后重试', 'warning');
            } else {
                alert('浏览器拦截了导出窗口,请允许本站弹窗后重试');
            }
            return;
        }
        printWindow.document.write(this.buildPlaceholderHtml());
        printWindow.document.close();

        try {
            const { practiceRecords, examIndex } = await this.loadRecordsAndIndex();
            if (!practiceRecords || practiceRecords.length === 0) {
                this.writePlaceholder(printWindow, '当前没有练习记录,无法生成 PDF。');
                return;
            }

            let scoped = practiceRecords;
            if (filterIds) {
                scoped = practiceRecords.filter(r => r && filterIds.has(r.id));
            }
            if (scoped.length === 0) {
                this.writePlaceholder(printWindow, '所选记录已被删除,无法生成 PDF。');
                return;
            }

            const grouped = await this.markdown.groupRecordsByDateAsync(scoped, examIndex);
            const html = this.buildPrintHtml(grouped, scoped.length, {
                subtitle: opts.title || (filterIds ? `选中 ${scoped.length} 条记录` : null)
            });
            this.replaceWindowContent(printWindow, html);
        } catch (error) {
            console.error('[PdfExporter] 导出失败:', error);
            this.writePlaceholder(printWindow, '导出失败:' + (error && error.message ? error.message : '未知错误'));
            if (typeof window.showMessage === 'function') {
                window.showMessage('PDF 导出失败,请稍后重试', 'error');
            }
        }
    }

    /**
     * 把单条记录导出为 PNG 图片(浏览器原生 SVG foreignObject 技术,无外部依赖)
     */
    async exportRecordAsImage(record) {
        if (!record) {
            if (typeof window.showMessage === 'function') {
                window.showMessage('未提供记录,无法导出图片', 'warning');
            }
            return;
        }

        if (!this.markdown && typeof window.MarkdownExporter === 'function') {
            try { this.markdown = new window.MarkdownExporter(); } catch (_) { /* ignore */ }
        }

        try {
            const enhanced = this.enrichRecordWithExam(record);
            const innerHtml = this.buildStandaloneRecordInnerHtml(enhanced);

            // 离屏渲染获取实际高度
            const stage = document.createElement('div');
            stage.setAttribute('aria-hidden', 'true');
            stage.style.cssText = 'position:fixed;left:-99999px;top:0;width:840px;visibility:hidden;pointer-events:none;';
            stage.innerHTML = innerHtml;
            document.body.appendChild(stage);

            // 强制让浏览器排版
            const measured = stage.firstElementChild
                ? stage.firstElementChild.getBoundingClientRect()
                : stage.getBoundingClientRect();
            const width = 840;
            const height = Math.max(420, Math.ceil(measured.height) + 40);

            const serialized = new XMLSerializer().serializeToString(stage.firstElementChild || stage);
            document.body.removeChild(stage);

            const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
                <foreignObject width="100%" height="100%">
                    <div xmlns="http://www.w3.org/1999/xhtml">${serialized}</div>
                </foreignObject>
            </svg>`;

            const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
            const svgUrl = URL.createObjectURL(svgBlob);
            const img = new Image();
            img.crossOrigin = 'anonymous';
            await new Promise((resolve, reject) => {
                img.onload = resolve;
                img.onerror = () => reject(new Error('图片渲染失败,部分元素可能不支持外部资源'));
                img.src = svgUrl;
            });

            const scale = Math.min(2, window.devicePixelRatio || 1.5);
            const canvas = document.createElement('canvas');
            canvas.width = Math.round(width * scale);
            canvas.height = Math.round(height * scale);
            const ctx = canvas.getContext('2d');
            ctx.scale(scale, scale);
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            URL.revokeObjectURL(svgUrl);

            const pngBlob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            if (!pngBlob) {
                throw new Error('生成 PNG 失败');
            }

            const downloadUrl = URL.createObjectURL(pngBlob);
            const safeName = this.buildRecordFilename(record, 'png');
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = safeName;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(downloadUrl), 1500);

            if (typeof window.showMessage === 'function') {
                window.showMessage('图片已开始下载', 'success');
            }
        } catch (error) {
            console.error('[PdfExporter] 图片导出失败:', error);
            if (typeof window.showMessage === 'function') {
                window.showMessage('图片导出失败:' + (error.message || '未知错误'), 'error');
            } else {
                alert('图片导出失败:' + (error.message || '未知错误'));
            }
        }
    }

    /**
     * 把单条记录导出为 PDF(单条记录的打印报告)
     */
    async exportSingleRecordAsPdf(record) {
        if (!record) return;
        return this.exportToPdf({
            recordIds: [record.id],
            title: '单条记录导出'
        });
    }

    // 用 examIndex 增强 record,补全 title / category / frequency
    enrichRecordWithExam(record) {
        if (record.examInfo) return record;
        const examIndex = Array.isArray(window.examIndex) ? window.examIndex : [];
        const exam = examIndex.find(e => e && e.id === record.examId) || {};
        return {
            ...record,
            examInfo: exam,
            title: record.title || exam.title || record.examId || '未知题目',
            category: record.category || exam.category || 'Unknown',
            frequency: record.frequency || exam.frequency || 'unknown'
        };
    }

    // 给 PNG/单条 PDF 用的文件名
    buildRecordFilename(record, ext) {
        const metadata = record.metadata || {};
        let title = this.markdown
            ? this.markdown.normalizeTitle(metadata.examTitle || metadata.title || record.title || record.examId || 'record')
            : (record.title || record.examId || 'record');
        title = String(title).replace(/[\\/:*?"<>|]/g, '').replace(/\s+/g, '-').slice(0, 60);
        const dt = new Date(record.startTime || record.date || Date.now());
        const pad = n => (n < 10 ? '0' + n : '' + n);
        const stamp = `${dt.getFullYear()}${pad(dt.getMonth() + 1)}${pad(dt.getDate())}-${pad(dt.getHours())}${pad(dt.getMinutes())}`;
        return `ielts-${title}-${stamp}.${ext}`;
    }

    // 用于 PNG 截图的内嵌 HTML 片段(包含 <style> + 单条记录卡片)
    buildStandaloneRecordInnerHtml(record) {
        const cardHtml = this.buildRecordHtml(record);
        const inlineStyles = `
            .ielts-export-card-root {
                font-family: Arial, Helvetica, "Microsoft YaHei", "PingFang SC", sans-serif;
                background: #ffffff;
                color: #14532d;
                padding: 24px 28px;
                box-sizing: border-box;
                width: 840px;
            }
            .ielts-export-card-root h2.date-heading {
                font-size: 17px;
                color: #14532d;
                background: #d4ead8;
                border-left: 6px solid #1f7a4d;
                padding: 8px 14px;
                border-radius: 3px;
                margin: 0 0 14px;
            }
            .ielts-export-card-root header.image-head {
                display: flex;
                justify-content: space-between;
                align-items: flex-end;
                border-bottom: 3px solid #1f7a4d;
                padding-bottom: 12px;
                margin-bottom: 16px;
            }
            .ielts-export-card-root .brand-logo {
                background: #1f7a4d;
                color: #ffffff;
                font-weight: 800;
                letter-spacing: 0.18em;
                padding: 6px 12px;
                border-radius: 3px;
                border: 2px solid #ffd54a;
                font-size: 13px;
                display: inline-block;
            }
            .ielts-export-card-root h1 {
                margin: 6px 0 0;
                font-size: 18px;
                color: #14532d;
            }
            .ielts-export-card-root .sub {
                font-size: 11px;
                color: #5b7064;
            }
            .ielts-export-card-root .meta-right {
                font-size: 11px;
                color: #5b7064;
                text-align: right;
                line-height: 1.7;
            }
            .ielts-export-card-root article.record {
                border: 1px solid #bcd8c5;
                border-radius: 4px;
                padding: 14px 16px;
                background: #ffffff;
            }
            .ielts-export-card-root .record-head {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                gap: 12px;
                margin-bottom: 8px;
                border-bottom: 1px dashed #bcd8c5;
                padding-bottom: 6px;
            }
            .ielts-export-card-root .record-title { font-size: 14px; font-weight: 700; color: #14532d; }
            .ielts-export-card-root .record-title .tag {
                display: inline-block; background: #1f7a4d; color: #ffffff;
                font-size: 11px; font-weight: 600; padding: 2px 8px; margin-right: 6px;
                border-radius: 3px; letter-spacing: 0.04em;
            }
            .ielts-export-card-root .record-title .tag.freq { background: #ffd54a; color: #14532d; }
            .ielts-export-card-root .record-score {
                font-size: 13px; color: #1f7a4d; font-weight: 700; white-space: nowrap;
            }
            .ielts-export-card-root .record-meta { font-size: 11px; color: #5b7064; margin-bottom: 8px; }
            .ielts-export-card-root .record-meta span + span::before { content: " · "; margin: 0 4px; color: #bcd8c5; }
            .ielts-export-card-root table.answers { width: 100%; border-collapse: collapse; margin-top: 6px; font-size: 12px; }
            .ielts-export-card-root table.answers th,
            .ielts-export-card-root table.answers td { border: 1px solid #bcd8c5; padding: 5px 8px; text-align: left; vertical-align: top; }
            .ielts-export-card-root table.answers thead th { background: #e8f3eb; color: #14532d; font-weight: 700; }
            .ielts-export-card-root table.answers td.col-num { width: 56px; text-align: center; font-weight: 600; }
            .ielts-export-card-root table.answers td.col-res { width: 50px; text-align: center; font-weight: 700; font-size: 13px; }
            .ielts-export-card-root table.answers td.col-res.ok { color: #1f7a4d; }
            .ielts-export-card-root table.answers td.col-res.bad { color: #c0392b; }
            .ielts-export-card-root table.answers tr.bad td { background: #fdf2ef; }
            .ielts-export-card-root .no-detail {
                margin: 0; padding: 8px 12px; background: #e8f3eb;
                border-left: 3px solid #1f7a4d; border-radius: 3px; color: #5b7064; font-size: 12px;
            }
            .ielts-export-card-root footer.image-foot {
                margin-top: 14px; padding-top: 10px;
                border-top: 1px dashed #bcd8c5;
                color: #5b7064; font-size: 11px; text-align: center;
            }
            .ielts-export-card-root footer.image-foot strong {
                color: #1f7a4d; background: #e8f3eb; padding: 2px 8px;
                border-radius: 3px; margin-left: 4px;
            }
        `;

        const exportStamp = new Date().toLocaleString('zh-CN', { hour12: false });
        return `<div class="ielts-export-card-root">
            <style>${inlineStyles}</style>
            <header class="image-head">
                <div>
                    <span class="brand-logo">IELTS</span>
                    <h1>雅思机考练习记录</h1>
                    <div class="sub">IELTS Computer-delivered Practice · Single Record</div>
                </div>
                <div class="meta-right">
                    <div>导出时间:${this.escapeHtml(exportStamp)}</div>
                    <div>记录 ID:${this.escapeHtml(record.id || '—')}</div>
                </div>
            </header>
            ${cardHtml}
            <footer class="image-foot">
                © IELTS 机考练习系统 · Developed by <strong>Jimmy</strong>
            </footer>
        </div>`;
    }

    // ---------- 视窗内容 ----------
    buildPlaceholderHtml() {
        return `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><title>IELTS 练习记录 · 生成中</title>
            <style>
                body { font-family: Arial, Helvetica, "Microsoft YaHei", sans-serif; background: #f6faf7; color: #14532d; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }
                .loading { text-align: center; }
                .ring { width: 48px; height: 48px; border: 4px solid #d4ead8; border-top-color: #1f7a4d; border-radius: 50%; animation: spin 0.9s linear infinite; margin: 0 auto 16px; }
                @keyframes spin { to { transform: rotate(360deg); } }
                p { font-size: 16px; letter-spacing: 0.04em; }
            </style></head>
            <body><div class="loading"><div class="ring"></div><p>正在生成 PDF,请稍候…</p></div></body></html>`;
    }

    writePlaceholder(printWindow, message) {
        const safe = this.escapeHtml(message);
        printWindow.document.open();
        printWindow.document.write(`<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><title>IELTS 练习记录</title>
            <style>
                body { font-family: Arial, Helvetica, "Microsoft YaHei", sans-serif; background: #f6faf7; color: #14532d; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 24px; }
                p { font-size: 16px; }
            </style></head><body><p>${safe}</p></body></html>`);
        printWindow.document.close();
    }

    replaceWindowContent(printWindow, html) {
        printWindow.document.open();
        printWindow.document.write(html);
        printWindow.document.close();
    }

    // ---------- HTML 构建 ----------
    buildPrintHtml(grouped, totalRecords, opts) {
        const options = opts || {};
        const sortedDates = Object.keys(grouped).sort((a, b) => b.localeCompare(a));
        const exportTime = new Date().toLocaleString('zh-CN', { hour12: false });
        const sectionsHtml = sortedDates.map(date => this.buildDateSection(date, grouped[date])).join('');
        const subtitleHtml = options.subtitle
            ? `<div class="sub-tag">${this.escapeHtml(options.subtitle)}</div>`
            : '';

        return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>IELTS 机考练习记录 · ${this.escapeHtml(new Date().toISOString().slice(0, 10))}</title>
<style>
    :root {
        --ink: #14532d;
        --ink-soft: #2c5a3f;
        --green: #1f7a4d;
        --green-light: #e8f3eb;
        --green-mid: #d4ead8;
        --rule: #bcd8c5;
        --paper: #ffffff;
        --muted: #5b7064;
    }
    * { box-sizing: border-box; }
    html, body {
        margin: 0;
        padding: 0;
        background: #f6faf7;
        color: var(--ink);
        font-family: Arial, Helvetica, "Microsoft YaHei", "PingFang SC", sans-serif;
        font-size: 12pt;
        line-height: 1.55;
    }
    .page {
        background: var(--paper);
        max-width: 820px;
        margin: 24px auto;
        padding: 32px 40px 48px;
        box-shadow: 0 8px 24px rgba(15, 53, 35, 0.08);
        border: 1px solid var(--rule);
        border-radius: 6px;
    }
    header.report-head {
        border-bottom: 3px solid var(--green);
        padding-bottom: 18px;
        margin-bottom: 24px;
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        gap: 16px;
    }
    .brand {
        display: flex;
        align-items: center;
        gap: 14px;
    }
    .brand-logo {
        background: var(--green);
        color: #ffffff;
        font-weight: 800;
        letter-spacing: 0.18em;
        padding: 8px 14px;
        border-radius: 3px;
        border: 2px solid #ffd54a;
        font-size: 11pt;
    }
    .brand-text h1 {
        margin: 0;
        font-size: 18pt;
        color: var(--ink);
        letter-spacing: 0.02em;
    }
    .brand-text .sub {
        font-size: 10pt;
        color: var(--muted);
        margin-top: 2px;
    }
    .sub-tag {
        display: inline-block;
        margin-top: 6px;
        padding: 3px 10px;
        background: var(--green-light);
        color: var(--green);
        font-size: 10pt;
        font-weight: 600;
        letter-spacing: 0.04em;
        border: 1px solid var(--rule);
        border-radius: 3px;
    }
    .meta-table {
        font-size: 10pt;
        color: var(--ink-soft);
        text-align: right;
    }
    .meta-table div { margin: 2px 0; }
    .summary {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 12px;
        background: var(--green-light);
        border: 1px solid var(--rule);
        border-radius: 4px;
        padding: 14px;
        margin-bottom: 28px;
    }
    .summary .cell { text-align: center; }
    .summary .label {
        font-size: 9.5pt;
        color: var(--muted);
        letter-spacing: 0.04em;
        text-transform: uppercase;
    }
    .summary .value {
        font-size: 16pt;
        font-weight: 700;
        color: var(--green);
        margin-top: 4px;
    }
    h2.date-heading {
        font-size: 14pt;
        color: var(--ink);
        background: var(--green-mid);
        border-left: 6px solid var(--green);
        padding: 8px 14px;
        border-radius: 3px;
        margin: 28px 0 14px;
        page-break-after: avoid;
    }
    article.record {
        border: 1px solid var(--rule);
        border-radius: 4px;
        padding: 16px 18px 18px;
        margin-bottom: 16px;
        background: #ffffff;
        page-break-inside: avoid;
    }
    article.record + article.record { margin-top: 14px; }
    .record-head {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 12px;
        margin-bottom: 10px;
        border-bottom: 1px dashed var(--rule);
        padding-bottom: 8px;
    }
    .record-title {
        font-size: 12.5pt;
        font-weight: 700;
        color: var(--ink);
    }
    .record-title .tag {
        display: inline-block;
        background: var(--green);
        color: #ffffff;
        font-size: 9.5pt;
        font-weight: 600;
        padding: 2px 8px;
        margin-right: 6px;
        border-radius: 3px;
        letter-spacing: 0.04em;
    }
    .record-title .tag.freq {
        background: #ffd54a;
        color: var(--ink);
    }
    .record-title .tag.band {
        background: #1f7a4d;
        color: #ffffff;
    }
    /* 套题：逐篇小节 */
    .suite-section {
        margin: 10px 0 14px;
        padding-left: 10px;
        border-left: 3px solid #cfe3d6;
        break-inside: avoid;
        page-break-inside: avoid;
    }
    .suite-section-head {
        display: flex;
        align-items: baseline;
        gap: 8px;
        margin-bottom: 6px;
    }
    .suite-section-title {
        font-size: 10.5pt;
        font-weight: 700;
        color: var(--ink);
        flex: 1 1 auto;
    }
    .suite-section-score {
        font-size: 9.5pt;
        color: var(--green);
        font-weight: 700;
        white-space: nowrap;
    }
    .record-score {
        font-size: 11pt;
        color: var(--green);
        font-weight: 700;
        white-space: nowrap;
    }
    .record-meta {
        font-size: 10pt;
        color: var(--muted);
        margin-bottom: 8px;
    }
    .record-meta span + span::before {
        content: " · ";
        margin: 0 4px;
        color: var(--rule);
    }
    table.answers {
        width: 100%;
        border-collapse: collapse;
        margin-top: 8px;
        font-size: 10.5pt;
    }
    table.answers th, table.answers td {
        border: 1px solid var(--rule);
        padding: 6px 8px;
        text-align: left;
        vertical-align: top;
    }
    table.answers thead th {
        background: var(--green-light);
        color: var(--ink);
        font-weight: 700;
        letter-spacing: 0.02em;
    }
    table.answers td.col-num { width: 60px; text-align: center; font-weight: 600; }
    table.answers td.col-res { width: 60px; text-align: center; font-weight: 700; font-size: 12pt; }
    table.answers td.col-res.ok { color: #1f7a4d; }
    table.answers td.col-res.bad { color: #c0392b; }
    table.answers tr.bad td { background: #fdf2ef; }
    .no-detail {
        margin: 0;
        padding: 8px 12px;
        background: var(--green-light);
        border-left: 3px solid var(--green);
        border-radius: 3px;
        color: var(--muted);
        font-size: 10.5pt;
    }
    footer.report-foot {
        margin-top: 36px;
        padding-top: 16px;
        border-top: 1px dashed var(--rule);
        text-align: center;
        color: var(--muted);
        font-size: 10pt;
    }
    footer.report-foot strong {
        color: var(--green);
        background: var(--green-light);
        padding: 2px 8px;
        border-radius: 3px;
        margin-left: 4px;
    }
    .toolbar {
        position: sticky;
        top: 0;
        z-index: 20;
        background: linear-gradient(180deg, #ffffffee, #ffffffcc);
        backdrop-filter: blur(6px);
        border-bottom: 1px solid var(--rule);
        padding: 10px 20px;
        display: flex;
        justify-content: flex-end;
        gap: 10px;
    }
    .toolbar button {
        background: var(--green);
        color: #ffffff;
        border: 1px solid #14532d;
        font-size: 11pt;
        font-weight: 600;
        padding: 8px 18px;
        border-radius: 4px;
        cursor: pointer;
        letter-spacing: 0.04em;
    }
    .toolbar button.secondary {
        background: #ffffff;
        color: var(--green);
    }
    .toolbar button:hover { filter: brightness(1.08); }

    @page {
        size: A4;
        margin: 14mm 12mm 16mm;
    }
    @media print {
        body { background: #ffffff; }
        .page {
            box-shadow: none;
            border: none;
            margin: 0;
            padding: 0;
            max-width: none;
        }
        .toolbar { display: none; }
        article.record { page-break-inside: avoid; }
        h2.date-heading { page-break-after: avoid; }
    }
</style>
</head>
<body>
<div class="toolbar">
    <button type="button" class="secondary" onclick="window.close()">关闭</button>
    <button type="button" onclick="window.print()">打印 / 另存为 PDF</button>
</div>
<div class="page">
    <header class="report-head">
        <div class="brand">
            <span class="brand-logo">IELTS</span>
            <div class="brand-text">
                <h1>雅思机考练习记录</h1>
                <div class="sub">IELTS Computer-delivered Practice · Personal Report</div>
                ${subtitleHtml}
            </div>
        </div>
        <div class="meta-table">
            <div>导出时间:${this.escapeHtml(exportTime)}</div>
            <div>记录总数:${totalRecords}</div>
            <div>日期跨度:${sortedDates.length} 天</div>
        </div>
    </header>
    ${this.buildSummary(grouped, totalRecords)}
    ${sectionsHtml || '<p class="no-detail">暂无可导出的练习数据。</p>'}
    <footer class="report-foot">
        © IELTS 机考练习系统 · 仅供个人备考使用 · Developed by <strong>Jimmy</strong>
    </footer>
</div>
<script>
    (function () {
        function triggerPrint() {
            try { window.focus(); window.print(); } catch (e) { /* noop */ }
        }
        if (document.readyState === 'complete') {
            setTimeout(triggerPrint, 350);
        } else {
            window.addEventListener('load', function () { setTimeout(triggerPrint, 350); }, { once: true });
        }
    })();
</script>
</body>
</html>`;
    }

    buildSummary(grouped, totalRecords) {
        let totalCorrect = 0;
        let totalQuestions = 0;
        let totalDuration = 0;
        let recordsWithScore = 0;

        Object.values(grouped).forEach(records => {
            records.forEach(record => {
                const metrics = this.markdown.resolveScoreMetrics(record);
                if (metrics.total > 0) {
                    totalCorrect += metrics.correct;
                    totalQuestions += metrics.total;
                    recordsWithScore++;
                }
                if (typeof record.duration === 'number') {
                    totalDuration += record.duration;
                }
            });
        });

        const avgAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
        const totalMinutes = Math.round(totalDuration / 60);
        const dateCount = Object.keys(grouped).length;

        return `<section class="summary">
            <div class="cell"><div class="label">已练记录</div><div class="value">${totalRecords}</div></div>
            <div class="cell"><div class="label">平均正确率</div><div class="value">${avgAccuracy}%</div></div>
            <div class="cell"><div class="label">累计用时</div><div class="value">${totalMinutes} 分</div></div>
            <div class="cell"><div class="label">练习天数</div><div class="value">${dateCount}</div></div>
        </section>`;
    }

    buildDateSection(date, records) {
        const sortedRecords = records.slice().sort((a, b) => {
            const ta = new Date(a.startTime || a.date || 0).getTime();
            const tb = new Date(b.startTime || b.date || 0).getTime();
            return tb - ta;
        });
        const recordsHtml = sortedRecords.map(record => this.buildRecordHtml(record)).join('');
        return `<section class="date-block">
            <h2 class="date-heading">📅 ${this.escapeHtml(date)}</h2>
            ${recordsHtml}
        </section>`;
    }

    buildRecordHtml(record) {
        const metadata = record.metadata || {};
        const title = this.markdown.normalizeTitle(
            metadata.examTitle || metadata.title || record.title || record.examId || '未知题目'
        );
        const category = metadata.category || record.category || 'Unknown';
        const frequency = metadata.frequency || record.frequency || 'unknown';
        const metrics = this.markdown.resolveScoreMetrics(record);
        const startTime = this.formatTime(record.startTime || record.date);
        const duration = typeof record.duration === 'number' ? this.formatDuration(record.duration) : '未记录';

        // 套题记录：按 P1/P2/P3 分篇输出，而不是并成一张扁平表
        const suiteEntries = this.getSuiteEntries(record);
        const hasDetails = this.markdown.hasAnswerDetails(record);
        let bodyHtml;
        if (suiteEntries.length) {
            bodyHtml = this.buildSuiteSectionsHtml(suiteEntries);
        } else if (hasDetails) {
            bodyHtml = this.buildAnswerTableHtml(record);
        } else {
            bodyHtml = `<p class="no-detail">本次记录没有题级答题对比数据。<br>分数 ${metrics.correct}/${metrics.total} · 正确率 ${metrics.percentage}% · 用时 ${duration}。</p>`;
        }

        const bandLabel = record.ieltsBandLabel || metadata.ieltsBandLabel || '';
        const bandHtml = bandLabel
            ? `<span class="tag band">雅思 ${this.escapeHtml(bandLabel)}</span>`
            : '';
        const suiteMetaHtml = suiteEntries.length
            ? `<span>篇数:${suiteEntries.length}</span>`
            : '';

        return `<article class="record">
            <div class="record-head">
                <div class="record-title">
                    <span class="tag">${this.escapeHtml(category)}</span>
                    <span class="tag freq">${this.escapeHtml(frequency)}</span>
                    ${bandHtml}
                    ${this.escapeHtml(title)}
                </div>
                <div class="record-score">${metrics.correct}/${metrics.total} · ${metrics.percentage}%</div>
            </div>
            <div class="record-meta">
                <span>开始时间:${this.escapeHtml(startTime)}</span>
                <span>用时:${this.escapeHtml(duration)}</span>
                <span>题目数:${metrics.total}</span>
                ${suiteMetaHtml}
            </div>
            ${bodyHtml}
        </article>`;
    }

    getSuiteEntries(record) {
        if (!record || !Array.isArray(record.suiteEntries)) {
            return [];
        }
        return record.suiteEntries.filter(Boolean);
    }

    /** 套题：逐篇渲染标题 + 该篇得分 + 该篇答题表 */
    buildSuiteSectionsHtml(suiteEntries) {
        return suiteEntries.map((entry, index) => {
            const score = entry.scoreInfo || {};
            const correct = Number(score.correct) || 0;
            const total = Number(score.total) || 0;
            const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;
            const category = entry.category || ('Part ' + (index + 1));
            const title = entry.title || entry.examId || ('第 ' + (index + 1) + ' 篇');
            const duration = typeof entry.duration === 'number' ? this.formatDuration(entry.duration) : '未记录';

            // 每篇自带 answerComparison / answers，可直接复用单篇渲染
            const entryRecord = Object.assign({}, entry, { metadata: { examTitle: title, category } });
            const detail = this.markdown.hasAnswerDetails(entryRecord)
                ? this.buildAnswerTableHtml(entryRecord)
                : '<p class="no-detail">本篇没有题级答题对比数据。</p>';

            return `<section class="suite-section">
                <div class="suite-section-head">
                    <span class="tag">${this.escapeHtml(category)}</span>
                    <span class="suite-section-title">${this.escapeHtml(title)}</span>
                    <span class="suite-section-score">${correct}/${total} · ${percentage}% · ${this.escapeHtml(duration)}</span>
                </div>
                ${detail}
            </section>`;
        }).join('');
    }

    buildAnswerTableHtml(record) {
        const realData = record.realData || {};
        const comparison = record.answerComparison || realData.answerComparison || null;
        const hasComparison = comparison && Object.keys(comparison).length > 0;

        let rows = [];
        if (hasComparison) {
            const merged = this.markdown.mergeComparisonWithCorrections({ ...record, answerComparison: comparison });
            rows = this.rowsFromComparison(merged, record);
        } else {
            rows = this.rowsFromAnswers(record);
        }

        if (rows.length === 0) {
            return '<p class="no-detail">未能解析出题级答题数据。</p>';
        }

        const rowsHtml = rows.map(row => {
            const isCorrect = !!row.isCorrect;
            const resultMark = isCorrect ? '✓' : '✗';
            return `<tr${isCorrect ? '' : ' class="bad"'}>
                <td class="col-num">${this.escapeHtml(String(row.questionNum))}</td>
                <td>${this.escapeHtml(row.userAnswer || 'No Answer')}</td>
                <td>${this.escapeHtml(row.correctAnswer || 'N/A')}</td>
                <td class="col-res ${isCorrect ? 'ok' : 'bad'}">${resultMark}</td>
            </tr>`;
        }).join('');

        return `<table class="answers">
            <thead><tr>
                <th>题号</th><th>你的答案</th><th>正确答案</th><th>结果</th>
            </tr></thead>
            <tbody>${rowsHtml}</tbody>
        </table>`;
    }

    rowsFromComparison(answerComparison, record) {
        const noise = new Set(['volume-slider', 'playback-speed', 'playbackspeed', 'volume']);
        const correctMap = record ? this.markdown.getCorrectAnswers(record) : {};

        return Object.keys(answerComparison)
            .filter(k => !noise.has(k))
            .filter(k => {
                const entry = answerComparison[k];
                return entry && (entry.userAnswer || entry.correctAnswer);
            })
            .sort((a, b) => {
                const na = parseInt(a.replace(/\D/g, '')) || 0;
                const nb = parseInt(b.replace(/\D/g, '')) || 0;
                return na - nb;
            })
            .slice(0, 60)
            .map(key => {
                const entry = answerComparison[key] || {};
                let questionNum = key.replace(/\D/g, '');
                if (!questionNum) questionNum = key.replace(/^q/i, '');
                const userAnswer = entry.userAnswer || entry.user || '';
                const correctAnswer = entry.correctAnswer || entry.correct || correctMap[key] || '';
                return {
                    questionNum,
                    userAnswer: this.markdown.cleanAnswerText(userAnswer) || '',
                    correctAnswer: this.markdown.cleanAnswerText(correctAnswer) || '',
                    isCorrect: !!entry.isCorrect
                };
            });
    }

    rowsFromAnswers(record) {
        const realData = record.realData || {};
        const answers = record.answers || realData.answers || {};
        const correctAnswers = this.markdown.getCorrectAnswers(record) || {};
        const questionNumbers = this.markdown.extractQuestionNumbers(answers, correctAnswers, {});

        return questionNumbers.slice(0, 60).map(qNum => {
            const userAnswer = this.markdown.getUserAnswer(answers, qNum);
            const correctAnswer = this.markdown.getCorrectAnswer(correctAnswers, qNum);
            const isCorrect = this.markdown.compareAnswers(userAnswer, correctAnswer);
            return {
                questionNum: qNum,
                userAnswer: this.markdown.cleanAnswerText(userAnswer) || '',
                correctAnswer: this.markdown.cleanAnswerText(correctAnswer) || '',
                isCorrect
            };
        });
    }

    // ---------- 工具 ----------
    formatTime(value) {
        if (!value) return '未记录';
        const d = new Date(value);
        if (isNaN(d.getTime())) return String(value);
        const pad = n => (n < 10 ? '0' + n : '' + n);
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
    }

    formatDuration(seconds) {
        if (!seconds || seconds < 0) return '0 秒';
        const total = Math.round(seconds);
        const m = Math.floor(total / 60);
        const s = total % 60;
        if (m === 0) return `${s} 秒`;
        return `${m} 分 ${s} 秒`;
    }

    escapeHtml(value) {
        if (value == null) return '';
        return String(value)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}

window.PdfExporter = PdfExporter;
