import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  UserIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
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
    { time: '09:00', title: 'Yoga Flow', instructor: 'Anna K.', duration: 60, spots: 12 },
    { time: '11:00', title: 'HIIT Training', instructor: 'Michael S.', duration: 45, spots: 20 },
    { time: '14:00', title: 'Boxing', instructor: 'Sergei T.', duration: 60, spots: 15 },
    { time: '17:00', title: 'Stretching', instructor: 'Elena G.', duration: 45, spots: 15 },
    { time: '19:00', title: 'CrossFit', instructor: 'Dmitry L.', duration: 60, spots: 18 }
  ],
  tuesday: [
    { time: '09:00', title: 'Pilates', instructor: 'Maria V.', duration: 60, spots: 12 },
    { time: '11:00', title: 'Muay Thai', instructor: 'Alexey D.', duration: 60, spots: 15 },
    { time: '15:00', title: 'Dance Cardio', instructor: 'Viktoria Z.', duration: 45, spots: 20 },
    { time: '18:00', title: 'Strength Training', instructor: 'Ivan P.', duration: 60, spots: 16 },
    { time: '20:00', title: 'Yoga Therapy', instructor: 'Natalia M.', duration: 60, spots: 10 }
  ],
  wednesday: [
    { time: '09:00', title: 'Functional Training', instructor: 'Michael S.', duration: 60, spots: 18 },
    { time: '11:00', title: 'Zumba', instructor: 'Viktoria Z.', duration: 45, spots: 25 },
    { time: '14:00', title: 'MMA Basics', instructor: 'Sergei T.', duration: 60, spots: 12 },
    { time: '17:00', title: 'Mobility', instructor: 'Elena G.', duration: 45, spots: 15 },
    { time: '19:00', title: 'Body Pump', instructor: 'Dmitry L.', duration: 60, spots: 20 }
  ],
  thursday: [
    { time: '09:00', title: 'Yoga Power', instructor: 'Anna K.', duration: 60, spots: 12 },
    { time: '11:00', title: 'Boxing Advanced', instructor: 'Alexey D.', duration: 60, spots: 10 },
    { time: '15:00', title: 'Barre', instructor: 'Maria V.', duration: 45, spots: 15 },
    { time: '18:00', title: 'TRX Training', instructor: 'Ivan P.', duration: 45, spots: 12 },
    { time: '20:00', title: 'Stretching & Relax', instructor: 'Natalia M.', duration: 60, spots: 15 }
  ],
  friday: [
    { time: '09:00', title: 'HIIT Cardio', instructor: 'Michael S.', duration: 45, spots: 20 },
    { time: '11:00', title: 'Dance Fitness', instructor: 'Viktoria Z.', duration: 60, spots: 25 },
    { time: '14:00', title: 'Muay Thai Sparring', instructor: 'Sergei T.', duration: 60, spots: 10 },
    { time: '17:00', title: 'Core Training', instructor: 'Elena G.', duration: 45, spots: 15 },
    { time: '19:00', title: 'CrossFit WOD', instructor: 'Dmitry L.', duration: 60, spots: 18 }
  ],
  saturday: [
    { time: '10:00', title: 'Morning Yoga', instructor: 'Anna K.', duration: 60, spots: 15 },
    { time: '12:00', title: 'Open Mat (MMA)', instructor: 'Alexey D.', duration: 90, spots: 12 },
    { time: '15:00', title: 'Zumba Party', instructor: 'Viktoria Z.', duration: 60, spots: 30 },
    { time: '17:00', title: 'Strength & Conditioning', instructor: 'Ivan P.', duration: 60, spots: 16 }
  ],
  sunday: [
    { time: '10:00', title: 'Gentle Yoga', instructor: 'Natalia M.', duration: 60, spots: 15 },
    { time: '12:00', title: 'Family Fitness', instructor: 'Maria V.', duration: 45, spots: 20 },
    { time: '15:00', title: 'Recovery Session', instructor: 'Elena G.', duration: 60, spots: 12 }
  ]
};

const days = [
  { key: 'monday', label: 'Понедельник', short: 'ПН' },
  { key: 'tuesday', label: 'Вторник', short: 'ВТ' },
  { key: 'wednesday', label: 'Среда', short: 'СР' },
  { key: 'thursday', label: 'Четверг', short: 'ЧТ' },
  { key: 'friday', label: 'Пятница', short: 'ПТ' },
  { key: 'saturday', label: 'Суббота', short: 'СБ' },
  { key: 'sunday', label: 'Воскресенье', short: 'ВС' }
];

const ScheduleSectionNew = () => {
  const { t } = useTranslation();
  const [activeDay, setActiveDay] = useState('monday');

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
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
                <span className="full">{day.label}</span>
                <span className="short">{day.short}</span>
              </ScheduleTab>
            ))}
          </ScheduleTabs>

          <ScheduleContent
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {scheduleData[activeDay].map((classItem, index) => (
              <ClassCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 15px 40px rgba(0, 0, 0, 0.12)' }}
              >
                <ClassTime>
                  <ClockIcon />
                  <span>{classItem.time}</span>
                </ClassTime>

                <ClassInfo>
                  <ClassTitle>{classItem.title}</ClassTitle>
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
                  as="a"
                  href={`https://wa.me/66624805877?text=Здравствуйте!%20Хочу%20записаться%20на%20${classItem.title}%20в%20${classItem.time}`}
                  target="_blank"
                  rel="noopener noreferrer"
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
    </Section>
  );
};

export default ScheduleSectionNew;
