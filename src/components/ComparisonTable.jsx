import React from 'react';

const ComparisonTable = () => {
  const rows = [
    {
      feature: "Roof Lifespan",
      without: "Reduced significantly",
      with: "Extended up to 30%",
      isPositive: true
    },
    {
      feature: "Leak Risk",
      without: "High likelihood",
      with: "Virtually eliminated",
      isPositive: true
    },
    {
      feature: "Repair Costs",
      without: "$1,000 - $3,000+ Average",
      with: "Included/Discounted",
      isPositive: true
    },
    {
      feature: "Resale Property Value",
      without: "Decreased significantly",
      with: "Maintained/Increased",
      isPositive: true
    },
    {
      feature: "Inspection",
      without: "None",
      with: "Regular detailed reports",
      isPositive: true
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Compare The Value</h4>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold text-brand-dark uppercase mb-16 leading-tight max-w-3xl mx-auto">
          SEE THE DIFFERENCE OUR MAINTENANCE PLAN MAKES FOR YOUR HOME & WALLET
        </h2>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
          {/* Header */}
          <div className="grid grid-cols-3 text-sm md:text-base font-bold tracking-wider uppercase font-oswald">
            <div className="p-6 bg-brand-dark text-white border-r border-gray-700 flex items-center justify-center">
              Features
            </div>
            <div className="p-6 bg-brand-dark text-white border-r border-gray-700 flex items-center justify-center">
              Without Maintenance
            </div>
            <div className="p-6 bg-brand-yellow text-brand-dark flex items-center justify-center">
              Maintenance Plan
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-gray-200">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 text-sm md:text-base">
                <div className="p-6 text-left font-bold text-brand-dark bg-gray-50 uppercase tracking-wide flex items-center">
                  {row.feature}
                </div>
                <div className="p-6 text-red-500 font-medium flex items-center justify-center text-center">
                  <span className="hidden md:inline mr-2 px-1">✕</span> {row.without}
                </div>
                <div className="p-6 text-green-600 font-bold bg-green-50/30 flex items-center justify-center text-center">
                  <span className="hidden md:inline mr-2 px-1">✓</span> {row.with}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
