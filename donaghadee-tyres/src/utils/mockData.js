// Business Information
export const businessInfo = {
  name: "Donaghadee Tyres",
  phone: "07894301849",
  phoneDisplay: "07894 301849",
  email: "info@donaghadeetyres.com",
  address: "Unit 2 Newtownards Rd, Donaghadee BT21 0PT",
  rating: "5.0",
  reviewCount: "63",
  hours: {
    weekday: "Monday - Friday: 8:00 AM - 5:30 PM",
    saturday: "Saturday: 8:00 AM - 1:00 PM",
    sunday: "Sunday: Closed"
  },
  social: {
    facebook: "https://facebook.com/donaghadeetyres",
    instagram: "https://instagram.com/donaghadeetyres",
    whatsapp: "447894301849"
  }
};

// Why Choose Us Features
export const whyChooseUs = [
  {
    id: 1,
    icon: "Star",
    title: "5-Star Service",
    description: "Rated 5.0 stars by our customers"
  },
  {
    id: 2,
    icon: "Zap",
    title: "Fast Walk-in Repairs",
    description: "No appointment needed, quick turnaround"
  },
  {
    id: 3,
    icon: "DollarSign",
    title: "Amazing Prices",
    description: "Competitive pricing, great value"
  },
  {
    id: 4,
    icon: "Heart",
    title: "LGBTQ+ Friendly",
    description: "Everyone welcome, inclusive service"
  }
];

// Services
export const services = [
  {
    id: 1,
    icon: "AlertCircle",
    title: "24/7 EMERGENCY",
    description: "Emergency Callout Service - 24/7 emergency response to burst tyres and roadside breakdowns. We come to you!",
    featured: true
  },
  {
    id: 2,
    icon: "Disc",
    title: "Tyres - All Types",
    description: "New and part-worn tyres for cars, vans, 4×4s. Wide selection from leading brands.",
    featured: false
  },
  {
    id: 3,
    icon: "Gauge",
    title: "Wheel Alignment",
    description: "Precision wheel alignment and balancing for optimal performance and tyre life.",
    featured: false
  },
  {
    id: 4,
    icon: "Settings",
    title: "New Wheels & Alloys",
    description: "Premium alloy wheels and rims. Upgrade your vehicle's look and performance.",
    featured: false
  },
  {
    id: 5,
    icon: "Wrench",
    title: "Servicing & MOT Prep",
    description: "Full vehicle servicing and MOT preparation to keep you road-legal and safe.",
    featured: false
  },
  {
    id: 6,
    icon: "Truck",
    title: "Trailer & Agricultural",
    description: "Specialist tyres for trailers, tractors, and agricultural vehicles.",
    featured: false
  },
  {
    id: 7,
    icon: "Radio",
    title: "TPMS Servicing",
    description: "Tyre Pressure Monitoring System checks, repairs, and sensor replacement.",
    featured: false
  },
  {
    id: 8,
    icon: "Footprints",
    title: "Walk-In Service",
    description: "No appointment needed. Walk in and we'll get you sorted straight away.",
    featured: false
  }
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Timothy",
    text: "Great service, came in last minute with a burst tyre. Being a sales rep on the rd needed it fixed asap. And that they did! No hassle, highly recommend.",
    rating: 5,
    date: "3 months ago"
  },
  {
    id: 2,
    name: "Scott McCready",
    text: "Fantastic service and amazing prices got sorted with two front tyres as a walk in this morning will definitely be back and recommending to friends, family and others! Cheers!!",
    rating: 5,
    date: "a month ago"
  },
  {
    id: 3,
    name: "Méabh Mac Manus",
    text: "Amazing service. Everything was communicated promptly and clearly. Thank you so much helping me out before Christmas!!",
    rating: 5,
    date: "2 months ago"
  }
];

// Booking Slots
export const bookingSlots = [
  "8:00 AM - 9:00 AM",
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "12:00 PM - 1:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 5:30 PM"
];

// Mock API Functions
export const submitQuoteRequest = async (data) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log('Quote Request:', data);
  return { success: true, message: "Quote request sent successfully! We'll get back to you within 24 hours." };
};

export const submitBooking = async (data) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log('Booking:', data);
  return { success: true, message: "Booking confirmed! We'll send you a reminder before your appointment." };
};

export const submitContact = async (data) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  console.log('Contact:', data);
  return { success: true, message: "Message sent successfully! We'll get back to you within 24 hours." };
};