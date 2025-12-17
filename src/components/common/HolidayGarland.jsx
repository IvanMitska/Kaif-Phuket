import React from 'react';
import styled, { keyframes } from 'styled-components';

const twinkle = keyframes`
  0%, 100% {
    opacity: 1;
    filter: brightness(1.2);
  }
  50% {
    opacity: 0.4;
    filter: brightness(0.8);
  }
`;

const swing = keyframes`
  0%, 100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
`;

const GarlandContainer = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  height: 20px;
  z-index: 999;
  pointer-events: none;
  display: flex;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 768px) {
    top: 60px;
  }
`;

const Wire = styled.div`
  position: absolute;
  top: 0;
  left: -5%;
  right: -5%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 20px;

  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg,
      transparent 0%,
      #2d5a3d 5%,
      #2d5a3d 95%,
      transparent 100%
    );
    z-index: -1;
  }
`;

const Light = styled.div`
  width: 10px;
  height: 14px;
  background: ${props => props.$color};
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: relative;
  animation: ${twinkle} ${props => props.$duration}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
  box-shadow:
    0 0 10px ${props => props.$color},
    0 0 20px ${props => props.$color},
    0 0 30px ${props => props.$color}40;
  transform-origin: top center;
  margin-top: 5px;

  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: #1a472a;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    width: 8px;
    height: 12px;
  }
`;

const HolidayGarland = () => {
  const colors = [
    '#ff0000', // red
    '#FFD700', // gold
    '#00ff00', // green
    '#ff0000', // red
    '#00bfff', // blue
    '#FFD700', // gold
    '#ff0000', // red
    '#00ff00', // green
    '#FFD700', // gold
    '#00bfff', // blue
    '#ff0000', // red
    '#00ff00', // green
    '#FFD700', // gold
    '#ff0000', // red
    '#00bfff', // blue
    '#00ff00', // green
    '#FFD700', // gold
    '#ff0000', // red
    '#00ff00', // green
    '#00bfff', // blue
  ];

  return (
    <GarlandContainer>
      <Wire>
        {colors.map((color, i) => (
          <Light
            key={i}
            $color={color}
            $duration={1 + Math.random() * 2}
            $delay={i * 0.15}
          />
        ))}
      </Wire>
    </GarlandContainer>
  );
};

export default HolidayGarland;
