import React from "react";
import "./App.css";
import { Toaster } from "./components/ui/sonner";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import QuoteAndBooking from "./components/QuoteAndBooking";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialButtons from "./components/WhatsAppButton";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <QuoteAndBooking />
        <Contact />
      </main>
      <Footer />
      <SocialButtons />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;