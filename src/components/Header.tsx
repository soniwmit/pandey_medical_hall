/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Pill, Phone, MessageSquare, Menu, X, Sun, Moon, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BUSINESS_INFO } from '../data';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  openOrderForm: () => void;
  cartCount: number;
}

export default function Header({ 
  activeTab, 
  setActiveTab, 
  darkMode, 
  setDarkMode, 
  openOrderForm,
  cartCount
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to element if on single page
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center h-[70px] ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md border-b-3 border-brand-green-500' 
          : 'bg-white dark:bg-slate-900 border-b border-gray-200/50 dark:border-slate-800/50'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <button 
            id="logo-button"
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 text-left focus:outline-none focus:ring-2 focus:ring-brand-blue-500 rounded-lg p-1 group"
          >
            <div className="w-10 h-10 bg-brand-green-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-brand-green-500/20 group-hover:scale-105 transition-transform">
              <Pill className="w-5 h-5 rotate-45" />
            </div>
            <div>
              <span className="block font-sans font-bold text-lg leading-tight text-gray-900 dark:text-white tracking-tight">
                Pandey Medical
              </span>
              <span className="block font-sans text-xs tracking-wider uppercase text-brand-green-600 dark:text-brand-green-500 font-semibold leading-none">
                Hall • Pharmacy
              </span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 font-sans font-medium text-sm rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-brand-blue-500 ${
                    isActive 
                      ? 'text-brand-blue-500 dark:text-brand-blue-100' 
                      : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBackground"
                      className="absolute inset-0 bg-brand-blue-50 dark:bg-slate-800/80 rounded-lg -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons & Dark Mode */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              id="desktop-dark-mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-gray-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-300 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Shopping Bag / WhatsApp Order indicator */}
            <button
              id="desktop-order-indicator"
              onClick={openOrderForm}
              className="relative p-2.5 rounded-xl border border-gray-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-gray-100 dark:hover:bg-slate-800 text-brand-green-600 dark:text-brand-green-500 transition-all focus:outline-none focus:ring-2 focus:ring-brand-green-500 flex items-center gap-2 group"
            >
              <ShoppingBag className="w-4 h-4 group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white font-mono text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
              <span className="font-sans text-xs font-semibold">Order Bag</span>
            </button>

            {/* Call Now Button */}
            <a
              id="desktop-call-button"
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800 px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition-all hover:scale-102"
            >
              <Phone className="w-4 h-4 text-brand-blue-500 animate-pulse" />
              <span>Call Store</span>
            </a>

            {/* WhatsApp Order Button */}
            <button
              id="desktop-whatsapp-order-button"
              onClick={openOrderForm}
              className="flex items-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow-lg shadow-brand-green-500/10 transition-all hover:scale-102 focus:outline-none focus:ring-2 focus:ring-brand-green-500"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Order on WhatsApp</span>
            </button>
          </div>

          {/* Mobile Actions: Burger & Mobile indicators */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Bag Icon on mobile */}
            <button
              id="mobile-order-indicator"
              onClick={openOrderForm}
              className="relative p-2 rounded-lg text-brand-green-600 dark:text-brand-green-500 bg-white/80 dark:bg-slate-900/80 border border-gray-200/50 dark:border-slate-800/50"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white font-mono text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Dark mode button on mobile */}
            <button
              id="mobile-dark-mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-slate-900/80 border border-gray-200/50 dark:border-slate-800/50"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-500" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Burger Menu Button */}
            <button
              id="mobile-hamburger-button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
              aria-label="Open navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-b border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <div className="grid grid-cols-2 gap-2 pb-4">
                <a
                  id="mobile-drawer-call-button"
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 dark:bg-slate-800/50 dark:hover:bg-slate-800 text-gray-900 dark:text-white px-3 py-2.5 rounded-xl text-xs font-semibold border border-gray-200 dark:border-slate-700 text-center"
                >
                  <Phone className="w-4 h-4 text-brand-blue-500" />
                  <span>Call Store</span>
                </a>
                <button
                  id="mobile-drawer-whatsapp-button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openOrderForm();
                  }}
                  className="flex items-center justify-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white px-3 py-2.5 rounded-xl text-xs font-semibold shadow-md text-center"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Order Now</span>
                </button>
              </div>

              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      id={`mobile-nav-item-${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-4 py-3 font-sans font-medium text-base rounded-xl transition-colors ${
                        isActive 
                          ? 'bg-brand-blue-50 text-brand-blue-600 dark:bg-slate-800/80 dark:text-white' 
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800/50'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
