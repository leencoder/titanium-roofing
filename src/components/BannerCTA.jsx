import React from 'react';

const BannerCTA = () => {
  return (
    <section className="relative py-24 flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80")' }}
      >
        <div className="absolute inset-0 bg-brand-dark/80"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-oswald font-bold text-white uppercase leading-[1.2] mb-6 tracking-tight">
          Your roof maintenance program is building equity for tomorrow
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto font-medium">
          Stop letting minor damages compound into major expenses. Take control today with our proactive maintenance plans.
        </p>
        <button className="bg-brand-yellow text-brand-dark font-bold font-oswald text-lg px-10 py-4 uppercase hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg">
          Get a Free Quote
        </button>
      </div>
    </section>
  );
};

export default BannerCTA;
