import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Импортируем логотип
import headerLogo from '../../assets/images/logos/logo-header.png';

// Импорт локальных изображений
import heroSpaImage from '../../assets/images/hero/hero-spa.jpg';
import heroPoolImage from '../../assets/images/hero/hero-pool.jpg';
import heroRestaurantImage from '../../assets/images/hero/hero-restaurant.jpg';
import heroFitnessImage from '../../assets/images/hero/hero-fitness.jpg';

// Массив изображений для слайдера
const slideImages = [
  heroSpaImage,
  heroPoolImage,
  heroRestaurantImage,
  heroFitnessImage
];

// Основной контейнер для полноэкранного героя
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Слайдер изображений
const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

// Отдельный слайд
const Slide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${props => props.$active ? 2 : 1};
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 1.5s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, 
      rgba(0, 0, 0, 0.6) 0%, 
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0.6) 100%
    );
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.02);
    transition: transform 8s ease-out;
    animation: ${props => props.$active ? 'slowZoom 15s ease-out forwards' : 'none'};
    
    @keyframes slowZoom {
      from { transform: scale(1.02); }
      to { transform: scale(1.12); }
    }
  }
`;

// Контейнер для контента
const ContentContainer = styled.div`
  position: relative;
  z-index: 5;
  max-width: 1200px;
  width: 100%;
  padding: 0 2rem;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Небольшой текст над основным заголовком
const Overline = styled(motion.div)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  color: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  
  &::before, &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.8);
  }
  
  &::before {
    margin-right: 1rem;
  }
  
  &::after {
    margin-left: 1rem;
  }
`;

// Логотип
const Logo = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
  margin: 1rem 0 2rem;
`;

// Подзаголовок
const Subtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.8;
  margin: 0 0 2.5rem;
  max-width: 600px;
  color: rgba(255, 255, 255, 0.8);
`;

// Контейнер для кнопок
const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

// Основная кнопка
const PrimaryButton = styled(Link)`
  padding: 1.2rem 3rem;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;
  background-color: #fff;
  border: none;
  text-decoration: none;
  transition: all 0.4s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-3px);
  }
`;

// Вторичная кнопка
const SecondaryButton = styled(Link)`
  padding: 1.2rem 3rem;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-decoration: none;
  transition: all 0.4s ease;
  
  &:hover {
    border-color: #fff;
    transform: translateY(-3px);
  }
`;

// Индикаторы слайдов
const SlideIndicators = styled.div`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  display: flex;
  gap: 0.5rem;
  z-index: 10;
  
  @media (max-width: 768px) {
    bottom: 2rem;
    right: 2rem;
  }
`;

// Отдельный индикатор слайда
const Indicator = styled.div`
  width: ${props => props.$active ? '3rem' : '1rem'};
  height: 2px;
  background-color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.6)'};
  }
`;

// Индикатор скролла
const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  z-index: 10;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

// Стрелка вниз
const ArrowDown = styled(motion.div)`
  width: 12px;
  height: 12px;
  border-left: 1px solid rgba(255, 255, 255, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  transform: rotate(-45deg);
`;

const HeroFullscreen = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Эффект для автоматического переключения слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideImages.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Анимации для контента
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  // Анимация для стрелки скролла
  const scrollVariants = {
    initial: { y: -5 },
    animate: {
      y: 5,
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  };
  
  // Обработчик нажатия на индикатор слайда
  const handleIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <HeroContainer>
      {/* Слайдер изображений */}
      <SliderContainer>
        {slideImages.map((image, index) => (
          <Slide 
            key={`slide-${index}`}
            $active={index === currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          >
            <img src={image} alt={`KAIF - ${t('hero.slideAlt')} ${index + 1}`} />
          </Slide>
        ))}
      </SliderContainer>
      
      {/* Основной контент */}
      <ContentContainer>
        <Overline
          initial="hidden"
          animate="visible"
          variants={contentVariants}
        >
          {t('hero.overline')}
        </Overline>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          transition={{ delay: 0.2 }}
        >
          <Logo 
            src={headerLogo} 
            alt="KAIF" 
          />
        </motion.div>
        
        <Subtitle
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          transition={{ delay: 0.4 }}
        >
          {t('hero.subtitle')}
        </Subtitle>
        
        <ButtonGroup
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          transition={{ delay: 0.6 }}
        >
          <PrimaryButton to="/booking">{t('hero.bookNow')}</PrimaryButton>
          <SecondaryButton to="/virtual-tour">{t('hero.virtualTour')}</SecondaryButton>
        </ButtonGroup>
      </ContentContainer>
      
      {/* Индикаторы слайдов */}
      <SlideIndicators>
        {slideImages.map((_, index) => (
          <Indicator 
            key={`indicator-${index}`}
            $active={index === currentSlide}
            onClick={() => handleIndicatorClick(index)}
          />
        ))}
      </SlideIndicators>
      
      {/* Индикатор скролла */}
      <ScrollIndicator>
        <motion.span>
          {t('common.scrollDown')}
        </motion.span>
        <ArrowDown
          variants={scrollVariants}
          initial="initial"
          animate="animate"
        />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroFullscreen;
