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
  category: ('watches' | 'bracelets' | 'rings' | 'earings' | 'gift-sets' | 'fan' | 'necklace' | 'package' | 'other')[];
  images: string[];
  description: string;
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  materials: string[];
  rating: number;
  reviews: number;
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
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet1.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
      {
    id: '2',
    name: 'montre et bracelet 2',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet2.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
    
      {
    id: '3',
    name: 'montre et bracelet 3',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet4.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
      {
    id: '4',
    name: 'montre et bracelet 4',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet5.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
      {
    id: '5',
    name: 'montre et bracelet 5',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet6.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
      {
    id: '6',
    name: 'montre et bracelet 6',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet7.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
      {
    id: '7',
    name: 'montre et bracelet 7',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet8.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
      {
    id: '8',
    name: 'montre et bracelet 8',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet9.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
      {
    id: '9',
    name: 'montre et bracelet 9',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montreetbracelet10.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },

        {
    id: '180',
    name: 'montre et bracelet 10',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montre et bracelet 10.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
          {
    id: '181',
    name: 'montre et bracelet 11',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montre et bracelet 11.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
        {
    id: '182',
    name: 'montre et bracelet 12',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre+bracelet/montre et bracelet 12.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },

  {
    id: '10',
    name: '3 bracelet : van cleef noire + autre ...',
    price: 69,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/3-bracelet.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Chaîne en laiton plaqué or',
      'Pendentifs cristaux Swarovski',
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Laiton plaqué or', 'Cristaux Swarovski'],
    rating: 4.9,
    reviews: 89,
  },
    {
    id: '11',
    name: 'Bracelet 1',
    price: 27,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-1.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Chaîne en laiton plaqué or',
      'Pendentifs cristaux Swarovski',
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Laiton plaqué or', 'Cristaux Swarovski'],
    rating: 4.9,
    reviews: 89,
  },
    {
    id: '12',
    name: 'Bracelet 2',
    price: 27,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-2.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Chaîne en laiton plaqué or',
      'Pendentifs cristaux Swarovski',
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Laiton plaqué or', 'Cristaux Swarovski'],
    rating: 4.9,
    reviews: 89,
  },
    {
    id: '13',
    name: 'Bracelet 3',
    price: 27,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-3.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Chaîne en laiton plaqué or',
      'Pendentifs cristaux Swarovski',
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Laiton plaqué or', 'Cristaux Swarovski'],
    rating: 4.9,
    reviews: 89,
  },
    {
    id: '14',
    name: 'Bracelet 4',
    price: 23,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-4.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Chaîne en laiton plaqué or',
      'Pendentifs cristaux Swarovski',
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Laiton plaqué or', 'Cristaux Swarovski'],
    rating: 4.9,
    reviews: 89,
  },
    {
    id: '15',
    name: 'Bracelet 5',
    price: 23,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/bracelet-5.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Chaîne en laiton plaqué or',
      'Pendentifs cristaux Swarovski',
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Laiton plaqué or', 'Cristaux Swarovski'],
    rating: 4.9,
    reviews: 89,
  },
      {
    id: '16',
    name: '3 Bracelet : van cleef blanc + autre ...',
    price: 23,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/3-bracelet-3.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Chaîne en laiton plaqué or',
      'Pendentifs cristaux Swarovski',
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Laiton plaqué or', 'Cristaux Swarovski'],
    rating: 4.9,
    reviews: 89,
  },
      {
    id: '17',
    name: '3 Bracelet : van cleef doree + autre ...',
    price: 23,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/3-bracelet-2.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Chaîne en laiton plaqué or',
      'Pendentifs cristaux Swarovski',
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Laiton plaqué or', 'Cristaux Swarovski'],
    rating: 4.9,
    reviews: 89,
  },
      {
    id: '18',
    name: '2 Bracelet : van cleef noire + autre ...',
    price: 23,
    category: ['bracelets'],
    images: [
      '/product_data/bracelets/3-bracelet-4.jpeg'
    ],
    description: 'Bracelet délicat en chaîne dorée avec pendentifs scintillants.',
    features: [
      'Chaîne en laiton plaqué or',
      'Pendentifs cristaux Swarovski',
      'Fermoir sécurisé',
      'Longueur ajustable'
    ],
    inStock: true,
    isBestSeller: true,
    materials: ['Laiton plaqué or', 'Cristaux Swarovski'],
    rating: 4.9,
    reviews: 89,
  },

   {
    id: '34',
    name: 'Bague 1',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 1.jpg'
    ],
    description: 'Bague solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '35',
    name: 'Bague 2',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 2.jpg'
    ],
    description: 'Bague solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '36',
    name: 'Bague 3',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 3.jpg'
    ],
    description: 'Bague solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '37',
    name: 'Bague 4',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 4.jpg'
    ],
    description: 'Bague solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '38',
    name: 'Bague 5',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 5.jpg'
    ],
    description: 'Bague solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '39',
    name: 'Bague 6',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 6.jpg'
    ],
    description: 'Bague solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '40',
    name: 'Bague 7',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 7.jpg'
    ],
    description: 'Bague solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '41',
    name: 'Bague 8',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 8.jpg'
    ],
    description: 'Bague solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '42',
    name: 'Bague 9',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 9.jpg'
    ],
    description: 'Bague solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '43',
    name: 'Bague 10',
    price: 18,
    category: ['rings'],
    images: [
      '/product_data/rings/bague 10.jpg'
    ],
    description: 'Bague solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    inStock: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
    {
    id: '101',
    name: 'Pack d\'accessoires 2',
    price: 43,
    category: ['gift-sets'],
    images: [
      '/product_data/package/packdaccessoire/2.jpeg'
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
    id: '102',
    name: 'Pack d\'accessoires 3',
    price: 43,
    category: ['gift-sets'],
    images: [
      '/product_data/package/packdaccessoire/3.jpeg'
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
    id: '52',
    name: 'choker + bracelet',
    price: 68,
    category: ['gift-sets'],
    images: [
      '/product_data/package/choker+bracelet/1.jpeg',
      '/product_data/package/choker+bracelet/2.jpeg',
      '/product_data/package/choker+bracelet/3.jpeg',
      '/product_data/package/choker+bracelet/4.jpeg'
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
    id: '53',
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
    id: '54',
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
    id: '55',
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
    id: '56',
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
    id: '57',
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
    id: '58',
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
    id: '59',
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
    id: '60',
    name: ' sets 1',
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
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    isNew: true,
    isBestSeller: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
    {
    id: '61',
    name: ' sets 2',
    price: 69,
    category: ['gift-sets'],
    images: [
      '/product_data/gift-sets/coffret/sets2.jpeg',
      '/product_data/gift-sets/coffret/sets3.jpeg',
      '/product_data/gift-sets/coffret/sets4.jpeg'
    ],
    description: '',
    features: [
      'Pierre centrale zircon cubique',
      'Anneau en argent plaqué or',
      'Design intemporel',
      'Tailles 52-60 disponibles'
    ],
    inStock: true,
    isNew: true,
    isBestSeller: true,
    materials: ['Argent plaqué or', 'Zircon cubique'],
    rating: 4.7,
    reviews: 67,
  },
{
    id: '62',
    name: 'collier 1',
    price: 23,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier1.jpeg'
    ],
    description: 'collier solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '63',
    name: 'collier 2',
    price: 23,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier2.jpeg'
    ],
    description: 'collier solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    name: 'collier 3',
    price: 23,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier3.jpeg'
    ],
    description: 'collier solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '65',
    name: 'collier 4',
    price: 23,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier4.jpeg'
    ],
    description: 'collier solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    name: 'collier 5',
    price: 23,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier5.jpeg'
    ],
    description: 'collier solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    name: 'collier 6',
    price: 23,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier6.jpeg'
    ],
    description: 'collier solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    name: 'collier 7',
    price: 23,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier7.jpeg'
    ],
    description: 'collier solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    name: 'collier 8',
    price: 23,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier8.jpeg'
    ],
    description: 'collier solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '70',
    name: 'collier 9',
    price: 23,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier9.jpeg'
    ],
    description: 'collier solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '71',
    name: 'collier 10',
    price: 23,
    category: ['necklace'],
    images: [
      '/product_data/necklace/collier/collier10.jpeg',
      '/product_data/necklace/collier/collier11.jpeg',
      '/product_data/necklace/collier/collier12.jpeg'
    ],
    description: 'collier solitaire avec pierre centrale et anneau doré finement ciselé.',
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
    id: '91',
    name: 'boucle-d\'oreilles A1',
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
    id: '92',
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
    id: '93',
    name: 'boucle-d\'oreilles 3',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle5.jpeg'
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
    id: '94',
    name: 'boucle-d\'oreilles 4',
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
    id: '95',
    name: 'boucle-d\'oreilles 5',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle7.jpeg'
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
    id: '108',
    name: 'boucle-d\'oreilles 6',
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
    id: '191',
    name: 'boucle-d\'oreilles A1',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle a1.jpeg'
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
    id: '193',
    name: 'boucle-d\'oreilles A2',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle a3.jpeg'
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
    id: '194',
    name: 'boucle-d\'oreilles A3',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle a4.jpeg'
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
    id: '195',
    name: 'boucle-d\'oreilles A4',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle a5.jpeg'
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
    id: '196',
    name: 'boucle-d\'oreilles A5',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle a6.jpeg'
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
    id: '197',
    name: 'boucle-d\'oreilles A6',
    price: 18,
    category: ['earings'],
    images: [
      '/product_data/earings/boucle a7.jpeg'
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
    id: '96',
    name: 'montre 1',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre/montre-1.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
      {
    id: '97',
    name: 'montre 2',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre/montre-2.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
  },
      {
    id: '98',
    name: 'montre 3',
    price: 99,
    originalPrice: 110,
    category: ['package'],
    images: [
      '/product_data/watches/montre/montre-3.jpeg'
    ],
    description: 'Une montre élégante avec cadran nacré et bracelet en acier inoxydable plaqué or.',
    features: [
      'Mouvement quartz de précision',
      'Résistante à l\'eau (30m)',
      'Cadran nacré avec cristaux',
      'Bracelet ajustable'
    ],
    inStock: true,
    isNew: true,
    materials: ['Acier inoxydable plaqué or', 'Cadran nacré', 'Cristaux'],
    rating: 4.8,
    reviews: 124,
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
  { id: 'other', name: 'autres', count: products.filter(p => p.category.includes('other')).length }
];
