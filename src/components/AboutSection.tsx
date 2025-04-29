
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-fr-lightGray">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h2 className="heading-lg text-fr-blue mb-6">Ние създаваме трайни отношения</h2>
            <p className="text-lg mb-6">
              Изграждаме дълготрайни отношения, основани на доверие и грижа. 
              Всеки пациент е важен за нас и всяко посещение е комфортно и персонализирано.
            </p>
            <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-fr-blue/20">
              <div className="mb-4 md:mb-0">
                <p className="text-4xl font-bold text-fr-blue">98%</p>
                <p className="text-sm text-fr-darkText/70">Удовлетвореност</p>
              </div>
              <div className="mb-4 md:mb-0">
                <p className="text-4xl font-bold text-fr-blue">5,000+</p>
                <p className="text-sm text-fr-darkText/70">Трансформации</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-fr-blue">4.9★</p>
                <p className="text-sm text-fr-darkText/70">Рейтинг</p>
              </div>
            </div>
          </div>
          
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-2 h-64 animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop" 
                alt="Dental procedure" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="glass-card p-2 h-64 mt-8 md:mt-16 animate-scale-in" style={{animationDelay: '0.2s'}}>
              <img 
                src="https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?q=80&w=1974&auto=format&fit=crop" 
                alt="Smiling patient" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
