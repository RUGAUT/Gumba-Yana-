
import { Project, Expertise } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'yana',
    title: 'Yana',
    type: 'Application Ludo-éducative',
    objective: 'Apprendre nos langues, préserver notre culture.',
    description: "Wolof, Peulh, Sérère, Diola, Soninké... Redécouvrez la richesse du Sénégal avec Bayo, votre compagnon d'apprentissage.",
    imageUrl: './Yana.png',
    target: 'Diaspora, Jeunes, Voyageurs',
    playUrl: '#waitlist',
    details: {
      heroImage: './Yana.png',
      videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-1738-large.mp4',
      fullDescription: "Redécouvrez nos langues. Reconnectez-vous à votre culture. Yana propose une application simple, moderne et progressive pour maîtriser les langues nationales à travers des micro-leçons et des contenus créés par des linguistes.",
      features: [
        { title: "Micro-leçons", description: "Quelques minutes par jour pour progresser via quiz et répétitions.", icon: "📝" },
        { title: "Culture & Contexte", description: "Mini-histoires et proverbes illustrés pour découvrir les valeurs.", icon: "🎭" },
        { title: "Prononciation guidée", description: "S'entraîner à dire correctement les mots grâce à des voix natives.", icon: "🗣️" },
        { title: "Eutou Yana", description: "Espace communautaire pour pratiquer dans un cadre bienveillant.", icon: "🤝" }
      ],
      ctaText: "Rejoindre la liste d'attente"
    }
  },
  {
    id: 'sgns-serious-games',
    title: 'Serious Games SGNS',
    type: 'Projet Institutionnel',
    objective: 'Sensibilisation aux mines et à la géologie.',
    description: "Suite de serious games éducatifs conçus pour le Service Géologique National du Sénégal lors du SIM 2025.",
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1000&auto=format&fit=crop',
    target: 'Public Institutionnel, Étudiants',
    playUrl: 'https://itch.io/profile/gumba-yana',
    details: {
      heroImage: 'https://images.unsplash.com/photo-1517404212770-903f10165006?q=80&w=2000&auto=format&fit=crop',
      fullDescription: "Dans le cadre du SIM 2025, nous avons développé pour le Service Géologique National du Sénégal (SGNS) une suite de serious games interactifs.",
      features: [
        { title: "Quiz Mines", description: "Testez vos connaissances sur la géologie du Sénégal.", icon: "📝", playUrl: "https://quizz-sgns.my.canva.site/" },
        { title: "Associe le Minerai", description: "Mini-jeu de glisser-déposer reliant minerais et usages.", icon: "🔗", playUrl: "https://gumba-yana.itch.io/associe-le-minerai-son-utilite" },
        { title: "Puzzle Géologique", description: "Reconstitution de la carte minière en temps limité.", icon: "🧩", playUrl: "https://gumba-yana.itch.io/puzzle-gologique-sgsn" }
      ],
      ctaText: "Consulter le projet"
    }
  },
  {
    id: 'cax-caaxett',
    title: 'Cax Caaxett',
    type: 'Jeu Mobile Culturel',
    objective: 'Faire découvrir les cultures historiques du Sénégal.',
    description: "Voyage à travers les royaumes du Sénégal via des énigmes inspirées des proverbes et traditions.",
    imageUrl: './CaxCaxett.jpeg',
    target: 'Jeunes, Familles',
    playUrl: 'https://play.google.com/store/apps/details?id=com.GHS.CaxCaxett',
    details: {
        heroImage: './CaxCaxett.jpeg',
        fullDescription: "Cax Caaxett propose une immersion ludique dans les cultures historiques du Sénégal. Devine. Apprends. Découvre.",
        features: [
          { title: "Enigmes", description: "Basées sur les proverbes et mythes locaux.", icon: "🎭" },
          { title: "Héritage", description: "Découverte des royaumes et traditions.", icon: "🏯" },
          { title: "Incubation GHS", description: "Développé au Game Hub Sénégal.", icon: "🎮" }
        ],
        ctaText: "Voir sur le Play Store"
      }
  },
  {
    id: 'baobloom',
    title: 'BaoBloom',
    type: 'Jeu de Puzzle',
    objective: 'Valoriser la richesse agricole africaine.',
    description: "Jeu de fusion stratégique explorant la biodiversité de 5 pays africains. Fusionnez fruits et légumes pour découvrir des trésors agricoles !",
    imageUrl: './BaoBloom.jpeg',
    target: 'Grand Public, Casual',
    playUrl: 'https://play.google.com/store/apps/details?id=com.MarsIndustrie.BaoBloom',
    details: {
        heroImage: './BaoBloom.jpeg',
        fullDescription: "BaoBloom est un jeu de puzzle 'fusion' vibrant qui célèbre l'agriculture du continent. Combinez les fruits pour les faire grandir et explorez les marchés colorés du Sénégal, du Maroc et bien d'autres.",
        features: [
          { title: "Fusion Fruitée", description: "De la petite graine à la pastèque géante.", icon: "🍉" },
          { title: "Marchés d'Afrique", description: "Parcourez 5 nations à travers leurs récoltes.", icon: "🌍" },
          { title: "Art Pop & Coloré", description: "Une direction artistique unique et pétillante.", icon: "🎨" }
        ],
        ctaText: "Jouer à BaoBloom"
      }
  }
];

export const EXPERTISES: Expertise[] = [
  {
    title: 'Jeux de société & jeux vidéos',
    items: ['Jeux de plateau physiques', 'Jeux vidéo mobiles et PC', 'Expériences hybrides'],
    icon: '🎲'
  },
  {
    title: 'Serious Games',
    items: ['Jeux éducatifs et de sensibilisation', 'Simulations institutionnelles', 'Scénarios pédagogiques'],
    icon: '🎯'
  },
  {
    title: 'Applications Ludo-éducatives',
    items: ['Applications mobiles et web', 'Apprentissage par le jeu', 'Expériences inclusives'],
    icon: '📱'
  },
  {
    title: 'Gamification',
    items: ['Transformation de contenus', 'Mécaniques de motivation', 'Engagement de programmes'],
    icon: '⚡'
  },
  {
    title: 'Formations & Ateliers',
    items: ['Workshops gamifiés', 'Enfants, jeunes et adultes', 'Formation de professionnels'],
    icon: '🎓'
  },
  {
    title: 'Activités & Événements',
    items: ['Animations pédagogiques', 'Événements interactifs', 'Créations participatives'],
    icon: '🎭'
  }
];
