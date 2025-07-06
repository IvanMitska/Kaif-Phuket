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
  top: 75px;
  left: 20px;
  right: 20px;
  z-index: 998;
  max-width: 900px;
  margin: 0 auto;
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: opacity 0.4s ease-in-out, transform 0.4s ease-in-out;
  transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(-20px)'};
`;

const BannerContent = styled.div`
  background: linear-gradient(135deg, #FF8C00 0%, #FF4500 100%);
  border-radius: 12px;
  padding: 12px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0 6px 20px rgba(255, 118, 77, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: ${pulse} 2.5s infinite ease-in-out;
  backdrop-filter: blur(10px);
  
  @media (max-width: 768px) {
    padding: 12px 16px;
    flex-direction: column;
    text-align: center;
    gap: 8px;
    margin: 0 4px;
  }
`;

const IconWrapper = styled.div`
  font-size: 22px;
  margin-right: 12px;
  color: #FFEBCD; /* Light Orange/Almond color */
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 4px;
    font-size: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 6px;
    align-items: center;
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 12px;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }
`;

const Title = styled.span`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: #FFFFFF;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Subtitle = styled.span`
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;

const CloseButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  line-height: 1;
  margin-left: 20px;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    position: absolute;
    top: -8px;
    right: -12px;
    width: 24px;
    height: 24px;
    font-size: 16px;
  }
`;

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const isClosed = localStorage.getItem('kaifPromoClosed_v3_temp') === 'true';
    if (!isClosed) {
      // Delay visibility for a subtle entrance animation
      const timer = setTimeout(() => setIsVisible(true), 300);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('kaifPromoClosed_v3_temp', 'true');
  };

  if (!isVisible) return null;

  return (
    <BannerContainer isVisible={isVisible}>
      <BannerContent>
        <ContentWrapper>
          <IconWrapper>
            <FaFire />
          </IconWrapper>
          <TextContainer>
            <Title>{t('promo.title')}</Title>
            <Subtitle>{t('promo.subtitle')}</Subtitle>
          </TextContainer>
          <CloseButton 
            onClick={handleClose} 
            aria-label="Close promotion"
          >
            ×
          </CloseButton>
        </ContentWrapper>
      </BannerContent>
    </BannerContainer>
  );
};

export default PromoBanner;
