import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ScheduleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ScheduleTabs = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
  overflow-x: auto;
  padding: 0;
  background: transparent;
  border-radius: 0;
  scrollbar-width: none;
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 768px) {
    gap: 0.5rem;
    justify-content: flex-start;
  }
`;

export const ScheduleTab = styled(motion.button)`
  flex: 0 0 auto;
  min-width: 140px;
  padding: 1rem 2rem;
  background: ${props => props.active ? '#FFE600' : 'rgba(255, 255, 255, 0.03)'};
  color: ${props => props.active ? '#000000' : 'rgba(255, 255, 255, 0.7)'};
  border: none;
  border-radius: 0;
  font-weight: ${props => props.active ? '800' : '600'};
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${props => props.active ? '0 8px 24px rgba(255, 230, 0, 0.4)' : 'none'};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  -webkit-font-smoothing: antialiased;

  .short {
    display: none;
  }

  .full {
    display: inline;
  }

  &:hover {
    background: ${props => props.active ? '#FFE600' : 'rgba(255, 255, 255, 0.05)'};
    color: ${props => props.active ? '#000000' : '#FFFFFF'};
  }

  @media (max-width: 768px) {
    min-width: 70px;
    padding: 0.875rem 1rem;
    font-size: 0.85rem;

    .short {
      display: inline;
    }

    .full {
      display: none;
    }
  }
`;

export const ScheduleContent = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const ClassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  padding: 2rem;
  border-radius: 0;
  border: none;
  box-shadow: none;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: #FFE600;
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 0 1px rgba(255, 230, 0, 0.3);
  }

  &:hover::before {
    transform: scaleY(1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

export const ClassTime = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem;
  background: #FFE600;
  border-radius: 0;
  width: fit-content;

  svg {
    width: 18px;
    height: 18px;
    color: #000000;
  }

  span {
    font-weight: 800;
    font-size: 1.1rem;
    color: #000000;
    letter-spacing: 0.5px;
  }
`;

export const ClassInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  flex: 1;
`;

export const ClassTitle = styled.h4`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 900;
  color: #FFFFFF;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  -webkit-font-smoothing: antialiased;
`;

export const ClassInstructor = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
  font-weight: 600;

  svg {
    width: 16px;
    height: 16px;
    color: #FFE600;
  }
`;

export const ClassMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 0.5rem;
`;

export const ClassMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
    color: rgba(255, 230, 0, 0.6);
  }
`;

export const BookButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: #FFE600;
  color: #000000;
  border: none;
  border-radius: 0;
  font-weight: 800;
  font-size: 0.95rem;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 6px 24px rgba(255, 230, 0, 0.4);
  text-transform: uppercase;
  letter-spacing: 1px;
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
    transition: width 0.3s ease;
    z-index: 0;
  }

  & > * {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease;
  }

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    box-shadow: 0 8px 32px rgba(255, 230, 0, 0.6);
  }

  &:hover::before {
    width: 100%;
  }

  &:hover > * {
    color: #FFE600;
  }
`;
