import React, { useState } from 'react';
import { Plus, X, AArrowDown as Vs } from 'lucide-react';
import { vehicles, type Vehicle } from '../data/vehicles';

const Comparison: React.FC = () => {
  const [selectedVehicles, setSelectedVehicles] = useState<Vehicle[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter(vehicle => !selectedVehicles.find(selected => selected.id === vehicle.id));

  const addVehicle = (vehicle: Vehicle) => {
    if (selectedVehicles.length < 3) {
      setSelectedVehicles([...selectedVehicles, vehicle]);
    }
  };

  const removeVehicle = (vehicleId: string) => {
    setSelectedVehicles(selectedVehicles.filter(v => v.id !== vehicleId));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const comparisonFields = [
    { key: 'price', label: 'Price', format: formatPrice },
    { key: 'engine', label: 'Engine' },
    { key: 'power', label: 'Power' },
    { key: 'torque', label: 'Torque' },
    { key: 'mileage', label: 'Mileage', suffix: ' km/l' },
    { key: 'topSpeed', label: 'Top Speed', suffix: ' km/h' },
    { key: 'fuelType', label: 'Fuel Type' },
    { key: 'rating', label: 'Rating', suffix: '/5' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Compare Vehicles
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Compare up to 3 vehicles side by side to make the best decision
        </p>
      </div>

      {/* Vehicle Selection */}
      {selectedVehicles.length < 3 && (
        <div className="bg-blue-100 rounded-2xl p-6 mb-8 border border-blue-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Add Vehicle to Compare ({selectedVehicles.length}/3)
          </h3>
          
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search vehicles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto">
            {filteredVehicles.map(vehicle => (
              <div
                key={vehicle.id}
                onClick={() => addVehicle(vehicle)}
                className="bg-blue-50 p-4 rounded-xl border border-blue-200 cursor-pointer hover:bg-blue-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{vehicle.name}</h4>
                    <p className="text-gray-600 text-sm">{vehicle.brand}</p>
                    <p className="text-blue-700 font-medium">{formatPrice(vehicle.price)}</p>
                  </div>
                  <Plus className="h-5 w-5 text-blue-600 ml-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comparison Table */}
      {selectedVehicles.length > 0 && (
        <div className="bg-blue-100 rounded-2xl shadow-xl overflow-hidden border border-blue-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-200">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Specification</th>
                  {selectedVehicles.map((vehicle, index) => (
                    <th key={vehicle.id} className="px-6 py-4 text-center relative">
                      {index > 0 && (
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
                          <Vs className="h-4 w-4 text-gray-500" />
                        </div>
                      )}
                      <div className="space-y-2">
                        <img
                          src={vehicle.image}
                          alt={vehicle.name}
                          className="w-24 h-16 object-cover rounded-lg mx-auto"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{vehicle.name}</h4>
                          <p className="text-gray-600 text-sm">{vehicle.brand}</p>
                        </div>
                        <button
                          onClick={() => removeVehicle(vehicle.id)}
                          className="text-red-600 hover:text-red-800 p-1"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonFields.map((field, index) => (
                  <tr key={field.key} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-blue-100'}>
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {field.label}
                    </td>
                    {selectedVehicles.map(vehicle => (
                      <td key={vehicle.id} className="px-6 py-4 text-center">
                        {field.format 
                          ? field.format(vehicle[field.key as keyof Vehicle] as number)
                          : `${vehicle[field.key as keyof Vehicle]}${field.suffix || ''}`
                        }
                      </td>
                    ))}
                  </tr>
                ))}
                
                {/* Features Comparison */}
                <tr className="bg-blue-50">
                  <td className="px-6 py-4 font-medium text-gray-900">Features</td>
                  {selectedVehicles.map(vehicle => (
                    <td key={vehicle.id} className="px-6 py-4">
                      <div className="space-y-1">
                        {vehicle.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                            {feature}
                          </div>
                        ))}
                        {vehicle.features.length > 3 && (
                          <div className="text-xs text-gray-500">
                            +{vehicle.features.length - 3} more
                          </div>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedVehicles.length === 0 && (
        <div className="text-center py-12 bg-blue-100 rounded-2xl border border-blue-200">
          <div className="text-gray-500 mb-4">
            <Plus className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">No vehicles selected</h3>
            <p>Add vehicles to start comparing specifications and features</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Comparison;