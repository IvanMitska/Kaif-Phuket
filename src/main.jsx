import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Импорт шрифтов
import './assets/fonts/fonts.css';
import './index.css';
import './styles/no-highlight.css';
import './styles/global-theme.css';

// Import i18n configuration
import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
