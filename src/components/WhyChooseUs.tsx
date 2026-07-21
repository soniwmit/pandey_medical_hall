/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Users, BadgePercent, Zap, Pill, HeartPulse, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const cards = [
    {
      title: '100% Genuine Medicines',
      description: 'Every drug is sourced directly from certified pharma manufacturing distributors with original batch codes and official GST invoices.',
      icon: ShieldCheck,
      color: 'text-brand-green-600 bg-brand-green-50 dark:text-brand-green-300 dark:bg-emerald-950/40',
    },
    {
      title: 'Experienced Staff',
      description: 'Our certified pharmacists have extensive training to check drug interactions, explain dosage instructions, and counsel patients carefully.',
      icon: Users,
      color: 'text-brand-blue-500 bg-brand-blue-50 dark:text-brand-blue-300 dark:bg-slate-900',
    },
    {
      title: 'Affordable Prices',
      description: 'We believe health is a fundamental right. We offer honest retail margins, direct discounts, and low-price generic alternatives.',
      icon: BadgePercent,
      color: 'text-amber-600 bg-amber-50 dark:text-amber-400 dark:bg-amber-950/40',
    },
    {
      title: 'Fast Service',
      description: 'No long queues or wait times. Our smart inventory sorting and computerized billing keep prescription preparation swift and efficient.',
      icon: Zap,
      color: 'text-rose-500 bg-rose-50 dark:text-rose-400 dark:bg-rose-950/40',
    },
    {
      title: 'Prescription Medicines',
      description: 'Extensive stock of chronic medicines (cardiac, blood pressure, sugar) and acute care treatments with precise temperature controls.',
      icon: Pill,
      color: 'text-indigo-600 bg-indigo-50 dark:text-indigo-400 dark:bg-indigo-950/40',
    },
    {
      title: 'Healthcare Products',
      description: 'From pulse oximeters and digital blood pressure monitors to baby nutrition and orthopedic knee braces, we cover all wellness fields.',
      icon: HeartPulse,
      color: 'text-cyan-600 bg-cyan-50 dark:text-cyan-400 dark:bg-cyan-950/40',
    },
    {
      title: 'Trusted Local Pharmacy',
      description: 'Serving the Pai Bigha community for over 15 years, standing strong through critical times, emergencies, and pandemic periods.',
      icon: MapPin,
      color: 'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-950/40',
    },
    {
      title: 'Easy WhatsApp Support',
      description: 'Simply take a photo of your doctor prescription and send it directly. We pre-pack and verify everything before your arrival.',
      icon: MessageSquare,
      color: 'text-teal-600 bg-teal-50 dark:text-teal-400 dark:bg-teal-950/40',
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">Why Choose Us</h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
            Setting the Standard for Healthcare & Trust in Pai Bigha
          </p>
          <div className="w-16 h-1 bg-brand-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.4 }}
              className="group relative p-6 bg-gray-50 dark:bg-slate-800/50 rounded-2xl border border-gray-100 dark:border-slate-800 hover:border-brand-blue-100 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-800 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col text-left"
            >
              {/* Icon container */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105 ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>

              {/* Card Title */}
              <h3 className="font-sans font-bold text-base text-gray-900 dark:text-white group-hover:text-brand-blue-500 transition-colors">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed flex-1">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
