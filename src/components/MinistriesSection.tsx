import React, { useState } from 'react';
import { Users, Clock, ArrowRight, CheckCircle2, Flame } from 'lucide-react';
import { MINISTRIES } from '@/src/data/churchData';
import youthImage from '@/src/assets/images/youth_children_ministry_1792594654443.jpg';
import fellowshipImage from '@/src/assets/images/fellowship_community_1792594655194.jpg';

interface MinistriesSectionProps {
  onJoinMinistry: (ministryName: string) => void;
}

export const MinistriesSection: React.FC<MinistriesSectionProps> = ({ onJoinMinistry }) => {
  const [activeMinistryId, setActiveMinistryId] = useState<string>(MINISTRIES[0].id);

  const activeMinistry =
    MINISTRIES.find((m) => m.id === activeMinistryId) || MINISTRIES[0];

  return (
    <section id="ministries" className="py-20 bg-purple-50/30 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>04. Ministries &amp; Fellowships</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight"
              style={{ textWrap: 'balance' }}
            >
              A Royal Priesthood Where Every Member Flourishes
            </h2>
            <p className="mt-2 text-slate-700 max-w-2xl text-sm sm:text-base">
              Discover a spiritual family where you can grow, exercise your spiritual gifts, and walk alongside brothers and sisters who sharpen your faith in Scotland.
            </p>
          </div>
        </div>

        {/* Ministries Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {MINISTRIES.map((ministry) => {
            const isActive = ministry.id === activeMinistryId;
            return (
              <button
                key={ministry.id}
                onClick={() => setActiveMinistryId(ministry.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 flex items-center gap-2 ${
                  isActive
                    ? 'bg-purple-900 text-white shadow-md'
                    : 'bg-white text-purple-950 hover:text-purple-900 border border-purple-200 hover:border-purple-300'
                }`}
              >
                <span>{ministry.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Ministry Showcase (2-Column Card) */}
        <div className="bg-white rounded-2xl border border-purple-200 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Details Column */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider mb-2">
                <span>{activeMinistry.subtitle}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-purple-950 mb-4 leading-snug">
                {activeMinistry.name}
              </h3>

              <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
                {activeMinistry.description}
              </p>

              <div className="space-y-2 mb-8">
                <p className="text-xs font-bold text-purple-950 uppercase tracking-wider mb-3">
                  Key Focus &amp; Engagements
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeMinistry.activities.map((act, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs font-medium text-slate-800 bg-purple-50/60 p-2.5 rounded-xl border border-purple-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{act}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-700">
                <Clock className="w-4 h-4 text-purple-700 shrink-0" />
                <span>
                  <strong>Meetings:</strong> {activeMinistry.meetingTime}
                </span>
              </div>

              <button
                onClick={() => onJoinMinistry(activeMinistry.name)}
                className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>Get Connected / Join</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Image Showcase Column */}
          <div className="lg:col-span-5 relative bg-purple-950 min-h-[300px]">
            <img
              src={activeMinistry.id === 'youth' || activeMinistry.id === 'children' ? youthImage : fellowshipImage}
              alt={activeMinistry.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                Edinburgh Fellowship
              </span>
              <p className="text-sm font-medium text-purple-100 mt-1">
                “Behold, how good and how pleasant it is for brethren to dwell together in unity!” — Psalm 133:1
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
