import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Импорт компонентов секций
import { HeroSection, FacilitySection, GallerySection, ScheduleSection } from '../components/sports';
import { PageContainer } from '../styles/sports/CommonStyles';

const SportsPage = () => {
  // Добавлено сохранение стилей при рендеринге страницы
  useEffect(() => {
    // Добавляем класс для спортивной страницы
    document.body.classList.add('sports-page');
    
    // Удаляем класс при уходе со страницы
    return () => {
      document.body.classList.remove('sports-page');
    };
  }, []);
  
  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
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
