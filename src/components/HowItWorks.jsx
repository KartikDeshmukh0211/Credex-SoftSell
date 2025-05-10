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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="how-it-works" className="py-12 sm:py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-10 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">How It Works</h2>
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
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-indigo-200 dark:bg-indigo-800 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {howItWorks.map((step, index) => (
              <motion.div 
                key={step.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 lg:p-8 relative transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                variants={itemVariants}
              >
                {/* Step number */}
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {index + 1}
                </div>
                
                <div className="flex flex-col items-center text-center pt-3">
                  <div className="text-indigo-500 dark:text-indigo-400 mb-4">
                    {getIcon(step.icon)}
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mb-2 md:mb-3">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{step.description}</p>
                </div>
                
                {/* Arrow to next step - only show for first two steps */}
                {index < howItWorks.length - 1 && (
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
                    <div className="bg-indigo-500 text-white p-1.5 rounded-full shadow">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
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
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 relative z-10">
                {/* Step number badge - positioned to the left on mobile */}
                <div className="absolute -top-4 left-4 bg-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-md">
                  {index + 1}
                </div>
                
                <div className="pt-2 flex flex-col sm:flex-row items-center sm:items-start">
                  <div className="text-indigo-500 dark:text-indigo-400 mb-3 sm:mb-0 sm:mr-4">
                    {getIcon(step.icon)}
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 mt-1 sm:mt-0">{step.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Connecting arrow for mobile - only show for first two steps */}
              {index < howItWorks.length - 1 && (
                <div className="absolute left-4 bottom-0 h-10 w-0.5 bg-indigo-200 dark:bg-indigo-800 transform translate-y-full z-0"></div>
              )}
              
              {/* Connecting arrow for mobile - only show for first two steps */}
              {index < howItWorks.length - 1 && (
                <div className="absolute bottom-0 left-4 transform translate-y-1/2 z-10">
                  <div className="bg-indigo-500 text-white p-1 rounded-full shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
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
            className="inline-flex items-center px-5 py-3 sm:px-6 sm:py-4 bg-indigo-600 text-white font-medium rounded-lg shadow-md hover:bg-indigo-700 transition-colors dark:bg-indigo-700 dark:hover:bg-indigo-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm sm:text-base">Start Selling Your Licenses</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;