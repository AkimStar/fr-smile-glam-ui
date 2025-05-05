import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TeethWhiteningSection from '../components/TeethWhiteningSection';
import ExpertsSection from '../components/ExpertsSection';
// import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TeethWhiteningSection />
      <ExpertsSection />
      {/* <TestimonialsSection /> */}      
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
