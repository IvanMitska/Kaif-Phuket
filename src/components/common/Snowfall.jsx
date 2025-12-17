import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fall = keyframes`
  0% {
    transform: translateY(-10vh) translateX(0) rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: translateY(25vh) translateX(10px) rotate(90deg);
  }
  50% {
    transform: translateY(50vh) translateX(-10px) rotate(180deg);
  }
  75% {
    transform: translateY(75vh) translateX(15px) rotate(270deg);
  }
  100% {
    transform: translateY(110vh) translateX(-5px) rotate(360deg);
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
`;

const Snowflake = styled.div`
  position: absolute;
  top: -20px;
  color: white;
  font-size: ${props => props.$size}px;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  animation: ${fall} ${props => props.$duration}s linear infinite;
  animation-delay: ${props => props.$delay}s;
  left: ${props => props.$left}%;
  opacity: ${props => props.$opacity};
  filter: blur(${props => props.$blur}px);
`;

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const flakes = [];
    const flakeCount = window.innerWidth < 768 ? 30 : 50;

    for (let i = 0; i < flakeCount; i++) {
      flakes.push({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 10 + 8,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.6 + 0.4,
        blur: Math.random() < 0.3 ? 1 : 0,
        char: ['❄', '❅', '❆', '✧', '✦'][Math.floor(Math.random() * 5)]
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
          $blur={flake.blur}
        >
          {flake.char}
        </Snowflake>
      ))}
    </SnowContainer>
  );
};

export default Snowfall;
