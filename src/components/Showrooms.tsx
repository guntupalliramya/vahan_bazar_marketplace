import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Star, Navigation } from 'lucide-react';
import { showrooms } from '../data/vehicles';

const Showrooms: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const cities = ['all', 'Delhi', 'Gurgaon', 'Noida'];

  const filteredShowrooms = selectedCity === 'all' 
    ? showrooms 
    : showrooms.filter(showroom => 
        showroom.address.toLowerCase().includes(selectedCity.toLowerCase())
      );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Showrooms
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Visit our premium showrooms to experience the latest two-wheelers and get expert guidance
        </p>
      </div>

      {/* City Filter */}
      <div className="bg-blue-100 rounded-2xl p-6 mb-8 border border-blue-200">
        <div className="flex flex-wrap gap-3 justify-center">
          <span className="text-gray-700 font-medium">Filter by City:</span>
          {cities.map(city => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCity === city
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-50 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {city === 'all' ? 'All Cities' : city}
            </button>
          ))}
        </div>
      </div>

      {/* Showrooms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredShowrooms.map((showroom) => (
          <div
            key={showroom.id}
            className="bg-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={showroom.image}
                alt={showroom.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="h-3 w-3 fill-current" />
                4.8
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{showroom.name}</h3>
              
              {/* Address */}
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">{showroom.address}</p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-green-600" />
                  <span className="text-gray-700">{showroom.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">{showroom.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-orange-600" />
                  <span className="text-gray-700">{showroom.timing}</span>
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Available Brands</h4>
                <div className="flex flex-wrap gap-2">
                  {showroom.brands.map((brand, index) => (
                    <span
                      key={index}
                      className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-medium transition-colors text-sm">
                  Visit Showroom
                </button>
                <button className="flex items-center justify-center w-12 h-10 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-xl transition-colors">
                  <Navigation className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results */}
      {filteredShowrooms.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <MapPin className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">No showrooms found</h3>
            <p>Try selecting a different city to see more showrooms</p>
          </div>
        </div>
      )}

      {/* Contact CTA */}
      <div className="mt-16 bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">Can't find a showroom near you?</h3>
        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
          We're expanding rapidly! Contact us to learn about upcoming locations or to schedule a home visit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
            Request Home Visit
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-xl font-semibold transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default Showrooms;