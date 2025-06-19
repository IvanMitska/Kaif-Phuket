import { useEffect } from 'react';

const PageScrollReset = () => {
  useEffect(() => {
    // Принудительно сбрасываем скролл при монтировании страницы
    const resetScroll = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Немедленный сброс
    resetScroll();
    
    // Дополнительные проверки с задержками
    setTimeout(resetScroll, 0);
    setTimeout(resetScroll, 10);
    setTimeout(resetScroll, 50);
    setTimeout(resetScroll, 100);
    
    // Проверка через requestAnimationFrame
    requestAnimationFrame(() => {
      resetScroll();
    });
  }, []);

  return null;
};

export default PageScrollReset; 