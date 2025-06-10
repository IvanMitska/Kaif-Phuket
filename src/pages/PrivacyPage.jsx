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

const PrivacyPage = () => {
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
          <Title>Политика конфиденциальности</Title>
          
          <Content>
            <p>
              Настоящая Политика конфиденциальности определяет порядок обработки и защиты 
              персональных данных пользователей оздоровительного комплекса KAIF.
            </p>
            
            <h2>1. Сбор информации</h2>
            <p>
              Мы собираем только ту информацию, которая необходима для предоставления 
              качественных услуг: имя, контактные данные, предпочтения по услугам.
            </p>
            
            <h2>2. Использование информации</h2>
            <p>
              Ваши данные используются исключительно для записи на процедуры, 
              информирования о новых услугах и улучшения качества обслуживания.
            </p>
            
            <h2>3. Защита данных</h2>
            <p>
              Мы применяем современные методы защиты информации и не передаем 
              персональные данные третьим лицам без вашего согласия.
            </p>
            
            <h2>4. Контакты</h2>
            <p>
              По вопросам обработки персональных данных обращайтесь: 
              <br />
              Email: info@kaif-phuket.com
              <br />
              Телефон: +66 62 480 5877
            </p>
          </Content>
        </motion.div>
      </ContentWrapper>
    </PageContainer>
  );
};

export default PrivacyPage; 