
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-fr-lightGray to-white section-divider">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-fr-blue/10 text-fr-blue text-sm font-medium mb-3">
            За Нас
          </span>
          <h2 className="heading-lg text-fr-blue">Вашите доверени партньори за дентална грижа</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h3 className="heading-md text-fr-blue mb-6">Ние създаваме трайни отношения</h3>
            <p className="text-lg mb-8">
              Изграждаме дълготрайни отношения, основани на доверие и грижа. 
              Всеки пациент е важен за нас и всяко посещение е комфортно и персонализирано.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-fr-blue/20">
              <div className="text-center p-4 glass-card">
                <p className="text-4xl font-bold text-fr-blue mb-2">98%</p>
                <p className="text-sm text-fr-darkText/70">Удовлетвореност</p>
              </div>
              <div className="text-center p-4 glass-card">
                <p className="text-4xl font-bold text-fr-blue mb-2">5,000+</p>
                <p className="text-sm text-fr-darkText/70">Трансформации</p>
              </div>
              <div className="text-center p-4 glass-card">
                <p className="text-4xl font-bold text-fr-blue mb-2">4.9★</p>
                <p className="text-sm text-fr-darkText/70">Рейтинг</p>
              </div>
            </div>
          </div>
          
          {/* Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-2 h-64 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1770&auto=format&fit=crop" 
                alt="Dental procedure" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="glass-card p-2 h-64 mt-8 md:mt-16 animate-float" style={{animationDelay: '0.3s'}}>
              <img 
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
