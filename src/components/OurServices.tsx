/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Pill, 
  HeartPulse, 
  ShieldCheck, 
  Baby, 
  Sparkles, 
  Activity, 
  Scissors, 
  Bandage, 
  Thermometer, 
  PlusCircle, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import { SERVICES } from '../data';

// Map icon string names to Lucide icon components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Pill,
  HeartPulse,
  ShieldCheck,
  Baby,
  Sparkles,
  Activity,
  Scissors,
  Bandage,
  Thermometer
};

export default function OurServices() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section id="services" className="py-16 bg-brand-blue-50/30 dark:bg-slate-950/20 border-y border-gray-100 dark:border-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">Our Services</h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
            Comprehensive Medical & Healthcare Solutions
          </p>
          <div className="w-16 h-1 bg-brand-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const IconComponent = iconMap[service.icon] || PlusCircle;
            const isExpanded = selectedService === service.id;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group bg-white dark:bg-slate-900 rounded-3xl border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col text-left overflow-hidden relative"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue-500 to-brand-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue-500/10 text-brand-blue-500 dark:bg-brand-blue-500/20 dark:text-brand-blue-300 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-sans font-extrabold text-lg text-gray-900 dark:text-white leading-tight group-hover:text-brand-blue-500 transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow mb-6">
                  {service.description}
                </p>

                {/* Service Highlights / Bullets */}
                <div className="space-y-2 mb-6">
                  <span className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-400 dark:text-slate-500">Key Features</span>
                  <ul className="space-y-1.5">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-brand-green-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    // Smoothly scroll to WhatsApp Order / open it
                    const orderEl = document.getElementById('whatsapp-order');
                    if (orderEl) {
                      orderEl.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="mt-auto flex items-center gap-1.5 text-xs font-bold text-brand-blue-500 hover:text-brand-blue-600 dark:text-brand-blue-400 dark:hover:text-brand-blue-300 focus:outline-none tracking-wide uppercase transition-all"
                >
                  <span>Order these Items Now</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
