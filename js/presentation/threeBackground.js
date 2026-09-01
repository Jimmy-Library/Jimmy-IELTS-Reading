(function initShuiThreeBackground(global) {
    'use strict';

    const THREE = global.THREE;

    const vertexShader = `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = vec4(position.xy, 0.0, 1.0);
        }
    `;

    // IELTS · CBT 山景背景着色器工厂 — 同一套地形数学，按皮肤换配色
    function makeMountainShader(cMist, cLeaf, cGrass, cPine, cDeep) {
        return `
        precision mediump float;
        varying vec2 vUv;
        uniform float uTime;
        uniform vec2 uResolution;

        float rand(vec2 n) { return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453); }
        float noise(vec2 p) {
            vec2 ip = floor(p);
            vec2 u = fract(p);
            u = u * u * (3.0 - 2.0 * u);
            return mix(
                mix(rand(ip), rand(ip + vec2(1.0, 0.0)), u.x),
                mix(rand(ip + vec2(0.0, 1.0)), rand(ip + vec2(1.0, 1.0)), u.x),
                u.y
            );
        }
        float fbm(vec2 p) {
            float v = 0.0;
            float a = 0.5;
            mat2 rot = mat2(0.87758, 0.47942, -0.47942, 0.87758);
            for (int i = 0; i < 5; ++i) {
                v += a * noise(p);
                p = rot * p * 2.0 + vec2(11.7);
                a *= 0.5;
            }
            return v;
        }

        void main() {
            float aspect = uResolution.x / max(uResolution.y, 1.0);
            vec2 p = vec2((vUv.x - 0.5) * aspect, vUv.y - 0.5);
            float t = uTime * 0.06;

            // 顶部薄雾 → 中段主色 → 底部深色，随皮肤切换
            vec3 cMist  = ${cMist};
            vec3 cLeaf  = ${cLeaf};
            vec3 cGrass = ${cGrass};
            vec3 cPine  = ${cPine};
            vec3 cDeep  = ${cDeep};

            float vertical = vUv.y;
            vec3 color = mix(cLeaf, cMist, smoothstep(0.45, 1.0, vertical));
            color = mix(cGrass, color, smoothstep(0.15, 0.55, vertical));

            // 大尺度软云,慢速漂移
            float cloud = fbm(p * 1.4 + vec2(t * 0.9, t * 0.25));
            float cloudMask = smoothstep(0.35, 0.85, cloud) * smoothstep(0.05, 0.95, vertical);
            color = mix(color, vec3(1.0, 1.0, 0.99), cloudMask * 0.22);

            // 远山轮廓:正弦 + 噪声
            float farHillY = 0.30
                + sin(p.x * 2.1 + t * 0.6) * 0.018
                + (fbm(vec2(p.x * 3.0, t * 0.2)) - 0.5) * 0.04;
            float farMask = smoothstep(0.008, 0.0, vUv.y - farHillY);
            color = mix(color, mix(cPine, cGrass, 0.45), farMask * 0.55);

            // 中景山脊
            float midHillY = 0.22
                + sin(p.x * 1.5 - t * 0.45 + 1.7) * 0.024
                + (fbm(vec2(p.x * 2.2, t * 0.35 + 4.0)) - 0.5) * 0.05;
            float midMask = smoothstep(0.008, 0.0, vUv.y - midHillY);
            color = mix(color, cPine, midMask * 0.75);

            // 前景林荫
            float nearHillY = 0.12
                + sin(p.x * 1.0 + t * 0.3 + 3.1) * 0.030
                + (fbm(vec2(p.x * 1.6, t * 0.5 + 9.0)) - 0.5) * 0.06;
            float nearMask = smoothstep(0.008, 0.0, vUv.y - nearHillY);
            color = mix(color, cDeep, nearMask * 0.90);

            // 远山顶部一抹冷光,模拟晨雾
            float halo = smoothstep(0.0, 0.06, vUv.y - farHillY + 0.04)
                       * smoothstep(0.10, 0.0, vUv.y - farHillY);
            color = mix(color, vec3(0.95, 1.00, 0.95), halo * 0.18);

            // 极轻微的纸张噪点
            float grain = (noise(vUv * 480.0 + vec2(t * 12.0, t * 7.0)) - 0.5) * 0.025;
            color += grain;

            // 暗角
            float vig = length(p) * 0.55;
            color -= vig * 0.10;

            gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
        }
        `;
    }

    const forestGreenShader = makeMountainShader(
        'vec3(0.910, 0.953, 0.922)', /* #e8f3eb */
        'vec3(0.820, 0.918, 0.847)', /* #d1ead8 */
        'vec3(0.541, 0.776, 0.616)', /* #8ac69d */
        'vec3(0.173, 0.486, 0.301)', /* #2c7c4d */
        'vec3(0.078, 0.325, 0.176)'  /* #14532d */
    );

    const orangeShader = makeMountainShader(
        'vec3(0.992, 0.945, 0.890)', /* #fdf1e3 */
        'vec3(0.984, 0.863, 0.725)', /* #fbdcb9 */
        'vec3(0.965, 0.698, 0.420)', /* #f6b26b */
        'vec3(0.902, 0.525, 0.239)', /* #e6863d */
        'vec3(0.639, 0.290, 0.082)'  /* #a34a15 */
    );

    const yellowShader = makeMountainShader(
        'vec3(1.000, 0.984, 0.902)', /* #fffbe6 */
        'vec3(1.000, 0.953, 0.690)', /* #fff3b0 */
        'vec3(1.000, 0.878, 0.400)', /* #ffe066 */
        'vec3(0.969, 0.788, 0.282)', /* #f7c948 */
        'vec3(0.722, 0.525, 0.043)'  /* #b8860b */
    );

    const pinkShader = makeMountainShader(
        'vec3(0.992, 0.949, 0.973)', /* #fdf2f8 */
        'vec3(0.984, 0.812, 0.910)', /* #fbcfe8 */
        'vec3(0.957, 0.447, 0.714)', /* #f472b6 */
        'vec3(0.859, 0.153, 0.467)', /* #db2777 */
        'vec3(0.514, 0.094, 0.263)'  /* #831843 */
    );

    // 冬季·白：冰雪山景，冷白 → 淡蓝 → 石板灰
    const whiteShader = makeMountainShader(
        'vec3(0.953, 0.973, 0.992)', /* #f3f8fd */
        'vec3(0.859, 0.918, 0.996)', /* #dbeafe */
        'vec3(0.722, 0.816, 0.910)', /* #b8d0e8 */
        'vec3(0.486, 0.596, 0.722)', /* #7c98b8 */
        'vec3(0.278, 0.333, 0.412)'  /* #475569 */
    );

    const tealShader = makeMountainShader(
        'vec3(0.890, 0.969, 0.965)',
        'vec3(0.682, 0.890, 0.875)',
        'vec3(0.310, 0.690, 0.710)',
        'vec3(0.075, 0.420, 0.490)',
        'vec3(0.035, 0.190, 0.260)'
    );

    const aquaShader = makeMountainShader(
        'vec3(0.900, 0.980, 1.000)',
        'vec3(0.690, 0.925, 0.955)',
        'vec3(0.290, 0.755, 0.825)',
        'vec3(0.055, 0.500, 0.625)',
        'vec3(0.025, 0.245, 0.350)'
    );

    const sageShader = makeMountainShader(
        'vec3(0.945, 0.965, 0.945)',
        'vec3(0.790, 0.865, 0.815)',
        'vec3(0.490, 0.645, 0.545)',
        'vec3(0.250, 0.390, 0.325)',
        'vec3(0.120, 0.230, 0.195)'
    );

    const sunsetShader = makeMountainShader(
        'vec3(1.000, 0.945, 0.850)',
        'vec3(0.975, 0.785, 0.560)',
        'vec3(0.910, 0.525, 0.285)',
        'vec3(0.690, 0.300, 0.160)',
        'vec3(0.330, 0.155, 0.105)'
    );

    const skyShader = makeMountainShader(
        'vec3(0.935, 0.975, 1.000)',
        'vec3(0.735, 0.875, 0.955)',
        'vec3(0.380, 0.680, 0.850)',
        'vec3(0.145, 0.430, 0.650)',
        'vec3(0.075, 0.235, 0.390)'
    );

    const candyShader = makeMountainShader(
        'vec3(1.000, 0.965, 0.985)',
        'vec3(0.865, 0.920, 0.990)',
        'vec3(0.690, 0.820, 0.935)',
        'vec3(0.440, 0.650, 0.800)',
        'vec3(0.245, 0.420, 0.585)'
    );

    const slateBlueShader = makeMountainShader(
        'vec3(0.925, 0.955, 0.975)',
        'vec3(0.760, 0.845, 0.890)',
        'vec3(0.450, 0.610, 0.700)',
        'vec3(0.245, 0.390, 0.485)',
        'vec3(0.120, 0.225, 0.290)'
    );

    const warmGrayShader = makeMountainShader(
        'vec3(0.965, 0.950, 0.930)',
        'vec3(0.855, 0.815, 0.775)',
        'vec3(0.625, 0.535, 0.485)',
        'vec3(0.390, 0.310, 0.285)',
        'vec3(0.205, 0.165, 0.155)'
    );
    const shaders = {
        'forest-green': forestGreenShader,
        'misty-mountain': forestGreenShader,
        'floral-bloom': pinkShader,
        'teal-ocean': tealShader,
        'orange': orangeShader,
        'yellow': yellowShader,
        'pink': pinkShader,
        'white': whiteShader,
        'spring': forestGreenShader,
        'autumn-gold': orangeShader,
        'winter-glass': whiteShader,
        'snoopy-study': tealShader,
        'pool-day': aquaShader,
        'quiet-room': sageShader,
        'sunset-desk': sunsetShader,
        'blossom-reader': pinkShader,
        'star-friends': pinkShader,
        'cat-circle': skyShader,
        'street-rhythm': sageShader,
        'pastel-parade': candyShader,
        'vinyl-studio': slateBlueShader,
        'silver-studio': warmGrayShader,
        'gravity-gaze': aquaShader,
        'asuka-heart': sunsetShader,
        'snoopy-notes': yellowShader
    };

    function customShader() {
        let saved = {};
        try { saved = JSON.parse(localStorage.getItem('custom_image_skin_settings_v1') || '{}'); } catch (_) {}
        const valid = (value, fallback) => /^#[0-9a-f]{6}$/i.test(String(value || '')) ? value : fallback;
        const toRgb = (value) => {
            const clean = valid(value, '#000000').slice(1);
            return [parseInt(clean.slice(0, 2), 16) / 255, parseInt(clean.slice(2, 4), 16) / 255, parseInt(clean.slice(4, 6), 16) / 255];
        };
        const mix = (first, second, weight) => first.map((channel, index) => channel * (1 - weight) + second[index] * weight);
        const vec = (value) => `vec3(${value.map(channel => channel.toFixed(3)).join(', ')})`;
        const accent = toRgb(valid(saved.accent, '#6d5bd0'));
        const base = toRgb(valid(saved.base, '#eeeafd'));
        const surface = toRgb(valid(saved.surface, '#fbfaff'));
        const ink = toRgb(valid(saved.ink, '#292345'));
        return makeMountainShader(vec(surface), vec(base), vec(mix(base, accent, .38)), vec(accent), vec(mix(ink, accent, .18)));
    }

    function createBackground(theme = 'misty-mountain') {
        if (!THREE) {
            document.body.classList.add('three-bg-fallback');
            return null;
        }
        if (!global.WebGLRenderingContext) {
            document.body.classList.add('three-bg-fallback');
            return null;
        }

        const renderer = new THREE.WebGLRenderer({
            antialias: false,
            alpha: false,
            preserveDrawingBuffer: true,
            powerPreference: 'low-power'
        });
        renderer.domElement.id = 'shui-three-bg';
        renderer.domElement.setAttribute('aria-hidden', 'true');
        renderer.setClearColor(0xe8f3ec, 1);
        
        // Remove existing canvas if any
        const existing = document.getElementById('shui-three-bg');
        if (existing) existing.remove();
        document.body.prepend(renderer.domElement);

        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const uniforms = {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(1, 1) }
        };
        
        const fragmentShader = theme === 'custom' ? customShader() : (shaders[theme] || shaders['forest-green']);

        const material = new THREE.ShaderMaterial({
            uniforms,
            vertexShader,
            fragmentShader,
            depthTest: false,
            depthWrite: false
        });
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);
        scene.add(mesh);

        let rafId = 0;
        let lastFrame = 0;
        let paused = false;
        const startedAt = performance.now();
        const frameInterval = 1000 / 24;

        function resize() {
            const width = Math.max(1, global.innerWidth || 1);
            const height = Math.max(1, global.innerHeight || 1);
            const ratio = Math.min(global.devicePixelRatio || 1, 1.5);
            renderer.setPixelRatio(ratio);
            renderer.setSize(width, height, false);
            uniforms.uResolution.value.set(width * ratio, height * ratio);
            render(performance.now(), true);
        }

        function render(now, force) {
            if (paused && !force) {
                rafId = global.requestAnimationFrame(render);
                return;
            }
            if (!force && now - lastFrame < frameInterval) {
                rafId = global.requestAnimationFrame(render);
                return;
            }
            lastFrame = now;
            uniforms.uTime.value = (now - startedAt) / 1000;
            renderer.render(scene, camera);
            if (!force) {
                rafId = global.requestAnimationFrame(render);
            }
        }

        function handleVisibility() {
            paused = document.hidden;
            if (!paused) {
                render(performance.now(), true);
            }
        }

        resize();
        global.addEventListener('resize', resize);
        document.addEventListener('visibilitychange', handleVisibility);
        render(performance.now(), true);
        rafId = global.requestAnimationFrame(render);

        document.body.classList.add('three-bg-active');

        return {
            renderer,
            refresh: () => render(performance.now(), true),
            destroy() {
                if (rafId) {
                    global.cancelAnimationFrame(rafId);
                    rafId = 0;
                }
                global.removeEventListener('resize', resize);
                document.removeEventListener('visibilitychange', handleVisibility);
                renderer.dispose();
                material.dispose();
                mesh.geometry.dispose();
                if (renderer.domElement.parentNode) {
                    renderer.domElement.remove();
                }
            }
        };
    }

    function start(themeName = null) {
        if (!themeName) {
            try {
                themeName = localStorage.getItem('three_bg_theme') || 'forest-green';
            } catch (e) {
                themeName = 'forest-green';
            }
        }

        try {
            if (global.SHUIThreeBackground) {
                global.SHUIThreeBackground.destroy();
            }
            global.SHUIThreeBackground = createBackground(themeName);
        } catch (error) {
            console.warn('[IELTS CBT Background] fallback applied:', error);
            document.body.classList.add('three-bg-fallback');
        }
    }

    global.switchBgTheme = function(themeName) {
        try {
            localStorage.setItem('three_bg_theme', themeName);
        } catch(e){}
        start(themeName);
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        start();
    } else {
        document.addEventListener('DOMContentLoaded', () => start(), { once: true });
    }
})(typeof window !== 'undefined' ? window : this);
