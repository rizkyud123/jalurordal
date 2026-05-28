import React, { useState } from 'react';
import { faqData } from '../data';
import { ChevronDown, HelpCircle, MinusCircle, PlusCircle } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // first open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Visual backgrounds */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 mb-4 shadow-md">
            <span className="font-mono text-xs text-blue-300 tracking-wider font-bold uppercase">
              Pertanyaan Umum Teratas
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base md:text-lg text-slate-400">
            Punya keraguan seputar beasiswa, biaya kuliah, atau alur belajar? Temukan jawaban faktual di bawah ini.
          </p>
        </div>

        {/* Accordion Layout */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-slate-900 border-amber-500 shadow-xl'
                    : 'bg-slate-900/40 border-slate-800/80 hover:border-slate-700/60'
                }`}
              >
                {/* Header click bar */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-amber-500/20 rounded-2xl"
                >
                  <span className="font-sans font-bold text-base text-white pr-4 flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-amber-500' : 'text-slate-400'}`} />
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <MinusCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  ) : (
                    <PlusCircle className="w-5 h-5 text-slate-400 flex-shrink-0 hover:text-white transition-colors" />
                  )}
                </button>

                {/* Answer drawer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-[300px] border-t border-slate-800' : 'max-h-0'
                  }`}
                >
                  <p className="p-6 font-sans text-sm text-slate-300 leading-relaxed bg-slate-900/40">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
