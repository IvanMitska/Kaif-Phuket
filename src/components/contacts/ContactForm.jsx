import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { 
  CheckCircleIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftEllipsisIcon
} from '@heroicons/react/24/outline';
import { 
  Section,
  ContentContainer,
  SectionTitle,
  SectionSubtitle,
  TwoColumnGrid,
  PrimaryButton
} from '../ui/CommonComponents';
import { fadeInUp, scaleIn } from '../ui/animations';

const FormContainer = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.07);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.8rem;
  position: relative;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const InputIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #90B3A7;
  z-index: 1;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const Input = styled(Field)`
  width: 100%;
  padding: 1.1rem 1.25rem 1.1rem 3rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background: white;
    box-shadow: 0 0 0 4px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const TextArea = styled(Field)`
  width: 100%;
  padding: 1.1rem 1.25rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s ease;
  background: #fafafa;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background: white;
    box-shadow: 0 0 0 4px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const ErrorText = styled(motion.div)`
  color: ${props => props.theme.colors.error || '#EF4444'};
  font-size: 0.85rem;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    width: 16px;
    height: 16px;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  color: white;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.15);
  
  svg {
    width: 50px;
    height: 50px;
  }
  
  h3 {
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    opacity: 0.9;
    font-size: 1.05rem;
  }
`;

const SubmitButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;
  padding: 1.25rem 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  box-shadow: 0 6px 20px rgba(144, 179, 167, 0.25);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(144, 179, 167, 0.35);
    
    &:after {
      transform: translateX(100%);
      transition: transform 0.8s ease;
    }
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: 0 6px 20px rgba(144, 179, 167, 0.15);
  }
  
  svg {
    width: 20px;
    height: 20px;
    margin-left: 8px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: translateX(4px);
  }
`;

const FormTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2C3E2D;
  margin-bottom: 0.5rem;
  font-family: 'Playfair Display', serif;
`;

const FormDescription = styled.p`
  color: #5A6B5D;
  margin-bottom: 2.5rem;
  font-size: 0.95rem;
`;

const InputFeedback = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  margin-top: 0.4rem;
  color: #6B7280;
`;

const CharCount = styled.span`
  color: ${props => props.isLong ? '#F59E0B' : '#6B7280'};
  transition: color 0.3s ease;
`;

const ContactForm = () => {
  const { t } = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const maxMessageLength = 500;
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(t('contacts.form.validation.name_required', 'Пожалуйста, укажите ваше имя')),
    email: Yup.string().email(t('contacts.form.validation.email_valid', 'Введите корректный email')).required(t('contacts.form.validation.email_required', 'Email обязателен для заполнения')),
    message: Yup.string().required(t('contacts.form.validation.message_required', 'Пожалуйста, напишите ваше сообщение')).max(maxMessageLength, t('contacts.form.validation.message_too_long', `Сообщение не должно превышать ${maxMessageLength} символов`))
  });
  
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // Здесь будет код для отправки формы на сервер
    // Имитируем задержку отправки
    setTimeout(() => {
      console.log('Form values:', values);
      setSubmitting(false);
      resetForm();
      setFormSubmitted(true);
    }, 800);
  };
  
  return (
    <Section>
      <ContentContainer>
        <SectionTitle>{t('contacts.form.title', 'Напишите нам')}</SectionTitle>
        <SectionSubtitle>{t('contacts.form.subtitle', 'Мы ответим на все ваши вопросы в течение 24 часов')}</SectionSubtitle>
        
        <FormContainer>
          <AnimatePresence mode="wait">
            {!formSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FormTitle>{t('contacts.form.form_title', 'Отправить сообщение')}</FormTitle>
                <FormDescription>
                  {t('contacts.form.form_description', 'Заполните форму, и мы свяжемся с вами в ближайшее время')}
                </FormDescription>
                
                <Formik
                  initialValues={{ name: '', email: '', phone: '', message: '' }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, values, errors, touched }) => (
                    <Form>
                      <FormGroup>
                        <Label htmlFor="name">{t('contacts.form.name', 'Имя')}</Label>
                        <InputWrapper>
                          <InputIcon>
                            <UserIcon />
                          </InputIcon>
                          <Input 
                            type="text" 
                            name="name" 
                            placeholder={t('contacts.form.name_placeholder', 'Ваше имя')}
                            autoComplete="name" 
                          />
                        </InputWrapper>
                        <ErrorMessage name="name">
                          {msg => (
                            <ErrorText
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                            >
                              <ExclamationCircleIcon /> {msg}
                            </ErrorText>
                          )}
                        </ErrorMessage>
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor="email">{t('contacts.form.email', 'Email')}</Label>
                        <InputWrapper>
                          <InputIcon>
                            <EnvelopeIcon />
                          </InputIcon>
                          <Input 
                            type="email" 
                            name="email" 
                            placeholder={t('contacts.form.email_placeholder', 'Ваш email')}
                            autoComplete="email" 
                          />
                        </InputWrapper>
                        <ErrorMessage name="email">
                          {msg => (
                            <ErrorText
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                            >
                              <ExclamationCircleIcon /> {msg}
                            </ErrorText>
                          )}
                        </ErrorMessage>
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor="phone">
                          {t('contacts.form.phone', 'Телефон')} 
                          <span style={{ opacity: 0.5, fontWeight: 'normal', marginLeft: '4px' }}>
                            ({t('contacts.form.optional', 'необязательно')})
                          </span>
                        </Label>
                        <InputWrapper>
                          <InputIcon>
                            <PhoneIcon />
                          </InputIcon>
                          <Input 
                            type="tel" 
                            name="phone" 
                            placeholder={t('contacts.form.phone_placeholder', 'Ваш телефон')}
                            autoComplete="tel" 
                          />
                        </InputWrapper>
                      </FormGroup>
                      
                      <FormGroup>
                        <Label htmlFor="message">{t('contacts.form.message', 'Сообщение')}</Label>
                        <InputWrapper>
                          <TextArea 
                            as="textarea" 
                            name="message" 
                            placeholder={t('contacts.form.message_placeholder', 'Ваше сообщение...')}
                          />
                        </InputWrapper>
                        <InputFeedback>
                          <CharCount isLong={values.message && values.message.length > maxMessageLength * 0.8}>
                            {values.message ? values.message.length : 0}/{maxMessageLength}
                          </CharCount>
                        </InputFeedback>
                        <ErrorMessage name="message">
                          {msg => (
                            <ErrorText
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                            >
                              <ExclamationCircleIcon /> {msg}
                            </ErrorText>
                          )}
                        </ErrorMessage>
                      </FormGroup>
                      
                      <SubmitButton 
                        type="submit" 
                        disabled={isSubmitting}
                        as={motion.button}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? 
                          t('contacts.form.sending', 'Отправка...') : 
                          t('contacts.form.submit', 'Отправить сообщение')
                        }
                        <PaperAirplaneIcon />
                      </SubmitButton>
                    </Form>
                  )}
                </Formik>
              </motion.div>
            ) : (
              <SuccessMessage
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.4, 
                  type: "spring",
                  stiffness: 100 
                }}
              >
                <CheckCircleIcon />
                <div>
                  <h3>{t('contacts.form.success_title', 'Сообщение отправлено!')}</h3>
                  <p>{t('contacts.form.success_message', 'Спасибо за обращение. Мы свяжемся с вами в ближайшее время.')}</p>
                </div>
                <PrimaryButton
                  as={motion.button}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setFormSubmitted(false)}
                  style={{ marginTop: '1rem', minWidth: '200px' }}
                >
                  {t('contacts.form.new_message', 'Написать еще')}
                </PrimaryButton>
              </SuccessMessage>
            )}
          </AnimatePresence>
        </FormContainer>
      </ContentContainer>
    </Section>
  );
};

export default ContactForm; 