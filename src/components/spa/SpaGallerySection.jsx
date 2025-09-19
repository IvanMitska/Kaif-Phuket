import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  XMarkIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon,
  ArrowsPointingOutIcon,
  Squares2X2Icon,
  ViewColumnsIcon
} from '@heroicons/react/24/solid';
import { HeartIcon } from '@heroicons/react/24/outline';

// =============================================================================
// СОВРЕМЕННАЯ ГАЛЕРЕЯ SPA
// =============================================================================

const GallerySection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 1rem;
  font-family: ${props => props.theme?.fonts?.heading || '"Poppins", sans-serif'};
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #7A8A7D;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Фильтры категорий
const CategoryFilters = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const FilterButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' : 'white'};
  color: ${props => props.active ? 'white' : '#5A6B5D'};
  border: 2px solid ${props => props.active ? 'transparent' : '#e2e8f0'};
  border-radius: 25px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(144, 179, 167, 0.2);
    border-color: #90B3A7;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

// Переключатель вида галереи
const ViewToggle = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ViewButton = styled.button`
  padding: 0.5rem;
  background: ${props => props.active ? '#90B3A7' : 'transparent'};
  color: ${props => props.active ? 'white' : '#7A8A7D'};
  border: 2px solid ${props => props.active ? '#90B3A7' : '#e2e8f0'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  &:hover {
    background: ${props => props.active ? '#7A9A8E' : '#f5f5f5'};
  }
`;

// Сетка галереи
const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: ${props => {
    if (props.view === 'grid') return 'repeat(auto-fill, minmax(300px, 1fr))';
    if (props.view === 'masonry') return 'repeat(auto-fill, minmax(250px, 1fr))';
    return '1fr';
  }};
  gap: ${props => props.view === 'list' ? '2rem' : '1rem'};
  
  @media (max-width: 768px) {
    grid-template-columns: ${props => props.view === 'list' ? '1fr' : 'repeat(2, 1fr)'};
    gap: 0.75rem;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const GalleryItem = styled(motion.div)`
  position: relative;
  overflow: hidden;
  border-radius: ${props => props.view === 'list' ? '20px' : '16px'};
  cursor: pointer;
  background: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  aspect-ratio: ${props => props.view === 'list' ? 'auto' : '1'};
  
  ${props => props.view === 'masonry' && `
    &:nth-child(3n+1) { grid-row: span 2; aspect-ratio: 3/4; }
    &:nth-child(5n+2) { grid-column: span 2; aspect-ratio: 16/9; }
    
    @media (max-width: 768px) {
      &:nth-child(3n+1) { grid-row: span 1; aspect-ratio: 1; }
      &:nth-child(5n+2) { grid-column: span 1; aspect-ratio: 1; }
    }
  `}
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    
    img {
      transform: scale(1.05);
    }
    
    .overlay {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    border-radius: 12px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0) 0%, 
    rgba(0, 0, 0, 0.1) 50%,
    rgba(0, 0, 0, 0.6) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  @media (max-width: 768px) {
    opacity: 1;
    background: linear-gradient(180deg, 
      rgba(0, 0, 0, 0) 0%, 
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.5) 100%
    );
    padding: 1rem;
  }
`;

const ImageTitle = styled.h3`
  color: white;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ImageDescription = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    display: none;
  }
`;

// Лайтбокс для просмотра изображений
const Lightbox = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 0;
  }
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    max-width: 100vw;
    max-height: 100vh;
  }
`;

const LightboxImage = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    border-radius: 0;
    width: 100%;
    height: auto;
  }
`;

const LightboxControls = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  gap: 1rem;
  z-index: 10;
  
  @media (max-width: 768px) {
    top: env(safe-area-inset-top, 1rem);
    right: 1rem;
  }
`;

const LightboxButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
    
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

const NavigationButton = styled(LightboxButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.direction === 'prev' ? 'left: 2rem;' : 'right: 2rem;'}
  
  @media (max-width: 768px) {
    ${props => props.direction === 'prev' ? 'left: 1rem;' : 'right: 1rem;'}
    background: rgba(0, 0, 0, 0.5);
  }
`;

const ImageInfo = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  color: white;
  text-align: center;
  
  @media (max-width: 768px) {
    bottom: env(safe-area-inset-bottom, 2rem);
    left: 1rem;
    right: 1rem;
  }
`;

const ImageCounter = styled.div`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
`;

const LoadMoreButton = styled(motion.button)`
  display: block;
  margin: 3rem auto 0;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(144, 179, 167, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 1.75rem;
    font-size: 0.9rem;
  }
`;

// Компонент галереи
const SpaGallerySection = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(12);
  
  // Временные данные галереи с заглушками (замените на реальные изображения)
  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80',
      title: t('spa.gallery.interior_title', 'Роскошный интерьер'),
      description: t('spa.gallery.interior_desc', 'Элегантный дизайн наших помещений'),
      category: 'interior'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      title: t('spa.gallery.massage_title', 'Тайский массаж'),
      description: t('spa.gallery.massage_desc', 'Традиционные техники релаксации'),
      category: 'procedures'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      title: t('spa.gallery.pool_title', 'Зона отдыха'),
      description: t('spa.gallery.pool_desc', 'Бассейн и джакузи'),
      category: 'relaxation'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?w=800&q=80',
      title: t('spa.gallery.sauna_title', 'Финская сауна'),
      description: t('spa.gallery.sauna_desc', 'Классическая парная'),
      category: 'sauna'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80',
      title: t('spa.gallery.beauty_title', 'Косметология'),
      description: t('spa.gallery.beauty_desc', 'Современные процедуры красоты'),
      category: 'beauty'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1522444432501-7730c3ebe77a?w=800&q=80',
      title: t('spa.gallery.lounge_title', 'Лаунж зона'),
      description: t('spa.gallery.lounge_desc', 'Комфортное ожидание'),
      category: 'interior'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80',
      title: t('spa.gallery.facial_title', 'Уход за лицом'),
      description: t('spa.gallery.facial_desc', 'Профессиональная косметология'),
      category: 'procedures'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
      title: t('spa.gallery.hammam_title', 'Турецкий хаммам'),
      description: t('spa.gallery.hammam_desc', 'Восточные традиции'),
      category: 'sauna'
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800&q=80',
      title: t('spa.gallery.nails_title', 'Маникюр и педикюр'),
      description: t('spa.gallery.nails_desc', 'Уход за ногтями'),
      category: 'beauty'
    },
    {
      id: 10,
      src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80',
      title: t('spa.gallery.meditation_title', 'Зона медитации'),
      description: t('spa.gallery.meditation_desc', 'Тишина и покой'),
      category: 'relaxation'
    },
    {
      id: 11,
      src: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
      title: t('spa.gallery.reception_title', 'Ресепшн'),
      description: t('spa.gallery.reception_desc', 'Встречаем с улыбкой'),
      category: 'interior'
    },
    {
      id: 12,
      src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
      title: t('spa.gallery.aromatherapy_title', 'Ароматерапия'),
      description: t('spa.gallery.aromatherapy_desc', 'Натуральные масла'),
      category: 'procedures'
    }
  ];
  
  const categories = [
    { id: 'all', name: t('spa.gallery.filter_all', 'Все') },
    { id: 'interior', name: t('spa.gallery.filter_interior', 'Интерьер') },
    { id: 'procedures', name: t('spa.gallery.filter_procedures', 'Процедуры') },
    { id: 'sauna', name: t('spa.gallery.filter_sauna', 'Сауны') },
    { id: 'beauty', name: t('spa.gallery.filter_beauty', 'Красота') },
    { id: 'relaxation', name: t('spa.gallery.filter_relaxation', 'Релакс') }
  ];
  
  // Фильтрация изображений
  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);
  
  const displayedImages = filteredImages.slice(0, visibleImages);
  
  // Обработчики
  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };
  
  const navigateImage = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentImageIndex + 1) % displayedImages.length
      : currentImageIndex === 0 ? displayedImages.length - 1 : currentImageIndex - 1;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(displayedImages[newIndex]);
  };
  
  // Обработка клавиатуры
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      
      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          navigateImage('prev');
          break;
        case 'ArrowRight':
          navigateImage('next');
          break;
        default:
          break;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);
  
  // Обработка свайпов на мобильных
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  const minSwipeDistance = 50;
  
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe && selectedImage) {
      navigateImage('next');
    }
    if (isRightSwipe && selectedImage) {
      navigateImage('prev');
    }
  };
  
  return (
    <GallerySection>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('spa.gallery.title', 'Галерея')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('spa.gallery.subtitle', 'Погрузитесь в атмосферу роскоши и релаксации')}
          </SectionSubtitle>
        </SectionHeader>
        
        <CategoryFilters>
          {categories.map((category, index) => (
            <FilterButton
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setVisibleImages(12);
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </FilterButton>
          ))}
        </CategoryFilters>
        
        <ViewToggle>
          <ViewButton 
            active={viewMode === 'grid'} 
            onClick={() => setViewMode('grid')}
            title={t('spa.gallery.view_grid', 'Сетка')}
          >
            <Squares2X2Icon />
          </ViewButton>
          <ViewButton 
            active={viewMode === 'masonry'} 
            onClick={() => setViewMode('masonry')}
            title={t('spa.gallery.view_masonry', 'Мозаика')}
          >
            <ViewColumnsIcon />
          </ViewButton>
        </ViewToggle>
        
        <GalleryGrid view={viewMode}>
          <AnimatePresence mode="popLayout">
            {displayedImages.map((image, index) => (
              <GalleryItem
                key={image.id}
                view={viewMode}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => openLightbox(image, index)}
                whileHover={{ scale: 1.02 }}
              >
                <GalleryImage 
                  src={image.src} 
                  alt={image.title}
                  loading="lazy"
                />
                <ImageOverlay className="overlay">
                  <ImageTitle>{image.title}</ImageTitle>
                  <ImageDescription>{image.description}</ImageDescription>
                </ImageOverlay>
              </GalleryItem>
            ))}
          </AnimatePresence>
        </GalleryGrid>
        
        {visibleImages < filteredImages.length && (
          <LoadMoreButton
            onClick={() => setVisibleImages(prev => prev + 12)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('spa.gallery.load_more', `Показать ещё (${filteredImages.length - visibleImages})`)}
          </LoadMoreButton>
        )}
      </SectionContainer>
      
      {/* Лайтбокс */}
      <AnimatePresence>
        {selectedImage && (
          <Lightbox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <LightboxContent onClick={(e) => e.stopPropagation()}>
              <LightboxControls>
                <LightboxButton onClick={closeLightbox}>
                  <XMarkIcon />
                </LightboxButton>
              </LightboxControls>
              
              <NavigationButton 
                direction="prev" 
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeftIcon />
              </NavigationButton>
              
              <LightboxImage
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = Math.abs(offset.x) * velocity.x;
                  if (swipe < -10000) {
                    navigateImage('next');
                  } else if (swipe > 10000) {
                    navigateImage('prev');
                  }
                }}
              />
              
              <NavigationButton 
                direction="next" 
                onClick={() => navigateImage('next')}
              >
                <ChevronRightIcon />
              </NavigationButton>
              
              <ImageInfo>
                <ImageCounter>
                  {currentImageIndex + 1} / {displayedImages.length}
                </ImageCounter>
                <ImageTitle>{selectedImage.title}</ImageTitle>
                <ImageDescription>{selectedImage.description}</ImageDescription>
              </ImageInfo>
            </LightboxContent>
          </Lightbox>
        )}
      </AnimatePresence>
    </GallerySection>
  );
};

export default SpaGallerySection;