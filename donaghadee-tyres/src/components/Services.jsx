import React from 'react';
import { AlertCircle, Disc, Gauge, Settings, Wrench, Truck, Radio, Footprints } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { services } from '../utils/mockData';

const iconMap = {
  AlertCircle, Disc, Gauge, Settings, Wrench, Truck, Radio, Footprints
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional tyre services for all vehicles. Quality work at competitive prices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            const isFeatured = service.featured;
            return (
              <Card 
                key={service.id}
                className={`group hover:shadow-xl transition-all duration-300 border-2 overflow-hidden ${
                  isFeatured 
                    ? 'border-red-400 bg-gradient-to-br from-red-50 to-white' 
                    : 'border-slate-100 hover:border-cyan-400'
                }`}
              >
                <CardContent className="p-6">
                  {isFeatured && (
                    <div className="mb-3">
                      <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                        24/7 Emergency
                      </span>
                    </div>
                  )}
                  <div className="mb-4 relative">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isFeatured 
                        ? 'bg-red-600 group-hover:bg-red-700' 
                        : 'bg-cyan-100 group-hover:bg-cyan-600'
                    }`}>
                      <IconComponent className={`w-7 h-7 transition-all duration-300 ${
                        isFeatured 
                          ? 'text-white' 
                          : 'text-cyan-600 group-hover:text-white'
                      }`} />
                    </div>
                  </div>
                  <h3 className={`text-lg font-bold mb-2 transition-colors ${
                    isFeatured 
                      ? 'text-red-900' 
                      : 'text-slate-900 group-hover:text-cyan-600'
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-50 to-cyan-50 rounded-2xl p-8 md:p-12 border border-slate-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-cyan-600 mb-2">63+</p>
              <p className="text-slate-700 font-medium">Happy Customers</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-cyan-600 mb-2">5.0★</p>
              <p className="text-slate-700 font-medium">Google Rating</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-cyan-600 mb-2">&lt;1hr</p>
              <p className="text-slate-700 font-medium">Average Service Time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;