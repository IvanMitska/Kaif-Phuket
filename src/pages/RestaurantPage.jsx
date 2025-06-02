import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon, StarIcon, ArrowRightIcon, ClockIcon, ShoppingBagIcon, PhoneIcon } from '@heroicons/react/24/solid';
import { ArrowRightIcon as ArrowRightOutline } from '@heroicons/react/24/outline';

// Импортируем функцию получения данных ресторана
import { getRestaurantData } from '../components/Restaurant/data/restaurantData';

// Импортируем стили для скрытия полосы прокрутки
import '../styles/hide-scrollbar.css';

// Стилизованные компоненты для страницы ресторана
const RestaurantContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.primary};
  overflow-x: hidden;
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
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
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
const MenuCategoriesTabs = ({ activeCategory, setActiveCategory }) => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);
  
  // Все доступные категории меню
  const menuCategories = [
    { id: 'all', name: t('restaurant.menu.categories.all', 'Все блюда') },
    { id: 'breakfast', name: t('restaurant.menu.categories.breakfast', 'Breakfast') },
    { id: 'lunch', name: t('restaurant.menu.categories.lunch', 'Обеды') },
    { id: 'dinner', name: t('restaurant.menu.categories.dinner', 'Ужины') },
    { id: 'soups', name: t('restaurant.menu.categories.soups', 'Супы') },
    { id: 'salads', name: t('restaurant.menu.categories.salads', 'Салаты') },
    { id: 'grill', name: t('restaurant.menu.categories.grill', 'Гриль') },
    { id: 'garnish', name: t('restaurant.menu.categories.garnish', 'Гарниры') },
    { id: 'sauces', name: t('restaurant.menu.categories.sauces', 'Соусы') },
    { id: 'bread', name: t('restaurant.menu.categories.bread', 'Хлеб') },
    { id: 'burgers', name: t('restaurant.menu.categories.burgers', 'Бургеры') },
    { id: 'shawarma', name: t('restaurant.menu.categories.shawarma', 'Шаурма') },
    { id: 'desserts', name: t('restaurant.menu.categories.desserts', 'Десерты') },
    { id: 'tea', name: t('restaurant.menu.categories.tea', 'Чай') },
    { id: 'coffee', name: t('restaurant.menu.categories.coffee', 'Кофе') },
    { id: 'smoothies', name: t('restaurant.menu.categories.smoothies', 'Смузи') },
    { id: 'lemonades', name: t('restaurant.menu.categories.lemonades', 'Лимонады') },
    { id: 'juices', name: t('restaurant.menu.categories.juices', 'Соки') },
    { id: 'cocktails', name: t('restaurant.menu.categories.cocktails', 'Коктейли') },
    { id: 'wine', name: t('restaurant.menu.categories.wine', 'Вино') },
    { id: 'beer', name: t('restaurant.menu.categories.beer', 'Пиво') },
    { id: 'strong_alcohol', name: t('restaurant.menu.categories.strong_alcohol', 'Крепкий алкоголь') },
  ];

  // Скролл к активной категории
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-category="${activeCategory}"]`);
      if (activeButton) {
        const container = scrollContainerRef.current;
        const scrollLeft = activeButton.offsetLeft - (container.clientWidth / 2) + (activeButton.clientWidth / 2);
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeCategory]);

  return (
    <div className="relative mb-8">
      {/* Стилизованный градиент слева для индикации скролла */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      
      {/* Контейнер с горизонтальным скроллом */}
      <motion.div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 hide-scrollbar"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{
          scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none' // IE/Edge
        }}
      >
        <div className="flex space-x-3 px-2">
          {menuCategories.map((category) => (
            <motion.button 
              key={category.id}
              data-category={category.id}
              className={`px-5 py-2.5 rounded-full text-sm whitespace-nowrap transition-all duration-300 ${activeCategory === category.id 
                ? 'bg-primary text-white font-medium shadow-md' 
                : 'bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100'}`}
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ y: 0, scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
      
      {/* Стилизованный градиент справа для индикации скролла */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
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
      <section className="py-24 px-4 md:px-8 relative overflow-hidden" style={{ position: 'relative' }}>
        {/* Background image with blur effect */}
        <div className="absolute inset-0 z-0" style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px) brightness(0.7)',
          transform: 'scale(1.1)', // Немного увеличиваем изображение, чтобы избежать прозрачных краев при размытии
        }}></div>
        {/* Additional dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
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
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary opacity-5"
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[70vh] relative z-10">
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
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 text-lg border-2 border-white"
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
              <div className="w-[400px] h-[400px] mx-auto rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Elegant dish" 
                  className="w-full h-full object-cover"
                />
              </div>
              
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
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-primary" />
                  <p className="font-medium">30-45 {t('restaurant.hero.min', 'min')}</p>
                </div>
                <p className="text-sm text-gray-500">{t('restaurant.hero.delivery', 'Delivery Time')}</p>
              </motion.div>
              
              <motion.div
                className="absolute bottom-10 right-10 bg-primary text-white py-1.5 px-4 rounded-full text-sm font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {t('restaurant.hero.featured', 'Featured')}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Секция меню */}
      <section ref={menuSectionRef} className="py-20 px-4 md:px-8 max-w-7xl mx-auto" id="menu-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-opacity-10 bg-primary text-primary text-sm font-medium mb-4">
            {t('restaurant.menu.tag', 'Изысканные блюда')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
            {t('restaurant.menu.title', 'Наше меню')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('restaurant.menu.description', 'Откройте для себя разнообразие вкусов в нашем меню, созданном талантливыми шеф-поварами')}
          </p>
        </motion.div>

        <div className="mb-16">
          {/* Menu Categories */}
          <MenuCategoriesTabs activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          
          {/* Sort Controls - Сортировка */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 mb-6">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <span className="inline-flex items-center justify-center w-8 h-8 bg-primary bg-opacity-10 rounded-full text-primary font-semibold text-sm">
                {menuItems.filter(item => activeCategory === 'all' || item.category === activeCategory).length}
              </span>
              <p className="text-gray-600 font-medium">
                {t('restaurant.menu.items_available', 'доступных позиций')}
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-gray-600 font-medium text-sm md:text-base">                
                {t('restaurant.menu.sort_by', 'Сортировать:')}              
              </span>
              <div className="relative inline-block">
                <select 
                  className="appearance-none bg-transparent border-b border-gray-300 py-1 pl-1 pr-8 text-sm md:text-base focus:outline-none focus:border-primary transition-all duration-300"
                  value={sortType}
                  onChange={(e) => setSortType(e.target.value)}
                >
                  <option value="default">{t('restaurant.menu.sort.default', 'По умолчанию')}</option>
                  <option value="popular">{t('restaurant.menu.sort.popular', 'Популярные')}</option>
                  <option value="price_low">{t('restaurant.menu.sort.price_low', 'Сначала дешёвые')}</option>
                  <option value="price_high">{t('restaurant.menu.sort.price_high', 'Сначала дорогие')}</option>
                  <option value="name">{t('restaurant.menu.sort.name', 'По алфавиту')}</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                  <svg className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {/* Отображаем ограниченное количество блюд по категории */}
            {
              sortItems(menuItems.filter(item => activeCategory === 'all' || item.category === activeCategory))
                .slice(0, visibleItems)
                .map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="bg-white rounded-2xl overflow-hidden shadow-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index % 6) }}
                  whileHover={{ y: -10 }}
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisibleItems(prev => prev + 6)}
              >
                <span className="text-base font-medium">{t('restaurant.menu.show_more', 'Показать еще')}</span>
                <ChevronRightIcon className="w-5 h-5" />
              </motion.button>
              <p className="mt-2 text-gray-500 text-sm">
                {t('restaurant.menu.showing_count', 'Показано {{visible}} из {{total}}', {
                  visible: Math.min(visibleItems, menuItems.filter(item => activeCategory === 'all' || item.category === activeCategory).length),
                  total: menuItems.filter(item => activeCategory === 'all' || item.category === activeCategory).length
                })}
              </p>
            </div>
          )}

          {/* View Full Menu Button */}
          <div className="text-center mt-12">
            <motion.button
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full shadow-lg border-2 border-white hover:bg-opacity-90 transition-all duration-300 relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Плавный скролл к секции меню при нажатии на кнопку
                menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="text-base font-bold">{t('restaurant.menu.view_all', 'Открыть полное меню')}</span>
              <ArrowRightIcon className="w-5 h-5" />
            </motion.button>
            <p className="mt-2 text-gray-600 font-medium">{t('restaurant.menu.navigation_hint', 'Нажмите, чтобы перейти к полному меню ресторана')}</p>
          </div>
        </div>
      </section>

      {/* Секция бронирования */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
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
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 text-lg"
              >
                {t('restaurant.booking.call_now', 'Позвонить сейчас')}
                <PhoneIcon className="w-5 h-5" />
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
              
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <div className="h-6 w-px bg-gray-300"></div>
                  <p className="font-medium">4.9 (2.5k+)</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </RestaurantContainer>
  );
};

export default RestaurantPage;
