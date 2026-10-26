import React from 'react';
import { Flame, ShieldCheck, Sparkles, Swords, CheckCircle2, Award, BookOpen } from 'lucide-react';
import pastorImage from '@/src/assets/images/church_pastor_pulpit_1792594652485.jpg';

interface AboutSectionProps {
  onOpenPlanVisit: () => void;
  onOpenPrayerRequest: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenPlanVisit,
  onOpenPrayerRequest,
}) => {
  const mfmMandatePoints = [
    'To propagate the gospel of our Lord Jesus Christ all over the world with apostolic power.',
    'To promote the revival of apostolic signs, wonders, miracles, and gifts of the Holy Ghost.',
    'To bring together children of God and train them to become aggressive prayer champions.',
    'To deliver men and women from foundational yokes, witchcraft oppressions, and satanic cages.',
    'To teach and live inward purity and outward holiness as an essential prerequisite for heaven.',
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-purple-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading (mountainoffire.org template style) */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold text-purple-900 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>01. The Global Commission &amp; Edinburgh Mandate</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black text-purple-950 tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            A Full Gospel Revival Ministry Dedicated to Holiness, Warfare Prayer &amp; Deliverance
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            Mountain of Fire and Miracles Ministries Edinburgh is an integral branch of the worldwide MFM commission founded by <strong className="text-purple-950">Dr. Daniel K. Olukoya</strong>. We are a distinct do-it-yourself gospel ministry where your hands are taught to war and your fingers to fight (Psalm 144:1).
          </p>
        </div>

        {/* 2-Column Story Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Pastor Image with MFM Royal Purple & Gold Accent Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-900 bg-purple-950 aspect-[4/3] lg:aspect-[4/5] group">
              <img
                src={pastorImage}
                alt="Pastor Dr. Festus Ogunmola ministering the Word of God at MFM Edinburgh Sanctuary"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/30 to-transparent" />
              
              {/* Badge Overlay */}
              <div className="absolute top-4 left-4 bg-purple-950/80 backdrop-blur-md px-3 py-1 rounded-lg border border-purple-700 text-[11px] font-bold text-amber-300">
                <span>Edinburgh Branch Sanctuary</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider block">
                  Branch Pastorate
                </span>
                <p className="text-lg font-black text-white">Pastor Dr. Festus Ogunmola</p>
                <p className="text-xs text-purple-200">Pastor-in-Charge · MFM Edinburgh, Scotland</p>
              </div>
            </div>
          </div>

          {/* Pastoral Welcome & Heart of the Ministry */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* General Overseer & Worldwide Header Block */}
            <div className="p-4 rounded-xl bg-purple-950 text-white border-l-4 border-l-amber-400 mb-6 shadow-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/aistudio/MFM_logo_a7697bcf.png"
                  alt="Mountain of Fire and Miracles Ministries Official Emblem"
                  className="w-12 h-12 object-contain drop-shadow-md rounded-full bg-white/10 p-0.5 border border-white/20 shrink-0"
                />
                <div>
                  <span className="text-[10px] text-amber-300 uppercase tracking-widest font-black block">
                    MFM Worldwide Leadership
                  </span>
                  <p className="text-sm font-bold text-white">Dr. Daniel &amp; Pastor (Mrs) Shade Olukoya</p>
                  <p className="text-[11px] text-purple-300">General Overseer &amp; Mother-in-the-Lord, MFM Worldwide</p>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-purple-900/80 rounded-lg text-[10px] text-amber-300 border border-purple-700 font-bold uppercase shrink-0">
                <Award className="w-3.5 h-3.5" />
                <span>Global Commission</span>
              </div>
            </div>

            <h3 className="text-2xl font-black text-purple-950 mb-3">
              “Welcome to Mount Zion in Edinburgh”
            </h3>
            <p className="text-slate-700 leading-relaxed mb-4 text-sm sm:text-base">
              Whether you are an Edinburgh resident, student at university, a professional relocating to Scotland, or a believer hungering for authentic spiritual power, you have found a spiritual home on Mount Zion.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6 text-sm sm:text-base">
              At MFM Edinburgh, our foundational mandate is anchored in the prophetic proclamation of <strong className="text-purple-950">Obadiah 1:17</strong>: 
              <em className="text-purple-900 font-medium"> “But upon Mount Zion shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions.”</em> 
              We teach believers how to pray through every obstacle, live victorious holy lives, and overcome every satanic limitation.
            </p>

            {/* Official MFM Mandate Checklist */}
            <div className="space-y-2.5 mb-8 bg-purple-50/60 p-4 rounded-2xl border border-purple-100">
              <span className="text-xs font-black uppercase tracking-wider text-purple-950 block mb-1">
                The Core Mandate of MFM Worldwide:
              </span>
              {mfmMandatePoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Pastoral Signature & Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenPlanVisit}
                className="px-5 py-3 text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md cursor-pointer"
              >
                Join Us This Sunday (10:00 AM)
              </button>
              <button
                onClick={onOpenPrayerRequest}
                className="px-4 py-3 text-xs font-bold text-purple-950 hover:text-white bg-purple-100 hover:bg-purple-900 border border-purple-300 rounded-xl transition-colors cursor-pointer"
              >
                Book Deliverance Consultation
              </button>
            </div>
          </div>
        </div>

        {/* 4 Foundation Pillars Grid (Official mountainoffire.org pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100 hover:border-purple-300 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-950 text-amber-400 flex items-center justify-center mb-4 shadow-sm font-bold">
              <Swords className="w-5 h-5" />
            </div>
            <h4 className="text-base font-extrabold text-purple-950 mb-1">Do-It-Yourself Gospel</h4>
            <span className="text-[11px] font-bold text-purple-700 block mb-2">Psalm 144:1</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every believer is trained to pray for themselves, wage spiritual warfare, and experience personal victory without perpetual reliance on intermediaries.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100 hover:border-purple-300 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-950 text-amber-400 flex items-center justify-center mb-4 shadow-sm font-bold">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <h4 className="text-base font-extrabold text-purple-950 mb-1">Inward &amp; Outward Holiness</h4>
            <span className="text-[11px] font-bold text-purple-700 block mb-2">Hebrews 12:14</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Holiness is our greatest spiritual cosmetic. We uphold uncompromising biblical standards of moral integrity, purity of thought, and modest appearance.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100 hover:border-purple-300 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-950 text-amber-400 flex items-center justify-center mb-4 shadow-sm font-bold">
              <Flame className="w-5 h-5 fill-red-500 text-red-500" />
            </div>
            <h4 className="text-base font-extrabold text-purple-950 mb-1">Total Deliverance</h4>
            <span className="text-[11px] font-bold text-purple-700 block mb-2">Obadiah 1:17</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dismantling ancestral covenants, evil deposits, generational curses, and witchcraft bondages through the fire of the Holy Ghost and the Blood of the Lamb.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-b from-purple-50 to-white border border-purple-100 hover:border-purple-300 transition-all shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-950 text-amber-400 flex items-center justify-center mb-4 shadow-sm font-bold">
              <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <h4 className="text-base font-extrabold text-purple-950 mb-1">Aggressive Prayer</h4>
            <span className="text-[11px] font-bold text-purple-700 block mb-2">Matthew 11:12</span>
            <p className="text-xs text-slate-600 leading-relaxed">
              The violent take the kingdom by force. Fervent, passionate, scriptural prayers that arrest every demonic resistance and command sudden miracles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
