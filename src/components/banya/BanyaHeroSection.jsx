import React, { useRef, useEffect, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  FireIcon,
  StarIcon,
  BeakerIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СОВРЕМЕННЫЙ ТЕПЛЫЙ BANYA HERO - ОПТИМИЗИРОВАННАЯ ВЕРСИЯ
// =============================================================================

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background: linear-gradient(135deg, 
    #fef7f0 0%,
    #f7e8d8 60%,
    #f2dcc4 100%
  );
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(180, 142, 98, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(205, 133, 63, 0.08) 0%, transparent 50%);
    z-index: 1;
    pointer-events: none;
  }
`;

const FloatingElements = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;
`;

const FloatingCircle = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: ${props => props.$color};
  opacity: ${props => props.$opacity || 0.15};
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: ${props => props.$gradient || 'linear-gradient(135deg, rgba(180, 142, 98, 0.1) 0%, rgba(180, 142, 98, 0.01) 100%)'};
  border-radius: ${props => props.$borderRadius || '30% 70% 70% 30% / 30% 30% 70% 70%'};
  opacity: ${props => props.$opacity || 0.08};
  z-index: ${props => props.$zIndex || 1};
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
    grid-template-columns: 0.9fr 1.1fr;
    gap: 2rem;
  }
  
  @media (min-width: 1280px) {
    grid-template-columns: 0.85fr 1.15fr;
    gap: 4rem;
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
    padding-top: 2rem;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(205, 133, 63, 0.15) 0%, rgba(180, 142, 98, 0.18) 100%);
  border: 1px solid rgba(205, 133, 63, 0.25);
  border-radius: 30px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: 500;
  color: #B8804A;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(205, 133, 63, 0.12);
  letter-spacing: 0.03em;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #CD853F;
  }
`;

const Title = styled(motion.h1)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  font-weight: 600;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, 
    #8B4513 0%, 
    #A0522D 40%, 
    #CD853F 70%, 
    #DEB887 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.03em;
`;

const Subtitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 2rem;
  color: #A0522D;
  letter-spacing: 0.02em;
`;

const Description = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  line-height: 1.7;
  color: #8B6F4A;
  margin-bottom: 3rem;
  font-weight: 400;
  letter-spacing: 0.01em;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 640px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #CD853F 0%, #DEB887 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(205, 133, 63, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(205, 133, 63, 0.4);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #CD853F;
  border: 2px solid #CD853F;
  border-radius: 50px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #CD853F;
    color: white;
    transform: translateY(-2px);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const HeroVisual = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  
  @media (max-width: 1023px) {
    margin-top: 2rem;
  }
`;

const VisualContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 400px;
  background: linear-gradient(135deg, 
    rgba(205, 133, 63, 0.1) 0%, 
    rgba(222, 184, 135, 0.15) 50%,
    rgba(180, 142, 98, 0.1) 100%
  );
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(205, 133, 63, 0.15);
  border: 1px solid rgba(205, 133, 63, 0.2);
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: center;
  justify-items: center;
`;

const IconItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  
  svg {
    width: 3rem;
    height: 3rem;
    color: #CD853F;
    margin-bottom: 0.5rem;
  }
  
  span {
    font-size: 0.875rem;
    color: #8B6F4A;
    font-weight: 500;
    text-align: center;
  }
`;

const StatsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .stat-number {
    font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
    font-size: 2.5rem;
    font-weight: 700;
    color: #CD853F;
    margin-bottom: 0.5rem;
    display: block;
  }
  
  .stat-label {
    font-size: 0.875rem;
    color: #8B6F4A;
    font-weight: 500;
  }
`;

const BanyaHeroSection = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <HeroContainer>
      <FloatingElements>
        <FloatingCircle
          style={{ top: '10%', left: '5%', width: '100px', height: '100px' }}
          $color="linear-gradient(135deg, rgba(205, 133, 63, 0.1), rgba(222, 184, 135, 0.05))"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <FloatingCircle
          style={{ top: '60%', right: '10%', width: '150px', height: '150px' }}
          $color="linear-gradient(135deg, rgba(180, 142, 98, 0.08), rgba(205, 133, 63, 0.03))"
          animate={{ scale: [1, 1.1, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <FloatingShape
          style={{ top: '20%', right: '20%', width: '80px', height: '80px' }}
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </FloatingElements>
      
      <ContentWrapper>
        <HeroGrid>
          <MainContent
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Badge variants={itemVariants}>
              <FireIcon />
              {t('banya.hero.badge', 'Традиционная русская баня')}
            </Badge>
            
            <Title variants={itemVariants}>
              {t('banya.hero.title', 'Погрузитесь в мир русской бани')}
            </Title>
            
            <Subtitle variants={itemVariants}>
              {t('banya.hero.subtitle', 'Истинное наслаждение и оздоровление')}
            </Subtitle>
            
            <Description variants={itemVariants}>
              {t('banya.hero.description', 'Откройте для себя традиции русской бани в современном исполнении. Парение на березовых вениках, ароматные травы и профессиональный уход для полного расслабления и оздоровления.')}
            </Description>
            
            <CTAContainer variants={itemVariants}>
              <PrimaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('banya.hero.book_now', 'Забронировать сеанс')}
                <ArrowRightIcon />
              </PrimaryButton>
              
              <SecondaryButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('banya.hero.learn_more', 'Узнать больше')}
                <BeakerIcon />
              </SecondaryButton>
            </CTAContainer>
            
            <StatsContainer variants={itemVariants}>
              <StatItem>
                <span className="stat-number">85°C</span>
                <span className="stat-label">{t('banya.hero.temp', 'Оптимальная температура')}</span>
              </StatItem>
              <StatItem>
                <span className="stat-number">3</span>
                <span className="stat-label">{t('banya.hero.rooms', 'Парных помещения')}</span>
              </StatItem>
              <StatItem>
                <span className="stat-number">24/7</span>
                <span className="stat-label">{t('banya.hero.access', 'Доступ для гостей')}</span>
              </StatItem>
            </StatsContainer>
          </MainContent>
          
          <HeroVisual
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <VisualContainer>
              <IconGrid>
                <IconItem
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FireIcon />
                  <span>{t('banya.hero.steam', 'Пар')}</span>
                </IconItem>
                <IconItem
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <BeakerIcon />
                  <span>{t('banya.hero.herbs', 'Травы')}</span>
                </IconItem>
                <IconItem
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <UserGroupIcon />
                  <span>{t('banya.hero.company', 'Компания')}</span>
                </IconItem>
                <IconItem
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <ClockIcon />
                  <span>{t('banya.hero.relax', 'Релакс')}</span>
                </IconItem>
              </IconGrid>
            </VisualContainer>
          </HeroVisual>
        </HeroGrid>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default memo(BanyaHeroSection); 