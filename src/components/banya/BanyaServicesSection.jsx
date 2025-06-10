import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ArrowRightIcon,
  FireIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  CheckIcon,
  ClockIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// МИНИМАЛИСТИЧНАЯ СЕКЦИЯ УСЛУГ
// =============================================================================

const ServicesContainer = styled.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: white;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border: 1px solid #f8f8f8;
  border-radius: 32px;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  
  ${props => props.$highlight && `
    border-color: #90B3A7;
    box-shadow: 0 4px 20px rgba(144, 179, 167, 0.08);
    
    &::before {
      content: 'Популярно';
      position: absolute;
      top: 1rem;
      right: 1rem;
      background: #90B3A7;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      z-index: 3;
    }
  `}
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
    border-color: rgba(144, 179, 167, 0.3);
  }
`;

const ServiceImage = styled.div`
  height: 200px;
  background: ${props => props.$image ? `url(${props.$image})` : props.$gradient};
  background-size: cover;
  background-position: center;
  border-radius: 24px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(144, 179, 167, 0.08) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
`;

const ServiceTitle = styled.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  text-align: left;
`;

const ServiceFeature = styled.li`
  font-size: 0.875rem;
  color: #555;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '✓';
    color: #90B3A7;
    font-weight: bold;
    font-size: 1rem;
  }
`;

const ServicePrice = styled.div`
  font-size: clamp(1.25rem, 2.5vw, 1.5rem);
  font-weight: 700;
  color: #90B3A7;
  margin-bottom: 1.5rem;
  
  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: #666;
  }
`;

const ServiceButton = styled(motion.button)`
  width: 100%;
  padding: 1.25rem 2rem;
  background: #90B3A7;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.4s ease;
  
  &:hover {
    background: #7DA399;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(144, 179, 167, 0.25);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

// Заглушка "Скоро открытие"
const ComingSoonCard = styled(motion.div)`
  background: white;
  border: 1px solid #f8f8f8;
  border-radius: 32px;
  padding: 4rem 3rem;
  text-align: center;
  transition: all 0.4s ease;
  max-width: 600px;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
    border-color: rgba(144, 179, 167, 0.3);
  }
`;

const ComingSoonIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #90B3A7, #A8C5B8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  box-shadow: 0 8px 24px rgba(144, 179, 167, 0.15);
  
  svg {
    width: 2rem;
    height: 2rem;
    color: white;
  }
`;

const ComingSoonTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
`;

const ComingSoonText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const ComingSoonSubtext = styled.p`
  font-size: 1rem;
  color: #90B3A7;
  font-weight: 500;
`;

// =============================================================================
// КОМПОНЕНТ
// =============================================================================

const BanyaServicesSection = () => {
  const { t } = useTranslation();

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
            Банные программы
          </Badge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Выберите свой банный ритуал
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            От панорамной бани с видом на джунгли до приватных VIP-ритуалов с мастером парения
          </SectionDescription>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ComingSoonCard variants={itemVariants}>
            <ComingSoonIcon>
              <ClockIcon />
            </ComingSoonIcon>
            
            <ComingSoonTitle>Скоро открытие</ComingSoonTitle>
            
            <ComingSoonText>
              Мы готовим для вас уникальные банные программы с традиционными русскими ритуалами и современными wellness-процедурами
            </ComingSoonText>
            
            <ComingSoonSubtext>
              Следите за новостями — скоро мы обновим этот раздел!
            </ComingSoonSubtext>
          </ComingSoonCard>
        </motion.div>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default BanyaServicesSection; 