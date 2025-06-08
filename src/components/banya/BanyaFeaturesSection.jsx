import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  HeartIcon,
  ShieldCheckIcon,
  SparklesIcon,
  FireIcon
} from '@heroicons/react/24/solid';

const FeaturesContainer = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, #f7f3ef 0%, #f2e8d8 100%);
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const TextContent = styled.div`
  text-align: left;
  
  @media (max-width: 1023px) {
    text-align: center;
  }
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
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #CD853F;
  }
`;

const Title = styled(motion.h2)`
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

const Description = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #8B6F4A;
  margin-bottom: 3rem;
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(255, 252, 250, 0.8);
  border: 1px solid rgba(205, 133, 63, 0.15);
  border-radius: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
    box-shadow: 0 10px 30px rgba(205, 133, 63, 0.1);
    border-color: rgba(205, 133, 63, 0.25);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(205, 133, 63, 0.15) 0%, rgba(180, 142, 98, 0.2) 100%);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 30px;
    height: 30px;
    color: #CD853F;
  }
`;

const FeatureContent = styled.div`
  flex: 1;
`;

const FeatureTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #8B6F4A;
`;

const ImageContent = styled(motion.div)`
  position: relative;
  
  @media (max-width: 1023px) {
    order: -1;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(139, 69, 19, 0.15);
`;

const MainImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const StatsOverlay = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  right: 2rem;
  background: rgba(255, 252, 250, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #8B4513;
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: #A0522D;
  font-weight: 500;
`;

const features = [
  {
    icon: HeartIcon,
    title: 'Здоровье и оздоровление',
    description: 'Улучшает кровообращение, выводит токсины, укрепляет иммунитет и снимает стресс'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Безопасность и комфорт',
    description: 'Соблюдение всех санитарных норм, современное оборудование, комфортная температура'
  },
  {
    icon: SparklesIcon,
    title: 'Эксклюзивные процедуры',
    description: 'Авторские банные ритуалы, редкие виды веников, уникальные ароматические композиции'
  },
  {
    icon: FireIcon,
    title: 'Аутентичная атмосфера',
    description: 'Традиционная русская баня с соблюдением всех классических канонов и обрядов'
  }
];

const BanyaFeaturesSection = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <FeaturesContainer>
      <ContentWrapper>
        <FeaturesGrid>
          <TextContent>
            <Badge
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SparklesIcon />
              Преимущества
            </Badge>
            
            <Title
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Почему выбирают нашу баню
            </Title>
            
            <Description
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Мы создали уникальное пространство, где традиции русской бани сочетаются с современным комфортом и высоким качеством обслуживания
            </Description>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <FeaturesList>
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                  >
                    <FeatureIcon>
                      <feature.icon />
                    </FeatureIcon>
                    <FeatureContent>
                      <FeatureTitle>{feature.title}</FeatureTitle>
                      <FeatureDescription>{feature.description}</FeatureDescription>
                    </FeatureContent>
                  </FeatureItem>
                ))}
              </FeaturesList>
            </motion.div>
          </TextContent>

          <ImageContent
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ImageContainer>
              <MainImage 
                src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=85"
                alt="Банные процедуры"
              />
              
              <StatsOverlay
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <StatItem>
                  <StatNumber>15+</StatNumber>
                  <StatLabel>Лет опыта</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>5000+</StatNumber>
                  <StatLabel>Довольных гостей</StatLabel>
                </StatItem>
                <StatItem>
                  <StatNumber>100°C</StatNumber>
                  <StatLabel>Идеальный пар</StatLabel>
                </StatItem>
              </StatsOverlay>
            </ImageContainer>
          </ImageContent>
        </FeaturesGrid>
      </ContentWrapper>
    </FeaturesContainer>
  );
};

export default BanyaFeaturesSection; 