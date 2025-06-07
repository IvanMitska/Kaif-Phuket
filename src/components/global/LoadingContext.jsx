import React, { createContext, useContext, useState, useRef } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isContentReady, setIsContentReady] = useState(true); // Контент готов к показу
  const loadingRef = useRef(false);
  const hasShownLoadingRef = useRef(false); // Флаг для предотвращения повторного показа
  
  const showLoading = (duration = 2000) => {
    // Если загрузка уже была показана в этой сессии, не показываем снова
    if (loadingRef.current || hasShownLoadingRef.current) {
      return Promise.resolve();
    }
    
    loadingRef.current = true;
    hasShownLoadingRef.current = true;
    setIsContentReady(false); // Скрываем контент
    setIsLoading(true);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsContentReady(true); // Показываем контент после анимации исчезновения
          loadingRef.current = false;
          resolve();
        }, 400); // Ждем завершения анимации исчезновения
      }, duration);
    });
  };
  
  // Функция для сброса состояния (если понадобится)
  const resetLoading = () => {
    hasShownLoadingRef.current = false;
    loadingRef.current = false;
    setIsLoading(false);
    setIsContentReady(true);
  };
  
  return (
    <LoadingContext.Provider value={{ isLoading, isContentReady, showLoading, resetLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}; 