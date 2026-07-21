/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from 'react';
import { Search, ShoppingBag, Plus, Minus, Check, Sparkles, Filter, Info, Pill } from 'lucide-react';
import { PRODUCTS } from '../data';
import { Product } from '../types';

interface MedicineCatalogProps {
  cart: Record<string, number>;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
  highlightedProductId: string | null;
  clearHighlight: () => void;
}

export default function MedicineCatalog({
  cart,
  onAddToCart,
  onRemoveFromCart,
  highlightedProductId,
  clearHighlight
}: MedicineCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(PRODUCTS);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const categories = [
    'All',
    'Tablets',
    'Capsules',
    'Syrups',
    'Medical Equipment',
    'Baby Products',
    'Personal Hygiene',
    'Skin Care',
    'Diabetic Care',
    'Orthopedic Support'
  ];

  // Highlight or scroll to item if searched from Hero
  useEffect(() => {
    if (highlightedProductId) {
      const product = PRODUCTS.find(p => p.id === highlightedProductId);
      if (product) {
        setSelectedCategory('All'); // Reset category filter to see the highlighted item
        setSearchQuery(''); // Reset query
        
        setTimeout(() => {
          const targetCard = cardRefs.current[highlightedProductId];
          if (targetCard) {
            targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Add a brief glow effect
            targetCard.classList.add('ring-4', 'ring-brand-blue-500', 'scale-102');
            setTimeout(() => {
              targetCard.classList.remove('ring-4', 'ring-brand-blue-500', 'scale-102');
              clearHighlight();
            }, 3000);
          }
        }, 100);
      }
    }
  }, [highlightedProductId, clearHighlight]);

  // Handle Search and Filter logic
  useEffect(() => {
    let result = PRODUCTS;

    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery.trim().length > 0) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    setFilteredProducts(result);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="catalog" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">Medicine & Wellness Catalog</h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
            Explore 100% Genuine Pharmacy Inventory
          </p>
          <div className="w-16 h-1 bg-brand-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Search & Category Filter Controls */}
        <div className="bg-gray-50 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800 rounded-3xl p-6 mb-10 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            
            {/* Catalog search box */}
            <div className="relative w-full md:max-w-md">
              <Search className="w-5 h-5 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="catalog-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter catalog by name, brand, or disease..."
                className="w-full pl-11 pr-4 py-2.5 font-sans text-sm text-gray-800 dark:text-gray-100 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent shadow-inner"
              />
            </div>

            {/* Hint tag */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-green-50 dark:bg-emerald-950/30 text-brand-green-600 dark:text-brand-green-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Click '+' to build your prescription order instantly!</span>
            </div>
          </div>

          {/* Categories Horizontal Scroller */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 -mx-2 px-2 scrollbar-none">
            <Filter className="w-4 h-4 text-gray-400 shrink-0 mr-1 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                id={`cat-filter-${cat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-sans font-medium text-xs sm:text-sm rounded-xl shrink-0 transition-all focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-brand-blue-500 text-white shadow-md shadow-brand-blue-500/15 scale-102'
                    : 'bg-white dark:bg-slate-900 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white border border-gray-200 dark:border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const qty = cart[prod.id] || 0;
              const isHighlight = highlightedProductId === prod.id;

              return (
                <div
                  key={prod.id}
                  id={`product-card-${prod.id}`}
                  ref={(el) => { cardRefs.current[prod.id] = el; }}
                  className={`bg-white dark:bg-slate-900 border rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-left group ${
                    isHighlight 
                      ? 'border-brand-blue-500 ring-2 ring-brand-blue-500/20' 
                      : 'border-gray-100 dark:border-slate-800/80 hover:border-brand-blue-100 dark:hover:border-slate-700'
                  }`}
                >
                  {/* Product Image Holder */}
                  <div className="relative aspect-video w-full overflow-hidden bg-gray-50 dark:bg-slate-800">
                    <img
                      referrerPolicy="no-referrer"
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Category Label inside image */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md text-[10px] font-bold text-brand-blue-500 uppercase tracking-wider shadow-sm border border-white/25">
                      {prod.category}
                    </span>

                    {/* Stock badge */}
                    {prod.inStock ? (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-emerald-500/90 text-white text-[9px] font-bold tracking-wide">
                        In Stock
                      </span>
                    ) : (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded-lg bg-rose-500/90 text-white text-[9px] font-bold tracking-wide">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-sans font-bold text-base text-gray-900 dark:text-white group-hover:text-brand-blue-500 transition-colors leading-snug">
                          {prod.name}
                        </h3>
                      </div>
                      <span className="block font-sans text-xs text-gray-400 dark:text-slate-500 mt-1">{prod.unit}</span>
                      <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2.5 line-clamp-2 leading-relaxed">
                        {prod.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-gray-50 dark:border-slate-800/80 flex items-center justify-between">
                      <div>
                        <span className="block font-sans text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Store Price</span>
                        <span className="font-sans font-extrabold text-lg text-brand-green-600 dark:text-brand-green-500">₹{prod.price}</span>
                      </div>

                      {/* Interactive Add to Cart Controls */}
                      {qty > 0 ? (
                        <div className="flex items-center gap-1 bg-brand-blue-50 dark:bg-slate-800 p-1 rounded-xl border border-brand-blue-100/50 dark:border-slate-700">
                          <button
                            id={`decrease-${prod.id}`}
                            onClick={() => onRemoveFromCart(prod.id)}
                            className="w-7 h-7 bg-white dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="font-mono text-xs font-bold text-gray-800 dark:text-white w-5 text-center">
                            {qty}
                          </span>
                          <button
                            id={`increase-${prod.id}`}
                            onClick={() => onAddToCart(prod)}
                            className="w-7 h-7 bg-white dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          id={`add-btn-${prod.id}`}
                          onClick={() => onAddToCart(prod)}
                          className="flex items-center gap-1.5 px-4 py-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white rounded-xl text-xs font-bold shadow-md shadow-brand-blue-500/10 transition-all hover:scale-102 focus:outline-none"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Bag</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-12 text-center bg-gray-50 dark:bg-slate-800/20 border border-gray-100 dark:border-slate-800 rounded-3xl">
            <Info className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <p className="font-sans text-sm text-gray-500 dark:text-gray-400">No products matching "{searchQuery}" in category "{selectedCategory}"</p>
            <button
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className="mt-3 text-xs font-bold text-brand-blue-500 hover:underline focus:outline-none"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
