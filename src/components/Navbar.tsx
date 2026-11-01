import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, Menu, X, Phone, Calendar, Shield, Flame, Sparkles, Bot, BookOpen, Video, MapPin, Mail, Globe } from 'lucide-react';
import { useLocale } from '@/src/context/LocaleContext';
import { LanguageToggle } from './LanguageToggle';
import { MORE_NAV, PRIMARY_NAV } from '@/src/routes';

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
  const { t } = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close menus whenever the page changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreOpen(false);
  }, [location.pathname, location.hash]);

  // Close the "More" dropdown on outside click or Escape
  useEffect(() => {
    if (!moreOpen) return;
    const onDown = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMoreOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [moreOpen]);

  const moreIsActive = MORE_NAV.some((item) => {
    const [path, hash] = item.to.split('#');
    return location.pathname === path && (!hash || location.hash === `#${hash}`) && !PRIMARY_NAV.some((p) => p.to === path && !hash);
  });

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
      <div className="bg-purple-950 text-purple-200 border-b border-purple-900 py-1.5 px-4 text-xs hidden xl:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-amber-300 font-bold">
              <Flame className="w-3.5 h-3.5 fill-amber-400" />
              <span>{t('topbar.headquarters')}</span>
            </span>
            <span className="text-purple-400">|</span>
            <span className="text-purple-300">
              {t('topbar.go')}
            </span>
            <span className="text-purple-400">|</span>
            <span className="text-purple-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-red-400" />
              <span>{t('topbar.address')}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px]">
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
            <span className="text-purple-400">|</span>
            <LanguageToggle />
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
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Zone 1: Official MFM Shield Emblem & Brand Name */}
            <Link
              to="/"
              className="flex items-center gap-2 sm:gap-3 text-white hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 min-w-0 group"
              aria-label="MFM Edinburgh Home"
            >
              <img
                src={`${import.meta.env.BASE_URL}assets/brand/mfm-logo.png`}
                alt="Mountain of Fire and Miracles Ministries Official Logo"
                className="w-9 h-9 sm:w-11 sm:h-11 object-contain drop-shadow-md group-hover:scale-105 transition-transform shrink-0 rounded-full bg-white/10 p-0.5 border border-white/20"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tight text-white leading-tight">
                  MFM Edinburgh
                </span>
                <span className="hidden min-[400px]:block text-[10px] text-amber-300/95 font-bold tracking-wider uppercase">
                  Mountain of Fire &amp; Miracles
                </span>
              </div>
            </Link>

            {/* Zone 2: five main links + "More" menu */}
            <nav aria-label="Main" className="hidden nav:flex items-center gap-1 text-sm font-semibold text-purple-100">
              {PRIMARY_NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-2.5 xl:px-3 py-2 rounded-lg whitespace-nowrap transition-colors ${
                      isActive ? 'text-amber-300 bg-purple-900/70' : 'hover:text-amber-300 hover:bg-purple-900/40'
                    }`
                  }
                >
                  {t(item.navKey)}
                </NavLink>
              ))}

              <div ref={moreRef} className="relative">
                <button
                  type="button"
                  onClick={() => setMoreOpen((o) => !o)}
                  aria-haspopup="menu"
                  aria-expanded={moreOpen}
                  className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    moreOpen || moreIsActive ? 'text-amber-300 bg-purple-900/70' : 'hover:text-amber-300 hover:bg-purple-900/40'
                  }`}
                >
                  {t('nav.more')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${moreOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {moreOpen && (
                    <motion.div
                      role="menu"
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute right-0 top-full mt-2 w-60 origin-top-right rounded-2xl bg-purple-950/98 backdrop-blur-md border border-purple-700 shadow-2xl p-2 z-50"
                    >
                      {MORE_NAV.map((item) => (
                        <Link
                          key={item.to}
                          to={item.to}
                          role="menuitem"
                          className="block px-3.5 py-2.5 rounded-xl text-sm text-purple-100 hover:text-amber-300 hover:bg-purple-900/70 transition-colors"
                        >
                          {t(item.navKey)}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Zone 3: 1 Primary Action + Language Toggle + Assistant Quick Trigger */}
            <div className="hidden nav:flex items-center gap-2.5 shrink-0">
              {/* Small laptops: language switcher here; 1280px+ has it in the top bar */}
              <div className="xl:hidden">
                <LanguageToggle />
              </div>

              {onOpenAgents && (
                <button
                  onClick={() => onOpenAgents('prayer')}
                  className="px-3 py-2 text-xs font-semibold text-purple-100 hover:text-white bg-purple-900/80 hover:bg-purple-800 rounded-xl border border-purple-700/80 transition-all hidden xl:flex items-center gap-1.5 shadow-xs cursor-pointer"
                  title="Ask Prayer & Visitor Assistant"
                  aria-label={t('nav.prayerAssistant')}
                >
                  <Bot className="w-3.5 h-3.5 text-amber-300" />
                  <span className="hidden xl:inline">{t('nav.prayerAssistant')}</span>
                </button>
              )}

              <button
                onClick={onOpenPlanVisit}
                className="px-4 py-2 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md hover:shadow-amber-500/25 transition-all whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-slate-950" />
                <span>{t('nav.planVisit')}</span>
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex nav:hidden items-center gap-2 shrink-0">
              {/* Phones get the language switcher inside the menu */}
              <div className="hidden sm:block lg:hidden">
                <LanguageToggle />
              </div>

              {onOpenAgents && (
                <button
                  onClick={() => onOpenAgents('prayer')}
                  className="hidden sm:inline-flex p-1.5 text-amber-300 bg-purple-900/80 border border-purple-700 rounded-lg"
                  aria-label="Open Ministry Assistant"
                >
                  <Bot className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={onOpenPlanVisit}
                className="px-2.5 min-[400px]:px-3 py-1.5 text-xs font-bold text-slate-950 bg-amber-400 rounded-lg whitespace-nowrap"
              >
                {t('nav.planVisit')}
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
        <div className="fixed inset-0 z-50 nav:hidden">
          <div
            className="fixed inset-0 bg-purple-950/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-purple-950 border-l border-purple-800 p-6 flex flex-col justify-between shadow-2xl overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-purple-800/80">
                <div className="flex items-center gap-3">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/brand/mfm-logo.png`}
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

              {/* Mobile Language Switcher Pills */}
              <div className="pt-4 pb-2 border-b border-purple-900/60">
                <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Select Language / Yan Èdè</span>
                </div>
                <LanguageToggle variant="pills" />
              </div>

              <nav aria-label="Main" className="py-5 flex flex-col gap-1 text-sm font-medium text-purple-100">
                {PRIMARY_NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `px-3 py-2.5 rounded-xl transition-colors ${
                        isActive ? 'text-amber-300 bg-purple-900/70 font-bold' : 'hover:text-amber-300 hover:bg-purple-900/40'
                      }`
                    }
                  >
                    {t(item.navKey)}
                  </NavLink>
                ))}

                <div className="mt-4 mb-1 px-3 text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                  {t('nav.more')}
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {MORE_NAV.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="px-3 py-2 rounded-xl text-[13px] text-purple-200 hover:text-amber-300 hover:bg-purple-900/40 transition-colors"
                    >
                      {t(item.navKey)}
                    </Link>
                  ))}
                </div>
              </nav>
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
                  <span>{t('nav.prayerAssistant')}</span>
                </button>
              )}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPlanVisit();
                }}
                className="w-full py-3 text-center text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-md transition-colors"
              >
                {t('nav.planVisit')}
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrayerRequest();
                }}
                className="w-full py-2.5 text-center text-xs font-semibold text-purple-200 bg-purple-900/60 border border-purple-800 hover:bg-purple-900 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                {t('nav.prayerRequest')}
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
