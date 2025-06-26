import React from 'react';

const Header = ({ currentPage, setCurrentPage, cartItems, setIsCartOpen, getTotalItems }) => (
  <header className="bg-white/80 backdrop-blur-lg shadow-lg sticky top-0 z-40">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-2">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <span className="text-white font-bold text-xl">CV</span>
          </div>
          <h1
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            AfriGlow Careers
          </h1>
        </div>

        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => setCurrentPage('home')}
            className={`font-medium transition-colors ${
              currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('services')}
            className={`font-medium transition-colors ${
              currentPage === 'services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Services
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`font-medium transition-colors ${
              currentPage === 'contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => setCurrentPage('jobs')}
            className={`font-medium transition-colors ${
              currentPage === 'jobs' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            Jobs
          </button>
          <button
            onClick={() => setCurrentPage('about-us')}
            className={`font-medium transition-colors ${
              currentPage === 'about-us' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
            }`}
          >
            About Us
          </button>
        </nav>

        <button
          onClick={() => setIsCartOpen(true)}
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
        >
          Cart ({getTotalItems()})
          {getTotalItems() > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
              {getTotalItems()}
            </span>
          )}
        </button>
      </div>
    </div>
  </header>
);

export default Header;