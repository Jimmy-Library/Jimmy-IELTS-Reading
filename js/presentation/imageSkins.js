/**
 * Image skin gallery shared by the dashboard, boot screen and reading page.
 * Visual state is stored independently from exam/practice state.
 */
(function imageSkinsModule(global) {
    'use strict';
    if (global.__READING_ORIGINAL_UI__ || /reading-practice-unified\.html$/i.test(global.location && global.location.pathname || '')) {
        document.documentElement.removeAttribute('data-image-skin');
        document.documentElement.removeAttribute('data-theme');
        return;
    }

    var STORAGE_KEY = 'image_skin';
    var DEFAULT_SKIN = 'spring';
    var currentScript = document.currentScript;
    var appRoot = currentScript ? new URL('../../', currentScript.src) : new URL('./', global.location.href);
    var reducedMotion = global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var SKINS = [
        { id: 'custom', name: '自定义模式', note: '图片 · 配色 · 字体 · 形状', color: '#6d5bd0', fallback: 'linear-gradient(145deg,#f5f3ff,#8b7de3)', image: '', custom: true },
        { id: 'spring', name: '春日新绿', note: '默认 · 清新专注', color: '#2f855a', fallback: 'linear-gradient(145deg,#f7fff8,#9ae6b4)', image: '' },
        { id: 'autumn-gold', name: '秋日暖金', note: '琥珀 · 丰收暖意', color: '#c8792b', fallback: 'linear-gradient(145deg,#fff8e8,#d77b2c)', image: '' },
        { id: 'winter-glass', name: '冬日冰晶', note: '冰蓝 · 澄澈安静', color: '#6f9fc2', fallback: 'linear-gradient(145deg,#ffffff,#9fc8df)', image: '' },
        { id: 'snoopy-study', name: '史努比夜读', note: '湖蓝 · 静谧陪伴', color: '#0f7f8f', image: 'skin/史努比1.jpg', position: '50% 58%' },
        { id: 'pool-day', name: '清透水波', note: '冰蓝 · 夏日轻盈', color: '#078caa', image: 'skin/881b72c771da27549ae676d3e99ee0f5.jpg', position: '50% 50%' },
        { id: 'quiet-room', name: '静谧书房', note: '鼠尾草 · 沉浸阅读', color: '#667f72', image: 'skin/829883a74c75da19d82052e9ed13f4b4.jpg', position: '50% 54%' },
        { id: 'sunset-desk', name: '暖阳书桌', note: '琥珀 · 温暖灵感', color: '#c96e32', image: 'skin/4eee94a42139665d84147c20be9becee.jpg', position: '50% 54%' },
        { id: 'blossom-reader', name: '樱花阅读', note: '柔粉 · 安静治愈', color: '#bc6b7e', image: 'skin/064dc09feb1bf051ea405bf25fbd7282.jpg', position: '50% 54%' },
        { id: 'star-friends', name: '星愿伙伴', note: '莓粉 · 轻松陪伴', color: '#d783a5', image: 'skin/2eae9dea68745be6657650ca484392ec.jpg', position: '50% 54%' },
        { id: 'cat-circle', name: '猫咪晴空', note: '晴蓝 · 灵动治愈', color: '#287fae', image: 'skin/bebebe055f433bc38eb679406a91e1cf.jpg', position: '50% 50%' },
        { id: 'street-rhythm', name: '街头律动', note: '鼠尾草 · 自由能量', color: '#6f846b', image: 'skin/33a003b514ca7922e4927fc94dbf9748.jpg', position: '50% 52%' },
        { id: 'pastel-parade', name: '糖果游行', note: '粉彩 · 轻盈童趣', color: '#73a9c8', image: 'skin/9bbc8ed25b7812b514a98d69974676ec.jpg', position: '50% 68%' },
        { id: 'vinyl-studio', name: '黑胶练习室', note: '雾蓝 · 复古节奏', color: '#5d7f93', image: 'skin/cc899965adb49afaf878305b68735128.jpg', position: '50% 48%' },
        { id: 'silver-studio', name: '暖灰镜头', note: '奶咖 · 简约质感', color: '#8a6257', image: 'skin/riize的宋银硕.jpg', position: '50% 34%' },
        { id: 'gravity-gaze', name: '引力凝视', note: '青蓝 · 清醒专注', color: '#1598b7', image: 'skin/引力 (Gravity).jpg', position: '50% 50%' },
        { id: 'asuka-heart', name: '明日香心动', note: '珊瑚红 · 元气热烈', color: '#d9584c', image: 'skin/Asuka _ Cute Anime Wallpaper.jpg', position: '50% 50%' },
        { id: 'snoopy-notes', name: '史努比自习社', note: '奶白 · 轻松陪伴', color: '#c8982e', image: 'skin/snoopy study.jpg', position: '50% 50%' }
    ];

    var panel = null;
    var activeSkin = DEFAULT_SKIN;
    var weatherMode = 'none';

    function skinById(id) {
        return SKINS.find(function (skin) { return skin.id === id; }) || SKINS.find(function (skin) { return skin.id === DEFAULT_SKIN; }) || SKINS[0];
    }

    function savedSkinId() {
        try {
            return skinById(localStorage.getItem(STORAGE_KEY) || DEFAULT_SKIN).id;
        } catch (_) {
            return DEFAULT_SKIN;
        }
    }

    function syncBootLabel() {
        var bootPanel = document.querySelector('.boot-panel');
        if (!bootPanel) return;
        var label = bootPanel.querySelector('.boot-skin-name');
        if (!label) {
            label = document.createElement('div');
            label.className = 'boot-skin-name';
            var logo = bootPanel.querySelector('.boot-logo');
            if (logo) logo.insertAdjacentElement('afterend', label);
            else bootPanel.appendChild(label);
        }
        label.textContent = skinById(activeSkin).name;
    }

    function applySkin(id, options) {
        var skin = skinById(id);
        activeSkin = skin.id;
        document.documentElement.setAttribute('data-image-skin', skin.id);
        try {
            localStorage.setItem(STORAGE_KEY, skin.id);
            // Image skins own their palette. Clear legacy color overrides so they cannot clash.
            localStorage.removeItem('theme');
            document.documentElement.removeAttribute('data-theme');
            if (global.__themeSwitcher && typeof global.__themeSwitcher.recordInternalTheme === 'function') {
                global.__themeSwitcher.recordInternalTheme('default');
            }
        } catch (_) {}
        if (typeof global.switchBgTheme === 'function') {
            try { global.switchBgTheme(skin.id); } catch (_) {}
        }
        syncBootLabel();
        updateActiveState();
        if (!options || !options.silent) {
            document.dispatchEvent(new CustomEvent('imageskinchange', { detail: { id: skin.id, skin: skin } }));
        }
    }

    function iconPalette() {
        return '<svg viewBox="0 0 24 24" width="21" height="21" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="1.15"/><circle cx="17.5" cy="10.5" r="1.15"/><circle cx="8.5" cy="7.5" r="1.15"/><circle cx="6.5" cy="12.5" r="1.15"/><path d="M12 22a10 10 0 1 1 0-20 8 8 0 0 1 8 8 3 3 0 0 1-3 3h-2a2 2 0 0 0-1.5 3.3A2 2 0 0 1 12 22z"/></svg>';
    }

    function iconCheck() {
        return '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4 4L19 6"/></svg>';
    }

    function buildOption(skin) {
        var button = document.createElement('button');
        button.type = 'button';
        button.className = 'skin-option';
        button.dataset.skin = skin.id;
        button.setAttribute('aria-label', '应用皮肤：' + skin.name);
        var image = skin.image ? 'url("' + new URL(skin.image, appRoot).href + '")' : 'none';
        button.style.setProperty('--preview-image', image);
        button.style.setProperty('--preview-position', skin.position || 'center');
        button.style.setProperty('--preview-fallback', skin.fallback || skin.color);
        button.innerHTML = '<span class="skin-option__copy"><span><span class="skin-option__name">' + skin.name + '</span><span class="skin-option__note">' + skin.note + '</span></span><span class="skin-option__check">' + iconCheck() + '</span></span>';
        button.addEventListener('click', function () { applySkin(skin.id); });
        return button;
    }

    function togglePanel(forceOpen) {
        if (!panel) return;
        var shouldOpen = typeof forceOpen === 'boolean' ? forceOpen : panel.classList.contains('is-collapsed');
        panel.classList.toggle('is-collapsed', !shouldOpen);
        var handle = panel.querySelector('.skin-handle');
        if (handle) handle.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    }

    function setWeather(mode) {
        if (!global.SeasonThemes || typeof global.SeasonThemes.toggleWeather !== 'function') return;
        var next = weatherMode === mode ? 'none' : mode;
        // SeasonThemes.toggleWeather already handles same-mode close and persists state.
        global.SeasonThemes.toggleWeather(mode);
        weatherMode = next;
        updateActiveState();
    }

    function buildPanel() {
        var legacy = document.getElementById('season-theme-panel');
        if (legacy) legacy.remove();
        if (document.getElementById('image-skin-panel')) return;

        panel = document.createElement('div');
        panel.id = 'image-skin-panel';
        panel.className = 'is-collapsed';
        panel.setAttribute('role', 'group');
        panel.setAttribute('aria-label', '图片皮肤与动态效果');

        var handle = document.createElement('button');
        handle.type = 'button';
        handle.className = 'skin-handle';
        handle.title = '切换页面皮肤';
        handle.setAttribute('aria-label', '打开皮肤选择');
        handle.setAttribute('aria-expanded', 'false');
        handle.innerHTML = iconPalette();
        handle.addEventListener('click', function () { togglePanel(); });

        var drawer = document.createElement('section');
        drawer.className = 'skin-drawer';
        drawer.innerHTML = '<div class="skin-drawer__head"><div><div class="skin-drawer__eyebrow">Focus atmosphere</div><h3 class="skin-drawer__title">选择你的阅读空间</h3></div><button class="skin-drawer__close" type="button" aria-label="关闭皮肤选择">×</button></div>';
        drawer.querySelector('.skin-drawer__close').addEventListener('click', function () { togglePanel(false); });

        var grid = document.createElement('div');
        grid.className = 'skin-grid';
        SKINS.forEach(function (skin) { grid.appendChild(buildOption(skin)); });
        drawer.appendChild(grid);

        var weather = document.createElement('div');
        weather.className = 'skin-weather-row';
        weather.innerHTML = '<span class="skin-weather-label">氛围动态</span><button type="button" class="skin-weather-btn" data-weather="rain">雨滴</button><button type="button" class="skin-weather-btn" data-weather="snow">飘雪</button>';
        weather.querySelectorAll('[data-weather]').forEach(function (button) {
            button.addEventListener('click', function () { setWeather(button.dataset.weather); });
        });
        drawer.appendChild(weather);

        panel.appendChild(handle);
        panel.appendChild(drawer);
        document.body.appendChild(panel);

        document.addEventListener('pointerdown', function (event) {
            if (!panel.classList.contains('is-collapsed') && !panel.contains(event.target)) togglePanel(false);
        });
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') togglePanel(false);
        });
        updateActiveState();
    }

    function updateActiveState() {
        if (!panel) return;
        panel.querySelectorAll('.skin-option').forEach(function (button) {
            var active = button.dataset.skin === activeSkin;
            button.classList.toggle('is-active', active);
            button.setAttribute('aria-pressed', active ? 'true' : 'false');
        });
        panel.querySelectorAll('.skin-weather-btn').forEach(function (button) {
            button.classList.toggle('is-active', button.dataset.weather === weatherMode);
        });
    }

    function init() {
        activeSkin = savedSkinId();
        applySkin(activeSkin, { silent: true });
        document.body.classList.toggle('skin-practice-page', Boolean(document.querySelector('.practice-nav')));
        try {
            var savedWeather = localStorage.getItem('season_weather') || 'none';
            weatherMode = savedWeather === 'rain' || savedWeather === 'snow' ? savedWeather : 'none';
        } catch (_) {}
        buildPanel();
    }

    // Apply the root attribute immediately enough for a footer-loaded script; the head bootstrap handles first paint.
    activeSkin = savedSkinId();
    document.documentElement.setAttribute('data-image-skin', activeSkin);

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();

    global.ImageSkins = { apply: applySkin, list: SKINS.slice(), current: function () { return activeSkin; } };
})(typeof window !== 'undefined' ? window : this);
