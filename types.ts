
export interface Feature {
  title: string;
  description: string;
  icon: string;
  playUrl?: string; 
}

export interface SubProject {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  playUrl: string;
  icon?: string;
}

export interface ProjectDetail {
  heroImage: string;
  videoUrl?: string;
  fullDescription: string;
  features: Feature[];
  subProjects?: SubProject[]; // Pour le format "Package" vu en screenshot
  ctaText: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  objective: string;
  description: string;
  imageUrl: string;
  target: string;
  aspect?: 'vertical' | 'horizontal'; 
  playUrl?: string; 
  details?: ProjectDetail;
}

export interface Expertise {
  title: string;
  items: string[];
  icon: string;
}
