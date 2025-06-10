import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  CalendarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// МИНИМАЛИСТИЧНАЯ СЕКЦИЯ БРОНИРОВАНИЯ
// =============================================================================

const BookingContainer = styled.section`
  padding: clamp(4rem, 8vw, 8rem) 0;
  background: white;
  position: relative;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: rgba(230, 126, 34, 0.08);
  border: 1px solid rgba(230, 126, 34, 0.15);
  border-radius: 50px;
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
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #1a1a1a;
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const SectionDescription = styled(motion.p)`
  font-size: clamp(1.125rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
`;

const BookingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled(motion.div)`
  background: #fafafa;
  border-radius: 28px;
  padding: 3rem;
  border: 1px solid #f8f8f8;
`;

const ContactTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ContactIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #90B3A7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: white;
  }
`;

const ContactDetails = styled.div`
  flex: 1;
`;

const ContactLabel = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.25rem;
  font-weight: 500;
`;

const ContactValue = styled.p`
  font-size: 1rem;
  color: #1a1a1a;
  margin: 0;
  font-weight: 600;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: #90B3A7;
    }
  }
`;

const BookingForm = styled(motion.div)`
  background: white;
  border: 1px solid #f8f8f8;
  border-radius: 28px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.04);
`;

const FormTitle = styled.h3`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.4s ease;
  
  &:focus {
    outline: none;
    border-color: #90B3A7;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  transition: all 0.4s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #90B3A7;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1.25rem 1.5rem;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  font-size: 1rem;
  color: #1a1a1a;
  background: white;
  min-height: 120px;
  resize: vertical;
  transition: all 0.4s ease;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #90B3A7;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #999;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1.5rem 2rem;
  background: #90B3A7;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.4s ease;
  
  &:hover:not(:disabled) {
    background: #7DA399;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(144, 179, 167, 0.25);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
  
  svg {
    width: 1rem;
    height: 1rem;
    transition: transform 0.3s ease;
  }
  
  &:hover:not(:disabled) svg {
    transform: translateX(3px);
  }
`;

const SuccessMessage = styled(motion.div)`
  background: #e8f5e8;
  border: 1px solid #4caf50;
  border-radius: 8px;
  padding: 1rem;
  color: #2e7d32;
  text-align: center;
  margin-bottom: 1rem;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
    vertical-align: middle;
  }
`;

// Кнопка перехода к контактам
const ContactButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 3rem;
  background: #90B3A7;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(144, 179, 167, 0.15);
  
  &:hover {
    background: #7DA399;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(144, 179, 167, 0.25);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
`;

const ContactCTA = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 3rem 2rem;
  
  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #666;
    margin-bottom: 2.5rem;
  }
`;

// =============================================================================
// КОМПОНЕНТ
// =============================================================================

const BanyaBookingSection = () => {
  const { t } = useTranslation();
  
  const handleContactClick = () => {
    // Плавная прокрутка к секции контактов
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Если на другой странице, переходим к контактам
      window.location.href = '/#contacts';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <BookingContainer>
      <ContentWrapper>
        <SectionHeader>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <CalendarIcon />
            Бронирование
          </Badge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Забронировать баню
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Для бронирования свяжитесь с нами удобным способом
          </SectionDescription>
        </SectionHeader>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ContactCTA variants={itemVariants}>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Готовы окунуться в мир русской бани?
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Свяжитесь с нами для получения подробной информации о ценах, 
              доступности и особенностях наших банных программ
            </motion.p>
            
            <ContactButton
              onClick={handleContactClick}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Перейти к контактам
              <ArrowRightIcon />
            </ContactButton>
          </ContactCTA>
        </motion.div>
      </ContentWrapper>
    </BookingContainer>
  );
};

export default BanyaBookingSection; 