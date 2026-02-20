import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { testimonials } from '../utils/mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="text-white text-xl font-semibold ml-2">5.0 out of 5</span>
          </div>
          <p className="text-slate-300 text-lg">
            Based on 63+ verified Google reviews
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-none shadow-2xl">
            <CardContent className="p-8 md:p-12 relative">
              <Quote className="w-16 h-16 text-cyan-100 absolute top-8 left-8 -z-0" />
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-xl md:text-2xl text-slate-700 leading-relaxed mb-8">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900 text-lg">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-slate-500 text-sm">
                      {testimonials[currentIndex].date}
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      onClick={prevTestimonial}
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-cyan-50 hover:border-cyan-600 transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      onClick={nextTestimonial}
                      variant="outline"
                      size="icon"
                      className="rounded-full hover:bg-cyan-50 hover:border-cyan-600 transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex ? 'bg-cyan-600 w-8' : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=donaghadee+tyres"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold text-lg"
          >
            View All Reviews on Google
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
