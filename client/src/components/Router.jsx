import React from 'react';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Quote from './pages/Quote';
import Checkout from './pages/Checkout';
import Jobs from './pages/Jobs';
import AboutUs from './pages/AboutUs';

const Router = ({ currentPage, setCurrentPage, addToCart }) => {
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'services':
        return <Services setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact setCurrentPage={setCurrentPage} />;
      case 'quote':
        return <Quote setCurrentPage={setCurrentPage} />;
      case 'checkout':
        return <Checkout setCurrentPage={setCurrentPage} />;
      case 'jobs':
        return <Jobs setCurrentPage={setCurrentPage} addToCart={addToCart} />;
      case 'about-us':
        return <AboutUs setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return <div>{renderPage()}</div>;
};

export default Router;