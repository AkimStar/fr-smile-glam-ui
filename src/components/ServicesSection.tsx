
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
    <section id="services" className="section-padding bg-white section-divider">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-fr-blue/10 text-fr-blue text-sm font-medium mb-3">
            Нашите Услуги
          </span>
          <h2 className="heading-lg text-fr-blue">Професионални дентални услуги</h2>
          <p className="text-lg text-fr-darkText/70 max-w-2xl mx-auto mt-4">
            Предлагаме широк спектър от дентални услуги, използвайки най-съвременните технологии и техники.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Services List */}
          <div className="lg:col-span-4 space-y-10">
            {services.map((service) => (
              <div key={service.id} 
                className={`flex items-start transition-all duration-300 p-4 rounded-lg hover:glass-card cursor-pointer ${
                  service.highlight ? 'glass-card' : ''
                }`}
              >
                <span className="text-3xl md:text-4xl font-playfair font-bold text-fr-blue mr-6">{service.id}</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-playfair font-semibold mb-3">{service.title}</h3>
                  <div className="h-0.5 w-16 bg-fr-blue/30 mb-4"></div>
                  <p className="text-fr-darkText/80">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Services Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div 
                key={`card-${service.id}`}
                className={`glass-card overflow-hidden ${
                  service.highlight 
                    ? 'md:col-span-2 bg-white/30 border-fr-blue/30' 
                    : ''
                }`}
              >
                <div className="h-52 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <h3 className="heading-sm mb-3">{service.title}</h3>
                  <p className="text-fr-darkText/80 mb-4">{service.description}</p>
                  {service.highlight && (
                    <Button variant="outline" className="mt-2 btn-outline rounded-full">
                      Научете повече <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
