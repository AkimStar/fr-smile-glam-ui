import React from 'react';
import { Facebook, Instagram, Tv, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.footer
      className="bg-gradient-to-b from-[#f5f5f5] to-fr-blue text-fr-blue"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
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
              <img src="/logo.png" alt="FR Smile Logo" className="h-16" />
            </div>
            <p className="mb-8 text-lg opacity-90 max-w-md">
              Осветете вашата усмивка с увереност и грижа. Доверете се на нас за професионална дентална грижа.
            </p>
            <motion.div whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Button 
                className="bg-white text-fr-blue hover:bg-white/90 rounded-full"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Запазете час
              </Button>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2">Меню</h3>
            <ul className="space-y-3">
              <li>
                <motion.a href="#hero" whileHover={{ scale: 1.08, color: '#fff' }} className="hover:text-white transition-colors inline-block py-1">
                  Начало
                </motion.a>
              </li>
              <li>
                <motion.a href="#about" whileHover={{ scale: 1.08, color: '#fff' }} className="hover:text-white transition-colors inline-block py-1">
                  За нас
                </motion.a>
              </li>
              <li>
                <motion.a href="#services" whileHover={{ scale: 1.08, color: '#fff' }} className="hover:text-white transition-colors inline-block py-1">
                  Услуги
                </motion.a>
              </li>
              <li>
                <motion.a href="#experts" whileHover={{ scale: 1.08, color: '#fff' }} className="hover:text-white transition-colors inline-block py-1">
                  Специалисти
                </motion.a>
              </li>
              <li>
                <motion.a href="#testimonials" whileHover={{ scale: 1.08, color: '#fff' }} className="hover:text-white transition-colors inline-block py-1">
                  Отзиви
                </motion.a>
              </li>
              <li>
                <motion.a href="#contact" whileHover={{ scale: 1.08, color: '#fff' }} className="hover:text-white transition-colors inline-block py-1">
                  Контакти
                </motion.a>
              </li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-6 border-b border-white/20 pb-2">Контакти</h3>
            <p className="mb-2 flex items-center">
              <span className="opacity-70 mr-2">Имейл:</span> 
              <a href="mailto:info@frsmile.com" className="hover:text-white transition-colors">
                info@frsmile.com
              </a>
            </p>
            <p className="mb-6 flex items-center">
              <span className="opacity-70 mr-2">Телефон:</span> 
              <a href="tel:+359876146960" className="hover:text-white transition-colors">
              +359 876 146 960
              </a>
            </p>
            
            <h3 className="text-lg font-semibold mb-4">Последвайте ни</h3>
            <div className="flex space-x-4">
              <motion.a 
                href="#" 
                aria-label="Instagram" 
                whileHover={{ scale: 1.15, backgroundColor: '#fff', color: '#2563eb' }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-fr-blue transition-all duration-300"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="Facebook" 
                whileHover={{ scale: 1.15, backgroundColor: '#fff', color: '#2563eb' }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-fr-blue transition-all duration-300"
              >
                <Facebook size={18} />
              </motion.a>
              <motion.a 
                href="#" 
                aria-label="TikTok" 
                whileHover={{ scale: 1.15, backgroundColor: '#fff', color: '#2563eb' }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-fr-blue transition-all duration-300"
              >
                <Tv size={18} />
              </motion.a>
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
            <motion.a href="#" whileHover={{ scale: 1.08, color: '#38bdf8' }} className="hover:text-fr-accentHover transition-colors">
              Политика за поверителност
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.08, color: '#38bdf8' }} className="hover:text-fr-accentHover transition-colors">
              Общи условия
            </motion.a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
