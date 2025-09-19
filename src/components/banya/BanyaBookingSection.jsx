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
  padding: clamp(5rem, 10vw, 8rem) 0;
  background:
    linear-gradient(180deg, #0a0a0a 0%, #0f0d0a 50%, #0a0a0a 100%),
    radial-gradient(ellipse at 20% 0%, rgba(255, 107, 53, 0.03) 0%, transparent 40%),
    radial-gradient(ellipse at 80% 100%, rgba(255, 214, 98, 0.03) 0%, transparent 40%);
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
  gap: 0.5rem;
  padding: 0.625rem 1.5rem;
  background:
    linear-gradient(135deg, rgba(255, 107, 53, 0.05) 0%, transparent 100%),
    rgba(20, 20, 20, 0.4);
  border: 1px solid rgba(255, 214, 98, 0.25);
  border-radius: 40px;
  font-size: 0.75rem;
  font-weight: 500;
  color: #ffd662;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  &::before {
    content: '✱';
    font-size: 1em;
    color: #ff6b35;
    opacity: 0.7;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.75rem, 7vw, 4.5rem);
  font-weight: 700;
  color: transparent;
  background: linear-gradient(
    135deg,
    #ffffff 0%,
    #f0f0f0 50%,
    #e0e0e0 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 1.75rem;
  line-height: 1.05;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  letter-spacing: -0.02em;

  .highlight {
    background: linear-gradient(
      135deg,
      #ff6b35 0%,
      #ffd662 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
  }
`;

const SectionDescription = styled(motion.p)`
  font-size: clamp(1.05rem, 2.25vw, 1.375rem);
  line-height: 1.7;
  color: rgba(204, 204, 204, 0.9);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: 0.01em;
  opacity: 0.85;
`;

const CTAContainer = styled.div`
  background:
    linear-gradient(135deg, rgba(20, 18, 15, 0.6) 0%, rgba(10, 10, 10, 0.7) 100%),
    radial-gradient(ellipse at top left, rgba(255, 107, 53, 0.05) 0%, transparent 50%);
  border: 1px solid rgba(255, 214, 98, 0.15);
  border-radius: 32px;
  padding: 3.5rem 2.5rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(30px) saturate(1.2);
  box-shadow:
    0 20px 60px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 214, 98, 0.5),
      transparent
    );
    background-size: 200% 100%;
    animation: shimmer 3s linear infinite;
  }
  
  @keyframes shimmer {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
  
  &:hover {
    border-color: rgba(255, 214, 98, 0.25);
    box-shadow:
      0 25px 70px rgba(0, 0, 0, 0.5),
      0 10px 30px rgba(255, 107, 53, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
    transform: translateY(-2px);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
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
  background:
    linear-gradient(135deg, rgba(255, 107, 53, 0.03) 0%, transparent 100%),
    rgba(20, 20, 20, 0.3);
  border: 1px solid rgba(255, 214, 98, 0.15);
  border-radius: 24px;
  padding: 2.25rem 1.75rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:hover {
    border-color: rgba(255, 214, 98, 0.3);
    background:
      linear-gradient(135deg, rgba(255, 107, 53, 0.08) 0%, transparent 100%),
      rgba(25, 25, 25, 0.4);
    transform: translateY(-4px) scale(1.02);
    box-shadow:
      0 12px 35px rgba(0, 0, 0, 0.3),
      0 5px 15px rgba(255, 107, 53, 0.15);
  }
`;

const ContactIcon = styled.div`
  width: 56px;
  height: 56px;
  background:
    linear-gradient(135deg, rgba(255, 107, 53, 0.9) 0%, rgba(255, 140, 66, 0.9) 100%),
    rgba(30, 30, 30, 0.8);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  box-shadow:
    0 4px 12px rgba(255, 107, 53, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  
  svg {
    width: 1.4rem;
    height: 1.4rem;
    color: #ffffff;
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
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: #ffffff;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-transform: none;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  justify-content: center;
  box-shadow:
    0 4px 15px rgba(255, 107, 53, 0.35),
    0 1px 3px rgba(0, 0, 0, 0.1);
  
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
    transform: translateY(-2px) scale(1.03);
    box-shadow:
      0 8px 25px rgba(255, 107, 53, 0.45),
      0 2px 8px rgba(0, 0, 0, 0.15);
  
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
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: rgba(255, 255, 255, 0.02);
  color: rgba(245, 245, 245, 0.95);
  border: 1.5px solid rgba(255, 107, 53, 0.35);
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  text-transform: none;
  letter-spacing: 0.02em;
  backdrop-filter: blur(20px) saturate(1.2);
  min-width: 200px;
  justify-content: center;
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.03);
  
  &:hover {
    background: rgba(255, 107, 53, 0.06);
    border-color: rgba(255, 214, 98, 0.5);
    color: #ffd662;
    transform: translateY(-2px) scale(1.03);
    box-shadow:
      0 6px 20px rgba(255, 107, 53, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.08);
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
      title: t('banya.booking.contact.whatsapp.title', 'WhatsApp'),
      value: t('banya.booking.contact.whatsapp.value', 'Book via WhatsApp'),
      action: handleWhatsAppClick
    },
    {
      icon: MapPinIcon,
      title: t('banya.booking.contact.location.title', 'Location'),
      value: t('banya.booking.contact.location.value', 'Kathu, Phuket'),
      action: handleLocationClick
    },
    {
      icon: ClockIcon,
      title: t('banya.booking.contact.hours.title', 'Hours'),
      value: t('banya.booking.contact.hours.value', '17:00 - 22:00'),
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
            <span dangerouslySetInnerHTML={{ __html: t('banya.booking.title', 'Book the <span className="highlight">Banya</span>') }} />
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
              <span dangerouslySetInnerHTML={{ __html: t('banya.booking.cta.title', 'Ready to immerse in the world of <span className="highlight">Russian Banya</span>?') }} />
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
                {t('banya.booking.book_whatsapp_button', 'Book via WhatsApp')}
              </VikingButton>
            
              <SecondaryButton
              onClick={handleContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
                <PhoneIcon />
                {t('banya.booking.call_now_button', 'Call Now')}
              </SecondaryButton>
            </ButtonGroup>
          </CTAContainer>
        </motion.div>
      </ContentWrapper>
    </BookingContainer>
  );
};

export default BanyaBookingSection; 