import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Clock, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { businessInfo } from '../utils/mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">Mon-Fri: 8AM-5:30PM</span>
              <span className="sm:hidden">Mon-Fri: 8-5:30</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className="hidden md:inline">{businessInfo.address}</span>
              <span className="md:hidden">Donaghadee</span>
            </div>
          </div>
          <a 
            href={`tel:${businessInfo.phone}`}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
          >
            <Phone className="w-4 h-4" />
            {businessInfo.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-slate-900">
                DONAGHADEE<span className="text-cyan-600"> TYRES</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium">
                Reviews
              </button>
              <button onClick={() => scrollToSection('booking')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium">
                Book Now
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-cyan-600 transition-colors font-medium">
                Contact
              </button>
            </nav>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Button 
                asChild
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-all"
              >
                <a href={`tel:${businessInfo.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-slate-700 hover:text-cyan-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t pt-4 space-y-3">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2">
                Services
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2">
                Reviews
              </button>
              <button onClick={() => scrollToSection('booking')} className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2">
                Book Now
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-slate-700 hover:text-cyan-600 transition-colors font-medium py-2">
                Contact
              </button>
              <Button 
                asChild
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white mt-4"
              >
                <a href={`tel:${businessInfo.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
