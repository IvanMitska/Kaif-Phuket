import React from 'react';
import { AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

// Импортируем логотип
import logoHeader from '../../assets/images/logos/logo-header.png';

// CSS анимации
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const logoAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px) scale(0.8);
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
  
  /* CSS анимация появления */
  animation: ${fadeIn} 0.3s ease-out forwards;
  
  /* Когда компонент исчезает */
  &.exiting {
    animation: ${fadeOut} 0.4s ease-in forwards;
  }
  
  /* Улучшаем производительность */
  will-change: opacity;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LogoImage = styled.img`
  width: 200px;
  height: auto;
  object-fit: contain;
  
  /* CSS анимация логотипа */
  animation: ${logoAppear} 1s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
  
  /* Улучшаем качество и производительность */
  image-rendering: -webkit-optimize-contrast;
  image-rendering: crisp-edges;
  will-change: transform, opacity;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  
  @media (min-width: 768px) {
    width: 250px;
  }
  
  @media (min-width: 1024px) {
    width: 300px;
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
      // Убираем компонент после завершения анимации исчезновения
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsExiting(false);
      }, 400);
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
        />
      </LogoContainer>
    </LoadingContainer>
  );
};

export default LoadingScreen; 