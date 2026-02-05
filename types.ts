
export interface Feature {
  title: string;
  description: string;
  icon: string;
  playUrl?: string; // Lien direct pour jouer au mini-jeu spécifique
}

export interface ProjectDetail {
  heroImage: string;
  videoUrl?: string;
  fullDescription: string;
  features: Feature[];
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
  aspect?: 'vertical' | 'horizontal'; // Ratio d'affichage préféré
  playUrl?: string; // Lien global pour jouer/télécharger le projet
  details?: ProjectDetail;
}

export interface Expertise {
  title: string;
  items: string[];
  icon: string;
}
