import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ArrowRightIcon,
  FireIcon,
  BoltIcon,
  TrophyIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

import {
  HeroSection as HeroSectionContainer,
  HeroBackground,
  HeroContainer,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroCTAContainer,
  PrimaryButton,
  SecondaryButton,
  HeroStatsContainer,
  HeroStat,
  HeroStatNumber,
  HeroStatLabel,
  HeroImageContainer,
  HeroImage,
  HeroImageGlow,
  HeroImageFrame
} from './HeroStyles';

// Слайдер изображений для фона
const heroImages = [
  '/images/sports/gym/gym-1.jpg',
  '/images/sports/fight-club/fight-1.jpg',
  '/images/sports/gym/gym-2.jpg',
  '/images/sports/fight-club/fight-2.jpg',
];

const HeroSection = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Автоматическая смена изображений
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); // Меняем каждые 5 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <HeroSectionContainer>
      <AnimatePresence mode="wait">
        <HeroBackground
          key={currentImageIndex}
          style={{
            backgroundImage: `url(${heroImages[currentImageIndex]})`
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>

      {/* Декоративные элементы */}
      <motion.div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(210, 155, 132, 0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          zIndex: 1
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <HeroContainer>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              background: '#FFE600',
              padding: '0.7rem 1.4rem',
              borderRadius: '0',
              border: 'none',
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
              fontWeight: '800',
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              boxShadow: '0 6px 24px rgba(255, 230, 0, 0.4)'
            }}
          >
            <FireIcon style={{ width: '18px', height: '18px', color: '#000000' }} />
            {t('sports.hero.tag', 'YOUR ELITE FITNESS')}
          </motion.div>

          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('sports.hero.main_title_1', 'YOUR')}
            <br />
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #FFE600 0%, #FFA500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
                filter: 'drop-shadow(0 0 40px rgba(255, 230, 0, 0.6))'
              }}
            >
              {t('sports.hero.main_title_2', 'ELITE')}
            </motion.span>
            <br />
            {t('sports.hero.main_title_3', 'FITNESS')}
            <br />
            <motion.span
              style={{
                fontSize: '0.5em',
                fontWeight: '400',
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '0.1em'
              }}
            >
              {t('sports.hero.main_title_4', 'EXPERIENCE')}
            </motion.span>
          </HeroTitle>

          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t('sports.hero.subtitle', 'Современные тренажеры, профессиональные тренеры и атмосфера для достижения ваших спортивных целей')}
          </HeroSubtitle>

          <HeroCTAContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <PrimaryButton
              as="a"
              href="https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20KAIF"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 15px 50px rgba(210, 155, 132, 0.6)' }}
              whileTap={{ scale: 0.95 }}
            >
              <BoltIcon />
              {t('sports.hero.primary_cta', 'BOOK A TRAINING')}
              <ArrowRightIcon />
            </PrimaryButton>

            <SecondaryButton
              as="a"
              href="#facilities"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 1)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t('sports.hero.secondary_cta', 'LEARN MORE')}
            </SecondaryButton>
          </HeroCTAContainer>

          {/* Дополнительная информация */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '2rem',
              marginTop: '2rem',
              flexWrap: 'wrap'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '0',
                background: '#FFE600',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <TrophyIcon style={{ width: '20px', height: '20px', color: '#000000' }} />
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#FFF', lineHeight: '1' }}>70+</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t('sports.hero.equipment_count', 'Equipment')}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '0',
                background: '#FFE600',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FireIcon style={{ width: '20px', height: '20px', color: '#000000' }} />
              </div>
              <div>
                <div style={{ fontSize: '1.3rem', fontWeight: '900', color: '#FFF', lineHeight: '1' }}>10+</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {t('sports.hero.trainers_count', 'Pro Trainers')}
                </div>
              </div>
            </div>
          </motion.div>

        </HeroContent>

        {/* Большое изображение справа */}
        <HeroImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <HeroImageGlow
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          <HeroImageFrame
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          />
          <HeroImage
            src="/images/sports/gym/gym-1.jpg"
            alt="Elite Fitness"
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />

          {/* Декоративные плашки */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              background: '#FFE600',
              backdropFilter: 'blur(20px)',
              padding: '1.2rem 2rem',
              borderRadius: '0',
              border: 'none',
              boxShadow: '0 10px 40px rgba(255, 230, 0, 0.5)',
              zIndex: 3
            }}
            className="hero-badge-left"
          >
            <div style={{
              fontSize: '2.2rem',
              fontWeight: '900',
              color: '#000000',
              lineHeight: '1',
              marginBottom: '0.3rem',
              letterSpacing: '-0.02em'
            }}>
              24/7
            </div>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: '800',
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '0.15em'
            }}>
              {t('sports.hero.access', 'ACCESS')}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              background: '#FFFFFF',
              backdropFilter: 'blur(20px)',
              padding: '1.2rem 2rem',
              borderRadius: '0',
              border: 'none',
              boxShadow: '0 10px 40px rgba(255, 255, 255, 0.3)',
              zIndex: 3
            }}
            className="hero-badge-right"
          >
            <div style={{
              fontSize: '2.2rem',
              fontWeight: '900',
              color: '#000000',
              lineHeight: '1',
              marginBottom: '0.3rem',
              letterSpacing: '-0.02em'
            }}>
              500+
            </div>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: '800',
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '0.15em'
            }}>
              {t('sports.hero.members_badge', 'MEMBERS')}
            </div>
          </motion.div>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
