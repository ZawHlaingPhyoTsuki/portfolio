import type { IconSvgElement } from '@hugeicons/react';

export interface NavLink {
  href: string;
  label: string;
}

export interface Experience {
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  period: string;
  description: string[];
  technologies: string[];
  image?: string;
}

export interface Education {
  period: string;
  degree: string;
  school: string;
  campus?: string;
}

export type HighlightCategory = 'work' | 'builds' | 'community';

export interface Highlight {
  category: HighlightCategory;
  period: string;
  title: string;
  description: string;
  image: string;
  href?: string;
  hrefLabel?: string;
}

export interface Project {
  title: string;
  role: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface TechItem {
  name: string;
  icon?: IconSvgElement;
}

export interface Certification {
  date: string;
  name: string;
  issuer: string;
  credentialId?: string;
  url?: string;
}

export interface Hobby {
  content: string;
  tags: string[];
}

export interface ContactMethod {
  icon: IconSvgElement;
  title: string;
  description: string;
  value: string;
  href?: string;
}
