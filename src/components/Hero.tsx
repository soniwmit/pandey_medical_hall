/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, Search, ShieldCheck, Award, HeartPulse, Sparkles, X } from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS } from '../data';
import { Product } from '../types';

interface HeroProps {
  onSearchProduct: (product: Product) => void;
  openWhatsAppOrder: () => void;
  onAddToCart: (product: Product) => void;
}

export default function Hero({ onSearchProduct, openWhatsAppOrder, onAddToCart }: HeroProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close search results if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim().length > 1) {
      const filtered = PRODUCTS.filter(prod => 
        prod.name.toLowerCase().includes(query.toLowerCase()) ||
        prod.category.toLowerCase().includes(query.toLowerCase()) ||
        prod.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  };

  const handleSelectProduct = (prod: Product) => {
    onSearchProduct(prod);
    setSearchQuery('');
    setSearchResults([]);
    setIsFocused(false);
  };

  const popularTags = ['Dolo 650', 'BP Monitor', 'Baby Diapers', 'Becosules', 'Cough Syrup'];

  return (
    <section 
      id="home" 
      className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-brand-blue-50 via-white to-brand-green-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-emerald-950/20"
    >
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green-500/5 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Main Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Sparkle Tag */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-blue-100/80 dark:bg-slate-800 border border-brand-blue-200/50 dark:border-slate-700 text-brand-blue-600 dark:text-brand-blue-300 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-brand-green-500 fill-brand-green-500 animate-spin-slow" />
              <span>Certified Local Pharmacy in Pai Bigha</span>
            </div>

            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white leading-tight tracking-tight">
              Pandey Medical Hall
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-500 to-brand-green-500 mt-2">
                Your Trusted Pharmacy in Pai Bigha
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
              Providing 100% genuine medicines, reliable diagnostic devices, baby products, personal hygiene essentials, and orthopedic support at fair and affordable prices. Sourced from authentic medical distributors for the complete health safety of your family.
            </p>

            {/* Live Medicine Search Box */}
            <div ref={searchRef} className="relative max-w-xl z-20">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-500 to-brand-green-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
                <div className="relative flex items-center bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 p-1.5">
                  <Search className="w-5 h-5 text-gray-400 dark:text-gray-500 ml-3 shrink-0" />
                  <input
                    id="hero-medicine-search"
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => setIsFocused(true)}
                    placeholder="Search medicines, baby products, BP monitors..."
                    className="w-full font-sans text-sm sm:text-base text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 bg-transparent py-2.5 px-3 focus:outline-none"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => { setSearchQuery(''); setSearchResults([]); }}
                      className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 mr-1"
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                  )}
                  <button 
                    onClick={() => {
                      // Trigger search or scroll to catalog
                      const el = document.getElementById('catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-sans text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-md shrink-0"
                  >
                    Find
                  </button>
                </div>
              </div>

              {/* Suggestions dropdown */}
              {isFocused && (
                <div className="absolute left-0 right-0 mt-2 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-2xl overflow-hidden z-30 max-h-80 overflow-y-auto">
                  {searchResults.length > 0 ? (
                    <div className="py-2">
                      <div className="px-4 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider dark:text-slate-500">
                        Matching Inventory
                      </div>
                      {searchResults.map((prod) => (
                        <button
                          key={prod.id}
                          onClick={() => handleSelectProduct(prod)}
                          className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 dark:hover:bg-slate-800/80 text-left transition-colors border-b border-gray-50 dark:border-slate-800 last:border-b-0"
                        >
                          <div className="w-8 h-8 rounded-lg overflow-hidden bg-gray-100 dark:bg-slate-800 shrink-0">
                            <img referrerPolicy="no-referrer" src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-sans font-semibold text-sm text-gray-800 dark:text-gray-100 truncate">{prod.name}</h4>
                            <p className="font-sans text-xs text-gray-500 dark:text-gray-400 truncate">{prod.description}</p>
                          </div>
                          <div className="text-right shrink-0">
                            <span className="block font-sans font-bold text-xs text-brand-green-600 dark:text-brand-green-500">₹{prod.price}</span>
                            <span className="block font-sans text-[10px] text-gray-400">{prod.unit}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : searchQuery.trim().length > 1 ? (
                    <div className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                      <p className="font-sans text-sm">No exact match for "{searchQuery}"</p>
                      <button 
                        onClick={() => {
                          openWhatsAppOrder();
                          setIsFocused(false);
                        }}
                        className="mt-2 inline-flex items-center gap-1 text-xs text-brand-blue-500 font-semibold hover:underline"
                      >
                        Ask on WhatsApp directly
                      </button>
                    </div>
                  ) : (
                    <div className="py-3 px-4">
                      <div className="text-xs font-semibold text-gray-400 dark:text-slate-500 mb-2 uppercase tracking-wider">Popular Searches</div>
                      <div className="flex flex-wrap gap-1.5">
                        {popularTags.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => {
                              setSearchQuery(tag);
                              const matched = PRODUCTS.filter(p => p.name.toLowerCase().includes(tag.toLowerCase()));
                              setSearchResults(matched);
                            }}
                            className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-slate-800 text-xs font-medium text-gray-700 dark:text-gray-300 hover:bg-brand-blue-50 dark:hover:bg-slate-700 transition-all border border-transparent hover:border-brand-blue-100"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                id="hero-call-now-button"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800 rounded-2xl font-sans font-bold text-sm text-gray-900 dark:text-white shadow-sm transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-brand-blue-500" />
                <span>Call Store Now</span>
              </a>
              <button
                id="hero-whatsapp-order-button"
                onClick={openWhatsAppOrder}
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-brand-green-500 hover:bg-brand-green-600 text-white rounded-2xl font-sans font-bold text-sm shadow-xl shadow-brand-green-500/15 transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Order</span>
              </button>
              <a
                id="hero-directions-button"
                href="https://maps.google.com/?q=3W29+MQ7,+Pai+Bigha,+Bihar+804424"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 bg-brand-blue-500 hover:bg-brand-blue-600 text-white rounded-2xl font-sans font-bold text-sm shadow-xl shadow-brand-blue-500/15 transition-all hover:-translate-y-0.5"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>

          </div>

          {/* Hero Image Side Banner */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Card behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue-500 to-brand-green-500 rounded-3xl blur-xl opacity-20 -z-10 animate-pulse-slow" />
              
              <div className="relative rounded-3xl border-4 border-white dark:border-slate-800 overflow-hidden shadow-2xl aspect-square sm:aspect-video lg:aspect-square">
                <img 
                  referrerPolicy="no-referrer"
                  src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=600&auto=format&fit=crop" 
                  alt="Pandey Medical Hall Pharmacy Front" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating trust badge inside image */}
                <div className="absolute bottom-4 left-4 right-4 glass-card p-4 rounded-2xl flex items-center gap-3 shadow-lg border border-white/20">
                  <div className="w-10 h-10 rounded-full bg-brand-green-500 text-white flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-gray-900 dark:text-white leading-none">ISO-Sourced Distributorship</h4>
                    <p className="font-sans text-[10px] text-gray-500 dark:text-gray-300 mt-1">Sourced directly from authorized standard manufacturing pharma units.</p>
                  </div>
                </div>
              </div>

              {/* Float badge 1 */}
              <div className="absolute -top-4 -left-4 glass-card p-3 rounded-2xl flex items-center gap-2 shadow-lg border border-white/20 hidden sm:flex">
                <Award className="w-5 h-5 text-brand-blue-500" />
                <div>
                  <span className="block font-sans font-bold text-xs text-gray-900 dark:text-white">15+ Years</span>
                  <span className="block font-sans text-[10px] text-gray-500 dark:text-gray-400">Local Trust</span>
                </div>
              </div>

              {/* Float badge 2 */}
              <div className="absolute -bottom-4 -right-4 glass-card p-3 rounded-2xl flex items-center gap-2 shadow-lg border border-white/20 hidden sm:flex">
                <HeartPulse className="w-5 h-5 text-rose-500 animate-pulse" />
                <div>
                  <span className="block font-sans font-bold text-xs text-gray-900 dark:text-white">100% Genuine</span>
                  <span className="block font-sans text-[10px] text-gray-500 dark:text-gray-400">Guarantee Bills</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
