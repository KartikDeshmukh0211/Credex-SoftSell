import React from 'react';

const Hero = () => {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 animate-fade-in">
              Turn Unused Software Licenses Into <span className="text-indigo-600">Cash</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-slide-in-left">
              The easiest way to sell your excess software licenses for maximum value. 
              Secure, compliant, and hassle-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <a 
                href="#contact" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-colors duration-300 text-center"
              >
                Get a Quote
              </a>
              <a 
                href="#how-it-works" 
                className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-6 rounded-lg shadow-md border border-indigo-200 transition-colors duration-300 text-center"
              >
                Sell My Licenses
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-100 rounded-full transform scale-95 rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" 
                alt="Software licenses visualization" 
                className="relative rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
