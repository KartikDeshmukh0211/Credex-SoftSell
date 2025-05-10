import React from 'react';
import { testimonials } from '../data/licenses';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by businesses of all sizes to maximize the value of their software assets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-indigo-50 rounded-xl shadow-md p-8 relative transition-all duration-300 hover:shadow-lg"
            >
              {/* Quotation mark */}
              <div className="absolute top-6 left-8 text-indigo-200 text-7xl leading-none z-0 font-serif">
                "
              </div>
              
              <div className="relative z-10">
                <p className="text-gray-700 mb-6 text-lg">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full mr-4 border-2 border-indigo-300"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
