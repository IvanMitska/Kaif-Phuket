/* Мобильные улучшения */
@media (max-width: 768px) {
  /* Улучшенная прокрутка */
  * {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
  
  /* Оптимизация для touch */
  button, a, [role="button"] {
    min-height: 44px;
    min-width: 44px;
    touch-action: manipulation;
  }
  
  /* Улучшенные переходы */
  * {
    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  /* Премиальные тени для мобильных */
  .mobile-shadow {
    box-shadow: 
      0 20px 60px rgba(0, 0, 0, 0.15),
      0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  /* Градиентные фоны */
  .mobile-gradient {
    background: linear-gradient(135deg, 
      rgba(144, 179, 167, 0.1) 0%, 
      rgba(168, 197, 184, 0.05) 100%);
  }
  
  /* Улучшенный blur эффект */
  .mobile-blur {
    backdrop-filter: blur(25px);
    -webkit-backdrop-filter: blur(25px);
  }
}

@media (max-width: 480px) {
  /* Еще более агрессивные оптимизации для маленьких экранов */
  body {
    font-size: 16px; /* Предотвращает zoom на iOS */
  }
  
  /* Улучшенные анимации */
  @keyframes mobileSlideUp {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes mobileSlideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .mobile-slide-up {
    animation: mobileSlideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  .mobile-slide-in {
    animation: mobileSlideIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }
  
  /* Премиальные эффекты для маленьких экранов */
  .mobile-premium-shadow {
    box-shadow: 
      0 25px 70px rgba(0, 0, 0, 0.18),
      0 12px 30px rgba(0, 0, 0, 0.12),
      0 4px 12px rgba(144, 179, 167, 0.1);
  }
} 