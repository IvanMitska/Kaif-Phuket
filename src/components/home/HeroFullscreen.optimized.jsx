import { useState, useEffect, memo } from 'react';
import styles from './HeroFullscreen.module.css';

// CRITICAL OPTIMIZATION: Load logo immediately (critical for LCP)
import homepageLogo from '../../assets/images/optimized/logo-homepage.png';
import homepageLogoWebp from '../../assets/images/optimized/webp/logo-homepage.webp';

// OPTIMIZATION: Image paths without imports
const slideImages = [
  {
    webp: '/images-optimized/spa.jpg',
    fallback: '/images-optimized/spa.jpg'
  },
  {
    webp: '/images-webp/hero/hero-pool.webp',
    fallback: '/images-optimized/hero/hero-pool.jpg'
  },
  {
    webp: '/images-webp/hero/hero-restaurant.webp',
    fallback: '/images-optimized/hero/hero-restaurant.jpg'
  },
  {
    webp: '/images-webp/hero/hero-fitness.webp',
    fallback: '/images-optimized/hero/hero-fitness.jpg'
  }
];

const HeroFullscreen = memo(({ t }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Simple slider - runs smoothly on all devices
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slideImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // Smooth scroll handler
  const handleScrollToZones = () => {
    const zonesSection = document.querySelector('#exclusive-zones');
    if (zonesSection) {
      zonesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className={styles.heroContainer}>
      {/* Image Slider */}
      <div className={styles.sliderContainer}>
        {slideImages.map((image, index) => (
          <div
            key={`slide-${index}`}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <picture>
              <source
                srcSet={image.webp}
                type="image/webp"
              />
              <img
                src={image.fallback}
                alt={`KAIF - Slide ${index + 1}`}
                width="1920"
                height="1080"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchpriority={index === 0 ? "high" : "low"}
                onError={(e) => {
                  const fallbackImages = [
                    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75",
                    "https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75",
                    "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75",
                    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=75"
                  ];
                  e.target.src = fallbackImages[index % fallbackImages.length];
                }}
              />
            </picture>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className={styles.contentContainer}>
        <div className={styles.contentWrapper}>
          <picture style={{ display: 'block' }}>
            <source srcSet={homepageLogoWebp} type="image/webp" />
            <img
              src={homepageLogo}
              alt="KAIF"
              width="520"
              height="auto"
              className={styles.logoImage}
            />
          </picture>

          <div className={styles.buttonContainer}>
            <div className={styles.motionWrapper}>
              <a
                href="https://wa.me/66624805877?text=Здравствуйте! Хочу записаться в KAIF"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                {t ? t('common.book') : 'Book Now'}
              </a>
            </div>

            <div className={styles.motionWrapper}>
              <button
                onClick={handleScrollToZones}
                className={styles.secondaryButton}
              >
                {t ? t('common.learn_more') : 'Learn More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroFullscreen.displayName = 'HeroFullscreen';

export default HeroFullscreen;
