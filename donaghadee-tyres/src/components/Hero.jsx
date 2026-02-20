import React from 'react';
import { Phone, MapPin, Star, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { businessInfo } from '../utils/mockData';

const Hero = () => {
  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Rating Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md border border-slate-200">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-slate-700">
                {businessInfo.rating} • {businessInfo.reviewCount} Google Reviews
              </span>
            </div>

            {/* Main Heading */}
            <div>
              <div className="inline-block mb-4">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg shadow-lg font-bold text-sm uppercase tracking-wide animate-pulse">
                  🚨 Emergency Callout Service Available 24/7
                </div>
              </div>
              <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight mb-2">
                DONAGHADEE
              </h1>
              <h2 className="text-2xl lg:text-4xl font-bold text-cyan-600 mb-4">
                YOUR LOCAL TYRE AND WHEEL EXPERTS
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Walk-ins welcome • Competitive prices • Get back on the road today
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-slate-700">24/7 Emergency callout service - We come to you</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-slate-700">All tyres: Car, Van, 4x4, Trailer & Agricultural</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-slate-700">Wheel alignment, alloys & TPMS servicing</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                <span className="text-slate-700">Full servicing & MOT preparation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all rounded-md"
              >
                <a href={`tel:${businessInfo.phone}`}>
                  <Phone className="w-5 h-5 mr-2" />
                  Call {businessInfo.phoneDisplay}
                </a>
              </Button>
              <Button 
                onClick={scrollToBooking}
                size="lg"
                variant="outline"
                className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg font-semibold transition-all rounded-md"
              >
                Book Online
              </Button>
            </div>

            {/* Location Info */}
            <div className="flex items-start gap-3 bg-slate-100 p-4 rounded-lg">
              <MapPin className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-slate-900">{businessInfo.address}</p>
                <p className="text-sm text-slate-600 mt-1">Serving Donaghadee, Bangor & Newtownards</p>
              </div>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="w-full h-[500px] bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl flex items-center justify-center shadow-2xl border-8 border-white">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full border-[24px] border-slate-800 bg-slate-700 shadow-inner relative">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-full h-1 bg-slate-900"
                          style={{
                            top: '50%',
                            transform: `rotate(${i * 45}deg)`,
                            transformOrigin: 'center'
                          }}
                        />
                      ))}
                    </div>
                    <div className="absolute inset-8 rounded-full bg-slate-300 shadow-lg flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-cyan-600 shadow-inner flex items-center justify-center">
                        <CheckCircle className="w-16 h-16 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white px-6 py-4 rounded-xl shadow-lg border-2 border-cyan-600">
                <p className="text-3xl font-bold text-cyan-600">5.0★</p>
                <p className="text-sm text-slate-600">Rated</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-cyan-600 text-white px-6 py-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">Walk-ins</p>
                <p className="text-sm">Welcome!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
