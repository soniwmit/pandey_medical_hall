/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GALLERY_ITEMS } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Images' },
    { id: 'store', label: 'Store Front' },
    { id: 'medicines', label: 'Medicine Shelves' },
    { id: 'equipment', label: 'Equipment' },
    { id: 'surgical', label: 'Surgical Supplies' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (indexInFiltered: number) => {
    // Find the actual item in the global GALLERY_ITEMS list
    const selectedItem = filteredItems[indexInFiltered];
    const globalIdx = GALLERY_ITEMS.findIndex(item => item.id === selectedItem.id);
    setLightboxIndex(globalIdx);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    setIsZoomed(false);
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const nextIdx = (lightboxIndex + 1) % GALLERY_ITEMS.length;
      setLightboxIndex(nextIdx);
      setIsZoomed(false);
    }
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      const prevIdx = (lightboxIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
      setLightboxIndex(prevIdx);
      setIsZoomed(false);
    }
  };

  return (
    <section id="gallery" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">Our Gallery</h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
            Take a Virtual Tour of Our Store
          </p>
          <div className="w-16 h-1 bg-brand-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`gal-cat-${cat.id}`}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 font-sans font-medium text-xs sm:text-sm rounded-xl transition-all focus:outline-none ${
                activeCategory === cat.id
                  ? 'bg-brand-blue-500 text-white shadow-md shadow-brand-blue-500/15'
                  : 'bg-gray-100 dark:bg-slate-800 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white border border-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative bg-gray-50 dark:bg-slate-800/20 border border-gray-100 dark:border-slate-800/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer aspect-4/3"
              onClick={() => openLightbox(idx)}
            >
              {/* Product/Store Image */}
              <img
                referrerPolicy="no-referrer"
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-left">
                <span className="text-[9px] font-bold tracking-widest text-brand-blue-400 uppercase">
                  {item.category}
                </span>
                <h3 className="font-sans font-bold text-sm sm:text-base text-white mt-1">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-gray-300 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur-md text-white flex items-center justify-center">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* POPUP LIGHTBOX */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              id="lightbox-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-10 select-none"
              onClick={closeLightbox}
            >
              {/* Top controls panel */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <div className="text-left">
                  <span className="text-[10px] font-bold tracking-widest text-brand-blue-400 uppercase">
                    {GALLERY_ITEMS[lightboxIndex].category}
                  </span>
                  <h4 className="font-sans font-bold text-sm sm:text-lg text-white">
                    {GALLERY_ITEMS[lightboxIndex].title}
                  </h4>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsZoomed(!isZoomed);
                    }}
                    className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors focus:outline-none"
                    aria-label="Zoom image"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors focus:outline-none"
                    aria-label="Close Lightbox"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Navigation Left */}
              <button
                id="lightbox-prev-btn"
                onClick={prevSlide}
                className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none z-10"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Image Canvas Container */}
              <div className="relative max-w-4xl max-h-3/4 flex items-center justify-center overflow-hidden">
                <img
                  referrerPolicy="no-referrer"
                  src={GALLERY_ITEMS[lightboxIndex].imageUrl}
                  alt={GALLERY_ITEMS[lightboxIndex].title}
                  className={`max-w-full max-h-full object-contain rounded-xl shadow-2xl transition-transform duration-300 ${
                    isZoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsZoomed(!isZoomed);
                  }}
                />
              </div>

              {/* Navigation Right */}
              <button
                id="lightbox-next-btn"
                onClick={nextSlide}
                className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all focus:outline-none z-10"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Bottom Details Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-center max-w-2xl mx-auto">
                <p className="font-sans text-xs sm:text-sm text-gray-300 bg-black/40 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/5 inline-block">
                  {GALLERY_ITEMS[lightboxIndex].description}
                </p>
                <div className="font-sans text-[10px] text-gray-500 mt-2">
                  Image {lightboxIndex + 1} of {GALLERY_ITEMS.length}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
