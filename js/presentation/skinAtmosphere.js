/** Lightweight atmosphere effects for the image skin switcher. */
(function skinAtmosphereModule(global) {
    'use strict';
    if (global.__READING_ORIGINAL_UI__ || /reading-practice-unified\.html$/i.test(global.location && global.location.pathname || '')) {
        document.documentElement.removeAttribute('data-image-skin');
        document.documentElement.removeAttribute('data-theme');
        return;
    }

    var STORAGE_KEY = 'season_weather';
    var reducedMotion = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var state = {
        mode: 'none',
        canvas: null,
        ctx: null,
        particles: [],
        raf: 0,
        width: 0,
        height: 0,
        dpr: 1,
        lastTime: 0
    };

    function random(min, max) { return min + Math.random() * (max - min); }

    function ensureCanvas() {
        if (state.canvas) return state.canvas;
        var canvas = document.createElement('canvas');
        canvas.id = 'skin-atmosphere-canvas';
        canvas.setAttribute('aria-hidden', 'true');
        document.body.appendChild(canvas);
        state.canvas = canvas;
        state.ctx = canvas.getContext('2d');
        resize();
        global.addEventListener('resize', resize, { passive: true });
        return canvas;
    }

    function resize() {
        if (!state.canvas) return;
        state.dpr = Math.min(global.devicePixelRatio || 1, 2);
        state.width = global.innerWidth;
        state.height = global.innerHeight;
        state.canvas.width = Math.round(state.width * state.dpr);
        state.canvas.height = Math.round(state.height * state.dpr);
        state.canvas.style.width = state.width + 'px';
        state.canvas.style.height = state.height + 'px';
        state.ctx.setTransform(state.dpr, 0, 0, state.dpr, 0, 0);
        buildParticles(state.mode);
    }

    function resetMeteor(particle, initial) {
        particle.x = random(-state.width * .12, state.width * .72);
        particle.y = initial ? random(-state.height * .2, state.height * .5) : random(-180, -30);
        particle.speed = random(7, 13);
        particle.length = random(60, 145);
        particle.life = random(.45, 1);
        particle.delay = initial ? random(0, 130) : random(24, 190);
    }

    function buildParticles(mode) {
        if (!state.width || !state.height) return;
        if (mode === 'meteor') {
            state.particles = Array.from({ length: 15 }, function () {
                var particle = {};
                resetMeteor(particle, true);
                return particle;
            });
        } else if (mode === 'petals') {
            var count = Math.min(70, Math.max(34, Math.round(state.width * state.height / 26000)));
            var colors = ['#f9a8d4', '#fbcfe8', '#fda4af', '#fff1f2', '#f472b6'];
            state.particles = Array.from({ length: count }, function () {
                return {
                    x: random(0, state.width),
                    y: random(-state.height, state.height),
                    size: random(5, 11),
                    vx: random(-.35, .65),
                    vy: random(.55, 1.45),
                    angle: random(0, Math.PI * 2),
                    spin: random(-.025, .025),
                    sway: random(0, Math.PI * 2),
                    color: colors[Math.floor(Math.random() * colors.length)]
                };
            });
        } else {
            state.particles = [];
        }
    }

    function drawMeteor(ctx, particle, scale) {
        if (particle.delay > 0) {
            particle.delay -= scale;
            return;
        }
        var dx = particle.speed * scale;
        var dy = particle.speed * .63 * scale;
        particle.x += dx;
        particle.y += dy;
        particle.life -= .005 * scale;
        var trailX = particle.x - particle.length * .84;
        var trailY = particle.y - particle.length * .53;
        var gradient = ctx.createLinearGradient(trailX, trailY, particle.x, particle.y);
        gradient.addColorStop(0, 'rgba(255,255,255,0)');
        gradient.addColorStop(.72, 'rgba(255,255,255,.42)');
        gradient.addColorStop(1, 'rgba(255,255,255,.98)');
        ctx.globalAlpha = Math.max(0, Math.min(1, particle.life));
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(trailX, trailY);
        ctx.lineTo(particle.x, particle.y);
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.shadowColor = getComputedStyle(document.documentElement).getPropertyValue('--skin-accent').trim() || '#93c5fd';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
        if (particle.life <= 0 || particle.x > state.width + 160 || particle.y > state.height + 100) resetMeteor(particle, false);
    }

    function drawPetal(ctx, petal, scale) {
        petal.sway += .012 * scale;
        petal.angle += petal.spin * scale;
        petal.x += (petal.vx + Math.sin(petal.sway) * .55) * scale;
        petal.y += petal.vy * scale;
        if (petal.y > state.height + 20) { petal.y = -20; petal.x = random(0, state.width); }
        if (petal.x > state.width + 20) petal.x = -20;
        if (petal.x < -20) petal.x = state.width + 20;
        ctx.save();
        ctx.translate(petal.x, petal.y);
        ctx.rotate(petal.angle);
        ctx.globalAlpha = .56;
        ctx.fillStyle = petal.color;
        ctx.beginPath();
        ctx.moveTo(0, -petal.size);
        ctx.bezierCurveTo(petal.size * .9, -petal.size * .35, petal.size * .62, petal.size * .7, 0, petal.size);
        ctx.bezierCurveTo(-petal.size * .62, petal.size * .7, -petal.size * .9, -petal.size * .35, 0, -petal.size);
        ctx.fill();
        ctx.restore();
    }

    function render(time) {
        if (!state.ctx || state.mode === 'none') return;
        var delta = state.lastTime ? Math.min(32, time - state.lastTime) : 16.7;
        var scale = delta / 16.7;
        state.lastTime = time;
        state.ctx.clearRect(0, 0, state.width, state.height);
        if (state.mode === 'meteor') {
            state.particles.forEach(function (particle) { drawMeteor(state.ctx, particle, scale); });
        } else if (state.mode === 'petals') {
            state.particles.forEach(function (particle) { drawPetal(state.ctx, particle, scale); });
        }
        state.raf = global.requestAnimationFrame(render);
    }

    function stopCustom() {
        if (state.raf) global.cancelAnimationFrame(state.raf);
        state.raf = 0;
        state.lastTime = 0;
        if (state.ctx) state.ctx.clearRect(0, 0, state.width, state.height);
        if (state.canvas) state.canvas.hidden = true;
        state.mode = 'none';
    }

    function startCustom(mode) {
        stopCustom();
        if (reducedMotion || (mode !== 'meteor' && mode !== 'petals')) return;
        ensureCanvas();
        state.mode = mode;
        state.canvas.hidden = false;
        buildParticles(mode);
        state.raf = global.requestAnimationFrame(render);
    }

    function updateButtons(mode) {
        document.querySelectorAll('.skin-weather-btn').forEach(function (button) {
            var value = button.dataset.weather || button.dataset.atmosphere;
            button.classList.toggle('is-active', value === mode);
            button.setAttribute('aria-pressed', value === mode ? 'true' : 'false');
        });
    }

    function chooseCustom(mode) {
        var next = state.mode === mode ? 'none' : mode;
        if (global.SeasonThemes && typeof global.SeasonThemes.setWeather === 'function') global.SeasonThemes.setWeather('none');
        if (next === 'none') stopCustom();
        else startCustom(next);
        try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
        updateButtons(next);
    }

    function enhancePanel() {
        var row = document.querySelector('#image-skin-panel .skin-weather-row');
        if (!row || row.querySelector('[data-atmosphere]')) return;
        ['meteor', 'petals'].forEach(function (mode) {
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'skin-weather-btn';
            button.dataset.atmosphere = mode;
            button.textContent = mode === 'meteor' ? '流星' : '花瓣';
            button.title = mode === 'meteor' ? '流星划过（再次点击关闭）' : '樱花花瓣飘落（再次点击关闭）';
            button.addEventListener('click', function () { chooseCustom(mode); });
            row.appendChild(button);
        });
        row.querySelectorAll('[data-weather]').forEach(function (button) {
            button.addEventListener('click', function () {
                if (state.mode !== 'none') stopCustom();
                updateButtons(button.dataset.weather);
            }, true);
        });

        var saved = 'none';
        try { saved = localStorage.getItem(STORAGE_KEY) || 'none'; } catch (_) {}
        if (saved === 'meteor' || saved === 'petals') startCustom(saved);
        updateButtons(saved);
    }

    document.addEventListener('visibilitychange', function () {
        if (document.hidden && state.raf) {
            global.cancelAnimationFrame(state.raf);
            state.raf = 0;
        } else if (!document.hidden && state.mode !== 'none' && !state.raf) {
            state.lastTime = 0;
            state.raf = global.requestAnimationFrame(render);
        }
    });

    function init() { enhancePanel(); }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();

    global.SkinAtmosphere = { set: chooseCustom, stop: stopCustom };
})(typeof window !== 'undefined' ? window : this);
