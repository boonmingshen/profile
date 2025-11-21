import { LucideIcon } from 'lucide-react';

export interface SocialLink {
  name: string;
  url: string;
  icon: LucideIcon;
  color: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
}