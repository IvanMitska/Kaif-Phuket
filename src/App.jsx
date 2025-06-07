import React, { useEffect } from 'react';
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

// Pages
import HomePage from './pages/HomePage';
import RestaurantPage from './pages/RestaurantPage';
import SpaPage from './pages/SpaPage';
import SportsPage from './pages/SportsPage';
import BeautyPage from './pages/BeautyPage';
// Импорт AboutPageNew удален, так как компонент больше не используется
import ContactsPage from './pages/ContactsPage';

// Компонент для управления переходами между страницами с сохранением стилей
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurant" element={<RestaurantPage />} />
      <Route path="/spa" element={<SpaPage />} />
      <Route path="/sports" element={<SportsPage />} />
      <Route path="/beauty" element={<BeautyPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
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
