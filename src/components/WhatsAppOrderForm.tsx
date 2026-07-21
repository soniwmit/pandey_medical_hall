/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Send, 
  Phone, 
  User, 
  Mail, 
  FileText, 
  Check, 
  AlertCircle, 
  Clock, 
  MapPin, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag,
  FileImage
} from 'lucide-react';
import { BUSINESS_INFO } from '../data';
import { Product } from '../types';

interface WhatsAppOrderFormProps {
  cart: Record<string, number>;
  onAddToCart: (product: Product) => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
  closeForm?: () => void;
}

export default function WhatsAppOrderForm({
  cart,
  onAddToCart,
  onRemoveFromCart,
  onClearCart,
  closeForm
}: WhatsAppOrderFormProps) {
  // Form State
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [customMedicines, setCustomMedicines] = useState('');
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('No');
  const [prescriptionName, setPrescriptionName] = useState<string>('');
  const [message, setMessage] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('Anytime (08:00 AM - 09:00 PM)');

  // Validation/Feedback State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Compile cart items
  const cartProducts = Object.entries(cart)
    .map(([id, qty]) => {
      // Find matching product
      const product = require('../data').PRODUCTS.find((p: Product) => p.id === id);
      return { product, qty };
    })
    .filter(item => item.product !== undefined && item.qty > 0) as { product: Product; qty: number }[];

  const cartTotal = cartProducts.reduce((acc, item) => acc + (item.product.price * item.qty), 0);

  // Handle Mock Prescription File upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setPrescriptionName(e.target.files[0].name);
      setHasPrescription('Yes');
    }
  };

  // Field validation
  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!name.trim()) tempErrors.name = 'Customer Name is required';
    if (!mobile.trim()) {
      tempErrors.mobile = 'Mobile Number is required';
    } else if (!/^[0-9]{10}$/.test(mobile.replace(/\s+/g, ''))) {
      tempErrors.mobile = 'Enter a valid 10-digit mobile number';
    }
    if (!address.trim()) tempErrors.address = 'Delivery / Pickup address is required';
    
    if (cartProducts.length === 0 && !customMedicines.trim()) {
      tempErrors.items = 'Please select medicines from our catalog or type them in below';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Build Formatted WhatsApp Message Text
    let textMessage = `Hello, ${BUSINESS_INFO.name}\n`;
    textMessage += `*NEW MEDICINE ORDER REQUEST*\n`;
    textMessage += `----------------------------------------\n`;
    textMessage += `*Customer Name:* ${name}\n`;
    textMessage += `*Phone:* ${mobile}\n`;
    if (email.trim()) textMessage += `*Email:* ${email}\n`;
    textMessage += `*Address:* ${address}\n\n`;

    textMessage += `*Medicines Required:*\n`;
    
    // Add cart products
    if (cartProducts.length > 0) {
      cartProducts.forEach((item, idx) => {
        textMessage += `${idx + 1}. ${item.product.name} (${item.product.unit}) x ${item.qty} = ₹${item.product.price * item.qty}\n`;
      });
      textMessage += `*Estimated Cart Total: ₹${cartTotal}*\n`;
    }

    // Add additional typed-in medicines
    if (customMedicines.trim()) {
      if (cartProducts.length > 0) textMessage += `\n*Additional Written Request:*\n`;
      textMessage += `${customMedicines}\n`;
    }

    textMessage += `\n----------------------------------------\n`;
    textMessage += `*Has Doctor Prescription:* ${hasPrescription}${prescriptionName ? ` (${prescriptionName})` : ''}\n`;
    textMessage += `*Preferred Delivery Time:* ${deliveryTime}\n`;
    if (message.trim()) textMessage += `*Special Instructions:* ${message}\n`;
    textMessage += `----------------------------------------\n`;
    textMessage += `_Sent via Website Order Form_`;

    // Encode text
    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=91${BUSINESS_INFO.whatsapp}&text=${encodedText}`;

    // Action execution
    setIsSuccess(true);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setIsSuccess(false);
    }, 1500);
  };

  return (
    <section id="whatsapp-order" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-widest">WhatsApp Order Portal</h2>
          <p className="font-sans font-extrabold text-3xl sm:text-4xl text-gray-900 dark:text-white mt-2 leading-tight">
            Order Your Medicines via WhatsApp
          </p>
          <div className="w-16 h-1 bg-brand-blue-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 1. CART BRIEF / SUMMARY AREA (Left) */}
          <div className="lg:col-span-5 bg-gray-50 dark:bg-slate-800/40 border border-gray-100 dark:border-slate-800 rounded-3xl p-6 text-left">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200/60 dark:border-slate-800">
              <h3 className="font-sans font-extrabold text-base text-gray-900 dark:text-white flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-brand-blue-500" />
                <span>Your Order Bag</span>
              </h3>
              {cartProducts.length > 0 && (
                <button
                  id="order-clear-bag-btn"
                  onClick={onClearCart}
                  className="text-xs font-bold text-rose-500 hover:text-rose-600 transition-colors cursor-pointer"
                >
                  Clear Bag
                </button>
              )}
            </div>

            {/* List Cart Items */}
            {cartProducts.length > 0 ? (
              <div className="py-4 space-y-4 max-h-[360px] overflow-y-auto pr-1">
                {cartProducts.map((item) => (
                  <div key={item.product.id} className="flex items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800/80 p-3 rounded-2xl shadow-sm">
                    <div className="min-w-0 flex-1">
                      <h4 className="font-sans font-bold text-xs sm:text-sm text-gray-900 dark:text-white truncate">
                        {item.product.name}
                      </h4>
                      <span className="block font-sans text-[10px] text-gray-400 mt-0.5">
                        {item.product.unit} • ₹{item.product.price}
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        id={`checkout-decrease-${item.product.id}`}
                        onClick={() => onRemoveFromCart(item.product.id)}
                        className="w-6 h-6 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300 rounded-md flex items-center justify-center transition-colors shadow-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono text-xs font-bold text-gray-800 dark:text-white w-4 text-center">
                        {item.qty}
                      </span>
                      <button
                        id={`checkout-increase-${item.product.id}`}
                        onClick={() => onAddToCart(item.product)}
                        className="w-6 h-6 bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-gray-600 dark:text-gray-300 rounded-md flex items-center justify-center transition-colors shadow-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Subtotal line */}
                <div className="pt-4 mt-4 border-t border-gray-200/60 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-sans font-semibold text-xs text-gray-400 uppercase tracking-wider">Bag Total</span>
                  <span className="font-sans font-extrabold text-xl text-brand-green-600 dark:text-brand-green-500">₹{cartTotal}</span>
                </div>
              </div>
            ) : (
              <div className="py-12 text-center text-gray-500 dark:text-gray-400">
                <p className="font-sans text-sm">Your order bag is empty.</p>
                <p className="font-sans text-xs mt-1 text-gray-400">Add medicines from the catalog above or type your requests below!</p>
              </div>
            )}

            {/* Helpful Order Instructions */}
            <div className="bg-brand-blue-50/50 dark:bg-slate-850 border border-brand-blue-100/30 dark:border-slate-800 p-4 rounded-2xl mt-4">
              <h4 className="font-sans font-bold text-xs text-brand-blue-500 uppercase tracking-wider mb-1">Ordering Instructions</h4>
              <ul className="space-y-1 text-[11px] text-gray-500 dark:text-gray-400 leading-relaxed">
                <li>• Scheduled drugs strictly require a valid prescription.</li>
                <li>• Take a clear snap of the prescription sheet if requested.</li>
                <li>• Double-check your 10-digit mobile number for local callback.</li>
                <li>• Delivery timings depend on distance from Pai Bigha Chowk.</li>
              </ul>
            </div>
          </div>

          {/* 2. ORDER INTAKE FORM (Right) */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-md text-left">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {errors.items && (
                <div className="p-3.5 bg-rose-50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900 rounded-xl flex items-center gap-2 text-rose-500 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errors.items}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="order-name" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="order-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full pl-9 pr-4 py-2.5 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 border rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500 ${
                        errors.name ? 'border-rose-400' : 'border-gray-200 dark:border-slate-700'
                      }`}
                    />
                  </div>
                  {errors.name && <span className="block font-sans text-[10px] text-rose-500">{errors.name}</span>}
                </div>

                {/* Mobile */}
                <div className="space-y-1.5">
                  <label htmlFor="order-mobile" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="order-mobile"
                      type="tel"
                      maxLength={10}
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="e.g. 9955506238"
                      className={`w-full pl-9 pr-4 py-2.5 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 border rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500 ${
                        errors.mobile ? 'border-rose-400' : 'border-gray-200 dark:border-slate-700'
                      }`}
                    />
                  </div>
                  {errors.mobile && <span className="block font-sans text-[10px] text-rose-500">{errors.mobile}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="order-email" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      id="order-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. name@domain.com"
                      className="w-full pl-9 pr-4 py-2.5 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500"
                    />
                  </div>
                </div>

                {/* Preferred Delivery Time */}
                <div className="space-y-1.5">
                  <label htmlFor="order-time" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">
                    Preferred Delivery Time
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <select
                      id="order-time"
                      value={deliveryTime}
                      onChange={(e) => setDeliveryTime(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500"
                    >
                      <option>Anytime (08:00 AM - 09:00 PM)</option>
                      <option>Morning (08:00 AM - 12:00 PM)</option>
                      <option>Afternoon (12:00 PM - 04:00 PM)</option>
                      <option>Evening (04:00 PM - 09:00 PM)</option>
                      <option>Emergency Delivery Required</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-1.5">
                <label htmlFor="order-address" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">
                  Delivery / Pickup Address <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <textarea
                    id="order-address"
                    rows={2}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Provide full village address, landmark, or block details in Pai Bigha area."
                    className={`w-full pl-9 pr-4 py-2 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 border rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500 ${
                      errors.address ? 'border-rose-400' : 'border-gray-200 dark:border-slate-700'
                    }`}
                  />
                </div>
                {errors.address && <span className="block font-sans text-[10px] text-rose-500">{errors.address}</span>}
              </div>

              {/* Custom Written Medicines */}
              <div className="space-y-1.5">
                <label htmlFor="order-custom-items" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">
                  Write Additional Medicines Needed
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                  <textarea
                    id="order-custom-items"
                    rows={3}
                    value={customMedicines}
                    onChange={(e) => setCustomMedicines(e.target.value)}
                    placeholder="If some items are not in our list, write their names and quantity here. e.g. Grilinctus Syrup - 1 bottle, Paracetamol 500mg - 10 tabs"
                    className="w-full pl-9 pr-4 py-2 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500"
                  />
                </div>
              </div>

              {/* Prescription Attachment Field */}
              <div className="p-4 bg-gray-55 dark:bg-slate-800/60 border border-gray-150 dark:border-slate-800 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="text-left">
                    <span className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">Do you have a doctor prescription?</span>
                    <span className="block font-sans text-[10px] text-gray-400 mt-0.5">Required for all Schedule H prescription-only medications.</span>
                  </div>
                  
                  {/* Yes / No Selector */}
                  <div className="flex gap-1.5 bg-gray-100 dark:bg-slate-900 p-1 rounded-xl">
                    <button
                      id="presc-yes-toggle"
                      type="button"
                      onClick={() => setHasPrescription('Yes')}
                      className={`px-3 py-1 font-sans font-semibold text-[10px] rounded-lg transition-all ${
                        hasPrescription === 'Yes' 
                          ? 'bg-brand-blue-500 text-white' 
                          : 'text-gray-500 hover:text-gray-950 dark:text-gray-400'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      id="presc-no-toggle"
                      type="button"
                      onClick={() => {
                        setHasPrescription('No');
                        setPrescriptionName('');
                      }}
                      className={`px-3 py-1 font-sans font-semibold text-[10px] rounded-lg transition-all ${
                        hasPrescription === 'No' 
                          ? 'bg-brand-blue-500 text-white' 
                          : 'text-gray-500 hover:text-gray-950 dark:text-gray-400'
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                {/* Upload attachment area (mock) */}
                {hasPrescription === 'Yes' && (
                  <div className="mt-3.5 pt-3.5 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between gap-4">
                    <label 
                      htmlFor="prescription-upload-file"
                      className="cursor-pointer inline-flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-900 hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl text-xs font-semibold text-gray-700 dark:text-gray-300 transition-all shadow-xs"
                    >
                      <FileImage className="w-4 h-4 text-brand-blue-500" />
                      <span>Select Prescription Image</span>
                      <input
                        id="prescription-upload-file"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                    </label>

                    {prescriptionName ? (
                      <span className="font-sans text-xs text-brand-green-600 dark:text-brand-green-400 font-semibold truncate max-w-[180px]">
                        ✓ {prescriptionName}
                      </span>
                    ) : (
                      <span className="font-sans text-[10px] text-gray-400">No image attached yet</span>
                    )}
                  </div>
                )}
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="order-message" className="block font-sans font-bold text-xs uppercase tracking-wider text-gray-500 dark:text-slate-400">
                  Additional Note / Message
                </label>
                <textarea
                  id="order-message"
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="e.g. Please bring changes for ₹500, or call before arriving."
                  className="w-full px-4 py-2.5 font-sans text-xs sm:text-sm bg-gray-50 dark:bg-slate-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand-blue-500"
                />
              </div>

              {/* Submission Button */}
              <button
                id="order-submit-whatsapp-btn"
                type="submit"
                disabled={isSuccess}
                className="w-full flex items-center justify-center gap-2 bg-brand-green-500 hover:bg-brand-green-600 text-white font-sans font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-xl shadow-brand-green-500/20 transition-all active:scale-98 cursor-pointer disabled:bg-brand-green-600"
              >
                {isSuccess ? (
                  <>
                    <Check className="w-5 h-5 animate-ping" />
                    <span>Formatting Order and Launching WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Order via WhatsApp</span>
                  </>
                )}
              </button>

              {/* Call support shortcut */}
              <div className="text-center pt-2">
                <span className="font-sans text-[11px] text-gray-400">Or talk to our pharmacist directly: </span>
                <a 
                  id="order-support-phone-link"
                  href={`tel:${BUSINESS_INFO.phone}`} 
                  className="font-sans text-[11px] text-brand-blue-500 font-bold hover:underline"
                >
                  Call {BUSINESS_INFO.phone}
                </a>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
