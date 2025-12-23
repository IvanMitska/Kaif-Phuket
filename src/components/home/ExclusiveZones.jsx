import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ArrowLongRightIcon,
  SparklesIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

// Импорт локального изображения для карточки "Русская баня" (оптимизированный WebP)
import heroLuxuryImage from '../../assets/images/hero/hero-luxury.webp';

// Основной контейнер - ИСПРАВЛЕН для предотвращения блокировки скролла
const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #ffffff;
  overflow: hidden;
  /* ИСПРАВЛЕНИЕ: Не блокируем скролл */
  touch-action: pan-y;
  overscroll-behavior: auto;
  -webkit-overscroll-behavior: auto;
  
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

// Маленький текст над заголовком - PERFORMANCE: убран motion
const Overline = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #90B3A7;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: #90B3A7;
    margin-right: 1rem;
  }
`;

// Основной заголовок - PERFORMANCE: убран motion
const Title = styled.h2`
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

// Карточка зоны - PERFORMANCE: максимально упрощена
const ZoneCard = styled.div`
  position: relative;
  height: 280px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  @media (min-width: 480px) {
    height: 320px;
    border-radius: 20px;
  }

  @media (min-width: 768px) {
    height: 360px;
    border-radius: 24px;
  }

  @media (min-width: 1024px) {
    height: 380px;
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
      rgba(0, 0, 0, 0.7) 100%
    );
    z-index: 1;
  }
`;

// Изображение зоны - PERFORMANCE: максимально упрощено
const ZoneImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

// Контент карточки - PERFORMANCE: упрощён
const CardContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 2rem;
  z-index: 2;
  color: #fff;
`;

// Название зоны - PERFORMANCE: упрощено
const ZoneName = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  letter-spacing: 0.5px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

// Описание зоны - PERFORMANCE: упрощено
const ZoneDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  letter-spacing: 0.2px;
`;

// Кнопка "Подробнее" - PERFORMANCE: максимально упрощена, убран backdrop-filter
const ExploreButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.8px;
  color: #fff;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  transition: background 0.2s ease;

  svg {
    width: 18px;
    height: 18px;
    margin-left: 0.5rem;
    color: #fff;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-decoration: none;
  }
`;



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

// TabButton - PERFORMANCE: убран backdrop-filter и тяжёлые эффекты
const TabButton = styled.button`
  background: ${props => props.$active ? '#90B3A7' : '#f5f5f5'};
  color: ${props => props.$active ? 'white' : '#2C3E2D'};
  border: 2px solid ${props => props.$active ? '#90B3A7' : '#e0e0e0'};
  border-radius: 50px;
  padding: 1rem 2.5rem;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: background 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  margin: 0 0.8rem;
  display: flex;
  align-items: center;
  min-width: 180px;
  justify-content: center;

  svg {
    width: 18px;
    height: 18px;
    margin-right: 0.6rem;
    color: ${props => props.$active ? 'white' : '#90B3A7'};
  }

  &:hover {
    background: ${props => props.$active ? '#7fa396' : '#e8e8e8'};
  }

  &:focus {
    outline: none;
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

  // Данные для категории "Активити" с переводами
  const activityZones = useMemo(() => [
    {
      id: 'fitness',
      name: t('zones.activity.fitness.name'),
      description: t('zones.activity.fitness.description'),
      image: '/images/zones/fitness.jpg',
      path: '/sports'
    },
    {
      id: 'combat',
      name: t('zones.activity.combat.name'),
      description: t('zones.activity.combat.description'),
      image: '/images/zones/combat.jpg',
      path: '/sports'
    },
    {
      id: 'pool',
      name: t('zones.activity.pool.name'),
      description: t('zones.activity.pool.description'),
      image: '/images/zones/pool.jpg',
      path: '/sports'
    }
  ], [t]);

  // Данные для категории "Релакс" с переводами
  const relaxZones = useMemo(() => [
    {
      id: 'spa',
      name: t('zones.relax.spa.name'),
      description: t('zones.relax.spa.description'),
      image: '/images/zones/spa.jpg',
      path: '/spa'
    },
    {
      id: 'banya',
      name: t('zones.relax.banya.name'),
      description: t('zones.relax.banya.description'),
      image: heroLuxuryImage,
      path: '/banya'
    },
    {
      id: 'restaurant',
      name: t('zones.relax.restaurant.name'),
      description: t('zones.relax.restaurant.description'),
      image: '/images/zones/restaurant.jpg',
      path: '/restaurant'
    }
  ], [t]);
  
  // Функция для отображения карточек зон - PERFORMANCE: убраны анимации
  const renderZones = (zones, categoryKey) => {
    return zones.map((zone) => (
      <ZoneCard key={`${categoryKey}-${zone.id}`}>
        <ZoneImage src={zone.image} alt={zone.name} loading="lazy" />
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
          <Overline>
            {t('zones.overline', 'Пространства KAIF')}
          </Overline>

          <Title>
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
            {t('zones.activity_label', 'Активити')}
          </TabButton>
          
          <TabButton 
            $active={activeTab === 'relax'} 
            onClick={() => handleTabChange('relax')}
          >
            <SparklesIcon />
            {t('zones.relax_label', 'Релакс')}
          </TabButton>
        </TabsContainer>
        
        <CategoriesContainer>
          {/* Зона Активити */}
          {(activeTab === 'all' || activeTab === 'activity') && (
            <div>
              <CategoryHeader>
                <CategoryTitle>
                  <BoltIcon />
                  {t('zones.activity_label', 'Активити')}
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
                  {t('zones.relax_label', 'Релакс')}
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
