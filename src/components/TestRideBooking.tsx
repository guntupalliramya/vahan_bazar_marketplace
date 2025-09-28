import React, { useState } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin, User, Phone, Mail, CheckCircle } from 'lucide-react';

interface TestRideBookingProps {
  onBack: () => void;
}

const TestRideBooking: React.FC<TestRideBookingProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleId: '',
    showroomId: '',
    preferredDate: '',
    preferredTime: '',
    hasLicense: false,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const vehicles = [
    'Royal Enfield Classic 350',
    'Honda Activa 6G',
    'Ather 450X',
    'Yamaha MT-15',
    'TVS iQube Electric',
    'Bajaj Pulsar NS200'
  ];

  const showrooms = [
    { id: '1', name: 'Vahan Bazar Central Delhi', location: 'Connaught Place' },
    { id: '2', name: 'Vahan Bazar Gurgaon', location: 'Cyber City' },
    { id: '3', name: 'Vahan Bazar Noida', location: 'Sector 18' }
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', 
    '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid 10-digit phone number';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.vehicleId) newErrors.vehicleId = 'Please select a vehicle';
    if (!formData.showroomId) newErrors.showroomId = 'Please select a showroom';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please select a time';
    if (!formData.hasLicense) newErrors.hasLicense = 'Valid driving license is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-blue-100 rounded-2xl p-12 text-center border border-blue-200">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Test Ride Booked Successfully!
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Thank you for booking a test ride with us. We'll contact you shortly to confirm your appointment details.
          </p>

          <div className="bg-blue-50 rounded-xl p-6 mb-8 max-w-2xl mx-auto border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-gray-600">Vehicle</p>
                <p className="font-semibold">{formData.vehicleId}</p>
              </div>
              <div>
                <p className="text-gray-600">Showroom</p>
                <p className="font-semibold">
                  {showrooms.find(s => s.id === formData.showroomId)?.name}
                </p>
              </div>
              <div>
                <p className="text-gray-600">Date & Time</p>
                <p className="font-semibold">{formData.preferredDate} at {formData.preferredTime}</p>
              </div>
              <div>
                <p className="text-gray-600">Contact</p>
                <p className="font-semibold">{formData.phone}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-600">
              Booking Reference: <span className="font-mono font-semibold">VB{Date.now()}</span>
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    vehicleId: '',
                    showroomId: '',
                    preferredDate: '',
                    preferredTime: '',
                    hasLicense: false,
                    message: ''
                  });
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Book Another Test Ride
              </button>
              <button
                onClick={onBack}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Back to Browse
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Browse
      </button>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Book Your Test Ride
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience your dream vehicle before you buy. Book a test ride at your convenient time and location.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-blue-100 rounded-2xl p-8 border border-blue-200">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <User className="h-5 w-5 text-blue-600" />
              Personal Information
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 ${
                  errors.name ? 'border-red-500' : 'border-blue-300'
                }`}
                placeholder="Enter your full name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 ${
                  errors.phone ? 'border-red-500' : 'border-blue-300'
                }`}
                placeholder="Enter 10-digit phone number"
                maxLength={10}
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 ${
                  errors.email ? 'border-red-500' : 'border-blue-300'
                }`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={formData.hasLicense}
                  onChange={(e) => handleInputChange('hasLicense', e.target.checked)}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">
                  I have a valid driving license *
                </span>
              </label>
              {errors.hasLicense && <p className="text-red-500 text-sm mt-1">{errors.hasLicense}</p>}
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Booking Details
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Vehicle *
              </label>
              <select
                value={formData.vehicleId}
                onChange={(e) => handleInputChange('vehicleId', e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 ${
                  errors.vehicleId ? 'border-red-500' : 'border-blue-300'
                }`}
              >
                <option value="">Choose a vehicle</option>
                {vehicles.map((vehicle) => (
                  <option key={vehicle} value={vehicle}>
                    {vehicle}
                  </option>
                ))}
              </select>
              {errors.vehicleId && <p className="text-red-500 text-sm mt-1">{errors.vehicleId}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Showroom *
              </label>
              <select
                value={formData.showroomId}
                onChange={(e) => handleInputChange('showroomId', e.target.value)}
                className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 ${
                  errors.showroomId ? 'border-red-500' : 'border-blue-300'
                }`}
              >
                <option value="">Choose a showroom</option>
                {showrooms.map((showroom) => (
                  <option key={showroom.id} value={showroom.id}>
                    {showroom.name} - {showroom.location}
                  </option>
                ))}
              </select>
              {errors.showroomId && <p className="text-red-500 text-sm mt-1">{errors.showroomId}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 ${
                    errors.preferredDate ? 'border-red-500' : 'border-blue-300'
                  }`}
                />
                {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  value={formData.preferredTime}
                  onChange={(e) => handleInputChange('preferredTime', e.target.value)}
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50 ${
                    errors.preferredTime ? 'border-red-500' : 'border-blue-300'
                  }`}
                >
                  <option value="">Select time</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Message (Optional)
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                rows={4}
                className="w-full px-4 py-3 border border-blue-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-blue-50"
                placeholder="Any specific requirements or questions..."
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Book Test Ride
          </button>
          <p className="text-gray-600 text-sm mt-4">
            * Required fields. We'll contact you within 2 hours to confirm your booking.
          </p>
        </div>
      </form>
    </section>
  );
};

export default TestRideBooking;