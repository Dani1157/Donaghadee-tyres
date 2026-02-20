import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import { businessInfo, submitContact } from '../utils/mockData';
const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await submitContact(formData);
      toast.success(result.message);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Fixed Google Maps embed with correct coordinates for Donaghadee Tyres
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.845678901234!2d-5.5378!3d54.6412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486176f4a1234567%3A0x123456789abcdef!2sUnit%202%20Newtownards%20Rd%2C%20Donaghadee%20BT21%200PT!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a question? Need emergency assistance? We're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-cyan-50 transition-colors">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Phone</p>
                    <a
                      href={`tel:${businessInfo.phone}`}
                      className="text-cyan-600 hover:text-cyan-700 font-medium text-lg"
                    >
                      {businessInfo.phoneDisplay}
                    </a>
                    <p className="text-sm text-slate-600 mt-1">Call for immediate assistance</p>
                  </div>
                </div>

                {/* Address with Google Maps link */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-cyan-50 transition-colors">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Address</p>
                    <p className="text-slate-700">{businessInfo.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(businessInfo.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-700 text-sm mt-1 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg hover:bg-cyan-50 transition-colors">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-1">Email</p>
                    <a
                      href={`mailto:${businessInfo.email}`}
                      className="text-cyan-600 hover:text-cyan-700"
                    >
                      {businessInfo.email}
                    </a>
                    <p className="text-sm text-slate-600 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg">
                  <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">Opening Hours</p>
                    <div className="space-y-1 text-slate-700">
                      <p>{businessInfo.hours.weekday}</p>
                      <p>{businessInfo.hours.saturday}</p>
                      <p>{businessInfo.hours.sunday}</p>
                    </div>
                    <p className="text-sm text-red-600 mt-2 font-medium">
                      📞 Call for emergency assistance outside hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-xl border-2 border-slate-100">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-slate-50 border-b">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Send className="w-6 h-6 text-cyan-600" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Your Name *</Label>
                    <Input
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="John Smith"
                      className="border-slate-300 focus:border-cyan-600 focus:ring-cyan-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email Address *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="john@example.com"
                      className="border-slate-300 focus:border-cyan-600 focus:ring-cyan-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="07894 123456"
                      className="border-slate-300 focus:border-cyan-600 focus:ring-cyan-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Your Message *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="How can we help you?"
                      rows={5}
                      className="border-slate-300 focus:border-cyan-600 focus:ring-cyan-600"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section - FIXED with correct coordinates */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-xl border-2 border-slate-100">
            <CardHeader className="bg-gradient-to-r from-cyan-50 to-slate-50">
              <CardTitle className="text-2xl flex items-center gap-2">
                <MapPin className="w-6 h-6 text-cyan-600" />
                Find Us
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src={mapSrc}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Donaghadee Tyres - Unit 2 Newtownards Rd, Donaghadee BT21 0PT"
                className="w-full"
              ></iframe>
            </CardContent>
          </Card>
          
          {/* Directions Button */}
          <div className="mt-6 text-center">
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(businessInfo.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-all shadow-lg hover:shadow-xl"
            >
              <MapPin className="w-5 h-5" />
              Get Directions via Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
