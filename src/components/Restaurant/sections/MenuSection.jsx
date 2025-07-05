import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ShoppingBagIcon, ArrowRightIcon, DocumentArrowDownIcon } from '@heroicons/react/24/solid';
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

const MenuSection = ({ menuSectionRef }) => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = React.useState('all');
  const { menuItems, tagStyles } = getRestaurantData(t);

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
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#D29B84] text-white hover:bg-[#C08B74] transition-all duration-300 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <DocumentArrowDownIcon className="w-6 h-6" />
          <span className="text-base font-medium">{t('restaurant.menu.download_pdf', 'Скачать PDF')}</span>
        </motion.button>
      </motion.div>

      {/* Menu Categories */}
      <div className="mb-16">
        <motion.div 
          className="flex justify-center flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.button 
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: '#D29B84',
              color: '#FFFFFF',
              border: '2px solid #D29B84',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            whileHover={{ y: -3 }}
            whileTap={{ y: 0 }}
            onClick={handleDownloadPDF}
          >
            <div className="flex items-center gap-2">
              <DocumentArrowDownIcon className="w-4 h-4" />
              <span>{t('restaurant.menu.download_pdf', 'Download Menu')}</span>
            </div>
          </motion.button>
          {[
            'all', 
            'breakfast', 
            'lunch', 
            'dinner', 
            'soup', 
            'salad', 
            'grill', 
            'side', 
            'sauce', 
            'bread', 
            'burger', 
            'shawarma', 
            'dessert', 
            'tea', 
            'coffee', 
            'coffee_signature',
            'smoothie', 
            'mocktail', 
            'juice', 
            'cocktail', 
            'wine',
            'beer',
            'strong',
            'liqueur',
            'fitness',
            'water',
            'milk',
            'soft_drink'
          ].map((category) => (
            <motion.button 
              key={category}
              className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: activeCategory === category ? '#D29B84' : '#FFFFFF',
                color: activeCategory === category ? '#FFFFFF' : '#4B5563',
                border: `2px solid ${activeCategory === category ? '#D29B84' : '#D1D5DB'}`,
                boxShadow: activeCategory === category ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 1px 2px rgba(0, 0, 0, 0.05)'
              }}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
              onClick={() => setActiveCategory(category)}
            >
              {t(`restaurant.menu.categories.${category}`, category.charAt(0).toUpperCase() + category.slice(1))}
            </motion.button>
          ))}
        </motion.div>

        {/* Sort and PDF Download */}
        <div className="flex justify-end items-center gap-4 mb-8">
          <motion.button
            onClick={handleDownloadPDF}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D29B84] text-white hover:bg-[#C08B74] transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <DocumentArrowDownIcon className="w-5 h-5" />
            <span className="text-sm font-medium">{t('restaurant.menu.download_pdf', 'Скачать PDF')}</span>
          </motion.button>
          <div className="flex items-center gap-2">
            <span className="text-gray-500">Sort by:</span>
            <select className="border rounded-lg px-3 py-1.5 text-gray-700 bg-white">
              <option>Default</option>
            </select>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Фильтруем блюда по выбранной категории */}
          {menuItems
            .filter(item => activeCategory === 'all' || item.category === activeCategory)
            .map((item, index) => {
              const isDrink = isDrinkCategory(item.category);
              const drinkColors = isDrink ? getDrinkColor(item.category) : null;
              const DrinkIcon = isDrink ? getDrinkIcon(item.category) : null;

              return (
                <motion.div 
                  key={item.id}
                  className={`bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${isDrink ? 'hover:shadow-2xl' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ 
                    y: -12,
                    scale: isDrink ? 1.02 : 1.01,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Для напитков или блюд без изображения - только популярный значок без фото */}
                  {isDrink || !item.image || item.image === null ? (
                    <div className="relative">
                      {/* Популярный значок */}
                      {item.popular && (
                        <motion.div 
                          className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10"
                          whileHover={{ scale: 1.1 }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                        >
                          ⭐ {t('restaurant.menu.popular', 'Popular')}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    /* Для еды с изображением - обычное фото */
                    <div className="h-64 overflow-hidden relative">
                      <OptimizedImage 
                        src={item.image} 
                        alt={item.name} 
                        loading="lazy"
                        priority={index < 3}
                        className="w-full h-full transition-transform duration-500 hover:scale-105"
                        objectFit="cover"
                        withPlaceholder={true}
                        withLoadingIndicator={true}
                        disableWebP={item.name.includes('яблоко') || item.name.includes('apple')}
                        onLoad={() => console.log(`✅ Loaded: ${item.name} - ${item.image}`)}
                        onError={() => console.log(`❌ Error: ${item.name} - ${item.image}`)}
                      />
                      {item.popular && (
                        <motion.div 
                          className="absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10"
                          style={{
                            background: 'linear-gradient(to right, #ef4444, #ec4899)',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                          }}
                          whileHover={{ scale: 1.1 }}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                        >
                          ⭐ {t('restaurant.menu.popular', 'Популярное')}
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Контент карточки */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.name}</h3>
                      <span className="text-lg font-bold text-primary ml-2 flex-shrink-0">{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                    
                    {/* Теги */}
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`text-xs px-2 py-1 rounded-full ${tagStyles[tag] || 'bg-gray-100 text-gray-600'}`}
                        >
                          {t(`restaurant.menu.tags.${tag}`, tag)}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
        </div>

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
  );
};

export default MenuSection;
