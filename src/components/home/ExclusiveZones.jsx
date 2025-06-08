import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ArrowLongRightIcon, 
  FireIcon, 
  SparklesIcon,
  HeartIcon,
  BuildingStorefrontIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

// Импорт локального изображения для карточки "Русская баня"
import heroLuxuryImage from '../../assets/images/hero/hero-luxury.png';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #ffffff;
  overflow: hidden;
  
  @media (min-width: 768px) {
    padding: 8rem 0;
  }
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
  margin-bottom: 3rem;
`;

// Маленький текст над заголовком
const Overline = styled(motion.div)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #FF6347;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'};
    margin-right: 1rem;
  }
`;

// Основной заголовок
const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  line-height: 1.2;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin: 0;
`;

// Контейнер для категорий
const CategoriesContainer = styled.div`
  margin-top: 2rem;
`;

// Заголовок категории
const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2.5rem;
  position: relative;
  
  &::after {
    content: '';
    flex-grow: 1;
    height: 1px;
    background-color: rgba(44, 62, 45, 0.1);
    margin-left: 2rem;
  }
`;

// Заголовок категории
const CategoryTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 300;
  margin: 0;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  position: relative;
  display: flex;
  align-items: center;
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: 1rem;
    color: #5CB848;
  }
`;

// Контейнер для сетки карточек
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.5rem;
  margin-bottom: 5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
  
  @media (max-width: 767px) {
    margin-bottom: 4rem;
  }
`;

// Карточка зоны
const ZoneCard = styled(motion.div)`
  position: relative;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
  cursor: pointer;
  /* Оптимизация производительности */
  will-change: transform, box-shadow;
  transform: translateZ(0);
  
  @media (min-width: 480px) {
    height: 320px;
    border-radius: 20px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
  }
  
  @media (min-width: 768px) {
    height: 360px;
    border-radius: 24px;
  }
  
  @media (min-width: 1024px) {
    height: 380px;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.01) translateZ(0);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 480px) {
    &:hover {
      transform: translateY(-6px) scale(1.005) translateZ(0);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
    transition: background 0.3s ease-out;
  }
  
  &:hover::after {
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.7) 100%
    );
  }
  
  @media (max-width: 480px) {
    &::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.15) 0%,
        rgba(0, 0, 0, 0.8) 100%
      );
    }
    
    &:hover::after {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.7) 100%
      );
    }
  }
`;

// Изображение зоны
const ZoneImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  
  ${ZoneCard}:hover & {
    transform: scale(1.1);
  }
`;

// Контент карточки
const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  color: #fff;
  transform: translateY(0);
  transition: transform 0.4s ease;
  
  ${ZoneCard}:hover & {
    transform: translateY(-5px);
  }
`;

// Название зоны
const ZoneName = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  letter-spacing: 0.5px;
  color: #fff;
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
  
  ${ZoneCard}:hover & {
    transform: translateY(-2px);
    text-shadow: 0px 4px 12px rgba(0, 0, 0, 0.9);
  }
`;

// Описание зоны
const ZoneDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  opacity: 0.95;
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.2px;
  transition: all 0.3s ease;
  text-shadow: 0px 2px 6px rgba(0, 0, 0, 0.8);
  
  ${ZoneCard}:hover & {
    opacity: 1;
    transform: translateY(-2px);
    text-shadow: 0px 3px 8px rgba(0, 0, 0, 0.9);
  }
`;

// Кнопка "Подробнее"
const ExploreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: #fff !important;
  text-decoration: none !important;
  padding: 0.8rem 1.5rem;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  transform: translateY(10px);
  opacity: 0.8;
  
  svg {
    width: 18px;
    height: 18px;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
    color: #fff !important;
  }
  
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
  
  ${ZoneCard}:hover & {
    transform: translateY(0);
    opacity: 1;
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.3);
    color: #fff !important;
    
    svg {
      transform: translateX(4px);
      color: #fff !important;
    }
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.3) !important;
    transform: translateY(-2px) !important;
    color: #fff !important;
    text-decoration: none !important;
    
    svg {
      color: #fff !important;
    }
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:visited,
  &:link,
  &:active {
    color: #fff !important;
    text-decoration: none !important;
  }
`;

// Данные для категории "Активити"
const activityZones = [
  {
    id: 'fitness',
    name: 'Тренажерный зал',
    description: 'Современное пространство с премиальным оборудованием',
    image: '/images/zones/fitness.jpg',
    path: '/fitness'
  },
  {
    id: 'combat',
    name: 'Боевые искусства',
    description: 'MMA, бокс и муай-тай с профессиональными тренерами',
    image: '/images/zones/combat.jpg',
    path: '/combat'
  },
  {
    id: 'pool',
    name: 'Бассейн',
    description: 'Плавание в 25-метровом бассейне',
    image: '/images/zones/pool.jpg',
    path: '/pool'
  }
];

// Данные для категории "Релакс"
const relaxZones = [
  {
    id: 'spa',
    name: 'СПА-комплекс',
    description: 'Расслабляющие процедуры и премиальные массажи',
    image: '/images/zones/spa.jpg',
    path: '/spa'
  },
  {
    id: 'banya',
    name: 'Русская баня',
    description: 'Традиционные банные процедуры и оздоровление',
    image: heroLuxuryImage,
    path: '/banya'
  },
  {
    id: 'restaurant',
    name: 'Ресторан',
    description: 'Изысканная кухня и авторское меню',
    image: '/images/zones/restaurant.jpg',
    path: '/restaurant'
  }
];

// Контейнер для кнопок-вкладок
const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const TabButton = styled.button`
  background: ${props => props.$active 
    ? 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' 
    : 'rgba(255, 255, 255, 0.1)'
  };
  color: ${props => props.$active ? 'white' : '#2C3E2D'};
  border: 2px solid ${props => props.$active ? 'transparent' : 'rgba(144, 179, 167, 0.3)'};
  border-radius: 50px;
  padding: 1rem 2.5rem;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.25s ease-out;
  cursor: pointer;
  margin: 0 0.8rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.$active 
    ? '0 8px 25px rgba(144, 179, 167, 0.4)' 
    : '0 4px 15px rgba(0, 0, 0, 0.1)'
  };
  backdrop-filter: blur(10px);
  min-width: 180px;
  justify-content: center;
  /* Оптимизация производительности */
  will-change: transform, background-color, box-shadow;
  transform: translateZ(0);
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 0.6rem;
    transition: all 0.3s ease;
    color: ${props => props.$active ? 'white' : '#90B3A7'};
  }
  
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
  
  &:hover {
    transform: translateY(-1px) translateZ(0);
    box-shadow: ${props => props.$active 
      ? '0 10px 30px rgba(144, 179, 167, 0.5)' 
      : '0 6px 20px rgba(144, 179, 167, 0.25)'
    };
    background: ${props => props.$active 
      ? 'linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)' 
      : 'rgba(144, 179, 167, 0.1)'
    };
    border-color: ${props => props.$active ? 'transparent' : 'rgba(144, 179, 167, 0.5)'};
    color: ${props => props.$active ? 'white' : '#90B3A7'};
    
    svg {
      transform: scale(1.05) translateZ(0);
      color: ${props => props.$active ? 'white' : '#90B3A7'};
    }
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.3);
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    margin: 0 0 1rem 0;
    min-width: unset;
    padding: 0.9rem 2rem;
  }
`;

const ExclusiveZones = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all');
  
  // Функция для отображения карточек зон без множественных анимаций
  const renderZones = (zones, categoryKey) => {
    return zones.map((zone, index) => (
      <ZoneCard 
        key={`${categoryKey}-${zone.id}`}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
      >
        <ZoneImage src={zone.image} alt={zone.name} />
        <CardContent>
          <ZoneName>{zone.name}</ZoneName>
          <ZoneDescription>{zone.description}</ZoneDescription>
          <ExploreButton to={zone.path}>
            {t('common.exploreMore', 'Подробнее')}
            <ArrowLongRightIcon />
          </ExploreButton>
        </CardContent>
      </ZoneCard>
    ));
  };
  
  // Обработчик изменения вкладки с дебаунсом
  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };
  
  return (
    <SectionContainer id="exclusive-zones">
      <ContentWrapper>
        <SectionHeader>
          <Overline
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            {t('zones.overline', 'Пространства KAIF')}
          </Overline>
          
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('zones.title', 'Всё необходимое для активного отдыха и релаксации')}
          </Title>
        </SectionHeader>
        
        {/* Кнопки-вкладки */}
        <TabsContainer>
          <TabButton 
            $active={activeTab === 'all'} 
            onClick={() => handleTabChange('all')}
          >
            {t('zones.all', 'Все зоны')}
          </TabButton>
          
          <TabButton 
            $active={activeTab === 'activity'} 
            onClick={() => handleTabChange('activity')}
          >
            <BoltIcon />
            {t('zones.activity', 'Активити')}
          </TabButton>
          
          <TabButton 
            $active={activeTab === 'relax'} 
            onClick={() => handleTabChange('relax')}
          >
            <SparklesIcon />
            {t('zones.relax', 'Релакс')}
          </TabButton>
        </TabsContainer>
        
        <CategoriesContainer>
          {/* Зона Активити */}
          {(activeTab === 'all' || activeTab === 'activity') && (
            <div>
              <CategoryHeader>
                <CategoryTitle>
                  <BoltIcon />
                  {t('zones.activity', 'Активити')}
                </CategoryTitle>
              </CategoryHeader>
              
              <GridContainer>
                {renderZones(activityZones, 'activity')}
              </GridContainer>
            </div>
          )}
          
          {/* Зона Релакс */}
          {(activeTab === 'all' || activeTab === 'relax') && (
            <div>
              <CategoryHeader>
                <CategoryTitle>
                  <SparklesIcon />
                  {t('zones.relax', 'Релакс')}
                </CategoryTitle>
              </CategoryHeader>
              
              <GridContainer>
                {renderZones(relaxZones, 'relax')}
              </GridContainer>
            </div>
          )}
        </CategoriesContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ExclusiveZones;
