import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 backdrop-blur-md ${
        scrolled 
          ? 'py-2 bg-indigo-600/90 dark:bg-gray-900/90 shadow-lg' 
          : 'py-4 bg-gradient-to-r from-indigo-600/90 to-purple-600/90 dark:from-gray-900/90 dark:to-gray-800/90'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="bg-white group p-2 rounded-full shadow-md mr-3 dark:bg-gray-700 relative overflow-hidden">
            <img 
              src="/logo.svg" 
              alt="SoftSell Logo" 
              className="h-7 w-7 relative z-10"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 dark:from-indigo-400/30 dark:to-purple-400/30 rounded-full opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            ></motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.h1 
              className="text-2xl md:text-3xl font-bold text-white"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              SoftSell
            </motion.h1>
          </div>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:flex items-center space-x-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          {['How It Works', 'Why Choose Us', 'Testimonials'].map((item, i) => (
            <motion.a 
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
              className="text-white hover:text-indigo-200 transition-colors relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              {item}
              <motion.div 
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
              ></motion.div>
            </motion.a>
          ))}
          <motion.a 
            href="#contact" 
            className="relative overflow-hidden bg-white text-indigo-600 hover:bg-opacity-90 transition-colors px-4 py-2 rounded-lg font-medium shadow-md dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">Get a Quote</span>
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-700 dark:to-purple-700" 
              initial={{ height: 0 }}
              whileHover={{ height: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          <ThemeToggle />
        </motion.nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.9 }}
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
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav 
            className="md:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="flex flex-col space-y-3 pt-4 pb-5 px-4 backdrop-blur-md bg-indigo-600/90 dark:bg-gray-900/90"
            >
              {['How It Works', 'Why Choose Us', 'Testimonials'].map((item, i) => (
                <motion.a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="text-white hover:text-indigo-200 transition-colors px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a 
                href="#contact" 
                className="bg-white text-indigo-600 hover:bg-indigo-50 transition-colors px-4 py-3 rounded-lg font-medium shadow-md inline-block mx-2 text-center dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                onClick={() => setIsMenuOpen(false)}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get a Quote
              </motion.a>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;