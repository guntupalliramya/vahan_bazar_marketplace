import React, { useState, useEffect } from 'react';
import { Fuel, Calculator, TrendingUp, Calendar } from 'lucide-react';

const FuelCalculator: React.FC = () => {
  const [monthlyDistance, setMonthlyDistance] = useState(1000);
  const [fuelPrice, setFuelPrice] = useState(100);
  const [vehicleMileage, setVehicleMileage] = useState(45);
  const [electricityRate, setElectricityRate] = useState(6);
  const [calculationType, setCalculationType] = useState<'petrol' | 'electric'>('petrol');
  
  const [results, setResults] = useState({
    dailyCost: 0,
    monthlyCost: 0,
    yearlyCost: 0,
    fuelConsumed: 0
  });

  const calculateCosts = () => {
    if (calculationType === 'petrol') {
      const fuelConsumedPerMonth = monthlyDistance / vehicleMileage;
      const monthlyCost = fuelConsumedPerMonth * fuelPrice;
      const dailyCost = monthlyCost / 30;
      const yearlyCost = monthlyCost * 12;

      setResults({
        dailyCost,
        monthlyCost,
        yearlyCost,
        fuelConsumed: fuelConsumedPerMonth
      });
    } else {
      // Electric calculation (assuming kWh consumption)
      const energyConsumedPerMonth = monthlyDistance / vehicleMileage; // km per kWh for EVs
      const monthlyCost = energyConsumedPerMonth * electricityRate;
      const dailyCost = monthlyCost / 30;
      const yearlyCost = monthlyCost * 12;

      setResults({
        dailyCost,
        monthlyCost,
        yearlyCost,
        fuelConsumed: energyConsumedPerMonth
      });
    }
  };

  useEffect(() => {
    calculateCosts();
  }, [monthlyDistance, fuelPrice, vehicleMileage, electricityRate, calculationType]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Fuel className="h-8 w-8 text-blue-700" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Fuel Cost Calculator
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Calculate your daily, monthly, and yearly fuel expenses for better budget planning
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="bg-blue-100 rounded-2xl p-8 border border-blue-200">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Calculation Details</h3>
          
          {/* Calculation Type */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Vehicle Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => setCalculationType('petrol')}
                className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                  calculationType === 'petrol'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-50 text-gray-700 hover:bg-blue-100'
                }`}
              >
                Petrol/Diesel
              </button>
              <button
                onClick={() => setCalculationType('electric')}
                className={`px-4 py-3 rounded-xl font-medium transition-colors ${
                  calculationType === 'electric'
                    ? 'bg-blue-600 text-white'
                    : 'bg-blue-50 text-gray-700 hover:bg-blue-100'
                }`}
              >
                Electric
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Monthly Distance */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Monthly Distance: {monthlyDistance} km
              </label>
              <input
                type="range"
                min="200"
                max="5000"
                step="50"
                value={monthlyDistance}
                onChange={(e) => setMonthlyDistance(parseInt(e.target.value))}
                className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>200 km</span>
                <span>5000 km</span>
              </div>
            </div>

            {calculationType === 'petrol' ? (
              <>
                {/* Fuel Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fuel Price: ₹{fuelPrice}/litre
                  </label>
                  <input
                    type="range"
                    min="80"
                    max="150"
                    step="1"
                    value={fuelPrice}
                    onChange={(e) => setFuelPrice(parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹80</span>
                    <span>₹150</span>
                  </div>
                </div>

                {/* Vehicle Mileage */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Mileage: {vehicleMileage} km/l
                  </label>
                  <input
                    type="range"
                    min="20"
                    max="100"
                    step="1"
                    value={vehicleMileage}
                    onChange={(e) => setVehicleMileage(parseInt(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>20 km/l</span>
                    <span>100 km/l</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Electricity Rate */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Electricity Rate: ₹{electricityRate}/kWh
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="15"
                    step="0.5"
                    value={electricityRate}
                    onChange={(e) => setElectricityRate(parseFloat(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹3</span>
                    <span>₹15</span>
                  </div>
                </div>

                {/* Vehicle Efficiency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vehicle Efficiency: {vehicleMileage} km/kWh
                  </label>
                  <input
                    type="range"
                    min="3"
                    max="8"
                    step="0.5"
                    value={vehicleMileage}
                    onChange={(e) => setVehicleMileage(parseFloat(e.target.value))}
                    className="w-full h-2 bg-blue-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>3 km/kWh</span>
                    <span>8 km/kWh</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Cost Cards */}
          <div className="grid gap-4">
            <div className="bg-blue-100 rounded-xl p-6 text-center border border-blue-200">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-green-100 rounded-full mb-3">
                <Calculator className="h-5 w-5 text-green-600" />
              </div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Daily Cost</h4>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(results.dailyCost)}
              </p>
            </div>

            <div className="bg-blue-100 rounded-xl p-6 text-center border border-blue-200">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mb-3">
                <TrendingUp className="h-5 w-5 text-blue-600" />
              </div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Monthly Cost</h4>
              <p className="text-3xl font-bold text-blue-600">
                {formatCurrency(results.monthlyCost)}
              </p>
            </div>

            <div className="bg-blue-100 rounded-xl p-6 text-center border border-blue-200">
              <div className="inline-flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full mb-3">
                <Calendar className="h-5 w-5 text-orange-600" />
              </div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">Yearly Cost</h4>
              <p className="text-3xl font-bold text-orange-600">
                {formatCurrency(results.yearlyCost)}
              </p>
            </div>
          </div>

          {/* Consumption Details */}
          <div className="bg-blue-100 rounded-xl p-6 border border-blue-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Consumption Details</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly Distance</span>
                <span className="font-semibold">{monthlyDistance} km</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">
                  {calculationType === 'petrol' ? 'Fuel Consumed' : 'Energy Consumed'}
                </span>
                <span className="font-semibold">
                  {results.fuelConsumed.toFixed(1)} {calculationType === 'petrol' ? 'L' : 'kWh'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">
                  {calculationType === 'petrol' ? 'Fuel Efficiency' : 'Energy Efficiency'}
                </span>
                <span className="font-semibold">
                  {vehicleMileage} km/{calculationType === 'petrol' ? 'L' : 'kWh'}
                </span>
              </div>
              <div className="border-t border-blue-300 pt-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Cost per km</span>
                  <span className="font-semibold">
                    {formatCurrency(results.monthlyCost / monthlyDistance)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Savings Comparison */}
      <div className="mt-12 bg-blue-100 rounded-2xl p-8 border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Cost Comparison</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">🏍️</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">High Efficiency</h4>
            <p className="text-gray-600">Vehicles with 60+ km/l mileage can save up to 40% on fuel costs</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Electric Advantage</h4>
            <p className="text-gray-600">Electric vehicles typically cost 70% less to run than petrol vehicles</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Smart Planning</h4>
            <p className="text-gray-600">Proper route planning can reduce fuel consumption by 15-20%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuelCalculator;