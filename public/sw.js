// Service Worker для кэширования изображений KAIF
const CACHE_NAME = 'kaif-images-v2';
const IMAGE_CACHE_NAME = 'kaif-images-cache-v2';
const IS_DEV = false; // Устанавливается в false для production

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

// Активация Service Worker
self.addEventListener('activate', (event) => {
  log('🚀 Activating KAIF Service Worker...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== IMAGE_CACHE_NAME && cacheName !== CACHE_NAME) {
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

// Обработка запросов
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Кэшируем только изображения
  if (url.pathname.match(/\.(jpg|jpeg|png|webp|svg|gif)$/i)) {
    event.respondWith(
      caches.open(IMAGE_CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) {
            log('📦 Serving from cache:', url.pathname);
            return cachedResponse;
          }

          log('🌐 Fetching from network:', url.pathname);
          return fetch(request).then((networkResponse) => {
            // Кэшируем только успешные ответы
            if (networkResponse.status === 200) {
              log('💾 Caching image:', url.pathname);
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch((error) => {
            logError('❌ Network fetch failed:', error);
            // Возвращаем placeholder при ошибке
            return new Response('', { status: 404 });
          });
        });
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