import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
// Assuming StarBorder is used elsewhere or can be removed if not used in this specific section after modifications.
// import { StarBorder } from '@/components/ui/star-border';
import { Button } from '@/components/ui/button';

const experts = [
  {
    id: 1,
    name: "Д-р Февзи Рюстем",
    title: "Основател",
    description: "Основател, управител и главен специалист по протетика и хирургия в Дентален център \"FR Smile\". ",
    image: "/fevzi1.jpeg",
    socials: {
      facebook: "https://www.facebook.com/share/1C7TW2bz6Q/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/dr_fryustem?igsh=NDY4bnM5ZTN3ZmFp"
    },
    phoneNumber: "+359876146960"
  },
  {
    id: 2,
    name: "Д-р Инна Данаилова",
    title: "Специалист",
    description: "Специалист по детска дентална медицина и естетична медицина в Дентален център \"FR Smile\". ",
    image: "/inna1.jpeg",
    socials: {
      facebook: "https://www.facebook.com/share/1A55D1XEW9/?mibextid=wwXIfr",
      instagram: "https://www.instagram.com/innadanailova?igsh=MmdoMHB2bDRhejlj"
    },
    phoneNumber: "+359877083898"
  },
  {
    id: 3,
    name: "Д-р Николина Байрева",
    title: "Ортодонт",
    description: "Специалист по ортодонтия(брекети и алайнери) и естетична медицина(филъри, ботокс) в Дентален център \"FR Smile\". ",
    image: "/nikolina.jpeg",
    socials: {
      facebook: "#", // Keeps the original facebook link for Nikolina
      instagram: "https://www.instagram.com/miss_nicole98?igsh=OTJwbmJweWh1cmtj"
    },
    phoneNumber: "+359876146960"
  }
  // Expert with ID 4 (Лена Йорданова) has been removed
];

const ExpertsSection = () => {
  return (
    <section id="experts" className="section-padding bg-gradient-to-b from-white to-fr-lightGray">
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
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 lg:gap-16" // Changed to 3 columns for md and lg
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
              <p className="text-fr-darkText/80 mb-6">{expert.description}</p>
              
              {/* Social links and button are now always displayed for all experts in the list */}
              <>
                <div className="flex items-center space-x-4 mb-6">
                  <motion.a
                    href={expert.socials.facebook}
                    target="_blank" // Added target blank for external links
                    rel="noopener noreferrer" // Added rel for security
                    whileHover={{ scale: 1.15, backgroundColor: '#2563eb', color: '#fff' }}
                    className="w-8 h-8 rounded-full bg-fr-blue/10 flex items-center justify-center hover:bg-fr-blue hover:text-white transition-all duration-300"
                  >
                    <Facebook size={16} />
                  </motion.a>
                  <motion.a
                    href={expert.socials.instagram}
                    target="_blank" // Added target blank for external links
                    rel="noopener noreferrer" // Added rel for security
                    whileHover={{ scale: 1.15, backgroundColor: '#2563eb', color: '#fff' }}
                    className="w-8 h-8 rounded-full bg-fr-blue/10 flex items-center justify-center hover:bg-fr-blue hover:text-white transition-all duration-300"
                  >
                    <Instagram size={16} />
                  </motion.a>
                </div>
                <a href={`tel:${expert.phoneNumber}`} className="w-full md:w-40 mt-4">
                  <Button
                    variant="default"
                    className="btn-primary rounded-full text-white w-full"
                  >
                    Запази час
                  </Button>
                </a>
              </>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertsSection;