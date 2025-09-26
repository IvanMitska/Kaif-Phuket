import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBagIcon, ArrowRightIcon, DocumentArrowDownIcon, MagnifyingGlassIcon, AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/solid';
import {
  BeakerIcon,
  FireIcon,
  SparklesIcon,
  HeartIcon,
  BoltIcon,
  SunIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import { getRestaurantData } from '../data/restaurantData';
import OptimizedImage from '../../common/OptimizedImage';

// Функция для получения иконки напитка
const getDrinkIcon = (category) => {
  const iconMap = {
    tea: SunIcon, // Солнце для чая (природный, теплый напиток)
    coffee: FireIcon, // Огонь для кофе (горячий, энергия)
    coffee_signature: SparklesIcon, // Блестки для авторского кофе
    smoothie: HeartIcon, // Сердце для смузи (полезно, здорово)
    mocktail: BeakerIcon, // Колба для мокктейлов (миксы)
    juice: SunIcon, // Солнце для соков (свежесть, витамины)
    wine: StarIcon, // Звезда для вина (премиум)
    cocktail: BeakerIcon, // Колба для коктейлей (миксы)
    strong: BoltIcon, // Молния для крепкого алкоголя (сила)
    liqueur: StarIcon, // Звезда для ликеров (премиум)
    beer: HeartIcon, // Сердце для пива (дружелюбие)
    fitness: BoltIcon, // Молния для фитнес-напитков (энергия)
    water: SunIcon, // Солнце для воды (чистота)
    milk: HeartIcon, // Сердце для молока (забота)
    soft_drink: SparklesIcon // Блестки для безалкогольных напитков
  };
  return iconMap[category] || BeakerIcon;
};

// Функция для получения цвета напитка
const getDrinkColor = (category) => {
  const colorMap = {
    tea: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-800', icon: 'text-emerald-600' }, // Зеленый для чая
    coffee: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800', icon: 'text-orange-600' }, // Оранжевый для кофе (огонь)
    coffee_signature: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', icon: 'text-amber-600' }, // Янтарный для авторского кофе
    smoothie: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-800', icon: 'text-pink-600' }, // Розовый для смузи
    mocktail: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', icon: 'text-purple-600' }, // Фиолетовый для мокктейлов
    juice: { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', icon: 'text-yellow-600' }, // Желтый для соков (солнце)
    wine: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: 'text-red-600' }, // Красный для вина
    cocktail: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-800', icon: 'text-cyan-600' }, // Голубой для коктейлей
    strong: { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-800', icon: 'text-slate-600' }, // Серый для крепкого алкоголя
    liqueur: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-800', icon: 'text-indigo-600' }, // Индиго для ликеров
    beer: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', icon: 'text-amber-600' }, // Янтарный для пива
    fitness: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: 'text-blue-600' }, // Синий для фитнес-напитков
    water: { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-800', icon: 'text-sky-600' }, // Небесно-голубой для воды
    milk: { bg: 'bg-stone-50', border: 'border-stone-200', text: 'text-stone-800', icon: 'text-stone-600' }, // Каменный для молока
    soft_drink: { bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-800', icon: 'text-lime-600' } // Лайм для безалкогольных напитков
  };
  return colorMap[category] || { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-800', icon: 'text-gray-600' };
};

// Проверяем, является ли категория напитком
const isDrinkCategory = (category) => {
  return [
    'tea', 'coffee', 'coffee_signature', 'smoothie', 'mocktail', 'juice', 
    'wine', 'cocktail', 'strong', 'liqueur', 'beer', 'fitness', 
    'water', 'milk', 'soft_drink'
  ].includes(category);
};

// Функция для получения RGB цветов
const getDrinkColorRGB = (bgClass) => {
  const colorMap = {
    'bg-emerald-50': '236, 253, 245',
    'bg-orange-50': '255, 247, 237', 
    'bg-amber-50': '255, 251, 235',
    'bg-pink-50': '253, 242, 248',
    'bg-purple-50': '250, 245, 255',
    'bg-yellow-50': '254, 252, 232',
    'bg-red-50': '254, 242, 242',
    'bg-cyan-50': '236, 254, 255',
    'bg-slate-50': '248, 250, 252',
    'bg-indigo-50': '238, 242, 255',
    'bg-blue-50': '239, 246, 255',
    'bg-sky-50': '240, 249, 255',
    'bg-stone-50': '250, 250, 249',
    'bg-lime-50': '247, 254, 231'
  };
  return colorMap[bgClass] || '248, 250, 252';
};

const MenuSection = ({ menuSectionRef }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const { menuItems, tagStyles } = getRestaurantData(t);

  // Filtered and sorted menu items
  const filteredAndSortedItems = useMemo(() => {
    let filtered = menuItems;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(item => item.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      const search = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search) ||
        item.tags.some(tag => tag.toLowerCase().includes(search))
      );
    }

    // Sort items
    switch (sortBy) {
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'popular':
        filtered.sort((a, b) => {
          if (a.popular && !b.popular) return -1;
          if (!a.popular && b.popular) return 1;
          return 0;
        });
        break;
      default:
        // Keep original order
        break;
    }

    return filtered;
  }, [menuItems, activeCategory, searchTerm, sortBy]);

  const handleDownloadPDF = () => {
    window.open('/documents/menu.pdf', '_blank');
  };

  return (
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
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
          {t('restaurant.menu.description', 'Откройте для себя разнообразие вкусов в нашем меню, созданном талантливыми шеф-поварами')}
        </p>
        <motion.button
          onClick={handleDownloadPDF}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D29B84] text-white hover:bg-[#C08B74] transition-all duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DocumentArrowDownIcon className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium leading-none">{t('restaurant.menu.download_pdf', 'Скачать PDF')}</span>
        </motion.button>
      </motion.div>

      {/* Modern Search & Filter Bar */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Mobile Filter Toggle + Search */}
        <div className="flex flex-col gap-4 mb-6">
          <div className="flex gap-3">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('restaurant.menu.search_placeholder', 'Поиск блюд...')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border-2 border-gray-100 focus:border-[#D29B84] focus:outline-none transition-colors bg-white/80 backdrop-blur-sm text-gray-900 placeholder-gray-500"
              />
              {searchTerm && (
                <motion.button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <XMarkIcon className="w-4 h-4 text-gray-400" />
                </motion.button>
              )}
            </div>

            {/* Mobile Filter Toggle */}
            <motion.button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 rounded-2xl bg-[#D29B84] text-white font-medium shadow-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              <span>Фильтр</span>
            </motion.button>

            {/* Download PDF Button */}
            <motion.button
              onClick={handleDownloadPDF}
              className="hidden sm:flex items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-r from-[#D29B84] to-[#E6A691] text-white font-medium shadow-lg"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <DocumentArrowDownIcon className="w-5 h-5" />
              <span className="hidden md:inline">PDF</span>
            </motion.button>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600">
              <span className="font-medium">
                {filteredAndSortedItems.length} {t('restaurant.menu.items_found', 'блюд найдено')}
              </span>
              {(activeCategory !== 'all' || searchTerm) && (
                <motion.button
                  onClick={() => {
                    setActiveCategory('all');
                    setSearchTerm('');
                  }}
                  className="ml-3 text-xs px-2 py-1 bg-red-100 text-red-800 rounded-full hover:bg-red-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ✕ Очистить
                </motion.button>
              )}
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm px-3 py-2 rounded-xl border-2 border-gray-200 focus:border-[#D29B84] focus:outline-none bg-white"
            >
              <option value="default">{t('restaurant.menu.sort.default', 'По умолчанию')}</option>
              <option value="name-asc">{t('restaurant.menu.sort.name_asc', 'Название ↑')}</option>
              <option value="name-desc">{t('restaurant.menu.sort.name_desc', 'Название ↓')}</option>
              <option value="popular">{t('restaurant.menu.sort.popular', 'Популярное')}</option>
            </select>
          </div>
        </div>

        {/* Category Pills - Desktop Always Visible, Mobile Collapsible */}
        <AnimatePresence>
          <motion.div
            className={`${showFilters ? 'block' : 'hidden'} lg:block`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {[
                { key: 'all', icon: '🍽️', color: '#8B5CF6', label: 'Все' },
                { key: 'breakfast', icon: '🌅', color: '#F59E0B', label: 'Завтраки' },
                { key: 'soup', icon: '🍲', color: '#3B82F6', label: 'Супы' },
                { key: 'salad', icon: '🥗', color: '#10B981', label: 'Салаты' },
                { key: 'grill', icon: '🔥', color: '#EF4444', label: 'Гриль' },
                { key: 'burger', icon: '🍔', color: '#F97316', label: 'Бургеры' },
                { key: 'dessert', icon: '🍰', color: '#EC4899', label: 'Десерты' },
                { key: 'tea', icon: '🍵', color: '#059669', label: 'Чай' },
                { key: 'coffee', icon: '☕', color: '#92400E', label: 'Кофе' },
                { key: 'coffee_signature', icon: '✨', color: '#7C2D12', label: 'Авторский кофе' },
                { key: 'smoothie', icon: '🥤', color: '#06B6D4', label: 'Смузи' },
                { key: 'cocktail', icon: '🍸', color: '#EF4444', label: 'Коктейли' }
              ].map((category) => {
                const itemCount = menuItems.filter(item =>
                  category.key === 'all' ? true : item.category === category.key
                ).length;

                return (
                  <motion.button
                    key={category.key}
                    onClick={() => {
                      setActiveCategory(category.key);
                      setShowFilters(false);
                    }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-medium transition-all duration-300 ${
                      activeCategory === category.key
                        ? 'text-white shadow-lg transform scale-105'
                        : 'text-gray-700 bg-white/80 border border-gray-200 hover:border-gray-300 hover:bg-white'
                    }`}
                    style={{
                      background: activeCategory === category.key
                        ? `linear-gradient(135deg, ${category.color} 0%, ${category.color}DD 100%)`
                        : undefined,
                      boxShadow: activeCategory === category.key
                        ? `0 8px 25px ${category.color}40`
                        : undefined
                    }}
                    whileHover={{
                      scale: activeCategory === category.key ? 1.05 : 1.02,
                      y: -1
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="text-sm">{category.icon}</span>
                    <span className="text-sm font-medium">
                      {t(`restaurant.menu.categories.${category.key}`, category.label)}
                    </span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      activeCategory === category.key
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {itemCount}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>


        {/* Enhanced Menu Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {filteredAndSortedItems
            .map((item, index) => {
              const isDrink = isDrinkCategory(item.category);
              const drinkColors = isDrink ? getDrinkColor(item.category) : null;
              const DrinkIcon = isDrink ? getDrinkIcon(item.category) : null;
              const categoryData = [
                { key: 'all', icon: '🍽️', color: '#8B5CF6' },
                { key: 'breakfast', icon: '🌅', color: '#F59E0B' },
                { key: 'soup', icon: '🍲', color: '#3B82F6' },
                { key: 'salad', icon: '🥗', color: '#10B981' },
                { key: 'grill', icon: '🔥', color: '#EF4444' },
                { key: 'side', icon: '🥔', color: '#6B7280' },
                { key: 'sauce', icon: '🫙', color: '#84CC16' },
                { key: 'bread', icon: '🍞', color: '#D97706' },
                { key: 'burger', icon: '🍔', color: '#F97316' },
                { key: 'dessert', icon: '🍰', color: '#EC4899' },
                { key: 'tea', icon: '🍵', color: '#059669' },
                { key: 'coffee', icon: '☕', color: '#92400E' },
                { key: 'coffee_signature', icon: '✨', color: '#7C2D12' },
                { key: 'smoothie', icon: '🥤', color: '#06B6D4' },
                { key: 'mocktail', icon: '🍹', color: '#8B5CF6' },
                { key: 'juice', icon: '🧃', color: '#F59E0B' },
                { key: 'cocktail', icon: '🍸', color: '#EF4444' },
                { key: 'wine', icon: '🍷', color: '#991B1B' },
                { key: 'beer', icon: '🍺', color: '#CA8A04' },
                { key: 'strong', icon: '🥃', color: '#1F2937' },
                { key: 'liqueur', icon: '🍾', color: '#7C3AED' },
                { key: 'fitness', icon: '💪', color: '#2563EB' },
                { key: 'water', icon: '💧', color: '#0891B2' },
                { key: 'milk', icon: '🥛', color: '#6B7280' },
                { key: 'soft_drink', icon: '🥤', color: '#16A34A' }
              ].find(cat => cat.key === item.category);

              return (
                <motion.div 
                  key={item.id}
                  className={`bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-[#D29B84] transition-all duration-500 group ${isDrink ? 'hover:shadow-2xl' : ''}`}
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1)'
                  }}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.05 * (index % 12),
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{ 
                    y: -8,
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(210, 155, 132, 0.15), 0 8px 16px rgba(0, 0, 0, 0.1)',
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Для напитков или блюд без изображения - красивая иконка */}
                  {isDrink || !item.image || item.image === null ? (
                    <div className="relative h-48 flex items-center justify-center" style={{
                      background: `linear-gradient(135deg, rgba(${getDrinkColorRGB(drinkColors?.bg || 'bg-gray-50')}, 0.1) 0%, rgba(255, 255, 255, 0.8) 100%)`
                    }}>
                      {/* Иконка напитка */}
                      {DrinkIcon && (
                        <motion.div
                          className="flex items-center justify-center w-24 h-24 rounded-full"
                          style={{
                            background: `linear-gradient(135deg, ${categoryData?.color || '#90B3A7'} 0%, ${categoryData?.color || '#90B3A7'}CC 100%)`,
                            boxShadow: `0 8px 24px ${categoryData?.color || '#90B3A7'}40`
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <DrinkIcon className="w-12 h-12 text-white" />
                        </motion.div>
                      )}
                      
                      {/* Популярный значок */}
                      {item.popular && (
                        <motion.div 
                          className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10"
                          style={{
                            background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)'
                          }}
                          whileHover={{ scale: 1.1 }}
                          initial={{ scale: 0, rotate: -10 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                        >
                          ⭐ {t('restaurant.menu.popular', 'Популярное')}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    /* Для еды с изображением - улучшенное фото */
                    <div className="h-56 overflow-hidden relative group">
                      <OptimizedImage 
                        src={item.image} 
                        alt={item.name} 
                        loading="lazy"
                        priority={index < 6}
                        className="w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        objectFit="cover"
                        withPlaceholder={true}
                        withLoadingIndicator={true}
                        disableWebP={item.name.includes('яблоко') || item.name.includes('apple')}
                        onLoad={() => console.log(`✅ Loaded: ${item.name} - ${item.image}`)}
                        onError={() => console.log(`❌ Error: ${item.name} - ${item.image}`)}
                      />
                      
                      {/* Overlay gradient for better text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {item.popular && (
                        <motion.div 
                          className="absolute top-3 right-3 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20"
                          style={{
                            background: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
                            boxShadow: '0 8px 20px rgba(239, 68, 68, 0.3)'
                          }}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          initial={{ scale: 0, rotate: -10 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2 + (index * 0.05), type: "spring", stiffness: 500 }}
                        >
                          ⭐ {t('restaurant.menu.popular', 'Популярное')}
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Улучшенный контент карточки */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-[#D29B84] transition-colors duration-300">
                        {item.name}
                      </h3>
                      <motion.span 
                        className="text-xl font-bold ml-3 flex-shrink-0 px-3 py-1 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, #D29B84 0%, #E6A691 100%)',
                          color: 'white',
                          boxShadow: '0 4px 12px rgba(210, 155, 132, 0.3)'
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {item.price}
                      </motion.span>
                    </div>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2">{item.description}</p>
                    
                    {/* Улучшенные теги */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag, tagIndex) => (
                        <motion.span 
                          key={tagIndex}
                          className={`text-xs px-3 py-1.5 rounded-full font-medium border transition-all duration-200 ${tagStyles[tag] || 'bg-gray-100 text-gray-600 border-gray-200'}`}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + (tagIndex * 0.05) }}
                        >
                          {t(`restaurant.menu.tags.${tag}`, tag)}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </motion.div>

        {/* Mobile PDF Download Button */}
        <motion.div
          className="sm:hidden flex justify-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={handleDownloadPDF}
            className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-gradient-to-r from-[#D29B84] to-[#E6A691] text-white font-medium shadow-lg w-full max-w-sm justify-center"
            whileHover={{ scale: 1.02, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
            <span>Скачать полное меню PDF</span>
          </motion.button>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div 
          className="text-center mt-16 p-8 rounded-3xl bg-gradient-to-br from-[#D29B84] to-[#E6A691] text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Не нашли то, что искали?</h3>
          <p className="text-lg mb-6 opacity-90">Наши шеф-повара будут рады приготовить что-то особенное специально для вас</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#D29B84] font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                menuSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ShoppingBagIcon className="w-6 h-6" />
              <span className="text-base font-bold">Заказать столик</span>
            </motion.button>
            
            <motion.button
              onClick={handleDownloadPDF}
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-[#D29B84] transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <DocumentArrowDownIcon className="w-6 h-6" />
              <span className="text-base font-bold">Полное меню PDF</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
