import React from 'react';
import { createGlobalStyle } from 'styled-components';

// Этот компонент добавит глобальные стили для применения шрифта KAIF
const KaifFontStyle = createGlobalStyle`
  /* Применяем шрифт KAIF ко всем элементам на странице */
  body, 
  h1, h2, h3, h4, h5, h6,
  p, span, a, button, input, textarea, select {
    font-family: 'KAIF', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif !important;
  }
`;

export default KaifFontStyle;
