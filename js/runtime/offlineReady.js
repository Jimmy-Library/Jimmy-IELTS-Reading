(function initOfflineReady(global) {
  'use strict';

  if (global.OfflineReady && global.OfflineReady.version) return;

  const QUEUE_KEY = 'ielts_offline_completion_queue_v1';
  const MAX_QUEUE = 50;
  const scriptUrl = (() => {
    const current = document.currentScript && document.currentScript.src;
    return current ? new URL(current, global.location.href) : new URL('js/runtime/offlineReady.js', global.location.href);
  })();
  const rootUrl = new URL('../../', scriptUrl);
  let registrationPromise = null;

  function safeClone(value) {
    try {
      return JSON.parse(JSON.stringify(value));
    } catch (_) {
      return null;
    }
  }

  function readQueue() {
    try {
      const parsed = JSON.parse(global.localStorage.getItem(QUEUE_KEY) || '[]');
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function writeQueue(queue) {
    try {
      global.localStorage.setItem(QUEUE_KEY, JSON.stringify((Array.isArray(queue) ? queue : []).slice(0, MAX_QUEUE)));
      return true;
    } catch (_) {
      return false;
    }
  }

  function completionIdFor(envelope) {
    const data = envelope && envelope.data || {};
    const stable = data.sessionId || data.suiteSessionId || data.examId || 'practice';
    return 'offline_' + String(stable).replace(/[^a-zA-Z0-9_-]/g, '_') + '_' + Date.now().toString(36);
  }

  function queueCompletion(envelope) {
    if (!envelope || !envelope.type || !envelope.data || envelope.data.partialSubmit === true) return '';
    const clone = safeClone(envelope);
    if (!clone) return '';
    const id = clone.data.offlineCompletionId || completionIdFor(clone);
    clone.data.offlineCompletionId = id;
    envelope.data.offlineCompletionId = id;
    const queue = readQueue().filter((entry) => entry && entry.id !== id);
    queue.unshift({ id, createdAt: Date.now(), envelope: clone });
    return writeQueue(queue) ? id : '';
  }

  function acknowledgeCompletion(id) {
    if (!id) return false;
    const queue = readQueue();
    const next = queue.filter((entry) => entry && entry.id !== String(id));
    if (next.length === queue.length) return false;
    return writeQueue(next);
  }

  async function recoverPendingCompletions(handler) {
    if (typeof handler !== 'function') return { recovered: 0, pending: readQueue().length };
    const snapshot = readQueue().slice().reverse();
    let recovered = 0;
    for (const entry of snapshot) {
      if (!entry || !entry.envelope) continue;
      try {
        const accepted = await handler(safeClone(entry.envelope), entry.id);
        if (accepted !== false) {
          acknowledgeCompletion(entry.id);
          recovered += 1;
        }
      } catch (_) {
        // Keep the entry for the next app start.
      }
    }
    return { recovered, pending: readQueue().length };
  }

  function register() {
    if (registrationPromise) return registrationPromise;
    if (!('serviceWorker' in navigator) || global.location.protocol === 'file:') {
      registrationPromise = Promise.resolve(null);
      return registrationPromise;
    }
    const workerUrl = new URL('service-worker.js', rootUrl);
    registrationPromise = navigator.serviceWorker.register(workerUrl.href, { scope: rootUrl.pathname })
      .then(() => navigator.serviceWorker.ready)
      .catch((error) => {
        console.warn('[OfflineReady] Service worker unavailable:', error);
        return null;
      });
    return registrationPromise;
  }

  function collectPageUrls(extraUrls) {
    const urls = new Set();
    const add = (value) => {
      if (!value) return;
      try {
        const url = new URL(value, global.location.href);
        if (url.origin === global.location.origin) {
          url.hash = '';
          urls.add(url.href);
        }
      } catch (_) {}
    };
    add(global.location.href);
    add(new URL('Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html', rootUrl).href);
    document.querySelectorAll('script[src],link[href],img[src]').forEach((node) => add(node.src || node.href));
    try {
      performance.getEntriesByType('resource').forEach((entry) => add(entry.name));
    } catch (_) {}
    (Array.isArray(extraUrls) ? extraUrls : []).forEach(add);
    return Array.from(urls);
  }

  async function cacheUrls(urls) {
    const registration = await register();
    const worker = navigator.serviceWorker && (navigator.serviceWorker.controller || registration && registration.active);
    if (!worker || typeof MessageChannel === 'undefined') return { ok: false, saved: 0, total: 0 };
    const uniqueUrls = collectPageUrls(urls);
    return await new Promise((resolve) => {
      const channel = new MessageChannel();
      const timer = global.setTimeout(() => resolve({ ok: false, saved: 0, total: uniqueUrls.length }), 12000);
      channel.port1.onmessage = (event) => {
        global.clearTimeout(timer);
        resolve(event.data || { ok: true, saved: uniqueUrls.length, total: uniqueUrls.length });
      };
      worker.postMessage({ type: 'CACHE_URLS', urls: uniqueUrls }, [channel.port2]);
    });
  }

  function cacheCurrentPage(extraUrls) {
    return cacheUrls(extraUrls);
  }

  global.addEventListener('message', (event) => {
    const data = event && event.data || {};
    if (data.type === 'PRACTICE_SAVED' && data.data && data.data.offlineCompletionId) {
      acknowledgeCompletion(data.data.offlineCompletionId);
    }
  });

  global.OfflineReady = {
    version: '1.0.0',
    register,
    cacheUrls,
    cacheCurrentPage,
    queueCompletion,
    acknowledgeCompletion,
    recoverPendingCompletions,
    listPendingCompletions: readQueue
  };

  register().then(() => {
    [300, 1800, 5000].forEach((delay) => global.setTimeout(() => cacheCurrentPage().catch(() => {}), delay));
  });
})(typeof window !== 'undefined' ? window : globalThis);
