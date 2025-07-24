import { Link } from 'react-router-dom';
import { Instagram, Gift, Clock } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-beige-50 border-t border-beige-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-serif text-2xl font-bold text-gradient-gold">
                Accentique
              </span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Le style qui brille en vous ✨<br />
              Accessoires élégants pour femmes modernes en Tunisie.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com/accentique.tn" target="_blank" rel="noopener noreferrer" className="text-gold-600 hover:text-gold-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-gold-600 transition-colors text-sm">Accueil</Link></li>
              <li><Link to="/shop" className="text-gray-600 hover:text-gold-600 transition-colors text-sm">Boutique</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-gold-600 transition-colors text-sm">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gold-600 transition-colors text-sm">Contact</Link></li>
              <li><Link to="/vip" className="text-gray-600 hover:text-gold-600 transition-colors text-sm">Programme VIP</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">
              Catégories
            </h3>
            <ul className="space-y-2">
              <li><Link to="/shop?category=watches" className="text-gray-600 hover:text-gold-600 transition-colors text-sm">Montres</Link></li>
              <li><Link to="/shop?category=bracelets" className="text-gray-600 hover:text-gold-600 transition-colors text-sm">Bracelets</Link></li>
              <li><Link to="/shop?category=rings" className="text-gray-600 hover:text-gold-600 transition-colors text-sm">Bagues</Link></li>
              <li><Link to="/shop?category=gift-sets" className="text-gray-600 hover:text-gold-600 transition-colors text-sm">Coffrets Cadeaux</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gold-600" />
                <div className="text-sm text-gray-600">
                  <p>Lun-Sam: 9h-18h</p>
                  <p>Dim: 10h-16h</p>
                </div>
              </div>
              <div className="text-sm text-gray-600">
                <p>📧 contact@accentique.tn</p>
                <p>📱 WhatsApp: +216 54 538 318</p>
              </div>
              <div className="flex items-center space-x-2">
                <Gift className="w-4 h-4 text-gold-600" />
                <span className="text-sm text-gray-600">Emballage cadeau gratuit</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-beige-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 Accentique.tn - Tous droits réservés</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-gold-600 transition-colors">
              Confidentialité
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-gold-600 transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;