import React from 'react';
import { Calendar, Star, Zap, Bell } from 'lucide-react';
import { upcomingLaunches } from '../data/vehicles';

const UpcomingLaunches: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Calendar className="h-8 w-8 text-blue-700" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Upcoming Launches
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Be the first to experience the latest two-wheelers launching soon
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {upcomingLaunches.map((launch) => (
          <div
            key={launch.id}
            className="bg-blue-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200 relative overflow-hidden"
          >
            {/* Coming Soon Badge */}
            <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
              Coming Soon
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
              {launch.category.toUpperCase()}
            </div>

            {/* Image with Overlay */}
            <div className="relative">
              <img
                src={launch.image}
                alt={launch.name}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-2xl"></div>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{launch.name}</h3>
                <p className="text-gray-600 font-medium">{launch.brand}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-blue-50 rounded-xl p-3 border border-blue-200">
                  <Calendar className="h-5 w-5 text-blue-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Launch Date</p>
                  <p className="font-semibold text-sm">{launch.launchDate}</p>
                </div>
                <div className="text-center bg-blue-50 rounded-xl p-3 border border-blue-200">
                  <Zap className="h-5 w-5 text-green-600 mx-auto mb-1" />
                  <p className="text-xs text-gray-600">Expected Price</p>
                  <p className="font-semibold text-sm text-green-600">{launch.expectedPrice}</p>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-medium transition-colors flex items-center justify-center gap-2">
                <Bell className="h-4 w-4" />
                Get Notified
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Never Miss a Launch
          </h3>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to get notifications about new vehicle launches, exclusive previews, and early booking opportunities
          </p>
          
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold whitespace-nowrap transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-blue-200 text-sm mt-4">
            Join 50,000+ enthusiasts who stay updated with the latest launches
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingLaunches;