import React, { useState } from 'react';
import { Play, BookOpen, Youtube, ExternalLink, X, Flame } from 'lucide-react';
import { SERMONS, Sermon } from '@/src/data/churchData';

interface SermonsSectionProps {
  selectedSermonId?: string;
}

export const SermonsSection: React.FC<SermonsSectionProps> = () => {
  const [activeModalSermon, setActiveModalSermon] = useState<Sermon | null>(null);

  return (
    <section id="sermons" className="py-20 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>05. Anointed Messages &amp; Teachings</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Sound Doctrine, Prophetic Preaching &amp; Deliverance
            </h2>
            <p className="mt-2 text-slate-700 max-w-2xl text-sm sm:text-base">
              Listen to the uncompromised Word of God ministered by Pastor Dr. Festus Ogunmola and global teachings from General Overseer Dr. D.K. Olukoya.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@MFMEDINBURGH"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-purple-900 hover:bg-purple-800 rounded-xl transition-colors whitespace-nowrap self-start md:self-auto shadow-xs"
          >
            <Youtube className="w-4 h-4 text-red-500 fill-red-500" />
            <span>YouTube Archive</span>
            <ExternalLink className="w-3.5 h-3.5 text-purple-300" />
          </a>
        </div>

        {/* Sermon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERMONS.map((sermon) => (
            <div
              key={sermon.id}
              className="group rounded-2xl bg-purple-50/30 border border-purple-200 hover:border-purple-400 transition-all duration-200 overflow-hidden flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                {/* Visual Thumbnail Area with Play Button */}
                <div
                  onClick={() => setActiveModalSermon(sermon)}
                  className="relative aspect-video bg-purple-950 overflow-hidden cursor-pointer flex items-center justify-center"
                >
                  <img
                    src={`https://img.youtube.com/vi/${sermon.youtubeId}/hqdefault.jpg`}
                    alt={sermon.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/30 to-transparent" />

                  {/* Play Overlay Button */}
                  <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 group-hover:scale-110 text-slate-950 flex items-center justify-center shadow-lg transition-transform">
                    <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                  </div>

                  <span className="absolute bottom-3 right-3 text-[11px] font-mono text-white bg-purple-950/80 px-2 py-0.5 rounded-md tabular-nums border border-purple-800">
                    {sermon.duration}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-purple-700 font-semibold mb-2">
                    <span className="text-red-700">{sermon.series}</span>
                    <span className="text-purple-300">·</span>
                    <span className="text-purple-900">{sermon.date}</span>
                  </div>

                  <h3
                    onClick={() => setActiveModalSermon(sermon)}
                    className="text-lg font-bold text-purple-950 group-hover:text-purple-700 transition-colors cursor-pointer leading-snug mb-2"
                  >
                    {sermon.title}
                  </h3>

                  <p className="text-xs font-semibold text-slate-700 mb-2">
                    Preacher: <span className="text-purple-950 font-bold">{sermon.preacher}</span>
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-purple-800 font-medium mb-3">
                    <BookOpen className="w-3.5 h-3.5 text-red-600 shrink-0" />
                    <span>{sermon.bibleVerse}</span>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {sermon.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => setActiveModalSermon(sermon)}
                  className="w-full py-2.5 px-4 text-xs font-bold text-purple-950 bg-white hover:bg-purple-100 border border-purple-200 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-purple-950" />
                  <span>Watch Message &amp; Notes</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Player */}
        {activeModalSermon && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-4xl bg-purple-950 border border-purple-800 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
              {/* Header */}
              <div className="p-4 sm:p-5 border-b border-purple-800 flex items-center justify-between text-white">
                <div>
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                    {activeModalSermon.series}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white truncate max-w-md sm:max-w-xl">
                    {activeModalSermon.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalSermon(null)}
                  className="p-1.5 text-purple-300 hover:text-white rounded-lg bg-purple-900"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Embed */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeModalSermon.youtubeId}?autoplay=1&rel=0`}
                  title={activeModalSermon.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              {/* Notes & Takeaways */}
              <div className="p-6 overflow-y-auto bg-purple-900 text-purple-100 text-sm">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-purple-200 mb-3 border-b border-purple-800 pb-3">
                  <span><strong>Minister:</strong> {activeModalSermon.preacher}</span>
                  <span>·</span>
                  <span><strong>Scripture:</strong> {activeModalSermon.bibleVerse}</span>
                  <span>·</span>
                  <span><strong>Duration:</strong> {activeModalSermon.duration}</span>
                </div>

                <p className="text-purple-100 leading-relaxed mb-4">
                  {activeModalSermon.summary}
                </p>

                <div className="p-4 bg-purple-950 rounded-xl border border-purple-800">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                    Key Spiritual Insights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-purple-200">
                    {activeModalSermon.keyPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
