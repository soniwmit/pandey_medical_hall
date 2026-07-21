/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, ChevronUp, Search, HelpCircle } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Store', 'Medicines', 'Ordering', 'Products'];

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-16 bg-brand-blue-50/20 dark:bg-slate-950/20 border-y border-gray-100 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">FAQ Section</h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
            Common Pharmacy Questions
          </p>
          <div className="w-16 h-1 bg-brand-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Search & Category Tabs */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-gray-100 dark:border-slate-800 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-sm">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                id="faq-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions or terms..."
                className="w-full pl-9 pr-4 py-2 font-sans text-xs sm:text-sm text-gray-800 dark:text-gray-100 bg-gray-55 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-1.5 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  id={`faq-cat-filter-${cat.toLowerCase()}`}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 font-sans font-semibold text-xs rounded-xl transition-all ${
                    selectedCategory === cat
                      ? 'bg-brand-blue-500 text-white shadow-sm'
                      : 'bg-gray-100 dark:bg-slate-800 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        {filteredFaqs.length > 0 ? (
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isOpen = openIndex === faq.id;
              return (
                <div
                  key={faq.id}
                  id={`faq-accordion-item-${faq.id}`}
                  className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden transition-all duration-300"
                >
                  <button
                    id={`faq-btn-${faq.id}`}
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-sans font-bold text-sm sm:text-base text-gray-900 dark:text-white hover:text-brand-blue-500 dark:hover:text-brand-blue-300 transition-colors focus:outline-none"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-brand-blue-500 shrink-0" />
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 shrink-0 ml-4" />
                    )}
                  </button>

                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isOpen ? 'max-h-60 border-t border-gray-50 dark:border-slate-800/80' : 'max-h-0'
                    }`}
                  >
                    <div className="p-5 font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed bg-gray-50/50 dark:bg-slate-850">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-8 text-center text-gray-500 dark:text-gray-400">
            <p className="font-sans text-sm">No FAQs matching your search query.</p>
          </div>
        )}

      </div>
    </section>
  );
}
