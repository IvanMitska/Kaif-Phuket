import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { 
  CheckCircleIcon,
  ExclamationCircleIcon,
  PaperAirplaneIcon
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
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(144, 179, 167, 0.1);
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 16px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.primary};
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
`;

const Input = styled(Field)`
  width: 100%;
  padding: 1rem 1.25rem;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #fafafa;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    background: white;
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const TextArea = styled(Field)`
  width: 100%;
  padding: 1rem 1.25rem;
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
    box-shadow: 0 0 0 3px rgba(144, 179, 167, 0.1);
  }
  
  &::placeholder {
    color: #9ca3af;
  }
`;

const ErrorText = styled(motion.div)`
  color: ${props => props.theme.colors.error};
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
  padding: 1.5rem;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  
  svg {
    width: 24px;
    height: 24px;
  }
`;

const SubmitButton = styled(PrimaryButton)`
  width: 100%;
  margin-top: 1rem;
  font-size: 1rem;
  padding: 1.25rem 2rem;
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const ContactForm = () => {
  const { t } = useTranslation();
  
  return (
    <Section>
      <ContentContainer>
        <SectionTitle>{t('contacts.form.title')}</SectionTitle>
        <SectionSubtitle>{t('contacts.form.subtitle')}</SectionSubtitle>
        
        <FormContainer>
          <p>Форма контактов будет здесь</p>
        </FormContainer>
      </ContentContainer>
    </Section>
  );
};

export default ContactForm; 