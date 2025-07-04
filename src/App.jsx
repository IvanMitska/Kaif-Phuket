import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import GlobalFontStyle from './components/global/GlobalFontStyle';
import GlobalStyles from './components/global/GlobalStyles';


// Импортируем контекст загрузки и экран загрузки
import { LoadingProvider, useLoading } from './components/global/LoadingContext';
import LoadingScreen from './components/global/LoadingScreen';
// import ScrollDiagnostic from './components/ui/ScrollDiagnostic';
// import useScrollFix from './components/common/hooks/useScrollFix';
import ScrollToTop from './components/common/ScrollToTop';

// Import i18n configuration
import './i18n';

// Подавляем CSS предупреждения в development режиме
import './utils/suppressCSSWarnings';

// Оптимизированные импорты CSS
import './styles/global-theme.css';
import './index.css';
import './styles/mobile-optimizations.css';
import './styles/simple-header-fix.css';
// ИСПРАВЛЕНИЕ: Импортируем CSS для исправления интерференции скролла
import './styles/scroll-fix.css';

import { theme } from './theme.fixed';
import Layout from './components/layout/Layout';

// Pages - оптимизированная загрузка
import HomePage from './pages/HomePage';
const RestaurantPage = React.lazy(() => import('./pages/RestaurantPage'));
const SpaPage = React.lazy(() => import('./pages/SpaPage'));
const SportsPage = React.lazy(() => import('./pages/SportsPage'));
const BanyaPage = React.lazy(() => import('./pages/BanyaPage'));
const ContactsPage = React.lazy(() => import('./pages/ContactsPage'));
const PrivacyPage = React.lazy(() => import('./pages/PrivacyPage'));
const TermsPage = React.lazy(() => import('./pages/TermsPage'));


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

        {/* Добавляем точные маршруты для предотвращения конфликтов */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

// Основной компонент приложения с экраном загрузки
const AppContent = () => {
  const { isLoading, isContentReady } = useLoading();
  // useScrollFix(); // Автоматическое исправление проблем с исчезновением
  
  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <ScrollToTop />
      {isContentReady && (
        <div className="App">
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </div>
      )}
    </>
  );
};

function App() {
  const { i18n, t } = useTranslation();
  const [forceUpdate, setForceUpdate] = React.useState(0);

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
    if (document.title === 'KAIF | Jungle Club & Spa' || 
        document.title.includes('KAIF') || 
        !document.title.includes('|')) {
      document.title = t('page_titles.home', 'KAIF | Jungle Club & Spa');
    }
  }, [i18n.language, t, forceUpdate]);

  console.log('App render - Language:', i18n.language, 'Update counter:', forceUpdate);

  // Основное приложение
  return (
    <HelmetProvider key={`app-${i18n.language}-${forceUpdate}`}>
      <ThemeProvider theme={theme}>
        <GlobalFontStyle />
        <GlobalStyles />
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
