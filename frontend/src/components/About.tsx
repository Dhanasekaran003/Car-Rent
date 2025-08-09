import React from 'react';
import { Award, Users, Car, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Car, number: '500+', label: 'Vehicles' },
    { icon: Users, number: '10K+', label: 'Happy Customers' },
    { icon: MapPin, number: '25+', label: 'Locations' },
    { icon: Award, number: '5', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About CarRent</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a passion for automotive excellence, CarRent has been providing premium car rental services for individuals, families, and businesses across the region.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our commitment to quality service, competitive pricing, and customer satisfaction has made us a trusted partner for thousands of drivers. Whether you need an economy car for daily commuting or a luxury vehicle for special occasions, we have the perfect car for your needs.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg"
              alt="About CarRent"
              className="rounded-xl shadow-lg w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">Trusted by</div>
              <div className="text-3xl font-bold">10,000+ customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;