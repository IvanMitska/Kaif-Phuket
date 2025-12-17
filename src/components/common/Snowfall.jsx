import React, { useEffect, useState, memo } from 'react';
import styled, { keyframes } from 'styled-components';

// Simplified animation for better performance
const fall = keyframes`
  0% {
    transform: translate3d(0, -10vh, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(10px, 110vh, 0);
    opacity: 0.3;
  }
`;

const SnowContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
  /* GPU acceleration */
  transform: translateZ(0);
  contain: strict;
`;

const Snowflake = styled.div`
  position: absolute;
  top: -20px;
  color: white;
  font-size: ${props => props.$size}px;
  text-shadow: 0 0 3px rgba(255, 255, 255, 0.6);
  animation: ${fall} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  left: ${props => props.$left}%;
  opacity: ${props => props.$opacity};
  /* GPU acceleration */
  will-change: transform;
  backface-visibility: hidden;
`;

const Snowfall = memo(() => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = [];
    // Reduced count for better performance
    const flakeCount = window.innerWidth < 768 ? 15 : 25;

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 8 + 10,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.4 + 0.4,
        char: '❄'
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <SnowContainer>
      {snowflakes.map(flake => (
        <Snowflake
          key={flake.id}
          $left={flake.left}
          $size={flake.size}
          $duration={flake.duration}
          $delay={flake.delay}
          $opacity={flake.opacity}
        >
          {flake.char}
        </Snowflake>
      ))}
    </SnowContainer>
  );
});

Snowfall.displayName = 'Snowfall';

export default Snowfall;
