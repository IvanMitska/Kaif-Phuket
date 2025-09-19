import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import PageScrollReset from '../components/common/PageScrollReset';
import PageHead from '../components/layout/PageHead';


import BanyaHeroSection from '../components/banya/BanyaHeroSection';
import BanyaServicesSection from '../components/banya/BanyaServicesSection';
import BanyaFeaturesSection from '../components/banya/BanyaFeaturesSection';
import BanyaGallerySection from '../components/banya/BanyaGallerySection';
import BanyaBookingSection from '../components/banya/BanyaBookingSection';
import BanyaFAQSection from '../components/banya/BanyaFAQSection';


const BanyaContainer = styled.div`
  background: linear-gradient(180deg, #0a0a0a 0%, #0f0d0a 25%, #0a0a0a 50%, #0f0d0a 75%, #0a0a0a 100%);
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: 'Inter', ${props => props.theme.fonts.primary};
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(ellipse at 20% 0%, rgba(255, 107, 53, 0.015) 0%, transparent 50%),
      radial-gradient(ellipse at 80% 100%, rgba(255, 214, 98, 0.015) 0%, transparent 50%);
    pointer-events: none;
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }
`;


const BanyaPage = () => {
  const { t } = useTranslation();
  const [isReady, setIsReady] = React.useState(false);
  

  React.useEffect(() => {
    console.log('BanyaPage loading...');
   
    document.body.classList.add('banya-page');
    

    window.scrollTo(0, 0);
    
    
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 50);
    
    
    return () => {
      console.log('BanyaPage unloading...');
      document.body.classList.remove('banya-page');
      clearTimeout(timer);
    };
  }, []);
  
  // Улучшенные варианты анимации
  const pageVariants = {
    initial: { opacity: 0, scale: 0.98 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
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
      <BanyaGallerySection />
      <BanyaFeaturesSection />
      <BanyaFAQSection />
      <BanyaBookingSection />
    </BanyaContainer>
  );
};

export default BanyaPage; 