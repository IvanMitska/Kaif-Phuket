import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { XMarkIcon } from '@heroicons/react/24/outline';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  padding: 8rem 0;
  background-color: #ffffff; /* Чистый белый фон */
  overflow: hidden;
`;

// Внутренний контейнер
const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// Заголовок секции
const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

// Маленький текст над заголовком
const Overline = styled(motion.div)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #FF6347; /* Оранжево-красный из логотипа */
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    margin-right: 1rem;
  }
  
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    margin-left: 1rem;
  }
`;

// Основной заголовок секции
const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #0F172A;
  margin-bottom: 1.5rem;
  line-height: 1.1;
`;

// Подзаголовок
const SectionSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1.125rem;
  color: #64748B;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.7;
`;

// Фильтр галереи
const FilterBar = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

// Кнопка фильтра
const FilterButton = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: 1px solid #E2E8F0;
  border-radius: 30px;
  background: transparent;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  color: #64748B;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #90B3A7;
    color: #90B3A7;
    transform: translateY(-2px);
  }
  
  ${({ active }) => active && `
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    box-shadow: 0 4px 12px rgba(144, 179, 167, 0.25);
  `}
`;

// Сетка галереи
const GalleryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

// Элемент галереи
const GalleryItem = styled(motion.div)`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.6) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
  
  &:hover .gallery-item-info {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Изображение в галерее
const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

// Информация о элементе галереи
const GalleryItemInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem;
  color: white;
  z-index: 1;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  
  h3 {
    font-family: ${({ theme }) => theme?.fonts?.heading};
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-family: ${({ theme }) => theme?.fonts?.primary};
    font-size: 0.875rem;
    opacity: 0.8;
  }
`;

// Модальное окно для просмотра изображения
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

// Контейнер модального окна
const ModalContainer = styled(motion.div)`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  overflow: hidden;
`;

// Изображение в модальном окне
const ModalImage = styled.img`
  max-width: 100%;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 4px;
`;

// Кнопка закрытия модального окна
const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

// Информация о изображении в модальном окне
const ModalInfo = styled.div`
  color: white;
  padding: 1rem 0;
  
  h3 {
    font-family: ${({ theme }) => theme?.fonts?.heading};
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-family: ${({ theme }) => theme?.fonts?.primary};
    font-size: 1rem;
    opacity: 0.8;
  }
`;

const GallerySection = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Данные галереи
  const galleryData = [
    {
      id: 1,
      image: '/images/gallery/spa-1.jpg',
      title: t('gallery.items.spa1.title', 'Тайский массаж'),
      category: 'spa',
      description: t('gallery.items.spa1.description', 'Традиционный тайский массаж в исполнении опытных мастеров')
    },
    {
      id: 2,
      image: '/images/gallery/fitness-1.jpg',
      title: t('gallery.items.fitness1.title', 'Персональные тренировки'),
      category: 'fitness',
      description: t('gallery.items.fitness1.description', 'Индивидуальные программы с профессиональными тренерами')
    },
    {
      id: 3,
      image: '/images/gallery/pool-1.jpg',
      title: t('gallery.items.pool1.title', 'Крытый бассейн'),
      category: 'pool',
      description: t('gallery.items.pool1.description', 'Роскошный крытый бассейн с контролируемой температурой')
    },
    {
      id: 4,
      image: '/images/gallery/relax-1.jpg',
      title: t('gallery.items.relax1.title', 'Зона релаксации'),
      category: 'relax',
      description: t('gallery.items.relax1.description', 'Специальная зона для расслабления и восстановления после процедур')
    },
    {
      id: 5,
      image: '/images/gallery/spa-2.jpg',
      title: t('gallery.items.spa2.title', 'Аромамассаж'),
      category: 'spa',
      description: t('gallery.items.spa2.description', 'Массаж с использованием натуральных эфирных масел')
    },
    {
      id: 6,
      image: '/images/gallery/fitness-2.jpg',
      title: t('gallery.items.fitness2.title', 'Групповые тренировки'),
      category: 'fitness',
      description: t('gallery.items.fitness2.description', 'Разнообразные групповые программы для любого уровня подготовки')
    },
    {
      id: 7,
      image: '/images/gallery/pool-2.jpg',
      title: t('gallery.items.pool2.title', 'Панорамный бассейн'),
      category: 'pool',
      description: t('gallery.items.pool2.description', 'Открытый бассейн с панорамным видом на море')
    },
    {
      id: 8,
      image: '/images/gallery/relax-2.jpg',
      title: t('gallery.items.relax2.title', 'Чайная церемония'),
      category: 'relax',
      description: t('gallery.items.relax2.description', 'Традиционная церемония с элитными сортами чая')
    }
  ];
  
  // Фильтры
  const filters = [
    { id: 'all', label: t('gallery.filters.all', 'Все') },
    { id: 'spa', label: t('gallery.filters.spa', 'СПА') },
    { id: 'fitness', label: t('gallery.filters.fitness', 'Фитнес') },
    { id: 'pool', label: t('gallery.filters.pool', 'Бассейны') },
    { id: 'relax', label: t('gallery.filters.relax', 'Релаксация') }
  ];
  
  // Фильтрация данных
  const filteredGallery = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === activeFilter);
  
  // Анимация для элементов галереи
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  // Открытие модального окна
  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };
  
  // Закрытие модального окна
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <SectionContainer id="gallery">
      <ContentWrapper>
        <SectionHeader>
          <Overline
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('gallery.overline', 'Галерея')}
          </Overline>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('gallery.title', 'Впечатления KAIF')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('gallery.subtitle', 'Погрузитесь в атмосферу KAIF через нашу галерею фотографий. Познакомьтесь с нашими услугами и возможностями комплекса.')}
          </SectionSubtitle>
        </SectionHeader>
        
        <FilterBar
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterBar>
        
        <GalleryGrid
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <AnimatePresence>
            {filteredGallery.map(item => (
              <GalleryItem
                key={item.id}
                variants={itemVariants}
                onClick={() => openModal(item)}
                layoutId={`gallery-item-${item.id}`}
              >
                <GalleryImage src={item.image} alt={item.title} />
                <GalleryItemInfo className="gallery-item-info">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </GalleryItemInfo>
              </GalleryItem>
            ))}
          </AnimatePresence>
        </GalleryGrid>
      </ContentWrapper>
      
      <AnimatePresence>
        {selectedImage && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <ModalContainer
              onClick={e => e.stopPropagation()}
              layoutId={`gallery-item-${selectedImage.id}`}
            >
              <ModalImage 
                src={selectedImage.image} 
                alt={selectedImage.title} 
              />
              <ModalInfo>
                <h3>{selectedImage.title}</h3>
                <p>{selectedImage.description}</p>
              </ModalInfo>
              <CloseButton 
                onClick={closeModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <XMarkIcon width={24} height={24} />
              </CloseButton>
            </ModalContainer>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
};

export default GallerySection;
