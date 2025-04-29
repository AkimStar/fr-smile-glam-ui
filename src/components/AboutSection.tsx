import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-fr-lightGray to-white section-divider">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-fr-blue/10 text-fr-blue text-sm font-medium mb-3">
            За Нас
          </span>
          <motion.h2 
            className="heading-lg text-fr-blue"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Вашите доверени партньори за дентална грижа
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="heading-md text-fr-blue mb-6">Ние създаваме трайни отношения</h3>
            <p className="text-lg mb-8">
              Изграждаме дълготрайни отношения, основани на доверие и грижа. 
              Всеки пациент е важен за нас и всяко посещение е комфортно и персонализирано.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-fr-blue/20">
              {["98%", "5,000+", "4.9★"].map((stat, i) => (
                <motion.div
                  key={stat}
                  className="text-center p-4 glass-card"
                  whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                >
                  <p className="text-4xl font-bold text-fr-blue mb-2">{stat}</p>
                  <p className="text-sm text-fr-darkText/70">{["Удовлетвореност", "Трансформации", "Рейтинг"][i]}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Images */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className="glass-card p-2 h-64 animate-float"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop" 
                alt="Dental procedure" 
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              className="glass-card p-2 h-64 mt-8 md:mt-16 animate-float"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Smiling patient" 
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
