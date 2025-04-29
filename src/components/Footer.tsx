
import React from 'react';
import { Facebook, Instagram, Tv, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gradient-to-b from-[#f5f5f5] to-fr-blue text-fr-blue">
      {/* Back to top button */}
      <div className="container mx-auto px-6 relative">
        <div className="flex justify-center">
          <Button 
            className="absolute -top-6 bg-white text-fr-blue hover:bg-white/90 w-12 h-12 rounded-full p-0 shadow-md"
            onClick={scrollToTop}
          >
            <ArrowUp size={20} />
          </Button>
        </div>
      </div>
      
      {/* Main footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand and CTA */}
          <div className="lg:col-span-5">
            <div className="mb-4">
              <img src="https://i.ibb.co/fVSqpnk/FR-SMILE-filled-transparent.png" alt="FR Smile Logo" className="h-16" />
            </div>
            <p className="mb-8 text-lg opacity-90 max-w-md">
              Осветете вашата усмивка с увереност и грижа. Доверете се на нас за професионална дентална грижа.
            </p>
            <Button 
              className="bg-white text-fr-blue hover:bg-white/90 rounded-full"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Запазете час
            </Button>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2">Меню</h3>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="hover:text-white transition-colors inline-block py-1">
                  Начало
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors inline-block py-1">
                  За нас
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors inline-block py-1">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#experts" className="hover:text-white transition-colors inline-block py-1">
                  Специалисти
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors inline-block py-1">
                  Отзиви
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors inline-block py-1">
                  Контакти
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2">Контакти</h3>
            <p className="mb-2 flex items-center">
              <span className="opacity-70 mr-2">Имейл:</span> 
              <a href="mailto:hello@frsmile.bg" className="hover:text-white transition-colors">
                hello@frsmile.bg
              </a>
            </p>
            <p className="mb-6 flex items-center">
              <span className="opacity-70 mr-2">Телефон:</span> 
              <a href="tel:+359888123456" className="hover:text-white transition-colors">
                +359 888 123 456
              </a>
            </p>
            
            <h3 className="text-lg font-semibold mb-4">Последвайте ни</h3>
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Instagram" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-fr-blue transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Facebook" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-fr-blue transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                aria-label="TikTok" 
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-fr-blue transition-all duration-300"
              >
                <Tv size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright Footer */}
      <div className="border-t border-white/10 py-6 bg-fr-blue text-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75 mb-4 md:mb-0">
            © 2025, FR Smile — Всички права запазени
          </p>
          <div className="flex space-x-6 text-sm opacity-75">
            <a href="#" className="hover:text-fr-accentHover transition-colors">
              Политика за поверителност
            </a>
            <a href="#" className="hover:text-fr-accentHover transition-colors">
              Общи условия
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
