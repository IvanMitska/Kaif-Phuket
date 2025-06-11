import React, { useState, useEffect, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  XMarkIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  PhotoIcon,
  EyeIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { 
  useLazyImage, 
  useIntersectionObserver, 
  usePerformanceOptimization,
  useTouchGestures,
  useModal,
  useLocalStorage
} from './hooks/useLazyLoading';



// Основные стили с оптимизацией производительности
const SectionContainer = styled(motion.section)`
  position: relative;
  padding: 6rem 0;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 50%, #f8fffe 100%);
  overflow: hidden;
  min-height: auto;
  /* Оптимизация производительности */
  will-change: auto;
  transform: translateZ(0);
  
  @media (max-width: 1024px) {
    padding: 4rem 0;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
    min-height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(144, 179, 167, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(212, 165, 116, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 50% 50%, rgba(232, 115, 74, 0.03) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const ContentWrapper = styled(motion.div)`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const Overline = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #90B3A7;
  margin-bottom: 1rem;
  opacity: 0.9;
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    letter-spacing: 2px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-weight: 600;
  color: #2C3E2D;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    line-height: 1.3;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  color: #5A6B5D;
  max-width: 800px;
  margin: 0 auto 2.5rem;
  line-height: 1.8;
  font-weight: 400;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const FilterBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    gap: 0.75rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.5rem;
    margin-bottom: 1.5rem;
  }
`;

const FilterButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.25s ease-out;
  position: relative;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  min-width: 140px;
  text-align: center;
  /* Оптимизация производительности */
  will-change: transform, background-color, box-shadow;
  transform: translateZ(0);
  
  background: ${({ active }) => active 
    ? 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' 
    : 'rgba(255, 255, 255, 0.1)'};
  color: ${({ active }) => active ? 'white' : '#2C3E2D'};
  box-shadow: ${({ active }) => active 
    ? '0 8px 32px rgba(144, 179, 167, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.2)' 
    : '0 4px 20px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.25)'};
  backdrop-filter: blur(25px);
  border: 1px solid ${({ active }) => active 
    ? 'rgba(255, 255, 255, 0.3)' 
    : 'rgba(255, 255, 255, 0.15)'};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: left 0.8s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    opacity: 0;
    transition: all 0.4s ease;
    border-radius: 50px;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.03);
    color: ${({ active }) => active ? 'white' : 'white'};
    background: ${({ active }) => active 
      ? 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' 
      : 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)'};
    box-shadow: ${({ active }) => active 
      ? '0 12px 45px rgba(144, 179, 167, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.4)' 
      : '0 8px 35px rgba(144, 179, 167, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.5)'};
    border-color: rgba(255, 255, 255, 0.4);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 0;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(0.98);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 0.8rem;
    min-width: 120px;
    letter-spacing: 1.2px;
  }
  
  @media (max-width: 480px) {
    padding: 0.75rem 1.75rem;
    font-size: 0.75rem;
    min-width: 100px;
    letter-spacing: 1px;
  }
`;

const SliderContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 3rem auto;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
  background: transparent;
  
  @media (max-width: 768px) {
    margin: 2rem auto;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    margin: 1.5rem auto;
    border-radius: 12px;
  }
`;

const SliderTrack = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  will-change: transform;
  background: transparent;
  margin: 0;
  padding: 0;
  /* GPU ускорение для плавности */
  transform: translateZ(0);
  backface-visibility: hidden;
`;

const Slide = styled(motion.div)`
  flex-shrink: 0;
  width: 100%;
  height: 650px;
  position: relative;
  background: transparent;
  overflow: hidden;
  margin: 0;
  padding: 0;
  border: none;
  
  @media (max-width: 768px) {
    height: 500px;
  }
  
  @media (max-width: 480px) {
    height: 400px;
  }
`;

const SlideImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  vertical-align: top;
  object-position: ${props => props.$customPosition || 'center'};
  /* Оптимизация загрузки изображений */
  loading: lazy;
  
  &:hover {
    transform: scale(1.01) translateZ(0);
    transition: transform 0.3s ease-out;
  }
`;

const SlideOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2.5rem 3rem;
  background: transparent;
  color: white;
  pointer-events: none;
  
  @media (max-width: 768px) {
    padding: 2rem 2.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem 2rem;
  }
`;

const SlideTitle = styled(motion.h3)`
  font-family: 'Playfair Display', serif;
  font-size: 1.875rem;
  font-weight: 500;
  margin: 0;
  color: white;
  text-shadow: 
    0 0 20px rgba(0, 0, 0, 0.9),
    0 2px 8px rgba(0, 0, 0, 0.8),
    0 4px 16px rgba(0, 0, 0, 0.7),
    0 8px 32px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const SlideDescription = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  color: white;
  opacity: 0.95;
  line-height: 1.7;
  max-width: 600px;
  text-shadow: 
    0 0 16px rgba(0, 0, 0, 0.9),
    0 2px 6px rgba(0, 0, 0, 0.8),
    0 4px 12px rgba(0, 0, 0, 0.5);
  pointer-events: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const SliderButton = styled(motion.button)`
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) translateZ(0) !important;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  color: #2C3E2D;
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-out;
  z-index: 10;
  opacity: 0.8;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  /* Оптимизация производительности */
  will-change: transform, opacity;
  
  &:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.03) translateZ(0) !important;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.97) translateZ(0) !important;
  }
  
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    
    &:hover {
      transform: translateY(-50%) !important;
      background: rgba(255, 255, 255, 0.9);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
  }
  
  &.prev {
    left: 1rem;
  }
  
  &.next {
    right: 1rem;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    opacity: 0.8;
  }
  
  @media (max-width: 768px) {
    width: 2.25rem;
    height: 2.25rem;
    
    &.prev {
      left: 0.75rem;
    }
    
    &.next {
      right: 0.75rem;
    }
    
    svg {
      width: 0.875rem;
      height: 0.875rem;
    }
  }
  
  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
    
    &.prev {
      left: 0.5rem;
    }
    
    &.next {
      right: 0.5rem;
    }
    
    svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;




// Модальное окно
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ModalContainer = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    max-width: 95vw;
    max-height: 95vh;
    border-radius: 16px;
  }
  
  @media (max-width: 480px) {
    max-width: 100vw;
    max-height: 100vh;
    border-radius: 0;
  }
`;

const ModalImage = styled(motion.img)`
  width: 100%;
  max-height: 70vh;
  object-fit: contain;
  display: block;
  
  @media (max-width: 480px) {
    max-height: 60vh;
  }
`;

const ModalInfo = styled(motion.div)`
  padding: 2rem;
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.75rem;
    font-weight: 600;
    color: #2C3E2D;
    margin-bottom: 0.75rem;
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
  }
  
  p {
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    color: #5A6B5D;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    
    @media (max-width: 480px) {
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

const ModalNavigation = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const NavButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  pointer-events: ${({ disabled }) => disabled ? 'none' : 'auto'};
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #7DA096 0%, #90B3A7 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.3);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 480px) {
    top: 0.75rem;
    right: 0.75rem;
    width: 40px;
    height: 40px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const GallerySection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Используем наши кастомные хуки
  const { isOpen: isModalOpen, content: selectedImage, open: openModal, close: closeModal } = useModal();
  const [likedImages, setLikedImages] = useLocalStorage('gallery-liked-images', []);
  const { getOptimizedAnimation, isReducedMotion } = usePerformanceOptimization();
  const [sectionRef, isSectionVisible] = useIntersectionObserver({ threshold: 0.1 });

  // Оптимизированные данные галереи с уменьшенным набором
  const galleryData = useMemo(() => [
    // СПА
    {
      id: 1,
      image: '/images/spa/services/thai-massage.jpg',
      title: 'Тайский массаж',
      category: 'spa',
      description: 'Традиционный тайский массаж в исполнении опытных мастеров. Восстановление энергии и гармонии тела.'
    },
    {
      id: 2,
      image: '/images/spa/services/aromatherapy.jpg',
      title: 'Ароматерапия',
      category: 'spa',
      description: 'Расслабляющие процедуры с натуральными эфирными маслами премиум-качества.'
    },
    // Фитнес
    {
      id: 3,
      image: '/images/sports/gym/gym-1.jpg',
      title: 'Тренажерный зал',
      category: 'fitness',
      description: 'Более 70 современных тренажеров премиум-класса. Профессиональное оборудование для всех видов тренировок.'
    },

      // Релаксация
      {
        id: 4,
        image: '/images/beauty/services/facial.jpg',
        title: 'Косметология',
        category: 'relax',
        description: 'Профессиональные процедуры для лица с использованием премиум косметики.'
      }
    ], []);

  // Упрощенные фильтры
  const filters = useMemo(() => [
    { id: 'all', label: t('gallery.filters.all') },
    { id: 'spa', label: t('gallery.filters.spa') },
    { id: 'fitness', label: t('gallery.filters.fitness') }
  ], [t]);

  // Фильтрация данных
  const filteredGallery = useMemo(() => {
    return activeFilter === 'all' 
      ? galleryData 
      : galleryData.filter(item => item.category === activeFilter);
  }, [activeFilter, galleryData]);

  // Сброс слайда при смене фильтра
  useEffect(() => {
    setCurrentSlide(0);
  }, [activeFilter]);

  // Обработчики событий
  const handleFilterChange = useCallback((filterId) => {
    setActiveFilter(filterId);
  }, []);

  // Навигация слайдера
  const goToNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % filteredGallery.length);
  }, [filteredGallery.length]);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + filteredGallery.length) % filteredGallery.length);
  }, [filteredGallery.length]);



  // Состояние автопроигрывания
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Автоматическое переключение слайдов с оптимизацией
  useEffect(() => {
    if (filteredGallery.length <= 1 || !isAutoplay || !isSectionVisible) return;
    
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % filteredGallery.length);
    }, 4000); // Оптимальный интервал для плавности

    return () => clearInterval(interval);
  }, [filteredGallery.length, isAutoplay, isSectionVisible]);

  // Обработчики для управления автопроигрыванием
  const handleMouseEnter = useCallback(() => {
    setIsAutoplay(false);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsAutoplay(true);
  }, []);

  // Touch gestures для слайдера
  const sliderTouchGestures = useTouchGestures(
    goToNextSlide,
    goToPrevSlide
  );

  const handleLikeToggle = useCallback((imageId) => {
    setLikedImages(prev => {
      const newArray = [...prev];
      const index = newArray.indexOf(imageId);
      if (index > -1) {
        newArray.splice(index, 1);
      } else {
        newArray.push(imageId);
      }
      return newArray;
    });
  }, [setLikedImages]);

  const handleModalOpen = useCallback((item, index) => {
    setSelectedImageIndex(index);
    openModal(item);
  }, [openModal]);

  const navigateModal = useCallback((direction) => {
    const newIndex = direction === 'next' 
      ? (selectedImageIndex + 1) % filteredGallery.length
      : (selectedImageIndex - 1 + filteredGallery.length) % filteredGallery.length;
    
    setSelectedImageIndex(newIndex);
    openModal(filteredGallery[newIndex]);
  }, [selectedImageIndex, filteredGallery, openModal]);

  // Touch gestures для модального окна
  const touchGestures = useTouchGestures(
    () => navigateModal('next'),
    () => navigateModal('prev')
  );

  // Обработка клавиатуры для модального окна
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (event) => {
      switch (event.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          navigateModal('prev');
          break;
        case 'ArrowRight':
          navigateModal('next');
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal, navigateModal]);



  return (
    <SectionContainer id="gallery" ref={sectionRef}>
      <ContentWrapper>
        <SectionHeader>
          <Overline
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={getOptimizedAnimation({ duration: 0.8, ease: "easeOut" })}
            viewport={{ once: true }}
          >
            {t('gallery.overline')}
          </Overline>
          <SectionTitle
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={getOptimizedAnimation({ duration: 0.8, delay: 0.2, ease: "easeOut" })}
            viewport={{ once: true }}
          >
            {t('gallery.title')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={getOptimizedAnimation({ duration: 0.8, delay: 0.4, ease: "easeOut" })}
            viewport={{ once: true }}
          >
            {t('gallery.subtitle')} 
            Познакомьтесь с нашими услугами и возможностями комплекса.
          </SectionSubtitle>
        </SectionHeader>
        
        <FilterBar
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={getOptimizedAnimation({ duration: 0.8, delay: 0.6, ease: "easeOut" })}
          viewport={{ once: true }}
        >
          {filters.map((filter, index) => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => handleFilterChange(filter.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={getOptimizedAnimation({ duration: 0.5, delay: 0.7 + index * 0.1 })}
              viewport={{ once: true }}
              whileHover={!isReducedMotion ? { scale: 1.05 } : {}}
              whileTap={!isReducedMotion ? { scale: 0.95 } : {}}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterBar>
        
        {isSectionVisible && filteredGallery.length > 0 && (
          <AnimatePresence mode="wait">
            <SliderContainer
              key={activeFilter}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={getOptimizedAnimation({ duration: 0.4, ease: "easeInOut" })}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              {...sliderTouchGestures}
            >
              <SliderTrack
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.4
                }}
              >
                {filteredGallery.map((item, index) => (
                  <Slide key={`${activeFilter}-${item.id}`}>
                    <SlideImage
                      src={item.image}
                      alt={item.title}
                      onClick={() => handleModalOpen(item, index)}
                      loading="lazy"
                      $customPosition={item.title === 'Тайский массаж' ? 'center bottom' : 'center'}
                    />
                    <SlideOverlay>
                      <SlideTitle>
                        {item.title}
                      </SlideTitle>
                    </SlideOverlay>
                  </Slide>
                ))}
              </SliderTrack>
              
              {filteredGallery.length > 1 && (
                <>
                  <SliderButton
                    className="prev"
                    onClick={goToPrevSlide}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={filteredGallery.length <= 1}
                  >
                    <ChevronLeftIcon />
                  </SliderButton>
                  
                  <SliderButton
                    className="next"
                    onClick={goToNextSlide}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={filteredGallery.length <= 1}
                  >
                    <ChevronRightIcon />
                  </SliderButton>
                </>
              )}
            </SliderContainer>
          </AnimatePresence>
        )}
      </ContentWrapper>
      
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={getOptimizedAnimation({ duration: 0.3 })}
            onClick={closeModal}
            {...touchGestures}
          >
            <ModalContainer
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={getOptimizedAnimation({ 
                duration: 0.4, 
                ease: [0.25, 0.1, 0.25, 1] 
              })}
            >
              <ModalImage 
                src={selectedImage.image} 
                alt={selectedImage.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={getOptimizedAnimation({ duration: 0.5, delay: 0.2 })}
              />
              
              <ModalInfo>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={getOptimizedAnimation({ duration: 0.5, delay: 0.3 })}
                >
                  {selectedImage.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={getOptimizedAnimation({ duration: 0.5, delay: 0.4 })}
                >
                  {selectedImage.description}
                </motion.p>
                
                <ModalNavigation>
                  <NavButton
                    onClick={() => navigateModal('prev')}
                    disabled={selectedImageIndex === 0}
                    whileHover={!isReducedMotion ? { scale: 1.05 } : {}}
                    whileTap={!isReducedMotion ? { scale: 0.95 } : {}}
                  >
                    <ChevronLeftIcon />
                    Предыдущее
                  </NavButton>
                  
                  <span style={{ 
                    color: '#5A6B5D', 
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>
                    {selectedImageIndex + 1} из {filteredGallery.length}
                  </span>
                  
                  <NavButton
                    onClick={() => navigateModal('next')}
                    disabled={selectedImageIndex === filteredGallery.length - 1}
                    whileHover={!isReducedMotion ? { scale: 1.05 } : {}}
                    whileTap={!isReducedMotion ? { scale: 0.95 } : {}}
                  >
                    Следующее
                    <ChevronRightIcon />
                  </NavButton>
                </ModalNavigation>
              </ModalInfo>
              
              <CloseButton 
                onClick={closeModal}
                whileHover={!isReducedMotion ? { scale: 1.1, rotate: 90 } : {}}
                whileTap={!isReducedMotion ? { scale: 0.9 } : {}}
              >
                <XMarkIcon />
              </CloseButton>
            </ModalContainer>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};

// Оптимизированный экспорт для lazy loading
export { GallerySection };

// Легкий экспорт по умолчанию для производительности
export default GallerySection; 