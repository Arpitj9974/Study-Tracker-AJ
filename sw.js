/**
 * sw.js — AspirantFlow Service Worker
 * Enables offline caching, PWA installation, and quick asset delivery.
 */
const CACHE_NAME = 'aspirantflow-v42';

const PRECACHE_ASSETS = [
  './',
  'index.html',
  'login.html',
  'manifest.json',
  'assets/style.css',
  'assets/nav.js',
  'assets/auth-sync.js',
  'assets/dashboard-generic.js',
  'assets/mock-tracker.js',
  'assets/logo.png',
  'assets/syncing-cloud-progress.png',
  'assets/icon-192.png',
  'assets/icon-512.png'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[SW] Pre-cache partial fail, continuing:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Network-first for HTML pages; Cache-first for static assets
self.addEventListener('fetch', (event) => {
  const request = event.request;

  // Ignore non-GET requests or Firebase/Firestore API calls
  if (request.method !== 'GET') return;
  const url = new URL(request.url);

  // Allow Firebase Firestore & Google Auth API calls to pass through directly
  if (
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('identitytoolkit.googleapis.com') ||
    url.hostname.includes('securetoken.googleapis.com') ||
    url.hostname.includes('accounts.google.com')
  ) {
    return;
  }

  // Network-first for navigation / HTML requests
  if (request.mode === 'navigate' || request.destination === 'document') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then((cached) => {
            return cached || caches.match('index.html');
          });
        })
    );
    return;
  }

  // Cache-first for images, fonts, scripts, and stylesheets
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch in background to revalidate cache
        fetch(request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseClone));
        }
        return networkResponse;
      });
    })
  );
});
