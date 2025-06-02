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

const BookingSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    persons: '',
    service: '',
    message: ''
  });
  
  // Обработчик изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    // Здесь будет логика отправки формы на сервер
    alert('Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      persons: '',
      service: '',
      message: ''
    });
  };
  
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
                <span>Ежедневно: 8:00 - 23:00</span>
              </ContactItem>
              <ContactItem variants={fadeInUp}>
                <ClockIcon />
                <span>СПА: 9:00 - 22:00</span>
              </ContactItem>
              <ContactItem variants={fadeInUp}>
                <UserIcon />
                <a href="tel:+66812345678">+66 81 234 56 78</a>
              </ContactItem>
              <ContactItem variants={fadeInUp}>
                <UsersIcon />
                <a href="https://wa.me/66812345678">WhatsApp-чат</a>
              </ContactItem>
            </ContactList>
          </TextColumn>
          
          <FormColumn>
            <BookingForm
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
            >
              <FormTitle>{t('booking.formTitle')}</FormTitle>
              
              <FormGrid>
                <FormGroup>
                  <FormLabel htmlFor="name">{t('booking.name')}</FormLabel>
                  <InputIcon>
                    <UserIcon />
                  </InputIcon>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder={t('booking.namePlaceholder')}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="phone">{t('booking.phone')}</FormLabel>
                  <InputIcon>
                    <UserIcon />
                  </InputIcon>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={t('booking.phonePlaceholder')}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="date">{t('booking.date')}</FormLabel>
                  <InputIcon>
                    <CalendarIcon />
                  </InputIcon>
                  <Input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="time">{t('booking.time')}</FormLabel>
                  <InputIcon>
                    <ClockIcon />
                  </InputIcon>
                  <Input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="persons">{t('booking.persons')}</FormLabel>
                  <InputIcon>
                    <UsersIcon />
                  </InputIcon>
                  <Select
                    id="persons"
                    name="persons"
                    value={formData.persons}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">{t('booking.selectPersons')}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5+</option>
                  </Select>
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="service">{t('booking.service')}</FormLabel>
                  <InputIcon>
                    <ClockIcon />
                  </InputIcon>
                  <Select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">{t('booking.selectService')}</option>
                    <option value="spa">СПА-программа</option>
                    <option value="fitness">Фитнес-тренировка</option>
                    <option value="restaurant">Ресторан</option>
                    <option value="pool">Бассейн</option>
                    <option value="beauty">Салон красоты</option>
                  </Select>
                </FormGroup>
                
                <FormItemFull>
                  <FormLabel htmlFor="message">{t('booking.message')}</FormLabel>
                  <TextArea
                    id="message"
                    name="message"
                    placeholder={t('booking.messagePlaceholder')}
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </FormItemFull>
              </FormGrid>
              
              <SubmitButton type="submit">
                {t('booking.submit')}
              </SubmitButton>
              
              <PrivacyInfo>
                {t('booking.privacyInfo')} <a href="/privacy">{t('booking.privacyLink')}</a>
              </PrivacyInfo>
            </BookingForm>
          </FormColumn>
        </TwoColumnsContainer>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default BookingSection;
