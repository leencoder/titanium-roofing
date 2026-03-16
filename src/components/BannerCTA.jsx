import React from 'react';
import ctaBg from './../assets/images/Your Roof Maintenance Program Building Credit for Tomorrow.png';

const BannerCTA = () => {
  return (
    <section className="relative py-24 flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >
      </div>

      <div className="relative z-10 px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-condensed font-bold text-white uppercase leading-[1.2] mb-6 tracking-tight">
          Your Roof Maintenance Program: Building Credit for Tomorrow
        </h2>
        <p className="text-lg md:text-xl text-gray-200 mb-5">
          Pay a little each month, every payment builds credit towards your next roof. The longer you're enrolled, the more you save.
        </p>
        <p className="text-lg md:text-xl text-gray-200 mb-10">
          <b>For example:</b> A 5-year maintenance program enrollment with $1,400 in annual dues would accrue $7,200 credit applied directly to the cost of your next roof.
        </p>
        <button className="bg-brand-yellow rounded-[10px] text-brand-dark font-bold font-condensed text-lg px-10 py-4 uppercase hover:bg-yellow-400 transition-all transform hover:scale-105 shadow-lg">
          Book now
        </button>
      </div>
    </section>
  );
};

export default BannerCTA;
