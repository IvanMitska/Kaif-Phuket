import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRightIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

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
  HeroStatLabel
} from './HeroStyles';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <HeroSectionContainer>
      {/* 
        Фоновое изображение можно легко поменять в HeroStyles.jsx:
        - Спортзал: '/images/sports/gym/gym-1.jpg'
        - Боевые искусства: '/images/sports/fight-club/fight-1.jpg'
        - Другие варианты: '/images/sports/fight-club/fight-2.jpg', '/images/sports/fight-club/fight-3.jpg'
      */}
      <HeroBackground />

      <HeroContainer>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            dangerouslySetInnerHTML={{
              __html: t('sports.hero.title', 'Превосходи себя в <span>спорте</span> с KAIF')
            }}
          />

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
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('sports.hero.primary_cta', 'Записаться на тренировку')}
              <ArrowRightIcon />
            </PrimaryButton>

            <SecondaryButton
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {t('sports.hero.secondary_cta', 'Узнать подробнее')}
              <ChevronRightIcon />
            </SecondaryButton>
          </HeroCTAContainer>

          <HeroStatsContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <HeroStat
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <HeroStatNumber>5+</HeroStatNumber>
              <HeroStatLabel>{t('sports.hero.stats.facilities', 'Спортивных объектов')}</HeroStatLabel>
            </HeroStat>

            <HeroStat
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <HeroStatNumber>10+</HeroStatNumber>
              <HeroStatLabel>{t('sports.hero.stats.trainers', 'Профессиональных тренеров')}</HeroStatLabel>
            </HeroStat>

            <HeroStat
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
            >
              <HeroStatNumber>70+</HeroStatNumber>
              <HeroStatLabel>{t('sports.hero.stats.access', 'Современное оборудование')}</HeroStatLabel>
            </HeroStat>
          </HeroStatsContainer>
        </HeroContent>
      </HeroContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
