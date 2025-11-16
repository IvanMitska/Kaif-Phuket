import styled from 'styled-components';

export const ScrollingTextSection = styled.section`
  position: relative;
  width: 100%;
  background: #000000;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  margin: 0;
`;

export const ScrollingTextContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const ScrollingTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0;

  @media (max-width: 768px) {
    gap: 0.5rem;
    padding: 0;
  }
`;

export const TextLine = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: visible;
  width: 200%;
  will-change: transform;
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
`;

export const AnimatedText = styled.span`
  font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
  font-size: clamp(5rem, 10vw, 12rem);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  transform: translateZ(0);

  /* Обводка букв */
  -webkit-text-stroke: 3px #FFE600;
  color: transparent;

  /* Для правильной работы с SplitType */
  .char {
    display: inline-block;
    -webkit-text-stroke: 3px #FFE600;
    color: transparent;
    font-family: 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
    font-weight: 700;
    transform: translateZ(0);
    backface-visibility: hidden;
  }

  @media (max-width: 1024px) {
    font-size: clamp(4rem, 9vw, 9rem);
    -webkit-text-stroke: 2.5px #FFE600;

    .char {
      -webkit-text-stroke: 2.5px #FFE600;
    }
  }

  @media (max-width: 768px) {
    font-size: clamp(3rem, 8vw, 6rem);
    -webkit-text-stroke: 2px #FFE600;

    .char {
      -webkit-text-stroke: 2px #FFE600;
    }
  }
`;
