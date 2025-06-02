import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import PageHead from './PageHead';

// Стилизованный контейнер для сохранения стилей при переходах между страницами
const MainContainer = styled.main`
  flex-grow: 1;
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 4rem);
  width: 100%;
  will-change: opacity, transform; /* Оптимизация производительности */
`;

const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  // Добавим обработчик для предотвращения потери стилей
  useEffect(() => {
    // Принудительное обновление стилей при смене маршрута
    const forceStylesUpdate = () => {
      // Добавляем класс для сохранения состояния стилей
      document.body.classList.add('route-transition');
      
      // Микротаск для принудительного рендеринга
      setTimeout(() => {
        document.body.classList.remove('route-transition');
      }, 50);
    };
    
    // Вызываем обработчик при смене маршрута
    forceStylesUpdate();
    
    return () => {}
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <PageHead />
      <Header />
      <MainContainer>
        {children}
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Layout;
