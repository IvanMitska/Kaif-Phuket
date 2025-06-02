import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDownIcon, 
  QuestionMarkCircleIcon,
  ClockIcon,
  MapPinIcon,
  CreditCardIcon,
  UserGroupIcon,
  PlusIcon,
  MinusIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СОВРЕМЕННАЯ МИНИМАЛИСТИЧНАЯ СЕКЦИЯ FAQ
// =============================================================================

const FAQContainer = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(168, 197, 184, 0.03) 100%); /* Легкий градиент в зеленых тонах */
  overflow: hidden;
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
  margin-bottom: 4rem;
`;

const SectionBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 180, 216, 0.08); /* Голубой из логотипа с прозрачностью */
  border: 1px solid rgba(0, 180, 216, 0.15); /* Голубой бордер */
  border-radius: 24px;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  font-weight: 500;
  color: #00B4D8; /* Голубой из логотипа */
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #00B4D8; /* Голубой из логотипа */
  }
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #0f172a;
  letter-spacing: -0.025em;
`;

const SectionSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  line-height: 1.6;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
`;

// FAQ Grid
const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
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
  background: rgba(255, 105, 180, 0.08); /* Розовый из логотипа с прозрачностью */
  border: 1px solid rgba(255, 105, 180, 0.15); /* Розовый бордер */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF69B4; /* Розовый из логотипа */
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  svg {
    width: 1rem;
    height: 1rem;
  }
  
  ${FAQItem}:hover & {
    background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'};
    color: white;
    border-color: transparent;
  }
`;

const QuestionText = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
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
    $isOpen ? 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)' : 'rgba(144, 179, 167, 0.08)' /* Зеленый чайный цвет */
  };
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $isOpen }) => 
    $isOpen ? 'white' : '#5CB848' /* Зеленый из логотипа */
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
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
`;

// Поддержка
const SupportSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SupportCard = styled(motion.div)`
  background: white;
  border: 1px solid rgba(0, 180, 216, 0.1); /* Голубой из логотипа */
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 180, 216, 0.15); /* Тень с голубым из логотипа */
    border-color: rgba(255, 105, 180, 0.2); /* Розовый из логотипа */
    
    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
`;

const SupportIcon = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0 auto 1.5rem;
  background: rgba(92, 184, 72, 0.08); /* Зеленый из логотипа с прозрачностью */
  border: 1px solid rgba(92, 184, 72, 0.15); /* Зеленый бордер */
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5CB848; /* Зеленый из логотипа */
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.4s ease;
  }
  
  ${SupportCard}:hover & {
    background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'};
    color: white;
    border-color: transparent;
    transform: scale(1.1);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
    
    svg {
      transform: scale(1.1);
    }
  }
`;

const SupportTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1.25rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const SupportDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SupportInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: #64748b;
  font-weight: 500;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #94a3b8;
    flex-shrink: 0;
  }
`;

// =============================================================================
// FAQ SECTION COMPONENT
// =============================================================================

const FAQSection = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const faqVariants = {
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
      opacity: 0,
      transition: {
        height: { duration: 0.3 },
        opacity: { duration: 0.2 }
      }
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: { duration: 0.3, delay: 0.1 }
      }
    }
  };

  // FAQ данные
  const faqs = [
    {
      category: 'general',
      icon: <QuestionMarkCircleIcon />,
      question: 'Что включает в себя комплекс KAIF?',
      answer: 'KAIF - это многофункциональный комплекс, включающий фитнес-центр с 70+ тренажерами, боевые искусства, 25-метровый бассейн, СПА-центр, самую большую сауну в Таиланде (50м²), турецкий хаммам, салон красоты и ресторан с 5 кухнями мира.'
    },
    {
      category: 'general',
      icon: <ClockIcon />,
      question: 'Режим работы комплекса?',
      answer: 'Мы работаем ежедневно с 6:00 до 23:00. Некоторые зоны (СПА, ресторан) могут иметь отдельный график. Рекомендуем уточнять время работы конкретных услуг при бронировании.'
    },
    {
      category: 'booking',
      icon: <UserGroupIcon />,
      question: 'Как забронировать услуги?',
      answer: 'Бронирование доступно через наш сайт, мобильное приложение, по телефону +66 76 123 456 или WhatsApp. Рекомендуем бронировать заранее, особенно СПА-процедуры и столики в ресторане.'
    },
    {
      category: 'booking',
      icon: <CreditCardIcon />,
      question: 'Можно ли приобрести абонементы?',
      answer: 'Да! У нас есть различные абонементы: дневные, недельные, месячные и годовые. Также доступны комбинированные пакеты, включающие несколько услуг со скидкой до 30%.'
    },
    {
      category: 'services',
      icon: <UserGroupIcon />,
      question: 'Нужен ли опыт для занятий?',
      answer: 'Нет! У нас есть программы для всех уровней подготовки. Новичкам предоставляем вводный инструктаж, персональные консультации и программы "первые шаги" для безопасного начала тренировок.'
    },
    {
      category: 'services',
      icon: <MapPinIcon />,
      question: 'Какие СПА-процедуры доступны?',
      answer: 'Мы предлагаем традиционный тайский массаж, ароматерапию, массаж горячими камнями, балийские ритуалы, европейские косметологические процедуры и авторские wellness-программы.'
    },
    {
      category: 'payment',
      icon: <CreditCardIcon />,
      question: 'Какие способы оплаты принимаются?',
      answer: 'Принимаем наличные (THB, USD, EUR), банковские карты всех систем, мобильные платежи, криптовалюты и банковские переводы. Доступна рассрочка для крупных пакетов услуг.'
    },
    {
      category: 'payment',
      icon: <QuestionMarkCircleIcon />,
      question: 'Есть ли программа лояльности?',
      answer: 'Да! Программа KAIF Rewards дает накопительные скидки, бонусы за приведение друзей, эксклюзивные мероприятия и приоритетное бронирование. Накопленные баллы можно тратить на любые услуги.'
    }
  ];

  return (
    <FAQContainer>
      <ContentWrapper>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeader>
            <SectionBadge variants={itemVariants}>
              <ChatBubbleLeftRightIcon />
              Ответы на вопросы
            </SectionBadge>
            
            <SectionTitle variants={itemVariants}>
              Часто задаваемые вопросы
            </SectionTitle>
            
            <SectionSubtitle variants={itemVariants}>
              Всё, что нужно знать о нашем многофункциональном комплексе
            </SectionSubtitle>
          </SectionHeader>

          <FAQGrid>
            {/* FAQ List */}
            <FAQList>
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={faqVariants}
                  custom={index}
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <FAQItem $isOpen={openFAQ === index}>
                    <QuestionButton onClick={() => toggleFAQ(index)}>
                      <QuestionContent>
                        <QuestionIcon>
                          {faq.icon}
                        </QuestionIcon>
                        <QuestionText>{faq.question}</QuestionText>
                      </QuestionContent>
                      
                      <ToggleIcon
                        $isOpen={openFAQ === index}
                        animate={{ 
                          rotate: openFAQ === index ? 180 : 0
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        {openFAQ === index ? <MinusIcon /> : <PlusIcon />}
                      </ToggleIcon>
                    </QuestionButton>

                    <AnimatePresence>
                      {openFAQ === index && (
                        <AnswerWrapper
                          variants={answerVariants}
                          initial="hidden"
                          animate="visible"
                          exit="hidden"
                        >
                          <AnswerContent>
                            <AnswerText>{faq.answer}</AnswerText>
                          </AnswerContent>
                        </AnswerWrapper>
                      )}
                    </AnimatePresence>
                  </FAQItem>
                </motion.div>
              ))}
            </FAQList>

            {/* Support Section */}
            <SupportSection>
              <motion.div variants={itemVariants}>
                <SupportCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <SupportIcon>
                    <PhoneIcon />
                  </SupportIcon>
                  <SupportTitle>Служба поддержки</SupportTitle>
                  <SupportDescription>
                    Наша команда готова помочь вам 24/7. Свяжитесь с нами любым удобным способом.
                  </SupportDescription>
                  <SupportInfo>
                    <InfoItem>
                      <MapPinIcon />
                      Пхукет, Таиланд
                    </InfoItem>
                    <InfoItem>
                      <ClockIcon />
                      24/7 поддержка
                    </InfoItem>
                  </SupportInfo>
                </SupportCard>
              </motion.div>

              <motion.div variants={itemVariants}>
                <SupportCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <SupportIcon>
                    <ChatBubbleLeftRightIcon />
                  </SupportIcon>
                  <SupportTitle>WhatsApp чат</SupportTitle>
                  <SupportDescription>
                    Быстрые ответы в мессенджере. Бронирование, вопросы, поддержка - всё в одном чате.
                  </SupportDescription>
                  <SupportInfo>
                    <InfoItem>
                      <UserGroupIcon />
                      Мгновенные ответы
                    </InfoItem>
                    <InfoItem>
                      <PhoneIcon />
                      Персональный менеджер
                    </InfoItem>
                  </SupportInfo>
                </SupportCard>
              </motion.div>

              <motion.div variants={itemVariants}>
                <SupportCard
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  <SupportIcon>
                    <QuestionMarkCircleIcon />
                  </SupportIcon>
                  <SupportTitle>Персональные консультации</SupportTitle>
                  <SupportDescription>
                    Индивидуальный подход к каждому гостю. Поможем составить программу под ваши цели.
                  </SupportDescription>
                  <SupportInfo>
                    <InfoItem>
                      <QuestionMarkCircleIcon />
                      Бесплатная консультация
                    </InfoItem>
                    <InfoItem>
                      <CreditCardIcon />
                      Гибкая оплата
                    </InfoItem>
                  </SupportInfo>
                </SupportCard>
              </motion.div>
            </SupportSection>
          </FAQGrid>
        </motion.div>
      </ContentWrapper>
    </FAQContainer>
  );
};

export default FAQSection;
