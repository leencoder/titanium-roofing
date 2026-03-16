import React from 'react';
import {BadgeDollarSign, ShieldCheck } from 'lucide-react';
import map from './../assets/images/CANADA MAP.svg';

const ProcessTimeline = () => {
  const steps = [
    {
      icon: <ShieldCheck size={32} strokeWidth={1.5} />,
      title: "Protect Your Property"
    },
    {
      icon: <BadgeDollarSign size={32} strokeWidth={1.5} />,
      title: "Increase Property Value"
    },
    {
      icon: <BadgeDollarSign size={32} strokeWidth={1.5} />,
      title: "Credit Towards Future Roof"
    }
  ];

  return (
    <section className="py-24 bg-white relative" id="process">
      {/* Background Image */}
            <div 
              className="absolute inset-0 -z-2 bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${map})` }}
            >
            </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h4 className="text-sm tracking-widest uppercase mb-2 italic">Never wonder what’s next</h4>
        <h2 className="text-4xl md:text-5xl font-condensed font-bold text-brand-dark uppercase mb-24">
          Our Process Make It Easy
        </h2>

        {/* Timeline Container */}
        <div className="relative flex flex-col md:flex-row justify-between items-center mx-auto gap-16 md:gap-0">
          
          {/* Dotted Line connector for desktop */}
          <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] border-t-2 border-dashed border-yellow-300 z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center w-full md:w-1/3 group">
              {/* Icon Circle */}
              <div className="w-24 h-24 rounded-full bg-brand-yellow flex items-center justify-center text-brand-dark mb-6 shadow-xl transform transition-transform duration-300 group-hover:scale-110">
                {step.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-condensed font-bold text-brand-dark uppercase px-4 text-center">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
