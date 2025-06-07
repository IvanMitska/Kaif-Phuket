import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  padding: 8rem 0 10rem;
  background-color: #ffffff;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(144, 179, 167, 0.3), transparent);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(144, 179, 167, 0.3), transparent);
  }
`;

// Декоративные элементы
const BackgroundShape = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(168, 197, 184, 0.05) 100%);
  filter: blur(60px);
  z-index: 0;
  pointer-events: none;
`;

const TopShape = styled(BackgroundShape)`
  width: 400px;
  height: 400px;
  top: -200px;
  right: 10%;
`;

const BottomShape = styled(BackgroundShape)`
  width: 300px;
  height: 300px;
  bottom: -150px;
  left: 5%;
`;

// Внутренний контейнер
const ContentWrapper = styled.div`
  max-width: 1400px;
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
  margin-bottom: 6rem;
`;

// Маленький текст над заголовком
const Overline = styled(motion.div)`
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #90B3A7;
  margin-bottom: 1.5rem;
  display: inline-flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 40px;
    height: 1px;
    background: #90B3A7;
    margin-right: 1rem;
  }
  
  &::after {
    content: '';
    display: inline-block;
    width: 40px;
    height: 1px;
    background: #90B3A7;
    margin-left: 1rem;
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

// Сетка с преимуществами
const AdvantagesGrid = styled.div`
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
  
  @media (min-width: 1280px) {
    margin: 5rem 0 0;
  }
`;

// Карточка с преимуществом
const AdvantageCard = styled(motion.div)`
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(144, 179, 167, 0.1);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(144, 179, 167, 0.15);
    border-color: rgba(144, 179, 167, 0.2);
    background: rgba(255, 255, 255, 0.95);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

// Числовая инфографика
const Number = styled(motion.div)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(3.5rem, 6vw, 5rem);
  font-weight: 300;
  line-height: 1;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    border-radius: 1px;
  }
`;

// Единица измерения
const Unit = styled.span`
  font-size: 0.4em;
  vertical-align: super;
  margin-left: 0.2rem;
  opacity: 0.8;
`;

// Название преимущества
const AdvantageName = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.375rem;
  font-weight: 500;
  color: #2C3E2D;
  margin: 1.5rem 0 1rem;
  letter-spacing: 0.3px;
`;

// Описание преимущества
const AdvantageDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5A6B5D;
  margin: 0;
  font-weight: 400;
`;

// Обновленные данные согласно официальному сайту
const advantagesData = [
  {
    id: 'gym',
    number: '70',
    unit: '+',
    name: 'Тренажеров',
    description: 'Современное оборудование для эффективных тренировок',
    color: 'fitness'
  },
  {
    id: 'spa',
    number: '50',
    unit: 'м²',
    name: 'Сауна',
    description: 'Самая большая сауна в Таиланде',
    color: 'sauna'
  },
  {
    id: 'fight',
    number: '5',
    unit: '',
    name: 'Кухонь мира',
    description: 'Ресторан с разнообразной кухней',
    color: 'restaurant'
  },
  {
    id: 'pool',
    number: '25',
    unit: 'м',
    name: 'Бассейн',
    description: 'Олимпийский стандарт с подогревом',
    color: 'pool'
  }
];

// Простой и надежный компонент для анимированного подсчета чисел
const AnimatedCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = React.useState(0);
  
  React.useEffect(() => {
    if (isInView) {
      const finalValue = parseInt(value) || 0;
      const duration = 2000; // 2 секунды
      const steps = 60; // количество шагов
      const stepValue = finalValue / steps;
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        if (currentStep >= steps) {
          setDisplayValue(finalValue);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(stepValue * currentStep));
        }
      }, duration / steps);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  
  return <span ref={ref}>{displayValue}</span>;
};

const AdvantagesSection = () => {
  const { t } = useTranslation();
  
  // Анимации при появлении
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
        staggerChildren: 0.15
      }
    }
  };
  
  return (
    <SectionContainer id="advantages">
      <TopShape
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <BottomShape
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
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
            {t('advantages.overline', 'НАШИ ФАЦИЛИТИ')}
          </Overline>
          
          <Title
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {t('advantages.title', 'Пространство для гармонии и саморазвития')}
          </Title>
          
          <Subtitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {t('advantages.subtitle', 'Мы создаем пространство, где жизнь становится ярче. Наша миссия — сделать отдых и заботу о себе не обязанностью, а удовольствием')}
          </Subtitle>
        </SectionHeader>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <AdvantagesGrid>
            {advantagesData.map((advantage, index) => (
              <AdvantageCard
                key={advantage.id}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <Number $color={advantage.color}>
                  <AnimatedCounter value={advantage.number} />
                  {advantage.unit && <Unit>{advantage.unit}</Unit>}
                </Number>
                <AdvantageName $color={advantage.color}>{advantage.name}</AdvantageName>
                <AdvantageDescription>{advantage.description}</AdvantageDescription>
              </AdvantageCard>
            ))}
          </AdvantagesGrid>
        </motion.div>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default AdvantagesSection;
