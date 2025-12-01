import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import BookingModal from '../../booking/BookingModal';

const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 52px;
  min-width: 160px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.35);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  height: 52px;
  min-width: 160px;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  svg {
    width: 1.1rem;
    height: 1.1rem;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

// =============================================================================
// ОПТИМИЗИРОВАННЫЙ RESTAURANT HERO (МИНИМАЛИСТИЧНЫЙ СТИЛЬ)
// =============================================================================

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  
  @media (max-width: 768px) {
    min-height: 100vh;
    padding: 4rem 0;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  
  picture, img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
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
    z-index: 2;
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
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
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  width: 100%;
  margin-top: 0.5rem;

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 1rem;

    button {
      width: 100%;
      max-width: 300px;
      min-width: 260px;
    }
  }

  @media (max-width: 480px) {
    button {
      max-width: 280px;
      min-width: 240px;
      height: 52px;
      font-size: 0.95rem;
    }
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
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <HeroContainer>
      <HeroBackground>
        <picture>
          <source
            srcSet="/images-optimized/restaurant/booking.jpg"
            type="image/jpeg"
          />
          <img
            src="/images-optimized/restaurant/booking.jpg"
            alt={t('restaurant.hero.image_alt', 'Restaurant interior')}
            loading="eager"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </picture>
      </HeroBackground>
      <ContentWrapper>
        <DecorativeElement 
          className="top-right"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <DecorativeElement 
          className="bottom-left"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <HeroGrid>
          <MainContent>
            <Badge
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t('restaurant.hero.label', 'Наш ресторан')}
            </Badge>
            <Title
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t('restaurant.hero.title', 'Изысканная кухня с современным подходом')}
            </Title>
            <Divider
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <Subtitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('restaurant.hero.subtitle', 'Наши шеф-повара создают уникальные блюда, сочетая традиционные рецепты с новыми кулинарными техниками.')}
            </Subtitle>
            <ButtonWrapper
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <PrimaryButton
                onClick={() => menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                {t('restaurant.hero.button', 'Наше меню')}
                <ArrowRightIcon />
              </PrimaryButton>
              <SecondaryButton
                onClick={() => setIsBookingModalOpen(true)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                {t('common.book', 'Забронировать')}
              </SecondaryButton>
            </ButtonWrapper>
          </MainContent>
        </HeroGrid>
      </ContentWrapper>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={t('restaurant.booking.service', 'Бронирование столика')}
        source="Restaurant - Hero"
      />
    </HeroContainer>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
