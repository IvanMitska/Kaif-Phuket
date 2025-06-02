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
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Styled components
const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme?.colors?.background || '#F5F3F0'};
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  position: relative;
  height: 50vh;
  min-height: 400px;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 800px;
  padding: 0 2rem;
`;

const PageTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 300;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContentSection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: white;
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const TwoColumnsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfoCard = styled(motion.div)`
  background: white;
  border-radius: 8px;
  padding: 3rem;
  box-shadow: ${({ theme }) => theme?.shadows?.lg || '0 10px 30px -3px rgba(0, 0, 0, 0.1)'};
`;

const ContactTitle = styled.h2`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    flex-shrink: 0;
    margin-top: 4px;
  }
`;

const ContactText = styled.div``;

const ContactLabel = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
`;

const ContactValue = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    }
  }
`;

const MapContainer = styled.div`
  position: relative;
  height: 500px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme?.shadows?.lg || '0 10px 30px -3px rgba(0, 0, 0, 0.1)'};
  margin-top: 4rem;
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const MapButton = styled.a`
  position: absolute;
  right: 16px;
  bottom: 16px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  padding: 0.75rem 1rem;
  border-radius: 4px;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const ContactForm = styled(motion.div)`
  background: white;
  border-radius: 8px;
  padding: 3rem;
  box-shadow: ${({ theme }) => theme?.shadows?.lg || '0 10px 30px -3px rgba(0, 0, 0, 0.1)'};
`;

const FormTitle = styled.h2`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
`;

const FormDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
`;

const FormInput = styled(Field)`
  width: 100%;
  padding: 0.75rem 1rem;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1rem;
  background: #f8f9fa;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.2);
  }
`;

const FormTextarea = styled(FormInput).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`;

const FormError = styled.div`
  color: #e53e3e;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2rem;
  background: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  color: white;
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme?.colors?.primaryDark || '#7A9A8E'};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Пожалуйста, введите ваше имя'),
  email: Yup.string().email('Неверный формат email').required('Пожалуйста, введите ваш email'),
  subject: Yup.string().required('Пожалуйста, укажите тему сообщения'),
  message: Yup.string().required('Пожалуйста, введите сообщение')
});

const ContactsPage = () => {
  const { t } = useTranslation();
  
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // В реальном приложении здесь был бы код для отправки формы
    console.log(values);
    
    // Имитация задержки отправки
    setTimeout(() => {
      alert('Сообщение отправлено!');
      setSubmitting(false);
      resetForm();
    }, 1000);
  };
  
  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <PageTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('contacts.title', 'Контакты')}
          </PageTitle>
          <Subtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('contacts.subtitle', 'Связаться с нами')}
          </Subtitle>
        </HeroContent>
      </HeroSection>
      
      {/* Contact Information & Form Section */}
      <ContentSection>
        <ContentWrapper>
          <TwoColumnsGrid>
            {/* Contact Information */}
            <ContactInfoCard
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ContactTitle>{t('contacts.info.title', 'Наши контакты')}</ContactTitle>
              <ContactList>
                <ContactItem>
                  <MapPinIcon />
                  <ContactText>
                    <ContactLabel>{t('contacts.info.address.label', 'Адрес')}</ContactLabel>
                    <ContactValue>{t('contacts.info.address.value', '123 Moo 5, Rawai, Mueang Phuket District, Phuket 83130, Thailand')}</ContactValue>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <PhoneIcon />
                  <ContactText>
                    <ContactLabel>{t('contacts.info.phone.label', 'Телефон')}</ContactLabel>
                    <ContactValue>
                      <a href="tel:+66000000000">{t('contacts.info.phone.value', '+66 000 000 000')}</a>
                    </ContactValue>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <EnvelopeIcon />
                  <ContactText>
                    <ContactLabel>{t('contacts.info.email.label', 'Email')}</ContactLabel>
                    <ContactValue>
                      <a href="mailto:info@kaif-resort.com">{t('contacts.info.email.value', 'info@kaif-resort.com')}</a>
                    </ContactValue>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <ClockIcon />
                  <ContactText>
                    <ContactLabel>{t('contacts.info.hours.label', 'Часы работы')}</ContactLabel>
                    <ContactValue>{t('contacts.info.hours.value', 'Ежедневно: 8:00 - 22:00')}</ContactValue>
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <GlobeAltIcon />
                  <ContactText>
                    <ContactLabel>{t('contacts.info.social.label', 'Социальные сети')}</ContactLabel>
                    <ContactValue>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>Instagram</a>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </ContactValue>
                  </ContactText>
                </ContactItem>
              </ContactList>
            </ContactInfoCard>
            
            {/* Contact Form */}
            <ContactForm
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FormTitle>{t('contacts.form.title', 'Написать нам')}</FormTitle>
              <FormDescription>
                {t('contacts.form.description', 'Заполните форму ниже, и мы свяжемся с вами в ближайшее время.')}
              </FormDescription>
              
              <Formik
                initialValues={{ name: '', email: '', subject: '', message: '' }}
                validationSchema={ContactSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <FormGroup>
                      <FormLabel htmlFor="name">{t('contacts.form.name', 'Имя')}</FormLabel>
                      <FormInput type="text" id="name" name="name" />
                      <ErrorMessage name="name" component={FormError} />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="email">{t('contacts.form.email', 'Email')}</FormLabel>
                      <FormInput type="email" id="email" name="email" />
                      <ErrorMessage name="email" component={FormError} />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="subject">{t('contacts.form.subject', 'Тема')}</FormLabel>
                      <FormInput type="text" id="subject" name="subject" />
                      <ErrorMessage name="subject" component={FormError} />
                    </FormGroup>
                    
                    <FormGroup>
                      <FormLabel htmlFor="message">{t('contacts.form.message', 'Сообщение')}</FormLabel>
                      <FormTextarea id="message" name="message" rows="5" />
                      <ErrorMessage name="message" component={FormError} />
                    </FormGroup>
                    
                    <SubmitButton type="submit" disabled={isSubmitting}>
                      {isSubmitting 
                        ? t('contacts.form.submitting', 'Отправка...') 
                        : t('contacts.form.submit', 'Отправить сообщение')}
                    </SubmitButton>
                  </Form>
                )}
              </Formik>
            </ContactForm>
          </TwoColumnsGrid>
          
          {/* Map Section */}
          <MapContainer>
            <MapIframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126223.42266856977!2d98.25292414610035!3d7.892224922671353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30503a96a80d26e1%3A0x40223bc2c382460!2z0J_RhdGD0LrQtdGCLCDQotCw0LjQu9Cw0L3QtA!5e0!3m2!1sru!2sru!4v1717058559178!5m2!1sru!2sru"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <MapButton 
              href="https://maps.google.com/?q=Phuket,Thailand" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {t('contacts.map.open', 'Открыть в Google Maps')}
              <ArrowTopRightOnSquareIcon />
            </MapButton>
          </MapContainer>
        </ContentWrapper>
      </ContentSection>
    </PageContainer>
  );
};

export default ContactsPage;
