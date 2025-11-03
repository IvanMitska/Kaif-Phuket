export interface Promotion {
  id: string;
  dayOfWeek: string;
  dayIndex: number; // 1 = Monday, 2 = Tuesday, etc.
  title: string;
  subtitle: string;
  description: string;
  image: string; // Vertical image path
  color: string; // Accent color for each day
}

export const promotions: Promotion[] = [
  {
    id: 'monday',
    dayOfWeek: 'Monday',
    dayIndex: 1,
    title: 'Double KAIF',
    subtitle: '1+1 Day Pass',
    description: 'Come with a friend, pay only for one! Applies only to "Day pass" tickets for area of complex',
    image: '/images/promotions/monday.png',
    color: '#FFD700', // Gold
  },
  {
    id: 'tuesday',
    dayOfWeek: 'Tuesday',
    dayIndex: 2,
    title: 'KAIF Plus',
    subtitle: 'Sauna + Massage Gift',
    description: 'When you purchase a sauna subscription for 1 month, you will receive a Thai oil massage as a gift',
    image: '/images/promotions/tuesday.png',
    color: '#FF6B6B', // Coral
  },
  {
    id: 'wednesday',
    dayOfWeek: 'Wednesday',
    dayIndex: 3,
    title: 'KAIF for Subscribers',
    subtitle: 'Member Exclusive',
    description: 'Exclusive for subscription holders: massage -50% for club members',
    image: '/images/promotions/wednesday.png',
    color: '#4ECDC4', // Teal
  },
  {
    id: 'thursday',
    dayOfWeek: 'Thursday',
    dayIndex: 4,
    title: 'Private Steaming',
    subtitle: 'Half Price Sessions',
    description: 'Individual steaming sessions with brooms -50% for everyone',
    image: '/images/promotions/thursday.png',
    color: '#95E1D3', // Mint
  },
  {
    id: 'friday',
    dayOfWeek: 'Friday',
    dayIndex: 5,
    title: 'Lady KAIF',
    subtitle: 'Ladies Free Until 16:00',
    description: 'Admission for ladies is free until 16:00',
    image: '/images/promotions/friday.png',
    color: '#F38181', // Pink
  },
];

// Helper function to get today's promotion
export const getTodayPromotion = (): Promotion | null => {
  const today = new Date().getDay();
  // Convert Sunday (0) to 7, and adjust for our Monday-Friday promotions
  const dayIndex = today === 0 ? 7 : today;

  return promotions.find(promo => promo.dayIndex === dayIndex) || null;
};

// Helper function to get current day index for highlighting
export const getCurrentDayIndex = (): number => {
  const today = new Date().getDay();
  // Convert Sunday (0) to 7
  return today === 0 ? 7 : today;
};