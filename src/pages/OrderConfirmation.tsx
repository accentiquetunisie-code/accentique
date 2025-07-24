
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ShoppingBag, MessageCircle } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
        
        <h1 className="font-serif text-2xl font-bold text-gray-800 mb-4">
          Commande Confirmée !
        </h1>
        
        <p className="text-gray-600 mb-6">
          Votre commande a été envoyée avec succès. Nous vous contacterons bientôt pour confirmer les détails.
        </p>
        
        <div className="bg-beige-50 border border-beige-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-center mb-2">
            <MessageCircle className="w-5 h-5 text-gold-600 mr-2" />
            <span className="font-medium text-gray-800">Suivi par WhatsApp</span>
          </div>
          <p className="text-sm text-gray-600">
            Nous vous enverrons des mises à jour sur votre commande via WhatsApp
          </p>
        </div>
        
        <div className="space-y-3">
          <Link 
            to="/shop" 
            className="btn-gold w-full py-3 rounded-lg font-semibold inline-flex items-center justify-center space-x-2"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Continuer mes Achats</span>
          </Link>
          
          <Link 
            to="/" 
            className="block w-full py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Retour à l'Accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
