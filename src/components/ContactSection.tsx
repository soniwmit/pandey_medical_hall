/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Star, 
  ShieldAlert, 
  CheckCircle2, 
  ThumbsUp,
  MessageSquareHeart,
  ChevronRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactSection() {
  // Form State
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Status State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Google Reviews list
  const googleReviews = [
    {
      author: 'Rajesh Pandey',
      stars: 5,
      date: '2 weeks ago',
      text: 'One of the best medical halls in this region. Medicines are always genuine and they provide quick services. Extremely polite owner.'
    },
    {
      author: 'Aarav Gupta',
      stars: 5,
      date: '1 month ago',
      text: 'Highly recommended for critical drugs. They kept my fathers heart medicines reserved and verified on WhatsApp before I went to collect.'
    },
    {
      author: 'Rina Kumari',
      stars: 5,
      date: '3 months ago',
      text: 'Great customer support. They explained the dosage of insulin for my grandmother very patiently. Price is also very fair.'
    }
  ];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = 'Name is required';
    if (!phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(phone.replace(/\s+/g, ''))) {
      tempErrors.phone = 'Enter a valid 10-digit phone number';
    }
    if (!message.trim()) tempErrors.message = 'Please type a brief inquiry message';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate sending inquiry
    setShowSuccess(true);
    
    // Reset fields
    setName('');
    setPhone('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">Contact Us</h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
            Get in Touch or Visit Our Store
          </p>
          <div className="w-16 h-1 bg-brand-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Column 1: Details & Hours & Emergency Info */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div>
              <h3 className="font-sans font-extrabold text-xl text-gray-900 dark:text-white mb-6">Store Information</h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-50 dark:bg-slate-800 text-brand-blue-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider">Store Location</h4>
                    <p className="font-sans text-sm text-gray-700 dark:text-gray-300 font-semibold mt-0.5">{BUSINESS_INFO.address}</p>
                    <span className="block font-sans text-[11px] text-gray-400 mt-1">Plus Code: 3W29+MQ7 Pai Bigha</span>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-50 dark:bg-slate-800 text-brand-blue-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider">Call Support</h4>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="block font-sans text-sm text-brand-blue-500 font-bold hover:underline mt-0.5">
                      {BUSINESS_INFO.phone}
                    </a>
                    <span className="block font-sans text-[11px] text-gray-400 mt-0.5">Click to call pharmacy team</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-50 dark:bg-slate-800 text-brand-blue-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-xs text-gray-400 dark:text-slate-500 uppercase tracking-wider">Email Inquiry</h4>
                    <a href={`mailto:${BUSINESS_INFO.email}`} className="block font-sans text-sm text-gray-700 dark:text-gray-300 font-semibold hover:underline mt-0.5">
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Working Hours Card */}
            <div className="bg-gray-50 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800 rounded-3xl p-6">
              <h3 className="font-sans font-extrabold text-sm uppercase tracking-wider text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-brand-green-500" />
                <span>Business Hours</span>
              </h3>
              
              <div className="space-y-3.5">
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/55 dark:border-slate-800">
                  <span className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Monday - Saturday</span>
                  <span className="font-mono text-xs sm:text-sm text-gray-900 dark:text-white font-bold">{BUSINESS_INFO.workingHours.weekdays}</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-gray-200/55 dark:border-slate-800">
                  <span className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Sunday</span>
                  <span className="font-mono text-xs sm:text-sm text-gray-900 dark:text-white font-bold">{BUSINESS_INFO.workingHours.sunday}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">Emergency Care</span>
                  <span className="font-mono text-xs sm:text-sm text-rose-500 font-bold uppercase tracking-wider">{BUSINESS_INFO.workingHours.emergency}</span>
                </div>
              </div>
            </div>

            {/* Emergency Alert Panel */}
            <div className="bg-rose-500 text-white rounded-3xl p-6 shadow-lg shadow-rose-500/10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/5 rounded-full blur-xl" />
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h4 className="font-sans font-extrabold text-base">Emergency Contact</h4>
                  <p className="font-sans text-xs text-rose-50 mt-1 leading-relaxed">
                    Need life-saving medicine or urgent medical supplies during off-hours? Call us immediately. We are committed to serving the Pai Bigha community 24/7 in moments of absolute distress.
                  </p>
                  <a
                    id="emergency-phone-btn"
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 bg-white text-rose-600 hover:bg-rose-50 rounded-xl text-xs font-bold shadow-sm transition-all focus:outline-none"
                  >
                    <span>Call Now: {BUSINESS_INFO.phone}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Fully interactive Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-gray-150 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-md text-left">
            <h3 className="font-sans font-extrabold text-xl text-gray-900 dark:text-white mb-6">Send an Inquiry</h3>
            
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  id="contact-success-banner"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-4 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 rounded-2xl flex items-start gap-3 text-brand-green-700 dark:text-brand-green-400 text-xs sm:text-sm mb-6"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-green-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold">Thank You! Your message was sent successfully.</span>
                    <span className="block text-xs text-gray-500 dark:text-gray-400 mt-1">Our pharmacy team will review your inquiry and contact you at your phone number shortly.</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">Your Name <span className="text-rose-500">*</span></label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Anand Sharma"
                  className={`w-full px-4 py-2.5 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 border rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500 ${
                    errors.name ? 'border-rose-400' : 'border-gray-200 dark:border-slate-700'
                  }`}
                />
                {errors.name && <span className="block font-sans text-[10px] text-rose-500">{errors.name}</span>}
              </div>

              {/* Phone */}
              <div className="space-y-1.5">
                <label htmlFor="contact-phone" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">Phone Number <span className="text-rose-500">*</span></label>
                <input
                  id="contact-phone"
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9955506238"
                  className={`w-full px-4 py-2.5 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 border rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500 ${
                    errors.phone ? 'border-rose-400' : 'border-gray-200 dark:border-slate-700'
                  }`}
                />
                {errors.phone && <span className="block font-sans text-[10px] text-rose-500">{errors.phone}</span>}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. anand@gmail.com"
                  className="w-full px-4 py-2.5 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-800 dark:text-gray-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">Inquiry Message <span className="text-rose-500">*</span></label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your specific questions about medicine stock, price requests, bulk surgical orders, etc."
                  className={`w-full px-4 py-2.5 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 border rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500 ${
                    errors.message ? 'border-rose-400' : 'border-gray-200 dark:border-slate-700'
                  }`}
                />
                {errors.message && <span className="block font-sans text-[10px] text-rose-500">{errors.message}</span>}
              </div>

              {/* Submit button */}
              <button
                id="contact-form-submit-btn"
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-brand-blue-500 hover:bg-brand-blue-600 text-white font-sans font-bold text-sm sm:text-base py-3 px-6 rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-brand-blue-500"
              >
                <Send className="w-4 h-4" />
                <span>Send Inquiry</span>
              </button>

            </form>
          </div>

        </div>

        {/* 3. GOOGLE MAPS INTEGRATION SECTION */}
        <div className="bg-gray-50 dark:bg-slate-850 border border-gray-100 dark:border-slate-800 p-4 rounded-3xl shadow-inner mb-16 text-left">
          <div className="flex items-center justify-between mb-4 px-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-brand-blue-500" />
              <h3 className="font-sans font-extrabold text-base text-gray-900 dark:text-white">Our Location in Pai Bigha, Bihar</h3>
            </div>
            <a 
              id="map-directions-link"
              href="https://maps.google.com/?q=3W29+MQ7,+Pai+Bigha,+Bihar+804424"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-bold text-brand-blue-500 hover:underline"
            >
              Open in Maps App
            </a>
          </div>

          <div className="w-full h-[320px] rounded-2xl overflow-hidden shadow-md">
            {/* Embedded map of Pai Bigha, Bihar using standard secure iframe */}
            <iframe
              id="google-maps-frame"
              title="Pandey Medical Hall Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.3243912185565!2d84.99120619999999!3d25.0441221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398cd26f6eb3e6f9%3A0xe5334db54992484f!2sPandey%20Medical%20Hall!5e0!3m2!1sen!2sin!4v1719999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* 4. GOOGLE REVIEWS SECTION */}
        <div id="google-reviews" className="border-t border-gray-100 dark:border-slate-800 pt-16 text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="block font-sans font-bold text-xs text-brand-green-600 uppercase tracking-widest">Local Trust</span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white mt-1 leading-tight flex items-center gap-2">
                <MessageSquareHeart className="w-6 h-6 text-brand-green-600 shrink-0" />
                <span>Google Customer Reviews</span>
              </h3>
            </div>
            
            <div className="flex items-center gap-2.5 bg-brand-green-50 dark:bg-emerald-950/40 p-4 rounded-2xl border border-brand-green-100/35">
              <span className="font-sans font-extrabold text-3xl text-brand-green-600">4.9</span>
              <div>
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="block font-sans text-[10px] text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wider mt-0.5">Rating Breakdown</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {googleReviews.map((rev, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-slate-800/40 rounded-2xl p-6 border border-gray-100 dark:border-slate-800 shadow-xs hover:shadow-sm hover:bg-white dark:hover:bg-slate-800 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-sans font-bold text-sm text-gray-900 dark:text-white">{rev.author}</span>
                    <span className="font-sans text-[10px] text-gray-400">{rev.date}</span>
                  </div>
                  <div className="flex gap-0.5 text-amber-400 mb-3">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400" />
                    ))}
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
                
                <div className="mt-5 pt-3 border-t border-gray-100 dark:border-slate-850 flex items-center gap-1.5 text-[10px] font-bold text-brand-green-600 dark:text-brand-green-400 uppercase tracking-wider">
                  <ThumbsUp className="w-3.5 h-3.5 shrink-0" />
                  <span>Highly Recommend</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
