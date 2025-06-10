import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ShieldCheckIcon,
  FireIcon,
  SparklesIcon,
  AcademicCapIcon,
  HeartIcon,
  StarIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// МИНИМАЛИСТИЧНАЯ СЕКЦИЯ ПРЕИМУЩЕСТВ
// =============================================================================

const FeaturesContainer = styled.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: #fafafa;
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(230, 126, 34, 0.08);
  border: 1px solid rgba(230, 126, 34, 0.15);
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #90B3A7;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const SectionDescription = styled(motion.p)`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: white;
  border: 1px solid #f8f8f8;
  border-radius: 32px;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
    border-color: rgba(144, 179, 167, 0.3);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #90B3A7, #A8C5B8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 8px 24px rgba(144, 179, 167, 0.15);
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: white;
  }
`;

const FeatureTitle = styled.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FeatureItem = styled.li`
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

// =============================================================================
// КОМПОНЕНТ
// =============================================================================

const BanyaFeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 'woodson',
      icon: FireIcon,
      title: 'Печи Woodson',
      description: 'Финские печи премиум-класса для идеального пара',
      items: [
        'Производство Финляндия',
        'Равномерное распределение тепла',
        'Экологически чистое топление',
        'Быстрый прогрев до 85°C',
        'Долговечность и надежность'
      ]
    },
    {
      id: 'materials',
      icon: SparklesIcon,
      title: 'Натуральные материалы',
      description: '100% натуральная отделка из сибирских пород дерева',
      items: [
        'Сибирский кедр',
        'Алтайская липа',
        'Карельская береза',
        'Экологически чистые покрытия',
        'Природная ароматерапия'
      ]
    },
    {
      id: 'panoramic',
      icon: StarIcon,
      title: 'Панорамный дизайн',
      description: 'Уникальная архитектура с видом на тропические джунгли',
      items: [
        '150 квадратных метров',
        'Панорамные окна',
        'Вид на джунгли',
        'Естественное освещение',
        'Гармония с природой'
      ]
    },
    {
      id: 'safety',
      icon: ShieldCheckIcon,
      title: 'Безопасность',
      description: 'Соблюдение всех международных стандартов безопасности',
      items: [
        'Пожарная безопасность',
        'Система вентиляции',
        'Аварийное освещение',
        'Медицинская помощь',
        'Круглосуточное дежурство'
      ]
    },
    {
      id: 'wellness',
      icon: HeartIcon,
      title: 'Wellness-программы',
      description: 'Авторские оздоровительные программы от мастеров',
      items: [
        'Русский банный ритуал',
        'Финская сауна',
        'Ароматерапия',
        'Массаж в парной',
        'Травяные настои'
      ]
    },
    {
      id: 'service',
      icon: AcademicCapIcon,
      title: 'Профессионализм',
      description: 'Команда опытных банщиков и мастеров парения',
      items: [
        'Сертифицированные банщики',
        'Русские традиции',
        'Индивидуальный подход',
        'Консультации по здоровью',
        '24/7 обслуживание'
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <FeaturesContainer>
      <ContentWrapper>
        <SectionHeader>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <StarIcon />
            Наши преимущества
          </Badge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Почему выбирают нас
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Единственная панорамная русская баня на Пхукете с аутентичными традициями и современными технологиями
          </SectionDescription>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FeaturesGrid>
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <FeatureIcon>
                  <feature.icon />
                </FeatureIcon>
                
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
                
                <FeatureList>
                  {feature.items.map((item, index) => (
                    <FeatureItem key={index}>{item}</FeatureItem>
                  ))}
                </FeatureList>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </motion.div>
      </ContentWrapper>
    </FeaturesContainer>
  );
};

export default BanyaFeaturesSection; 