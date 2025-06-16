import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import bookingImage from '../../../assets/images/restaurant/booking.jpg';

// =============================================================================
// ОПТИМИЗИРОВАННЫЙ RESTAURANT HERO (МИНИМАЛИСТИЧНЫЙ СТИЛЬ)
// =============================================================================

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background: url(${bookingImage});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0.7) 0%, 
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    background-attachment: scroll;
    min-height: 100vh;
    padding: 4rem 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
  
  @media (min-width: 1280px) {
    padding: 0 3rem;
  }
`;

const HeroGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
  width: 100%;
`;

const MainContent = styled(motion.div)`
  position: relative;
  text-align: center;
  max-width: 900px;
  width: 100%;
  z-index: 10;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
`;

const Divider = styled(motion.div)`
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);
  margin: 1.5rem auto 2rem;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 100%;
  word-wrap: break-word;
  font-family: 'Playfair Display', serif;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.125rem, 2.2vw, 1.4rem);
  font-weight: 400;
  line-height: 1.6;
  margin-bottom: 3.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CTAButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.9rem 1.8rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  min-height: 48px;
  min-width: 180px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-shadow: none;
  letter-spacing: 0.5px;
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    transition: transform 0.3s ease;
    margin-top: 1px;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const DecorativeElement = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  z-index: -1;
  
  &.top-right {
    top: 10%;
    right: 10%;
  }
  
  &.bottom-left {
    bottom: 10%;
    left: 10%;
  }
`;

const HeroSection = memo(({ menuSectionRef }) => {
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <ContentWrapper>
        <DecorativeElement 
          className="top-right"
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 0.6, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
        />
        <DecorativeElement 
          className="bottom-left"
          initial={{ opacity: 0, rotate: 20 }}
          animate={{ opacity: 0.6, rotate: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
        />
        
        <HeroGrid>
          <MainContent
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t('restaurant.hero.label', 'Наш ресторан')}
            </Badge>

            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('restaurant.hero.title', 'Изысканная кухня')} 
              <br />
              {t('restaurant.hero.highlight', 'с современным подходом')}
            </Title>
            
            <Divider
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 120 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />

            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {t('restaurant.hero.subtitle', 'Наши шеф-повара создают уникальные блюда, сочетая традиционные рецепты с новыми кулинарными техниками.')}
            </Subtitle>

            <ButtonWrapper
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CTAButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{t('restaurant.hero.button', 'Наше меню')}</span>
                <ArrowRightIcon />
              </CTAButton>
            </ButtonWrapper>
          </MainContent>
        </HeroGrid>
      </ContentWrapper>
    </HeroContainer>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
