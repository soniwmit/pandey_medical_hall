/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Heart, MapPin, PhoneCall, Quote, Landmark, Eye, HeartPulse, Sparkles, UserRound } from 'lucide-react';
import { TIMELINE, VALUES, BUSINESS_INFO } from '../data';
import { motion } from 'motion/react';

// Map icon strings to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  Heart,
  MapPin,
  PhoneCall
};

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-brand-blue-50/20 dark:bg-slate-950/20 border-y border-gray-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">About Us</h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
            Our Story, Values & Mission of Local Care
          </p>
          <div className="w-16 h-1 bg-brand-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* 1. Main Business Story & Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white leading-tight">
              Pioneering Authentic Healthcare in Pai Bigha Since 2008
            </h3>
            
            <p className="font-sans text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Pandey Medical Hall was founded in 2008 with a simple yet critical objective: to bring high-quality, authentic pharmaceutical drugs and vital medical items directly to the doorsteps of the rural families of Pai Bigha, Bihar. 
            </p>

            <p className="font-sans text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Before we established our pharmacy, patients had to travel up to 20 kilometers to cities like Jehanabad or Gaya to buy genuine chronic medications. Today, we stand proud as a reliable medical anchor for the region, offering certified distributorship products, insulin storage facility, surgical disposables, maternal nutrition, and pediatric supplies right in the heart of our community.
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100 dark:border-slate-800">
              <div>
                <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-brand-blue-500">15+</span>
                <span className="block font-sans text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider">Years of Trust</span>
              </div>
              <div>
                <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-brand-green-500">100%</span>
                <span className="block font-sans text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider">Genuine Meds</span>
              </div>
              <div>
                <span className="block font-sans font-extrabold text-2xl sm:text-3xl text-amber-500">10k+</span>
                <span className="block font-sans text-[10px] sm:text-xs text-gray-400 font-semibold uppercase tracking-wider">Served Local Users</span>
              </div>
            </div>
          </div>

          {/* Right graphics banner card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl border border-gray-100 dark:border-slate-800 overflow-hidden shadow-xl aspect-4/3">
              <img 
                referrerPolicy="no-referrer"
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop" 
                alt="Pharmacy Consultation" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 text-left">
                <div>
                  <span className="text-[10px] font-bold text-brand-blue-300 tracking-wider uppercase">Our Motto</span>
                  <p className="font-sans font-bold text-sm sm:text-base text-white mt-1">
                    "Genuine medicines combined with polite and professional care."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-white dark:bg-slate-900 border border-gray-50 dark:border-slate-800 rounded-3xl p-8 text-left shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-blue-500/5 rounded-full group-hover:scale-110 transition-transform" />
            <div className="w-10 h-10 bg-brand-blue-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-brand-blue-500 mb-4">
              <Landmark className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-extrabold text-lg text-gray-900 dark:text-white">Our Mission</h3>
            <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
              To supply authentic and life-saving medicines with verified safety codes at reasonable prices. We are dedicated to providing clear, informative guidance on drug usage to eliminate risks of wrong self-medication in our rural district.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white dark:bg-slate-900 border border-gray-50 dark:border-slate-800 rounded-3xl p-8 text-left shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-brand-green-500/5 rounded-full group-hover:scale-110 transition-transform" />
            <div className="w-10 h-10 bg-brand-green-50 dark:bg-slate-800 rounded-xl flex items-center justify-center text-brand-green-500 mb-4">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="font-sans font-extrabold text-lg text-gray-900 dark:text-white">Our Vision</h3>
            <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
              To raise rural health standards by introducing modern digital order pipelines, standardized storage facilities, and certified medical products, establishing ourselves as the premier digital-first, ethical, and compassionate pharmacy.
            </p>
          </div>
        </div>

        {/* 3. Core Values Grid */}
        <div className="mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="font-sans font-bold text-xs text-brand-green-600 uppercase tracking-widest">Our Values</h3>
            <h4 className="font-sans font-extrabold text-2xl text-gray-900 dark:text-white mt-1">What Guides Our Service</h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, idx) => {
              const IconComp = iconMap[val.icon] || HeartPulse;
              return (
                <div 
                  key={idx}
                  className="bg-white dark:bg-slate-900 border border-gray-50 dark:border-slate-800 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-brand-blue-500/10 text-brand-blue-500 dark:bg-slate-800 dark:text-brand-blue-400 rounded-xl flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h5 className="font-sans font-bold text-base text-gray-900 dark:text-white">
                    {val.title}
                  </h5>
                  <p className="font-sans text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Owner Message Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20 text-left">
          <div className="lg:col-span-8 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 rounded-3xl p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
            {/* Stamp effect */}
            <div className="absolute bottom-8 right-8 w-24 h-24 border-4 border-emerald-500/10 text-emerald-500/10 rounded-full flex items-center justify-center font-serif text-xs font-bold uppercase rotate-12 pointer-events-none select-none">
              Certified Chemist
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Quote className="w-10 h-10 text-brand-green-500 rotate-180 opacity-20" />
                <h4 className="font-sans font-extrabold text-xl text-gray-900 dark:text-white">A Message from Our Owner</h4>
              </div>

              <p className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed italic">
                "Dear Customers of Pai Bigha, health is not just about popping a pill; it is about trust, counseling, and assurance. When we started Pandey Medical Hall in 2008, our goal was to save lives by keeping medicine procurement transparent and completely authentic. We ensure that every vaccine, critical tablet strip, or diagnostic device is preserved under correct manufacturer guidelines. We pledge to stand with you during emergency hours. Thank you for placing your precious faith in us over these fifteen years."
              </p>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-50 dark:border-slate-800/80 flex items-center justify-between">
              <div>
                <h5 className="font-sans font-extrabold text-base text-gray-900 dark:text-white">R. N. Pandey</h5>
                <span className="block font-sans text-xs text-brand-green-600 dark:text-brand-green-500 font-semibold uppercase tracking-wider">Chief Pharmacist & Owner</span>
              </div>
              
              {/* Doctor signature visualizer */}
              <div className="font-serif italic text-xl text-brand-blue-500 opacity-80 select-none">
                ~ Pandey.
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-gradient-to-br from-brand-blue-500 to-brand-green-600 rounded-3xl p-8 text-white flex flex-col justify-center text-left relative overflow-hidden shadow-xl">
            {/* Background elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/5 rounded-full blur-xl" />
            
            <Sparkles className="w-8 h-8 text-white/20 mb-6" />
            
            <h4 className="font-sans font-extrabold text-lg">Need Immediate Consultation?</h4>
            <p className="font-sans text-xs text-brand-blue-50 mt-2 leading-relaxed">
              If you have queries about your prescribed doses, substitute medicine options, or local home delivery limits, our chief chemist is just a phone call away.
            </p>

            <a
              id="about-owner-call-btn"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-white text-gray-900 hover:bg-brand-blue-50 px-6 py-3 rounded-2xl text-xs font-bold shadow-md transition-all focus:outline-none"
            >
              <PhoneCall className="w-4 h-4 text-brand-blue-500 animate-bounce" />
              <span>Call Us: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        {/* 5. Historical Store Timeline */}
        <div id="timeline">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h3 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">Our Timeline</h3>
            <h4 className="font-sans font-extrabold text-2xl text-gray-900 dark:text-white mt-1">Our Journey of Growth</h4>
          </div>

          <div className="relative border-l-2 border-brand-blue-200 dark:border-slate-800 max-w-3xl mx-auto pl-6 sm:pl-10 space-y-10 text-left">
            {TIMELINE.map((evt, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative"
              >
                {/* Year Badge connector */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-0.5 bg-brand-blue-500 text-white font-sans font-extrabold text-xs px-2.5 py-1 rounded-xl shadow-lg border border-white dark:border-slate-950 z-10 shrink-0">
                  {evt.year}
                </div>

                <div className="bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-850 p-5 rounded-2xl shadow-sm">
                  <h4 className="font-sans font-extrabold text-base text-gray-900 dark:text-white">
                    {evt.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1.5 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
