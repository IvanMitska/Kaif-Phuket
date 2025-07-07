import React, { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRightIcon,
  PhoneIcon,
  FireIcon
} from '@heroicons/react/24/solid';
import OptimizedImage from '../common/OptimizedImage';
// import torchImage from '../../assets/effects/banya/torch.png';



const flameFlicker = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.1, 1) rotate(1deg); }
  50% { transform: scale(0.95, 1) rotate(-1deg); }
  75% { transform: scale(1.05, 1) rotate(0.5deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const smokeRise = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  50% { transform: translateY(-20px) scale(1.2); opacity: 0.4; }
  100% { transform: translateY(-40px) scale(1.5); opacity: 0; }
`;

const runeGlow = keyframes`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35, 0 0 30px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`;

const glowPulse = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 0.7; }
  100% { opacity: 0.4; }
`;

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background: #0f0f0f;
`;

const BackgroundSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  height: 100%;
`;

const BackgroundImage = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  will-change: opacity;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.8) 50%,
      rgba(0, 0, 0, 0.75) 100%
    );
    z-index: 1;
  }
`;

const WoodTexture = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M30 0c16.569 0 30 13.431 30 30s-13.431 30-30 30S0 46.569 0 30 13.431 0 30 0zm0 6c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24S43.255 6 30 6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
  opacity: 0.2;
  z-index: 3;
`;

// Анимированные факелы
const TorchContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  
  &.left {
    left: 5%;
  }
  
  &.right {
    right: 5%;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const TorchImage = styled.img`
  width: auto;
  height: 140px;
  filter: drop-shadow(0 0 15px rgba(255, 147, 53, 0.4));
  object-fit: contain;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  text-align: center;
  color: #f5f5f5;
`;

const VikingRune = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.4);
  border: 2px solid #ff6b35;
  border-radius: 8px;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 600;
  color: #ff6b35;
  margin-bottom: 3rem;
  backdrop-filter: blur(10px);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '᚛';
    font-size: 1.5em;
    animation: ${runeGlow} 3s ease-in-out infinite;
  }
  
  &::after {
    content: '᚜';
    font-size: 1.5em;
    animation: ${runeGlow} 3s ease-in-out infinite;
  }
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(3rem, 10vw, 7rem);
  font-weight: 900;
  line-height: 0.9;
  margin-bottom: 2rem;
  color: #f5f5f5;
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.8),
    0 0 20px rgba(255, 107, 53, 0.3);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${runeGlow} 4s ease-in-out infinite;
  }
`;

const Area = styled(motion.div)`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  color: #ffd662;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  letter-spacing: 0.05em;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  color: #cccccc;
  margin-bottom: 4rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  font-weight: 300;
  line-height: 1.4;
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const VikingButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: #1a1a1a;
  border: none;
  border-radius: 8px;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 700;
  cursor: pointer;
  min-height: 60px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 10px 30px rgba(255, 107, 53, 0.4),
      0 0 30px rgba(255, 107, 53, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: transparent;
  color: #f5f5f5;
  border: 2px solid #ff6b35;
  border-radius: 8px;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 600;
  cursor: pointer;
  min-height: 60px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  backdrop-filter: blur(10px);
  
  &:hover {
    background: rgba(255, 107, 53, 0.1);
    border-color: #ffd662;
    color: #ffd662;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: #ff6b35;
  text-align: center;
  margin: 0;
  padding: 0;
  
  .scroll-text {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .scroll-arrow {
    width: 2px;
    height: 30px;
    background: #ff6b35;
    margin: 0 auto;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: -4px;
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 8px solid #ff6b35;
    }
  }
`;


const NorseOrnament = styled.div`
  position: absolute;
  font-size: 2rem;
  color: rgba(255, 107, 53, 0.3);
  z-index: 2;
  
  &.top-left {
    top: 10%;
    left: 10%;
    transform: rotate(-15deg);
  }
  
  &.top-right {
    top: 10%;
    right: 10%;
    transform: rotate(15deg);
  }
  
  &.bottom-left {
    bottom: 10%;
    left: 10%;
    transform: rotate(15deg);
  }
  
  &.bottom-right {
    bottom: 10%;
    right: 10%;
    transform: rotate(-15deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BanyaHeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(0);
  
  const images = [
    {
      src: '/images/banya/panoramic.png',
      alt: t('banya.hero.images.panoramic', 'Panoramic sauna 150 m²')
    },
    {
      src: '/images/banya/private.jpg',
      alt: t('banya.hero.images.private', 'Private sauna')
    },
    {
      src: '/images/banya/public.jpg',
      alt: t('banya.hero.images.public', 'Public sauna')
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setNextSlide((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide(nextSlide);
    }, 1500);
    return () => clearTimeout(timer);
  }, [nextSlide]);

  const handleContactClick = () => {
    const phoneNumber = t('common.phone_number', '+66 62 480 5877');
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleBookingClick = () => {
    const phoneNumber = t('common.phone_number', '+66 62 480 5877');
    const message = encodeURIComponent(t('common.whatsapp_messages.book_banya', 'Hello! I would like to book the Russian Banya'));
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <HeroContainer>
      <BackgroundSlider>
        <BackgroundImage
          key={`current-${currentSlide}`}
          style={{
            backgroundImage: `url(${images[currentSlide].src})`,
            opacity: 1,
            zIndex: 1
          }}
        />
        <BackgroundImage
          key={`next-${nextSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === nextSlide ? 0 : 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            backgroundImage: `url(${images[nextSlide].src})`,
            zIndex: 2
          }}
        />
      </BackgroundSlider>
      
      <WoodTexture />
      
      {/* Анимированные факелы */}
      {/* <TorchContainer className="left">
        <TorchImage src={torchImage} alt="Torch" />
      </TorchContainer>
      
      <TorchContainer className="right">
        <TorchImage src={torchImage} alt="Torch" />
      </TorchContainer> */}
      
      {/* Скандинавские орнаменты */}
      <NorseOrnament className="top-left">᚛ᚏᚓᚐᚉ᚜</NorseOrnament>
      <NorseOrnament className="top-right">᚛ᚈᚓᚐᚉ᚜</NorseOrnament>
      <NorseOrnament className="bottom-left">᚛ᚄᚐᚒᚈ᚜</NorseOrnament>
      <NorseOrnament className="bottom-right">᚛ᚏᚓᚐᚉ᚜</NorseOrnament>
      
      <ContentWrapper>
        <VikingRune
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('banya.hero.badge', 'ЛУЧШАЯ БАНЯ ПХУКЕТА')}
        </VikingRune>
        
        <MainTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          dangerouslySetInnerHTML={{
            __html: t('banya.hero.title', 'Панорамная <span class="highlight">русская баня</span>')
          }}
        />
        
        <Area
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('banya.hero.area', '150 квадратных метров')}
        </Area>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {t('banya.hero.subtitle', 'Баня из сибирского кедра и алтайской липы')}
        </Subtitle>
        
        <CTAContainer
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <VikingButton
            onClick={handleBookingClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FireIcon />
            {t('banya.hero.book_button', 'ЗАБРОНИРОВАТЬ')}
          </VikingButton>
          
          <SecondaryButton
            onClick={handleContactClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <PhoneIcon />
            {t('banya.hero.contacts_button', 'КОНТАКТЫ')}
          </SecondaryButton>
        </CTAContainer>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default memo(BanyaHeroSection); 