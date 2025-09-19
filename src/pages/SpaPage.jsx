import React, { Suspense } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PageScrollReset from '../components/common/PageScrollReset';
import PageHead from '../components/layout/PageHead';

// Ленивая загрузка компонентов СПА для оптимизации
const SpaHeroSection = React.lazy(() => import('../components/spa/SpaHeroSection'));
const SpaServicesSection = React.lazy(() => import('../components/spa/SpaServicesSection'));
const SpaFeaturesSection = React.lazy(() => import('../components/spa/SpaFeaturesSection'));
// Галерея импортируется напрямую вверху файла
// const SpaTestimonialsSection = React.lazy(() => import('../components/spa/SpaTestimonialsSection')); // Отключено
const SpaBookingSection = React.lazy(() => import('../components/spa/SpaBookingSection'));
const SpaFAQSection = React.lazy(() => import('../components/spa/SpaFAQSection'));

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

// Невидимый компонент загрузки
const InvisibleLoader = () => null;

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
      <PageHead 
        titleKey="page_titles.spa"
        description={t('spa.hero.subtitle', 'Professional SPA treatments in the luxurious atmosphere of KAIF')}
        keywords="KAIF spa, massage, beauty treatments, relaxation, wellness, Phuket"
        ogImage="/images/spa/spa-hero.jpg"
      />
      <PageScrollReset />
      <Suspense fallback={<InvisibleLoader />}>
        <SpaHeroSection />
        <SpaServicesSection />
        <SpaFeaturesSection />
      </Suspense>
      
      
      <Suspense fallback={<InvisibleLoader />}>
        {/* <SpaTestimonialsSection /> */}
        <SpaFAQSection />
        <SpaBookingSection />
      </Suspense>
    </SpaContainer>
  );
};

export default SpaPage;
