import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SparksEffect from './SparksEffect';

// =============================================================================
// СКАНДИНАВСКАЯ СЕКЦИЯ УСЛУГ БАНИ
// =============================================================================

const runeGlow = keyframes`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`;

const vikingPulse = keyframes`
  0%, 100% { transform: scale(1); box-shadow: 0 0 20px rgba(255, 107, 53, 0.3); }
  50% { transform: scale(1.05); box-shadow: 0 0 30px rgba(255, 107, 53, 0.5); }
`;

const ServicesContainer = styled.section`
  padding: 0;
  margin-top: -1px;
  background: #0f0f0f;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const HeaderTitle = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #ff6b35;
  border-radius: 8px;
  color: #ff6b35;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '🔥';
    font-size: 1.2em;
    margin-right: 0.75rem;
  }
`;

const RitualsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin: 0 auto;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RitualCard = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.9) 100%);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff6b35, #ffd662, #ff6b35);
    background-size: 200px 100%;
    animation: shimmer 2s linear infinite;
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

  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`;

const RitualHeader = styled.div`
  margin-bottom: 1.5rem;
`;

const RitualTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
  line-height: 1.2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
`;

const RitualSubtitle = styled.div`
  color: #ff6b35;
  font-size: 1.125rem;
  margin-top: 0.5rem;
  font-weight: 500;
  animation: ${runeGlow} 4s ease-in-out infinite;
`;

const RitualDescription = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  margin-top: 0.75rem;
  font-style: italic;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const RitualDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 107, 53, 0.2);
`;

const RitualDuration = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '⏱';
    font-size: 1.2rem;
    animation: ${vikingPulse} 3s ease-in-out infinite;
  }
`;

const RitualPrice = styled.div`
  color: #ffd662;
  font-size: 1.5rem;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
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
  
  &.bottom-right {
    bottom: 5%;
    right: 5%;
    transform: rotate(30deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BanyaServicesSection = () => {
  const { t } = useTranslation();

  const rituals = [
    {
      id: 'light',
      title: 'Огненный старт',
      subtitle: 'Лёгкий пар',
      duration: '10 мин',
      price: '1200 бат',
      description: '1 заход, взвар дубовый'
    },
    {
      id: 'medium',
      title: 'Путь воина',
      subtitle: 'Средний пар',
      duration: '15-20 мин',
      price: '2000 бат',
      description: '1 заход, взвар квас'
    },
    {
      id: 'hard',
      title: 'Сила Тора',
      subtitle: 'Сильный пар',
      duration: '30 мин',
      price: '2600 бат',
      description: '2 захода, взвар: чесночный и цитрусовый'
    },
    {
      id: 'valhalla',
      title: 'Вальхалла',
      subtitle: 'Крепкий пар',
      duration: '1 час',
      price: '3500 бат',
      description: '3 захода, взвар: цитрусовые, имбирный, пивной'
    }
  ];

  return (
    <ServicesContainer>
      <VikingOrnament className="top-left">᚛ᚃᚔᚏᚓ᚜</VikingOrnament>
      <VikingOrnament className="bottom-right">᚛ᚔᚉᚓ᚜</VikingOrnament>
      <SparksEffect intensity="low" />
      <ContentWrapper>
        <SectionHeader>
          <HeaderTitle>
            Банные программы
          </HeaderTitle>
        </SectionHeader>

        <RitualsGrid>
          {rituals.map((ritual, index) => (
            <RitualCard
              key={ritual.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <RitualHeader>
                <RitualTitle>{ritual.title}</RitualTitle>
                <RitualSubtitle>{ritual.subtitle}</RitualSubtitle>
                <RitualDescription>{ritual.description}</RitualDescription>
              </RitualHeader>
              <RitualDetails>
                <RitualDuration>{ritual.duration}</RitualDuration>
                <RitualPrice>{ritual.price}</RitualPrice>
              </RitualDetails>
            </RitualCard>
          ))}
        </RitualsGrid>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default BanyaServicesSection; 