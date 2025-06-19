import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CalendarIcon, UserIcon, UsersIcon, ClockIcon } from '@heroicons/react/24/outline';

// Основной контейнер
const SectionContainer = styled.section`
  position: relative;
  padding: 8rem 0;
  background: linear-gradient(135deg, rgba(144, 179, 167, 0.05) 0%, rgba(255, 255, 255, 1) 100%); /* Градиент с легким акцентом в фирменном цвете KAIF */
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/images/pattern-light.png');
    background-size: 500px;
    background-repeat: repeat;
    opacity: 0.05;
    z-index: 0;
  }
`;

// Внутренний контейнер
const ContentWrapper = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 1;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

// Секция разделена на две части
const TwoColumnsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

// Левая колонка с текстом
const TextColumn = styled.div`
  flex: 1;
`;

// Правая колонка с формой
const FormColumn = styled.div`
  flex: 1;
`;

// Маленький текст над заголовком
const Overline = styled(motion.div)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 400;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #FF6347; /* Оранжево-красный из логотипа */
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, #FF6347 0%, #00B4D8 33%, #FF69B4 66%, #5CB848 100%)'};
    margin-right: 1rem;
  }
`;

// Основной заголовок
const Title = styled(motion.h2)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  line-height: 1.2;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin: 0 0 1.5rem;
`;

// Описание
const Description = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  margin-bottom: 3rem;
`;

// Список контактов
const ContactList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Элемент списка контактов
const ContactItem = styled.li`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1.1rem;
  font-weight: 400;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  
  svg {
    width: 20px;
    height: 20px;
    color: #5CB848; /* Зеленый из логотипа */
  }
  
  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #00B4D8; /* Голубой из логотипа */
    }
  }
`;

// Форма бронирования
const BookingForm = styled(motion.form)`
  background-color: #fff;
  padding: 3rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme?.shadows?.lg || '0 10px 15px -3px rgba(0, 0, 0, 0.1)'};
`;

// Заголовок формы
const FormTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: 1.75rem;
  font-weight: 300;
  line-height: 1.2;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  margin: 0 0 2rem;
`;

// Сетка для полей формы
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// Элемент формы (для полей, занимающих две колонки)
const FormItemFull = styled.div`
  grid-column: 1 / -1;
`;

// Группа элементов формы
const FormGroup = styled.div`
  position: relative;
`;

// Лейбл для поля формы
const FormLabel = styled.label`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 500;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  margin-bottom: 0.5rem;
  display: block;
`;

// Иконка внутри поля ввода
const InputIcon = styled.span`
  position: absolute;
  top: 38px;
  left: 1rem;
  color: ${({ theme }) => theme?.colors?.text?.light || '#8B9A8E'};
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

// Поле ввода
const Input = styled.input`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1rem;
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #00B4D8; /* Голубой из логотипа */
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.1);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme?.colors?.text?.light || '#8B9A8E'};
  }
`;

// Селект
const Select = styled.select`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1rem;
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  appearance: none;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:focus {
    outline: none;
    border-color: #00B4D8; /* Голубой из логотипа */
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.1);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme?.colors?.text?.light || '#8B9A8E'};
  }
`;

// Текстовое поле
const TextArea = styled.textarea`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 1rem;
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background-color: #fff;
  resize: vertical;
  min-height: 100px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #00B4D8; /* Голубой из логотипа */
    box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.1);
  }
  
  &::placeholder {
    color: ${({ theme }) => theme?.colors?.text?.light || '#8B9A8E'};
  }
`;

// Кнопка отправки формы
const SubmitButton = styled.button`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #fff;
  background: ${({ theme }) => theme?.colors?.gradients?.logo || 'linear-gradient(135deg, rgba(255, 99, 71, 0.40) 0%, rgba(255, 99, 71, 0.35) 5%, rgba(206, 128, 114, 0.30) 12%, rgba(157, 157, 157, 0.25) 20%, rgba(108, 186, 200, 0.30) 28%, rgba(0, 180, 216, 0.40) 36%, rgba(71, 168, 203, 0.35) 44%, rgba(142, 157, 188, 0.30) 52%, rgba(214, 145, 173, 0.35) 60%, rgba(255, 105, 180, 0.40) 68%, rgba(219, 140, 149, 0.35) 76%, rgba(183, 175, 118, 0.30) 84%, rgba(147, 210, 95, 0.35) 92%, rgba(92, 184, 72, 0.40) 100%)'};
  border: none;
  border-radius: 4px;
  padding: 1rem 2rem;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    transform: translateX(-100%);
    transition: transform 0.6s ease;
    pointer-events: none;
  }
  
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
    &::before {
      transform: translateX(100%);
    }
  }
`;

// Информация о политике конфиденциальности
const PrivacyInfo = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary};
  font-size: 0.8rem;
  color: ${({ theme }) => theme?.colors?.text?.light || '#8B9A8E'};
  margin: 1rem 0 0;
  text-align: center;
  
  a {
    color: #00B4D8; /* Голубой из логотипа */
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #FF69B4; /* Розовый из логотипа */
      text-decoration: underline;
    }
  }
`;

const ContactInfo = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(144, 179, 167, 0.1);
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 20px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1rem;
  font-family: 'Playfair Display', serif;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const InfoDescription = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #666;
  margin-bottom: 2rem;
`;

const WhatsAppButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2.5rem;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
  transition: all 0.3s ease;
  min-width: 250px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 35px rgba(37, 211, 102, 0.4);
    background: linear-gradient(135deg, #128C7E 0%, #25D366 100%);
  }
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
  
  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    padding: 1rem 2rem;
    font-size: 1rem;
  }
`;

const ContactMethods = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ContactMethod = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(144, 179, 167, 0.1);
  border-radius: 15px;
  color: #666;
  font-size: 0.95rem;
  
  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #90B3A7;
    flex-shrink: 0;
  }
`;

const BookingSection = () => {
  const { t } = useTranslation();

  // Анимации при появлении
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };
  
  return (
    <SectionContainer id="booking">
      <ContentWrapper>
        <TwoColumnsContainer>
          <TextColumn>
            <Overline
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              {t('booking.overline')}
            </Overline>
            
            <Title
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              {t('booking.title')}
            </Title>
            
            <Description
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              {t('booking.description')}
            </Description>
            
            <ContactList
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
              transition={{ delay: 0.4 }}
            >
              <ContactItem variants={fadeInUp}>
                <CalendarIcon />
                <span>Ежедневно: 7:00 - 22:00</span>
              </ContactItem>
              <ContactItem variants={fadeInUp}>
                <ClockIcon />
                <span>СПА: 9:00 - 22:00</span>
              </ContactItem>
              <ContactItem variants={fadeInUp}>
                <UserIcon />
                <span>+66 62 480 5877</span>
              </ContactItem>
              <ContactItem variants={fadeInUp}>
                <UsersIcon />
                <span>WhatsApp записи</span>
              </ContactItem>
            </ContactList>
          </TextColumn>
          
          <FormColumn>
            <ContactInfo
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <InfoTitle>Записаться в KAIF</InfoTitle>
              <InfoDescription>
                Для записи на любые услуги KAIF используйте WhatsApp. Наш менеджер быстро ответит и поможет выбрать лучшее время.
              </InfoDescription>
              
              <WhatsAppButton
                href="https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20в%20KAIF"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Записаться через WhatsApp
              </WhatsAppButton>
              
              <ContactMethods>
                <ContactMethod>
                  <ClockIcon />
                  <span>Быстрый ответ</span>
                </ContactMethod>
                <ContactMethod>
                  <UserIcon />
                  <span>Персональный менеджер</span>
                </ContactMethod>
                <ContactMethod>
                  <CalendarIcon />
                  <span>Удобное время</span>
                </ContactMethod>
              </ContactMethods>
            </ContactInfo>
          </FormColumn>
        </TwoColumnsContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default BookingSection;
