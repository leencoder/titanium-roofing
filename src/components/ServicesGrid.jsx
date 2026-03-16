import React from 'react';

const ServicesGrid = () => {
  const services = [
    {
      title: "Gutter Cleaning",
      description: "Ensure water flows freely away from your foundation. We remove all leaves, debris, and blockages.",
      image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&q=80",
    },
    {
      title: "Roof Inspections",
      description: "Detailed, drone-assisted and physical inspections to catch minor wear and tear before it escalates.",
      image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&q=80",
    },
    {
      title: "Leak Repairs",
      description: "Fast, reliable patching and sealing of compromised areas to restore your roof's watertight integrity.",
      image: "https://images.unsplash.com/photo-1504917595217-d414ba202860?auto=format&fit=crop&q=80",
    },
    {
      title: "Shingle Replacement",
      description: "Seamless matching and replacement of blown-off, cracked, or curling shingles to maintain aesthetics and function.",
      image: "https://images.unsplash.com/photo-1632759145355-66236b3fe745?auto=format&fit=crop&q=80",
    }
  ];

  return (
    <section className="py-24 bg-brand-gray" id="services">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h4 className="text-sm font-bold tracking-widest text-brand-yellow uppercase mb-2">What We Do</h4>
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-dark uppercase tracking-tight">
              OUR ROOFING MAINTENANCE SERVICES
            </h2>
          </div>
          <button className="bg-brand-yellow text-brand-dark font-bold font-oswald px-8 py-3 uppercase hover:bg-yellow-400 transition-colors shrink-0">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-shadow group flex flex-col h-full border border-gray-100">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute bottom-0 left-0 bg-brand-yellow text-brand-dark font-bold font-oswald uppercase px-4 py-1 text-sm m-3 shadow-md">
                  {service.title}
                </div>
              </div>
              <div className="p-6 flex-grow">
                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="px-6 pb-6 mt-auto">
                 <button className="text-brand-dark font-bold text-sm uppercase flex items-center gap-1 group-hover:text-brand-yellow transition-colors">
                   Learn More <span className="text-xl leading-none">&rsaquo;</span>
                 </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
