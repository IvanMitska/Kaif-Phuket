import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Halloween Mental Hospital - Use hospital.png as background
// Импорт логотипа для главной страницы
import homepageLogo from '../../assets/images/optimized/logo-homepage.png';
import homepageLogoWebp from '../../assets/images/optimized/webp/logo-homepage.webp';

// Halloween Mental Hospital Theme - Flickering Animation
const flicker = `
  @keyframes flicker {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
    55% { opacity: 1; }
    60% { opacity: 0.9; }
    65% { opacity: 0.95; }
  }
`;

// Основной контейнер - Mental Hospital Theme
const HeroContainer = styled.section`
  ${flicker}
  position: relative;
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  overflow: hidden;
  background: linear-gradient(135deg, #0a0000 0%, #1a0505 50%, #0f0000 100%);
  /* Убираем все свойства, влияющие на скролл */
  scroll-snap-align: unset;
  scroll-snap-type: unset;
  scroll-snap-stop: unset;
  contain: none;
  isolation: auto;
  will-change: auto;
  touch-action: auto;
  overscroll-behavior: auto;
  -webkit-overscroll-behavior: auto;

  /* Mental Hospital eerie glow overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(139, 0, 0, 0.15) 0%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 5;
    animation: flicker 4s infinite;
  }

  @media (max-width: 768px) {
    min-height: 100svh;
    height: auto;
    touch-action: auto;
  }
`;

// Mental Hospital Background
const HospitalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
  background-image: url('/images/events/hospitalhero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Lighter overlay for visibility */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.5) 0%,
      rgba(26,5,5,0.4) 50%,
      rgba(0,0,0,0.55) 100%
    );
    z-index: 2;
  }
`;

// Контейнер контента - минималистичный и элегантный - ИСПРАВЛЕН
const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 3rem 2rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* ИСПРАВЛЕНИЕ: Разрешаем события для интерактивных элементов */
  pointer-events: auto;
  /* Не создаем дополнительные композитные слои */
  will-change: auto;
  
  @media (max-width: 768px) {
    padding: 2rem 0;
    /* Сдвигаем контент немного выше для лучшей видимости кнопок */
    justify-content: flex-start;
    padding-top: 15vh;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 0;
    padding-top: 12vh;
  }
  
  /* Специально для iPhone */
  @media (max-width: 414px) and (max-height: 896px) {
    padding-top: 10vh;
  }
  
  /* Для маленьких iPhone */
  @media (max-width: 375px) and (max-height: 812px) {
    padding-top: 8vh;
  }
`;

// Контейнер для центрирования содержимого
const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  
  @media (max-width: 480px) {
    padding: 0 1.5rem;
  }
`;

// Mental Hospital Title
const MentalHospitalTitle = styled(motion.h1)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 200;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  text-align: center;
  text-shadow:
    0 4px 30px rgba(0, 0, 0, 0.8),
    0 0 50px rgba(139, 0, 0, 0.6);

  @media (max-width: 768px) {
    font-size: clamp(2rem, 5vw, 3.5rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 4.5vw, 2.8rem);
  }
`;

const MentalHospitalSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-weight: 200;
  color: #ffffff;
  line-height: 1.4;
  letter-spacing: 0.05em;
  margin: 0 0 1rem 0;
  text-align: center;
  background: linear-gradient(135deg, #8B0000 0%, #FF0000 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 20px rgba(139, 0, 0, 0.5);
  filter: drop-shadow(0 2px 20px rgba(139, 0, 0, 0.5));

  @media (max-width: 768px) {
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 1.8vw, 1.2rem);
  }
`;

// Логотип - Mental Hospital with bloody glow
const LogoImage = styled(motion.img)`
  max-width: 320px;
  width: auto;
  height: auto;
  margin: 0 0 2rem 0;
  display: block;
  filter:
    drop-shadow(0 15px 40px rgba(139, 0, 0, 0.7))
    drop-shadow(0 5px 20px rgba(255, 0, 0, 0.4))
    drop-shadow(0 0 30px rgba(139, 0, 0, 0.3));

  @media (max-width: 768px) {
    max-width: 280px;
    margin: 0 0 1.5rem 0;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    margin: 0 0 1rem 0;
  }

  @media (max-width: 375px) {
    max-width: 220px;
  }
`;

// Mental Hospital Primary Button - Blood Red
const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 3rem;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%);
  border: 1px solid rgba(139, 0, 0, 0.5);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  min-width: 220px;
  box-shadow:
    0 8px 25px rgba(139, 0, 0, 0.5),
    0 15px 50px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(139, 0, 0, 0.3);

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
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    background: linear-gradient(135deg, #A00000 0%, #FF1744 100%);
    transform: translateY(-2px);
    box-shadow:
      0 12px 35px rgba(139, 0, 0, 0.7),
      0 20px 60px rgba(0, 0, 0, 0.5),
      0 0 50px rgba(255, 0, 0, 0.5);
    color: #fff;
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

// Mental Hospital Secondary Button - Dark with red glow
const SecondaryButton = styled.button`
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
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(139, 0, 0, 0.6);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease-out;
  position: relative;
  min-width: 220px;
  margin-top: 1.2rem;
  box-shadow:
    0 4px 15px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(139, 0, 0, 0.2);
  cursor: pointer;
  font-family: inherit;

  &:hover {
    color: rgba(255, 255, 255, 1);
    border-color: rgba(139, 0, 0, 0.9);
    background: rgba(139, 0, 0, 0.3);
    transform: translateY(-2px);
    box-shadow:
      0 8px 25px rgba(139, 0, 0, 0.4),
      0 0 30px rgba(139, 0, 0, 0.3);
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
    background: rgba(0, 0, 0, 0.5);
    border: 2px solid rgba(139, 0, 0, 0.7);
    box-shadow:
      0 6px 20px rgba(0, 0, 0, 0.6),
      0 0 25px rgba(139, 0, 0, 0.3);
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
    /* Небольшая корректировка позиции для планшетов */
    position: relative;
    bottom: 0.5rem;
  }
  
  @media (max-width: 480px) {
    width: 100%;
    max-width: 320px;
    margin-bottom: 4rem;
    gap: 0.8rem;
    /* Немного поднимаем кнопки для видимости на iPhone */
    position: relative;
    bottom: 1.5rem;
  }
  
  /* Для iPhone в портретной ориентации */
  @media (max-width: 414px) and (max-height: 896px) {
    bottom: 2rem;
    margin-bottom: 5rem;
  }
  
  /* Для маленьких iPhone (SE, Mini) */
  @media (max-width: 375px) and (max-height: 812px) {
    bottom: 2.5rem;
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
        delay: 0.6
      }
    }
  }
};

const HeroFullscreen = memo(() => {
  const { t } = useTranslation();

  // Обработчик скролла
  const handleScrollToZones = () => {
    const zonesSection = document.querySelector('#exclusive-zones');
    if (zonesSection) {
      zonesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <HeroContainer>
      {/* Mental Hospital Background */}
      <HospitalBackground />

      {/* Основной контент */}
      <ContentContainer>
        <ContentWrapper>
          {/* Mental Hospital Title */}
          <MentalHospitalTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            MENTAL HOSPITAL
          </MentalHospitalTitle>

          <MentalHospitalSubtitle
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          >
            OF KAIF
          </MentalHospitalSubtitle>

          {/* Small Logo */}
          <picture style={{ display: 'block' }}>
            <source srcSet={homepageLogoWebp} type="image/webp" />
            <LogoImage
              src={homepageLogo}
              alt="KAIF"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
              whileHover={{
                scale: 1.02,
                transition: {
                  duration: 0.2,
                  ease: "easeOut"
                }
              }}
            />
          </picture>

          <ButtonContainer
            as={motion.div}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          >
            <motion.div
              whileHover={{
                scale: 1.02,
                transition: {
                  duration: 0.15,
                  ease: "easeOut"
                }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <PrimaryButton
                href="https://wa.me/66624805877?text=Hi!%20I%20want%20to%20book%20for%20Halloween%20Mental%20Hospital%20at%20KAIF"
                target="_blank"
                rel="noopener noreferrer"
              >
                🎃 ENTER IF YOU DARE
              </PrimaryButton>
            </motion.div>

            <motion.div
              onClick={handleScrollToZones}
              whileHover={{
                scale: 1.01,
                transition: {
                  duration: 0.15,
                  ease: "easeOut"
                }
              }}
              whileTap={{ scale: 0.99 }}
            >
              <SecondaryButton>
                EXPLORE THE ASYLUM
              </SecondaryButton>
            </motion.div>
          </ButtonContainer>
        </ContentWrapper>
      </ContentContainer>
    </HeroContainer>
  );
});

HeroFullscreen.displayName = 'HeroFullscreen';

export default HeroFullscreen;
