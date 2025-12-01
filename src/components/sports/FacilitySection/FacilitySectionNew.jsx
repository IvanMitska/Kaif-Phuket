import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
// TODO: Временно отключено - BookingModal
// import BookingModal from '../../booking/BookingModal';

const WHATSAPP_NUMBER = '66624805877';

import {
  FacilityGrid,
  FacilityCardModern,
  FacilityImageContainer,
  FacilityImage,
  FacilityOverlay,
  FacilityContent,
  FacilityTag,
  FacilityTitle,
  FacilityDescription,
  FacilityMetaRow,
  FacilityMetaItem,
  FacilityFeaturesList,
  FacilityFeatureItem,
  FacilityButton,
  ImageGalleryDots,
  ImageDot
} from './FacilityStylesNew';

import { Section, SectionTag, SectionTitle, SectionSubtitle, ContentContainer } from '../../../styles/sports/CommonStyles';

const facilities = [
  {
    id: 'gym',
    images: [
      '/images/sports/gym/gym-1.jpg',
      '/images/sports/gym/gym-2.jpg',
      '/images/sports/gym/gym-3.jpg'
    ],
    tagKey: 'sports.facilities.gym.tag',
    defaultTag: 'ТРЕНАЖЕРНЫЙ ЗАЛ',
    titleKey: 'sports.facilities.gym.title',
    defaultTitle: 'Современный тренажерный зал',
    descriptionKey: 'sports.facilities.gym.short_description',
    defaultDescription: 'Премиальное оборудование от Technogym и Life Fitness для эффективных тренировок',
    hours: '07:00 - 22:00',
    capacity: '40 человек',
    features: [
      { key: 'sports.facilities.gym.feature1', default: 'Зона кардио-тренажеров' },
      { key: 'sports.facilities.gym.feature2', default: 'Зона свободных весов' },
      { key: 'sports.facilities.gym.feature3', default: 'Функциональный тренинг' }
    ],
    whatsappMessage: 'Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20тренажерном%20зале%20KAIF',
    gradient: 'linear-gradient(135deg, rgba(210, 155, 132, 0.9) 0%, rgba(144, 179, 167, 0.9) 100%)'
  },
  {
    id: 'fight',
    images: [
      '/images/sports/fight-club/fight-1.jpg',
      '/images/sports/fight-club/fight-2.jpg',
      '/images/sports/fight-club/fight-3.jpg'
    ],
    tagKey: 'sports.facilities.fight.tag',
    defaultTag: 'БОЕВЫЕ ИСКУССТВА',
    titleKey: 'sports.facilities.fight.title',
    defaultTitle: 'Бойцовский клуб',
    descriptionKey: 'sports.facilities.fight.short_description',
    defaultDescription: 'Профессиональный ринг и оборудование для бокса, муай-тай и ММА',
    hours: '07:00 - 22:00',
    capacity: '25 человек',
    features: [
      { key: 'sports.facilities.fight.feature1', default: 'Профессиональный ринг' },
      { key: 'sports.facilities.fight.feature2', default: 'Боксерские мешки и груши' },
      { key: 'sports.facilities.fight.feature3', default: 'Тренеры-чемпионы' }
    ],
    whatsappMessage: 'Здравствуйте!%20Хочу%20записаться%20на%20тренировку%20в%20бойцовском%20клубе%20KAIF',
    gradient: 'linear-gradient(135deg, rgba(200, 168, 233, 0.9) 0%, rgba(144, 179, 167, 0.9) 100%)'
  },
  {
    id: 'dance',
    images: [
      '/images/hero/hero-fitness.jpg'
    ],
    tagKey: 'sports.facilities.dance.tag',
    defaultTag: 'ТАНЦЫ И ФИТНЕС',
    titleKey: 'sports.facilities.dance.title',
    defaultTitle: 'Танцевальная студия',
    descriptionKey: 'sports.facilities.dance.short_description',
    defaultDescription: 'Просторная студия для танцев, йоги и групповых фитнес-программ',
    hours: '07:00 - 22:00',
    capacity: '30 человек',
    features: [
      { key: 'sports.facilities.dance.feature1', default: 'Зеркальные стены' },
      { key: 'sports.facilities.dance.feature2', default: 'Профессиональное покрытие' },
      { key: 'sports.facilities.dance.feature3', default: 'Звуковая система' }
    ],
    whatsappMessage: 'Здравствуйте!%20Хочу%20записаться%20на%20танцевальные%20занятия%20в%20KAIF',
    gradient: 'linear-gradient(135deg, rgba(144, 179, 167, 0.9) 0%, rgba(210, 155, 132, 0.9) 100%)'
  }
];

const FacilitySectionNew = () => {
  const { t } = useTranslation();
  const [activeImages, setActiveImages] = useState(
    facilities.reduce((acc, facility) => ({ ...acc, [facility.id]: 0 }), {})
  );

  const handleBookClick = (facility) => {
    // Прямой переход в WhatsApp
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${facility.whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleImageChange = (facilityId, imageIndex) => {
    setActiveImages(prev => ({
      ...prev,
      [facilityId]: imageIndex
    }));
  };

  return (
    <Section id="facilities">
      <ContentContainer>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionTag
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {t('sports.facilities.tag', 'Наши объекты')}
          </SectionTag>

          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            dangerouslySetInnerHTML={{
              __html: t('sports.facilities.title', 'Современные <span>спортивные зоны</span>')
            }}
          />

          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('sports.facilities.subtitle', 'Выберите зону, которая подходит именно вам')}
          </SectionSubtitle>
        </div>

        <FacilityGrid>
          {facilities.map((facility, index) => (
            <FacilityCardModern
              key={facility.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <FacilityImageContainer>
                <AnimatePresence mode="wait">
                  <FacilityImage
                    key={activeImages[facility.id]}
                    src={facility.images[activeImages[facility.id]]}
                    alt={facility.defaultTitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>

                {facility.images.length > 1 && (
                  <ImageGalleryDots>
                    {facility.images.map((_, imgIndex) => (
                      <ImageDot
                        key={imgIndex}
                        active={activeImages[facility.id] === imgIndex}
                        onClick={() => handleImageChange(facility.id, imgIndex)}
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ scale: 0.9 }}
                      />
                    ))}
                  </ImageGalleryDots>
                )}

                <FacilityTag
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {t(facility.tagKey, facility.defaultTag)}
                </FacilityTag>
              </FacilityImageContainer>

              <FacilityContent>
                <FacilityTitle>
                  {t(facility.titleKey, facility.defaultTitle)}
                </FacilityTitle>

                <FacilityDescription>
                  {t(facility.descriptionKey, facility.defaultDescription)}
                </FacilityDescription>

                <FacilityMetaRow>
                  <FacilityMetaItem>
                    <ClockIcon />
                    <span>{facility.hours}</span>
                  </FacilityMetaItem>
                  <FacilityMetaItem>
                    <UserGroupIcon />
                    <span>{t('sports.facilities.capacity', 'До {{count}} человек', { count: facility.capacity.split(' ')[0] })}</span>
                  </FacilityMetaItem>
                </FacilityMetaRow>

                <FacilityFeaturesList>
                  {facility.features.map((feature, featureIndex) => (
                    <FacilityFeatureItem key={featureIndex}>
                      <CheckCircleIcon />
                      <span>{t(feature.key, feature.default)}</span>
                    </FacilityFeatureItem>
                  ))}
                </FacilityFeaturesList>

                <FacilityButton
                  as="button"
                  onClick={() => handleBookClick(facility)}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(210, 155, 132, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CalendarIcon />
                  {t('sports.facilities.book_button', 'Забронировать')}
                  <ArrowRightIcon />
                </FacilityButton>
              </FacilityContent>
            </FacilityCardModern>
          ))}
        </FacilityGrid>
      </ContentContainer>

      {/* TODO: Временно отключено - BookingModal, используем WhatsApp
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={selectedFacility ? t(selectedFacility.titleKey, selectedFacility.defaultTitle) : ''}
        source={`Sports - ${selectedFacility?.id || 'Facility'}`}
      />
      */}
    </Section>
  );
};

export default FacilitySectionNew;
