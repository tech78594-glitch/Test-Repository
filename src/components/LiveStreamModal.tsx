import React, { useState } from 'react';
import { X, Youtube, ExternalLink, Flame, Users, HeartHandshake, Check, Radio } from 'lucide-react';

interface LiveStreamModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

export const LiveStreamModal: React.FC<LiveStreamModalProps> = ({
  isOpen,
  onClose,
  serviceTitle,
}) => {
  const [agreedCount, setAgreedCount] = useState(148);
  const [hasAgreed, setHasAgreed] = useState(false);

  if (!isOpen) return null;

  const handleAgree = () => {
    if (!hasAgreed) {
      setAgreedCount((c) => c + 1);
      setHasAgreed(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-purple-950/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-purple-950 border border-purple-800 rounded-2xl overflow-hidden shadow-2xl max-h-[92vh] flex flex-col">
        {/* Header with Live Badge */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 border-b border-purple-800 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span>LIVE BROADCAST</span>
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-white truncate max-w-xs sm:max-w-md">
                {serviceTitle}
              </h3>
              <p className="text-[11px] text-amber-300">
                MFM Edinburgh · 13 Bangor Road, Leith
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://www.youtube.com/@MFMEDINBURGH"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-white bg-red-700 hover:bg-red-600 rounded-xl transition-colors"
            >
              <Youtube className="w-3.5 h-3.5" />
              <span>Open on YouTube</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-purple-300 hover:text-white rounded-lg bg-purple-900"
              aria-label="Close live stream"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          {/* Official MFM Edinburgh Stream Embed with fallback */}
          <iframe
            src="https://www.youtube-nocookie.com/embed/live_stream?channel=UC7eK9hGq3UjXmD2M0d3W8qg&autoplay=1"
            title="MFM Edinburgh Live Stream"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            onError={(e) => {
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
        </div>

        {/* Live Interaction & Service Guide Footer */}
        <div className="p-4 sm:p-5 bg-purple-900/90 text-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-purple-800">
          <div className="flex items-center gap-3 text-xs">
            <div className="w-9 h-9 rounded-xl bg-purple-950 flex items-center justify-center text-amber-400">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] text-amber-300 font-bold uppercase tracking-wider block">
                Prayer Agreement Band
              </span>
              <p className="text-xs text-white">
                <strong className="text-amber-300 font-mono tabular-nums">{agreedCount}</strong> believers connected in agreement worldwide
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleAgree}
              className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                hasAgreed
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 shadow-md'
              }`}
            >
              {hasAgreed ? (
                <>
                  <Check className="w-4 h-4 stroke-[3]" />
                  <span>Agreed in Prayer! (Amen)</span>
                </>
              ) : (
                <>
                  <HeartHandshake className="w-4 h-4" />
                  <span>Stand in Agreement (Amen)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
