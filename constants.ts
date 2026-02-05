
import { Project, Expertise } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'yana',
    title: 'Yana',
    type: 'Application Ludo-éducative',
    objective: 'Apprendre nos langues, préserver notre culture.',
    description: "Wolof, Peulh, Sérère, Diola, Soninké... Redécouvrez la richesse du Sénégal avec Bayo, votre compagnon d'apprentissage.",
    imageUrl: '/Yana.png',
    target: 'Diaspora, Jeunes, Voyageurs',
    aspect: 'vertical',
    playUrl: '#waitlist',
    details: {
      heroImage: '/Yana.png',
      fullDescription: "Redécouvrez nos langues. Reconnectez-vous à votre culture. Yana propose une application simple, moderne et progressive pour maîtriser les langues nationales à travers des micro-leçons et des contenus créés par des linguistes.",
      features: [
        { title: "Micro-leçons", description: "Quelques minutes par jour pour progresser via quiz et répétitions.", icon: "📝" },
        { title: "Culture & Contexte", description: "Mini-histoires et proverbes illustrés pour découvrir les valeurs.", icon: "🎭" },
        { title: "Prononciation guidée", description: "S'entraîner à dire correctement les mots grâce à des voix natives.", icon: "🗣️" }
      ],
      ctaText: "Rejoindre la liste d'attente"
    }
  },
  {
    id: 'guide-mineur-solo',
    title: 'Guide du Mineur',
    type: 'Serious Game',
    objective: 'Valoriser les richesses minières du Sénégal.',
    description: "Associez chaque minerai à son utilisation quotidienne dans ce serious game pédagogique conçu pour sensibiliser aux ressources du sous-sol.",
    imageUrl: '/GuideMineur.jpeg',
    target: 'Écoles, Étudiants, Grand Public',
    aspect: 'vertical',
    playUrl: 'https://gumba-yana.itch.io/associe-le-minerai-son-utilite',
    details: {
      heroImage: '/GuideMineur.jpeg',
      fullDescription: "Le Guide du Mineur est une expérience interactive où l'utilisateur doit relier les minerais extraits au Sénégal à leurs produits finis.",
      features: [
        { title: "Apprentissage Actif", description: "Mémorisez les ressources minières par l'association visuelle.", icon: "💎" },
        { title: "Fiches Info", description: "Découvrez les propriétés de chaque minerai.", icon: "📚" }
      ],
      ctaText: "Jouer au Guide"
    }
  },
  {
    id: 'puzzle-mineur-solo',
    title: 'Puzzle du Mineur',
    type: 'Serious Game',
    objective: 'Maîtriser la localisation des richesses minières.',
    description: "Reconstituez la carte des ressources minières du Sénégal. Un jeu de placement stratégique pour maîtriser la géographie de notre sous-sol.",
    imageUrl: '/PuzzleSN.png',
    target: 'Étudiants, Professionnels, Curieux',
    aspect: 'horizontal',
    playUrl: 'https://gumba-yana.itch.io/puzzle-gologique-sgsn',
    details: {
      heroImage: '/PuzzleSN.png',
      fullDescription: "Le Puzzle du Mineur demande de la précision et de la connaissance. Placez chaque gisement au bon endroit sur la carte du Sénégal.",
      features: [
        { title: "Cartographie", description: "Apprenez les zones d'extraction majeures du pays.", icon: "🗺️" },
        { title: "Placement Précis", description: "Une mécanique de puzzle appliquée à la géologie.", icon: "🧩" }
      ],
      ctaText: "Résoudre le Puzzle"
    }
  },
  {
    id: 'sgns-package',
    title: 'Serious Game SGNS',
    type: 'Package Serious Games',
    objective: 'Valoriser les richesses minières du Sénégal.',
    description: "Une suite d'expériences interactives conçue pour le Salon Géologique National du Sénégal (SGNS) afin de sensibiliser aux ressources du sous-sol.",
    imageUrl: '/GuideMineur.jpeg',
    target: 'Institutions, Écoles, Professionnels',
    aspect: 'vertical',
    details: {
      heroImage: '/GuideMineur.jpeg',
      fullDescription: "Conçus pour le Ministère des Mines et de la Géologie, ces jeux permettent de découvrir le secteur minier sénégalais de manière ludique et pédagogique.",
      features: [],
      subProjects: [
        {
          id: 'guide',
          title: 'GUIDE DU MINEUR',
          description: 'Associez chaque minerai à son utilisation quotidienne (Diamant, Or, Phosphate...).',
          icon: '💎',
          playUrl: 'https://gumba-yana.itch.io/associe-le-minerai-son-utilite'
        },
        {
          id: 'puzzle',
          title: 'PUZZLE GÉOLOGIQUE',
          description: 'Reconstituez la carte des ressources minières du Sénégal par région.',
          icon: '🧩',
          playUrl: 'https://gumba-yana.itch.io/puzzle-gologique-sgsn'
        },
        {
          id: 'quizz',
          title: 'QUIZZ DES MINES',
          description: "Testez vos connaissances sur les enjeux et l'histoire géologique du pays.",
          icon: '❓',
          playUrl: '#'
        }
      ],
      ctaText: "Découvrir le package"
    }
  },
  {
    id: 'baobloom',
    title: 'BaoBloom',
    type: 'Jeu de Puzzle',
    objective: 'Valoriser la richesse agricole africaine.',
    description: "Jeu de fusion stratégique explorant la biodiversité de 5 pays africains. Fusionnez fruits et légumes !",
    imageUrl: '/BaoBloom.jpeg',
    target: 'Grand Public, Casual',
    aspect: 'vertical',
    playUrl: 'https://play.google.com/store/apps/details?id=com.MarsIndustrie.BaoBloom',
    details: {
        heroImage: '/BaoBloom.jpeg',
        fullDescription: "BaoBloom est un jeu de puzzle 'fusion' vibrant qui célèbre l'agriculture du continent.",
        features: [
          { title: "Fusion Fruitée", description: "De la petite graine à la pastèque géante.", icon: "🍉" },
          { title: "Art Pop", description: "Une direction artistique unique et pétillante.", icon: "🎨" }
        ],
        ctaText: "Jouer à BaoBloom"
      }
  },
  {
    id: 'cax-caaxett',
    title: 'Cax Caaxett',
    type: 'Jeu Mobile Culturel',
    objective: 'Faire découvrir les cultures historiques du Sénégal.',
    description: "Voyage à travers les royaumes du Sénégal via des énigmes inspirées des proverbes.",
    imageUrl: '/CaxCaxett.jpeg',
    target: 'Jeunes, Familles',
    aspect: 'vertical',
    playUrl: 'https://play.google.com/store/apps/details?id=com.GHS.CaxCaxett',
    details: {
        heroImage: '/CaxCaxett.jpeg',
        fullDescription: "Cax Caaxett propose une immersion ludique dans les cultures historiques du Sénégal.",
        features: [
          { title: "Enigmes", description: "Basées sur les proverbes et mythes locaux.", icon: "🎭" }
        ],
        ctaText: "Voir sur le Play Store"
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
