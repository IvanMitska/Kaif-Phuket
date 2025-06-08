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
  HeroStatLabel,
  HeroImageContainer,
  HeroImage
} from './HeroStyles';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <HeroSectionContainer>
      <HeroBackground />

      <HeroContainer>
        <HeroContent
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ paddingTop: '2rem' }}
        >
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {t('sports.hero.title', 'Достигайте новых <span>спортивных высот</span> с KAIF')}
          </HeroTitle>

          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {t('sports.hero.subtitle', 'В KAIF Jungle Club & SPA вы найдете все необходимое для активного образа жизни, тренировок и спортивного развлечения в атмосфере роскоши и комфорта.')}
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
              <HeroStatNumber>24/7</HeroStatNumber>
              <HeroStatLabel>{t('sports.hero.stats.access', 'Доступ для резидентов')}</HeroStatLabel>
            </HeroStat>
          </HeroStatsContainer>
        </HeroContent>

        <HeroImageContainer
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ marginTop: '2rem' }}
        >
          <div style={{
            width: '100%',
            maxWidth: '500px',
            height: '400px',
            background: 'linear-gradient(135deg, rgba(210, 155, 132, 0.1) 0%, rgba(139, 69, 19, 0.15) 50%, rgba(210, 155, 132, 0.08) 100%)',
            borderRadius: '30px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(210, 155, 132, 0.15)',
            border: '1px solid rgba(210, 155, 132, 0.2)',
            fontSize: '4rem',
            color: 'rgba(210, 155, 132, 0.8)',
            fontWeight: 'bold'
          }}>
            🏋️‍♂️
          </div>
        </HeroImageContainer>
      </HeroContainer>
    </HeroSectionContainer>
  );
};

export default HeroSection;
