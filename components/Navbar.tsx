import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { Page } from '../types';
import { cn } from '../lib/utils';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Menu', value: 'menu' },
    { label: 'Gallery', value: 'gallery' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 font-sans',
        scrolled || isOpen ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <Leaf className="h-8 w-8 text-thyme-green mr-2" />
            <span className={cn(
              "font-serif text-2xl font-bold tracking-tight",
              scrolled || isOpen ? "text-thyme-green" : "text-thyme-green sm:text-thyme-charcoal"
            )}>
              About Thyme
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.value}
                onClick={() => handleNavClick(link.value)}
                className={cn(
                  "font-medium transition-colors duration-200 hover:text-thyme-gold uppercase text-sm tracking-widest",
                  currentPage === link.value 
                    ? "text-thyme-gold border-b-2 border-thyme-gold" 
                    : (scrolled ? "text-thyme-charcoal" : "text-thyme-charcoal")
                )}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-thyme-charcoal hover:text-thyme-green focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white border-b border-thyme-beige shadow-lg transition-all duration-300 ease-in-out overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.value}
              onClick={() => handleNavClick(link.value)}
              className={cn(
                "block w-full text-left px-3 py-4 text-base font-medium border-l-4 transition-colors",
                currentPage === link.value
                  ? "bg-thyme-beige text-thyme-green border-thyme-green"
                  : "text-gray-600 border-transparent hover:bg-gray-50 hover:text-thyme-green"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};