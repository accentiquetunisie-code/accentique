
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Gift, Star, Clock, ShoppingBag } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, bundles } from '../data/products';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const featuredProducts = products.filter(p => p.isBestSeller || p.isNew).slice(0, 4);
  const testimonials = [
    {
      name: "Amira K.",
      location: "Tunis",
      text: "Qualité exceptionnelle ! Ma montre Élégance reçoit des compliments tous les jours. Emballage magnifique pour offrir.",
      rating: 5,
      product: "Montre Élégance Dorée"
    },
    {
      name: "Sarra M.",
      location: "Sfax",
      text: "Service client au top et livraison rapide. Le bracelet est encore plus beau que sur les photos !",
      rating: 5,
      product: "Bracelet Chaîne Précieuse"
    },
    {
      name: "Leila B.",
      location: "Sousse",
      text: "Coffret cadeau parfait pour ma sœur. Elle était ravie ! Je recommande vivement Accentique.",
      rating: 5,
      product: "Coffret Cadeau Premium"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-elegant min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Un style <span className="text-gradient-gold">unique</span> avec accentique
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez notre collection d'accessoires élégants, parfaits pour sublimer votre style ou offrir avec amour. Qualité premium, emballage luxueux.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/shop"
                className="btn-gold px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Découvrir la Collection</span>
              </Link>
              <Link
                to="/shop?category=gift-sets"
                className="btn-elegant px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2"
              >
                <Gift className="w-5 h-5" />
                <span>Idées Cadeaux</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Edition Countdown */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Édition Limitée • Collection D'été
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Coffrets exclusifs disponibles pour une durée limitée
          </p>

          <div className="flex justify-center items-center space-x-8 mb-8">
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                <span className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
              </div>
              <span className="text-sm mt-2 block">Heures</span>
            </div>
            <span className="text-2xl">:</span>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                <span className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
              </div>
              <span className="text-sm mt-2 block">Minutes</span>
            </div>
            <span className="text-2xl">:</span>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                <span className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
              <span className="text-sm mt-2 block">Secondes</span>
            </div>
          </div>

          <Link
            to="/shop?category=gift-sets"
            className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <Gift className="w-5 h-5" />
            <span>Voir les Coffrets</span>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Coups de Cœur
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection des pièces les plus appréciées par nos clientes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/shop"
              className="btn-elegant px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2"
            >
              <span>Voir Toute la Collection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Bundle Offers */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Offres Spéciales Bundle
            </h2>
            <p className="text-lg text-gray-600">
              Économisez en achetant nos sets coordonnés
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bundles.map((bundle) => (
              <div key={bundle.id} className="card-elegant p-6">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                  <img
                    src={bundle.image}
                    alt={bundle.name}
                    loading="lazy"
                    decoding="async"
                    width={128}
                    height={128}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                      {bundle.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{bundle.description}</p>
                    <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                      <span className="text-2xl font-bold text-gold-600">
                        {bundle.bundlePrice} DT
                      </span>
                      <span className="text-lg text-gray-400 line-through">
                        {bundle.originalPrice} DT
                      </span>
                      <span className="bg-gold-100 text-gold-800 text-sm px-2 py-1 rounded-full font-medium">
                        -{bundle.discount}%
                      </span>
                    </div>
                    <button className="btn-gold px-6 py-2 rounded-lg font-semibold">
                      Ajouter au Panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Ce Que Disent Nos Clientes
            </h2>
            <p className="text-lg text-gray-600">
              Plus de 1000 femmes nous font confiance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elegant p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                  <p className="text-xs text-gold-600 mt-1">{testimonial.product}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              #AccentiqueStyle
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Partagez votre style et inspirez la communauté
            </p>
            <a
              href="https://instagram.com/accentique.tn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-600 hover:text-gold-700 font-semibold inline-flex items-center space-x-2"
            >
              <span>@accentique.tn</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/product_data/package/95/1.jpeg',
              '/product_data/gift-sets/89/1.jpeg',
              '/product_data/earings/52/1.jpeg',
              '/product_data/other/18/1.jpeg'
            ].map((image, index) => (
              <div key={index} className="relative group cursor-pointer overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Instagram post ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  width={200}
                  height={192}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    Voir sur Instagram
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Prête à Briller ?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers de femmes qui ont choisi l'élégance Accentique
          </p>
          <Link
            to="/shop"
            className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Commencer mes Achats</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
