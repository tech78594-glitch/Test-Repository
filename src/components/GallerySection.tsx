import React, { useState, useEffect } from 'react';
import {
  Flame,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Tag,
  Share2,
  Check,
  Sparkles
} from 'lucide-react';

// Import church gallery images
import pulpitImg from '@/src/assets/images/church_pastor_pulpit_1792594652485.jpg';
import fellowshipImg from '@/src/assets/images/fellowship_community_1792594655194.jpg';
import sanctuaryImg from '@/src/assets/images/hero_worship_sanctuary_1792594652620.jpg';
import prayerImg from '@/src/assets/images/prayer_intercession_1792594654591.jpg';
import youthImg from '@/src/assets/images/youth_children_ministry_1792594654443.jpg';
import outreachImg from '@/src/assets/images/outreach_leith_edinburgh_1792596967959.jpg';
import choirImg from '@/src/assets/images/choir_worship_ministry_1792596982363.jpg';
import conferenceImg from '@/src/assets/images/special_deliverance_conference_1792596997137.jpg';

export interface GalleryItem {
  id: string;
  title: string;
  category: 'worship' | 'outreach' | 'prayer' | 'youth' | 'choir';
  categoryLabel: string;
  date: string;
  location: string;
  description: string;
  scripture?: string;
  image: string;
  aspectClass?: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'outreach-1',
    title: 'Leith Community Food Care & Warmth Drive',
    category: 'outreach',
    categoryLabel: 'Community Outreach',
    date: 'Recent Outreach',
    location: 'Great Junction Street & Bangor Road, Leith',
    description: 'Members of MFM Edinburgh distributing fresh food hampers, care packages, and winter warmth supplies to local families and elderly residents across Leith.',
    scripture: 'Matthew 25:40 — "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me."',
    image: outreachImg,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'worship-1',
    title: 'Sunday Glorious Worship & Pentecostal Ministration',
    category: 'worship',
    categoryLabel: 'Sunday Worship',
    date: 'Sunday Gathering',
    location: 'Main Sanctuary, 13 Bangor Road',
    description: 'Congregation lifting holy hands in adoration and deep spiritual surrender as the fire of God touches every waiting heart.',
    scripture: 'Psalm 100:4 — "Enter into his gates with thanksgiving, and into his courts with praise."',
    image: sanctuaryImg,
    aspectClass: 'aspect-[16/10]',
  },
  {
    id: 'choir-1',
    title: 'Voices of Zion: Anointed Choir Praise',
    category: 'choir',
    categoryLabel: 'Praise & Choir',
    date: 'Sunday Praise Hour',
    location: 'Sanctuary Platform, Edinburgh',
    description: 'The Voices of Zion choir leading intense high praise and heavenly worship adorned in signature royal purple and African gold robes.',
    scripture: '2 Chronicles 20:21 — "Praise the Lord; for his mercy endureth for ever."',
    image: choirImg,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'prayer-1',
    title: 'Deliverance & Holy Ghost Fire Intercession',
    category: 'prayer',
    categoryLabel: 'Prayer & Deliverance',
    date: 'Friday Service',
    location: 'Mount Zion Altar of Fire',
    description: 'Fervent warfare intercession pulling down strongholds, breaking ancestral covenants, and releasing testimonies of total victory.',
    scripture: 'Obadiah 1:17 — "Upon mount Zion shall be deliverance, and there shall be holiness."',
    image: prayerImg,
    aspectClass: 'aspect-[4/5]',
  },
  {
    id: 'conference-1',
    title: 'Power Must Change Hands & Revival Night',
    category: 'prayer',
    categoryLabel: 'Special Programmes',
    date: '1st Saturday of the Month',
    location: 'MFM Edinburgh Sanctuary Hall',
    description: 'Packed monthly power service where hundreds gather in holy unity seeking divine breakthrough, supernatural open doors, and miraculous healings.',
    scripture: 'Psalm 62:11 — "God hath spoken once; twice have I heard this; that power belongeth unto God."',
    image: conferenceImg,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'pastor-1',
    title: 'Apostolic Word Exhortation from the Pulpit',
    category: 'worship',
    categoryLabel: 'Sunday Worship',
    date: 'Every Sunday',
    location: '13 Bangor Road Pulpit',
    description: 'Pastor Dr. Festus Ogunmola delivering the uncompromising, undiluted Word of God centered on biblical holiness, righteous living, and victory in Christ.',
    scripture: '2 Timothy 4:2 — "Preach the word; be instant in season, out of season; reprove, rebuke, exhort with all longsuffering and doctrine."',
    image: pulpitImg,
    aspectClass: 'aspect-[3/4]',
  },
  {
    id: 'youth-1',
    title: 'Kingdom Youth & Next-Gen Mentorship',
    category: 'youth',
    categoryLabel: 'Youth & Fellowships',
    date: 'Monthly Youth Summit',
    location: 'Edinburgh Youth Hall',
    description: 'Young professionals, university students, and teenagers being grounded in godly leadership, academic excellence, and fiery spiritual devotion.',
    scripture: '1 Timothy 4:12 — "Let no man despise thy youth; but be thou an example of the believers."',
    image: youthImg,
    aspectClass: 'aspect-[4/3]',
  },
  {
    id: 'fellowship-1',
    title: 'Brotherly Fellowship & Family Refreshment',
    category: 'youth',
    categoryLabel: 'Church Life',
    date: 'Post-Service Fellowship',
    location: 'Sanctuary Fellowship Hall',
    description: 'Warm Scottish hospitality and loving community after service with light refreshments, welcoming newcomers, and praying for one another.',
    scripture: 'Hebrews 13:1 — "Let brotherly love continue."',
    image: fellowshipImg,
    aspectClass: 'aspect-[16/10]',
  },
];

type CategoryFilter = 'all' | 'worship' | 'outreach' | 'prayer' | 'youth' | 'choir';

interface GallerySectionProps {
  onOpenPlanVisit?: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenPlanVisit }) => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  // Lightbox navigation
  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const showNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleShare = (item: GalleryItem) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: `${item.title} at MFM Edinburgh: ${item.description}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${window.location.origin}#gallery`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="py-20 bg-slate-50 border-t border-purple-100 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 uppercase tracking-wider mb-4 shadow-2xs">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Kingdom Moments &amp; Fellowship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight mb-4">
            Church Life, Outreach &amp; Worship in Edinburgh
          </h2>

          <p className="text-base text-slate-600 leading-relaxed">
            Witness the vibrant life of <strong className="text-purple-950 font-semibold">MFM Edinburgh</strong> in pictures: 
            fiery Sunday worship, community support across Leith, brotherly fellowship, and powerful prayer conventions on Mount Zion.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Photos' },
              { id: 'worship', label: 'Sunday Worship' },
              { id: 'outreach', label: 'Community Outreach' },
              { id: 'prayer', label: 'Deliverance & Prayer' },
              { id: 'choir', label: 'Praise & Choir' },
              { id: 'youth', label: 'Youth & Fellowship' },
            ].map((tab) => {
              const count = tab.id === 'all'
                ? GALLERY_DATA.length
                : GALLERY_DATA.filter((i) => i.category === tab.id).length;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id as CategoryFilter)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-purple-900 text-white shadow-md shadow-purple-900/20 scale-[1.02]'
                      : 'bg-white text-slate-700 hover:text-purple-950 hover:bg-purple-50 border border-slate-200 shadow-2xs'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      activeFilter === tab.id
                        ? 'bg-purple-700 text-amber-300'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Masonry Layout using CSS Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden bg-white border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
            >
              {/* Photo with subtle hover zoom */}
              <div className="relative overflow-hidden bg-purple-950">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Dark Vignette Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/90 via-purple-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-300 mb-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                  <p className="text-xs text-purple-100 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-purple-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-amber-300 border border-purple-700/80 shadow-xs flex items-center gap-1">
                  <Tag className="w-3 h-3 text-amber-400" />
                  <span>{item.categoryLabel}</span>
                </div>

                {/* Expand Icon Button */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-lg bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 className="w-3.5 h-3.5 text-white" />
                </div>
              </div>

              {/* Bottom Caption & Location */}
              <div className="p-4 bg-white">
                <h3 className="font-bold text-sm text-purple-950 leading-snug group-hover:text-purple-700 transition-colors mb-1.5">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <MapPin className="w-3 h-3 text-red-500 shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-14 max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white shadow-xl border border-purple-800 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Experience the Holy Ghost Fire</span>
            </span>
            <h3 className="text-xl font-bold text-white mb-1">
              Be Part of Our Next Church Gathering
            </h3>
            <p className="text-xs text-purple-200 max-w-md">
              Whether you are seeking salvation, deeper discipleship, or deliverance from stubborn challenges, there is a place reserved for you on Mount Zion.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {onOpenPlanVisit && (
              <button
                onClick={onOpenPlanVisit}
                className="px-5 py-3 text-xs font-extrabold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Plan Your Visit</span>
              </button>
            )}
            <a
              href="#services"
              className="px-4 py-3 text-xs font-semibold text-purple-200 hover:text-white bg-purple-900/60 hover:bg-purple-800 rounded-xl border border-purple-700 transition-colors whitespace-nowrap"
            >
              View Service Schedule
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentItem.title}
          className="fixed inset-0 z-50 bg-purple-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          {/* Close Backdrop Click */}
          <div className="fixed inset-0 cursor-zoom-out" onClick={closeLightbox} />

          <div className="relative z-10 max-w-5xl w-full bg-slate-900 border border-purple-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row max-h-[90vh]">
            {/* Image Carrier with Previous/Next Controls */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[420px] overflow-hidden">
              <img
                src={currentItem.image}
                alt={currentItem.title}
                className="max-h-[60vh] lg:max-h-[85vh] w-auto max-w-full object-contain"
              />

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-950/80 hover:bg-purple-900 text-white flex items-center justify-center border border-purple-700 shadow-lg transition-transform hover:scale-110 cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-950/80 hover:bg-purple-900 text-white flex items-center justify-center border border-purple-700 shadow-lg transition-transform hover:scale-110 cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo Index Counter */}
              <div className="absolute bottom-3 left-3 bg-purple-950/80 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono text-purple-200 border border-purple-800">
                {lightboxIndex! + 1} / {filteredItems.length}
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="w-full lg:w-80 p-6 bg-purple-950 text-white flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-purple-800/80 overflow-y-auto">
              <div>
                {/* Header Controls */}
                <div className="flex items-center justify-between gap-2 pb-4 border-b border-purple-800/80">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-300 uppercase tracking-wider bg-purple-900/80 px-2.5 py-1 rounded-md border border-purple-700">
                    <Tag className="w-3 h-3 text-amber-400" />
                    <span>{currentItem.categoryLabel}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleShare(currentItem)}
                      className="p-1.5 text-purple-200 hover:text-white rounded-lg hover:bg-purple-900 transition-colors"
                      title="Share photo"
                    >
                      {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={closeLightbox}
                      className="p-1.5 text-purple-200 hover:text-white rounded-lg hover:bg-purple-900 transition-colors cursor-pointer"
                      title="Close viewer (Esc)"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Title & Metadata */}
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                    {currentItem.title}
                  </h3>

                  <div className="space-y-1.5 text-xs text-purple-200/90 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{currentItem.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                      <span>{currentItem.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-purple-100 leading-relaxed mb-4">
                    {currentItem.description}
                  </p>

                  {/* Scripture Pillar */}
                  {currentItem.scripture && (
                    <div className="p-3 bg-purple-900/60 rounded-xl border border-purple-800 text-[11px] text-amber-200 italic leading-relaxed">
                      {currentItem.scripture}
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-purple-800/80 mt-6 space-y-2">
                {onOpenPlanVisit && (
                  <button
                    onClick={() => {
                      closeLightbox();
                      onOpenPlanVisit();
                    }}
                    className="w-full py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Plan Your Sunday Visit</span>
                  </button>
                )}
                <a
                  href={currentItem.image}
                  download={`mfm-edinburgh-${currentItem.id}.jpg`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 text-center text-xs font-semibold text-purple-200 hover:text-white bg-purple-900/40 hover:bg-purple-900 rounded-xl border border-purple-800 transition-colors block"
                >
                  View Full Resolution Image
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
