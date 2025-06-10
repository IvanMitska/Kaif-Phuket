import React from 'react';
import styled, { keyframes } from 'styled-components';

// Импортируем логотип
import logoHeader from '../../assets/images/logos/logo-header.png';

// Минимальные CSS анимации
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const logoAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  
  /* Оптимизированные анимации */
  animation: ${fadeIn} 0.2s ease-out forwards;
  
  &.exiting {
    animation: ${fadeOut} 0.3s ease-in forwards;
  }
  
  /* Оптимизация производительности */
  will-change: opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 180px;
  height: auto;
  object-fit: contain;
  
  /* Упрощенная анимация */
  animation: ${logoAppear} 0.6s ease-out 0.1s both;
  
  /* Оптимизация */
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  
  @media (min-width: 768px) {
    width: 220px;
  }
  
  @media (min-width: 1024px) {
    width: 260px;
  }
`;

const LoadingScreen = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = React.useState(isVisible);
  const [isExiting, setIsExiting] = React.useState(false);

  React.useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setIsExiting(false);
    } else if (shouldRender) {
      setIsExiting(true);
      // Уменьшаем время анимации
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsExiting(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, shouldRender]);

  if (!shouldRender) return null;

  return (
    <LoadingContainer className={isExiting ? 'exiting' : ''}>
      <LogoContainer>
        <LogoImage
          src={logoHeader}
          alt="KAIF"
          loading="eager"
        />
      </LogoContainer>
    </LoadingContainer>
  );
};

export default LoadingScreen; 