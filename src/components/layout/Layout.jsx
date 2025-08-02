import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useLoading } from '../global/LoadingContext';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import GlobalStyles from '../global/GlobalStyles';
import LoadingScreen from '../global/LoadingScreen';

const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`;

const MainContent = styled.main`
  width: 100%;
  min-height: 100vh;
  position: relative;
  flex: 1 0 auto;
  margin: 0;
  padding: 65px 0 0 0;
  background: transparent;
`;

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
      <MainContainer>
        <MainContent>
          {children}
        </MainContent>
        {isPageLoaded && <Footer />}
      </MainContainer>
    </>
  );
};

export default Layout;
