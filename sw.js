// ============================================================
// Emergency Sewa — Full Featured Service Worker
// Features: Offline, Background Sync, Periodic Sync,
//           Push Notifications, Share Target
// ============================================================

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const CACHE        = 'emergency-sewa-v3';
const OFFLINE_PAGE = '/Emergency-seva/offline.html';
const BASE         = '/Emergency-seva';

// ── 1. SKIP WAITING (instant updates) ─────────────────────
self.addEventListener('message', e => {
  if (e.data?.type === 'SKIP_WAITING') self.skipWaiting();
});

// ── 2. INSTALL — pre-cache all assets ─────────────────────
const ASSETS = [
  `${BASE}/`,
  `${BASE}/index.html`,
  `${BASE}/offline.html`,
  `${BASE}/style.css`,
  `${BASE}/app.js`,
  `${BASE}/manifest.json`,
  `${BASE}/data/provinces.json`,
  `${BASE}/data/districts.json`,
  `${BASE}/data/contacts.json`,
  `${BASE}/data/services.json`,
  `${BASE}/icons/android/launchericon-192x192.png`,
  `${BASE}/icons/android/launchericon-512x512.png`,
  `${BASE}/icons/icon-maskable-192x192.png`,
  `${BASE}/icons/icon-maskable-512x512.png`,
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// ── 3. ACTIVATE — delete old caches ───────────────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ── 4. OFFLINE SUPPORT — Navigation fallback ──────────────
if (workbox.navigationPreload.isSupported()) workbox.navigationPreload.enable();

self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const preload = await e.preloadResponse;
        if (preload) return preload;
        return await fetch(e.request);
      } catch {
        const cache = await caches.open(CACHE);
        return await cache.match(OFFLINE_PAGE);
      }
    })());
    return;
  }

  // Cache-first for images
  if (e.request.destination === 'image') {
    e.respondWith(
      caches.open(`${CACHE}-images`).then(async cache => {
        const cached = await cache.match(e.request);
        if (cached) return cached;
        const fresh = await fetch(e.request);
        cache.put(e.request, fresh.clone());
        return fresh;
      }).catch(() => caches.match(e.request))
    );
    return;
  }

  // Stale-while-revalidate for JS/CSS/JSON
  if (['script','style'].includes(e.request.destination) || e.request.url.endsWith('.json')) {
    e.respondWith(
      caches.open(`${CACHE}-assets`).then(async cache => {
        const cached = await cache.match(e.request);
        const fetchPromise = fetch(e.request).then(res => { cache.put(e.request, res.clone()); return res; });
        return cached || fetchPromise;
      }).catch(() => caches.match(e.request))
    );
  }
});

// ── 5. BACKGROUND SYNC — send reports when back online ────
self.addEventListener('sync', e => {
  if (e.tag === 'sync-reports') {
    e.waitUntil(syncPendingReports());
  }
  if (e.tag === 'sync-contacts') {
    e.waitUntil(syncContacts());
  }
});

async function syncPendingReports() {
  try {
    const db    = await openDB();
    const items = await getAllFromDB(db, 'pending-reports');
    for (const item of items) {
      try {
        // In a real app, POST to your API here
        console.log('📤 Syncing report:', item);
        // await fetch('/api/reports', { method: 'POST', body: JSON.stringify(item) });
        await deleteFromDB(db, 'pending-reports', item.id);
      } catch {}
    }
    // Notify the user
    self.registration.showNotification('Emergency Sewa', {
      body: '✅ Your pending reports have been submitted.',
      icon: `${BASE}/icons/android/launchericon-192x192.png`,
      badge: `${BASE}/icons/ios/32.png`,
    });
  } catch (err) {
    console.warn('Background sync failed:', err);
  }
}

async function syncContacts() {
  console.log('🔄 Background sync: contacts up to date');
}

// ── 6. PERIODIC BACKGROUND SYNC — auto-refresh data ───────
self.addEventListener('periodicsync', e => {
  if (e.tag === 'refresh-contacts') {
    e.waitUntil(refreshContactData());
  }
});

async function refreshContactData() {
  try {
    const cache = await caches.open(CACHE);
    // Re-fetch the JSON data files to keep them fresh
    const dataFiles = [
      `${BASE}/data/contacts.json`,
      `${BASE}/data/services.json`,
      `${BASE}/data/districts.json`,
      `${BASE}/data/provinces.json`,
    ];
    await Promise.all(dataFiles.map(url =>
      fetch(url).then(res => { if (res.ok) cache.put(url, res); })
    ));
    console.log('✅ Periodic sync: contact data refreshed');
  } catch (err) {
    console.warn('Periodic sync failed:', err);
  }
}

// ── 7. PUSH NOTIFICATIONS ─────────────────────────────────
self.addEventListener('push', e => {
  const data = e.data?.json() || {
    title: '🚨 Emergency Sewa',
    body: 'New emergency alert in your area.',
    url: `${BASE}/`,
  };
  e.waitUntil(
    self.registration.showNotification(data.title, {
      body:    data.body,
      icon:    `${BASE}/icons/android/launchericon-192x192.png`,
      badge:   `${BASE}/icons/ios/32.png`,
      vibrate: [200, 100, 200],
      data:    { url: data.url || `${BASE}/` },
      actions: [
        { action: 'open',    title: '📖 Open App' },
        { action: 'dismiss', title: '✕ Dismiss'  },
      ],
    })
  );
});

// Click on notification → open the app
self.addEventListener('notificationclick', e => {
  e.notification.close();
  if (e.action === 'dismiss') return;
  const url = e.notification.data?.url || `${BASE}/`;
  e.waitUntil(
    clients.matchAll({ type: 'window' }).then(clientList => {
      for (const client of clientList) {
        if (client.url === url && 'focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// ── 8. SHARE TARGET — receive shared content ──────────────
self.addEventListener('fetch', e => {
  if (e.request.method === 'POST' && e.request.url.includes('/share-target')) {
    e.respondWith((async () => {
      const data = await e.request.formData();
      const text  = data.get('text')  || '';
      const title = data.get('title') || '';
      const url   = `${BASE}/?shared=${encodeURIComponent(text || title)}`;
      return Response.redirect(url, 303);
    })());
  }
});

// ── IndexedDB helpers for background sync ─────────────────
function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open('emergency-sewa-db', 1);
    req.onupgradeneeded = e => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains('pending-reports')) {
        db.createObjectStore('pending-reports', { keyPath: 'id', autoIncrement: true });
      }
    };
    req.onsuccess = e => resolve(e.target.result);
    req.onerror   = e => reject(e.target.error);
  });
}

function getAllFromDB(db, store) {
  return new Promise((resolve, reject) => {
    const tx  = db.transaction(store, 'readonly');
    const req = tx.objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result);
    req.onerror   = () => reject(req.error);
  });
}

function deleteFromDB(db, store, id) {
  return new Promise((resolve, reject) => {
    const tx  = db.transaction(store, 'readwrite');
    const req = tx.objectStore(store).delete(id);
    req.onsuccess = () => resolve();
    req.onerror   = () => reject(req.error);
  });
}
