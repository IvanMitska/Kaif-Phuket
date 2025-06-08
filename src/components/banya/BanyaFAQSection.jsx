import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDownIcon, QuestionMarkCircleIcon } from '@heroicons/react/24/solid';

const FAQContainer = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, #f7f3ef 0%, #f2e8d8 100%);
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, rgba(205, 133, 63, 0.12) 0%, rgba(180, 142, 98, 0.15) 100%);
  border: 1px solid rgba(205, 133, 63, 0.2);
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #B8804A;
  margin-bottom: 2rem;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #CD853F;
  }
`;

const Title = styled(motion.h2)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 1rem;
`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FAQItem = styled(motion.div)`
  background: rgba(255, 252, 250, 0.9);
  border: 1px solid rgba(205, 133, 63, 0.15);
  border-radius: 20px;
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem 2rem;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.125rem;
  font-weight: 600;
  color: #8B4513;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(205, 133, 63, 0.05);
  }
`;

const ChevronIcon = styled(motion.div)`
  svg {
    width: 24px;
    height: 24px;
    color: #CD853F;
  }
`;

const FAQAnswer = styled(motion.div)`
  padding: 0 2rem 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #8B6F4A;
`;

const faqData = [
  {
    question: "Что входит в стоимость банного сеанса?",
    answer: "В стоимость входит: посещение парной, березовые веники, травяные настои, полотенца, простыни, тапочки, чай с медом и традиционными русскими сладостями."
  },
  {
    question: "Нужно ли бронировать заранее?",
    answer: "Да, рекомендуем бронировать за 1-2 дня, особенно на выходные. Это гарантирует наличие свободного времени и позволяет нам подготовить все необходимое для вашего визита."
  },
  {
    question: "Есть ли ограничения по возрасту или здоровью?",
    answer: "Посещение бани не рекомендуется детям до 12 лет, беременным женщинам, людям с сердечно-сосудистыми заболеваниями без консультации врача. При наличии хронических заболеваний обязательна консультация специалиста."
  },
  {
    question: "Что взять с собой?",
    answer: "Все необходимое мы предоставляем: полотенца, простыни, тапочки, шапочки для бани. Вы можете принести только личные вещи и купальник/плавки."
  },
  {
    question: "Можно ли отменить или перенести бронирование?",
    answer: "Да, вы можете отменить или перенести бронирование не позднее чем за 24 часа до сеанса без штрафных санкций. При отмене менее чем за 24 часа взимается 50% от стоимости."
  }
];

const BanyaFAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer>
      <ContentWrapper>
        <SectionHeader>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <QuestionMarkCircleIcon />
            FAQ
          </Badge>
          
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Часто задаваемые вопросы
          </Title>
        </SectionHeader>

        <FAQList>
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {item.question}
                <ChevronIcon
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon />
                </ChevronIcon>
              </FAQQuestion>
              
              <AnimatePresence>
                {openIndex === index && (
                  <FAQAnswer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    {item.answer}
                  </FAQAnswer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQList>
      </ContentWrapper>
    </FAQContainer>
  );
};

export default BanyaFAQSection; 