import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../global/GlobalStyles';
import LoadingScreen from '../global/LoadingScreen';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Scroll to top on route change and handle page loading
  useEffect(() => {
    setIsPageLoaded(false);
    window.scrollTo(0, 0);
    
    // Даем время странице загрузиться
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <GlobalStyles />
      <LoadingScreen />
      <Header />
      <div style={{ 
        minHeight: '100vh',
        paddingTop: '65px', // Точный отступ для хедера без лишней полосы
        width: '100%',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        margin: 0,
        padding: '65px 0 0 0'
      }}>
        <main style={{ 
          width: '100%',
          minHeight: 'calc(100vh - 65px)',
          position: 'relative',
          flex: '1 0 auto',
          margin: 0
        }}>
          {children}
        </main>
        {isPageLoaded && <Footer style={{ marginBottom: '-2px' }} />}
      </div>
    </>
  );
};

export default Layout;
