
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
    <section id="testimonials" className="section-padding">
      <div className="container mx-auto">
        <h2 className="heading-lg text-fr-blue mb-8 text-center">Какво казват нашите пациенти?</h2>
        
        <div className="relative h-[400px] md:h-[300px] flex items-center justify-center">
          {testimonials.map((testimonial, index) => {
            const isActive = index === activeIndex;
            const isPrev = (index === activeIndex - 1) || (activeIndex === 0 && index === testimonials.length - 1);
            const isNext = (index === activeIndex + 1) || (activeIndex === testimonials.length - 1 && index === 0);
            
            let positionClass = 'hidden';
            if (isActive) {
              positionClass = 'z-30 scale-100 opacity-100';
            } else if (isPrev) {
              positionClass = 'z-20 -translate-x-[70%] scale-95 opacity-70';
            } else if (isNext) {
              positionClass = 'z-20 translate-x-[70%] scale-95 opacity-70';
            }
            
            return (
              <div
                key={testimonial.id}
                className={`glass-card absolute top-0 p-6 md:p-8 w-[90%] md:w-[80%] max-w-2xl transition-all duration-500 ${positionClass}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.author}</p>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-lg font-playfair italic">"{testimonial.content}"</p>
              </div>
            );
          })}
        </div>
        
        {/* Dot indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-fr-blue scale-125' : 'bg-fr-blue/30'
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
