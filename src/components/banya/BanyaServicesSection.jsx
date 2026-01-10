import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// =============================================================================
// СОВРЕМЕННАЯ СЕКЦИЯ УСЛУГ БАНИ
// =============================================================================

const ServicesContainer = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  margin-top: -1px;
  background: #0a0a0a;
  position: relative;
  margin-bottom: 0;

  /* Оптимизация для мобильных */
  @media (max-width: 768px) {
    overflow-x: hidden;
    will-change: auto;
  }

  @media (min-width: 769px) {
    overflow: hidden;
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
  margin-bottom: clamp(3rem, 6vw, 5rem);
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.1;
`;

const SectionSubtitle = styled.p`
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

const RitualCard = styled.div`
  background: #151515;
  border-radius: 24px;
  padding: 2.5rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.05);

  @media (hover: hover) and (pointer: fine) {
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
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
      duration: '7-10 min',
      price: '1,000 THB',
      description: 'A short and sensitive ritual with gentle warming of back and legs'
    },
    {
      id: 'lady',
      title: "Lady's Steaming",
      subtitle: 'LOW-TEMPERATURE',
      duration: '10-15 min',
      price: '1,500 THB',
      description: 'Special low-temperature technique with deep local warming'
    },
    {
      id: 'classic',
      title: 'Classic Steaming',
      subtitle: 'MEDIUM STEAM',
      duration: '10-15 min',
      price: '1,800 THB',
      description: 'Steaming with oak brooms in one session. Thorough whole body steaming with aromatic steam'
    }
  ];

  const getRituals = () => {
    if (!ready) return fallbackRituals.slice(0, 3); // Show fewer cards while loading

    try {
      return [
        {
          id: 'intro',
          title: t('banya.services.rituals.intro.title', "Children's Introductory Steaming"),
          subtitle: t('banya.services.rituals.intro.subtitle', 'LIGHT STEAM'),
          duration: t('banya.services.rituals.intro.duration', '7-10 min'),
          price: t('banya.services.rituals.intro.price', '1,000 THB'),
          description: t('banya.services.rituals.intro.description', 'A short and sensitive ritual with gentle warming of back and legs')
        },
        {
          id: 'lady',
          title: t('banya.services.rituals.lady.title', "Lady's Steaming"),
          subtitle: t('banya.services.rituals.lady.subtitle', 'LOW-TEMPERATURE'),
          duration: t('banya.services.rituals.lady.duration', '10-15 min'),
          price: t('banya.services.rituals.lady.price', '1,500 THB'),
          description: t('banya.services.rituals.lady.description', 'Special low-temperature technique with deep local warming')
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
          price: t('banya.services.rituals.artesian.price', '2,250 THB'),
          description: t('banya.services.rituals.artesian.description', 'Intense warming with oak brooms enhanced by the contrast of cool mineral water')
        },
        {
          id: 'gravity',
          title: t('banya.services.rituals.gravity.title', 'Gravity'),
          subtitle: t('banya.services.rituals.gravity.subtitle', 'WEIGHTLESS STEAMING'),
          duration: t('banya.services.rituals.gravity.duration', '15-20 min'),
          price: t('banya.services.rituals.gravity.price', '2,250 THB'),
          description: t('banya.services.rituals.gravity.description', 'Intense warming with transition to warm pool. Feeling of weightlessness')
        },
        {
          id: 'salt_fire',
          title: t('banya.services.rituals.salt_fire.title', 'The Fire Starter'),
          subtitle: t('banya.services.rituals.salt_fire.subtitle', 'SALT STEAMING'),
          duration: t('banya.services.rituals.salt_fire.duration', '15-20 min'),
          price: t('banya.services.rituals.salt_fire.price', '2,250 THB'),
          description: t('banya.services.rituals.salt_fire.description', 'Intense warming with sea salt application and warming through a sheet. Salt cave effect')
        },
        {
          id: 'four_hands',
          title: t('banya.services.rituals.four_hands.title', 'Four-Hand Steaming'),
          subtitle: t('banya.services.rituals.four_hands.subtitle', 'SYNCHRONIZED'),
          duration: t('banya.services.rituals.four_hands.duration', '15-20 min'),
          price: t('banya.services.rituals.four_hands.price', '2,500 THB'),
          description: t('banya.services.rituals.four_hands.description', 'Two steam masters work in perfect synchronization')
        },
        {
          id: 'sports',
          title: t('banya.services.rituals.sports.title', 'Sports Steaming'),
          subtitle: t('banya.services.rituals.sports.subtitle', 'WITH MASSAGE'),
          duration: t('banya.services.rituals.sports.duration', '20-25 min'),
          price: t('banya.services.rituals.sports.price', '2,500 THB'),
          description: t('banya.services.rituals.sports.description', 'Intense warming to the depth of muscles with massage elements')
        },
        {
          id: 'stalwar',
          title: t('banya.services.rituals.stalwar.title', "Thor's Power"),
          subtitle: t('banya.services.rituals.stalwar.subtitle', 'INTENSE STEAM'),
          duration: t('banya.services.rituals.stalwar.duration', '15-20 min'),
          price: t('banya.services.rituals.stalwar.price', '3,000 THB'),
          description: t('banya.services.rituals.stalwar.description', 'Intense steam and contrast for those who love the heat')
        },
        {
          id: 'warrior_path',
          title: t('banya.services.rituals.warrior_path.title', "Warrior's Path"),
          subtitle: t('banya.services.rituals.warrior_path.subtitle', 'CONTRAST STEAMING'),
          duration: t('banya.services.rituals.warrior_path.duration', '20-25 min'),
          price: t('banya.services.rituals.warrior_path.price', '3,500 THB'),
          description: t('banya.services.rituals.warrior_path.description', 'Steaming in two sessions with cold water dousing between them')
        },
        {
          id: 'honey',
          title: t('banya.services.rituals.honey.title', 'Honey Steaming'),
          subtitle: t('banya.services.rituals.honey.subtitle', 'WITH NATURAL HONEY'),
          duration: t('banya.services.rituals.honey.duration', '15-20 min'),
          price: t('banya.services.rituals.honey.price', '3,500 THB'),
          description: t('banya.services.rituals.honey.description', 'Steaming with Canadian brooms and honey application')
        },
        {
          id: 'valhalla',
          title: t('banya.services.rituals.valhalla.title', 'Valhalla'),
          subtitle: t('banya.services.rituals.valhalla.subtitle', 'GROUP STEAMING'),
          duration: t('banya.services.rituals.valhalla.duration', '10-20 min'),
          price: t('banya.services.rituals.valhalla.price', '3,500 THB'),
          description: t('banya.services.rituals.valhalla.description', 'Steaming with fan and brooms for a group of 2-4 people')
        },
        {
          id: 'royal',
          title: t('banya.services.rituals.royal.title', 'Royal Steaming'),
          subtitle: t('banya.services.rituals.royal.subtitle', 'HONEY-SALT SCRUB'),
          duration: t('banya.services.rituals.royal.duration', '25-30 min'),
          price: t('banya.services.rituals.royal.price', '4,000 THB'),
          description: t('banya.services.rituals.royal.description', 'Royal ritual of deep warming and cleansing with honey and sea salt')
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
          <SectionTitle>
            {isRussian ? 'Индивидуальные парения' : 'Individual Steam Sessions'}
          </SectionTitle>
          <SectionSubtitle>
            {isRussian
              ? 'Выберите свой идеальный банный ритуал'
              : 'Choose your perfect banya ritual'}
          </SectionSubtitle>
        </SectionHeader>

        <RitualsGrid>
          {rituals.map((ritual) => (
              <RitualCard key={ritual.id}>
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