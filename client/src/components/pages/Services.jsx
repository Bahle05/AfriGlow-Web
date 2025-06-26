import React from 'react';

const Services = ({ setCurrentPage }) => {
  const services = [
    {
      id: 1,
      name: "Professional CV Writing",
      price: 45,
      originalPrice: 75,
      description: "Expert-crafted CV tailored for the South African job market",
      features: ["ATS-optimized", "Industry-specific", "2 revisions", "24-48h delivery"],
      popular: true
    },
    {
      id: 2,
      name: "CV Template Bundle",
      price: 35,
      originalPrice: 55,
      description: "10 premium CV templates with customization guide",
      features: ["10 templates", "Customization guide", "Instant download", "Lifetime access"]
    },
    {
      id: 3,
      name: "Career Consultation",
      price: 30,
      originalPrice: 50,
      description: "1-on-1 career guidance session with industry expert",
      features: ["60-min session", "Career roadmap", "Interview tips", "Follow-up email"]
    },
    {
      id: 4,
      name: "LinkedIn Profile Optimization",
      price: 40,
      originalPrice: 65,
      description: "Complete LinkedIn profile makeover to attract recruiters",
      features: ["Profile rewrite", "Keyword optimization", "Photo guidance", "Strategy session"]
    },
    {
      id: 5,
      name: "Cover Letter Writing",
      price: 25,
      originalPrice: 40,
      description: "Compelling cover letters that get you noticed",
      features: ["Custom written", "Industry-focused", "1 revision", "Same-day delivery"]
    },
    {
      id: 6,
      name: "Complete Career Package",
      price: 120,
      originalPrice: 200,
      description: "Everything you need for a successful job search",
      features: ["CV + Cover Letter", "LinkedIn optimization", "Career consultation", "Interview prep"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our expert services designed to boost your career prospects in South Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden ${service.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''}`}>
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-bl-2xl text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.name}
                </h3>
                
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-3xl font-bold text-green-600">
                    R{service.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    R{service.originalPrice}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                    Save R{service.originalPrice - service.price}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => setCurrentPage('checkout')}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => setCurrentPage('contact')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Need Custom Service? Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;