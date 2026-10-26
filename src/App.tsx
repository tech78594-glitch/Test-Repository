/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { DailyPrayerSection } from './components/DailyPrayerSection';
import { MinistriesSection } from './components/MinistriesSection';
import { SermonsSection } from './components/SermonsSection';
import { BeliefsSection } from './components/BeliefsSection';
import { GivingSection } from './components/GivingSection';
import { TestimoniesSection } from './components/TestimoniesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PlanVisitModal } from './components/PlanVisitModal';
import { PrayerRequestModal } from './components/PrayerRequestModal';
import { JoinMinistryModal } from './components/JoinMinistryModal';
import { MinistryAgentsModal } from './components/MinistryAgentsModal';
import { GallerySection } from './components/GallerySection';
import { FlagshipProgrammesSection } from './components/FlagshipProgrammesSection';
import { PublicationsSection } from './components/PublicationsSection';
import { CommunityPrayerWall } from './components/CommunityPrayerWall';
import { WeeklyBulletin } from './components/WeeklyBulletin';
import { LiveStreamBanner } from './components/LiveStreamBanner';
import { LiveStreamModal } from './components/LiveStreamModal';
import { Bot, Flame } from 'lucide-react';

export default function App() {
  const [isPlanVisitOpen, setIsPlanVisitOpen] = useState(false);
  const [isPrayerRequestOpen, setIsPrayerRequestOpen] = useState(false);
  const [isJoinMinistryOpen, setIsJoinMinistryOpen] = useState(false);
  const [isAgentsOpen, setIsAgentsOpen] = useState(false);
  const [isLiveStreamOpen, setIsLiveStreamOpen] = useState(false);
  const [liveStreamTitle, setLiveStreamTitle] = useState('Sunday Glorious Worship & Deliverance Service');
  const [isServiceLive, setIsServiceLive] = useState(false);
  const [agentTab, setAgentTab] = useState<'prayer' | 'visitor' | 'deliverance'>('prayer');
  const [selectedMinistryName, setSelectedMinistryName] = useState<string>('');

  const handleOpenPlanVisit = () => {
    setIsPlanVisitOpen(true);
  };

  const handleOpenPrayerRequest = () => {
    setIsPrayerRequestOpen(true);
  };

  const handleOpenAgents = (tab: 'prayer' | 'visitor' | 'deliverance' = 'prayer') => {
    setAgentTab(tab);
    setIsAgentsOpen(true);
  };

  const handleOpenLiveStream = (title?: string) => {
    if (title) {
      setLiveStreamTitle(title);
    }
    setIsLiveStreamOpen(true);
  };

  const handleOpenGiving = () => {
    const el = document.getElementById('giving');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenSermons = () => {
    const el = document.getElementById('sermons');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleJoinMinistry = (ministryName: string) => {
    setSelectedMinistryName(ministryName);
    setIsJoinMinistryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFCFF] text-slate-800 flex flex-col selection:bg-purple-700 selection:text-white">
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

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero with Visual Carrier, Next Service Countdown & Conditional Live Banner */}
        <Hero
          onOpenPlanVisit={handleOpenPlanVisit}
          onOpenPrayerRequest={handleOpenPrayerRequest}
          onOpenSermon={handleOpenSermons}
          onOpenAgents={handleOpenAgents}
          isLive={isServiceLive}
          liveServiceName={liveStreamTitle}
          onWatchLive={handleOpenLiveStream}
          onOpenGiving={handleOpenGiving}
        />

        {/* About & Pastoral Mandate */}
        <AboutSection
          onOpenPlanVisit={handleOpenPlanVisit}
          onOpenPrayerRequest={handleOpenPrayerRequest}
        />

        {/* Flagship Programmes & PMCH (Official mountainoffire.org template) */}
        <FlagshipProgrammesSection
          onOpenPlanVisit={handleOpenPlanVisit}
          onOpenPrayerRequest={handleOpenPrayerRequest}
          onWatchLive={() => handleOpenLiveStream('Power Must Change Hands Live Broadcast')}
        />

        {/* Weekly & Monthly Service Schedule */}
        <ServicesSection onOpenPlanVisit={handleOpenPlanVisit} />

        {/* Weekly Church Bulletin & Printable Order of Service */}
        <WeeklyBulletin />

        {/* Daily Altar of Fire & Targeted Prayer Bullets */}
        <DailyPrayerSection />

        {/* Public Community Prayer Wall & Altar of Agreement */}
        <CommunityPrayerWall />

        {/* Anointed Books & DKO Spiritual Warfare Library */}
        <PublicationsSection onOpenAgents={handleOpenAgents} />

        {/* Ministries & Fellowships */}
        <MinistriesSection onJoinMinistry={handleJoinMinistry} />

        {/* Sermons & Anointed Teachings */}
        <SermonsSection />

        {/* Church Life, Outreach & Worship Photo Gallery (Masonry Layout) */}
        <GallerySection onOpenPlanVisit={handleOpenPlanVisit} />

        {/* Core Biblical Foundations & Beliefs */}
        <BeliefsSection />

        {/* Online Giving, Tithes & UK Gift Aid */}
        <GivingSection />

        {/* Testimonies of Deliverance & Healing */}
        <TestimoniesSection />

        {/* Physical Location, Leith Transit, Contact & Interactive Location Map */}
        <ContactSection />
      </main>

      {/* Modern Clean Footer in MFM Royal Purple */}
      <Footer
        onOpenPlanVisit={handleOpenPlanVisit}
        onOpenPrayerRequest={handleOpenPrayerRequest}
        onOpenGiving={handleOpenGiving}
        onOpenAgents={handleOpenAgents}
      />

      {/* Floating Ministry Assistant Trigger Button */}
      <aside aria-label="Spiritual Assistant" className="fixed bottom-5 right-5 z-30">
        <button
          onClick={() => handleOpenAgents('prayer')}
          className="group flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white rounded-2xl shadow-xl hover:shadow-2xl border border-purple-700 hover:border-amber-400 transition-all transform hover:-translate-y-0.5"
          title="Open Spiritual & Visitor Assistant"
        >
          <img
            src="/assets/aistudio/MFM_logo_a7697bcf.png"
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
      </aside>

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
  );
}
