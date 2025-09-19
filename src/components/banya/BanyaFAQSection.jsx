import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
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
  padding: clamp(5rem, 10vw, 8rem) 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
  margin-bottom: 0;
`;

const ContentWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`;

const VikingBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 214, 98, 0.1) 100%);
  border: 1px solid rgba(255, 214, 98, 0.3);
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #ffd662;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  backdrop-filter: blur(10px);

  svg {
    width: 1rem;
    height: 1rem;
    color: #ff6b35;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;

  .highlight {
    background: linear-gradient(135deg, #ff6b35 0%, #ffd662 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.6;
  background: linear-gradient(135deg, rgba(255, 214, 98, 0.9) 0%, rgba(255, 107, 53, 0.9) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  max-width: 700px;
  margin: 0 auto 3rem;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FAQItem = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
      rgba(255, 107, 53, 0.03) 0%,
      transparent 40%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow:
      0 20px 40px rgba(0, 0, 0, 0.4),
      0 0 30px rgba(255, 107, 53, 0.05);
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
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 2.5rem;
    right: 2.5rem;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.05), transparent);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.01);
  }
`;

const QuestionText = styled.h3`
  font-size: clamp(1.25rem, 2.5vw, 1.625rem);
  font-weight: ${props => props.$isOpen ? '600' : '500'};
  background: ${props => props.$isOpen
    ? 'linear-gradient(135deg, #ffffff 0%, #ffd662 100%)'
    : 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)'};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  flex: 1;
  transition: all 0.3s ease;
  letter-spacing: -0.01em;
  text-align: left;
`;

const QuestionIcon = styled.div`
  width: 42px;
  height: 42px;
  background: ${props => props.$isOpen
    ? 'linear-gradient(135deg, #ff6b35 0%, #ffd662 100%)'
    : 'rgba(255, 107, 53, 0.1)'};
  border: 1px solid ${props => props.$isOpen
    ? 'rgba(255, 214, 98, 0.3)'
    : 'rgba(255, 107, 53, 0.2)'};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: ${props => props.$isOpen ? '#1a1a1a' : '#ff6b35'};
    transform: ${props => props.$isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const FAQAnswer = styled.div`
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: ${props => props.$isOpen ? '500px' : '0'};
  opacity: ${props => props.$isOpen ? '1' : '0'};
`;

const FAQAnswerContent = styled.div`
  padding: 0 2.5rem 2.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  line-height: 1.8;
  letter-spacing: 0.02em;

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
  }
`;

// Removed Viking runes for cleaner design

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
            <QuestionMarkCircleIcon />
            {t('banya.faq.badge', 'Questions & Answers')}
          </VikingBadge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span dangerouslySetInnerHTML={{ __html: t('banya.faq.title', 'Frequently Asked <span className="highlight">Questions</span>') }} />
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
                <QuestionText $isOpen={openItem === index}>{item.question}</QuestionText>
                <QuestionIcon $isOpen={openItem === index}>
                  <ChevronDownIcon />
                </QuestionIcon>
              </FAQQuestion>

              <FAQAnswer $isOpen={openItem === index}>
                <FAQAnswerContent>
                  <p>{item.answer}</p>
                </FAQAnswerContent>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </ContentWrapper>
    </FAQContainer>
  );
};

export default BanyaFAQSection; 