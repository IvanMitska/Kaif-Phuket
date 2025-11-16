import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  PhoneIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';
import {
  CTAContainer,
  CTAContent,
  CTATitle,
  CTASubtitle,
  CTAButtonGroup,
  CTAPrimaryButton,
  CTASecondaryButton,
  CTABackground,
  CTAPattern
} from './CTAStyles';

const CTASection = () => {
  const { t } = useTranslation();

  return (
    <CTAContainer>
      <CTABackground />
      <CTAPattern />

      <CTAContent
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CTATitle>
            {t('sports.cta.title', 'Готовы начать?')}
          </CTATitle>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <CTASubtitle>
            {t('sports.cta.subtitle', 'Запишитесь на бесплатную пробную тренировку и начните путь к вашим спортивным целям уже сегодня')}
          </CTASubtitle>
        </motion.div>

        <CTAButtonGroup
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <CTAPrimaryButton
            as="a"
            href="https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20бесплатную%20пробную%20тренировку%20в%20KAIF"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 15px 40px rgba(210, 155, 132, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <ChatBubbleLeftRightIcon />
            {t('sports.cta.primary_button', 'Записаться на тренировку')}
            <ArrowRightIcon />
          </CTAPrimaryButton>

          <CTASecondaryButton
            as="a"
            href="tel:+66624805877"
            whileHover={{
              scale: 1.05,
              borderColor: 'rgba(255, 255, 255, 1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <PhoneIcon />
            {t('sports.cta.secondary_button', 'Позвонить нам')}
          </CTASecondaryButton>
        </CTAButtonGroup>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontSize: '0.9rem',
            color: 'rgba(255, 255, 255, 0.7)',
            marginTop: '1.5rem',
            textAlign: 'center'
          }}
        >
          {t('sports.cta.note', 'Первая тренировка — бесплатно! Без обязательств.')}
        </motion.p>
      </CTAContent>
    </CTAContainer>
  );
};

export default CTASection;
