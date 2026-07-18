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

    // 季节 → data-theme 皮肤 + 最底层 three.js 背景（bg）+ 色块颜色（swatch）
    const SEASONS = [
        { id: 'spring', label: '春', theme: 'pink',    bg: 'pink',         swatch: '#ec4899', title: '春天 · 粉色' },
        { id: 'summer', label: '夏', theme: 'default', bg: 'forest-green', swatch: '#2c9760', title: '夏天 · 绿色' },
        { id: 'autumn', label: '秋', theme: 'yellow',  bg: 'yellow',       swatch: '#eab308', title: '秋天 · 黄色' },
        { id: 'winter', label: '冬', theme: 'white',   bg: 'white',        swatch: '#cbd5e1', title: '冬天 · 白色' }
    ];

    function bgForTheme(theme) {
        const s = SEASONS.find((x) => x.theme === theme);
        return s ? s.bg : 'forest-green';
    }

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
        // 最底层背景（three.js 山景）同步换色
        if (typeof global.switchBgTheme === 'function') {
            try { global.switchBgTheme(bgForTheme(theme)); } catch (_) {}
        }
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

    // ============ 左下角面板（默认收起）============
    let panel = null;

    // 图标用内联 SVG，避免被 emojiIconizer 替换成占位图标
    const ICON_RAIN = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 13a4 4 0 0 1 .6-7.5 5 5 0 0 1 9.6 1A3.5 3.5 0 0 1 17 13"/><line x1="8" y1="17" x2="7" y2="20"/><line x1="12" y1="17" x2="11" y2="21"/><line x1="16" y1="17" x2="15" y2="20"/></svg>';
    const ICON_SNOW = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="5.6" y1="5.6" x2="18.4" y2="18.4"/><line x1="18.4" y1="5.6" x2="5.6" y2="18.4"/></svg>';
    // 收起手柄：调色盘图标
    const ICON_HANDLE = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="1.2"/><circle cx="17.5" cy="10.5" r="1.2"/><circle cx="8.5" cy="7.5" r="1.2"/><circle cx="6.5" cy="12.5" r="1.2"/><path d="M12 22a10 10 0 1 1 0-20 8 8 0 0 1 8 8 3 3 0 0 1-3 3h-2a2 2 0 0 0-1.5 3.3A2 2 0 0 1 12 22z"/></svg>';

    function buildPanel() {
        if (document.getElementById('season-theme-panel')) return;
        injectStyles();

        panel = document.createElement('div');
        panel.id = 'season-theme-panel';
        panel.className = 'is-collapsed';
        panel.setAttribute('role', 'group');
        panel.setAttribute('aria-label', '季节主题与天气');

        // 收起状态的手柄按钮（默认只显示这个）
        const handle = document.createElement('button');
        handle.type = 'button';
        handle.className = 'season-handle';
        handle.title = '主题与天气';
        handle.setAttribute('aria-label', '打开主题与天气设置');
        handle.setAttribute('aria-expanded', 'false');
        handle.innerHTML = ICON_HANDLE;
        handle.addEventListener('click', togglePanel);

        // 展开后的内容
        const body = document.createElement('div');
        body.className = 'season-body';

        const seasonRow = document.createElement('div');
        seasonRow.className = 'season-row';
        SEASONS.forEach((s) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'season-btn';
            btn.dataset.theme = s.theme;
            btn.title = s.title;
            btn.setAttribute('aria-label', s.title);
            btn.innerHTML = '<span class="season-swatch" style="background:' + s.swatch + '"></span><span class="season-label">' + s.label + '</span>';
            btn.addEventListener('click', () => applySeasonTheme(s.theme));
            seasonRow.appendChild(btn);
        });

        const weatherRow = document.createElement('div');
        weatherRow.className = 'weather-row';
        [
            { mode: 'rain', icon: ICON_RAIN, label: '雨' },
            { mode: 'snow', icon: ICON_SNOW, label: '雪' }
        ].forEach((wv) => {
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'weather-btn';
            btn.dataset.weather = wv.mode;
            btn.title = wv.mode === 'rain' ? '下雨（再次点击关闭）' : '下雪（再次点击关闭）';
            btn.innerHTML = '<span class="weather-ic">' + wv.icon + '</span><span class="weather-label">' + wv.label + '</span>';
            btn.addEventListener('click', () => toggleWeather(wv.mode));
            weatherRow.appendChild(btn);
        });

        body.appendChild(seasonRow);
        body.appendChild(weatherRow);
        panel.appendChild(handle);
        panel.appendChild(body);
        document.body.appendChild(panel);
    }

    function togglePanel() {
        if (!panel) return;
        const collapsed = panel.classList.toggle('is-collapsed');
        const handle = panel.querySelector('.season-handle');
        if (handle) handle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
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
            // 面板容器
            '#season-theme-panel{position:fixed;left:16px;bottom:16px;z-index:1600;display:flex;align-items:flex-end;gap:8px;}',
            // 手柄：收起时唯一可见的“缩进”按钮
            '#season-theme-panel .season-handle{display:flex;align-items:center;justify-content:center;width:44px;height:44px;',
            'flex:0 0 auto;border:1px solid rgba(148,163,184,0.30);border-radius:12px;color:#475569;',
            'background:rgba(255,255,255,0.82);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);',
            'box-shadow:0 6px 18px rgba(15,23,42,0.16);cursor:pointer;transition:transform .12s ease,background .12s ease;}',
            '#season-theme-panel .season-handle:hover{transform:translateY(-2px);background:#fff;}',
            // 展开内容
            '#season-theme-panel .season-body{display:flex;flex-direction:column;gap:8px;padding:10px;border-radius:14px;',
            'background:rgba(255,255,255,0.86);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);',
            'box-shadow:0 8px 24px rgba(15,23,42,0.16);border:1px solid rgba(148,163,184,0.28);}',
            // 收起态：直接隐藏内容，仅留手柄（用 display 切换，不依赖过渡动画）
            '#season-theme-panel.is-collapsed .season-body{display:none;}',
            '#season-theme-panel .season-row,#season-theme-panel .weather-row{display:flex;gap:6px;}',
            '#season-theme-panel .season-btn,#season-theme-panel .weather-btn{display:flex;flex-direction:column;',
            'align-items:center;justify-content:center;gap:3px;width:46px;height:46px;border:1px solid transparent;',
            'border-radius:10px;background:rgba(241,245,249,0.9);color:#475569;cursor:pointer;',
            'transition:transform .12s ease,border-color .12s ease,background .12s ease;line-height:1;}',
            '#season-theme-panel .season-btn:hover,#season-theme-panel .weather-btn:hover{transform:translateY(-2px);background:#fff;}',
            '#season-theme-panel .season-swatch{width:18px;height:18px;border-radius:50%;border:1px solid rgba(0,0,0,0.12);box-shadow:inset 0 0 0 2px rgba(255,255,255,0.5);}',
            '#season-theme-panel .weather-ic{display:flex;color:#334155;}',
            '#season-theme-panel .season-label,#season-theme-panel .weather-label{font-size:11px;color:#475569;font-weight:600;}',
            '#season-theme-panel .season-btn.is-active{border-color:#3b82f6;background:#fff;box-shadow:0 0 0 2px rgba(59,130,246,0.18);}',
            '#season-theme-panel .weather-btn.is-active{border-color:#0ea5e9;background:#e0f2fe;}',
            '#season-theme-panel .weather-btn.is-active .weather-ic{color:#0ea5e9;}',
            '#season-theme-panel .weather-row{border-top:1px dashed rgba(148,163,184,0.4);padding-top:8px;}',
            '@media (max-width:640px){#season-theme-panel{left:10px;bottom:10px;}',
            '#season-theme-panel .season-btn,#season-theme-panel .weather-btn{width:42px;height:42px;}}'
        ].join('');
        document.head.appendChild(style);
    }

    // ============ 初始化 ============
    function restore() {
        // 主题：沿用既有 localStorage('theme')，head 内联脚本已提前应用 data-theme。
        // 确保最底层 three.js 背景与当前主题一致（避免两个 localStorage 键不同步）
        const wantBg = bgForTheme(currentTheme());
        let savedBg = 'forest-green';
        try { savedBg = localStorage.getItem('three_bg_theme') || 'forest-green'; } catch (_) {}
        if (savedBg !== wantBg && typeof global.switchBgTheme === 'function') {
            try { global.switchBgTheme(wantBg); } catch (_) {}
        }
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
