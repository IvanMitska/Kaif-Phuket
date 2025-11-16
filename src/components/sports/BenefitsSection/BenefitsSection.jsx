import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  FireIcon,
  UserGroupIcon,
  ClockIcon,
  CpuChipIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import {
  BenefitsContainer,
  BenefitsGrid,
  BenefitCard,
  BenefitIcon,
  BenefitTitle,
  BenefitDescription,
  FloatingShape
} from './BenefitsStyles';
import { Section, SectionTag, SectionTitle, ContentContainer } from '../../../styles/sports/CommonStyles';

const benefits = [
  {
    icon: FireIcon,
    titleKey: 'sports.benefits.premium.title',
    descriptionKey: 'sports.benefits.premium.description',
    defaultTitle: 'Премиальное оборудование',
    defaultDescription: 'Тренажеры от ведущих мировых производителей Technogym и Life Fitness',
    color: '#D29B84'
  },
  {
    icon: UserGroupIcon,
    titleKey: 'sports.benefits.trainers.title',
    descriptionKey: 'sports.benefits.trainers.description',
    defaultTitle: 'Профессиональные тренеры',
    defaultDescription: 'Сертифицированные специалисты с международным опытом',
    color: '#90B3A7'
  },
  {
    icon: ClockIcon,
    titleKey: 'sports.benefits.schedule.title',
    descriptionKey: 'sports.benefits.schedule.description',
    defaultTitle: 'Гибкое расписание',
    defaultDescription: 'Открыты с 07:00 до 22:00 каждый день недели',
    color: '#C8A8E9'
  },
  {
    icon: CpuChipIcon,
    titleKey: 'sports.benefits.technology.title',
    descriptionKey: 'sports.benefits.technology.description',
    defaultTitle: 'Современные технологии',
    defaultDescription: 'Мониторинг прогресса и персональные программы тренировок',
    color: '#D29B84'
  },
  {
    icon: SparklesIcon,
    titleKey: 'sports.benefits.atmosphere.title',
    descriptionKey: 'sports.benefits.atmosphere.description',
    defaultTitle: 'Комфортная атмосфера',
    defaultDescription: 'Просторные залы с кондиционированием и панорамными окнами',
    color: '#90B3A7'
  },
  {
    icon: ShieldCheckIcon,
    titleKey: 'sports.benefits.safety.title',
    descriptionKey: 'sports.benefits.safety.description',
    defaultTitle: 'Безопасность превыше всего',
    defaultDescription: 'Страхование, медицинский контроль и соблюдение всех стандартов',
    color: '#C8A8E9'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const BenefitsSection = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <FloatingShape
        style={{
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(210, 155, 132, 0.1) 0%, transparent 70%)'
        }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <FloatingShape
        style={{
          bottom: '10%',
          right: '5%',
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(144, 179, 167, 0.1) 0%, transparent 70%)'
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <ContentContainer>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <SectionTag
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {t('sports.benefits.tag', 'Почему выбирают нас')}
          </SectionTag>

          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            dangerouslySetInnerHTML={{
              __html: t('sports.benefits.title', 'Преимущества <span>спортивного комплекса</span> KAIF')
            }}
          />
        </div>

        <BenefitsContainer>
          <BenefitsGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;

              return (
                <BenefitCard
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                    transition: { duration: 0.3 }
                  }}
                >
                  <BenefitIcon color={benefit.color}>
                    <IconComponent />
                  </BenefitIcon>

                  <BenefitTitle>
                    {t(benefit.titleKey, benefit.defaultTitle)}
                  </BenefitTitle>

                  <BenefitDescription>
                    {t(benefit.descriptionKey, benefit.defaultDescription)}
                  </BenefitDescription>
                </BenefitCard>
              );
            })}
          </BenefitsGrid>
        </BenefitsContainer>
      </ContentContainer>
    </Section>
  );
};

export default BenefitsSection;
