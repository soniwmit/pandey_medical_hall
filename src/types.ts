/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  description: string;
  inStock: boolean;
  image: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  verified: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'store' | 'medicines' | 'equipment' | 'surgical';
  imageUrl: string;
  description: string;
}

export interface OrderItem {
  product: Product;
  quantity: number;
}
