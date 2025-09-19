import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// =============================================================================
// ГАЛЕРЕЯ ДЛЯ РУССКОЙ БАНИ
// =============================================================================

const GallerySection = styled.section`
  padding: clamp(4rem, 8vw, 6rem) 0;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;
`;

const SectionContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 2rem);
  position: relative;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const HeaderTitle = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.625rem 1.25rem;
  background: linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(255, 214, 98, 0.1) 100%);
  border: 1px solid rgba(255, 214, 98, 0.3);
  border-radius: 30px;
  color: #ffd662;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  color: #ffffff;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  background: linear-gradient(135deg, rgba(255, 214, 98, 0.9) 0%, rgba(255, 107, 53, 0.9) 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const GalleryItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  background: #1a1a1a;
  aspect-ratio: 4/3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    border-radius: 12px;
  }
`;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
`;

const BanyaGallerySection = () => {
  const { t } = useTranslation();

  // Данные галереи для бани - 6 основных изображений в формате WebP
  const galleryImages = [
    {
      id: 1,
      src: '/images/banya/gallery/banya-steam-room.jpg',
      title: t('banya.gallery.steam_room', 'Парная'),
      description: t('banya.gallery.steam_room_desc', 'Классическая русская парная с березовыми вениками')
    },
    {
      id: 2,
      src: '/images/banya/gallery/banya-rest-area.jpg',
      title: t('banya.gallery.rest_area', 'Зона отдыха'),
      description: t('banya.gallery.rest_area_desc', 'Комфортная зона для отдыха после парной')
    },
    {
      id: 3,
      src: '/images/banya/gallery/banya-cold-pool.jpg',
      title: t('banya.gallery.cold_pool', 'Холодный бассейн'),
      description: t('banya.gallery.cold_pool_desc', 'Бассейн с холодной водой для контрастных процедур')
    },
    {
      id: 4,
      src: '/images/banya/gallery/banya-hot-stones.jpg',
      title: t('banya.gallery.hot_stones', 'Горячие камни'),
      description: t('banya.gallery.hot_stones_desc', 'Раскаленные камни для создания пара')
    },
    {
      id: 5,
      src: '/images/banya/gallery/banya-tea-ceremony.jpg',
      title: t('banya.gallery.tea_ceremony', 'Чайная церемония'),
      description: t('banya.gallery.tea_ceremony_desc', 'Традиционное чаепитие после бани')
    },
    {
      id: 6,
      src: '/images/banya/gallery/banya-lounge.jpg',
      title: t('banya.gallery.lounge', 'Лаунж зона'),
      description: t('banya.gallery.lounge_desc', 'Просторная зона отдыха')
    }
  ];

  return (
    <GallerySection>
      <SectionContainer>
        <SectionHeader>
          <HeaderTitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {t('banya.gallery.badge', 'ГАЛЕРЕЯ')}
          </HeaderTitle>

          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('banya.gallery.title', 'Галерея')}
          </SectionTitle>

          <SectionSubtitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {t('banya.gallery.subtitle', 'Атмосфера настоящей русской бани')}
          </SectionSubtitle>
        </SectionHeader>

        <GalleryGrid>
          {galleryImages.map((image) => (
            <GalleryItem key={image.id}>
              <GalleryImage
                src={image.src}
                alt={image.title}
                loading="lazy"
              />
            </GalleryItem>
          ))}
        </GalleryGrid>
      </SectionContainer>
    </GallerySection>
  );
};

export default BanyaGallerySection;