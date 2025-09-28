import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Fuel, Zap, Eye } from 'lucide-react';
import { vehicles, brands, type Vehicle } from '../data/vehicles';

interface VehicleBrowseProps {
  onViewDetails: (vehicle: Vehicle) => void;
}

const VehicleBrowse: React.FC<VehicleBrowseProps> = ({ onViewDetails }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [selectedFuelType, setSelectedFuelType] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500000]);
  const [sortBy, setSortBy] = useState<string>('name');

  const filteredVehicles = useMemo(() => {
    let filtered = vehicles.filter(vehicle => {
      const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          vehicle.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || vehicle.category === selectedCategory;
      const matchesBrand = selectedBrand === 'all' || vehicle.brand === selectedBrand;
      const matchesFuelType = selectedFuelType === 'all' || vehicle.fuelType === selectedFuelType;
      const matchesPrice = vehicle.price >= priceRange[0] && vehicle.price <= priceRange[1];

      return matchesSearch && matchesCategory && matchesBrand && matchesFuelType && matchesPrice;
    });

    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'mileage':
          return b.mileage - a.mileage;
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedBrand, selectedFuelType, priceRange, sortBy]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Browse Our Collection
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the perfect two-wheeler from our extensive collection of bikes, scooters, and EVs
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-blue-100 rounded-2xl shadow-xl p-6 mb-8 border border-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Search */}
          <div className="lg:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search vehicles or brands..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
          >
            <option value="all">All Categories</option>
            <option value="bike">Bikes</option>
            <option value="scooter">Scooters</option>
            <option value="ev">Electric</option>
          </select>

          {/* Brand Filter */}
          <select
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
            className="px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
          >
            <option value="all">All Brands</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>

          {/* Fuel Type Filter */}
          <select
            value={selectedFuelType}
            onChange={(e) => setSelectedFuelType(e.target.value)}
            className="px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
          >
            <option value="all">All Fuel Types</option>
            <option value="petrol">Petrol</option>
            <option value="electric">Electric</option>
            <option value="diesel">Diesel</option>
          </select>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
          >
            <option value="name">Sort by Name</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
            <option value="mileage">Best Mileage</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range: {formatPrice(priceRange[0])} - {formatPrice(priceRange[1])}
          </label>
          <div className="flex gap-4">
            <input
              type="range"
              min="0"
              max="500000"
              step="5000"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
              className="flex-1"
            />
            <input
              type="range"
              min="0"
              max="500000"
              step="5000"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
              className="flex-1"
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          Showing {filteredVehicles.length} vehicles
        </p>
      </div>

      {/* Vehicle Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            className="bg-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200"
          >
            <div className="relative">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {vehicle.category.toUpperCase()}
              </div>
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <Star className="h-3 w-3 fill-current" />
                {vehicle.rating}
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{vehicle.name}</h3>
                <p className="text-gray-600">{vehicle.brand}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Fuel className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">{vehicle.mileage} km/l</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-600" />
                  <span className="text-sm text-gray-600">{vehicle.power}</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-bold text-blue-700">
                    {formatPrice(vehicle.price)}
                  </p>
                </div>
                <button
                  onClick={() => onViewDetails(vehicle)}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl font-medium transition-colors duration-200 flex items-center gap-2"
                >
                  <Eye className="h-4 w-4" />
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVehicles.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 mb-4">
            <Filter className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">No vehicles found</h3>
            <p>Try adjusting your filters to see more results</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default VehicleBrowse;