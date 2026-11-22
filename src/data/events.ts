// Ticketed events and weekly tournaments. At staging: Sanity `event` documents the client manages
// (title, type, weekly day or date, time, price, status, Square link).
// The Square checkout link's "redirect after payment" should point to https://www.gameplex.ca/events?paid=1
//
// Source: the Square Online products on gameplex.ca (Shahgol tournament, FC25 tournament, GTA Promo)
// and the Running Mafia Night copy on /events. Weekly days marked `sample` are placeholders for the
// local preview: the client sets the real schedule in Studio.

export interface GEvent {
  id: string;
  type: 'tournament' | 'mafia' | 'event';
  title: string;
  weekly?: number; // 0 = Sunday … 6 = Saturday
  date?: string; // YYYY-MM-DD for one-off events
  when?: string; // free text when there is no day (e.g. "Every night")
  time?: string;
  price: string;
  text?: string;
  image?: string;
  squareUrl?: string;
  status: 'onsale' | 'few' | 'soldout';
  sample?: boolean;
}

export const events: GEvent[] = [
  {
    id: 'mafia-night', type: 'mafia', title: 'Running Mafia Night',
    when: 'Every night', time: '6 PM to 2 AM', price: '$20',
    text: 'Gather your crew of 10 and dive into two rounds of Running Mafia, plus unlimited fun with board games, air hockey, darts, foosball, and a retro arcade machine. $20 per person, includes 1 drink (beer, tea, or coffee). Booking required.',
    image: '/img/events/mafia-night.webp', status: 'onsale',
  },
  {
    id: 'shahgol', type: 'tournament', title: 'Shahgol Tournament',
    weekly: 0, time: '6 PM', price: '$30',
    text: 'Teams of 5, played to 21 points, $500 prize. Registration is $30 per person and includes all board games, darts, foosball, arcade, air hockey and Mafia. 10% off when you buy for 5 people.',
    image: '/img/events/shahgol.webp', squareUrl: 'https://www.gameplex.ca/product/-/ATYNV5VZ6RFQ4BLCH6EE3RQN', status: 'onsale', sample: true,
  },
  {
    id: 'fc-tournament', type: 'tournament', title: 'FC Tournament (PS5)',
    weekly: 4, time: '8 PM', price: '$30',
    text: 'The first stage is played in groups of four, then single elimination. 8-minute games. Each player gets half an hour of free practice at Gameplex before the tournament. First place takes 40% of ticket sales, second place 20%.',
    image: '/img/events/fc-tournament.webp', squareUrl: 'https://www.gameplex.ca/product/FC24/96', status: 'onsale', sample: true,
  },
  {
    id: 'gta-promo', type: 'event', title: 'GTA Promo: $200 Gameplex credit',
    when: 'Until GTA 6 drops', price: '$160',
    text: '$200 Gameplex credit, pay less. Grab your discounted Gameplex card before GTA 6 drops. Gaming, pool, board games and more.',
    image: '/img/events/gta-promo.webp', squareUrl: 'https://www.gameplex.ca/product/gta-promo/E6OZU6TC6HD4DXPVD654DYV5', status: 'onsale',
  },
];
