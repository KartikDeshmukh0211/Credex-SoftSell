import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-10 pb-10 md:pt-24 md:pb-20 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-6 lg:pr-12 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4 md:mb-6">
              Turn Unused Software Licenses Into <span className="text-indigo-600 dark:text-indigo-400">Cash</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
              The easiest way to sell your excess software licenses for maximum value. 
              Secure, compliant, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.a 
                href="#contact" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-center dark:bg-indigo-700 dark:hover:bg-indigo-600"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Quote
              </motion.a>
              <motion.a 
                href="#how-it-works" 
                className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-6 rounded-lg shadow-md border border-indigo-200 transition-colors duration-300 text-center mt-3 sm:mt-0 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 dark:border-gray-600"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Sell My Licenses
              </motion.a>
            </div>
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-md md:max-w-none">
              <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900 rounded-full transform scale-95 rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                alt="Software licenses visualization" 
                className="relative rounded-lg shadow-xl w-full h-auto object-cover"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
