import React from 'react';
import { Link, useNavigate } from 'react-router';
import { ArrowRight, BookOpen, Flame, HandHeart, Images, Info, Users } from 'lucide-react';
import { useSiteActions } from '@/src/context/ActionsContext';
import { PageHeader } from '@/src/components/PageHeader';
import { Hero } from '@/src/components/Hero';
import { AboutSection } from '@/src/components/AboutSection';
import { BeliefsSection } from '@/src/components/BeliefsSection';
import { TestimoniesSection } from '@/src/components/TestimoniesSection';
import { ServicesSection } from '@/src/components/ServicesSection';
import { FlagshipProgrammesSection } from '@/src/components/FlagshipProgrammesSection';
import { WeeklyBulletin } from '@/src/components/WeeklyBulletin';
import { SermonsSection } from '@/src/components/SermonsSection';
import { DailyPrayerSection } from '@/src/components/DailyPrayerSection';
import { CommunityPrayerWall } from '@/src/components/CommunityPrayerWall';
import { ContactSection } from '@/src/components/ContactSection';
import { NewsSection } from '@/src/components/NewsSection';
import { MinistriesSection } from '@/src/components/MinistriesSection';
import { GallerySection } from '@/src/components/GallerySection';
import { GivingSection } from '@/src/components/GivingSection';
import { PublicationsSection } from '@/src/components/PublicationsSection';
import { PAGES } from '@/src/routes';

/* ------------------------------------------------------------------ */
/* Home: the essentials, with links out to everything else            */
/* ------------------------------------------------------------------ */

const EXPLORE = [
  { to: PAGES.about.path, icon: Info, title: 'About MFM Edinburgh', text: 'Our story, mandate, beliefs and testimonies.' },
  { to: PAGES.prayer.path, icon: Flame, title: 'Prayer', text: 'Daily prayer points and the community prayer wall.' },
  { to: PAGES.ministries.path, icon: Users, title: 'Ministries', text: 'Find your place: youth, women, men, children and choir.' },
  { to: PAGES.gallery.path, icon: Images, title: 'Gallery', text: 'Worship, fellowship and outreach in Edinburgh.' },
  { to: PAGES.giving.path, icon: HandHeart, title: 'Giving', text: 'Tithes, offerings and UK Gift Aid.' },
  { to: PAGES.books.path, icon: BookOpen, title: 'DKO Books', text: 'Spiritual warfare books by Dr. D.K. Olukoya.' },
];

const ExploreSection: React.FC = () => (
  <section id="explore" className="py-20 bg-white border-b border-purple-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
          <span>Explore</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight">
          Get to Know Our Church Family
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {EXPLORE.map(({ to, icon: Icon, title, text }) => (
          <Link
            key={to}
            to={to}
            className="group flex items-start gap-4 p-6 rounded-2xl border border-purple-200 bg-purple-50/40 hover:bg-white hover:border-purple-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <span className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-purple-900 to-purple-700 text-amber-300 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <Icon className="w-5 h-5" />
            </span>
            <span className="flex-1">
              <span className="flex items-center gap-1.5 font-bold text-purple-950">
                {title}
                <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 group-hover:text-purple-700 transition-all" />
              </span>
              <span className="block mt-1 text-sm text-slate-600">{text}</span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export const HomePage: React.FC = () => {
  const a = useSiteActions();
  const navigate = useNavigate();
  return (
    <>
      <Hero
        onOpenPlanVisit={a.openPlanVisit}
        onOpenPrayerRequest={a.openPrayerRequest}
        onOpenSermon={() => navigate(PAGES.sermons.path)}
        onOpenAgents={a.openAgents}
        isLive={a.isServiceLive}
        liveServiceName={a.liveStreamTitle}
        onWatchLive={a.openLiveStream}
        onOpenGiving={() => navigate(PAGES.giving.path)}
      />
      <ServicesSection onOpenPlanVisit={a.openPlanVisit} />
      <SermonsSection limit={3} />
      <NewsSection limit={3} />
      <ExploreSection />
    </>
  );
};

/* ------------------------------------------------------------------ */
/* Inner pages                                                         */
/* ------------------------------------------------------------------ */

export const AboutPage: React.FC = () => {
  const a = useSiteActions();
  return (
    <>
      <PageHeader title="About Us" subtitle="Mountain of Fire and Miracles Ministries Edinburgh: who we are, what we believe, and what God is doing among us." />
      <AboutSection onOpenPlanVisit={a.openPlanVisit} onOpenPrayerRequest={a.openPrayerRequest} />
      <BeliefsSection />
      <TestimoniesSection />
    </>
  );
};

export const ServicesPage: React.FC = () => {
  const a = useSiteActions();
  return (
    <>
      <PageHeader title="Services & Programmes" subtitle="Weekly services, Power Must Change Hands and this week's bulletin at 13 Bangor Road, Leith." />
      <ServicesSection onOpenPlanVisit={a.openPlanVisit} />
      <FlagshipProgrammesSection
        onOpenPlanVisit={a.openPlanVisit}
        onOpenPrayerRequest={a.openPrayerRequest}
        onWatchLive={() => a.openLiveStream('Power Must Change Hands Live Broadcast')}
      />
      <WeeklyBulletin />
    </>
  );
};

export const SermonsPage: React.FC = () => (
  <>
    <PageHeader title="Sermons" subtitle="Recent services and messages from our YouTube channel, updated automatically." />
    <SermonsSection />
  </>
);

export const PrayerPage: React.FC = () => (
  <>
    <PageHeader title="Prayer" subtitle="Daily prayer points and our community prayer wall. Stand in agreement with us." />
    <DailyPrayerSection />
    <CommunityPrayerWall />
  </>
);

export const ContactPage: React.FC = () => (
  <>
    <PageHeader title="Visit & Contact" subtitle="Find us at 13 Bangor Road, Leith, Edinburgh EH6 5JY, or get in touch." />
    <ContactSection />
  </>
);

export const NewsPage: React.FC = () => (
  <>
    <PageHeader title="News" subtitle="Upcoming programmes, special services and news from our church family." />
    <NewsSection />
  </>
);

export const MinistriesPage: React.FC = () => {
  const a = useSiteActions();
  return (
    <>
      <PageHeader title="Ministries" subtitle="A place for everyone to grow, serve and belong." />
      <MinistriesSection onJoinMinistry={a.joinMinistry} />
    </>
  );
};

export const GalleryPage: React.FC = () => {
  const a = useSiteActions();
  return (
    <>
      <PageHeader title="Gallery" subtitle="Worship, fellowship and outreach across Edinburgh." />
      <GallerySection onOpenPlanVisit={a.openPlanVisit} />
    </>
  );
};

export const GivingPage: React.FC = () => (
  <>
    <PageHeader title="Giving" subtitle="Tithes, offerings and UK Gift Aid." />
    <GivingSection />
  </>
);

export const BooksPage: React.FC = () => {
  const a = useSiteActions();
  return (
    <>
      <PageHeader title="DKO Books" subtitle="Spiritual warfare publications by Dr. D.K. Olukoya." />
      <PublicationsSection onOpenAgents={a.openAgents} />
    </>
  );
};

export const NotFoundPage: React.FC = () => (
  <>
    <PageHeader title="Page not found" subtitle="Sorry, we couldn't find that page." />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 rounded-xl shadow-md"
      >
        Back to the home page
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  </>
);
