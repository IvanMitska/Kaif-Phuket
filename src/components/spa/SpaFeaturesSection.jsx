import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { SparklesIcon, HeartIcon, UserGroupIcon, StarIcon } from '@heroicons/react/24/outline';

// =============================================================================
// ОПТИМИЗИРОВАННАЯ СЕКЦИЯ ПРЕИМУЩЕСТВ SPA
// =============================================================================

const FeaturesSection = styled.section`
  padding: 8rem 2rem;
  background: linear-gradient(135deg, 
    #f5f3f0 0%,
    #ede9e4 50%,
    #e6e2dc 100%
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 4rem auto 0;
  
  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  padding: 2.5rem 2rem;
  border-radius: 25px;
  box-shadow: 0 10px 30px rgba(144, 179, 167, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(144, 179, 167, 0.15);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.15) 0%, rgba(184, 196, 168, 0.15) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #90B3A7;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, rgba(144, 179, 167, 0.25) 0%, rgba(184, 196, 168, 0.25) 100%);
    transform: scale(1.05);
  }
  
  svg {
    width: 36px;
    height: 36px;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #5A6B5D;
  transition: color 0.3s ease;
  
  ${FeatureCard}:hover & {
    color: #90B3A7;
  }
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #7A8A7D;
  margin-bottom: 0;
  font-weight: 400;
`;

const SpaFeaturesSection = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      id: 1,
      icon: <SparklesIcon />,
      title: 'Премиум качество',
      description: 'Используем только лучшие продукты и оборудование для всех процедур'
    },
    {
      id: 2,
      icon: <HeartIcon />,
      title: 'Полное расслабление',
      description: 'Создаем атмосферу комфорта для вашего расслабления и отдыха'
    },
    {
      id: 3,
      icon: <UserGroupIcon />,
      title: 'Опытные мастера',
      description: 'Специалисты с многолетним опытом и постоянным развитием навыков'
    },
    {
      id: 4,
      icon: <StarIcon />,
      title: 'Индивидуальный подход',
      description: 'Учитываем ваши пожелания и особенности для максимального результата'
    }
  ];

  return (
    <FeaturesSection>
      <SectionContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('spa.features.title', 'Почему выбирают нас')}
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('spa.features.subtitle', 'Мы стремимся предоставить вам исключительный опыт релаксации и ухода')}
        </SectionSubtitle>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <FeatureIcon>
                {feature.icon}
              </FeatureIcon>
              
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </SectionContainer>
    </FeaturesSection>
  );
};

export default SpaFeaturesSection;
