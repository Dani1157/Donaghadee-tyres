import React from 'react';
import { Star, Heart, Zap, DollarSign } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { whyChooseUs } from '../utils/mockData';

const iconMap = {
  Star, Heart, Zap, DollarSign
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Trusted by locals for fast, friendly, and reliable service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((feature, index) => {
            const IconComponent = iconMap[feature.icon];
            return (
              <Card 
                key={feature.id}
                className="text-center border-2 border-slate-100 hover:border-cyan-400 hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-full shadow-lg border-2 border-slate-200">
            <Heart className="w-6 h-6 text-red-500 fill-red-500" />
            <span className="text-lg font-semibold text-slate-900">
              LGBTQ+ Friendly • Everyone Welcome
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
