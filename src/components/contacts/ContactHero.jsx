import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  heroTextAnimation,
  buttonAnimation 
} from '../ui/animations';

const HeroSection = styled.section`
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, 
    rgba(144, 179, 167, 0.95) 0%, 
    rgba(168, 197, 184, 0.9) 50%, 
    rgba(184, 207, 194, 0.85) 100%
  );
  color: white;
  text-align: center;
  padding: 6rem 1.5rem;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.08) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 700;
  margin-bottom: 1.5rem;
  font-family: ${props => props.theme.fonts.heading};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  line-height: 1.6;
  margin-bottom: 3rem;
  opacity: 0.95;
  font-weight: 300;
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
  
  span {
    font-size: 0.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  
  svg {
    width: 24px;
    height: 24px;
    animation: bounce 2s infinite;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
`;

const ContactHero = ({ onScrollToContent }) => {
  const { t } = useTranslation();

  return (
    <HeroSection>
      <HeroContent
        variants={heroTextAnimation}
        initial="hidden"
        animate="visible"
      >
        <HeroTitle
          variants={heroTextAnimation}
          initial="hidden"
          animate="visible"
        >
          {t('contacts.hero.title')}
        </HeroTitle>
        
        <HeroSubtitle
          variants={heroTextAnimation}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {t('contacts.hero.subtitle')}
        </HeroSubtitle>
      </HeroContent>

      <ScrollIndicator
        variants={buttonAnimation}
        initial="hidden"
        animate="visible"
        onClick={onScrollToContent}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <span>{t('common.scroll_down')}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default ContactHero; 