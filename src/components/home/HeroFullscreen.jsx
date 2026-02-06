import React, { useEffect, useRef, memo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// Cloudinary video URL - high quality
const VIDEO_URL = 'https://res.cloudinary.com/dxzz1kj38/video/upload/q_auto/0204_xkhajr.mp4';
const POSTER_URL = 'https://res.cloudinary.com/dxzz1kj38/video/upload/so_0/0204_xkhajr.jpg';

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
  background: #000;
  padding: 0 !important;
  margin: 0 !important;
  box-sizing: border-box !important;
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

// Видео-фон
const VideoBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  video {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  /* Затемнение поверх видео */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(0,0,0,0.6) 0%,
      rgba(0,0,0,0.4) 50%,
      rgba(0,0,0,0.5) 100%
    );
    z-index: 2;
    pointer-events: none;
  }
`;

// Контейнер контента
const ContentContainer = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  will-change: auto;
`;

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

const HeroTextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroWord = styled.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: clamp(4.5rem, 12vw, 9rem);
  font-weight: 800;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(4rem, 20vw, 7rem);
    line-height: 1.05;
  }

  @media (max-width: 480px) {
    font-size: clamp(3.5rem, 22vw, 6rem);
  }
`;

const LocationText = styled.span`
  display: block;
  font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.35em;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  margin-top: 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.65rem;
    margin-top: 2rem;
  }
`;

const HeroFullscreen = memo(() => {
  const { t } = useTranslation();
  const videoRef = useRef(null);

  // Autoplay видео при загрузке
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Функция воспроизведения
    const tryPlay = () => {
      if (video.paused) {
        video.muted = true; // Гарантируем muted для iOS
        video.play().catch(() => {});
      }
    };

    // Обработчики событий видео
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('loadedmetadata', tryPlay);

    // iOS fallback - запуск при касании экрана
    const handleTouch = () => {
      tryPlay();
      document.removeEventListener('touchstart', handleTouch);
    };
    document.addEventListener('touchstart', handleTouch, { passive: true });

    // Попытка воспроизведения сразу
    video.load();
    setTimeout(tryPlay, 100);
    setTimeout(tryPlay, 500);
    setTimeout(tryPlay, 1000);

    return () => {
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('loadedmetadata', tryPlay);
      document.removeEventListener('touchstart', handleTouch);
    };
  }, []);

  return (
    <HeroContainer>
      {/* Видео-фон */}
      <VideoBackground>
        <video
          ref={videoRef}
          src={VIDEO_URL}
          autoPlay
          muted
          defaultMuted
          loop
          playsInline
          webkitPlaysInline
          x5-playsinline="true"
          disablePictureInPicture
          disableRemotePlayback
          preload="auto"
          poster={POSTER_URL}
        />
      </VideoBackground>

      {/* Основной контент */}
      <ContentContainer>
        <ContentWrapper>
          <HeroTextBlock>
            <HeroWord>{t('home.hero.word1')}</HeroWord>
            <HeroWord>{t('home.hero.word2')}</HeroWord>
            <HeroWord>{t('home.hero.word3')}</HeroWord>
            <LocationText>{t('home.hero.location')}</LocationText>
          </HeroTextBlock>
        </ContentWrapper>
      </ContentContainer>
    </HeroContainer>
  );
});

HeroFullscreen.displayName = 'HeroFullscreen';

export default HeroFullscreen;
