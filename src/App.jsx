import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen overflow-x-hidden dark:bg-gray-900">
        <Header />
        <main>
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
