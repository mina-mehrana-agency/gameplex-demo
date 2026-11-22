// Board game library: three fields only (name, image, description).
// At staging: Sanity `boardGame` documents. The client adds games by hand in Studio or imports a CSV
// with the columns name,image,description (image = a URL; the importer uploads it to Sanity).
// The five below are samples with photos from Wikimedia Commons; the client adds the rest.

export interface BoardGame { name: string; image: string; description: string; credit?: string }

export const boardGames: BoardGame[] = [
  {
    name: 'Catan',
    image: '/img/games/catan.webp',
    description: 'Trade, build and settle the island of Catan. Collect wood, brick, wheat, sheep and ore, then race to 10 victory points. 3 to 4 players, about 60 minutes.',
    credit: 'Photo: Wikimedia Commons, CC BY-SA 4.0',
  },
  {
    name: 'Codenames',
    image: '/img/games/codenames.webp',
    description: 'Two teams, one-word clues. Spymasters guide their team to the right agents on the grid without touching the assassin. 4 to 8 players, about 15 minutes.',
    credit: 'Photo: Wikimedia Commons, CC BY-SA 3.0',
  },
  {
    name: 'Jenga',
    image: '/img/games/jenga.webp',
    description: 'Pull a block from the tower and stack it on top without knocking it over. Simple, loud and great for any group. 2 or more players, about 15 minutes.',
    credit: 'Photo: Wikimedia Commons, CC BY-SA 4.0',
  },
  {
    name: 'Scrabble',
    image: '/img/games/scrabble.webp',
    description: 'Build words on the board from your letter tiles and score with the bonus squares. A classic for word lovers. 2 to 4 players, about 60 minutes.',
    credit: 'Photo: Wikimedia Commons, CC0',
  },
  {
    name: 'Ticket to Ride',
    image: '/img/games/ticket-to-ride.webp',
    description: 'Collect train cards and claim railway routes across the map to connect cities before your rivals. 2 to 5 players, about 45 minutes.',
    credit: 'Photo: Wikimedia Commons, CC BY 2.0',
  },
];
