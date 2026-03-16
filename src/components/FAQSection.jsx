import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-bold font-oswald uppercase text-brand-dark group-hover:text-brand-yellow transition-colors pr-8">
          {question}
        </span>
        <span className="text-brand-yellow shrink-0">
          {isOpen ? <Minus size={24} /> : <Plus size={24} />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 max-opacity-100 mt-4' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-600 font-medium pb-2 text-base leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What does roof maintenance include?",
      answer: "Our maintenance plan includes a comprehensive inspection, clearing debris from the roof surface and gutters, checking for signs of water damage, inspecting flashings, and making minor seal repairs to prevent future leaks."
    },
    {
      question: "How often should I have my roof inspected?",
      answer: "We recommend at least one thorough inspection per year, preferably in the fall before winter weather hits. However, properties with heavy tree coverage or in extreme weather zones may benefit from bi-annual inspections."
    },
    {
      question: "Can I transfer my maintenance plan if I sell my home?",
      answer: "Yes! Our maintenance plans are fully transferable to the new homeowner, adding significant value and peace of mind when selling your property."
    },
    {
      question: "What happens if you find a major problem during an inspection?",
      answer: "If we discover an issue that requires more than a minor repair, we will document it fully with photos, explain the problem, and provide you with a detailed, discounted estimate before any additional work is performed."
    },
    {
      question: "Are your maintenance plans backed by a warranty?",
      answer: "Yes, all repairs made as part of our maintenance plan come with a standard workmanship warranty. Our plans are designed to ensure you never void your manufacturer's warranty through neglect."
    }
  ];

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h4 className="text-sm font-bold tracking-widest text-center text-gray-500 uppercase mb-2">Got Questions?</h4>
        <h2 className="text-3xl md:text-5xl font-oswald font-bold text-brand-dark uppercase text-center mb-16 leading-tight">
          EVERYTHING YOU NEED TO KNOW ABOUT OUR ROOF MAINTENANCE PLANS
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
