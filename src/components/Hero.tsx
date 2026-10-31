import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';
import { Calendar, Play, Shield, MapPin, Clock, ArrowRight, Bot, Flame, Video, BookOpen, Heart, Swords, Sparkles } from 'lucide-react';
import heroImage from '@/src/assets/images/hero_worship_sanctuary_1792594652620.jpg';
import { useLocale } from '@/src/context/LocaleContext';
import { Embers } from '@/src/components/motion/Embers';
import { RollingNumber } from '@/src/components/motion/RollingNumber';

interface HeroProps {
  onOpenPlanVisit: () => void;
  onOpenPrayerRequest: () => void;
  onOpenSermon: (sermonId?: string) => void;
  onOpenAgents?: (agentType?: 'prayer' | 'visitor' | 'deliverance') => void;
  isLive?: boolean;
  liveServiceName?: string;
  onWatchLive?: (serviceName: string) => void;
  onOpenGiving?: () => void;
}

interface NextServiceInfo {
  name: string;
  timeString: string;
  targetDate: Date;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenPlanVisit,
  onOpenPrayerRequest,
  onOpenSermon,
  onOpenAgents,
  isLive,
  liveServiceName = 'Sunday Glorious Worship & Deliverance Service',
  onWatchLive,
  onOpenGiving,
}) => {
  const { t } = useLocale();
  const [countdown, setCountdown] = useState<NextServiceInfo | null>(null);

  // Parallax: background drifts slower than the page, content eases away as you scroll past.
  const heroRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', reduceMotion ? '0%' : '28%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, reduceMotion ? 1.05 : 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.85], [1, reduceMotion ? 1 : 0.15]);

  // Compute the next upcoming MFM Edinburgh service
  useEffect(() => {
    const calculateNextService = () => {
      const now = new Date();
      const candidates: { name: string; timeString: string; date: Date }[] = [];

      for (let dayOffset = 0; dayOffset < 8; dayOffset++) {
        const d = new Date(now);
        d.setDate(now.getDate() + dayOffset);
        const dayOfWeek = d.getDay();

        if (dayOfWeek === 0) {
          // Sunday Pentecostal
          const sun1 = new Date(d);
          sun1.setHours(10, 0, 0, 0);
          if (sun1 > now) {
            candidates.push({
              name: 'Sunday Pentecostal Hour',
              timeString: 'Sunday at 10:00 AM',
              date: sun1,
            });
          }

          // Sunday Worship
          const sun2 = new Date(d);
          sun2.setHours(10, 45, 0, 0);
          if (sun2 > now) {
            candidates.push({
              name: 'Glorious Worship & Deliverance Service',
              timeString: 'Sunday at 10:45 AM',
              date: sun2,
            });
          }
        } else if (dayOfWeek === 2) {
          // Tuesday Bible Study
          const tue = new Date(d);
          tue.setHours(18, 30, 0, 0);
          if (tue > now) {
            candidates.push({
              name: 'Spiritual Clinic & Bible Study',
              timeString: 'Tuesday at 6:30 PM',
              date: tue,
            });
          }
        } else if (dayOfWeek === 5) {
          // Friday Intercession
          const fri = new Date(d);
          fri.setHours(18, 30, 0, 0);
          if (fri > now) {
            candidates.push({
              name: 'Deliverance & Intercessory Prayer',
              timeString: 'Friday at 6:30 PM',
              date: fri,
            });
          }
        } else if (dayOfWeek === 6) {
          // 1st Saturday PMCH
          if (d.getDate() <= 7) {
            const sat = new Date(d);
            sat.setHours(9, 0, 0, 0);
            if (sat > now) {
              candidates.push({
                name: 'Power Must Change Hands (PMCH)',
                timeString: '1st Saturday at 9:00 AM',
                date: sat,
              });
            }
          }
        }
      }

      if (candidates.length > 0) {
        candidates.sort((a, b) => a.date.getTime() - b.date.getTime());
        const next = candidates[0];
        const diffMs = next.date.getTime() - now.getTime();

        const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);

        setCountdown({
          name: next.name,
          timeString: next.timeString,
          targetDate: next.date,
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    calculateNextService();
    const interval = setInterval(calculateNextService, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={heroRef} className="relative bg-purple-950 text-white pt-10 pb-12 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden">
      {/* Background Hero Image with MFM Royal Purple & Holy Ghost Fire Scrim */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={heroImage}
          alt="Worship gathering at Mountain of Fire and Miracles Ministries Edinburgh"
          referrerPolicy="no-referrer"
          style={{ y: bgY, scale: bgScale }}
          className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/85 to-purple-900/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-red-600/10 to-transparent" />
        {/* Drifting glows */}
        <div aria-hidden="true" className="hero-glow w-[38rem] h-[38rem] -top-40 -left-32 bg-amber-500/20" />
        <div aria-hidden="true" className="hero-glow w-[30rem] h-[30rem] top-1/3 -right-24 bg-red-600/20" style={{ animationDelay: '-6s', animationDuration: '22s' }} />
        <div aria-hidden="true" className="hero-glow w-[26rem] h-[26rem] -bottom-32 left-1/3 bg-fuchsia-600/15" style={{ animationDelay: '-11s', animationDuration: '26s' }} />
        <Embers />
      </div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Official MFM Worldwide Template Motto Ticker */}
        <div className="hero-rise mb-6 inline-flex items-center gap-2 bg-gradient-to-r from-red-950/90 via-purple-900/90 to-amber-950/90 px-4 py-1.5 rounded-full border border-amber-400/50 shadow-md text-[11px] sm:text-xs text-amber-200">
          <Flame className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0 animate-pulse" />
          <span className="font-extrabold tracking-wider uppercase text-amber-300">
            A Do-It-Yourself Gospel Ministry:
          </span>
          <span className="hidden sm:inline italic text-purple-100">
            "Blessed be the Lord my strength which teacheth my hands to war, and my fingers to fight" (Psalm 144:1)
          </span>
        </div>

        <div className="hero-stagger max-w-4xl">
          {/* Conditional Live Stream In-Progress Banner */}
          {isLive && (
            <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-red-600 via-purple-900 to-red-700 border-2 border-amber-400 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="flex items-center gap-1.5 bg-red-700 text-white text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-xs animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>LIVE SERVICE NOW</span>
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white">
                    {liveServiceName}
                  </h3>
                  <p className="text-[11px] text-amber-200">
                    Broadcasting live from 13 Bangor Road, Leith
                  </p>
                </div>
              </div>

              {onWatchLive && (
                <button
                  onClick={() => onWatchLive(liveServiceName)}
                  className="px-4 py-2 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 hover:from-amber-200 hover:to-amber-300 rounded-xl shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>Watch Now</span>
                </button>
              )}
            </div>
          )}

          {/* Scripture Kicker with MFM Official Emblem */}
          <div className="inline-flex items-center gap-2.5 text-xs font-semibold text-amber-300 tracking-wider uppercase mb-3 bg-purple-900/80 px-3.5 py-1.5 rounded-full border border-purple-700/80 shadow-xs">
            <img
              src={`${import.meta.env.BASE_URL}assets/brand/mfm-logo.png`}
              alt="MFM Logo"
              className="w-4 h-4 object-contain rounded-full shrink-0"
            />
            <span>Obadiah 1:17</span>
            <span aria-hidden="true" className="text-purple-400">·</span>
            <span>Holiness · Deliverance · Possessions</span>
          </div>

          {/* Main Template Headline */}
          <h1
            className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] mb-6"
            style={{ textWrap: 'balance' }}
          >
            {t('hero.title')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-100 via-50% to-amber-300 text-shimmer text-2xl sm:text-4xl lg:text-5xl mt-2 font-extrabold">
              {t('hero.branch')}
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg text-purple-100 leading-relaxed mb-8 max-w-2xl">
            {t('hero.tagline')}
          </p>

          {/* Action Button Row */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 mb-10 max-sm:*:w-full max-sm:*:justify-center">
            <button
              onClick={onOpenPlanVisit}
              className="px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-lg shadow-amber-500/25 transition-all flex items-center gap-2 group whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>{t('hero.planVisit')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {onWatchLive && (
              <button
                onClick={() => onWatchLive(liveServiceName)}
                className="px-5 py-3.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl border border-red-500 shadow-md transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Video className="w-4 h-4" />
                <span>{t('hero.watchBroadcast')}</span>
              </button>
            )}

            {onOpenAgents && (
              <button
                onClick={() => onOpenAgents('prayer')}
                className="px-5 py-3.5 text-sm font-semibold text-white bg-purple-900/90 hover:bg-purple-800 rounded-xl border border-purple-700/80 transition-colors flex items-center gap-2 whitespace-nowrap shadow-sm cursor-pointer"
              >
                <Bot className="w-4 h-4 text-amber-300" />
                <span>Warfare Prayer Bullets</span>
              </button>
            )}

            <button
              onClick={() => onOpenSermon()}
              className="px-5 py-3.5 text-sm font-semibold text-purple-200 hover:text-white bg-purple-950/70 hover:bg-purple-900 rounded-xl border border-purple-800/80 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Play className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>Watch Sermons</span>
            </button>

            <button
              onClick={onOpenPrayerRequest}
              className="px-4 py-3.5 text-sm font-semibold text-purple-200 hover:text-white bg-purple-950/50 hover:bg-purple-900/70 rounded-xl border border-purple-800/60 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Shield className="w-4 h-4 text-amber-400" />
              <span>{t('hero.submitPrayer')}</span>
            </button>
          </div>

          {/* Address & Trust Markers */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-purple-200/90 border-t border-purple-800/70 pt-5">
            <div className="flex items-center gap-1.5 text-purple-100 font-medium">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>13 Bangor Road, Leith, Edinburgh EH6 5JY</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Sundays 10:00 AM &amp; 10:45 AM</span>
            </div>
            <div className="text-purple-300">
              Free street parking &amp; Lothian buses 12, 16, 22, 34, 35
            </div>
          </div>
        </div>

        {/* Dynamic Next Service Countdown Card in Royal Purple */}
        {countdown && (
          <div className="hero-rise mt-8 max-w-4xl bg-purple-900/70 backdrop-blur-md rounded-2xl border border-purple-700/80 p-5 sm:p-6 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Next Gathering on Mount Zion</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-0.5">
                  {countdown.name}
                </h3>
                <p className="text-xs text-purple-200">
                  {countdown.timeString} · In-Person &amp; Online Stream
                </p>
              </div>

              {/* Countdown Digits */}
              <div className="flex items-center gap-3 sm:gap-4 font-mono">
                <div className="flex flex-col items-center bg-purple-950/90 border border-purple-800 px-3 py-2 rounded-xl min-w-[56px] shadow-inner">
                  <span className="text-xl sm:text-2xl font-bold text-amber-300 tabular-nums">
                    <RollingNumber value={countdown.days} />
                  </span>
                  <span className="text-[10px] uppercase font-sans text-purple-300">Days</span>
                </div>
                <span className="text-purple-400 font-bold text-xl">:</span>
                <div className="flex flex-col items-center bg-purple-950/90 border border-purple-800 px-3 py-2 rounded-xl min-w-[56px] shadow-inner">
                  <span className="text-xl sm:text-2xl font-bold text-amber-300 tabular-nums">
                    <RollingNumber value={countdown.hours} />
                  </span>
                  <span className="text-[10px] uppercase font-sans text-purple-300">Hours</span>
                </div>
                <span className="text-purple-400 font-bold text-xl">:</span>
                <div className="flex flex-col items-center bg-purple-950/90 border border-purple-800 px-3 py-2 rounded-xl min-w-[56px] shadow-inner">
                  <span className="text-xl sm:text-2xl font-bold text-amber-300 tabular-nums">
                    <RollingNumber value={countdown.minutes} />
                  </span>
                  <span className="text-[10px] uppercase font-sans text-purple-300">Mins</span>
                </div>
                <span className="text-purple-400 font-bold text-xl">:</span>
                <div className="flex flex-col items-center bg-purple-950/90 border border-purple-800 px-3 py-2 rounded-xl min-w-[56px] shadow-inner">
                  <span className="text-xl sm:text-2xl font-bold text-white tabular-nums">
                    <RollingNumber value={countdown.seconds} />
                  </span>
                  <span className="text-[10px] uppercase font-sans text-purple-300">Secs</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4 Iconic Quick-Link Cards (Signature Mountainoffire.org Template Layout) */}
        <div className="mt-12 pt-8 border-t border-purple-800/80">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Live Webcast */}
            <div
              onClick={() => onWatchLive ? onWatchLive(liveServiceName) : scrollToSection('services')}
              className="bg-gradient-to-br from-red-950/80 to-purple-950 rounded-2xl p-5 border-2 border-red-500/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                  <Video className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-red-300 block mb-1">
                  Connect Live
                </span>
                <h4 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors mb-1.5">
                  Live Webcast &amp; Media
                </h4>
                <p className="text-xs text-purple-200 line-clamp-2">
                  Broadcast live from Edinburgh Sanctuary &amp; MFM Worldwide feeds on Sundays &amp; midweeks.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-800/60 flex items-center justify-between text-xs font-bold text-amber-300">
                <span>Join Broadcast</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 2: Power Must Change Hands (PMCH) */}
            <div
              onClick={() => scrollToSection('programmes')}
              className="bg-gradient-to-br from-amber-950/60 to-purple-950 rounded-2xl p-5 border-2 border-amber-500/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform font-bold">
                  <Swords className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 block mb-1">
                  Flagship Miracle Service
                </span>
                <h4 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors mb-1.5">
                  Power Must Change Hands
                </h4>
                <p className="text-xs text-purple-200 line-clamp-2">
                  1st Saturday of every month. Fasting, warfare prayers &amp; mass deliverance with Dr. D.K. Olukoya.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-800/60 flex items-center justify-between text-xs font-bold text-amber-300">
                <span>View PMCH Details</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 3: Daily Prayer Bullets & DKO Books */}
            <div
              onClick={() => scrollToSection('prayers')}
              className="bg-gradient-to-br from-purple-900/60 to-purple-950 rounded-2xl p-5 border-2 border-purple-600/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-700 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                  <Flame className="w-5 h-5 fill-amber-300 text-amber-300" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-purple-300 block mb-1">
                  Altar of Fire
                </span>
                <h4 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors mb-1.5">
                  Warfare Prayer Bullets
                </h4>
                <p className="text-xs text-purple-200 line-clamp-2">
                  Targeted daily prayer points, prayer timer &amp; AI-powered spiritual bullet generator.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-800/60 flex items-center justify-between text-xs font-bold text-amber-300">
                <span>Start Praying</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Card 4: Online Giving & Gift Aid */}
            <div
              onClick={() => onOpenGiving ? onOpenGiving() : scrollToSection('giving')}
              className="bg-gradient-to-br from-emerald-950/60 to-purple-950 rounded-2xl p-5 border-2 border-emerald-500/60 hover:border-amber-400 transition-all duration-300 shadow-xl hover:-translate-y-1 cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-300 block mb-1">
                  Honor God With Substance
                </span>
                <h4 className="text-base font-extrabold text-white group-hover:text-amber-300 transition-colors mb-1.5">
                  Online Giving &amp; Tithes
                </h4>
                <p className="text-xs text-purple-200 line-clamp-2">
                  1-click bank transfer details &amp; HMRC UK Gift Aid +25% tax relief calculator.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-purple-800/60 flex items-center justify-between text-xs font-bold text-amber-300">
                <span>Give Online</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
