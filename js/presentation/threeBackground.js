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

    // IELTS · CBT 绿色背景着色器 — 所有主题统一为绿色调
    const forestGreenShader = `
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

            // 顶部薄雾绿 → 中段森林绿 → 底部深林荫
            vec3 cMist  = vec3(0.910, 0.953, 0.922);   /* #e8f3eb */
            vec3 cLeaf  = vec3(0.820, 0.918, 0.847);   /* #d1ead8 */
            vec3 cGrass = vec3(0.541, 0.776, 0.616);   /* #8ac69d */
            vec3 cPine  = vec3(0.173, 0.486, 0.301);   /* #2c7c4d */
            vec3 cDeep  = vec3(0.078, 0.325, 0.176);   /* #14532d */

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

    const shaders = {
        'forest-green': forestGreenShader,
        'misty-mountain': forestGreenShader,
        'teal-ocean': forestGreenShader,
        'floral-bloom': forestGreenShader
    };

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
        
        const fragmentShader = shaders[theme] || shaders['forest-green'];

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
        // 所有主题键统一指向同一绿色着色器,这里强制使用 forest-green
        themeName = 'forest-green';

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
