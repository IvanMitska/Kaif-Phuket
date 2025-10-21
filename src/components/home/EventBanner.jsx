import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';

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
    background: rgba(255, 107, 53, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 107, 53, 0.3);
    border-radius: 50%;
    font-size: 0.8rem;
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
    content: '✦';
    color: #ff6b35;
    font-size: 1.2rem;
    line-height: 0.5;
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

// Halloween Banner - styled like Sauna Rave
const HalloweenBannerContainer = styled(motion.section)`
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
    background: radial-gradient(
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
  max-width: 650px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.7),
    0 0 120px rgba(255, 0, 0, 0.15);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 20, 20, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 0, 0, 0.3);

  @media (max-width: 968px) {
    max-width: 500px;
  }

  @media (max-width: 480px) {
    width: 100%;
    max-width: 350px;
  }
`;

const HalloweenImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 600px;
  display: block;
  object-fit: contain;

  @media (max-width: 968px) {
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
  font-size: clamp(2.5rem, 6vw, 4rem);
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
    background: linear-gradient(135deg, #8B0000 0%, #FF0000 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: -0.1em;
  }

  @media (max-width: 968px) {
    font-size: clamp(2rem, 5vw, 3rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 4.5vw, 2.5rem);
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
    background: rgba(255, 107, 53, 0.2);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 107, 53, 0.3);
    border-radius: 50%;
    font-size: 0.8rem;
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
    content: '✦';
    color: #ff6b35;
    font-size: 1.2rem;
    line-height: 0.5;
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

const EventBanner = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

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
                  src="/images/events/hospital.png"
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
                      href="https://wa.me/66624805877?text=Hi!%20I%20want%20to%20book%20for%20the%20Halloween%20Mental%20Hospital%20event%20on%20October%2031"
                      target="_blank"
                      rel="noopener noreferrer"
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
        </HalloweenBannerContainer>
      )}
    </AnimatePresence>
  );
};

export default EventBanner;