import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-10 pb-10 md:pt-24 md:pb-20 bg-gradient-to-b from-indigo-600/10 via-indigo-50 to-white dark:from-indigo-900/30 dark:via-gray-900 dark:to-gray-800 dark:text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 md:pr-6 lg:pr-12 mb-8 md:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.7,
              ease: [0.6, 0.05, 0.01, 0.99]
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-400 dark:to-purple-400 leading-tight mb-4 md:mb-6">
                Turn Unused Software Licenses Into <span className="inline-block relative">
                  Cash
                  <motion.div 
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-purple-500 dark:from-indigo-500 dark:to-purple-400"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  ></motion.div>
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              The easiest way to sell your excess software licenses for maximum value. 
              <span className="font-medium text-indigo-600 dark:text-indigo-400">Secure, compliant, and hassle-free.</span>
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a 
                href="#contact" 
                className="relative overflow-hidden group bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg shadow-indigo-500/30 dark:shadow-indigo-700/30 transition-all duration-300 text-center transform hover:-translate-y-1"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Get a Quote</span>
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                ></motion.div>
              </motion.a>
              
              <motion.a 
                href="#how-it-works" 
                className="relative overflow-hidden group bg-white hover:bg-gray-50 text-indigo-600 font-medium py-3 px-6 rounded-lg shadow-md border border-indigo-200 transition-colors duration-300 text-center mt-3 sm:mt-0 dark:bg-gray-800 dark:border-indigo-800 dark:text-white dark:hover:bg-gray-700"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">Sell My Licenses</span>
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.7, 
              delay: 0.3,
              ease: [0.6, 0.05, 0.01, 0.99]
            }}
          >
            <div className="relative mx-auto max-w-md md:max-w-none">
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 rounded-2xl blur opacity-30 dark:opacity-40 transform -rotate-2"
                animate={{ 
                  rotate: ["-2deg", "2deg", "-2deg"],
                  scale: [1, 1.02, 1],
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              ></motion.div>
              
              <motion.div 
                className="relative rounded-xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1050&q=80" 
                  alt="Software licenses visualization" 
                  className="relative w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent mix-blend-overlay"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-indigo-900/90 to-transparent">
                  <motion.p 
                    className="text-white text-sm md:text-base font-medium"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    Join thousands of businesses maximizing their software investments
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
