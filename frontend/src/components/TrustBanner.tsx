import React from 'react';
import { Shield, Award, Users, Star, CheckCircle } from 'lucide-react';

const TrustBanner = () => {
  const trustPoints = [
    {
      icon: Shield,
      title: '100% Secure',
      subtitle: 'SSL Encrypted'
    },
    {
      icon: Award,
      title: '#1 Rated',
      subtitle: 'Car Rental Service'
    },
    {
      icon: Users,
      title: '50K+ Happy',
      subtitle: 'Customers'
    },
    {
      icon: Star,
      title: '4.9/5 Rating',
      subtitle: 'Customer Reviews'
    }
  ];

  return (
    <div className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">Trusted by Thousands</h3>
          <p className="text-gray-300">Join the community of satisfied customers</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-blue-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-lg mb-1">{point.title}</h4>
                <p className="text-gray-400 text-sm">{point.subtitle}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle className="h-8 w-8 mr-3" />
            <h3 className="text-2xl font-bold">Satisfaction Guaranteed</h3>
          </div>
          <p className="text-lg mb-6 opacity-90">
            Not happy with your rental? We'll make it right or your money back!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200">
              Learn More
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBanner;