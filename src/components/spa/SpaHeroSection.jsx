import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  SparklesIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// ОПТИМИЗИРОВАННЫЙ SPA HERO (БЕЗ ТЯЖЕЛЫХ ИЗОБРАЖЕНИЙ)
// =============================================================================

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    #fcfaf8 0%,
    #f7f4f0 60%,
    #f4f0eb 100%
  );
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
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
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const MainContent = styled(motion.div)`
  position: relative;
  text-align: left;
  max-width: 600px;
  z-index: 10;
  
  @media (max-width: 1023px) {
    text-align: center;
    margin: 0 auto;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(212, 165, 116, 0.1);
  border: 1px solid rgba(212, 165, 116, 0.2);
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #8A6C55;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #D4A574;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #5A6B5D;
`;

const Subtitle = styled(motion.h2)`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 2rem;
  color: #7A8A7D;
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #6B7B6E;
  margin-bottom: 3rem;
  max-width: 480px;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
    gap: 1.5rem;
  }
`;

const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #90B3A7 0%, #7A8A7D 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.3);
  }
`;

const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #5A6B5D;
  border: 2px solid #90B3A7;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  &:hover {
    background: #90B3A7;
    color: white;
  }
`;

// Простой декоративный элемент вместо изображений
const DecorativeSection = styled(motion.div)`
  position: relative;
  min-height: 400px;
  background: linear-gradient(135deg, 
    rgba(144, 179, 167, 0.1) 0%, 
    rgba(212, 165, 116, 0.1) 100%
  );
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 3rem 2rem;
  
  @media (max-width: 1023px) {
    min-height: 300px;
    padding: 2rem 1rem;
  }
`;

const DecorativeIcon = styled(motion.div)`
  width: 6rem;
  height: 6rem;
  background: linear-gradient(135deg, #90B3A7 0%, #D4A574 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  svg {
    width: 3rem;
    height: 3rem;
    color: white;
  }
`;

const DecorativeText = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 1rem;
`;

const DecorativeSubtext = styled.p`
  font-size: 1rem;
  color: #7A8A7D;
  max-width: 300px;
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

            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {t('spa.hero.description', 'Откройте для себя широкий спектр релаксирующих процедур, массажей и beauty-услуг, созданных для вашего полного комфорта и восстановления.')}
            </Description>

            <CTAContainer
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
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

          <DecorativeSection
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <DecorativeIcon
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <HeartIcon />
            </DecorativeIcon>
            
            <DecorativeText>
              {t('spa.hero.experience_title', 'Уникальный опыт')}
            </DecorativeText>
            
            <DecorativeSubtext>
              {t('spa.hero.experience_text', 'Профессиональные мастера, премиальная косметика и индивидуальный подход к каждому гостю')}
            </DecorativeSubtext>
          </DecorativeSection>
        </HeroGrid>
      </ContentWrapper>
    </HeroContainer>
  );
});

SpaHeroSection.displayName = 'SpaHeroSection';

export default SpaHeroSection;
