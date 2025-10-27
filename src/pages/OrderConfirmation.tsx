import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, ShoppingBag, MessageCircle, User, MapPin, Package } from 'lucide-react';

interface OrderDetails {
  customer: {
    name: string;
    phone: string;
    email: string;
    address: string;
  };
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    total: number;
  }>;
  totals: {
    subtotal: string;
    discount: string;
    shipping: string;
    total: string;
  };
  giftMessage?: string;
  isGift: boolean;
  orderDate: string;
}

const OrderConfirmation = () => {
  const location = useLocation();
  const orderDetails = location.state?.orderDetails as OrderDetails;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Success Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          
          <h1 className="font-serif text-3xl font-bold text-gray-800 mb-4">
            Commande Confirmée !
          </h1>
          
          <p className="text-gray-600 mb-6">
            Votre commande a été envoyée avec succès. Nous vous contacterons bientôt pour confirmer les détails.
          </p>
          
          <div className="bg-beige-50 border border-beige-200 rounded-lg p-4">
            <div className="flex items-center justify-center mb-2">
              <MessageCircle className="w-5 h-5 text-gold-600 mr-2" />
              <span className="font-medium text-gray-800">Suivi par WhatsApp</span>
            </div>
            <p className="text-sm text-gray-600">
              Nous vous enverrons des mises à jour sur votre commande via WhatsApp
            </p>
          </div>
        </div>

        {/* Order Details */}
        {orderDetails && (
          <>
            {/* Customer Information */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <User className="w-5 h-5 text-gold-600 mr-2" />
                <h2 className="font-serif text-xl font-semibold text-gray-800">
                  Informations Client
                </h2>
              </div>
              <div className="space-y-2 text-gray-700">
                <p><strong>Nom:</strong> {orderDetails.customer.name}</p>
                <p><strong>Téléphone:</strong> {orderDetails.customer.phone}</p>
                {orderDetails.customer.email && (
                  <p><strong>Email:</strong> {orderDetails.customer.email}</p>
                )}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-5 h-5 text-gold-600 mr-2" />
                <h2 className="font-serif text-xl font-semibold text-gray-800">
                  Adresse de Livraison
                </h2>
              </div>
              <p className="text-gray-700">{orderDetails.customer.address}</p>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <Package className="w-5 h-5 text-gold-600 mr-2" />
                <h2 className="font-serif text-xl font-semibold text-gray-800">
                  Articles Commandés
                </h2>
              </div>
              <div className="space-y-4">
                {orderDetails.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center pb-4 border-b border-gray-200 last:border-0">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-500">Quantité: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">{item.price} DT × {item.quantity}</p>
                      <p className="font-semibold text-gray-800">{item.total.toFixed(2)} DT</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gift Message */}
            {orderDetails.isGift && orderDetails.giftMessage && (
              <div className="bg-beige-50 border border-beige-200 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Message Cadeau</h3>
                <p className="text-gray-700 italic">"{orderDetails.giftMessage}"</p>
              </div>
            )}

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="font-serif text-xl font-semibold text-gray-800 mb-4">
                Récapitulatif
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Sous-total</span>
                  <span>{orderDetails.totals.subtotal} DT</span>
                </div>
                
                {parseFloat(orderDetails.totals.discount) > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Remise</span>
                    <span>-{orderDetails.totals.discount} DT</span>
                  </div>
                )}
                
                <div className="flex justify-between text-gray-700">
                  <span>Livraison</span>
                  <span>{parseFloat(orderDetails.totals.shipping) === 0 ? 'Gratuite' : `${orderDetails.totals.shipping} DT`}</span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-gold-600">{orderDetails.totals.total} DT</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">Date de commande: {orderDetails.orderDate}</p>
              </div>
            </div>
          </>
        )}

        {/* Action Buttons */}
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
            className="block w-full py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors text-center"
          >
            Retour à l'Accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
