import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Instagram, Facebook } from 'lucide-react';
import { Button } from './ui/button';
import { businessInfo } from '../utils/mockData';

const SocialButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleWhatsAppClick = () => {
  const message = encodeURIComponent("Hi! I'd like to enquire about your tyre services.");
  const phoneNumber = businessInfo.social.whatsapp; // 447894301849
  
  // Try MULTIPLE WhatsApp URL formats
  const urls = [
    `https://wa.me/${phoneNumber}?text=${message}`,           // Standard format
    `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, // API format
    `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`, // Web format
    `whatsapp://send?phone=${phoneNumber}&text=${message}`    // App protocol
  ];
  
  // Try to open with first URL
  const win = window.open(urls[0], '_blank');
  
  // If it doesn't work after 1 second, try the next one
  setTimeout(() => {
    if (!win || win.closed || typeof win.closed === 'undefined') {
      // Try the second URL
      window.open(urls[1], '_blank');
      
      // If still no luck, show phone number
      setTimeout(() => {
        alert(
          `WhatsApp not opening?\n\n` +
          `Call us: ${businessInfo.phoneDisplay}\n` +
          `Or open web.whatsapp.com manually`
        );
      }, 1000);
    }
  }, 500);
};

  const handleInstagramClick = () => {
    window.open(businessInfo.social.instagram, '_blank');
  };

  const handleFacebookClick = () => {
    window.open(businessInfo.social.facebook, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 bg-white rounded-lg shadow-2xl p-4 mb-4 max-w-xs border-2 border-cyan-100 animate-bounce">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
          <p className="text-sm text-slate-700 font-medium pr-6">
            💬 Connect with us on social media or WhatsApp!
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <div className="relative group">
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 p-0"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </Button>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp
        </div>
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </div>

      {/* Instagram Button */}
      <div className="relative group">
        <Button
          onClick={handleInstagramClick}
          size="lg"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-110 p-0"
          aria-label="Follow us on Instagram"
        >
          <Instagram className="w-7 h-7 text-white" />
        </Button>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Instagram
        </div>
      </div>

      {/* Facebook Button */}
      <div className="relative group">
        <Button
          onClick={handleFacebookClick}
          size="lg"
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-110 p-0"
          aria-label="Follow us on Facebook"
        >
          <Facebook className="w-7 h-7 text-white" />
        </Button>
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-3 py-1.5 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Facebook
        </div>
      </div>
    </div>
  );
};

export default SocialButtons;

