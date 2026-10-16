export interface TimelineEvent {
  year: string;
  title: string;
  location: string;
  description: string;
  highlight: string;
  tag: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  subname: string;
  category: 'classic' | 'zero' | 'flavor' | 'diet';
  calories: string;
  sugar: string;
  description: string;
  accentColor: string;
  textColor: string;
  badge: string;
  flavorNotes: string[];
  formats: string[];
  image?: string;
}

export interface StoreLocation {
  id: string;
  name: string;
  category: 'supermarket' | 'convenience' | 'dining' | 'theater';
  address: string;
  city: string;
  zip: string;
  distance: string;
  openUntil: string;
  status: 'In Stock' | 'Limited Stock';
  stockItems: string[];
  phone: string;
}
