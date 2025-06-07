import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

// Импортируем логотип
import headerLogo from '../../assets/images/logos/new-hero-logo.png';

// =============================================================================
// MODERN KAIF HEADER - CLEAN & BEAUTIFUL
// =============================================================================

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(144, 179, 167, 0.1);
  transition: all 0.3s ease;
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LogoSection = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const Logo = styled.img`
  height: 2.5rem;
  width: auto;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    height: 2.2rem;
  }
`;

const Navigation = styled.nav`
  display: none;
  
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 2.5rem;
  }
`;

const NavLink = styled(Link)`
  color: #2C3E2D;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #90B3A7;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #90B3A7;
    
    &::after {
      width: 100%;
    }
  }
  
  &.active {
    color: #90B3A7;
    font-weight: 600;
    
    &::after {
      width: 100%;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

// Языковой селектор
const LanguageSelector = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(144, 179, 167, 0.1);
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 25px;
  color: #2C3E2D;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(144, 179, 167, 0.15);
    border-color: rgba(144, 179, 167, 0.3);
    transform: translateY(-1px);
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 120px;
  background: white;
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 12px;
  padding: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  opacity: ${props => props.$isOpen ? '1' : '0'};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  transform: translateY(${props => props.$isOpen ? '0' : '-10px'});
  transition: all 0.2s ease;
  z-index: 1001;
`;

const LanguageOption = styled.button`
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  background: ${({ $active }) => $active ? 'rgba(144, 179, 167, 0.1)' : 'transparent'};
  border: none;
  border-radius: 8px;
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

// Мобильное меню
const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  
  @media (max-width: 1023px) {
    display: flex;
  }
`;

const MenuLine = styled.div`
  width: 1.5rem;
  height: 2px;
  background: #2C3E2D;
  border-radius: 1px;
  transition: all 0.3s ease;
  transform-origin: center;
  
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  
  ${({ $isOpen }) => $isOpen && `
    &:nth-child(1) {
      transform: rotate(45deg) translate(3px, 3px);
    }
    
    &:nth-child(2) {
      opacity: 0;
    }
    
    &:nth-child(3) {
      transform: rotate(-45deg) translate(3px, -3px);
    }
  `}
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 6rem;
`;

const MobileNavLink = styled(Link)`
  display: block;
  color: #2C3E2D;
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: 500;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(144, 179, 167, 0.1);
  transition: color 0.3s ease;
  
  &:hover,
  &.active {
    color: #90B3A7;
  }
`;

const MobileLanguageSection = styled.div`
  margin-top: auto;
  padding-top: 2rem;
  border-top: 1px solid rgba(144, 179, 167, 0.1);
`;

const MobileLanguageTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: #666;
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const MobileLanguageGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const MobileLanguageButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ $active }) => $active ? '#90B3A7' : '#666'};
  font-size: 1rem;
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #90B3A7;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #2C3E2D;
  
  &:hover {
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

  const isActive = (path) => location.pathname === path;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'th', name: 'ไทย', flag: '🇹🇭' }
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

  return (
    <>
      <StyledHeader>
        <HeaderContainer>
          <LogoSection to="/">
            <Logo src={headerLogo} alt="KAIF" />
          </LogoSection>

          <Navigation>
            <NavLink 
              to="/" 
              className={isActive('/') ? 'active' : ''}
            >
              {t('navigation.home')}
            </NavLink>
            <NavLink 
              to="/restaurant" 
              className={isActive('/restaurant') ? 'active' : ''}
            >
              {t('navigation.restaurant')}
            </NavLink>
            <NavLink 
              to="/spa" 
              className={isActive('/spa') ? 'active' : ''}
            >
              {t('navigation.spa')}
            </NavLink>
            <NavLink 
              to="/beauty" 
              className={isActive('/beauty') ? 'active' : ''}
            >
              {t('navigation.beauty')}
            </NavLink>
            <NavLink 
              to="/sports" 
              className={isActive('/sports') ? 'active' : ''}
            >
              {t('navigation.sports')}
            </NavLink>
          </Navigation>

          <RightSection>
            <LanguageSelector className="language-selector">
              <LanguageButton
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                <span>{currentLanguage.flag}</span>
                <span>{currentLanguage.code.toUpperCase()}</span>
                <span style={{ transform: isLanguageDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}>
                  ▼
                </span>
              </LanguageButton>
              
              <LanguageDropdown $isOpen={isLanguageDropdownOpen}>
                {languages.map((lang) => (
                  <LanguageOption
                    key={lang.code}
                    $active={i18n.language === lang.code}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.flag} {lang.name}
                  </LanguageOption>
                ))}
              </LanguageDropdown>
            </LanguageSelector>

            <MobileMenuButton
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
        <MobileMenu>
          <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
            ×
          </CloseButton>
          
          <MobileNavLink 
            to="/" 
            className={isActive('/') ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navigation.home')}
          </MobileNavLink>
          <MobileNavLink 
            to="/restaurant" 
            className={isActive('/restaurant') ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navigation.restaurant')}
          </MobileNavLink>
          <MobileNavLink 
            to="/spa" 
            className={isActive('/spa') ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navigation.spa')}
          </MobileNavLink>
          <MobileNavLink 
            to="/beauty" 
            className={isActive('/beauty') ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navigation.beauty')}
          </MobileNavLink>
          <MobileNavLink 
            to="/sports" 
            className={isActive('/sports') ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t('navigation.sports')}
          </MobileNavLink>

          <MobileLanguageSection>
            <MobileLanguageTitle>{t('common.select_language')}</MobileLanguageTitle>
            <MobileLanguageGrid>
              {languages.map((lang) => (
                <MobileLanguageButton
                  key={lang.code}
                  $active={i18n.language === lang.code}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.code.toUpperCase()}
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