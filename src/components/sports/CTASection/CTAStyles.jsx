import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CTAContainer = styled.section`
  position: relative;
  padding: 8rem 2rem 8rem 2rem;
  overflow: visible;
  margin: 0;
  margin-bottom: 0;
  padding-bottom: 0;

  @media (max-width: 768px) {
    padding: 5rem 1.5rem 5rem 1.5rem;
    padding-bottom: 0;
  }
`;

export const CTABackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -100px;
  background: #FFE600;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, transparent 50%),
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(0, 0, 0, 0.02) 10px,
        rgba(0, 0, 0, 0.02) 20px
      );
  }
`;

export const CTAPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: -100px;
  background-image:
    radial-gradient(circle at 15% 20%, rgba(0, 0, 0, 0.08) 0%, transparent 30%),
    radial-gradient(circle at 85% 80%, rgba(0, 0, 0, 0.08) 0%, transparent 30%);
  z-index: 2;
`;

export const CTAContent = styled(motion.div)`
  position: relative;
  z-index: 3;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  color: white;
`;

export const CTATitle = styled.h2`
  font-family: ${props => props.theme.fonts.heading};
  font-size: clamp(3.5rem, 7vw, 6rem);
  font-weight: 900;
  margin-bottom: 2rem;
  line-height: 0.95;
  color: #000000;
  text-shadow: none;
  text-transform: uppercase;
  letter-spacing: -0.04em;
  -webkit-font-smoothing: antialiased;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 6px;
    background: #000000;
  }
`;

export const CTASubtitle = styled.p`
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 3.5rem;
  margin-top: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 600;
  letter-spacing: 0.02em;
`;

export const CTAButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const CTAPrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.8rem 4.5rem;
  background: #000000;
  color: #FFFFFF;
  border: none;
  border-radius: 0;
  font-weight: 900;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.5);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #FFFFFF;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
    transition: color 0.4s ease;
  }

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 64px rgba(0, 0, 0, 0.6);

    & > * {
      color: #000000;
    }
  }

  &:hover::before {
    width: 100%;
  }

  &:hover svg:last-child {
    transform: translateX(8px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    padding: 1.5rem 3rem;
    font-size: 1rem;
  }
`;

export const CTASecondaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1.8rem 4.5rem;
  background: transparent;
  color: #000000;
  border: 4px solid rgba(0, 0, 0, 0.4);
  border-radius: 0;
  font-weight: 900;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #000000;
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
    transition: color 0.4s ease;
  }

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    border-color: #000000;
    transform: translateY(-3px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);

    & > * {
      color: #FFFFFF;
    }
  }

  &:hover::before {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    padding: 1.5rem 3rem;
    font-size: 1rem;
  }
`;
