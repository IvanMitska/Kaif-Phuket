import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

import { 
  SliderContainer, 
  SlidesTrack, 
  Slide, 
  SliderButton, 
  SliderDots, 
  SliderDot 
} from './GalleryStyles';
import { 
  Section, 
  SectionTag, 
  SectionTitle, 
  SectionSubtitle, 
  ContentContainer, 
  BottomLeftShape 
} from '../../../styles/sports/CommonStyles';

// Данные слайдера - оптимизированные
const sliderData = [
  {
    id: 1,
    emoji: "🏋️‍♂️",
    title: "Тренажерный зал",
    subtitle: "Современное оборудование",
    gradient: "linear-gradient(135deg, rgba(210, 155, 132, 0.15) 0%, rgba(139, 69, 19, 0.1) 100%)"
  },
  {
    id: 2,
    emoji: "🥊",
    title: "Бойцовский клуб",
    subtitle: "Профессиональный ринг",
    gradient: "linear-gradient(135deg, rgba(220, 38, 127, 0.15) 0%, rgba(139, 69, 19, 0.1) 100%)"
  },
  {
    id: 3,
    emoji: "👨‍🏫",
    title: "Персональный тренинг",
    subtitle: "Индивидуальный подход",
    gradient: "linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(139, 69, 19, 0.1) 100%)"
  },
  {
    id: 4,
    emoji: "🏊‍♂️",
    title: "Бассейн",
    subtitle: "Релаксация и восстановление",
    gradient: "linear-gradient(135deg, rgba(14, 165, 233, 0.15) 0%, rgba(139, 69, 19, 0.1) 100%)"
  }
];

const GallerySection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplayActive, setAutoplayActive] = useState(true);

  // Автоплей слайдера
  useEffect(() => {
    if (!autoplayActive) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, [currentSlide, autoplayActive]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Touch события для мобильных устройств
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <Section id="gallery">
      <BottomLeftShape 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1 
        }}
      />
      
      <ContentContainer>
        <div style={{ textAlign: 'center' }}>
          <SectionTag
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {t('sports.gallery.tag', 'Фото')}
          </SectionTag>
          
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {t('sports.gallery.title', 'Gallery')}
          </SectionTitle>
          
          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {t('sports.gallery.subtitle', 'Captured moments of sports life at KAIF Jungle Club & SPA. Join our community and share your own achievements')}
          </SectionSubtitle>
        </div>
        
        <SliderContainer
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          tabIndex="0"
          onMouseEnter={() => setAutoplayActive(false)}
          onMouseLeave={() => setAutoplayActive(true)}
        >
          <AnimatePresence initial={false} custom={direction}>
            <SlidesTrack>
              <Slide
                key={currentSlide}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <div style={{
                  width: '100%',
                  height: '400px',
                  background: sliderData[currentSlide].gradient,
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '5rem',
                  marginBottom: '2rem'
                }}>
                  {sliderData[currentSlide].emoji}
                </div>
                <div className="slide-overlay">
                  <div className="slide-title">{t(`sports.gallery.${sliderData[currentSlide].title.toLowerCase().replace(/\s+/g, '_')}`, sliderData[currentSlide].title)}</div>
                  <div className="slide-subtitle">{t(`sports.gallery.subtitle_${sliderData[currentSlide].title.toLowerCase().replace(/\s+/g, '_')}`, sliderData[currentSlide].subtitle)}</div>
                </div>
              </Slide>
            </SlidesTrack>
          </AnimatePresence>
          
          <SliderButton 
            className="prev" 
            onClick={prevSlide}
            aria-label="Предыдущий слайд"
          >
            &#8249;
          </SliderButton>
          
          <SliderButton 
            className="next" 
            onClick={nextSlide}
            aria-label="Следующий слайд"
          >
            &#8250;
          </SliderButton>
          
          <SliderDots>
            {sliderData.map((_, index) => (
              <SliderDot 
                key={index} 
                active={index === currentSlide}
                onClick={() => goToSlide(index)}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </SliderDots>
        </SliderContainer>
      </ContentContainer>
    </Section>
  );
};

export default GallerySection;
