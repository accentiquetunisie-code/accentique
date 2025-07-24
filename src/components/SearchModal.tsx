
import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.category.some(cat => cat.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filteredProducts);
    } else {
      setResults([]);
    }
  }, [query]);

  const getCategoryDisplayName = (categories: string[]) => {
    const categoryNames = categories.map(cat => {
      switch (cat) {
        case 'gift-sets': return 'Coffret';
        case 'watches': return 'Montre';
        case 'bracelets': return 'Bracelet';
        case 'rings': return 'Bague';
        default: return cat;
      }
    });
    return categoryNames.join(' · ');
  };

  const getCategoryIcon = (categories: string[]) => {
    // Return icon based on first category
    const primaryCategory = categories[0];
    switch (primaryCategory) {
      case 'gift-sets': return '🎁';
      case 'watches': return '⌚';
      case 'bracelets': return '💎';
      case 'rings': return '💍';
      default: return '✨';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center border-b px-6 py-4">
          <Search className="w-5 h-5 text-gray-400 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Rechercher des produits..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-lg outline-none"
          />
          <button onClick={onClose} className="ml-3 text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results */}
        <div className="max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-4 space-y-3">
              {results.map((product) => (
                <Link
                  key={product.id}
                  to={`/product/${product.id}`}
                  onClick={onClose}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">
                      {getCategoryIcon(product.category)} {getCategoryDisplayName(product.category)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gold-600">{product.price} DT</p>
                    {product.originalPrice && (
                      <p className="text-sm text-gray-400 line-through">
                        {product.originalPrice} DT
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          ) : query.trim() ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Aucun produit trouvé pour "{query}"</p>
            </div>
          ) : (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>Commencez à taper pour rechercher...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
