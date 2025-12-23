import React, { createContext, useContext, useState, useRef, useCallback } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);
  const loadingRef = useRef(false);
  const isInitialLoad = useRef(true);

  // Начальная загрузка при первом открытии
  React.useEffect(() => {
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      // Даём React LoadingScreen отрендериться, потом скрываем HTML лоадер
      requestAnimationFrame(() => {
        if (window.hideInitialLoader) {
          window.hideInitialLoader();
        }
      });
      // Показываем контент, потом скрываем загрузку
      setTimeout(() => {
        setIsContentReady(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 300);
      }, 500);

      // Fallback: гарантированно показать контент через 2 секунды
      setTimeout(() => {
        setIsContentReady(true);
        setIsLoading(false);
      }, 2000);
    }
  }, []);

  // Показать загрузку при переходе между страницами
  const showPageTransition = useCallback((duration = 350) => {
    if (loadingRef.current) return Promise.resolve();

    loadingRef.current = true;

    // Сразу показываем загрузку и скрываем контент
    setIsLoading(true);
    setIsContentReady(false);
    window.scrollTo(0, 0);

    return new Promise((resolve) => {
      setTimeout(() => {
        // Сначала показываем контент ЗА экраном загрузки
        setIsContentReady(true);
        // Даём контенту загрузиться перед fade out
        setTimeout(() => {
          setIsLoading(false);
          loadingRef.current = false;
          resolve();
        }, 300);
      }, duration);
    });
  }, []);

  const hideLoading = useCallback(() => {
    setIsLoading(false);
    setIsContentReady(true);
    loadingRef.current = false;
  }, []);

  return (
    <LoadingContext.Provider value={{
      isLoading,
      isContentReady,
      showPageTransition,
      hideLoading
    }}>
      {children}
    </LoadingContext.Provider>
  );
}; 