import React from 'react';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <section className="relative min-h-[750px] flex flex-col bg-brand-dark">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1632759145355-66236b3fe745?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-brand-dark/70 sm:bg-brand-dark/60 md:bg-gradient-to-r md:from-brand-dark/90 md:to-transparent"></div>
      </div>
      
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10 flex-grow max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col lg:flex-row items-center pt-32 pb-16 justify-between gap-12">
        
        {/* Left Column - Text */}
        <div className="w-full lg:w-[55%] text-white pt-8 lg:pt-0">
          <div className="inline-block bg-brand-yellow text-brand-dark font-bold px-4 py-1 text-sm uppercase tracking-wider mb-6">
            Preventative Maintenance
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-oswald leading-[1.1] mb-6 text-white font-bold uppercase tracking-tight">
            Protect your roof. <br className="hidden md:block"/>Avoid costly <br className="hidden md:block"/>repairs later.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            A well-maintained roof can last 30% longer. Regular maintenance avoids
            emergency leaks and expensive water damage. Start your maintenance plan today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
             <button className="bg-brand-yellow text-brand-dark font-bold font-oswald text-lg px-8 py-4 uppercase hover:bg-yellow-400 transition-all transform hover:scale-105">
               View Our Plans
             </button>
             <span className="text-sm font-semibold opacity-90 border-l-2 border-brand-yellow pl-4">Serving the Greater Area for over 15 years</span>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full max-w-[450px] lg:w-[40%] bg-white/10 backdrop-blur-md p-8 border border-white/20 rounded-sm shadow-2xl">
           <h3 className="text-2xl font-oswald font-bold text-white uppercase mb-6 tracking-wide text-center">Get a Free Quote</h3>
           <div className="space-y-4">
             <div className="flex flex-col sm:flex-row gap-4">
               <input type="text" placeholder="First Name" className="w-full sm:w-1/2 bg-white/10 border border-white/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors" />
               <input type="text" placeholder="Last Name" className="w-full sm:w-1/2 bg-white/10 border border-white/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors" />
             </div>
             <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors" />
             <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors" />
             <input type="text" placeholder="Approx. Square Footage" className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder-white/60 focus:outline-none focus:border-brand-yellow transition-colors" />
             <button className="w-full bg-brand-yellow text-brand-dark font-bold font-oswald text-xl px-8 py-4 uppercase mt-2 hover:bg-yellow-400 transition-all">
               Submit
             </button>
             <p className="text-center text-brand-yellow text-sm font-medium mt-4">
               Hurry! Limited spots left for this month.
             </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
