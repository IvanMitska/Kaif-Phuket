import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Импортируем изображение
import philosophyImage from '../../assets/images/philosophy/philosophy-main.jpg';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  padding: 140px 0;
  background-color: #000;
  color: #fff;
  overflow: hidden;
`;

// Текстурный фон
const TextureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.07' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.3;
  z-index: 1;
`;

// Контейнер для содержимого
const ContentContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 5%;
  position: relative;
  z-index: 2;
`;

// Сетка для контента
const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10vw;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`;

// Текстовая колонка
const TextColumn = styled.div`
  max-width: 560px;
  
  @media (max-width: 992px) {
    max-width: 100%;
    order: 2;
  }
`;

// Колонка с изображением
const ImageColumn = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
  }
`;

// Надзаголовок
const Tagline = styled(motion.div)`
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 10px;
  color: #C9E7D8;
  display: inline-block;
`;

// Заголовок
const Heading = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  line-height: 1.1;
  margin-bottom: 40px;
  color: #fff;
  
  strong {
    color: #C9E7D8;
  }
`;

// Описание
const Description = styled(motion.div)`
  font-size: 1.15rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 40px;
  
  p {
    margin-bottom: 20px;
  }
`;

// Цитата
const Quote = styled(motion.blockquote)`
  font-size: 1.2rem;
  font-style: italic;
  line-height: 1.6;
  color: #fff;
  position: relative;
  padding-left: 30px;
  border-left: 2px solid #C9E7D8;
  margin: 40px 0;
  max-width: 90%;
`;

// Контейнер для изображения
const ImageContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 100%);
    z-index: 1;
    pointer-events: none;
  }
`;

// Само изображение
const Image = styled(motion.img)`
  width: 100%;
  height: auto;
  display: block;
  filter: grayscale(20%) contrast(110%);
  transition: all 0.8s ease;
  
  &:hover {
    filter: grayscale(0%) contrast(100%);
  }
`;

// Ключевые преимущества
const FeatureList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px 40px;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

// Отдельный элемент списка
const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.8);
  
  &:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 15px;
    margin-top: 10px;
    background-color: #C9E7D8;
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
  
  return (
    <SectionContainer id="philosophy">
      <TextureOverlay />
      <ContentContainer>
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
            
            <Heading
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              Пространство для <strong>гармонии</strong> и саморазвития
            </Heading>
            
            <Description
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <p>Мы создаем пространство, где жизнь становится ярче. Наша миссия – сделать отдых и заботу о себе не обязанностью, а удовольствием. KAIF – это место, где вы восстанавливаете силы, заряжаетесь энергией и наслаждаетесь каждым моментом.</p>
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
