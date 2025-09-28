import React from 'react';
import { Bike, Calculator, MapPin, Calendar, GitCompare } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, onSectionChange }) => {
  const navigation = [
    { id: 'home', label: 'Home', icon: Bike },
    { id: 'browse', label: 'Browse Vehicles', icon: Bike },
    { id: 'comparison', label: 'Compare', icon: GitCompare },
    { id: 'emi-calculator', label: 'EMI Calculator', icon: Calculator },
    { id: 'fuel-calculator', label: 'Fuel Calculator', icon: Calculator },
    { id: 'showrooms', label: 'Showrooms', icon: MapPin }
  ];

  return (
    <header className="bg-blue-100 shadow-lg sticky top-0 z-50 border-b border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer"
            onClick={() => onSectionChange('home')}
          >
            <Bike className="h-8 w-8 text-blue-700 mr-2" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-orange-600 bg-clip-text text-transparent">
              Vahan Bazar
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navigation.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => onSectionChange(id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeSection === id
                    ? 'bg-blue-700 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <select
              value={activeSection}
              onChange={(e) => onSectionChange(e.target.value)}
              className="px-3 py-2 border border-blue-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
            >
              {navigation.map(({ id, label }) => (
                <option key={id} value={id}>{label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;