
import React from 'react';

const experts = [
  {
    id: 1,
    name: "Д-р Февзи Рюстем",
    title: "Главен Стоматолог",
    description: "С дългогодишен опит, завършил в Украйна. Специализиран във всички видове стоматологични услуги.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Д-р Мария Петрова",
    title: "Козметичен Стоматолог",
    description: "Един от нейните приоритети е избелването на зъби. Съчетава грижа и прецизност.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop"
  }
];

const ExpertsSection = () => {
  return (
    <section id="experts" className="section-padding bg-fr-lightGray">
      <div className="container mx-auto">
        <h2 className="heading-lg text-fr-blue mb-12 text-center">Нашите специалисти</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {experts.map((expert) => (
            <div 
              key={expert.id}
              className="glass-card p-6 flex flex-col md:flex-row gap-6 items-center md:items-start"
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/50 flex-shrink-0">
                <img 
                  src={expert.image} 
                  alt={expert.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="heading-sm mb-1 text-center md:text-left">{expert.name}</h3>
                <p className="text-fr-blue font-medium mb-4 text-center md:text-left">{expert.title}</p>
                <p className="text-fr-darkText/80">{expert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
