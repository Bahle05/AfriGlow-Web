import React from 'react';

const Home = ({ setCurrentPage }) => (
  <div>
    {/* Hero Section */}
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-2 text-sm font-medium text-blue-800 mb-8">
          ⭐ Professional Career Services
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          Make Your CV 
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"> Stand Out</span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Advance your career with expertly crafted CVs and professional guidance designed specifically for the South African market.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setCurrentPage('services')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 hover:from-blue-700 hover:to-purple-700">
            View Our Services
          </button>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
            Contact Us Today
          </button>
        </div>
      </div>
    </section>

    {/* Features Section */}
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose AfriGlow Careers?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-2xl p-6 mb-6 mx-auto w-20 h-20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Fast & Reliable
            </h3>
            <p className="text-gray-600 text-lg">
              Professional CV services delivered within 24-48 hours with guaranteed quality and satisfaction.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-2xl p-6 mb-6 mx-auto w-20 h-20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🇿🇦</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Local Expertise
            </h3>
            <p className="text-gray-600 text-lg">
              Deep understanding of the South African job market with tailored solutions for local opportunities.
            </p>
          </div>

          <div className="text-center group">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl p-6 mb-6 mx-auto w-20 h-20 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🏆</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Proven Success
            </h3>
            <p className="text-gray-600 text-lg">
              Trusted by professionals across South Africa with consistently high client satisfaction rates.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="py-20 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to Land Your Dream Job?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Transform your career prospects with our professional services tailored for the South African market.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => setCurrentPage('services')}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Get Started - From R30
          </button>
          <button 
            onClick={() => setCurrentPage('quote')}
            className="bg-white/10 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default Home;