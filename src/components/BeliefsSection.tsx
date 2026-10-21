import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Flame } from 'lucide-react';
import { BELIEFS } from '@/src/data/churchData';

export const BeliefsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>07. Biblical Foundations</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            What We Believe: Uncompromised Apostolic Truth
          </h2>
          <p className="mt-2 text-slate-700 text-sm sm:text-base">
            Our doctrine is anchored in the infallible Word of God. We contend earnestly for the faith once delivered unto the saints (Jude 1:3).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {BELIEFS.map((belief, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-purple-100 bg-purple-50/30 hover:bg-purple-50/70 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center font-bold text-xs shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-purple-950">
                        {belief.title}
                      </h3>
                      <span className="text-xs text-red-700 font-semibold">
                        {belief.verse}
                      </span>
                    </div>
                  </div>

                  <div className="p-1 rounded-md text-purple-400 hover:text-purple-700">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-700 leading-relaxed border-t border-purple-100 pt-3">
                    <p>{belief.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
