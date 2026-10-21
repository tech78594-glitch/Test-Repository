import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, Shield, Flame, Sparkles, Bot } from 'lucide-react';

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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-purple-950/95 backdrop-blur-md shadow-xl border-b border-purple-800/80 py-3'
            : 'bg-gradient-to-b from-purple-950/95 via-purple-950/80 to-transparent py-4 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: Zone 1 (Brand) - Zone 2 (4-5 Nav Links) - Zone 3 (1 Primary Action) */}
          <div className="flex items-center justify-between gap-6 lg:gap-8">
            {/* Zone 1: Brand Wordmark in MFM Royal Purple & Holy Ghost Fire */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-white hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 group"
              aria-label="MFM Edinburgh Home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 via-amber-500 to-amber-400 flex items-center justify-center text-slate-950 font-bold shadow-md shadow-red-500/25 group-hover:scale-105 transition-transform">
                <Flame className="w-5 h-5 text-slate-950 fill-amber-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold tracking-tight text-white leading-tight">
                  MFM Edinburgh
                </span>
                <span className="text-[10px] text-amber-300/95 font-semibold tracking-wider uppercase">
                  Mountain of Fire &amp; Miracles
                </span>
              </div>
            </a>

            {/* Zone 2: Concise single-line text navigation links */}
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-purple-100">
              <a
                href="#about"
                className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
              >
                About
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
                Contact
              </a>
            </nav>

            {/* Zone 3: 1 Primary Action + Assistant Quick Trigger */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              {onOpenAgents && (
                <button
                  onClick={() => onOpenAgents('prayer')}
                  className="px-3 py-2 text-xs font-semibold text-purple-100 hover:text-white bg-purple-900/80 hover:bg-purple-800 rounded-xl border border-purple-700/80 transition-all flex items-center gap-1.5 shadow-xs"
                  title="Ask Prayer & Visitor Assistant"
                >
                  <Bot className="w-3.5 h-3.5 text-amber-300" />
                  <span>Ministry Assistant</span>
                </button>
              )}

              <button
                onClick={onOpenPlanVisit}
                className="px-4 py-2 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md hover:shadow-amber-500/25 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>Plan Your Visit</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex sm:hidden items-center gap-2">
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
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-purple-950/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-purple-950 border-l border-purple-800 p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-purple-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-slate-950 font-bold">
                    <Flame className="w-4 h-4 fill-slate-950" />
                  </div>
                  <span className="text-base font-bold text-white">MFM Edinburgh</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-purple-300 hover:text-white rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col gap-4 text-sm font-medium text-purple-100">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-amber-300 transition-colors py-1"
                >
                  About Us &amp; Leadership
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
                  Location &amp; Contact
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
