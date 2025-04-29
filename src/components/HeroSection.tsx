import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.JPG"
          alt="Woman with beautiful smile"
          className="w-full h-full object-cover object-top"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          className="glass-card max-w-2xl mx-auto p-8 md:p-12 animate-float bg-black/5"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-fr-blue/10 text-fr-blue text-sm font-medium mb-6">
            Дентална клиника FR Smile
          </span>
          <h1 className="heading-xl text-fr-blue mb-6">
            Грижа за вашата <span className="italic text-fr-white">усмивка,</span> гарантирани <span className="italic text-fr-white">решения.</span>
          </h1>
          <p className="text-lg mb-8 text-fr-white/90">
            Вашата усмивка е израз на увереност, здраве и щастие. Доверете се на нашия професионален екип за перфектен резултат.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.div whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Button 
                size="lg" 
                className="btn-primary text-base font-medium px-8 rounded-full"
                onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Запазете час <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Button 
                size="lg" 
                variant="outline" 
                className="btn-outline text-base font-medium px-8 rounded-full"
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Научете повече
              </Button>
            </motion.div>
          </div>
        </motion.div>
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
