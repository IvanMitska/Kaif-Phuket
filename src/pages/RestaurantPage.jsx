import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon, StarIcon, ArrowRightIcon, ClockIcon, ShoppingBagIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon as ArrowRightOutline } from '@heroicons/react/24/outline';

// Импортируем функцию получения данных ресторана
import { getRestaurantData } from '../components/Restaurant/data/restaurantData';

// Стили для скрытия полосы прокрутки добавлены в компонент ниже

// Стилизованные компоненты для страницы ресторана
const RestaurantContainer = styled(motion.div)`
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.primary};
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  
  /* Убираем все возможные границы */
  * {
    border: none !important;
    outline: none !important;
  }
  
  button {
    border: none !important;
    outline: none !important;
  }
`;

// Компоненты для секции меню
const MenuTabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const MenuTab = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${props => props.active ? props.theme?.colors?.gradients?.logo || 'linear-gradient(135deg, rgba(255, 99, 71, 0.07) 0%, rgba(255, 99, 71, 0.10) 5%, rgba(206, 128, 114, 0.12) 12%, rgba(157, 157, 157, 0.15) 20%, rgba(108, 186, 200, 0.18) 28%, rgba(0, 180, 216, 0.20) 36%, rgba(71, 168, 203, 0.18) 44%, rgba(142, 157, 188, 0.15) 52%, rgba(214, 145, 173, 0.12) 60%, rgba(255, 105, 180, 0.10) 68%, rgba(219, 140, 149, 0.12) 76%, rgba(183, 175, 118, 0.15) 84%, rgba(147, 210, 95, 0.10) 92%, rgba(92, 184, 72, 0.07) 100%)' : '#E0E8E1'};
  color: ${props => props.active ? 'white' : '#333333'};
  font-weight: ${props => props.active ? '600' : '500'};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  font-family: 'Inter', sans-serif;
  
  &:hover {
    background-color: ${props => props.active ? '#D29B84' : '#d0d8d1'};
    transform: translateY(-2px);
  }
  
  &:focus {
    outline: none;
  }
`;

const MenuGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const MenuCard = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
`;

const MenuCardImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  background-size: cover;
  background-position: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${MenuCard}:hover &::after {
    opacity: 1;
  }
`;

const MenuCardContent = styled.div`
  padding: 1.5rem;
`;

const MenuCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
  color: #333333;
`;

const MenuCardDescription = styled.p`
  font-size: 0.9rem;
  color: #666666;
  margin-bottom: 1rem;
  line-height: 1.5;
`;

const MenuCardPrice = styled.div`
  font-weight: 600;
  color: #D29B84;
  font-size: 1.1rem;
`;

const MenuCardTags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
`;

const MenuCardTag = styled.span`
  font-size: 0.7rem;
  padding: 0.25rem 0.5rem;
  background-color: #f0f0f0;
  border-radius: 20px;
  color: #666666;
`;

// Модальное окно для детального просмотра блюда
const DishModal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  overflow-y: auto;
`;

const DishModalContent = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  width: 100%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const DishModalImage = styled.div`
  height: 300px;
  background-size: cover;
  background-position: center;
  
  @media (min-width: 768px) {
    height: 100%;
  }
`;

const DishModalInfo = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const ModalSubtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.8;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 2.5rem;
  max-width: 530px;
  font-weight: 300;
`;

const DishModalTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  color: #333333;
`;

const DishModalDescription = styled.p`
  font-size: 1rem;
  color: #666666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const DishModalPrice = styled.div`
  font-weight: 600;
  color: #D29B84;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const DishModalSection = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #333333;
  }
  
  ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  li {
    padding: 0.25rem 0;
    font-size: 0.9rem;
    color: #666666;
    display: flex;
    align-items: center;
    
    &:before {
      content: '•';
      color: #D29B84;
      font-weight: bold;
      margin-right: 0.5rem;
    }
  }
`;

const DishModalCloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
`;

// Компонент слайдера для верхней части страницы
const HeroSection = styled.section`
  height: 100vh;
  min-height: 700px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.background};
  padding: 0;
  margin: 0;
`;

const HeroContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  position: relative;
  z-index: 5;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const Slide = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const SlideContent = styled(motion.div)`
  position: relative;
  z-index: 10;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  color: white;
`;

const HeroButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  box-shadow: 0 10px 25px rgba(210, 155, 132, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.accent || '#B08D57'};
    transform: translateY(-3px);
  }
  
  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

// Основной компонент страницы ресторана
// Компонент с вкладками категорий меню
// Кастомный компонент для сортировки без конфликтов
const SortDropdown = ({ sortType, setSortType, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(null);

  // Определяем мобильное устройство
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const sortOptions = [
    { value: 'default', label: t('restaurant.menu.sort.default', 'По умолчанию') },
    { value: 'popular', label: t('restaurant.menu.sort.popular', 'Популярные') },
    { value: 'price_low', label: t('restaurant.menu.sort.price_low', 'Сначала дешёвые') },
    { value: 'price_high', label: t('restaurant.menu.sort.price_high', 'Сначала дорогие') },
    { value: 'name', label: t('restaurant.menu.sort.name', 'По алфавиту') }
  ];

  const currentOption = sortOptions.find(option => option.value === sortType);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`relative ${isMobile ? 'w-full' : 'w-auto'}`} ref={dropdownRef} style={{ zIndex: 9999 }}>
      <motion.button
        className={isMobile ? 'sort-dropdown-mobile' : ''}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'space-between',
          gap: '8px',
          textAlign: 'center',
          lineHeight: '1',
          background: 'rgba(255, 255, 255, 0.95)',
          border: 'none',
          borderRadius: '50px',
          padding: isMobile ? '10px 16px' : '8px 14px',
          fontSize: isMobile ? '14px' : '13px',
          fontWeight: '500',
          color: '#5A6B5D',
          cursor: 'pointer',
          minWidth: isMobile ? 'auto' : '160px',
          width: isMobile ? '100%' : 'auto',
          maxWidth: isMobile ? '100%' : '220px',
          transition: 'all 0.3s ease',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          minHeight: isMobile ? '42px' : '38px',
          zIndex: 9999,
          position: 'relative'
        }}
        whileHover={{ 
          borderColor: '#90B3A7',
          boxShadow: '0 4px 12px rgba(144, 179, 167, 0.15)',
          scale: 1.02
        }}
        whileTap={{ scale: 0.98 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span style={{ 
          overflow: 'hidden', 
          textOverflow: 'ellipsis', 
          whiteSpace: 'nowrap',
          flex: 1,
          textAlign: isMobile ? 'center' : 'left',
          display: 'flex',
          alignItems: 'center',
          justifyContent: isMobile ? 'center' : 'flex-start',
          lineHeight: '1'
        }}>
          {currentOption?.label}
        </span>
        <motion.svg
          width={isMobile ? "16" : "14"}
          height={isMobile ? "16" : "14"}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#90B3A7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ flexShrink: 0 }}
        >
          <polyline points="6,9 12,15 18,9"></polyline>
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sort-dropdown-list"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              right: '0',
              marginTop: isMobile ? '8px' : '6px',
              background: 'rgba(255, 255, 255, 0.98)',
              border: 'none',
              borderRadius: isMobile ? '20px' : '16px',
              boxShadow: isMobile 
                ? '0 15px 40px rgba(0, 0, 0, 0.15), 0 6px 20px rgba(144, 179, 167, 0.12)'
                : '0 12px 35px rgba(0, 0, 0, 0.12), 0 4px 15px rgba(144, 179, 167, 0.1)',
              zIndex: 999999,
              overflow: 'hidden',
              minWidth: isMobile ? 'auto' : '200px',
              width: '100%',
              maxWidth: isMobile ? '100%' : '280px',
              backdropFilter: 'blur(15px)',
              WebkitBackdropFilter: 'blur(15px)'
            }}
          >
            {sortOptions.map((option, index) => (
              <motion.button
                key={option.value}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                style={{
                  width: '100%',
                  padding: isMobile ? '12px 16px' : '10px 14px',
                  fontSize: isMobile ? '14px' : '13px',
                  fontWeight: sortType === option.value ? '600' : '500',
                  textAlign: isMobile ? 'center' : 'left',
                  background: sortType === option.value ? 'rgba(144, 179, 167, 0.12)' : 'transparent',
                  color: sortType === option.value ? '#90B3A7' : '#5A6B5D',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isMobile ? 'center' : 'space-between',
                  minHeight: isMobile ? '44px' : 'auto',
                  lineHeight: '1.2'
                }}
                whileHover={{
                  background: sortType === option.value ? 'rgba(144, 179, 167, 0.18)' : 'rgba(144, 179, 167, 0.08)',
                  x: 4
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSortType(option.value);
                  setIsOpen(false);
                }}
              >
                <span style={{ 
                  flex: isMobile ? 'none' : '1',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: isMobile ? 'center' : 'flex-start',
                  lineHeight: '1.2'
                }}>{option.label}</span>
                {sortType === option.value && !isMobile && (
                  <motion.svg
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#90B3A7"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20,6 9,17 4,12"></polyline>
                  </motion.svg>
                )}
                {sortType === option.value && isMobile && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{
                      position: 'absolute',
                      right: '16px',
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: '#90B3A7'
                    }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MenuCategoriesTabs = ({ activeCategory, setActiveCategory }) => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);
  
  // Компактная структура основных категорий
  const mainCategories = [
    { id: 'all', name: t('restaurant.menu.categories.all', 'Все блюда'), priority: 1 },
    { id: 'breakfast', name: t('restaurant.menu.categories.breakfast', 'Завтраки'), priority: 2 },
    { id: 'soup', name: t('restaurant.menu.categories.soup', 'Супы'), priority: 3 },
    { id: 'salad', name: t('restaurant.menu.categories.salad', 'Салаты'), priority: 4 },
    { id: 'grill', name: t('restaurant.menu.categories.grill', 'Гриль'), priority: 5 },
    { id: 'burger', name: t('restaurant.menu.categories.burger', 'Бургеры'), priority: 6 },
    { id: 'dessert', name: t('restaurant.menu.categories.dessert', 'Десерты'), priority: 7 },
    { id: 'tea', name: t('restaurant.menu.categories.tea', 'Чай'), priority: 8 },
    { id: 'coffee', name: t('restaurant.menu.categories.coffee', 'Кофе'), priority: 9 },
    { id: 'cocktail', name: t('restaurant.menu.categories.cocktail', 'Коктейли'), priority: 10 },
    { id: 'wine', name: t('restaurant.menu.categories.wine', 'Вино'), priority: 11 }
  ];

  // Автоскролл к активной категории
  useEffect(() => {
    if (scrollContainerRef.current && activeCategory) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-category="${activeCategory}"]`);
      if (activeButton) {
        const container = scrollContainerRef.current;
        const scrollLeft = activeButton.offsetLeft - (container.clientWidth / 2) + (activeButton.clientWidth / 2);
        container.scrollTo({ left: Math.max(0, scrollLeft), behavior: 'smooth' });
      }
    }
  }, [activeCategory]);

  return (
    <div className="mb-8">
      {/* Контейнер с горизонтальным скроллом */}
      <motion.div 
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Градиент слева */}
        <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white via-white to-transparent z-10 pointer-events-none"></div>
        
        {/* Скроллящиеся табы */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto pb-2"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex space-x-3 px-6">
            {mainCategories.map((category) => (
              <motion.button 
                key={category.id}
                data-category={category.id}
                style={{
                  padding: '12px 20px',
                  borderRadius: '25px',
                  fontSize: '14px',
                  fontWeight: activeCategory === category.id ? '600' : '500',
                  letterSpacing: '0.2px',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.3s ease-out',
                  background: activeCategory === category.id 
                    ? 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' 
                    : 'rgba(255, 255, 255, 0.8)',
                  color: activeCategory === category.id ? 'white' : '#5A6B5D',
                  border: 'none',
                  boxShadow: activeCategory === category.id 
                    ? '0 4px 15px rgba(144, 179, 167, 0.3)' 
                    : '0 2px 8px rgba(0, 0, 0, 0.05)',
                  cursor: 'pointer'
                }}
                whileHover={{ 
                  y: -2, 
                  scale: 1.02,
                  boxShadow: activeCategory === category.id 
                    ? '0 6px 20px rgba(144, 179, 167, 0.4)' 
                    : '0 4px 12px rgba(144, 179, 167, 0.15)'
                }}
                whileTap={{ y: 0, scale: 0.98 }}
                onClick={() => setActiveCategory(category.id)}
                onMouseEnter={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.background = 'rgba(144, 179, 167, 0.1)';
                    e.target.style.color = '#90B3A7';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category.id) {
                    e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.color = '#5A6B5D';
                  }
                }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
        
        {/* Градиент справа */}
        <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white via-white to-transparent z-10 pointer-events-none"></div>
      </motion.div>
    </div>
  );
};

const RestaurantPage = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(6); // Количество видимых элементов
  const [sortType, setSortType] = useState('default'); // Тип сортировки: default, popular, price_low, price_high, name
  const slideInterval = useRef(null);
  const menuSectionRef = useRef(null);
  
  // Получаем данные из restaurantData.js
  const { menuItems, tagStyles } = getRestaurantData(t);
  
  // Сбрасываем количество видимых элементов при смене категории
  useEffect(() => {
    setVisibleItems(6);
  }, [activeCategory]);
  
  // Функция сортировки элементов меню
  const sortItems = (items) => {
    switch (sortType) {
      case 'popular':
        return [...items].sort((a, b) => b.popular - a.popular); // сначала популярные
      case 'price_low':
        return [...items].sort((a, b) => parseFloat(a.price.replace(/[^\d.]/g, '')) - parseFloat(b.price.replace(/[^\d.]/g, ''))); // от дешевых к дорогим
      case 'price_high':
        return [...items].sort((a, b) => parseFloat(b.price.replace(/[^\d.]/g, '')) - parseFloat(a.price.replace(/[^\d.]/g, ''))); // от дорогих к дешевым
      case 'name':
        return [...items].sort((a, b) => a.name.localeCompare(b.name)); // по алфавиту
      default:
        return items; // без сортировки
    }
  };

  // Данные для слайдера
  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: t('restaurant.slider.slide1.title', 'Изысканная кухня'),
      description: t('restaurant.slider.slide1.description', 'Откройте для себя уникальные вкусы пяти разных кухонь мира в нашем ресторане')
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: t('restaurant.slider.slide2.title', 'Атмосфера комфорта'),
      description: t('restaurant.slider.slide2.description', 'Наслаждайтесь едой в уютной атмосфере с видом на тропический сад')
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      title: t('restaurant.slider.slide3.title', 'Свежие ингредиенты'),
      description: t('restaurant.slider.slide3.description', 'Мы используем только свежие и качественные ингредиенты для приготовления наших блюд')
    }
  ];
  
  // Автоматическая смена слайдов
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5000);
    
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [slides.length]);
  
  // Функции для управления слайдером - Removed since we're not using a slider
  
  return (
    <RestaurantContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Modern Hero Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
        {/* Background image */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url('https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(2px) brightness(0.7)',
            transform: 'scale(1.01)'
          }}
        ></div>
        
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5))'
        }}></div>

        <div className="relative z-10 h-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-24 px-4 md:px-8">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-black bg-opacity-40 p-8 rounded-xl backdrop-blur-sm"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-4 backdrop-blur-sm">
              {t('restaurant.hero.label', 'Our Restaurant')}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6 leading-tight relative text-white">
              {t('restaurant.hero.title', 'Exquisite Cuisine')} <span className="text-primary">{t('restaurant.hero.highlight', 'with a Modern Twist')}</span>
              <div className="w-24 h-1.5 bg-primary mt-6 rounded-full"></div>
            </h1>
            
            <p className="text-lg text-white mb-8 max-w-lg">
              {t('restaurant.hero.subtitle', 'Our chefs create unique dishes by combining traditional recipes with new culinary techniques.')}
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 text-lg border-none"
              onClick={() => {
                // Плавный скролл к секции меню при нажатии на кнопку
                menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-xl">{t('restaurant.hero.button', 'Наше меню')}</span>
              <ArrowRightIcon className="w-6 h-6" />
            </motion.button>
          </motion.div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative">
              <div className="w-[400px] h-[400px] mx-auto rounded-full overflow-hidden border-none shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Elegant dish" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Rating badge */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-2">
                  <StarIcon className="w-5 h-5 text-primary" />
                  <p className="font-medium">4.9 (1.2k+)</p>
                </div>
                <p className="text-sm text-gray-500">{t('restaurant.hero.reviews', 'Excellent Reviews')}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Секция меню */}
      <section ref={menuSectionRef} className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white" id="menu-section" style={{
        backgroundColor: 'white',
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.span 
            style={{
              display: 'inline-block',
              padding: '8px 20px',
              borderRadius: '50px',
              background: 'linear-gradient(135deg, rgba(144, 179, 167, 0.1), rgba(168, 197, 184, 0.15))',
              color: '#90B3A7',
              fontSize: '14px',
              fontWeight: '600',
              letterSpacing: '0.5px',
              marginBottom: '20px',
              border: 'none'
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('restaurant.menu.tag', 'Изысканные блюда')}
          </motion.span>
          <motion.h2 
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              fontFamily: 'Playfair Display, serif',
              marginBottom: '24px',
              background: 'linear-gradient(135deg, #2C3E2D 0%, #90B3A7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('restaurant.menu.title', 'Наше меню')}
          </motion.h2>
          <motion.p 
            style={{
              fontSize: '18px',
              color: '#5A6B5D',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: '1.6',
              fontWeight: '400'
            }}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('restaurant.menu.description', 'Откройте для себя разнообразие вкусов в нашем меню, созданном талантливыми шеф-поварами')}
          </motion.p>
        </motion.div>

        <div className="mb-16">
          {/* Menu Categories */}
          <MenuCategoriesTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          
          {/* Sort Controls - Сортировка */}
          <motion.div 
            className="flex justify-center md:justify-end items-center mt-12 mb-8 px-4 md:px-0 sort-container"
            style={{ position: 'relative', zIndex: 10000 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span style={{
                color: '#5A6B5D',
                fontWeight: '500',
                fontSize: '15px',
                textAlign: 'center'
              }}>
                {t('restaurant.menu.sort_by', 'Сортировать:')}
              </span>
              
              <SortDropdown 
                sortType={sortType}
                setSortType={setSortType}
                t={t}
              />
            </motion.div>
          </motion.div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Отображаем ограниченное количество блюд по категории */}
            {
              sortItems(menuItems.filter(item => activeCategory === 'all' || item.category === activeCategory))
                .slice(0, visibleItems)
                .map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="bg-white rounded-2xl overflow-hidden menu-item-card"
                  style={{ 
                    position: 'relative', 
                    zIndex: 1,
                    border: '1px solid #e5e5e5'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
                >
                  <div className="h-64 overflow-hidden relative">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {item.popular && (
                      <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
                        {t('restaurant.menu.popular', 'Popular')}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map(tag => {
                        // Используем стили тегов из restaurantData.js
                        return (
                          <span 
                            key={tag} 
                            className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${tagStyles[tag] || 'bg-gray-50 text-gray-600'}`}
                          >
                            {t(`restaurant.menu.tags.${tag}`, tag.charAt(0).toUpperCase() + tag.slice(1))}
                          </span>
                        );
                      })}
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-playfair">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-primary text-xl font-bold">{item.price}</span>
                      <motion.button 
                        className="flex items-center justify-center gap-2 px-3 py-2 bg-primary rounded-full text-white transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        title={t('restaurant.menu.add_to_order', 'Добавить в заказ')}
                      >
                        <ShoppingBagIcon className="w-4 h-4" />
                        <span className="text-sm font-medium">{t('restaurant.menu.add', 'Добавить')}</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))
            }
          </div>

          {/* Show More Button - если есть дополнительные элементы для отображения */}
          {menuItems.filter(item => activeCategory === 'all' || item.category === activeCategory).length > visibleItems && (
            <div className="text-center mt-8">
              <motion.button
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '12px 30px',
                  fontSize: '14px',
                  fontWeight: '500',
                  letterSpacing: '0.5px',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  transition: 'all 0.3s ease-out',
                  position: 'relative',
                  overflow: 'hidden',
                  minWidth: '180px',
                  textAlign: 'center',
                  background: 'transparent',
                  color: '#90B3A7',
                  border: '2px solid #90B3A7',
                  boxShadow: 'none',
                  willChange: 'transform, box-shadow',
                  transform: 'translateZ(0)',
                  cursor: 'pointer'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px) translateZ(0)';
                  e.target.style.background = '#90B3A7';
                  e.target.style.color = 'white';
                  e.target.style.boxShadow = '0 4px 15px rgba(144, 179, 167, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateZ(0)';
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#90B3A7';
                  e.target.style.boxShadow = 'none';
                }}
                onClick={() => setVisibleItems(prev => prev + 6)}
              >
                {t('restaurant.menu.show_more', 'Показать еще')}
                <ChevronRightIcon style={{ width: '16px', height: '16px', transition: 'transform 0.2s ease' }} />
              </motion.button>
            </div>
          )}

          {/* View Full Menu Button */}
          <div className="text-center mt-12">
            <motion.button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '16px 35px',
                fontSize: '14px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '50px',
                transition: 'all 0.3s ease-out',
                position: 'relative',
                overflow: 'hidden',
                minWidth: '250px',
                textAlign: 'center',
                background: 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)',
                color: 'white',
                border: '2px solid transparent',
                boxShadow: '0 6px 20px rgba(144, 179, 167, 0.3)',
                willChange: 'transform, box-shadow',
                transform: 'translateZ(0)',
                cursor: 'pointer',
                zIndex: 10
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) translateZ(0)';
                e.target.style.boxShadow = '0 8px 25px rgba(144, 179, 167, 0.5)';
                e.target.style.background = 'linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateZ(0)';
                e.target.style.boxShadow = '0 6px 20px rgba(144, 179, 167, 0.3)';
                e.target.style.background = 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)';
              }}
              onClick={() => {
                // Плавный скролл к секции меню при нажатии на кнопку
                menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('restaurant.menu.view_all', 'Открыть полное меню')}
              <ArrowRightIcon style={{ width: '16px', height: '16px', transition: 'transform 0.2s ease' }} />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Секция бронирования */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-primary opacity-5"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-primary opacity-5"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Booking info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-opacity-10 bg-primary text-primary text-sm font-medium mb-4">
                {t('restaurant.booking.label', 'Бронирование')}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
                {t('restaurant.booking.title', 'Забронируйте стол в нашем ресторане')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('restaurant.booking.description', 'Заранее зарезервируйте столик для особого события или просто для гарантированного места в нашем ресторане.')}
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t('restaurant.booking.open_hours', 'Часы работы')}</p>
                    <p className="text-gray-500 text-sm">10:00 - 22:00</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{t('restaurant.booking.reservation', 'Резервация')}</p>
                    <p className="text-gray-500 text-sm">{t('common.phone_number')}</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="tel:+66624805877"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '14px 35px',
                  fontSize: '14px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '50px',
                  transition: 'all 0.3s ease-out',
                  position: 'relative',
                  overflow: 'hidden',
                  minWidth: '220px',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)',
                  color: 'white',
                  border: '2px solid transparent',
                  boxShadow: '0 6px 20px rgba(144, 179, 167, 0.3)',
                  willChange: 'transform, box-shadow',
                  transform: 'translateZ(0)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px) translateZ(0)';
                  e.target.style.boxShadow = '0 8px 25px rgba(144, 179, 167, 0.5)';
                  e.target.style.background = 'linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateZ(0)';
                  e.target.style.boxShadow = '0 6px 20px rgba(144, 179, 167, 0.3)';
                  e.target.style.background = 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)';
                }}
              >
                {t('restaurant.booking.call_now', 'Позвонить сейчас')}
                <PhoneIcon style={{ width: '16px', height: '16px', transition: 'transform 0.2s ease' }} />
              </a>
            </motion.div>
            
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Restaurant interior" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>
    </RestaurantContainer>
  );
};

export default RestaurantPage;
