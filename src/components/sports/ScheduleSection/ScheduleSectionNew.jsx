import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  UserIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
// TODO: Временно отключено - BookingModal
// import BookingModal from '../../booking/BookingModal';

const WHATSAPP_NUMBER = '66624805877';
import {
  ScheduleContainer,
  ScheduleTabs,
  ScheduleTab,
  ScheduleContent,
  ClassCard,
  ClassTime,
  ClassInfo,
  ClassTitle,
  ClassInstructor,
  ClassMeta,
  ClassMetaItem,
  BookButton
} from './ScheduleStylesNew';
import { Section, SectionTag, SectionTitle, SectionSubtitle, ContentContainer } from '../../../styles/sports/CommonStyles';

const scheduleData = {
  monday: [
    { time: '09:00', titleKey: 'yoga_flow', instructor: 'Anna K.', duration: 60, spots: 12 },
    { time: '11:00', titleKey: 'hiit_training', instructor: 'Michael S.', duration: 45, spots: 20 },
    { time: '14:00', titleKey: 'boxing', instructor: 'Sergei T.', duration: 60, spots: 15 },
    { time: '17:00', titleKey: 'stretching', instructor: 'Elena G.', duration: 45, spots: 15 },
    { time: '19:00', titleKey: 'crossfit', instructor: 'Dmitry L.', duration: 60, spots: 18 }
  ],
  tuesday: [
    { time: '09:00', titleKey: 'pilates', instructor: 'Maria V.', duration: 60, spots: 12 },
    { time: '11:00', titleKey: 'muay_thai', instructor: 'Alexey D.', duration: 60, spots: 15 },
    { time: '15:00', titleKey: 'dance_cardio', instructor: 'Viktoria Z.', duration: 45, spots: 20 },
    { time: '18:00', titleKey: 'strength_training', instructor: 'Ivan P.', duration: 60, spots: 16 },
    { time: '20:00', titleKey: 'yoga_therapy', instructor: 'Natalia M.', duration: 60, spots: 10 }
  ],
  wednesday: [
    { time: '09:00', titleKey: 'functional_training', instructor: 'Michael S.', duration: 60, spots: 18 },
    { time: '11:00', titleKey: 'zumba', instructor: 'Viktoria Z.', duration: 45, spots: 25 },
    { time: '14:00', titleKey: 'mma_basics', instructor: 'Sergei T.', duration: 60, spots: 12 },
    { time: '17:00', titleKey: 'mobility', instructor: 'Elena G.', duration: 45, spots: 15 },
    { time: '19:00', titleKey: 'body_pump', instructor: 'Dmitry L.', duration: 60, spots: 20 }
  ],
  thursday: [
    { time: '09:00', titleKey: 'yoga_power', instructor: 'Anna K.', duration: 60, spots: 12 },
    { time: '11:00', titleKey: 'boxing_advanced', instructor: 'Alexey D.', duration: 60, spots: 10 },
    { time: '15:00', titleKey: 'barre', instructor: 'Maria V.', duration: 45, spots: 15 },
    { time: '18:00', titleKey: 'trx_training', instructor: 'Ivan P.', duration: 45, spots: 12 },
    { time: '20:00', titleKey: 'stretching_relax', instructor: 'Natalia M.', duration: 60, spots: 15 }
  ],
  friday: [
    { time: '09:00', titleKey: 'hiit_cardio', instructor: 'Michael S.', duration: 45, spots: 20 },
    { time: '11:00', titleKey: 'dance_fitness', instructor: 'Viktoria Z.', duration: 60, spots: 25 },
    { time: '14:00', titleKey: 'muay_thai_sparring', instructor: 'Sergei T.', duration: 60, spots: 10 },
    { time: '17:00', titleKey: 'core_training', instructor: 'Elena G.', duration: 45, spots: 15 },
    { time: '19:00', titleKey: 'crossfit_wod', instructor: 'Dmitry L.', duration: 60, spots: 18 }
  ],
  saturday: [
    { time: '10:00', titleKey: 'morning_yoga', instructor: 'Anna K.', duration: 60, spots: 15 },
    { time: '12:00', titleKey: 'open_mat_mma', instructor: 'Alexey D.', duration: 90, spots: 12 },
    { time: '15:00', titleKey: 'zumba_party', instructor: 'Viktoria Z.', duration: 60, spots: 30 },
    { time: '17:00', titleKey: 'strength_conditioning', instructor: 'Ivan P.', duration: 60, spots: 16 }
  ],
  sunday: [
    { time: '10:00', titleKey: 'gentle_yoga', instructor: 'Natalia M.', duration: 60, spots: 15 },
    { time: '12:00', titleKey: 'family_fitness', instructor: 'Maria V.', duration: 45, spots: 20 },
    { time: '15:00', titleKey: 'recovery_session', instructor: 'Elena G.', duration: 60, spots: 12 }
  ]
};

const days = [
  { key: 'monday', labelKey: 'monday', shortKey: 'mon_short' },
  { key: 'tuesday', labelKey: 'tuesday', shortKey: 'tue_short' },
  { key: 'wednesday', labelKey: 'wednesday', shortKey: 'wed_short' },
  { key: 'thursday', labelKey: 'thursday', shortKey: 'thu_short' },
  { key: 'friday', labelKey: 'friday', shortKey: 'fri_short' },
  { key: 'saturday', labelKey: 'saturday', shortKey: 'sat_short' },
  { key: 'sunday', labelKey: 'sunday', shortKey: 'sun_short' }
];

const ScheduleSectionNew = () => {
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState('monday');

  const handleBookClick = (classItem) => {
    const className = t(`sports.schedule.classes.${classItem.titleKey}`);
    const dayName = t(`sports.schedule.days.${activeDay}`);
    const message = `Здравствуйте! Хочу записаться на занятие в KAIF.\n\nЗанятие: ${className}\nДень: ${dayName}\nВремя: ${classItem.time}\nИнструктор: ${classItem.instructor}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getCurrentDayKey = () => {
    const dayIndex = new Date().getDay();
    const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return dayKeys[dayIndex];
  };

  React.useEffect(() => {
    setActiveDay(getCurrentDayKey());
  }, []);

  return (
    <Section id="schedule">
      <ContentContainer>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <SectionTag
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {t('sports.schedule.tag', 'Расписание')}
          </SectionTag>

          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            dangerouslySetInnerHTML={{
              __html: t('sports.schedule.title', 'Расписание <span>занятий</span>')
            }}
          />

          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('sports.schedule.subtitle', 'Выберите день недели и запишитесь на занятие')}
          </SectionSubtitle>
        </div>

        <ScheduleContainer>
          <ScheduleTabs
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {days.map((day) => (
              <ScheduleTab
                key={day.key}
                active={activeDay === day.key}
                onClick={() => setActiveDay(day.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="full">{t(`sports.schedule.days.${day.labelKey}`)}</span>
                <span className="short">{t(`sports.schedule.days.${day.shortKey}`)}</span>
              </ScheduleTab>
            ))}
          </ScheduleTabs>

          <ScheduleContent
            key={activeDay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {scheduleData[activeDay].map((classItem, index) => (
              <ClassCard key={index}>
                <ClassTime>
                  <ClockIcon />
                  <span>{classItem.time}</span>
                </ClassTime>

                <ClassInfo>
                  <ClassTitle>{t(`sports.schedule.classes.${classItem.titleKey}`)}</ClassTitle>
                  <ClassInstructor>
                    <UserIcon />
                    {classItem.instructor}
                  </ClassInstructor>

                  <ClassMeta>
                    <ClassMetaItem>
                      <ClockIcon />
                      {classItem.duration} {t('sports.schedule.minutes', 'мин')}
                    </ClassMetaItem>
                    <ClassMetaItem>
                      <UserIcon />
                      {classItem.spots} {t('sports.schedule.spots', 'мест')}
                    </ClassMetaItem>
                  </ClassMeta>
                </ClassInfo>

                <BookButton
                  as="button"
                  onClick={() => handleBookClick(classItem)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CalendarIcon />
                  {t('sports.schedule.book', 'Записаться')}
                </BookButton>
              </ClassCard>
            ))}
          </ScheduleContent>
        </ScheduleContainer>
      </ContentContainer>

      {/* TODO: Временно отключено - BookingModal, используем WhatsApp
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        service={selectedClass ? `${t(`sports.schedule.classes.${selectedClass.titleKey}`)} (${selectedClass.time})` : ''}
        source="Sports - Schedule"
      />
      */}
    </Section>
  );
};

export default ScheduleSectionNew;
