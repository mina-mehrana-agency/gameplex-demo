// Business identity. At staging this moves to Sanity siteSettings / siteHeader / siteFooter.
// Source: client prototype (Nov 2026) + current gameplex.ca.

export const site = {
  name: 'Gameplex',
  tagline: 'Board game café',
  phone: '(437) 933-3337',
  phoneHref: 'tel:+14379333337',
  smsHref: 'sms:+14379333337',
  email: 'gameplex.ca@gmail.com',
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/gameplex.ca' },
    { label: 'YouTube', href: 'https://www.youtube.com/@mafiatorontoproshot3528' },
  ],
  address: {
    street: '8403 Yonge Street, Unit 1A',
    city: 'Thornhill',
    region: 'ON',
    postal: 'L3T 6R2',
  },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gameplex+8403+Yonge+Street+Thornhill',
  mapEmbed: 'https://maps.google.com/maps?q=Gameplex%2C%208403%20Yonge%20Street%2C%20Thornhill%2C%20ON&z=15&output=embed',
  areas: 'Minutes from Richmond Hill, Vaughan, Markham, North York and Toronto.',
};

// day: 0 = Sunday … 6 = Saturday (JS getDay order)
export const hours = [
  { day: 1, label: 'Monday', time: '6 PM to 2 AM' },
  { day: 2, label: 'Tuesday', time: '6 PM to 2 AM' },
  { day: 3, label: 'Wednesday', time: '6 PM to 2 AM' },
  { day: 4, label: 'Thursday', time: '6 PM to 2 AM' },
  { day: 5, label: 'Friday', time: '6 PM to 2 AM' },
  { day: 6, label: 'Saturday', time: '5 PM to 2 AM' },
  { day: 0, label: 'Sunday', time: '5 PM to 2 AM' },
];

export const nav = [
  { label: 'Play', href: '/#play' },
  { label: 'Deals', href: '/#deals' },
  { label: 'Food menu', href: '/food-menu' },
  { label: 'Events', href: '/events' },
  { label: 'Board games', href: '/board-games-toronto' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Parties', href: '/request-for-private-events' },
];

export const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const dayShort = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
// Week shown starting Monday
export const weekOrder = [1, 2, 3, 4, 5, 6, 0];
