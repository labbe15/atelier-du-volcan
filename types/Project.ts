export interface Project {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  category: 'interior' | 'exterior';
  location: string;
  year: string;
  duration: string;
  materials?: string[];
}