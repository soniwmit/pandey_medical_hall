/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote, ShieldCheck, Heart } from 'lucide-react';
import { TESTIMONIALS } from '../data';
import { motion } from 'motion/react';

export default function Testimonials() {
  // Calculate average rating
  const avgRating = 4.9;
  const totalReviews = TESTIMONIALS.length;

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">Testimonials</h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
            What Our Valued Customers Say
          </p>
          <div className="w-16 h-1 bg-brand-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Rating Highlights Box */}
        <div className="max-w-md mx-auto mb-12 bg-brand-blue-50/50 dark:bg-slate-800/40 border border-brand-blue-100/30 dark:border-slate-800 rounded-3xl p-5 flex items-center justify-center gap-6 shadow-sm">
          <div className="text-left">
            <span className="block font-sans font-extrabold text-4xl text-brand-blue-500">{avgRating}</span>
            <span className="block font-sans text-xs text-gray-400 font-semibold uppercase tracking-wider mt-1">Average Rating</span>
          </div>
          <div className="h-10 w-px bg-gray-200 dark:bg-slate-700" />
          <div className="text-left">
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="block font-sans text-xs text-gray-500 dark:text-gray-400 font-semibold mt-1">Based on {totalReviews}+ Local Reviews</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((test, idx) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="bg-gray-50 dark:bg-slate-800/40 rounded-3xl p-6 border border-gray-100 dark:border-slate-800 hover:border-brand-blue-100 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-sm duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote Graphic Overlay */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-gray-200 dark:text-slate-800 opacity-60 pointer-events-none group-hover:text-brand-blue-100 dark:group-hover:text-slate-700 transition-colors" />

              <div>
                {/* Stars */}
                <div className="flex gap-0.5 text-amber-400 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                  {test.rating < 5 && (
                    <Star className="w-4 h-4 text-gray-300 dark:text-slate-600" />
                  )}
                </div>

                {/* Review Message */}
                <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed italic pr-4">
                  "{test.review}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-slate-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-sans font-bold text-sm text-gray-900 dark:text-white">
                    {test.name}
                  </h4>
                  <span className="block font-sans text-[11px] text-gray-400 font-semibold uppercase tracking-wider mt-0.5">
                    {test.location}
                  </span>
                </div>

                {/* Verified Customer Label */}
                {test.verified && (
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900 text-brand-green-600 dark:text-brand-green-400 text-[10px] font-bold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Verified Patient</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
