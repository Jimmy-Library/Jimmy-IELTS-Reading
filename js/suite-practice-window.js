/** Reserve a separate practice window from direct user gestures without injecting UI into other views. */
(function suitePracticeWindow(global) {
    'use strict';

    var nativeOpen = global.open.bind(global);
    var reservedWindow = null;

    function reservePracticeWindow() {
        if (reservedWindow && !reservedWindow.closed) return reservedWindow;
        try {
            reservedWindow = nativeOpen('about:blank', '_blank');
            if (reservedWindow) {
                reservedWindow.document.title = '正在准备套题…';
                reservedWindow.document.body.innerHTML = '<div style="font:600 18px/1.6 system-ui,sans-serif;padding:40px;color:#334155">正在加载 3 篇套题，请稍候…</div>';
            }
        } catch (_) {
            reservedWindow = null;
        }
        return reservedWindow;
    }

    global.open = function openInReservedWindow(url, name, features) {
        if (reservedWindow && !reservedWindow.closed && url && url !== 'about:blank') {
            var target = reservedWindow;
            reservedWindow = null;
            try { target.location.replace(url); } catch (_) { target.location.href = url; }
            try { target.focus(); } catch (_) { }
            return target;
        }
        return nativeOpen(url, name, features);
    };

    document.addEventListener('click', function (event) {
        var target = event.target && event.target.closest ? event.target : null;
        if (!target) return;
        // Reserve during the gesture, before lazy loading or preparing three passages.
        var shouldReserve = target.closest('[data-suite-id], [data-daily-action="start"], [data-suite-resume-action="continue"], [data-suite-resume-action="restart"], [data-record-action="resume-draft"], [data-record-action="restart-draft"], [data-confirm-custom-suite], [data-custom-suite-confirm], [data-action="confirm-custom-suite"], [data-action="suite-custom-confirm"]');
        if (!shouldReserve) {
            var button = target.closest('button');
            shouldReserve = button && /(确认开始|确认组题|开始套题|开始模考)/.test(button.textContent || '');
        }
        if (shouldReserve) reservePracticeWindow();
    }, true);
}(window));
