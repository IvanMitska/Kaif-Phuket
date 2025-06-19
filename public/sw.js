// Service Worker для кэширования изображений KAIF
const CACHE_NAME = 'kaif-images-v1';
const IMAGE_CACHE_NAME = 'kaif-images-cache-v1';

// Список критических изображений для предкэширования
const CRITICAL_IMAGES = [
  '/images-webp/logos/logo-header.webp',
  '/images-webp/small/banya/panoramic.webp',
  '/images-webp/medium/banya/panoramic.webp',
  '/images-webp/large/banya/panoramic.webp',
  '/images-webp/small/menu/breakfast/kaif-breakfast.webp',
  '/images-webp/medium/menu/breakfast/kaif-breakfast.webp'
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  console.log('🔧 Installing KAIF Service Worker...');
  
  event.waitUntil(
    caches.open(IMAGE_CACHE_NAME)
      .then((cache) => {
        console.log('📦 Precaching critical images...');
        return cache.addAll(CRITICAL_IMAGES);
      })
      .then(() => {
        console.log('✅ Service Worker installed successfully');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('❌ Error during service worker installation:', error);
      })
  );
});

// Активация Service Worker
self.addEventListener('activate', (event) => {
  console.log('🚀 Activating KAIF Service Worker...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== IMAGE_CACHE_NAME && cacheName !== CACHE_NAME) {
            console.log('🗑️ Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('✅ Service Worker activated');
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
            console.log('📦 Serving from cache:', url.pathname);
            return cachedResponse;
          }

          console.log('🌐 Fetching from network:', url.pathname);
          return fetch(request).then((networkResponse) => {
            // Кэшируем только успешные ответы
            if (networkResponse.status === 200) {
              console.log('💾 Caching image:', url.pathname);
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          }).catch((error) => {
            console.error('❌ Network fetch failed:', error);
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
      console.log('🗑️ Image cache cleared');
      event.ports[0].postMessage({ success: true });
    });
  }
});

console.log('📱 KAIF Service Worker loaded'); 