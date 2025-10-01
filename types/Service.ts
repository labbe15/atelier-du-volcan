export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'interior' | 'exterior' | 'stairs';
  priceRange: string;
  features: string[];
}