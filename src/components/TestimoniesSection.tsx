import React, { useState } from 'react';
import { Quote, Sparkles, Send, Check, Flame } from 'lucide-react';
import { TESTIMONIES } from '@/src/data/churchData';

export const TestimoniesSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setName('');
      setTitle('');
      setDetails('');
    }, 2500);
  };

  return (
    <section className="py-20 bg-purple-50/30 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>08. Trophies of Grace &amp; Miracles</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Testimonies of Deliverance &amp; Supernatural Breakthrough
            </h2>
            <p className="mt-2 text-slate-700 max-w-2xl text-sm sm:text-base">
              “And they overcame him by the blood of the Lamb, and by the word of their testimony.” — Revelation 12:11
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-xs whitespace-nowrap self-start md:self-auto flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-950" />
            <span>Share Your Testimony</span>
          </button>
        </div>

        {/* Testimonies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIES.map((test) => (
            <div
              key={test.id}
              className="p-6 rounded-2xl bg-white border border-purple-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-4 pb-2 border-b border-purple-100">
                  <span className="font-bold text-red-700">{test.category}</span>
                  <span className="text-purple-600 font-medium">{test.date}</span>
                </div>

                <Quote className="w-6 h-6 text-purple-400/40 mb-2" />

                <h3 className="text-base font-bold text-purple-950 mb-2 leading-snug">
                  {test.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  “{test.testimony}”
                </p>
              </div>

              <div className="pt-4 border-t border-purple-100">
                <p className="text-xs font-bold text-purple-950">{test.name}</p>
                <p className="text-[11px] text-slate-500">{test.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Share Testimony Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm animate-fade-in">
            <div className="w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-purple-200">
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-purple-950 mb-1">
                    Testimony Received!
                  </h3>
                  <p className="text-xs text-slate-600">
                    Thank you for testifying to the greatness of our God. May your miracle remain permanent in Jesus’ name!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-purple-100 pb-3">
                    <h3 className="text-lg font-bold text-purple-950">
                      Submit Your Praise Report
                    </h3>
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="text-purple-400 hover:text-purple-700 text-sm font-bold"
                    >
                      ✕
                    </button>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sister Grace"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Testimony Headline
                    </label>
                    <input
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g. Divine healing from chronic illness"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Detailed Testimony
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={details}
                      onChange={(e) => setDetails(e.target.value)}
                      placeholder="Describe what the Lord has done, scriptures stood upon, and the outcome..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    />
                  </div>

                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="px-4 py-2 text-xs font-semibold text-purple-800 hover:text-purple-950"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-xs flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Testimony</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
