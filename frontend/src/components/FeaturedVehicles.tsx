import React, { useState } from 'react';
import { Star, Users, Luggage, Fuel, MapPin, Zap } from 'lucide-react';
import BookingModal from './BookingModal';

const FeaturedVehicles = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const vehicles = [
    {
      id: 1,
      name: 'Tesla Model 3',
      type: 'Electric Sedan',
      image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg',
      rating: 4.9,
      reviews: 156,
      price: 89,
      features: {
        passengers: 5,
        luggage: 2,
        fuel: 'Electric'
      },
      location: 'Downtown',
      available: true
    },
    {
      id: 2,
      name: 'BMW 3 Series',
      type: 'Luxury Sedan',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
      rating: 4.8,
      reviews: 89,
      price: 125,
      features: {
        passengers: 5,
        luggage: 3,
        fuel: 'Diesel'
      },
      location: 'Airport',
      available: true
    },
    {
      id: 3,
      name: 'Toyota Camry',
      type: 'Midsize Sedan',
      image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg',
      rating: 4.7,
      reviews: 203,
      price: 65,
      features: {
        passengers: 5,
        luggage: 4,
        fuel: 'Petrol'
      },
      location: 'City Center',
      available: false
    },
    {
      id: 4,
      name: 'BMW X5',
      type: 'SUV',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
      rating: 4.9,
      reviews: 124,
      price: 95,
      features: {
        passengers: 7,
        luggage: 5,
        fuel: 'Petrol'
      },
      location: 'Mall Area',
      available: true
    }
  ];

  const handleBookNow = (vehicle: any) => {
    setSelectedVehicle(vehicle);
    setIsBookingModalOpen(true);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Cars</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Handpicked premium cars for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {vehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    vehicle.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {vehicle.available ? 'Available' : 'Booked'}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
                    <p className="text-gray-600">{vehicle.type}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{vehicle.rating}</span>
                    <span className="text-sm text-gray-500">({vehicle.reviews})</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{vehicle.features.passengers}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Luggage className="h-4 w-4" />
                    <span>{vehicle.features.luggage}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Fuel className="h-4 w-4" />
                    <span>{vehicle.features.fuel}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 mb-4 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{vehicle.location}</span>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-blue-600">${vehicle.price}</span>
                    <span className="text-gray-600">/day</span>
                  </div>
                  <button 
                    className={`px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      vehicle.available
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!vehicle.available}
                    onClick={() => vehicle.available && handleBookNow(vehicle)}
                  >
                    {vehicle.available ? 'Book Now' : 'Unavailable'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            View All Cars
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        vehicle={selectedVehicle}
      />
    </section>
  );
};

export default FeaturedVehicles;