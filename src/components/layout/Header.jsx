import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Импортируем логотип
import headerLogo from '../../assets/images/logos/new-hero-logo.png';

// =============================================================================
// ELEGANT MINIMALIST KAIF HEADER
// =============================================================================

const StyledHeader = styled(motion.header)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  transition: all 0.3s ease;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0.15rem 2rem;
  position: relative;
  min-height: 50px;
  
  @media (max-width: 768px) {
    padding: 0.15rem 1.25rem;
    min-height: 45px;
  }
`;

const LogoSection = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  z-index: 10;
  margin-left: 0.5rem;
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const Logo = styled.img`
  height: auto;
  max-height: 32px;
  width: auto;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    max-height: 28px;
  }
`;

const Navigation = styled.nav`
  display: none;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2rem;
    height: 100%;
  }
`;

const NavLink = styled(Link)`
  color: #374151;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.8rem;
  letter-spacing: 0.01em;
  position: relative;
  padding: 0.5rem 0;
  transition: all 0.3s ease;
  text-transform: uppercase;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 1px;
    background: #90B3A7;
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }
  
  &:hover {
    color: #90B3A7;
    
    &::before {
      width: 100%;
    }
  }
  
  &:active {
    transform: translateY(1px);
    color: #7a9d93;
  }
  
  &.active {
    color: #90B3A7;
    font-weight: 500;
    
    &::before {
      width: 100%;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 10;
  height: 100%;
`;

// Элегантный языковой селектор без стрелки
const LanguageSelector = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const LanguageButton = styled(motion.button)`
  padding: 0.4rem 0.6rem;
  background: transparent;
  border: 1px solid rgba(107, 114, 128, 0.2);
  border-radius: 6px;
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  min-width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    border-color: #90B3A7;
    color: #90B3A7;
    background: rgba(144, 179, 167, 0.05);
  }
`;

const LanguageDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 100px;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  padding: 0.4rem;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.12);
  z-index: 1001;
`;

const LanguageOption = styled(motion.button)`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  color: ${({ $active }) => $active ? '#90B3A7' : '#6b7280'};
  font-size: 0.75rem;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    background: rgba(144, 179, 167, 0.08);
    color: #90B3A7;
  }
  
  ${({ $active }) => $active && `
    background: rgba(144, 179, 167, 0.12);
  `}
`;

// Тонкое мобильное меню
const MobileMenuButton = styled(motion.button)`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1.75rem;
  height: 1.75rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 0.3s ease;
  
  @media (max-width: 1023px) {
    display: flex;
  }
  
  &:hover {
    opacity: 0.7;
  }
`;

const MenuLine = styled(motion.div)`
  width: 1rem;
  height: 1px;
  background: #6b7280;
  margin: 2px 0;
  transition: all 0.3s ease;
  transform-origin: center;
  
  &:nth-child(1) {
    transform: ${props => props.$isOpen ? 'translateY(5px) rotate(45deg)' : 'translateY(0) rotate(0)'};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.$isOpen ? '0' : '1'};
    transform: ${props => props.$isOpen ? 'translateX(10px)' : 'translateX(0)'};
  }
  
  &:nth-child(3) {
    transform: ${props => props.$isOpen ? 'translateY(-5px) rotate(-45deg)' : 'translateY(0) rotate(0)'};
  }
`;

// Мобильное меню
const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #90B3A7;
    transform: rotate(90deg);
  }
`;

const MobileNavLink = styled(Link)`
  color: #374151;
  text-decoration: none;
  font-weight: 400;
  font-size: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: all 0.3s ease;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  
  &:hover {
    color: #90B3A7;
    background: rgba(144, 179, 167, 0.05);
  }
  
  &.active {
    color: #90B3A7;
    background: rgba(144, 179, 167, 0.1);
  }
`;

const MobileLanguageSection = styled.div`
  margin-top: 2rem;
  text-align: center;
`;

const MobileLanguageTitle = styled.h3`
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
`;

const MobileLanguageGrid = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
`;

const MobileLanguageButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  background: transparent;
  border: 1px solid ${({ $active }) => $active ? '#90B3A7' : 'rgba(107, 114, 128, 0.2)'};
  border-radius: 20px;
  color: ${({ $active }) => $active ? '#90B3A7' : '#6b7280'};
  font-size: 0.8rem;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  
  &:hover {
    border-color: #90B3A7;
    color: #90B3A7;
  }
`;

// =============================================================================
// MAIN HEADER COMPONENT
// =============================================================================

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleNavClick = (path) => {
    // Сразу закрываем меню
    setIsMobileMenuOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: 'ru', name: 'Русский' },
    { code: 'en', name: 'English' },
    { code: 'th', name: 'ไทย' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  // Закрытие дропдауна при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Блокировка скролла при открытом мобильном меню
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Закрытие мобильного меню при изменении маршрута
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLanguageDropdownOpen(false);
    
    // Прокрутка вверх при смене страницы
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <StyledHeader
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <HeaderContainer>
          <LogoSection to="/">
            <Logo src={headerLogo} alt="KAIF" />
          </LogoSection>

          <Navigation>
            <NavLink 
              to="/" 
              className={isActive('/') ? 'active' : ''}
              onClick={() => handleNavClick('/')}
            >
              Главная
            </NavLink>
            <NavLink 
              to="/restaurant" 
              className={isActive('/restaurant') ? 'active' : ''}
              onClick={() => handleNavClick('/restaurant')}
            >
              Ресторан
            </NavLink>
            <NavLink 
              to="/spa" 
              className={isActive('/spa') ? 'active' : ''}
              onClick={() => handleNavClick('/spa')}
            >
              СПА
            </NavLink>
            <NavLink 
              to="/sports" 
              className={isActive('/sports') ? 'active' : ''}
              onClick={() => handleNavClick('/sports')}
            >
              Спорт
            </NavLink>
            <NavLink 
              to="/banya" 
              className={isActive('/banya') ? 'active' : ''}
              onClick={() => handleNavClick('/banya')}
            >
              Баня
            </NavLink>
          </Navigation>

          <RightSection>
            <LanguageSelector className="language-selector">
              <LanguageButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                {currentLanguage.code}
              </LanguageButton>
              
              {isLanguageDropdownOpen && (
                <LanguageDropdown
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  {languages.map((lang) => (
                    <LanguageOption
                      key={lang.code}
                      $active={i18n.language === lang.code}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => changeLanguage(lang.code)}
                    >
                      {lang.name}
                    </LanguageOption>
                  ))}
                </LanguageDropdown>
              )}
            </LanguageSelector>

            <MobileMenuButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <MenuLine $isOpen={isMobileMenuOpen} />
              <MenuLine $isOpen={isMobileMenuOpen} />
              <MenuLine $isOpen={isMobileMenuOpen} />
            </MobileMenuButton>
          </RightSection>
        </HeaderContainer>
      </StyledHeader>

      {isMobileMenuOpen && (
        <MobileMenu
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CloseButton
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            ×
          </CloseButton>
          
          <MobileNavLink 
            to="/" 
            className={isActive('/') ? 'active' : ''}
            onClick={() => handleNavClick('/')}
          >
            Главная
          </MobileNavLink>
          <MobileNavLink 
            to="/restaurant" 
            className={isActive('/restaurant') ? 'active' : ''}
            onClick={() => handleNavClick('/restaurant')}
          >
            Ресторан
          </MobileNavLink>
          <MobileNavLink 
            to="/spa" 
            className={isActive('/spa') ? 'active' : ''}
            onClick={() => handleNavClick('/spa')}
          >
            СПА
          </MobileNavLink>
          <MobileNavLink 
            to="/sports" 
            className={isActive('/sports') ? 'active' : ''}
            onClick={() => handleNavClick('/sports')}
          >
            Спорт
          </MobileNavLink>
          <MobileNavLink 
            to="/banya" 
            className={isActive('/banya') ? 'active' : ''}
            onClick={() => handleNavClick('/banya')}
          >
            Баня
          </MobileNavLink>

          <MobileLanguageSection>
            <MobileLanguageTitle>Язык</MobileLanguageTitle>
            <MobileLanguageGrid>
              {languages.map((lang) => (
                <MobileLanguageButton
                  key={lang.code}
                  $active={i18n.language === lang.code}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.code}
                </MobileLanguageButton>
              ))}
            </MobileLanguageGrid>
          </MobileLanguageSection>
        </MobileMenu>
      )}
    </>
  );
};

export default Header;