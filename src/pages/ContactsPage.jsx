import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  GlobeAltIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  PaperAirplaneIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';
// Импортируем фоновое изображение
// Фоновые изображения и иконки
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Animation variants
const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5
    }
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

const slideInRight = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.4 }
  }
};

const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { duration: 0.4 }
  }
};

const heroTextAnimation = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 20,
      delay: 0.2
    }
  }
};

const buttonAnimation = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
      delay: 0.5
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  tap: {
    scale: 0.95
  }
};

const fadeInUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 30,
      duration: 0.6 
    } 
  },
  exit: {
    y: 30,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const textFadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth feel
    } 
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

const staggerItems = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.15
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.08,
      staggerDirection: -1,
      duration: 0.3
    }
  }
};

const bounceIn = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
      mass: 1
    }
  },
  exit: {
    scale: 0.9,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3
    }
  },
  tap: {
    scale: 0.97
  }
};

const scaleUp = {
  hidden: { scale: 0.85, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 350, 
      damping: 25 
    } 
  }
};

const popIn = {
  hidden: { scale: 0.4, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      stiffness: 500, 
      damping: 15, 
    } 
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3
    }
  },
  tap: {
    scale: 0.95
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
      duration: 0.3
    }
  }
};

// Styled components
const PageContainer = styled(motion.div)`
  min-height: 100vh;
  background: ${({ theme }) => theme?.colors?.background || '#FAFAFA'};
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  overflow-x: hidden;
  position: relative;
`;

const HeroSection = styled.section`
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0;
  overflow: hidden;
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(/images/zones/spa.jpg);
    background-size: cover;
    background-position: center;
    filter: brightness(0.6);
    z-index: -2;
  }
  
  @media (max-width: 768px) {
    height: 70vh;
    min-height: 500px;
  }
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(24, 32, 25, 0.4) 0%,
    rgba(24, 32, 25, 0.6) 50%,
    rgba(24, 32, 25, 0.85) 100%
  );
  z-index: -1;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  max-width: 1000px;
  width: 90%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: white;
  letter-spacing: 0.01em;
  line-height: 1.1;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  
  span {
    display: block;
    font-size: 0.4em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
    font-weight: 400;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    opacity: 0.9;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  font-weight: 300;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
`;

const SectionTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: clamp(2.5rem, 6vw, 3.8rem);
  font-weight: 300;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  text-align: center;
  margin-bottom: 2rem;
  line-height: 1.1;
  position: relative;
  
  span {
    display: block;
    font-size: 1rem;
    font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
    font-weight: 400;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    margin-bottom: 1rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: clamp(1.1rem, 1.8vw, 1.2rem);
  font-weight: 300;
  max-width: 700px;
  margin: 0 auto 3rem;
  text-align: center;
  line-height: 1.6;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background-color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    opacity: 0.6;
    margin: 2rem auto 0;
  }
`;

const ContentSection = styled.section`
  position: relative;
  padding: 8rem 0;
  background: ${({ theme }) => theme?.colors?.background || '#FAFAFA'};
  
  &:nth-child(even) {
    background: white;
  }
  
  @media (max-width: 768px) {
    padding: 5rem 0;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 3rem;
  width: 100%;
  
  @media (max-width: 992px) {
    padding: 0 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  margin: 5rem 0;
  
  @media (max-width: 1200px) {
    gap: 3rem;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
`;

const ContactCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 4rem 3rem;
  position: relative;
  overflow: hidden;
  border: none;
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at top right,
      ${({ theme }) => theme?.colors?.primary || '#90B3A7'}10,
      transparent 70%
    );
    opacity: 0.5;
    z-index: 0;
    pointer-events: none;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 40px 70px -20px rgba(0, 0, 0, 0.14);
  }
`;

const CardTitle = styled(motion.h3)`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: 2.2rem;
  font-weight: 300;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  position: relative;
  z-index: 1;
  letter-spacing: -0.01em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 50px;
    height: 3px;
    background: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    opacity: 0.8;
  }
`;

const ContactList = styled(motion.ul)`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  z-index: 1;
  flex: 1;
`;

const ContactItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 0;
  position: relative;
  
  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    flex-shrink: 0;
    margin-top: 4px;
    transition: all 0.4s ease;
    stroke-width: 1.5px;
  }
  
  &:hover svg {
    transform: translateY(-3px) scale(1.1);
    color: ${({ theme }) => theme?.colors?.primaryDark || '#7A9A8E'};
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  position: relative;
`;

const ContactLabel = styled.h4`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.9rem;
  font-weight: 600;
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const ContactValue = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1.1rem;
  line-height: 1.5;
  margin: 0;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  font-weight: 400;
  
  a {
    color: inherit;
    text-decoration: none;
    transition: all 0.4s ease;
    position: relative;
    display: inline-flex;
    align-items: center;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 0;
      height: 1px;
      background-color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
      transition: width 0.3s ease;
    }
    
    &:hover {
      color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
      
      &::after {
        width: 100%;
      }
    }
  }
`;

const MapSection = styled(motion.div)`
  margin-top: 8rem;
  position: relative;
  padding-top: 3rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(144, 179, 167, 0.5), transparent);
  }
`;

const MapContainer = styled(motion.div)`
  position: relative;
  height: 550px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 30px 70px -20px rgba(0, 0, 0, 0.12);
  border: none;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme?.colors?.primary || '#90B3A7'}, transparent);
    opacity: 0.7;
    z-index: 2;
  }
  
  @media (max-width: 768px) {
    height: 400px;
  }
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const MapButton = styled(motion.a)`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  background: white;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  padding: 0.9rem 1.4rem;
  border-radius: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  z-index: 10;
  border: none;
  transition: all 0.4s ease;
  
  &:hover {
    background: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    color: white;
    transform: translateY(-5px);
    box-shadow: 0 20px 35px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }
  
  &:hover svg {
    transform: scale(1.2);
  }
`;

const FormContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

const FormLabel = styled.label`
  display: block;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  letter-spacing: 0.02em;
`;

const FormInput = styled(Field)`
  width: 100%;
  padding: 1rem 1.2rem;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  background: rgba(249, 250, 249, 0.8);
  border: 1px solid rgba(144, 179, 167, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    box-shadow: 0 8px 20px -8px rgba(144, 179, 167, 0.3);
    background: white;
  }
  
  &::placeholder {
    color: rgba(90, 107, 93, 0.5);
  }
`;

const FormTextarea = styled(FormInput).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
  line-height: 1.6;
`;

const FormError = styled(motion.div)`
  color: #d85757;
  font-size: 0.8rem;
  margin-top: 0.6rem;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  display: flex;
  align-items: center;
  gap: 0.4rem;
  opacity: 0.9;
  font-weight: 500;
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 1rem 2.5rem;
  background: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
  color: white;
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px -8px rgba(144, 179, 167, 0.5);
  align-self: flex-start;
  margin-top: 1rem;
  letter-spacing: 0.02em;
  
  &:hover {
    background: ${({ theme }) => theme?.colors?.primaryDark || '#7A9A8E'};
    transform: translateY(-3px);
    box-shadow: 0 12px 25px -10px rgba(144, 179, 167, 0.65);
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

// Дополнительные styled-components, используемые в JSX
const ContactForm = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 4rem 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.08);
  transition: all 0.5s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 40px 70px -20px rgba(0, 0, 0, 0.14);
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60%;
    height: 60%;
    background: radial-gradient(
      circle at bottom right,
      ${({ theme }) => theme?.colors?.primary || '#90B3A7'}10,
      transparent 70%
    );
    opacity: 0.4;
    z-index: 0;
    pointer-events: none;
  }
`;

const FormTitle = styled.h3`
  font-family: ${({ theme }) => theme?.fonts?.elegant || '"Playfair Display", serif'};
  font-size: 1.8rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme?.colors?.text?.primary || '#2C3E2D'};
  padding-bottom: 0.75rem;
  position: relative;
  letter-spacing: -0.01em;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 1px;
    background: ${({ theme }) => theme?.colors?.primary || '#90B3A7'};
    opacity: 0.7;
  }
`;

const FormDescription = styled.p`
  font-family: ${({ theme }) => theme?.fonts?.primary || 'Inter, sans-serif'};
  font-size: 1rem;
  line-height: 1.6;
  margin: 0 0 2rem;
  color: ${({ theme }) => theme?.colors?.text?.secondary || '#5A6B5D'};
`;

// Validation schema
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Пожалуйста, введите ваше имя'),
  email: Yup.string().email('Неверный формат email').required('Пожалуйста, введите ваш email'),
  subject: Yup.string().required('Пожалуйста, укажите тему сообщения'),
  message: Yup.string().required('Пожалуйста, введите сообщение')
});

const Spinner = () => (
  <motion.svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{ rotate: 360 }}
    transition={{ ease: "linear", duration: 1, repeat: Infinity }}
  >
    <path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  cursor: pointer;
  z-index: 5;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  svg {
    width: 24px;
    height: 24px;
    stroke-width: 1.5px;
    color: white;
  }
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateX(-50%) translateY(-5px);
  }
`;

const ContactsPage = () => {
  const { t } = useTranslation();

  const scrollToContent = () => {
    const contentSection = document.querySelector('#content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    // В реальном приложении здесь был бы код для отправки формы
    console.log(values);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      // В реальном приложении здесь можно вывести сообщение об успехе
    }, 1500);
  };

  return (
    <PageContainer
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <HeroSection>
        <HeroOverlay />
        <HeroContent variants={containerVariants}>
          <PageTitle variants={heroTextAnimation}>
            <span>{t('common.connect', 'Связаться')}</span>
            {t('contacts.title', 'Контакты')}
          </PageTitle>
          <HeroSubtitle variants={fadeInUp}>{t('contacts.subtitle', 'Свяжитесь с нами для бронирования сеансов и получения информации о наших услугах')}</HeroSubtitle>
          <ScrollIndicator 
            variants={buttonAnimation} 
            whileHover="hover"
            whileTap="tap"
            onClick={scrollToContent}
          >
            <ChevronDownIcon width={20} height={20} style={{ color: 'white', strokeWidth: 2 }} />
          </ScrollIndicator>
        </HeroContent>
      </HeroSection>
      
      {/* Contact Information & Form Section */}
      <ContentSection id="content-section">
        <Container>
          <SectionTitle variants={fadeInUp}>
            <span>{t('contacts.reach', 'Доступность')}</span>
            {t('contacts.getInTouch', 'Свяжитесь с нами')}
          </SectionTitle>
          <SectionSubtitle variants={fadeInUp}>
            {t('contacts.getInTouchDescription', 'Мы всегда готовы ответить на ваши вопросы и помочь с бронированием процедур в нашем СПА-комплексе KAIF')}
          </SectionSubtitle>
          <ContactGrid>
            <motion.div variants={slideInLeft}>
              <ContactCard
                variants={bounceIn}
                whileHover="hover"
              >
                <CardTitle variants={fadeInUp}>
                  <MapPinIcon width={28} height={28} />
                  {t('contacts.information', 'Наши контакты')}
                </CardTitle>
                <ContactList variants={staggerItems}>
                  <ContactItem variants={fadeInUp}>
                    <MapPinIcon />
                    <ContactInfo>
                      <ContactLabel>{t('contacts.address', 'Адрес')}</ContactLabel>
                      <ContactValue>{t('contacts.addressValue', '12/12 Moo 3, Rawai, Mueang Phuket District, Phuket 83130, Thailand')}</ContactValue>
                    </ContactInfo>
                  </ContactItem>
                  
                  <ContactItem variants={fadeInUp}>
                    <PhoneIcon />
                    <ContactInfo>
                      <ContactLabel>{t('contacts.phone', 'Телефон')}</ContactLabel>
                      <ContactValue>
                        <a href="tel:+66955905666">{t('contacts.phoneValue', '+66 95 590 5666')}</a>
                      </ContactValue>
                    </ContactInfo>
                  </ContactItem>
                  
                  <ContactItem variants={fadeInUp}>
                    <EnvelopeIcon />
                    <ContactInfo>
                      <ContactLabel>{t('contacts.email', 'Email')}</ContactLabel>
                      <ContactValue>
                        <a href="mailto:kaif.phuket@gmail.com">{t('contacts.emailValue', 'kaif.phuket@gmail.com')}</a>
                      </ContactValue>
                    </ContactInfo>
                  </ContactItem>
                  
                  <ContactItem variants={fadeInUp}>
                    <ClockIcon />
                    <ContactInfo>
                      <ContactLabel>{t('contacts.hours', 'Часы работы')}</ContactLabel>
                      <ContactValue>{t('contacts.hoursValue', 'Ежедневно: 9:00 - 22:00')}</ContactValue>
                    </ContactInfo>
                  </ContactItem>
                  
                  <ContactItem variants={fadeInUp}>
                    <GlobeAltIcon />
                    <ContactInfo>
                      <ContactLabel>{t('contacts.social', 'Социальные сети')}</ContactLabel>
                      <ContactValue>
                        <a href="https://www.instagram.com/kaif.phuket/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '1rem' }}>Instagram</a>
                        <a href="https://www.facebook.com/KaifJungleClub/" target="_blank" rel="noopener noreferrer">Facebook</a>
                      </ContactValue>
                    </ContactInfo>
                  </ContactItem>
                </ContactList>
              </ContactCard>
            </motion.div>
            
            <motion.div variants={slideInRight}>
              <ContactForm
                variants={bounceIn}
                whileHover="hover"
              >
                <CardTitle variants={fadeInUp}>
                  <EnvelopeIcon width={28} height={28} />
                  {t('contacts.form.title', 'Написать нам')}
                </CardTitle>
                <FormDescription variants={fadeInUp}>
                  {t('contacts.form.description', 'Заполните форму ниже, и мы свяжемся с вами в ближайшее время.')}
                </FormDescription>
                
                <FormContainer variants={fadeInUp}>
                  <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      subject: '',
                      message: ''
                    }}
                    validationSchema={ContactSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting, errors, touched }) => (
                      <Form>
                        <FormGroup>
                          <FormLabel htmlFor="name">{t('contacts.form.name', 'Имя')}</FormLabel>
                          <FormInput 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder={t('contacts.form.namePlaceholder', 'Ваше имя')}
                            as={motion.input}
                            whileFocus={{ scale: 1.01 }}
                          />
                          {errors.name && touched.name && (
                            <FormError 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ExclamationCircleIcon width={16} height={16} />
                              {errors.name}
                            </FormError>
                          )}
                        </FormGroup>
                        
                        <FormGroup>
                          <FormLabel htmlFor="email">{t('contacts.form.email', 'Email')}</FormLabel>
                          <FormInput 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder={t('contacts.form.emailPlaceholder', 'Ваш email адрес')}
                            as={motion.input}
                            whileFocus={{ scale: 1.01 }}
                          />
                          {errors.email && touched.email && (
                            <FormError 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ExclamationCircleIcon width={16} height={16} />
                              {errors.email}
                            </FormError>
                          )}
                        </FormGroup>
                        
                        <FormGroup>
                          <FormLabel htmlFor="subject">{t('contacts.form.subject', 'Тема')}</FormLabel>
                          <FormInput 
                            type="text" 
                            name="subject" 
                            id="subject" 
                            placeholder={t('contacts.form.subjectPlaceholder', 'Тема сообщения')}
                            as={motion.input}
                            whileFocus={{ scale: 1.01 }}
                          />
                          {errors.subject && touched.subject && (
                            <FormError 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ExclamationCircleIcon width={16} height={16} />
                              {errors.subject}
                            </FormError>
                          )}
                        </FormGroup>
                        
                        <FormGroup>
                          <FormLabel htmlFor="message">{t('contacts.form.message', 'Сообщение')}</FormLabel>
                          <FormTextarea 
                            name="message" 
                            id="message" 
                            placeholder={t('contacts.form.messagePlaceholder', 'Ваше сообщение')}
                            as={motion.textarea}
                            whileFocus={{ scale: 1.01 }}
                          />
                          {errors.message && touched.message && (
                            <FormError 
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ExclamationCircleIcon width={16} height={16} />
                              {errors.message}
                            </FormError>
                          )}
                        </FormGroup>
                        
                        <SubmitButton 
                          type="submit" 
                          disabled={isSubmitting}
                          variants={buttonAnimation}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                          whileTap="tap"
                        >
                          {isSubmitting ? (
                            <>
                              <Spinner />
                              {t('contacts.form.submitting', 'Отправка...')}
                            </>
                          ) : (
                            <>
                              <PaperAirplaneIcon width={18} height={18} />
                              {t('contacts.form.submit', 'Отправить сообщение')}
                            </>
                          )}
                        </SubmitButton>
                      </Form>
                    )}
                  </Formik>
                </FormContainer>
              </ContactForm>
            </motion.div>
          </ContactGrid>
          
          {/* Map Section */}
          <MapSection
            variants={fadeInUp}
          >
            <Container>
              <SectionTitle variants={fadeInUp}>
                <span>{t('contacts.location', 'Локация')}</span>
                {t('contacts.findUs', 'Как нас найти')}
              {t('contacts.findUs', 'Как нас найти')}
              </SectionTitle>
              <MapContainer 
                variants={scaleIn}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5 }}
              >
                <MapIframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.8203398876644!2d98.35104997604789!3d7.913827992109515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031603c054903%3A0x818d8108ef4f8a55!2sKAIF%20%E2%80%93%20Jungle%20club%20%26%20SPA!5e0!3m2!1sru!2sth!4v1748983106586!5m2!1sru!2sth"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <MapButton 
                  href="https://maps.google.com/?q=KAIF+Jungle+club+SPA+Phuket+Thailand" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  variants={buttonAnimation}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileTap="tap"
                >
                  <ArrowTopRightOnSquareIcon width={20} height={20} />
                  {t('contacts.map.open', 'Открыть в Google Maps')}
                </MapButton>
              </MapContainer>
            </Container>
          </MapSection>
        </Container>
      </ContentSection>
    </PageContainer>
  );
};

export default ContactsPage;
