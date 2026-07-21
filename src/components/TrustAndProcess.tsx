/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Heart, 
  ShieldCheck, 
  Timer, 
  Smile, 
  BadgePercent, 
  MapPin, 
  Map, 
  FileText, 
  PackageCheck, 
  CreditCard 
} from 'lucide-react';

export default function TrustAndProcess() {
  const trustReasons = [
    {
      title: 'Experienced Pharmacy',
      description: 'Operating for over 15 years with skilled clinical pharmacists who inspect dosage guidelines and drug integrity.',
      icon: ShieldCheck,
      color: 'text-brand-blue-500 bg-brand-blue-50 dark:bg-slate-900',
    },
    {
      title: 'Quality Medicines',
      description: 'Direct procurement channels from reputable multinationals. Sourced and preserved in temperature-controlled spaces.',
      icon: Heart,
      color: 'text-rose-500 bg-rose-50 dark:bg-rose-950/20',
    },
    {
      title: 'Quick Service',
      description: 'Zero wait stress. Easy computerized database lookups and high-speed digital WhatsApp packaging save your day.',
      icon: Timer,
      color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/20',
    },
    {
      title: 'Friendly Staff',
      description: 'Warm, approachable, and compassionate communication. We explain medicine timing and support elder-care directly.',
      icon: Smile,
      color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/20',
    },
    {
      title: 'Reasonable Pricing',
      description: 'Fair, standard pricing with direct distributor price transfers and generic substitute offerings to keep healthcare accessible.',
      icon: BadgePercent,
      color: 'text-amber-600 bg-amber-50 dark:bg-amber-950/20',
    },
    {
      title: 'Convenient Location',
      description: 'Located centrally in Pai Bigha Chowk with easy parking and close to local hospitals, serving neighboring blocks smoothly.',
      icon: MapPin,
      color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/20',
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Visit Store',
      description: 'Walk into our fully sanitized, modern shop in Pai Bigha, or drop a query on WhatsApp.',
      icon: Map,
      accent: 'border-brand-blue-500 bg-brand-blue-500 text-white'
    },
    {
      step: '02',
      title: 'Share Prescription',
      description: 'Hand over your prescription sheet or submit a snap via our easy WhatsApp form.',
      icon: FileText,
      accent: 'border-brand-green-500 bg-brand-green-500 text-white'
    },
    {
      step: '03',
      title: 'Get Medicines',
      description: 'Our certified staff compiles, reviews, and bags your medicines safely and quickly.',
      icon: PackageCheck,
      accent: 'border-amber-500 bg-amber-500 text-white'
    },
    {
      step: '04',
      title: 'Easy Payment',
      description: 'Complete billing via UPI scanning, card swipe, or standard cash with full receipts.',
      icon: CreditCard,
      accent: 'border-rose-500 bg-rose-500 text-white'
    }
  ];

  return (
    <div className="bg-brand-blue-50/20 dark:bg-slate-950/10 border-y border-gray-100 dark:border-slate-800 transition-colors">
      
      {/* 1. Working Process Section */}
      <section id="process" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-sans font-bold text-xs text-brand-green-600 uppercase tracking-widest">How It Works</h2>
            <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
              Our Quick & Simple Working Process
            </p>
            <div className="w-16 h-1 bg-brand-green-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Horizontal line connector (desktop only) */}
            <div className="absolute top-1/2 left-8 right-8 h-0.5 bg-gray-100 dark:bg-slate-800 -translate-y-12 z-0 hidden lg:block" />

            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="relative bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800/85 p-6 rounded-3xl shadow-sm hover:shadow-md transition-all z-10 flex flex-col items-center text-center group"
              >
                {/* Step circle badge with Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-lg relative ${item.accent} group-hover:scale-105 transition-transform`}>
                  <item.icon className="w-6 h-6" />
                  <span className="absolute -bottom-2 -right-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-sans font-extrabold text-[10px] w-6 h-6 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-sm">
                    {item.step}
                  </span>
                </div>

                <h3 className="font-sans font-extrabold text-base text-gray-900 dark:text-white mt-1">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Why Customers Trust Us Section */}
      <section id="trust" className="py-16 bg-white dark:bg-slate-900/50 border-t border-gray-100 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">A Legacy of Care</h2>
            <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
              Why Local Families Trust Us
            </p>
            <div className="w-16 h-1 bg-brand-blue-500 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustReasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                className="flex gap-4 p-6 bg-white dark:bg-slate-900 rounded-3xl border border-gray-50 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all text-left group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${reason.color}`}>
                  <reason.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-base text-gray-900 dark:text-white group-hover:text-brand-blue-500 transition-colors">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
