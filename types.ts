export type Page = 'home' | 'about' | 'menu' | 'gallery' | 'contact';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  image?: string;
  isVegetarian?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  category: 'food' | 'ambience' | 'events' | 'drinks';
  alt: string;
}