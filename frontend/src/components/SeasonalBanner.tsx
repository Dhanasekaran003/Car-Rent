import React from 'react';
import { Snowflake, Sun, Leaf, Flower } from 'lucide-react';

const SeasonalBanner = () => {
  // Get current season based on month
  const getCurrentSeason = () => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
  };

  const season = getCurrentSeason();
  
  const seasonConfig = {
    spring: {
      icon: Flower,
      gradient: 'from-green-400 to-blue-500',
      title: 'Spring Adventure Awaits',
      subtitle: 'Perfect weather for road trips! Book now and save 25%',
      code: 'SPRING25'
    },
    summer: {
      icon: Sun,
      gradient: 'from-yellow-400 to-orange-500',
      title: 'Summer Road Trip Special',
      subtitle: 'Beat the heat with our premium AC cars! 30% off all bookings',
      code: 'SUMMER30'
    },
    fall: {
      icon: Leaf,
      gradient: 'from-orange-400 to-red-500',
      title: 'Fall Foliage Tours',
      subtitle: 'Scenic drives made perfect! Special autumn rates available',
      code: 'AUTUMN20'
    },
    winter: {
      icon: Snowflake,
      gradient: 'from-blue-400 to-purple-500',
      title: 'Winter Getaway Deals',
      subtitle: 'All-wheel drive vehicles ready! Warm up with hot deals',
      code: 'WINTER35'
    }
  };

  const config = seasonConfig[season];
  const IconComponent = config.icon;

  return (
    <div className={`bg-gradient-to-r ${config.gradient} text-white py-16 px-4 relative overflow-hidden`}>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
        <IconComponent className="w-full h-full" />
      </div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center mb-4">
          <IconComponent className="h-12 w-12 mr-4" />
          <h2 className="text-4xl md:text-5xl font-bold">{config.title}</h2>
        </div>
        <p className="text-xl md:text-2xl mb-8 opacity-90">{config.subtitle}</p>
        <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 inline-block">
          <p className="text-sm mb-2">Use promo code:</p>
          <p className="text-3xl font-bold font-mono">{config.code}</p>
        </div>
        <div className="mt-8">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Book Now & Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeasonalBanner;