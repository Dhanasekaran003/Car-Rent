import React from 'react';
import Header from './components/Header';
import PromoBanner from './components/PromoBanner';
import Hero from './components/Hero';
import UrgencyBanner from './components/UrgencyBanner';
import VehicleCategories from './components/VehicleCategories';
import FeaturedVehicles from './components/FeaturedVehicles';
import SeasonalBanner from './components/SeasonalBanner';
import Deals from './components/Deals';
import FeatureBanner from './components/FeatureBanner';
import Services from './components/Services';
import About from './components/About';
import TrustBanner from './components/TrustBanner';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookedCars from './components/BookedCars';

function App() {
  // Simple routing based on hash
  const currentPage = window.location.hash.slice(1) || 'home';

  const renderPage = () => {
    switch (currentPage) {
      case 'bookings':
        return <BookedCars />;
      default:
        return (
          <>
            {/* <PromoBanner /> */}
            <Hero />
            <UrgencyBanner />
            <VehicleCategories />
            <FeaturedVehicles />
            <SeasonalBanner />
            <Deals />
            <FeatureBanner />
            <Services />
            <About />
            <TrustBanner />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;