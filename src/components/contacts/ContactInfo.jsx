import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import { 
  Section,
  ContentContainer,
  SectionTitle,
  SectionSubtitle,
  Grid
} from '../ui/CommonComponents';
import { fadeInUp, staggerContainer } from '../ui/animations';

const ContactCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
    border-color: rgba(144, 179, 167, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 8px 20px rgba(144, 179, 167, 0.3);
  
  svg {
    width: 30px;
    height: 30px;
    color: white;
  }
`;

const ContactTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.heading};
`;

const ContactDetails = styled.div`
  color: ${props => props.theme.colors.text.secondary};
  line-height: 1.8;
  font-size: 1rem;
  
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.colors.zones.spa};
      text-decoration: underline;
    }
  }
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background: rgba(144, 179, 167, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(144, 179, 167, 0.2);
    transform: translateX(5px);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ContactInfo = () => {
  const { t } = useTranslation();

  const contactData = [
    {
      icon: MapPinIcon,
      title: t('contacts.info.address.title'),
      details: (
        <div>
          <div>{t('common.address')}</div>
          <div>Phuket, Thailand</div>
          <ContactLink 
            href="https://maps.google.com/?q=73+Baan+Chalekiri+Village+Kathu+Phuket" 
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('contacts.info.address.directions')}
            <ArrowTopRightOnSquareIcon />
          </ContactLink>
        </div>
      )
    },
    {
      icon: PhoneIcon,
      title: t('contacts.info.phone.title'),
      details: (
        <div>
          <div>
            <a href="tel:+66624805877">{t('common.phone_number')}</a>
          </div>
          <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
            {t('contacts.info.phone.hours')}
          </div>
          <ContactLink 
            href="https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20в%20KAIF"
            target="_blank"
            rel="noopener noreferrer"
          >
            Написать в WhatsApp
            <ArrowTopRightOnSquareIcon />
          </ContactLink>
        </div>
      )
    },
    {
      icon: EnvelopeIcon,
      title: t('contacts.info.email.title'),
      details: (
        <div>
          <div>
            <a href="mailto:info@kaif-phuket.com">info@kaif-phuket.com</a>
          </div>
          <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
            {t('contacts.info.email.response')}
          </div>
        </div>
      )
    },
    {
      icon: ClockIcon,
      title: t('contacts.info.hours.title'),
      details: (
        <div>
          <div>{t('contacts.info.hours.weekdays')}</div>
          <div>{t('contacts.info.hours.weekends')}</div>
        </div>
      )
    },
    {
      icon: GlobeAltIcon,
      title: t('contacts.info.social.title'),
      details: (
        <div>
          <ContactLink 
            href="https://instagram.com/kaif_phuket" 
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <ArrowTopRightOnSquareIcon />
          </ContactLink>
          <ContactLink 
            href="https://facebook.com/kaif.phuket" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginLeft: '1rem' }}
          >
            Facebook
            <ArrowTopRightOnSquareIcon />
          </ContactLink>
        </div>
      )
    }
  ];

  return (
    <Section>
      <ContentContainer>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionTitle
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t('contacts.info.title')}
          </SectionTitle>
          
          <SectionSubtitle
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('contacts.info.subtitle')}
          </SectionSubtitle>

          <Grid style={{ marginTop: '4rem' }}>
            {contactData.map((item, index) => (
              <ContactCard
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <IconContainer>
                  <item.icon />
                </IconContainer>
                <ContactTitle>{item.title}</ContactTitle>
                <ContactDetails>{item.details}</ContactDetails>
              </ContactCard>
            ))}
          </Grid>
        </motion.div>
      </ContentContainer>
    </Section>
  );
};

export default ContactInfo; 