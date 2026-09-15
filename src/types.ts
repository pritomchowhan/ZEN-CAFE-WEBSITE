export type ViewType = 'home' | 'about' | 'menu' | 'gallery' | 'contact' | 'owner' | 'founder-detail';

export interface FounderWorkItem {
  role: string;
  organization: string;
  organizationUrl?: string;
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
  mottoDetails?: string;
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
  facebookUrl?: string;
  linkedin?: string;
  linkedinUrl?: string;
  Linkdin?: string;
  LinkdinUrl?: string;
  friendsCount?: string;
  mutualCount?: string;
  work: FounderWorkItem[];
  education: FounderEducationItem[];
  storyTitle?: string;
  story: string;
  storyClosing?: string;
  philosophy: string;
  zenRoleDescription: string;
  favoriteDrink: string;
  favoriteDrinkId?: string;
}

export type MenuCategory = 'coffee' | 'cold-drinks' | 'tea' | 'breakfast' | 'desserts' | 'specials';

export type MenuLabel = 'Popular' | 'New' | 'Vegetarian' | "Chef's Choice";

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  category: MenuCategory;
  description: string;
  tag?: string;
  label?: MenuLabel;
  image: string;
  highlights?: string[];
  isSeasonal?: boolean;
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
  category: 'interior' | 'juice' | 'coffee' | 'tea' | 'culture';
  spanTwo?: boolean;
}
