import React from 'react';

// Импортируем логотип
import logoHeader from '../../assets/images/logos/logo-header.png';

// Кэшируем загрузку логотипа на уровне модуля
let isLogoCached = false;

const LoadingScreen = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = React.useState(isVisible);
  const [isExiting, setIsExiting] = React.useState(false);
  const [logoLoaded, setLogoLoaded] = React.useState(isLogoCached);

  React.useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setIsExiting(false);
    } else if (shouldRender) {
      setIsExiting(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsExiting(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, shouldRender]);

  if (!shouldRender) return null;

  const containerStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 99999,
    opacity: isExiting ? 0 : 1,
    transition: 'opacity 0.4s ease-in-out'
  };

  const logoStyle = {
    width: window.innerWidth >= 1024 ? '280px' : window.innerWidth >= 768 ? '240px' : '200px',
    height: 'auto',
    objectFit: 'contain',
    opacity: logoLoaded ? 1 : 0,
    transform: logoLoaded ? 'scale(1)' : 'scale(0.8)',
    transition: 'opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
  };

  return (
    <div style={containerStyle} data-loading-screen="true">
      <img
        src={logoHeader}
        alt="KAIF"
        style={logoStyle}
        onLoad={() => {
          isLogoCached = true;
          setLogoLoaded(true);
        }}
        data-loading-screen="true"
      />
    </div>
  );
};

export default LoadingScreen; 