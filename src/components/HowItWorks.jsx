import React from 'react';
import { motion } from 'framer-motion';
import { howItWorks } from '../data/licenses';

const HowItWorks = () => {
  // Function to get the appropriate icon
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'upload':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        );
      case 'calculator':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'cash':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Variants for container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Variants for individual item animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24, 
        duration: 0.5 
      }
    }
  };

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-gradient-to-b from-indigo-200/20 to-purple-200/30 dark:from-indigo-900/20 dark:to-purple-900/30 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-gradient-to-t from-blue-200/20 to-indigo-200/30 dark:from-blue-900/20 dark:to-indigo-900/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our Process
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Converting your unused software licenses to cash is simple with our three-step process
          </p>
        </motion.div>

        {/* Desktop layout (md and above) */}
        <motion.div 
          className="hidden md:block relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Connection line between steps */}
          <motion.div 
            className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-400 dark:from-indigo-700 dark:via-purple-700 dark:to-indigo-700 -translate-y-1/2 z-0 rounded-full opacity-80"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
          ></motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {howItWorks.map((step, index) => (
              <motion.div 
                key={step.id} 
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 lg:p-8 relative transform transition-all duration-300 hover:shadow-2xl group"
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.4)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Step number with shining effect */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg z-10 shadow-lg shadow-indigo-500/30 dark:shadow-indigo-700/30 overflow-hidden">
                  <span className="relative z-10">{index + 1}</span>
                  <motion.div 
                    className="absolute inset-0 bg-white opacity-20"
                    animate={{ 
                      x: ["100%", "-100%"],
                      skew: ["45deg", "45deg"]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "loop", 
                      duration: 2,
                      ease: "easeInOut",
                      repeatDelay: 3
                    }}
                  />
                </div>
                
                <div className="flex flex-col items-center text-center pt-3">
                  <motion.div 
                    className="text-indigo-500 dark:text-indigo-400 mb-4 p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-xl transform group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {getIcon(step.icon)}
                  </motion.div>
                  
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    {step.description}
                  </p>
                  
                  <motion.div 
                    className="mt-5 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-16 transition-all duration-300"
                    whileHover={{ width: 100 }}
                  />
                </div>
                
                {/* Arrow to next step - only show for first two steps */}
                {index < howItWorks.length - 1 && (
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
                    <motion.div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-1.5 rounded-full shadow-lg"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Mobile layout (sm and below) */}
        <motion.div 
          className="md:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {howItWorks.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="mb-10 last:mb-0 relative"
              variants={itemVariants}
            >
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 relative z-10 border border-indigo-50 dark:border-gray-700"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step number badge with gradient and shine effect */}
                <div className="absolute -top-4 left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-md overflow-hidden">
                  <span className="relative z-10">{index + 1}</span>
                  <motion.div 
                    className="absolute inset-0 bg-white opacity-20"
                    animate={{ 
                      x: ["100%", "-100%"],
                      skew: ["45deg", "45deg"]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: "loop", 
                      duration: 2,
                      ease: "easeInOut",
                      repeatDelay: 3
                    }}
                  />
                </div>
                
                <div className="pt-2 flex flex-col sm:flex-row items-center sm:items-start">
                  <motion.div 
                    className="text-indigo-500 dark:text-indigo-400 mb-3 sm:mb-0 sm:mr-4 p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {getIcon(step.icon)}
                  </motion.div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-1 sm:mt-0">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Connecting line for mobile - only show for first two steps */}
              {index < howItWorks.length - 1 && (
                <motion.div 
                  className="absolute left-4 bottom-0 w-1 h-10 bg-gradient-to-b from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 transform translate-y-full z-0 rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                ></motion.div>
              )}
              
              {/* Connecting arrow for mobile - only show for first two steps */}
              {index < howItWorks.length - 1 && (
                <motion.div 
                  className="absolute bottom-0 left-4 transform translate-y-1/2 z-10"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 1.5, 
                    repeatType: "reverse" 
                  }}
                >
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-1 rounded-full shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call-to-action button */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a 
            href="#contact" 
            className="relative overflow-hidden group inline-flex items-center px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg shadow-indigo-600/30 transition-all duration-300 transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 text-sm sm:text-base flex items-center">
              Start Selling Your Licenses
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 sm:h-5 sm:w-5 ml-2"
                animate={{ x: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            ></motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;