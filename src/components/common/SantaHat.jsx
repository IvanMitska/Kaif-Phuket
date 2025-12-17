import React from 'react';
import styled, { keyframes } from 'styled-components';

const swing = keyframes`
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
`;

const HatContainer = styled.div`
  position: fixed;
  top: 8px;
  left: 95px;
  z-index: 1001;
  pointer-events: none;
  transform-origin: bottom center;
  animation: ${swing} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    left: 75px;
    top: 5px;
  }
`;

const Hat = styled.div`
  position: relative;
  width: 40px;
  height: 35px;

  @media (max-width: 768px) {
    width: 32px;
    height: 28px;
  }
`;

const HatBody = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-bottom: 30px solid #c41e3a;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));

  @media (max-width: 768px) {
    border-left: 16px solid transparent;
    border-right: 16px solid transparent;
    border-bottom: 24px solid #c41e3a;
  }
`;

const HatBrim = styled.div`
  position: absolute;
  bottom: -2px;
  left: -5px;
  right: -5px;
  height: 10px;
  background: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    height: 8px;
    left: -4px;
    right: -4px;
  }
`;

const HatPom = styled.div`
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 14px;
  height: 14px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);

  @media (max-width: 768px) {
    width: 11px;
    height: 11px;
    top: -4px;
  }
`;

const SantaHat = () => {
  return (
    <HatContainer>
      <Hat>
        <HatBody />
        <HatBrim />
        <HatPom />
      </Hat>
    </HatContainer>
  );
};

export default SantaHat;
