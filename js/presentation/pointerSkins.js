/** Configurable mouse icons and canvas trails for the skin drawer. */
(function (global) {
    'use strict';
    if (global.__READING_ORIGINAL_UI__ || /reading-practice-unified\.html$/i.test((global.location && global.location.pathname) || '')) return;

    var KEY = 'skin_pointer_settings_v2';
    var DB = 'jimmy_image_skin_cache';
    var STORE = 'assets';
    var IMAGE_KEY = 'custom-pointer-icon';
    var currentScript = document.currentScript;
    var appRoot = currentScript ? new URL('../../', currentScript.src) : new URL('./', global.location.href);
    var reduced = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = global.matchMedia && global.matchMedia('(hover:hover) and (pointer:fine)').matches;
    var styles = ['halo', 'sparkle', 'bubble', 'ribbon', 'custom', 'cat-1', 'cat-2', 'cat-3', 'cat-4', 'cat-5'];
    var cats = {
        'cat-1': { name: '坐坐猫', file: 'cat-cursor-1.png', color: '#c78a4e', effect: 'halo' },
        'cat-2': { name: '散步猫', file: 'cat-cursor-2.png', color: '#5f9b83', effect: 'ribbon' },
        'cat-3': { name: '开心猫', file: 'cat-cursor-3.png', color: '#df7958', effect: 'sparkle' },
        'cat-4': { name: '铃铛猫', file: 'cat-cursor-4.png', color: '#cf6888', effect: 'bubble' },
        'cat-5': { name: '打滚猫', file: 'cat-cursor-5.png', color: '#6685cf', effect: 'sparkle' }
    };
    var settings = read();
    var canvas, ctx, icon, panel, raf = 0, points = [], x = -100, y = -100, visible = false, last = 0, dpr = 1, objectUrl = '';

    function clamp(value, min, max) { value = Number(value); return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : min; }
    function read() {
        var value = {};
        try { value = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (_) {}
        return {
            enabled: value.enabled !== false,
            trailEnabled: value.trailEnabled !== false,
            style: styles.indexOf(value.style) >= 0 ? value.style : 'halo',
            size: clamp(value.size == null ? 32 : value.size, 18, 72)
        };
    }
    function save() { try { localStorage.setItem(KEY, JSON.stringify(settings)); } catch (_) {} }
    function catUrl(style) { return cats[style] ? new URL('assets/cursors/' + cats[style].file, appRoot).href : ''; }
    function effect() { return cats[settings.style] ? cats[settings.style].effect : settings.style === 'custom' ? 'halo' : settings.style; }

    function dbOpen() { return new Promise(function (resolve, reject) { if (!global.indexedDB) return reject(); var request = indexedDB.open(DB, 1); request.onupgradeneeded = function () { if (!request.result.objectStoreNames.contains(STORE)) request.result.createObjectStore(STORE); }; request.onsuccess = function () { resolve(request.result); }; request.onerror = function () { reject(request.error); }; }); }
    function dbPut(blob) { return dbOpen().then(function (db) { return new Promise(function (resolve, reject) { var tx = db.transaction(STORE, 'readwrite'); tx.objectStore(STORE).put(blob, IMAGE_KEY); tx.oncomplete = function () { db.close(); resolve(); }; tx.onerror = function () { db.close(); reject(tx.error); }; }); }); }
    function dbGet() { return dbOpen().then(function (db) { return new Promise(function (resolve, reject) { var request = db.transaction(STORE).objectStore(STORE).get(IMAGE_KEY); request.onsuccess = function () { db.close(); resolve(request.result || null); }; request.onerror = function () { db.close(); reject(request.error); }; }); }); }

    function status(text, error) { var el = panel && panel.querySelector('.skin-pointer-status'); if (el) { el.textContent = text; el.classList.toggle('is-error', !!error); } }
    function customImage(blob) {
        if (!blob || !icon) return;
        if (objectUrl) URL.revokeObjectURL(objectUrl);
        objectUrl = URL.createObjectURL(blob);
        var url = 'url("' + objectUrl.replace(/"/g, '%22') + '")';
        icon.style.setProperty('--pointer-custom-image', url);
        icon.style.setProperty('--pointer-custom-empty', 'none');
        var preview = panel && panel.querySelector('[data-pointer-style="custom"] .skin-pointer-preset__icon');
        if (preview) { preview.style.backgroundImage = url; preview.style.backgroundSize = 'contain'; preview.style.backgroundPosition = 'center'; preview.style.backgroundRepeat = 'no-repeat'; preview.textContent = ''; }
    }

    function stage() {
        if (canvas) return;
        canvas = document.createElement('canvas'); canvas.id = 'skin-pointer-canvas'; canvas.setAttribute('aria-hidden', 'true');
        icon = document.createElement('i'); icon.id = 'skin-pointer-icon'; icon.setAttribute('aria-hidden', 'true');
        document.body.appendChild(canvas); document.body.appendChild(icon); ctx = canvas.getContext('2d'); resize();
        global.addEventListener('resize', resize, { passive: true });
    }
    function resize() { if (!canvas) return; dpr = Math.min(global.devicePixelRatio || 1, 2); canvas.width = Math.round(global.innerWidth * dpr); canvas.height = Math.round(global.innerHeight * dpr); canvas.style.width = global.innerWidth + 'px'; canvas.style.height = global.innerHeight + 'px'; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
    function color() { return getComputedStyle(document.documentElement).getPropertyValue('--pointer-trail-color').trim() || getComputedStyle(document.documentElement).getPropertyValue('--skin-accent').trim() || '#6d5bd0'; }

    function drawHalo() { points.forEach(function (point, index) { var life = Math.max(0, 1 - point.age / 520), radius = 2 + life * (4 + index / Math.max(points.length, 1) * 4); ctx.globalAlpha = life * .42; ctx.strokeStyle = color(); ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(point.x, point.y, radius, 0, Math.PI * 2); ctx.stroke(); }); }
    function drawSparkle() { points.forEach(function (point, index) { var life = Math.max(0, 1 - point.age / 650), radius = 2 + life * (3 + index % 3); ctx.globalAlpha = life * .76; ctx.fillStyle = color(); ctx.save(); ctx.translate(point.x, point.y); ctx.rotate(point.age * .004 + index); ctx.beginPath(); for (var i = 0; i < 8; i++) { var r = i % 2 ? radius * .32 : radius, angle = Math.PI / 4 * i - Math.PI / 2; if (!i) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r); else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r); } ctx.closePath(); ctx.fill(); ctx.restore(); }); }
    function drawBubble() { points.forEach(function (point, index) { var life = Math.max(0, 1 - point.age / 820), radius = 2 + (1 - life) * 7 + index % 3; ctx.globalAlpha = life * .46; ctx.strokeStyle = color(); ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(point.x, point.y - (1 - life) * 9, radius, 0, Math.PI * 2); ctx.stroke(); }); }
    function drawRibbon() { if (points.length < 2) return; var gradient = ctx.createLinearGradient(points[0].x, points[0].y, points[points.length - 1].x, points[points.length - 1].y); gradient.addColorStop(0, 'rgba(255,255,255,0)'); gradient.addColorStop(1, color()); ctx.globalAlpha = .58; ctx.strokeStyle = gradient; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y); for (var i = 1; i < points.length - 1; i++) ctx.quadraticCurveTo(points[i].x, points[i].y, (points[i].x + points[i + 1].x) / 2, (points[i].y + points[i + 1].y) / 2); ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y); ctx.stroke(); }
    function render(time) {
        raf = 0;
        if (!settings.trailEnabled || !ctx) return;
        var mode = effect(), delta = last ? Math.min(34, time - last) : 16.7; last = time;
        points.forEach(function (point) { point.age += delta; });
        var maxAge = mode === 'bubble' ? 820 : mode === 'sparkle' ? 650 : mode === 'ribbon' ? 420 : 520;
        points = points.filter(function (point) { return point.age < maxAge; });
        ctx.clearRect(0, 0, global.innerWidth, global.innerHeight);
        if (visible) { if (mode === 'halo') drawHalo(); else if (mode === 'sparkle') drawSparkle(); else if (mode === 'bubble') drawBubble(); else if (mode === 'ribbon') drawRibbon(); }
        ctx.globalAlpha = 1;
        if (points.length) raf = global.requestAnimationFrame(render);
    }
    function requestDraw() { if (!raf && settings.trailEnabled) raf = global.requestAnimationFrame(render); }

    function sync() {
        if (!panel) return;
        panel.dataset.style = settings.style;
        var pointerToggle = panel.querySelector('[data-pointer-toggle]');
        var trailToggle = panel.querySelector('[data-pointer-trail-toggle]');
        pointerToggle.setAttribute('aria-checked', settings.enabled ? 'true' : 'false');
        pointerToggle.setAttribute('aria-label', settings.enabled ? '关闭鼠标图标' : '打开鼠标图标');
        trailToggle.setAttribute('aria-checked', settings.trailEnabled ? 'true' : 'false');
        trailToggle.setAttribute('aria-label', settings.trailEnabled ? '关闭轨迹动画' : '打开轨迹动画');
        panel.querySelectorAll('[data-pointer-style]').forEach(function (button) { var active = button.dataset.pointerStyle === settings.style; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', active ? 'true' : 'false'); });
        panel.querySelector('[data-pointer-size]').value = settings.size;
        panel.querySelector('[data-pointer-size-output]').textContent = settings.size + 'px';
    }
    function apply() {
        stage();
        var cat = cats[settings.style];
        document.body.classList.toggle('skin-pointer-enabled', settings.enabled);
        document.body.classList.toggle('skin-pointer-visible', settings.enabled && visible);
        document.body.classList.toggle('skin-pointer-trail-enabled', settings.trailEnabled);
        icon.dataset.style = settings.style;
        icon.style.setProperty('--pointer-size', settings.size + 'px');
        icon.style.setProperty('--pointer-cat-image', cat ? 'url("' + catUrl(settings.style) + '")' : 'none');
        if (cat) document.documentElement.style.setProperty('--pointer-trail-color', cat.color); else document.documentElement.style.removeProperty('--pointer-trail-color');
        if (!settings.trailEnabled) { points = []; ctx.clearRect(0, 0, global.innerWidth, global.innerHeight); }
        if (!settings.enabled) document.body.classList.remove('skin-pointer-action');
        sync();
    }
    function choose(style) {
        if (styles.indexOf(style) < 0) return;
        settings.style = style; settings.enabled = true; points = []; save(); apply();
        status(cats[style] ? '已选择' + cats[style].name + '，并搭配协调色轨迹。' : style === 'custom' ? '上传透明背景图片，效果会实时显示并保存在本机。' : '已应用新的鼠标图标与追踪轨迹。');
    }
    function card(id, name, glyph) { return '<button type="button" class="skin-pointer-preset" data-pointer-style="' + id + '" aria-label="使用' + name + '鼠标效果"><i class="skin-pointer-preset__icon">' + glyph + '</i><span class="skin-pointer-preset__name">' + name + '</span></button>'; }

    function build() {
        var drawer = document.querySelector('#image-skin-panel .skin-drawer');
        if (!drawer || drawer.querySelector('.skin-pointer-workbench')) return;
        panel = document.createElement('section'); panel.className = 'skin-pointer-workbench';
        panel.innerHTML = '<div class="skin-pointer-head"><span class="skin-pointer-title"><b>鼠标图标</b><small>猫咪与图标可独立开启</small></span><button type="button" class="skin-pointer-toggle" role="switch" data-pointer-toggle></button></div>' +
            '<div class="skin-pointer-presets">' + card('halo', '柔光环', '◎') + card('sparkle', '星屑', '✦') + card('bubble', '泡泡', '◉') + card('ribbon', '霓虹带', '◆') + card('custom', '自定义', '＋') + card('cat-1', cats['cat-1'].name, '') + card('cat-2', cats['cat-2'].name, '') + card('cat-3', cats['cat-3'].name, '') + card('cat-4', cats['cat-4'].name, '') + card('cat-5', cats['cat-5'].name, '') + '</div>' +
            '<div class="skin-pointer-trail-row"><span>轨迹动画<small>关闭后只显示鼠标图标</small></span><button type="button" class="skin-pointer-toggle" role="switch" data-pointer-trail-toggle></button></div>' +
            '<div class="skin-pointer-custom"><label class="skin-pointer-upload"><input type="file" accept="image/png,image/webp,image/gif,image/jpeg"><span>上传鼠标图片</span></label><label class="skin-pointer-size"><span>图标大小 <output data-pointer-size-output></output></span><input type="range" min="18" max="72" step="1" data-pointer-size></label></div>' +
            '<div class="skin-pointer-status" role="status">透明 PNG 或 WebP 效果最佳，最大 3 MB。</div>';
        drawer.appendChild(panel);
        Object.keys(cats).forEach(function (id) { var preview = panel.querySelector('[data-pointer-style="' + id + '"] .skin-pointer-preset__icon'); if (preview) { preview.style.backgroundImage = 'url("' + catUrl(id) + '")'; preview.style.backgroundSize = 'contain'; preview.style.backgroundPosition = 'center'; preview.style.backgroundRepeat = 'no-repeat'; } });
        panel.querySelector('[data-pointer-toggle]').addEventListener('click', function () { settings.enabled = !settings.enabled; save(); apply(); status(settings.enabled ? '鼠标图标已打开。' : (settings.trailEnabled ? '鼠标图标已关闭，轨迹动画继续显示。' : '鼠标图标已关闭。')); });
        panel.querySelector('[data-pointer-trail-toggle]').addEventListener('click', function () { settings.trailEnabled = !settings.trailEnabled; save(); apply(); status(settings.trailEnabled ? '轨迹动画已打开。' : '轨迹动画已关闭，鼠标图标继续显示。'); });
        panel.querySelectorAll('[data-pointer-style]').forEach(function (button) { button.addEventListener('click', function () { choose(button.dataset.pointerStyle); }); });
        panel.querySelector('[data-pointer-size]').addEventListener('input', function () { settings.size = clamp(this.value, 18, 72); save(); apply(); });
        panel.querySelector('input[type="file"]').addEventListener('change', function () { var file = this.files && this.files[0]; this.value = ''; if (!file || !/^image\//i.test(file.type)) return status('请选择 PNG、WebP、GIF 或 JPG 图片。', true); if (file.size > 3 * 1024 * 1024) return status('鼠标图片请控制在 3 MB 以内。', true); status('正在保存自定义鼠标图片…'); dbPut(file).then(function () { customImage(file); choose('custom'); status('自定义鼠标图片已保存，刷新后仍会应用。'); }).catch(function () { status('图片保存失败，请换一张较小的图片重试。', true); }); });
        sync();
    }

    function move(event) {
        if ((!settings.enabled && !settings.trailEnabled) || (event.pointerType && event.pointerType !== 'mouse')) return;
        x = event.clientX; y = event.clientY; visible = true; document.body.classList.add('skin-pointer-visible');
        var actionable = event.target.closest && event.target.closest('button,a,input,select,textarea,[role="button"],.suite-card,.tool-card');
        document.body.classList.toggle('skin-pointer-action', !!actionable);
        var scale = actionable ? 1.18 : 1, size = settings.size;
        if (settings.enabled) icon.style.transform = 'translate3d(' + (x - size / 2) + 'px,' + (y - size / 2) + 'px,0) scale(' + scale + ')';
        if (settings.trailEnabled) { var previous = points[points.length - 1]; if (!previous || Math.hypot(x - previous.x, y - previous.y) > 5) points.push({ x: x, y: y, age: 0 }); if (points.length > 34) points.shift(); requestDraw(); }
        var nx = x / Math.max(global.innerWidth, 1) - .5, ny = y / Math.max(global.innerHeight, 1) - .5;
        document.documentElement.style.setProperty('--skin-shift-x', (-nx * 12).toFixed(2) + 'px');
        document.documentElement.style.setProperty('--skin-shift-y', (-ny * 8).toFixed(2) + 'px');
    }
    function init() {
        if (!fine || reduced) return;
        stage(); build(); apply();
        document.addEventListener('pointermove', move, { passive: true });
        document.documentElement.addEventListener('mouseleave', function () { visible = false; document.body.classList.remove('skin-pointer-visible', 'skin-pointer-action'); });
        document.addEventListener('visibilitychange', function () { if (document.hidden) { visible = false; points = []; document.body.classList.remove('skin-pointer-visible'); } });
        dbGet().then(function (blob) { if (blob) customImage(blob); }).catch(function () {});
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
    global.PointerSkins = { enable: function (value) { settings.enabled = !!value; save(); apply(); }, enableTrail: function (value) { settings.trailEnabled = !!value; save(); apply(); }, setStyle: choose, settings: function () { return Object.assign({}, settings); } };
})(typeof window !== 'undefined' ? window : this);