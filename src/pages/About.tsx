
import { ArrowRight, Star, Gift, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: <Star className="w-8 h-8 text-gold-500" />,
      title: "Qualité Premium",
      description: "Chaque pièce est soigneusement sélectionnée et testée pour garantir une qualité exceptionnelle qui perdure dans le temps."
    },
    {
      icon: <Gift className="w-8 h-8 text-gold-500" />,
      title: "Emballage Luxueux",
      description: "Nos créations sont présentées dans des écrins élégants, parfaits pour offrir ou se faire plaisir avec style."
    },
    {
      icon: <Clock className="w-8 h-8 text-gold-500" />,
      title: "Service Attentionné",
      description: "Notre équipe vous accompagne avec passion, de la découverte de nos collections jusqu'à la livraison de vos commandes."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Les Débuts",
      description: "Création d'Accentique avec la vision de démocratiser l'élégance pour toutes les femmes tunisiennes."
    },
    {
      year: "2021",
      title: "Première Collection",
      description: "Lancement de notre première ligne de montres et bracelets, immédiatement plébiscitée par nos clientes."
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Élargissement de notre gamme avec les bagues et les coffrets cadeaux, répondant aux demandes de notre communauté."
    },
    {
      year: "2023",
      title: "Reconnaissance",
      description: "Plus de 5000 clientes satisfaites et reconnaissance comme référence en accessoires féminins en Tunisie."
    },
    {
      year: "2024",
      title: "Innovation Continue",
      description: "Lancement de notre programme VIP et développement de collections exclusives en édition limitée."
    }
  ];

  const team = [
    {
      name: "Amira Ben Salem",
      role: "Fondatrice & Directrice Créative",
      image: "https://images.unsplash.com/photo-1494790108755-2616b93e0c79?w=400&h=400&fit=crop",
      description: "Passionnée de mode depuis toujours, Amira a créé Accentique pour offrir l'élégance à toutes les femmes."
    },
    {
      name: "Sara Khalil",
      role: "Responsable Qualité",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", 
      description: "Garante de l'excellence de nos produits, Sara veille à ce que chaque pièce respecte nos standards élevés."
    },
    {
      name: "Leila Mansouri",
      role: "Service Client",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop",
      description: "L'écoute et la satisfaction de nos clientes sont au cœur de la mission de Leila au quotidien."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-elegant min-h-[60vh] flex items-center">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&h=600&fit=crop"
            alt="Accentique jewelry collection"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Notre <span className="text-gradient-gold">Histoire</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Depuis 2020, Accentique illumine le quotidien des femmes tunisiennes avec des accessoires élégants, 
              alliant qualité premium et prix accessibles.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Notre Mission
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              <em>"Le style qui brille en vous"</em> n'est pas qu'un slogan, c'est notre philosophie. 
              Nous croyons que chaque femme mérite de se sentir belle et confiante, peu importe l'occasion. 
              C'est pourquoi nous créons des accessoires qui subliment votre personnalité unique et révèlent votre éclat naturel.
            </p>
            <div className="bg-gradient-gold text-white p-8 rounded-2xl">
              <p className="text-xl font-medium">
                "Démocratiser l'élégance et rendre la beauté accessible à toutes les femmes tunisiennes, 
                tout en préservant l'excellence et le savoir-faire artisanal."
              </p>
              <p className="text-sm mt-4 opacity-90">— Amira Ben Salem, Fondatrice</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trois piliers fondamentaux guident chacune de nos décisions et actions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-elegant p-8 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Notre Parcours
            </h2>
            <p className="text-lg text-gray-600">
              5 années d'évolution continue et de croissance partagée avec nos clientes
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gold-200"></div>
              
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card-elegant p-6">
                      <span className="text-2xl font-bold text-gold-600">{item.year}</span>
                      <h3 className="font-serif text-xl font-semibold text-gray-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-gold rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-beige-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-600">
              Des femmes passionnées au service de votre élégance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card-elegant p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-serif text-xl font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-gold-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-gold text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-sm opacity-90">Clientes Satisfaites</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-sm opacity-90">Créations Uniques</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-sm opacity-90">Note Moyenne</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-sm opacity-90">Livraison Express</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Rejoignez Notre Communauté
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez pourquoi plus de 5000 femmes ont choisi Accentique pour exprimer leur style unique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop" 
              className="btn-gold px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Découvrir nos Collections</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="btn-elegant px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
