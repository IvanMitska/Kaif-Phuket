import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../global/LoadingContext';

import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../global/GlobalStyles';
import LoadingScreen from '../global/LoadingScreen';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState(true);
  const isFirstRender = useRef(true);
  const { isLoading: isGlobalLoading } = useLoading();

  // Scroll to top on route change and handle page loading
  useEffect(() => {
    if (isFirstRender.current) {
      // Skip showing Layout's loading screen on initial mount
      isFirstRender.current = false;
      setIsPageLoaded(true);
      return;
    }
    setIsPageLoaded(false);
    window.scrollTo(0, 0);
    
    // Даем время странице загрузиться
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <GlobalStyles />
      <LoadingScreen isVisible={!isPageLoaded && !isGlobalLoading} />
      <Header />
      <div style={{ 
        minHeight: '100vh',
        paddingTop: '65px', // Точный отступ для хедера
        width: '100%',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        margin: 0
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
