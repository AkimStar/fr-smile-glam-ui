
import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const experts = [
  {
    id: 1,
    name: "Д-р Февзи Рюстем",
    title: "Главен Стоматолог",
    description: "С дългогодишен опит, завършил в Украйна. Специализиран във всички видове стоматологични услуги.",
    image: "https://i.ibb.co/xK6rRKJ/Chat-GPT-Image-Apr-29-2025-03-47-44-PM.png",
    socials: {
      facebook: "#",
      instagram: "#"
    }
  },
  {
    id: 2,
    name: "Д-р Мария Петрова",
    title: "Козметичен Стоматолог",
    description: "Един от нейните приоритети е избелването на зъби. Съчетава грижа и прецизност.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
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
          <h2 className="heading-lg text-fr-blue mb-3">Нашите специалисти</h2>
          <p className="text-lg text-fr-darkText/70 max-w-2xl mx-auto">
            Запознайте се с нашия екип от висококвалифицирани дентални професионалисти
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {experts.map((expert) => (
            <div 
              key={expert.id}
              className="glass-card p-8 flex flex-col items-center text-center"
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
                <a 
                  href={expert.socials.facebook} 
                  className="w-8 h-8 rounded-full bg-fr-blue/10 flex items-center justify-center hover:bg-fr-blue hover:text-white transition-all duration-300"
                >
                  <Facebook size={16} />
                </a>
                <a 
                  href={expert.socials.instagram} 
                  className="w-8 h-8 rounded-full bg-fr-blue/10 flex items-center justify-center hover:bg-fr-blue hover:text-white transition-all duration-300"
                >
                  <Instagram size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
