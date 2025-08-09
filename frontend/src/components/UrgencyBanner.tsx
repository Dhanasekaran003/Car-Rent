import React, { useState, useEffect } from 'react';
import { Clock, AlertTriangle, Siren as Fire } from 'lucide-react';

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }; // Reset timer
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-500 text-white py-4 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-white bg-opacity-20 rounded-full p-3 animate-pulse">
              <Fire className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2" />
                LIMITED TIME OFFER!
              </h3>
              <p className="text-sm opacity-90">Book within the next 24 hours and save big!</p>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-75">HOURS</div>
              </div>
            </div>
            <div className="text-2xl font-bold">:</div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-75">MINS</div>
              </div>
            </div>
            <div className="text-2xl font-bold">:</div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg px-3 py-2 min-w-[60px]">
                <div className="text-2xl font-bold">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-xs opacity-75">SECS</div>
              </div>
            </div>
          </div>

          <button className="bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200 shadow-lg mt-4 md:mt-0">
            Claim Deal Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;