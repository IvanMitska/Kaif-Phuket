// PERFORMANCE: Enhanced Service Worker for KAIF - cache JS, CSS, and images
const CACHE_VERSION = 'v3';
const STATIC_CACHE_NAME = `kaif-static-${CACHE_VERSION}`;
const IMAGE_CACHE_NAME = `kaif-images-${CACHE_VERSION}`;
const RUNTIME_CACHE_NAME = `kaif-runtime-${CACHE_VERSION}`;
const IS_DEV = false; // Set to false for production

// Вспомогательная функция для логирования (только в dev режиме)
const log = (...args) => {
  if (IS_DEV) console.log(...args);
};
const logError = (...args) => {
  if (IS_DEV) console.error(...args);
};

// Список критических изображений для предкэширования
const CRITICAL_IMAGES = [
  // Логотипы (высший приоритет)
  '/images/logos/logo-header-1x.webp',
  '/images/logos/logo-header-2x.webp',
  '/images/logos/logo-header-1x.png',
  '/images/logos/logo-header-2x.png',
  '/images/logos/logo-footer-1x.webp',
  '/images/logos/logo-footer-2x.webp',
  
  // Остальные критические изображения
  '/images-webp/small/banya/panoramic.webp',
  '/images-webp/medium/banya/panoramic.webp',
  '/images-webp/large/banya/panoramic.webp',
  '/images-webp/small/menu/breakfast/kaif-breakfast.webp',
  '/images-webp/medium/menu/breakfast/kaif-breakfast.webp'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  log('🔧 Installing KAIF Service Worker...');

  event.waitUntil(
    caches.open(IMAGE_CACHE_NAME)
      .then((cache) => {
        log('📦 Precaching critical images...');
        return cache.addAll(CRITICAL_IMAGES);
      })
      .then(() => {
        log('✅ Service Worker installed successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        logError('❌ Error during service worker installation:', error);
      })
  );
});

// Активация Service Worker with cleanup
self.addEventListener('activate', (event) => {
  log('🚀 Activating KAIF Service Worker...');

  const currentCaches = [STATIC_CACHE_NAME, IMAGE_CACHE_NAME, RUNTIME_CACHE_NAME];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!currentCaches.includes(cacheName)) {
            log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      log('✅ Service Worker activated');
      return self.clients.claim();
    })
  );
});

// PERFORMANCE: Enhanced fetch handling - cache JS, CSS, and images
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip caching for non-GET requests
  if (request.method !== 'GET') return;

  // Cache strategy based on resource type
  // 1. JS/CSS bundles - Cache First with Network Fallback
  if (url.pathname.match(/\.(js|css)$/i)) {
    event.respondWith(
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            log('📦 JS/CSS from cache:', url.pathname);
            return cachedResponse;
          }

          return fetch(request).then((networkResponse) => {
            if (networkResponse.status === 200) {
              log('💾 Caching JS/CSS:', url.pathname);
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
  }

  // 2. Images - Cache First with Network Fallback
  else if (url.pathname.match(/\.(jpg|jpeg|png|webp|svg|gif)$/i)) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            log('📦 Image from cache:', url.pathname);
            return cachedResponse;
          }

          log('🌐 Fetching image:', url.pathname);
          return fetch(request).then((networkResponse) => {
            if (networkResponse.status === 200) {
              log('💾 Caching image:', url.pathname);
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch((error) => {
            logError('❌ Image fetch failed:', error);
            return new Response('', { status: 404 });
          });
        });
      })
    );
  }

  // 3. Fonts - Cache First (fonts rarely change)
  else if (url.pathname.match(/\.(woff2?|ttf|eot|otf)$/i)) {
    event.respondWith(
      caches.open(STATIC_CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          return cachedResponse || fetch(request).then((networkResponse) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  }

  // 4. API/Dynamic content - Network First with Cache Fallback
  else if (url.origin === location.origin) {
    event.respondWith(
      fetch(request).then((networkResponse) => {
        if (networkResponse.status === 200) {
          // Clone the response BEFORE using it
          const responseToCache = networkResponse.clone();
          caches.open(RUNTIME_CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        return caches.match(request);
      })
    );
  }
});

// Очистка кэша при нехватке места
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAR_IMAGE_CACHE') {
    caches.delete(IMAGE_CACHE_NAME).then(() => {
      log('🗑️ Image cache cleared');
      event.ports[0].postMessage({ success: true });
    });
  }
});

log('📱 KAIF Service Worker loaded'); 