import React, { useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PageHead from '../components/layout/PageHead';

// Ленивая загрузка компонентов спорта для оптимизации
const HeroSection = React.lazy(() => import('../components/sports/HeroSection/HeroSection'));
const BenefitsSection = React.lazy(() => import('../components/sports/BenefitsSection/BenefitsSection'));
const ScrollingText = React.lazy(() => import('../components/sports/ScrollingText/ScrollingText'));
const FacilitySectionNew = React.lazy(() => import('../components/sports/FacilitySection/FacilitySectionNew'));
const ScheduleSectionNew = React.lazy(() => import('../components/sports/ScheduleSection/ScheduleSectionNew'));
const CTASection = React.lazy(() => import('../components/sports/CTASection/CTASection'));
import { PageContainer } from '../styles/sports/CommonStyles';
import PageScrollReset from '../components/common/PageScrollReset';

// Невидимый компонент загрузки
const InvisibleLoader = () => null;

const SportsPage = () => {
  const { t } = useTranslation();

  // Добавлено сохранение стилей при рендеринге страницы
  useEffect(() => {
    console.log('SportsPage загружается...');
    // Добавляем класс для спортивной страницы
    document.body.classList.add('sports-page');

    // Принудительно прокручиваем вверх при загрузке страницы
    window.scrollTo(0, 0);

    // Удаляем класс при уходе со страницы
    return () => {
      console.log('SportsPage выгружается...');
      document.body.classList.remove('sports-page');
    };
  }, []);

  return (
    <PageContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <PageHead
        titleKey="page_titles.sports"
        description={t('sports.hero.subtitle', 'Modern equipment, professional trainers and atmosphere to achieve your sporting goals')}
        keywords="KAIF sports, gym, fitness, martial arts, MMA, boxing, training, Phuket"
        ogImage="/images/sports/gym/gym-main.jpg"
      />
      <PageScrollReset />
      <Suspense fallback={<InvisibleLoader />}>
        <HeroSection />
        <BenefitsSection />
        <ScrollingText />
        <FacilitySectionNew />
        <ScheduleSectionNew />
        <CTASection />
      </Suspense>
    </PageContainer>
  );
};

export default SportsPage;
