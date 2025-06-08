import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialsContainer = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, #fefcfa 0%, #f9f5f1 100%);
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 1rem;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(255, 252, 250, 0.9);
  border: 1px solid rgba(205, 133, 63, 0.15);
  border-radius: 25px;
  padding: 2.5rem;
  text-align: center;
  position: relative;
  box-shadow: 0 10px 30px rgba(205, 133, 63, 0.1);
`;

const QuoteIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #CD853F 0%, #DEB887 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
`;

const TestimonialText = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #8B6F4A;
  margin-bottom: 2rem;
  font-style: italic;
`;

const AuthorName = styled.h4`
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 0.5rem;
`;

const AuthorTitle = styled.p`
  color: #A0522D;
  font-size: 0.875rem;
`;

const StarsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  margin-bottom: 1rem;
  
  svg {
    width: 20px;
    height: 20px;
    color: #CD853F;
  }
`;

const BanyaTestimonialsSection = () => {
  return (
    <TestimonialsContainer>
      <ContentWrapper>
        <SectionHeader>
          <Title
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Отзывы наших гостей
          </Title>
        </SectionHeader>

        <TestimonialCard
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <QuoteIcon>
            <StarIcon />
          </QuoteIcon>
          
          <StarsContainer>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </StarsContainer>
          
          <TestimonialText>
            "Невероятный опыт! Настоящая русская баня с аутентичной атмосферой. 
            Березовые веники, ароматный пар, профессиональный банщик - все на высшем уровне. 
            Чувствую себя полностью обновленным после каждого посещения."
          </TestimonialText>
          
          <AuthorName>Александр Петров</AuthorName>
          <AuthorTitle>Постоянный гость</AuthorTitle>
        </TestimonialCard>
      </ContentWrapper>
    </TestimonialsContainer>
  );
};

export default BanyaTestimonialsSection; 