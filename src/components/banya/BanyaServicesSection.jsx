import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  FireIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid';

const ServicesContainer = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, 
    #fefcfa 0%, 
    #f9f5f1 50%, 
    #f5f0eb 100%
  );
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 6rem;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(205, 133, 63, 0.12) 0%, rgba(180, 142, 98, 0.15) 100%);
  border: 1px solid rgba(205, 133, 63, 0.2);
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #B8804A;
  margin-bottom: 1.5rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #CD853F;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #8B4513 0%, #CD853F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionDescription = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #8B6F4A;
  max-width: 600px;
  margin: 0 auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 252, 250, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(205, 133, 63, 0.15);
  border-radius: 25px;
  padding: 2.5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(205, 133, 63, 0.15);
    border-color: rgba(205, 133, 63, 0.3);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(205, 133, 63, 0.02) 0%, rgba(180, 142, 98, 0.03) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(205, 133, 63, 0.15) 0%, rgba(180, 142, 98, 0.2) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  position: relative;
  z-index: 2;
  
  svg {
    width: 40px;
    height: 40px;
    color: #CD853F;
  }
`;

const ServiceTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #8B6F4A;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  position: relative;
  z-index: 2;
`;

const ServiceFeature = styled.li`
  font-size: 0.875rem;
  color: #A0522D;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '✓';
    color: #CD853F;
    font-weight: bold;
  }
`;

const ServicePrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #8B4513;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
`;

const ServiceButton = styled(motion.button)`
  background: linear-gradient(135deg, #CD853F 0%, #DEB887 100%);
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(205, 133, 63, 0.3);
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const services = [
  {
    icon: FireIcon,
    title: 'Классическая Баня',
    description: 'Традиционная русская баня с березовыми вениками и ароматными травами',
    features: ['Березовые веники', 'Травяные настои', 'Контрастные процедуры', 'Чаепитие'],
    price: '2500 ₽',
    duration: '2 часа'
  },
  {
    icon: SparklesIcon,
    title: 'VIP Баня',
    description: 'Премиальный банный комплекс с дополнительными услугами и персональным обслуживанием',
    features: ['Персональный банщик', 'Элитные веники', 'Медовые обертывания', 'Массаж'],
    price: '5000 ₽',
    duration: '3 часа'
  },
  {
    icon: HeartIcon,
    title: 'Парная для двоих',
    description: 'Романтическая банная церемония для пар с особой атмосферой',
    features: ['Приватная парная', 'Ароматерапия', 'Шампанское', 'Фрукты'],
    price: '4000 ₽',
    duration: '2.5 часа'
  },
  {
    icon: UserGroupIcon,
    title: 'Корпоративная Баня',
    description: 'Банные программы для компаний и больших групп до 8 человек',
    features: ['Групповые процедуры', 'Банкетный зал', 'Развлечения', 'Кейтеринг'],
    price: '8000 ₽',
    duration: '4 часа'
  }
];

const BanyaServicesSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <ServicesContainer>
      <ContentWrapper>
        <SectionHeader>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FireIcon />
            Наши Услуги
          </Badge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Банные Программы
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Выберите подходящую программу для полного расслабления и оздоровления
          </SectionDescription>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ServicesGrid>
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
              >
                <ServiceIcon>
                  <service.icon />
                </ServiceIcon>
                
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                
                <ServiceFeatures>
                  {service.features.map((feature, idx) => (
                    <ServiceFeature key={idx}>{feature}</ServiceFeature>
                  ))}
                </ServiceFeatures>
                
                <ServicePrice>
                  {service.price} <span style={{ fontSize: '0.875rem', fontWeight: 400 }}>/ {service.duration}</span>
                </ServicePrice>
                
                <ServiceButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Забронировать
                  <ArrowRightIcon />
                </ServiceButton>
              </ServiceCard>
            ))}
          </ServicesGrid>
        </motion.div>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default BanyaServicesSection; 