import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PageScrollReset from '../components/common/PageScrollReset';
import PageHead from '../components/layout/PageHead';


import BanyaHeroSection from '../components/banya/BanyaHeroSection';
import BanyaServicesSection from '../components/banya/BanyaServicesSection';
import BanyaFeaturesSection from '../components/banya/BanyaFeaturesSection';
import BanyaBookingSection from '../components/banya/BanyaBookingSection';
import BanyaFAQSection from '../components/banya/BanyaFAQSection';


const BanyaContainer = styled.div`
  background: transparent;
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: ${props => props.theme.fonts.primary};
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`;


const BanyaPage = () => {
  const { t } = useTranslation();
  const [isReady, setIsReady] = React.useState(false);
  

  React.useEffect(() => {
    console.log('BanyaPage загружается...');
   
    document.body.classList.add('banya-page');
    

    window.scrollTo(0, 0);
    
    
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);
    
    
    return () => {
      console.log('BanyaPage выгружается...');
      document.body.classList.remove('banya-page');
      clearTimeout(timer);
    };
  }, []);
  
  // Варианты анимации
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };
  
  if (!isReady) {
    return null;
  }

  return (
    <BanyaContainer
      as={motion.div}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.2 }}
    >
      <PageHead 
        titleKey="page_titles.banya"
        description={t('banya.hero.subtitle', 'Traditional Russian banya experience')}
        keywords="KAIF banya, Russian sauna, traditional banya, steam bath, Phuket"
        ogImage="/images/banya/panoramic.jpg"
      />
      <PageScrollReset />
      <BanyaHeroSection />
      <BanyaServicesSection />
      <BanyaFeaturesSection />
      <BanyaFAQSection />
      <BanyaBookingSection />
    </BanyaContainer>
  );
};

export default BanyaPage; 