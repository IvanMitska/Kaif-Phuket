import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Импортируем изображение
import philosophyImage from '../../assets/images/philosophy/philosophy-main.jpg';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f8f5f0 0%, #f0e9e2 100%);
  overflow: hidden;
`;

// Контейнер для содержимого
const ContentContainer = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 40px;
  position: relative;
  z-index: 1;
  padding: 80px 0;
  
  @media (max-width: 768px) {
    margin: 0 20px;
    padding: 60px 0;
  }
`;

// Надзаголовок
const Tagline = styled(motion.div)`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 30px;
  color: #2C614F;
  display: inline-block;
  position: relative;
  padding-bottom: 10px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: #2C614F;
  }
`;

// Заголовок
const Heading = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 40px;
  color: #2C3E2D;
  
  strong {
    color: #2C614F;
  }
`;

// Описание
const Description = styled(motion.div)`
  font-size: 1.15rem;
  line-height: 1.8;
  color: #5A6B5D;
  margin-bottom: 40px;
  
  p {
    margin-bottom: 20px;
    position: relative;
  }
  
  p:first-of-type::first-letter {
    font-size: 5rem;
    line-height: 0.8;
    padding-top: 4px;
    margin-right: 8px;
    float: left;
    color: #2C614F;
    font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  }
`;

// Цитата
const Quote = styled(motion.div)`
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.6;
  color: #2C3E2D;
  position: relative;
  padding: 40px;
  margin: 0;
  background-color: rgba(201, 231, 216, 0.2);
  border-radius: 4px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  
  &::before {
    content: '\201C';
    position: absolute;
    top: 10px;
    left: 20px;
    font-size: 5rem;
    line-height: 1;
    color: rgba(44, 97, 79, 0.2);
    font-family: Georgia, serif;
  }
  
  &::after {
    content: '\201D';
    position: absolute;
    bottom: -20px;
    right: 20px;
    font-size: 5rem;
    line-height: 1;
    color: rgba(44, 97, 79, 0.2);
    font-family: Georgia, serif;
  }
`;

// Контейнер для изображения
const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 75%;
  overflow: hidden;
  box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  transform: perspective(1000px) rotateY(-5deg);
  transition: transform 0.8s ease;
  
  &:hover {
    transform: perspective(1000px) rotateY(0deg);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(201, 231, 216, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
    pointer-events: none;
    z-index: 2;
  }
  
  @media (max-width: 992px) {
    transform: perspective(1000px) rotateY(0deg);
    padding-bottom: 66%;
  }
`;

// Изображение
const Image = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(105%) brightness(1.03);
  transition: transform 1.5s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const PhilosophySection = () => {
  const { t } = useTranslation();
  
  // Варианты анимаций
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  // Определяем сетку контента
  const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 5vw;
    align-items: center;
    width: 100%;
    
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 60px;
    }
  `;
  
  // Колонки
  const TextColumn = styled.div`
    @media (max-width: 992px) {
      order: 2;
    }
  `;
  
  const ImageColumn = styled.div`
    position: relative;
    
    @media (max-width: 992px) {
      order: 1;
    }
  `;
  
  // Список особенностей
  const FeatureList = styled(motion.ul)`
    list-style: none;
    padding: 0;
    margin: 40px 0;
  `;
  
  const FeatureItem = styled(motion.li)`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    color: #5A6B5D;
    
    &:before {
      content: ''; 
      display: inline-block;
      width: 8px;
      height: 8px;
      margin-right: 15px;
      background-color: #2C614F;
      border-radius: 50%;
    }
  `;
  
  return (
    <SectionContainer id="philosophy">
      <ContentContainer>
        <Heading
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeIn}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          Пространство для <strong>гармонии</strong> и саморазвития
        </Heading>
        
        <ContentGrid>
          <TextColumn>
            <Tagline
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              Наша Философия
            </Tagline>
            
            <Description
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <p>Мы создаем пространство, где жизнь становится ярче. Наша миссия – сделать отдых и заботу о себе не обязанностью, а удовольствием. KAIF – это место, где вы восстанавливаете силы, заряжаетесь энергией и наслаждаетесь каждым моментом.</p>
              <p>Здесь всё устроено так, чтобы вам хотелось возвращаться: тренировки, которые вдохновляют, отдых, который наполняет, и атмосфера, которая дарит настоящий кайф. Мы верим, что гармония – это не роскошь, а необходимость, и делаем её доступной для вас.</p>
            </Description>
            
            <FeatureList
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerChildren}
            >
              <FeatureItem variants={child}>Вдохновляющие тренировки</FeatureItem>
              <FeatureItem variants={child}>Премиальный сервис</FeatureItem>
              <FeatureItem variants={child}>Комплексный подход</FeatureItem>
              <FeatureItem variants={child}>Атмосфера настоящего кайфа</FeatureItem>
            </FeatureList>
            
            <Quote
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeIn}
            >
              "Здоровье – это не просто отсутствие болезней, а состояние полного физического, душевного и социального благополучия"
            </Quote>
          </TextColumn>
          
          <ImageColumn>
            <ImageContainer
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image 
                src={philosophyImage} 
                alt="KAIF - пространство для гармонии и саморазвития"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.5 }}
              />
            </ImageContainer>
          </ImageColumn>
        </ContentGrid>
      </ContentContainer>
    </SectionContainer>
  );
};

export default PhilosophySection;
