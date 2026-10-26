import React, { useState, useEffect } from 'react';
import {
  Flame,
  HeartHandshake,
  Send,
  Plus,
  Filter,
  CheckCircle2,
  Share2,
  Sparkles,
  Users,
  Shield,
  MessageCircle,
  Clock,
  MapPin,
  Check
} from 'lucide-react';
import { AnimatedSuccessBadge } from './AnimatedSuccessBadge';
import { useLocale } from '@/src/context/LocaleContext';

export interface PrayerPost {
  id: string;
  author: string;
  isAnonymous: boolean;
  location: string;
  category: string;
  content: string;
  timestamp: string;
  prayerCount: number;
  hasPrayed?: boolean;
}

const INITIAL_PRAYER_POSTS: PrayerPost[] = [
  {
    id: 'post-1',
    author: 'Sis. Grace A.',
    isAnonymous: false,
    location: 'Leith, Edinburgh',
    category: 'Healing & Divine Health',
    content:
      'Standing on Jeremiah 30:17 for my mother who is undergoing surgery in Edinburgh Royal Infirmary this Tuesday. I decree total restoration and that the surgeon will be guided by the Holy Spirit.',
    timestamp: '15 mins ago',
    prayerCount: 42,
  },
  {
    id: 'post-2',
    author: 'Anonymous Believer',
    isAnonymous: true,
    location: 'Edinburgh',
    category: 'Immigration & Legal Breakthrough',
    content:
      'Praying for supernatural breakthrough on my UK Skilled Worker Visa and Indefinite Leave to Remain application. Every spiritual roadblock and evil delay, be roasted by fire in Jesus’ name!',
    timestamp: '1 hour ago',
    prayerCount: 78,
  },
  {
    id: 'post-3',
    author: 'Bro. Emmanuel K.',
    isAnonymous: false,
    location: 'Old Town, Edinburgh',
    category: 'Career & PhD Breakthrough',
    content:
      'Defending my doctoral thesis at the University of Edinburgh next week. Father, grant me the wisdom of Solomon and favour before the examiners. Every anti-success power, scatter!',
    timestamp: '3 hours ago',
    prayerCount: 35,
  },
  {
    id: 'post-4',
    author: 'Sister Joy O.',
    isAnonymous: false,
    location: 'Livingston / West Lothian',
    category: 'Fruit of the Womb (Hannah Hour)',
    content:
      'Believing God for the fruit of the womb after 4 years of marriage. Standing in agreement with Pastor Dr. Festus Ogunmola and the altar of fire that this month is my appointed season of laughter!',
    timestamp: '5 hours ago',
    prayerCount: 96,
  },
  {
    id: 'post-5',
    author: 'Bro. David M.',
    isAnonymous: false,
    location: 'Fife & Edinburgh',
    category: 'Foundational Deliverance',
    content:
      'Total deliverance from generational poverty and recurring setbacks in business. According to Obadiah 1:17, upon Mount Zion shall be deliverance and holiness, and the house of Jacob shall possess their possessions!',
    timestamp: 'Yesterday',
    prayerCount: 64,
  },
  {
    id: 'post-6',
    author: 'Anonymous Sister',
    isAnonymous: true,
    location: 'Portobello, Edinburgh',
    category: 'Family & Marital Peace',
    content:
      'Restoration of peace, unity, and divine love in my marriage. Every evil hand troubling our home, wither in the name of Jesus.',
    timestamp: 'Yesterday',
    prayerCount: 51,
  },
];

const CATEGORIES = [
  'All Prayers',
  'Healing & Divine Health',
  'Foundational Deliverance',
  'Career & PhD Breakthrough',
  'Immigration & Legal Breakthrough',
  'Fruit of the Womb (Hannah Hour)',
  'Family & Marital Peace',
];

export const CommunityPrayerWall: React.FC = () => {
  const { t } = useLocale();
  const [posts, setPosts] = useState<PrayerPost[]>(() => {
    try {
      const stored = localStorage.getItem('mfm_community_prayers');
      return stored ? JSON.parse(stored) : INITIAL_PRAYER_POSTS;
    } catch {
      return INITIAL_PRAYER_POSTS;
    }
  });

  const [prayedPostIds, setPrayedPostIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('mfm_prayed_post_ids');
      return stored ? JSON.parse(stored) : ['post-4'];
    } catch {
      return ['post-4'];
    }
  });

  const [selectedCategory, setSelectedCategory] = useState('All Prayers');
  const [isPostingModalOpen, setIsPostingModalOpen] = useState(false);
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('Edinburgh');
  const [newCategory, setNewCategory] = useState('Foundational Deliverance');
  const [newContent, setNewContent] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [justPrayedId, setJustPrayedId] = useState<string | null>(null);

  // Sync state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mfm_community_prayers', JSON.stringify(posts));
    } catch (e) {
      console.error(e);
    }
  }, [posts]);

  useEffect(() => {
    try {
      localStorage.setItem('mfm_prayed_post_ids', JSON.stringify(prayedPostIds));
    } catch (e) {
      console.error(e);
    }
  }, [prayedPostIds]);

  const handlePrayToggle = (postId: string) => {
    const isAlreadyPrayed = prayedPostIds.includes(postId);

    if (isAlreadyPrayed) {
      // Toggle off
      setPrayedPostIds((prev) => prev.filter((id) => id !== postId));
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, prayerCount: Math.max(0, p.prayerCount - 1) } : p))
      );
    } else {
      // Toggle on & trigger subtle animation
      setPrayedPostIds((prev) => [...prev, postId]);
      setPosts((prev) =>
        prev.map((p) => (p.id === postId ? { ...p, prayerCount: p.prayerCount + 1 } : p))
      );
      setJustPrayedId(postId);
      setTimeout(() => setJustPrayedId(null), 1800);
    }
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newContent.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newPost: PrayerPost = {
        id: `post-${Date.now()}`,
        author: isAnonymous ? 'Anonymous Believer' : newAuthor.trim() || 'Christian Sibling',
        isAnonymous,
        location: newLocation.trim() || 'Edinburgh',
        category: newCategory,
        content: newContent.trim(),
        timestamp: 'Just now',
        prayerCount: 1, // Author prays for their own petition
      };

      setPosts((prev) => [newPost, ...prev]);
      setPrayedPostIds((prev) => [...prev, newPost.id]);
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 450);
  };

  const handleResetModal = () => {
    setSubmitSuccess(false);
    setIsPostingModalOpen(false);
    setNewAuthor('');
    setNewContent('');
    setIsAnonymous(false);
  };

  const filteredPosts = posts.filter((post) => {
    if (selectedCategory === 'All Prayers') return true;
    return post.category === selectedCategory;
  });

  const totalPrayersCount = posts.reduce((sum, p) => sum + p.prayerCount, 0);

  return (
    <section id="prayer-wall" className="py-20 bg-gradient-to-b from-white via-purple-50/40 to-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-4 border border-purple-200">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span>{t('wall.badge')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-purple-950 tracking-tight mb-4">
            {t('wall.title')}
          </h2>

          <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
            {t('wall.subtitle')}
          </p>

          <blockquote className="inline-block px-5 py-2.5 rounded-xl bg-purple-900/5 border border-purple-200 text-xs sm:text-sm text-purple-900 italic font-medium">
            “Again I say unto you, That if two of you shall agree on earth as touching any thing that they shall ask, it shall be done for them of my Father which is in heaven.”
            <span className="block mt-1 font-bold not-italic text-purple-950 text-xs">— Matthew 18:19 (KJV)</span>
          </blockquote>
        </div>

        {/* Live Intercession Counter Banner */}
        <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-purple-800 mb-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center shrink-0 text-amber-400">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-300 font-bold mb-0.5">
                {t('wall.network')}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
                <span>{totalPrayersCount.toLocaleString()}</span>
                <span className="text-sm font-normal text-purple-200">{t('wall.offered')}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setIsPostingModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-sm"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>{t('wall.postBtn')}</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <div className="flex items-center gap-1.5 text-xs font-bold text-purple-950 uppercase tracking-wider px-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-purple-700" />
            <span>{t('wall.category')}</span>
          </div>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            const displayLabel = cat === 'All Prayers' ? t('wall.allPrayers') : cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? 'bg-purple-900 text-amber-300 shadow-md ring-2 ring-purple-900/20'
                    : 'bg-white text-slate-700 hover:bg-purple-50 hover:text-purple-950 border border-purple-100 shadow-xs'
                }`}
              >
                {displayLabel}
              </button>
            );
          })}
        </div>

        {/* Prayer Requests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => {
            const hasPrayed = prayedPostIds.includes(post.id);
            const isJustPrayed = justPrayedId === post.id;

            return (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-purple-100 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-800 via-indigo-700 to-amber-400 opacity-80" />

                <div>
                  {/* Category Pill and Timestamp */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-900 text-[11px] font-bold border border-purple-100 line-clamp-1">
                      {post.category}
                    </span>
                    <span className="text-[11px] text-slate-600 flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3 text-purple-400" />
                      <span>{post.timestamp}</span>
                    </span>
                  </div>

                  {/* Prayer Content */}
                  <p className="text-slate-800 text-sm leading-relaxed mb-5 font-normal">
                    “{post.content}”
                  </p>
                </div>

                <div>
                  {/* Author and Location info */}
                  <div className="flex items-center justify-between pt-4 border-t border-purple-100 text-xs mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-900 font-bold flex items-center justify-center text-xs">
                        {post.isAnonymous ? '?' : post.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-purple-950 line-clamp-1">
                          {post.author}
                        </div>
                        <div className="text-[11px] text-slate-600 flex items-center gap-0.5">
                          <MapPin className="w-2.5 h-2.5 text-red-500" />
                          <span>{post.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs font-bold text-purple-900">
                        {post.prayerCount} {post.prayerCount === 1 ? 'believer' : 'believers'}
                      </div>
                      <div className="text-[10px] text-slate-600">standing in faith</div>
                    </div>
                  </div>

                  {/* "Praying for this" Interactive Support Button */}
                  <button
                    onClick={() => handlePrayToggle(post.id)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer relative overflow-hidden ${
                      hasPrayed
                        ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/30'
                        : 'bg-purple-50 text-purple-950 hover:bg-purple-900 hover:text-white border border-purple-200'
                    }`}
                  >
                    {isJustPrayed && (
                      <span className="absolute inset-0 bg-emerald-400/30 animate-pulse pointer-events-none" />
                    )}

                    {hasPrayed ? (
                      <>
                        <Check className="w-4 h-4 stroke-[3]" />
                        <span>{t('wall.prayedBtn')} ({post.prayerCount})</span>
                      </>
                    ) : (
                      <>
                        <Flame className="w-4 h-4 text-amber-500 fill-amber-500 group-hover:text-amber-300" />
                        <span>{t('wall.prayingBtn')} ({post.prayerCount})</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if category has no posts */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-purple-100 p-8 shadow-xs">
            <Flame className="w-10 h-10 text-purple-300 mx-auto mb-3" />
            <h4 className="text-lg font-bold text-purple-950 mb-1">No requests yet in this category</h4>
            <p className="text-xs text-slate-700 mb-4">Be the first to post a prayer petition upon the altar.</p>
            <button
              onClick={() => setIsPostingModalOpen(true)}
              className="px-5 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl"
            >
              Post Prayer Now
            </button>
          </div>
        )}

        {/* Bottom Call to Action for Private Pastoral Needs */}
        <div className="mt-12 text-center bg-purple-50/70 border border-purple-200 rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
          <Shield className="w-8 h-8 text-purple-800 mx-auto mb-3" />
          <h3 className="text-base sm:text-lg font-bold text-purple-950 mb-2">
            Need Confidential Deliverance or Pastoral Counsel?
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 mb-4 leading-relaxed">
            If your request requires strict pastoral confidentiality or foundational deliverance intervention, 
            submit a direct private request directly to Pastor Dr. Festus Ogunmola.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const btn = document.querySelector('button[aria-label="Submit a prayer request"]') as HTMLElement;
              if (btn) btn.click();
              else {
                window.location.hash = '#contact';
              }
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-purple-900 hover:text-purple-950 underline underline-offset-4"
          >
            <span>Submit Private Pastoral Request</span>
            <span>&rarr;</span>
          </a>
        </div>
      </div>

      {/* Modal for Posting a New Public Prayer */}
      {isPostingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-white rounded-2xl border border-purple-200 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
            {/* Modal Header */}
            <div className="p-5 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white flex items-center justify-between border-b border-purple-800">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/aistudio/MFM_logo_a7697bcf.png"
                  alt="MFM Logo"
                  className="w-10 h-10 object-contain rounded-full bg-white/10 p-0.5 border border-white/20 shrink-0"
                />
                <div>
                  <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 fill-amber-400" />
                    <span>Public Prayer Wall</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-white">
                    Post a Prayer Request
                  </h3>
                </div>
              </div>
              <button
                onClick={handleResetModal}
                className="p-1.5 text-purple-300 hover:text-white rounded-lg bg-purple-900 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto">
              {submitSuccess ? (
                <div className="text-center py-6 animate-success-enter">
                  <AnimatedSuccessBadge variant="gold" />

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Posted to Community Prayer Wall</span>
                  </div>

                  <h4 className="text-xl font-bold text-purple-950 mb-2">
                    Your Prayer Request Is Live
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-700 max-w-sm mx-auto mb-6 leading-relaxed">
                    Brethren across Edinburgh and Scotland can now see your burden and click <strong>“Praying for this”</strong> to stand in agreement with you.
                  </p>

                  <button
                    onClick={handleResetModal}
                    className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md"
                  >
                    View on Prayer Wall
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCreatePost} className="space-y-4">
                  <p className="text-xs text-purple-900 bg-purple-50/80 p-3 rounded-xl border border-purple-200 leading-relaxed">
                    This request will appear publicly on the prayer wall so the congregation can join their faith with yours.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        disabled={isAnonymous}
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        placeholder={isAnonymous ? 'Anonymous' : 'e.g. Sister Comfort'}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950 disabled:bg-slate-200 disabled:text-slate-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        value={newLocation}
                        onChange={(e) => setNewLocation(e.target.value)}
                        placeholder="e.g. Leith, Edinburgh"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                      />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="anonCheck"
                      checked={isAnonymous}
                      onChange={(e) => setIsAnonymous(e.target.checked)}
                      className="w-4 h-4 text-purple-900 rounded border-purple-300 focus:ring-purple-700"
                    />
                    <label htmlFor="anonCheck" className="text-xs font-semibold text-slate-700 cursor-pointer">
                      Post as Anonymous Believer
                    </label>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Prayer Category
                    </label>
                    <select
                      value={newCategory}
                      onChange={(e) => setNewCategory(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    >
                      {CATEGORIES.filter((c) => c !== 'All Prayers').map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Prayer Petition *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      placeholder="Share what you are believing God for (e.g. healing, visa approval, exam success, deliverance)..."
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    />
                  </div>

                  <div className="flex justify-end gap-3 pt-3 border-t border-purple-100">
                    <button
                      type="button"
                      onClick={handleResetModal}
                      className="px-4 py-2 text-xs font-bold text-purple-800 hover:text-purple-950"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Flame className="w-3.5 h-3.5 animate-spin text-purple-950" />
                          <span>Publishing to Altar...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Post to Prayer Wall</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
