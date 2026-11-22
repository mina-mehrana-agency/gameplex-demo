// "Products" = what you can play at Gameplex. At staging: Sanity `activity` documents.
// status is set by the client in Studio (available / limited / unavailable) with an optional note.
// Copy source: client prototype ("Choose your game"); prices from gameplex.ca (Book page, /play-station, /poolping-pong).

export type Status = 'available' | 'limited' | 'unavailable';

export interface Activity {
  key: string;
  name: string;
  icon: string;
  color: string; // stage colour when selected
  sub: string;
  text: string;
  image?: string;
  price: string;
  priceNote?: string;
  status: Status;
  statusNote?: string;
  days?: number[]; // days it runs; empty = every open day
  promoIds?: string[]; // promotions that belong to this activity
  inPass: boolean; // included in the unlimited pass
  cta: { label: string; href: string };
}

export const activities: Activity[] = [
  {
    key: 'board', name: 'Board games', icon: 'dice', color: '#7B2FD6',
    sub: 'Hundreds of classic, strategy, family and party games',
    text: 'Pick a shelf and play for as long as you like. Great for date nights, family outings, study breaks and big groups of friends.',
    image: '/img/act/board.webp', price: '$10', priceNote: 'Fall Special', status: 'available', inPass: true,
    cta: { label: 'See board games', href: '/board-games-toronto' },
  },
  {
    key: 'mafia', name: 'Mafia', icon: 'mask', color: '#C2245A',
    sub: 'Groups of 10, two rounds, one drink each',
    text: 'The social deduction game where the Mafia hides in plain sight. Two rounds of Running Mafia plus board games, air hockey, darts, foosball and a retro arcade machine, 6 PM to 2 AM. Booking required.',
    image: '/img/act/mafia.webp', price: '$20', priceNote: 'per person, 1 drink', status: 'limited', statusNote: 'Booking required, groups of 10', inPass: false,
    promoIds: ['mafia-night'],
    cta: { label: 'Book Mafia Night', href: '/events' },
  },
  {
    key: 'karaoke', name: 'Karaoke', icon: 'mic', color: '#E0457B',
    sub: 'Public karaoke and a private VIP room',
    text: 'Sing for the whole room, or book the VIP room with karaoke, a PS5, darts and board games for your own group.',
    image: '/img/act/karaoke.webp', price: '$34', priceNote: 'VIP room per hour', status: 'limited', statusNote: 'VIP room by booking', inPass: true,
    cta: { label: 'Reserve the VIP room', href: '/request-for-private-events?type=vip' },
  },
  {
    key: 'pc', name: 'PC gaming', icon: 'pc', color: '#1F7AE0',
    sub: 'High-performance gaming PCs and the latest titles',
    text: 'Counter-Strike and multiplayer favourites with your squad side by side. Every Monday and Wednesday is the Unlimited Grind: play all night for one price.',
    image: '/img/act/pc.webp', price: '$16', priceNote: 'Mon and Wed', status: 'available', inPass: true,
    promoIds: ['mon-pc', 'wed-pc'],
    cta: { label: 'See PC tournaments', href: '/events' },
  },
  {
    key: 'ps5', name: 'PS5', icon: 'pad', color: '#2747C9',
    sub: 'Console multiplayer and EA Sports FC',
    text: 'Football matches, party games and head-to-head battles. Included in the unlimited pass, Thursday’s $20 night and student days.',
    image: '/img/act/ps5.webp', price: '$16', priceNote: 'per hour for 2', status: 'available', inPass: true,
    cta: { label: 'See PS5 tournaments', href: '/events' },
  },
  {
    key: 'pool', name: 'Pool and ping pong', icon: 'pool', color: '#0F8A5F',
    sub: '8-ball pool and table tennis',
    text: 'Rack up a few frames of 8-ball or settle it with a ping pong rally. Easy for groups to rotate through during a party.',
    image: '/img/act/pool.webp', price: '$24', priceNote: 'per hour, up to 4', status: 'available', inPass: true,
    cta: { label: 'Plan a party', href: '/request-for-private-events' },
  },
  {
    key: 'hockey', name: 'Air hockey and foosball', icon: 'puck', color: '#D9480F',
    sub: 'Fast head-to-head table games',
    text: 'Games take a few minutes, so everyone gets a turn and every rivalry gets a rematch. Free for girls on Wednesday Girls Night.',
    image: '/img/act/hockey.webp', price: '$20', priceNote: 'Thursdays', status: 'available', inPass: true,
    cta: { label: 'See tonight’s deal', href: '/#deals' },
  },
  {
    key: 'darts', name: 'Darts and arcade', icon: 'dart', color: '#8F5B00',
    sub: 'Darts and a retro arcade machine',
    text: 'Aim small between rounds of everything else, then chase a high score on the retro arcade machine.',
    image: '/img/act/darts.webp', price: '$30', priceNote: 'unlimited', status: 'available', inPass: true,
    cta: { label: 'See tonight’s deal', href: '/#deals' },
  },
];

export const statusLabel: Record<Status, string> = {
  available: 'Available tonight',
  limited: 'Limited tonight',
  unavailable: 'Not available tonight',
};
