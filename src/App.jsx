import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import GlobalFontStyle from './components/global/GlobalFontStyle';
import GlobalStyles from './components/global/GlobalStyles';

// Импортируем контекст загрузки и экран загрузки
import { LoadingProvider, useLoading } from './components/global/LoadingContext';
import LoadingScreen from './components/global/LoadingScreen';

// Import i18n configuration
import './i18n';

// Оптимизированные импорты CSS
import './styles/global-theme.css';
import './index.css';

import { theme } from './theme.fixed';
import Layout from './components/layout/Layout';

// Pages - оптимизированная загрузка
import HomePage from './pages/HomePage';
const RestaurantPage = React.lazy(() => import('./pages/RestaurantPage'));
const SpaPage = React.lazy(() => import('./pages/SpaPage'));
const SportsPage = React.lazy(() => import('./pages/SportsPage'));
const BanyaPage = React.lazy(() => import('./pages/BanyaPage'));
const ContactsPage = React.lazy(() => import('./pages/ContactsPage'));


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
  const { i18n } = useTranslation();

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  // Основное приложение
  return (
    <ThemeProvider theme={theme}>
      <GlobalFontStyle />
      <GlobalStyles />
      <LoadingProvider>
        <Router basename="/">
          <AppContent />
        </Router>
      </LoadingProvider>
    </ThemeProvider>
  );
}

export default App;
