import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Counter Component
const Counter = ({ from = 0, to, duration = 3000, suffix = '', decimals = 0 }) => {
  const [count, setCount] = useState(from);
  const ref = useRef();
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = null;

          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const value = progress * (to - from) + from;
            setCount(value); // Always store as number
            if (progress < 1) requestAnimationFrame(step);
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [from, to, duration]);

  const formattedCount = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return <span ref={ref}>{formattedCount}{suffix}</span>;
};

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-fr-lightGray to-white">
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
            <h3 className="heading-left text-fr-blue mb-6">Ние създаваме трайни отношения</h3>
            <p className="text-lg mb-8">
              Изграждаме дълготрайни отношения, основани на доверие и грижа. 
              Всеки пациент е важен за нас и всяко посещение е комфортно и персонализирано.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-fr-blue/20">
              {[
                { value: 98, suffix: '%', label: 'Удовлетвореност', decimals: 0 },
                { value: 5000, suffix: '+', label: 'Трансформации', decimals: 0 },
                { value: 4.9, suffix: '★', label: 'Рейтинг', decimals: 1 }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 glass-card rounded-xl mb-4 md:mb-0"
                  whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                >
                  <p className="text-4xl font-bold text-fr-blue mb-2">
                    <Counter to={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </p>
                  <p className="text-sm text-fr-darkText/70">{stat.label}</p>
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
              className="glass-card p-2 h-96 animate-float"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="/5.jpeg" 
                alt="Dental procedure" 
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
            <motion.div
              className="glass-card p-2 h-96 mt-8 md:mt-16 animate-float"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="/6.jpeg" 
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