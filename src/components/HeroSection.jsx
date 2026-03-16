import React from 'react';
import Navbar from './Navbar';
import heroBg from './../assets/images/Titanium Roof Maintenance Plan.png';

const HeroSection = () => {
  return (
    <section className="relative min-h-[750px] flex flex-col bg-brand-dark">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
      </div>
      
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex-grow max-w-[1400px] mx-auto w-full flex flex-col lg:flex-row items-center pt-32 pb-16 justify-between gap-12">
        
        {/* Left Column - Text */}
        <div className="w-full lg:w-[50%] text-white pt-8 lg:pt-0">
          <div className="bg-brand-yellow text-brand-dark rounded-[10px] text-xl font-bold px-4 py-1 uppercase tracking-wider mb-6">
            Titanium Roof Maintenance Plan
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[60px] leading-[1.1] mb-6 text-white font-bold">
            Protect your roof-avoid costly repairs later
          </h1>
          <p className="text-lg  text-gray-200 mb-8 max-w-xl leading-relaxed">
           Annual inspections, priority service, and preventative maintenance designed for South Florida roofs. Join our membership and keep your home protected year-round.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
             <button className="bg-brand-yellow rounded-[10px] text-brand-dark font-bold text-lg md:text-xl px-8 py-4 uppercase hover:bg-yellow-400 transition-all transform hover:scale-105">
               Join Now - From $20/mo
             </button>
             <button className="border rounded-[10px] font-bold text-lg md:text-xl px-8 py-4 uppercase hover:bg-yellow-400 transition-all transform hover:scale-105">
               How It Works
             </button>
          </div>
        </div>

        <div className="w-full max-w-[450px] lg:w-[40%] bg-white/60 backdrop-blur-md p-8 border border-white/20 rounded-[10px] shadow-2xl">
           <div className="space-y-4">
             <div className="flex flex-col sm:flex-row gap-4">
               <input type="text" placeholder="First Name" className="w-full sm:w-1/2 bg-white/10 border border-dark/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors rounded-[10px]" />
               <input type="text" placeholder="Last Name" className="w-full sm:w-1/2 bg-white/10 border border-dark/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors rounded-[10px]" />
             </div>
             <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-dark/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors rounded-[10px]" />
             <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-dark/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors rounded-[10px]" />
             <input type="text" placeholder="Address" className="w-full bg-white/10 border border-dark/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors rounded-[10px]" />
             <div className="flex flex-col sm:flex-row gap-4">
             <input type="text" placeholder="City" className="w-full bg-white/10 border border-dark/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors rounded-[10px]" />
             <input type="text" placeholder="State" className="w-full bg-white/10 border border-dark/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors rounded-[10px]" />
             </div>
             <input type="number" placeholder="Zip Code" className="w-full bg-white/10 border border-dark/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors rounded-[10px]" />
             <button className="w-[80%] flex justify-self-center justify-center bg-brand-yellow text-brand-dark font-bold text-xl px-8 py-3 rounded-[10px] uppercase mt-2 hover:bg-yellow-400 transition-all">
               Submit
             </button>
           </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
