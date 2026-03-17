import React from 'react';
import asphalt from '../assets/images/asphalt-roofing.png';
import cedar from '../assets/images/cedar-roofing.png';
import metal from '../assets/images/metal-roofing.png';

const PreventativeMaintenance = () => {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h4 className="tracking-widest font-condensed text-center text-gray-500 uppercase mb-3 italic">Anything is possible with us</h4>
          <h2 className="text-3xl md:text-5xl font-condensed font-bold text-gray-800 uppercase text-center mb-16 tracking-wide">
            Preventative Maintenance for Your Business
          </h2>
        </div>

        <div>
          
          <div className='flex'>
          <div className="relative h-64 md:h-80 rounded-sm overflow-hidden group w-3/5">
            <img src={asphalt} alt="Roof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors"></div>
          </div>

          <div className="bg-brand-yellow p-8 md:p-12 flex flex-col justify-center rounded-sm text-brand-dark w-2/5">
            <h3 className="text-xl font-condensed font-bold uppercase mb-4 tracking-wide">
              Routine Inspections and Repairs
            </h3>
            <p className="font-medium text-lg mb-6 leading-relaxed">
              Checking for cracked, slipped, or displaced tiles, clearing valleys and debris, inspecting flashing, and evaluating underlayment condition. Small repositioning or sealing repairs included if needed.
            </p>
          </div>
</div>
          <div className='flex'>
          <div className="bg-brand-yellow p-8 md:p-12 flex flex-col justify-center rounded-sm text-brand-dark w-2/5">
            <h3 className="text-xl font-condensed font-bold uppercase mb-4 tracking-wide">
              Detailed Reports
            </h3>
            <p className="font-medium text-lg mb-6 leading-relaxed">
              All inspections include a Damage Observation Report and detailed log file with photos showing tile condition, mortar joints, valley channels, flashing intersections, and underlayment visibility (where applicable).
            </p>
          </div>

          <div className="relative h-64 md:h-80 rounded-sm overflow-hidden group w-3/5">
            <img src={metal} alt="Roof Inspection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors"></div>
          </div>
          </div>
          <div className='flex'>
<div className="relative h-64 md:h-80 rounded-sm overflow-hidden group w-3/5">
            <img src={cedar} alt="Roof Inspection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors"></div>
          </div>
          <div className="bg-brand-yellow p-8 md:p-12 flex flex-col justify-center rounded-sm text-brand-dark w-2/5">
            <h3 className="text-xl font-condensed font-bold uppercase mb-4 tracking-wide">
              Tax Deductible
            </h3>
            <p className="font-medium text-lg mb-6 leading-relaxed">
              Any cost for a maintenance program is deductible on your tax return.
            </p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreventativeMaintenance;
