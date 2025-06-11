import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  QuestionMarkCircleIcon,
  ClockIcon,
  CreditCardIcon,
  UserGroupIcon,
  PlusIcon,
  MinusIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// SPA FAQ СЕКЦИЯ (НА ОСНОВЕ ГЛАВНОЙ СТРАНИЦЫ)
// =============================================================================

const FAQContainer = styled.section`
  position: relative;
  padding: 5rem 0;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(168, 197, 184, 0.03) 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem;
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
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
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
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
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
  
  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
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
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  line-height: 1.7;
  color: #64748b;
  margin: 0;
`;

// =============================================================================
// SPA FAQ SECTION COMPONENT
// =============================================================================

const SpaFAQSection = () => {
  const { t } = useTranslation();
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Animation variants
  const faqVariants = {
    hidden: { opacity: 0.4, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
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

  // SPA FAQ данные
  const faqs = [
    {
      category: 'services',
      icon: <HeartIcon />,
      question: t('spa.faq.questions.services.question', 'Какие SPA услуги вы предлагаете?'),
      answer: t('spa.faq.questions.services.answer', 'Мы предлагаем полный спектр SPA услуг: массаж (тайский, масляный, спортивный), косметологические процедуры, лазерную эпиляцию, маникюр, педикюр, уход за волосами, а также сауну и хаммам.')
    },
    {
      category: 'booking',
      icon: <ClockIcon />,
      question: t('spa.faq.questions.booking.question', 'Как записаться на SPA процедуру?'),
      answer: t('spa.faq.questions.booking.answer', 'Записаться можно по телефону +66 62 480 5877, через WhatsApp или лично в нашем центре. Рекомендуем бронировать заранее, особенно на популярные процедуры.')
    },
    {
      category: 'policy',
      icon: <QuestionMarkCircleIcon />,
      question: t('spa.faq.questions.policy.question', 'Каковы правила отмены записи?'),
      answer: t('spa.faq.questions.policy.answer', 'Просим уведомлять об отмене не менее чем за 24 часа до назначенного времени. При отмене менее чем за 24 часа может взиматься плата за отмену в размере 50% от стоимости процедуры.')
    },
    {
      category: 'payment',
      icon: <CreditCardIcon />,
      question: t('spa.faq.questions.payment.question', 'Какие способы оплаты принимаются?'),
      answer: t('spa.faq.questions.payment.answer', 'Мы принимаем наличные (THB, USD, EUR), банковские карты всех систем, а также мобильные платежи. Оплата производится после процедуры.')
    },
    {
      category: 'preparation',
      icon: <UserGroupIcon />,
      question: t('spa.faq.questions.preparation.question', 'Нужно ли что-то приносить с собой?'),
      answer: t('spa.faq.questions.preparation.answer', 'Мы предоставляем все необходимое: полотенца, халаты, тапочки и косметические средства. Вам нужно только прийти и расслабиться.')
    },
    {
      category: 'gifts',
      icon: <HeartIcon />,
      question: t('spa.faq.questions.gifts.question', 'Есть ли подарочные сертификаты?'),
      answer: t('spa.faq.questions.gifts.answer', 'Да! Мы предлагаем подарочные сертификаты различного номинала на любые SPA услуги. Их можно приобрести в нашем центре или заказать по телефону.')
    }
  ];

  return (
    <FAQContainer>
      <ContentWrapper>
        <SectionHeader>
          <SectionBadge>
            <ChatBubbleLeftRightIcon />
            {t('spa.faq.badge', 'SPA Вопросы')}
          </SectionBadge>
          
          <SectionTitle>
            {t('spa.faq.title', 'Часто задаваемые вопросы')}
          </SectionTitle>
          
          <SectionSubtitle>
            {t('spa.faq.subtitle', 'Всё, что нужно знать о наших SPA услугах и процедурах')}
          </SectionSubtitle>
        </SectionHeader>

        <FAQList>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={faqVariants}
              custom={index}
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
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
      </ContentWrapper>
    </FAQContainer>
  );
};

export default SpaFAQSection;
