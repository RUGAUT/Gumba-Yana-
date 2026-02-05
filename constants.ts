
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
        { title: "Prononciation guidée", description: "S'entraîner à dire correctement les mots grâce à des voix natives.", icon: "🗣️" },
        { title: "Eutou Yana", description: "Espace communautaire pour pratiquer dans un cadre bienveillant.", icon: "🤝" }
      ],
      ctaText: "Rejoindre la liste d'attente"
    }
  },
  {
    id: 'guide-mineur',
    title: 'Guide du Mineur',
    type: 'Jeu Éducatif Rapide',
    objective: 'Valoriser les richesses minières du Sénégal.',
    description: "Associez chaque minerai à son utilisation quotidienne dans ce serious game pédagogique conçu pour sensibiliser aux ressources du sous-sol.",
    imageUrl: '/GuideMineur.jpeg',
    target: 'Écoles, Étudiants, Grand Public',
    aspect: 'vertical',
    playUrl: 'https://gumba-yana.itch.io/associe-le-minerai-son-utilite',
    details: {
      heroImage: '/GuideMineur.jpeg',
      fullDescription: "Le Guide du Mineur est une expérience interactive où l'utilisateur doit relier les minerais extraits au Sénégal à leurs produits finis. Un excellent outil pour comprendre l'impact de l'industrie minière sur notre quotidien.",
      features: [
        { title: "Apprentissage Actif", description: "Mémorisez les ressources minières par l'association visuelle.", icon: "💎" },
        { title: "Fiches Info", description: "Découvrez les propriétés de chaque minerai après chaque réussite.", icon: "📚" },
        { title: "Score & Temps", description: "Testez votre rapidité pour devenir un expert géologue.", icon: "⏱️" }
      ],
      ctaText: "Jouer au Guide"
    }
  },
  {
    id: 'puzzle-mineur',
    title: 'Puzzle du Mineur',
    type: 'Puzzle Game Géographique',
    objective: 'Maîtriser la localisation des richesses minières.',
    description: "Reconstituez la carte des ressources minières du Sénégal. Un jeu de placement stratégique pour maîtriser la géographie de notre sous-sol.",
    imageUrl: '/PuzzleSN.png',
    target: 'Étudiants, Professionnels, Curieux',
    aspect: 'horizontal',
    playUrl: 'https://gumba-yana.itch.io/puzzle-gologique-sgsn',
    details: {
      heroImage: '/PuzzleSN.png',
      fullDescription: "Le Puzzle du Mineur demande de la précision et de la connaissance. Placez chaque gisement au bon endroit sur la carte du Sénégal pour débloquer des informations stratégiques sur les régions minières.",
      features: [
        { title: "Cartographie Interactive", description: "Apprenez les zones d'extraction majeures du pays.", icon: "🗺️" },
        { title: "Placement Précis", description: "Une mécanique de puzzle classique appliquée à la géologie.", icon: "🧩" },
        { title: "Récompenses", description: "Gagnez des badges pour chaque région complétée sans erreur.", icon: "🏆" }
      ],
      ctaText: "Résoudre le Puzzle"
    }
  },
  {
    id: 'cax-caaxett',
    title: 'Cax Caaxett',
    type: 'Jeu Mobile Culturel',
    objective: 'Faire découvrir les cultures historiques du Sénégal.',
    description: "Voyage à travers les royaumes du Sénégal via des énigmes inspirées des proverbes et traditions.",
    imageUrl: '/CaxCaxett.jpeg',
    target: 'Jeunes, Familles',
    aspect: 'vertical',
    playUrl: 'https://play.google.com/store/apps/details?id=com.GHS.CaxCaxett',
    details: {
        heroImage: '/CaxCaxett.jpeg',
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
    imageUrl: '/BaoBloom.jpeg',
    target: 'Grand Public, Casual',
    aspect: 'vertical',
    playUrl: 'https://play.google.com/store/apps/details?id=com.MarsIndustrie.BaoBloom',
    details: {
        heroImage: '/BaoBloom.jpeg',
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
