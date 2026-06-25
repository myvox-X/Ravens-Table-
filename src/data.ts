import { Dish, Chef, Review, GalleryItem } from './types';

// Let's reference the exact generated image URLs so Vite can bundle them perfectly.
export const HERO_IMAGE = '/src/assets/images/hero_luxury_restaurant_1782367771018.jpg';
export const CHEF_PORTRAIT = '/src/assets/images/chef_signature_portrait_1782367859436.jpg';

export const FEATURED_DISHES: Dish[] = [
  {
    id: 'f1',
    name: "Miyazaki A5 Wagyu Tenderloin",
    description: "Seared over Japanese binchotan, served with glazed seasonal chanterelles, rich bone-marrow-infused dark red wine reduction, and fresh shaved Périgord black truffles.",
    price: 185,
    category: 'mains',
    image: '/src/assets/images/dish_wagyu_beef_1782367793712.jpg',
    tags: ['Signature', 'Award Winning'],
    dietary: ['GF'],
    winePairing: "Château Margaux, 2012 Grand Cru",
    sommelierNotes: "The intense marbling of Miyazaki Wagyu requires a structured, tannin-rich Cabernet Sauvignon to cut through the richness and elevate the earthy truffle undertones.",
    story: "Crafted as an homage to the legendary beef masters of Miyazaki. The meat is quickly kissed by binchotan charcoal at 900°C, locking in a buttery, melt-in-the-mouth texture that is unrivaled globally.",
    isFeatured: true
  },
  {
    id: 'f2',
    name: "Bretonne Blue Lobster with Saffron",
    description: "Butter-poached blue lobster tail served with a delicate golden saffron-infused shellfish foam, Imperial Baeri caviar pearls, and edible 24k gold leaf flakes.",
    price: 145,
    category: 'mains',
    image: '/src/assets/images/dish_lobster_caviar_1782367815427.jpg',
    tags: ['Luxurious', 'Chef Special'],
    dietary: ['GF', 'NF'],
    winePairing: "Dom Pérignon, Vintage 2013",
    sommelierNotes: "A toasted, brioche-driven Champagne provides a refreshing acid spine and fine bubbles that dance beautifully with the creaminess of the saffron foam and the salty snap of caviar.",
    story: "The Bretonne Blue Lobster is wild-caught from the cold waters of Brittany. Poached slowly in grass-fed French butter at precisely 54°C to preserve its delicate, sweet, and firm texture.",
    isFeatured: true
  },
  {
    id: 'f3',
    name: "The Eclipse Sphère Noir",
    description: "A dark chocolate shell drizzled tableside with hot crimson raspberry coulis, melting to reveal a champagne-infused Valrhona chocolate mousse, gold-flecked sponge cake, and wild berries.",
    price: 32,
    category: 'desserts',
    image: '/src/assets/images/dish_chocolate_dome_1782367835903.jpg',
    tags: ['Sensory', 'Signature'],
    dietary: ['V', 'GF'],
    winePairing: "Taylor's 20-Year-Old Tawny Port",
    sommelierNotes: "The rich complexity of the Valrhona chocolate and acidity of the raspberries are met beautifully by the dried fruit and nutty layers of a high-quality aged tawny port.",
    story: "An interactive, theatrical dessert representing our namesake. The melting of the obsidian sphere mimics a solar eclipse, revealing a vibrant red velvet interior that is as rich as it is breathtaking.",
    isFeatured: true
  }
];

export const ALL_DISHES: Dish[] = [
  ...FEATURED_DISHES,
  {
    id: 's1',
    name: "Truffle Beef Carpaccio",
    description: "Paper-thin slices of prime Black Angus tenderloin, white truffle oil, shaved pecorino, toasted pine nuts, and micro-arugula.",
    price: 38,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    tags: ['Classic'],
    dietary: ['GF'],
    winePairing: "Barolo DOCG, Gaja 2018",
    sommelierNotes: "Earth meets earth. Barolo's high acidity and firm structure complement the savory beef and luxurious truffle oils perfectly."
  },
  {
    id: 's2',
    name: "Pan-Seared Hokkaido Scallops",
    description: "U10 scallops over a smooth parsnip purée, crispy jamón ibérico crumbles, and citrus-vanilla brown butter drizzle.",
    price: 44,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1532636875304-0c8fe119fa9e?w=800&q=80',
    tags: ['Fresh Import'],
    dietary: ['GF', 'NF'],
    winePairing: "Chablis Premier Cru, 2020",
    sommelierNotes: "Stony minerality and sharp green apple notes cut beautifully through the richness of the brown butter and parsnip."
  },
  {
    id: 's3',
    name: "Charcoal Roasted Octopus",
    description: "Bravas-spiced Spanish octopus, saffron potato foam, chorizo oil, pickled pearl onions, and smoked sea salt.",
    price: 42,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80',
    tags: ['Popular'],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: "Vermentino di Sardegna, 2021",
    sommelierNotes: "A dry, salty-air Mediterranean white that matches the charred, oceanic character of caramelized octopus."
  },
  {
    id: 's4',
    name: "Heirloom Beetroot & Goat Cheese Tart",
    description: "Carpaccio of roasted baby beets, whipped goat cheese cream, caramelized figs, walnut crust, and aged dark balsamic glaze.",
    price: 34,
    category: 'starters',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
    dietary: ['V'],
    winePairing: "Sancerre, Sauvion 2021",
    sommelierNotes: "High-acid Sancerre matches the tanginess of the goat cheese and balances the sweet earthiness of roasted heirloom beets."
  },
  {
    id: 'm3',
    name: "Crisp Skin Atlantic Black Cod",
    description: "Glazed in sweet organic miso, served over baby bok choy, dashi-infused wild rice, ginger-lemongrass broth, and micro-cilantro.",
    price: 68,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80',
    tags: ['Delicate'],
    dietary: ['GF', 'DF', 'NF'],
    winePairing: "Puligny-Montrachet, Burgundy 2019",
    sommelierNotes: "Rich, lightly oaked Chardonnay stands up to the sweet umami of the miso glaze while celebrating the buttery fish."
  },
  {
    id: 'm4',
    name: "Dry-Aged Challans Duck Breast",
    description: "14-day dry-aged duck breast, cherry-lavender gastrique, velvet sweet potato purée, and roasted baby endives.",
    price: 72,
    category: 'mains',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
    dietary: ['GF', 'NF'],
    winePairing: "Gevrey-Chambertin, Pinot Noir 2017",
    sommelierNotes: "Rich game meat paired with classic high-end red Burgundy. Cherries in the wine echo the gastrique perfectly."
  },
  {
    id: 'd2',
    name: "Warm Raspberry & Saffron Soufflé",
    description: "Classic airy French soufflé made with premium local red raspberries, baked fresh and accompanied by white chocolate-saffron ice cream.",
    price: 26,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=800&q=80',
    dietary: ['V', 'NF'],
    winePairing: "Sauternes, Château d'Yquem 2015",
    sommelierNotes: "The ultimate pairing. The luscious sweetness and stone fruit aromas of Sauternes lift the berry's natural tartness."
  },
  {
    id: 'd3',
    name: "Champagne & Gold Panna Cotta",
    description: "Silky Madagascar vanilla bean cream set with vintage champagne gelée, fresh wild blackberries, and a delicate spun-sugar nest.",
    price: 24,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80',
    dietary: ['V', 'GF', 'NF'],
    winePairing: "Moscato d'Asti, Elio Perrone 2022",
    sommelierNotes: "Light fizz, grape notes, and low alcohol keep this dessert incredibly clean and elegant."
  },
  {
    id: 'c1',
    name: "The Crimson Elixir",
    description: "Smoky Mezcal Union combined with fresh blood orange juice, dark cherry liqueur, organic hibiscus nectar, and black volcano salt rim.",
    price: 28,
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80',
    tags: ['Signature Drink', 'Smoked'],
    dietary: ['VG', 'GF', 'NF'],
    winePairing: "Sipped alongside Truffle Beef Carpaccio",
    sommelierNotes: "Bold mezcal smoke and blood orange punch mirror the intensity of cured beef and deep truffle."
  },
  {
    id: 'c2',
    name: "Obsidian Smoked Old Fashioned",
    description: "High West double-rye whiskey, orange bitters, organic maple sap, cold-smoked with real cherrywood chips tableside under a glass cloche.",
    price: 30,
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80',
    tags: ['Interactive', 'Strong'],
    dietary: ['VG', 'GF', 'NF'],
    winePairing: "Complements Miyazaki A5 Wagyu",
    sommelierNotes: "The smokiness from cherrywood coordinates wonderfully with grilled charcoal meat profiles."
  },
  {
    id: 'c3',
    name: "Empress Crimson Negroni",
    description: "Empress 1908 Gin, sweet vermouth infused with dried rose petals, Campari, garnished with dry ice for a mysterious slow-flowing mist.",
    price: 26,
    category: 'cocktails',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
    tags: ['Theatrical'],
    dietary: ['VG', 'GF', 'NF'],
    winePairing: "Sipped alongside Hokkaido Scallops",
    sommelierNotes: "Bittersweet notes and floral rose botanicals clean the palate beautifully between rich shellfish courses."
  }
];

export const CHEFS: Chef[] = [
  {
    id: 'ch1',
    name: "Antoine Dubois",
    role: "Executive Culinary Director & Founder",
    bio: "With over two decades in three-Michelin-starred kitchens across Paris, Tokyo, and London, Chef Antoine launched L'Éclipse to fuse classical French gastronomy with progressive Japanese methods, emphasizing visual theatricality and dramatic flavor contracts.",
    image: CHEF_PORTRAIT,
    philosophy: "Gastronomy is not merely cooking; it is an intimate sensory performance. We work in the contrasts of shadow and light, using the deep crimson of berries and red wine against charcoal black backdrops to direct your complete emotional experience.",
    accolades: [
      "Voted Michelin Guide 'Chef of the Year' 2023",
      "Recipient of 3 Michelin Stars (2018 - 2025)",
      "Grand Master of Classical Gastronomy, Paris"
    ]
  },
  {
    id: 'ch2',
    name: "Marcella Rossi",
    role: "Head Pastry Artist",
    bio: "Marcella creates desserts that double as contemporary art installations. Formerly of Milan's famous Duomo Bistro, her pastry philosophy utilizes textures, smoke, temperature changes, and structural symmetry to deliver a lingering narrative.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
    philosophy: "Sweetness is one-dimensional without acidity, temperature shocks, and crisp textures. A dessert should surprise you on the third bite even more than the first.",
    accolades: [
      "World's Best Pastry Chef Nominee 2024",
      "Champion of Le Salon Du Chocolat, Milan"
    ]
  },
  {
    id: 'ch3',
    name: "Yuki Tanaka",
    role: "Chef de Cuisine",
    bio: "Yuki brings the strict precision of Tokyo's traditional Kappo and Kaiseki traditions. Specializing in dry-aging seafood and sourcing rare ingredients, he translates precision slicing and high-heat charcoal searing into visual poems.",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80",
    philosophy: "Ingredient purity is paramount. When we slice a Miyazaki Wagyu, our hand is guided by respect for the years of livestock breeding and the integrity of the fire.",
    accolades: [
      "Awarded 'Artisan of Fish Aging' by Tokyo Fish Council",
      "Executive Sous Chef at Ginza Kyubey (4 Years)"
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: "Julian Sterling",
    role: "Food Critic",
    date: "May 2026",
    rating: 5,
    comment: "An absolute masterclass in atmosphere and culinary precision. The Miyazaki A5 Wagyu at L'Éclipse is easily the finest dish I have eaten in a decade. The charcoal kiss is spectacular, and the wine pairings curated by their sommeliers are profoundly smart.",
    dishRecommendation: "Miyazaki A5 Wagyu Tenderloin"
  },
  {
    id: 'r2',
    name: "Elena Rostova",
    role: "VIP Guest",
    date: "June 2026",
    rating: 5,
    comment: "The Sphère Noir dessert left me completely speechless. The theatrical pouring of the hot raspberry sauce is visual art, but the champagne-infused mousse inside is pure culinary bliss. Perfect for my wedding anniversary.",
    dishRecommendation: "The Eclipse Sphère Noir"
  },
  {
    id: 'r3',
    name: "Sir Alistair Thorne",
    role: "Regular Patron",
    date: "April 2026",
    rating: 5,
    comment: "L'Éclipse has created a dark red and black sanctuary that makes you feel elite the moment you walk through the brass door. Service is invisible yet omnipresent. The smoked Old Fashioned under a glass dome is outstanding.",
    dishRecommendation: "Obsidian Smoked Old Fashioned"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: "The Crimson velvet Salon",
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?w=800&q=80',
    description: "Deep red velvet booths, polished black marble, and flickering candlelight creating an intimate, elite fine dining environment."
  },
  {
    id: 'g2',
    title: "Precision Plating",
    category: 'plating',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    description: "Our culinary artisans adding the final strokes of truffle oil and gold-leaf to the signature lobster plates."
  },
  {
    id: 'g3',
    title: "The Obsidian Wine Cellar",
    category: 'cellar',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    description: "Home to over 14,000 vintage labels, spanning French grand crus and rare Italian estates, cooled to precisely 12°C."
  },
  {
    id: 'g4',
    title: "The Sommelier's Pour",
    category: 'cellar',
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&q=80',
    description: "Perfectly aerated vintage Bourdeaux being decanted tableside by our lead sommelier."
  },
  {
    id: 'g5',
    title: "Binchotan Kiss",
    category: 'plating',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
    description: "Searing prime cuts over active Japanese oak charcoal to deliver that signature premium caramelization."
  },
  {
    id: 'g6',
    title: "The Main Dining Room",
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
    description: "Where modern dark architecture meets warm, romantic lights. An atmospheric marvel of dark red and shadow."
  }
];

export const SEATING_ZONES_INFO = [
  {
    id: 'zone-1',
    name: 'Grand Velvet Salon' as const,
    description: 'Surrounded by plush deep-red velvet booths, black lacquer accents, and grand chandeliers. Elegant, central, and ambient.',
    capacity: '1-8 guests',
    premiumCharge: 'No additional fee'
  },
  {
    id: 'zone-2',
    name: 'The Obsidian Cellar' as const,
    description: 'An intimate, glass-walled luxury sanctuary within our subterranean wine vault. Surrounded by legendary vintages.',
    capacity: '2-6 guests',
    premiumCharge: '$50 per guest (includes introductory Champagne pour)'
  },
  {
    id: 'zone-3',
    name: 'Chefs Counter' as const,
    description: 'High-backed leather stools directly overlooking Chef Yuki’s open fire line. Watch the culinary drama unfold live.',
    capacity: '1-2 guests',
    premiumCharge: '$100 per guest (includes chef-selected amuse-bouche)'
  },
  {
    id: 'zone-4',
    name: 'Crimson Terrace' as const,
    description: 'Our heated, glass-sheltered outdoor terrace with stunning city lights views. Features a striking glowing red fire-pit.',
    capacity: '1-4 guests',
    premiumCharge: 'No additional fee'
  }
];

export const AVAILABLE_HOURS = [
  "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"
];
