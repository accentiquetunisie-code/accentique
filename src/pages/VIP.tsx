
import { useState } from 'react';
import { Star, Gift, Clock, Crown, CheckCircle } from 'lucide-react';

const VIP = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci ! Vous êtes maintenant inscrite au programme VIP Accentique ✨');
    setEmail('');
  };

  const vipBenefits = [
    {
      icon: <Star className="w-8 h-8 text-gold-500" />,
      title: "Accès Privilégié",
      description: "Découvrez nos nouvelles collections 48h avant tout le monde"
    },
    {
      icon: <Gift className="w-8 h-8 text-gold-500" />,
      title: "Réductions Exclusives",
      description: "Profitez de -15% permanent + codes promo VIP jusqu'à -30%"
    },
    {
      icon: <Crown className="w-8 h-8 text-gold-500" />,
      title: "Éditions Limitées",
      description: "Collections exclusives réservées aux membres VIP uniquement"
    },
    {
      icon: <Clock className="w-8 h-8 text-gold-500" />,
      title: "Livraison Priority",
      description: "Livraison express gratuite et prioritaire sur toutes vos commandes"
    }
  ];

  const subscriptionBox = {
    name: "Box Élégance Mensuelle",
    price: "89 DT/mois",
    originalPrice: "120 DT",
    description: "Recevez chaque mois une sélection de 2-3 pièces exclusives choisies par notre équipe",
    features: [
      "2-3 accessoires premium par mois",
      "Pièces exclusives non vendues en boutique",
      "Emballage luxueux personnalisé",
      "Carte style avec conseils d'association",
      "Première box à -50% (44 DT)",
      "Pause ou annulation à tout moment"
    ]
  };

  const loyaltyTiers = [
    {
      name: "Bronze",
      threshold: "0-499 DT",
      benefits: ["5% de remise", "Emballage cadeau gratuit"],
      color: "bg-amber-600"
    },
    {
      name: "Argent", 
      threshold: "500-999 DT",
      benefits: ["10% de remise", "Livraison gratuite", "Accès ventes privées"],
      color: "bg-gray-400"
    },
    {
      name: "Or",
      threshold: "1000+ DT", 
      benefits: ["15% de remise", "Conseillère dédiée", "Pièces exclusives", "Événements VIP"],
      color: "bg-gold-500"
    }
  ];

  const testimonials = [
    {
      name: "Salma K.",
      tier: "Membre Or",
      text: "Le programme VIP a transformé mon expérience ! J'adore recevoir ma box mensuelle et les pièces exclusives sont magnifiques.",
      rating: 5
    },
    {
      name: "Ines M.",
      tier: "Membre Argent", 
      text: "Les réductions et l'accès priorité aux nouveautés valent vraiment le coup. Je recommande à toutes mes amies !",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-gold text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop')] bg-cover bg-center"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="flex items-center mb-4">
              <Crown className="w-12 h-12 mr-4" />
              <span className="text-2xl font-serif font-bold">Programme VIP</span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Votre Élégance <br />Récompensée
            </h1>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Rejoignez notre cercle privilégié et profitez d'avantages exclusifs, 
              de réductions permanentes et d'un accès prioritaire à nos collections.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                Devenir Membre VIP
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                En Savoir Plus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Vos Privilèges VIP
            </h2>
            <p className="text-lg text-gray-600">
              Des avantages exclusifs conçus pour nos clientes les plus fidèles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {vipBenefits.map((benefit, index) => (
              <div key={index} className="card-elegant p-6 text-center group hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Tiers */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Niveaux de Fidélité
            </h2>
            <p className="text-lg text-gray-600">
              Plus vous achetez, plus vos avantages augmentent
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loyaltyTiers.map((tier, index) => (
              <div key={index} className={`card-elegant p-8 text-center relative overflow-hidden ${index === 2 ? 'ring-2 ring-gold-400 transform scale-105' : ''}`}>
                {index === 2 && (
                  <div className="absolute top-0 right-0 bg-gold-500 text-white px-4 py-1 text-sm font-medium transform rotate-12 translate-x-2 -translate-y-1">
                    Populaire
                  </div>
                )}
                <div className={`w-16 h-16 ${tier.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Crown className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-800 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gold-600 font-semibold mb-4">
                  {tier.threshold}
                </p>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center justify-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Box */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-gradient-blush text-white p-2 rounded-full w-fit mb-4">
                  <Gift className="w-6 h-6" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  {subscriptionBox.name}
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  {subscriptionBox.description}
                </p>
                
                <div className="flex items-center space-x-4 mb-6">
                  <span className="text-3xl font-bold text-gold-600">{subscriptionBox.price}</span>
                  <span className="text-xl text-gray-400 line-through">{subscriptionBox.originalPrice}</span>
                  <span className="bg-red-100 text-red-800 text-sm px-2 py-1 rounded-full font-medium">
                    -26%
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {subscriptionBox.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="btn-gold px-8 py-4 rounded-lg font-semibold text-lg">
                  Commencer mon Abonnement
                </button>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=500&fit=crop"
                  alt="Box Élégance"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gold-600">44 DT</div>
                    <div className="text-sm text-gray-600">Première box</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-elegant">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Témoignages VIP
            </h2>
            <p className="text-lg text-gray-600">
              Ce que disent nos membres privilégiées
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-elegant p-8">
                <div className="flex items-center mb-4">
                  <Crown className="w-6 h-6 text-gold-500 mr-2" />
                  <span className="text-sm font-medium text-gold-600">{testimonial.tier}</span>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Prête à Rejoindre l'Élite ?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Inscrivez-vous maintenant et commencez à profiter de vos privilèges VIP dès aujourd'hui
          </p>
          
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                required
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-gold-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Devenir VIP
              </button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              Gratuit • Sans engagement • Avantages immédiats
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VIP;
