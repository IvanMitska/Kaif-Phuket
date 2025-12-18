import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import BookingModal from '../booking/BookingModal';

/* ============================================
   COMMENTED OUT - Sauna Rave Banner
   ============================================

import { keyframes } from 'styled-components';
import { useTranslation } from 'react-i18next';
import { BiCalendarEvent } from 'react-icons/bi';
import { FaFire } from 'react-icons/fa';

// Animations
const flameFlicker = keyframes`
  0% { transform: scale(1) rotate(0deg); }
  25% { transform: scale(1.1, 1) rotate(1deg); }
  50% { transform: scale(0.95, 1) rotate(-1deg); }
  75% { transform: scale(1.05, 1) rotate(0.5deg); }
  100% { transform: scale(1) rotate(0deg); }
`;

const glowPulse = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 0.7; }
  100% { opacity: 0.4; }
`;

// Styled Components with Banya-inspired design
const BannerContainer = styled(motion.section)`
  position: relative;
  width: 100%;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1410 50%, #0f0f0f 100%);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      radial-gradient(
        ellipse at center top,
        rgba(255, 107, 53, 0.15) 0%,
        transparent 60%
      );
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 107, 53, 0.1);
    border-color: rgba(255, 107, 53, 0.5);
    transform: rotate(90deg) scale(1.1);
  }

  svg {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

const BannerContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const PosterContainer = styled(motion.div)`
  flex: 0 0 auto;
  width: auto;
  max-width: 500px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(255, 107, 53, 0.2);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 20, 20, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 53, 0.2);

  @media (max-width: 968px) {
    max-width: 420px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
  }
`;

const PosterImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 500px;
  display: block;
  object-fit: contain;
`;

const PosterPlaceholder = styled.div`
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg,
    #D4A574 0%,
    #E1B885 100%
  );
  border-radius: 16px;

  h3 {
    font-size: 3rem;
    font-weight: 900;
    margin: 0 0 0.5rem 0;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    line-height: 1.1;
  }

  .subtitle {
    font-size: 1rem;
    font-weight: 500;
    margin: 0.3rem 0;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.9;
  }

  .date-time {
    font-size: 1.1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    letter-spacing: 0.05em;
    line-height: 1.4;
  }

  .features {
    font-size: 0.95rem;
    margin-top: 1rem;
    line-height: 1.6;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  @media (max-width: 968px) {
    width: 350px;
    height: 440px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    width: 100%;
    max-width: 350px;
    height: 440px;

    h3 {
      font-size: 2.2rem;
    }

    .subtitle {
      font-size: 0.9rem;
    }

    .date-time {
      font-size: 1rem;
    }

    .features {
      font-size: 0.85rem;
    }
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1rem;

  @media (max-width: 968px) {
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 0.8rem;
  }
`;

const EventLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background: rgba(255, 107, 53, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  color: rgba(255, 214, 98, 0.9);
  border-radius: 60px;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  align-self: flex-start;
  box-shadow:
    0 4px 15px rgba(255, 107, 53, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  svg {
    font-size: 0.9rem;
    color: #ff6b35;
  }

  @media (max-width: 968px) {
    align-self: center;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.4rem 1.2rem;
  }
`;

const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(3rem, 7vw, 5rem);
  font-weight: 200;
  color: #ffffff;
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin: 0;
  text-transform: uppercase;
  position: relative;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);

  span {
    display: block;
    font-size: 1.1em;
    font-weight: 300;
    background: linear-gradient(135deg, #ff6b35 0%, #ffd662 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: -0.1em;
  }

  @media (max-width: 968px) {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2rem, 5vw, 2.8rem);
  }
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.02em;

  strong {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: rgba(139, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(220, 20, 60, 0.4);
    border-radius: 50%;
    font-size: 0.8rem;
    box-shadow: 0 0 15px rgba(220, 20, 60, 0.2);
  }

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    gap: 0.6rem;

    strong {
      width: 24px;
      height: 24px;
      font-size: 0.7rem;
    }
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255, 214, 98, 0.8);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &::before {
    content: '✚';
    color: #DC143C;
    font-size: 1.2rem;
    line-height: 0.5;
    animation: ${heartbeat} 2s infinite;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BookButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, #ff6b35 0%, #ff8c42 100%);
  color: #ffffff;
  border: none;
  border-radius: 60px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: clamp(0.95rem, 1.75vw, 1.125rem);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1;
  min-height: 56px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 4px 15px rgba(255, 107, 53, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow:
      0 8px 25px rgba(255, 107, 53, 0.45),
      0 2px 8px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none;

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0) scale(1);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 0.9rem;
    min-height: 48px;
  }
`;

const InfoButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.85rem 2rem;
  background: transparent;
  color: #2C3E2D;
  border: 1px solid #D4A574;
  border-radius: 50px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.8rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 150px;

  &:hover {
    background: linear-gradient(135deg, #D4A574 0%, #E1B885 100%);
    border-color: transparent;
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.85rem 1.5rem;
    font-size: 0.75rem;
  }
`;

// Decorative elements
const FlameIcon = styled(FaFire)`
  position: absolute;
  color: rgba(255, 107, 53, 0.3);
  animation: ${flameFlicker} 3s ease-in-out infinite;
  filter: drop-shadow(0 0 15px rgba(255, 107, 53, 0.4));
  z-index: 1;

  &.top-left {
    top: 10%;
    left: 5%;
    font-size: 2.5rem;
    animation-delay: 0s;
  }

  &.top-right {
    top: 10%;
    right: 5%;
    font-size: 2.5rem;
    animation-delay: 1.5s;
  }

  &.bottom-left {
    bottom: 15%;
    left: 8%;
    font-size: 2rem;
    animation-delay: 0.5s;
  }

  &.bottom-right {
    bottom: 15%;
    right: 8%;
    font-size: 2rem;
    animation-delay: 2s;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const GlowEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
  animation: ${glowPulse} 4s ease-in-out infinite;
  pointer-events: none;
  z-index: 0;

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

   ============================================
   END OF COMMENTED SECTION
   ============================================ */

// Animations for hospital theme
const heartbeat = keyframes`
  0%, 100% { transform: scale(1); }
  14% { transform: scale(1.3); }
  28% { transform: scale(1); }
  42% { transform: scale(1.3); }
  70% { transform: scale(1); }
`;

const glitchFlicker = keyframes`
  0%, 100% { opacity: 1; }
  41.99% { opacity: 1; }
  42% { opacity: 0; }
  43% { opacity: 0; }
  43.01% { opacity: 1; }
  47.99% { opacity: 1; }
  48% { opacity: 0; }
  49% { opacity: 0; }
  49.01% { opacity: 1; }
`;

const bloodDrip = keyframes`
  0% { transform: translateY(0); opacity: 0; }
  10% { opacity: 1; }
  100% { transform: translateY(100px); opacity: 0; }
`;

const ecgPulse = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
`;

// Halloween Banner - styled like Sauna Rave
const HalloweenBannerContainer = styled(motion.section)`
  position: relative;
  width: 100%;
  padding: 4rem 1rem;
  background: linear-gradient(135deg,
    #0a0000 0%,
    #1a0505 25%,
    #0f0000 50%,
    #150505 75%,
    #0a0000 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      rgba(139, 0, 0, 0.2) 0%,
      rgba(139, 0, 0, 0.1) 30%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 1;
    animation: ${glowPulse} 4s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(139, 0, 0, 0.03) 2px,
        rgba(139, 0, 0, 0.03) 4px
      );
    pointer-events: none;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0.75rem;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const BannerContent = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 107, 53, 0.3);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 107, 53, 0.1);
    border-color: rgba(255, 107, 53, 0.5);
    transform: rotate(90deg) scale(1.1);
  }

  svg {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.8);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    top: 0.5rem;
    right: 0.5rem;
  }
`;

const PosterContainer = styled(motion.div)`
  flex: 0 0 auto;
  width: auto;
  max-width: 850px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.7),
    0 0 120px rgba(255, 0, 0, 0.25),
    0 0 200px rgba(139, 0, 0, 0.15),
    inset 0 0 50px rgba(139, 0, 0, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 20, 20, 0.5);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(139, 0, 0, 0.4);

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg,
      transparent 0%,
      rgba(139, 0, 0, 0.3) 25%,
      transparent 50%,
      rgba(139, 0, 0, 0.3) 75%,
      transparent 100%
    );
    z-index: -1;
    border-radius: 20px;
    opacity: 0.5;
  }

  @media (max-width: 968px) {
    max-width: 600px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 400px;
  }
`;

const HalloweenImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 750px;
  display: block;
  object-fit: contain;

  @media (max-width: 968px) {
    max-height: 600px;
  }

  @media (max-width: 480px) {
    max-height: 500px;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  padding: 1rem;

  @media (max-width: 968px) {
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
    gap: 0.8rem;
  }
`;

const EventLabel = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.5rem;
  background: rgba(139, 0, 0, 0.2);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(220, 20, 60, 0.5);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 60px;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  align-self: flex-start;
  box-shadow:
    0 4px 15px rgba(139, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 20px rgba(220, 20, 60, 0.3);

  @media (max-width: 968px) {
    align-self: center;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.4rem 1.2rem;
  }
`;

const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 200;
  color: #ffffff;
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin: 0;
  text-transform: uppercase;
  position: relative;
  text-shadow:
    0 4px 30px rgba(0, 0, 0, 0.8),
    0 0 50px rgba(139, 0, 0, 0.6);
  animation: ${glitchFlicker} 5s infinite;

  span {
    display: block;
    font-size: 1.1em;
    font-weight: 200;
    background: linear-gradient(135deg, #8B0000 0%, #FF0000 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: -0.1em;
  }

  @media (max-width: 968px) {
    font-size: clamp(2rem, 5vw, 4rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 4.5vw, 3rem);
  }
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const DetailRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.02em;

  strong {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: rgba(139, 0, 0, 0.3);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(220, 20, 60, 0.4);
    border-radius: 50%;
    font-size: 0.8rem;
    box-shadow: 0 0 15px rgba(220, 20, 60, 0.2);
  }

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    gap: 0.6rem;

    strong {
      width: 24px;
      height: 24px;
      font-size: 0.7rem;
    }
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 968px) {
    justify-content: center;
  }
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: rgba(255, 214, 98, 0.8);
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  &::before {
    content: '✚';
    color: #DC143C;
    font-size: 1.2rem;
    line-height: 0.5;
    animation: ${heartbeat} 2s infinite;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  margin-top: 1.5rem;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const BookButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.25rem 2.5rem;
  background: linear-gradient(135deg, #8B0000 0%, #DC143C 100%);
  color: #ffffff;
  border: none;
  border-radius: 60px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: clamp(0.95rem, 1.75vw, 1.125rem);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  line-height: 1;
  min-height: 56px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 4px 15px rgba(139, 0, 0, 0.5),
    0 1px 3px rgba(0, 0, 0, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow:
      0 8px 25px rgba(139, 0, 0, 0.7),
      0 2px 8px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.2);
    color: white;
    text-decoration: none;

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0) scale(1);
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem 2rem;
    font-size: 0.9rem;
    min-height: 48px;
  }
`;

// Hospital decorative elements
const MedicalCross = styled.div`
  position: absolute;
  color: rgba(139, 0, 0, 0.15);
  font-size: ${props => props.size || '3rem'};
  z-index: 1;
  animation: ${heartbeat} 2s infinite;
  animation-delay: ${props => props.delay || '0s'};
  pointer-events: none;

  &::before {
    content: '✚';
  }

  @media (max-width: 768px) {
    font-size: ${props => props.mobileSize || '2rem'};
    opacity: 0.8;
  }
`;

const BloodDrop = styled.div`
  position: absolute;
  width: 8px;
  height: 12px;
  background: linear-gradient(180deg, #8B0000 0%, #DC143C 100%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  opacity: 0.3;
  animation: ${bloodDrip} ${props => props.duration || '3s'} infinite;
  animation-delay: ${props => props.delay || '0s'};
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 6px;
    height: 10px;
    opacity: 0.4;
  }
`;

const ECGLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: rgba(139, 0, 0, 0.3);
  overflow: hidden;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(220, 20, 60, 0.8) 45%,
      rgba(220, 20, 60, 0.8) 55%,
      transparent 100%
    );
    animation: ${ecgPulse} 3s infinite;
  }

  @media (max-width: 768px) {
    height: 1px;
    opacity: 0.8;
  }
`;

const HospitalSign = styled.div`
  position: absolute;
  top: ${props => props.top || '10%'};
  ${props => props.left ? `left: ${props.left};` : `right: ${props.right};`}
  background: rgba(139, 0, 0, 0.1);
  border: 2px solid rgba(139, 0, 0, 0.3);
  border-radius: 10px;
  padding: 0.5rem 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  z-index: 1;
  transform: rotate(${props => props.rotate || '0deg'});
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 0.3rem 0.6rem;
    border-width: 1px;
    opacity: 0.8;
  }
`;

const BloodSplatter = styled.div`
  position: absolute;
  width: ${props => props.size || '80px'};
  height: ${props => props.size || '80px'};
  background: radial-gradient(circle at 30% 30%,
    rgba(139, 0, 0, 0.4) 0%,
    rgba(139, 0, 0, 0.3) 20%,
    rgba(139, 0, 0, 0.15) 40%,
    transparent 70%
  );
  filter: blur(1px);
  opacity: 0.6;
  z-index: 1;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    background: rgba(139, 0, 0, 0.5);
    border-radius: 50%;
    top: 20%;
    left: 25%;
  }

  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(139, 0, 0, 0.4);
    border-radius: 50%;
    bottom: 30%;
    right: 20%;
  }

  @media (max-width: 768px) {
    width: ${props => props.mobileSize || '50px'};
    height: ${props => props.mobileSize || '50px'};
    opacity: 0.5;

    &::before {
      width: 10px;
      height: 10px;
    }

    &::after {
      width: 7px;
      height: 7px;
    }
  }
`;

const BloodTrail = styled.div`
  position: absolute;
  width: 3px;
  height: ${props => props.length || '150px'};
  background: linear-gradient(180deg,
    rgba(139, 0, 0, 0.5) 0%,
    rgba(139, 0, 0, 0.3) 50%,
    transparent 100%
  );
  opacity: 0.6;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 2px;
    height: ${props => props.mobileLength || '100px'};
    opacity: 0.5;
  }
`;

const PatientNumber = styled.div`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: 1.2rem;
  font-weight: bold;
  color: rgba(220, 20, 60, 0.4);
  text-shadow: 0 0 10px rgba(220, 20, 60, 0.3);
  z-index: 1;
  pointer-events: none;
  letter-spacing: 0.2em;

  @media (max-width: 768px) {
    font-size: 0.7rem;
    opacity: 0.8;
  }
`;

const AsylumWarning = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  border: 3px solid rgba(220, 20, 60, 0.6);
  padding: 0.8rem 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  color: rgba(220, 20, 60, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  z-index: 1;
  pointer-events: none;
  transform: rotate(${props => props.rotate || '0deg'});
  box-shadow:
    0 0 20px rgba(220, 20, 60, 0.3),
    inset 0 0 20px rgba(0, 0, 0, 0.5);

  &::before {
    content: '⚠';
    margin-right: 0.5rem;
    font-size: 1.2rem;
    animation: ${heartbeat} 2s infinite;
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;
    padding: 0.4rem 0.8rem;
    border-width: 2px;

    &::before {
      font-size: 0.8rem;
      margin-right: 0.3rem;
    }
  }
`;

const Scratches = styled.div`
  position: absolute;
  width: 100px;
  height: 2px;
  background: rgba(139, 0, 0, 0.3);
  transform: rotate(${props => props.rotate || '-15deg'});
  z-index: 1;
  pointer-events: none;

  &::before {
    content: '';
    position: absolute;
    width: 80px;
    height: 2px;
    background: rgba(139, 0, 0, 0.25);
    top: 8px;
    left: 10px;
  }

  &::after {
    content: '';
    position: absolute;
    width: 90px;
    height: 2px;
    background: rgba(139, 0, 0, 0.2);
    top: 16px;
    left: 5px;
  }

  @media (max-width: 768px) {
    width: 60px;
    opacity: 0.7;

    &::before {
      width: 50px;
      top: 5px;
      left: 6px;
    }

    &::after {
      width: 55px;
      top: 10px;
      left: 3px;
    }
  }
`;

const DisturbingText = styled.div`
  position: absolute;
  font-family: 'Courier New', monospace;
  font-size: ${props => props.fontSize || '2.5rem'};
  font-weight: bold;
  color: rgba(139, 0, 0, 0.15);
  text-transform: uppercase;
  letter-spacing: 0.3em;
  z-index: 1;
  pointer-events: none;
  transform: rotate(${props => props.rotate || '0deg'});
  text-shadow: 0 0 20px rgba(139, 0, 0, 0.2);
  opacity: 0.3;

  @media (max-width: 768px) {
    font-size: ${props => props.mobileFontSize || '1.2rem'};
    opacity: 0.25;
    letter-spacing: 0.2em;
  }
`;

const HandPrint = styled.div`
  position: absolute;
  width: 60px;
  height: 70px;
  opacity: 0.2;
  z-index: 1;
  pointer-events: none;
  transform: rotate(${props => props.rotate || '0deg'});

  &::before {
    content: '🖐';
    font-size: 4rem;
    color: rgba(139, 0, 0, 0.3);
    filter: blur(2px);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 50px;
    opacity: 0.15;

    &::before {
      font-size: 2.5rem;
    }
  }
`;

const EventBanner = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Check if banner was already closed in this session
  useEffect(() => {
    const bannerClosed = sessionStorage.getItem('halloweenBannerClosed');
    if (bannerClosed) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('halloweenBannerClosed', 'true');
    if (onClose) onClose();
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <HalloweenBannerContainer
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Hospital decorative elements */}
          <MedicalCross style={{ top: '15%', left: '5%' }} size="4rem" mobileSize="2.5rem" delay="0s" />
          <MedicalCross style={{ top: '20%', right: '8%' }} size="3.5rem" mobileSize="2rem" delay="0.5s" />
          <MedicalCross style={{ bottom: '20%', left: '10%' }} size="3rem" mobileSize="1.8rem" delay="1s" />
          <MedicalCross style={{ bottom: '15%', right: '5%' }} size="4rem" mobileSize="2.5rem" delay="1.5s" />

          {/* Blood drops - more of them */}
          <BloodDrop style={{ top: '10%', left: '15%' }} duration="4s" delay="0s" />
          <BloodDrop style={{ top: '10%', right: '20%' }} duration="5s" delay="1s" />
          <BloodDrop style={{ top: '10%', left: '50%' }} duration="4.5s" delay="2s" />
          <BloodDrop style={{ top: '10%', right: '35%' }} duration="5.5s" delay="0.5s" />
          <BloodDrop style={{ top: '10%', left: '25%' }} duration="4.2s" delay="1.5s" />
          <BloodDrop style={{ top: '10%', right: '45%' }} duration="5.2s" delay="2.5s" />
          <BloodDrop style={{ top: '10%', left: '60%' }} duration="4.8s" delay="0.8s" />
          <BloodDrop style={{ top: '10%', right: '12%' }} duration="5.8s" delay="1.8s" />

          {/* Blood splatters */}
          <BloodSplatter style={{ top: '15%', left: '8%' }} size="100px" mobileSize="60px" />
          <BloodSplatter style={{ top: '25%', right: '12%' }} size="80px" mobileSize="50px" />
          <BloodSplatter style={{ bottom: '30%', left: '5%' }} size="120px" mobileSize="70px" />
          <BloodSplatter style={{ bottom: '25%', right: '8%' }} size="90px" mobileSize="55px" />
          <BloodSplatter style={{ top: '45%', left: '15%' }} size="70px" mobileSize="45px" />
          <BloodSplatter style={{ top: '50%', right: '18%' }} size="110px" mobileSize="65px" />

          {/* Blood trails */}
          <BloodTrail style={{ top: '5%', left: '20%' }} length="180px" mobileLength="100px" />
          <BloodTrail style={{ top: '5%', right: '25%' }} length="200px" mobileLength="110px" />
          <BloodTrail style={{ top: '5%', left: '45%' }} length="160px" mobileLength="90px" />
          <BloodTrail style={{ top: '5%', right: '50%' }} length="220px" mobileLength="120px" />

          {/* Scratches */}
          <Scratches style={{ top: '30%', left: '12%' }} rotate="-20deg" />
          <Scratches style={{ top: '55%', right: '15%' }} rotate="15deg" />
          <Scratches style={{ bottom: '35%', left: '18%' }} rotate="-25deg" />
          <Scratches style={{ top: '40%', left: '8%' }} rotate="10deg" />
          <Scratches style={{ bottom: '45%', right: '10%' }} rotate="-30deg" />

          {/* Disturbing text overlays */}
          <DisturbingText style={{ top: '20%', left: '18%' }} fontSize="3rem" mobileFontSize="1.5rem" rotate="-8deg">INSANE</DisturbingText>
          <DisturbingText style={{ top: '60%', right: '15%' }} fontSize="2rem" mobileFontSize="1rem" rotate="12deg">HELP ME</DisturbingText>
          <DisturbingText style={{ bottom: '25%', left: '12%' }} fontSize="2.5rem" mobileFontSize="1.2rem" rotate="-5deg">NO ESCAPE</DisturbingText>
          <DisturbingText style={{ top: '45%', right: '20%' }} fontSize="1.8rem" mobileFontSize="0.9rem" rotate="8deg">TREATMENT</DisturbingText>

          {/* Bloody handprints */}
          <HandPrint style={{ top: '18%', left: '10%' }} rotate="-30deg" />
          <HandPrint style={{ top: '50%', right: '12%' }} rotate="25deg" />
          <HandPrint style={{ bottom: '30%', left: '8%' }} rotate="40deg" />

          {/* Patient numbers */}
          <PatientNumber style={{ top: '12%', left: '3%' }}>PATIENT #66-613</PatientNumber>
          <PatientNumber style={{ top: '70%', right: '3%' }}>WARD #13</PatientNumber>
          <PatientNumber style={{ bottom: '12%', left: '4%' }}>ADMIT #1031</PatientNumber>

          {/* Asylum warnings */}
          <AsylumWarning style={{ top: '8%', left: '35%' }} rotate="-2deg">DANGER</AsylumWarning>
          <AsylumWarning style={{ bottom: '8%', right: '30%' }} rotate="3deg">NO EXIT</AsylumWarning>

          {/* Hospital signs */}
          <HospitalSign left="2%" top="5%" rotate="-5deg">⚠ Ward A</HospitalSign>
          <HospitalSign right="2%" top="8%" rotate="3deg">Psychiatric</HospitalSign>
          <HospitalSign left="3%" top="85%" rotate="2deg">Emergency</HospitalSign>
          <HospitalSign right="4%" top="92%" rotate="-4deg">Isolation</HospitalSign>

          <ECGLine />

          <ContentWrapper>
            <CloseButton
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IoClose />
            </CloseButton>

            <BannerContent>
              <PosterContainer
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <HalloweenImage
                  src="/images/events/hospital.jpg"
                  alt="Halloween Event"
                  loading="eager"
                />
              </PosterContainer>

              <InfoContainer>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <EventLabel>
                    🎃 HALLOWEEN EVENT
                  </EventLabel>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <Title>
                    MENTAL
                    <span>HOSPITAL</span>
                  </Title>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <EventDetails>
                    <DetailRow>
                      <strong>📅</strong> October 31, Thursday
                    </DetailRow>
                    <DetailRow>
                      <strong>🕐</strong> 7 PM - 12 AM
                    </DetailRow>
                    <DetailRow>
                      <strong>📍</strong> KAIF Jungle Club & SPA
                    </DetailRow>
                  </EventDetails>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <FeatureList>
                    <FeatureItem>Insane Asylum Experience</FeatureItem>
                    <FeatureItem>Horror Show</FeatureItem>
                    <FeatureItem>Crazy Night</FeatureItem>
                  </FeatureList>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                >
                  <CTAContainer>
                    <BookButton
                      as="button"
                      onClick={() => setIsBookingModalOpen(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      🎃 BOOK NOW
                    </BookButton>
                  </CTAContainer>
                </motion.div>
              </InfoContainer>
            </BannerContent>
          </ContentWrapper>

          <BookingModal
            isOpen={isBookingModalOpen}
            onClose={() => setIsBookingModalOpen(false)}
            service="Halloween Mental Hospital Event"
            source="Home - Event Banner"
          />
        </HalloweenBannerContainer>
      )}
    </AnimatePresence>
  );
};

export default EventBanner;