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
import heroLuxuryImage from '../../assets/images/hero/hero-luxury.png';

// Импорт логотипа для главной страницы
import homepageLogo from '../../assets/images/logos/logo-homepage.png';

// Массив изображений для слайдера
const slideImages = [
  heroSpaImage,
  heroPoolImage,
  heroRestaurantImage,
  heroFitnessImage
];

// Основной контейнер с улучшенным дизайном
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
  background: #000;
`;

// Слайдер с современным затемнением
const SliderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

// Слайд с оптимальным затемнением для читаемости
const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 2s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.65) 0%,
      rgba(0,0,0,0.45) 50%,
      rgba(0,0,0,0.55) 100%
    );
    z-index: 2;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.8) contrast(1.1) saturate(0.9);
  }
`;

// Контейнер контента - минималистичный и элегантный
const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 3rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    max-width: 90%;
    /* Сдвигаем контент немного выше для лучшей видимости кнопок */
    justify-content: flex-start;
    padding-top: 15vh;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    max-width: 95%;
    padding-top: 12vh;
  }
  
  /* Специально для iPhone */
  @media (max-width: 414px) and (max-height: 896px) {
    padding-top: 10vh;
    min-height: 90vh;
  }
  
  /* Для маленьких iPhone */
  @media (max-width: 375px) and (max-height: 812px) {
    padding-top: 8vh;
    min-height: 85vh;
  }
`;

// Увеличенный логотип с лучшим контрастом
const LogoImage = styled(motion.img)`
  max-width: 480px;
  height: auto;
  margin: 0 auto 3rem;
  display: block;
  filter: 
    drop-shadow(0 25px 80px rgba(0, 0, 0, 0.9))
    drop-shadow(0 10px 30px rgba(0, 0, 0, 0.7));
  
  @media (max-width: 768px) {
    max-width: 380px;
    margin: 0 auto 2.5rem;
  }
  
  @media (max-width: 480px) {
    max-width: 340px;
    margin: 0 auto 2rem;
  }
`;

// Улучшенный заголовок с лучшей читаемостью
const MainTitle = styled(motion.h1)`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: clamp(1.3rem, 3.5vw, 1.9rem);
  font-weight: 300;
  color: rgba(255, 255, 255, 0.95);
  margin: 0 0 4rem;
  text-shadow: 
    0 6px 25px rgba(0, 0, 0, 0.9),
    0 2px 8px rgba(0, 0, 0, 0.8);
  letter-spacing: 0.05em;
  line-height: 1.4;
  max-width: 600px;
  
  @media (max-width: 768px) {
    margin: 0 0 3.5rem;
    font-size: clamp(1.2rem, 4vw, 1.6rem);
    /* Приподнимаем текст на планшетах */
    transform: translateY(-1rem);
  }
  
  @media (max-width: 480px) {
    margin: 0 0 3rem;
    letter-spacing: 0.03em;
    /* Приподнимаем текст на мобильных */
    transform: translateY(-1.5rem);
  }
`;

// Белая кнопка с чёрным текстом - премиальный вид
const PrimaryButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  background: rgba(255, 255, 255, 0.95);
  border: none;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  min-width: 220px;
  box-shadow: 
    0 8px 25px rgba(0, 0, 0, 0.3),
    0 15px 50px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg, 
      transparent, 
      rgba(0, 0, 0, 0.05), 
      transparent
    );
    transition: left 0.6s ease;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 
      0 12px 35px rgba(0, 0, 0, 0.4),
      0 20px 60px rgba(0, 0, 0, 0.25);
    color: #000;
    text-decoration: none;
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    padding: 1.1rem 2.5rem;
    font-size: 0.85rem;
    min-width: 200px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: 180px;
    width: 100%;
    max-width: 300px;
  }
`;

// Вторичная кнопка - улучшенная видимость
const SecondaryButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.95);
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-out;
  position: relative;
  min-width: 220px;
  margin-top: 1.2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  
  &:hover {
    color: rgba(255, 255, 255, 1);
    border-color: rgba(255, 255, 255, 0.7);
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 1.1rem 2.5rem;
    font-size: 0.85rem;
    min-width: 200px;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: 180px;
    width: 100%;
    max-width: 300px;
    margin-top: 1rem;
    /* Улучшенная видимость на мобильных */
    background: rgba(255, 255, 255, 0.15);
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
`;

// Контейнер кнопок - вертикальное расположение для элегантности
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    gap: 0.5rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    margin-bottom: 4rem;
    gap: 0.8rem;
    /* Поднимаем кнопки выше для видимости на iPhone */
    position: relative;
    bottom: 3rem;
  }
  
  /* Для iPhone в портретной ориентации */
  @media (max-width: 414px) and (max-height: 896px) {
    bottom: 3rem;
    margin-bottom: 5rem;
  }
  
  /* Для маленьких iPhone (SE, Mini) */
  @media (max-width: 375px) and (max-height: 812px) {
    bottom: 4rem;
    margin-bottom: 6rem;
  }
`;

// Оптимизированные анимации для быстрой загрузки
const animations = {
  logo: {
    initial: { 
      scale: 0.95, 
      opacity: 0
    },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2
      }
    }
  },
  title: {
    initial: { 
      opacity: 0, 
      y: 15
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6
      }
    }
  },
  buttons: {
    initial: { 
      opacity: 0, 
      y: 15
    },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 1.0
      }
    }
  }
};

const HeroFullscreen = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Автоматическое переключение слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideImages.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

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
      <ContentContainer>
        <LogoImage 
          src={homepageLogo} 
          alt="KAIF" 
          initial={animations.logo.initial}
          animate={animations.logo.animate}
          whileHover={{ 
            scale: 1.02,
            transition: { 
              duration: 0.2,
              ease: "easeOut"
            }
          }}
        />
        
        <MainTitle 
          as={motion.h1} 
          initial={animations.title.initial}
          animate={animations.title.animate}
        >
          Премиальный комплекс на Пхукете
        </MainTitle>
        
        <ButtonContainer
          as={motion.div}
          initial={animations.buttons.initial}
          animate={animations.buttons.animate}
        >
          <PrimaryButton 
            to="/contacts"
            whileHover={{ 
              scale: 1.02,
              transition: {
                duration: 0.15,
                ease: "easeOut"
              }
            }}
            whileTap={{ scale: 0.98 }}
          >
            Записаться
          </PrimaryButton>
          
          <SecondaryButton 
            to="/sports"
            whileHover={{ 
              scale: 1.01,
              transition: {
                duration: 0.15,
                ease: "easeOut"
              }
            }}
            whileTap={{ scale: 0.99 }}
          >
            Узнать больше
          </SecondaryButton>
        </ButtonContainer>
      </ContentContainer>
    </HeroContainer>
  );
};

export default HeroFullscreen;
