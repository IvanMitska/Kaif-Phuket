import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline';

// =============================================================================
// ОПТИМИЗИРОВАННАЯ СЕКЦИЯ УСЛУГ SPA
// =============================================================================

const ServicesSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #fdfcfb 0%,
    #f5f3f0 50%,
    #ede9e4 100%
  );
  position: relative;
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.2rem, 4vw, 3.2rem);
  color: #5A6B5D;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.05rem, 2vw, 1.25rem);
  color: #7A8A7D;
  text-align: center;
  max-width: 700px;
  margin: 2.5rem auto 4.5rem auto;
  line-height: 1.8;
  font-weight: 400;
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const Tab = styled(motion.button)`
  padding: 1rem 2.5rem;
  border: none;
  background-color: ${props => props.active 
    ? '#90B3A7' 
    : 'rgba(255, 255, 255, 0.7)'
  };
  color: ${props => props.active ? 'white' : '#5A6B5D'};
  border: 1px solid ${props => props.active ? 'transparent' : 'rgba(144, 179, 167, 0.2)'};
  border-radius: 50px;
  font-weight: ${props => props.active ? '600' : '500'};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  
  &:hover {
    background-color: #90B3A7;
    color: white;
    transform: translateY(-1px);
  }
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (min-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(144, 179, 167, 0.15);
  }
`;

// Простой цветной блок вместо изображения
const ServiceIcon = styled.div`
  height: 200px;
  background: ${props => props.bgColor || 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  
  @media (max-width: 768px) {
    height: 150px;
    font-size: 3rem;
  }
`;

const ServiceContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #5A6B5D;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  color: #7A8A7D;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
`;

const ServicePrice = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #90B3A7;
  margin-bottom: 1rem;
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
  align-self: flex-start;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  &:hover {
    background: #90B3A7;
    color: white;
  }
`;

const SpaServicesSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('spa');

  const spaServices = [
    {
      icon: '🌿',
      title: 'Тайский массаж',
      description: 'Традиционный тайский массаж для полного расслабления и восстановления энергии',
      price: 'от 3,500 ฿',
      bgColor: 'linear-gradient(135deg, #90B3A7 0%, #B8C4A8 100%)'
    },
    {
      icon: '🧘‍♀️',
      title: 'Ароматерапия',
      description: 'Расслабляющий массаж с использованием натуральных эфирных масел',
      price: 'от 4,000 ฿',
      bgColor: 'linear-gradient(135deg, #D4A574 0%, #E6B885 100%)'
    },
    {
      icon: '♨️',
      title: 'Финская сауна',
      description: 'Традиционная сухая сауна для детоксикации и укрепления иммунитета',
      price: 'от 2,000 ฿',
      bgColor: 'linear-gradient(135deg, #A8B8A8 0%, #C0D0C0 100%)'
    },
    {
      icon: '🛁',
      title: 'Турецкий хаммам',
      description: 'Паровая баня с пилингом и расслабляющими процедурами',
      price: 'от 2,500 ฿',
      bgColor: 'linear-gradient(135deg, #90B3A7 0%, #A0C3B7 100%)'
    },
    {
      icon: '🏊‍♀️',
      title: 'Бассейн',
      description: 'Просторный бассейн с подогревом для плавания и водных процедур',
      price: 'от 1,500 ฿',
      bgColor: 'linear-gradient(135deg, #7A9FAF 0%, #8AAFBF 100%)'
    },
    {
      icon: '🛀',
      title: 'Джакузи',
      description: 'Гидромассажная ванна с пузырьками для максимального расслабления',
      price: 'от 2,200 ฿',
      bgColor: 'linear-gradient(135deg, #B8A8C8 0%, #C8B8D8 100%)'
    }
  ];

  const beautyServices = [
    {
      icon: '✂️',
      title: 'Стрижки и укладки',
      description: 'Профессиональные стрижки и стайлинг от опытных мастеров',
      price: 'от 2,500 ฿',
      bgColor: 'linear-gradient(135deg, #E8A87C 0%, #F8B88C 100%)'
    },
    {
      icon: '🎨',
      title: 'Окрашивание волос',
      description: 'Современные техники окрашивания премиальными красителями',
      price: 'от 4,500 ฿',
      bgColor: 'linear-gradient(135deg, #D4A574 0%, #E4B584 100%)'
    },
    {
      icon: '💅',
      title: 'Маникюр',
      description: 'Классический и аппаратный маникюр с покрытием гель-лак',
      price: 'от 1,800 ฿',
      bgColor: 'linear-gradient(135deg, #F0A0B0 0%, #FFB0C0 100%)'
    },
    {
      icon: '🦶',
      title: 'Педикюр',
      description: 'Профессиональный педикюр с уходовыми процедурами',
      price: 'от 2,200 ฿',
      bgColor: 'linear-gradient(135deg, #A0C8F0 0%, #B0D8FF 100%)'
    },
    {
      icon: '✨',
      title: 'Уход за лицом',
      description: 'Комплексные процедуры для сияния и молодости кожи',
      price: 'от 3,500 ฿',
      bgColor: 'linear-gradient(135deg, #C8D8A8 0%, #D8E8B8 100%)'
    }
  ];

  const currentServices = activeTab === 'spa' ? spaServices : beautyServices;

  return (
    <ServicesSection>
      <SectionContainer>
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
          {t('spa.services.subtitle', 'Широкий спектр SPA процедур и beauty услуг для вашего комфорта и красоты')}
        </SectionSubtitle>

        <TabsContainer>
          <Tab
            active={activeTab === 'spa'}
            onClick={() => setActiveTab('spa')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            SPA процедуры
          </Tab>
          <Tab
            active={activeTab === 'beauty'}
            onClick={() => setActiveTab('beauty')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Beauty услуги
          </Tab>
        </TabsContainer>

        <ServicesGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {currentServices.map((service, index) => (
            <ServiceCard
              key={`${activeTab}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <ServiceIcon bgColor={service.bgColor}>
                {service.icon}
              </ServiceIcon>
              
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <ServicePrice>{service.price}</ServicePrice>
                <ServiceButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Записаться
                  <ArrowLongRightIcon />
                </ServiceButton>
              </ServiceContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </SectionContainer>
    </ServicesSection>
  );
};

export default SpaServicesSection;
