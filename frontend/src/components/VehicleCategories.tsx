import React, { useState } from 'react';
import { Car, Zap, Crown, Users, Luggage, Fuel } from 'lucide-react';
import BookingModal from './BookingModal';

const VehicleCategories = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const categories = [
    {
      icon: Car,
      title: 'Economy Cars',
      description: 'Budget-friendly options for everyday travel',
      features: ['4-5 passengers', 'Excellent fuel economy', 'Easy to drive'],
      price: 'From $29/day',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg'
    },
    {
      icon: Zap,
      title: 'Premium SUVs',
      description: 'Spacious and comfortable for family trips',
      features: ['5-7 passengers', 'All-wheel drive', 'Premium features'],
      price: 'From $89/day',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg'
    },
    {
      icon: Crown,
      title: 'Luxury Cars',
      description: 'Premium vehicles for special occasions',
      features: ['2-5 passengers', 'Luxury amenities', 'Premium brands'],
      price: 'From $149/day',
      image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg'
    }
  ];

  const handleViewCars = (category: any) => {
    // Create a sample vehicle for the category
    const sampleVehicle = {
      id: Math.random(),
      name: category.title.includes('Economy') ? 'Toyota Corolla' : 
            category.title.includes('SUV') ? 'Honda CR-V' : 'BMW 5 Series',
      type: category.title,
      price: parseInt(category.price.match(/\d+/)?.[0] || '50'),
      image: category.image,
      features: {
        passengers: category.features[0].includes('4-5') ? 5 : category.features[0].includes('5-7') ? 7 : 5,
        luggage: 3,
        fuel: 'Petrol'
      }
    };
    setSelectedCategory(sampleVehicle);
    setIsBookingModalOpen(true);
  };

  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Car</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From economy to luxury, find the perfect car for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{category.price}</span>
                    <button 
                      onClick={() => handleViewCars(category)}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      View Cars
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        vehicle={selectedCategory}
      />
    </section>
  );
};

export default VehicleCategories;