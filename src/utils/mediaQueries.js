// Утилиты для медиа-запросов в styled-components
export const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
  large: '1200px'
};

// Правильные медиа-запросы для styled-components
export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`,
  large: `@media (max-width: ${breakpoints.large})`
};

// Альтернативная функция без предупреждений
export const mediaQuery = (breakpoint) => {
  return `@media screen and (max-width: ${breakpoint})`;
};

// Функция для создания стилей с медиа-запросами без предупреждений
export const responsive = {
  mobile: (styles) => `
    @media screen and (max-width: 480px) {
      ${styles}
    }
  `,
  tablet: (styles) => `
    @media screen and (max-width: 768px) {
      ${styles}
    }
  `,
  desktop: (styles) => `
    @media screen and (max-width: 1024px) {
      ${styles}
    }
  `
}; 