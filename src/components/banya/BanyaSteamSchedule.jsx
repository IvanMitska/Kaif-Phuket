import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;

  @media (min-width: 768px) {
    padding: 8rem 0;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

const Overline = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(19, 50, 56, 0.4);
  margin-bottom: 1.25rem;
  display: flex;
  align-items: center;

  &::before {
    content: '';
    display: inline-block;
    width: 30px;
    height: 1.5px;
    background: rgba(19, 50, 56, 0.25);
    margin-right: 1rem;
  }
`;

const Title = styled.h2`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(2rem, 4.5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: #133238;
  text-transform: uppercase;
  margin: 0 0 4rem;
  max-width: 800px;
`;

const ScheduleGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 0 4rem;
  }
`;

const ScheduleColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScheduleItem = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(19, 50, 56, 0.08);

  &:first-child {
    border-top: 1px solid rgba(19, 50, 56, 0.08);
  }

  @media (max-width: 480px) {
    gap: 1rem;
    padding: 1.25rem 0;
  }
`;

const Time = styled.span`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 800;
  color: #133238;
  letter-spacing: -0.02em;
  flex-shrink: 0;
  min-width: 80px;

  @media (max-width: 480px) {
    min-width: 65px;
  }
`;

const Dash = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 1.25rem;
  color: rgba(19, 50, 56, 0.25);
  flex-shrink: 0;
`;

const SessionName = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 400;
  color: rgba(19, 50, 56, 0.6);
  letter-spacing: 0.02em;
`;

const BanyaSteamSchedule = () => {
  const { t } = useTranslation();

  const sessions = t('banya.steam_schedule.sessions', { returnObjects: true });
  const half = Math.ceil((Array.isArray(sessions) ? sessions.length : 0) / 2);
  const firstHalf = Array.isArray(sessions) ? sessions.slice(0, half) : [];
  const secondHalf = Array.isArray(sessions) ? sessions.slice(half) : [];

  const renderItem = (session, index) => (
    <ScheduleItem key={index}>
      <Time>{session.time}</Time>
      <Dash>&mdash;</Dash>
      <SessionName>{session.name}</SessionName>
    </ScheduleItem>
  );

  return (
    <SectionContainer>
      <ContentWrapper>
        <Overline>{t('banya.steam_schedule.overline', 'Daily Schedule')}</Overline>
        <Title>{t('banya.steam_schedule.title', 'Steam Sessions')}</Title>

        <ScheduleGrid>
          <ScheduleColumn>
            {firstHalf.map(renderItem)}
          </ScheduleColumn>
          <ScheduleColumn>
            {secondHalf.map(renderItem)}
          </ScheduleColumn>
        </ScheduleGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default memo(BanyaSteamSchedule);
