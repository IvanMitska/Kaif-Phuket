import React from 'react';
import { Helmet } from 'react-helmet-async';

// Компонент для управления метаданными страницы (title, favicon и т.д.)
const PageHead = ({ title = 'KAIF | Премиальный велнес-центр в Пхукете' }) => {
  return (
    <Helmet>
      <title>{title}</title>
      {/* Используем только существующий файл favicon.png для всех страниц */}
      <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <meta name="theme-color" content="#2C614F" />
    </Helmet>
  );
};

export default PageHead;
