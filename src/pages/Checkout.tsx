
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Phone, CreditCard, Gift, Zap } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { sendOrderToGoogleSheets } from '../services/googleSheetsService';

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  giftMessage?: string;
  isGift: boolean;
}

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const { toast } = useToast();

  const form = useForm<CheckoutFormData>({
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      postalCode: '',
      giftMessage: '',
      isGift: false,
    },
  });

  const subtotal = getTotalPrice();
  const discountAmount = (subtotal * discount) / 100;
  
  // Check if any item has free delivery or if order is over 99 DT
  const hasFreeDeliveryItem = cartItems.some(item => item.product.isFreeDelivery);
  const isEligibleForFreeDelivery = subtotal >= 99 || hasFreeDeliveryItem;
  const shipping = isEligibleForFreeDelivery ? 0 : 8;
  
  const total = subtotal - discountAmount + shipping;

  const applyPromoCode = () => {
    const validCodes = {
      'GIFT20': 20,
      'GIFT10': 10,
      'GIFT30': 30
    };
    
    if (validCodes[promoCode as keyof typeof validCodes]) {
      const discountPercent = validCodes[promoCode as keyof typeof validCodes];
      setDiscount(discountPercent);
    }
  };

  const onSubmit = async (data: CheckoutFormData) => {
    setIsProcessing(true);
    
    // Prepare order details
    const orderDetails = {
      customer: {
        name: `${data.firstName} ${data.lastName}`,
        phone: data.phone,
        email: data.email,
        address: `${data.address}, ${data.city} ${data.postalCode}`,
      },
      items: cartItems.map(item => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
        total: item.product.price * item.quantity
      })),
      totals: {
        subtotal: subtotal.toFixed(2),
        discount: discountAmount.toFixed(2),
        shipping: shipping.toFixed(2),
        total: total.toFixed(2)
      },
      giftMessage: data.giftMessage,
      isGift: data.isGift,
      orderDate: new Date().toLocaleDateString('fr-FR')
    };

    try {
      console.log('Sending order to Google Sheets...');
      await sendOrderToGoogleSheets(orderDetails);
      
      toast({
        title: "Commande confirmée !",
        description: "Votre commande a été enregistrée avec succès. Nous vous contacterons bientôt.",
      });

      // Clear cart and redirect
      clearCart();
      navigate('/order-confirmation');
    } catch (error) {
      console.error('Error sending order:', error);
      toast({
        title: "Erreur d'envoi",
        description: "Impossible d'envoyer la commande. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-bold text-gray-800 mb-4">
            Votre panier est vide
          </h2>
          <Link to="/shop" className="btn-gold px-8 py-3 rounded-lg font-semibold">
            Continuer mes Achats
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-2xl md:text-3xl font-bold text-gray-800">
              Finaliser la Commande
            </h1>
            <Link 
              to="/cart" 
              className="text-gold-600 hover:text-gold-700 inline-flex items-center space-x-2 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Retour au panier</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <User className="w-5 h-5 text-gold-600 mr-2" />
                    <h3 className="font-serif text-lg font-semibold text-gray-800">
                      Informations Personnelles
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      rules={{ required: "Le prénom est requis" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prénom *</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre prénom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="lastName"
                      rules={{ required: "Le nom est requis" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom *</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      rules={{ required: "Le numéro de téléphone est requis" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone *</FormLabel>
                          <FormControl>
                            <Input placeholder="+216 XX XXX XXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email (optionnel)</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="votre@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Delivery Address */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center mb-4">
                    <MapPin className="w-5 h-5 text-gold-600 mr-2" />
                    <h3 className="font-serif text-lg font-semibold text-gray-800">
                      Adresse de Livraison
                    </h3>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="address"
                    rules={{ required: "L'adresse est requise" }}
                    render={({ field }) => (
                      <FormItem className="mb-4">
                        <FormLabel>Adresse complète *</FormLabel>
                        <FormControl>
                          <Input placeholder="Rue, numéro, bâtiment..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="city"
                      rules={{ required: "La ville est requise" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Ville *</FormLabel>
                          <FormControl>
                            <Input placeholder="Tunis, Sfax, Sousse..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Code Postal</FormLabel>
                          <FormControl>
                            <Input placeholder="1000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                {/* Gift Options */}
                <div className="bg-beige-50 border border-beige-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Gift className="w-5 h-5 text-gold-600 mr-2" />
                    <h3 className="font-semibold text-gray-800">Options Cadeau</h3>
                  </div>
                  
                  <FormField
  control={form.control}
  name="isGift"
  render={() => (
    <FormItem className="mb-4">
      <div className="flex items-center space-x-2">
        <FormLabel className="!mt-0">C'est un cadeau (emballage gratuit)</FormLabel>
      </div>
    </FormItem>
  )}
/>

                  
                  <FormField
                    control={form.control}
                    name="giftMessage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message personnalisé (optionnel)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Notes pour le cadeau..."
                            className="resize-none"
                            rows={3}
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full btn-gold py-4 text-lg font-semibold"
                >
                  {isProcessing ? 'Traitement...' : 'Confirmer la Commande'}
                </Button>
              </form>
            </Form>
          </div>

          {/* Order Summary */}
          <div className="space-y-6">
            {/* Promo Code */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">
                Code Promo
              </h3>
              <div className="flex">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                  placeholder=""
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={applyPromoCode}
                  className="btn-gold px-4 py-2 rounded-r-lg"
                >
                  Appliquer
                </button>
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">
                Votre Commande
              </h3>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.selectedImage || item.product.images[0]}
                      alt={item.product.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{item.product.name}</h4>
                      <p className="text-sm text-gray-500">Qté: {item.quantity}</p>
                    </div>
                    <span className="font-semibold text-gray-800">
                      {item.product.price * item.quantity} DT
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-serif text-lg font-semibold text-gray-800 mb-4">
                Récapitulatif
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Sous-total</span>
                  <span className="font-medium">{subtotal.toFixed(2)} DT</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Remise ({discount}%)</span>
                    <span>-{discountAmount.toFixed(2)} DT</span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Livraison</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'Gratuite' : `${shipping} DT`}
                  </span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-gold-600">{total.toFixed(2)} DT</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
