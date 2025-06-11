import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  ChevronDownIcon,
  ChatBubbleLeftEllipsisIcon,
  CalendarDaysIcon,
  UserIcon
} from '@heroicons/react/24/outline';


// Социальные сети
const SocialSection = styled(motion.section)`
  padding: 4rem 0;
  background: linear-gradient(135deg, 
    rgba(144, 179, 167, 0.03) 0%, 
    rgba(168, 197, 184, 0.02) 50%, 
    rgba(212, 165, 116, 0.03) 100%
  );
`;

const SocialGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  /* Делаем каждую карточку одинакового размера */
  & > * {
    flex: 0 0 auto;
    width: 140px;
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 2rem;
    max-width: 600px;
    
    & > * {
      width: 120px;
    }
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
    margin-top: 1.5rem;
    max-width: 350px;
    
    & > * {
      width: 100px;
    }
  }
`;

const SocialCard = styled(motion.a)`
  background: white;
  border-radius: 16px;
  padding: 1.5rem 1rem;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(144, 179, 167, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
  }
  
  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    border-color: rgba(144, 179, 167, 0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  &:active {
    transform: translateY(-2px) scale(1.01);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 0.8rem;
    border-radius: 12px;
    gap: 0.8rem;
    
    &:hover {
      transform: translateY(-2px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem 0.6rem;
    gap: 0.6rem;
  }
`;

const SocialIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.bgColor || 'linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: inherit;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
  }
  
  svg {
    width: 24px;
    height: 24px;
    color: white;
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
    
    svg {
      width: 22px;
      height: 22px;
    }
  }
  
  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SocialName = styled.span`
  font-weight: 600;
  color: #2C3E2D;
  font-size: 0.95rem;
  text-align: center;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

// Основной контейнер страницы
const ContactsContainer = styled.div`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.primary};
  overflow-x: hidden;
`;

// Упрощенная Hero секция без фонового изображения
const HeroSection = styled(motion.section)`
  position: relative;
  padding: 8rem 0 4rem;
  background: linear-gradient(135deg, 
    rgba(144, 179, 167, 0.08) 0%, 
    rgba(168, 197, 184, 0.05) 50%, 
    rgba(212, 165, 116, 0.08) 100%
  );
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 6rem 0 3rem;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 600;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  color: #2C3E2D;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  margin-bottom: 3rem;
  line-height: 1.6;
  color: #5A6B5D;
  font-weight: 400;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ScrollButton = styled(motion.button)`
  background: rgba(144, 179, 167, 0.1);
  border: 2px solid rgba(144, 179, 167, 0.3);
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #90B3A7;
  cursor: pointer;
  margin: 0 auto;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(144, 179, 167, 0.2);
    border-color: rgba(144, 179, 167, 0.5);
    transform: translateY(-2px);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

// Основная секция контента
const ContentSection = styled(motion.section)`
  padding: 6rem 0;
  background: #ffffff;
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(2rem, 4vw, 2.5rem);
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: #2C3E2D;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #5A6B5D;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

// Контактная информация
const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 6rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ContactCard = styled(motion.div)`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(144, 179, 167, 0.1);
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
    border-color: rgba(144, 179, 167, 0.2);
  }
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    width: 24px;
    height: 24px;
    color: white;
  }
`;

const ContactTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2C3E2D;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: #5A6B5D;
  font-weight: 500;
  font-size: 0.95rem;
  
  svg {
    width: 18px;
    height: 18px;
    color: #90B3A7;
    flex-shrink: 0;
  }
`;

// Карта секция
const MapSection = styled(motion.section)`
  padding: 6rem 0;
  background: linear-gradient(135deg, 
    rgba(144, 179, 167, 0.03) 0%, 
    rgba(168, 197, 184, 0.02) 100%
  );
`;

const MapContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const MapFrame = styled.div`
  border-radius: 20px;
  overflow: hidden;
  height: 350px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  margin-top: 3rem;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const ContactsPage = () => {
  const { t } = useTranslation();
  const contentRef = useRef(null);
  const [isReady, setIsReady] = useState(false);


  useEffect(() => {
    document.body.classList.add('contacts-page');
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);
    
    return () => {
      document.body.classList.remove('contacts-page');
      clearTimeout(timer);
    };
  }, []);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };



  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };

  if (!isReady) {
    return null;
  }

  return (
    <ContactsContainer
      as={motion.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      {/* Упрощенная Hero Section */}
      <HeroSection
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t('contacts.hero.title', 'Контакты')}
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('contacts.hero.subtitle', 'Мы всегда готовы помочь вам и ответить на все ваши вопросы')}
          </HeroSubtitle>
          <ScrollButton
            onClick={scrollToContent}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronDownIcon />
          </ScrollButton>
        </HeroContent>
      </HeroSection>

      {/* Contact Information */}
      <ContentSection
        ref={contentRef}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ContentContainer>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('contacts.info.title', 'Свяжитесь с нами')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('contacts.info.subtitle', 'Выберите удобный способ связи')}
          </SectionSubtitle>

          <ContactGrid>
            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <ContactIcon>
                <PhoneIcon />
              </ContactIcon>
              <ContactTitle>{t('contacts.phone.title', 'Телефон')}</ContactTitle>
              <ContactDetails>
                <ContactDetail>
                  <PhoneIcon />
                  <span>+66 62 480 5877</span>
                </ContactDetail>
                <ContactDetail>
                  <ChatBubbleLeftEllipsisIcon />
                  <span>{t('contacts.phone.whatsapp', 'WhatsApp доступен')}</span>
                </ContactDetail>
              </ContactDetails>
            </ContactCard>

            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <ContactIcon>
                <EnvelopeIcon />
              </ContactIcon>
              <ContactTitle>{t('contacts.email.title', 'Email')}</ContactTitle>
              <ContactDetails>
                <ContactDetail>
                  <EnvelopeIcon />
                  <span>info@kaif-phuket.com</span>
                </ContactDetail>
                <ContactDetail>
                  <CalendarDaysIcon />
                  <span>{t('contacts.email.response', 'Ответ в течение 24 часов')}</span>
                </ContactDetail>
              </ContactDetails>
            </ContactCard>

            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <ContactIcon>
                <MapPinIcon />
              </ContactIcon>
              <ContactTitle>{t('contacts.address.title', 'Адрес')}</ContactTitle>
              <ContactDetails>
                <ContactDetail>
                  <MapPinIcon />
                  <span>73, Baan Chalekiri Village, 6 Pra Phuket Keaw Road, Kathu</span>
                </ContactDetail>
              </ContactDetails>
            </ContactCard>

            <ContactCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
            >
              <ContactIcon>
                <ClockIcon />
              </ContactIcon>
              <ContactTitle>{t('contacts.hours.title', 'Время работы')}</ContactTitle>
              <ContactDetails>
                <ContactDetail>
                  <ClockIcon />
                  <span>{t('contacts.hours.daily', 'Ежедневно: 7:00 - 22:00')}</span>
                </ContactDetail>
                <ContactDetail>
                  <UserIcon />
                  <span>{t('contacts.hours.booking', 'Бронирование 24/7')}</span>
                </ContactDetail>
              </ContactDetails>
            </ContactCard>
          </ContactGrid>
        </ContentContainer>
      </ContentSection>

      {/* Social Media Section */}
      <SocialSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ContentContainer>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Следите за нами в соцсетях
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Будьте в курсе последних новостей и акций KAIF
          </SectionSubtitle>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SocialGrid>
              <SocialCard
                href="https://www.instagram.com/kaif.phuket/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <SocialIcon bgColor="linear-gradient(135deg, #E4405F 0%, #C13584 100%)">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </SocialIcon>
                <SocialName>Instagram</SocialName>
              </SocialCard>

              <SocialCard
                href="https://t.me/kaifphuketchat"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <SocialIcon bgColor="linear-gradient(135deg, #0088cc 0%, #229ED9 100%)">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                  </svg>
                </SocialIcon>
                <SocialName>Telegram</SocialName>
              </SocialCard>

              <SocialCard
                href="https://api.whatsapp.com/send/?phone=66624805877&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <SocialIcon bgColor="linear-gradient(135deg, #25D366 0%, #128C7E 100%)">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                </SocialIcon>
                <SocialName>WhatsApp</SocialName>
              </SocialCard>

              <SocialCard
                href="https://web.facebook.com/kaifphuketfb?mibextid=LQQJ4d&_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <SocialIcon bgColor="linear-gradient(135deg, #1877F2 0%, #42A5F5 100%)">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </SocialIcon>
                <SocialName>Facebook</SocialName>
              </SocialCard>

              <SocialCard
                href="https://www.youtube.com/@KaifPhuket"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5, type: "spring", bounce: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
              >
                <SocialIcon bgColor="linear-gradient(135deg, #FF0000 0%, #FF4500 100%)">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </SocialIcon>
                <SocialName>YouTube</SocialName>
              </SocialCard>
            </SocialGrid>
          </motion.div>
        </ContentContainer>
      </SocialSection>



      {/* Map Section */}
      <MapSection
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <MapContainer>
          <SectionTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('contacts.map.title', 'Как нас найти')}
          </SectionTitle>
          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('contacts.map.subtitle', 'Удобное расположение в центре Катху, Пхукет')}
          </SectionSubtitle>
          
          <MapFrame
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8203398876644!2d98.35104997604789!3d7.913827992109515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031603c054903%3A0x818d8108ef4f8a55!2sKAIF%20%E2%80%93%20Jungle%20club%20%26%20SPA!5e0!3m2!1sru!2sth!4v1749550261501!5m2!1sru!2sth"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KAIF Jungle Club & SPA Location"
            />
          </MapFrame>
        </MapContainer>
      </MapSection>
    </ContactsContainer>
  );
};

export default ContactsPage;
