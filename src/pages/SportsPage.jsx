import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Импорт компонентов секций
import { HeroSection, FacilitySection, GallerySection, ScheduleSection } from '../components/sports';
import { PageContainer } from '../styles/sports/CommonStyles';

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
      {/* Секции разделены на отдельные компоненты */}
      <HeroSection />
      <FacilitySection />
      <GallerySection />
      <ScheduleSection />
    </PageContainer>
  );
};

export default SportsPage;
