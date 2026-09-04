'use strict';

const CACHE_VERSION = 'jimmy-reading-offline-v1';
const CORE_ASSETS = [
  './Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html',
  './js/runtime/offlineReady.js',
  './js/runtime/unifiedReadingPage.js',
  './assets/generated/reading-exams/reading-practice-unified.html',
  './assets/generated/reading-exams/manifest.js'
];

function isCacheable(request) {
  if (!request || request.method !== 'GET') return false;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return false;
  return !/\/(?:downloads|offline-package)\//i.test(url.pathname);
}

async function putResponse(cache, request, response) {
  if (!response || (!response.ok && response.type !== 'opaque')) return response;
  try {
    await cache.put(request, response.clone());
  } catch (_) {
    // A quota error must never block the live response.
  }
  return response;
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    await Promise.allSettled(CORE_ASSETS.map((asset) => cache.add(new Request(asset, { cache: 'reload' }))));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith('jimmy-reading-offline-') && name !== CACHE_VERSION).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (!isCacheable(request)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_VERSION);
    try {
      const response = await fetch(request);
      return await putResponse(cache, request, response);
    } catch (_) {
      const cached = await cache.match(request, { ignoreSearch: request.mode === 'navigate' });
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const fallback = await cache.match('./Jimmy%E9%98%85%E8%AF%BB%E6%9C%BA%E8%80%83.html');
        if (fallback) return fallback;
      }
      throw _;
    }
  })());
});

self.addEventListener('message', (event) => {
  const data = event.data || {};
  if (data.type !== 'CACHE_URLS' || !Array.isArray(data.urls)) return;
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    const urls = Array.from(new Set(data.urls.map(String))).filter(Boolean);
    const results = await Promise.allSettled(urls.map(async (rawUrl) => {
      const url = new URL(rawUrl, self.location.href);
      if (url.origin !== self.location.origin) return;
      const request = new Request(url.href, { credentials: 'same-origin' });
      const response = await fetch(request);
      await putResponse(cache, request, response);
    }));
    const saved = results.filter((result) => result.status === 'fulfilled').length;
    if (event.ports && event.ports[0]) event.ports[0].postMessage({ ok: true, saved, total: urls.length });
  })());
});
