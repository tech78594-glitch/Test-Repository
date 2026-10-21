import React from 'react';
import { Flame, ShieldCheck, Sparkles } from 'lucide-react';
import pastorImage from '@/src/assets/images/church_pastor_pulpit_1792594652485.jpg';

interface AboutSectionProps {
  onOpenPlanVisit: () => void;
  onOpenPrayerRequest: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenPlanVisit,
  onOpenPrayerRequest,
}) => {
  return (
    <section id="about" className="py-20 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>01. Our Calling &amp; Vision</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            A Full Gospel Revival Ministry Dedicated to Holiness, Prayer &amp; Deliverance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Mountain of Fire and Miracles Ministries Edinburgh is an anointed branch of the worldwide MFM 
            commission founded by Dr. D.K. Olukoya. We are established in Scotland to proclaim salvation in Jesus Christ, 
            teach the undiluted truth of God’s Word, and lead believers into total victory over every spiritual resistance.
          </p>
        </div>

        {/* 2-Column Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Pastor Image with MFM Royal Purple & Gold Accent Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-purple-200 bg-purple-950 aspect-[4/3] lg:aspect-[4/5]">
              <img
                src={pastorImage}
                alt="Pastor Dr. Festus Ogunmola ministering the Word of God at MFM Edinburgh"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                  Branch Pastorate
                </span>
                <p className="text-base font-extrabold text-white">Dr. Festus Ogunmola</p>
                <p className="text-xs text-purple-200">Pastor-in-Charge · MFM Edinburgh</p>
              </div>
            </div>
          </div>

          {/* Pastoral Welcome & Heart of the Ministry */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-purple-950 mb-4">
              “Welcome to Mount Zion in Edinburgh”
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4">
              Whether you are an Edinburgh resident, a student arriving at university, an immigrant 
              establishing family in Scotland, or someone seeking spiritual answers and breakthrough, 
              we welcome you with open arms.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              At MFM Edinburgh, our mandate is anchored in the landmark promise of <strong className="text-purple-950">Obadiah 1:17</strong>: 
              <em> “But upon Mount Zion shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions.”</em> 
              We do not preach a diluted gospel. We train believers to become mighty prayer champions who know how to 
              confront foundational problems and live triumphant Christian lives.
            </p>

            {/* Pastoral Signature Block */}
            <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-[11px] text-purple-800 uppercase tracking-wider font-bold">Under the Global Leadership of</p>
                <p className="text-sm font-extrabold text-purple-950">Dr. Daniel K. Olukoya</p>
                <p className="text-xs text-slate-600">General Overseer, MFM Worldwide</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onOpenPlanVisit}
                  className="px-4 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap shadow-xs"
                >
                  Join Us This Sunday
                </button>
                <button
                  onClick={onOpenPrayerRequest}
                  className="px-4 py-2.5 text-xs font-semibold text-purple-900 hover:text-purple-950 bg-white border border-purple-300 hover:border-purple-400 rounded-xl transition-colors whitespace-nowrap"
                >
                  Speak with Pastor
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 hover:border-purple-300 hover:bg-purple-50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5 text-purple-800" />
            </div>
            <h4 className="text-lg font-bold text-purple-950 mb-2">Absolute Holiness</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              We teach and live holiness within and without as the indispensable requirement to walk with God and enter the kingdom of heaven (Hebrews 12:14).
            </p>
            <span className="text-xs font-bold text-purple-800">Inward purity &amp; outward modesty</span>
          </div>

          <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 hover:border-purple-300 hover:bg-purple-50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
              <Flame className="w-5 h-5 fill-red-500 text-red-600" />
            </div>
            <h4 className="text-lg font-bold text-purple-950 mb-2">Aggressive Warfare Prayer</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              We believe in non-stop, Holy Ghost-fired prayers that paralyze dark powers, dismantle ancestral bondages, and birth divine miracles.
            </p>
            <span className="text-xs font-bold text-red-700">Hands-on spiritual warriors</span>
          </div>

          <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 hover:border-purple-300 hover:bg-purple-50 transition-all shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
              <Sparkles className="w-5 h-5 text-amber-700" />
            </div>
            <h4 className="text-lg font-bold text-purple-950 mb-2">Possessing Your Possessions</h4>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              God has placed your destiny in Scotland and the nations to reign. Through biblical deliverance, what the enemy stole is recovered in full.
            </p>
            <span className="text-xs font-bold text-amber-800">Obadiah 1:17 Deliverance</span>
          </div>
        </div>
      </div>
    </section>
  );
};
