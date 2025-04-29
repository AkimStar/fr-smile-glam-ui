import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-2 glass shadow-lg' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center">
          <img src="/logo.png" alt="FR Smile Logo" className="h-12" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.08 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="text-fr-blue font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-white after:transition-all after:duration-300 after:rounded-full hover:after:h-0.5 hover:after:w-full"
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Contact Button (Desktop) */}
        <div className="hidden md:block">
          <motion.div whileHover={{ scale: 1.08 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Button variant="default" className="btn-primary rounded-full text-white">
              Запази час
            </Button>
          </motion.div>
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
        <div className="glass-dark fixed inset-0 top-[60px] z-40 flex flex-col items-center pt-16 md:hidden">
          <div className="space-y-8 text-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-lg text-white hover:text-fr-accentHover"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button 
              variant="default" 
              className="bg-white text-fr-blue hover:bg-white/90 mt-6"
              onClick={() => setIsOpen(false)}
            >
              Контакт
            </Button>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
