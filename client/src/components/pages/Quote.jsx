import React, { useState } from 'react';

const Quote = ({ setCurrentPage }) => {
  const [quoteData, setQuoteData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [],
    timeline: '',
    budget: '',
    details: ''
  });

  const serviceOptions = [
    'Professional CV Writing',
    'CV Template Bundle',
    'Career Consultation',
    'LinkedIn Profile Optimization',
    'Cover Letter Writing',
    'Interview Preparation',
    'Personal Branding',
    'Career Coaching Package'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Quote request submitted! We will send you a detailed quote within 4 hours.');
    setCurrentPage('home');
  };

  const handleChange = (e) => {
    setQuoteData({ ...quoteData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (service) => {
    const updatedServices = quoteData.services.includes(service)
      ? quoteData.services.filter(s => s !== service)
      : [...quoteData.services, service];
    setQuoteData({ ...quoteData, services: updatedServices });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Request a Quote
          </h1>
          <p className="text-xl text-gray-600">
            Tell us about your needs and we'll provide a customized quote for your career services
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={quoteData.name}
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
                  value={quoteData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={quoteData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Services Needed * (Select all that apply)
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {serviceOptions.map((service) => (
                  <label key={service} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={quoteData.services.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <span className="text-gray-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={quoteData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (Rush order)</option>
                  <option value="1-3days">1-3 days</option>
                  <option value="1week">Within 1 week</option>
                  <option value="2weeks">Within 2 weeks</option>
                  <option value="1month">Within 1 month</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  name="budget"
                  value={quoteData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="under-50">Under R50</option>
                  <option value="50-100">R50 - R100</option>
                  <option value="100-200">R100 - R200</option>
                  <option value="200-500">R200 - R500</option>
                  <option value="500+">R500+</option>
                  <option value="discuss">Prefer to discuss</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                name="details"
                value={quoteData.details}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us more about your specific needs, career goals, industry, or any special requirements"
              ></textarea>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">What to expect:</h3>
              <div className="space-y-2 text-blue-800">
                <p>✓ Detailed quote within 4 hours</p>
                <p>✓ Free consultation to discuss your needs</p>
                <p>✓ No obligation to proceed</p>
                <p>✓ Competitive pricing with quality guarantee</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setCurrentPage('home')}
                className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Back to Home
              </button>
              <button
                type="submit"
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Request Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;