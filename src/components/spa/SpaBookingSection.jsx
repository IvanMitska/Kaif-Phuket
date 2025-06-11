import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  PhoneIcon, 
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СОВРЕМЕННАЯ СЕКЦИЯ БРОНИРОВАНИЯ SPA
// =============================================================================

const BookingContainer = styled.section`
  position: relative;
  padding: 5rem 0 0 0; /* Убираем нижний padding для устранения белой линии */
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(168, 197, 184, 0.03) 100%);
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 3rem 0 0 0;
  }
  
  @media (max-width: 480px) {
    padding: 2rem 0 0 0;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem 5rem 1.5rem; /* Добавляем нижний padding здесь */
  
  @media (min-width: 1024px) {
    padding: 0 2rem 5rem 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem 3rem 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 1rem 2rem 1rem;
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
  margin: 0 auto 3rem auto;
`;

const BookingGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
`;

const BookingCard = styled(motion.div)`
  background: white;
  border: 1px solid #f1f5f9;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #90B3A7 0%, #A8C5B8 100%);
  }
  
  &:hover {
    border-color: #e2e8f0;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`;

const CardIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: rgba(144, 179, 167, 0.08);
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90B3A7;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  ${BookingCard}:hover & {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    transform: scale(1.1);
  }
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Poppins", sans-serif'};
  font-size: 1.5rem;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 1rem;
  line-height: 1.3;
`;

const CardDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 2rem;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: #64748b;
  
  svg {
    width: 1rem;
    height: 1rem;
    color: #90B3A7;
    flex-shrink: 0;
  }
  
  a {
    color: #90B3A7;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;
    
    &:hover {
      color: #7A8A7D;
    }
  }
`;

const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(144, 179, 167, 0.3);
  
  &:hover {
    box-shadow: 0 6px 20px rgba(144, 179, 167, 0.4);
    transform: translateY(-1px);
    color: white;
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 1.5rem;
  background: rgba(144, 179, 167, 0.08);
  color: #90B3A7;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  font-weight: 600;
  border: 1px solid rgba(144, 179, 167, 0.15);
  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    color: white;
    border-color: transparent;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(144, 179, 167, 0.3);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

// =============================================================================
// SPA BOOKING SECTION COMPONENT
// =============================================================================

const SpaBookingSection = () => {
  const { t } = useTranslation();

  // Animation variants
  const cardVariants = {
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

  return (
    <BookingContainer>
      <ContentWrapper>
        <SectionHeader>
          <SectionBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <CalendarDaysIcon />
            {t('spa.booking.badge', 'Бронирование')}
          </SectionBadge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {t('spa.booking.title', 'Записаться на процедуру')}
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('spa.booking.description', 'Забронируйте SPA-процедуру или услугу салона красоты для полного расслабления')}
          </SectionSubtitle>
        </SectionHeader>

        <BookingGrid>
          {/* Телефонное бронирование */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <BookingCard>
              <CardIcon>
                <PhoneIcon />
              </CardIcon>
              <CardTitle>{t('spa.booking.phone.title', 'Позвонить для записи')}</CardTitle>
              <CardDescription>
                {t('spa.booking.phone.description', 'Свяжитесь с нами по телефону для быстрого бронирования. Наши консультанты помогут выбрать подходящую процедуру и время.')}
              </CardDescription>
              
              <ContactList>
                <ContactItem>
                  <ClockIcon />
                  <span>{t('spa.booking.phone.hours', 'Прием звонков: 9:00 - 21:00')}</span>
                </ContactItem>
                <ContactItem>
                  <MapPinIcon />
                  <span>{t('spa.booking.phone.location', 'Пхукет, Таиланд')}</span>
                </ContactItem>
              </ContactList>
              
              <div style={{ marginTop: '1.5rem' }}>
                <ActionButton 
                  href="tel:+66624805877"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <PhoneIcon />
                  +66 62 480 5877
                </ActionButton>
              </div>
            </BookingCard>
          </motion.div>

          {/* WhatsApp бронирование */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
          >
            <BookingCard>
              <CardIcon>
                <ChatBubbleLeftRightIcon />
              </CardIcon>
              <CardTitle>{t('spa.booking.whatsapp.title', 'WhatsApp чат')}</CardTitle>
              <CardDescription>
                {t('spa.booking.whatsapp.description', 'Напишите нам в WhatsApp для удобного бронирования. Мы быстро ответим и поможем выбрать лучшее время для вас.')}
              </CardDescription>
              
              <ContactList>
                <ContactItem>
                  <ClockIcon />
                  <span>{t('spa.booking.whatsapp.hours', 'Онлайн поддержка: 24/7')}</span>
                </ContactItem>
                <ContactItem>
                  <ChatBubbleLeftRightIcon />
                  <span>{t('spa.booking.whatsapp.feature', 'Быстрые ответы')}</span>
                </ContactItem>
              </ContactList>
              
              <div style={{ marginTop: '1.5rem' }}>
                <SecondaryButton 
                  href="https://wa.me/66624805877"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ChatBubbleLeftRightIcon />
                  {t('spa.booking.whatsapp.button', 'Написать в WhatsApp')}
                </SecondaryButton>
              </div>
            </BookingCard>
          </motion.div>
        </BookingGrid>
      </ContentWrapper>
    </BookingContainer>
  );
};

export default SpaBookingSection;
