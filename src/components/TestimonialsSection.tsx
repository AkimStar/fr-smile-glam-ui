
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    content: "Най-доброто преживяване! Екипът беше професионален и направи всичко комфортно.",
    author: "Мария",
    rating: 5,
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    id: 2,
    content: "Отличен персонал и съвременно оборудване. Препоръчвам на всички, които искат качествено лечение.",
    author: "Иван",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    content: "Професионално обслужване с внимание към детайла. Чувствах се спокойна през цялото време.",
    author: "Елена",
    rating: 4,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 4,
    content: "Страхотен опит! Вече нямам никакъв страх от зъболекари благодарение на д-р Рюстем.",
    author: "Стоян",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden section-divider">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-fr-blue/10 text-fr-blue text-sm font-medium mb-3">
            Мнения
          </span>
          <h2 className="heading-lg text-fr-blue mb-3">Какво казват нашите пациенти</h2>
          <p className="text-lg text-fr-darkText/70 max-w-2xl mx-auto">
            Вижте какво споделят нашите пациенти за своя опит с нашата дентална клиника
          </p>
        </div>
        
        <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-fr-lightGray/30 via-transparent to-fr-lightGray/30 rounded-3xl"></div>
          
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            const isPrev = (index === activeIndex - 1) || (activeIndex === 0 && index === testimonials.length - 1);
            const isNext = (index === activeIndex + 1) || (activeIndex === testimonials.length - 1 && index === 0);
            
            let positionClass = 'hidden';
            if (isActive) {
              positionClass = 'z-30 scale-100 opacity-100';
            } else if (isPrev) {
              positionClass = 'z-20 -translate-x-[70%] scale-95 opacity-60';
            } else if (isNext) {
              positionClass = 'z-20 translate-x-[70%] scale-95 opacity-60';
            }
            
            return (
              <div
                key={testimonial.id}
                className={`glass-card absolute top-0 p-8 md:p-10 w-[90%] md:w-[80%] max-w-2xl transition-all duration-500 ${positionClass} cursor-pointer`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden shrink-0">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-playfair italic mb-4">"{testimonial.content}"</p>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <p className="font-semibold text-lg text-fr-blue">{testimonial.author}</p>
                      <div className="flex mt-2 md:mt-0">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Dot indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-fr-blue scale-125 w-8' : 'bg-fr-blue/30'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
