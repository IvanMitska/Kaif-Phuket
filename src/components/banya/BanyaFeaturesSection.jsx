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
  padding: clamp(5rem, 10vw, 8rem) 0;
  background:
    linear-gradient(180deg, #0a0a0a 0%, #0f0d0a 100%),
    radial-gradient(ellipse at 50% 50%, rgba(255, 107, 53, 0.02) 0%, transparent 60%);
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
      radial-gradient(circle at 10% 20%, rgba(255, 214, 98, 0.04) 0%, transparent 40%),
      radial-gradient(circle at 90% 80%, rgba(255, 107, 53, 0.04) 0%, transparent 40%);
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
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background:
    linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, transparent 100%),
    rgba(20, 20, 20, 0.3);
  border: 1px solid rgba(255, 214, 98, 0.2);
  border-radius: 30px;
  font-size: 0.7rem;
  font-weight: 500;
  color: #ffd662;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  font-weight: 700;
  color: transparent;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f0f0f0 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 1.5rem;
  line-height: 1.05;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.02em;

  .highlight {
    background: linear-gradient(
      135deg,
      #ff6b35 0%,
      #ffd662 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: clamp(1rem, 2.25vw, 1.375rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.85);
  max-width: 700px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: 0.01em;
  opacity: 0.9;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
  margin-top: clamp(3rem, 6vw, 5rem);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background:
    linear-gradient(135deg, rgba(20, 18, 15, 0.3) 0%, rgba(10, 10, 10, 0.4) 100%),
    radial-gradient(ellipse at top left, rgba(255, 107, 53, 0.02) 0%, transparent 60%);
  border: 1px solid rgba(255, 214, 98, 0.1);
  border-radius: 32px;
  padding: 3rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px) saturate(1.1);
  box-shadow:
    0 10px 40px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.02);
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 214, 98, 0.4),
      transparent
    );
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    border-color: rgba(255, 214, 98, 0.2);
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 20px 60px rgba(0, 0, 0, 0.35),
      0 10px 25px rgba(255, 107, 53, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.04);
    background:
      linear-gradient(135deg, rgba(255, 107, 53, 0.04) 0%, rgba(10, 10, 10, 0.4) 100%),
      radial-gradient(ellipse at top left, rgba(255, 107, 53, 0.03) 0%, transparent 60%);
  }
`;

const FeatureIcon = styled.div`
  width: 76px;
  height: 76px;
  background:
    linear-gradient(135deg, rgba(255, 107, 53, 0.85) 0%, rgba(255, 140, 66, 0.85) 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  position: relative;
  z-index: 2;
  box-shadow:
    0 8px 24px rgba(255, 107, 53, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.15);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);

  ${FeatureCard}:hover & {
    transform: rotate(-5deg) scale(1.1);
    box-shadow:
      0 12px 32px rgba(255, 107, 53, 0.35),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  svg {
    width: 2.35rem;
    height: 2.35rem;
    color: #ffffff;
  }
`;

const FeatureTitle = styled.h3`
  font-size: clamp(1.75rem, 3vw, 2.25rem);
  font-weight: 600;
  color: transparent;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #e8e8e8 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 1.25rem;
  position: relative;
  z-index: 2;
  letter-spacing: -0.01em;
  line-height: 1.2;
`;

const FeatureDescription = styled.p`
  font-size: clamp(1rem, 1.75vw, 1.125rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.85);
  margin-bottom: 1.75rem;
  position: relative;
  z-index: 2;
  font-weight: 400;
  letter-spacing: 0.01em;
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
  align-items: flex-start;
  gap: 0.875rem;
  margin-bottom: 1rem;
  font-size: clamp(0.975rem, 1.6vw, 1.05rem);
  color: rgba(204, 204, 204, 0.85);
  line-height: 1.6;
  transition: all 0.3s ease;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    background: linear-gradient(135deg, #ff6b35 0%, #ffd662 100%);
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 0.4rem;
    transition: all 0.3s ease;
  }

  &:hover {
    color: rgba(255, 214, 98, 0.9);
    transform: translateX(4px);

    &::before {
      width: 8px;
      height: 8px;
      box-shadow: 0 0 10px rgba(255, 107, 53, 0.5);
    }
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
            <span dangerouslySetInnerHTML={{ __html: t('banya.features.title', 'Why Choose <span className="highlight">Us</span>') }} />
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