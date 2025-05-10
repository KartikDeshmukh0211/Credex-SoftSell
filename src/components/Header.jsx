import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 py-4 px-4 sm:px-6 sticky top-0 z-50 shadow-lg dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="bg-white p-2 rounded-full shadow-md mr-3 dark:bg-gray-700">
            <img 
              src="/logo.svg" 
              alt="SoftSell Logo" 
              className="h-7 w-7"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">SoftSell</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-white hover:text-indigo-200 transition-colors">How It Works</a>
          <a href="#why-choose-us" className="text-white hover:text-indigo-200 transition-colors">Why Choose Us</a>
          <a href="#testimonials" className="text-white hover:text-indigo-200 transition-colors">Testimonials</a>
          <a href="#contact" className="bg-white text-indigo-600 hover:bg-indigo-100 transition-colors px-4 py-2 rounded-lg font-medium shadow-md dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
            Get a Quote
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="pt-4 pb-2 md:hidden">
          <div className="flex flex-col space-y-3">
            <a 
              href="#how-it-works" 
              className="text-white hover:text-indigo-200 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#why-choose-us" 
              className="text-white hover:text-indigo-200 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <a 
              href="#testimonials" 
              className="text-white hover:text-indigo-200 transition-colors px-2 py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="bg-white text-indigo-600 hover:bg-indigo-100 transition-colors px-4 py-2 rounded-lg font-medium shadow-md inline-block mx-2 text-center dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;