import React, { useState } from 'react';
import { Search, MapPin, Calendar } from 'lucide-react';
import BookingModal from './BookingModal';

const Hero = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [searchData, setSearchData] = useState({
    location: '',
    pickupDate: '',
    returnDate: '',
    vehicleType: 'car'
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Create a sample vehicle based on search
    const sampleVehicle = {
      id: 1,
      name: searchData.vehicleType === 'luxury' ? 'BMW 7 Series' : 
            searchData.vehicleType === 'suv' ? 'Toyota RAV4' : 'Honda Civic',
      type: searchData.vehicleType.charAt(0).toUpperCase() + searchData.vehicleType.slice(1),
      price: searchData.vehicleType === 'luxury' ? 150 : 
             searchData.vehicleType === 'suv' ? 85 : 45,
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      features: {
        passengers: searchData.vehicleType === 'suv' ? 7 : 5,
        luggage: searchData.vehicleType === 'luxury' ? 4 : 3,
        fuel: 'Petrol'
      }
    };
    setIsBookingModalOpen(true);
  };

  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Drive Your <span className="text-orange-400">Dreams</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Premium car rentals for every occasion. From economy to luxury, find the perfect vehicle for your journey.
        </p>

        <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 max-w-5xl mx-auto">
          <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
            <div className="lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Car Category</label>
              <select
                value={searchData.vehicleType}
                onChange={(e) => setSearchData({...searchData, vehicleType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="economy">Economy</option>
                <option value="compact">Compact</option>
                <option value="midsize">Midsize</option>
                <option value="fullsize">Full Size</option>
                <option value="luxury">Luxury</option>
                <option value="suv">SUV</option>
              </select>
            </div>

            <div className="lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Pick-up location"
                  value={searchData.location}
                  onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Pick-up Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={searchData.pickupDate}
                  onChange={(e) => setSearchData({...searchData, pickupDate: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="date"
                  value={searchData.returnDate}
                  onChange={(e) => setSearchData({...searchData, returnDate: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="lg:col-span-1">
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2 font-medium"
              >
                <Search className="h-5 w-5" />
                <span>Search</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        vehicle={{
          id: 1,
          name: 'Selected Vehicle',
          type: 'Economy',
          price: 45,
          image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
          features: { passengers: 5, luggage: 3, fuel: 'Petrol' }
        }}
      />
    </section>
  );
};

export default Hero;