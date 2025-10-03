import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

// Оптимизированный логотип для хедера
const headerLogoPath = '/images/logos/logo-header.png';

console.log('🔥 HEADER.JSX FILE LOADED!');



// =============================================================================
// МАКСИМАЛЬНО АГРЕССИВНЫЙ ИЗОЛИРОВАННЫЙ ХЕДЕР
// =============================================================================

const Header = () => {
  console.log('🚀 HEADER COMPONENT LOADED!');
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  

  


  const isActive = useCallback((path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  }, [location.pathname]);

  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
    document.documentElement.lang = lng;
    setIsLanguageDropdownOpen(false);
  }, [i18n]);

  const debouncedNavigate = useCallback((path) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    
    const timeout = setTimeout(() => {
      navigate(path);
      // Принудительно скроллим к началу после навигации несколькими способами
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant'
        });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, 0);
      
      // Дополнительная проверка
      setTimeout(() => {
        if (window.scrollY > 0) {
          window.scrollTo(0, 0);
        }
      }, 50);
    }, 100);
    
    setDebounceTimeout(timeout);
  }, [navigate, debounceTimeout]);

  const languages = useMemo(() => [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
    { code: 'th', name: 'ไทย' }
  ], []);

  const currentLanguage = useMemo(() => {
    const found = languages.find(lang => lang.code === i18n.language);
    return found || languages[0];
  }, [languages, i18n.language]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }
    };
  }, [debounceTimeout]);

  const navItems = useMemo(() => [
    { path: '/', label: t('navigation.home') },
    { path: '/banya', label: t('navigation.banya') },
    { path: '/restaurant', label: t('navigation.restaurant') },
    { path: '/spa', label: t('navigation.spa') },
    { path: '/sports', label: t('navigation.sports') },
    { path: '/contacts', label: t('navigation.contacts') }
  ], [t, i18n.language]);

  const getNavLinkStyle = useCallback((path) => ({
    color: isActive(path) ? '#90B3A7' : (hoveredNav === path ? '#2C3E2D' : '#5A6761'),
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: isActive(path) ? '600' : '500',
    fontFamily: '"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    position: 'relative',
    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    whiteSpace: 'nowrap',
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: '0 1rem',
    cursor: 'pointer',
    transform: hoveredNav === path ? 'translateY(-1px)' : 'translateY(0)',
    textShadow: isActive(path) ? '0 0 8px rgba(144, 179, 167, 0.3)' : 'none'
  }), [isActive, hoveredNav]);

  const toggleMobileMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Сохраняем текущую позицию скролла только при открытии меню
      const scrollY = window.scrollY;
      
      document.body.classList.add('mobile-menu-open');
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Сохраняем позицию в data-атрибуте для восстановления
      document.body.setAttribute('data-scroll-lock-position', scrollY.toString());
    } else {
      // Восстанавливаем позицию скролла только если она была сохранена при открытии меню
      const savedScrollY = document.body.getAttribute('data-scroll-lock-position');
      
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.removeAttribute('data-scroll-lock-position');
      
      // Восстанавливаем позицию только если она была сохранена
      if (savedScrollY) {
        window.scrollTo(0, parseInt(savedScrollY));
      }
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.removeAttribute('data-scroll-lock-position');
    };
  }, [isMobileMenuOpen]);

  // Закрываем мобильное меню при изменении размера экрана
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Детальная диагностика хедера
  useEffect(() => {
    const checkHeaderVisibility = () => {
      const header = document.querySelector('.kaif-header');
      console.log('🔍 Проверяю хедер...', {
        headerExists: !!header,
        timestamp: new Date().toLocaleTimeString()
      });
      
      if (header) {
        const rect = header.getBoundingClientRect();
        const computedStyle = window.getComputedStyle(header);
        
        console.log('📊 Состояние хедера:', {
          position: computedStyle.position,
          top: computedStyle.top,
          zIndex: computedStyle.zIndex,
          display: computedStyle.display,
          visibility: computedStyle.visibility,
          opacity: computedStyle.opacity,
          rect: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          }
        });
        
        // Исправляем если что-то не так
        if (rect.top !== 0 || rect.height === 0 || computedStyle.position !== 'fixed') {
          console.log('🚨 Хедер НЕ НА МЕСТЕ! Исправляю...', rect);
          
          // АГРЕССИВНОЕ исправление
          header.style.cssText = `
            position: fixed !important;
            top: 0px !important;
            left: 0px !important;
            right: 0px !important;
            width: 100% !important;
            height: 65px !important;
            z-index: 9999 !important;
            background-color: #ffffff !important;
            display: flex !important;
            visibility: visible !important;
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            animation: none !important;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
            align-items: center !important;
            justify-content: center !important;
          `;
          
          console.log('✅ Хедер агрессивно исправлен!');
        } else {
          console.log('✅ Хедер в порядке');
        }
      } else {
        console.log('❌ Хедер не найден!');
      }
    };

    // Проверяем сразу
    console.log('🚀 Запускаю диагностику хедера...');
    checkHeaderVisibility();
    
    // Проверяем каждые 500ms
    const interval = setInterval(checkHeaderVisibility, 500);
    
    // Проверяем при скролле
    const handleScroll = () => {
      console.log('📜 Скролл detected, проверяю хедер...');
      checkHeaderVisibility();
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header 
        className="kaif-header fixed top-0 left-0 right-0 w-full h-16 z-50 bg-white"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          width: '100%',
          height: '65px',
          zIndex: '9999',
          backgroundColor: '#ffffff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
          pointerEvents: 'auto',
          visibility: 'visible',
          opacity: '1',
          transform: 'none',
          transition: 'none',
          animation: 'none'
        }}
      >
        <div style={{
          width: '100%',
          maxWidth: '1400px',
          height: '65px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 2rem',
          margin: 0,
          boxSizing: 'border-box'
        }}>
          {/* Левая секция - Логотип */}
          <div style={{
            flex: '0 0 200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '65px',
            margin: 0,
            padding: 0
          }}>
            <div
              onClick={() => debouncedNavigate('/')}
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                height: '65px',
                margin: 0,
                padding: 0,
                cursor: 'pointer'
              }}
              itemScope
              itemType="https://schema.org/Organization"
            >
              <meta itemProp="name" content="KAIF SAUNA & SPA" />
              <meta itemProp="url" content="https://kaif-phuket.com" />
              <picture>
                <source
                  srcSet="/images/logos/logo-header-1x.webp"
                  type="image/webp"
                  sizes="38px"
                />
                <img
                  src={headerLogoPath}
                  alt="KAIF SAUNA & SPA - Phuket"
                  title="KAIF SAUNA & SPA"
                  style={{
                    height: '38px',
                    width: 'auto',
                    display: 'block',
                    margin: 0,
                    padding: 0
                  }}
                  loading="eager"
                  itemProp="logo"
                />
              </picture>
            </div>
          </div>

          {/* Центральная секция - Навигация (десктоп) */}
          <div style={{
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '65px',
            margin: 0,
            padding: '0 1rem'
          }}>
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              height: '65px',
              margin: 0,
              padding: 0,
              position: 'relative'
            }} className="desktop-nav">
              {navItems.map((item) => (
                <div
                  key={item.path}
                  style={getNavLinkStyle(item.path)}
                  onMouseEnter={() => setHoveredNav(item.path)}
                  onMouseLeave={() => setHoveredNav(null)}
                  onClick={() => debouncedNavigate(item.path)}
                >
                  {item.label}
                  
                  {/* Активная линия */}
                  {isActive(item.path) && (
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: 'tween'
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '100%',
                        height: '4px',
                        background: 'linear-gradient(90deg, transparent 0%, #90B3A7 20%, #90B3A7 80%, transparent 100%)',
                        borderRadius: '2px',
                        transformOrigin: 'center',
                        boxShadow: '0 0 20px rgba(144, 179, 167, 1), 0 4px 12px rgba(144, 179, 167, 0.6)'
                      }}
                    />
                  )}
                  
                  {/* Hover линия с плавной анимацией */}
                  {!isActive(item.path) && hoveredNav === item.path && (
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0, y: 4 }}
                      animate={{ scaleX: 1, opacity: 1, y: 0 }}
                      exit={{ scaleX: 0, opacity: 0, y: 4 }}
                      transition={{ 
                        duration: 0.3, 
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: 'tween'
                      }}
                      style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '80%',
                        height: '3px',
                        background: 'linear-gradient(90deg, transparent 0%, #2C3E2D 20%, #2C3E2D 80%, transparent 100%)',
                        borderRadius: '2px',
                        transformOrigin: 'center',
                        boxShadow: '0 0 12px rgba(44, 62, 45, 0.6)'
                      }}
                    />
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Правая секция - Языки и Бургер */}
          <div style={{
            flex: '0 0 200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1rem',
            height: '65px',
            margin: 0,
            padding: '0 1rem 0 0'
          }}>
            {/* Бургер-меню для мобильных */}
            <motion.button
              className="mobile-burger"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.25rem',
                height: '2.25rem',
                padding: 0,
                background: 'rgba(144, 179, 167, 0.1)',
                border: '1px solid rgba(144, 179, 167, 0.2)',
                borderRadius: '8px',
                color: '#2C3E2D',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                marginRight: '0'
              }}
            >
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                {/* Верхняя линия */}
                <motion.line
                  x1="3"
                  y1="6"
                  x2="17"
                  y2="6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    rotate: isMobileMenuOpen ? 45 : 0,
                    y: isMobileMenuOpen ? 4 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  style={{ transformOrigin: '10px 6px' }}
                />
                
                {/* Средняя линия */}
                <motion.line
                  x1="3"
                  y1="10"
                  x2="17"
                  y2="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    opacity: isMobileMenuOpen ? 0 : 1,
                    scaleX: isMobileMenuOpen ? 0.3 : 1,
                  }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                  style={{ transformOrigin: '10px 10px' }}
                />
                
                {/* Нижняя линия */}
                <motion.line
                  x1="3"
                  y1="14"
                  x2="17"
                  y2="14"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{
                    rotate: isMobileMenuOpen ? -45 : 0,
                    y: isMobileMenuOpen ? -4 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  style={{ transformOrigin: '10px 14px' }}
                />
              </motion.svg>
            </motion.button>
            
            <div className="language-selector" style={{ 
              position: 'relative', 
              display: 'flex', 
              alignItems: 'center', 
              height: '65px',
              margin: 0,
              padding: 0,
              width: '64px', // Размер под новую кнопку
              flexShrink: 0 // Предотвращаем сжатие
            }}>
              <motion.button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: isLanguageDropdownOpen ? 'rgba(144, 179, 167, 0.08)' : 'rgba(255, 255, 255, 0.9)',
                  border: `1px solid ${isLanguageDropdownOpen ? '#90B3A7' : 'rgba(144, 179, 167, 0.2)'}`,
                  borderRadius: '8px',
                  color: isLanguageDropdownOpen ? '#90B3A7' : '#374151',
                  fontSize: '13px',
                  fontWeight: '600',
                  fontFamily: '"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '36px',
                  minWidth: '56px',
                  margin: 0,
                  position: 'relative',
                  boxShadow: isLanguageDropdownOpen 
                    ? '0 4px 12px rgba(144, 179, 167, 0.25)' 
                    : '0 2px 4px rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(8px)'
                }}
                onMouseEnter={(e) => {
                  if (!isLanguageDropdownOpen) {
                    e.target.style.borderColor = '#90B3A7';
                    e.target.style.color = '#90B3A7';
                    e.target.style.background = 'rgba(144, 179, 167, 0.06)';
                    e.target.style.boxShadow = '0 4px 8px rgba(144, 179, 167, 0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLanguageDropdownOpen) {
                    e.target.style.borderColor = 'rgba(144, 179, 167, 0.2)';
                    e.target.style.color = '#374151';
                    e.target.style.background = 'rgba(255, 255, 255, 0.9)';
                    e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                  }
                }}
              >
                {currentLanguage.code.toUpperCase()}
                
                {/* Элегантная стрелочка */}
                <motion.svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{
                    marginLeft: '4px',
                    flexShrink: 0,
                    opacity: 0.7
                  }}
                  animate={{ 
                    rotate: isLanguageDropdownOpen ? 180 : 0 
                  }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeInOut"
                  }}
                >
                  <path 
                    d="M6 9l6 6 6-6" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </motion.svg>
              </motion.button>

              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div
                    initial={{ 
                      opacity: 0, 
                      y: -8, 
                      scale: 0.95
                    }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      scale: 1
                    }}
                    exit={{ 
                      opacity: 0, 
                      y: -8, 
                      scale: 0.95
                    }}
                    transition={{ 
                      duration: 0.2,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 8px)',
                      right: 0,
                      background: 'rgba(255, 255, 255, 0.95)',
                      border: '1px solid rgba(144, 179, 167, 0.15)',
                      borderRadius: '12px',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(144, 179, 167, 0.08)',
                      padding: '8px',
                      minWidth: '140px',
                      zIndex: 999998,
                      transformOrigin: 'top right',
                      backdropFilter: 'blur(12px)'
                    }}
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.05 }
                        }}
                        onClick={() => changeLanguage(lang.code)}
                        style={{
                          width: '100%',
                          padding: '10px 14px',
                          textAlign: 'left',
                          background: i18n.language === lang.code ? 'rgba(144, 179, 167, 0.1)' : 'transparent',
                          border: 'none',
                          color: i18n.language === lang.code ? '#90B3A7' : '#374151',
                          fontWeight: i18n.language === lang.code ? '600' : '500',
                          fontSize: '14px',
                          fontFamily: '"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                          cursor: 'pointer',
                          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px'
                        }}
                        whileHover={{ 
                          backgroundColor: i18n.language === lang.code ? 'rgba(144, 179, 167, 0.15)' : 'rgba(144, 179, 167, 0.08)',
                          x: 2
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <span style={{ fontSize: '16px' }}>
                          {lang.code === 'ru' ? '🇷🇺' : lang.code === 'en' ? '🇺🇸' : '🇹🇭'}
                        </span>
                        <span style={{ flex: 1 }}>
                          {lang.name}
                        </span>
                        {i18n.language === lang.code && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              background: '#90B3A7'
                            }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </header>

      {/* Мобильное меню */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'fixed',
                top: '65px',
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(44, 62, 45, 0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: 999996
              }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsMobileMenuOpen(false);
              }}
            />
            
            {/* Slide-in контейнер */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200
              }}
              style={{
                position: 'fixed',
                top: '65px',
                right: 0,
                width: '100%',
                maxWidth: '20rem',
                height: 'calc(100vh - 65px)',
                background: '#ffffff',
                backdropFilter: 'blur(20px)',
                borderLeft: '1px solid rgba(144, 179, 167, 0.1)',
                zIndex: 999997,
                overflowY: 'auto',
                boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{
                padding: '2rem 1.5rem',
                minHeight: 'calc(100vh - 65px)',
                display: 'flex',
                flexDirection: 'column'
              }}>

                {/* Навигационные ссылки */}
                <ul style={{
                  listStyle: 'none',
                  margin: 0,
                  padding: 0,
                  flex: 1,
                  paddingTop: '1rem'
                }}>
                  {navItems.map((item, index) => (
                    <li key={item.path} style={{ marginBottom: '0.5rem' }}>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ 
                          opacity: 1, 
                          x: 0,
                          transition: { delay: index * 0.1 }
                        }}
                      >
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            if (item.path !== location.pathname) {
                              debouncedNavigate(item.path);
                            }
                            setIsMobileMenuOpen(false);
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1rem',
                            fontFamily: '"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                            fontSize: '1.125rem',
                            textDecoration: 'none',
                            borderRadius: '12px',
                            transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                            cursor: 'pointer',
                            background: isActive(item.path) ? 'rgba(144, 179, 167, 0.1)' : 'transparent',
                            transform: isActive(item.path) ? 'translateX(0.25rem)' : 'translateX(0)',
                            fontWeight: isActive(item.path) ? '600' : '500',
                            color: isActive(item.path) ? '#90B3A7' : '#2C3E2D'
                          }}
                        >
                          {item.label}
                        </div>
                      </motion.div>
                    </li>
                  ))}
                </ul>

                {/* Языковая секция */}
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '2rem',
                  borderTop: '1px solid rgba(144, 179, 167, 0.1)'
                }}>
                  <h3 style={{
                    fontFamily: '"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#8B9A8E',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem'
                  }}>
                    {t('common.select_language')}
                  </h3>
                  
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.5rem'
                  }}>
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          changeLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        style={{
                          padding: '0.75rem',
                          background: i18n.language === lang.code ? 'rgba(144, 179, 167, 0.15)' : 'rgba(144, 179, 167, 0.05)',
                          border: `1px solid ${i18n.language === lang.code ? 'rgba(144, 179, 167, 0.3)' : 'rgba(144, 179, 167, 0.1)'}`,
                          borderRadius: '8px',
                          color: i18n.language === lang.code ? '#90B3A7' : '#2C3E2D',
                          fontFamily: '"KAIF", "Inter", -apple-system, BlinkMacSystemFont, sans-serif',
                          fontSize: '0.875rem',
                          fontWeight: i18n.language === lang.code ? '600' : '500',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {lang.code.toUpperCase()}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

// CSS стили для респонсивности
const headerStyles = `
  .kaif-header .desktop-nav {
    display: flex;
  }
  
  .kaif-header .mobile-burger {
    display: none;
  }
  
  .kaif-header .language-selector {
    display: flex;
  }
  
  @media (max-width: 1024px) {
    .kaif-header .desktop-nav {
      gap: 1.5rem !important;
    }
    
    .kaif-header .desktop-nav > div {
      padding: 0 0.75rem !important;
    }
  }
  
  @media (max-width: 768px) {
    .kaif-header .desktop-nav {
      display: none !important;
    }
    
    .kaif-header .mobile-burger {
      display: flex !important;
    }
    
    .kaif-header .language-selector {
      display: none !important;
    }
    
    .kaif-header > div {
      padding: 0 1rem !important;
    }
    
    .kaif-header > div > div:first-child {
      flex: 0 0 auto !important;
    }
    
    .kaif-header > div > div:last-child {
      flex: 0 0 auto !important;
      gap: 0 !important;
      width: auto !important;
    }
  }
  
  @media (max-width: 480px) {
    .kaif-header > div {
      padding: 0 0.5rem !important;
    }
    
    .kaif-header img {
      height: 32px !important;
    }
  }
  
  @media (max-width: 320px) {
    .kaif-header > div {
      padding: 0 0.25rem !important;
    }
  }
`;

// Добавляем стили в head если их еще нет
if (typeof document !== 'undefined' && !document.getElementById('header-responsive-styles')) {
  const style = document.createElement('style');
  style.id = 'header-responsive-styles';
  style.textContent = headerStyles;
  document.head.appendChild(style);
}

export default Header; 