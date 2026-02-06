import React, { useEffect, useRef, memo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Player from '@vimeo/player';

// Vimeo Video ID
const VIMEO_VIDEO_ID = '1162456961';

// Fallback poster
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

// Видео-фон (Vimeo iframe container)
const VideoBackground = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 177.78vh; /* 16:9 aspect ratio */
    height: 100vh;
    min-width: 100%;
    min-height: 56.25vw; /* 16:9 aspect ratio */
    transform: translate(-50%, -50%);
    pointer-events: none;
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
  const vimeoContainerRef = useRef(null);
  const playerRef = useRef(null);

  // Инициализация Vimeo Player
  useEffect(() => {
    if (!vimeoContainerRef.current || playerRef.current) return;

    // Проверяем что ID видео установлен
    if (VIMEO_VIDEO_ID === 'PASTE_YOUR_VIDEO_ID_HERE') {
      console.warn('Vimeo video ID not set');
      return;
    }

    // Создаём Vimeo Player с настройками для background видео
    const player = new Player(vimeoContainerRef.current, {
      id: VIMEO_VIDEO_ID,
      background: true,      // Background mode - без контролов, autoplay, loop, muted
      muted: true,
      autoplay: true,
      loop: true,
      controls: false,
      playsinline: true,
      transparent: true,
      responsive: false,
      dnt: true,             // Do Not Track
    });

    playerRef.current = player;

    // Обработчики
    player.on('loaded', () => {
      player.play().catch(() => {});
    });

    player.ready().then(() => {
      player.play().catch(() => {});
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, []);

  return (
    <HeroContainer>
      {/* Vimeo видео-фон */}
      <VideoBackground>
        <div ref={vimeoContainerRef} style={{ width: '100%', height: '100%' }} />
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
