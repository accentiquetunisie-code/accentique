import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Star, Gift, Clock, Check } from 'lucide-react';
import { products, bundles } from '../data/products';
import { Product, ProductVariant } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
const ProductDetail = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedTab, setSelectedTab] = useState('description');
  const {
    addToCart
  } = useCart();
  useEffect(() => {
    const foundProduct = products.find(p => p.id === id);
    setProduct(foundProduct || null);
    setSelectedImageIndex(0);

    // Set default variant if available
    if (foundProduct?.variants && foundProduct.variants.length > 0) {
      setSelectedVariant(foundProduct.variants[0]);
    } else {
      setSelectedVariant(null);
    }
  }, [id]);
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Produit non trouvé</h2>
          <Link to="/shop" className="btn-gold px-6 py-2 rounded-lg">
            Retour à la boutique
          </Link>
        </div>
      </div>;
  }
  const relatedProducts = products.filter(p => p.category.some(cat => product.category.includes(cat)) && p.id !== product.id).slice(0, 4);
  const handleAddToCart = () => {
    const productToAdd = {
      ...product,
      selectedVariant: selectedVariant?.id || undefined,
      selectedVariantName: selectedVariant?.name || undefined,
      price: selectedVariant?.price || product.price
    };
    addToCart(productToAdd, quantity);
  };
  const getCategoryDisplayName = (categories: string[]) => {
    const categoryNames = categories.map(cat => {
      switch (cat) {
        case 'gift-sets':
          return 'Coffret';
        case 'watches':
          return 'Montre';
        case 'bracelets':
          return 'Bracelet';
        case 'rings':
          return 'Bague';
        default:
          return cat;
      }
    });
    return categoryNames.join(' · ');
  };
  const getCurrentPrice = () => {
    return selectedVariant?.price || product.price;
  };
  const getCurrentImage = () => {
    if (selectedVariant) {
      return selectedVariant.image;
    }
    return product.images[selectedImageIndex];
  };
  const getCurrentStock = () => {
    if (selectedVariant) {
      return selectedVariant.inStock;
    }
    return product.inStock;
  };
  const reviews = [{
    name: "Sarah K.",
    rating: 5,
    comment: "Absolument magnifique ! La qualité est exceptionnelle et l'emballage très soigné.",
    date: "Il y a 2 jours",
    verified: true
  }, {
    name: "Amina L.",
    rating: 5,
    comment: "Parfait pour un cadeau. Ma sœur était ravie !",
    date: "Il y a 1 semaine",
    verified: true
  }, {
    name: "Leila M.",
    rating: 4,
    comment: "Très joli produit, conforme à la description. Livraison rapide.",
    date: "Il y a 2 semaines",
    verified: true
  }];
  return <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-gold-600">Accueil</Link>
            <span className="text-gray-300">/</span>
            <Link to="/shop" className="text-gray-500 hover:text-gold-600">Boutique</Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-800">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Images */}
          <div className="space-y-4">
            <div className="relative">
              <img src={getCurrentImage()} alt={product.name} className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg" />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && <span className="bg-blush-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Nouveau
                  </span>}
                {product.isBestSeller && <span className="bg-gold-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    Bestseller
                  </span>}
                {product.originalPrice && <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    -{Math.round((product.originalPrice - getCurrentPrice()) / product.originalPrice * 100)}%
                  </span>}
              </div>
            </div>
            
            {/* Thumbnails - show product images if no variant selected, or variant image + product images */}
            {product.images.length > 1 && !selectedVariant && <div className="flex space-x-2">
                {product.images.map((image, index) => <button key={index} onClick={() => setSelectedImageIndex(index)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${index === selectedImageIndex ? 'border-gold-500' : 'border-gray-200'}`}>
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>)}
              </div>}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500 uppercase tracking-wide">
                  {getCategoryDisplayName(product.category)}
                </span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-sm text-gray-500">({product.reviews} avis)</span>
                </div>
              </div>
              
              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                {product.name}
                {selectedVariant && <span className="text-xl text-gray-600 font-normal ml-2">
                    - {selectedVariant.name}
                  </span>}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gold-600">
                  {getCurrentPrice()} DT
                </span>
                {product.originalPrice && <>
                    <span className="text-xl text-gray-400 line-through">
                      {product.originalPrice} DT
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full font-medium">
                      Économisez {product.originalPrice - getCurrentPrice()} DT
                    </span>
                  </>}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color/Variant Selection */}
            {product.variants && product.variants.length > 0}

            {/* Materials */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Matériaux</h3>
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, index) => <span key={index} className="bg-beige-100 text-beige-800 text-sm px-3 py-1 rounded-full">
                    {material}
                  </span>)}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Caractéristiques</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => <li key={index} className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>)}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="font-semibold text-gray-800">Quantité:</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 hover:bg-gray-100 transition-colors">
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 hover:bg-gray-100 transition-colors">
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={handleAddToCart} disabled={!getCurrentStock()} className="btn-gold px-8 py-4 rounded-lg font-semibold text-lg flex-1 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  <ShoppingBag className="w-5 h-5" />
                  <span>{getCurrentStock() ? 'Ajouter au Panier' : 'Rupture de Stock'}</span>
                </button>
                
                <button className="btn-elegant px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2">
                  <Gift className="w-5 h-5" />
                  <span>Emballage Cadeau</span>
                </button>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="bg-beige-50 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Clock className="w-4 h-4 text-gold-600" />
                <span className="font-semibold text-gray-800">Livraison Express</span>
              </div>
              <p className="text-sm text-gray-600">
                Commandez avant 16h pour une livraison le lendemain à Tunis (2-3 jours ailleurs en Tunisie)
              </p>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[{
              id: 'description',
              label: 'Description'
            }, {
              id: 'reviews',
              label: `Avis (${product.reviews})`
            }, {
              id: 'shipping',
              label: 'Livraison'
            }].map(tab => <button key={tab.id} onClick={() => setSelectedTab(tab.id)} className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${selectedTab === tab.id ? 'border-gold-500 text-gold-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                  {tab.label}
                </button>)}
            </nav>
          </div>

          <div className="p-6">
            {selectedTab === 'description' && <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.description}
                </p>
                <h4 className="font-semibold text-gray-800 mb-2">Matériaux de Qualité</h4>
                <ul className="space-y-1 mb-4">
                  {product.materials.map((material, index) => <li key={index} className="text-gray-600">• {material}</li>)}
                </ul>
                <h4 className="font-semibold text-gray-800 mb-2">Entretien</h4>
                <p className="text-gray-600">
                  Pour préserver l'éclat de votre bijou, évitez le contact avec l'eau, les parfums et les produits chimiques. 
                  Rangez-le dans un endroit sec et utilisez un chiffon doux pour le nettoyer.
                </p>
              </div>}

            {selectedTab === 'reviews' && <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Avis clients</h3>
                  <button className="text-gold-600 hover:text-gold-700 text-sm font-medium">
                    Écrire un avis
                  </button>
                </div>
                
                <div className="space-y-4">
                  {reviews.map((review, index) => <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-gray-800">{review.name}</span>
                          {review.verified && <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Achat vérifié
                            </span>}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />)}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>)}
                </div>
              </div>}

            {selectedTab === 'shipping' && <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Options de Livraison</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Livraison Express (Tunis)</span>
                      <span className="font-medium">8 DT - 24h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Livraison Standard (Tunisie)</span>
                      <span className="font-medium">8 DT - 2-3 jours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Livraison Gratuite</span>
                      <span className="font-medium">À partir de 99 DT</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Retours & Échanges</h4>
                  <p className="text-gray-600">
                    Retour gratuit sous 14 jours. Les articles doivent être dans leur état d'origine 
                    avec l'emballage et les étiquettes.
                  </p>
                </div>
              </div>}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && <section>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-8">
              Vous Pourriez Aussi Aimer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(relatedProduct => <ProductCard key={relatedProduct.id} product={relatedProduct} />)}
            </div>
          </section>}
      </div>
    </div>;
};
export default ProductDetail;
