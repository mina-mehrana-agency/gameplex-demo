// Food and drink menu, typed from the client's menu boards on gameplex.ca/food-menu (Nov 2026).
// Spelling fixed only (Mozzarella, Mustard, Cheese, Chocolate, Scoops, Nutella); prices as printed.
// At staging: Sanity `menuItem` documents (name, price, description, section, image, available,
// squareItemId). `squareItemId` is the hook for online ordering later.

export interface MenuItem {
  id: string;
  name: string;
  price?: string;
  desc?: string;
  img?: string;
  available?: boolean; // false = sold out tonight
  dealIds?: string[]; // promotions that apply to this item
  squareItemId?: string;
}
export interface MenuSection { id: string; title: string; group: 'food' | 'cafe' | 'bar'; note?: string; img?: string; dealIds?: string[]; items: MenuItem[] }

const i = (id: string, name: string, price?: string, desc?: string, extra: Partial<MenuItem> = {}): MenuItem => ({ id, name, price, desc, available: true, ...extra });

export const menuGroups = [
  { id: 'food', label: 'Food', icon: 'food' },
  { id: 'cafe', label: 'Café', icon: 'drink' },
  { id: 'bar', label: 'Bar', icon: 'drink' },
] as const;

export const menu: MenuSection[] = [
  {
    id: 'chef', title: 'Chef specials', group: 'food', img: '/img/menu/lasagna.webp', items: [
      i('lasagna', 'Lasagna', '19.99', 'Ground meats and tomato sauce, béchamel sauce, vegetables, mozzarella, and Parmesan, seasonings and spices and pasta.', { img: '/img/menu/lasagna.webp' }),
      i('bandari', 'Bandari', '19.99', 'Iranian fast-food, usually served in sandwich shops in Iran in the form of a sub. The main ingredients include sliced sausage, sliced onions, tomato, and ground chilli.', { img: '/img/menu/bandari.webp' }),
      i('mexican-corn', 'Mexican Corn', '9.99', 'Creamy Iranian street food inspired by Mexican elote. Sweet corn and sliced mushrooms are cooked with butter, tossed with mayonnaise, lime juice, and a blend of salt, pepper, thyme, oregano, and garlic powder.', { img: '/img/menu/mexican-corn.webp' }),
    ],
  },
  {
    id: 'fries-salad', title: 'Fries & Salad', group: 'food', img: '/img/menu/salad.webp', items: [
      i('fries', 'Fries', '9.99'),
      i('fries-plex', 'Fries Plex', '18.99', 'Fries, mushroom, jambon, green pepper, cheese'),
      i('caesar', 'Caesar Salad', '14.99', 'Romaine lettuce, croutons, olives, parmesan. Add grilled or crispy chicken +5.99'),
      i('greek', 'Greek Salad', '15.99', 'Romaine lettuce, tomato, cucumber, olives, onion, feta cheese. Add grilled or crispy chicken +5.99'),
    ],
  },
  {
    id: 'chicken', title: 'Chicken Bar', group: 'food', img: '/img/menu/wings.webp', items: [
      i('wings', 'Chicken Wings', '18.95', 'Sauces: BBQ, Hot, Garlic Parm, Honey Garlic', { img: '/img/menu/wings.webp', dealIds: ['mon-wings', 'thu-wings', 'sun-wings'] }),
      i('tenders', 'Chicken Tenders (with fries)', '19.95', 'White meat chicken tenders, hand-breaded', { dealIds: ['tue-tenders'] }),
      i('panini', 'Chicken Panini (with fries)', '20.99', 'Grilled chicken, mushroom, Alfredo sauce, mozzarella, pressed to perfection'),
      i('crispy-sandwich', 'Crispy Chicken Sandwich (with fries)', '16.99', 'Crispy chicken, lettuce, tomatoes, pickles, mayonnaise'),
    ],
  },
  {
    id: 'beef', title: 'Beef Bar', group: 'food', note: 'Make it a combo +$4.99', img: '/img/menu/burger.webp', items: [
      i('cheeseburger', 'Cheese Burger', '14.99', 'Grilled beef patty, melted cheddar cheese, lettuce, tomato, pickles, signature sauce, toasted bun', { img: '/img/menu/burger.webp' }),
      i('hotdog', 'Monster Hotdog', '23.99', 'Smoked beef sausage, melted mozzarella cheese, mushroom, chips, pickles, signature sauce'),
      i('philly', 'Philly Steak', '23.99', 'Thinly sliced ribeye steak sautéed with onions and bell peppers, topped with melted Swiss cheese and served with our signature sauce.'),
    ],
  },
  {
    id: 'persian', title: 'Persian Snack', group: 'food', note: 'Make it a combo +$4.99', img: '/img/menu/persian-snack.webp', items: [
      i('ps-special', 'Special', '12.99', '(4 pcs) Jambon, green pepper, mushroom, mozzarella', { img: '/img/menu/persian-snack.webp' }),
      i('ps-veggie', 'Veggie', '11.99', '(4 pcs) Green pepper, onion, olives, mustard, bell pepper, mushroom, mozzarella'),
      i('ps-chicken', 'Grilled Chicken', '14.99', '(4 pcs) Grilled chicken breast, green pepper, mushroom, mozzarella'),
      i('ps-philly', 'Philly Steak', '15.99', '(4 pcs) Philly steak, green pepper, mushroom, mozzarella'),
    ],
  },
  {
    id: 'flatbread', title: 'Flatbread (Pizza)', group: 'food', img: '/img/menu/flatbread.webp', items: [
      i('fb-special', 'Special', '17.99', 'Jambon, mushroom, green pepper, mozzarella', { img: '/img/menu/flatbread.webp' }),
      i('fb-veggie', 'Veggie', '14.99', 'Mushroom, green pepper, onion, olives, mozzarella'),
      i('fb-chicken', 'Chicken', '18.99', 'Grilled chicken breast, mushroom, green pepper, mozzarella'),
      i('fb-philly', 'Philly Steak', '19.99', 'Philly steak, mushroom, green pepper, mozzarella'),
    ],
  },
  {
    id: 'pasta', title: 'Pasta', group: 'food', img: '/img/menu/pasta.webp', items: [
      i('alfredo', 'Penne Alfredo', '20.99', 'Penne pasta, grilled chicken, creamy Alfredo sauce, mushroom, parmesan', { img: '/img/menu/pasta.webp' }),
    ],
  },
  {
    id: 'dessert', title: 'Dessert', group: 'cafe', img: '/img/menu/waffle.webp', items: [
      i('waffle', 'Waffle with 2 toppings', '16.00', 'Add a topping for $1', { img: '/img/menu/waffle.webp' }),
      i('choc-dip', 'Chocolate Dip n Fruit', '11.00'),
      i('baklava', 'Baklava', '5.99'),
      i('cake', 'Cake', undefined, 'Pistachio, Tiramisu, Chocolate, Cheese'),
      i('icecream', 'Ice cream (2 scoops)', '4.49', 'Toppings: chocolate chips, sugar powder, M&Ms, Nutella, chocolate sauce, whipped cream, ice cream, strawberry, banana, maple syrup, honey'),
    ],
  },
  {
    id: 'coffee', title: 'Coffee & Tea', group: 'cafe', img: '/img/menu/latte.webp', items: [
      i('espresso', 'Espresso (hot/ice)', '3.99'),
      i('americano', 'Americano (hot/ice)', '4.49'),
      i('americano-dalgona', 'Americano Dalgona', '5.99'),
      i('orange-coffee', 'Orange Coffee', '4.99'),
      i('vanilla-latte', 'Vanilla Latte', '7.99'),
      i('caramel-latte', 'Caramel Latte', '7.99'),
      i('pumpkin-latte', 'Pumpkin Spice Latte', '7.99'),
      i('cinnamon-latte', 'Cinnamon Dolce Latte', '7.99'),
      i('dalgona-latte', 'Dalgona Latte', '7.99'),
      i('caramel-macchiato', 'Caramel Macchiato', '7.99'),
      i('cappuccino', 'Cappuccino', '7.99', undefined, { img: '/img/menu/latte.webp' }),
      i('mochaccino', 'Mochaccino', '7.99'),
      i('milk-tea', 'Milk Tea', '4.99'),
      i('black-tea', 'Black Tea', '4.49'),
      i('green-tea', 'Green Tea', '4.49'),
      i('masala', 'Masala', '6.99'),
      i('hot-chocolate', 'Hot Chocolate', '7.99'),
      i('mint-chocolate', 'Mint Chocolate', '7.99'),
      i('gol-gav-zaban', 'Gol Gav Zaban (herbal)', '7.99'),
      i('saffron-khakshir', 'Saffron Khakshir (ice)', '6.99'),
      i('sekanjebin', 'Sekanjebin Khiar (ice)', '6.99'),
      i('sourcherry-drink', 'Sour Cherry Drink (ice)', '6.99'),
    ],
  },
  {
    id: 'smoothie', title: 'Smoothies', group: 'cafe', img: '/img/menu/smoothie.webp', items: [
      i('sm-strawberry', 'Strawberry', '11.99', undefined, { img: '/img/menu/smoothie.webp' }),
      i('sm-banana', 'Banana', '11.99'),
      i('sm-berries', 'Mix Berries', '11.99'),
      i('sm-mango', 'Mango', '11.99'),
      i('sm-sourcherry', 'Sour Cherry', '11.99'),
    ],
  },
  {
    id: 'shake', title: 'Shakes', group: 'cafe', img: '/img/menu/shake.webp', note: 'Friday is Milkshake Day: $10.99 (except GP Bomb)', items: [
      i('gp-bomb', 'Gameplex Bomb', '15.99', 'Pistachio, banana, coconut, Oreo, chocolate, Nutella bar', { img: '/img/menu/shake.webp' }),
      i('sh-nutella', 'Nutella', '12.99', undefined, { dealIds: ['fri-milkshake'] }),
      i('sh-oreo', 'Oreo', '12.99', undefined, { dealIds: ['fri-milkshake'] }),
      i('sh-kitkat', 'KitKat', '12.99', undefined, { dealIds: ['fri-milkshake'] }),
      i('sh-pistachio', 'Pistachio', '13.99', undefined, { dealIds: ['fri-milkshake'] }),
      i('sh-banana', 'Banana', '12.99', undefined, { dealIds: ['fri-milkshake'] }),
      i('sh-strawberry', 'Strawberry', '12.99', undefined, { dealIds: ['fri-milkshake'] }),
      i('sh-mango', 'Mango', '12.99', undefined, { dealIds: ['fri-milkshake'] }),
      i('sh-berries', 'Mix Berries', '12.99', undefined, { dealIds: ['fri-milkshake'] }),
      i('sh-caramel', 'Caramel', '10.99', undefined, { dealIds: ['fri-milkshake'] }),
      i('sh-chocolate', 'Chocolate', '10.99', undefined, { dealIds: ['fri-milkshake'] }),
      i('sh-espresso', 'Espresso', '12.99', undefined, { dealIds: ['fri-milkshake'] }),
    ],
  },
  {
    id: 'other-drinks', title: 'Other drinks', group: 'cafe', items: [
      i('istak', 'Istak Fizzy Drink', '4.99', 'Peach, Apple, Mango, Lemon and more'),
      i('lemonade', 'Lemonade', '4.99'),
      i('mango-juice', 'Mango Juice', '4.99'),
      i('ginger-juice', 'Ginger Juice', '4.99'),
      i('pina-colada', 'Piña Colada Juice', '4.99'),
      i('orange-juice', 'Orange Juice', '4.99'),
      i('pops', 'Pops', '2.50'),
      i('ice-tea', 'Ice Tea', '2.50'),
    ],
  },
  {
    id: 'snacks', title: 'Snacks', group: 'cafe', img: '/img/menu/chips.webp', note: '2.99 each', items: [
      i('kitkat', 'KitKat', '2.99'), i('loacker', 'Loacker', '2.99'), i('oreo', 'Oreo', '2.99'),
      i('nutella-bar', 'Nutella Bar', '2.99'), i('cheetos', 'Cheetos', '2.99'), i('ferrero', 'Ferrero Rocher Chocolate', '2.99'),
      i('chips', 'Chips', '2.99', undefined, { img: '/img/menu/chips.webp' }), i('popcorn', 'Popcorn', '2.99'),
    ],
  },
  {
    id: 'cocktails', title: 'Signature cocktails', group: 'bar', note: 'Wednesday is Cocktail Day: $9.99', items: [
      i('old-fashion', 'Old Fashioned', undefined, 'Whiskey, bitter, orange peel, soda water', { dealIds: ['wed-cocktail'] }),
      i('manhattan', 'Manhattan', undefined, 'Whiskey, sweet vermouth, orange peel, soda water', { dealIds: ['wed-cocktail'] }),
      i('moscow-mule', 'Moscow Mule', undefined, 'Vodka, lime juice, ginger beer, lime wedge', { dealIds: ['wed-cocktail'] }),
      i('irish-kiss', 'Irish Kiss', undefined, 'Vodka, Kahlua, Baileys, cream', { dealIds: ['wed-cocktail'] }),
      i('margarita', 'Margarita', undefined, 'Tequila, triple sec, lime juice, simple syrup', { dealIds: ['wed-cocktail'] }),
      i('tequila-sunrise', 'Tequila Sunrise', undefined, 'Tequila, orange juice, grenadine, orange slice', { dealIds: ['wed-cocktail', 'sat-tequila'] }),
      i('negroni', 'Negroni', undefined, 'Gin, Campari, sweet vermouth, orange peel', { dealIds: ['wed-cocktail'] }),
      i('sidecar', 'Sidecar', undefined, 'Cognac, lemon juice, triple sec, orange peel', { dealIds: ['wed-cocktail'] }),
      i('sangria', 'Red Sangria', undefined, 'Red wine, Disaronno, orange juice, soda water', { dealIds: ['wed-cocktail'] }),
      i('lemoncello', 'Lemoncello', undefined, 'Vodka, lemoncello, lemon juice, lemon wheel', { dealIds: ['wed-cocktail'] }),
      i('espresso-martini', 'Espresso Martini', undefined, 'Espresso, vodka, Kahlua, coffee beans', { dealIds: ['wed-cocktail'] }),
    ],
  },
  {
    id: 'beer', title: 'Beer', group: 'bar', items: [
      i('stella', 'Stella', '7.49'), i('heineken', 'Heineken', '7.49'), i('corona', 'Corona', '7.49'),
      i('budweiser', 'Budweiser', '7.49'), i('guinness', 'Guinness', '8.49'), i('boneshaker', 'Boneshaker', '8.49'),
    ],
  },
  {
    id: 'spirits', title: 'Spirits (1 oz)', group: 'bar', items: [
      i('smirnoff', 'Smirnoff', '6', 'Vodka'), i('grey-goose', 'Grey Goose', '10', 'Vodka'), i('belvedere', 'Belvedere', '10', 'Vodka'),
      i('titos', 'Tito’s', '7', 'Vodka'), i('snow-allure', 'Snow Allure', '7', 'Vodka'),
      i('jd', 'JD', '9', 'Whiskey'), i('jw-red', 'J.W Red', '9', 'Whiskey'), i('jw-black', 'J.W Black', '11', 'Whiskey'),
      i('jw-double-black', 'J.W Double Black', '14', 'Whiskey'), i('glenfiddich', 'Glenfiddich', '14', 'Whiskey'),
      i('chivas', 'Chivas Regal', '10', 'Whiskey'), i('crown-royal', 'Crown Royal', '8', 'Whiskey'), i('jameson', 'Jameson', '8', 'Whiskey'),
      i('1800-blanco', '1800 Blanco', '7', 'Tequila'), i('1800-anejo', '1800 Añejo', '8', 'Tequila'), i('1800-reposado', '1800 Reposado', '8', 'Tequila'),
      i('sauza-silver', 'Sauza Silver', '7', 'Tequila'), i('sauza-gold', 'Sauza Gold', '8', 'Tequila'), i('jose-cuervo', 'Jose Cuervo', '7', 'Tequila'),
      i('jose-cuervo-gold', 'Jose Cuervo Gold', '8', 'Tequila'), i('don-julio', 'Don Julio Blanco', '14', 'Tequila'),
      i('captain-morgan', 'Captain Morgan', '6', 'Rum'),
      i('grand-marnier', 'Grand Marnier', '9', 'Cognac'), i('meukow', 'Meukow', '21', 'Cognac'), i('dusse', 'Dusse', '14', 'Cognac'), i('hennessy', 'Hennessy', '12', 'Cognac'),
      i('reids', 'Reid’s', '7', 'Gin'), i('bombay', 'Bombay Sapphire', '7', 'Gin'),
    ],
  },
  {
    id: 'bar-other', title: 'Other', group: 'bar', items: [
      i('tonic', 'Tonic Water', '3'), i('soju', 'Soju', '16.99'),
    ],
  },
];
