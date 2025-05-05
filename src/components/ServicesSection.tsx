import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Stethoscope, User, Heart, Baby, Scissors, Activity } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const services = [
  {
    id: "01",
    title: "Хирургия",
    description: "Екстракция на зъби, оперативно отстраняване на ретинирани и дълбокофрактурирани зъби, инцизия на абсцеси, апикална остеотомия, хирургична подготовка за протезиране.",
    image: "/1.png",
    icon: <Scissors className="h-6 w-6 text-fr-blue" />
  },
  {
    id: "02",
    title: "Имплантология",
    description: "Поставяне на импланти, работа с различни имплантни системи в зависимост от конкретния случай , цялостна грижа за пациента от първоначалния преглед и планиране на лечението до редовните контролни прегледи след това.",
    image: "/2.png",
    icon: <Heart className="h-6 w-6 text-fr-blue" />
  },
  {
    id: "03",
    title: "Ортодонтия",
    description: "Корекция на зъбните редове чрез брекети и алайнери за перфектна усмивка и правилна захапка. Съвременната ортодонтия предлага естетични и ефективни решения, които постепенно подреждат зъбите и подобряват захапката без компромис с комфорта.",
    image: "/3.png",
    icon: <User className="h-6 w-6 text-fr-blue" />
  },
  {
    id: "04",
    title: "Ортопедично лечение",
    description: "Възстановяване на дефекти в зъбните редици чрез поставяне на неподвижни конструкции – мостове и коронки, подвижни протези – плакови протези, моделно-ляти скелетирани протези с куки или специални опорно-задръжни елементи , протезиране върху импланти. Комплексно лечение на зъбно-челюстната система с цел възстановяване на функцията и естетиката.",
    image: "/4.png",
    icon: <Activity className="h-6 w-6 text-fr-blue" />
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-fr-blue/10 text-fr-blue text-sm font-medium mb-3">
            Нашите Услуги
          </span>
          <motion.h2
            className="heading-lg text-fr-blue"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Професионални дентални услуги
          </motion.h2>
          <motion.p
            className="text-lg text-fr-darkText/70 max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Предлагаме широк спектър от дентални услуги, използвайки най-съвременните технологии и техники.
          </motion.p>
        </div>
        
        {/* Service Icons - Centered */}
        <motion.div
          className="flex justify-center gap-8 mb-16 flex-wrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={`icon-${service.id}`}
              className="flex flex-col items-center gap-2 px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ scale: 1.08 }}
            >
              <div className="rounded-full p-5 bg-fr-blue/10 mb-2">
                {service.icon}
              </div>
              <h3 className="text-center text-lg font-semibold text-fr-blue">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Service Cards - 2x2 Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } }
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={`card-${service.id}`}
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 * i }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
            >
              <Card 
                className="overflow-hidden border border-gray-100 shadow-md hover:shadow-lg transition-all h-full"
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
                  <p className="text-fr-darkText/80">{service.description} {service.id === "01" && "Този процес е напълно индивидуален и съобразен с вашите нужди."}{service.id === "02" && "Използваме най-новите техники за постигане на естествена красота."}{service.id === "03" && "Нашият екип се грижи за вашето удобство и дълготраен резултат."}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;