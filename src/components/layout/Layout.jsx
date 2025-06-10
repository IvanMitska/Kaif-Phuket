import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import PageHead from './PageHead';

// Основной контейнер страницы
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;
  background: transparent;
  margin: 0;
  padding: 0;
  flex: 1;
`;

// Стилизованный контейнер для сохранения стилей при переходах между страницами
const MainContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  will-change: opacity, transform;
  background: transparent;
  margin: 0;
  padding-bottom: 0;
`;

const Layout = ({ children }) => {
  const location = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  // Scroll to top on route change and handle page loading
  useEffect(() => {
    setIsPageLoaded(false);
    window.scrollTo(0, 0);
    
    // Даем время страnice загрузиться
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <PageContainer>
      <PageHead />
      <Header />
      <MainContainer>
        {children}
      </MainContainer>
      {isPageLoaded && <Footer />}
    </PageContainer>
  );
};

export default Layout;
