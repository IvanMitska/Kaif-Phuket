import React from 'react';
import styled from 'styled-components';
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
  background: #0a0a0a;
  color: ${props => props.theme.colors.text.primary};
  min-height: 100vh;
  font-family: 'Inter', ${props => props.theme.fonts.primary};
  overflow-x: hidden;
  margin: 0;
  padding: 0;
`;


const BanyaPage = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    document.body.classList.add('banya-page');
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove('banya-page');
    };
  }, []);

  return (
    <BanyaContainer>
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