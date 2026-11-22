// Daily and weekly promotions. At staging each row becomes a Sanity `promotion` document
// the client edits in Studio (title, price, days, kind, active).
// Source: client prototype deal list + food specials.

export type PromoKind = 'entry' | 'food' | 'drink' | 'event';

export interface Promotion {
  id: string;
  kind: PromoKind;
  days: number[]; // 0 = Sunday … 6 = Saturday
  title: string;
  short: string; // ticker / dice text
  price: string;
  was?: string;
  note?: string;
  link?: string;
  active: boolean;
}

export const promotions: Promotion[] = [
  // Entry deals
  { id: 'mon-pc', kind: 'entry', days: [1], title: 'Unlimited PC gaming', short: 'PC unlimited', price: '$16', note: 'Play all night on the gaming PCs for one price.', link: '/#play', active: true },
  { id: 'tue-student', kind: 'entry', days: [2], title: 'Student Day', short: 'Student Day', price: '$15', was: '$30', note: 'With student ID.', active: true },
  { id: 'wed-girls', kind: 'entry', days: [3], title: 'Girls Night', short: 'Girls Night, free entry', price: 'Free entry', note: 'No entrance fee for girls.', active: true },
  { id: 'wed-pc', kind: 'entry', days: [3], title: 'Unlimited PC gaming', short: 'PC unlimited', price: '$16', note: 'Play all night on the gaming PCs for one price.', link: '/#play', active: true },
  { id: 'thu-unlimited', kind: 'entry', days: [4], title: 'Unlimited Game Night', short: 'Unlimited Game Night', price: '$20', was: '$30', note: 'Every game, all night.', active: true },
  { id: 'fri-pass', kind: 'entry', days: [5], title: 'Unlimited access', short: 'Unlimited pass', price: '$30', note: 'Every game, all night.', active: true },
  { id: 'sat-pass', kind: 'entry', days: [6], title: 'Unlimited access', short: 'Unlimited pass', price: '$30', note: 'Every game, all night.', active: true },
  { id: 'sun-student', kind: 'entry', days: [0], title: 'Student Day', short: 'Student Day', price: '$15', was: '$30', note: 'With student ID.', active: true },
  // gameplex.ca/events: "Running Mafia Night is ON! 6 PM – 2 AM (booking required, groups of 10)"
  { id: 'mafia-night', kind: 'event', days: [0, 1, 2, 3, 4, 5, 6], title: 'Mafia Night', short: 'Mafia Night', price: '$20', note: 'Gather your crew of 10 for two rounds of Running Mafia. Includes 1 drink (beer, tea, or coffee). Booking required.', link: '/events', active: true },

  // Food and drink specials
  { id: 'mon-wings', kind: 'food', days: [1], title: 'Wings & Beer', short: '4 pc wings + beer', price: '$14.99', link: '/food-menu', active: true },
  { id: 'tue-tenders', kind: 'food', days: [2], title: 'Chicken tenders', short: 'Chicken tenders', price: '$15.99', link: '/food-menu', active: true },
  { id: 'wed-cocktail', kind: 'drink', days: [3], title: 'Cocktail day', short: 'Cocktail day', price: '$9.99', link: '/food-menu', active: true },
  { id: 'thu-wings', kind: 'food', days: [4], title: 'Wings & Beer', short: '4 pc wings + beer', price: '$14.99', link: '/food-menu', active: true },
  { id: 'fri-milkshake', kind: 'drink', days: [5], title: 'Milkshake day', short: 'Milkshake day', price: '$10.99', note: 'Except GP Bomb.', link: '/food-menu', active: true },
  { id: 'sat-tequila', kind: 'drink', days: [6], title: 'Tequila Sunrise', short: 'Tequila Sunrise', price: '$9.99', link: '/food-menu', active: true },
  { id: 'sun-wings', kind: 'food', days: [0], title: 'Wings & Beer', short: '4 pc wings + beer', price: '$14.99', link: '/food-menu', active: true },
];

export const kindLabel: Record<PromoKind, string> = {
  entry: 'Entry deal',
  food: 'Food special',
  drink: 'Drink special',
  event: 'Tonight’s event',
};
