import React, { useState } from 'react';
import { ArrowLeft, Star, Fuel, Zap, Calendar, MapPin, Phone, Mail } from 'lucide-react';
import { type Vehicle } from '../data/vehicles';

interface VehicleDetailsProps {
  vehicle: Vehicle;
  onBack: () => void;
  onBookTestRide: () => void;
}

const VehicleDetails: React.FC<VehicleDetailsProps> = ({ vehicle, onBack, onBookTestRide }) => {
  const [selectedColor, setSelectedColor] = useState(vehicle.colors[0]);
  const [activeTab, setActiveTab] = useState('specifications');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!vehicle) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Browse
      </button>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="space-y-6">
          <div className="bg-blue-100 rounded-2xl p-8 border border-blue-200">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Color Selection */}
          <div className="bg-blue-100 rounded-2xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Colors</h3>
            <div className="flex gap-3">
              {vehicle.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all ${
                    selectedColor === color
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-blue-300 bg-blue-50 text-gray-700 hover:border-blue-400'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-blue-100 rounded-2xl p-6 border border-blue-200">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{vehicle.name}</h1>
                <p className="text-xl text-gray-600">{vehicle.brand}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-blue-700">{formatPrice(vehicle.price)}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-gray-600">{vehicle.rating} rating</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="text-center">
                <Fuel className="h-6 w-6 text-blue-600 mx-auto mb-1" />
                <p className="text-sm text-gray-600">Mileage</p>
                <p className="font-semibold">{vehicle.mileage} km/l</p>
              </div>
              <div className="text-center">
                <Zap className="h-6 w-6 text-orange-600 mx-auto mb-1" />
                <p className="text-sm text-gray-600">Power</p>
                <p className="font-semibold">{vehicle.power}</p>
              </div>
              <div className="text-center">
                <div className="h-6 w-6 bg-gray-400 rounded mx-auto mb-1"></div>
                <p className="text-sm text-gray-600">Top Speed</p>
                <p className="font-semibold">{vehicle.topSpeed} km/h</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={onBookTestRide}
              className="flex-1 bg-orange-600 hover:bg-orange-700 text-white py-3 px-6 rounded-xl font-semibold transition-colors"
            >
              Book Test Ride
            </button>
            <button className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-xl font-semibold transition-colors">
              Get EMI Quote
            </button>
          </div>

          {/* Showroom Info */}
          <div className="bg-blue-100 rounded-2xl p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Showroom Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium">{vehicle.showroom.name}</p>
                  <p className="text-gray-600 text-sm">{vehicle.showroom.location}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-600" />
                <p className="text-gray-700">{vehicle.showroom.contact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <div className="mt-12 bg-blue-100 rounded-2xl p-6 border border-blue-200">
        {/* Tab Navigation */}
        <div className="flex border-b border-blue-200 mb-6">
          {[
            { id: 'specifications', label: 'Specifications' },
            { id: 'features', label: 'Features' },
            { id: 'description', label: 'Description' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'specifications' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(vehicle.specifications).map(([key, value]) => (
              <div key={key} className="bg-blue-50 p-4 rounded-xl border border-blue-200">
                <p className="text-sm text-gray-600 capitalize mb-1">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </p>
                <p className="font-semibold text-gray-900">{value}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {vehicle.features.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-xl border border-blue-200 flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="font-medium text-gray-900">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <p className="text-gray-700 leading-relaxed">
              The {vehicle.name} is a premium {vehicle.category} from {vehicle.brand} that combines 
              performance, efficiency, and style. With its {vehicle.engine} engine delivering {vehicle.power} 
              of power and {vehicle.torque} of torque, this vehicle offers an excellent riding experience. 
              The fuel efficiency of {vehicle.mileage} km/l makes it an economical choice for daily commuting.
            </p>
            <br />
            <p className="text-gray-700 leading-relaxed">
              Featuring modern amenities and advanced safety features, this {vehicle.fuelType} powered 
              vehicle represents the perfect balance of technology and performance. Available in multiple 
              colors and backed by comprehensive warranty coverage.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleDetails;