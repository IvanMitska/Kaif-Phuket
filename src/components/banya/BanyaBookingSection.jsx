import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  MapPinIcon,
  ClockIcon,
  FireIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid';

// =============================================================================
// СКАНДИНАВСКАЯ СЕКЦИЯ БРОНИРОВАНИЯ
// =============================================================================

const runeGlow = keyframes`
  0%, 100% { text-shadow: 0 0 10px #ff6b35, 0 0 20px #ff6b35; }
  50% { text-shadow: 0 0 20px #ff6b35, 0 0 30px #ff6b35, 0 0 40px #ff6b35; }
`;

const vikingFlame = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
  25% { transform: scale(1.1) rotate(2deg); opacity: 1; }
  50% { transform: scale(0.9) rotate(-1deg); opacity: 0.9; }
  75% { transform: scale(1.05) rotate(1deg); opacity: 0.95; }
`;

const BookingContainer = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0 clamp(6rem, 12vw, 10rem) 0;
  background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
  position: relative;
  overflow: hidden;
  margin: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 20%, rgba(255, 107, 53, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 70% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%);
    z-index: 1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 50%, #1a1a1a 100%);
    z-index: 2;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: clamp(4rem, 8vw, 6rem);
`;

const VikingBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid #ff6b35;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ff6b35;
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  
  &::before {
    content: '🔥';
    font-size: 1.2em;
    animation: ${vikingFlame} 2s ease-in-out infinite;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  color: #f5f5f5;
  margin-bottom: 2rem;
  line-height: 1.1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${runeGlow} 4s ease-in-out infinite;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: clamp(1.125rem, 2.5vw, 1.5rem);
  line-height: 1.6;
  color: #cccccc;
  max-width: 700px;
  margin: 0 auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const CTAContainer = styled.div`
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 26, 0.95) 100%);
  border: 2px solid rgba(255, 107, 53, 0.3);
  border-radius: 24px;
  padding: 4rem 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #ff6b35, #ffd662, #ff6b35);
    background-size: 200px 100%;
    animation: shimmer 2s linear infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
  
  &:hover {
    border-color: #ff6b35;
    box-shadow: 0 20px 40px rgba(255, 107, 53, 0.2);
  }
`;

const CTATitle = styled.h3`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  color: #f5f5f5;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  font-family: 'Bebas Neue', 'Arial Black', sans-serif;
  
  .highlight {
    color: #ff6b35;
    animation: ${runeGlow} 4s ease-in-out infinite;
  }
`;

const CTADescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactCard = styled(motion.div)`
  background: rgba(255, 107, 53, 0.1);
  border: 1px solid rgba(255, 107, 53, 0.3);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #ff6b35;
    background: rgba(255, 107, 53, 0.15);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(255, 107, 53, 0.2);
  }
`;

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  animation: ${vikingFlame} 3s ease-in-out infinite;
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: #1a1a1a;
  }
`;

const ContactTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  color: #f5f5f5;
  margin-bottom: 0.75rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const ContactValue = styled.p`
  font-size: 1rem;
  color: #cccccc;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
  }
`;

const VikingButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: #1a1a1a;
  border: none;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 
      0 10px 30px rgba(255, 107, 53, 0.4),
      0 0 30px rgba(255, 107, 53, 0.3);
  
    &::before {
      left: 100%;
    }
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const SecondaryButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 3rem;
  background: transparent;
  color: #f5f5f5;
  border: 2px solid #ff6b35;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  backdrop-filter: blur(10px);
  min-width: 200px;
  justify-content: center;
  
  &:hover {
    background: rgba(255, 107, 53, 0.1);
    border-color: #ffd662;
    color: #ffd662;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(255, 107, 53, 0.2);
  }
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

// Декоративные викингские элементы
const VikingOrnament = styled.div`
  position: absolute;
  font-size: 6rem;
  color: rgba(255, 107, 53, 0.05);
  z-index: 1;
  
  &.top-left {
    top: 10%;
    left: 5%;
    transform: rotate(-30deg);
  }
  
  &.bottom-right {
    bottom: 10%;
    right: 5%;
    transform: rotate(30deg);
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const BanyaBookingSection = () => {
  const { t } = useTranslation();
  
  const handleContactClick = () => {
    const phoneNumber = t('common.phone_number', '+66 62 480 5877');
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = t('common.phone_number', '+66 62 480 5877');
    const message = encodeURIComponent(t('common.whatsapp_messages.book_banya', 'Hello! I would like to book the Russian Banya'));
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

      const handleLocationClick = () => {
      window.open('https://maps.app.goo.gl/h7PzpHpBeurg7eK18', '_blank');
    };

  const contactInfo = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'WhatsApp',
      value: 'Book via WhatsApp',
      action: handleWhatsAppClick
    },
    {
      icon: MapPinIcon,
      title: 'Location',
      value: 'Kathu, Phuket',
      action: handleLocationClick
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      value: '17:00 - 22:00',
      action: null
    }
  ];

  return (
    <BookingContainer>
      {/* Декоративные викингские орнаменты */}
      <VikingOrnament className="top-left">᚛ᚃᚔᚏᚓ᚜</VikingOrnament>
      <VikingOrnament className="bottom-right">᚛ᚔᚉᚓ᚜</VikingOrnament>
      
      <ContentWrapper>
        <SectionHeader>
          <VikingBadge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('banya.booking.badge', 'Booking')}
          </VikingBadge>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Book the <span className="highlight">Banya</span>
          </SectionTitle>
          
          <SectionDescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('banya.booking.description', 'Contact us through convenient channels for booking')}
          </SectionDescription>
        </SectionHeader>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CTAContainer>
            <CTATitle>
              Ready to immerse in the world of <span className="highlight">Russian Banya</span>?
            </CTATitle>
            
            <CTADescription>
              {t('banya.booking.cta.description', 'Contact us for detailed information about prices, availability and features of our banya programs')}
            </CTADescription>
            
            <ContactGrid>
              {contactInfo.map((contact, index) => (
                <ContactCard
                  key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  onClick={contact.action}
                  style={{ cursor: contact.action ? 'pointer' : 'default' }}
                >
                  <ContactIcon>
                    <contact.icon />
                  </ContactIcon>
                  <ContactTitle>{contact.title}</ContactTitle>
                  <ContactValue>{contact.value}</ContactValue>
                </ContactCard>
              ))}
            </ContactGrid>
            
            <ButtonGroup>
              <VikingButton
                onClick={handleWhatsAppClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChatBubbleLeftRightIcon />
                Book via WhatsApp
              </VikingButton>
            
              <SecondaryButton
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <PhoneIcon />
                Call Now
              </SecondaryButton>
            </ButtonGroup>
          </CTAContainer>
        </motion.div>
      </ContentWrapper>
    </BookingContainer>
  );
};

export default BanyaBookingSection; 