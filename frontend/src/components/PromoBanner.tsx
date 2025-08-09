import React from 'react';
import { Zap, Clock, Gift, Star } from 'lucide-react';

const PromoBanner = () => {
  return (
    <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto flex items-center justify-center space-x-8 text-center">
        <div className="flex items-center space-x-2 animate-pulse">
          <Zap className="h-5 w-5" />
          <span className="font-bold">FLASH SALE: 40% OFF</span>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <Clock className="h-4 w-4" />
          <span className="text-sm">Limited Time Offer - Ends Soon!</span>
        </div>
        <div className="hidden lg:flex items-center space-x-2">
          <Gift className="h-4 w-4" />
          <span className="text-sm">Free GPS & Insurance Included</span>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;