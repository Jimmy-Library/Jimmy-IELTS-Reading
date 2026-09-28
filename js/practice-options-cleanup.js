(function () {
    'use strict';

    function removeContrastOption() {
        var panel = document.getElementById('settings-panel');
        if (!panel) return;
        panel.querySelectorAll('[data-options-target="contrast"], [data-options-view="contrast"]').forEach(function (node) {
            node.remove();
        });
        document.body.removeAttribute('data-practice-contrast');
        document.body.classList.remove('dark-mode', 'contrast-yellow-black');
        try { localStorage.removeItem('ielts_practice_contrast'); } catch (_) { }
    }

    function init() {
        removeContrastOption();
        var panel = document.getElementById('settings-panel');
        if (!panel || typeof MutationObserver !== 'function') return;
        new MutationObserver(removeContrastOption).observe(panel, { childList: true, subtree: true });
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
}());
