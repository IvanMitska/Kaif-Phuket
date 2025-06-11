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
