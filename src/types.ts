export type ViewType = 'home' | 'about' | 'menu' | 'gallery' | 'contact' | 'owner' | 'journal' | 'founder-detail';

export interface FounderWorkItem {
  role: string;
  organization: string;
  duration?: string;
  details?: string;
}

export interface FounderEducationItem {
  institution: string;
  details?: string;
  year?: string;
}

export interface FounderProfile {
  id: string;
  order: number;
  name: string;
  displayName: string;
  role: string;
  image: string;
  fallbackImage?: string;
  bio: string;
  motto: string;
  mottoHashtags?: string[];
  livesIn: string;
  from: string;
  birthday?: string;
  relationshipStatus?: string;
  gender?: string;
  family?: string;
  phone?: string;
  instagram?: string;
  instagramUrl?: string;
  linkedin?: string;
  linkedinUrl?: string;
  Linkdin?: string;
  LinkdinUrl?: string;
  friendsCount?: string;
  mutualCount?: string;
  work: FounderWorkItem[];
  education: FounderEducationItem[];
  story: string;
  philosophy: string;
  zenRoleDescription: string;
  favoriteDrink: string;
  favoriteDrinkId?: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: 'coffee' | 'juice';
  description: string;
  tag?: string;
  image: string;
  highlights?: string[];
  isSeasonal?: boolean;
}

export interface JournalPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  full: string;
  category: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  caption: string;
  image: string;
  category: 'interior' | 'juice' | 'coffee' | 'culture';
  spanTwo?: boolean;
}
