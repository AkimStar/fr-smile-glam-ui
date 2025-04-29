
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Stethoscope, User, Heart, Baby } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    id: "01",
    title: "Ортодонтия",
    description: "Перфектно подреждане на зъбите за красива и функционална захапка.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop",
    icon: <Stethoscope className="h-6 w-6 text-fr-blue" />
  },
  {
    id: "02",
    title: "Козметична стоматология",
    description: "Подобряване на природната красота на вашите зъби, като същевременно се запазва тяхното здраве и функция.",
    image: "https://images.unsplash.com/photo-1643228995868-bf698f67d053?q=80&w=2070&auto=format&fit=crop",
    highlight: true,
    icon: <User className="h-6 w-6 text-fr-blue" />
  },
  {
    id: "03",
    title: "Възстановителна стоматология",
    description: "Възвръщане на здравето и функцията на увредените зъби.",
    image: "https://images.unsplash.com/photo-1609840112990-4265448268d1?q=80&w=2070&auto=format&fit=crop",
    icon: <Heart className="h-6 w-6 text-fr-blue" />
  },
  {
    id: "04",
    title: "Детска стоматология",
    description: "Грижа за усмивките на най-малките пациенти с внимание и нежност.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop",
    icon: <Baby className="h-6 w-6 text-fr-blue" />
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState("02");
  
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
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Services List - Left Side */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4 bg-white/50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-medium mb-6 text-fr-blue">Всички услуги</h3>
              
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className={`flex items-center gap-4 p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeService === service.id 
                      ? 'bg-fr-blue/10 shadow-md' 
                      : 'hover:bg-fr-blue/5'
                  }`}
                  onClick={() => setActiveService(service.id)}
                >
                  <div className={`rounded-full p-3 ${activeService === service.id ? 'bg-fr-blue/20' : 'bg-gray-100'}`}>
                    {service.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-fr-blue/70 font-medium">{service.id}</span>
                      {activeService === service.id && (
                        <div className="h-1.5 w-1.5 rounded-full bg-fr-blue"></div>
                      )}
                    </div>
                    <h3 className="font-playfair font-semibold text-lg">{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Service Details - Right Side */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services
                .filter(service => service.id === activeService || service.highlight)
                .map((service) => (
                  <Card 
                    key={`card-${service.id}`}
                    className={`overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all ${
                      service.id === activeService
                        ? 'ring-2 ring-fr-blue/30 transform scale-100'
                        : 'opacity-90 scale-95 hover:opacity-100 hover:scale-100'
                    } ${service.highlight && service.id === activeService ? 'md:col-span-2' : ''}`}
                  >
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-fr-blue">
                        {service.icon}
                        <span>{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-fr-darkText/80">{service.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Button 
                        variant="outline" 
                        className="mt-2 rounded-full border-fr-blue/30 text-fr-blue hover:bg-fr-blue hover:text-white"
                      >
                        Научете повече <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
            
            {/* Additional Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {services
                .filter(service => service.id !== activeService && !service.highlight)
                .map((service) => (
                  <Card 
                    key={`additional-${service.id}`}
                    className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all opacity-70 hover:opacity-100"
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="py-3">
                      <CardTitle className="flex items-center gap-2 text-base font-medium text-fr-blue">
                        {service.icon}
                        <span>{service.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-2">
                      <p className="text-sm text-fr-darkText/80">{service.description}</p>
                    </CardContent>
                    <CardFooter className="py-3">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="p-0 text-fr-blue hover:text-fr-blue/70 hover:bg-transparent"
                        onClick={() => setActiveService(service.id)}
                      >
                        Научете повече <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </CardFooter>
                  </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
