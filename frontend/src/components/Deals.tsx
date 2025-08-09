import React from 'react';
import { Percent, Clock, Star, Calendar } from 'lucide-react';

const Deals = () => {
  const deals = [
    {
      id: 1,
      title: 'Weekend Special',
      discount: '25% OFF',
      description: 'Book any car for weekend trips and save big',
      validUntil: 'Valid until Dec 31, 2025',
      code: 'WEEKEND25',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      category: 'All Categories'
    },
    {
      id: 2,
      title: 'Long Term Rental',
      discount: '40% OFF',
      description: 'Monthly rentals with exclusive discounts',
      validUntil: 'Valid for bookings over 30 days',
      code: 'MONTHLY40',
      image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg',
      category: 'Extended Rentals'
    },
    {
      id: 3,
      title: 'First Time Customer',
      discount: '15% OFF',
      description: 'Welcome bonus for new customers',
      validUntil: 'Valid for first booking only',
      code: 'WELCOME15',
      image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
      category: 'New Customers'
    },
    {
      id: 4,
      title: 'Luxury Experience',
      discount: '30% OFF',
      description: 'Premium cars at unbeatable prices',
      validUntil: 'Limited time offer',
      code: 'LUXURY30',
      image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
      category: 'Luxury Cars'
    }
  ];

  return (
    <section id="deals" className="py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Special Deals & Offers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Save more on your car rentals with our exclusive deals and promotional offers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                  {deal.discount}
                </div>
                <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                  {deal.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{deal.title}</h3>
                <p className="text-gray-600 mb-4">{deal.description}</p>
                
                <div className="flex items-center space-x-2 mb-4 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{deal.validUntil}</span>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Promo Code:</span>
                    <span className="font-mono font-bold text-blue-600 text-lg">{deal.code}</span>
                  </div>
                </div>

                <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-medium">
                  Claim This Deal
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-8 w-8 text-yellow-400 fill-current" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Loyalty Program</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Earn points with every rental and unlock exclusive discounts, priority booking, and special member-only deals.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
            Join Now - It's Free!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Deals;