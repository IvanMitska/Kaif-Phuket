import React, { createContext, useContext, useState, useRef } from 'react';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isContentReady, setIsContentReady] = useState(true);
  const loadingRef = useRef(false);
  const hasShownLoadingRef = useRef(false);
  
  const showLoading = (duration = 800) => {
    // Упрощенная версия для отладки
    if (loadingRef.current || hasShownLoadingRef.current) {
      return Promise.resolve();
    }
    
    loadingRef.current = true;
    hasShownLoadingRef.current = true;
    setIsContentReady(false);
    setIsLoading(true);
    
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsContentReady(true);
          loadingRef.current = false;
          resolve();
        }, 200);
      }, duration);
    });
  };
  
  const showContentDirectly = () => {
    hasShownLoadingRef.current = true;
    setIsLoading(false);
    setIsContentReady(true);
    loadingRef.current = false;
  };
  
  const resetLoading = () => {
    hasShownLoadingRef.current = false;
    loadingRef.current = false;
    setIsLoading(false);
    setIsContentReady(true);
  };
  
  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      isContentReady, 
      showLoading, 
      showContentDirectly,
      resetLoading 
    }}>
      {children}
    </LoadingContext.Provider>
  );
}; 