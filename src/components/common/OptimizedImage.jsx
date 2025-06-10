import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
  opacity: ${props => props.$loaded ? 1 : 0};
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f0f0f0;
  display: ${props => props.$loaded ? 'none' : 'block'};
`;

const OptimizedImage = ({ 
  src, 
  alt, 
  className,
  style,
  loading = 'lazy',
  placeholder = true,
  onLoad,
  onError,
  ...props 
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Временно используем простую реализацию без WebP проверок
  useEffect(() => {
    if (src) {
      const img = new Image();
      img.onload = () => {
        setLoaded(true);
        onLoad?.();
      };
      img.onerror = () => {
        setError(true);
        onError?.();
      };
      img.src = src;
    }
  }, [src, onLoad, onError]);

  if (error) {
    return (
      <ImageContainer className={className} style={style}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          background: '#f5f5f5',
          color: '#999',
          fontSize: '0.875rem'
        }}>
          Изображение недоступно
        </div>
      </ImageContainer>
    );
  }

  return (
    <ImageContainer className={className} style={style}>
      {placeholder && <Placeholder $loaded={loaded} />}
      {src && (
        <Image
          src={src}
          alt={alt}
          loading={loading}
          $loaded={loaded}
          {...props}
        />
      )}
    </ImageContainer>
  );
};

export default OptimizedImage; 