import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Импортируем компоненты Бани
import BanyaHeroSection from '../components/banya/BanyaHeroSection';
import BanyaServicesSection from '../components/banya/BanyaServicesSection';
import BanyaFeaturesSection from '../components/banya/BanyaFeaturesSection';
import BanyaTestimonialsSection from '../components/banya/BanyaTestimonialsSection';
import BanyaBookingSection from '../components/banya/BanyaBookingSection';
import BanyaFAQSection from '../components/banya/BanyaFAQSection';

/**
 * Контейнер для страницы Бани в стиле Modern Oasis
 */
const BanyaContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.primary};
  overflow-x: hidden;
`;

/**
 * Banya Page Component
 * Современная страница для Бани в стиле Modern Oasis
 */
const BanyaPage = () => {
  const { t } = useTranslation();
  
  console.log('BanyaPage рендерится!'); // Диагностика
  
  // Добавлено сохранение стилей при рендеринге страницы
  React.useEffect(() => {
    console.log('BanyaPage загружается... useEffect выполнен');
    // Добавляем класс для страницы бани
    document.body.classList.add('banya-page');
    
    // Принудительно прокручиваем вверх при загрузке страницы
    window.scrollTo(0, 0);
    
    // Удаляем класс при уходе со страницы
    return () => {
      console.log('BanyaPage выгружается...');
      document.body.classList.remove('banya-page');
    };
  }, []);
  
  // Варианты анимации
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  return (
    <BanyaContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.2 }}
    >
      {/* Пробуем загрузить только Hero секцию */}
      <BanyaHeroSection />
      
      {/* Остальные компоненты (временно закомментированы для диагностики) */}
      {/*
      <BanyaServicesSection />
      <BanyaFeaturesSection />
      <BanyaTestimonialsSection />
      <BanyaFAQSection />
      <BanyaBookingSection />
      */}
    </BanyaContainer>
  );
};

export default BanyaPage; 