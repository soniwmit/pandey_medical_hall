/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Pill, Phone, Mail, MapPin, MessageSquare, ArrowUp, ShieldAlert, ChevronRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  openOrderForm: () => void;
}

export default function Footer({ setActiveTab, openOrderForm }: FooterProps) {
  
  const handleNavClick = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800 text-left">
          
          {/* Box 1: Brand details */}
          <div className="space-y-4">
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-2 text-left focus:outline-none"
            >
              <div className="w-10 h-10 bg-brand-green-500 text-white rounded-xl flex items-center justify-center shadow-md">
                <Pill className="w-5 h-5 rotate-45" />
              </div>
              <div>
                <span className="block font-sans font-bold text-lg leading-tight text-white tracking-tight">
                  Pandey Medical
                </span>
                <span className="block font-sans text-xs tracking-wider uppercase text-brand-green-500 font-semibold leading-none">
                  Hall • Pharmacy
                </span>
              </div>
            </button>
            
            <p className="font-sans text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your trusted local medical store in Pai Bigha, Bihar. Supplying 100% genuine and authentic prescription medicines, baby care products, surgical essentials, and home wellness monitors since 2008.
            </p>

            <div className="flex gap-2.5 pt-2">
              <a
                id="footer-call-action"
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-blue-500 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="Call pharmacy"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                id="footer-whatsapp-action"
                onClick={openOrderForm}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-brand-green-500 text-slate-300 hover:text-white flex items-center justify-center transition-all shadow-sm"
                aria-label="WhatsApp order"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Box 2: Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-white mb-5 border-l-2 border-brand-blue-500 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Business' },
                { id: 'services', label: 'Our Services' },
                { id: 'gallery', label: 'Store Gallery' },
                { id: 'faq', label: 'Pharmacy FAQs' },
                { id: 'contact', label: 'Contact Us' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    id={`footer-nav-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className="flex items-center gap-1 font-sans text-xs sm:text-sm text-slate-400 hover:text-white transition-colors focus:outline-none"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 3: Medicine Categories */}
          <div>
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-white mb-5 border-l-2 border-brand-green-500 pl-2">
              Medical Specialties
            </h4>
            <ul className="space-y-3">
              {[
                'Prescription Drugs',
                'OTC Self-Care Meds',
                'Health Supplements',
                'Baby Foods & Diapers',
                'Surgical Disposables',
                'Diagnostic Instruments'
              ].map((spec) => (
                <li key={spec}>
                  <button
                    onClick={() => {
                      // Scroll to catalog section
                      const el = document.getElementById('catalog');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1 font-sans text-xs sm:text-sm text-slate-400 hover:text-white transition-colors text-left focus:outline-none"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                    <span>{spec}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Box 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-white mb-1 border-l-2 border-amber-500 pl-2">
              Store Timings
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <span className="block text-slate-500 font-bold">Monday - Saturday:</span>
                <span className="font-mono text-slate-300 font-semibold">{BUSINESS_INFO.workingHours.weekdays}</span>
              </div>
              <div>
                <span className="block text-slate-500 font-bold">Sunday Timings:</span>
                <span className="font-mono text-slate-300 font-semibold">{BUSINESS_INFO.workingHours.sunday}</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-blue-500 shrink-0 mt-0.5" />
                <span>Pai Bigha Chowk, Bihar 804424</span>
              </div>
            </div>
          </div>

        </div>

        {/* Medical Disclaimer Section */}
        <div className="py-6 border-b border-slate-800 text-left flex gap-3 items-start bg-slate-950/20 p-4 rounded-xl mt-8">
          <ShieldAlert className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
          <p className="font-sans text-[10px] sm:text-xs text-slate-500 leading-relaxed">
            <span className="font-bold text-slate-400 uppercase tracking-wider block mb-1">Medical Disclaimer:</span>
            All content, listing prices, product data, and medication information shown on this website are provided for standard reference and educational purposes only. It is not intended to substitute professional medical consultation, diagnosis, dosage advice, or treatment. Always consult a registered medical practitioner before buying or taking any drug. We strictly comply with the Drugs and Cosmetics Act of India.
          </p>
        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[10px] sm:text-xs text-slate-500 text-center sm:text-left">
            © {new Date().getFullYear()} Pandey Medical Hall. All rights reserved. Sourced from authentic pharma distributors in Bihar. Developed by <a href="#" class="wmit-popup-trigger" target="_blank" rel="noopener noreferrer" className="text-brand-blue-500 hover:underline">WMIT</a>.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-sans text-[10px] sm:text-xs text-slate-500">
            <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-300 cursor-pointer">Terms & Conditions</span>
            <span className="text-slate-700">•</span>
            <span className="hover:text-slate-300 cursor-pointer">Disclaimer</span>
          </div>

          {/* Scroll to Top */}
          <button
            id="footer-back-to-top"
            onClick={scrollToTop}
            className="p-2.5 bg-slate-800 hover:bg-brand-blue-500 text-slate-300 hover:text-white rounded-xl transition-all shadow-sm focus:outline-none"
            aria-label="Scroll back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
