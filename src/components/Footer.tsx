import React from 'react';
import { Flame, MapPin, Phone, Mail, ArrowUp, Bot } from 'lucide-react';

interface FooterProps {
  onOpenPlanVisit: () => void;
  onOpenPrayerRequest: () => void;
  onOpenGiving: () => void;
  onOpenAgents?: (agentType?: 'prayer' | 'visitor' | 'deliverance') => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPlanVisit,
  onOpenPrayerRequest,
  onOpenGiving,
  onOpenAgents,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-purple-950 via-purple-950 to-indigo-950 text-purple-200 border-t border-purple-800">
      {/* Upper Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Mandate */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/aistudio/MFM_logo_a7697bcf.png"
                alt="Mountain of Fire and Miracles Ministries Emblem"
                className="w-12 h-12 object-contain drop-shadow-md rounded-full bg-white/10 p-0.5 border border-white/20 shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-lg font-black text-white leading-tight">MFM Edinburgh</span>
                <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider">Mountain of Fire &amp; Miracles</span>
              </div>
            </div>

            <p className="text-xs text-purple-200/90 leading-relaxed mb-6">
              Mountain of Fire and Miracles Ministries Edinburgh is an apostolic revival, holiness, 
              and deliverance church dedicated to the transformation of lives across Scotland and the nations through 
              aggressive prayer and the uncompromised Word of Jesus Christ.
            </p>

            <div className="p-3.5 bg-purple-900/70 rounded-xl border border-purple-800 text-xs">
              <span className="text-amber-300 font-bold block mb-1">Obadiah 1:17</span>
              <p className="text-purple-200 italic">
                “Upon Mount Zion there shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions.”
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-purple-300">
              <li>
                <a href="#about" className="hover:text-amber-300 transition-colors">
                  About MFM &amp; Mandate
                </a>
              </li>
              <li>
                <a href="#programmes" className="hover:text-amber-300 transition-colors text-amber-300 font-semibold">
                  PMCH &amp; Flagship Gatherings
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-300 transition-colors">
                  Weekly Services Schedule
                </a>
              </li>
              <li>
                <a href="#prayers" className="hover:text-amber-300 transition-colors">
                  Daily Warfare Prayer Bullets
                </a>
              </li>
              <li>
                <a href="#prayer-wall" className="hover:text-amber-300 transition-colors text-amber-300/90 font-medium flex items-center gap-1">
                  <span>Community Prayer Wall</span>
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-amber-300 transition-colors">
                  DKO Spiritual Books
                </a>
              </li>
              <li>
                <a href="#ministries" className="hover:text-amber-300 transition-colors">
                  Church Ministries
                </a>
              </li>
              <li>
                <a href="#sermons" className="hover:text-amber-300 transition-colors">
                  Sermon Media Center
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-amber-300 transition-colors">
                  Photo Gallery &amp; Outreach
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenGiving}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  Giving &amp; Tithes
                </button>
              </li>
              <li>
                <a
                  href="https://www.mountainoffire.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-300 hover:text-white transition-colors flex items-center gap-1 font-bold"
                >
                  <span>MFM Worldwide Official</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              {onOpenAgents && (
                <li>
                  <button
                    onClick={() => onOpenAgents('prayer')}
                    className="text-amber-300 font-semibold hover:text-amber-200 transition-colors text-left flex items-center gap-1.5"
                  >
                    <Bot className="w-3.5 h-3.5" />
                    <span>Ministry Assistant</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Col 3: Service Schedule Summary */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Weekly Gatherings
            </h4>
            <div className="space-y-2 text-xs text-purple-200/90">
              <div className="border-b border-purple-900 pb-2">
                <strong className="text-white block">Sunday School &amp; Worship</strong>
                <span>10:00 AM – 1:00 PM (Sanctuary &amp; Live)</span>
              </div>
              <div className="border-b border-purple-900 pb-2">
                <strong className="text-white block">Tuesday Spiritual Clinic</strong>
                <span>6:30 PM – 8:30 PM (Bible Study &amp; Prayers)</span>
              </div>
              <div className="border-b border-purple-900 pb-2">
                <strong className="text-white block">Friday Deliverance Hour</strong>
                <span>6:30 PM – 8:30 PM (Intercession)</span>
              </div>
              <div>
                <strong className="text-amber-300 block">1st Saturday: PMCH</strong>
                <span>9:00 AM – 12:00 PM (Power Must Change Hands)</span>
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Sanctuary Location
            </h4>
            <div className="space-y-2.5 text-xs text-purple-200/90 mb-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>13 Bangor Road, Leith, Edinburgh EH6 5JY, Scotland</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:07557644650" className="hover:text-amber-300 font-bold">
                  07557 644650
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:info@mfmedinburgh.org" className="hover:text-amber-300">
                  info@mfmedinburgh.org
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={onOpenPlanVisit}
                className="w-full py-2 px-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap shadow-xs"
              >
                Plan a Visit
              </button>
              <button
                onClick={onOpenPrayerRequest}
                className="w-full py-2 px-3 text-xs font-semibold text-white bg-purple-900 hover:bg-purple-800 border border-purple-700 rounded-xl transition-colors whitespace-nowrap"
              >
                Prayer Request
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Copyright Bar */}
      <div className="border-t border-purple-900 py-6 text-xs text-purple-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Mountain of Fire and Miracles Ministries Edinburgh. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span>Affiliated with MFM Worldwide</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-purple-300 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
