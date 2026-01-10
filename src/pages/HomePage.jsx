import React, { useEffect, useRef, lazy, Suspense, memo } from 'react';
import { useLoading } from '../components/global/LoadingContext';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PageHead from '../components/layout/PageHead';

// Импортируем только критический hero компонент
import HeroFullscreen from '../components/home/HeroFullscreen';

// Lazy loading для всех некритических компонентов
const ExclusiveZones = lazy(() => import('../components/home/ExclusiveZones'));
const PricingSection = lazy(() => import('../components/home/PricingSection'));

const AdvantagesSection = lazy(() =>
  import('../components/home/AdvantagesSection').then(module => ({
    default: memo(module.default)
  }))
);
const GallerySection = lazy(() =>
  import('../components/common/GallerySection').then(module => ({
    default: memo(module.GallerySection)
  }))
);
const FAQSection = lazy(() =>
  import('../components/home/FAQSection').then(module => ({
    default: memo(module.default)
  }))
);

// Упрощенный лоадер для lazy компонентов
const SectionLoader = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(144, 179, 167, 0.02);
  
  &::after {
    content: '';
    width: 24px;
    height: 24px;
    border: 2px solid rgba(144, 179, 167, 0.2);
    border-top: 2px solid #90B3A7;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Упрощенный контейнер для кнопки контактов
const ContactButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  background: rgba(144, 179, 167, 0.02);
`;

// Упрощенная стилизованная кнопка
const ContactButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.2s ease;
  min-width: 200px;
  text-align: center;
  background: linear-gradient(135deg, #90B3A7 0%, #A8C5B8 100%);
  color: white;
  border: 2px solid transparent;
  box-shadow: 0 4px 15px rgba(144, 179, 167, 0.3);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(144, 179, 167, 0.4);
    background: linear-gradient(135deg, #A8C5B8 0%, #B8CFC2 100%);
    color: white;
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(-1px);
  }
  
  svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: translateX(3px);
  }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    padding: 1rem 2rem;
    font-size: 0.8rem;
    min-width: unset;
  }
  
  @media (max-width: 480px) {
    padding: 0.9rem 1.8rem;
    font-size: 0.75rem;
    
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

// Мемоизированный компонент для предотвращения лишних ререндеров
const HomePage = memo(() => {
  const { t } = useTranslation();
  const { showLoading } = useLoading();
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    // Отключаем искусственную задержку для лучшей производительности
    // Loading screen блокирует FCP и LCP
    if (!hasInitializedRef.current) {
      hasInitializedRef.current = true;
      // showLoading(1000); // Отключено для производительности
    }
  }, []); // Пустой массив зависимостей - эффект выполнится только один раз

  return (
    <>
      <PageHead
        titleKey="page_titles.home"
        description={t('home.hero.subtitle', 'Unique relaxation and wellness experience in Phuket')}
        keywords="KAIF, spa, wellness, Phuket, gym, restaurant, banya, massage"
        ogImage="/images/logos/logo-og.png"
      />

      {/* Полноэкранная секция героя - единственный критический компонент */}
      <HeroFullscreen />

      <Suspense fallback={<SectionLoader />}>
        <ExclusiveZones />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <PricingSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AdvantagesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <GallerySection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <FAQSection />
      </Suspense>

      {/* Упрощенная кнопка для перехода на страницу контактов */}
      <ContactButtonContainer>
        <ContactButton to="/contacts">
          {t('common.contact_us')}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </ContactButton>
      </ContactButtonContainer>
    </>
  );
});

HomePage.displayName = 'HomePage';

export default HomePage; 