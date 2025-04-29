
import React from 'react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: "01",
    title: "Ортодонтия",
    description: "Перфектно подреждане на зъбите за красива и функционална захапка.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop"
  },
  {
    id: "02",
    title: "Козметична стоматология",
    description: "Подобряване на природната красота на вашите зъби, като същевременно се запазва тяхното здраве и функция.",
    image: "https://images.unsplash.com/photo-1643228995868-bf698f67d053?q=80&w=2070&auto=format&fit=crop",
    highlight: true
  },
  {
    id: "03",
    title: "Възстановителна стоматология",
    description: "Възвръщане на здравето и функцията на увредените зъби.",
    image: "https://images.unsplash.com/photo-1609840112990-4265448268d1?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "04",
    title: "Детска стоматология",
    description: "Грижа за усмивките на най-малките пациенти с внимание и нежност.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop"
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <h2 className="heading-lg text-fr-blue mb-12 text-center">Нашите услуги</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Services List */}
          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.id} className="flex items-start">
                <span className="text-2xl md:text-3xl font-playfair font-bold text-fr-blue mr-6">{service.id}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-2">{service.title}</h3>
                  <div className="h-0.5 w-16 bg-fr-blue/30 mb-4"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div 
                key={service.id}
                className={`glass-card p-5 flex flex-col ${
                  service.highlight 
                    ? 'md:col-span-2 bg-white/30 border-fr-blue/30' 
                    : ''
                }`}
              >
                <div className="h-40 mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className="heading-sm mb-2">{service.title}</h3>
                <p className="text-fr-darkText/80 mb-4">{service.description}</p>
                {service.highlight && (
                  <Button variant="outline" className="mt-auto self-start border-fr-blue text-fr-blue hover:bg-fr-accentHover">
                    Научете повече
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
