import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

// === STYLED COMPONENTS ===

const SectionContainer = styled.section`
  position: relative;
  padding: 6rem 0;
  background-color: #fffef6;
  touch-action: pan-y;
  overscroll-behavior: auto;

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
  margin: 0 0 3rem;
  max-width: 800px;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const EventsGrid = styled.div`
  display: flex;
  gap: 1.25rem;
  padding-bottom: 1rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    overflow-x: visible;
    padding-left: 0;
    padding-right: 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const EventCard = styled.div`
  flex: 0 0 280px;
  scroll-snap-align: start;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  border: 1px solid rgba(19, 50, 56, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex: none;
  }

  &:hover {
    border-color: rgba(19, 50, 56, 0.15);
    box-shadow: 0 12px 40px rgba(19, 50, 56, 0.1);
    transform: translateY(-4px);
  }
`;

const PosterWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: #1a1a1a;
`;

const PosterImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;

  ${EventCard}:hover & {
    transform: scale(1.02);
  }
`;

const PosterPlaceholder = styled.div`
  width: 100%;
  aspect-ratio: 3 / 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(19, 50, 56, 0.3);
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  gap: 0.75rem;
  background: linear-gradient(
    135deg,
    rgba(144, 179, 167, 0.1) 0%,
    rgba(19, 50, 56, 0.05) 100%
  );

  svg {
    width: 48px;
    height: 48px;
    opacity: 0.4;
  }
`;

const DateBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  text-align: center;
  min-width: 50px;
`;

const DateDay = styled.div`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #133238;
  line-height: 1;
`;

const DateMonth = styled.div`
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  color: rgba(19, 50, 56, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 2px;
`;

const CardContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const EventTitle = styled.h3`
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: #133238;
  margin: 0 0 0.75rem;
  line-height: 1.3;
  text-transform: uppercase;
  min-height: 86px;
`;

const EventMeta = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  color: rgba(19, 50, 56, 0.5);
  margin-bottom: 1rem;
  min-height: 40px;
`;

const EventTime = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const EventLocation = styled.span`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const EventFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  min-height: 230px;
  align-content: flex-start;
`;

const FeatureTag = styled.span`
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #133238;
  background: rgba(144, 179, 167, 0.15);
  padding: 0.35rem 0.6rem;
  border-radius: 4px;
`;

const PromoButton = styled.a`
  display: block;
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #E8734A 0%, #D4A574 100%);
  padding: 0.75rem 1rem;
  border-radius: 6px;
  text-align: center;
  margin-bottom: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(232, 115, 74, 0.3);
  }
`;

const EventDescription = styled.p`
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(19, 50, 56, 0.6);
  margin: 0 0 1rem;
  min-height: 65px;
`;

const BookButton = styled.a`
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #133238;
  background: transparent;
  border: 1px solid rgba(19, 50, 56, 0.2);
  padding: 0.85rem 1.25rem;
  border-radius: 50px;
  text-align: center;
  text-decoration: none;
  transition: all 0.25s ease;
  margin-top: auto;

  &:hover {
    background: #133238;
    color: #fff;
    border-color: #133238;
  }
`;

const EmptyState = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  color: rgba(19, 50, 56, 0.4);
  font-family: 'Jost', sans-serif;

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: 1.5rem;
    opacity: 0.3;
  }
`;

const EmptyTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: rgba(19, 50, 56, 0.6);
`;

const EmptyText = styled.div`
  font-size: 0.9rem;
`;

// === ICONS ===

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// === COMPONENT ===

const EventsSection = () => {
  const { t } = useTranslation();

  const events = useMemo(() => [
    {
      id: 1,
      title: 'Pool Party',
      date: { day: '21', month: 'FEB' },
      time: '16:00 – 20:00',
      location: 'Pool',
      image: '/images/events/pool-party.jpeg',
      features: ['DJ Show', 'Welcome Drink', 'Group Steaming'],
      promo: '1+1 for Special Mocktails',
      promoLink: 'https://wa.me/66624805877?text=Hello!%20I%20want%20to%20register%20for%20Pool%20Party%20on%20February%2021',
      description: 'Music, water, sunset, and mocktails — the perfect vibe to relax and move',
      bookingLink: 'https://wa.me/66624805877?text=Hello!%20I%20want%20to%20book%20Pool%20Party%20on%20February%2021'
    }
  ], []);

  const renderEventCard = (event) => (
    <EventCard key={event.id}>
      <PosterWrapper>
        {event.image ? (
          <PosterImage src={event.image} alt={event.title} loading="lazy" />
        ) : (
          <PosterPlaceholder>
            <CalendarIcon />
            <span>Poster</span>
          </PosterPlaceholder>
        )}
        <DateBadge>
          <DateDay>{event.date.day}</DateDay>
          <DateMonth>{event.date.month}</DateMonth>
        </DateBadge>
      </PosterWrapper>
      <CardContent>
        <EventTitle>{event.title}</EventTitle>
        <EventMeta>
          <EventTime>
            <ClockIcon />
            {event.time}
          </EventTime>
          <EventLocation>
            <LocationIcon />
            {event.location}
          </EventLocation>
        </EventMeta>

        {event.features && event.features.length > 0 && (
          <EventFeatures>
            {event.features.map((feature, index) => (
              <FeatureTag key={index}>{feature}</FeatureTag>
            ))}
          </EventFeatures>
        )}

        {event.promo && event.promoLink && (
          <PromoButton
            href={event.promoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {event.promo}
          </PromoButton>
        )}

        {event.description && (
          <EventDescription>{event.description}</EventDescription>
        )}

        {event.bookingLink && (
          <BookButton
            href={event.bookingLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('common.book_now', 'Book Now')}
          </BookButton>
        )}
      </CardContent>
    </EventCard>
  );

  return (
    <SectionContainer id="events">
      <ContentWrapper>
        <Overline>{t('events.overline', 'What\'s On')}</Overline>
        <Title>{t('events.title', 'Upcoming Events')}</Title>

        <EventsGrid>
          {events.length > 0 ? (
            events.map(renderEventCard)
          ) : (
            <EmptyState>
              <CalendarIcon />
              <EmptyTitle>{t('events.empty.title', 'No upcoming events')}</EmptyTitle>
              <EmptyText>{t('events.empty.text', 'Check back soon for new events')}</EmptyText>
            </EmptyState>
          )}
        </EventsGrid>
      </ContentWrapper>
    </SectionContainer>
  );
};

export default EventsSection;
