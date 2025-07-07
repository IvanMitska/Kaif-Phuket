import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  BuildingOfficeIcon,
  EyeIcon,
  ShieldCheckIcon,
  HeartIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СКАНДИНАВСКАЯ СЕКЦИЯ ОСОБЕННОСТЕЙ - "WHY CHOOSE US"
// =============================================================================

const runeGlow = keyframes`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`;

const vikingPulse = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
  50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(255, 107, 53, 0.5); }
`;

const FeaturesContainer = styled.section`
  padding: clamp(6rem, 12vw, 10rem) 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 30%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 75% 70%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`;

const VikingBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #ff6b35;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ff6b35;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  position: relative;
  
  &::before,
  &::after {
    content: '⚡';
    font-size: 1.2em;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  &::before {
    left: 0.75rem;
  }

  &::after {
    right: 0.75rem;
    transform: translateY(-50%) rotate(180deg);
  }

  span {
    margin: 0 1.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: #f5f5f5;
  margin-bottom: 2rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${runeGlow} 4s ease-in-out infinite;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  color: #cccccc;
  max-width: 800px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.9) 100%);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 20px;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(255, 107, 53, 0.1), transparent);
    animation: spin 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    border-color: #ff6b35;
    transform: translateY(-10px);
    box-shadow: 
      0 25px 50px rgba(0, 0, 0, 0.5),
      0 0 40px rgba(255, 107, 53, 0.3);
  }
  
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  position: relative;
  z-index: 2;
  animation: ${vikingPulse} 4s ease-in-out infinite;
  
  svg {
    width: 2.5rem;
    height: 2.5rem;
    color: #1a1a1a;
  }
`;

const FeatureTitle = styled.h3`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 2;
`;

const FeatureDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 2;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  position: relative;
  z-index: 2;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 1.125rem;
  color: #cccccc;
  
  &::before {
    content: '⚔️';
    font-size: 1.25rem;
    flex-shrink: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

// Декоративные элементы
const VikingOrnament = styled.div`
  position: absolute;
  font-size: 3rem;
  color: rgba(255, 107, 53, 0.1);
  z-index: 1;
  
  &.top-left {
    top: 5%;
    left: 5%;
    transform: rotate(-30deg);
  }
  
  &.top-right {
    top: 5%;
    right: 5%;
    transform: rotate(30deg);
  }
  
  &.bottom-center {
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BanyaFeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 'materials',
      icon: BuildingOfficeIcon,
      title: t('banya.features.materials.title', 'Natural Materials'),
      description: t('banya.features.materials.description', '100% natural finish from Siberian wood species'),
      items: [
        t('banya.features.materials.items.cedar', 'Siberian Cedar'),
        t('banya.features.materials.items.linden', 'Altai Linden'),
        t('banya.features.materials.items.birch', 'Karelian Birch'),
        t('banya.features.materials.items.coating', 'Eco-friendly finishes'),
        t('banya.features.materials.items.aromatherapy', 'Natural aromatherapy')
      ]
    },
    {
      id: 'panoramic',
      icon: EyeIcon,
      title: t('banya.features.panoramic.title', 'Panoramic Design'),
      description: t('banya.features.panoramic.description', 'Unique architecture with tropical jungle views'),
      items: [
        t('banya.features.panoramic.items.area', '150 square meters'),
        t('banya.features.panoramic.items.windows', 'Panoramic windows'),
        t('banya.features.panoramic.items.view', 'Jungle views'),
        t('banya.features.panoramic.items.lighting', 'Natural lighting'),
        t('banya.features.panoramic.items.harmony', 'Harmony with nature')
      ]
    },
    {
      id: 'safety',
      icon: ShieldCheckIcon,
      title: t('banya.features.safety.title', 'Safety'),
      description: t('banya.features.safety.description', 'Compliance with all international safety standards'),
      items: [
        t('banya.features.safety.items.fire', 'Fire safety'),
        t('banya.features.safety.items.ventilation', 'Ventilation system'),
        t('banya.features.safety.items.emergency', 'Emergency lighting'),
        t('banya.features.safety.items.medical', 'Medical assistance'),
        t('banya.features.safety.items.security', '24/7 security')
      ]
    }
  ];

  return (
    <FeaturesContainer>
      {/* Декоративные викингские орнаменты */}
      <VikingOrnament className="top-left">᚛ᚒᚔᚉᚔᚅᚌ᚜</VikingOrnament>
      <VikingOrnament className="top-right">᚛ᚄᚈᚏᚓᚅᚌᚈᚆ᚜</VikingOrnament>
      <VikingOrnament className="bottom-center">᚛ᚆᚑᚅᚑᚏ᚜</VikingOrnament>
      
      <ContentWrapper>
        <SectionHeader>
          <VikingBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>{t('banya.features.badge', 'Best Banya in Phuket')}</span>
          </VikingBadge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Why Choose <span className="highlight">Us</span>
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('banya.features.subtitle', 'Experience the authentic Russian banya with modern comfort and traditional techniques')}
          </SectionDescription>
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <FeatureIcon>
                <feature.icon />
              </FeatureIcon>
              
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              
              <FeatureList>
                {feature.items.map((item, idx) => (
                  <FeatureItem key={idx}>{item}</FeatureItem>
                ))}
              </FeatureList>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </ContentWrapper>
    </FeaturesContainer>
  );
};

export default BanyaFeaturesSection; 