export interface ServiceItem {
  id: string;
  name: string;
  category: 'installation' | 'maintenance' | 'technical' | 'advisory';
  shortDescription: string;
  fullDescription: string;
  keyPoints: string[];
  icon: string;
  image?: string;
  suitableFor: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'maintenance' | 'troubleshooting' | 'control' | 'installation';
  caption: string;
  description: string;
  imagePath: string;
  isAuthenticWorksitePhoto: boolean; // Flag to distinguish verified worksite photo vs demonstration reference
  worksiteNote?: string;
  dateAdded?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'maintenance' | 'emergency';
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  preferredContact: 'Phone' | 'WhatsApp' | 'Email';
  serviceRequired: string;
  propertyType: string;
  propertyLocation: string;
  elevatorBrand: string;
  problemDescription: string;
  preferredDate: string;
  agreeToPrivacy: boolean;
}
