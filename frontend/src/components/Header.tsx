import React, { useState } from 'react';
import { Car, Menu, X } from 'lucide-react';
import BookingModal from './BookingModal';
import logo  from '../assets/logo-4.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2 w-[150px]">
            <img src={logo} alt="" className='rounded' />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Home
            </a>
            <a href="#cars" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Cars
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#deals" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Deals
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              Contact
            </a>
            <a href="#bookings" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">
              My Bookings
            </a>
          </nav>

          <button 
            onClick={handleBookNow}
            className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Book Now
          </button>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Home
              </a>
              <a href="#cars" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Cars
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Services
              </a>
              <a href="#deals" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Deals
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                Contact
              </a>
              <a href="#bookings" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
                My Bookings
              </a>
              <button 
                onClick={handleBookNow}
                className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        vehicle={{
          id: 1,
          name: 'Quick Booking',
          type: 'Economy',
          price: 45,
          image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
          features: { passengers: 5, luggage: 3, fuel: 'Petrol' }
        }}
      />
    </header>
  );
};

export default Header;