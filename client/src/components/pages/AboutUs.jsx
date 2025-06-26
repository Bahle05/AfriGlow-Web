import React from 'react';

const AboutUs = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn about AfriGlow Careers and our mission to empower South African youth.
          </p>
        </div>

        {/* Interactive Logo Placeholder */}
        <div className="text-center mb-12">
          <div
            className="w-40 h-40 mx-auto bg-gradient-to-br from-gray-300 to-gray-400 rounded-full flex items-center justify-center mb-4 cursor-pointer transition-all duration-300 hover:scale-110 hover:from-green-300 hover:to-blue-400"
            onClick={() => alert('Welcome to AfriGlow Careers! Logo will link to homepage soon.')}
          >
            <img
              src="/downloads/AfriGlow Icon.png"
              alt="AfriGlow Logo"
              className="w-36 h-36 object-contain rounded-full"
            />
          </div>
          <p className="text-gray-600">Click the logo to learn more about AfriGlow Careers!</p>
        </div>

        {/* About AfriGlow Careers */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About AfriGlow Careers</h2>
          <p className="text-gray-700 mb-4">
            AfriGlow Careers is a pioneering digital career development company dedicated to empowering young South Africans to unlock their potential and achieve career success. With a focus on innovative online solutions, we provide expert guidance and support to help individuals transition from crafting effective CVs to securing meaningful job opportunities and advancing their careers.
          </p>
          <p className="text-gray-700 mb-4">
            AfriGlow was developed because of the struggles faced by South African black youth in applying for certain jobs due to limited resources. Our mission is to reduce the unemployment rate among South Africa’s youth by equipping them with the tools, knowledge, and support needed to apply for jobs and find employment. We believe every young person deserves a chance to shine, and we’re here to bridge the gap.
          </p>
          <p className="text-gray-700">
        <strong>From Paper to Purpose</strong><br />
            At AfriGlow Careers, we believe that a well-crafted CV is just the starting point. Our mission is to help individuals transform their paper (CV) into purpose (job opportunity/career elevation), enabling them to achieve their career aspirations and make a lasting impact in their chosen fields.
          </p>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Litha Ndlangisa</h3>
              <p className="text-gray-600">Co-Founder & Administrator</p>
              <p className="text-gray-700 mt-2">
                Litha brings wealth of experience in career administration and development, passionate about uplifting South African youth through innovative solutions.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-800">Bahle Ludidi</h3>
              <p className="text-gray-600">Co-Founder & Tech Led</p>
              <p className="text-gray-700 mt-2">
                Bahle leverages his tech expertise to build user-friendly platforms and create resources that inspire young black youth and job seekers to succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;