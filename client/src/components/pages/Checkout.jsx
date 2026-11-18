import React, { useState } from 'react';

const Checkout = ({ setCurrentPage }) => {
  const [orderData, setOrderData] = useState({
    service: 'Professional CV Writing',
    name: '',
    email: '',
    phone: '',
    experience: '',
    industry: '',
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order submitted successfully! We will contact you within 2 hours to confirm details and begin work on your CV.');
    setCurrentPage('home');
  };

  const handleChange = (e) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Complete Your Order
          </h1>
          <p className="text-xl text-gray-600">
            Fill in your details and we'll get started on your professional CV immediately
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h2 className="text-2xl font-bold text-white">Order Summary</h2>
            <div className="mt-4 bg-white/20 backdrop-blur rounded-lg p-4">
              <div className="flex justify-between items-center text-white">
                <span>Professional CV Writing</span>
                <span className="font-bold">R45</span>
              </div>
              <div className="text-white/80 text-sm mt-1">
                ✓ ATS-optimized ✓ Industry-specific ✓ 2 revisions ✓ 24-48h delivery
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={orderData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={orderData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={orderData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Years of Experience *
                </label>
                <select
                  name="experience"
                  value={orderData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="entry">Entry Level (0-2 years)</option>
                  <option value="mid">Mid Level (3-7 years)</option>
                  <option value="senior">Senior Level (8-15 years)</option>
                  <option value="executive">Executive Level (15+ years)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Industry/Field *
              </label>
              <input
                type="text"
                name="industry"
                value={orderData.industry}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., Information Technology, Finance, Healthcare, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Special Requests or Additional Information
              </label>
              <textarea
                name="specialRequests"
                value={orderData.specialRequests}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any specific requirements, target companies, or additional information"
              ></textarea>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-2 text-gray-600">
                <p>✓ We'll contact you within 2 hours to confirm details</p>
                <p>✓ Our expert will begin crafting your CV</p>
                <p>✓ You'll receive your first draft within 24-48 hours</p>
                <p>✓ Free revisions until you're 100% satisfied</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setCurrentPage('services')}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Back to Services
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-green-400 to-blue-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Complete Order - R45
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;