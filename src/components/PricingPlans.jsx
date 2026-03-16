import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features, isPopular, category }) => (
  <div className={`relative bg-white rounded-lg p-8 border ${isPopular ? 'border-brand-yellow shadow-xl md:scale-105 z-10' : 'border-gray-200 shadow-sm'} flex flex-col h-full transition-transform`}>
    {isPopular && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-yellow font-oswald text-brand-dark px-4 py-1 text-sm font-bold tracking-wide">
        BEST VALUE
      </div>
    )}
    <div className="text-center mb-6">
      <h3 className="text-xl font-oswald font-bold uppercase mb-4 text-brand-dark">{title}</h3>
      <p className="text-sm text-gray-500 mb-2">Ideal for {category} offering thorough maintenance and check-ups.</p>
      <div className="flex items-baseline justify-center gap-1">
        <span className="text-4xl font-bold text-brand-dark">${price}</span>
        <span className="text-gray-500 font-medium">/ month</span>
      </div>
    </div>
    
    <ul className="space-y-4 mb-8 flex-grow">
      {features.map((feature, idx) => (
        <li key={idx} className="flex gap-3 text-sm text-gray-600">
          <Check size={18} className="text-green-500 shrink-0" strokeWidth={3} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    <button className={`w-full py-3 font-oswald font-bold tracking-wide uppercase transition-colors ${
      isPopular 
        ? 'bg-brand-yellow text-brand-dark hover:bg-yellow-400' 
        : 'bg-brand-dark text-white hover:bg-gray-800'
    }`}>
      Get Started
    </button>
  </div>
);

const PricingPlans = () => {
  const shingleFeatures = [
    "Annual standard check-ups",
    "No diagnostic fee",
    "Gutter cleaning included",
    "10% discount on repairs"
  ];
  const shingleMaxFeatures = [
    "Bi-annual standard check-ups",
    "No diagnostic fee",
    "Gutter cleaning & pressure washing",
    "20% discount on repairs"
  ];
  const tileFeatures = [
    "Annual standard check-ups",
    "No diagnostic fee",
    "Gutter cleaning included",
    "10% discount on repairs"
  ];
  const tileMaxFeatures = [
    "Bi-annual standard check-ups",
    "No diagnostic fee",
    "Gutter cleaning & pressure washing",
    "20% discount on repairs",
    "Broken tile replacement (up to 5)"
  ];

  return (
    <section className="py-24 bg-brand-gray" id="pricing">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Our Plans</h4>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-dark uppercase mb-4">
            MONTHLY PLAN OPTIONS
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-medium">
            A small investment for a lifetime of savings.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Shingle Roofing */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-oswald font-bold text-center text-brand-dark uppercase tracking-widest mb-10 pb-4 border-b-2 border-brand-yellow inline-block relative left-1/2 -translate-x-1/2">
              SHINGLE ROOFING
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <PricingCard title="Economy Plus" price="15" features={shingleFeatures} category="shingle roofs" isPopular={false} />
              <PricingCard title="Elite Max" price="25" features={shingleMaxFeatures} category="shingle roofs" isPopular={true} />
            </div>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden lg:block w-px bg-gray-300"></div>

          {/* Tile Roofing */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-oswald font-bold text-center text-brand-dark uppercase tracking-widest mb-10 pb-4 border-b-2 border-brand-yellow inline-block relative left-1/2 -translate-x-1/2">
              TILE ROOFING
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <PricingCard title="Standard Care" price="30" features={tileFeatures} category="tile roofs" isPopular={false} />
              <PricingCard title="Ultra Max" price="100" features={tileMaxFeatures} category="tile roofs" isPopular={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
