/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Product, Service, Testimonial, FAQ, TimelineEvent, GalleryItem } from './types';

export const BUSINESS_INFO = {
  name: "Pandey Medical Hall",
  category: "Pharmacy & Medical Store",
  tagline: "Your Trusted Medical Store for Genuine Medicines & Healthcare Needs",
  address: "3W29+MQ7, Pai Bigha, Bihar 804424",
  mapCoordinate: "Pai Bigha, Bihar 804424",
  phone: "09955506238",
  whatsapp: "9955506238",
  email: "pandeymedicalhall@gmail.com",
  workingHours: {
    weekdays: "08:00 AM - 09:00 PM",
    sunday: "08:00 AM - 08:00 PM",
    emergency: "24/7 Available on Phone"
  }
};

export const SERVICES: Service[] = [
  {
    id: 'prescription',
    title: 'Prescription Medicines',
    description: '100% genuine and authenticated prescription drugs sourced directly from authorized pharmaceutical distributors.',
    icon: 'Pill',
    details: [
      'Chronic disease management medicines (Diabetic, Cardiac, Hypertension)',
      'Antibiotics and specialized drugs',
      'Strict temperature-controlled storage (Refrigerated vaccines and insulin)',
      'Easy order placement by sharing prescription on WhatsApp'
    ]
  },
  {
    id: 'otc',
    title: 'Over-The-Counter (OTC) Medicines',
    description: 'Safe, everyday self-care medicines for common ailments like colds, pain, acidity, and allergies.',
    icon: 'HeartPulse',
    details: [
      'Cough syrups, cold relief, and anti-allergics',
      'Pain relievers and anti-inflammatory ointments',
      'Acidity, indigestion, and ORS packs',
      'Expert advice from our pharmacist'
    ]
  },
  {
    id: 'supplements',
    title: 'Health Supplements & Nutrition',
    description: 'Boost your daily energy, immunity, and overall well-being with quality wellness products.',
    icon: 'ShieldCheck',
    details: [
      'Multivitamin & Mineral capsules/tablets',
      'Protein powders and nutritional shakes (Ensure, Horlicks)',
      'Calcium and Bone Health supplements',
      'Herbal & Ayurvedic health tonics'
    ]
  },
  {
    id: 'babycare',
    title: 'Baby & Maternal Care',
    description: 'Gentle, safe, and premium care items for newborns, infants, and mothers.',
    icon: 'Baby',
    details: [
      'Baby diapers (Pampers, MamyPoko) and wet wipes',
      'Baby milk powder (Lactogen, Cerelac) and food',
      'Hypoallergenic baby lotions, shampoos, and powders',
      'Maternal nutrition and breastfeeding supplies'
    ]
  },
  {
    id: 'personalcare',
    title: 'Personal Care & Hygiene',
    description: 'Daily grooming, skincare, oral care, and sanitization items for your entire family.',
    icon: 'Sparkles',
    details: [
      'Premium skincare creams, body lotions, and hair-care products',
      'Antiseptic liquids (Dettol, Savlon), soaps, and handwashes',
      'Sanitary pads and personal hygiene items',
      'Oral care products (toothpaste, mouthwash, toothbrushes)'
    ]
  },
  {
    id: 'equipment',
    title: 'Medical Devices & Equipment',
    description: 'Accurate home monitoring devices and healthcare tools to track your fitness.',
    icon: 'Activity',
    details: [
      'Digital Blood Pressure Monitors (Omron, Dr. Trust)',
      'Blood Glucose/Sugar testing kits and strips',
      'Pulse Oximeters & Digital Thermometers',
      'Steam Inhalers & Nebulizers'
    ]
  },
  {
    id: 'surgical',
    title: 'Surgical Supplies',
    description: 'Premium surgical instruments, hospital disposables, and clinic essentials.',
    icon: 'Scissors',
    details: [
      'Disposable syringes, needles, and IV sets',
      'Surgical masks, gloves, and protective gowns',
      'Sterilized cotton, bandages, and surgical tapes',
      'Urine bags, catheters, and infusion items'
    ]
  },
  {
    id: 'firstaid',
    title: 'First Aid Products',
    description: 'Essential emergency treatment supplies for homes, schools, offices, and vehicles.',
    icon: 'Bandage',
    details: [
      'Adhesive bandages (Band-Aid) and antiseptic ointments',
      'Burn care dressings and sprays',
      'Elastic crepe bandages for sprains',
      'Pre-packed comprehensive first-aid kits'
    ]
  },
  {
    id: 'diabetic',
    title: 'Diabetic Specialty Care',
    description: 'Comprehensive solutions and products specialized for patients managing diabetes.',
    icon: 'Thermometer',
    details: [
      'Sugar-free food items and sweeteners',
      'Diabetic foot care creams and specialized socks',
      'Insulin syringes and painless lancet needles',
      'Continuous Glucose Monitoring systems (CGMs)'
    ]
  }
];

export const PRODUCTS: Product[] = [
  // Tablets & Capsules
  {
    id: 'dolo650',
    name: 'Dolo 650mg Tablet',
    category: 'Tablets',
    price: 32,
    unit: 'Strip of 15',
    description: 'Commonly used to treat fever, mild to moderate pain (such as headache, toothache, joint pain, or period pain). Sourced from Micro Labs.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'pantocid40',
    name: 'Pantocid 40mg Tablet',
    category: 'Tablets',
    price: 152,
    unit: 'Strip of 15',
    description: 'Reduces the amount of acid produced in your stomach. Used for treating acid-related diseases like heartburn, acid reflux, and peptic ulcer disease.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'okacet10',
    name: 'Okacet Cetirizine 10mg',
    category: 'Tablets',
    price: 18,
    unit: 'Strip of 10',
    description: 'An antihistamine used to relieve allergy symptoms such as watery eyes, runny nose, itching eyes/nose, sneezing, and hives.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'becosules',
    name: 'Becosules Capsules',
    category: 'Capsules',
    price: 55,
    unit: 'Strip of 20',
    description: 'Vitamin B-Complex with Vitamin C capsules. Improves metabolism, boosts immunity, reduces mouth ulcers, and maintains healthy skin and hair.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'evion400',
    name: 'Evion 400mg Capsule',
    category: 'Capsules',
    price: 38,
    unit: 'Strip of 10',
    description: 'Contains Vitamin E (Tocopheryl Acetate) which acts as an antioxidant, nourishes skin, promotes hair growth, and strengthens muscles.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1616671285410-4e1262d4eb72?q=80&w=400&auto=format&fit=crop'
  },
  // Syrups
  {
    id: 'benadryl',
    name: 'Benadryl Cough Syrup',
    category: 'Syrups',
    price: 125,
    unit: 'Bottle of 100ml',
    description: 'Provides quick, effective relief from dry cough, throat irritation, and runny nose. Formulated with key active ingredients.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'grilinctus',
    name: 'Grilinctus Cough Linctus',
    category: 'Syrups',
    price: 138,
    unit: 'Bottle of 100ml',
    description: 'For productive cough. Helps loosen mucus in the airways so you can cough it out easier and breathe with comfort.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&auto=format&fit=crop'
  },
  // Medical Equipment
  {
    id: 'omronbp',
    name: 'Omron HEM 7120 BP Monitor',
    category: 'Medical Equipment',
    price: 1980,
    unit: '1 Unit',
    description: 'Fully automatic, compact blood pressure monitor operating on the oscillometric principle for precise measurements.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'glucometer',
    name: 'Dr. Morepen BG-03 Glucometer',
    category: 'Medical Equipment',
    price: 650,
    unit: 'Kit with 10 Strips',
    description: 'Quickly and easily monitors blood sugar levels at home. Requires only a tiny droplet of blood and displays results in 5 seconds.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'thermometer',
    name: 'Microtek Digital Thermometer',
    category: 'Medical Equipment',
    price: 150,
    unit: '1 Unit',
    description: 'Highly accurate electronic clinical thermometer with easy-to-read LCD display, memory function, and beep alarm.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=400&auto=format&fit=crop'
  },
  // Baby & Personal Products
  {
    id: 'pampers',
    name: 'Pampers Baby-Dry Pants (M)',
    category: 'Baby Products',
    price: 499,
    unit: 'Pack of 32',
    description: 'Medium size tape-style diapers designed to keep baby skin dry and healthy for up to 12 hours with air channels.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'cerelac',
    name: 'Nestle Cerelac Wheat Apple (Stage 1)',
    category: 'Baby Products',
    price: 245,
    unit: 'Box of 300g',
    description: 'A complementary food for infants from 6 to 12 months. Enriched with Iron, Vitamins, and Zinc for growth and development.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'dettol1l',
    name: 'Dettol Antiseptic Liquid',
    category: 'Personal Hygiene',
    price: 382,
    unit: 'Bottle of 1L',
    description: 'Protects against infection from cuts, scratches, and insect bites. Can also be used for household disinfection and laundry.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'volini',
    name: 'Volini Pain Relief Spray',
    category: 'Skin Care',
    price: 160,
    unit: 'Can of 55g',
    description: 'Provides quick and long-lasting relief from low back pain, joint pain, neck pain, sprains, and sports injuries.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'ensure',
    name: 'Ensure Diabetes Care Powder',
    category: 'Diabetic Care',
    price: 780,
    unit: 'Jar of 400g - Vanilla',
    description: 'Scientifically formulated nutrition with slow-release carbs to help manage blood sugar, weight, and heart health.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=400&auto=format&fit=crop'
  },
  {
    id: 'kneesupport',
    name: 'Flamingo Elastic Knee Support (L)',
    category: 'Orthopedic Support',
    price: 340,
    unit: '1 Pair',
    description: 'Provides mild compression, warmth, and firm support to the knee joint, helping with arthritic pain or sports strain.',
    inStock: true,
    image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=400&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'rev1',
    name: 'Dr. Akhilesh Kumar Singh',
    location: 'Pai Bigha, Bihar',
    rating: 5,
    review: 'Pandey Medical Hall is the most reliable pharmacy in Pai Bigha. They always have the required prescription medicines, and their storage condition for insulin is excellent. Highly recommended for genuine drugs.',
    date: '2026-05-12',
    verified: true
  },
  {
    id: 'rev2',
    name: 'Rajiv Ranjan Pandey',
    location: 'Kako, Jehanabad',
    rating: 5,
    review: 'I have been ordering medicines for my parents via their WhatsApp support. I just send the prescription image, and they keep everything ready for quick pickup. Truly amazing service and reasonable rates!',
    date: '2026-06-20',
    verified: true
  },
  {
    id: 'rev3',
    name: 'Sushma Devi',
    location: 'Pai Bigha, Gaya',
    rating: 5,
    review: 'The owner and staff are extremely polite and supportive. They explained the dosage of the blood pressure tablets very clearly. We are very lucky to have such a trustworthy medical shop nearby.',
    date: '2026-06-28',
    verified: true
  },
  {
    id: 'rev4',
    name: 'Amit Kumar',
    location: 'Tehta, Bihar',
    rating: 4,
    review: 'Excellent stock of baby care products and surgical supplies. I bought a BP monitor from here, and they gave me a very good price. The staff is knowledgeable and helpful.',
    date: '2026-04-15',
    verified: true
  },
  {
    id: 'rev5',
    name: 'Pushpa Kumari',
    location: 'Pai Bigha Chowk',
    rating: 5,
    review: 'Genuine products, 100% genuine bills, and quick service. They don’t overcharge like other big city stores. They always support our local community during medical emergencies.',
    date: '2026-07-02',
    verified: true
  },
  {
    id: 'rev6',
    name: 'Manoj Kumar Yadav',
    location: 'Jehanabad',
    rating: 5,
    review: 'This medical store is standard-certified. Their response rate on WhatsApp order requests is exceptionally fast. They helped me procure some rare life-saving medicine on very short notice.',
    date: '2026-07-05',
    verified: true
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'faq1',
    question: 'What are the working hours of Pandey Medical Hall?',
    answer: 'We are open from 08:00 AM to 09:00 PM from Monday to Saturday, and on Sundays we are open from 08:00 AM to 08:00 PM. For absolute emergency medical needs, you can call us directly on 09955506238.',
    category: 'Store'
  },
  {
    id: 'faq2',
    question: 'How can I order medicines through WhatsApp?',
    answer: 'Ordering is very simple! Go to our "WhatsApp Order" section on this website, fill out your details, type or select your medicines, toggle whether you have a prescription, and click "Send via WhatsApp". It will format a beautiful text message and open WhatsApp on your phone or PC instantly.',
    category: 'Ordering'
  },
  {
    id: 'faq3',
    question: 'Are all your medicines genuine and authorized?',
    answer: 'Absolutely! 100% of our products and prescription drugs are sourced directly from authorized medical distributors of reputable pharmaceutical companies. We provide official bills and enforce strict safety standard compliance.',
    category: 'Medicines'
  },
  {
    id: 'faq4',
    question: 'Do you require a doctor prescription for all medicines?',
    answer: 'Prescription-only drugs (Schedule H and H1 medicines like antibiotics, psychiatric medications, or heavy compounds) strictly require a valid prescription from a registered medical practitioner. General OTC health products, vitamins, first-aid, baby, and personal care supplies can be purchased directly without a prescription.',
    category: 'Medicines'
  },
  {
    id: 'faq5',
    question: 'What modes of payment do you accept at the store?',
    answer: 'We accept all types of payment including UPI (PhonePe, Google Pay, Paytm, BHIM), all major Credit/Debit Cards, Net Banking, and cash.',
    category: 'Store'
  },
  {
    id: 'faq6',
    question: 'Do you store insulin and temperature-sensitive drugs under refrigeration?',
    answer: 'Yes. We have dedicated medical refrigeration systems operating continuously to ensure that temperature-sensitive injections, vaccines, insulins, and eye drops are stored at their precise required temperature to preserve their efficacy.',
    category: 'Medicines'
  },
  {
    id: 'faq7',
    question: 'Can you procure specialized or rare medicines on request?',
    answer: 'Yes! If any specialized medicine, cancer drug, or rare vaccine is not immediately in our stock, you can share the prescription with us. We will procure it from our trusted distributor network within 24 to 48 hours.',
    category: 'Ordering'
  },
  {
    id: 'faq8',
    question: 'Do you offer home delivery of medicines in Pai Bigha?',
    answer: 'Yes, we provide localized home delivery of medicines within Pai Bigha and nearby surrounding blocks for senior citizens or critical patients. Please contact us on WhatsApp with your location to confirm delivery availability.',
    category: 'Store'
  },
  {
    id: 'faq9',
    question: 'Do you have medical devices like BP monitors and Glucometers in stock?',
    answer: 'Yes, we stock digital blood pressure monitors, blood glucose testing kits, pulse oximeters, digital thermometers, nebulizers, steam inhalers, and replacement test strips from top brands.',
    category: 'Products'
  },
  {
    id: 'faq10',
    question: 'Where is Pandey Medical Hall located exactly?',
    answer: 'We are situated in Pai Bigha, Bihar 804424 (Google Plus Code: 3W29+MQ7). You can easily find us on Google Maps by clicking the "Get Directions" button on our homepage.',
    category: 'Store'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '2008',
    title: 'The Foundation',
    description: 'Pandey Medical Hall was established in Pai Bigha with a dream of providing genuine, high-quality, and affordable medicines to local villagers, saving them long journeys to distant towns.'
  },
  {
    year: '2013',
    title: 'Surgical & Device Addition',
    description: 'Expanded inventory to include advanced surgical supplies, critical care products, orthopedic supports, and home diagnostic monitors (BP & Glucose).'
  },
  {
    year: '2018',
    title: 'Digital Cold Chain Storage',
    description: 'Upgraded storage infrastructure with professional refrigeration to house highly temperature-sensitive medicines, insulin, vaccines, and specialized eye-drops safely.'
  },
  {
    year: '2023',
    title: 'Modernized Operations & WhatsApp Orders',
    description: 'Introduced fast computerized billing and launched our dedicated WhatsApp support system to allow remote prescription sharing and seamless ordering.'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal1',
    title: 'Store Front View',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=800&auto=format&fit=crop',
    description: 'A clean, well-lit, professional layout welcoming customers in Pai Bigha.'
  },
  {
    id: 'gal2',
    title: 'Fully Stocked Medicine Shelves',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=800&auto=format&fit=crop',
    description: 'Categorized pharmaceutical inventory stored safely under optimal conditions.'
  },
  {
    id: 'gal3',
    title: 'Medical & Diagnostic Equipment',
    category: 'equipment',
    imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=800&auto=format&fit=crop',
    description: 'BP monitors, Glucometers, and digital thermometers for reliable home checking.'
  },
  {
    id: 'gal4',
    title: 'Surgical Essentials & Disposables',
    category: 'surgical',
    imageUrl: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=800&auto=format&fit=crop',
    description: 'Sterile surgical dressings, gloves, masks, syringes, and clinical requirements.'
  },
  {
    id: 'gal5',
    title: 'Customer Consultations & Service',
    category: 'store',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop',
    description: 'Our experienced staff explaining drug dosages clearly to our local patrons.'
  },
  {
    id: 'gal6',
    title: 'Baby Foods & Maternity Section',
    category: 'medicines',
    imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77ebe?q=80&w=800&auto=format&fit=crop',
    description: 'Dedicated range of baby milk powders, cereals, skin-care items, and diapers.'
  }
];

export const VALUES = [
  {
    title: 'Uncompromised Genuineness',
    description: 'We guarantee 100% original and verified medicines with official bills and safe batch sourcing.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Compassionate Care',
    description: 'We prioritize customer health and patient urgency above commercial goals, offering polite guidance.',
    icon: 'Heart'
  },
  {
    title: 'Rural Accessibility',
    description: 'We stand as a solid healthcare anchor for Pai Bigha and nearby villages, ensuring local availability.',
    icon: 'MapPin'
  },
  {
    title: 'Continuous Support',
    description: 'Quick digital channels like WhatsApp let families consult, order, and resolve doubts safely and easily.',
    icon: 'PhoneCall'
  }
];
