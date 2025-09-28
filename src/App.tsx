import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VehicleBrowse from './components/VehicleBrowse';
import VehicleDetails from './components/VehicleDetails';
import Comparison from './components/Comparison';
import EMICalculator from './components/EMICalculator';
import FuelCalculator from './components/FuelCalculator';
import TestRideBooking from './components/TestRideBooking';
import Showrooms from './components/Showrooms';
import UpcomingLaunches from './components/UpcomingLaunches';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null);

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <Hero onBrowseClick={() => setActiveSection('browse')} />
            <VehicleBrowse 
              onViewDetails={(vehicle) => {
                setSelectedVehicle(vehicle);
                setActiveSection('details');
              }}
            />
            <UpcomingLaunches />
          </>
        );
      case 'browse':
        return (
          <VehicleBrowse 
            onViewDetails={(vehicle) => {
              setSelectedVehicle(vehicle);
              setActiveSection('details');
            }}
          />
        );
      case 'details':
        return (
          <VehicleDetails 
            vehicle={selectedVehicle}
            onBack={() => setActiveSection('browse')}
            onBookTestRide={() => setActiveSection('test-ride')}
          />
        );
      case 'comparison':
        return <Comparison />;
      case 'emi-calculator':
        return <EMICalculator />;
      case 'fuel-calculator':
        return <FuelCalculator />;
      case 'test-ride':
        return <TestRideBooking onBack={() => setActiveSection('browse')} />;
      case 'showrooms':
        return <Showrooms />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-sky-50">
      <Header activeSection={activeSection} onSectionChange={setActiveSection} />
      <main>
        {renderActiveSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;