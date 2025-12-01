import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ArrowRightIcon,
  PhoneIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';
// TODO: Временно отключено - BookingModal
// import BookingModal from '../../booking/BookingModal';

const WHATSAPP_NUMBER = '66624805877';

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

  const handleBookClick = () => {
    const message = encodeURIComponent('Здравствуйте! Хочу записаться на пробную тренировку в KAIF.');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

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
            as="button"
            onClick={handleBookClick}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 15px 40px rgba(210, 155, 132, 0.4)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <CalendarDaysIcon />
            {t('sports.cta.primary_button', 'Записаться на тренировку')}
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
      </CTAContent>

      {/* TODO: Временно отключено - BookingModal, используем WhatsApp
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={t('sports.booking.service', 'Fitness Training')}
        source="Sports page - CTA Section"
      />
      */}
    </CTAContainer>
  );
};

export default CTASection;
