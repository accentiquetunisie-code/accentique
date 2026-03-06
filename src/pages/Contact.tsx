
const Contact = () => {

  const faqItems = [
    {
      question: "Quels sont vos délais de livraison ?",
      answer: "Nous proposons une livraison express 24h pour Tunis et 2-3 jours pour le reste de la Tunisie. La livraison est gratuite à partir de 99 DT."
    },
    {
      question: "Vos bijoux sont-ils garantis ?",
      answer: "Oui, tous nos produits bénéficient d'une garantie de 2 ans contre les défauts de fabrication. Nous utilisons uniquement des matériaux de qualité premium."
    },
    {
      question: "Puis-je échanger ou retourner un article ?",
      answer: "Vous disposez de 10 jours pour échanger un article dans son état d’origine.Les échanges pour défaut de fabrication sont gratuits.Pour changer d’article ou de couleur, des frais de livraison de 8 DT s’appliquent."
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
        {/* WhatsApp Contact - Centered */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-gold text-white rounded-2xl p-12 text-center shadow-xl">
            <h2 className="font-serif text-3xl font-bold mb-4">
              Contact Direct
            </h2>
            <p className="text-lg mb-8 opacity-95">
              Pour une réponse immédiate, contactez-nous sur WhatsApp
            </p>
            <a 
              href="https://wa.me/21654538318" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-gold-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              📱 WhatsApp: 54 538 318
            </a>
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
