import React, { useState } from 'react';
import { BookOpen, Flame, Sparkles, ExternalLink, Copy, Check, ChevronRight, X, ShieldCheck } from 'lucide-react';
import { DKO_PUBLICATIONS, DKOPublication } from '../data/churchData';

interface PublicationsSectionProps {
  onOpenAgents?: (tab?: 'prayer' | 'visitor' | 'deliverance') => void;
}

export const PublicationsSection: React.FC<PublicationsSectionProps> = ({ onOpenAgents }) => {
  const [selectedBook, setSelectedBook] = useState<DKOPublication | null>(null);
  const [copiedPrayer, setCopiedPrayer] = useState(false);

  const handleCopyPrayer = (prayer: string) => {
    navigator.clipboard.writeText(prayer);
    setCopiedPrayer(true);
    setTimeout(() => setCopiedPrayer(false), 2200);
  };

  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-purple-950 via-slate-950 to-purple-950 text-white relative overflow-hidden border-t border-purple-900">
      {/* Background ambient spiritual fire glow */}
      <div className="absolute top-0 right-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (mountainoffire.org template style) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-purple-900/80 px-4 py-1.5 rounded-full border border-purple-700/80 uppercase tracking-wider mb-4 shadow-sm">
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Spiritual Warfare Library &amp; Publications</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Anointed Books by Dr. D.K. Olukoya
          </h2>

          <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed">
            Equip your spiritual arsenal with time-tested revelations, deliverance manuals, and aggressive prayer handbooks authored by the General Overseer of Mountain of Fire and Miracles Ministries Worldwide.
          </p>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-amber-300">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Biblical Deliverance Blueprints</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Available in Edinburgh Sanctuary &amp; Online</span>
            </span>
          </div>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DKO_PUBLICATIONS.map((book) => (
            <div
              key={book.id}
              className="bg-purple-900/40 backdrop-blur-md rounded-2xl border border-purple-800/80 hover:border-amber-400/80 p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1.5 shadow-xl hover:shadow-2xl hover:shadow-purple-950/60 group"
            >
              <div>
                {/* Book Badge & Read Strategy */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-xs">
                    {book.badge}
                  </span>
                  <span className="text-[11px] font-mono text-purple-300">
                    {book.readTime}
                  </span>
                </div>

                {/* Simulated 3D Book Cover Graphic */}
                <div
                  onClick={() => setSelectedBook(book)}
                  className={`relative cursor-pointer mb-5 h-48 rounded-xl bg-gradient-to-br ${book.color} p-5 border-l-8 border-l-amber-500/80 border-t border-r border-b border-purple-700/60 shadow-2xl flex flex-col justify-between overflow-hidden group-hover:scale-[1.02] transition-transform`}
                >
                  <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-amber-400/10 rounded-full blur-xl" />

                  <div className="flex items-start justify-between">
                    <div className="w-7 h-7 rounded-lg bg-amber-400/20 border border-amber-300/40 flex items-center justify-center text-amber-300">
                      <Flame className="w-4 h-4 fill-amber-300" />
                    </div>
                    <span className="text-[10px] font-bold text-amber-200/80 uppercase tracking-widest">
                      MFM PRESS
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white leading-tight drop-shadow-md group-hover:text-amber-200 transition-colors">
                      {book.title}
                    </h3>
                    <p className="text-[11px] text-amber-300/90 font-medium mt-1">
                      {book.tagline}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/20 flex items-center justify-between text-[11px] text-purple-200">
                    <span className="font-semibold text-white">{book.author}</span>
                    <span className="text-amber-300 text-[10px] uppercase font-bold flex items-center gap-0.5">
                      Preview <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Category & Description */}
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider block mb-1">
                  {book.category}
                </span>
                <p className="text-xs text-purple-200/90 leading-relaxed line-clamp-3 mb-4">
                  {book.description}
                </p>

                {/* Sample Prayer Teaser */}
                <div className="p-3 bg-purple-950/80 rounded-xl border border-purple-800/80 mb-4">
                  <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider block mb-1">
                    Warfare Prayer Bullet:
                  </span>
                  <p className="text-xs text-purple-100 italic line-clamp-2">
                    "{book.samplePrayer}"
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-purple-800/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedBook(book)}
                  className="px-4 py-2 text-xs font-bold text-purple-200 hover:text-white bg-purple-950 hover:bg-purple-900 border border-purple-700 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Read Overview</span>
                </button>

                <a
                  href="https://mountainoffire.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-xs flex items-center gap-1"
                >
                  <span>Get Book</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global E-Books & Bookstore Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-900/90 via-purple-900 to-indigo-950 border border-amber-400/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block mb-1">
              Official MFM Worldwide Literature Ministry
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
              Looking for Hard Copies in Edinburgh or Digital E-Books?
            </h3>
            <p className="text-xs sm:text-sm text-purple-200 max-w-xl">
              Physical copies of Dr. D.K. Olukoya’s prayer books, 70-Day fasting booklets, and Battle Cry Christian Ministries publications are available at the church bookstore at 13 Bangor Road, Leith after Sunday and midweek services.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onOpenAgents && (
              <button
                onClick={() => onOpenAgents('prayer')}
                className="px-4 py-2.5 text-xs font-bold text-purple-200 hover:text-white bg-purple-950 border border-purple-700 hover:bg-purple-900 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>Pray with Bullets Now</span>
              </button>
            )}

            <a
              href="https://mountainoffire.org"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg transition-all flex items-center gap-1.5"
            >
              <span>Visit MFM Worldwide Bookstore</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Book Detail Modal */}
      {selectedBook && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedBook.title}
          className="fixed inset-0 z-50 bg-purple-950/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            className="fixed inset-0"
            onClick={() => setSelectedBook(null)}
          />

          <div className="relative z-10 max-w-2xl w-full bg-slate-900 border border-purple-700 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8 text-white">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-purple-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-red-600 flex items-center justify-center text-slate-950 font-bold">
                  <Flame className="w-5 h-5 fill-slate-950" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                    {selectedBook.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {selectedBook.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedBook(null)}
                className="p-1.5 text-purple-300 hover:text-white rounded-lg hover:bg-purple-900 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="py-5 space-y-4">
              <div>
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Author: <span className="text-white normal-case">{selectedBook.author}</span>
                </p>
                <p className="text-xs text-purple-300 italic mt-0.5">
                  {selectedBook.tagline}
                </p>
              </div>

              <div className="bg-purple-950/80 p-4 rounded-xl border border-purple-800 text-xs sm:text-sm text-purple-100 leading-relaxed">
                {selectedBook.description}
              </div>

              {/* Warfare Prayer Card with Copy */}
              <div className="p-4 bg-gradient-to-r from-red-950/90 to-purple-950 rounded-xl border border-red-700/60 shadow-inner">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-amber-400" />
                    <span>Featured Warfare Prayer Bullet:</span>
                  </span>

                  <button
                    onClick={() => handleCopyPrayer(selectedBook.samplePrayer)}
                    className="px-2.5 py-1 text-[11px] font-semibold text-purple-200 hover:text-white bg-purple-900/60 hover:bg-purple-800 rounded-lg border border-purple-700 transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {copiedPrayer ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-300">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Bullet</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="text-sm font-medium text-white italic leading-relaxed">
                  "{selectedBook.samplePrayer}"
                </p>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="pt-4 border-t border-purple-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-purple-300">
                Available at 13 Bangor Road, Leith Sanctuary
              </span>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedBook(null)}
                  className="w-full sm:w-auto px-4 py-2 text-xs font-semibold text-purple-200 hover:text-white bg-purple-950 border border-purple-800 rounded-xl"
                >
                  Close
                </button>
                <a
                  href="https://mountainoffire.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>Order Online</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
