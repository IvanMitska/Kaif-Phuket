import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Импорт изображений для слайдера
import heroSpaImage from '../../assets/images/hero/hero-spa.jpg';
import heroPoolImage from '../../assets/images/hero/hero-pool.jpg';
import heroRestaurantImage from '../../assets/images/hero/hero-restaurant.jpg';
import heroFitnessImage from '../../assets/images/hero/hero-fitness.jpg';

// Импорт логотипа для главной страницы
import homepageLogo from '../../assets/images/logos/logo-homepage.png';

// Массив изображений для слайдера
const slideImages = [
  heroSpaImage,
  heroPoolImage,
  heroRestaurantImage,
  heroFitnessImage
];

// Основной контейнер
const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
`;

// Контейнер для слайдера
const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #000;
`;

// Отдельный слайд с улучшенным затемнением
const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 1.5s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.75) 0%,
      rgba(0,0,0,0.65) 30%,
      rgba(0,0,0,0.55) 60%,
      rgba(0,0,0,0.7) 100%
    );
    z-index: 2;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.85) contrast(1.1);
  }
`;

// Контейнер для контента с улучшенным дизайном
const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 3rem 2rem;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: 100vh;
    max-width: 95%;
    margin: 0 auto;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1.25rem;
    min-height: 100vh;
    background: linear-gradient(135deg, 
      rgba(0, 0, 0, 0.08) 0%, 
      rgba(0, 0, 0, 0.04) 50%, 
      rgba(0, 0, 0, 0.08) 100%);
    border-radius: 32px;
    margin: 1.5rem auto;
    min-height: calc(100vh - 3rem);
    max-width: calc(100% - 2rem);
    width: calc(100% - 2rem);
  }
`;

// Улучшенный заголовок - увеличенный и bold
const MainTitle = styled(motion.h1)`
  font-family: 'KAIF', 'Inter', sans-serif;
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 800;
  color: white;
  margin: 1.5rem 0 4rem;
  text-shadow: 
    0 4px 20px rgba(0, 0, 0, 0.8),
    0 8px 40px rgba(0, 0, 0, 0.4);
  letter-spacing: -0.02em;
  line-height: 1.1;
  max-width: 1000px;
  text-align: center;
  
  @media (max-width: 768px) {
    margin: 1rem 0 3rem;
    font-size: clamp(2.5rem, 8vw, 3.5rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(2rem, 9vw, 2.8rem);
    margin: 0.75rem 0 2.5rem;
  }
`;

// Улучшенный подзаголовок
const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.6;
  color: rgba(255,255,255,0.95);
  margin-bottom: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 
    0 1px 4px rgba(0, 0, 0, 0.5),
    0 2px 8px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    font-size: clamp(0.95rem, 3vw, 1.1rem);
    margin-bottom: 2.5rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 4vw, 1rem);
    margin-bottom: 2rem;
    line-height: 1.5;
  }
`;

// Стилизованный логотип для правильного центрирования
const LogoImage = styled(motion.img)`
  max-width: 450px;
  height: auto;
  margin: 0 auto 1rem;
  display: block;
  filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.8));
  transform-style: preserve-3d;
  backface-visibility: hidden;
  
  @media (max-width: 480px) {
    max-width: 350px;
    margin: 0 auto 0.75rem;
  }
  
  @media (max-width: 768px) {
    max-width: 380px;
    margin: 0 auto 0.85rem;
  }
  
  @media (min-width: 1024px) {
    max-width: 500px;
    margin: 0 auto 1.2rem;
  }
`;

// Улучшенная группа кнопок с симметричным дизайном
const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 1rem auto 0;
    gap: 1rem;
  }
`;

// Базовые стили для кнопок
const BaseButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: none;
  text-decoration: none;
  border-radius: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-width: 200px;
  width: 200px;
  text-align: center;
  
  /* Переопределяем глобальные стили */
  &:hover {
    text-decoration: none !important;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1.25rem 2rem;
    font-size: 1rem;
    min-width: unset;
    border-radius: 20px;
    max-width: 280px;
  }
  
  @media (max-width: 480px) {
    padding: 1.125rem 1.75rem;
    font-size: 0.95rem;
    border-radius: 18px;
  }
`;

// Первичная кнопка - "Записаться"
const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #90B3A7 0%, #7da399 100%);
  color: white !important;
  border: none;
  font-weight: 700;
  font-size: 1.1rem;
  padding: 1.5rem 3.5rem;
  border-radius: 8px;
  box-shadow: 0 8px 25px rgba(144, 179, 167, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    background: linear-gradient(135deg, #7da399 0%, #6a8e82 100%) !important;
    transform: translateY(-3px) !important;
    box-shadow: 0 12px 35px rgba(144, 179, 167, 0.4) !important;
    color: white !important;
    text-decoration: none !important;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px) !important;
  }
  
  &:focus {
    outline: none !important;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.3) !important;
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem 2.5rem;
    font-size: 1rem;
  }
`;

// Вторичная кнопка - "Категории"
const SecondaryButton = styled(BaseButton)`
  background: transparent;
  color: white !important;
  border: 2px solid rgba(255, 255, 255, 0.3);
  font-weight: 600;
  font-size: 1.1rem;
  padding: 1.5rem 3.5rem;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.05);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    border-color: rgba(255, 255, 255, 0.8) !important;
    color: white !important;
    transform: translateY(-3px) !important;
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.1) !important;
    text-decoration: none !important;
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  &:active {
    transform: translateY(-1px) !important;
  }
  
  &:focus {
    outline: none !important;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3) !important;
  }
  
  @media (max-width: 768px) {
    padding: 1.25rem 2.5rem;
    font-size: 1rem;
  }
`;

// Анимации для мобильных устройств
const smoothAnimations = {
  logo: {
    initial: { 
      scale: 0.8, 
      opacity: 0, 
      y: 30
    },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.1
      }
    }
  },
  title: {
    initial: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.4
      }
    }
  },
  subtitle: {
    initial: { 
      opacity: 0, 
      y: 30,
      scale: 0.96
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.7
      }
    }
  },
  buttons: {
    initial: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: 1
      }
    }
  }
};

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

  // Улучшенная анимация для контента
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };
  
  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        type: "spring", 
        stiffness: 120,
        damping: 15
      }
    },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.98 }
  };

  return (
    <HeroContainer>
      {/* Слайдер изображений */}
      <SliderContainer>
        {slideImages.map((image, index) => (
          <Slide 
            key={`slide-${index}`}
            $active={index === currentSlide}
          >
            <img 
              src={image} 
              alt={`KAIF - Слайд ${index + 1}`} 
              loading="lazy"
              onError={(e) => {
                console.error(`Failed to load slide image: ${image}`);
                // Пробуем запасной вариант из unsplash для тестирования
                const fallbackImages = [
                  "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=85",
                  "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                ];
                e.target.src = fallbackImages[index % fallbackImages.length];
              }}
            />
          </Slide>
        ))}
      </SliderContainer>
      
      {/* Основной контент */}
      <ContentContainer as={motion.div} 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <LogoImage 
          src={homepageLogo} 
          alt="KAIF Logo" 
          initial={smoothAnimations.logo.initial}
          animate={smoothAnimations.logo.animate}
          whileHover={{ 
            scale: 1.05,
            transition: { 
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1]
            }
          }}
        />
        
        <MainTitle 
          as={motion.h1} 
          initial={smoothAnimations.title.initial}
          animate={smoothAnimations.title.animate}
        >
          Премиальный оздоровительный комплекс
        </MainTitle>
        

        
        <ButtonGroup
          as={motion.div}
          initial={smoothAnimations.buttons.initial}
          animate={smoothAnimations.buttons.animate}
        >
          <PrimaryButton 
            to="/contacts"
            as={motion(Link)}
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              transition: {
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            Записаться
          </PrimaryButton>
          <SecondaryButton 
            to="/sports"
            as={motion(Link)}
            whileHover={{ 
              scale: 1.02, 
              y: -3,
              transition: {
                duration: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            Категории
          </SecondaryButton>
        </ButtonGroup>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroFullscreen;
