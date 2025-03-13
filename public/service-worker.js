const CACHE_NAME = 'portfolio-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/assets/profile.webp',
  '/assets/profile.jpg',
  '/manifest.json',
  '/favicon.ico'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }

        return fetch(event.request).then((response) => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            if (event.request.url.includes('/assets/')) {
              cache.put(event.request, responseToCache);
            }
          });

          return response;
        });
      })
  );
});
