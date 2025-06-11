import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLongRightIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { getSpaData } from './data/spaData';
// import SpaServiceModal from './SpaServiceModal'; // Временно отключено

// =============================================================================
// ОПТИМИЗИРОВАННАЯ СЕКЦИЯ УСЛУГ SPA
// =============================================================================

// Контейнер секции
const ServicesSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.02) 0%, rgba(168, 197, 184, 0.01) 100%);
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
    padding: 0 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem;
  }
`;

// Заголовок секции
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
  font-family: ${props => props.theme.fonts.heading};
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2.4rem;
    margin-bottom: 1rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.25rem;
  color: #7A8A7D;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0 1.5rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0 1rem;
    line-height: 1.5;
  }
`;

// Табы категорий
const CategoryTabsContainer = styled.div`
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    gap: 0.75rem;
    padding: 0 1rem;
    margin: 0 -1rem;
    scrollbar-width: none;
    -ms-overflow-style: none;
    
    &::-webkit-scrollbar {
      display: none;
    }
    
    /* Добавляем отступы по бокам для лучшего скролла */
    &::before,
    &::after {
      content: '';
      flex-shrink: 0;
      width: 0.5rem;
    }
  }
`;

const CategoryTab = styled(motion.button)`
  padding: 0.75rem 1.5rem;
  background: ${props => props.active ? 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' : 'rgba(255, 255, 255, 0.9)'};
  color: ${props => props.active ? 'white' : '#5A6B5D'};
  border: 2px solid ${props => props.active ? '#90B3A7' : 'rgba(144, 179, 167, 0.2)'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;
  
  &:hover {
    background: ${props => props.active ? 'linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)' : 'rgba(144, 179, 167, 0.15)'};
    border-color: #90B3A7;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 1.8rem;
    font-size: 1rem;
    border-radius: 25px;
    box-shadow: ${props => props.active ? '0 4px 12px rgba(144, 179, 167, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)'};
    
    &:hover {
      transform: translateY(-1px);
      box-shadow: ${props => props.active ? '0 6px 16px rgba(144, 179, 167, 0.4)' : '0 4px 12px rgba(144, 179, 167, 0.2)'};
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    border-radius: 22px;
  }
`;

// Сетка услуг - упрощенная для мобильных
const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
    padding: 0;
  }
  
  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  transition: all 0.3s ease;
  border: 1px solid rgba(144, 179, 167, 0.1);
  min-height: 500px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(144, 179, 167, 0.15);
  }
  
  @media (max-width: 768px) {
    border-radius: 20px;
    box-shadow: 0 6px 20px rgba(144, 179, 167, 0.12);
    min-height: 520px;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(144, 179, 167, 0.18);
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 18px;
    box-shadow: 0 4px 16px rgba(144, 179, 167, 0.1);
    min-height: 500px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(144, 179, 167, 0.15);
    }
  }
`;

const ServiceIcon = styled.div`
  height: 180px;
  background: ${props => props.bgColor || 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  
  @media (max-width: 768px) {
    height: 150px;
    font-size: 3rem;
  }
  
  @media (max-width: 480px) {
    height: 120px;
    font-size: 2.5rem;
  }
`;

const ServiceContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
  
  @media (max-width: 480px) {
    padding: 1.8rem;
  }
`;

const ServiceName = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 0.75rem;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const ServiceDescription = styled.p`
  color: #7A8A7D;
  line-height: 1.5;
  margin-bottom: 1rem;
  font-size: 0.95rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }
  
  @media (max-width: 480px) {
    font-size: 1.05rem;
    margin-bottom: 1.2rem;
    line-height: 1.6;
  }
`;

const ServicePricing = styled.div`
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const ServicePrice = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: #90B3A7;
  margin-bottom: 0.5rem;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 0.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
  }
`;

const ServiceDurations = styled.div`
  font-size: 0.9rem;
  color: #7A8A7D;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const ServiceButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  color: #90B3A7;
  border: 2px solid #90B3A7;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: center;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    font-size: 1.1rem;
    border-radius: 30px;
    min-height: 56px;
    
    svg {
      width: 1.2rem;
      height: 1.2rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem 1.8rem;
    font-size: 1rem;
    border-radius: 28px;
    min-height: 52px;
    
    svg {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
  
  &:hover {
    background: #90B3A7;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(144, 179, 167, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
    border-radius: 20px;
    
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
  
  @media (max-width: 480px) {
    padding: 0.875rem 1.25rem;
    font-size: 0.95rem;
    border-radius: 18px;
    
    svg {
      width: 0.9rem;
      height: 0.9rem;
    }
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 2px 8px rgba(232, 168, 124, 0.3);
  
  @media (max-width: 768px) {
    top: 0.75rem;
    right: 0.75rem;
    padding: 0.25rem 0.6rem;
    font-size: 0.7rem;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    top: 0.6rem;
    right: 0.6rem;
    padding: 0.2rem 0.5rem;
    font-size: 0.65rem;
    border-radius: 10px;
  }
`;

// Кнопка показать больше/меньше
const ShowMoreContainer = styled.div`
  text-align: center;
  margin-top: 3rem;
`;

const ShowMoreButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: transparent;
  color: #90B3A7;
  border: 2px solid #90B3A7;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: #90B3A7;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(144, 179, 167, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 1.75rem;
    font-size: 0.9rem;
  }
`;

const SpaServicesSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('massage');
  // const [selectedService, setSelectedService] = useState(null); // Временно отключено
  // const [isModalOpen, setIsModalOpen] = useState(false); // Временно отключено
  const [showAllServices, setShowAllServices] = useState(false);
  
  const spaData = getSpaData(t);
  const { categories, getServicesByCategory } = spaData;
  
  // Основные категории для мобильного (самые популярные)
  const mainCategories = ['massage', 'cosmetology', 'laser', 'manicure'];
  const visibleCategories = categories.filter(cat => mainCategories.includes(cat.id));
  
  const allServices = getServicesByCategory(activeCategory);
  const SERVICES_TO_SHOW = 4; // Показываем только 4 услуги изначально для мобильных
  const currentServices = showAllServices ? allServices : allServices.slice(0, SERVICES_TO_SHOW);
  
  // Сброс состояния "показать все" при смене категории
  useEffect(() => {
    setShowAllServices(false);
  }, [activeCategory]);
  
  // Убеждаемся, что активная категория доступна в видимых категориях
  useEffect(() => {
    if (!visibleCategories.find(cat => cat.id === activeCategory)) {
      setActiveCategory(visibleCategories[0]?.id || 'massage');
    }
  }, []);

  const handleServiceClick = (service) => {
    // Модальное окно временно отключено
    console.log('Выбрана услуга:', service.name);
  };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  //   setSelectedService(null);
  // }; // Временно отключено

  // Функция для форматирования цены
  const formatPrice = (service) => {
    if (service.durations && service.prices) {
      // Для услуг с различными временными интервалами
      return `${Math.min(...service.prices)} - ${Math.max(...service.prices)} ฿`;
    } else if (service.priceFrom && service.priceTo) {
      // Для услуг с диапазоном цен
      return `${service.priceFrom} - ${service.priceTo} ฿`;
    } else if (service.priceFrom) {
      // Для услуг с ценой "от"
      return t('spa.services.price_from', `от ${service.priceFrom} ฿`, { price: service.priceFrom });
    } else {
      // Для услуг с фиксированной ценой
      return `${service.price} ฿`;
    }
  };

  // Функция для отображения продолжительности
  const formatDurations = (service) => {
    if (service.durations && service.prices) {
      return service.durations.map((duration, index) => 
        t('spa.services.duration_price', `${duration} мин - ${service.prices[index]} ฿`, { duration, price: service.prices[index] })
      ).join(' • ');
    }
    return null;
  };

  return (
    <ServicesSection>
      <SectionContainer>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('spa.services.title', 'Наши услуги')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('spa.services.subtitle', 'Полный спектр SPA и Beauty услуг для вашего комфорта и красоты')}
          </SectionSubtitle>
        </SectionHeader>

        <CategoryTabsContainer>
          <CategoryTabs>
            {visibleCategories.map((category, index) => (
              <CategoryTab
                key={category.id}
                active={activeCategory === category.id}
                onClick={() => setActiveCategory(category.id)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon} {category.name}
              </CategoryTab>
            ))}
          </CategoryTabs>
        </CategoryTabsContainer>

        <ServicesGrid
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {currentServices.map((service, index) => {
            const categoryData = categories.find(cat => cat.id === service.category);
            
            return (
              <ServiceCard
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                style={{ position: 'relative' }}
              >
                {service.popular && (
                  <PopularBadge>{t('spa.services.popular', 'Популярно')}</PopularBadge>
                )}
                
                <ServiceIcon bgColor={categoryData?.color}>
                  {categoryData?.icon}
                </ServiceIcon>
                
                <ServiceContent>
                  <ServiceName>{service.name}</ServiceName>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  
                  <ServicePricing>
                    <ServicePrice>{formatPrice(service)}</ServicePrice>
                    {formatDurations(service) && (
                      <ServiceDurations>{formatDurations(service)}</ServiceDurations>
                    )}
                  </ServicePricing>
                  
                  <ServiceButton
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleServiceClick(service)}
                  >
                    {t('spa.services.learn_more', 'Подробнее')}
                    <ArrowLongRightIcon />
                  </ServiceButton>
                </ServiceContent>
              </ServiceCard>
            );
          })}
        </ServicesGrid>

        {allServices.length > SERVICES_TO_SHOW && (
          <ShowMoreContainer>
            <ShowMoreButton
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAllServices(!showAllServices)}
            >
              {showAllServices ? t('spa.services.show_less', 'Показать меньше') : t('spa.services.show_more', `Показать ещё ${allServices.length - SERVICES_TO_SHOW} услуг`, { count: allServices.length - SERVICES_TO_SHOW })}
              {showAllServices ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </ShowMoreButton>
          </ShowMoreContainer>
        )}
      </SectionContainer>

      {/* Модальное окно временно отключено
      <SpaServiceModal
        isOpen={isModalOpen}
        onClose={closeModal}
        service={selectedService}
        categoryData={selectedService ? categories.find(cat => cat.id === selectedService.category) : null}
      />
      */}
    </ServicesSection>
  );
};

export default SpaServicesSection;
