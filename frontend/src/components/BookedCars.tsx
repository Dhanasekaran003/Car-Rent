import React, { useState } from 'react';
import { 
  Car, 
  Calendar, 
  MapPin, 
  Clock, 
  User, 
  CreditCard, 
  Phone, 
  Mail,
  Edit3,
  X,
  CheckCircle,
  AlertCircle,
  Download,
  MessageSquare,
  Navigation,
  Shield
} from 'lucide-react';

const BookedCars = () => {
  const [activeTab, setActiveTab] = useState('current');
  const [selectedBooking, setSelectedBooking] = useState<any>(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Sample booking data
  const bookings = {
    current: [
      {
        id: 'CR-ABC123456',
        vehicle: {
          name: 'Tesla Model 3',
          type: 'Electric Sedan',
          image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg',
          licensePlate: 'TES-2024'
        },
        rental: {
          pickupLocation: 'Downtown Office - 123 Main St',
          dropoffLocation: 'Downtown Office - 123 Main St',
          pickupDate: '2025-01-15',
          pickupTime: '10:00',
          returnDate: '2025-01-18',
          returnTime: '10:00',
          duration: '3 days'
        },
        customer: {
          name: 'John Doe',
          email: 'john.doe@email.com',
          phone: '+1 (555) 123-4567'
        },
        pricing: {
          dailyRate: 89,
          totalDays: 3,
          subtotal: 267,
          insurance: 45,
          gps: 30,
          total: 342
        },
        status: 'confirmed',
        bookingDate: '2025-01-10',
        extras: ['Full Insurance', 'GPS Navigation']
      },
      {
        id: 'CR-DEF789012',
        vehicle: {
          name: 'BMW X5',
          type: 'Premium SUV',
          image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
          licensePlate: 'BMW-2024'
        },
        rental: {
          pickupLocation: 'Airport Terminal - Gate A',
          dropoffLocation: 'City Center - Mall Plaza',
          pickupDate: '2025-01-20',
          pickupTime: '14:00',
          returnDate: '2025-01-25',
          returnTime: '12:00',
          duration: '5 days'
        },
        customer: {
          name: 'John Doe',
          email: 'john.doe@email.com',
          phone: '+1 (555) 123-4567'
        },
        pricing: {
          dailyRate: 95,
          totalDays: 5,
          subtotal: 475,
          insurance: 75,
          childSeat: 40,
          total: 590
        },
        status: 'upcoming',
        bookingDate: '2025-01-12',
        extras: ['Full Insurance', 'Child Safety Seat']
      }
    ],
    past: [
      {
        id: 'CR-GHI345678',
        vehicle: {
          name: 'Toyota Camry',
          type: 'Midsize Sedan',
          image: 'https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg',
          licensePlate: 'TOY-2023'
        },
        rental: {
          pickupLocation: 'Downtown Office - 123 Main St',
          dropoffLocation: 'Downtown Office - 123 Main St',
          pickupDate: '2024-12-15',
          pickupTime: '09:00',
          returnDate: '2024-12-20',
          returnTime: '09:00',
          duration: '5 days'
        },
        customer: {
          name: 'John Doe',
          email: 'john.doe@email.com',
          phone: '+1 (555) 123-4567'
        },
        pricing: {
          dailyRate: 65,
          totalDays: 5,
          subtotal: 325,
          insurance: 75,
          total: 400
        },
        status: 'completed',
        bookingDate: '2024-12-10',
        extras: ['Full Insurance'],
        rating: 5
      }
    ]
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4" />;
      case 'upcoming':
        return <Clock className="h-4 w-4" />;
      case 'completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'cancelled':
        return <X className="h-4 w-4" />;
      default:
        return <AlertCircle className="h-4 w-4" />;
    }
  };

  const handleCancelBooking = (bookingId: string) => {
    console.log('Cancelling booking:', bookingId);
    setShowCancelModal(false);
    // Here you would typically make an API call to cancel the booking
  };

  const BookingCard = ({ booking }: { booking: any }) => (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-4">
            <img
              src={booking.vehicle.image}
              alt={booking.vehicle.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">{booking.vehicle.name}</h3>
              <p className="text-gray-600">{booking.vehicle.type}</p>
              <p className="text-sm text-gray-500">License: {booking.vehicle.licensePlate}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getStatusColor(booking.status)}`}>
              {getStatusIcon(booking.status)}
              <span className="capitalize">{booking.status}</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-blue-600" />
              Rental Period
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Pick-up:</span>
                <span className="text-gray-900">{booking.rental.pickupDate} at {booking.rental.pickupTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Return:</span>
                <span className="text-gray-900">{booking.rental.returnDate} at {booking.rental.returnTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Duration:</span>
                <span className="text-gray-900 font-medium">{booking.rental.duration}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-blue-600" />
              Locations
            </h4>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-gray-600">Pick-up:</span>
                <p className="text-gray-900">{booking.rental.pickupLocation}</p>
              </div>
              <div>
                <span className="text-gray-600">Drop-off:</span>
                <p className="text-gray-900">{booking.rental.dropoffLocation}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
              <CreditCard className="h-4 w-4 mr-2 text-blue-600" />
              Pricing
            </h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Daily Rate:</span>
                <span className="text-gray-900">${booking.pricing.dailyRate}/day</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal ({booking.pricing.totalDays} days):</span>
                <span className="text-gray-900">${booking.pricing.subtotal}</span>
              </div>
              {booking.pricing.insurance && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Insurance:</span>
                  <span className="text-gray-900">${booking.pricing.insurance}</span>
                </div>
              )}
              {booking.pricing.gps && (
                <div className="flex justify-between">
                  <span className="text-gray-600">GPS:</span>
                  <span className="text-gray-900">${booking.pricing.gps}</span>
                </div>
              )}
              {booking.pricing.childSeat && (
                <div className="flex justify-between">
                  <span className="text-gray-600">Child Seat:</span>
                  <span className="text-gray-900">${booking.pricing.childSeat}</span>
                </div>
              )}
              <div className="border-t border-gray-200 pt-1 mt-2">
                <div className="flex justify-between font-semibold">
                  <span className="text-gray-900">Total:</span>
                  <span className="text-blue-600">${booking.pricing.total}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Booking Details</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Booking ID:</span>
                <span className="text-gray-900 font-mono">{booking.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Booked on:</span>
                <span className="text-gray-900">{booking.bookingDate}</span>
              </div>
              {booking.extras.length > 0 && (
                <div>
                  <span className="text-gray-600">Extras:</span>
                  <div className="mt-1">
                    {booking.extras.map((extra, index) => (
                      <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mr-2 mb-1">
                        {extra}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
          <button
            onClick={() => setSelectedBooking(booking)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            <Edit3 className="h-4 w-4" />
            <span>View Details</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
            <Download className="h-4 w-4" />
            <span>Download Receipt</span>
          </button>

          {booking.status === 'confirmed' && (
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200">
              <Navigation className="h-4 w-4" />
              <span>Get Directions</span>
            </button>
          )}

          {(booking.status === 'confirmed' || booking.status === 'upcoming') && (
            <button
              onClick={() => setShowCancelModal(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200"
            >
              <X className="h-4 w-4" />
              <span>Cancel Booking</span>
            </button>
          )}

          <button className="flex items-center space-x-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors duration-200">
            <MessageSquare className="h-4 w-4" />
            <span>Contact Support</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">Manage your car rental bookings and view rental history</p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button
                onClick={() => setActiveTab('current')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'current'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Current & Upcoming ({bookings.current.length})
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === 'past'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Past Rentals ({bookings.past.length})
              </button>
            </nav>
          </div>
        </div>

        {/* Booking Cards */}
        <div className="space-y-6">
          {activeTab === 'current' && bookings.current.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
          {activeTab === 'past' && bookings.past.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}
        </div>

        {/* Empty State */}
        {((activeTab === 'current' && bookings.current.length === 0) ||
          (activeTab === 'past' && bookings.past.length === 0)) && (
          <div className="text-center py-12">
            <Car className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No {activeTab === 'current' ? 'current' : 'past'} bookings
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === 'current' 
                ? "You don't have any active or upcoming bookings."
                : "You haven't completed any rentals yet."
              }
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Book a Car Now
            </button>
          </div>
        )}
      </div>

      {/* Cancel Booking Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-100 rounded-full p-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Cancel Booking</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to cancel this booking? This action cannot be undone. 
              Cancellation fees may apply based on our cancellation policy.
            </p>
            <div className="flex space-x-3">
              <button
                onClick={() => setShowCancelModal(false)}
                className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Keep Booking
              </button>
              <button
                onClick={() => handleCancelBooking('booking-id')}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Details Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">Booking Details</h2>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedBooking.vehicle.image}
                    alt={selectedBooking.vehicle.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{selectedBooking.vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{selectedBooking.vehicle.type}</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Customer Information</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span>{selectedBooking.customer.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>{selectedBooking.customer.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span>{selectedBooking.customer.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Important Information</h4>
                    <div className="bg-blue-50 rounded-lg p-4 space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-blue-600" />
                        <span>Valid driver's license required</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span>Arrive 15 minutes before pickup time</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CreditCard className="h-4 w-4 text-blue-600" />
                        <span>Security deposit will be held on card</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookedCars;