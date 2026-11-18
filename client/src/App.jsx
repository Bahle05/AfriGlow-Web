import React, { useState } from 'react';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Quote from './components/pages/Quote';
import Checkout from './components/pages/Checkout';
import Jobs from './components/pages/Jobs';
import AboutUs from './components/pages/AboutUs';
import Header from './components/Header';
import CartSidebar from './components/CartSidebar';
import Router from './components/Router';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (service) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === service.id);
      if (existing) {
        return prev.map(item => 
          item.id === service.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...service, quantity: 1 }];
    });
  };

  const removeFromCart = (serviceId) => {
    setCartItems(prev => prev.filter(item => item.id !== serviceId));
  };

  const updateQuantity = (serviceId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(serviceId);
      return;
    }
    setCartItems(prev => 
      prev.map(item => 
        item.id === serviceId 
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        cartItems={cartItems}
        setIsCartOpen={setIsCartOpen}
        getTotalItems={getTotalItems}
      />
      
      <Router 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        addToCart={addToCart} 
      />
      
      <CartSidebar 
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
        cartItems={cartItems}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
        getTotalPrice={getTotalPrice}
      />
    </div>
  );
}

export default App;