import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "PEACE OF MIND",
      description: "Imagine waking up to a severe storm knowing your roof is in great condition. Maintenance eliminates worries about unexpected leaks and damage. Sleep soundly, knowing you're protected.",
      image: "https://images.unsplash.com/photo-1541889813-91e8eeb678ee?auto=format&fit=crop&q=80",
      num: "01"
    },
    {
      title: "COST-EFFECTIVE IN LONG RUN",
      description: "A small investment today can prevent a massive repair bill tomorrow. Regular checkups nip issues in the bud.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
      num: "02"
    },
    {
      title: "INCREASED LIFESPAN",
      description: "Like any part of your home, your roof needs TLC to last. Regular care prolongs its life, giving you the best return on your roofing investment.",
      image: "https://images.unsplash.com/photo-1628624747186-a941c476b7ef?auto=format&fit=crop&q=80",
      num: "03"
    }
  ];

  return (
    <section className="py-24 bg-white" id="benefits">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Why Choose Us</h4>
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-dark uppercase mb-6">
          Benefits at a Glance
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          A well-maintained roof has more than just aesthetic appeal. Explore the advantages of comprehensive roofing maintenance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-brand-gray rounded-[32px] overflow-hidden text-left border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-brand-yellow text-brand-dark flex items-center justify-center font-bold text-sm">
                    {benefit.num}
                  </span>
                  <h3 className="text-xl font-oswald font-bold text-brand-dark uppercase tracking-wide">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed font-medium">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
