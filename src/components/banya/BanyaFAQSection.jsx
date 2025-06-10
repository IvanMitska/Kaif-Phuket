import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  QuestionMarkCircleIcon,
  ClockIcon,
  PlusIcon,
  MinusIcon,
  SparklesIcon,
  FireIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СОВРЕМЕННАЯ МИНИМАЛИСТИЧНАЯ СЕКЦИЯ FAQ (ДИЗАЙН ГЛАВНОЙ СТРАНИЦЫ)
// =============================================================================

const FAQContainer = styled.section`
  position: relative;
  padding: 3rem 0;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.03) 0%, rgba(168, 197, 184, 0.02) 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1rem;
  }
`;

const SectionBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(144, 179, 167, 0.08);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 24px;
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
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`;

// FAQ Container
const FAQContainer2 = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const FAQList = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled(motion.div)`
  background: white;
  border: 1px solid ${({ $isOpen }) => 
    $isOpen ? '#e2e8f0' : '#f1f5f9'
  };
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${({ $isOpen }) => $isOpen && `
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-1px);
  `}
  
  &:hover {
    border-color: #e2e8f0;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f8fafc;
  }
`;

const QuestionContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
`;

const QuestionIcon = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(144, 179, 167, 0.08);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90B3A7;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  ${FAQItem}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
  }
`;

const QuestionText = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #0f172a;
  margin: 0;
  line-height: 1.4;
`;

const ToggleIcon = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  background: ${({ $isOpen }) => 
    $isOpen ? 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' : 'rgba(144, 179, 167, 0.08)'
  };
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $isOpen }) => 
    $isOpen ? 'white' : '#90B3A7'
  };
  transition: all 0.3s ease;
  flex-shrink: 0;
  box-shadow: ${({ $isOpen }) => 
    $isOpen ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none'
  };
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

const AnswerWrapper = styled(motion.div)`
  overflow: hidden;
`;

const AnswerContent = styled.div`
  padding: 0 2rem 2rem 5.5rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 2rem 1.5rem;
  }
`;

const AnswerText = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
`;



// =============================================================================
// КОМПОНЕНТ
// =============================================================================

const BanyaFAQSection = () => {
  const { t } = useTranslation();
  const [openItems, setOpenItems] = useState(new Set());

  const toggleFAQ = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqData = [
    {
      id: 'panoramic',
      icon: SparklesIcon,
      question: 'Что особенного в панорамной бане?',
      answer: 'Наша баня уникальна несколькими особенностями: площадь 150 квадратных метров с панорамными окнами в джунгли, финские печи Woodson премиум-класса, натуральные материалы из сибирских пород дерева. Это единственная панорамная русская баня на Пхукете, где можно наслаждаться традиционными банными ритуалами с видом на тропическую природу.'
    },
    {
      id: 'procedures',
      icon: FireIcon,
      question: 'Какие процедуры входят в банный ритуал?',
      answer: 'В зависимости от выбранной программы вы получите: классический банный ритуал с березовыми вениками, ароматерапию с эфирными маслами, травяные настои и чаи, возможность заказать массаж в парной, а также персональное сопровождение мастера парения для VIP-программ.'
    },

    {
      id: 'materials',
      icon: ShieldCheckIcon,
      question: 'Из каких материалов построена баня?',
      answer: 'Баня построена исключительно из натуральных экологически чистых материалов: сибирский кедр, алтайская липа, карельская береза. Все покрытия природные, без химических добавок. Такие материалы создают особый микроклимат и обеспечивают естественную ароматерапию.'
    },
    {
      id: 'woodson',
      icon: ClockIcon,
      question: 'Что такое технология Woodson?',
      answer: 'Woodson - это премиальные финские печи, которые обеспечивают равномерное распределение тепла и создают идеальный банный пар. Печи быстро прогревают помещение до оптимальной температуры 85°C, экологически чистые в использовании и отличаются долговечностью. Это та же технология, что используется в лучших саунах Финляндии.'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const answerVariants = {
    hidden: { 
      height: 0,
      opacity: 0
    },
    visible: { 
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.2,
          delay: 0.1
        }
      }
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3
        },
        opacity: {
          duration: 0.2
        }
      }
    }
  };

  return (
    <FAQContainer>
      <ContentWrapper>
        <SectionHeader
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionBadge variants={itemVariants}>
            <QuestionMarkCircleIcon />
            Вопросы и ответы
          </SectionBadge>
          
          <SectionTitle variants={itemVariants}>
            Часто задаваемые вопросы
          </SectionTitle>
          
          <SectionSubtitle variants={itemVariants}>
            Ответы на самые популярные вопросы о нашей бане
          </SectionSubtitle>
        </SectionHeader>

        <FAQContainer2>
          <FAQList
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {faqData.map((item, index) => (
              <FAQItem 
                key={item.id}
                variants={itemVariants}
                $isOpen={openItems.has(index)}
              >
                <QuestionButton onClick={() => toggleFAQ(index)}>
                  <QuestionContent>
                    <QuestionIcon>
                      <item.icon />
                    </QuestionIcon>
                    <QuestionText>{item.question}</QuestionText>
                  </QuestionContent>
                  
                  <ToggleIcon 
                    $isOpen={openItems.has(index)}
                    animate={{ 
                      rotate: openItems.has(index) ? 180 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {openItems.has(index) ? <MinusIcon /> : <PlusIcon />}
                  </ToggleIcon>
                </QuestionButton>
                
                <AnimatePresence>
                  {openItems.has(index) && (
                    <AnswerWrapper
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <AnswerContent>
                        <AnswerText 
                          dangerouslySetInnerHTML={{ 
                            __html: item.answer 
                          }} 
                        />
                      </AnswerContent>
                    </AnswerWrapper>
                  )}
                </AnimatePresence>
              </FAQItem>
            ))}
          </FAQList>
        </FAQContainer2>
      </ContentWrapper>
    </FAQContainer>
  );
};

export default BanyaFAQSection; 