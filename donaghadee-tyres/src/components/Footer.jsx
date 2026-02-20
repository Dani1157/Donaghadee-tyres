import React from 'react';
import { Phone, Mail, MapPin, Facebook, Heart, Instagram } from 'lucide-react';
import { businessInfo } from '../utils/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              DONAGHADEE<span className="text-cyan-400"> TYRES</span>
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Your trusted local tyre fitting service in Donaghadee. Fast, friendly, and reliable service since day one.
            </p>
            <div className="flex items-center gap-2 text-cyan-400">
              <Heart className="w-5 h-5 fill-cyan-400" />
              <span className="font-semibold">LGBTQ+ Friendly</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('home')} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Reviews
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('booking')} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Book Now
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-slate-300 hover:text-cyan-400 transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-3 text-slate-300">
              <li>Emergency Callout Service</li>
              <li>Tyres - All Types</li>
              <li>Wheel Alignment</li>
              <li>New Wheels & Alloys</li>
              <li>Servicing & MOT Prep</li>
              <li>Trailer & Agricultural Tyres</li>
              <li>TPMS Servicing</li>
              <li>Walk-In Service</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href={`tel:${businessInfo.phone}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 group-hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">{businessInfo.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${businessInfo.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 group-hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>{businessInfo.email}</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-slate-300">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="leading-relaxed">{businessInfo.address}</span>
                </div>
              </li>
              <li>
                <a
                  href={businessInfo.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 group-hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a
                  href={businessInfo.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors group"
                >
                  <div className="w-10 h-10 bg-slate-800 group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-orange-500 rounded-lg flex items-center justify-center transition-all">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              © {currentYear} Donaghadee Tyres. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm">
              Serving Donaghadee, Bangor & Newtownards
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
