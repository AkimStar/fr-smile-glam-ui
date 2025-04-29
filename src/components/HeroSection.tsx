
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co/VcQgh65/IMG-0310.jpg"
          alt="Woman with beautiful smile"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-fr-blue/70 to-fr-blue/40 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="glass-card max-w-2xl mx-auto p-8 md:p-12 animate-float">
          <span className="inline-block px-4 py-1 rounded-full bg-fr-blue/10 text-fr-blue text-sm font-medium mb-6">
            Дентална клиника FR Smile
          </span>
          <h1 className="heading-xl text-fr-blue mb-6">
            Грижа за вашата <span className="italic text-fr-blue">усмивка</span>, гарантирани решения.
          </h1>
          <p className="text-lg mb-8 text-fr-darkText/90">
            Вашата усмивка е израз на увереност, здраве и щастие. Доверете се на нашия професионален екип за перфектен резултат.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="btn-primary text-base font-medium px-8 rounded-full"
              onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Запазете час <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="btn-outline text-base font-medium px-8 rounded-full"
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Научете повече
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
