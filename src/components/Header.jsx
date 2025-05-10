import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4 px-6 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="bg-white p-2 rounded-full shadow-md mr-3">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-7 w-7 text-indigo-600" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" 
              />
            </svg>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">SoftSell</h1>
        </div>
        
        <nav className="flex items-center space-x-6">
          <a href="#how-it-works" className="text-white hover:text-indigo-200 transition-colors">How It Works</a>
          <a href="#why-choose-us" className="text-white hover:text-indigo-200 transition-colors">Why Choose Us</a>
          <a href="#testimonials" className="text-white hover:text-indigo-200 transition-colors">Testimonials</a>
          <a href="#contact" className="bg-white text-indigo-600 hover:bg-indigo-100 transition-colors px-4 py-2 rounded-lg font-medium shadow-md">
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;