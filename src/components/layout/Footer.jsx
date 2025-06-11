import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  HeartIcon,
  SparklesIcon
} from '@heroicons/react/24/solid';

// Импортируем логотип для футера
import footerLogo from '../../assets/images/logos/logo-footer.png';

// =============================================================================
// WELLNESS SANCTUARY FOOTER COMPONENTS
// =============================================================================

const FooterWrapper = styled.footer`
  position: relative;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  padding: 3rem 2rem 0;
  color: white;
  z-index: 1;
  overflow: hidden;
  margin: -5px 0 0 0;
  min-height: auto;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 10px;
    background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    padding: 2.5rem 1rem 0;
  }
`;

const FooterContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1.5rem 0;
  
  @media (min-width: 1024px) {
    padding: 3rem 2rem 0;
  }
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 1.8fr 1fr 1fr 1.2fr;
    gap: 2.5rem;
  }
`;

// Brand Section
const BrandSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  
  @media (max-width: 1023px) {
    text-align: center;
    align-items: center;
    grid-column: 1 / -1;
    margin-bottom: 0.5rem;
  }
`;

const FooterLogo = styled(motion.img)`
  height: auto;
  width: 360px;
  object-fit: contain;
  margin-bottom: 1.5rem;
  filter: brightness(1.2) contrast(1.1);
  display: block;
  
  /* Десктопная версия и iPad Pro с отрицательным отступом */
  @media (min-width: 1024px) {
    margin-left: -3.5rem;
    align-self: flex-start;
  }
  
  /* Специальные стили для iPad Pro (1024px и выше по ширине) */
  @media (min-width: 1024px) and (max-width: 1366px) and (orientation: portrait) {
    margin-left: -3.2rem;
    width: 320px;
  }
  
  /* Стили для iPad Air и маленьких планшетов (820-900px) */
  @media (min-width: 820px) and (max-width: 900px) {
    margin: 0 auto 1.5rem;
    width: 300px;
    align-self: center;
  }
  
  /* Стили для средних планшетов */
  @media (min-width: 901px) and (max-width: 1023px) {
    margin-left: 0;
    width: 300px;
    align-self: flex-start;
  }
  
  /* Мобильная версия с центрированием */
  @media (max-width: 768px) {
    margin: 0 auto 1.5rem;
    width: 320px;
    align-self: center;
  }
`;

const BrandSubtitle = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 1.5rem;
`;

const BrandDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 400px;
  
  @media (max-width: 1023px) {
    max-width: 480px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.05rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  backdrop-filter: blur(10px);
  
  &:hover {
    background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, rgba(255, 99, 71, 0.07) 0%, rgba(255, 99, 71, 0.10) 5%, rgba(206, 128, 114, 0.12) 12%, rgba(157, 157, 157, 0.15) 20%, rgba(108, 186, 200, 0.18) 28%, rgba(0, 180, 216, 0.20) 36%, rgba(71, 168, 203, 0.18) 44%, rgba(142, 157, 188, 0.15) 52%, rgba(214, 145, 173, 0.12) 60%, rgba(255, 105, 180, 0.10) 68%, rgba(219, 140, 149, 0.12) 76%, rgba(183, 175, 118, 0.15) 84%, rgba(147, 210, 95, 0.10) 92%, rgba(92, 184, 72, 0.07) 100%)'};
    border-color: rgba(255, 255, 255, 0.4);
    color: white;
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 10px 25px rgba(144, 179, 167, 0.3);
  }
  
  svg {
    width: 1rem;
    height: 1rem;
  }
`;

// Footer Section
const FooterSection = styled(motion.div)`
  text-align: center;
  
  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.heading || '"Playfair Display", serif'};
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.25rem;
  color: white;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -0.5rem;
    width: 40px;
    height: 2px;
    background: linear-gradient(135deg, 
      ${({ theme }) => theme?.colors?.primary || '#90B3A7'} 0%, 
      ${({ theme }) => theme?.colors?.secondary || '#D4A574'} 100%
    );
  }
  
  @media (max-width: 1023px) {
    text-align: center;
    font-size: 1.3rem;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const FooterLink = styled(Link)`
  display: block;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.4rem 0;
  transition: all 0.3s ease;
  
  &:hover {
    color: white;
    transform: translateX(4px);
  }
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
  
  @media (max-width: 1023px) {
    justify-content: center;
    text-align: left;
  }
  
  svg {
    width: 1.1rem;
    height: 1.1rem;
    color: rgba(144, 179, 167, 0.8);
    margin-top: 0.125rem;
    flex-shrink: 0;
  }
`;

const ContactText = styled.div`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

const ContactLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: white;
  }
`;

// Footer Bottom
const FooterBottom = styled.div`
  padding: 1.5rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Copyright = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
  
  .highlight {
    color: rgba(144, 179, 167, 0.8);
    font-weight: 500;
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  a {
    font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;

// Floating decorative elements
const FloatingDecoration = styled(motion.div)`
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${({ $variant }) => {
    switch($variant) {
      case 'secondary':
        return 'linear-gradient(135deg, rgba(212, 165, 116, 0.08) 0%, rgba(184, 196, 168, 0.06) 100%)';
      case 'tertiary':
        return 'linear-gradient(135deg, rgba(184, 196, 168, 0.08) 0%, rgba(144, 179, 167, 0.06) 100%)';
      default:
        return 'linear-gradient(135deg, rgba(144, 179, 167, 0.08) 0%, rgba(212, 165, 116, 0.06) 100%)';
    }
  }};
  filter: blur(60px);
  z-index: 2;
  pointer-events: none;
  
  &.deco-1 {
    top: -50px;
    left: 10%;
  }
  
  &.deco-2 {
    top: 30%;
    right: 5%;
  }
  
  &.deco-3 {
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

// =============================================================================
// FOOTER COMPONENT
// =============================================================================

const Footer = () => {
  const { t } = useTranslation();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
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
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror"
      }
    }
  };

  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { path: '/', label: t('navigation.home'), id: 'home' },
    { path: '/restaurant', label: t('navigation.restaurant'), id: 'restaurant' },
    { path: '/spa', label: t('navigation.spa'), id: 'spa' },
    { path: '/sports', label: t('navigation.sports'), id: 'sports-main' },
    { path: '/contacts', label: t('navigation.contacts'), id: 'contacts' },
  ];

  const serviceLinks = [
    { path: '/spa', label: t('footer.services.sauna'), id: 'spa-sauna' },
    { path: '/restaurant', label: t('navigation.restaurant'), id: 'restaurant' },
    { path: '/sports', label: t('footer.services.fitness'), id: 'sports-fitness' },
    { path: '/banya', label: t('navigation.banya'), id: 'banya' },
    { path: '/sports', label: t('footer.services.fight_club'), id: 'sports-club' },
  ];

  return (
    <FooterWrapper>
      {/* Floating Decorations */}
      <FloatingDecoration 
        className="deco-1"
        $variant="primary"
        variants={floatVariants}
        animate="animate"
      />
      <FloatingDecoration 
        className="deco-2"
        $variant="secondary"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '-4s' }}
      />
      <FloatingDecoration 
        className="deco-3"
        $variant="tertiary"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: '-8s' }}
      />

      <FooterContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <FooterMain>
            {/* Brand Section */}
            <BrandSection variants={itemVariants}>
              <FooterLogo
                src={footerLogo}
                alt="KAIF"
                whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
              />
              <BrandDescription>
                {t('footer.brand.description')}
              </BrandDescription>
              <SocialLinks>
                <SocialLink
                  href="https://www.instagram.com/kaif.phuket/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </SocialLink>
                <SocialLink
                  href="https://web.facebook.com/kaifphuketfb?mibextid=LQQJ4d&_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </SocialLink>
                <SocialLink
                  href="https://t.me/kaifphuketchat"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="m20.665 3.717-17.73 6.837c-1.21.486-1.203 1.161-.222 1.462l4.552 1.42 10.532-6.645c.498-.303.953-.14.579.192l-8.533 7.701h-.002l.002.001-.314 4.692c.46 0 .663-.211.921-.46l2.211-2.15 4.599 3.397c.848.467 1.457.227 1.668-.789l3.019-14.228c.309-1.239-.473-1.8-1.282-1.434z"/>
                  </svg>
                </SocialLink>
                <SocialLink
                  href="https://www.youtube.com/@KaifPhuket"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </SocialLink>
                <SocialLink
                  href="https://api.whatsapp.com/send/?phone=66624805877&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, transition: { duration: 0.3, ease: "easeOut" } }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                </SocialLink>
              </SocialLinks>
            </BrandSection>

            {/* Navigation */}
            <FooterSection variants={itemVariants}>
              <SectionTitle>{t('footer.navigation')}</SectionTitle>
              {navigationLinks.map((link) => (
                <FooterLink key={link.id} to={link.path}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterSection>

            {/* Services */}
            <FooterSection variants={itemVariants}>
              <SectionTitle>{t('footer.services.title')}</SectionTitle>
              {serviceLinks.map((link) => (
                <FooterLink key={link.id} to={link.path}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterSection>

            {/* Contact Info */}
            <FooterSection variants={itemVariants}>
              <SectionTitle>{t('navigation.contacts')}</SectionTitle>
              
              <ContactItem>
                <MapPinIcon />
                <ContactText>
                  73, Baan Chalekiri Village,<br />
                  6 Pra Phuket Keaw Road, Kathu
                </ContactText>
              </ContactItem>

              <ContactItem>
                <PhoneIcon />
                <ContactText>
                  <ContactLink href="tel:+66624805877">
                    +66 62 480 5877
                  </ContactLink>
                </ContactText>
              </ContactItem>

              <ContactItem>
                <ClockIcon />
                <ContactText>
                  {t('footer.schedule.daily')}<br />
                  {t('footer.schedule.hours')}
                </ContactText>
              </ContactItem>


            </FooterSection>
          </FooterMain>

          {/* Footer Bottom */}
          <FooterBottom>
            <Copyright>
              &copy; {currentYear} <span className="highlight">KAIF</span>. 
              {t('footer.copyright')}
            </Copyright>
            <LegalLinks>
              <Link to="/privacy">{t('footer.legal.privacy')}</Link>
              <Link to="/terms">{t('footer.legal.terms')}</Link>
            </LegalLinks>
          </FooterBottom>
        </motion.div>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
