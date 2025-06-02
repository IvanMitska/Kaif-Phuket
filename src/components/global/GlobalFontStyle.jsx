import { createGlobalStyle } from 'styled-components';

// Глобальные стили для применения шрифта Playfair Display ко всему сайту
const GlobalFontStyle = createGlobalStyle`
  /* Применяем Playfair Display ко всем элементам */
  body, 
  h1, h2, h3, h4, h5, h6,
  p, span, div, button, a, input, textarea, select, label, li {
    font-family: 'Playfair Display', Georgia, serif !important;
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
