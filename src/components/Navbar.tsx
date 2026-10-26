import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Shield, Flame, Sparkles, Bot, BookOpen, Video, MapPin, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenPlanVisit: () => void;
  onOpenPrayerRequest: () => void;
  onOpenGiving: () => void;
  onOpenAgents?: (agentType?: 'prayer' | 'visitor' | 'deliverance') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenPlanVisit,
  onOpenPrayerRequest,
  onOpenGiving,
  onOpenAgents,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Utility Header Bar (mountainoffire.org template signature) */}
      <div className="bg-purple-950 text-purple-200 border-b border-purple-900 py-1.5 px-4 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-amber-300 font-bold">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              <span>MFM Worldwide Headquarters Affiliated</span>
            </span>
            <span className="text-purple-400">|</span>
            <span className="text-purple-300">
              Dr. D.K. Olukoya, General Overseer
            </span>
            <span className="text-purple-400">|</span>
            <span className="text-purple-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-400" />
              <span>13 Bangor Road, Leith, Edinburgh EH6 5JY</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a
              href="tel:07557644650"
              className="flex items-center gap-1 text-purple-200 hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>07557 644650</span>
            </a>
            <span className="text-purple-400">|</span>
            <a
              href="mailto:info@mfmedinburgh.org"
              className="flex items-center gap-1 text-purple-200 hover:text-amber-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>info@mfmedinburgh.org</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-purple-950/98 backdrop-blur-md shadow-2xl border-b border-purple-800 py-2.5'
            : 'bg-purple-950/90 backdrop-blur-sm border-b border-purple-900/80 py-3.5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (Nav Links) - Zone 3 (Primary Action) */}
          <div className="flex items-center justify-between gap-4 lg:gap-8">
            {/* Zone 1: Official MFM Shield Emblem & Brand Name */}
            <a
              href="#"
              className="flex items-center gap-3 text-white hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 group"
              aria-label="MFM Edinburgh Home"
            >
              <img
                src="/assets/aistudio/MFM_logo_a7697bcf.png"
                alt="Mountain of Fire and Miracles Ministries Official Logo"
                className="w-11 h-11 object-contain drop-shadow-md group-hover:scale-105 transition-transform shrink-0 rounded-full bg-white/10 p-0.5 border border-white/20"
              />
              <div className="flex flex-col">
                <span className="text-lg font-black tracking-tight text-white leading-tight">
                  MFM Edinburgh
                </span>
                <span className="text-[10px] text-amber-300/95 font-bold tracking-wider uppercase">
                  Mountain of Fire &amp; Miracles
                </span>
              </div>
            </a>

            {/* Zone 2: Single-line text navigation links */}
            <nav className="hidden xl:flex items-center gap-5 text-xs font-semibold text-purple-100">
              <a
                href="#about"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                About
              </a>
              <a
                href="#programmes"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Programmes &amp; PMCH
              </a>
              <a
                href="#services"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Services
              </a>
              <a
                href="#prayers"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Daily Prayer
              </a>
              <a
                href="#publications"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                DKO Books
              </a>
              <a
                href="#ministries"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Ministries
              </a>
              <a
                href="#sermons"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Sermons
              </a>
              <a
                href="#gallery"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Gallery
              </a>
              <a
                href="#giving"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Giving
              </a>
              <a
                href="#contact"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                Location
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action + Assistant Quick Trigger */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              {onOpenAgents && (
                <button
                  onClick={() => onOpenAgents('prayer')}
                  className="px-3 py-2 text-xs font-semibold text-purple-100 hover:text-white bg-purple-900/80 hover:bg-purple-800 rounded-xl border border-purple-700/80 transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                  title="Ask Prayer & Visitor Assistant"
                >
                  <Bot className="w-3.5 h-3.5 text-amber-300" />
                  <span>Prayer Assistant</span>
                </button>
              )}

              <button
                onClick={onOpenPlanVisit}
                className="px-4 py-2 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md hover:shadow-amber-500/25 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>Plan Your Visit</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex xl:hidden items-center gap-2">
              {onOpenAgents && (
                <button
                  onClick={() => onOpenAgents('prayer')}
                  className="p-1.5 text-amber-300 bg-purple-900/80 border border-purple-700 rounded-lg"
                  aria-label="Open Ministry Assistant"
                >
                  <Bot className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onOpenPlanVisit}
                className="px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg whitespace-nowrap"
              >
                Visit
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-purple-200 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer with Royal Purple Styling */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 xl:hidden">
          <div
            className="fixed inset-0 bg-purple-950/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-purple-950 border-l border-purple-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-purple-800/80">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/aistudio/MFM_logo_a7697bcf.png"
                    alt="MFM Official Logo"
                    className="w-9 h-9 object-contain drop-shadow-sm shrink-0 rounded-full bg-white/10 p-0.5 border border-white/20"
                  />
                  <div className="flex flex-col">
                    <span className="text-base font-extrabold text-white leading-tight">MFM Edinburgh</span>
                    <span className="text-[9px] text-amber-300 font-bold uppercase tracking-wider">Mountain of Fire</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-purple-300 hover:text-white rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-3 text-sm font-medium text-purple-100">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-amber-300 transition-colors py-1"
                >
                  About Us &amp; Worldwide Commission
                </a>
                <a
                  href="#programmes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-amber-300 transition-colors py-1 text-amber-300 font-bold"
                >
                  Flagship Programmes (PMCH)
                </a>
                <a
                  href="#services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-amber-300 transition-colors py-1"
                >
                  Service Times &amp; Schedule
                </a>
                <a
                  href="#prayers"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-amber-300 transition-colors py-1"
                >
                  Daily Prayer Bullets
                </a>
                <a
                  href="#publications"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-amber-300 transition-colors py-1"
                >
                  DKO Spiritual Warfare Books
                </a>
                <a
                  href="#ministries"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-amber-300 transition-colors py-1"
                >
                  Ministries &amp; Fellowships
                </a>
                <a
                  href="#sermons"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-amber-300 transition-colors py-1"
                >
                  Sermons &amp; Media
                </a>
                <a
                  href="#gallery"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-amber-300 transition-colors py-1"
                >
                  Church &amp; Outreach Gallery
                </a>
                <a
                  href="#giving"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenGiving();
                  }}
                  className="hover:text-amber-300 transition-colors py-1"
                >
                  Online Giving &amp; Tithes
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-amber-300 transition-colors py-1"
                >
                  Sanctuary Location &amp; Map
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-800/80 flex flex-col gap-3">
              {onOpenAgents && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAgents('prayer');
                  }}
                  className="w-full py-2.5 text-center text-xs font-bold text-white bg-purple-900 border border-purple-700 hover:bg-purple-800 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <Bot className="w-4 h-4 text-amber-300" />
                  <span>Ask Ministry Assistant</span>
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanVisit();
                }}
                className="w-full py-3 text-center text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-colors"
              >
                Plan Your Visit (Sunday)
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrayerRequest();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-purple-200 bg-purple-900/60 border border-purple-800 hover:bg-purple-900 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                Submit Prayer Request
              </button>
              <a
                href="tel:07557644650"
                className="flex items-center justify-center gap-2 text-xs text-purple-300 hover:text-amber-300 py-1 transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Pastorate: 07557 644650</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
