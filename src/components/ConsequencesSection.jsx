import React from 'react';
import { AlertCircle } from 'lucide-react';

const ConsequencesSection = () => {
  const consequences = [
    "Expensive Repairs",
    "Safety Hazards",
    "Structural Damage",
    "Reduced Property Value",
    "Pests and Rodents",
    "Voided Warranties",
    "Complete Roof Replacement"
  ];

  return (
    <section className="py-20 bg-brand-gray/50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-5xl font-condensed font-bold text-gray-800 uppercase text-center mb-10 tracking-wide">
          CONSEQUENCES FOR A NEGLECTED ROOF
        </h2>
        <div className='bg-[#FFFBE8] py-[80px] px-2'>
        <div className="flex flex-wrap justify-center gap-x-[40px] gap-y-8">
          {consequences.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-lg font-medium">
              <AlertCircle size={20} />
              <span>{item}</span>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;
