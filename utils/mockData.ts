import { Service } from '../types/Service';
import { Project } from '../types/Project';
import { BlogPost } from '../types/Blog';
import { Testimonial } from '../types/Testimonial';

export const services: Service[] = [
  {
    id: '1',
    title: 'Escaliers Sur-Mesure',
    description: 'Escaliers droits, hélicoïdaux ou quart tournant, conçus et fabriqués selon vos besoins et l\'architecture de votre maison.',
    image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'stairs',
    priceRange: '3 500€',
    features: [
      'Étude personnalisée gratuite',
      'Bois massif local (chêne, hêtre, frêne)',
      'Finitions sur-mesure',
      'Installation professionnelle',
      'Garantie 10 ans'
    ]
  },
  {
    id: '2',
    title: 'Dressings & Placards',
    description: 'Optimisez vos espaces de rangement avec nos solutions sur-mesure adaptées à chaque configuration.',
    image: 'https://images.pexels.com/photos/6585020/pexels-photo-6585020.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interior',
    priceRange: '1 200€',
    features: [
      'Conception 3D incluse',
      'Optimisation de l\'espace',
      'Accessoires haut de gamme',
      'Éclairage LED intégré',
      'Portes coulissantes ou battantes'
    ]
  },
  {
    id: '3',
    title: 'Terrasses en Bois',
    description: 'Créez votre espace détente extérieur avec nos terrasses en bois local, résistantes et esthétiques.',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'exterior',
    priceRange: '85€/m²',
    features: [
      'Bois traité classe 4',
      'Structure ventilée',
      'Finition anti-dérapante',
      'Garantie 15 ans',
      'Entretien minimal'
    ]
  },
  {
    id: '4',
    title: 'Cuisines Équipées',
    description: 'Cuisines sur-mesure alliant fonctionnalité et esthétique, avec des matériaux nobles et durables.',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interior',
    priceRange: '8 500€',
    features: [
      'Plan de travail en bois massif',
      'Électroménager intégré',
      'Rangements optimisés',
      'Îlot central possible',
      'Garantie 5 ans'
    ]
  },
  {
    id: '5',
    title: 'Pergolas & Tonnelles',
    description: 'Structures extérieures élégantes pour créer des espaces ombragés et conviviaux dans votre jardin.',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'exterior',
    priceRange: '2 800€',
    features: [
      'Bois lamellé-collé',
      'Résistance aux intempéries',
      'Assemblage traditionnel',
      'Couverture optionnelle',
      'Installation rapide'
    ]
  },
  {
    id: '6',
    title: 'Bibliothèques Sur-Mesure',
    description: 'Bibliothèques et étagères conçues pour s\'intégrer parfaitement à votre intérieur et vos besoins.',
    image: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interior',
    priceRange: '950€',
    features: [
      'Hauteur sous plafond',
      'Étagères réglables',
      'Finitions personnalisées',
      'Éclairage intégré possible',
      'Livraison et montage inclus'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Escalier Hélicoïdal en Chêne',
    description: 'Escalier hélicoïdal sur-mesure en chêne massif avec rampe forgée, créé pour une maison de caractère à Salers.',
    beforeImage: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interior',
    location: 'Salers',
    year: '2024',
    duration: '3 semaines',
    materials: ['Chêne massif', 'Fer forgé', 'Finition huile naturelle']
  },
  {
    id: '2',
    title: 'Dressing Suite Parentale',
    description: 'Aménagement complet d\'une suite parentale avec dressing sur-mesure et tête de lit intégrée.',
    beforeImage: 'https://images.pexels.com/photos/6585020/pexels-photo-6585020.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/6585020/pexels-photo-6585020.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interior',
    location: 'Aurillac',
    year: '2024',
    duration: '2 semaines',
    materials: ['Hêtre massif', 'Miroirs', 'Éclairage LED']
  },
  {
    id: '3',
    title: 'Terrasse avec Pergola',
    description: 'Terrasse en bois local avec pergola intégrée, créant un espace de vie extérieur exceptionnel.',
    beforeImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'exterior',
    location: 'Murat',
    year: '2023',
    duration: '1 semaine',
    materials: ['Pin Douglas', 'Visserie inox', 'Traitement autoclave']
  },
  {
    id: '4',
    title: 'Cuisine Contemporaine',
    description: 'Cuisine moderne en bois massif avec îlot central et plan de travail en chêne.',
    beforeImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interior',
    location: 'Saint-Flour',
    year: '2023',
    duration: '4 semaines',
    materials: ['Chêne massif', 'Laque mate', 'Quartz']
  },
  {
    id: '5',
    title: 'Bibliothèque Murale',
    description: 'Bibliothèque sur-mesure du sol au plafond avec échelle coulissante et éclairage intégré.',
    beforeImage: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'interior',
    location: 'Aurillac',
    year: '2024',
    duration: '10 jours',
    materials: ['Frêne massif', 'Laiton', 'LED']
  },
  {
    id: '6',
    title: 'Pergola Bioclimatique',
    description: 'Pergola à lames orientables pour un contrôle optimal de la luminosité et de la ventilation.',
    beforeImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'exterior',
    location: 'Vic-sur-Cère',
    year: '2023',
    duration: '2 semaines',
    materials: ['Aluminium', 'Bois composite', 'Motorisation']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Comment Choisir son Escalier Sur-Mesure : Guide Complet 2024',
    slug: 'choisir-escalier-sur-mesure-guide-2024',
    excerpt: 'Découvrez tous nos conseils pour choisir l\'escalier parfait : matériaux, formes, dimensions et budget. Un guide complet pour faire le bon choix.',
    content: '',
    image: 'https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Jean-Pierre Volcan',
    date: '15 décembre 2024',
    readTime: '8 min',
    category: 'Conseils',
    tags: ['escalier', 'sur-mesure', 'bois', 'conseils']
  },
  {
    id: '2',
    title: 'Bois Local vs Bois Importé : Impact Écologique et Qualité',
    slug: 'bois-local-vs-importe-impact-ecologique',
    excerpt: 'Pourquoi privilégier le bois local ? Analyse comparative des avantages écologiques, économiques et qualitatifs du bois d\'Auvergne.',
    content: '',
    image: 'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Marie Volcan',
    date: '8 décembre 2024',
    readTime: '6 min',
    category: 'Écologie',
    tags: ['bois local', 'écologie', 'auvergne', 'environnement']
  },
  {
    id: '3',
    title: '5 Idées Tendance pour un Dressing Haut de Gamme',
    slug: 'idees-dressing-haut-de-gamme-tendances',
    excerpt: 'Inspirez-vous de nos dernières réalisations pour créer le dressing de vos rêves. Tendances 2024 et conseils d\'aménagement.',
    content: '',
    image: 'https://images.pexels.com/photos/6585020/pexels-photo-6585020.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Thomas Dubois',
    date: '1er décembre 2024',
    readTime: '5 min',
    category: 'Tendances',
    tags: ['dressing', 'aménagement', 'tendances', 'luxe']
  },
  {
    id: '4',
    title: 'Entretien du Bois : Nos Secrets pour une Longévité Maximale',
    slug: 'entretien-bois-secrets-longevite',
    excerpt: 'Préservez la beauté de vos aménagements en bois avec nos conseils d\'entretien professionnels. Produits naturels et techniques éprouvées.',
    content: '',
    image: 'https://images.pexels.com/photos/5691648/pexels-photo-5691648.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Jean-Pierre Volcan',
    date: '24 novembre 2024',
    readTime: '7 min',
    category: 'Conseils',
    tags: ['entretien', 'bois', 'maintenance', 'durabilité']
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Sophie Martin',
    content: 'L\'équipe de L\'Atelier du Volcan a réalisé notre escalier hélicoïdal avec un professionnalisme remarquable. Le résultat dépasse nos attentes !',
    rating: 5,
    location: 'Salers',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'Escalier hélicoïdal'
  },
  {
    id: '2',
    author: 'Michel Dubois',
    content: 'Notre terrasse en bois local est magnifique et parfaitement intégrée à l\'environnement. Un travail d\'artisan de grande qualité.',
    rating: 5,
    location: 'Murat',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'Terrasse avec pergola'
  },
  {
    id: '3',
    author: 'Claire Rousseau',
    content: 'Le dressing sur-mesure a transformé notre chambre. L\'optimisation de l\'espace est parfaite et la finition impeccable.',
    rating: 5,
    location: 'Aurillac',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'Dressing suite parentale'
  },
  {
    id: '4',
    author: 'Pierre Laval',
    content: 'Cuisine réalisée dans les délais avec des matériaux de première qualité. L\'équipe est à l\'écoute et très professionnelle.',
    rating: 5,
    location: 'Saint-Flour',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'Cuisine contemporaine'
  },
  {
    id: '5',
    author: 'Anne Mercier',
    content: 'La bibliothèque sur-mesure s\'intègre parfaitement dans notre salon. Un travail minutieux et un résultat exceptionnel.',
    rating: 5,
    location: 'Aurillac',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'Bibliothèque murale'
  },
  {
    id: '6',
    author: 'François Girard',
    content: 'Pergola bioclimatique installée rapidement et efficacement. La qualité des matériaux et de la finition est remarquable.',
    rating: 5,
    location: 'Vic-sur-Cère',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    project: 'Pergola bioclimatique'
  }
];