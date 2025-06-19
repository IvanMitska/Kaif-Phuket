import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Принудительно скроллим к началу страницы при изменении роута
    // Используем несколько методов для гарантии
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Дополнительная проверка через setTimeout
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
    
    // Еще одна проверка через небольшую задержку
    setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop; 