import React from 'react';
import { Flame, Shield, Calendar, Clock, MapPin, Sparkles, Video, ArrowRight, BookOpen } from 'lucide-react';

interface FlagshipProgrammesSectionProps {
  onOpenPlanVisit: () => void;
  onOpenPrayerRequest: () => void;
  onWatchLive?: () => void;
}

export const FlagshipProgrammesSection: React.FC<FlagshipProgrammesSectionProps> = ({
  onOpenPlanVisit,
  onOpenPrayerRequest,
  onWatchLive,
}) => {
  const programmes = [
    {
      id: 'pmch',
      tag: 'Flagship Worldwide Service',
      tagColor: 'bg-red-600 text-white',
      title: 'Power Must Change Hands (PMCH)',
      schedule: 'First Saturday of Every Month · 9:00 AM – 12:00 PM',
      scripture: 'Psalm 62:11 — "God hath spoken once; twice have I heard this; that power belongeth unto God."',
      description: 'The worldwide flagship miracle and deliverance programme presided over by the General Overseer, Dr. D.K. Olukoya. Believers fast and engage in aggressive warfare prayers to break long-standing embargos, ancestral bondages, and claim extraordinary breakthroughs.',
      features: [
        'Connected live with MFM Worldwide Headquarters & Prayer City',
        'Specific monthly spiritual warfare prayer outline',
        'Personal deliverance and prophetic declarations over careers, families & health',
      ],
      badge: 'Live Broadcast & In-Person',
      accent: 'border-red-500/80 from-red-950/40 via-purple-950/60 to-purple-950',
    },
    {
      id: 'spiritual-clinic',
      tag: 'Midweek Spiritual Diagnosis',
      tagColor: 'bg-amber-500 text-slate-950',
      title: 'Spiritual Clinic & Bible Study (Digging Deep)',
      schedule: 'Every Tuesday Evening · 6:30 PM – 8:30 PM',
      scripture: 'Jeremiah 8:22 — "Is there no balm in Gilead; is there no physician there?"',
      description: 'A comprehensive spiritual hospital where believers receive divine diagnosis for mysterious afflictions, dream pollutions, ancestral blockades, and foundational sicknesses, paired with systematic, verse-by-verse scripture study.',
      features: [
        'Deep scriptural dissection of Christian discipleship and holiness',
        'Spiritual diagnosis and one-on-one ministerial counseling',
        'Targeted warfare prayer capsules against foundational bondages',
      ],
      badge: 'Interactive & Fellowship',
      accent: 'border-amber-500/80 from-amber-950/30 via-purple-950/60 to-purple-950',
    },
    {
      id: 'deliverance-hour',
      tag: 'Warfare & Intercession',
      tagColor: 'bg-purple-600 text-white',
      title: 'Friday Deliverance & Intercession Hour',
      schedule: 'Every Friday Evening · 6:30 PM – 8:30 PM',
      scripture: 'Obadiah 1:17 — "Upon mount Zion shall be deliverance, and there shall be holiness..."',
      description: 'Fervent prayer session dedicated to aggressive spiritual warfare, tearing down territorial spirits, breaking generational curses, dismantling witchcraft networks, and interceding for Scotland and revival across the nations.',
      features: [
        'Violent prayers against demonic oppression and marital stagnation',
        'Anointed intercession for Edinburgh, Lothian, and Scotland',
        'Impartation of the fire of the Holy Ghost for personal victory',
      ],
      badge: 'Altar of Fire',
      accent: 'border-purple-500/80 from-purple-950 via-purple-900/60 to-indigo-950',
    },
    {
      id: 'sunday-worship',
      tag: 'Pentecostal Gathering',
      tagColor: 'bg-emerald-600 text-white',
      title: 'Sunday Glorious Worship & Pentecostal Hour',
      schedule: 'Every Sunday · 10:00 AM School | 10:45 AM Service',
      scripture: 'Psalm 100:4 — "Enter into his gates with thanksgiving, and into his courts with praise."',
      description: 'Our premier weekly gathering on Mount Zion. Begins with deep Christian education in Pentecostal Sunday School, followed by passionate high praise, anointed choir ministrations by Voices of Zion, apostolic preaching, and mass deliverance.',
      features: [
        'Pentecostal Sunday School classes for adults, youth, and children',
        'Vibrant praise and heartfelt worship with Holy Ghost manifestation',
        'Life-transforming apostolic sermon by Pastor Dr. Festus Ogunmola',
      ],
      badge: 'Family & Deliverance',
      accent: 'border-emerald-500/80 from-emerald-950/30 via-purple-950/60 to-purple-950',
    },
  ];

  return (
    <section id="programmes" className="py-20 bg-purple-950 text-white relative overflow-hidden border-t border-purple-900">
      {/* Background scrims */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-purple-950 to-slate-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header (mountainoffire.org template style) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-300 bg-purple-900/90 px-4 py-1.5 rounded-full border border-purple-700 uppercase tracking-wider mb-4 shadow-xs">
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Official MFM Flagship Gatherings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Transformative Programmes on Mount Zion
          </h2>

          <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed">
            In accordance with the global ministry mandate of Mountain of Fire and Miracles Ministries, 
            our Edinburgh sanctuary hosts these powerful spiritual appointments designed to deliver the oppressed, 
            build aggressive prayer champions, and glorify the Lord Jesus Christ.
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programmes.map((prog) => (
            <div
              key={prog.id}
              className={`rounded-2xl border-2 p-6 sm:p-8 bg-gradient-to-br ${prog.accent} shadow-2xl flex flex-col justify-between transition-all duration-300 hover:scale-[1.01]`}
            >
              <div>
                {/* Header Tag & Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider ${prog.tagColor} shadow-xs`}>
                    {prog.tag}
                  </span>
                  <span className="text-[11px] font-mono text-amber-300 font-bold bg-purple-950/80 px-2.5 py-0.5 rounded-lg border border-purple-800">
                    {prog.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white leading-tight mb-2">
                  {prog.title}
                </h3>

                {/* Schedule & Location */}
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300 mb-4 bg-purple-950/60 p-2.5 rounded-xl border border-purple-800/80">
                  <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{prog.schedule}</span>
                </div>

                {/* Scripture Foundation */}
                <p className="text-xs text-purple-200 italic mb-4 p-3 bg-purple-900/40 rounded-xl border-l-4 border-l-amber-400">
                  {prog.scripture}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-purple-100 leading-relaxed mb-5">
                  {prog.description}
                </p>

                {/* Key Bullet Features */}
                <div className="space-y-2 mb-6">
                  {prog.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-purple-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-purple-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-xs text-purple-300">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>13 Bangor Road, Leith</span>
                </div>

                <div className="flex items-center gap-2">
                  {onWatchLive && (
                    <button
                      onClick={onWatchLive}
                      className="px-3.5 py-2 text-xs font-bold text-purple-200 hover:text-white bg-purple-950/80 hover:bg-purple-900 rounded-xl border border-purple-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <Video className="w-3.5 h-3.5 text-amber-400" />
                      <span>Watch Stream</span>
                    </button>
                  )}

                  <button
                    onClick={onOpenPlanVisit}
                    className="px-4 py-2 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Attend Programme</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
