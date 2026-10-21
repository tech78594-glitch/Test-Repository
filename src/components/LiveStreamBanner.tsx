import React, { useState, useEffect } from 'react';
import { Play, Radio, X, Volume2, Flame, ExternalLink } from 'lucide-react';

interface LiveStreamBannerProps {
  onWatchNow: (serviceName: string) => void;
  forcedLiveState?: boolean;
}

export const LiveStreamBanner: React.FC<LiveStreamBannerProps> = ({
  onWatchNow,
  forcedLiveState,
}) => {
  const [isLive, setIsLive] = useState(false);
  const [currentServiceName, setCurrentServiceName] = useState('Glorious Worship & Deliverance Service');
  const [isDismissed, setIsDismissed] = useState(false);
  const [isSimulated, setIsSimulated] = useState(false);

  useEffect(() => {
    const checkIsServiceLive = () => {
      if (forcedLiveState || isSimulated) {
        setIsLive(true);
        return;
      }

      const now = new Date();
      const day = now.getDay(); // 0=Sun, 2=Tue, 5=Fri, 6=Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeInMins = hours * 60 + minutes;

      // Sunday: 10:00 (600) to 13:00 (780)
      if (day === 0 && timeInMins >= 600 && timeInMins <= 780) {
        setIsLive(true);
        setCurrentServiceName('Sunday Glorious Worship & Deliverance Service');
        return;
      }

      // Tuesday: 18:30 (1110) to 20:30 (1230)
      if (day === 2 && timeInMins >= 1110 && timeInMins <= 1230) {
        setIsLive(true);
        setCurrentServiceName('Tuesday Spiritual Clinic & Bible Study');
        return;
      }

      // Friday: 18:30 (1110) to 20:30 (1230)
      if (day === 5 && timeInMins >= 1110 && timeInMins <= 1230) {
        setIsLive(true);
        setCurrentServiceName('Friday Deliverance & Intercession Hour');
        return;
      }

      // 1st Saturday: 09:00 (540) to 12:00 (720)
      if (day === 6 && now.getDate() <= 7 && timeInMins >= 540 && timeInMins <= 720) {
        setIsLive(true);
        setCurrentServiceName('Power Must Change Hands (PMCH Live Broadcast)');
        return;
      }

      setIsLive(false);
    };

    checkIsServiceLive();
    const timer = setInterval(checkIsServiceLive, 30000);
    return () => clearInterval(timer);
  }, [forcedLiveState, isSimulated]);

  if (isDismissed) {
    return (
      <div className="fixed top-16 right-4 z-40">
        <button
          onClick={() => {
            setIsDismissed(false);
            setIsSimulated(true);
          }}
          className="px-3 py-1 bg-red-600/90 hover:bg-red-600 text-white text-[11px] font-bold rounded-full shadow-lg flex items-center gap-1.5 animate-pulse"
        >
          <span className="w-2 h-2 rounded-full bg-white" />
          <span>Show Live Broadcast</span>
        </button>
      </div>
    );
  }

  // If not currently live during the week, provide a subtle toggle so visitors/reviewers can test it
  if (!isLive && !isSimulated) {
    return (
      <div className="bg-purple-950/95 border-b border-purple-800/80 py-1.5 px-4 text-center text-xs text-purple-200 flex items-center justify-center gap-3">
        <span className="flex items-center gap-1 text-[11px] text-amber-300 font-medium">
          <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Next Live Broadcast: Sunday at 10:00 AM &amp; 10:45 AM</span>
        </span>
        <button
          onClick={() => setIsSimulated(true)}
          className="text-[11px] underline text-purple-300 hover:text-white font-semibold cursor-pointer"
        >
          [Preview Live Stream State]
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-50 bg-gradient-to-r from-red-700 via-purple-900 to-red-800 text-white shadow-xl border-b border-amber-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          {/* Live Indicator & Service Title */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-1.5 bg-red-600 text-white text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full tracking-wider shadow-sm animate-pulse">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>LIVE NOW</span>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-white leading-tight">
                {currentServiceName}
              </p>
              <p className="text-[11px] text-amber-200/90 hidden md:block">
                Streaming live from MFM Edinburgh Sanctuary (13 Bangor Road, Leith)
              </p>
            </div>
          </div>

          {/* Actions: Watch Now + Dismiss */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onWatchNow(currentServiceName)}
              className="px-4 py-1.5 text-xs font-extrabold text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-md transition-all flex items-center gap-1.5"
            >
              <Play className="w-3.5 h-3.5 fill-slate-950" />
              <span>Watch Now</span>
            </button>

            <a
              href="https://www.youtube.com/@MFMEDINBURGH"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-white/90 hover:text-white bg-purple-950/60 hover:bg-purple-950 rounded-xl border border-purple-700/80 transition-colors"
            >
              <span>YouTube</span>
              <ExternalLink className="w-3 h-3 text-amber-300" />
            </a>

            <button
              onClick={() => setIsDismissed(true)}
              className="p-1.5 text-purple-200 hover:text-white rounded-lg hover:bg-purple-900/60 transition-colors"
              aria-label="Dismiss live stream banner"
              title="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
