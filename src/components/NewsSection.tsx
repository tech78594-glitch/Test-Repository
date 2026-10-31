import React, { useEffect, useState } from 'react';
import { Newspaper, Calendar, ArrowRight, X, ExternalLink, Flame } from 'lucide-react';
import { NEWS_POSTS, NewsPost } from '@/src/data/news';

const MAX_ON_PAGE = 6;

const formatDate = (date: Date) =>
  date.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });

/** Renders a post body: blank lines separate paragraphs, "- " lines become bullet lists. */
const PostBody: React.FC<{ body: string }> = ({ body }) => (
  <>
    {body.split(/\n\s*\n/).map((block, i) => {
      const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
      if (lines.length > 0 && lines.every((l) => l.startsWith('- '))) {
        return (
          <ul key={i} className="space-y-1.5 mb-4">
            {lines.map((l, j) => (
              <li key={j} className="flex items-start gap-2">
                <span className="text-amber-500 font-bold">•</span>
                <span>{l.slice(2)}</span>
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="mb-4 leading-relaxed">
          {lines.join(' ')}
        </p>
      );
    })}
  </>
);

export const NewsSection: React.FC = () => {
  const [openPost, setOpenPost] = useState<NewsPost | null>(null);
  const posts = NEWS_POSTS.slice(0, MAX_ON_PAGE);

  useEffect(() => {
    if (!openPost) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenPost(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [openPost]);

  if (posts.length === 0) return null;

  return (
    <section id="news" className="py-20 bg-purple-50/40 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Church News &amp; Updates</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            What&rsquo;s Happening at MFM Edinburgh
          </h2>
          <p className="mt-2 text-slate-700 max-w-2xl text-sm sm:text-base">
            Upcoming programmes, special services and news from our church family in Leith.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl bg-white border border-purple-200 hover:border-purple-400 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
            >
              {post.image ? (
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="aspect-video w-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              ) : (
                <div className="h-1.5 bg-gradient-to-r from-purple-800 via-red-600 to-amber-400" />
              )}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-red-600" />
                  <time dateTime={post.date.toISOString()}>{formatDate(post.date)}</time>
                </div>
                <h3 className="text-lg font-bold text-purple-950 leading-snug mb-2">{post.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed line-clamp-3 mb-5">{post.summary}</p>
                <button
                  onClick={() => setOpenPost(post)}
                  className="mt-auto self-start inline-flex items-center gap-1.5 text-sm font-bold text-purple-800 hover:text-purple-950 cursor-pointer"
                >
                  <span>Read more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {openPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpenPost(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="news-post-title"
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl border border-purple-200 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 p-6 bg-gradient-to-r from-purple-950 to-purple-800 text-white">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 uppercase tracking-wider mb-1">
                  <Newspaper className="w-3.5 h-3.5" />
                  <span>{formatDate(openPost.date)}</span>
                </div>
                <h3 id="news-post-title" className="text-xl font-extrabold leading-snug">
                  {openPost.title}
                </h3>
              </div>
              <button
                onClick={() => setOpenPost(null)}
                className="p-2 rounded-lg bg-purple-900/80 hover:bg-purple-700 transition-colors shrink-0 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto text-slate-700 text-sm sm:text-base">
              {openPost.image && (
                <img src={openPost.image} alt="" className="w-full rounded-xl mb-5 object-cover max-h-72" />
              )}
              <PostBody body={openPost.body} />
              {openPost.link && (
                <a
                  href={openPost.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 rounded-xl shadow-md transition-all"
                >
                  <span>{openPost.linkText || 'Find out more'}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
