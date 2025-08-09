import React from 'react';
import { Smartphone, CreditCard, MapPin, Headphones, Zap, Shield } from 'lucide-react';

const FeatureBanner = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Book & manage rentals on-the-go'
    },
    {
      icon: CreditCard,
      title: 'Instant Booking',
      description: 'Reserve your car in under 2 minutes'
    },
    {
      icon: MapPin,
      title: 'Multiple Locations',
      description: '50+ pickup points nationwide'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock customer service'
    },
    {
      icon: Zap,
      title: 'Quick Delivery',
      description: 'Free car delivery within 30 minutes'
    },
    {
      icon: Shield,
      title: 'Full Insurance',
      description: 'Comprehensive coverage included'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">CarRent</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of car rentals with our innovative features and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group hover:scale-105 transform transition-transform"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Hit the Road?</h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust CarRent for their travel needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                Start Booking Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Download App
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBanner;