// Gallery photos from gameplex.ca/gallery (client's own photos).
// At staging: a Sanity gallery document (image + alt + caption) the client manages.
export interface Photo { src: string; alt: string; caption?: string; w?: number; h?: number; full?: string }

const p = (n: string, alt: string, caption: string, w = 1100, h = 825): Photo => ({ src: `/img/gallery/g${n}.webp`, alt, caption, w, h });

export const photos: Photo[] = [
  p('23', 'Friends playing Ticket to Ride in front of the board game shelves', 'Game night'),
  p('14', 'Players at the gaming PCs with headsets on', 'PC gaming'),
  p('09', 'A group playing Mafia around the round table', 'Mafia Night'),
  p('30', 'Retro Mortal Kombat arcade machine', 'Retro arcade', 1100, 731),
  p('02', 'Neon hallway with a glowing dice on the floor', 'The neon hall', 960, 1280),
  p('16', 'Group photo next to the ping pong table', 'Team night', 1100, 732),
  p('04', 'Friends playing a card game at a table', 'Card games', 1100, 1100),
  p('20', 'Row of gaming PC stations with lit-up cases', 'PC room', 960, 1280),
  p('05', 'Lounge with sofas, TVs and an arcade machine', 'Console lounge', 960, 1280),
  p('26', 'Long party table with masks on the wall', 'Private party'),
  p('13', 'Hands on a PS5 controller in front of the screen', 'PS5', 1100, 732),
  p('11', 'Friends playing Ticket to Ride at a table', 'Board games'),
  p('01', 'Mafia room with masks on the wall and a round table', 'Mafia room', 960, 1280),
  p('03', 'Board game lounge with yellow chairs and game shelves', 'Board game lounge', 960, 1280),
  p('06', 'Big group playing at a Mafia night', 'Mafia Night'),
  p('07', 'Wall art with plates and neon lines', 'Wall art', 1100, 731),
  p('08', 'Mafia room with the Gameplex neon sign', 'Mafia room', 1100, 732),
  p('10', 'Neon-lit hallway with glowing dice', 'The neon hall', 1100, 732),
  p('12', 'Neon wall art with candles and a piano', 'Piano corner', 1100, 732),
  p('15', 'Piano with candles in the lounge', 'Piano corner', 1100, 732),
  p('17', 'Large group event with a big screen', 'Group event', 1100, 619),
  p('18', 'Room lit in blue and purple neon', 'Neon room'),
  p('19', 'Dark lounge with neon lights', 'Lounge', 960, 1280),
  p('21', 'Big group photo in the PC room', 'Group event'),
  p('22', 'Friends playing a board game together', 'Board games'),
  p('24', 'Players at the gaming PCs', 'PC gaming'),
  p('25', 'Neon wall art and piano', 'Piano corner', 1100, 732),
  p('27', 'A group playing board games', 'Board games'),
  p('28', 'Party around the round table', 'Private party'),
  p('29', 'Desserts on the table with friends', 'Desserts'),
  p('31', 'Gaming PC stations with neon lights', 'PC room', 1100, 732),
  p('32', 'Gameplex logo with red hearts', 'Valentine’s at Gameplex', 1100, 1467),
  p('33', 'A group at a café table under the game wall art', 'Café', 1100, 619),
  p('34', 'Gameplex logo with hearts and lights', 'Valentine’s at Gameplex', 720, 1280),
];
