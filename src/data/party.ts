// Party levels shown by the guest slider and on the quote page.
// Source: gameplex.ca Book page (VIP Ultimate), /private-events-toronto (group packages),
// /corporate-perks (private event terms).
export const partyLevels = [
  {
    max: 6, label: 'LEVEL 1: CREW', name: 'VIP Game Lounge',
    text: 'Book the private VIP Lounge with PlayStation gaming, karaoke, darts and board games. $34 per hour for up to 2 guests, additional guests $4 per person, up to 6.',
    price: '$34 per hour', type: 'vip',
  },
  {
    max: 10, label: 'LEVEL 2: SQUAD', name: 'Group food & access packages',
    text: 'Each package includes Unlimited Game Access (up to 10 people / up to 3 hours) with flatbreads, fries, wings or salads and soft drinks.',
    price: 'from $349.99', type: 'party',
  },
  {
    max: 80, label: 'LEVEL 3: BOSS RAID', name: 'Private event',
    text: '80 guests in one flat-rate booking, 7 days a week upon your request. A 30% deposit holds your date, the rest is due 24 hours before.',
    price: 'Flat-rate quote', type: 'private',
  },
];

export const packages = [
  { name: 'Basic Package', price: '$349.99', includes: '5 Cheese Flatbreads, 2 Orders of Fries, 10 Soft Drinks.' },
  { name: 'Standard Package', price: '$399.99', includes: '5 Veggie or Special Flatbreads, 2 Orders of Fries, 10 Soft Drinks.' },
  { name: 'Premium Package', price: '$499.99', includes: '5 Orders of Wings, 5 Flatbreads (Cheese, Veggie, or Special), 5 Salads (Greek or Caesar), 10 Soft Drinks.' },
];

// The event types on the current gameplex.ca request form
export const eventTypes = [
  'Team Building',
  'Company Event',
  'Birthday Party',
  'Game Night with Friends',
  'Club or School Event',
  'Family Celebration',
  'Christmas Party',
  'Watch World Cup 2026',
];
