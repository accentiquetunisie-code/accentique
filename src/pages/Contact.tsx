
import { useState } from 'react';
import { Clock, Gift, Star, User } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Clock className="w-6 h-6 text-gold-500" />,
      title: "Horaires d'Ouverture",
      details: [
        "Lundi - Samedi: 9h - 18h",
        "Dimanche: 10h - 16h",
        "Service client disponible"
      ]
    },
    {
      icon: <Gift className="w-6 h-6 text-gold-500" />,
      title: "Services",
      details: [
        "Emballage cadeau gratuit",
        "Livraison express 24h",
        "Retour sous 14 jours"
      ]
    },
    {
      icon: <User className="w-6 h-6 text-gold-500" />,
      title: "Support Personnalisé",
      details: [
        "Conseils style personnalisés",
        "Aide au choix de cadeaux",
        "Support après-vente"
      ]
    }
  ];

  const faqItems = [
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Nous proposons une livraison express 24h pour Tunis et 2-3 jours pour le reste de la Tunisie. La livraison est gratuite à partir de 200 DT."
    },
    {
      question: "Vos bijoux sont-ils garantis ?",
      answer: "Oui, tous nos produits bénéficient d'une garantie de 2 ans contre les défauts de fabrication. Nous utilisons uniquement des matériaux de qualité premium."
    },
    {
      question: "Puis-je échanger ou retourner un article ?",
      answer: "Vous avez 14 jours pour retourner un article dans son état d'origine. Les échanges sont gratuits, les retours sont remboursés sous 5-7 jours ouvrés."
    },
    {
      question: "Proposez-vous un service d'emballage cadeau ?",
      answer: "Oui, l'emballage cadeau est inclus gratuitement avec toutes nos commandes. Vous pouvez également ajouter une carte message personnalisée."
    },
    {
      question: "Comment entretenir mes bijoux ?",
      answer: "Évitez le contact avec l'eau, les parfums et produits chimiques. Rangez vos bijoux dans un endroit sec et nettoyez-les avec un chiffon doux."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-elegant py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Contactez-Nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Notre équipe est là pour vous accompagner. N'hésitez pas à nous écrire !
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6">
                Envoyez-nous un Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom Complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      placeholder="Votre nom"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                      placeholder="+216 XX XXX XXX"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors"
                    >
                      <option value="">Choisir un sujet</option>
                      <option value="product">Question sur un produit</option>
                      <option value="order">Suivi de commande</option>
                      <option value="return">Retour/Échange</option>
                      <option value="gift">Conseil cadeau</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-gold px-8 py-4 rounded-lg font-semibold text-lg w-full md:w-auto"
                >
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    {info.icon}
                    <h3 className="font-serif text-lg font-semibold text-gray-800 ml-3">
                      {info.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {info.details.map((detail, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* WhatsApp Contact */}
            <div className="bg-gradient-gold text-white rounded-xl p-6 text-center">
              <h3 className="font-serif text-xl font-semibold mb-3">
                Contact Direct
              </h3>
              <p className="mb-4 opacity-90">
                Pour une réponse immédiate, contactez-nous sur WhatsApp
              </p>
              <button className="bg-white text-gold-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                📱 WhatsApp: +21654 538 318
              </button>
            </div>

            {/* Newsletter */}
            <div className="bg-beige-50 border border-beige-200 rounded-xl p-6">
              <h3 className="font-serif text-lg font-semibold text-gray-800 mb-3">
                Newsletter
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Recevez nos nouveautés et offres exclusives
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent text-sm"
                />
                <button className="bg-gold-500 text-white px-4 py-2 rounded-r-lg hover:bg-gold-600 transition-colors text-sm font-medium">
                  S'abonner
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-gray-600">
              Trouvez rapidement les réponses à vos questions
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md">
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-gray-800 hover:text-gold-600 transition-colors">
                    <span>{item.question}</span>
                    <span className="transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
