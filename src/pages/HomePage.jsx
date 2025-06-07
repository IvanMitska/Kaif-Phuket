import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../components/global/LoadingContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Импортируем компоненты
import HeroFullscreen from '../components/home/HeroFullscreen';
import ExclusiveZones from '../components/home/ExclusiveZones';
import AdvantagesSection from '../components/home/AdvantagesSection';
import GallerySection from '../components/home/GallerySection';
import FAQSection from '../components/home/FAQSection';

// Стилизованная кнопка в стиле hero кнопок
const ContactButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.9rem 2.2rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  min-width: 220px;
  text-align: center;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white !important;
  border: 2px solid transparent;
  box-shadow: 0 6px 20px rgba(144, 179, 167, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.5) !important;
    background: linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%) !important;
    color: white !important;
    text-decoration: none !important;
  }
  
  &:active {
    transform: translateY(-1px) !important;
  }
  
  &:focus {
    outline: none !important;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.3) !important;
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: unset;
    border-radius: 14px;
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.4);
    
    &:hover {
      transform: translateY(-3px) scale(1.01) !important;
      box-shadow: 0 12px 35px rgba(144, 179, 167, 0.6) !important;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.75rem;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(144, 179, 167, 0.5);
    
    svg {
      width: 14px;
      height: 14px;
    }
    
    &:hover {
      transform: translateY(-4px) scale(1.02) !important;
      box-shadow: 0 15px 40px rgba(144, 179, 167, 0.7) !important;
    }
  }
`;

const HomePage = () => {
  const { showLoading } = useLoading();
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    // Запускаем загрузку только один раз при первом монтировании
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      showLoading(1100);
    }
  }, []); // Пустой массив зависимостей - эффект выполнится только один раз

  // Анимационные варианты для кнопки
  const buttonVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        duration: 0.6, 
        type: "spring", 
        stiffness: 120,
        damping: 15
      }
    },
    hover: { 
      scale: 1.02,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: { scale: 0.98 }
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Полноэкранная секция героя с видео или слайдером */}
      <HeroFullscreen />
      
      {/* Эксклюзивные зоны с горизонтальной прокруткой */}
      <ExclusiveZones />
      
      {/* Секция с преимуществами и цифрами */}
      <AdvantagesSection />
      
      {/* Галерея впечатлений */}
      <GallerySection />
      
      {/* FAQ секция (обновленная) */}
      <FAQSection />
      
      {/* Кнопка для перехода на страницу контактов */}
      <motion.div 
        style={{
          display: 'flex', 
          justifyContent: 'center', 
          padding: '60px 20px', 
          background: 'linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(168, 197, 184, 0.03) 100%)'
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <ContactButton 
          to="/contacts"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover="hover"
          whileTap="tap"
        >
          Связаться с нами
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </ContactButton>
      </motion.div>
    </motion.main>
  );
};

export default HomePage; 