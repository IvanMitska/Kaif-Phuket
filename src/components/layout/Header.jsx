import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Импортируем логотип
import headerLogo from '../../assets/images/logos/new-hero-logo.png';

// =============================================================================
// KAIF HEADER COMPONENT
// =============================================================================

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.98);
  border-bottom: 1px solid rgba(144, 179, 167, 0.08);
  
  /* Современная тень */
  box-shadow: 
    0 1px 3px rgba(0, 0, 0, 0.02),
    0 4px 12px rgba(0, 0, 0, 0.03),
    0 16px 32px rgba(0, 0, 0, 0.02);
  
  /* Полная очистка от всех возможных артефактов */
  &::before,
  &::after {
    display: none !important;
  }
  
  * {
    &::before,
    &::after {
      display: none !important;
    }
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 4rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;



const Logo = styled.img`
  height: 2.5rem;
  width: auto;
  
  @media (max-width: 768px) {
    height: 3rem;
  }
`;

const Nav = styled.nav`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    gap: 2rem;
  }
`;

const NavLink = styled(Link)`
  color: #2C3E2D;
  text-decoration: none;
  font-weight: 500;
  position: relative;
  
  &:hover {
    color: #90B3A7;
  }
  
  &.active {
    color: #90B3A7;
    font-weight: 600;
  }
  

`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const LanguageSelector = styled.div`
  position: relative;
`;

const LanguageButton = styled.button`
  padding: 0.625rem 1rem;
  background: rgba(144, 179, 167, 0.06);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
  color: #2C3E2D;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Современная тень */
  box-shadow: 
    0 1px 3px rgba(144, 179, 167, 0.08),
    0 4px 12px rgba(144, 179, 167, 0.04);
  
  &:hover {
    background: rgba(144, 179, 167, 0.12);
    transform: translateY(-1px);
    box-shadow: 
      0 2px 6px rgba(144, 179, 167, 0.12),
      0 8px 24px rgba(144, 179, 167, 0.08);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 480px) {
    display: none;
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 120px;
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 8px;
  padding: 0.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 100;
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: all 0.2s ease;
`;

const LanguageOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: ${({ $active }) => $active ? 'rgba(144, 179, 167, 0.1)' : 'transparent'};
  border: none;
  border-radius: 6px;
  color: ${({ $active }) => $active ? '#90B3A7' : '#2C3E2D'};
  font-size: 0.875rem;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  
  &:hover {
    background: rgba(144, 179, 167, 0.1);
    color: #90B3A7;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: rgba(144, 179, 167, 0.06);
  border: none;
  border-radius: 16px;
  cursor: pointer;
  font-size: 1.2rem;
  color: #2C3E2D;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  /* Убираем все псевдоэлементы */
  &::before,
  &::after {
    display: none !important;
  }
  
  /* Современная тень */
  box-shadow: 
    0 1px 3px rgba(144, 179, 167, 0.08),
    0 4px 12px rgba(144, 179, 167, 0.04);
  
  &:hover {
    background: rgba(144, 179, 167, 0.12);
    transform: translateY(-1px);
    box-shadow: 
      0 2px 6px rgba(144, 179, 167, 0.12),
      0 8px 24px rgba(144, 179, 167, 0.08);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 
      0 1px 3px rgba(144, 179, 167, 0.08),
      0 4px 12px rgba(144, 179, 167, 0.04);
  }
  
  ${({ $isOpen }) => $isOpen && `
    background: rgba(144, 179, 167, 0.15);
    transform: rotate(90deg);
    
    &:hover {
      transform: rotate(90deg) translateY(-1px);
    }
  `}
  
  @media (min-width: 1024px) {
    display: none;
  }
  
  @media (max-width: 480px) {
    width: 2.75rem;
    height: 2.75rem;
    font-size: 1.1rem;
    border-radius: 14px;
  }
`;

// Добавляем стили для мобильного меню
const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 320px;
  max-width: 85vw;
  background: white;
  border-left: 1px solid rgba(144, 179, 167, 0.08);
  z-index: 95;
  overflow-y: auto;
  
  /* Убираем все псевдоэлементы */
  &::before,
  &::after {
    display: none !important;
  }
  
  /* Глобальная защита от артефактов */
  * {
    &::before,
    &::after {
      display: none !important;
    }
  }
  
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.08);
  
  @media (min-width: 1024px) {
    display: none;
  }
  
  @media (max-width: 480px) {
    width: 100vw;
    max-width: 100vw;
  }
`;

const MobileMenuContent = styled.div`
  padding: 2rem 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(144, 179, 167, 0.1);
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(144, 179, 167, 0.1);
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
  color: #2C3E2D;
  transition: all 0.3s ease;
  position: relative;
  
  /* Убираем все псевдоэлементы */
  &::before,
  &::after {
    display: none !important;
  }
  
  &:hover {
    background: rgba(144, 179, 167, 0.2);
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 4px 15px rgba(144, 179, 167, 0.3);
  }
  
  &:active {
    transform: rotate(90deg) scale(0.95);
  }
`;

const MobileNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
`;

const MobileNavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 1.25rem 1.5rem;
  color: #2C3E2D;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  margin: 0.25rem 0;
  
  /* Убираем все псевдоэлементы */
  &::before,
  &::after {
    display: none !important;
  }
  
  &:hover {
    background: rgba(144, 179, 167, 0.08);
    color: #90B3A7;
    transform: translateX(4px);
    box-shadow: 
      0 2px 8px rgba(144, 179, 167, 0.08),
      0 4px 16px rgba(144, 179, 167, 0.04);
  }
  
  &.active {
    background: rgba(144, 179, 167, 0.12);
    color: #90B3A7;
    font-weight: 600;
    box-shadow: 
      0 2px 8px rgba(144, 179, 167, 0.12),
      0 4px 16px rgba(144, 179, 167, 0.06);
  }
`;

const MobileLanguageSection = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(144, 179, 167, 0.1);
`;

const MobileLanguageTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: #8B9A8E;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  text-align: center;
`;

const MobileLanguageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`;

const MobileLanguageButton = styled.button`
  padding: 1rem;
  background: ${({ $active }) => $active ? 'rgba(144, 179, 167, 0.12)' : 'rgba(144, 179, 167, 0.04)'};
  border: none;
  border-radius: 16px;
  color: ${({ $active }) => $active ? '#90B3A7' : '#2C3E2D'};
  font-size: 0.9rem;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  
  /* Убираем все псевдоэлементы */
  &::before,
  &::after {
    display: none !important;
  }
  
  /* Современная тень */
  box-shadow: ${({ $active }) => $active ? 
    '0 2px 8px rgba(144, 179, 167, 0.12), 0 4px 16px rgba(144, 179, 167, 0.06)' :
    '0 1px 3px rgba(144, 179, 167, 0.06), 0 2px 8px rgba(144, 179, 167, 0.03)'};
  
  &:hover {
    background: ${({ $active }) => $active ? 'rgba(144, 179, 167, 0.15)' : 'rgba(144, 179, 167, 0.08)'};
    transform: translateY(-1px);
    box-shadow: 
      0 3px 12px rgba(144, 179, 167, 0.12),
      0 6px 24px rgba(144, 179, 167, 0.06);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const navigationLinks = [
    { path: '/', label: t('navigation.home') },
    { path: '/restaurant', label: t('navigation.restaurant') },
    { path: '/spa', label: t('navigation.spa_and_beauty') },
    { path: '/sports', label: t('navigation.sports') },
    { path: '/contacts', label: t('navigation.contacts') },
  ];

  // Проверяем активную ссылку
  const isActive = (path) => location.pathname === path;

  // Функция смены языка
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsMobileMenuOpen(false);
    setIsLangDropdownOpen(false);
  };

  // Закрываем меню при смене маршрута
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangDropdownOpen(false);
  }, [location.pathname]);

  // Блокируем скролл когда меню открыто
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

  // Закрываем dropdown при клике вне его
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          {/* Logo - всегда слева */}
          <Link to="/">
            <Logo src={headerLogo} alt="KAIF" />
          </Link>

          {/* Desktop Navigation */}
          <Nav>
            {navigationLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path}
                className={isActive(link.path) ? 'active' : ''}
              >
                {link.label}
              </NavLink>
            ))}
          </Nav>

          {/* Right Section */}
          <RightSection>
            <LanguageSelector className="language-selector">
              <LanguageButton onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}>
                {i18n.language.toUpperCase()}
                <span style={{ transform: isLangDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
                  ▼
                </span>
              </LanguageButton>
              
              <LanguageDropdown $isOpen={isLangDropdownOpen}>
                <LanguageOption 
                  $active={i18n.language === 'en'} 
                  onClick={() => changeLanguage('en')}
                >
                  English
                </LanguageOption>
                <LanguageOption 
                  $active={i18n.language === 'ru'} 
                  onClick={() => changeLanguage('ru')}
                >
                  Русский
                </LanguageOption>
                <LanguageOption 
                  $active={i18n.language === 'th'} 
                  onClick={() => changeLanguage('th')}
                >
                  ไทย
                </LanguageOption>
              </LanguageDropdown>
            </LanguageSelector>
            
            <MobileMenuButton 
              $isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button"
            >
              ☰
            </MobileMenuButton>
          </RightSection>
        </HeaderContainer>
      </StyledHeader>

      {/* Mobile Menu - только когда открыто */}
      {isMobileMenuOpen && (
        <MobileMenuContainer className="mobile-menu-container">
          <MobileMenuContent>
            <MobileMenuHeader>
              <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
                ×
              </CloseButton>
            </MobileMenuHeader>

            <MobileNavList>
              {navigationLinks.map((link, index) => (
                <MobileNavItem key={link.path}>
                  <MobileNavLink 
                    to={link.path}
                    className={isActive(link.path) ? 'active' : ''}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </MobileNavLink>
                </MobileNavItem>
              ))}
            </MobileNavList>

            <MobileLanguageSection>
              <MobileLanguageTitle>
                {t('common.select_language') || 'Выберите язык'}
              </MobileLanguageTitle>
              <MobileLanguageGrid>
                <MobileLanguageButton
                  $active={i18n.language === 'en'}
                  onClick={() => changeLanguage('en')}
                >
                  EN
                </MobileLanguageButton>
                <MobileLanguageButton
                  $active={i18n.language === 'ru'}
                  onClick={() => changeLanguage('ru')}
                >
                  RU
                </MobileLanguageButton>
                <MobileLanguageButton
                  $active={i18n.language === 'th'}
                  onClick={() => changeLanguage('th')}
                >
                  TH
                </MobileLanguageButton>
              </MobileLanguageGrid>
            </MobileLanguageSection>
          </MobileMenuContent>
        </MobileMenuContainer>
      )}
    </>
  );
};

export default Header;