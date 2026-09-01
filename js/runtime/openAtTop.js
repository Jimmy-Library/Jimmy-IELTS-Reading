/** Always open the main question-bank dashboard at the top of the page. */
(function openDashboardAtTop(global) {
    'use strict';

    if ('scrollRestoration' in global.history) {
        global.history.scrollRestoration = 'manual';
    }

    function resetTop() {
        global.scrollTo(0, 0);
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
    }

    resetTop();

    document.addEventListener('DOMContentLoaded', function () {
        resetTop();
        global.requestAnimationFrame(resetTop);
    }, { once: true });

    global.addEventListener('load', function () {
        global.requestAnimationFrame(resetTop);
    }, { once: true });

    global.addEventListener('pageshow', function () {
        resetTop();
        global.requestAnimationFrame(resetTop);
    });
})(window);
