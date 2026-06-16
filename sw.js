// ============================================================
// Emergency Sewa — Service Worker
// Combined: PWABuilder offline strategy + custom asset caching
// ============================================================

const CACHE_NAME    = "emergency-sewa-v2";
const OFFLINE_PAGE  = "/Emergency-seva/index.html";
const BASE_PATH     = "/Emergency-seva";

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// ── Skip waiting when told to update ──────────────────────
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// ── Pre-cache all app assets on install ───────────────────
const ASSETS = [
  "/Emergency-seva/",
  "/Emergency-seva/index.html",
  "/Emergency-seva/style.css",
  "/Emergency-seva/app.js",
  "/Emergency-seva/manifest.json",
  "/Emergency-seva/data/provinces.json",
  "/Emergency-seva/data/districts.json",
  "/Emergency-seva/data/contacts.json",
  "/Emergency-seva/data/services.json",
  "/Emergency-seva/icons/android/launchericon-192x192.png",
  "/Emergency-seva/icons/android/launchericon-512x512.png",
  "/Emergency-seva/icons/icon-maskable-192x192.png",
  "/Emergency-seva/icons/icon-maskable-512x512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.add(OFFLINE_PAGE).catch(() => {});
    })
  );
  self.skipWaiting();
});

// ── Clean up old caches on activate ───────────────────────
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((k) => k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Enable navigation preload if supported ─────────────────
if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

// ── Cache-first for images & icons ────────────────────────
workbox.routing.registerRoute(
  ({ request }) => request.destination === "image",
  new workbox.strategies.CacheFirst({
    cacheName: `${CACHE_NAME}-images`,
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
);

// ── Stale-while-revalidate for JS, CSS, JSON ──────────────
workbox.routing.registerRoute(
  ({ request }) =>
    request.destination === "script"   ||
    request.destination === "style"    ||
    request.url.endsWith(".json"),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: `${CACHE_NAME}-assets`,
  })
);

// ── Network-first for HTML pages ──────────────────────────
workbox.routing.registerRoute(
  new RegExp(`${BASE_PATH}/.*`),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE_NAME,
  })
);

// ── Offline fallback for navigation requests ───────────────
self.addEventListener("fetch", (event) => {
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          // Try navigation preload first (fastest)
          const preloadResp = await event.preloadResponse;
          if (preloadResp) return preloadResp;

          // Then try network
          const networkResp = await fetch(event.request);
          return networkResp;
        } catch (error) {
          // Offline — serve cached index.html
          const cache  = await caches.open(CACHE_NAME);
          const cached = await cache.match(OFFLINE_PAGE);
          return cached;
        }
      })()
    );
  }
});
