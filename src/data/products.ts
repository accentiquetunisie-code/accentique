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
    name: 'montre et bracelet 10',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_5941.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5940.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5938.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5936.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5929.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isBestSeller: true,  
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
  },
      {
    id: '2',
    name: 'montre et bracelet 14',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_5889.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5890.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5888.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5892.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5891.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 74,
  },
    
      {
    id: '3',
    name: 'montre et bracelet 20',
price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6021.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6022.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6024.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6028.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6026.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
  },
      {
    id: '4',
    name: 'montre et bracelet 6',
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
    id: '5',
    name: 'montre et bracelet 7',
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
    name: 'Pack accessoires 3',
    price: 129,
    originalPrice: 149,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6398.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6396.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6399.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6400.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6402.jpeg',
    ],
    description: '1 montre raffinée + 2 bracelets assortis, présentés dans un coffret cadeau avec roses décoratives.',
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
    id: '8',
    name: 'montre et bracelet 26',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6043.jpeg',                     
      '/product_data/watches/montre+bracelet/IMG_6041.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6040.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6042.jpeg',
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
  },
        {
    id: '10',
    name: 'montre et bracelet 4',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_5967.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5969.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5971.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5972.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5974.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
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
    price: 15,
    category: ['rings'],
    images: [
      '/product_data/rings/IMG_6853.jpeg',
      '/product_data/rings/IMG_6859.jpeg',
      '/product_data/rings/IMG_6855.jpeg',
      '/product_data/rings/IMG_6832.jpeg'
    ],
    description: 'Bague "Aura" – Acier Inoxydable & Nacre.',
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
      '/product_data/rings/IMG_4383.jpeg',
      '/product_data/rings/IMG_4384.jpeg',
      '/product_data/rings/IMG_4385.jpeg',
      '/product_data/rings/IMG_4386.jpeg',
    ],
    description: 'Bague avec pierre noir centrale.',
    features: [
      'Pierre centrale zircon cubique',
      'Design intemporel',
      'Taille ajustable'
    ],
    inStock: true,
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
      '/product_data/rings/IMG_4375.jpeg',
      '/product_data/rings/IMG_4376.jpeg',
      '/product_data/rings/IMG_4377.jpeg',
    ],
    description: 'Bague en acier inoxydable.',
    features: [
      'Design intemporel',
      'Taille ajustable'
    ],
    inStock: true,
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
      '/product_data/rings/IMG_4378.jpeg',
      '/product_data/rings/IMG_4379.jpeg',  
      '/product_data/rings/IMG_4380.jpeg',
      '/product_data/rings/IMG_4381.jpeg',
      '/product_data/rings/IMG_4382.jpeg',
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
      '/product_data/rings/IMG_4391.jpeg',
      '/product_data/rings/IMG_4392.jpeg',
      '/product_data/rings/IMG_4393.jpeg',
      '/product_data/rings/IMG_4394.jpeg',
      '/product_data/rings/IMG_4395.jpeg',
    ],
    description: 'Bague en Acier Inoxydable .',
    features: [
      'Taille ajustable',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 68,
  },
      {
    id: '38',
    name: 'Bague 9',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/IMG_4387.jpeg',
      '/product_data/rings/IMG_4388.jpeg',
      '/product_data/rings/IMG_4389.jpeg',
      '/product_data/rings/IMG_4390.jpeg'
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
    name: 'Parure Cœur – Acier Inoxydable',
    price: 42,
    category: ['gift-sets'],
    images: [
      '/product_data/gift-sets/coffret/IMG_5740.jpeg',
      '/product_data/gift-sets/coffret/IMG_5738.jpeg',
      '/product_data/gift-sets/coffret/IMG_5736.jpeg',
      '/product_data/gift-sets/coffret/IMG_5739.jpeg'
    ],
    description: 'Parure élégante composée d’un collier et d’un bracelet en acier inoxydable,',
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
    name: ' set tiffany',
    price: 99,
    category: ['gift-sets'],
    images: [
      '/product_data/package/packdaccessoire/IMG_5568.jpeg',
      '/product_data/package/packdaccessoire/IMG_5565.jpeg',
      '/product_data/package/packdaccessoire/IMG_5569.jpeg',
      '/product_data/package/packdaccessoire/IMG_5570.jpeg',

    ],
    description: 'Un coffret élégant avec bijoux raffinés en acier inoxydable, accompagné de roses décoratives',
    features: [
      'Design intemporel',
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    isBestSeller: false,
    materials: ['acier inoxydable'],
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
    name: 'montre et bracelet 15',
    price: 89,
    originalPrice: 109,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6002.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6001.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6004.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6006.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6005.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
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
    name: 'Parure Cœur noir – Coffret Cadeau',
    price: 59,
    category: ['gift-sets'],
    images: [
      '/product_data/gift-sets/coffret/IMG_6246.jpeg',
      '/product_data/gift-sets/coffret/IMG_6248.jpeg',
      '/product_data/gift-sets/coffret/IMG_6260.jpeg',
      '/product_data/gift-sets/coffret/IMG_6255.jpeg',
      '/product_data/gift-sets/coffret/IMG_6259.jpeg',
    ],
    description: 'Parure composée d’un collier et de boucles d’oreilles en forme de cœur noir aux finitions dorées. Présentée dans un coffret cadeau avec roses décoratives, carte et sac assorti, prête à offrir.',
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
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_6214.jpeg',
      '/product_data/bracelets/IMG_6219.jpeg',
      '/product_data/bracelets/IMG_6223.jpeg',
      '/product_data/bracelets/IMG_6215.jpeg',
    ],
    description: 'Lot de bracelets spirales aux finitions dorée, en acier inoxydable.',
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
    inStock: false,
    isBestSeller: false,
    materials: ['Acier inoxydable'],
    rating: 4.5,
    reviews: 58,
  },
  {
    id: '93',
    name: 'Bracelet 10',
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/IMG_6236.jpeg',
      '/product_data/bracelets/IMG_6242.jpeg',
      '/product_data/bracelets/IMG_6195.jpeg',
      '/product_data/bracelets/IMG_61944.jpeg',
    ],
    description: 'Lot de bracelets spirales aux finitions dorée, argentée et rose gold en acier inoxydable.',
    features: [
      'Taille standard'
    ],
    inStock: true,
    isBestSeller: true,
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
    inStock: true,
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
    inStock: true,
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
      '/product_data/monture/82.jpeg',
      '/product_data/monture/83.jpeg',
      '/product_data/monture/84.jpeg',
      '/product_data/monture/85.jpeg',
      '/product_data/monture/86.jpeg',
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
    inStock: true,
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
      '/product_data/monture/73.jpeg',
      '/product_data/monture/74.jpeg',
      '/product_data/monture/71.jpeg',
      '/product_data/monture/75.jpeg',
      '/product_data/monture/76.jpeg',
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
    reviews: 88,
  },
  {
    id: '107',
    name: 'monture 14',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/monture/87.jpeg',
      '/product_data/monture/88.jpeg',
      '/product_data/monture/89.jpeg',
      '/product_data/monture/90.jpeg',
      '/product_data/monture/91.jpeg'
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
      '/product_data/monture/77.jpeg',
      '/product_data/monture/78.jpeg',
      '/product_data/monture/79.jpeg',
      '/product_data/monture/80.jpeg',
      '/product_data/monture/81.jpeg'
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
    reviews: 28,
  },
  {
    id: '110',
    name: 'montre et bracelet 27',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6064.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6065.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6066.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6067.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6068.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
  },
  {
    id: '111',
    name: 'montre et bracelet 1',
    price: 79,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6049.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6052.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6050.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6053.jpeg',
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 88,
  },
  {
    id: '112',
    name: 'Pack accessoires 2',
    price: 129,
    originalPrice: 149,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6387.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6385.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6384.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6386.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6389.jpeg',
    ],
    description: '1 montre raffinée + 2 bracelets assortis, présentés dans un coffret cadeau avec roses décoratives.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 84,
  },
   {
    id: '113',
    name: 'montre et bracelet 9',
    price: 99,
    originalPrice: 119,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6491.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6489.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6490.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6493.jpeg',
    ],
    description: 'Montre + bracelet , finition acier inoxydable ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 64,
  },

  {
    id: '114',
    name: 'Pack accessoires 4',
    price: 109,
    originalPrice: 129,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_5463.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5468.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5462.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5467.jpeg'
    ],
    description: 'Coffret raffiné comprenant une montre dorée accompagnée de bracelets élégants, en acier inoxydable',
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
    price: 109,
    originalPrice: 129,
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
      '/product_data/monture/IMG_6337.jpeg',
      '/product_data/monture/IMG_6335.jpeg',
      '/product_data/monture/IMG_6336.jpeg',
      '/product_data/monture/IMG_6334.jpeg',
      '/product_data/monture/IMG_6338.jpeg',
      '/product_data/monture/IMG_6333.jpeg'
    ],
    description: 'Démarquez-vous avec ces lunettes de soleil sophistiquées. Elles allient une monture ovale en métal doré à des verres noirs fumés pour un look glamour et vintage',
    features: [
      'Forme : Ovale / Elliptique',
      'Détail : Logo CELINE doré sur les branches',
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
      '/product_data/watches/montre/IMG_5213.jpeg',
      '/product_data/watches/montre/IMG_5204.jpeg',
      '/product_data/watches/montre/IMG_5214.jpeg',
      '/product_data/watches/montre/IMG_5216.jpeg',
    ],
    description: 'Une montre IEKE en acier inoxydable.',
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
    price: 99,
    originalPrice: 109,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG_5154.jpeg',
      '/product_data/watches/montre/IMG_5156.jpeg',
      '/product_data/watches/montre/IMG_5157.jpeg',
       '/product_data/watches/montre/IMG_5171.jpeg',
      '/product_data/watches/montre/IMG_5163.jpeg',
    ],
    description: 'Une montre michael kors en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 64,
  },
  {
    id: '124',
    name: 'Montre 3',
    price: 99,
    originalPrice: 109,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG_5246.jpeg',
      '/product_data/watches/montre/IMG_5248.jpeg',
      '/product_data/watches/montre/IMG_5251.jpeg',
      '/product_data/watches/montre/IMG_5262.jpeg',
      '/product_data/watches/montre/IMG_5265.jpeg',
    ],
    description: 'Une montre Gucci en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
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
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.1,
    reviews: 32,
  },
  {
    id: '128',
    name: 'Montre 7',
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG_5276.jpeg',
      '/product_data/watches/montre/IMG_5279.jpeg',
      '/product_data/watches/montre/IMG_5188.jpeg',
      '/product_data/watches/montre/IMG_5284.jpeg',
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
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.5,
    reviews: 49,
  },
  {
    id: '130',
    name: 'Montre 9',
    price: 69,
    originalPrice: 89,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG1.jpeg',
      '/product_data/watches/montre/IMG2.jpeg',
    ],
    description: 'Une montre Cartier FB en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet taille standard'
    ],
    inStock: false,
    isNew: true,
    isFreeDelivery: true,
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
      '/product_data/watches/montre/IMG_5703.jpeg',
      '/product_data/watches/montre/IMG_5702.jpeg',
      '/product_data/watches/montre/IMG_5710.jpeg',
      '/product_data/watches/montre/IMG_5712.jpeg',
    ],
    description: 'Une montre DW en acier inoxydable.',
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
      '/product_data/watches/montre/IMG17.jpeg',
      '/product_data/watches/montre/IMG16.jpeg',
      '/product_data/watches/montre/IMG15.jpeg',
    ],
    description: 'Une montre Cartier FB en acier inoxydable.',
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
    inStock: false,
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
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG18.jpeg',
      '/product_data/watches/montre/IMG19.jpeg',
      '/product_data/watches/montre/IMG20.jpeg',
    ],
    description: 'Une montre cartier FD en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: false,
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
      '/product_data/watches/montre/IMG_5142.jpeg',
      '/product_data/watches/montre/IMG_5138.jpeg',
      '/product_data/watches/montre/IMG_5148.jpeg',
      '/product_data/watches/montre/IMG_5143.jpeg',
      '/product_data/watches/montre/IMG_5149.jpeg',
    ],
    description: 'Une montre Louis Vuitton en acier inoxydable.',
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
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG99.jpeg',
      '/product_data/watches/montre/IMG100.jpeg',
      '/product_data/watches/montre/IMG101.jpeg',
      '/product_data/watches/montre/IMG102.jpeg',
      '/product_data/watches/montre/IMG103.jpeg',
    ],
    description: 'Une montre Dior en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: true,
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
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG_5400.jpeg',
      '/product_data/watches/montre/IMG_5409.jpeg',
      '/product_data/watches/montre/IMG_5188.jpeg',
      '/product_data/watches/montre/IMG_5407.jpeg',
    ],
    description: 'Une montre Cartier fond blanc en acier inoxydable.',
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
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG_5189.jpeg',
      '/product_data/watches/montre/IMG_5190.jpeg',
      '/product_data/watches/montre/IMG_5194.jpeg',
      '/product_data/watches/montre/IMG_5198.jpeg',
      '/product_data/watches/montre/IMG_5200.jpeg',
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
      '/product_data/watches/montre/IMG_5184.jpeg',
      '/product_data/watches/montre/IMG_5188.jpeg',
      '/product_data/watches/montre/IMG_5178.jpeg',
    ],
    description: 'Une montre IEKE en acier inoxydable.',
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
            '/product_data/watches/montre/IMG_5110.jpeg',
      '/product_data/watches/montre/IMG_5113.jpeg',
      '/product_data/watches/montre/IMG_5114.jpeg',
      '/product_data/watches/montre/IMG_5117.jpeg',
    ],
    description: 'Une montre cartier en acier inoxydable.',
    features: [
      'Mouvement quartz de précision',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: true,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 5.8,
    reviews: 97,
  },
  {
    id: '146',
    name: 'Montre 25',
    price: 89,
    originalPrice: 109,
    category: ['watches'],
    images: [
   '/product_data/watches/montre/IMG93.jpeg',
      '/product_data/watches/montre/IMG94.jpeg',
      '/product_data/watches/montre/IMG95.jpeg',
      '/product_data/watches/montre/IMG96.jpeg',
      '/product_data/watches/montre/IMG97.jpeg'
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
    price: 89,
    originalPrice: 109,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG_5227.jpeg',
      '/product_data/watches/montre/IMG_5230.jpeg',
      '/product_data/watches/montre/IMG_5240.jpeg',
      '/product_data/watches/montre/IMG_5235.jpeg',
      '/product_data/watches/montre/IMG_5244.jpeg',
    ],
    description: 'Une montre Chanel en acier inoxydable.',
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
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG_5268.jpeg',
      '/product_data/watches/montre/IMG_5267.jpeg',
      '/product_data/watches/montre/IMG_5266.jpeg',
      '/product_data/watches/montre/IMG_5274.jpeg',
    ],
    description: 'Une montre Michael Kors en acier inoxydable.',
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
    price: 109,
    originalPrice: 129,
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
    price: 109,
    originalPrice: 129,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_5454.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5453.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5451.jpeg'
   
    ],
    description: 'Coffret raffiné comprenant une montre dorée fond noir accompagnée de bracelets élégants, en acier inoxydable.',
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
    name: 'montre et bracelet 18',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6080.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6079.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6078.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6077.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6076.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 66,
  },
   {
    id: '158',
    name: 'Pack accessoires 11',
    price: 109,
    originalPrice: 129,
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
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.4,
    reviews: 94,
  },
  {
    id: '159',
    name: 'montre et bracelet 2',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
       '/product_data/watches/montre+bracelet/IMG_6056.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6058.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6059.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6061.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6060.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.6,
    reviews: 70,
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
    price: 79,
    originalPrice: 99,
    category: ['watches'],
    images: [
      '/product_data/watches/montre/IMG_5422.jpeg', 
      '/product_data/watches/montre/IMG_5424.jpeg', 
      '/product_data/watches/montre/IMG_5188.jpeg', 
      '/product_data/watches/montre/IMG_5423.jpeg'
    ],
    description: 'Une montre cartier fond noir en acier inoxydable.',
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
      '/product_data/watches/montre/IMG84.jpeg',
      '/product_data/watches/montre/IMG82.jpeg',
      '/product_data/watches/montre/IMG83.jpeg',
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
  {
    id: '168',
    name: 'montre et bracelet 21',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_5860.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5861.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5863.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5864.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
  },
  {
    id: '169',
    name: 'montre et bracelet 16',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6009.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6010.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6012.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6014.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6016.jpeg'
      
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.8,
    reviews: 124,
  },
   {
    id: '170',
    name: 'montre et bracelet 12',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_5875.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5876.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5879.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5877.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5881.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
     isBestSeller: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 83,
  },
  {
    id: '171',
    name: 'montre et bracelet 19',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6106.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6107.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6108.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
  },
  {
    id: '172',
    name: 'montre et bracelet 13',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6089.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6092.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6090.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6093.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6094.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isBestSeller: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 74,
  },
  {
    id: '173',
    name: 'montre et bracelet 17',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_5959.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5964.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5963.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5960.jpeg'
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 74,
  },

 {
    id: '174',
    name: 'montre et bracelet 25',
    price: 89,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_5945.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5946.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5949.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5951.jpeg',
      '/product_data/watches/montre+bracelet/IMG_5952.jpeg',
    ],
    description: 'Montre + bracelet , finition acier inoxydable, dans un coffret LOVE garni de roses ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: false,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
  },
  {
    id: '175',
    name: 'montre et bracelet 22',
    price: 99,
    originalPrice: 119,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6469.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6470.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6472.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6471.jpeg',
    ],
    description: 'Montre + bracelet , finition acier inoxydable ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.9,
    reviews: 64,
  },
       {
    id: '176',
    name: 'monture 17',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/monture/92.jpeg',
      '/product_data/monture/93.jpeg',
      '/product_data/monture/94.jpeg',
      '/product_data/monture/95.jpeg',
      '/product_data/monture/96.jpeg',
      '/product_data/monture/97.jpeg',
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
    rating: 4.3,
    reviews: 86,
  },
  {
    id: '177',
    name: 'monture 18',
    price: 37,
    category: ['mount'],
    images: [
      '/product_data/monture/99.jpeg',
      '/product_data/monture/100.jpeg',
      '/product_data/monture/101.jpeg',
      '/product_data/monture/102.jpeg',
      '/product_data/monture/103.jpeg',
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
    rating: 4.5,
    reviews: 91,
    },
  {
    id: '178',
    name: 'Bague 12',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/IMG_4396.jpeg',
      '/product_data/rings/IMG_4397.jpeg',
      '/product_data/rings/IMG_4398.jpeg',
      '/product_data/rings/IMG_4399.jpeg',
      '/product_data/rings/IMG_4400.jpeg',
    ],
    description: 'Bague en Acier Inoxydable .',
    features: [
      'Taille ajustable',
    ],
    inStock: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 45,
  },
   {
    id: '179',
    name: 'montre et bracelet 23',
    price: 99,
    originalPrice: 119,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6449.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6457.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6458.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6456.jpeg',
    ],
    description: 'Montre + bracelet , finition acier inoxydable ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
  },
{
    id: '180',
    name: 'montre et bracelet 24',
    price: 99,
    originalPrice: 119,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6465.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6466.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6464.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6463.jpeg',
    ],
    description: 'Montre + bracelet , finition acier inoxydable ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 64,
  },
  {
    id: '181',
    name: 'montre et bracelet 11',
    price: 99,
    originalPrice: 119,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/IMG_6499.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6500.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6501.jpeg',
      '/product_data/watches/montre+bracelet/IMG_6503.jpeg',
    ],
    description: 'Montre + bracelet , finition acier inoxydable ',
    features: [
      'Résistante à l\'eau (3atm)',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: false,
    isFreeDelivery: true,
    materials: ['Acier inoxydable'],
    rating: 4.7,
    reviews: 83,
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
  { id: 'gift-sets', name: 'Parures', count: products.filter(p => p.category.includes('gift-sets')).length },
  { id: 'earings', name: 'boucles d oreilles', count: products.filter(p => p.category.includes('earings')).length },
  { id: 'fan', name: 'Éventail', count: products.filter(p => p.category.includes('fan')).length },
  { id: 'package', name: 'pack', count: products.filter(p => p.category.includes('package')).length },
  { id: 'mount', name: 'Montures', count: products.filter(p => p.category.includes('mount')).length },
  { id: 'other', name: 'autres', count: products.filter(p => p.category.includes('other')).length }
];
