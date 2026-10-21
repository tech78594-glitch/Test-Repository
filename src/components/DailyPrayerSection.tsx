import React, { useState, useEffect } from 'react';
import { Flame, Copy, Check, Play, Pause, RotateCcw } from 'lucide-react';
import { DAILY_PRAYER_POINTS } from '@/src/data/churchData';
import prayerImage from '@/src/assets/images/prayer_intercession_1792594654591.jpg';

export const DailyPrayerSection: React.FC = () => {
  const [prayedPoints, setPrayedPoints] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);

  // Prayer Timer State
  const [timerSeconds, setTimerSeconds] = useState(15 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  const togglePoint = (id: number) => {
    setPrayedPoints((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleCopyPrayers = () => {
    const textToCopy = [
      '🔥 MFM EDINBURGH - DAILY WARFARE PRAYER BULLETS',
      'Scripture Theme: Obadiah 1:17\n',
      ...DAILY_PRAYER_POINTS.map(
        (p, idx) => `${idx + 1}. [${p.title}] (${p.scripture})\n"${p.text}"\nPrayer: ${p.bullet}\n`
      ),
      'Join us at 13 Bangor Rd, Leith, Edinburgh EH6 5JY | info@mfmedinburgh.org',
    ].join('\n');

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const resetTimer = (mins: number) => {
    setIsTimerRunning(false);
    setTimerSeconds(mins * 60);
  };

  return (
    <section id="prayers" className="py-20 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-red-600 fill-red-600" />
            <span>03. The Altar of Fire &amp; Intercession</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            Today's Spiritual Warfare &amp; Deliverance Bullets
          </h2>
          <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            In Mountain of Fire and Miracles Ministries, we do not pray weak prayers. Take these targeted scripture-grounded 
            prayer bullets to release God’s power into your day, destroy foundational embargos, and possess your possessions.
          </p>
        </div>

        {/* 2-Column Prayer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Prayer Points Checklist */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-purple-100">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-600 fill-red-600" />
                <span className="text-xs font-bold text-purple-950 uppercase tracking-wide">
                  5 Warfare Directives for Today
                </span>
                <span className="text-xs text-purple-300">·</span>
                <span className="text-xs font-bold text-purple-800 tabular-nums">
                  {prayedPoints.length} of {DAILY_PRAYER_POINTS.length} Prayed
                </span>
              </div>

              <button
                onClick={handleCopyPrayers}
                className="py-1.5 px-3 text-xs font-semibold text-purple-900 hover:text-purple-950 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap"
                title="Copy all prayer bullets to share or save"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-purple-600" />
                    <span>Copy All Bullets</span>
                  </>
                )}
              </button>
            </div>

            {/* Prayer Cards */}
            {DAILY_PRAYER_POINTS.map((item) => {
              const isChecked = prayedPoints.includes(item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => togglePoint(item.id)}
                  className={`p-5 rounded-xl border transition-all cursor-pointer select-none ${
                    isChecked
                      ? 'bg-purple-50/90 border-purple-300 shadow-xs'
                      : 'bg-white border-purple-100 hover:border-purple-200'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <button
                      type="button"
                      aria-label={isChecked ? `Mark ${item.title} as unprayed` : `Mark ${item.title} as prayed`}
                      className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center shrink-0 transition-colors ${
                        isChecked
                          ? 'bg-purple-900 text-white'
                          : 'border border-purple-300 bg-white hover:border-purple-500'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </button>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-purple-950">{item.title}</span>
                        <span className="text-xs text-purple-300">·</span>
                        <span className="text-xs font-bold text-red-700">{item.scripture}</span>
                      </div>

                      <p className="text-xs text-slate-500 italic mb-2">
                        “{item.text}”
                      </p>

                      <p className={`text-sm leading-relaxed ${
                        isChecked ? 'text-purple-950 font-semibold' : 'text-slate-800 font-medium'
                      }`}>
                        👉 <span className="font-bold text-purple-900">Prayer:</span> {item.bullet}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Image & Warfare Prayer Timer in MFM Royal Purple */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Visual Photo Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-purple-200 aspect-[4/3]">
              <img
                src={prayerImage}
                alt="Believers in fervent prayer at Mountain of Fire and Miracles Ministries Edinburgh"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold text-amber-300 tracking-wider uppercase block">
                  James 5:16
                </span>
                <p className="text-xs text-purple-100 mt-1 leading-snug">
                  “The effectual fervent prayer of a righteous man availeth much.”
                </p>
              </div>
            </div>

            {/* Interactive Warfare Prayer Timer in MFM Purple */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white border border-purple-800 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    Personal Warfare Timer
                  </span>
                </div>
                <span className="text-xs text-amber-300 font-mono">
                  {isTimerRunning ? 'PRAYING NOW' : 'READY'}
                </span>
              </div>

              {/* Big Timer Display */}
              <div className="text-center py-4 bg-purple-950/80 rounded-xl border border-purple-800 mb-4 shadow-inner">
                <span className="text-4xl font-extrabold text-amber-300 font-mono tabular-nums tracking-widest">
                  {formatTimer(timerSeconds)}
                </span>
                <p className="text-[11px] text-purple-200 mt-1">Focus your heart &amp; fire targeted prayer bullets</p>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className={`px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-colors ${
                    isTimerRunning
                      ? 'bg-amber-400 text-slate-950 hover:bg-amber-300'
                      : 'bg-white text-purple-950 hover:bg-purple-50'
                  }`}
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-slate-950" />
                      <span>Pause Prayer</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-purple-950" />
                      <span>Start Praying</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => resetTimer(15)}
                  className="p-2.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-purple-200 transition-colors"
                  title="Reset to 15 minutes"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Quick Preset Buttons */}
              <div className="flex items-center justify-center gap-2 text-xs">
                <span className="text-purple-300">Presets:</span>
                <button
                  onClick={() => resetTimer(5)}
                  className="px-2.5 py-1 rounded-lg bg-purple-900/80 hover:bg-purple-850 text-purple-200 hover:text-white"
                >
                  5m
                </button>
                <button
                  onClick={() => resetTimer(15)}
                  className="px-2.5 py-1 rounded-lg bg-purple-900/80 hover:bg-purple-850 text-purple-200 hover:text-white"
                >
                  15m
                </button>
                <button
                  onClick={() => resetTimer(30)}
                  className="px-2.5 py-1 rounded-lg bg-purple-900/80 hover:bg-purple-850 text-purple-200 hover:text-white"
                >
                  30m
                </button>
                <button
                  onClick={() => resetTimer(60)}
                  className="px-2.5 py-1 rounded-lg bg-purple-900/80 hover:bg-purple-850 text-purple-200 hover:text-white"
                >
                  1 hr (Midnight)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
