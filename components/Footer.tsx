import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-thyme-charcoal text-thyme-beige pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white">About Thyme</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              Nairobi’s hidden gem. An escape from the city hustle, offering global flavours in a serene, leafy garden setting.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-thyme-gold hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-thyme-gold hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-thyme-gold hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-thyme-gold mr-3 shrink-0" />
                <span>Eldama Ravine Road, Westlands, Nairobi</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-thyme-gold mr-3 shrink-0" />
                <span>0721 850026</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-thyme-gold mr-3 shrink-0" />
                <span>hello@about-thyme.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-thyme-gold mr-3 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Monday - Sunday</span>
                  <span>8:00 AM – 11:00 PM</span>
                </div>
              </li>
              <li className="pt-2">
                <span className="text-thyme-green text-xs bg-thyme-beige px-2 py-1 rounded">Reservations Recommended</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-white">Newsletter</h4>
            <p className="text-gray-400 text-sm">Subscribe for updates and seasonal specials.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-800 border border-gray-700 text-white px-4 py-2 rounded focus:outline-none focus:border-thyme-gold text-sm"
              />
              <button className="bg-thyme-gold text-thyme-charcoal font-bold uppercase text-xs tracking-widest py-2 px-4 rounded hover:bg-white transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} About Thyme. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};