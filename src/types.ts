export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'starters' | 'mains' | 'desserts' | 'cocktails';
  image: string;
  tags?: string[];
  dietary?: ('GF' | 'V' | 'VG' | 'DF' | 'NF')[];
  winePairing?: string;
  sommelierNotes?: string;
  story?: string;
  isFeatured?: boolean;
}

export interface Chef {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  philosophy: string;
  accolades: string[];
}

export interface Review {
  id: string;
  name: string;
  role: 'VIP Guest' | 'Food Critic' | 'Regular Patron';
  date: string;
  rating: number;
  comment: string;
  dishRecommendation: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'interior' | 'plating' | 'cellar' | 'moments';
  image: string;
  description: string;
}

export type SeatingZone = 'Grand Velvet Salon' | 'The Obsidian Cellar' | 'Chefs Counter' | 'Crimson Terrace';

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: number;
  zone: SeatingZone;
  dietaryNotes?: string;
  specialOccasion?: 'Anniversary' | 'Birthday' | 'Business Dinner' | 'Date Night' | 'None';
  status: 'Confirmed' | 'Pending Verification';
}
