import React from 'react';
import { Shield, Clock, HeadphonesIcon, MapPin, CreditCard, Car } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'All cars come with comprehensive insurance coverage for your peace of mind'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for any assistance you might need'
    },
    {
      icon: HeadphonesIcon,
      title: 'Roadside Assistance',
      description: '24/7 roadside assistance and emergency support wherever you go'
    },
    {
      icon: MapPin,
      title: 'GPS Navigation',
      description: 'All cars equipped with modern GPS systems for easy navigation'
    },
    {
      icon: CreditCard,
      title: 'Flexible Payment',
      description: 'Multiple payment options including credit cards, digital wallets, and cash'
    },
    {
      icon: Car,
      title: 'Free Delivery',
      description: 'Complimentary car delivery and pickup within city limits'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose CarRent?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide exceptional service with a commitment to quality, safety, and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;