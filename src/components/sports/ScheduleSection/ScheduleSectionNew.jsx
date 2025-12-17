import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
// TODO: Временно отключено - BookingModal
// import BookingModal from '../../booking/BookingModal';

const WHATSAPP_NUMBER = '66624805877';
import {
  ScheduleContainer,
  ScheduleTabs,
  ScheduleTab,
  CategoryTab,
  ScheduleContent,
  ClassCard,
  ClassTime,
  ClassInfo,
  ClassTitle,
  ClassMeta,
  ClassMetaItem,
  BookButton
} from './ScheduleStylesNew';
import { Section, SectionTag, SectionTitle, SectionSubtitle, ContentContainer } from '../../../styles/sports/CommonStyles';

// SWIM schedule (blue)
const swimSchedule = {
  monday: [
    { time: '18:00', titleKey: 'kids_5_8', duration: 60 }
  ],
  tuesday: [
    { time: '09:00', titleKey: 'adults_group', duration: 60 },
    { time: '10:00', titleKey: 'aqua_aerobics', duration: 60 }
  ],
  wednesday: [
    { time: '17:00', titleKey: 'kids_7_12', duration: 60 },
    { time: '18:00', titleKey: 'kids_5_8', duration: 60 }
  ],
  thursday: [
    { time: '09:00', titleKey: 'adults_group', duration: 60 },
    { time: '10:00', titleKey: 'aqua_aerobics', duration: 60 }
  ],
  friday: [
    { time: '17:00', titleKey: 'kids_7_12', duration: 60 },
    { time: '18:00', titleKey: 'kids_5_8', duration: 60 }
  ],
  saturday: []
};

// DANCE STUDIO schedule (purple)
const danceSchedule = {
  monday: [
    { time: '09:00', titleKey: 'yoga', duration: 60 },
    { time: '13:10', titleKey: 'yoga_pro', duration: 50 },
    { time: '17:00', titleKey: 'zumba_step', duration: 60 },
    { time: '18:00', titleKey: 'tabata', duration: 60 },
    { time: '19:00', titleKey: 'yoga', duration: 60 }
  ],
  tuesday: [
    { time: '09:00', titleKey: 'stretching', duration: 60 },
    { time: '10:00', titleKey: 'barre', duration: 60 },
    { time: '16:00', titleKey: 'high_heels', duration: 60 },
    { time: '17:00', titleKey: 'fitness', duration: 60 },
    { time: '18:00', titleKey: 'stretching', duration: 60 },
    { time: '19:00', titleKey: 'kids_dance', duration: 60 }
  ],
  wednesday: [
    { time: '09:00', titleKey: 'circl_mobility', duration: 60 },
    { time: '10:00', titleKey: 'zumba_toning', duration: 60 },
    { time: '13:10', titleKey: 'yoga_pro', duration: 50 },
    { time: '18:00', titleKey: 'tabata', duration: 60 }
  ],
  thursday: [
    { time: '09:00', titleKey: 'stretching', duration: 60 },
    { time: '10:00', titleKey: 'barre', duration: 60 },
    { time: '16:00', titleKey: 'high_heels', duration: 60 },
    { time: '17:00', titleKey: 'fitness', duration: 60 },
    { time: '18:00', titleKey: 'stretching', duration: 60 },
    { time: '19:00', titleKey: 'yoga', duration: 60 }
  ],
  friday: [
    { time: '09:00', titleKey: 'yoga', duration: 60 },
    { time: '13:10', titleKey: 'yoga_pro', duration: 50 },
    { time: '17:00', titleKey: 'circl_mobility', duration: 60 },
    { time: '18:00', titleKey: 'zumba', duration: 60 }
  ],
  saturday: [
    { time: '12:00', titleKey: 'kids_dance', duration: 60 },
    { time: '13:10', titleKey: 'yoga', duration: 50 },
    { time: '14:00', titleKey: 'girli_hiphop', duration: 60 },
    { time: '18:00', titleKey: 'hiphop', duration: 60 }
  ]
};

// FIGHT CLUB schedule (brown)
const fightSchedule = {
  monday: [
    { time: '11:00', titleKey: 'kickboxing', duration: 60 },
    { time: '13:00', titleKey: 'jiujitsu_nogi', duration: 60 },
    { time: '17:00', titleKey: 'jiujitsu_kids', duration: 60 },
    { time: '18:00', titleKey: 'jiujitsu_gi', duration: 60 },
    { time: '19:00', titleKey: 'muay_thai', duration: 60 }
  ],
  tuesday: [
    { time: '09:30', titleKey: 'boxing', duration: 60 },
    { time: '15:00', titleKey: 'boxing_women', duration: 60 },
    { time: '16:00', titleKey: 'muay_thai', duration: 60 },
    { time: '17:30', titleKey: 'muay_thai_kids', duration: 60 }
  ],
  wednesday: [
    { time: '11:00', titleKey: 'kickboxing', duration: 60 },
    { time: '13:00', titleKey: 'jiujitsu_nogi', duration: 60 },
    { time: '17:00', titleKey: 'jiujitsu_kids', duration: 60 },
    { time: '18:00', titleKey: 'jiujitsu_gi', duration: 60 },
    { time: '19:00', titleKey: 'muay_thai', duration: 60 }
  ],
  thursday: [
    { time: '09:30', titleKey: 'boxing', duration: 60 },
    { time: '16:00', titleKey: 'muay_thai', duration: 60 },
    { time: '17:30', titleKey: 'muay_thai_kids', duration: 60 }
  ],
  friday: [
    { time: '11:00', titleKey: 'kickboxing', duration: 60 },
    { time: '13:00', titleKey: 'jiujitsu_nogi', duration: 60 },
    { time: '17:00', titleKey: 'jiujitsu_kids', duration: 60 },
    { time: '18:00', titleKey: 'jiujitsu_gi', duration: 60 },
    { time: '19:00', titleKey: 'muay_thai', duration: 60 }
  ],
  saturday: [
    { time: '09:30', titleKey: 'boxing', duration: 60 },
    { time: '11:00', titleKey: 'muay_thai_family', duration: 60 }
  ]
};

const scheduleData = {
  swim: swimSchedule,
  dance: danceSchedule,
  fight: fightSchedule
};

const categories = [
  { key: 'swim', labelKey: 'swim' },
  { key: 'dance', labelKey: 'dance_studio' },
  { key: 'fight', labelKey: 'fight_club' }
];

const days = [
  { key: 'monday', labelKey: 'monday', shortKey: 'mon_short' },
  { key: 'tuesday', labelKey: 'tuesday', shortKey: 'tue_short' },
  { key: 'wednesday', labelKey: 'wednesday', shortKey: 'wed_short' },
  { key: 'thursday', labelKey: 'thursday', shortKey: 'thu_short' },
  { key: 'friday', labelKey: 'friday', shortKey: 'fri_short' },
  { key: 'saturday', labelKey: 'saturday', shortKey: 'sat_short' }
];

const ScheduleSectionNew = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('swim');
  const [activeDay, setActiveDay] = useState('monday');

  const handleBookClick = (classItem) => {
    const className = t(`sports.schedule.classes.${classItem.titleKey}`);
    const dayName = t(`sports.schedule.days.${activeDay}`);
    const categoryName = t(`sports.schedule.categories.${activeCategory}`);
    const message = `Здравствуйте! Хочу записаться на занятие в KAIF.\n\nКатегория: ${categoryName}\nЗанятие: ${className}\nДень: ${dayName}\nВремя: ${classItem.time}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getCurrentDayKey = () => {
    const dayIndex = new Date().getDay();
    // Sunday (0) defaults to Monday since we don't have Sunday classes
    const dayKeys = ['monday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    return dayKeys[dayIndex];
  };

  React.useEffect(() => {
    const currentDay = getCurrentDayKey();
    setActiveDay(currentDay);
  }, []);

  const currentSchedule = scheduleData[activeCategory][activeDay] || [];

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
          {/* Category Tabs */}
          <ScheduleTabs
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <CategoryTab
                key={category.key}
                active={activeCategory === category.key}
                onClick={() => setActiveCategory(category.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="full">{t(`sports.schedule.categories.${category.labelKey}`)}</span>
              </CategoryTab>
            ))}
          </ScheduleTabs>

          {/* Day Tabs */}
          <ScheduleTabs
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
            key={`${activeCategory}-${activeDay}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {currentSchedule.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem',
                color: 'rgba(255,255,255,0.6)',
                fontSize: '1.1rem',
                gridColumn: '1 / -1'
              }}>
                {t('sports.schedule.no_classes', 'Нет занятий в этот день')}
              </div>
            ) : (
              currentSchedule.map((classItem, index) => (
                <ClassCard key={index}>
                  <ClassTime>
                    <ClockIcon />
                    <span>{classItem.time}</span>
                  </ClassTime>

                  <ClassInfo>
                    <ClassTitle>{t(`sports.schedule.classes.${classItem.titleKey}`)}</ClassTitle>

                    <ClassMeta>
                      <ClassMetaItem>
                        <ClockIcon />
                        {classItem.duration} {t('sports.schedule.minutes', 'мин')}
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
              ))
            )}
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
