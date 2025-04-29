
import React from 'react';
import { Facebook, Instagram, TiktokIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fr-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand and CTA */}
          <div className="lg:col-span-2">
            <h2 className="font-playfair text-2xl font-bold italic mb-4">FR Smile</h2>
            <p className="mb-6 text-lg opacity-90">
              Осветете вашата усмивка с увереност и грижа.
            </p>
          </div>
          
          {/* Menu Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Меню</h3>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-fr-accentHover transition-colors">Начало</a></li>
              <li><a href="#about" className="hover:text-fr-accentHover transition-colors">За нас</a></li>
              <li><a href="#services" className="hover:text-fr-accentHover transition-colors">Услуги</a></li>
              <li><a href="#experts" className="hover:text-fr-accentHover transition-colors">Специалисти</a></li>
              <li><a href="#testimonials" className="hover:text-fr-accentHover transition-colors">Отзиви</a></li>
              <li><a href="#contact" className="hover:text-fr-accentHover transition-colors">Контакти</a></li>
            </ul>
          </div>
          
          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакти</h3>
            <p className="mb-2">Имейл: hello@frsmile.bg</p>
            <p className="mb-4">Телефон: +359 888 123 456</p>
            
            <h3 className="text-lg font-semibold mb-2">Последвайте ни</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-fr-accentHover transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-fr-accentHover transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="TikTok" className="hover:text-fr-accentHover transition-colors">
                <TiktokIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm opacity-75 mb-4 md:mb-0">
            © 2025, FR Smile — Всички права запазени
          </p>
          <div className="flex space-x-4 text-sm opacity-75">
            <a href="#" className="hover:text-fr-accentHover transition-colors">Политика за поверителност</a>
            <span>|</span>
            <a href="#" className="hover:text-fr-accentHover transition-colors">Общи условия</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
