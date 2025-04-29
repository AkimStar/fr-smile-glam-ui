import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const experts = [
  {
    id: 1,
    name: "Д-р Февзи Рюстем",
    title: "Главен Стоматолог",
    description: "С дългогодишен опит, завършил в Украйна. Специализиран във всички видове стоматологични услуги.",
    image: "/fevzi.png",
    socials: {
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 2,
    name: "Д-р Инна Данаилова",
    title: "Козметичен Стоматолог",
    description: "Един от нейните приоритети е избелването на зъби. Съчетава грижа и прецизност.",
    image: "/inna.jpg",
    socials: {
      facebook: "#",
      instagram: "#"
    }
  }
];

const ExpertsSection = () => {
  return (
    <section id="experts" className="section-padding bg-gradient-to-b from-white to-fr-lightGray section-divider">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-fr-blue/10 text-fr-blue text-sm font-medium mb-3">
            Екип
          </span>
          <motion.h2
            className="heading-lg text-fr-blue mb-3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Нашите специалисти
          </motion.h2>
          <motion.p
            className="text-lg text-fr-darkText/70 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Запознайте се с нашия екип от висококвалифицирани дентални професионалисти
          </motion.p>
        </div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } }
          }}
        >
          {experts.map((expert, i) => (
            <motion.div
              key={expert.id}
              className="glass-card p-8 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
            >
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white/50 mb-6 shadow-lg">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="heading-sm mb-2">{expert.name}</h3>
              <p className="text-fr-blue font-medium mb-3">{expert.title}</p>
              <div className="w-12 h-1 bg-fr-blue/30 rounded-full mb-4"></div>
              <p className="text-fr-darkText/80 mb-6">{expert.description}</p>
              {/* Social links */}
              <div className="flex items-center space-x-4 mt-auto">
                <motion.a 
                  href={expert.socials.facebook} 
                  whileHover={{ scale: 1.15, backgroundColor: '#2563eb', color: '#fff' }}
                  className="w-8 h-8 rounded-full bg-fr-blue/10 flex items-center justify-center hover:bg-fr-blue hover:text-white transition-all duration-300"
                >
                  <Facebook size={16} />
                </motion.a>
                <motion.a 
                  href={expert.socials.instagram} 
                  whileHover={{ scale: 1.15, backgroundColor: '#2563eb', color: '#fff' }}
                  className="w-8 h-8 rounded-full bg-fr-blue/10 flex items-center justify-center hover:bg-fr-blue hover:text-white transition-all duration-300"
                >
                  <Instagram size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertsSection;
