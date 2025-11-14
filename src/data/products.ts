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
    inStock: false,
    isNew: false,
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
    inStock: false,
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
      '/product_data/watches/montre+bracelet/montreetbracelet10.jpeg'
    ],
    description: 'Une montre élégante et 1 bracelet en acier inoxydable.',
    features: [
      'Résistante à l\'eau (3ATM)',
      'Bracelet ajustable'
    ],
    inStock: false,
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
    inStock: false,
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
    name: 'set 3 bracelets',
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
    price: 22,
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
    price: 22,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_1156.jpeg',
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
    name: 'Set 3 Bracelets van cleef BN',
    price: 55,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_1952.jpeg'
    ],
    description: '3 Bracelet van cleef en acier inoxydable .',
    features: [
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.8,
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
    name: 'Set 3 Bracelets van cleef BND',
    price: 55,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_1953.jpeg'
    ],
    description: '3 Bracelets van cleef en acier inoxydable.',
    features: [
      'taille ajustable'
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
    inStock: false,
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
    inStock: false,
    isFreeDelivery: false,
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
    inStock: false,
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
    name: 'Collier et boucles B',
    price: 42,
    category: ['gift-sets'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_2299.jpeg',
      '/product_data/watches/montre+bracelet/IMG_2296.jpeg'
    ],
    description: '',
    features: [
      'Acier inoxydable',
      'Design intemporel',
      'Taille collier standard : 22cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
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
    name: 'choker + bracelet 1',
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
    name: 'eventail 1',
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
    inStock: false,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
    {
    id: '45',
    name: 'eventail 2',
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
    name: 'eventail 3',
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
    name: 'eventail 4',
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
    name: 'eventail 5',
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
    name: 'eventail 6',
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
    name: 'eventail 7',
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
    ],
    description: '',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    isFreeDelivery: true,
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
    isFreeDelivery: true,
    isBestSeller: false,
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
    price: 24,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/C17.jpeg',
      '/product_data/necklace/collier/C19.jpeg',
      '/product_data/necklace/collier/C18.jpeg'
    ],
    description: 'collier poisson.',
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
    name: 'montre CFB + 2 bracelets',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack19.jpeg',
      '/product_data/watches/montre+bracelet/pack20.jpeg',
    ],
    description: 'Une montre avec 2 bracelets.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
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
    name: 'choker + bracelet 2',
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
    name: 'choker + bracelet 3',
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
    price: 42,
    category: ['gift-sets'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_2302.jpeg',
      '/product_data/watches/montre+bracelet/IMG_2297.jpeg'
    ],
    description: '',
    features: [
      'Collier standard 22cm',
      'Design intemporel',
    ],
    inStock: false,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 45,
  },
  {
    id: '88',
    name: 'collier et boucles noir en acier inoxydable',
    price: 42,
    category: ['gift-sets'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_2300.jpeg',
      '/product_data/gift-sets/coffret/sets8.jpeg',
      '/product_data/watches/montre+bracelet/IMG_2295.jpeg',
      '/product_data/gift-sets/coffret/sets9.jpeg',
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
    id: '89',
    name: 'Bracelet 6',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-9.jpeg',
      '/product_data/bracelets/bracelet-8.jpeg'
    ],
    description: 'Bracelet en acier inoxydable.',
    features: [
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 25,
  },
  {
    id: '90',
    name: 'Bracelet 7',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-12.jpeg',
      '/product_data/bracelets/bracelet-11.jpeg',
      '/product_data/bracelets/bracelet-10.jpeg'
    ],
    description: 'Bracelet en acier inoxydable.',
    features: [
      'Longueur ajustable'
    ],
    inStock: false,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 38,
  },
   {
    id: '91',
    name: 'Bracelet 8',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-13.jpeg',
      '/product_data/bracelets/bracelet-14.jpeg',
      '/product_data/bracelets/bracelet-15.jpeg'
    ],
    description: 'Gourmette van vleef D en acier inoxydable.',
    features: [
      'Taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.3,
    reviews: 41,
  },
  {
    id: '92',
    name: 'Bracelet 9',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-17.jpeg',
      '/product_data/bracelets/bracelet-16.jpeg',
      '/product_data/bracelets/bracelet-18.jpeg'
    ],
    description: 'Bracelet en acier inoxydable.',
    features: [
      'Taille ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.5,
    reviews: 58,
  },
  {
    id: '93',
    name: 'Bracelet 10',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-20.jpeg',
      '/product_data/bracelets/bracelet-19.jpeg',
      '/product_data/bracelets/bracelet-21.jpeg'
    ],
    description: 'Gourmette van cleef en acier inoxydable.',
    features: [
      'Taille standard'
    ],
    inStock: false,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 62,
  },
  {
    id: '94',
    name: 'monture 1',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/1.jpeg',
      '/product_data/other/2.jpeg',
      '/product_data/other/3.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: false,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.2,
    reviews: 46,
  },
  {
    id: '95',
    name: 'monture 2',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/5.jpeg',
      '/product_data/other/7.jpeg',
      '/product_data/other/6.jpeg',
      '/product_data/other/4.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.8,
    reviews: 32,
  },
 {
    id: '96',
    name: 'monture 3',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/10.jpeg',
      '/product_data/other/12.jpeg',
      '/product_data/other/11.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: false,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.2,
    reviews: 47,
  },
  {
    id: '97',
    name: 'monture 4',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/13.jpeg',
      '/product_data/other/15.jpeg',
      '/product_data/other/14.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: false,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.6,
    reviews: 31,
  },
  {
    id: '98',
    name: 'monture 5',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/18.jpeg',
      '/product_data/other/17.jpeg',
      '/product_data/other/19.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.2,
    reviews: 22,
  },
  {
    id: '99',
    name: 'monture 6',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/21.jpeg',
      '/product_data/other/23.jpeg',
      '/product_data/other/22.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.7,
    reviews: 35,
  },
  {
    id: '100',
    name: 'monture 7',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/26.jpeg',
      '/product_data/other/27.jpeg',
      '/product_data/other/25.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.6,
    reviews: 89,
  },
  {
    id: '101',
    name: 'monture 8',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/30.jpeg',
      '/product_data/other/29.jpeg',
      '/product_data/other/31.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.0,
    reviews: 68,
  },
  {
    id: '102',
    name: 'monture 9',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/35.jpeg',
      '/product_data/other/34.jpeg',
      '/product_data/other/33.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.4,
    reviews: 16,
  },
  {
    id: '103',
    name: 'monture 10',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/39.jpeg',
      '/product_data/other/40.jpeg',
      '/product_data/other/38.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.1,
    reviews: 63,
  },
  {
    id: '104',
    name: 'monture 11',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/44.jpeg',
      '/product_data/other/45.jpeg',
      '/product_data/other/43.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: false,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.5,
    reviews: 76,
  },
  {
    id: '105',
    name: 'monture 12',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/47.jpeg',
      '/product_data/other/50.jpeg',
      '/product_data/other/49.jpeg',
      '/product_data/other/48.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: false,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.3,
    reviews: 41,
  },
  {
    id: '106',
    name: 'monture 13',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/52.jpeg',
      '/product_data/other/53.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: false,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.6,
    reviews: 88,
  },
  {
    id: '107',
    name: 'monture 14',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/56.jpeg',
      '/product_data/other/57.jpeg',
      '/product_data/other/56.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.9,
    reviews: 91,
  },
   {
    id: '108',
    name: 'monture 15',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/59.jpeg',
      '/product_data/other/60.jpeg',
      '/product_data/other/61.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.1,
    reviews: 58,
  },
   {
    id: '109',
    name: 'monture 16',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/other/62.jpeg',
      '/product_data/other/63.jpeg',
      '/product_data/other/64.jpeg'
    ],
    description: 'Monture optique pour femmes.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: false,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.4,
    reviews: 28,
  },
  {
    id: '110',
    name: 'montre CFD + 2 bracelets',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack21.jpeg',
      '/product_data/watches/montre+bracelet/pack22.jpeg',
    ],
    description: 'Une montre avec 2 bracelets.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 24,
  },
  {
    id: '111',
    name: 'Pack accessoires 1',
    price: 109,
    originalPrice: 129,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack17.jpeg',
    ],
    description: 'Set montre + accessoires.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 36,
  },
  {
    id: '112',
    name: 'Pack accessoires 2',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack14.jpeg',
    ],
    description: 'Set montre + accessoires.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 96,
  },
   {
    id: '113',
    name: 'Pack accessoires 3',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack18.jpeg',
    ],
    description: 'Set montre + accessoires.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 96,
  },
  {
    id: '114',
    name: 'Pack accessoires 4',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack16.jpeg',
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
    rating: 4.7,
    reviews: 96,
  },
   {
    id: '115',
    name: 'Pack accessoires 5',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack23.jpeg',
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
    rating: 4.9,
    reviews: 67,
  },
   {
    id: '116',
    name: 'Set 2 Bracelets',
    price: 50,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet22.jpeg'
    ],
    description: '2 Bracelets clou + cartier love.',
    features: [
      'Taille standard'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 78,
  },
  {
    id: '117',
    name: 'Bracelet 11',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet23.jpeg',
      '/product_data/bracelets/bracelet24.jpeg',
      '/product_data/bracelets/bracelet25.jpeg'
    ],
    description: 'Bracelet en acier inoxydable.',
    features: [
      'Taille ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.5,
    reviews: 88,
  },
  {
    id: '118',
    name: 'Bracelet 12',
    price: 25,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet26.jpeg',
      '/product_data/bracelets/bracelet27.jpeg'
    ],
    description: 'Bracelet clou doré en acier inoxydable.',
    features: [
      'Taille ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 79,
  },
  {
    id: '119',
    name: 'Bracelet 13',
    price: 22,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_1951.jpeg'
    ],
    description: 'Bracelet van cleef noir en acier inoxydable.',
    features: [
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.2,
    reviews: 51,
  },
  {
    id: '120',
    name: 'Bracelet 14',
    price: 22,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_1950.jpeg',
      '/product_data/bracelets/IMG_1949.jpeg'
    ],
    description: 'Bracelet van cleef rouge burgundy en acier inoxydable.',
    features: [
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 64,
  },
  {
    id: '121',
    name: 'Golden Oval Sunglasses ✨ Retro-Chic & Glamour',
    price: 41,
    category: ['mount'],
    images: [
      '/product_data/monture/65.jpeg',
      '/product_data/monture/66.jpeg',
      '/product_data/monture/67.jpeg',
      '/product_data/monture/68.jpeg',
      '/product_data/monture/69.jpeg',
      '/product_data/monture/70.jpeg'
    ],
    description: 'Démarquez-vous avec ces lunettes de soleil sophistiquées. Elles allient une monture ovale en métal doré à des verres noirs fumés pour un look glamour et vintage',
    features: [
      'Forme : Ovale / Elliptique',
      'Détail : Logo Miu Miu doré sur les branches',
      'Style : Rétro Chic et Luxueux',
    ],
    inStock: true,
    isBestSeller: false,
    materials: ['TR90'],
    rating: 4.0,
    reviews: 68,
  },
  {
    id: '122',
    name: 'Montre 1',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/11.jpeg',
      '/product_data/watches/montre/12.jpeg',
    ],
    description: 'Une montre cartier en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 54,
  },
  {
    id: '123',
    name: 'Montre 2',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/21.jpeg',
      '/product_data/watches/montre/22.jpeg',
    ],
    description: 'Une montre michael kors en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 64,
  },
  {
    id: '124',
    name: 'Montre 3',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/31.jpeg',
      '/product_data/watches/montre/32.jpeg',
    ],
    description: 'Une montre Kalvin Klein en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 81,
  },
  {
    id: '125',
    name: 'Montre 4',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/41.jpeg',
      '/product_data/watches/montre/42.jpeg',
    ],
    description: 'Une montre Casio en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.3,
    reviews: 72,
  },
  {
    id: '126',
    name: 'Montre 5',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/51.jpeg',
      '/product_data/watches/montre/52.jpeg',
    ],
    description: 'Une montre Casio en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.6,
    reviews: 46,
  },
  {
    id: '127',
    name: 'Montre 6',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/61.jpeg',
      '/product_data/watches/montre/62.jpeg',
    ],
    description: 'Une montre Kalvin klein en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 32,
  },
  {
    id: '128',
    name: 'Montre 7',
    price: 99,
    originalPrice: 109,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG21.jpeg',
      '/product_data/watches/montre/IMG22.jpeg',
      '/product_data/watches/montre/IMG23.jpeg',
      '/product_data/watches/montre/IMG24.jpeg',
      '/product_data/watches/montre/IMG25.jpeg'
    ],
    description: 'Une montre IEKE en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 57,
  },
  {
    id: '129',
    name: 'Montre 8',
    price: 99,
    originalPrice: 109,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG30B.jpeg', 
      '/product_data/watches/montre/IMG29.jpeg',
      '/product_data/watches/montre/IMG31A.jpeg',
      '/product_data/watches/montre/IMG30.jpeg',
      '/product_data/watches/montre/IMG31.jpeg'
    ],
    description: 'bvlgari watch en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.5,
    reviews: 49,
  },
  {
    id: '130',
    name: 'Montre 9',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG17.jpeg',
      '/product_data/watches/montre/IMG16.jpeg',
      '/product_data/watches/montre/IMG15.jpeg',
    ],
    description: 'Une montre Cartier FB en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet taille standard'
    ],
    inStock: false,
    isNew: true,
    isFreeDelivery: false,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 85,
  },
  {
    id: '131',
    name: 'Montre 10',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/101.jpeg',
      '/product_data/watches/montre/102.jpeg',
    ],
    description: 'Une montre Chanel en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 83,
  },
  {
    id: '132',
    name: 'Montre 11',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG18.jpeg',
      '/product_data/watches/montre/IMG19.jpeg',
      '/product_data/watches/montre/IMG20.jpeg',
    ],
    description: 'Une montre Cartier FD en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet taille standard'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: false,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 64,
  },
  {
    id: '133',
    name: 'Montre 12',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/121.jpeg',
      '/product_data/watches/montre/122.jpeg',
    ],
    description: 'Une montre Casio en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 66,
  },
  {
    id: '134',
    name: 'Montre 13',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/131.jpeg',
      '/product_data/watches/montre/132.jpeg',
    ],
    description: 'Une montre Casio en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 74,
  },
  {
    id: '135',
    name: 'Montre 14',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG1.jpeg',
      '/product_data/watches/montre/IMG2.jpeg',
    ],
    description: 'Une montre Koushi en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 57,
  },
  {
    id: '136',
    name: 'Montre 15',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG3.jpeg',
      '/product_data/watches/montre/IMG4.jpeg',
    ],
    description: 'Une montre Koushi en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 53,
  },
  {
    id: '137',
    name: 'Montre 16',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG5.jpeg',
      '/product_data/watches/montre/IMG6.jpeg',
    ],
    description: 'Une montre Koushi en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.6,
    reviews: 64,
  },
  {
    id: '138',
    name: 'Montre 17',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG7.jpeg',
      '/product_data/watches/montre/IMG8.jpeg',
    ],
    description: 'Une montre Koushi en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 44,
  },
  {
    id: '139',
    name: 'Montre 18',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG9.jpeg',
      '/product_data/watches/montre/IMG10.jpeg',
    ],
    description: 'Une montre Koushi en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.2,
    reviews: 78,
  },
  {
    id: '140',
    name: 'Montre 19',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG11.jpeg',
      '/product_data/watches/montre/IMG12.jpeg',
    ],
    description: 'Une montre Koushi en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.6,
    reviews: 94,
  },
  {
    id: '141',
    name: 'Montre 20',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG13.jpeg',
      '/product_data/watches/montre/IMG14.jpeg',
    ],
    description: 'Une montre Koushi en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.5,
    reviews: 71,
  },
  {
    id: '142',
    name: 'Montre 23',
    price: 99,
    originalPrice: 109,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG26.jpeg',
      '/product_data/watches/montre/IMG27.jpeg',
      '/product_data/watches/montre/IMG28.jpeg',
      '/product_data/watches/montre/IMG25.jpeg'
    ],
    description: 'Une montre IEKE en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 57,
  },
  {
    id: '143',
    name: 'Montre 21',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG33.jpeg',
      '/product_data/watches/montre/IMG32.jpeg',
      '/product_data/watches/montre/IMG34.jpeg',
    ],
    description: 'Une montre Bvlgari en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: false,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 66,
  },
  {
    id: '144',
    name: 'Montre 22',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG35B.jpeg',
      '/product_data/watches/montre/IMG35A.jpeg',
      '/product_data/watches/montre/IMG36.jpeg',
      '/product_data/watches/montre/IMG35.jpeg',
    ],
    description: 'Une montre Bvlgari en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: false,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 87,
  },
  {
    id: '145',
    name: 'Montre 24',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG42.jpeg',
      '/product_data/watches/montre/IMG39.jpeg',
      '/product_data/watches/montre/IMG38.jpeg',
      '/product_data/watches/montre/IMG41.jpeg'
    ],
    description: 'Une montre DW en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 5.8,
    reviews: 97,
  },
  {
    id: '146',
    name: 'Montre 25',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG45.jpeg',
      '/product_data/watches/montre/IMG46.jpeg',
      '/product_data/watches/montre/IMG43.jpeg',
      '/product_data/watches/montre/IMG44.jpeg'
    ],
    description: 'Une montre DW en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 66,
  },
  {
    id: '147',
    name: 'Montre 26',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG49.jpeg',
      '/product_data/watches/montre/IMG47.jpeg',
      '/product_data/watches/montre/IMG48.jpeg',
    ],
    description: 'Une montre IEKE en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 87,
  },
  {
    id: '148',
    name: 'Montre 27',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG50.jpeg',
      '/product_data/watches/montre/IMG51.jpeg',
      '/product_data/watches/montre/IMG54.jpeg',
      '/product_data/watches/montre/IMG52.jpeg'
    ],
    description: 'Une montre IEKE en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 49.3,
    reviews: 64,
  },
  {
    id: '149',
    name: 'Montre 28',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG55.jpeg',
      '/product_data/watches/montre/IMG56.jpeg',
      '/product_data/watches/montre/IMG57.jpeg',
      '/product_data/watches/montre/IMG58.jpeg'
    ],
    description: 'Une montre GUCCI en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.3,
    reviews: 54,
  },
  {
    id: '150',
    name: 'Montre 29',
    price: 69,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG59.jpeg',
      '/product_data/watches/montre/IMG60.jpeg',
      '/product_data/watches/montre/IMG63.jpeg',
      '/product_data/watches/montre/IMG62.jpeg'
    ],
    description: 'Une montre TISSOT en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 7.4,
    reviews: 75,
  },
  {
    id: '151',
    name: 'Montre 30',
    price: 69,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG64.jpeg',
      '/product_data/watches/montre/IMG65.jpeg',
      '/product_data/watches/montre/IMG66.jpeg',
    ],
    description: 'Une montre CARTIER en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 6.5,
    reviews: 77,
  },
  {
    id: '152',
    name: 'Montre 31',
    price: 69,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG67.jpeg',
      '/product_data/watches/montre/IMG69.jpeg',
      '/product_data/watches/montre/IMG68.jpeg',
    ],
    description: 'Une montre KOUSHI en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 6.2,
    reviews: 81,
  },
  {
    id: '153',
    name: 'Pack accessoires 6',
    price: 109,
    originalPrice: 129,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack24.jpeg',
      '/product_data/watches/montre+bracelet/pack25.jpeg'
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
    reviews: 57,
  },
  {
    id: '154',
    name: 'Pack accessoires 7',
    price: 109,
    originalPrice: 129,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack26.jpeg',
      '/product_data/watches/montre+bracelet/pack27.jpeg'
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
    rating: 4.6,
    reviews: 45,
  },
  {
    id: '155',
    name: 'Pack accessoires 8',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack30.jpeg',
      '/product_data/watches/montre+bracelet/pack29.jpeg',
      '/product_data/watches/montre+bracelet/pack28.jpeg',
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
    rating: 4.7,
    reviews: 52,
  },
  {
    id: '156',
    name: 'Pack accessoires 9',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack33.jpeg',
      '/product_data/watches/montre+bracelet/pack31.jpeg',
      '/product_data/watches/montre+bracelet/pack32.jpeg',
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
    rating: 4.5,
    reviews: 66,
  },
  {
    id: '157',
    name: 'Pack accessoires 10',
    price: 109,
    originalPrice: 129,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack34.jpeg',
      '/product_data/watches/montre+bracelet/pack35.jpeg'
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
    reviews: 76,
  },
   {
    id: '158',
    name: 'Pack accessoires 11',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack37.jpeg',
      '/product_data/watches/montre+bracelet/pack38.jpeg',
      '/product_data/watches/montre+bracelet/pack36.jpeg',
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
    rating: 4.4,
    reviews: 94,
  },
  {
    id: '159',
    name: 'Pack accessoires 12',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack39.jpeg',
      '/product_data/watches/montre+bracelet/pack41.jpeg',
      '/product_data/watches/montre+bracelet/pack40.jpeg',
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
    rating: 4.7,
    reviews: 82,
  },
  {
    id: '160',
    name: 'Pack accessoires 13',
    price: 109,
    originalPrice: 129,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/pack43.jpeg',
      '/product_data/watches/montre+bracelet/pack42.jpeg'
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
    rating: 4.4,
    reviews: 75,
  },
  {
    id: '161',
    name: 'monture miu miu',
    price: 78,
    category: ['mount'],
    images: [
      '/product_data/other/miumiu5.jpeg',
      '/product_data/other/miumiu1.jpeg',
      '/product_data/other/miumiu2.jpeg',
      '/product_data/other/miumiu3.jpeg',
      '/product_data/other/miumiu4.jpeg',
      '/product_data/other/miumiu6.jpeg',
      '/product_data/other/miumiu7.jpeg',
      '/product_data/other/miumiu8.jpeg',
    ],
    description: 'La monture Miu Miu arrive avec son packaging complet : boîte, étui et pochette officielle.',
    features: [
      'Taille standard',
      'Confortable à porter',
      'Légère et résistante',
      'Adaptée à tous types de verres (vue ou anti-lumière bleue)'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['TR90'],
    rating: 4.9,
    reviews: 99,
  },
  {
    id: '162',
    name: 'Montre 32',
    price: 109,
    originalPrice: 109,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG72.jpeg', 
      '/product_data/watches/montre/IMG73.jpeg',
      '/product_data/watches/montre/IMG74.jpeg',
      '/product_data/watches/montre/IMG75.jpeg',
    ],
    description: 'bvlgari watch en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 68,
  },
  {
    id: '163',
    name: 'Montre 33',
    price: 99,
    originalPrice: 109,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG77.jpeg', 
      '/product_data/watches/montre/IMG76.jpeg',
      '/product_data/watches/montre/IMG78.jpeg',
      '/product_data/watches/montre/IMG83.jpeg',
      '/product_data/watches/montre/IMG84.jpeg',
    ],
    description: 'GUCCI GB watch en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 72,
  },
   {
    id: '164',
    name: 'Montre 34',
    price: 99,
    originalPrice: 109,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG79.jpeg', 
      '/product_data/watches/montre/IMG80.jpeg',
      '/product_data/watches/montre/IMG80A.jpeg',
      '/product_data/watches/montre/IMG79A.jpeg',
    ],
    description: 'GUCCI GR watch en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 80,
  },
  {
    id: '165',
    name: 'Montre 35',
    price: 99,
    originalPrice: 109,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG81.jpeg', 
      '/product_data/watches/montre/IMG82.jpeg',
    ],
    description: 'GUCCI GD watch en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 88,
  },
  {
    id: '166',
    name: 'collier 12',
    price: 24,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/C22.jpeg',
      '/product_data/necklace/collier/C21.jpeg',
      '/product_data/necklace/collier/C23.jpeg',
      '/product_data/necklace/collier/C24.jpeg'
    ],
    description: 'collier love.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 84,
  },
  {
    id: '167',
    name: 'collier 13',
    price: 22,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/C25.jpeg',
      '/product_data/necklace/collier/C26.jpeg',
    ],
    description: 'collier love.',
    features: [
      'Design intemporel',
      'taille standard 21cm'
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.5,
    reviews: 56,
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
