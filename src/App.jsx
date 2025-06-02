import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import GlobalFontStyle from './components/global/GlobalFontStyle';
import GlobalStyles from './components/global/GlobalStyles';

// Import i18n configuration
import './i18n';

// Import styles
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
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/spa" element={<SpaPage />} />
        <Route path="/sports" element={<SportsPage />} />
        <Route path="/beauty" element={<BeautyPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const { i18n } = useTranslation();

  // Set document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.dir();
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalFontStyle />
      <GlobalStyles />
      <Router basename="/">
        <div className="App">
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
