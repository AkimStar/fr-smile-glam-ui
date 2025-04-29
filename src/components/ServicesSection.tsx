
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
        
        {/* Service Icons - Centered */}
        <div className="flex justify-center gap-8 mb-16 flex-wrap">
          {services.map((service) => (
            <div 
              key={`icon-${service.id}`} 
              className="flex flex-col items-center gap-2 px-4"
            >
              <div className="rounded-full p-5 bg-fr-blue/10 mb-2">
                {service.icon}
              </div>
              <h3 className="text-center text-lg font-semibold text-fr-blue">{service.title}</h3>
            </div>
          ))}
        </div>
        
        {/* Service Cards - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card 
              key={`card-${service.id}`}
              className="overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all"
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
      </div>
    </section>
  );
};

export default ServicesSection;
