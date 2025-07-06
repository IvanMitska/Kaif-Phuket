import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const BannerContainer = styled.div`
  position: fixed;
  top: 75px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 998;
  width: 100%;
  max-width: 900px;
  padding: 0 20px;
  pointer-events: ${props => props.isVisible ? 'auto' : 'none'};
  opacity: ${props => props.isVisible ? 1 : 0};
  transition: all 0.3s ease-in-out;
`;

const BannerContent = styled.div`
  background: linear-gradient(135deg, #90B3A7 0%, #7A9B8F 100%);
  border-radius: 12px;
  padding: 14px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 12px 16px;
    flex-direction: column;
    text-align: center;
    gap: 4px;
    margin: 0 4px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  position: relative;
  padding-right: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 6px;
    padding-right: 0;
  }
`;

const Title = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Subtitle = styled.span`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 400;
  flex: 1;

  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.15);
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  padding: 4px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  line-height: 1;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: translateY(-50%) scale(1.05);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-top: 4px;
    font-size: 16px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const isClosed = localStorage.getItem('kaifPromoClosed') === 'true';
    if (!isClosed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('kaifPromoClosed', 'true');
  };

  return (
    <BannerContainer isVisible={isVisible}>
      <BannerContent>
        <ContentWrapper>
          <Title>{t('promo.title')}</Title>
          <Subtitle>{t('promo.subtitle')}</Subtitle>
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
