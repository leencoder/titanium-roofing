import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 py-4">
      <button 
        className="w-full flex items-center justify-between text-left focus:outline-none group"
        onClick={onClick}
      >
        <span className="text-lg font-bold font-condensed uppercase text-brand-dark group-hover:text-brand-yellow transition-colors pr-8">
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
      question: "Is the maintenance plan transferable if sell my home?",
      answer: "Essential plan members receive priority scheduling during business hours. Premium plan members get 24/7emergency support with guaranteed response within 4 hours, ensuring your home is protected no matter when disaster strikes."
    },
    {
      question: "How often should I have my roof inspected?",
      answer: "Essential plan members receive priority scheduling during business hours. Premium plan members get 24/7emergency support with guaranteed response within 4 hours, ensuring your home is protected no matter when disaster strikes."
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
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h4 className="tracking-widest font-condensed text-center text-gray-500 uppercase mb-3 italic">Frequently Asked Questions</h4>
        <h2 className="text-3xl md:text-5xl font-condensed font-bold text-gray-800 uppercase text-center mb-16 tracking-wide">
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
