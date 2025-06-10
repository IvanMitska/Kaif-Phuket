// Утилиты для оптимизации производительности

// Определяем возможности устройства
export const getDeviceCapabilities = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isLowEnd = navigator.hardwareConcurrency <= 4;
  const hasLimitedRAM = navigator.deviceMemory <= 4;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  return {
    isMobile,
    isLowEnd,
    hasLimitedRAM,
    prefersReducedMotion,
    isHighPerformance: !isMobile && !isLowEnd && !hasLimitedRAM
  };
};

// Кэшируем результат
let deviceCapabilities = null;

export const getDeviceType = () => {
  if (!deviceCapabilities) {
    deviceCapabilities = getDeviceCapabilities();
  }
  return deviceCapabilities;
};

// Оптимизированные настройки анимаций
export const getAnimationConfig = () => {
  const { isMobile, isLowEnd, prefersReducedMotion, isHighPerformance } = getDeviceType();
  
  if (prefersReducedMotion) {
    return {
      enabled: false,
      duration: 0.01,
      reducedMotion: true
    };
  }
  
  if (isMobile || isLowEnd) {
    return {
      enabled: true,
      duration: 0.3,
      reducedMotion: false,
      simpleAnimations: true,
      autoplay: false // Отключаем автоплей на слабых устройствах
    };
  }
  
  if (isHighPerformance) {
    return {
      enabled: true,
      duration: 0.6,
      reducedMotion: false,
      simpleAnimations: false,
      autoplay: true
    };
  }
  
  // Средние настройки по умолчанию
  return {
    enabled: true,
    duration: 0.4,
    reducedMotion: false,
    simpleAnimations: false,
    autoplay: true
  };
};

// Оптимизированные варианты анимаций для Framer Motion
export const getOptimizedVariants = (baseVariants) => {
  const { enabled, duration, simpleAnimations } = getAnimationConfig();
  
  if (!enabled) {
    return {
      initial: {},
      animate: {},
      exit: {}
    };
  }
  
  const optimizedVariants = { ...baseVariants };
  
  // Упрощаем анимации для слабых устройств
  if (simpleAnimations) {
    Object.keys(optimizedVariants).forEach(key => {
      if (optimizedVariants[key].transition) {
        optimizedVariants[key].transition = {
          ...optimizedVariants[key].transition,
          duration,
          type: 'tween',
          ease: 'easeOut'
        };
      }
    });
  }
  
  return optimizedVariants;
};

// Утилита для оптимизации Intersection Observer
export const getOptimizedObserverConfig = () => {
  const { isMobile, isLowEnd } = getDeviceType();
  
  if (isMobile || isLowEnd) {
    return {
      threshold: 0.1,
      rootMargin: '50px'
    };
  }
  
  return {
    threshold: 0.3,
    rootMargin: '100px'
  };
};

// Оптимизация изображений на основе устройства
export const getOptimizedImageConfig = () => {
  const { isMobile, hasLimitedRAM } = getDeviceType();
  
  if (isMobile || hasLimitedRAM) {
    return {
      quality: 70,
      maxWidth: 800,
      lazyLoad: true,
      preloadCount: 2 // Предзагружаем только 2 изображения
    };
  }
  
  return {
    quality: 85,
    maxWidth: 1200,
    lazyLoad: true,
    preloadCount: 5
  };
};

// Определяем нужно ли показывать упрощенную версию галереи
export const shouldUseSimplifiedGallery = () => {
  const { isMobile, isLowEnd, hasLimitedRAM } = getDeviceType();
  return isMobile || isLowEnd || hasLimitedRAM;
};

// Дебаунс для оптимизации событий
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Тротлинг для скролл-событий
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}; 