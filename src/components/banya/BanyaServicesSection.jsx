import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SparksEffect from './SparksEffect';

// =============================================================================
// СОВРЕМЕННАЯ СЕКЦИЯ УСЛУГ БАНИ
// =============================================================================

const ServicesContainer = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  margin-top: -1px;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
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
  margin-bottom: clamp(3rem, 6vw, 5rem);
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  background: linear-gradient(135deg, rgba(255, 214, 98, 0.9) 0%, rgba(255, 107, 53, 0.9) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const RitualsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 1.5rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1201px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }
`;

const RitualCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 340px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 107, 53, 0.06) 0%,
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow:
      0 30px 60px rgba(0, 0, 0, 0.4),
      0 0 40px rgba(255, 107, 53, 0.05);

    &::after {
      opacity: 1;
    }

    .ritual-title {
      background-size: 200% 100%;
      background-position: 100% 0;
    }
  }

  @media (max-width: 768px) {
    padding: 2rem;
    min-height: auto;
    border-radius: 20px;
  }
`;

const AccentLine = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,
    transparent 0%,
    #ff6b35 25%,
    #ffd662 50%,
    #ff6b35 75%,
    transparent 100%
  );
  opacity: 0.8;
`;

const RitualHeader = styled.div`
  flex: 1;
  margin-bottom: 1.5rem;
`;

const RitualTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 600;
  background: linear-gradient(135deg, #ffffff 0%, #ffd662 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 100% 100%;
  background-position: 0 0;
  margin: 0 0 0.5rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    font-size: 1.625rem;
  }
`;

const RitualSubtitle = styled.div`
  color: rgba(255, 214, 98, 0.8);
  font-size: 0.875rem;
  margin-bottom: 1.25rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: inline-block;
  padding: 4px 12px;
  background: rgba(255, 107, 53, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(255, 107, 53, 0.2);
`;

const RitualDescription = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  line-height: 1.7;
  font-weight: 400;
  letter-spacing: 0.02em;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.6;
  }
`;

const RitualDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-top: 2rem;
  margin-top: auto;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

const RitualDuration = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DurationLabel = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
`;

const DurationValue = styled.span`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  font-weight: 500;
`;

const RitualPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.25rem;
  transition: transform 0.3s ease;
`;

const PriceLabel = styled.span`
  color: rgba(255, 255, 255, 0.4);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
`;

const PriceValue = styled.span`
  font-size: 1.625rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ffd662 0%, #ff6b35 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.02em;
  white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 1.375rem;
  }
`;

const BanyaServicesSection = () => {
  const { t, i18n, ready } = useTranslation();
  const isRussian = i18n.language === 'ru';

  // Fallback data in case translations fail to load
  const fallbackRituals = [
    {
      id: 'intro',
      title: 'Introductory Steaming',
      subtitle: 'LIGHT STEAM',
      duration: '5-8 min',
      price: '1,200 THB',
      description: 'Contact warming of back and legs with birch brooms. Light steam without turning over'
    },
    {
      id: 'classic',
      title: 'Classic Steaming',
      subtitle: 'MEDIUM STEAM',
      duration: '10-15 min',
      price: '1,800 THB',
      description: 'Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam'
    },
    {
      id: 'artesian',
      title: 'Artesian',
      subtitle: 'CONTRAST STEAMING',
      duration: '15-20 min',
      price: '2,500 THB',
      description: 'Classic steaming with oak brooms with contrast of cool mineral water. Bubble contrast sensations'
    }
  ];

  const getRituals = () => {
    if (!ready) return fallbackRituals.slice(0, 3); // Show fewer cards while loading

    try {
      return [
        {
          id: 'intro',
          title: t('banya.services.rituals.intro.title', 'Introductory Steaming'),
          subtitle: t('banya.services.rituals.intro.subtitle', 'LIGHT STEAM'),
          duration: t('banya.services.rituals.intro.duration', '5-8 min'),
          price: t('banya.services.rituals.intro.price', '1,200 THB'),
          description: t('banya.services.rituals.intro.description', 'Contact warming of back and legs with birch brooms. Light steam without turning over')
        },
        {
          id: 'classic',
          title: t('banya.services.rituals.classic.title', 'Classic Steaming'),
          subtitle: t('banya.services.rituals.classic.subtitle', 'MEDIUM STEAM'),
          duration: t('banya.services.rituals.classic.duration', '10-15 min'),
          price: t('banya.services.rituals.classic.price', '1,800 THB'),
          description: t('banya.services.rituals.classic.description', 'Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam')
        },
        {
          id: 'artesian',
          title: t('banya.services.rituals.artesian.title', 'Artesian'),
          subtitle: t('banya.services.rituals.artesian.subtitle', 'CONTRAST STEAMING'),
          duration: t('banya.services.rituals.artesian.duration', '15-20 min'),
          price: t('banya.services.rituals.artesian.price', '2,500 THB'),
          description: t('banya.services.rituals.artesian.description', 'Classic steaming with oak brooms with contrast of cool mineral water. Bubble contrast sensations')
        },
        {
          id: 'gravity',
          title: t('banya.services.rituals.gravity.title', 'Gravity'),
          subtitle: t('banya.services.rituals.gravity.subtitle', 'WEIGHTLESS STEAMING'),
          duration: t('banya.services.rituals.gravity.duration', '15-20 min'),
          price: t('banya.services.rituals.gravity.price', '2,500 THB'),
          description: t('banya.services.rituals.gravity.description', 'Classic steaming with subsequent floating in a warm pool. Complete relaxation and weightlessness')
        },
        {
          id: 'salt_fire',
          title: t('banya.services.rituals.salt_fire.title', 'Fire Start'),
          subtitle: t('banya.services.rituals.salt_fire.subtitle', 'SALT STEAMING'),
          duration: t('banya.services.rituals.salt_fire.duration', '15-20 min'),
          price: t('banya.services.rituals.salt_fire.price', '2,500 THB'),
          description: t('banya.services.rituals.salt_fire.description', 'Classic steaming with sea salt application and warming through a sheet. Salt cave effect')
        },
        {
          id: 'warrior_path',
          title: t('banya.services.rituals.warrior_path.title', "Warrior's Path"),
          subtitle: t('banya.services.rituals.warrior_path.subtitle', 'CONTRAST STEAMING'),
          duration: t('banya.services.rituals.warrior_path.duration', '20-25 min'),
          price: t('banya.services.rituals.warrior_path.price', '3,500 THB'),
          description: t('banya.services.rituals.warrior_path.description', 'Steaming in two sessions with cold water dousing between them. Back warming and kvass refreshment')
        },
        {
          id: 'stalwar',
          title: t('banya.services.rituals.stalwar.title', 'Stalwar'),
          subtitle: t('banya.services.rituals.stalwar.subtitle', 'STEEL STEAMING'),
          duration: t('banya.services.rituals.stalwar.duration', '25-30 min'),
          price: t('banya.services.rituals.stalwar.price', '4,000 THB'),
          description: t('banya.services.rituals.stalwar.description', 'Intensive steaming with oak and birch brooms. Maximum heat and contrast procedures')
        },
        {
          id: 'honey',
          title: t('banya.services.rituals.honey.title', 'Honey Ritual'),
          subtitle: t('banya.services.rituals.honey.subtitle', 'WELLNESS STEAMING'),
          duration: t('banya.services.rituals.honey.duration', '30-35 min'),
          price: t('banya.services.rituals.honey.price', '4,500 THB'),
          description: t('banya.services.rituals.honey.description', 'Steaming with honey body wrap and herbal aromatherapy. Deep skin nourishment and relaxation')
        },
        {
          id: 'royal',
          title: t('banya.services.rituals.royal.title', 'Royal Treatment'),
          subtitle: t('banya.services.rituals.royal.subtitle', 'PREMIUM STEAMING'),
          duration: t('banya.services.rituals.royal.duration', '40-45 min'),
          price: t('banya.services.rituals.royal.price', '6,000 THB'),
          description: t('banya.services.rituals.royal.description', 'Full luxury banya experience with premium oils, contrast treatments, and personal service')
        },
        {
          id: 'valhalla',
          title: t('banya.services.rituals.valhalla.title', 'Valhalla'),
          subtitle: t('banya.services.rituals.valhalla.subtitle', 'ULTIMATE STEAMING'),
          duration: t('banya.services.rituals.valhalla.duration', '50-60 min'),
          price: t('banya.services.rituals.valhalla.price', '8,000 THB'),
          description: t('banya.services.rituals.valhalla.description', 'Ultimate warrior experience with multiple steaming sessions, ice treatments, and ceremonial completion')
        }
      ];
    } catch (error) {
      console.error('Translation error:', error);
      return fallbackRituals;
    }
  };

  const rituals = getRituals();

  return (
    <ServicesContainer>
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isRussian ? 'Индивидуальные парения' : 'Individual Steam Sessions'}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {isRussian
              ? 'Выберите свой идеальный банный ритуал'
              : 'Choose your perfect banya ritual'}
          </SectionSubtitle>
        </SectionHeader>

        <RitualsGrid>
          {rituals.map((ritual, index) => (
            <RitualCard
              key={`${ritual.id}-${ready}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: "easeOut"
              }}
            >
              <AccentLine />

              <RitualHeader>
                <RitualTitle className="ritual-title">
                  {ritual.title || 'Loading...'}
                </RitualTitle>
                <RitualSubtitle>
                  {ritual.subtitle || 'STEAM'}
                </RitualSubtitle>
                <RitualDescription>
                  {ritual.description || 'Loading description...'}
                </RitualDescription>
              </RitualHeader>

              <RitualDetails>
                <RitualDuration>
                  <DurationLabel>{isRussian ? 'Время' : 'Duration'}</DurationLabel>
                  <DurationValue>{ritual.duration || '0 min'}</DurationValue>
                </RitualDuration>
                <RitualPrice>
                  <PriceLabel>{isRussian ? 'Стоимость' : 'Price'}</PriceLabel>
                  <PriceValue>{ritual.price || '0 THB'}</PriceValue>
                </RitualPrice>
              </RitualDetails>
            </RitualCard>
          ))}
        </RitualsGrid>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default BanyaServicesSection;