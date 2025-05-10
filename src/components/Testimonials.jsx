import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/licenses';

const Testimonials = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 24, 
        duration: 0.6 
      }
    }
  };

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-0 -ml-40 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-200/20 to-purple-200/20 dark:from-indigo-900/30 dark:to-purple-900/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 -mr-40 -mb-40 w-80 h-80 rounded-full bg-gradient-to-l from-indigo-200/20 to-purple-200/20 dark:from-indigo-900/30 dark:to-purple-900/30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.span 
            className="inline-block text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mb-2 px-3 py-1 bg-indigo-100 dark:bg-indigo-900/50 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Testimonials
          </motion.span>
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-indigo-700 to-purple-700 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Trusted by businesses of all sizes to maximize the value of their software assets
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id} 
              className="relative group"
              variants={itemVariants}
            >
              {/* Card glow effect */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-600 dark:to-purple-600 rounded-2xl blur opacity-20 dark:opacity-40 group-hover:opacity-30 dark:group-hover:opacity-60 transition duration-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                whileHover={{ opacity: 0.3 }}
                viewport={{ once: true }}
              ></motion.div>
              
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 relative z-10 border border-indigo-50 dark:border-indigo-900/40"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Quotation mark */}
                <div className="absolute top-6 left-8 text-indigo-200 dark:text-indigo-700 text-7xl leading-none z-0 font-serif">
                  "
                </div>
                
                <div className="relative z-10">
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-300 dark:border-indigo-700"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
