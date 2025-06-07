import { createGlobalStyle } from 'styled-components';

// Глобальные стили для применения шрифта Playfair Display ко всему сайту
const GlobalFontStyle = createGlobalStyle`
  /* Импортируем шрифт KAIF */
  @font-face {
    font-family: 'KAIF';
    src: url('/src/assets/fonts/kaif.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  /* Применяем Playfair Display ко всем элементам */
  body, 
  h1, h2, h3, h4, h5, h6,
  p, span, div, button, input, textarea, select, label, li {
    font-family: 'Playfair Display', Georgia, serif !important;
  }
  
  /* Специальные стили для навигации в хедере */
  header nav a {
    font-family: 'KAIF', 'Playfair Display', Georgia, serif !important;
  }
  
  /* Языковые настройки размера шрифта для хедера */
  /* Для русского и английского языков - уменьшенный шрифт */
  html[lang='ru'] header nav a,
  html[lang='en'] header nav a {
    font-size: 0.85rem !important;
  }
  
  /* Для тайского языка - увеличенный шрифт */
  html[lang='th'] header nav a {
    font-size: 1.05rem !important;
  }
  
  /* Настройки для мобильной навигации */
  html[lang='ru'] div[class*='MobileNavContainer'] a,
  html[lang='en'] div[class*='MobileNavContainer'] a {
    font-size: 1rem !important;
  }
  
  html[lang='th'] div[class*='MobileNavContainer'] a {
    font-size: 1.2rem !important;
  }
  
  /* Усиливаем вес для заголовков */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }
  
  /* Настраиваем вес для обычного текста */
  p, span, div, li {
    font-weight: 400;
  }
  
  /* Кнопки и интерактивные элементы */
  button, a, input, textarea, select, label {
    font-weight: 500;
  }
  
  /* Исключаем монолитные шрифты для кода */
  code, pre {
    font-family: 'JetBrains Mono', Consolas, monospace !important;
  }
`;

export default GlobalFontStyle;
