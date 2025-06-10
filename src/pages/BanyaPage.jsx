import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Обычные импорты компонентов Бани
import BanyaHeroSection from '../components/banya/BanyaHeroSection';
import BanyaServicesSection from '../components/banya/BanyaServicesSection';
import BanyaFeaturesSection from '../components/banya/BanyaFeaturesSection';
import BanyaBookingSection from '../components/banya/BanyaBookingSection';
import BanyaFAQSection from '../components/banya/BanyaFAQSection';

/**
 * Контейнер для страницы Бани в стиле Modern Oasis
 */
const BanyaContainer = styled.div`
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
  const [isReady, setIsReady] = React.useState(false);
  
  // Добавлено сохранение стилей при рендеринге страницы
  React.useEffect(() => {
    console.log('BanyaPage загружается...');
    // Добавляем класс для страницы бани
    document.body.classList.add('banya-page');
    
    // Принудительно прокручиваем вверх при загрузке страницы
    window.scrollTo(0, 0);
    
    // Убеждаемся что страница готова к отображению
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);
    
    // Удаляем класс при уходе со страницы
    return () => {
      console.log('BanyaPage выгружается...');
      document.body.classList.remove('banya-page');
      clearTimeout(timer);
    };
  }, []);
  
  // Варианты анимации
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  if (!isReady) {
    return null;
  }

  return (
    <BanyaContainer
      as={motion.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.2 }}
    >
      <BanyaHeroSection />
      <BanyaServicesSection />
      <BanyaFeaturesSection />
      <BanyaFAQSection />
      <BanyaBookingSection />
    </BanyaContainer>
  );
};

export default BanyaPage; 