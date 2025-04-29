
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight } from 'lucide-react';
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the form data to a server
    console.log(formData);
    toast.success("Съобщението е изпратено успешно!");
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="section-padding bg-fr-lightGray">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="heading-lg text-fr-blue mb-6">Свържете се с нас</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Име</label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full glass border-fr-blue/20 focus:border-fr-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Имейл</label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full glass border-fr-blue/20 focus:border-fr-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">Телефон</label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full glass border-fr-blue/20 focus:border-fr-blue"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Съобщение</label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full glass border-fr-blue/20 focus:border-fr-blue"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-fr-blue hover:bg-fr-blue/80 text-white"
              >
                Изпратете <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
          
          {/* Contact Info and Map */}
          <div className="glass-card p-6 lg:p-8">
            <h3 className="heading-sm mb-6">Информация за контакт</h3>
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="font-semibold">Телефон:</p>
                <p className="text-fr-darkText/80">+359 888 123 456</p>
              </div>
              <div>
                <p className="font-semibold">Адрес:</p>
                <p className="text-fr-darkText/80">Център, бул. „Македония" 56, 7500 Силистра</p>
              </div>
              <div>
                <p className="font-semibold">Работно време:</p>
                <p className="text-fr-darkText/80">Понеделник – Петък, 08:00 – 19:00</p>
              </div>
            </div>
            
            <div className="w-full h-64 rounded-lg overflow-hidden border border-fr-blue/20">
              <iframe 
                title="FR Smile location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46061.15354400949!2d27.228603056592843!3d44.11690074326771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40af8452be61c315%3A0x572c9aaef48e9c7!2z0KHQuNC70LjRgdGC0YDQsCwg0JHRitC70LPQsNGA0LjRjw!5e0!3m2!1sru!2sus!4v1719706979579!5m2!1sru!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
