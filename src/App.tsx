/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp, Sparkles, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Import Custom Components
import SEOAndSchema from './components/SEOAndSchema';
import Header from './components/Header';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import OurServices from './components/OurServices';
import MedicineCatalog from './components/MedicineCatalog';
import TrustAndProcess from './components/TrustAndProcess';
import AboutSection from './components/AboutSection';
import GallerySection from './components/GallerySection';
import Testimonials from './components/Testimonials';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import WhatsAppOrderForm from './components/WhatsAppOrderForm';
import Footer from './components/Footer';

// Data & Types
import { BUSINESS_INFO } from './data';
import { Product } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [cart, setCart] = useState<Record<string, number>>({});
  const [highlightedProductId, setHighlightedProductId] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // 1. Dark Mode Sync
  useEffect(() => {
    // Check local preferences on initial load
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Global Tracking Hook Integration
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const sendInitPayload = () => {
      const payload = {
        cid: cid, visitor_id: visitorId, session_id: sessionId,
        page_name: getPageName(), referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent, action: 'init'
      };
      fetch(TRACKING_ENDPOINT, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }).catch(err => {});
    };

    const sendExitPayload = () => {
      const payload = { cid: cid, session_id: sessionId, page_name: getPageName(), action: 'page_change' };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, { method: 'POST', mode: 'cors', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), keepalive: true }).catch(err => {});
      }
    };

    sendInitPayload();

    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('pagehide', sendExitPayload);
    
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') { sendExitPayload(); }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', sendExitPayload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // 2. Back To Top Visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      
      // Determine which section is currently active based on viewport scroll
      const sections = ['home', 'why-choose-us', 'services', 'catalog', 'process', 'about', 'gallery', 'testimonials', 'faq', 'contact', 'whatsapp-order'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            // Keep active navigation tab aligned
            if (['home', 'about', 'services', 'gallery', 'faq', 'contact'].includes(section)) {
              setActiveTab(section);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Cart Functions
  const handleAddToCart = (product: Product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1
    }));
    triggerToast(`Added ${product.name} to order bag`);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[productId] > 1) {
        updated[productId] -= 1;
      } else {
        delete updated[productId];
      }
      return updated;
    });
  };

  const handleClearCart = () => {
    setCart({});
    triggerToast('Order bag cleared successfully');
  };

  const cartCount = (Object.values(cart) as number[]).reduce((a: number, b: number) => a + b, 0);

  // 4. Hero Search Routing
  const handleSearchProduct = (product: Product) => {
    setHighlightedProductId(product.id);
    triggerToast(`Located ${product.name}. Scrolling to catalog...`);
  };

  // 5. Scroll to Order Form directly
  const handleOpenOrderForm = () => {
    const el = document.getElementById('whatsapp-order');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 6. Micro Feedback Toast
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#F0F4F8] dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Dynamic SEO Head and JSON-LD Schemas */}
      <SEOAndSchema activeTab={activeTab} />

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            id="global-toast"
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 20, x: '-50%' }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-gray-900/95 dark:bg-white/95 text-white dark:text-gray-900 px-5 py-3 rounded-2xl flex items-center gap-2 shadow-2xl border border-white/10 dark:border-slate-200 text-xs sm:text-sm font-semibold backdrop-blur-md"
          >
            <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600 shrink-0" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky Header */}
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        openOrderForm={handleOpenOrderForm}
        cartCount={cartCount}
      />

      {/* Hero Landing Area with AutoSuggest Search */}
      <Hero 
        onSearchProduct={handleSearchProduct} 
        openWhatsAppOrder={handleOpenOrderForm}
        onAddToCart={handleAddToCart}
      />

      {/* Why Choose Us Cards Grid */}
      <WhyChooseUs />

      {/* Detailed Services Grids */}
      <OurServices />

      {/* Medicine & Wellness catalog with direct search and click checkout */}
      <MedicineCatalog 
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        highlightedProductId={highlightedProductId}
        clearHighlight={() => setHighlightedProductId(null)}
      />

      {/* How it Works timeline & Local Trust anchors */}
      <TrustAndProcess />

      {/* Deep story timeline and Chief Chemist letter */}
      <AboutSection />

      {/* Modern category filtered masonry gallery with popup lightbox */}
      <GallerySection />

      {/* Animated Customer reviews */}
      <Testimonials />

      {/* Searchable Accordion FAQs */}
      <FAQSection />

      {/* Exact location, validated inquiry, operational times, and reviews stats */}
      <ContactSection />

      {/* Dedicated Interactive WhatsApp Order Portal */}
      <WhatsAppOrderForm 
        cart={cart}
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
        closeForm={() => {}}
      />

      {/* Beautiful Deep Footer with Medical Disclaimer */}
      <Footer 
        setActiveTab={setActiveTab}
        openOrderForm={handleOpenOrderForm}
      />

      {/* FLOATING ACTION INTERACTIVE WIDGETS */}
      
      {/* 1. Floating Call Button (Bottom Left) */}
      <a
        id="floating-call-btn"
        href={`tel:${BUSINESS_INFO.phone}`}
        className="fixed bottom-6 left-6 z-40 bg-brand-blue-500 hover:bg-brand-blue-600 text-white p-4 rounded-2xl shadow-2xl shadow-brand-blue-500/20 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
        aria-label="Call Store"
      >
        <Phone className="w-5 h-5 group-hover:animate-bounce shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-30 group-hover:ml-2 font-sans font-extrabold text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap leading-none">
          Call Now
        </span>
      </a>

      {/* 2. Floating WhatsApp Button (Bottom Right) */}
      <button
        id="floating-whatsapp-btn"
        onClick={handleOpenOrderForm}
        className="fixed bottom-6 right-6 z-40 bg-brand-green-500 hover:bg-brand-green-600 text-white p-4 rounded-2xl shadow-2xl shadow-brand-green-500/20 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-brand-green-500"
        aria-label="Order on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform shrink-0" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-30 group-hover:ml-2 font-sans font-extrabold text-xs tracking-wider uppercase transition-all duration-300 whitespace-nowrap leading-none">
          WhatsApp Order
        </span>
        {cartCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white font-mono text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-green-500 shadow-sm">
            {cartCount}
          </span>
        )}
      </button>

      {/* 3. Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="floating-back-to-top"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-24 right-6 z-40 bg-white/90 dark:bg-slate-900/90 text-slate-700 dark:text-slate-300 hover:text-gray-900 border border-gray-200/50 dark:border-slate-800 p-3.5 rounded-xl shadow-xl backdrop-blur-md transition-all hover:scale-105 focus:outline-none"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
