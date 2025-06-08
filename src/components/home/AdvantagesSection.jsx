import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #fafafa 0%, #ffffff 100%);
  overflow: hidden;
`;

// Декоративные элементы
const FloatingShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(168, 197, 184, 0.04) 100%);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
`;

// Внутренний контейнер
const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// Заголовок секции
const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

// Маленький текст над заголовком
const Overline = styled(motion.div)`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #90B3A7;
  margin-bottom: 1.5rem;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40px;
    height: 1px;
    background: #90B3A7;
  }
  
  &::before {
    left: -60px;
  }
  
  &::after {
    right: -60px;
  }
`;

// Основной заголовок
const Title = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 3.8rem);
  font-weight: 400;
  line-height: 1.2;
  color: #2C3E2D;
  margin: 0 0 2rem;
  letter-spacing: -0.02em;
`;

// Подзаголовок
const Subtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.125rem;
  line-height: 1.7;
  color: #5A6B5D;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
`;

// Сетка с карточками
const FacilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

// Элегантная карточка
const FacilityCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem 2rem 2.5rem;
  text-align: center;
  border: 1px solid ${props => props.$borderColor};
  transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.$accent};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.$accent};
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 30px 60px rgba(144, 179, 167, 0.15);
    border-color: ${props => props.$accent};
    
    &::before {
      transform: scaleX(1);
    }
    
    &::after {
      opacity: 0.02;
    }
  }
`;

// Емодзи как декоративный элемент
const FacilityEmoji = styled.div`
  font-size: 3rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
  transition: transform 0.3s ease;
  
  ${FacilityCard}:hover & {
    transform: scale(1.1);
  }
`;

// Статистика
const FacilityStats = styled.div`
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

const StatNumber = styled(motion.span)`
  font-family: 'Playfair Display', serif;
  font-size: 3rem;
  font-weight: 400;
  color: ${props => props.$color};
  letter-spacing: -0.02em;
  display: block;
  line-height: 1;
`;

const StatUnit = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.$color};
  opacity: 0.8;
  margin-left: 0.25rem;
`;

// Название фацилити
const FacilityName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: 500;
  color: #2C3E2D;
  margin: 1.5rem 0 1rem;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 2;
`;

// Описание фацилити
const FacilityDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5A6B5D;
  margin: 0;
  font-weight: 400;
  position: relative;
  z-index: 2;
`;

// Данные с фирменными цветами KAIF
const facilitiesData = [
  {
    id: 'gym',
    emoji: '💪',
    number: '70',
    unit: '+',
    name: 'Тренажеров',
    description: 'Современное оборудование для эффективных тренировок',
    accent: 'linear-gradient(135deg, #E8734A 0%, #F28A5F 100%)',
    color: '#E8734A',
    borderColor: 'rgba(232, 115, 74, 0.15)'
  },
  {
    id: 'banya',
    emoji: '🔥',
    number: '150',
    unit: 'm2',
    name: 'Русская баня',
    description: 'Самая большая панорамная русская парная на Пхукете',
    accent: 'linear-gradient(135deg, #8B4513 0%, #CD853F 100%)',
    color: '#8B4513',
    borderColor: 'rgba(139, 69, 19, 0.15)'
  },
  {
    id: 'restaurant',
    emoji: '🍽️',
    number: '200',
    unit: '',
    name: 'Мест в ресторане',
    description: 'Ресторан на открытом воздухе',
    accent: 'linear-gradient(135deg, #D4A574 0%, #E6B885 100%)',
    color: '#D4A574',
    borderColor: 'rgba(212, 165, 116, 0.15)'
  },
  {
    id: 'pool',
    emoji: '🏊‍♂️',
    number: '25',
    unit: 'м',
    name: 'Бассейн',
    description: 'Бассейн 25 метров',
    accent: 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)',
    color: '#90B3A7',
    borderColor: 'rgba(144, 179, 167, 0.15)'
  }
];

// Компонент для анимированного счетчика
const AnimatedCounter = ({ value, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = React.useState('0');
  
  React.useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
        
        if (numericValue === 0) {
          setDisplayValue(value);
          return;
        }
        
        const duration = 2000;
        const steps = 60;
        const stepValue = numericValue / steps;
        let currentStep = 0;
        
        const counter = setInterval(() => {
          currentStep++;
          if (currentStep >= steps) {
            setDisplayValue(value);
            clearInterval(counter);
          } else {
            const currentValue = Math.floor(stepValue * currentStep);
            setDisplayValue(value.replace(/\d+/, currentValue.toString()));
          }
        }, duration / steps);
        
        return () => clearInterval(counter);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);
  
  return <span ref={ref}>{displayValue}</span>;
};

const AdvantagesSection = () => {
  const { t } = useTranslation();
  
  // Анимации
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  return (
    <SectionContainer id="facilities">
      {/* Декоративные элементы */}
      <FloatingShape
        style={{ width: '400px', height: '400px', top: '5%', right: '0%' }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <FloatingShape
        style={{ width: '300px', height: '300px', bottom: '5%', left: '0%' }}
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 4
        }}
      />
      
      <ContentWrapper>
        <SectionHeader>
          <Overline
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            {t('facilities.overline', 'НАШИ ФАЦИЛИТИ')}
          </Overline>
          
          <Title
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {t('facilities.title', 'Пространство для гармонии и саморазвития')}
          </Title>
          
          <Subtitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {t('facilities.subtitle', 'Мы создаем пространство, где жизнь становится ярче. Наша миссия — сделать отдых и заботу о себе не обязанностью, а удовольствием')}
          </Subtitle>
        </SectionHeader>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <FacilitiesGrid>
            {facilitiesData.map((facility, index) => (
              <FacilityCard
                key={facility.id}
                variants={fadeInUp}
                $accent={facility.accent}
                $borderColor={facility.borderColor}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <FacilityEmoji>{facility.emoji}</FacilityEmoji>
                
                <FacilityStats>
                  <StatNumber $color={facility.color}>
                    <AnimatedCounter value={facility.number} delay={index * 300} />
                    {facility.unit && <StatUnit $color={facility.color}>{facility.unit}</StatUnit>}
                  </StatNumber>
                </FacilityStats>
                
                <FacilityName>{facility.name}</FacilityName>
                <FacilityDescription>{facility.description}</FacilityDescription>
              </FacilityCard>
            ))}
          </FacilitiesGrid>
        </motion.div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default AdvantagesSection;
