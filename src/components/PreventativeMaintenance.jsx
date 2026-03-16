import React from 'react';

const PreventativeMaintenance = () => {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Commercial Services</h4>
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-dark uppercase">
            PREVENTATIVE MAINTENANCE FOR YOUR BUSINESS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Top Left Cell */}
          <div className="relative h-64 md:h-80 rounded-sm overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1632759145355-66236b3fe745?auto=format&fit=crop&q=80" alt="Roof" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors"></div>
          </div>

          {/* Top Right Cell - Yellow Box */}
          <div className="bg-brand-yellow p-8 md:p-12 flex flex-col justify-center rounded-sm text-brand-dark">
            <h3 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">
              PREVENTATIVE MAINTENANCE OPTIONS
            </h3>
            <p className="font-medium text-lg mb-6 leading-relaxed">
              We offer proactive, flexible maintenance programs to business owners. 
              Keeping a commercial roof in good condition ensures safety and protects your bottom line.
            </p>
          </div>

          {/* Bottom Left Cell - Yellow Box */}
          <div className="bg-brand-yellow p-8 md:p-12 flex flex-col justify-center rounded-sm text-brand-dark">
            <h3 className="text-xl font-oswald font-bold uppercase mb-4 tracking-wide">
              OUR APPROACH
            </h3>
            <p className="font-medium text-lg mb-6 leading-relaxed">
              We create custom preventative maintenance guidelines that match the exact needs of your property.
              Say goodbye to one-size-fits-all contracts.
            </p>
          </div>

          {/* Bottom Right Cell - Image */}
          <div className="relative h-64 md:h-80 rounded-sm overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1504917595217-d414ba202860?auto=format&fit=crop&q=80" alt="Roof Inspection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/40 transition-colors"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PreventativeMaintenance;
