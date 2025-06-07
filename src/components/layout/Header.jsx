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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 249, 0.98) 100%);
  backdrop-filter: blur(20px);
  z-index: 999;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-top: 5rem;
  overflow-y: auto;
`;

const MobileMenuContent = styled.div`
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
`;

const MobileNavSection = styled.div`
  margin-bottom: 3rem;
`;

const MobileNavLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #2C3E2D;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 1.25rem 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(144, 179, 167, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(144, 179, 167, 0.1), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    color: #90B3A7;
    background: rgba(144, 179, 167, 0.08);
    border-color: rgba(144, 179, 167, 0.2);
    transform: translateX(8px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.15);
    
    &::before {
      left: 100%;
    }
  }
  
  &.active {
    color: #90B3A7;
    background: rgba(144, 179, 167, 0.12);
    border-color: rgba(144, 179, 167, 0.3);
    font-weight: 700;
    
    &::after {
      content: '●';
      margin-left: auto;
      font-size: 0.8rem;
    }
  }
`;

const MobileLanguageSection = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(144, 179, 167, 0.15);
  backdrop-filter: blur(10px);
`;

const MobileLanguageTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #2C3E2D;
  margin-bottom: 1.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`;

const MobileLanguageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
`;

const MobileLanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: ${({ $active }) => $active ? 'rgba(144, 179, 167, 0.15)' : 'rgba(255, 255, 255, 0.8)'};
  border: 2px solid ${({ $active }) => $active ? '#90B3A7' : 'rgba(144, 179, 167, 0.2)'};
  border-radius: 12px;
  color: ${({ $active }) => $active ? '#90B3A7' : '#2C3E2D'};
  font-size: 1.1rem;
  font-weight: ${({ $active }) => $active ? '700' : '600'};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: rgba(144, 179, 167, 0.12);
    border-color: #90B3A7;
    color: #90B3A7;
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(144, 179, 167, 0.2);
  }
  
  &:active {
    transform: scale(0.98);
  }
  
  .flag {
    font-size: 1.5rem;
  }
  
  .name {
    flex: 1;
    text-align: left;
  }
  
  ${({ $active }) => $active && `
    &::after {
      content: '✓';
      font-size: 1.2rem;
      font-weight: bold;
    }
  `}
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(144, 179, 167, 0.2);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #2C3E2D;
  font-weight: bold;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(144, 179, 167, 0.1);
    border-color: #90B3A7;
    color: #90B3A7;
    transform: rotate(90deg) scale(1.1);
    box-shadow: 0 4px 15px rgba(144, 179, 167, 0.3);
  }
  
  &:active {
    transform: rotate(90deg) scale(0.95);
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
              {t('nav.home')}
            </NavLink>
            <NavLink 
              to="/restaurant" 
              className={isActive('/restaurant') ? 'active' : ''}
            >
              {t('nav.restaurant')}
            </NavLink>
            <NavLink 
              to="/spa" 
              className={isActive('/spa') ? 'active' : ''}
            >
              {t('nav.spa')}
            </NavLink>
            <NavLink 
              to="/beauty" 
              className={isActive('/beauty') ? 'active' : ''}
            >
              {t('nav.beauty')}
            </NavLink>
            <NavLink 
              to="/sports" 
              className={isActive('/sports') ? 'active' : ''}
            >
              {t('nav.sports')}
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
          
          <MobileMenuContent>
            <MobileNavSection>
              <MobileNavLink 
                to="/" 
                className={isActive('/') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🏠 {t('nav.home')}
              </MobileNavLink>
              <MobileNavLink 
                to="/restaurant" 
                className={isActive('/restaurant') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🍽️ {t('nav.restaurant')}
              </MobileNavLink>
              <MobileNavLink 
                to="/spa" 
                className={isActive('/spa') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🧘‍♀️ {t('nav.spa')}
              </MobileNavLink>
              <MobileNavLink 
                to="/beauty" 
                className={isActive('/beauty') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                💅 {t('nav.beauty')}
              </MobileNavLink>
              <MobileNavLink 
                to="/sports" 
                className={isActive('/sports') ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                🏋️‍♂️ {t('nav.sports')}
              </MobileNavLink>
            </MobileNavSection>

            <MobileLanguageSection>
              <MobileLanguageTitle>🌍 Язык / Language</MobileLanguageTitle>
              <MobileLanguageGrid>
                {languages.map((lang) => (
                  <MobileLanguageButton
                    key={lang.code}
                    $active={i18n.language === lang.code}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span className="flag">{lang.flag}</span>
                    <span className="name">{lang.name}</span>
                  </MobileLanguageButton>
                ))}
              </MobileLanguageGrid>
            </MobileLanguageSection>
          </MobileMenuContent>
        </MobileMenu>
      )}
    </>
  );
};

export default Header;