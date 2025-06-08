import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Импортируем компоненты SPA
import SpaHeroSection from '../components/spa/SpaHeroSection';
import SpaServicesSection from '../components/spa/SpaServicesSection';
import SpaFeaturesSection from '../components/spa/SpaFeaturesSection';
import SpaTestimonialsSection from '../components/spa/SpaTestimonialsSection';
import SpaBookingSection from '../components/spa/SpaBookingSection';
import SpaFAQSection from '../components/spa/SpaFAQSection';

/**
 * Контейнер для SPA страницы в стиле Modern Oasis
 */
const SpaContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.primary};
  overflow-x: hidden;
`;

/**
 * SPA Page Component
 * Современная страница для SPA & Beauty секции
 */
const SpaPage = () => {
  const { t } = useTranslation();
  
  // Добавлено сохранение стилей при рендеринге страницы
  React.useEffect(() => {
    console.log('SpaPage загружается...');
    // Добавляем класс для спа страницы
    document.body.classList.add('spa-page');
    
    // Принудительно прокручиваем вверх при загрузке страницы
    window.scrollTo(0, 0);
    
    // Удаляем класс при уходе со страницы
    return () => {
      console.log('SpaPage выгружается...');
      document.body.classList.remove('spa-page');
    };
  }, []);
  
  // Варианты анимации
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  return (
    <SpaContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.2 }}
    >
      {/* Компоненты страницы */}
      <SpaHeroSection />
      <SpaServicesSection />
      <SpaFeaturesSection />
      <SpaTestimonialsSection />
      <SpaFAQSection />
      <SpaBookingSection />
    </SpaContainer>
  );
};

export default SpaPage;
