/**
 * 季节主题切换 + 雨雪天气特效
 *
 * 左下角快捷面板：春(粉)/夏(绿)/秋(黄)/冬(白) 四季主题，外加下雨/下雪开关。
 * 主题通过 data-theme + localStorage 应用（与 theme-switcher 的 applyTheme 等价），
 * 自足实现、不依赖懒加载分组，页面加载即可用。
 */
(function initSeasonThemes(global) {
    'use strict';

    const THEME_KEY = 'theme';                 // 与既有主题系统共用
    const WEATHER_KEY = 'season_weather';      // 'rain' | 'snow' | 'none'

    // 季节 → 既有 data-theme 皮肤
    const SEASONS = [
        { id: 'spring', label: '春', emoji: '🌸', theme: 'pink', title: '春天 · 粉色' },
        { id: 'summer', label: '夏', emoji: '🌿', theme: 'default', title: '夏天 · 绿色' },
        { id: 'autumn', label: '秋', emoji: '🍂', theme: 'yellow', title: '秋天 · 黄色' },
        { id: 'winter', label: '冬', emoji: '❄️', theme: 'white', title: '冬天 · 白色' }
    ];

    // ============ 主题应用 ============
    function applySeasonTheme(theme) {
        const root = document.documentElement;
        try {
            if (!theme || theme === 'default') {
                root.removeAttribute('data-theme');
                localStorage.removeItem(THEME_KEY);
            } else {
                root.setAttribute('data-theme', theme);
                localStorage.setItem(THEME_KEY, theme);
            }
            // 与既有主题首选项系统保持同步（若已加载）
            if (global.__themeSwitcher && typeof global.__themeSwitcher.recordInternalTheme === 'function') {
                global.__themeSwitcher.recordInternalTheme(theme || 'default');
            }
        } catch (_) { /* localStorage 不可用时静默降级 */ }
        updateActiveButtons();
    }

    function currentTheme() {
        try {
            return localStorage.getItem(THEME_KEY) || 'default';
        } catch (_) {
            return document.documentElement.getAttribute('data-theme') || 'default';
        }
    }

    // ============ 雨雪特效 ============
    const weather = {
        mode: 'none',
        canvas: null,
        ctx: null,
        particles: [],
        raf: null,
        w: 0,
        h: 0
    };

    function ensureCanvas() {
        if (weather.canvas) return weather.canvas;
        const c = document.createElement('canvas');
        c.id = 'season-weather-canvas';
        c.setAttribute('aria-hidden', 'true');
        document.body.appendChild(c);
        weather.canvas = c;
        weather.ctx = c.getContext('2d');
        resizeCanvas();
        global.addEventListener('resize', resizeCanvas);
        return c;
    }

    function resizeCanvas() {
        if (!weather.canvas) return;
        const dpr = Math.min(global.devicePixelRatio || 1, 2);
        weather.w = global.innerWidth;
        weather.h = global.innerHeight;
        weather.canvas.width = weather.w * dpr;
        weather.canvas.height = weather.h * dpr;
        weather.canvas.style.width = weather.w + 'px';
        weather.canvas.style.height = weather.h + 'px';
        weather.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function rand(min, max) {
        return min + Math.random() * (max - min);
    }

    function buildParticles(mode) {
        const area = weather.w * weather.h;
        if (mode === 'snow') {
            // 雪花密度随屏幕面积缩放，控制在合理区间
            const count = Math.round(Math.min(160, Math.max(50, area / 14000)));
            weather.particles = Array.from({ length: count }, () => ({
                x: Math.random() * weather.w,
                y: Math.random() * weather.h,
                r: rand(1.5, 4),
                sx: rand(-0.4, 0.4),
                sy: rand(0.5, 1.6),
                drift: rand(0, Math.PI * 2)
            }));
        } else if (mode === 'rain') {
            const count = Math.round(Math.min(240, Math.max(80, area / 8000)));
            weather.particles = Array.from({ length: count }, () => ({
                x: Math.random() * weather.w,
                y: Math.random() * weather.h,
                len: rand(9, 20),
                sy: rand(9, 16),
                sx: rand(1.2, 2.6)
            }));
        } else {
            weather.particles = [];
        }
    }

    // 推进粒子并绘制一帧（不含调度），供循环与「即时首帧」共用
    function renderFrame() {
        const { ctx, w, h, mode } = weather;
        if (!ctx) return;
        ctx.clearRect(0, 0, w, h);

        if (mode === 'snow') {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
            for (const p of weather.particles) {
                p.drift += 0.01;
                p.x += p.sx + Math.sin(p.drift) * 0.4;
                p.y += p.sy;
                if (p.y > h + 5) { p.y = -5; p.x = Math.random() * w; }
                if (p.x > w + 5) p.x = -5;
                else if (p.x < -5) p.x = w + 5;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
        } else if (mode === 'rain') {
            ctx.strokeStyle = 'rgba(174, 194, 224, 0.55)';
            ctx.lineWidth = 1.1;
            ctx.lineCap = 'round';
            for (const p of weather.particles) {
                p.x += p.sx;
                p.y += p.sy;
                if (p.y > h + 10) { p.y = -10; p.x = Math.random() * w; }
                if (p.x > w + 10) p.x = -10;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x - p.sx * 1.2, p.y - p.len);
                ctx.stroke();
            }
        }
    }

    function loop() {
        renderFrame();
        weather.raf = global.requestAnimationFrame(loop);
    }

    function startWeather(mode) {
        stopWeather();
        weather.mode = mode;
        if (mode === 'none') {
            if (weather.canvas) weather.canvas.style.display = 'none';
            return;
        }
        ensureCanvas();
        weather.canvas.style.display = 'block';
        buildParticles(mode);
        renderFrame(); // 即时首帧，开启后立刻可见（不依赖 rAF 是否被后台节流）
        if (!document.hidden) {
            weather.raf = global.requestAnimationFrame(loop);
        }
    }

    function stopWeather() {
        if (weather.raf) {
            global.cancelAnimationFrame(weather.raf);
            weather.raf = null;
        }
        if (weather.ctx) weather.ctx.clearRect(0, 0, weather.w, weather.h);
    }

    // 切换开关：再次点击同一天气则关闭
    function toggleWeather(mode) {
        const next = weather.mode === mode ? 'none' : mode;
        startWeather(next);
        try { localStorage.setItem(WEATHER_KEY, next); } catch (_) {}
        updateActiveButtons();
    }

    // 标签页切到后台时暂停动画，回来再恢复（省电，避免 rAF 空转）
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            if (weather.raf) { global.cancelAnimationFrame(weather.raf); weather.raf = null; }
        } else if (weather.mode !== 'none' && !weather.raf) {
            weather.raf = global.requestAnimationFrame(loop);
        }
    });

    // ============ 左下角面板 ============
    let panel = null;

    function buildPanel() {
        if (document.getElementById('season-theme-panel')) return;
        injectStyles();

        panel = document.createElement('div');
        panel.id = 'season-theme-panel';
        panel.setAttribute('role', 'group');
        panel.setAttribute('aria-label', '季节主题与天气');

        const seasonRow = document.createElement('div');
        seasonRow.className = 'season-row';
        SEASONS.forEach((s) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'season-btn';
            btn.dataset.theme = s.theme;
            btn.title = s.title;
            btn.setAttribute('aria-label', s.title);
            btn.innerHTML = '<span class="season-emoji">' + s.emoji + '</span><span class="season-label">' + s.label + '</span>';
            btn.addEventListener('click', () => applySeasonTheme(s.theme));
            seasonRow.appendChild(btn);
        });

        const weatherRow = document.createElement('div');
        weatherRow.className = 'weather-row';
        [
            { mode: 'rain', emoji: '🌧️', label: '雨' },
            { mode: 'snow', emoji: '❄️', label: '雪' }
        ].forEach((wv) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'weather-btn';
            btn.dataset.weather = wv.mode;
            btn.title = wv.mode === 'rain' ? '下雨（再次点击关闭）' : '下雪（再次点击关闭）';
            btn.innerHTML = '<span class="weather-emoji">' + wv.emoji + '</span><span class="weather-label">' + wv.label + '</span>';
            btn.addEventListener('click', () => toggleWeather(wv.mode));
            weatherRow.appendChild(btn);
        });

        panel.appendChild(seasonRow);
        panel.appendChild(weatherRow);
        document.body.appendChild(panel);
    }

    function updateActiveButtons() {
        if (!panel) return;
        const theme = currentTheme();
        panel.querySelectorAll('.season-btn').forEach((b) => {
            b.classList.toggle('is-active', b.dataset.theme === theme);
        });
        panel.querySelectorAll('.weather-btn').forEach((b) => {
            b.classList.toggle('is-active', b.dataset.weather === weather.mode);
        });
    }

    function injectStyles() {
        if (document.getElementById('season-theme-style')) return;
        const style = document.createElement('style');
        style.id = 'season-theme-style';
        style.textContent = [
            '#season-weather-canvas{position:fixed;inset:0;pointer-events:none;z-index:9998;display:none;}',
            '#season-theme-panel{position:fixed;left:16px;bottom:16px;z-index:1600;display:flex;flex-direction:column;gap:8px;',
            'padding:10px;border-radius:14px;background:rgba(255,255,255,0.82);backdrop-filter:blur(10px);',
            '-webkit-backdrop-filter:blur(10px);box-shadow:0 8px 24px rgba(15,23,42,0.16);border:1px solid rgba(148,163,184,0.28);}',
            '#season-theme-panel .season-row,#season-theme-panel .weather-row{display:flex;gap:6px;}',
            '#season-theme-panel button{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;',
            'width:46px;height:46px;border:1px solid transparent;border-radius:10px;background:rgba(241,245,249,0.9);',
            'cursor:pointer;transition:transform .12s ease,border-color .12s ease,background .12s ease;line-height:1;}',
            '#season-theme-panel button:hover{transform:translateY(-2px);background:#fff;}',
            '#season-theme-panel .season-emoji,#season-theme-panel .weather-emoji{font-size:18px;}',
            '#season-theme-panel .season-label,#season-theme-panel .weather-label{font-size:11px;color:#475569;font-weight:600;}',
            '#season-theme-panel .season-btn.is-active{border-color:#3b82f6;background:#fff;box-shadow:0 0 0 2px rgba(59,130,246,0.18);}',
            '#season-theme-panel .weather-btn.is-active{border-color:#0ea5e9;background:#e0f2fe;}',
            '#season-theme-panel .weather-row{border-top:1px dashed rgba(148,163,184,0.4);padding-top:8px;}',
            '@media (max-width:640px){#season-theme-panel{left:10px;bottom:10px;padding:8px;}',
            '#season-theme-panel button{width:40px;height:40px;}#season-theme-panel .season-emoji,#season-theme-panel .weather-emoji{font-size:16px;}}'
        ].join('');
        document.head.appendChild(style);
    }

    // ============ 初始化 ============
    function restore() {
        // 主题：沿用既有 localStorage('theme')，head 内联脚本已提前应用，这里只同步按钮态
        // 天气：恢复上次选择
        let savedWeather = 'none';
        try { savedWeather = localStorage.getItem(WEATHER_KEY) || 'none'; } catch (_) {}
        if (savedWeather === 'rain' || savedWeather === 'snow') {
            startWeather(savedWeather);
        }
        updateActiveButtons();
    }

    function init() {
        buildPanel();
        restore();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
        init();
    }

    // 暴露给设置页/其他入口复用
    global.SeasonThemes = {
        applyTheme: applySeasonTheme,
        setWeather: startWeather,
        toggleWeather: toggleWeather
    };
})(typeof window !== 'undefined' ? window : this);
