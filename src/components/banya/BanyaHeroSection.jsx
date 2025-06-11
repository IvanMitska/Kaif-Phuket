import React, { useState, useEffect, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon,
  PhoneIcon,
  FireIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// МИНИМАЛИСТИЧНАЯ HERO СЕКЦИЯ БАНИ
// =============================================================================

const HeroContainer = styled.section`
  position: relative;
  min-height: 100vh;
  background: white;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

const BackgroundSlider = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const SlideImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.$active ? 1 : 0};
  transition: opacity 2s ease-in-out;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  text-align: center;
  color: white;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 100px;
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  font-weight: 400;
  color: white;
  margin-bottom: 3rem;
  backdrop-filter: blur(20px);
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
  }
`;

const MainTitle = styled(motion.h1)`
  font-size: clamp(2.75rem, 8vw, 6rem);
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
  
  .highlight {
    color: #90B3A7;
  }
`;

const Area = styled(motion.div)`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 600;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.3);
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  color: white;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.2);
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: transparent;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 500;
  cursor: pointer;
  min-height: 56px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  font-size: clamp(1rem, 2vw, 1.125rem);
  font-weight: 500;
  cursor: pointer;
  min-height: 56px;
  backdrop-filter: blur(20px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  
  .scroll-text {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 0.5rem;
  }
  
  .scroll-line {
    width: 1px;
    height: 30px;
    background: rgba(255, 255, 255, 0.3);
    margin: 0 auto;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 8px;
      background: white;
      animation: scroll 2s ease-in-out infinite;
    }
  }
  
  @keyframes scroll {
    0% { transform: translateY(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: translateY(22px); opacity: 0; }
  }
`;

const BanyaHeroSection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const banyaImages = [
    {
      webp: '/images-webp/banya/panoramic.webp',
      fallback: '/images/banya/panoramic.png',
      title: 'Панорамная парная 150 м²'
    },
    {
      webp: '/images-webp/banya/private.webp', 
      fallback: '/images/banya/private.jpg',
      title: 'Приватная сауна'
    },
    {
      webp: '/images-webp/banya/public.webp',
      fallback: '/images/banya/public.jpg', 
      title: 'Общественная парная'
    }
  ];

  const getImageSrc = (image) => {
    const supportsWebP = () => {
      const elem = document.createElement('canvas');
      return elem.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    };
    
    return supportsWebP() ? image.webp : image.fallback;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banyaImages.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [banyaImages.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <HeroContainer>
      <BackgroundContainer>
        <BackgroundSlider>
          {banyaImages.map((image, index) => (
            <SlideImage
              key={index}
              $image={getImageSrc(image)}
              $active={currentSlide === index}
            />
          ))}
        </BackgroundSlider>
      </BackgroundContainer>
      
      <ContentWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Badge variants={itemVariants}>
            <FireIcon />
            {t('banya.hero.badge', 'Лучшая баня Пхукета')}
          </Badge>
          
          <MainTitle 
            variants={itemVariants}
            dangerouslySetInnerHTML={{
              __html: t('banya.hero.title', 'Панорамная <span className="highlight">русская баня</span>')
            }}
          />
          
          <Area variants={itemVariants}>
            {t('banya.hero.area', '150 квадратных метров')}
          </Area>
          
          <Subtitle variants={itemVariants}>
            {t('banya.hero.subtitle', 'Традиции встречают современность с печами Woodson')}
          </Subtitle>
          
          <CTAContainer variants={itemVariants}>
            <Link to="/contacts">
              <PrimaryButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('banya.hero.book_button', 'Забронировать')}
                <ArrowRightIcon />
              </PrimaryButton>
            </Link>
            
            <Link to="/contacts">
              <SecondaryButton
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('banya.hero.contacts_button', 'Контакты')}
                <PhoneIcon />
              </SecondaryButton>
            </Link>
          </CTAContainer>
        </motion.div>
      </ContentWrapper>
      
      <ScrollIndicator
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="scroll-text">{t('banya.hero.scroll', 'Scroll')}</div>
        <div className="scroll-line"></div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default memo(BanyaHeroSection); 