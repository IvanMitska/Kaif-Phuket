import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  SparklesIcon,
  StarIcon
} from '@heroicons/react/24/solid';
import heroRestaurantImg from '../../assets/images/hero/hero-restaurant.jpg';

// =============================================================================
// ОПТИМИЗИРОВАННЫЙ SPA HERO (БЕЗ ТЯЖЕЛЫХ ИЗОБРАЖЕНИЙ)
// =============================================================================

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background: url(${heroRestaurantImg});
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
      135deg, 
      rgba(0, 0, 0, 0.5) 0%, 
      rgba(0, 0, 0, 0.3) 60%,
      rgba(0, 0, 0, 0.6) 100%
    );
    z-index: 1;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    background-attachment: scroll;
    min-height: 100vh; /* Оставляем полную высоту чтобы скрыть "Наши услуги" */
    padding: 4rem 0;
  }
  
  @media (max-width: 480px) {
    min-height: 100vh; /* Полная высота экрана на мобильных */
    padding: 3rem 0;
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
  
  @media (max-width: 480px) {
    padding: 0 2rem;
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
  max-width: 800px;
  width: 100%;
  z-index: 10;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (max-width: 768px) {
    max-width: 95%;
    padding: 0 0.5rem;
  }
  
  @media (max-width: 480px) {
    max-width: 100%;
    padding: 0;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #D4A574;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
    padding: 0.9rem 1.8rem;
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    margin-bottom: 3rem;
    
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.2rem, 6vw, 3.8rem);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 100%;
  word-wrap: break-word;
  hyphens: auto;
  
  @media (max-width: 768px) {
    font-size: clamp(1.8rem, 5vw, 2.5rem);
    margin-bottom: 2rem;
    line-height: 1.3;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.6rem, 6vw, 2rem);
    margin-bottom: 2.5rem;
    line-height: 1.4;
  }
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.125rem, 2.2vw, 1.4rem);
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 3rem;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  text-align: center;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  word-wrap: break-word;
  
  @media (max-width: 768px) {
    margin-bottom: 3.5rem;
    font-size: clamp(1.1rem, 3vw, 1.25rem);
    line-height: 1.6;
    max-width: 95%;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1rem, 4vw, 1.2rem);
    margin-bottom: 4rem;
    line-height: 1.6;
    max-width: 100%;
  }
`;



const CTAContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1.5rem;
    max-width: 600px;
  }
  
  @media (max-width: 768px) {
    gap: 1.5rem;
    max-width: 90%;
    flex-direction: column;
  }
  
  @media (max-width: 480px) {
    gap: 1.2rem;
    max-width: 95%;
    flex-direction: column;
  }
`;

const PrimaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.2rem 2rem;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  min-height: 54px;
  min-width: 200px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
  flex: 1;
  
  @media (max-width: 640px) {
    white-space: normal;
    line-height: 1.3;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  }
  
  svg {
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
  }
  
  @media (min-width: 640px) {
    max-width: 280px;
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 2rem;
    font-size: 1rem;
    min-height: 54px;
    min-width: 240px;
    max-width: 100%;
    flex: none;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 1.5rem;
    font-size: 0.95rem;
    min-height: 52px;
    min-width: 200px;
    max-width: 100%;
    
    svg {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
`;

const SecondaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.2rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  min-height: 54px;
  min-width: 200px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  text-align: center;
  white-space: nowrap;
  flex: 1;
  
  @media (max-width: 640px) {
    white-space: normal;
    line-height: 1.3;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  svg {
    width: 1.2rem;
    height: 1.2rem;
    flex-shrink: 0;
  }
  
  @media (min-width: 640px) {
    max-width: 280px;
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 2rem;
    font-size: 1rem;
    min-height: 54px;
    min-width: 240px;
    max-width: 100%;
    flex: none;
  }
  
  @media (max-width: 480px) {
    padding: 1.2rem 1.5rem;
    font-size: 0.95rem;
    min-height: 52px;
    min-width: 200px;
    max-width: 100%;
    
    svg {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
`;



const SpaHeroSection = memo(() => {
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <ContentWrapper>
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
              <SparklesIcon />
              {t('spa.hero.badge', 'Премиум СПА')}
            </Badge>

            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {t('spa.hero.title', 'Погрузитесь в мир релаксации и красоты')}
            </Title>

            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t('spa.hero.subtitle', 'Профессиональные СПА процедуры в роскошной атмосфере KAIF')}
            </Subtitle>



            <CTAContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <PrimaryButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('spa.hero.book_now', 'Записаться на процедуру')}
                <ArrowRightIcon />
              </PrimaryButton>

              <SecondaryButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('spa.hero.learn_more', 'Узнать больше')}
              </SecondaryButton>
            </CTAContainer>
          </MainContent>


        </HeroGrid>
      </ContentWrapper>
    </HeroContainer>
  );
});

SpaHeroSection.displayName = 'SpaHeroSection';

export default SpaHeroSection;
