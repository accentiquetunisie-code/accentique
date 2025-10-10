export interface ProductVariant {
  id: string;
  name: string;
  color: string;
  image: string;
  price?: number; // Optional price override
  inStock: boolean;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: ('watches' | 'bracelets' | 'rings' | 'earings' | 'gift-sets' | 'fan' | 'necklace' | 'package' | 'mount' | 'other' )[];
  images: string[];
  description: string;
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  isFreeDelivery?: boolean;
  materials: string[];
  rating: number;
  reviews: number;
  variants?: ProductVariant[]; // Add variants support
}

export interface Bundle {
  id: string;
  name: string;
  products: string[];
  discount: number;
  originalPrice: number;
  bundlePrice: number;
  image: string;
  description: string;
}

export interface Bundle {
  id: string;
  name: string;
  products: string[];
  discount: number;
  originalPrice: number;
  bundlePrice: number;
  image: string;
  description: string;
}

export const products: Product[] = [
    {
    id: '1',
    name: 'montre et bracelet 1',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_1297.jpeg'
    ],
    description: 'Une montre élégante et 1 bracelet en acier inoxydablr.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (5ATM)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.6,
    reviews: 78,
  },
      {
    id: '2',
    name: 'montre et bracelet 2',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet2.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
    
      {
    id: '3',
    name: 'montre et bracelet 4',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_1299.jpeg'
    ],
    description: 'Une montre élégante et 1 bracelet en acier inoxydable.',
    features: [
      'Résistante à l\'eau (5ATM)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isFreeDelivery: true,
    isNew: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 101,
  },

      {
    id: '4',
    name: 'montre et bracelet 6',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet7.jpeg'
    ],
    description: 'Une montre élégante et bracelet en acier inoxydable.',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 111,
  },
      {
    id: '5',
    name: 'montre et bracelet 7',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet8.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable.',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.3,
    reviews: 99,
  },
      {
    id: '6',
    name: 'montre et bracelet 8',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_1303.jpeg'
    ],
    description: 'Une montre et bracelet en acier inoxydable.',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 89,
  },
      {
    id: '7',
    name: 'montre et bracelet 9',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_1302.jpeg'
    ],
    description: 'Une montre avec 1 bracelet en acier inoxydable.',
    features: [
      'Résistante à l\'eau (3ATM)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4,
    reviews: 79,
  },

        {
    id: '8',
    name: 'montre et bracelet 10',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_1298.jpeg'
    ],
    description: 'Une montre élégante et 1 bracelet en acier inoxydable.',
    features: [
      'Résistante à l\'eau (3ATM)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.5,
    reviews: 89,
  },
          {
    id: '9',
    name: 'montre et bracelet 11',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet11.jpeg'
    ],
    description: 'Une montre élégante et bracelet en acier inoxydable.',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.3,
    reviews: 112,
  },
        {
    id: '10',
    name: 'montre et bracelet 12',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet12.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 124,
  },

  {
    id: '11',
    name: '3 bracelets',
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/3-bracelet.jpeg'
    ],
    description: '3 Bracelet van cleef noire + cartier et clou simple',
    features: [
      'Taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 56,
  },
    {
    id: '12',
    name: 'Bracelet 1',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-1.jpeg'
    ],
    description: 'Bracelet clou doré avec strass.',
    features: [
      'Fermoir sécurisé',
      'Taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 67,
  },
    {
    id: '13',
    name: 'Bracelet 2',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-2.jpeg'
    ],
    description: 'Bracelet clou argent.',
    features: [
      'Fermoir sécurisé',
      'Taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.2,
    reviews: 67,
  },
    {
    id: '14',
    name: 'Bracelet 3',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-3.jpeg'
    ],
    description: 'Bracelet cartier avec strass.',
    features: [
      'Fermoir sécurisé',
      'Taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 99,
  },
    {
    id: '15',
    name: 'Bracelet 4',
    price: 23,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-4.jpeg'
    ],
    description: 'Bracelet van cleef doré.',
    features: [
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 89,
  },
    {
    id: '16',
    name: 'Bracelet 5',
    price: 20,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-5.jpeg'
    ],
    description: 'Bracelet van cleef blanc en acier inoxydable.',
    features: [
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Acier inoxydable'],
    rating: 3.4,
    reviews: 21,
  },
      {
    id: '17',
    name: 'Bracelet perle',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_1366.jpeg'
    ],
    description: 'Bracelet perle en acier inoxydable',
    features: [
      'Taille ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.6,
    reviews: 50,
  },
      {
    id: '18',
    name: '3 Bracelets',
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/3-bracelet-2.jpeg'
    ],
    description: 'Bracelet van cleef doree + clou et cartier avec strass.',
    features: [
      'taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.3,
    reviews: 32,
  },
      {
    id: '19',
    name: '2 Bracelets',
    price: 50,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/3-bracelet-4.jpeg'
    ],
    description: '2 Bracelets van cleef noire + cartier.',
    features: [
      'Taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 64,
  },
        {
    id: '20',
    name: 'Bracelet A1',
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet A1.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Chaîne en laiton plaqué or',
      'Pendentifs cristaux Swarovski',
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: false,
    isBestSeller: false,
    materials: ['Laiton plaqué or', 'Cristaux Swarovski'],
    rating: 4.6,
    reviews: 77,
  },
          {
    id: '21',
    name: 'Bracelet A2',
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet A2.jpeg'
    ],
    description: '3 Bracelets en acier inoxydable.',
    features: [
      'Taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.3,
    reviews: 37,
  },
          {
    id: '22',
    name: 'Bracelet A3',
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet A3.jpeg'
    ],
    description: '3 Bracelets en acier inoxydable.',
    features: [
      'taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 29,
  },
          {
    id: '23',
    name: 'Bracelet A4',
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet A4.jpeg'
    ],
    description: '3 Bracelets en acier inoxydable.',
    features: [
      'Fermoir sécurisé',
      'Taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 89,
  },
          {
    id: '24',
    name: 'Bracelet A5',
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet A5.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Fermoir sécurisé',
      'Taille standard'
    ],
    inStock: false,
    isBestSeller: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 48,
  },
        {
    id: '25',
    name: 'Bracelet A6',
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet A6.jpeg'
    ],
    description: '3 Bracelets en acier inoxydable.',
    features: [
      'Fermoir sécurisé',
      'Taille ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 45,
  },
      {
    id: '26',
    name: 'manchette A1',
    price: 28,
    category: ['bracelets'],
    images: [
      '/product_data/other/manchette A2.jpeg',
      '/product_data/other/manchette A3.jpeg',
      '/product_data/other/manchette A1.jpeg',
    ],
    description: 'Une manchette en acier inoxydable.',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 124,
  },
        {
    id: '27',
    name: 'manchette A4',
    price: 28,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_0741.jpeg',
      '/product_data/other/manchette A4.jpeg'
    ],
    description: 'Manchette en acier inoxydable.',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 12,
  },
        {
    id: '28',
    name: 'manchette A5',
    price: 28,
    category: ['bracelets'],
    images: [
      '/product_data/other/manchette A5.jpeg'
    ],
    description: 'Manchette en acier inoxydable.',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.6,
    reviews: 29,
  },
        {
    id: '29',
    name: 'manchette A6',
    price: 28,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet 7.jpeg',
      '/product_data/other/manchette A6.jpeg'
    ],
    description: 'Manchette en acier inoxydable',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 124,
  },
    {
    id: '1113',
    name: 'manchette A7',
    price: 30,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/Bracelet 6.jpeg'
    ],
    description: 'Manchette en acier inoxydable.',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 124,
  },
   {
    id: '30',
    name: 'Bague 1',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 17.jpeg'
    ],
    description: 'Bague Papillon en Acier Inoxydable Doré.',
    features: [
      'Taille ajustable',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 0,
  },
   {
    id: '31',
    name: 'Bague 2',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 19.jpeg'
    ],
    description: 'Bague doré ajustable en acier inoxydable.',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 24,
  },
   {
    id: '32',
    name: 'Bague 3',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 21.jpeg'
    ],
    description: 'Bague Cœur Minimaliste en Acier Inoxydable Argenté.',
    features: [
      'Résistante à l’eau – ne noircit pas et ne change pas de couleur',
      'Couleur : Argenté',
      'Design intemporel',
      'Taille ajustable'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 13,
  },
    {
    id: '33',
    name: 'Bague 4',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 4.jpg'
    ],
    description: 'Bague avec pierre noir centrale.',
    features: [
      'Pierre centrale zircon cubique',
      'Design intemporel',
      'Taille ajustable'
    ],
    inStock: false,
    materials: ['Acier inoxydable'],
    rating: 4.2,
    reviews: 19,
  },
    {
    id: '34',
    name: 'Bague 5',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 5.jpg'
    ],
    description: 'Bague fleur en acier inoxydable.',
    features: [
      'Design intemporel',
      'Taille ajustable'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 38,
  },
    {
    id: '35',
    name: 'Bague 6',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 20.jpeg'
    ],
    description: 'Bague Serpent en Acier Inoxydable.',
    features: [
      'Design intemporel',
      'Taille ajustable'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 47,
  },
      {
    id: '36',
    name: 'Bague 7',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 12.jpeg'
    ],
    description: 'Bague en Acier Inoxydable Doré – Élégance Moderne.',
    features: [
      'Design intemporel',
      'Taille ajustable'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 38,
  },
      {
    id: '37',
    name: 'Bague 8',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 8.jpg'
    ],
    description: 'Bague van cleef blanc.',
    features: [
      'Design intemporel',
      'Taille ajustable'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.5,
    reviews: 44,
  },
      {
    id: '38',
    name: 'Bague 9',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 13.jpeg'
    ],
    description: 'Bague n9 la reine.',
    features: [
      'Taille ajustable'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 67,
  },
      {
    id: '39',
    name: 'Bague 10',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 15.jpeg'
    ],
    description: 'Bague N10 la princesse.',
    features: [
      'Taille ajustable'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 57,
  },
 {
    id: '391',
    name: 'Bague 11',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 11.png'
    ],
    description: 'Bague= fleur en acier inoxydable.',
    features: [
      'Taille ajustable',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 3,
  },
  {
    id: '40',
    name: 'Pack d\'accessoires 1',
    price: 43,
    category: ['gift-sets'],
    images: [
      '/product_data/package/packdaccessoire/1.jpeg'
    ],
    description: '',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: false,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.8,
    reviews: 57,
  },
    {
    id: '41',
    name: 'Pack d\'accessoires 2',
    price: 43,
    category: ['gift-sets'],
    images: [
      '/product_data/package/packdaccessoire/2.jpeg'
    ],
    description: 'Set coller et boucles en acier inoxydable',
    features: [
      'Collier taille standard 21cm',
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 22,
  },
    {
    id: '42',
    name: 'Pack d\'accessoires 3',
    price: 43,
    category: ['gift-sets'],
    images: [
      '/product_data/package/packdaccessoire/3.jpeg'
    ],
    description: 'Set coller et boucles en acier inoxydable',
    features: [
      'Collier standard 21cm',
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '43',
    name: 'choker + bracelet',
    price: 38,
    category: ['gift-sets'],
    images: [
      '/product_data/package/choker+bracelet/1.jpeg',
    ],
    description: 'choker et bracelet en acier inoxydable',
    features: [
      'taille ajustable'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 67,
  },
    {
    id: '44',
    name: 'eventails 1',
    price: 22,
    category: ['fan'],
    images: [
      '/product_data/fan/eventailsfleur/eventailsfleur1.jpeg'
    ],
    description: '',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
    {
    id: '45',
    name: 'eventails 2',
    price: 22,
    category: ['fan'],
    images: [
      '/product_data/fan/eventailsfleur/eventailsfleur2.jpeg'
    ],
    description: '',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
    {
    id: '46',
    name: 'eventails 3',
    price: 22,
    category: ['fan'],
    images: [
      '/product_data/fan/eventailsfleur/eventailsfleur3.jpeg'
    ],
    description: '',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
    {
    id: '47',
    name: 'eventails 4',
    price: 22,
    category: ['fan'],
    images: [
      '/product_data/fan/eventailsfleur/eventailsfleur4.jpeg'
    ],
    description: '',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
    {
    id: '48',
    name: 'eventails 5',
    price: 22,
    category: ['fan'],
    images: [
      '/product_data/fan/eventailsfleur/eventailsfleur5.jpeg'
    ],
    description: '',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
    {
    id: '49',
    name: 'eventails 6',
    price: 22,
    category: ['fan'],
    images: [
      '/product_data/fan/eventailsfleur/eventailsfleur6.jpeg'
    ],
    description: '',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '50',
    name: 'eventails 7',
    price: 22,
    category: ['fan'],
    images: [
      '/product_data/fan/eventailsfleur/eventailsfleur7.jpeg'
    ],
    description: '',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },

  {
    id: '51',
    name: ' Zircon set',
    price: 79,
    category: ['gift-sets'],
    images: [
      '/product_data/gift-sets/coffret/sets6.jpeg',
      '/product_data/gift-sets/coffret/sets5.jpeg',
      '/product_data/gift-sets/coffret/sets1.jpeg',
      '/product_data/gift-sets/coffret/sets7.jpeg'
    ],
    description: '',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    isNew: false,
    isBestSeller: false,
    materials: ['Zircon'],
    rating: 4.3,
    reviews: 94,
  },
    {
    id: '52',
    name: ' set etoile de mer',
    price: 69,
    category: ['gift-sets'],
    images: [
      '/product_data/gift-sets/coffret/sets2.jpeg',
      '/product_data/gift-sets/coffret/sets3.jpeg',
      '/product_data/gift-sets/coffret/sets4.jpeg'
    ],
    description: '',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    isNew: false,
    isBestSeller: true,
    materials: ['Faux bijoux'],
    rating: 4.1,
    reviews: 44,
  },
{
    id: '53',
    name: 'collier 1',
    price: 25,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier1.jpeg'
    ],
    description: 'double chain necklace',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 38,
  },
  {
    id: '54',
    name: 'collier 2',
    price: 18,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier2.jpeg'
    ],
    description: 'collier cerise.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.2,
    reviews: 67,
  },
  {
    id: '55',
    name: 'collier 3',
    price: 18,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier14.jpeg'
    ],
    description: 'collier gold en acier inoxydable.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.3,
    reviews: 27,
  },
  {
    id: '56',
    name: 'collier 4',
    price: 18,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier4.jpeg'
    ],
    description: 'collier coeur argent en acier inoxydable.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.3,
    reviews: 57,
  },
  {
    id: '57',
    name: 'collier 5',
    price: 18,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier5.jpeg'
    ],
    description: 'collier fraise en acier inoxydable.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 28,
  },
  {
    id: '58',
    name: 'collier 6',
    price: 18,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier6.jpeg'
    ],
    description: 'collier coeur en acier inoxydable.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 17,
  },
  {
    id: '59',
    name: 'collier 7',
    price: 18,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier7.jpeg'
    ],
    description: 'collier cerise.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.2,
    reviews: 15,
  },
  {
    id: '60',
    name: 'collier 8',
    price: 18,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier8.jpeg'
    ],
    description: 'collier piment rouge.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable',],
    rating: 3.7,
    reviews: 34,
  },
  {
    id: '61',
    name: 'collier 9',
    price: 18,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier15.jpeg'
    ],
    description: 'collier messika gold.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 22,
  },

  {
    id: '62',
    name: 'collier 10',
    price: 18,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier10.jpeg',
      '/product_data/necklace/collier/collier11.jpeg',
      '/product_data/necklace/collier/collier12.jpeg'
    ],
    description: 'collier coeur simple.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 82,
  },
   {
    id: '622',
    name: 'collier 11',
    price: 18,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier13.jpeg'
    ],
    description: 'collier perles.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 42,
  },


{
    id: '63',
    name: 'boucle-d\'oreilles 1',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle1.jpeg',
      '/product_data/earings/boucle2.jpeg'
    ],
    description: 'boucle-d\'oreilles solitaire avec pierre centrale et anneau doré finement ciselé.',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '64',
    name: 'boucle-d\'oreilles 2',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle3.jpeg',
      '/product_data/earings/boucle4.jpeg'
    ],
    description: 'boucle-d\'oreilles solitaire avec pierre centrale et anneau doré finement ciselé.',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '66',
    name: 'boucle-d\'oreilles 3',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle6.jpeg'
    ],
    description: 'boucle-d\'oreilles solitaire avec pierre centrale et anneau doré finement ciselé.',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '67',
    name: 'boucle-d\'oreilles 4',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle13.png'
    ],
    description: 'boucle-d\'oreilles solitaire avec pierre centrale et anneau doré finement ciselé.',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '68',
    name: 'boucle-d\'oreilles 5',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle8.jpeg'
    ],
    description: 'boucle-d\'oreilles solitaire avec pierre centrale et anneau doré finement ciselé.',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
{
    id: '69',
    name: 'boucle-d\'oreilles 6',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle10.png',
      '/product_data/earings/boucle a1.jpeg'
    ],
    description: 'Boucles d’Oreilles Fleur Dorée en Acier Inoxydable.',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 38,
  },
  {
    id: '70',
    name: 'boucle-d\'oreilles 7',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle14.png',
      '/product_data/earings/boucle a3.jpeg'
    ],
    description: 'boucle-d\'oreilles en acier inoxydable.',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 28,
  },
  {
    id: '71',
    name: 'boucle-d\'oreilles 8',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle11.png',
      '/product_data/earings/boucle a4.jpeg'
    ],
    description: 'boucle-d\'oreilles en acier inoxydable.',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.5,
    reviews: 46,
  },
  {
    id: '72',
    name: 'boucle-d\'oreilles 9',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle18.jpeg',
      '/product_data/earings/boucle a5.jpeg'
    ],
    description: 'boucle-d\'oreilles en acier inoxydable.',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '73',
    name: 'boucle-d\'oreilles 10',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle12.png',
      '/product_data/earings/boucle a6.jpeg',
      '/product_data/earings/boucle5.jpeg'
    ],
    description: 'boucle-d\'oreilles en acier inoxydable.',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.3,
    reviews: 52,
  },
  {
    id: '74',
    name: 'boucle-d\'oreilles 11',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle a7.jpeg'
    ],
    description: 'boucle-d\'oreilles en acier inoxydable.',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable',],
    rating: 4.7,
    reviews: 11,
  },
  
      {
    id: '75',
    name: 'montre + 2 bracelets',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre/montre-1.jpeg'
    ],
    description: 'Une montre avec 2 bracelets.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 14,
  },
    {
    id: '76',
    name: 'manchette A8',
    price: 28,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_0738.jpeg'
    ],
    description: 'Manchette en acier inoxydable',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 124,
  },
  {
    id: '78',
    name: 'manchette A10',
    price: 28,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_0788.jpeg'
    ],
    description: 'Manchette en acier inoxydable',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 124,
  },
  {
    id: '79',
    name: 'manchette A11',
    price: 28,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_0792.jpeg'
    ],
    description: 'Manchette en acier inoxydable',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 124,
  },
   {
    id: '80',
    name: 'manchette A12',
    price: 28,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_0839.jpeg'
    ],
    description: 'Manchette en acier inoxydable',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 124,
  },
  {
    id: '81',
    name: 'manchette A13',
    price: 28,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_0849.jpeg'
    ],
    description: 'Manchette en acier inoxydable',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 124,
  },
  {
    id: '82',
    name: 'manchette A14',
    price: 28,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_0856.jpeg'
    ],
    description: 'Manchette en acier inoxydable',
    features: [
      'Manchette precieuse',
      'Taille ajustable'
    ],
    inStock: true,
    isNew: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 124,
  },
   {
    id: '83',
    name: 'Bracelet perle B',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_1368.jpeg',
      '/product_data/bracelets/IMG_1364.jpeg'
    ],
    description: 'Bracelet perle B en acier inoxydable',
    features: [
      'Taille ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.6,
    reviews: 50,
  },
   {
    id: '84',
    name: 'boucle-d\'oreilles 12',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle19.jpeg'
    ],
    description: 'boucle-d\'oreilles en acier inoxydable.',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 38,
  },
   {
    id: '85',
    name: 'choker + bracelet',
    price: 38,
    category: ['gift-sets'],
    images: [
      '/product_data/package/choker+bracelet/3.jpeg',
    ],
    description: 'choker et bracelet en acier inoxydable',
    features: [
      'taille ajustable'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '86',
    name: 'choker + bracelet',
    price: 38,
    category: ['gift-sets'],
    images: [
      '/product_data/package/choker+bracelet/4.jpeg',
    ],
    description: 'choker et bracelet en acier inoxydable',
    features: [
      'taille ajustable'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 67,
  },
  {
    id: '87',
    name: 'collier et boucles en acier inoxydable',
    price: 38,
    category: ['gift-sets'],
    images: [
      '/product_data/gift-sets/coffret/sets11.jpeg'
    ],
    description: '',
    features: [
      'Collier standard 22cm',
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 45,
  },
  {
    id: '88',
    name: 'collier et boucles noir en acier inoxydable',
    price: 38,
    category: ['gift-sets'],
    images: [
      '/product_data/gift-sets/coffret/sets8.jpeg',
      '/product_data/gift-sets/coffret/sets9.jpeg'
    ],
    description: '',
    features: [
      'Collier standard 22cm',
      'Design intemporel',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 45,
  },
  
];

export const bundles: Bundle[] = [
  {
    id: 'bundle-1',
    name: 'Duo Élégance',
    products: ['1', '2'],
    discount: 20,
    originalPrice: 278,
    bundlePrice: 222,
    image: '/product_data/package/95/1.jpeg',
    description: 'DUO ELEGANCE - Économisez 20%'
  },
  {
    id: 'bundle-2',
    name: 'Trio Précieux',
    products: ['2', '3', '6'],
    discount: 25,
    originalPrice: 287,
    bundlePrice: 215,
    image: '/product_data/gift-sets/89/1.jpeg',
    description: 'Collection complète de bracelets et bague - Économisez 25%'
  }
];

export const categories = [
  { id: 'all', name: 'Tous', count: products.length },
  { id: 'watches', name: 'Montres', count: products.filter(p => p.category.includes('watches')).length },
  { id: 'bracelets', name: 'Bracelets', count: products.filter(p => p.category.includes('bracelets')).length },
  { id: 'necklace', name: 'collier', count: products.filter(p => p.category.includes('necklace')).length },
  { id: 'rings', name: 'Bagues', count: products.filter(p => p.category.includes('rings')).length },
  { id: 'gift-sets', name: 'Coffrets', count: products.filter(p => p.category.includes('gift-sets')).length },
  { id: 'earings', name: 'boucles d oreilles', count: products.filter(p => p.category.includes('earings')).length },
  { id: 'fan', name: 'Éventail', count: products.filter(p => p.category.includes('fan')).length },
  { id: 'package', name: 'pack', count: products.filter(p => p.category.includes('package')).length },
  { id: 'mount', name: 'Montures', count: products.filter(p => p.category.includes('mount')).length },
  { id: 'other', name: 'autres', count: products.filter(p => p.category.includes('other')).length }
];
