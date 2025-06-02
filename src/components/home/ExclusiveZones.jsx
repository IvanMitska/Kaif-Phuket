import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLongRightIcon, BoltIcon, SparklesIcon } from '@heroicons/react/24/outline';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #ffffff; /* Чистый белый фон */
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
  color: #FF6347; /* Оранжево-красный из логотипа */
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
    color: #5CB848; /* Зеленый из логотипа */
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
  height: 320px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1), box-shadow 0.5s ease;
  
  @media (min-width: 768px) {
    height: 380px;
  }
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.9) 100%
    );
    z-index: 1;
    transition: all 0.5s ease;
  }
  
  &:hover::after {
    opacity: 0.95;
    background: linear-gradient(
      to bottom,
      rgba(144, 179, 167, 0.4) 0%,
      rgba(168, 197, 184, 0.9) 100%
    );
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
`;

// Название зоны
const ZoneName = styled.h3`
  font-family: 'Montserrat', sans-serif; /* Более современный шрифт */
  font-size: 1.75rem;
  font-weight: 400;
  margin: 0 0 0.5rem;
  letter-spacing: 0.5px;
  color: #fff; /* Белый текст для читаемости на изображениях */
  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.8); /* Текстовая тень для лучшей читаемости */
`;

// Описание зоны
const ZoneDescription = styled.p`
  font-family: 'Inter', sans-serif; /* Современный шрифт */
  font-size: 0.9rem; /* Уменьшенный размер */
  line-height: 1.5;
  margin: 0 0 1.5rem;
  opacity: 0.9;
  color: #fff; /* Белый текст для описания */
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.7); /* Текстовая тень для лучшей читаемости */
  letter-spacing: 0.3px;
`;

// Кнопка "Подробнее"
const ExploreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif; /* Современный шрифт */
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.8px;
  color: #fff;
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  background: linear-gradient(
    135deg,
    rgba(144, 179, 167, 0.6) 0%,
    rgba(168, 197, 184, 0.5) 100%
  );
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  svg {
    width: 18px;
    height: 18px;
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0));
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    pointer-events: none;
  }
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    color: #fff;
    
    &::before {
      transform: translateX(100%);
    }
  }
  
  &:hover svg {
    transform: translateX(5px);
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
    name: 'Бассейн олимпийский',
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
    id: 'beauty',
    name: 'Салон красоты',
    description: 'Косметология и премиальные уходовые процедуры',
    image: '/images/zones/beauty.jpg',
    path: '/beauty'
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
  
  /* Удалена линия под кнопками для более чистого дизайна */
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const TabButton = styled.button`
  background: ${props => props.$active ? `${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, rgba(255, 99, 71, 0.40) 0%, rgba(255, 99, 71, 0.35) 5%, rgba(206, 128, 114, 0.30) 12%, rgba(157, 157, 157, 0.25) 20%, rgba(108, 186, 200, 0.30) 28%, rgba(0, 180, 216, 0.40) 36%, rgba(71, 168, 203, 0.35) 44%, rgba(142, 157, 188, 0.30) 52%, rgba(214, 145, 173, 0.35) 60%, rgba(255, 105, 180, 0.40) 68%, rgba(219, 140, 149, 0.35) 76%, rgba(183, 175, 118, 0.30) 84%, rgba(147, 210, 95, 0.35) 92%, rgba(92, 184, 72, 0.40) 100%)'}` : 'transparent'};
  color: ${props => props.$active ? '#fff' : '#2C3E2D'};
  border: 1px solid ${props => props.$active ? 'transparent' : '#00B4D8'}; /* Голубой из логотипа */
  border-radius: 30px;
  padding: 0.8rem 2rem;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  margin: 0 0.8rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: ${props => props.$active ? '0 8px 20px rgba(0, 180, 216, 0.2)' : 'none'}; /* Тень с голубым из логотипа */
  
  svg {
    width: 18px;
    height: 18px;
    margin-right: 0.6rem;
    transition: transform 0.3s ease;
    color: ${props => props.$active ? '#fff' : '#5CB848'}; /* Зеленый из логотипа для неактивных */
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 180, 216, 0.15);
    border-color: ${props => props.$active ? 'transparent' : '#FF69B4'}; /* Розовый из логотипа при наведении */
    
    svg {
      transform: ${props => props.$active ? 'scale(1.2)' : 'none'};
      color: ${props => props.$active ? '#fff' : '#FF69B4'}; /* Розовый из логотипа при наведении */
    }
  }
  
  &:focus {
    outline: none;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
  }
  
  &:active::after {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    margin: 0;
  }
`;

const ExclusiveZones = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'activity', 'relax'
  
  // Функция для отображения карточек зон
  const renderZones = (zones) => {
    return zones.map((zone, index) => (
      <ZoneCard 
        key={zone.id}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: index * 0.1 }}
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
  
  // Обработчик изменения вкладки
  const handleTabChange = (tab) => {
    setActiveTab(tab);
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
        <TabsContainer
          as={motion.div}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
        >
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
            <>
              <CategoryHeader
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
              >
                <CategoryTitle>
                  <BoltIcon />
                  {t('zones.activity', 'Активити')}
                </CategoryTitle>
              </CategoryHeader>
              
              <GridContainer>
                {renderZones(activityZones)}
              </GridContainer>
            </>
          )}
          
          {/* Зона Релакс */}
          {(activeTab === 'all' || activeTab === 'relax') && (
            <>
              <CategoryHeader
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
              >
                <CategoryTitle>
                  <SparklesIcon />
                  {t('zones.relax', 'Релакс')}
                </CategoryTitle>
              </CategoryHeader>
              
              <GridContainer>
                {renderZones(relaxZones)}
              </GridContainer>
            </>
          )}
        </CategoriesContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default ExclusiveZones;
