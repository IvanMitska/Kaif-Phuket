import React, { useEffect, Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';

// DEFER: Load global styles components lazily
const GlobalFontStyle = lazy(() => import('./components/global/GlobalFontStyle'));
const GlobalStyles = lazy(() => import('./components/global/GlobalStyles'));

// CRITICAL: Loading components (needed immediately)
import { LoadingProvider, useLoading } from './components/global/LoadingContext';
import LoadingScreen from './components/global/LoadingScreen';
import ScrollToTop from './components/common/ScrollToTop';

// Holiday components (December 2024 - January 2025)
import Snowfall from './components/common/Snowfall';
import SantaHat from './components/common/SantaHat';
import HolidayGarland from './components/common/HolidayGarland';
import './styles/holiday-theme.css';

// Подавляем CSS предупреждения в development режиме
import './utils/suppressCSSWarnings';

// DEFER: Load non-critical CSS asynchronously
import('./styles/mobile-optimizations.css');
import('./styles/simple-header-fix.css');
import('./styles/scroll-fix.css');

import { theme } from './theme.fixed';

// DEFER: Layout will be loaded when needed
const Layout = lazy(() => import('./components/layout/Layout'));

// AGGRESSIVE: Lazy load ALL pages including HomePage
const HomePage = lazy(() => import('./pages/HomePage'));
const RestaurantPage = lazy(() => import('./pages/RestaurantPage'));
const SpaPage = lazy(() => import('./pages/SpaPage'));
const SportsPage = lazy(() => import('./pages/SportsPage'));
const BanyaPage = lazy(() => import('./pages/BanyaPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const SurveyPage = lazy(() => import('./pages/SurveyPage'));


// Невидимый компонент загрузки - без индикаторов
const InvisibleLoader = () => null;

// Компонент для управления переходами между страницами с сохранением стилей
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Suspense fallback={<InvisibleLoader />}>
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/spa" element={<SpaPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/banya" element={<BanyaPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/survey" element={<SurveyPage />} />

        {/* Добавляем точные маршруты для предотвращения конфликтов */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

// Основной компонент приложения с экраном загрузки
const AppContent = () => {
  const { isLoading, isContentReady } = useLoading();

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <ScrollToTop />
      <Snowfall />
      <SantaHat />
      <HolidayGarland />
      {isContentReady && (
        <Suspense fallback={<InvisibleLoader />}>
          <div className="App holiday-theme">
            <Layout>
              <AnimatedRoutes />
            </Layout>
          </div>
        </Suspense>
      )}
    </>
  );
};

function App() {
  const { i18n, t } = useTranslation();
  const [forceUpdate, setForceUpdate] = useState(0);

  // Принудительное обновление всего приложения при смене языка
  useEffect(() => {
    const handleLanguageChange = () => {
      setForceUpdate(prev => prev + 1);
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);

  // Set document direction and language based on current language
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
    
    // Обновляем заголовок страницы при смене языка
    // Если на странице нет специального заголовка, используем базовый
    if (document.title === 'KAIF | Sauna & Spa' || 
        document.title.includes('KAIF') || 
        !document.title.includes('|')) {
      document.title = t('page_titles.home', 'KAIF | Sauna & Spa');
    }
  }, [i18n.language, t, forceUpdate]);

  console.log('App render - Language:', i18n.language, 'Update counter:', forceUpdate);

  // Основное приложение
  return (
    <HelmetProvider key={`app-${i18n.language}-${forceUpdate}`}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={null}>
          <GlobalFontStyle />
          <GlobalStyles />
        </Suspense>
        <LoadingProvider>
          <Router basename="/">
            <AppContent />
          </Router>
        </LoadingProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
