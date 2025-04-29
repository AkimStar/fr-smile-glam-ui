
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=1974&auto=format&fit=crop"
          alt="Dental clinic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-fr-blue/20 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="glass-card max-w-2xl mx-auto p-8 md:p-12 animate-fade-in">
          <h1 className="heading-xl text-fr-blue mb-4">
            Грижа за вашата <span className="italic">усмивка</span>, едно посещение в даден момент.
          </h1>
          <p className="text-lg mb-8 text-fr-darkText/80">
            Вашата усмивка е израз на увереност, здраве и щастие.
          </p>
          <Button 
            size="lg" 
            className="bg-fr-blue hover:bg-fr-blue/80 text-white"
            onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Запазете час <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
