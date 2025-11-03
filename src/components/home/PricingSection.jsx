import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaDumbbell, FaSpa, FaUsers, FaSwimmer, FaCheck, FaClock } from 'react-icons/fa';

// Main container - modern gradient background
const SectionContainer = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #f8faf9 0%, #ffffff 50%, #f0f4f2 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(144, 179, 167, 0.05) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 40%;
    height: 40%;
    background: radial-gradient(circle, rgba(168, 197, 184, 0.04) 0%, transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

// Section header - improved typography
const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Montserrat', sans-serif;
  font-size: 2.5rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Category tabs - cleaner design
const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const CategoryTab = styled(motion.button)`
  font-family: 'Montserrat', sans-serif;
  padding: 0.75rem 1.5rem;
  background: ${props => {
    if (!props.$active) return '#ffffff';
    switch(props.$categoryKey) {
      case 'dayPass': return 'linear-gradient(135deg, #9C27B0 0%, #AB47BC 100%)';
      case 'clubAccess': return 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%)';
      case 'premium': return 'linear-gradient(135deg, #212121 0%, #424242 100%)';
      case 'groupClasses': return 'linear-gradient(135deg, #FF9800 0%, #FFB74D 100%)';
      case 'swimming': return 'linear-gradient(135deg, #2196F3 0%, #42A5F5 100%)';
      default: return 'linear-gradient(135deg, #90B3A7 0%, #7da399 100%)';
    }
  }};
  color: ${props => props.$active ? 'white' : '#6b7280'};
  border: ${props => {
    if (props.$active) return 'none';
    switch(props.$categoryKey) {
      case 'dayPass': return '2px solid rgba(156, 39, 176, 0.2)';
      case 'clubAccess': return '2px solid rgba(76, 175, 80, 0.2)';
      case 'premium': return '2px solid rgba(33, 33, 33, 0.15)';
      case 'groupClasses': return '2px solid rgba(255, 152, 0, 0.2)';
      case 'swimming': return '2px solid rgba(33, 150, 243, 0.2)';
      default: return '2px solid #e5e7eb';
    }
  }};
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${props => {
    if (!props.$active) return '0 2px 4px rgba(0, 0, 0, 0.05)';
    switch(props.$categoryKey) {
      case 'dayPass': return '0 4px 15px rgba(156, 39, 176, 0.3)';
      case 'clubAccess': return '0 4px 15px rgba(76, 175, 80, 0.3)';
      case 'premium': return '0 4px 15px rgba(33, 33, 33, 0.25)';
      case 'groupClasses': return '0 4px 15px rgba(255, 152, 0, 0.3)';
      case 'swimming': return '0 4px 15px rgba(33, 150, 243, 0.3)';
      default: return '0 4px 15px rgba(144, 179, 167, 0.3)';
    }
  }};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => {
      switch(props.$categoryKey) {
        case 'dayPass': return '0 6px 20px rgba(156, 39, 176, 0.35)';
        case 'clubAccess': return '0 6px 20px rgba(76, 175, 80, 0.35)';
        case 'premium': return '0 6px 20px rgba(33, 33, 33, 0.3)';
        case 'groupClasses': return '0 6px 20px rgba(255, 152, 0, 0.35)';
        case 'swimming': return '0 6px 20px rgba(33, 150, 243, 0.35)';
        default: return '0 6px 20px rgba(144, 179, 167, 0.25)';
      }
    }};
    ${props => !props.$active && `
      background: ${
        props.$categoryKey === 'dayPass' ? 'rgba(156, 39, 176, 0.05)' :
        props.$categoryKey === 'clubAccess' ? 'rgba(76, 175, 80, 0.05)' :
        props.$categoryKey === 'premium' ? 'rgba(33, 33, 33, 0.03)' :
        props.$categoryKey === 'groupClasses' ? 'rgba(255, 152, 0, 0.05)' :
        props.$categoryKey === 'swimming' ? 'rgba(33, 150, 243, 0.05)' :
        '#f9fafb'
      };
    `}
  }

  svg {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.85rem;
  }
`;

// Pricing cards grid - better layout
const PricingGrid = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  align-content: start;
  width: 100%;

  @media (max-width: 768px) {
    position: relative;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

// Individual pricing card - modern minimalist design with category colors
const PricingCard = styled(motion.div)`
  background: #ffffff;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.04);
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid ${props => {
    switch(props.$category) {
      case 'dayPass': return 'rgba(156, 39, 176, 0.08)';
      case 'clubAccess': return 'rgba(76, 175, 80, 0.08)';
      case 'premium': return 'rgba(33, 33, 33, 0.08)';
      case 'groupClasses': return 'rgba(255, 152, 0, 0.08)';
      case 'swimming': return 'rgba(33, 150, 243, 0.08)';
      default: return 'rgba(144, 179, 167, 0.08)';
    }
  }};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => {
      switch(props.$category) {
        case 'dayPass': return 'linear-gradient(90deg, #9C27B0, #BA68C8, #CE93D8)';
        case 'clubAccess': return 'linear-gradient(90deg, #4CAF50, #81C784, #A5D6A7)';
        case 'premium': return 'linear-gradient(90deg, #212121, #424242, #616161)';
        case 'groupClasses': return 'linear-gradient(90deg, #FF9800, #FFB74D, #FFCC80)';
        case 'swimming': return 'linear-gradient(90deg, #2196F3, #64B5F6, #90CAF9)';
        default: return 'linear-gradient(90deg, #90B3A7, #A8C5B8)';
      }
    }};
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => {
      switch(props.$category) {
        case 'dayPass': return '0 12px 40px rgba(156, 39, 176, 0.15)';
        case 'clubAccess': return '0 12px 40px rgba(76, 175, 80, 0.15)';
        case 'premium': return '0 12px 40px rgba(33, 33, 33, 0.12)';
        case 'groupClasses': return '0 12px 40px rgba(255, 152, 0, 0.15)';
        case 'swimming': return '0 12px 40px rgba(33, 150, 243, 0.15)';
        default: return '0 12px 40px rgba(144, 179, 167, 0.15)';
      }
    }};
    border-color: ${props => {
      switch(props.$category) {
        case 'dayPass': return 'rgba(156, 39, 176, 0.2)';
        case 'clubAccess': return 'rgba(76, 175, 80, 0.2)';
        case 'premium': return 'rgba(33, 33, 33, 0.15)';
        case 'groupClasses': return 'rgba(255, 152, 0, 0.2)';
        case 'swimming': return 'rgba(33, 150, 243, 0.2)';
        default: return 'rgba(144, 179, 167, 0.2)';
      }
    }};

    &::before {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 1.75rem;
    &:hover {
      transform: translateY(-4px) scale(1.01);
    }
  }
`;

const PopularBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  color: white;
  padding: 0.375rem 1.25rem;
  border-radius: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  z-index: 1;
`;

const CardHeader = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px solid ${props => {
    switch(props.$category) {
      case 'dayPass': return 'rgba(156, 39, 176, 0.12)';
      case 'clubAccess': return 'rgba(76, 175, 80, 0.12)';
      case 'premium': return 'rgba(33, 33, 33, 0.08)';
      case 'groupClasses': return 'rgba(255, 152, 0, 0.12)';
      case 'swimming': return 'rgba(33, 150, 243, 0.12)';
      default: return 'rgba(144, 179, 167, 0.12)';
    }
  }};
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 2px;
    background: ${props => {
      switch(props.$category) {
        case 'dayPass': return 'linear-gradient(90deg, #9C27B0, #BA68C8)';
        case 'clubAccess': return 'linear-gradient(90deg, #4CAF50, #81C784)';
        case 'premium': return 'linear-gradient(90deg, #212121, #424242)';
        case 'groupClasses': return 'linear-gradient(90deg, #FF9800, #FFB74D)';
        case 'swimming': return 'linear-gradient(90deg, #2196F3, #64B5F6)';
        default: return 'linear-gradient(90deg, #90B3A7, #A8C5B8)';
      }
    }};
  }
`;

const PlanName = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
`;

const PlanDuration = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.95rem;
  color: #6b7280;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const PriceContainer = styled.div`
  margin-bottom: 2rem;
  padding: 1rem 0;
`;

const Price = styled.div`
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(135deg, #1a1a1a 0%, #4b5563 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  font-variant-numeric: lining-nums;
  font-feature-settings: "lnum" 1;

  span {
    font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #1a1a1a;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;

    span {
      font-size: 1.25rem;
    }
  }
`;


const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  flex: 1;
`;

const Feature = styled.li`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  gap: ${props => props.$compact ? '0.6rem' : '0.85rem'};
  padding: ${props => props.$compact ? '0.5rem 0' : '0.65rem 0'};
  color: #374151;
  font-size: ${props => props.$compact ? '0.88rem' : '0.92rem'};
  line-height: 1.5;
  font-weight: 400;
  transition: all 0.2s ease;
  border-bottom: ${props => props.$noBorder ? 'none' : '1px solid'} ${props => {
    switch(props.$category) {
      case 'dayPass': return 'rgba(156, 39, 176, 0.05)';
      case 'clubAccess': return 'rgba(76, 175, 80, 0.05)';
      case 'premium': return 'rgba(33, 33, 33, 0.05)';
      case 'groupClasses': return 'rgba(255, 152, 0, 0.05)';
      case 'swimming': return 'rgba(33, 150, 243, 0.05)';
      default: return 'rgba(144, 179, 167, 0.05)';
    }
  }};

  &:last-child {
    border-bottom: none;
  }

  svg {
    color: #fff;
    font-size: ${props => props.$compact ? '0.7rem' : '0.75rem'};
    flex-shrink: 0;
    background: ${props => {
      switch(props.$category) {
        case 'dayPass': return 'linear-gradient(135deg, #9C27B0, #BA68C8)';
        case 'clubAccess': return 'linear-gradient(135deg, #4CAF50, #66BB6A)';
        case 'premium': return 'linear-gradient(135deg, #212121, #424242)';
        case 'groupClasses': return 'linear-gradient(135deg, #FF9800, #FFB74D)';
        case 'swimming': return 'linear-gradient(135deg, #2196F3, #42A5F5)';
        default: return 'linear-gradient(135deg, #90B3A7, #A8C5B8)';
      }
    }};
    padding: 0.35rem;
    border-radius: 50%;
    box-shadow: 0 2px 8px ${props => {
      switch(props.$category) {
        case 'dayPass': return 'rgba(156, 39, 176, 0.2)';
        case 'clubAccess': return 'rgba(76, 175, 80, 0.2)';
        case 'premium': return 'rgba(33, 33, 33, 0.2)';
        case 'groupClasses': return 'rgba(255, 152, 0, 0.2)';
        case 'swimming': return 'rgba(33, 150, 243, 0.2)';
        default: return 'rgba(144, 179, 167, 0.2)';
      }
    }};
  }

  &:hover {
    color: #111827;
    padding-left: 0.5rem;
  }
`;

const GridContainer = styled.div`
  position: relative;
  height: 1100px;
  width: 100%;

  @media (max-width: 1200px) {
    height: 1550px;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

const SelectCategoryPrompt = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  font-family: 'Montserrat', sans-serif;
  color: #6b7280;
  font-size: 1.1rem;
  background: rgba(144, 179, 167, 0.02);
  border-radius: 20px;
  border: 2px dashed rgba(144, 179, 167, 0.2);
`;

const BookButton = styled(motion.a)`
  font-family: 'Montserrat', sans-serif;
  display: block;
  width: 100%;
  padding: 1.25rem;
  background: ${props => {
    switch(props.$category) {
      case 'dayPass': return 'linear-gradient(135deg, #9C27B0 0%, #AB47BC 50%, #BA68C8 100%)';
      case 'clubAccess': return 'linear-gradient(135deg, #4CAF50 0%, #66BB6A 50%, #81C784 100%)';
      case 'premium': return 'linear-gradient(135deg, #212121 0%, #424242 50%, #616161 100%)';
      case 'groupClasses': return 'linear-gradient(135deg, #FF9800 0%, #FFB74D 50%, #FFCC80 100%)';
      case 'swimming': return 'linear-gradient(135deg, #2196F3 0%, #42A5F5 50%, #64B5F6 100%)';
      default: return 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)';
    }
  }};
  color: white !important;
  border: none;
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 0.95rem;
  letter-spacing: 0.03em;
  position: relative;
  overflow: hidden;
  margin-top: auto;
  box-shadow: ${props => {
    switch(props.$category) {
      case 'dayPass': return '0 4px 15px rgba(156, 39, 176, 0.3)';
      case 'clubAccess': return '0 4px 15px rgba(76, 175, 80, 0.3)';
      case 'premium': return '0 4px 15px rgba(33, 33, 33, 0.25)';
      case 'groupClasses': return '0 4px 15px rgba(255, 152, 0, 0.3)';
      case 'swimming': return '0 4px 15px rgba(33, 150, 243, 0.3)';
      default: return '0 4px 15px rgba(144, 179, 167, 0.25)';
    }
  }};
  text-transform: uppercase;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }

  &:hover {
    transform: translateY(-3px);
    color: white !important;
    box-shadow: ${props => {
      switch(props.$category) {
        case 'dayPass': return '0 8px 25px rgba(156, 39, 176, 0.4)';
        case 'clubAccess': return '0 8px 25px rgba(76, 175, 80, 0.4)';
        case 'premium': return '0 8px 25px rgba(33, 33, 33, 0.35)';
        case 'groupClasses': return '0 8px 25px rgba(255, 152, 0, 0.4)';
        case 'swimming': return '0 8px 25px rgba(33, 150, 243, 0.4)';
        default: return '0 8px 25px rgba(144, 179, 167, 0.35)';
      }
    }};
    background: ${props => {
      switch(props.$category) {
        case 'dayPass': return 'linear-gradient(135deg, #AB47BC 0%, #BA68C8 50%, #CE93D8 100%)';
        case 'clubAccess': return 'linear-gradient(135deg, #66BB6A 0%, #81C784 50%, #A5D6A7 100%)';
        case 'premium': return 'linear-gradient(135deg, #424242 0%, #616161 50%, #757575 100%)';
        case 'groupClasses': return 'linear-gradient(135deg, #FFB74D 0%, #FFCC80 50%, #FFE0B2 100%)';
        case 'swimming': return 'linear-gradient(135deg, #42A5F5 0%, #64B5F6 50%, #90CAF9 100%)';
        default: return 'linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%)';
      }
    }};

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active {
    transform: translateY(-1px);
  }
`;

const PricingSection = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('dayPass');

  // Pricing data with translations
  const pricingData = {
    dayPass: {
      icon: <FaClock />,
      title: t('pricing.categories.dayPass'),
      subtitle: t('pricing.subtitles.dayPass'),
      plans: [
        {
          name: t('pricing.durations.morning') + ' Pass',
          duration: t('pricing.features.morningAccess'),
          price: '390',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            t('pricing.features.russianSauna') + ' & ' + t('pricing.features.japanesePool'),
            t('pricing.features.saunaAfter14')
          ],
          perMonth: null
        },
        {
          name: 'Day Pass',
          duration: t('pricing.durations.fullDay'),
          price: '490',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            t('pricing.features.russianSauna') + ' & ' + t('pricing.features.japanesePool'),
            t('pricing.features.towelsIncluded')
          ],
          perMonth: null
        },
        {
          name: t('pricing.categories.groupClasses'),
          duration: t('pricing.durations.single'),
          price: '600',
          features: [t('pricing.features.dayAccess'), t('pricing.features.anyClass'), t('pricing.features.professionalTrainer')],
          perMonth: null
        }
      ]
    },
    clubAccess: {
      icon: <FaDumbbell />,
      title: 'Club Access',
      subtitle: t('pricing.subtitles.withoutBanya'),
      plans: [
        {
          name: 'Club Access',
          duration: t('pricing.durations.month'),
          price: '2,000',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel')
          ],
          perMonth: null
        },
        {
          name: 'Club Access',
          duration: t('pricing.durations.months_3'),
          price: '4,800',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            `${t('pricing.features.savings')} 20%`
          ],
          perMonth: '1,600 ฿/мес',
          featured: true,
          popular: true
        },
        {
          name: 'Club Access',
          duration: t('pricing.durations.months_6'),
          price: '9,900',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            `${t('pricing.features.savings')} 17%`
          ],
          perMonth: '1,650 ฿/мес'
        },
        {
          name: 'Club Access',
          duration: t('pricing.durations.months_12'),
          price: '18,000',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            `${t('pricing.features.maxSavings')} 25%`
          ],
          perMonth: '1,500 ฿/мес'
        }
      ]
    },
    premium: {
      icon: <FaSpa />,
      title: 'Club Access+',
      subtitle: t('pricing.subtitles.allPlusBanya'),
      plans: [
        {
          name: 'Club Access+',
          duration: t('pricing.durations.day'),
          price: '490',
          features: [
            t('pricing.features.gymCardio'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.steamRoom'),
            t('pricing.features.iceBarrel'),
            t('pricing.features.russianSauna') + ' & ' + t('pricing.features.japanesePool'),
            t('pricing.features.lockersAndShowers')
          ],
          perMonth: null
        },
        {
          name: 'Club Access+',
          duration: t('pricing.durations.month'),
          price: '3,800',
          features: [
            t('pricing.features.unlimitedAccess'),
            t('pricing.features.gymAndBanya'),
            t('pricing.features.swimmingPool'),
            t('pricing.features.towelsIncluded')
          ],
          perMonth: null
        },
        {
          name: 'Club Access+',
          duration: t('pricing.durations.months_3'),
          price: '9,400',
          features: [
            t('pricing.features.unlimitedAccess'),
            t('pricing.features.gymAndBanya'),
            t('pricing.features.towelsIncluded'),
            `${t('pricing.features.savings')} 18%`
          ],
          perMonth: '3,133 ฿/мес',
          featured: true,
          popular: true
        },
        {
          name: 'Club Access+',
          duration: t('pricing.durations.months_6'),
          price: '17,800',
          features: [
            t('pricing.features.unlimitedAccess'),
            t('pricing.features.gymAndBanya'),
            t('pricing.features.towelsIncluded'),
            `${t('pricing.features.savings')} 22%`
          ],
          perMonth: '2,967 ฿/мес'
        },
        {
          name: 'Club Access+',
          duration: t('pricing.durations.months_12'),
          price: '29,000',
          features: [
            t('pricing.features.unlimitedAccess'),
            t('pricing.features.gymAndBanya'),
            t('pricing.features.towelsIncluded'),
            `${t('pricing.features.maxSavings')} 36%`
          ],
          perMonth: '2,417 ฿/мес'
        }
      ]
    },
    groupClasses: {
      icon: <FaUsers />,
      title: t('pricing.categories.groupClasses'),
      subtitle: t('pricing.subtitles.groupClasses'),
      plans: [
        {
          name: t('pricing.categories.groupClasses'),
          duration: t('pricing.durations.single'),
          price: '600',
          features: [t('pricing.features.dayAccess'), t('pricing.features.anyClass'), t('pricing.features.professionalTrainer')],
          perMonth: null
        },
        {
          name: t('pricing.categories.groupClasses'),
          duration: t('pricing.durations.classes_4'),
          price: '2,000',
          features: [`500 ฿ ${t('pricing.features.perClass')}`, t('pricing.features.validMonth'), t('pricing.features.anyClasses')],
          perMonth: null
        },
        {
          name: t('pricing.categories.groupClasses'),
          duration: t('pricing.durations.classes_12'),
          price: '3,000',
          features: [`250 ฿ ${t('pricing.features.perClass')}`, t('pricing.features.validMonths_2'), t('pricing.features.anyClasses'), `${t('pricing.features.savings')} 50%`],
          perMonth: null,
          featured: true,
          popular: true
        },
        {
          name: t('pricing.categories.groupClasses'),
          duration: t('pricing.durations.classes_24'),
          price: '5,500',
          features: [`229 ฿ ${t('pricing.features.perClass')}`, t('pricing.features.validMonths_3'), t('pricing.features.anyClasses'), `${t('pricing.features.savings')} 62%`],
          perMonth: null
        },
        {
          name: t('pricing.categories.groupClasses'),
          duration: t('pricing.durations.classes_48'),
          price: '10,200',
          features: [`213 ฿ ${t('pricing.features.perClass')}`, t('pricing.features.validMonths_6'), t('pricing.features.anyClasses'), `${t('pricing.features.maxSavings')} 65%`],
          perMonth: null
        }
      ]
    },
    swimming: {
      icon: <FaSwimmer />,
      title: t('pricing.categories.swimming'),
      subtitle: t('pricing.subtitles.swimmingSchool'),
      plans: [
        {
          name: t('pricing.categories.swimming'),
          duration: t('pricing.durations.single'),
          price: '800',
          features: [t('pricing.features.dayAccess'), t('pricing.features.individualApproach'), t('pricing.features.certifiedInstructor')],
          perMonth: null
        },
        {
          name: t('pricing.categories.swimming'),
          duration: t('pricing.durations.classes_8'),
          price: '3,800',
          features: [`475 ฿ ${t('pricing.features.perClass')}`, t('pricing.features.validMonths_2'), t('pricing.features.trainingProgram'), `${t('pricing.features.savings')} 41%`],
          perMonth: null,
          featured: true,
          popular: true
        },
        {
          name: t('pricing.categories.swimming'),
          duration: t('pricing.durations.classes_12'),
          price: '5,500',
          features: [`458 ฿ ${t('pricing.features.perClass')}`, t('pricing.features.validMonths_3'), t('pricing.features.fullProgram'), `${t('pricing.features.savings')} 43%`],
          perMonth: null
        }
      ]
    }
  };

  const categories = [
    { key: 'dayPass', label: t('pricing.categories.dayPass'), icon: <FaClock /> },
    { key: 'clubAccess', label: t('pricing.categories.clubAccess'), icon: <FaDumbbell /> },
    { key: 'premium', label: t('pricing.categories.clubAccessPlus'), icon: <FaSpa /> },
    { key: 'groupClasses', label: t('pricing.categories.groupClasses'), icon: <FaUsers /> },
    { key: 'swimming', label: t('pricing.categories.swimming'), icon: <FaSwimmer /> }
  ];

  const currentCategory = pricingData[activeCategory];

  return (
    <SectionContainer id="pricing">
      <Container>
        <SectionHeader>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('pricing.title')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('pricing.subtitle')}
          </SectionSubtitle>
        </SectionHeader>

        <CategoryTabs>
          {categories.map((category) => (
            <CategoryTab
              key={category.key}
              $active={activeCategory === category.key}
              $categoryKey={category.key}
              onClick={() => setActiveCategory(category.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.icon}
              {category.label}
            </CategoryTab>
          ))}
        </CategoryTabs>

        <GridContainer>
          <AnimatePresence mode="wait" initial={false}>
            <PricingGrid
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
            {currentCategory.plans.map((plan, index) => (
            <PricingCard
              key={`${activeCategory}-${index}`}
              $featured={plan.featured}
              $category={activeCategory}
            >
              <CardHeader $category={activeCategory}>
                <PlanName>{plan.name}</PlanName>
                <PlanDuration>{plan.duration}</PlanDuration>
              </CardHeader>

              <PriceContainer>
                <Price>
                  {plan.price} <span>฿</span>
                </Price>
              </PriceContainer>

              <FeatureList>
                {plan.features.map((feature, idx) => (
                  <Feature
                    key={idx}
                    $category={activeCategory}
                    $compact={plan.features.length > 5}
                    $noBorder={idx === plan.features.length - 1}
                  >
                    <FaCheck />
                    {feature}
                  </Feature>
                ))}
              </FeatureList>

              <BookButton
                href="https://wa.me/66624805877?text=Здравствуйте! Хочу приобрести абонемент"
                target="_blank"
                rel="noopener noreferrer"
                $category={activeCategory}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('pricing.select_plan')}
              </BookButton>
            </PricingCard>
            ))}
          </PricingGrid>
        </AnimatePresence>
        </GridContainer>
      </Container>
    </SectionContainer>
  );
};

export default PricingSection;