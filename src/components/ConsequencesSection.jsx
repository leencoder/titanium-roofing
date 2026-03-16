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
        <h2 className="text-3xl md:text-4xl font-oswald font-bold text-brand-dark uppercase mb-12 tracking-wide">
          CONSEQUENCES FOR A NEGLECTED ROOF
        </h2>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
          {consequences.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-lg font-medium text-gray-700 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 uppercase tracking-wide">
              <AlertCircle size={20} className="text-red-500" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsequencesSection;
