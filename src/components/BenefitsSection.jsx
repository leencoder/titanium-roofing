import React from 'react';
import img1 from './../assets/images/Bi-annual Inspections.png';
import img2 from './../assets/images/Damage Observation Reports.png';
import img3 from './../assets/images/Roof savings account.png';
import { useState } from "react";


const BenefitsSection = () => {
  const [hovered, setHovered] = useState(false);
  const benefits = [
    {
      title: "Bi-annual Inspections",
      description: "Upon inspection, we analyze you’re entire roof system checking for any potential issues, removing rooftop debris, completing small spot repairs, and providing expert advice on the best way to address larger issues that arise sooner than later. A proactively maintained roof can last up to 60% longer compared to a roof that’s off maintenance.",
      image: img1,
      num: "01"
    },
    {
      title: "Damage Observation Reports",
      description: "All inspections include an in-depth and transparent Photo Observation Report, and a detailed log file on the condition of your roof.",
      image: img2,
      num: "02"
    },
    {
      title: "Roof savings account",
      description: "Your plan automatically includes the benefit of an “RSA,” where 100% of your dollars spent on the program go towards a new roof with Titanium Roofing, and all credit rolls over annually",
      image: img3,
      num: "03"
    }
  ];

  return (
    <section className="py-24 bg-white" id="benefits">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h4 className="text-[19px] font-condensed tracking-widest text-gray-500 uppercase mb-2 italic">Our Services</h4>
        <h2 className="text-4xl md:text-5xl font-condensed font-bold text-brand-dark uppercase mb-6">
          Benefits at a Glance
        </h2>
        <p className="text-gray-600 mb-16 text-lg">
         Our comprehensive Roof Maintenance Program ensures your roof s cared for throughout any season. A maintenance program is essential for commercial properties, and is often required to keep you roof’s manufacturer warranty active. We offer wither bi-annual or quarterly inspections.
        </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#FFFBE8] rounded-[24px] p-4 overflow-hidden text-left border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
      {/* Card */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`
          relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300`}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-2xl">
          <img
            src={benefit.image}
            alt={benefit.title}
            className="w-full h-full object-cover"
          />

          {/* Hover: Yellow label over image */}
          <div
            className={`
              absolute bottom-0 left-0 right-0 bg-amber-400 py-2 text-center
              font-black text-sm tracking-widest text-neutral-900
              transition-all duration-300
              ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            `}
          >
            {benefit.title}
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Icon + Heading Row */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-amber-400 flex items-center justify-center flex-shrink-0">
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke={"currentColor"}
                strokeWidth="2.5"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </div>
            <span
              className={`
                font-black text-sm tracking-widest text-neutral-900
              `}
            >
              {benefit.title}
            </span>
          </div>

          {/* Description */}
          <p className="text-neutral-700 text-sm leading-relaxed">
            {benefit.description}
          </p>
        </div>
      </div>
    </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
