/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BUSINESS_INFO, FAQS } from '../data';

interface SEOAndSchemaProps {
  pageTitle?: string;
  activeTab?: string;
}

export default function SEOAndSchema({ pageTitle, activeTab }: SEOAndSchemaProps) {
  useEffect(() => {
    // 1. Update Title
    const titleText = pageTitle 
      ? `${pageTitle} | ${BUSINESS_INFO.name}` 
      : `${BUSINESS_INFO.name} - ${BUSINESS_INFO.tagline}`;
    document.title = titleText;

    // 2. Update/Create Meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Standard Meta Tags
    updateMeta('description', `Pandey Medical Hall in Pai Bigha, Bihar: Sells 100% genuine medicines, healthcare devices, surgical supplies, and baby products. Order on WhatsApp: ${BUSINESS_INFO.phone}.`);
    updateMeta('keywords', 'Pandey Medical Hall, Pai Bigha Pharmacy, Medical Store Pai Bigha, Chemist in Pai Bigha, Genuine Medicines Bihar, Surgical supplies Jehanabad, Buy medicines online Bihar, Pharmacy in Pai Bigha Bihar');
    updateMeta('author', BUSINESS_INFO.name);

    // Open Graph / Facebook
    updateMeta('og:title', titleText, true);
    updateMeta('og:description', `Your trusted local medical store in Pai Bigha, Bihar 804424. Offering digital prescription orders via WhatsApp.`, true);
    updateMeta('og:type', 'website', true);
    updateMeta('og:url', window.location.href, true);
    updateMeta('og:image', 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=800&auto=format&fit=crop', true);
    updateMeta('og:site_name', BUSINESS_INFO.name, true);

    // Twitter Cards
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', titleText);
    updateMeta('twitter:description', `Trusted pharmacy in Pai Bigha for genuine medicines and diagnostic devices.`);
    updateMeta('twitter:image', 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=800&auto=format&fit=crop');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + window.location.pathname);

    // 3. Inject Schemas
    const removeExistingSchemas = () => {
      const existing = document.querySelectorAll('script[type="application/ld+json"].pmh-schema');
      existing.forEach(el => el.remove());
    };

    removeExistingSchemas();

    // LocalBusiness & Pharmacy Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": BUSINESS_INFO.name,
      "image": "https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=800&auto=format&fit=crop",
      "@id": `${window.location.origin}/#pharmacy`,
      "url": window.location.origin,
      "telephone": BUSINESS_INFO.phone,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3W29+MQ7, Pai Bigha",
        "addressLocality": "Pai Bigha",
        "addressRegion": "Bihar",
        "postalCode": "804424",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.0441, // Approx coords for Pai Bigha area
        "longitude": 84.9912
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "21:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "sameAs": []
    };

    // FAQ Schema
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": FAQS.slice(0, 5).map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    // Breadcrumb Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        ...(activeTab && activeTab !== 'home' ? [{
          "@type": "ListItem",
          "position": 2,
          "name": activeTab.charAt(0).toUpperCase() + activeTab.slice(1),
          "item": `${window.location.origin}/#${activeTab}`
        }] : [])
      ]
    };

    // Append schemas to head
    const injectJSONLD = (schemaObj: object) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.className = 'pmh-schema';
      script.text = JSON.stringify(schemaObj);
      document.head.appendChild(script);
    };

    injectJSONLD(localBusinessSchema);
    injectJSONLD(faqSchema);
    injectJSONLD(breadcrumbSchema);

    return () => {
      removeExistingSchemas();
    };
  }, [pageTitle, activeTab]);

  return null; // Side-effect component
}
