import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
  XMarkIcon,
  UserIcon,
  PhoneIcon,
  CalendarDaysIcon,
  ClockIcon,
  ChatBubbleLeftIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';
// TODO: Временно отключено - Bitrix24 интеграция
// import { createBookingLead } from '../../services/bitrix24';

// WhatsApp номер для записи
const WHATSAPP_NUMBER = '66624805877';

// =============================================================================
// STYLED COMPONENTS
// =============================================================================

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 9999;
  padding: 2rem 1rem;
  backdrop-filter: blur(8px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`;

const ModalContainer = styled(motion.div)`
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 480px;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  margin-top: 60px;
  margin-bottom: 2rem;
  flex-shrink: 0;

  @media (max-width: 520px) {
    max-width: calc(100vw - 2rem);
    border-radius: 20px;
    margin-top: 70px;
  }

  @media (max-width: 380px) {
    border-radius: 16px;
    margin-top: 80px;
  }

  * {
    box-sizing: border-box;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0;

  @media (max-width: 520px) {
    padding: 1.25rem 1.25rem 0;
  }

  @media (max-width: 380px) {
    padding: 1rem 1rem 0;
  }
`;

const ModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  font-family: 'Playfair Display', serif;

  @media (max-width: 380px) {
    font-size: 1.25rem;
  }
`;

const CloseButton = styled.button`
  background: #f5f5f5;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e5e5e5;
    transform: rotate(90deg);
  }

  svg {
    width: 20px;
    height: 20px;
    color: #666;
  }
`;

const ModalContent = styled.div`
  padding: 1.5rem;

  @media (max-width: 520px) {
    padding: 1.25rem;
  }

  @media (max-width: 380px) {
    padding: 1rem;
  }
`;

const ServiceBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(144, 179, 167, 0.1);
  border-radius: 20px;
  font-size: 0.875rem;
  color: #90B3A7;
  font-weight: 500;
  margin-bottom: 1.5rem;
  max-width: 100%;
  word-break: break-word;

  @media (max-width: 380px) {
    font-size: 0.8125rem;
    padding: 0.4rem 0.75rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const FormGroup = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
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

  svg {
    width: 18px;
    height: 18px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.875rem 1rem 0.875rem 2.75rem;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: #fafafa;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #90B3A7;
    background: white;
    box-shadow: 0 0 0 4px rgba(144, 179, 167, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 380px) {
    padding: 0.75rem 0.875rem 0.75rem 2.5rem;
    font-size: 0.9375rem;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.875rem 1rem;
  border: 2px solid #e5e5e5;
  border-radius: 12px;
  font-size: 1rem;
  min-height: 80px;
  resize: vertical;
  transition: all 0.2s ease;
  background: #fafafa;
  font-family: inherit;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #90B3A7;
    background: white;
    box-shadow: 0 0 0 4px rgba(144, 179, 167, 0.1);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 380px) {
    padding: 0.75rem 0.875rem;
    font-size: 0.9375rem;
    min-height: 70px;
  }
`;

const DateTimeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(144, 179, 167, 0.3);

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const ErrorMessage = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  background: rgba(239, 68, 68, 0.1);
  border-radius: 8px;
  color: #dc2626;
  font-size: 0.875rem;

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

const SuccessContainer = styled(motion.div)`
  text-align: center;
  padding: 2rem;
`;

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;

  svg {
    width: 40px;
    height: 40px;
    color: white;
  }
`;

const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
`;

const SuccessText = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const CloseSuccessButton = styled(motion.button)`
  padding: 0.875rem 2rem;
  background: #f5f5f5;
  color: #333;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #e5e5e5;
  }
`;

// =============================================================================
// BOOKING MODAL COMPONENT
// =============================================================================

const BookingModal = ({
  isOpen,
  onClose,
  service = '',
  source = 'Форма записи на сайте'
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', phone: '', date: '', time: '', message: '' });
      setError('');
      setIsSuccess(false);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      setError(t('booking.form.error.name', 'Пожалуйста, укажите ваше имя'));
      return;
    }
    if (!formData.phone.trim()) {
      setError(t('booking.form.error.phone', 'Пожалуйста, укажите номер телефона'));
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // TODO: Временно отключено - Bitrix24 интеграция
      // await createBookingLead({
      //   name: formData.name,
      //   phone: formData.phone,
      //   date: formData.date,
      //   time: formData.time,
      //   message: formData.message,
      //   service: service,
      //   source: source
      // });

      // WhatsApp booking - временное решение
      const messageParts = [
        `Здравствуйте! Хочу записаться в KAIF.`,
        ``,
        `Имя: ${formData.name}`,
        `Телефон: ${formData.phone}`
      ];

      if (service) {
        messageParts.push(`Услуга: ${service}`);
      }
      if (formData.date) {
        messageParts.push(`Дата: ${formData.date}`);
      }
      if (formData.time) {
        messageParts.push(`Время: ${formData.time}`);
      }
      if (formData.message) {
        messageParts.push(`Комментарий: ${formData.message}`);
      }

      const whatsappMessage = encodeURIComponent(messageParts.join('\n'));
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`, '_blank');

      setIsSuccess(true);
    } catch (err) {
      console.error('Booking error:', err);
      setError(t('booking.form.error.submit', 'Произошла ошибка. Попробуйте ещё раз или позвоните нам.'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle>
                {isSuccess
                  ? t('booking.form.success_title', 'Заявка отправлена!')
                  : t('booking.form.title', 'Записаться')}
              </ModalTitle>
              <CloseButton onClick={onClose}>
                <XMarkIcon />
              </CloseButton>
            </ModalHeader>

            <ModalContent>
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <SuccessContainer
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <SuccessIcon>
                      <CheckCircleIcon />
                    </SuccessIcon>
                    <SuccessTitle>{t('booking.form.success_heading', 'Переход в WhatsApp!')}</SuccessTitle>
                    <SuccessText>
                      {t('booking.form.success_message_whatsapp', 'Мы открыли WhatsApp с вашей заявкой. Отправьте сообщение, и мы свяжемся с вами для подтверждения записи.')}
                    </SuccessText>
                    <CloseSuccessButton
                      onClick={onClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t('booking.form.close', 'Закрыть')}
                    </CloseSuccessButton>
                  </SuccessContainer>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {service && (
                      <ServiceBadge>
                        <CalendarDaysIcon style={{ width: 16, height: 16 }} />
                        {service}
                      </ServiceBadge>
                    )}

                    <Form onSubmit={handleSubmit}>
                      {error && (
                        <ErrorMessage
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <ExclamationCircleIcon />
                          {error}
                        </ErrorMessage>
                      )}

                      <FormGroup>
                        <Label>{t('booking.form.name', 'Ваше имя')} *</Label>
                        <InputWrapper>
                          <InputIcon><UserIcon /></InputIcon>
                          <Input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('booking.form.name_placeholder', 'Как вас зовут?')}
                            autoComplete="name"
                          />
                        </InputWrapper>
                      </FormGroup>

                      <FormGroup>
                        <Label>{t('booking.form.phone', 'Телефон')} *</Label>
                        <InputWrapper>
                          <InputIcon><PhoneIcon /></InputIcon>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+66 XX XXX XXXX"
                            autoComplete="tel"
                          />
                        </InputWrapper>
                      </FormGroup>

                      <DateTimeGrid>
                        <FormGroup>
                          <Label>{t('booking.form.date', 'Дата')}</Label>
                          <InputWrapper>
                            <InputIcon><CalendarDaysIcon /></InputIcon>
                            <Input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleChange}
                              min={new Date().toISOString().split('T')[0]}
                            />
                          </InputWrapper>
                        </FormGroup>

                        <FormGroup>
                          <Label>{t('booking.form.time', 'Время')}</Label>
                          <InputWrapper>
                            <InputIcon><ClockIcon /></InputIcon>
                            <Input
                              type="time"
                              name="time"
                              value={formData.time}
                              onChange={handleChange}
                            />
                          </InputWrapper>
                        </FormGroup>
                      </DateTimeGrid>

                      <FormGroup>
                        <Label>{t('booking.form.message', 'Комментарий')}</Label>
                        <TextArea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t('booking.form.message_placeholder', 'Дополнительные пожелания...')}
                        />
                      </FormGroup>

                      <SubmitButton
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          t('booking.form.submitting', 'Отправка...')
                        ) : (
                          <>
                            <CalendarDaysIcon />
                            {t('booking.form.submit', 'Отправить заявку')}
                          </>
                        )}
                      </SubmitButton>
                    </Form>
                  </motion.div>
                )}
              </AnimatePresence>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
