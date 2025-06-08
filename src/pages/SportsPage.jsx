import React, { useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';

// Ленивая загрузка компонентов спорта для оптимизации
const HeroSection = React.lazy(() => import('../components/sports/HeroSection/HeroSection'));
const FacilitySection = React.lazy(() => import('../components/sports/FacilitySection/FacilitySection'));
const GallerySection = React.lazy(() => import('../components/sports/GallerySection/GallerySection'));
const ScheduleSection = React.lazy(() => import('../components/sports/ScheduleSection/ScheduleSection'));
import { PageContainer } from '../styles/sports/CommonStyles';

// Невидимый компонент загрузки
const InvisibleLoader = () => null;

const SportsPage = () => {
  // Добавлено сохранение стилей при рендеринге страницы
  useEffect(() => {
    console.log('SportsPage загружается...');
    // Добавляем класс для спортивной страницы
    document.body.classList.add('sports-page');
    
    // Принудительно прокручиваем вверх при загрузке страницы
    window.scrollTo(0, 0);
    
    // Удаляем класс при уходе со страницы
    return () => {
      console.log('SportsPage выгружается...');
      document.body.classList.remove('sports-page');
    };
  }, []);
  
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <Suspense fallback={<InvisibleLoader />}>
        <HeroSection />
        <FacilitySection />
        <GallerySection />
        <ScheduleSection />
      </Suspense>
    </PageContainer>
  );
};

export default SportsPage;
