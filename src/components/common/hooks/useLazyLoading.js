import { useState, useEffect, useCallback } from 'react';

// Хук для lazy loading изображений
export const useLazyImage = (src, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let observer;
    
    if (imageRef && imageSrc === placeholder && !hasError) {
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              // Предзагрузка изображения
              const img = new Image();
              img.onload = () => {
                setImageSrc(src);
                setIsLoaded(true);
              };
              img.onerror = () => {
                setHasError(true);
              };
              img.src = src;
              
              observer.unobserve(imageRef);
            }
          });
        },
        { 
          threshold: 0.1,
          rootMargin: '50px' // Начинаем загрузку заранее
        }
      );
      observer.observe(imageRef);
    }
    
    return () => {
      if (observer && observer.unobserve && imageRef) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef, placeholder, hasError]);

  return [imageSrc, setImageRef, isLoaded, hasError];
};

// Хук для отслеживания видимости элемента
export const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '20px',
      ...options
    });

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, hasIntersected, options]);

  return [setRef, isIntersecting, hasIntersected];
};

// Хук для управления производительностью анимаций
export const usePerformanceOptimization = () => {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isSlowDevice, setIsSlowDevice] = useState(false);

  useEffect(() => {
    // Проверяем настройки пользователя для уменьшения анимаций
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Определяем производительность устройства
    if ('hardwareConcurrency' in navigator) {
      setIsSlowDevice(navigator.hardwareConcurrency <= 2);
    }

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const getOptimizedAnimation = useCallback((animation) => {
    if (isReducedMotion) {
      return { duration: 0 };
    }
    if (isSlowDevice) {
      return { ...animation, duration: (animation.duration || 0.5) * 0.7 };
    }
    return animation;
  }, [isReducedMotion, isSlowDevice]);

  return { isReducedMotion, isSlowDevice, getOptimizedAnimation };
};

// Хук для управления touch событиями
export const useTouchGestures = (onSwipeLeft, onSwipeRight) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = useCallback((e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback((e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft();
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight();
    }
  }, [touchStart, touchEnd, onSwipeLeft, onSwipeRight]);

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd
  };
};

// Хук для управления состоянием модального окна
export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const open = useCallback((modalContent) => {
    setContent(modalContent);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    setContent(null);
    document.body.style.overflow = 'auto';
  }, []);

  // Закрытие по Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);

  return { isOpen, content, open, close };
};

// Хук для дебаунса
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// Хук для локального хранилища
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  }, [key, storedValue]);

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}; 