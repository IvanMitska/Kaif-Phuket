import { useState, useEffect, useMemo, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import headerLogo from '../../assets/images/logos/new-hero-logo.png';

// =============================================================================
// МАКСИМАЛЬНО ПРОСТОЙ ХЕДЕР
// =============================================================================

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState(null);
  const [debounceTimeout, setDebounceTimeout] = useState(null);
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = useCallback((path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  }, [location.pathname]);

  const changeLanguage = useCallback((lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  }, [i18n]);

  const debouncedNavigate = useCallback((path) => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    
    const timeout = setTimeout(() => {
      navigate(path);
    }, 100);
    
    setDebounceTimeout(timeout);
  }, [navigate, debounceTimeout]);

  const languages = useMemo(() => [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
    { code: 'th', name: 'ไทย' }
  ], []);

  const currentLanguage = useMemo(() => 
    languages.find(lang => lang.code === i18n.language) || languages[0]
  , [languages, i18n.language]);



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
    { path: '/', label: 'Главная' },
    { path: '/restaurant', label: 'Ресторан' },
    { path: '/spa', label: 'СПА' },
    { path: '/sports', label: 'Спорт' },
    { path: '/banya', label: 'Баня' },
    { path: '/contacts', label: 'Контакты' }
  ], []);

  const getNavLinkStyle = useCallback((path) => ({
    color: isActive(path) ? '#90B3A7' : (hoveredNav === path ? '#333333' : '#666666'),
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    position: 'relative',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0,
    cursor: 'pointer'
  }), [isActive, hoveredNav]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = 'unset';
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

  return (
    <>
      {/* Тестовый индикатор для проверки fixed позиционирования */}
      <div style={{
        position: 'fixed',
        top: '70px',
        right: '10px',
        background: 'red',
        color: 'white',
        padding: '5px 10px',
        fontSize: '12px',
        zIndex: 9999,
        borderRadius: '4px'
      }}>
        Fixed Test
      </div>
      
      <header className="kaif-header" style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '65px',
        backgroundColor: '#ffffff',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        // Принудительные стили для фиксации
        transform: 'none',
        willChange: 'auto'
      }}>
        <div style={{
          width: '100%',
          maxWidth: '1200px',
          height: '65px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 3rem',
          margin: 0,
          boxSizing: 'border-box'
        }}>
          {/* Левая секция - Логотип */}
          <div style={{
            flex: '1',
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
            >
              <img 
                src={headerLogo} 
                alt="KAIF" 
                style={{
                  height: '38px',
                  width: 'auto',
                  display: 'block',
                  margin: 0,
                  padding: 0
                }} 
              />
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
            padding: 0
          }}>
            <nav style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2.5rem',
              height: '65px',
              margin: 0,
              padding: 0,
              '@media (max-width: 768px)': {
                display: 'none'
              }
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
                    <div style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: '#90B3A7',
                      borderRadius: '1px'
                    }} />
                  )}
                  
                  {/* Hover линия с анимацией */}
                  {!isActive(item.path) && hoveredNav === item.path && (
                    <motion.div
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ scaleX: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: 'easeOut' }}
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: '#90B3A7',
                        borderRadius: '1px',
                        transformOrigin: 'left'
                      }}
                    />
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Правая секция - Языки и Бургер */}
          <div style={{
            flex: '1',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            gap: '1rem',
            height: '65px',
            margin: 0,
            padding: 0
          }}>
            {/* Бургер-меню для мобильных */}
            <motion.button
              className="mobile-burger"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '2.5rem',
                height: '2.5rem',
                padding: 0,
                background: 'rgba(144, 179, 167, 0.1)',
                border: '1px solid rgba(144, 179, 167, 0.2)',
                borderRadius: '8px',
                color: '#2C3E2D',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                marginRight: '-2rem'
              }}
            >
              <svg 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                style={{
                  width: '1.25rem',
                  height: '1.25rem',
                  transition: 'transform 0.3s ease'
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
            <div className="language-selector" style={{ 
              position: 'relative', 
              display: 'flex', 
              alignItems: 'center', 
              height: '65px',
              margin: 0,
              padding: 0
            }}>
              <button
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                style={{
                  background: '#f8f9fa',
                  border: '1px solid #e2e8f0',
                  borderRadius: '6px',
                  color: '#666666',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '36px',
                  minWidth: '50px',
                  margin: 0
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#90B3A7';
                  e.target.style.color = '#90B3A7';
                  e.target.style.background = '#f0fffe';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.color = '#666666';
                  e.target.style.background = '#f8f9fa';
                }}
              >
                {currentLanguage.code.toUpperCase()}
              </button>
              
              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 6px)',
                      right: 0,
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      borderRadius: '6px',
                      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                      padding: '6px 0',
                      minWidth: '120px',
                      zIndex: 1005
                    }}
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        style={{
                          width: '100%',
                          padding: '6px 12px',
                          textAlign: 'left',
                          background: 'none',
                          border: 'none',
                          color: i18n.language === lang.code ? '#90B3A7' : '#666666',
                          fontWeight: i18n.language === lang.code ? '600' : '500',
                          fontSize: '13px',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = '#f8fffe';
                          e.target.style.color = '#90B3A7';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'none';
                          e.target.style.color = i18n.language === lang.code ? '#90B3A7' : '#666666';
                        }}
                      >
                        {lang.name}
                      </button>
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
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(44, 62, 45, 0.5)',
                backdropFilter: 'blur(4px)',
                zIndex: 999
              }}
              onClick={() => setIsMobileMenuOpen(false)}
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
                zIndex: 999,
                overflowY: 'auto'
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
                          onClick={() => {
                            if (item.path !== location.pathname) {
                              debouncedNavigate(item.path);
                            }
                            setIsMobileMenuOpen(false);
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '1rem',
                            fontFamily: "'Inter', sans-serif",
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
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#8B9A8E',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '1rem'
                  }}>
                    SELECT LANGUAGE
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
                        onClick={() => {
                          changeLanguage(lang.code);
                          setIsMobileMenuOpen(false);
                        }}
                        style={{
                          padding: '0.75rem',
                          background: i18n.language === lang.code ? 'rgba(144, 179, 167, 0.15)' : 'rgba(144, 179, 167, 0.05)',
                          border: `1px solid ${i18n.language === lang.code ? 'rgba(144, 179, 167, 0.3)' : 'rgba(144, 179, 167, 0.1)'}`,
                          borderRadius: '8px',
                          color: i18n.language === lang.code ? '#90B3A7' : '#2C3E2D',
                          fontFamily: "'Inter', sans-serif",
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

export default HeaderComponent; 