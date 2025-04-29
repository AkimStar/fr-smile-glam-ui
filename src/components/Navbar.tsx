
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Начало', href: '#hero' },
  { name: 'За нас', href: '#about' },
  { name: 'Услуги', href: '#services' },
  { name: 'Специалисти', href: '#experts' },
  { name: 'Отзиви', href: '#testimonials' },
  { name: 'Контакти', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <span className="text-fr-blue font-playfair text-2xl font-bold italic">FR Smile</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-fr-darkText hover:text-fr-blue transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <Button variant="default" className="bg-fr-blue hover:bg-fr-blue/80">
            Контакт
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-fr-blue focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="glass fixed inset-0 top-[60px] z-40 flex flex-col items-center pt-16 md:hidden">
          <div className="space-y-6 text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg text-fr-darkText hover:text-fr-blue"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-fr-blue hover:bg-fr-blue/80 mt-6"
              onClick={() => setIsOpen(false)}
            >
              Контакт
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
