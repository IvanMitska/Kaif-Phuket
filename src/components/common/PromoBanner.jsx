import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { FaFire } from 'react-icons/fa';

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 6px 20px rgba(255, 118, 77, 0.4);
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 8px 30px rgba(255, 118, 77, 0.6);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 6px 20px rgba(255, 118, 77, 0.4);
  }
`;

const BannerContainer = styled.div`
  position: fixed;
  top: 85px;
  left: 50%;
  transform: translateX(-50%) ${({ $isVisible }) => $isVisible ? 'translateY(0)' : 'translateY(-20px)'};
  z-index: 99;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
  pointer-events: none;
  opacity: ${({ $isVisible }) => $isVisible ? 1 : 0};
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
`;

const BannerContent = styled.div`
  background: linear-gradient(135deg, #CC6600 0%, #B32D00 100%);
  border-radius: 8px;
  padding: 8px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 32px;
  color: white;
  box-shadow: 0 4px 15px rgba(255, 118, 77, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${pulse} 2.5s infinite ease-in-out;
  backdrop-filter: blur(10px);
  pointer-events: auto;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 6px 40px;
    min-height: 30px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  display: flex;
  align-items: center;
  color: #FFD700;
  text-shadow: 0 0 8px rgba(255, 215, 0, 0.7);

  @media (max-width: 768px) {
    font-size: 16px;
    left: 12px;
  }
`;

const TextContent = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  margin: 0;
  padding: 0;
  transform: translateY(0);
`;

const Title = styled.span`
  display: block;
  font-family: 'KAIF', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 17px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #FFFFFF;
  text-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.5),
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 0 8px rgba(255, 255, 255, 0.2);
  line-height: 1.1;
  margin: 0;
  padding: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Subtitle = styled.span`
  display: block;
  font-family: 'KAIF', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 17px;
  color: #FFFFFF;
  font-weight: 500;
  line-height: 1.1;
  text-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.5),
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 0 8px rgba(255, 255, 255, 0.2);
  margin: 0;
  padding: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
  -webkit-font-smoothing: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: 768px) {
    right: 12px;
    width: 16px;
    height: 16px;
    font-size: 12px;
  }
`;

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  // Функция для принудительного сброса
  const resetBannerState = () => {
    localStorage.removeItem('kaifPromoClosed');
    setIsVisible(true);
  };

  useEffect(() => {
    // Проверяем, не истекла ли акция
    const endDate = new Date('2025-08-01'); // 1 августа 2025
    const now = new Date();
    
    if (now >= endDate) {
      return; // Если акция закончилась, не показываем баннер
    }

    // Проверяем, когда последний раз закрывали баннер
    const lastClosedStr = localStorage.getItem('kaifPromoClosed');
    if (lastClosedStr) {
      const lastClosed = new Date(lastClosedStr);
      const hoursSinceClose = (now - lastClosed) / (1000 * 60 * 60);
      
      // Если прошло меньше 1 часа с момента закрытия, не показываем
      if (hoursSinceClose < 1) {
        return;
      }
    }

    // Показываем баннер с небольшой задержкой
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    // Сохраняем время закрытия
    localStorage.setItem('kaifPromoClosed', new Date().toISOString());
  };

  // Добавляем обработчик для двойного клика по иконке (для разработки)
  const handleIconDoubleClick = (e) => {
    e.preventDefault();
    resetBannerState();
  };

  if (!isVisible) return null;

  return (
    <BannerContainer $isVisible={isVisible}>
      <BannerContent>
        <IconWrapper onDoubleClick={handleIconDoubleClick}>
          <FaFire />
        </IconWrapper>
        <TextContent>
          <Title>{t('promo.title')}</Title>
          <Subtitle>{t('promo.subtitle')}</Subtitle>
        </TextContent>
        <CloseButton onClick={handleClose}>×</CloseButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default PromoBanner;
