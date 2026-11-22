// Ways in. At staging: Sanity `entryOption` documents (client edits price, text and the Square link).
// Copy and prices from gameplex.ca (home "Simple, affordable, memorable", /events, Book page, /play-station, /poolping-pong).

export interface EntryOption {
  key: string;
  icon: string;
  name: string;
  price: string;
  priceNote?: string;
  text: string;
  points: string[];
  cta: { label: string; href: string; external?: boolean };
  featured?: boolean;
}

export const entryOptions: EntryOption[] = [
  {
    key: 'walkin', icon: 'door', name: 'Walk in',
    price: '$5', priceNote: 'per hour, board games',
    text: 'No reservation needed. Choose individual games with hourly pricing.',
    points: ['Board games: $5 per hour (minimum spend $10)', 'PS5: $16 per hour for 2 players', 'Pool or ping pong: $24 per hour, up to 4'],
    cta: { label: 'Get directions', href: 'https://www.google.com/maps/search/?api=1&query=Gameplex+8403+Yonge+Street+Thornhill', external: true },
  },
  {
    key: 'ahead', icon: 'ticket', name: 'Buy ahead',
    price: 'from $20', priceNote: 'tickets online',
    text: 'Buy your ticket on Square, pay there, and you come straight back to this site.',
    points: ['Running Mafia Night: $20, includes 1 drink', 'Weekly tournaments: $30', 'GTA Promo: $200 Gameplex credit for $160'],
    cta: { label: 'Buy tickets', href: '/events' },
    featured: true,
  },
  {
    key: 'vip', icon: 'crown', name: 'VIP / Play everything',
    price: '$30', priceNote: 'daily pass, unlimited',
    text: 'Get a $30 daily pass for unlimited access to most activities, or take the private VIP Lounge.',
    points: ['Board games, 8-ball, ping pong, darts, arcade, PS5 and PC', 'Tonight’s deal can bring it down to $15 or $20', 'VIP Lounge: $34 per hour for up to 2 guests'],
    cta: { label: 'Reserve the VIP Lounge', href: '/request-for-private-events?guests=2' },
  },
];
