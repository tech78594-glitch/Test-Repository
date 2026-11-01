/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PlanVisitModal } from './components/PlanVisitModal';
import { PrayerRequestModal } from './components/PrayerRequestModal';
import { JoinMinistryModal } from './components/JoinMinistryModal';
import { MinistryAgentsModal } from './components/MinistryAgentsModal';
import { LiveStreamBanner } from './components/LiveStreamBanner';
import { LiveStreamModal } from './components/LiveStreamModal';
import { ScrollProgress } from './components/motion/ScrollProgress';
import { ScrollManager } from './components/ScrollManager';
import { useScrollReveal } from './hooks/useScrollReveal';
import { ActionsContext, AgentType, SiteActions } from './context/ActionsContext';
import { PAGES } from './routes';
import {
  AboutPage,
  BooksPage,
  ContactPage,
  GalleryPage,
  GivingPage,
  HomePage,
  MinistriesPage,
  NewsPage,
  NotFoundPage,
  PrayerPage,
  SermonsPage,
  ServicesPage,
} from './pages';

export default function App() {
  const [isPlanVisitOpen, setIsPlanVisitOpen] = useState(false);
  const [isPrayerRequestOpen, setIsPrayerRequestOpen] = useState(false);
  const [isJoinMinistryOpen, setIsJoinMinistryOpen] = useState(false);
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [isLiveStreamOpen, setIsLiveStreamOpen] = useState(false);
  const [liveStreamTitle, setLiveStreamTitle] = useState('Sunday Glorious Worship & Deliverance Service');
  const [isServiceLive, setIsServiceLive] = useState(false);
  const [agentTab, setAgentTab] = useState<AgentType>('prayer');
  const [selectedMinistryName, setSelectedMinistryName] = useState<string>('');

  const { pathname } = useLocation();
  const navigate = useNavigate();
  useScrollReveal(pathname);

  const handleOpenPlanVisit = () => {
    setIsPlanVisitOpen(true);
  };

  const handleOpenPrayerRequest = () => {
    setIsPrayerRequestOpen(true);
  };

  const handleOpenAgents = (tab: AgentType = 'prayer') => {
    setAgentTab(tab);
    setIsAgentsOpen(true);
  };

  const handleOpenLiveStream = (title?: string) => {
    if (title) {
      setLiveStreamTitle(title);
    }
    setIsLiveStreamOpen(true);
  };

  const handleOpenGiving = () => navigate(PAGES.giving.path);

  const handleJoinMinistry = (ministryName: string) => {
    setSelectedMinistryName(ministryName);
    setIsJoinMinistryOpen(true);
  };

  const actions: SiteActions = useMemo(
    () => ({
      openPlanVisit: handleOpenPlanVisit,
      openPrayerRequest: handleOpenPrayerRequest,
      openAgents: handleOpenAgents,
      openLiveStream: handleOpenLiveStream,
      joinMinistry: handleJoinMinistry,
      isServiceLive,
      liveStreamTitle,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isServiceLive, liveStreamTitle]
  );

  return (
    <ActionsContext.Provider value={actions}>
    <div className="min-h-screen bg-[#FDFCFF] text-slate-800 flex flex-col selection:bg-purple-700 selection:text-white">
      <ScrollProgress />
      <ScrollManager />

      {/* Live Stream Top Banner (conditionally appears when service is in progress with Watch Now link) */}
      <LiveStreamBanner
        onWatchNow={(title) => {
          setIsServiceLive(true);
          handleOpenLiveStream(title);
        }}
        forcedLiveState={isServiceLive}
      />

      {/* Top Navigation */}
      <Navbar
        onOpenPlanVisit={handleOpenPlanVisit}
        onOpenPrayerRequest={handleOpenPrayerRequest}
        onOpenGiving={handleOpenGiving}
        onOpenAgents={handleOpenAgents}
      />

      {/* Pages */}
      <main className="flex-1">
        <Routes>
          <Route path={PAGES.home.path} element={<HomePage />} />
          <Route path={PAGES.about.path} element={<AboutPage />} />
          <Route path={PAGES.services.path} element={<ServicesPage />} />
          <Route path={PAGES.sermons.path} element={<SermonsPage />} />
          <Route path={PAGES.prayer.path} element={<PrayerPage />} />
          <Route path={PAGES.contact.path} element={<ContactPage />} />
          <Route path={PAGES.news.path} element={<NewsPage />} />
          <Route path={PAGES.ministries.path} element={<MinistriesPage />} />
          <Route path={PAGES.gallery.path} element={<GalleryPage />} />
          <Route path={PAGES.giving.path} element={<GivingPage />} />
          <Route path={PAGES.books.path} element={<BooksPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Modern Clean Footer in MFM Royal Purple */}
      <Footer
        onOpenPlanVisit={handleOpenPlanVisit}
        onOpenPrayerRequest={handleOpenPrayerRequest}
        onOpenGiving={handleOpenGiving}
        onOpenAgents={handleOpenAgents}
      />

      {/* Floating Ministry Assistant Trigger Button */}
      <motion.aside
        aria-label="Spiritual Assistant"
        className="fixed bottom-5 right-5 z-30"
        initial={{ opacity: 0, y: 40, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 1.2 }}
      >
        <button
          onClick={() => handleOpenAgents('prayer')}
          className="relative group flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white rounded-2xl shadow-xl hover:shadow-2xl border border-purple-700 hover:border-amber-400 transition-all hover:-translate-y-0.5 float-bob"
          title="Open Spiritual & Visitor Assistant"
        >
          <span aria-hidden="true" className="pulse-ring pointer-events-none absolute inset-0 rounded-2xl border-2 border-amber-400/70" />
          <img
            src={`${import.meta.env.BASE_URL}assets/brand/mfm-logo.png`}
            alt="MFM Logo"
            className="w-8 h-8 object-contain rounded-full shadow-xs shrink-0"
          />
          <div className="text-left hidden sm:block">
            <span className="text-[10px] text-amber-300 font-bold uppercase tracking-wider block leading-none">
              Ask Assistant
            </span>
            <span className="text-xs font-bold text-white leading-tight">
              Prayer &amp; Visit Guide
            </span>
          </div>
        </button>
      </motion.aside>

      {/* Interactive Modals */}
      <PlanVisitModal
        isOpen={isPlanVisitOpen}
        onClose={() => setIsPlanVisitOpen(false)}
      />

      <PrayerRequestModal
        isOpen={isPrayerRequestOpen}
        onClose={() => setIsPrayerRequestOpen(false)}
      />

      <JoinMinistryModal
        isOpen={isJoinMinistryOpen}
        onClose={() => setIsJoinMinistryOpen(false)}
        preselectedMinistry={selectedMinistryName}
      />

      <MinistryAgentsModal
        isOpen={isAgentsOpen}
        onClose={() => setIsAgentsOpen(false)}
        defaultAgent={agentTab}
      />

      {/* Live Stream In-App Video Player Modal */}
      <LiveStreamModal
        isOpen={isLiveStreamOpen}
        onClose={() => setIsLiveStreamOpen(false)}
        serviceTitle={liveStreamTitle}
      />
    </div>
    </ActionsContext.Provider>
  );
}
