import React from 'react';
import { Clock, Banknote, ShieldAlert } from 'lucide-react';

const ROISection = () => {
  const stats = [
    {
      icon: <Clock size={40} strokeWidth={1.5} />,
      value: "7 Years",
      label: "Average Roof Life Extension"
    },
    {
      icon: <Banknote size={40} strokeWidth={1.5} />,
      value: "$4,000",
      label: "Savings on Average Repairs"
    },
    {
      icon: <ShieldAlert size={40} strokeWidth={1.5} />,
      value: "60%",
      label: "Reduction in Emergency Calls"
    }
  ];

  return (
    <section className="bg-brand-yellow py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h4 className="text-sm font-bold tracking-widest text-brand-dark uppercase mb-2">The ROI</h4>
        <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-dark uppercase mb-6">
          YOUR INVESTMENT, YOUR SAVINGS
        </h2>
        <p className="text-brand-dark/80 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto">
          See how much you can save with a continuous maintenance plan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y-2 md:divide-y-0 md:divide-x-2 divide-brand-dark/20 text-brand-dark">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center pt-8 md:pt-0 pb-8 md:pb-0 px-4">
              <div className="mb-6 opacity-90">
                {stat.icon}
              </div>
              <h3 className="text-5xl md:text-6xl font-bold font-oswald mb-4 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-lg font-semibold tracking-wide uppercase max-w-[200px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROISection;
