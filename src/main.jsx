import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Стили
import './index.css';
import './assets/fonts/fonts.css';
import './styles/global-theme.css';



// Конфигурация интернационализации
import './i18n.js';



// Отключаем React DevTools в production
if (import.meta.env.PROD) {
  // Отключаем console.log в production
  console.log = () => {};
  console.warn = () => {};
  console.info = () => {};
}

// Регистрация Service Worker для кэширования изображений
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('✅ SW registered successfully:', registration.scope);
        
        // Проверяем обновления Service Worker
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              console.log('🔄 New SW available, will activate on next page load');
            }
          });
        });
      })
      .catch((error) => {
        console.log('❌ SW registration failed:', error);
      });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  // Убираем StrictMode в development для лучшей производительности
  import.meta.env.PROD ? (
    <App />
  ) : (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
);
