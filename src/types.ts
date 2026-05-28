export interface Service {
  id: string;
  title: string;
  title_id?: string;
  description: string;
  longDescription: string;
  iconName: string;
  features: string[];
}

export interface Package {
  id: string;
  title: string;
  subtitle?: string;
  price: string;
  pricePeriod?: string;
  features: string[];
  recommended: boolean;
  ctaText: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  university: string;
  scholarship: string;
  text: string;
  avatarUrl: string;
  flag?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface Scholarship {
  id: string;
  name: string;
  provider: string;
  type: 'Dalam Negeri' | 'Luar Negeri' | 'Bebas';
  coverage: string;
  gpamin: number;
  ieltsmin: number | null;
  targetCountries: string[];
  link: string;
}
