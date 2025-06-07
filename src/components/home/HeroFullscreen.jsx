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
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    min-height: 100vh;
    max-width: 95%;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 1.25rem;
    min-height: 100vh;
    background: linear-gradient(135deg, 
      rgba(0, 0, 0, 0.08) 0%, 
      rgba(0, 0, 0, 0.04) 50%, 
      rgba(0, 0, 0, 0.08) 100%);
    border-radius: 32px;
    margin: 1.5rem 1rem;
    min-height: calc(100vh - 3rem);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

// Улучшенный заголовок
const MainTitle = styled(motion.h1)`
  font-family: 'KAIF', 'Inter', sans-serif;
  font-size: clamp(2rem, 4vw, 2.8rem);
  font-weight: 700;
  color: white;
  margin: 1.5rem 0 1rem;
  text-shadow: 
    0 2px 8px rgba(0, 0, 0, 0.6),
    0 4px 16px rgba(0, 0, 0, 0.3);
  letter-spacing: -0.02em;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    margin: 1rem 0 0.75rem;
    font-size: clamp(1.75rem, 6vw, 2.2rem);
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 7vw, 1.9rem);
    margin: 0.75rem 0 0.5rem;
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

// Улучшенная группа кнопок с симметричным дизайном
const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  align-items: center;
  margin-top: 0.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    margin: 0.5rem auto 0;
    gap: 0.8rem;
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

// Первичная кнопка
const PrimaryButton = styled(BaseButton)`
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white !important;
  border: none;
  box-shadow: 
    0 4px 16px rgba(144, 179, 167, 0.3),
    0 8px 32px rgba(144, 179, 167, 0.15);
  
  &:hover {
    transform: translateY(-2px) !important;
    box-shadow: 
      0 6px 24px rgba(144, 179, 167, 0.4),
      0 12px 48px rgba(144, 179, 167, 0.2) !important;
    background: linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%) !important;
    color: white !important;
    text-decoration: none !important;
  }
  
  &:active {
    transform: translateY(-1px) !important;
  }
  
  &:focus {
    outline: none !important;
    box-shadow: 
      0 0 0 3px rgba(144, 179, 167, 0.3),
      0 4px 16px rgba(144, 179, 167, 0.3) !important;
  }
`;

// Вторичная кнопка
const SecondaryButton = styled(BaseButton)`
  background: rgba(255, 255, 255, 0.08);
  color: white !important;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 4px 16px rgba(0, 0, 0, 0.2),
    0 8px 32px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 0.15) !important;
    border-color: rgba(255, 255, 255, 0.3) !important;
    transform: translateY(-2px) !important;
    box-shadow: 
      0 6px 24px rgba(0, 0, 0, 0.25),
      0 12px 48px rgba(0, 0, 0, 0.15) !important;
    color: white !important;
    text-decoration: none !important;
  }
  
  &:active {
    transform: translateY(-1px) !important;
  }
  
  &:focus {
    outline: none !important;
    box-shadow: 
      0 0 0 3px rgba(255, 255, 255, 0.3),
      0 4px 16px rgba(0, 0, 0, 0.2) !important;
  }
`;

// Анимации для мобильных устройств
const mobileAnimations = {
  logo: {
    initial: { 
      scale: 0.8, 
      opacity: 0, 
      y: 30,
      rotateY: -15 
    },
    animate: { 
      scale: 1, 
      opacity: 1, 
      y: 0,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2
      }
    }
  },
  subtitle: {
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
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.6
      }
    }
  },
  buttons: {
    initial: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
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
        <motion.img 
          src={homepageLogo} 
          alt="KAIF Logo" 
          initial={mobileAnimations.logo.initial}
          animate={mobileAnimations.logo.animate}
          whileHover={{ 
            scale: 1.05, 
            rotateY: 5,
            transition: { duration: 0.3 }
          }}
          style={{
            maxWidth: '320px',
            height: 'auto',
            margin: '0 auto 0.6rem',
            filter: 'drop-shadow(0 4px 12px rgba(0, 0, 0, 0.7))'
          }}
          css={`
            @media (max-width: 480px) {
              max-width: 280px;
              margin-bottom: 0.5rem;
            }
            
            @media (max-width: 768px) {
              max-width: 300px;
            }
          `}
        />
        
        <MainTitle as={motion.h1} variants={itemVariants}>
          Премиальный оздоровительный комплекс
        </MainTitle>
        
        <Subtitle 
          as={motion.p} 
          initial={mobileAnimations.subtitle.initial}
          animate={mobileAnimations.subtitle.animate}
        >
          Уникальное пространство для поддержания внутренней гармонии и внешней красоты на острове Пхукет
        </Subtitle>
        
        <ButtonGroup
          as={motion.div}
          initial={mobileAnimations.buttons.initial}
          animate={mobileAnimations.buttons.animate}
        >
          <PrimaryButton 
            to="/sports"
            as={motion(Link)}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 15px 40px rgba(144, 179, 167, 0.6)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Категории
          </PrimaryButton>
          <SecondaryButton 
            to="/contacts"
            as={motion(Link)}
            whileHover={{ 
              scale: 1.05, 
              y: -5,
              boxShadow: "0 15px 40px rgba(255, 255, 255, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Записаться
          </SecondaryButton>
        </ButtonGroup>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroFullscreen;
