const CACHE_NAME = 'kademia-cache-v11';
const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'favicon.svg',
  'manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) {
    return;
  }

  const isCodeOrHtml = e.request.mode === 'navigate' || 
                        e.request.url.endsWith('.html') || 
                        e.request.url.endsWith('.js') || 
                        e.request.url.endsWith('.css');

  if (isCodeOrHtml) {
    // Network-First for code and HTML to ensure immediate updates on new deploys
    e.respondWith(
      fetch(e.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(e.request).then((cached) => cached || caches.match('./index.html'));
      })
    );
    return;
  }

  // Cache-First for images, gifs and static media assets
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      return fetch(e.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, responseToCache);
          });
        }
        return networkResponse;
      });
    })
  );
});

let activeTimeout = null;

self.addEventListener('message', (event) => {
  const data = event.data;
  if (!data) return;

  if (data.type === 'SCHEDULE_NOTIFICATION') {
    if (activeTimeout) {
      clearTimeout(activeTimeout);
    }
    activeTimeout = setTimeout(() => {
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: './favicon.svg',
        vibrate: [200, 100, 200],
        tag: 'rest-timer-notification',
        renotify: true
      });
      activeTimeout = null;
    }, data.delay);
  } else if (data.type === 'CANCEL_NOTIFICATION') {
    if (activeTimeout) {
      clearTimeout(activeTimeout);
      activeTimeout = null;
    }
  }
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          return client.focus();
        }
      }
      if (self.clients.openWindow) {
        return self.clients.openWindow('./');
      }
    })
  );
});
