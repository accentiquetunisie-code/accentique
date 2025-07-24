import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, User, Gift } from 'lucide-react';
import { useCart } from '../context/CartContext';
import SearchModal from './SearchModal';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const {
    cartItems
  } = useCart();
  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const navItems = [{
    name: 'Accueil',
    path: '/'
  }, {
    name: 'Boutique',
    path: '/shop'
  },{
    name: 'À Propos',
    path: '/about'
  }];
  return <>
      {/* Flash Offer Banner */}
      <div className="bg-gradient-gold text-white text-center py-2 text-sm font-medium">
        ✨ OFFRE FLASH: -20% sur tous les coffrets cadeaux | Code: GIFT20 ✨
      </div>
      
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold text-gradient-gold">
                Accentique
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map(item => <Link key={item.path} to={item.path} className={`text-sm font-medium transition-colors hover:text-gold-600 ${location.pathname === item.path ? 'text-gold-600 border-b-2 border-gold-400' : 'text-gray-700'}`}>
                  {item.name}
                </Link>)}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              <button onClick={() => setIsSearchOpen(true)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              
              
              
              <Link to="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <ShoppingBag className="w-5 h-5 text-gray-600" />
                {cartItemsCount > 0 && <span className="absolute -top-1 -right-1 bg-gold-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>}
              </Link>

              {/* Mobile Menu Button */}
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-full">
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && <div className="md:hidden py-4 border-t border-gray-200 animate-fade-in">
              <nav className="flex flex-col space-y-3">
                {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={`text-sm font-medium py-2 px-4 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-gold-50 text-gold-600' : 'text-gray-700 hover:bg-gray-50'}`}>
                    {item.name}
                  </Link>)}
              </nav>
            </div>}
        </div>
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>;
};
export default Header;