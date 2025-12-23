import React, { useState, useEffect, memo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import BookingModal from '../booking/BookingModal';

// ОПТИМИЗАЦИЯ: Импортируем только логотип, изображения загружаем из public/
// Импорт логотипа для главной страницы
import homepageLogo from '../../assets/images/optimized/logo-homepage.png';
import homepageLogoWebp from '../../assets/images/optimized/webp/logo-homepage.webp';

// ОПТИМИЗАЦИЯ: Используем новые супер-оптимизированные изображения с responsive srcset
const slideImages = [
  {
    webp: '/images-hero-optimized/spa.webp',
    webpMobile: '/images-hero-optimized/spa-mobile.webp',
    fallback: '/images-hero-optimized/spa.jpg',
    fallbackMobile: '/images-hero-optimized/spa-mobile.jpg'
  },
  {
    webp: '/images-hero-optimized/hero-pool.webp',
    webpMobile: '/images-hero-optimized/hero-pool-mobile.webp',
    fallback: '/images-hero-optimized/hero-pool.jpg',
    fallbackMobile: '/images-hero-optimized/hero-pool-mobile.jpg'
  },
  {
    webp: '/images-hero-optimized/hero-fitness.webp',
    webpMobile: '/images-hero-optimized/hero-fitness-mobile.webp',
    fallback: '/images-hero-optimized/hero-fitness.jpg',
    fallbackMobile: '/images-hero-optimized/hero-fitness-mobile.jpg'
  }
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
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box !important;
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

  @media (max-width: 768px) {
    height: 100svh;
    touch-action: auto;
  }
`;

// Слайдер с современным затемнением - ИСПРАВЛЕН
const SliderContainer = styled.div`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  z-index: 1;
  will-change: auto;
  pointer-events: none;

  /* Разрешаем события только для дочерних элементов слайдера */
  > * {
    pointer-events: auto;
  }
`;

// Слайд с оптимальным затемнением для читаемости - ИСПРАВЛЕН
const Slide = styled.div`
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  width: 100% !important;
  height: 100% !important;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 2s ease-in-out;
  /* ИСПРАВЛЕНИЕ: Оптимизация для GPU без блокировки скролла */
  transform: translateZ(0);
  will-change: opacity;
  /* Не блокируем события указателя */
  pointer-events: none;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.65) 0%,
      rgba(0,0,0,0.45) 50%,
      rgba(0,0,0,0.55) 100%
    );
    z-index: 2;
    pointer-events: none;
  }

  picture {
    position: absolute;
    inset: 0;
    display: block;
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
  }
`;

// Контейнер контента - минималистичный и элегантный - ИСПРАВЛЕН
const ContentContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* ИСПРАВЛЕНИЕ: Разрешаем события для интерактивных элементов */
  pointer-events: auto;
  /* Не создаем дополнительные композитные слои */
  will-change: auto;

  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-top: 15vh;
  }

  @media (max-width: 480px) {
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

// Увеличенный логотип - PERFORMANCE: убраны тяжёлые drop-shadow
const LogoImage = styled.img`
  max-width: 520px;
  width: auto;
  height: auto;
  margin: 0 0 3rem 0;
  display: block;

  @media (max-width: 768px) {
    max-width: 450px;
    margin: 0 0 2.5rem 0;
  }

  @media (max-width: 480px) {
    max-width: 420px;
    margin: 0 0 2rem 0;
  }

  /* Для маленьких экранов но все еще достаточно большой */
  @media (max-width: 375px) {
    max-width: 380px;
  }
`;

// Белая кнопка - PERFORMANCE: убраны backdrop-filter и тяжёлые тени
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
  color: #000;
  background: #fff;
  border: none;
  border-radius: 12px;
  transition: background 0.2s ease, transform 0.2s ease;
  position: relative;
  min-width: 220px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #f5f5f5;
    transform: translateY(-2px);
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
  }
`;

// Вторичная кнопка - PERFORMANCE: убран backdrop-filter
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
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  transition: background 0.2s ease, transform 0.2s ease;
  position: relative;
  min-width: 220px;
  margin-top: 1.2rem;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.6);
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
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
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(255, 255, 255, 0.5);
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

const HeroFullscreen = memo(() => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // PERFORMANCE FIX: Simple slider without device detection (avoid TBT increase)
  // Slider is lightweight and runs smoothly on all devices
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // ИСПРАВЛЕН: Обработчик скролла без конфликтов
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
      {/* Слайдер изображений */}
      <SliderContainer>
        {slideImages.map((image, index) => (
          <Slide
            key={`slide-${index}`}
            $active={index === currentSlide}
          >
            <picture>
              {/* WebP для мобильных устройств */}
              <source
                media="(max-width: 768px)"
                srcSet={image.webpMobile}
                type="image/webp"
              />
              {/* WebP для десктопа */}
              <source
                srcSet={image.webp}
                type="image/webp"
              />
              {/* JPG для мобильных устройств */}
              <source
                media="(max-width: 768px)"
                srcSet={image.fallbackMobile}
                type="image/jpeg"
              />
              <img
                src={image.fallback}
                alt={`KAIF - Слайд ${index + 1}`}
                width="1400"
                height="933"
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                fetchpriority={index === 0 ? "high" : "low"}
              />
            </picture>
          </Slide>
        ))}
      </SliderContainer>

      {/* Основной контент */}
      <ContentContainer>
        <ContentWrapper>
          <picture style={{ display: 'block' }}>
            <source srcSet={homepageLogoWebp} type="image/webp" />
            <LogoImage
              src={homepageLogo}
              alt="KAIF"
              width="520"
              height="auto"
              loading="eager"
              fetchpriority="high"
            />
          </picture>

          <ButtonContainer>
            <PrimaryButton
              as="button"
              onClick={() => setIsBookingModalOpen(true)}
              style={{ cursor: 'pointer' }}
            >
              {t('common.book')}
            </PrimaryButton>

            <SecondaryButton onClick={handleScrollToZones}>
              {t('common.learn_more')}
            </SecondaryButton>
          </ButtonContainer>
        </ContentWrapper>
      </ContentContainer>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={t('booking.service.general', 'KAIF Club & Spa')}
        source="Главная страница - Hero"
      />
    </HeroContainer>
  );
});

HeroFullscreen.displayName = 'HeroFullscreen';

export default HeroFullscreen;
