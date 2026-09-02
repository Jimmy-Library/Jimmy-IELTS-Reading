/** Configurable mouse icons and canvas trails for the skin drawer. */
(function (global) {
    'use strict';
    if (global.__READING_ORIGINAL_UI__ || /reading-practice-unified\.html$/i.test((global.location && global.location.pathname) || '')) return;

    var KEY = 'skin_pointer_settings_v2';
    var DEFAULTS_VERSION = 1;
    var DB = 'jimmy_image_skin_cache';
    var STORE = 'assets';
    var IMAGE_KEY = 'custom-pointer-icon';
    var currentScript = document.currentScript;
    var appRoot = currentScript ? new URL('../../', currentScript.src) : new URL('./', global.location.href);
    var reduced = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var fine = global.matchMedia && global.matchMedia('(hover:hover) and (pointer:fine)').matches;
    var styles = ['halo', 'sparkle', 'bubble', 'ribbon', 'custom', 'cat-1', 'cat-2', 'cat-3', 'cat-4', 'cat-5'];
    var cats = {
        'cat-1': { name: '蓝帽暹罗', file: 'cat-cursor-1.png', color: '#4169b1', effect: 'halo' },
        'cat-2': { name: '躺躺橘猫', file: 'cat-cursor-2.png', color: '#c9853f', effect: 'ribbon' },
        'cat-3': { name: '翻肚灰猫', file: 'cat-cursor-3.png', color: '#d09a4e', effect: 'sparkle' },
        'cat-4': { name: '趴睡黑猫', file: 'cat-cursor-4.png', color: '#76678f', effect: 'bubble' },
        'cat-5': { name: '蓝眼暹罗', file: 'cat-cursor-5.png', color: '#5778bd', effect: 'sparkle' }
    };
    var settings = read();
    if (cats[settings.style] && settings.size < 30) settings.size = 30;
    var canvas, ctx, icon, panel, raf = 0, moveRaf = 0, points = [], x = -100, y = -100, visible = false, actionable = false, last = 0, dpr = 1, objectUrl = '', resizeBound = false;

    function clamp(value, min, max) { value = Number(value); return Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : min; }
    function read() {
        var value = {};
        try { value = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (_) {}
        var migrated = Number(value.defaultsVersion) === DEFAULTS_VERSION;
        return {
            enabled: value.enabled !== false,
            trailEnabled: migrated ? value.trailEnabled === true : false,
            style: styles.indexOf(value.style) >= 0 ? value.style : 'halo',
            size: clamp(value.size == null ? 32 : value.size, 18, 72),
            defaultsVersion: DEFAULTS_VERSION
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

    function optimizePointerImage(blob) {
        return new Promise(function (resolve) {
            if (!blob || !/^image\//i.test(blob.type || '')) return resolve(blob);
            var url = URL.createObjectURL(blob);
            var image = new Image();
            image.onload = function () {
                var maxSide = 192;
                var scale = Math.min(1, maxSide / Math.max(image.naturalWidth || 1, image.naturalHeight || 1));
                if (scale === 1 && blob.size <= 256 * 1024) {
                    URL.revokeObjectURL(url);
                    return resolve(blob);
                }
                var canvasEl = document.createElement('canvas');
                canvasEl.width = Math.max(1, Math.round(image.naturalWidth * scale));
                canvasEl.height = Math.max(1, Math.round(image.naturalHeight * scale));
                var imageContext = canvasEl.getContext('2d', { alpha: true });
                imageContext.clearRect(0, 0, canvasEl.width, canvasEl.height);
                imageContext.drawImage(image, 0, 0, canvasEl.width, canvasEl.height);
                URL.revokeObjectURL(url);
                canvasEl.toBlob(function (optimized) {
                    canvasEl.width = 1;
                    canvasEl.height = 1;
                    resolve(optimized || blob);
                }, 'image/webp', .86);
            };
            image.onerror = function () {
                URL.revokeObjectURL(url);
                resolve(blob);
            };
            image.src = url;
        });
    }
    function stage() {
        if (!icon) {
            icon = document.createElement('i');
            icon.id = 'skin-pointer-icon';
            icon.setAttribute('aria-hidden', 'true');
            document.body.appendChild(icon);
        }
        if (!settings.trailEnabled || canvas) return;
        canvas = document.createElement('canvas');
        canvas.id = 'skin-pointer-canvas';
        canvas.setAttribute('aria-hidden', 'true');
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d', { alpha: true });
        if (!resizeBound) {
            global.addEventListener('resize', resize, { passive: true });
            resizeBound = true;
        }
        resize();
    }
    function resize() {
        if (!canvas || !ctx || !settings.trailEnabled) return;
        dpr = Math.min(global.devicePixelRatio || 1, 1.5);
        canvas.hidden = false;
        canvas.width = Math.round(global.innerWidth * dpr);
        canvas.height = Math.round(global.innerHeight * dpr);
        canvas.style.width = global.innerWidth + 'px';
        canvas.style.height = global.innerHeight + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    function releaseTrailCanvas() {
        if (raf) global.cancelAnimationFrame(raf);
        raf = 0;
        last = 0;
        points.length = 0;
        if (!canvas) return;
        canvas.hidden = true;
        canvas.width = 1;
        canvas.height = 1;
    }
    function color() { return getComputedStyle(document.documentElement).getPropertyValue('--pointer-trail-color').trim() || getComputedStyle(document.documentElement).getPropertyValue('--skin-accent').trim() || '#6d5bd0'; }

    function drawHalo(paint) { points.forEach(function (point, index) { var life = Math.max(0, 1 - point.age / 520), radius = 2 + life * (4 + index / Math.max(points.length, 1) * 4); ctx.globalAlpha = life * .42; ctx.strokeStyle = paint; ctx.lineWidth = 1.2; ctx.beginPath(); ctx.arc(point.x, point.y, radius, 0, Math.PI * 2); ctx.stroke(); }); }
    function drawSparkle(paint) { points.forEach(function (point, index) { var life = Math.max(0, 1 - point.age / 650), radius = 2 + life * (3 + index % 3); ctx.globalAlpha = life * .76; ctx.fillStyle = paint; ctx.save(); ctx.translate(point.x, point.y); ctx.rotate(point.age * .004 + index); ctx.beginPath(); for (var i = 0; i < 8; i++) { var r = i % 2 ? radius * .32 : radius, angle = Math.PI / 4 * i - Math.PI / 2; if (!i) ctx.moveTo(Math.cos(angle) * r, Math.sin(angle) * r); else ctx.lineTo(Math.cos(angle) * r, Math.sin(angle) * r); } ctx.closePath(); ctx.fill(); ctx.restore(); }); }
    function drawBubble(paint) { points.forEach(function (point, index) { var life = Math.max(0, 1 - point.age / 820), radius = 2 + (1 - life) * 7 + index % 3; ctx.globalAlpha = life * .46; ctx.strokeStyle = paint; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(point.x, point.y - (1 - life) * 9, radius, 0, Math.PI * 2); ctx.stroke(); }); }
    function drawRibbon(paint) { if (points.length < 2) return; var gradient = ctx.createLinearGradient(points[0].x, points[0].y, points[points.length - 1].x, points[points.length - 1].y); gradient.addColorStop(0, 'rgba(255,255,255,0)'); gradient.addColorStop(1, paint); ctx.globalAlpha = .58; ctx.strokeStyle = gradient; ctx.lineWidth = 5; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y); for (var i = 1; i < points.length - 1; i++) ctx.quadraticCurveTo(points[i].x, points[i].y, (points[i].x + points[i + 1].x) / 2, (points[i].y + points[i + 1].y) / 2); ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y); ctx.stroke(); }
    function render(time) {
        raf = 0;
        if (!settings.trailEnabled || !ctx || document.hidden) return;
        if (last && time - last < 28) {
            raf = global.requestAnimationFrame(render);
            return;
        }
        var mode = effect(), delta = last ? Math.min(40, time - last) : 33.3, paint = color(), writeIndex = 0;
        last = time;
        var maxAge = mode === 'bubble' ? 820 : mode === 'sparkle' ? 650 : mode === 'ribbon' ? 420 : 520;
        for (var index = 0; index < points.length; index++) {
            var point = points[index];
            point.age += delta;
            if (point.age < maxAge) points[writeIndex++] = point;
        }
        points.length = writeIndex;
        ctx.clearRect(0, 0, global.innerWidth, global.innerHeight);
        if (visible) { if (mode === 'halo') drawHalo(paint); else if (mode === 'sparkle') drawSparkle(paint); else if (mode === 'bubble') drawBubble(paint); else if (mode === 'ribbon') drawRibbon(paint); }
        ctx.globalAlpha = 1;
        if (points.length) raf = global.requestAnimationFrame(render);
    }
    function requestDraw() { if (!raf && settings.trailEnabled && !document.hidden) raf = global.requestAnimationFrame(render); }
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
        if (settings.trailEnabled) {
            stage();
            resize();
        } else {
            releaseTrailCanvas();
        }
        if (!settings.enabled) document.body.classList.remove('skin-pointer-action');
        sync();
    }
    function choose(style) {
        if (styles.indexOf(style) < 0) return;
        settings.style = style; settings.enabled = true; if (cats[style] && settings.size < 30) settings.size = 30; points = []; save(); apply();
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
        panel.querySelector('input[type="file"]').addEventListener('change', function () { var file = this.files && this.files[0]; this.value = ''; if (!file || !/^image\//i.test(file.type)) return status('请选择 PNG、WebP、GIF 或 JPG 图片。', true); if (file.size > 3 * 1024 * 1024) return status('鼠标图片请控制在 3 MB 以内。', true); status('正在优化并保存自定义鼠标图片…'); optimizePointerImage(file).then(function (optimized) { return dbPut(optimized).then(function () { return optimized; }); }).then(function (optimized) { customImage(optimized); choose('custom'); status('自定义鼠标图片已轻量化保存，刷新后仍会应用。'); }).catch(function () { status('图片保存失败，请换一张较小的图片重试。', true); }); });
        sync();
    }

    function drawPointerPosition() {
        moveRaf = 0;
        document.body.classList.add('skin-pointer-visible');
        document.body.classList.toggle('skin-pointer-action', settings.enabled && actionable);
        var scale = actionable ? 1.12 : 1;
        var size = settings.size;
        if (settings.enabled) icon.style.transform = 'translate3d(' + (x - size / 2) + 'px,' + (y - size / 2) + 'px,0) scale(' + scale + ')';
        var nx = x / Math.max(global.innerWidth, 1) - .5;
        var ny = y / Math.max(global.innerHeight, 1) - .5;
        document.documentElement.style.setProperty('--skin-shift-x', (-nx * 12).toFixed(2) + 'px');
        document.documentElement.style.setProperty('--skin-shift-y', (-ny * 8).toFixed(2) + 'px');
    }
    function move(event) {
        if ((!settings.enabled && !settings.trailEnabled) || (event.pointerType && event.pointerType !== 'mouse')) return;
        x = event.clientX;
        y = event.clientY;
        visible = true;
        actionable = Boolean(event.target.closest && event.target.closest('button,a,input,select,textarea,[role="button"],.suite-card,.tool-card'));
        if (!moveRaf) moveRaf = global.requestAnimationFrame(drawPointerPosition);
        if (settings.trailEnabled) {
            if (!canvas || canvas.hidden) {
                stage();
                resize();
            }
            var previous = points[points.length - 1];
            if (!previous || Math.hypot(x - previous.x, y - previous.y) > 8) points.push({ x: x, y: y, age: 0 });
            if (points.length > 24) points.shift();
            requestDraw();
        }
    }
    function init() {
        if (!fine || reduced) return;
        build();
        save();
        apply();
        document.addEventListener('pointermove', move, { passive: true });
        document.documentElement.addEventListener('mouseleave', function () {
            visible = false;
            document.body.classList.remove('skin-pointer-visible', 'skin-pointer-action');
        });
        document.addEventListener('visibilitychange', function () {
            if (!document.hidden) return;
            visible = false;
            if (moveRaf) global.cancelAnimationFrame(moveRaf);
            moveRaf = 0;
            releaseTrailCanvas();
            document.body.classList.remove('skin-pointer-visible', 'skin-pointer-action');
        });
        dbGet().then(function (blob) {
            if (!blob) return;
            return optimizePointerImage(blob).then(function (optimized) {
                customImage(optimized);
                if (optimized !== blob) return dbPut(optimized);
            });
        }).catch(function () {});
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
    global.PointerSkins = { enable: function (value) { settings.enabled = !!value; save(); apply(); }, enableTrail: function (value) { settings.trailEnabled = !!value; save(); apply(); }, setStyle: choose, settings: function () { return Object.assign({}, settings); } };
})(typeof window !== 'undefined' ? window : this);