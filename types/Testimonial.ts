export interface Testimonial {
  id: string;
  author: string;
  content: string;
  rating: number;
  location: string;
  avatar: string;
  project?: string;
}