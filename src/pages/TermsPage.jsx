import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PageContainer } from '../components/ui/CommonComponents';

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 6rem 2rem 4rem;
  
  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin-bottom: 2rem;
  text-align: center;
`;

const Content = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#666'};
  
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
    margin: 2rem 0 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const TermsPage = () => {
  const { t } = useTranslation();

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Условия использования</Title>
          
          <Content>
            <p>
              Настоящие Условия использования регулируют порядок предоставления услуг 
              оздоровительного комплекса KAIF на острове Пхукет, Таиланд.
            </p>
            
            <h2>1. Общие положения</h2>
            <p>
              Используя наши услуги, вы соглашаетесь с настоящими условиями. 
              KAIF предоставляет услуги SPA, фитнеса, ресторана и русской бани.
            </p>
            
            <h2>2. Бронирование и отмена</h2>
            <p>
              Бронирование услуг осуществляется по телефону или через WhatsApp. 
              Отмена бронирования возможна не позднее чем за 24 часа до назначенного времени.
            </p>
            
            <h2>3. Правила посещения</h2>
            <p>
              Посетители обязаны соблюдать правила гигиены и безопасности. 
              Администрация оставляет за собой право отказать в обслуживании 
              при нарушении установленных правил.
            </p>
            
            <h2>4. Ответственность</h2>
            <p>
              KAIF не несет ответственности за личные вещи посетителей. 
              Все процедуры выполняются квалифицированными специалистами 
              с соблюдением международных стандартов безопасности.
            </p>
            
            <h2>5. Контакты</h2>
            <p>
              По всем вопросам обращайтесь:
              <br />
              Email: info@kaif-phuket.com
              <br />
              Телефон: +66 62 480 5877
              <br />
              Адрес: Phuket, Thailand
            </p>
          </Content>
        </motion.div>
      </ContentWrapper>
    </PageContainer>
  );
};

export default TermsPage; 