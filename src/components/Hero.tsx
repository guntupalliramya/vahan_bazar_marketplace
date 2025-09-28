import React from 'react';
import { ArrowRight, Star, Zap, Shield, Headphones } from 'lucide-react';

interface HeroProps {
  onBrowseClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBrowseClick }) => {
  const stats = [
    { icon: Star, value: '50K+', label: 'Happy Customers' },
    { icon: Zap, value: '500+', label: 'Vehicle Models' },
    { icon: Shield, value: '100%', label: 'Verified Dealers' },
    { icon: Headphones, value: '24/7', label: 'Support' }
  ];

  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,0 100,0 80,100 0,80" fill="currentColor" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Find Your Perfect
                <span className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Two-Wheeler
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Buy and sell bikes in seconds. The ultimate marketplace for dealerships 
                to manage inventory and grow their business effortlessly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onBrowseClick}
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
              >
                Browse Vehicles
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
              {stats.map(({ icon: Icon, value, label }, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mb-2">
                    <Icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="text-2xl font-bold">{value}</div>
                  <div className="text-blue-200 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <img
                src="https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Featured Motorcycle"
                className="w-full h-80 object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white px-6 py-3 rounded-xl shadow-xl">
                <div className="text-sm font-medium">Starting from</div>
                <div className="text-2xl font-bold">₹75,000</div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
              ✅ Verified Dealers
            </div>
            <div className="absolute bottom-12 -left-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
              🚀 Fast Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;