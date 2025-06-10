// Упрощенная проверка поддержки WebP
export const checkWebPSupport = () => {
  return new Promise((resolve) => {
    try {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    } catch (error) {
      resolve(false);
    }
  });
};

// Кэшируем результат проверки
let webpSupported = null;

export const isWebPSupported = async () => {
  if (webpSupported === null) {
    webpSupported = await checkWebPSupport();
  }
  return webpSupported;
};

// Безопасная синхронная версия
export const isWebPSupportedSync = () => {
  try {
    if (typeof document === 'undefined') return false;
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  } catch (err) {
    return false;
  }
}; 