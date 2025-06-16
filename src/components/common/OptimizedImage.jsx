import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { imageMap } from '../../utils/imageMap';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background-color: ${props => props.$placeholderColor || '#f5f5f5'};
`;

const StyledPicture = styled.picture`
  width: 100%;
  height: 100%;
  display: block;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: ${props => props.$objectFit || 'cover'};
  object-position: ${props => props.$objectPosition || 'center'};
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: ${props => props.$loaded ? 1 : 0};
  transform: scale(${props => props.$loaded ? 1 : 1.05});
  will-change: opacity, transform;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.$placeholderColor || '#f5f5f5'};
  display: ${props => props.$loaded ? 'none' : 'block'};
`;

// Прелоадер LQIP (Low Quality Image Placeholder)
const BlurredPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${props => props.$thumbnail ? `url(${props.$thumbnail})` : 'none'};
  background-size: cover;
  background-position: center;
  filter: blur(10px);
  opacity: ${props => props.$loaded ? 0 : 0.7};
  transition: opacity 0.3s;
`;

// Иконка загрузки для плейсхолдера
const LoadingIndicator = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${props => props.$loaded ? 0 : 0.5};
  transition: opacity 0.3s;
  width: 24px;
  height: 24px;
  
  &:after {
    content: '';
    display: block;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #90B3A7;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

// Настройки для разных размеров экрана
const defaultSizes = {
  small: '(max-width: 480px)',
  medium: '(max-width: 768px)',
  large: '(max-width: 1200px)',
  original: ''
};

/**
 * Оптимизированный компонент изображения с поддержкой WebP и разных размеров
 */
const OptimizedImage = ({
  src,
  alt = '',
  fallbackSrc,
  sizes = defaultSizes,
  loading = 'lazy',
  objectFit = 'cover',
  objectPosition = 'center',
  placeholderColor = '#f5f5f5',
  className,
  style,
  onLoad,
  onError,
  withPlaceholder = true,
  withLoadingIndicator = true,
  disableWebP = false,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imageRef = useRef(null);
  
  // Получаем соответствующие пути к изображениям
  const getImageSources = () => {
    // Используем напрямую переданный src, если указан
    if (!src || !src.startsWith('/images/')) {
      return {
        original: {
          webp: src,
          fallback: fallbackSrc || src
        }
      };
    }
    
    // Убираем начальный слэш, если есть
    const normalizedPath = src.startsWith('/') ? src.substring(1) : src;
    const basePath = normalizedPath.replace(/^images\//, '');
    
    // Проверяем, есть ли изображение в карте
    const mapEntry = imageMap.images[basePath];
    
    if (mapEntry) {
      return mapEntry;
    }
    
    // Если нет в карте, используем оригинальный путь
    return {
      original: {
        webp: disableWebP ? (fallbackSrc || src) : src.replace(/\.(jpg|jpeg|png)$/i, '.webp'),
        fallback: fallbackSrc || src
      }
    };
  };
  
  const imageSources = getImageSources();
  
  // Получаем путь к миниатюре для LQIP
  const getThumbnailPath = () => {
    if (imageSources.thumbnail) {
      return imageMap.detectWebP() && !disableWebP ? 
        imageSources.thumbnail.webp : 
        imageSources.thumbnail.fallback;
    }
    return null;
  };
  
  const thumbnailPath = getThumbnailPath();
  
  // Обработка успешной загрузки
  const handleLoad = () => {
    setLoaded(true);
    if (onLoad) onLoad();
  };
  
  // Обработка ошибки загрузки
  const handleError = () => {
    setError(true);
    if (onError) onError();
  };
  
  // IntersectionObserver для ленивой загрузки
  useEffect(() => {
    if (!imageRef.current || loading !== 'lazy') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.setAttribute('loading', 'eager');
            observer.unobserve(img);
          }
        });
      },
      { rootMargin: '200px 0px', threshold: 0.01 }
    );
    
    observer.observe(imageRef.current);
    
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, [loading]);
  
  // Предзагрузка более крупного изображения при наведении
  const handleMouseEnter = () => {
    if (imageSources.large) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = imageMap.detectWebP() && !disableWebP ? 
        imageSources.large.webp : 
        imageSources.large.fallback;
      document.head.appendChild(preloadLink);
      
      setTimeout(() => {
        document.head.removeChild(preloadLink);
      }, 5000);
    }
  };
  
  // Если произошла ошибка загрузки
  if (error) {
    return (
      <ImageContainer 
        className={className} 
        style={style}
        $placeholderColor={placeholderColor}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          background: placeholderColor,
          color: '#999',
          fontSize: '0.875rem',
          padding: '1rem'
        }}>
          {alt || 'Изображение недоступно'}
        </div>
      </ImageContainer>
    );
  }
  
  return (
    <ImageContainer 
      className={className} 
      style={style}
      $placeholderColor={placeholderColor}
      onMouseEnter={handleMouseEnter}
    >
      {withPlaceholder && !loaded && (
        <>
          {thumbnailPath ? (
            <BlurredPlaceholder 
              $loaded={loaded} 
              $thumbnail={thumbnailPath} 
            />
          ) : (
            <Placeholder 
              $loaded={loaded} 
              $placeholderColor={placeholderColor} 
            />
          )}
        </>
      )}
      
      {withLoadingIndicator && !loaded && <LoadingIndicator $loaded={loaded} />}
      
      <StyledPicture>
        {/* Генерируем источники для разных размеров с WebP поддержкой */}
        {Object.entries(sizes).map(([size, mediaQuery]) => 
          imageSources[size] && imageMap.detectWebP() && !disableWebP && (
            <source 
              key={`${size}-webp`}
              type="image/webp"
              media={mediaQuery}
              srcSet={imageSources[size].webp}
              fetchpriority={size === 'small' ? 'high' : 'auto'}
            />
          )
        )}
        
        {/* Генерируем источники для разных размеров с обычными форматами */}
        {Object.entries(sizes).map(([size, mediaQuery]) => 
          imageSources[size] && (
            <source 
              key={size}
              media={mediaQuery}
              srcSet={imageSources[size].fallback}
              fetchpriority={size === 'small' ? 'high' : 'auto'}
            />
          )
        )}
        
        {/* Базовое изображение в качестве фоллбэка */}
        <StyledImage
          ref={imageRef}
          src={imageSources.original?.fallback || src}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          $loaded={loaded}
          $objectFit={objectFit}
          $objectPosition={objectPosition}
          decoding="async"
          fetchpriority={loading === 'eager' ? 'high' : 'auto'}
          {...props}
        />
      </StyledPicture>
    </ImageContainer>
  );
};

export default OptimizedImage; 