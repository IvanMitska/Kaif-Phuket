import React from 'react';
import styled from 'styled-components';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  padding: 7rem 0 9rem;
  background-color: #ffffff; /* Чистый белый фон */
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'}, transparent); /* Градиент из цветов логотипа */
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'}, transparent); /* Градиент из цветов логотипа */
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
  text-align: center;
  margin-bottom: 5rem;
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
  display: inline-flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'};
    margin-right: 1rem;
  }
  
  &::after {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'};
    margin-left: 1rem;
  }
`;

// Основной заголовок
const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  line-height: 1.2;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin: 0 0 1.5rem;
`;

// Подзаголовок
const Subtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1.2rem;
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  max-width: 700px;
  margin: 0 auto;
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
    margin: 5rem -1rem 0;
    padding: 0 1rem;
  }
`;

// Карточка с преимуществом
const AdvantageCard = styled(motion.div)`
  text-align: center;
  padding: 2.5rem 1.5rem;
  border-radius: 16px;
  transition: transform 0.4s ease, box-shadow 0.4s ease, border 0.4s ease;
  background-color: #fff;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.03);
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    transform: translateY(-100%);
    transition: transform 0.4s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 180, 216, 0.15); /* Тень с голубым из логотипа */
    border: 1px solid rgba(255, 105, 180, 0.1); /* Розовый бордер с прозрачностью */
    
    &::before {
      transform: translateY(0);
    }
  }
`;

// Числовая инфографика
const Number = styled(motion.div)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 300;
  line-height: 1;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  }
`;

// Единица измерения
const Unit = styled.span`
  font-size: 0.5em;
  vertical-align: super;
  margin-left: 0.25rem;
`;

// Название преимущества
const AdvantageName = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin: 1.5rem 0 0.75rem;
  letter-spacing: 0.5px;
`;

// Описание преимущества
const AdvantageDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  margin: 0;
  padding: 0 0.5rem;
`;

// Данные о преимуществах
const advantagesData = [
  {
    id: 'gym',
    number: '1500',
    unit: 'м²',
    name: 'Тренажерный зал',
    description: 'Современное оборудование для эффективных тренировок',
    color: 'fitness'
  },
  {
    id: 'spa',
    number: '4',
    unit: '',
    name: 'Зоны отдыха',
    description: 'Сауна, хаммам, джакузи и массажные кабинеты',
    color: 'sauna'
  },
  {
    id: 'fight',
    number: '1',
    unit: '',
    name: 'Бойцовский клуб',
    description: 'Профессиональные тренировки по единоборствам',
    color: 'fitness'
  },
  {
    id: 'pool',
    number: '25',
    unit: 'м',
    name: 'Бассейн',
    description: 'Плавательный центр с профессиональным бассейном',
    color: 'pool'
  }
];

// Компонент для анимированного подсчета чисел
const AnimatedCounter = ({ value, duration = 2, className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = React.useState(0);
  const [animationStarted, setAnimationStarted] = React.useState(false);
  
  React.useEffect(() => {
    if (isInView && !animationStarted) {
      let startTime;
      let frameId;
      const finalValue = parseInt(value);
      
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        setDisplayValue(Math.floor(progress * finalValue));
        
        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        }
      };
      
      setAnimationStarted(true);
      frameId = requestAnimationFrame(step);
      
      return () => cancelAnimationFrame(frameId);
    }
  }, [isInView, value, duration, animationStarted]);
  
  return <span ref={ref} className={className}>{displayValue}</span>;
};

const AdvantagesSection = () => {
  const { t } = useTranslation();
  
  // Анимации при появлении
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <SectionContainer id="advantages">
      <ContentWrapper>
        <SectionHeader>
          <Overline
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
          >
            {t('advantages.overline', 'НАШИ ФАЦИЛИТИ')}
          </Overline>
          
          <Title
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            {t('advantages.title', 'Пространство для гармонии и саморазвития')}
          </Title>
          
          <Subtitle
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            {t('advantages.subtitle', 'Мы создаем пространство, где жизнь становится ярче. Наша миссия — сделать отдых и заботу о себе не обязанностью, а удовольствием')}
          </Subtitle>
        </SectionHeader>
        
        <AdvantagesGrid>
          {advantagesData.map((advantage, index) => (
            <AdvantageCard
              key={advantage.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 + index * 0.1 }}
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
      </ContentWrapper>
    </SectionContainer>
  );
};

export default AdvantagesSection;
