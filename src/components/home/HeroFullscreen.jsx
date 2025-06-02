import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Импорт изображений для слайдера
import heroSpaImage from '../../assets/images/hero/hero-spa.jpg';
import heroPoolImage from '../../assets/images/hero/hero-pool.jpg';
import heroRestaurantImage from '../../assets/images/hero/hero-restaurant.jpg';
import heroFitnessImage from '../../assets/images/hero/hero-fitness.jpg';
import headerLogo from '../../assets/images/logos/new-hero-logo.png';
import arrowDownIcon from '../../assets/icons/arrow-down.svg';

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
  background-color: #000; // Черный фон для слайдера
`;

// Отдельный слайд
const Slide = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 1.5s ease-in-out;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3));
  }
`;

// Контейнер для контента
const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 2rem;
  max-width: 1000px;
  margin: 0 auto;
`;

// Логотип
const Logo = styled.img`
  max-width: 450px;
  height: auto;
  margin: 1rem auto 2.5rem;
  
  @media (max-width: 768px) {
    max-width: 280px;
  }
`;

// Подзаголовок
const Subtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: rgba(255,255,255,1);
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  letter-spacing: 0.3px;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Группа кнопок
const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Первичная кнопка
const PrimaryButton = styled(Link)`
  padding: 1rem 2.5rem;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  font-weight: 400;
  transition: all 0.3s ease;
  text-transform: uppercase;
  border-radius: 30px;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    background-color: white;
    color: #000;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

// Вторичная кнопка
const SecondaryButton = styled(Link)`
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: none;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  font-weight: 400;
  transition: all 0.3s ease;
  text-transform: uppercase;
  border-radius: 30px;
  display: inline-block;
  box-shadow: 0 5px 15px rgba(144, 179, 167, 0.3);
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.4);
    background: linear-gradient(135deg, #A8C5B8 0%, #90B3A7 100%);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

// Индикаторы слайдов
const SlideIndicators = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`;

// Индикатор слайда
const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
  }
`;

// Скролл вниз
const ScrollDown = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  
  p {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: rgba(255, 255, 255, 0.8);
  }
`;

// Анимация стрелки вниз
const ArrowDown = styled.img`
  width: 24px;
  height: 24px;
  opacity: 0.8;
  animation: arrowBounce 2s infinite;
  
  @keyframes arrowBounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
  }
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
          >
            <img 
              src={image} 
              alt={`KAIF - Слайд ${index + 1}`}
              onError={(e) => {
                console.error(`Failed to load image: ${image}`);
                e.target.src = slideImages[0]; // Fallback to first image
              }}
            />
          </Slide>
        ))}
      </SliderContainer>
      
      {/* Основной контент */}
      <ContentContainer>
        <Logo 
          src={headerLogo} 
          alt="KAIF" 
        />
        
        <Subtitle>
          Откройте для себя уникальный велнес и фитнес-комплекс с философией баланса между внутренней и внешней красотой
        </Subtitle>
        
        <ButtonGroup>
          <PrimaryButton to="/services">
            Услуги и программы
          </PrimaryButton>
          <SecondaryButton to="/booking">
            Забронировать
          </SecondaryButton>
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
      
      {/* Скролл вниз */}
      <ScrollDown>
        <p>Прокрутить вниз</p>
        <ArrowDown 
          src={arrowDownIcon} 
          alt="Scroll down"
        />
      </ScrollDown>
    </HeroContainer>
  );
};

export default HeroFullscreen;
