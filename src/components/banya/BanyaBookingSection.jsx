import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, PhoneIcon, CalendarIcon } from '@heroicons/react/24/solid';

const BookingContainer = styled.section`
  padding: 8rem 0;
  background: linear-gradient(135deg, #f2dcc4 0%, #e8c5a0 100%);
  position: relative;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-family: "Playfair Display", serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.25rem;
  line-height: 1.6;
  color: #8B6F4A;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

const PrimaryButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 50px;
  background: linear-gradient(135deg, #8B4513 0%, #A0522D 100%);
  color: white !important;
  box-shadow: 0 10px 30px rgba(139, 69, 19, 0.3);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(139, 69, 19, 0.4);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 3rem;
  font-size: 1.125rem;
  font-weight: 500;
  border: 2px solid rgba(139, 69, 19, 0.3);
  background: rgba(255, 252, 250, 0.9);
  color: #8B4513;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-2px);
    background: rgba(139, 69, 19, 0.1);
    border-color: rgba(139, 69, 19, 0.5);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ContactInfo = styled(motion.div)`
  margin-top: 4rem;
  padding: 2rem;
  background: rgba(255, 252, 250, 0.8);
  border: 1px solid rgba(205, 133, 63, 0.2);
  border-radius: 25px;
  backdrop-filter: blur(10px);
`;

const ContactTitle = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  color: #8B4513;
  margin-bottom: 1rem;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.125rem;
  color: #8B6F4A;
  
  svg {
    width: 24px;
    height: 24px;
    color: #CD853F;
  }
`;

const BanyaBookingSection = () => {
  const { t } = useTranslation();

  return (
    <BookingContainer>
      <ContentWrapper>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Забронируйте сеанс
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Окунитесь в мир традиционной русской бани. Забронируйте свой сеанс прямо сейчас 
          и получите незабываемый опыт оздоровления и релаксации.
        </Subtitle>

        <ButtonGroup
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <PrimaryButton
            to="/contacts"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <CalendarIcon />
            Забронировать онлайн
            <ArrowRightIcon />
          </PrimaryButton>

          <SecondaryButton
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <PhoneIcon />
            Позвонить сейчас
          </SecondaryButton>
        </ButtonGroup>

        <ContactInfo
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <ContactTitle>Контакты для бронирования</ContactTitle>
          <ContactDetails>
            <ContactItem>
              <PhoneIcon />
              +7 (495) 123-45-67
            </ContactItem>
            <ContactItem>
              <CalendarIcon />
              Работаем ежедневно 10:00 - 22:00
            </ContactItem>
          </ContactDetails>
        </ContactInfo>
      </ContentWrapper>
    </BookingContainer>
  );
};

export default BanyaBookingSection; 