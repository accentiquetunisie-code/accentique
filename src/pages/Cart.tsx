import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Gift, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
const Cart = () => {
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalPrice
  } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const applyPromoCode = () => {
    // Simulate promo code validation
    const validCodes = {
      'GIFT20': 20,
      'WELCOME10': 10,
      'VIP15': 15
    };
    if (validCodes[promoCode as keyof typeof validCodes]) {
      const discountPercent = validCodes[promoCode as keyof typeof validCodes];
      setDiscount(discountPercent);
      setIsPromoApplied(true);
    } else {
      alert('Code promo invalide');
    }
  };
  const subtotal = getTotalPrice();
  const discountAmount = subtotal * discount / 100;
  const shipping = subtotal >= 200 ? 0 : 7;
  const total = subtotal - discountAmount + shipping;
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
  if (cartItems.length === 0) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">
            Votre panier est vide
          </h2>
          <p className="text-gray-600 mb-8">
            Découvrez notre collection et ajoutez vos pièces préférées
          </p>
          <Link to="/shop" className="btn-gold px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2">
            <span>Continuer mes Achats</span>
          </Link>
        </div>
      </div>;
  }
  return <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-800">
              Mon Panier ({cartItems.length})
            </h1>
            <Link to="/shop" className="text-gold-600 hover:text-gold-700 inline-flex items-center space-x-2 font-medium">
              <ArrowLeft className="w-4 h-4" />
              <span>Continuer mes achats</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Product Image */}
                  <img src={item.selectedImage || item.product.images[0]} alt={item.product.name} className="w-24 h-24 object-cover rounded-lg" />
                  
                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-semibold text-gray-800 mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      {getCategoryDisplayName(item.product.category)}
                    </p>
                    <p className="text-gold-600 font-semibold">
                      {item.product.price} DT
                    </p>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <label className="text-sm font-medium text-gray-700">Qté:</label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-3 py-1 hover:bg-gray-100 transition-colors">
                        -
                      </button>
                      <span className="px-4 py-1 border-x border-gray-300 min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-3 py-1 hover:bg-gray-100 transition-colors">
                        +
                      </button>
                    </div>
                  </div>

                  {/* Item Total and Remove */}
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-800 mb-2">
                      {item.product.price * item.quantity} DT
                    </p>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors">
                      Supprimer
                    </button>
                  </div>
                </div>
              </div>)}
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            

            {/* Order Summary */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">
                Récapitulatif
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-medium">{subtotal.toFixed(2)} DT</span>
                </div>
                
                {isPromoApplied && <div className="flex justify-between text-green-600">
                    <span>Remise ({discount}%)</span>
                    <span>-{discountAmount.toFixed(2)} DT</span>
                  </div>}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Gratuite' : `${shipping} DT`}
                  </span>
                </div>
                
                {subtotal < 200 && <p className="text-sm text-gold-600">
                    Ajoutez {(200 - subtotal).toFixed(2)} DT pour la livraison gratuite
                  </p>}
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-gold-600">{total.toFixed(2)} DT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Gift Options */}
            <div className="bg-beige-50 border border-beige-200 rounded-lg p-6">
              <div className="flex items-center mb-3">
                <Gift className="w-5 h-5 text-gold-600 mr-2" />
                <h3 className="font-semibold text-gray-800">Options Cadeau</h3>
              </div>
              <div className="space-y-3">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Emballage cadeau (Gratuit)</span>
                </label>
                <textarea placeholder="Message personnalisé pour la carte cadeau..." className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none" rows={3} />
              </div>
            </div>

            {/* Checkout Button */}
            <Link to="/checkout" className="btn-gold w-full py-4 rounded-lg font-semibold text-lg text-center block">
              Procéder au Paiement
            </Link>

            {/* Security Info */}
            <div className="text-center text-sm text-gray-500">
              <p>🔒 Paiement 100% sécurisé</p>
              <p>📦 Livraison sous 24-48h</p>
              <p>↩️ Retour gratuit sous 14 jours</p>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Cart;