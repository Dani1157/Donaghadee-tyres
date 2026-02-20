import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, Car, FileText } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { submitQuoteRequest, submitBooking, bookingSlots } from '../utils/mockData';

const QuoteAndBooking = () => {
  const [activeTab, setActiveTab] = useState('quote');
  const [quoteLoading, setQuoteLoading] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);

  const [quoteData, setQuoteData] = useState({
    name: '',
    phone: '',
    email: '',
    tyreSize: '',
    vehicleType: '',
    message: ''
  });

  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setQuoteLoading(true);
    try {
      const result = await submitQuoteRequest(quoteData);
      toast.success(result.message);
      setQuoteData({ name: '', phone: '', email: '', tyreSize: '', vehicleType: '', message: '' });
    } catch (error) {
      toast.error('Failed to submit quote request. Please try again.');
    } finally {
      setQuoteLoading(false);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setBookingLoading(true);
    try {
      const result = await submitBooking(bookingData);
      toast.success(result.message);
      setBookingData({ name: '', phone: '', email: '', date: '', time: '', service: '', notes: '' });
    } catch (error) {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Get a Quote or Book Now
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Request a quote or book your service online. We'll get back to you promptly.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-slate-200 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('quote')}
              className={`px-8 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'quote'
                  ? 'bg-white text-cyan-600 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Get a Quote
            </button>
            <button
              onClick={() => setActiveTab('booking')}
              className={`px-8 py-3 rounded-md font-semibold transition-all ${
                activeTab === 'booking'
                  ? 'bg-white text-cyan-600 shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Book Service
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {activeTab === 'quote' ? (
            <Card className="shadow-xl border-2 border-slate-100">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-slate-50 border-b">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <FileText className="w-6 h-6 text-cyan-600" />
                  Request a Quote
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleQuoteSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="quote-name">Full Name *</Label>
                      <Input
                        id="quote-name"
                        required
                        value={quoteData.name}
                        onChange={(e) => setQuoteData({...quoteData, name: e.target.value})}
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-phone">Phone Number *</Label>
                      <Input
                        id="quote-phone"
                        type="tel"
                        required
                        value={quoteData.phone}
                        onChange={(e) => setQuoteData({...quoteData, phone: e.target.value})}
                        placeholder="07894 123456"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quote-email">Email Address</Label>
                    <Input
                      id="quote-email"
                      type="email"
                      value={quoteData.email}
                      onChange={(e) => setQuoteData({...quoteData, email: e.target.value})}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="quote-size">Tyre Size (if known)</Label>
                      <Input
                        id="quote-size"
                        value={quoteData.tyreSize}
                        onChange={(e) => setQuoteData({...quoteData, tyreSize: e.target.value})}
                        placeholder="e.g., 205/55 R16"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quote-vehicle">Vehicle Type</Label>
                      <Select
                        value={quoteData.vehicleType}
                        onValueChange={(value) => setQuoteData({...quoteData, vehicleType: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car">Car</SelectItem>
                          <SelectItem value="van">Van</SelectItem>
                          <SelectItem value="4x4">4x4/SUV</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quote-message">Additional Details</Label>
                    <Textarea
                      id="quote-message"
                      value={quoteData.message}
                      onChange={(e) => setQuoteData({...quoteData, message: e.target.value})}
                      placeholder="Tell us about your tyre needs..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={quoteLoading}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-lg font-semibold"
                  >
                    {quoteLoading ? 'Submitting...' : 'Get Free Quote'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="shadow-xl border-2 border-slate-100">
              <CardHeader className="bg-gradient-to-r from-cyan-50 to-slate-50 border-b">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-cyan-600" />
                  Book Your Service
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="booking-name">Full Name *</Label>
                      <Input
                        id="booking-name"
                        required
                        value={bookingData.name}
                        onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="booking-phone">Phone Number *</Label>
                      <Input
                        id="booking-phone"
                        type="tel"
                        required
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                        placeholder="07894 123456"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="booking-email">Email Address</Label>
                    <Input
                      id="booking-email"
                      type="email"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="booking-date">Preferred Date *</Label>
                      <Input
                        id="booking-date"
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="booking-time">Preferred Time *</Label>
                      <Select
                        value={bookingData.time}
                        onValueChange={(value) => setBookingData({...bookingData, time: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {bookingSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>{slot}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="booking-service">Service Required *</Label>
                    <Select
                      value={bookingData.service}
                      onValueChange={(value) => setBookingData({...bookingData, service: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency Tyre Repair</SelectItem>
                        <SelectItem value="new-fitting">New Tyre Fitting</SelectItem>
                        <SelectItem value="part-worn">Part-Worn Tyres</SelectItem>
                        <SelectItem value="balancing">Wheel Balancing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="booking-notes">Additional Notes</Label>
                    <Textarea
                      id="booking-notes"
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({...bookingData, notes: e.target.value})}
                      placeholder="Any specific requirements..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={bookingLoading}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-lg font-semibold"
                  >
                    {bookingLoading ? 'Booking...' : 'Confirm Booking'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-cyan-50 border-2 border-cyan-200 rounded-lg px-8 py-4">
            <p className="text-cyan-900 font-semibold text-lg">
              💡 No time to book? Walk-ins are always welcome!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteAndBooking;
