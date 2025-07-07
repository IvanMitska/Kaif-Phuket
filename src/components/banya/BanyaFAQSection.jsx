import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  ChevronDownIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СКАНДИНАВСКАЯ FAQ СЕКЦИЯ
// =============================================================================

const runeGlow = keyframes`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`;

const emberFlicker = keyframes`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

const FAQContainer = styled.section`
  padding: clamp(6rem, 12vw, 10rem) 0 0 0;
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%);
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
      radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.06) 0%, transparent 50%);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
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
  
  &::before {
    content: '❓';
    font-size: 1.2em;
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
  max-width: 700px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FAQItem = styled(motion.div)`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 26, 0.9) 100%);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ff6b35, transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &:hover {
    border-color: #ff6b35;
    box-shadow: 0 8px 32px rgba(255, 107, 53, 0.2);
  }
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 2rem 2.5rem;
  background: transparent;
  border: none;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 107, 53, 0.05);
  }
`;

const QuestionText = styled.h3`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: #f5f5f5;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  flex: 1;
`;

const QuestionIcon = styled.div`
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  animation: ${emberFlicker} 3s ease-in-out infinite;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #1a1a1a;
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: transform 0.3s ease;
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 2.5rem 2rem;
  color: #f5f5f5;
  font-size: 1rem;
  line-height: 1.7;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  
  p {
    margin: 0 0 1rem 0;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

// Декоративные викингские элементы
const VikingRune = styled.div`
  position: absolute;
  font-size: 4rem;
  color: rgba(255, 107, 53, 0.08);
  z-index: 1;
  
  &.left {
    top: 20%;
    left: 5%;
    transform: rotate(-20deg);
  }
  
  &.right {
    top: 60%;
    right: 5%;
    transform: rotate(20deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BanyaFAQSection = () => {
  const { t } = useTranslation();
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqData = [
    {
      question: t('banya.faq.questions.panoramic.question', 'What\'s special about the panoramic banya?'),
      answer: t('banya.faq.questions.panoramic.answer', 'Our banya is unique with several features: 150 square meters with panoramic jungle windows, built from Siberian cedar and Altai linden - premium natural materials. It\'s the only panoramic Russian banya in Phuket where you can enjoy traditional banya rituals with tropical nature views.')
    },
    {
      question: t('banya.faq.questions.procedures.question', 'What procedures are included in the banya ritual?'),
      answer: t('banya.faq.questions.procedures.answer', 'Depending on your chosen program you\'ll receive: classic banya ritual with birch brooms, aromatherapy with essential oils, herbal infusions and teas, option to order massage in the steam room, and personal accompaniment by a master attendant for VIP programs.')
    },
    {
      question: t('banya.faq.questions.materials.question', 'What materials is the banya built from?'),
      answer: t('banya.faq.questions.materials.answer', 'The banya is built exclusively from natural eco-friendly materials: Siberian cedar, Altai linden, Karelian birch. All finishes are natural, without chemical additives. Such materials create a special microclimate and provide natural aromatherapy.')
    }
  ];

  return (
    <FAQContainer>
      <ContentWrapper>
        <SectionHeader>
          <VikingBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('banya.faq.badge', 'Questions & Answers')}
          </VikingBadge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Frequently Asked <span className="highlight">Questions</span>
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('banya.faq.subtitle', 'Answers to the most popular questions about our banya')}
          </SectionDescription>
        </SectionHeader>

        <FAQList>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FAQQuestion onClick={() => toggleItem(index)}>
                <QuestionText>{item.question}</QuestionText>
                <QuestionIcon $isOpen={openItem === index}>
                  <ChevronDownIcon />
                </QuestionIcon>
              </FAQQuestion>
              
              <AnimatePresence>
                {openItem === index && (
                  <FAQAnswer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <p>{item.answer}</p>
                  </FAQAnswer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>
      </ContentWrapper>
      <VikingRune className="left">ᚠ</VikingRune>
      <VikingRune className="right">ᚢ</VikingRune>
    </FAQContainer>
  );
};

export default BanyaFAQSection; 