import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Импортируем логотип
import headerLogo from '../assets/images/logos/logo-header.png';

// Импортируем обновленные компоненты
import HeroFullscreen from '../components/home/HeroFullscreen';
import PhilosophySection from '../components/home/PhilosophySection';
import ExclusiveZones from '../components/home/ExclusiveZones';
import AdvantagesSection from '../components/home/AdvantagesSection';
// Секция SpecialOffers удалена, так как у нас нет специальных предложений
import GallerySection from '../components/home/GallerySection';
import FAQSection from '../components/home/FAQSection';
import LocationSection from '../components/home/LocationSection';
// BookingSection removed as requested

// Компонент загрузки для первого входа на сайт
const LoadingScreen = () => (
  <motion.div 
    className="loading-screen"
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000
    }}
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <img 
        src={headerLogo} 
        alt="KAIF" 
        style={{ 
          maxWidth: '350px',
          height: 'auto'
        }} 
      />
    </motion.div>
  </motion.div>
);

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  
  // Эффект для отображения экрана загрузки
  useEffect(() => {
    // Скрываем экран загрузки через 1 секунду
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 
    
    return () => clearTimeout(timer);
  }, []);

  // Эффект для плавной прокрутки при скролле
  useEffect(() => {
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100, // Учитывая высоту меню
            behavior: 'smooth'
          });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleLinkClick));
    
    return () => links.forEach(link => link.removeEventListener('click', handleLinkClick));
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ 
          duration: 0.8, 
          delay: 0, // Убираем задержку
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        {/* Полноэкранная секция героя с видео или слайдером */}
        <HeroFullscreen />
        
        {/* Секция с философией KAIF */}
        <PhilosophySection />
        
        {/* Эксклюзивные зоны с горизонтальной прокруткой */}
        <ExclusiveZones />
        
        {/* Секция с преимуществами и цифрами */}
        <AdvantagesSection />
        
        {/* Специальные предложения */}
        {/* Секция специальных предложений удалена */}
        
        {/* Галерея впечатлений */}
        <GallerySection />
        
        {/* FAQ секция (обновленная) */}
        <FAQSection />
        
        {/* Обновленная секция местоположения */}
        <LocationSection />
        
        {/* BookingSection removed as requested */}
      </motion.main>
    </>
  );
};

export default HomePage; 