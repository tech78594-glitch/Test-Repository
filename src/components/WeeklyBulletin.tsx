import React, { useState, useRef } from 'react';
import {
  FileText,
  Printer,
  Download,
  Calendar,
  Clock,
  BookOpen,
  Flame,
  Shield,
  Check,
  Copy,
  ChevronRight,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Share2,
  Bookmark,
  Heart,
  Volume2
} from 'lucide-react';
import { useLocale } from '@/src/context/LocaleContext';

export interface ServiceItem {
  time: string;
  title: string;
  leader?: string;
  description: string;
  badge?: string;
}

export interface AnnouncementItem {
  id: string;
  category: 'Special Service' | 'Fellowship' | 'Outreach' | 'Workers' | 'Admin';
  title: string;
  date: string;
  time: string;
  location: string;
  details: string;
  important?: boolean;
}

export interface ScriptureReading {
  title: string;
  reference: string;
  textSnippet: string;
}

export interface BulletinEdition {
  id: string;
  editionName: string;
  dateStr: string;
  theme: string;
  themeScripture: string;
  minister: string;
  generalOverseer: string;
  pastoralCharge: string;
  scriptureReadings: ScriptureReading[];
  dailyReadingPlan: { day: string; passage: string }[];
  orderOfService: ServiceItem[];
  prayerBullets: string[];
  announcements: AnnouncementItem[];
  bankDetails: {
    bank: string;
    accountName: string;
    sortCode: string;
    accountNo: string;
    reference: string;
  };
}

const BULLETINS: BulletinEdition[] = [
  {
    id: 'current-sunday',
    editionName: 'Sunday Deliverance & Worship Service',
    dateStr: 'Sunday, 27 October 2024',
    theme: 'Breaking Ancestral Chains & Possessing Your Heritage',
    themeScripture: 'Obadiah 1:17 — "Upon Mount Zion shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions."',
    minister: 'Pastor Dr. Festus Ogunmola (Branch Pastor)',
    generalOverseer: 'Dr. D. K. Olukoya (General Overseer, MFM Worldwide)',
    pastoralCharge:
      'Beloved saints in Scotland, the violent take the Kingdom of God by spiritual force. As you sit under this anointed atmosphere at 13 Bangor Road, do not negotiate with demonic oppressors. Open your mouth with holy anger and reclaim every stolen blessing in Jesus’ name.',
    scriptureReadings: [
      {
        title: 'Morning Call to Worship',
        reference: 'Psalm 91:1–16',
        textSnippet: 'He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty. I will say of the Lord, He is my refuge and my fortress: my God; in him will I trust.'
      },
      {
        title: 'Congregational Warfare Reading',
        reference: 'Obadiah 1:15–21 & Isaiah 54:17',
        textSnippet: 'No weapon that is formed against thee shall prosper; and every tongue that shall rise against thee in judgment thou shalt condemn. This is the heritage of the servants of the Lord.'
      },
      {
        title: 'Sermon Anchor Text',
        reference: 'Matthew 11:12 & Luke 10:19',
        textSnippet: 'Behold, I give unto you power to tread on serpents and scorpions, and over all the power of the enemy: and nothing shall by any means hurt you.'
      }
    ],
    dailyReadingPlan: [
      { day: 'Mon', passage: 'Psalm 35:1–28' },
      { day: 'Tue', passage: 'Jeremiah 30:16–24' },
      { day: 'Wed', passage: 'Colossians 2:13–15' },
      { day: 'Thu', passage: 'Ephesians 6:10–20' },
      { day: 'Fri', passage: 'Isaiah 49:24–26' },
      { day: 'Sat', passage: 'Psalm 18:37–50' },
      { day: 'Sun', passage: 'Revelation 12:7–12' }
    ],
    orderOfService: [
      {
        time: '10:00 AM',
        title: 'Pentecostal Warfare & Intercessory Prayer Hour',
        leader: 'Deliverance & Intercessory Team',
        description: 'Targeted prayers against foundational embargoes, ancestral yokes, and territorial spirits over Edinburgh and Scotland.',
        badge: 'Warfare Focus'
      },
      {
        time: '10:30 AM',
        title: 'Congregational Praise & High Worship',
        leader: 'MFM Edinburgh Levites Choir',
        description: 'Vibrant acoustic and choral worship pulling down heavenly strongholds and exalting the King of kings.',
        badge: 'Praise & Worship'
      },
      {
        time: '10:50 AM',
        title: 'Testimonies of Holy Ghost Deliverance & Miracles',
        leader: 'Ministers on Duty',
        description: 'Brethren testifying to God’s instantaneous healing, immigration breakthroughs, and deliverance from witchcraft attacks.',
        badge: 'Testimonies'
      },
      {
        time: '11:05 AM',
        title: 'Pastoral Announcements & First-Timer Welcome',
        leader: 'Church Secretariat',
        description: 'Warm recognition of first-time visitors to Mount Zion Leith, church calendar updates, and weekly notices.',
        badge: 'Welcome'
      },
      {
        time: '11:15 AM',
        title: 'Congregational Battle Hymn & Scripture Proclamation',
        leader: 'Choir & Assembly',
        description: 'Hymn: "Stand Up, Stand Up for Jesus" (Soldiers of the Cross) followed by Obadiah 1:17 battle confession.',
        badge: 'Hymn'
      },
      {
        time: '11:25 AM',
        title: 'The Word: Anointed Teachings & Spiritual Warfare',
        leader: 'Pastor Dr. Festus Ogunmola',
        description: 'Sermon: "Dislodging Foundational Strongmen through Targeted Aggressive Prayers".',
        badge: 'Ministration'
      },
      {
        time: '12:15 PM',
        title: 'Deliverance Altar Call & Anointing Ministration',
        leader: 'Pastoral Council',
        description: 'Laying on of hands, deliverance ministration for the oppressed, and spiritual breaker prayer bullets.',
        badge: 'Deliverance Altar'
      },
      {
        time: '12:40 PM',
        title: 'Tithes, Offerings & Covenant Seed Sowing',
        leader: 'Ushering & Finance Board',
        description: 'Honor the Lord with your substance and the firstfruits of all thine increase (Proverbs 3:9). Gift Aid declaration available.',
        badge: 'Giving'
      },
      {
        time: '12:55 PM',
        title: 'Pastoral Benediction & Edinburgh Fellowship Refreshments',
        leader: 'Pastor Dr. Festus Ogunmola',
        description: 'Apostolic blessing, sharing of the Grace in fellowship, and light tea/coffee fellowship at the church hall.',
        badge: 'Benediction'
      }
    ],
    prayerBullets: [
      'Every witchcraft pot boiling my destiny in Edinburgh, break into pieces by the fire of God, in the name of Jesus!',
      'Ancestral cage holding back my financial and marital breakthroughs, shatter by Holy Ghost thunder!',
      'By the blood of Jesus, I blot out every evil handwriting of ordinances written against my family lineage!',
      'O God of Dr. D.K. Olukoya, arise and disgrace every territorial oppressor assigned against my progress in Scotland!',
      'I possess my possession on Mount Zion today; my glory shall not be swallowed by demonic delay, in Jesus’ mighty name!'
    ],
    announcements: [
      {
        id: 'ann-1',
        category: 'Special Service',
        title: 'First Saturday Power Must Change Hands (PMCH)',
        date: 'Saturday, 2 November 2024',
        time: '7:00 AM – 10:30 AM (Doors open 6:30 AM)',
        location: 'Main Sanctuary, 13 Bangor Road, Leith & Live Satellite Link',
        details: 'Theme: "Crushing the Gates of Brass". Fasting begins 12:00 midnight Friday. Come fasting with your list of stubborn issues. Free transport available from Edinburgh City Centre.',
        important: true
      },
      {
        id: 'ann-2',
        category: 'Special Service',
        title: 'Wednesday Revival, Deliverance & Manna Water Service',
        date: 'Wednesday, 30 October 2024',
        time: '6:30 PM – 8:30 PM',
        location: '13 Bangor Road, Leith',
        details: 'Come with a clean bottle of drinking water for the special Holy Ghost Manna Water sanctification and breaking of evil yokes.',
        important: false
      },
      {
        id: 'ann-3',
        category: 'Fellowship',
        title: 'Flaming Arrows Youth & Young Adults Fellowship',
        date: 'Friday, 1 November 2024',
        time: '6:00 PM – 7:45 PM',
        location: 'Youth Hall, 13 Bangor Road',
        details: 'Topic: "Spiritual Intelligence in a Secular University & Workplace". Discussion, worship, pizza fellowship and prayers.',
        important: false
      },
      {
        id: 'ann-4',
        category: 'Outreach',
        title: 'Leith Community Food Pantry & Winter Coat Drive',
        date: 'Every Tuesday',
        time: '2:00 PM – 4:30 PM',
        location: 'Church Annex Entrance',
        details: 'MFM Edinburgh is providing free non-perishable groceries and clean winter coats to our Leith and Edinburgh neighbors. Volunteers needed.',
        important: false
      },
      {
        id: 'ann-5',
        category: 'Workers',
        title: 'Workers & Ministers Vigil of Fire',
        date: 'Friday, 8 November 2024',
        time: '10:00 PM – 2:00 AM',
        location: 'Sanctuary',
        details: 'Mandatory prayer retreat for all departmental heads, ushers, choir members, and intercessors.',
        important: true
      }
    ],
    bankDetails: {
      bank: 'Royal Bank of Scotland (RBS)',
      accountName: 'Mountain of Fire and Miracles Ministries Edinburgh',
      sortCode: '83-20-14',
      accountNo: '10294857',
      reference: 'Tithe / Offering / Name'
    }
  },
  {
    id: 'pmch-special',
    editionName: 'Power Must Change Hands (PMCH) Special Edition',
    dateStr: 'First Saturday PMCH Global Gathering',
    theme: 'Aggressive Prayers Against Territorial & Foundational Embargoes',
    themeScripture: 'Psalm 24:7 — "Lift up your heads, O ye gates; and be ye lift up, ye everlasting doors; and the King of glory shall come in."',
    minister: 'Dr. D.K. Olukoya (General Overseer) & Pastor Dr. Festus Ogunmola',
    generalOverseer: 'Dr. D. K. Olukoya (General Overseer, MFM Worldwide)',
    pastoralCharge:
      'Power Must Change Hands is the flagship deliverance programme ordained by God to dismantle generational stagnation. When God moves through the fire of the Holy Ghost, mountain-like problems melt like wax.',
    scriptureReadings: [
      {
        title: 'Warfare Reading',
        reference: 'Psalm 18:37–48',
        textSnippet: 'I have pursued mine enemies, and overtaken them: neither did I turn again till they were consumed. I have wounded them that they were not able to rise: they are fallen under my feet.'
      },
      {
        title: 'Confession of Power',
        reference: 'Jeremiah 51:20–24',
        textSnippet: 'Thou art my battle axe and weapons of war: for with thee will I break in pieces the nations, and with thee will I destroy kingdoms.'
      }
    ],
    dailyReadingPlan: [
      { day: 'Mon', passage: 'Psalm 2' },
      { day: 'Tue', passage: 'Psalm 27' },
      { day: 'Wed', passage: 'Psalm 35' },
      { day: 'Thu', passage: 'Psalm 68' },
      { day: 'Fri', passage: 'Isaiah 49' },
      { day: 'Sat', passage: 'Obadiah 1' },
      { day: 'Sun', passage: 'Revelation 19' }
    ],
    orderOfService: [
      {
        time: '6:30 AM',
        title: 'Sanctuary Doors Open & Personal Devotional Prayers',
        description: 'Early morning silent meditation, personal repentance, and preparation of the altar.',
        badge: 'Preparation'
      },
      {
        time: '7:00 AM',
        title: 'Intense Deliverance Chants & Warfare Worship',
        leader: 'MFM Edinburgh Levites',
        description: 'Holy Ghost warfare songs and hymnal proclamation breaking yoke chains.',
        badge: 'Warfare Worship'
      },
      {
        time: '7:45 AM',
        title: 'PMCH Satellite Hookup to Prayer City Headquarters',
        leader: 'Dr. D.K. Olukoya & Lagos International Headquarters',
        description: 'Direct global satellite broadcast connection with millions of worshippers worldwide.',
        badge: 'Global Satellite'
      },
      {
        time: '8:45 AM',
        title: 'Power Must Change Hands Word & Violent Deliverance Ministration',
        leader: 'Dr. D.K. Olukoya (G.O.)',
        description: 'Anointed word, prophetic declarations, and aggressive deliverance prayer bullets.',
        badge: 'Prophetic Ministration'
      },
      {
        time: '10:00 AM',
        title: 'Edinburgh Sanctuary Altar Prayers & Prophetic Anointing',
        leader: 'Pastor Dr. Festus Ogunmola',
        description: 'Personal deliverance ministration for physical ailments, visa stagnation, and spiritual attacks.',
        badge: 'Altar Ministration'
      },
      {
        time: '10:30 AM',
        title: 'Testimonies, PMCH Thanksgiving & Refreshments',
        leader: 'Ministers on Duty',
        description: 'Sharing testimonies of deliverance, distribution of breakfast buns & tea to all attendees.',
        badge: 'Fellowship'
      }
    ],
    prayerBullets: [
      'Every stubborn pursuer of my father’s house pursuing me to Edinburgh, die by fire, in the name of Jesus!',
      'Where is the Lord God of Elijah? Arise, let my enemies be scattered!',
      'Powers of my foundation crying against my progress in Scotland, be silenced by the blood of Jesus!',
      'Gates of brass barring my elevation, be broken into shivers today!',
      'Holy Ghost fire, incubate my destiny and crown my efforts with divine speed!'
    ],
    announcements: [
      {
        id: 'pmch-ann-1',
        category: 'Special Service',
        title: 'Next Month PMCH Vigil Preparation',
        date: 'First Friday of December',
        time: '10:00 PM – 4:00 AM',
        location: 'Main Auditorium, Leith',
        details: 'Annual end-of-year spiritual warfare marathon. Bring your prayer petitions for 2025.',
        important: true
      },
      {
        id: 'pmch-ann-2',
        category: 'Outreach',
        title: 'Street Evangelism & Community Tract Outreach',
        date: 'Saturday afternoon following PMCH',
        time: '1:00 PM – 3:00 PM',
        location: 'Leith Walk & Ocean Terminal vicinity',
        details: 'Join the evangelism army distributing tracts and praying with Edinburgh residents.',
        important: false
      }
    ],
    bankDetails: {
      bank: 'Royal Bank of Scotland (RBS)',
      accountName: 'Mountain of Fire and Miracles Ministries Edinburgh',
      sortCode: '83-20-14',
      accountNo: '10294857',
      reference: 'PMCH Offering / Seed'
    }
  }
];

export const WeeklyBulletin: React.FC = () => {
  const { t } = useLocale();
  const [selectedEditionId, setSelectedEditionId] = useState<string>('current-sunday');
  const [activeTab, setActiveTab] = useState<'service' | 'scriptures' | 'announcements' | 'prayers' | 'giving'>('service');
  const [copiedPrayerIdx, setCopiedPrayerIdx] = useState<number | null>(null);
  const [copiedBankInfo, setCopiedBankInfo] = useState<boolean>(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);

  const currentBulletin = BULLETINS.find((b) => b.id === selectedEditionId) || BULLETINS[0];
  const printableRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyPrayer = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPrayerIdx(index);
    setTimeout(() => setCopiedPrayerIdx(null), 2000);
  };

  const handleCopyBank = () => {
    const info = `Bank: ${currentBulletin.bankDetails.bank}\nAccount Name: ${currentBulletin.bankDetails.accountName}\nSort Code: ${currentBulletin.bankDetails.sortCode}\nAccount No: ${currentBulletin.bankDetails.accountNo}\nRef: ${currentBulletin.bankDetails.reference}`;
    navigator.clipboard.writeText(info);
    setCopiedBankInfo(true);
    setTimeout(() => setCopiedBankInfo(false), 2000);
  };

  return (
    <section id="bulletin" className="py-20 bg-gradient-to-b from-stone-900 via-purple-950/60 to-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Ecclesiastical Order & Weekly Guide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-serif mb-4">
            Weekly Church <span className="text-amber-400">Bulletin</span>
          </h2>
          <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
            Stay aligned with the move of the Holy Ghost at Mount Zion Edinburgh. Review the order of service, biblical warfare scriptures, upcoming gatherings, and pastoral prayer bullets.
          </p>
        </div>

        {/* Edition Selector & Action Bar */}
        <div className="bg-stone-900/90 backdrop-blur-md border border-stone-800 rounded-2xl p-4 sm:p-6 mb-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            <span className="text-xs uppercase font-bold text-stone-400 tracking-wider mr-1 hidden sm:inline">
              Edition:
            </span>
            {BULLETINS.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedEditionId(b.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer flex items-center gap-2 ${
                  selectedEditionId === b.id
                    ? 'bg-amber-500 text-stone-950 shadow-md font-bold'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-700/80 hover:text-white border border-stone-700/60'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{b.editionName}</span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => setIsPreviewModalOpen(true)}
              className="px-4 py-2.5 text-xs sm:text-sm font-semibold rounded-xl bg-purple-900/70 hover:bg-purple-800 text-purple-200 hover:text-white border border-purple-700/80 transition-all cursor-pointer flex items-center gap-2 shadow-xs"
              title="Open full-screen printable booklet preview"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Full Bulletin Preview</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 transition-all cursor-pointer flex items-center gap-2 shadow-md hover:shadow-amber-500/20"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Download PDF</span>
            </button>
          </div>
        </div>

        {/* Main Bulletin Interactive Structured Card */}
        <div className="bg-stone-900 border border-purple-900/40 rounded-3xl shadow-2xl overflow-hidden">
          {/* Header Masthead (Authentic Ecclesiastical Style) */}
          <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-stone-950 p-6 sm:p-8 border-b border-purple-800/50">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/95 p-1.5 shadow-lg shrink-0 flex items-center justify-center border-2 border-amber-400/80">
                  <img
                    src="/assets/aistudio/MFM_logo_a7697bcf.png"
                    alt="MFM Edinburgh Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <div className="text-amber-300 text-xs font-bold tracking-widest uppercase mb-1 flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 fill-amber-400" />
                    <span>Mountain of Fire and Miracles Ministries — Edinburgh</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white font-serif tracking-tight">
                    {currentBulletin.editionName}
                  </h3>
                  <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-purple-200/80 mt-1.5">
                    <span className="flex items-center gap-1 font-medium text-amber-200">
                      <Calendar className="w-3.5 h-3.5 text-amber-400" />
                      {currentBulletin.dateStr}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      13 Bangor Road, Leith, EH6 5JY
                    </span>
                  </div>
                </div>
              </div>

              {/* Pastoral Seal Card */}
              <div className="bg-purple-950/70 border border-purple-700/60 rounded-2xl p-3.5 sm:p-4 text-xs max-w-xs shrink-0">
                <div className="text-amber-400 font-bold uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  Pastoral Oversight
                </div>
                <div className="text-stone-200 font-semibold">{currentBulletin.generalOverseer}</div>
                <div className="text-purple-300 text-[11px] mt-0.5">{currentBulletin.minister}</div>
              </div>
            </div>

            {/* Monthly Theme & Anchor Scripture Banner */}
            <div className="mt-6 pt-5 border-t border-purple-800/40 bg-purple-900/30 -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-amber-400 block mb-0.5">
                  Spiritual Warfare Theme:
                </span>
                <span className="text-white font-bold text-sm sm:text-base font-serif">
                  “{currentBulletin.theme}”
                </span>
              </div>
              <div className="text-xs text-purple-200 italic max-w-md sm:text-right">
                {currentBulletin.themeScripture}
              </div>
            </div>
          </div>

          {/* Navigation Tabs for Bulletin Sections */}
          <div className="border-b border-stone-800 bg-stone-900/90 px-4 sm:px-8 flex items-center gap-2 overflow-x-auto scrollbar-none py-2">
            {[
              { id: 'service', label: 'Order of Divine Service', icon: Clock },
              { id: 'scriptures', label: 'Scripture & Bible Plan', icon: BookOpen },
              { id: 'announcements', label: 'Announcements & Calendar', icon: Calendar },
              { id: 'prayers', label: 'Warfare Prayer Bullets', icon: Flame },
              { id: 'giving', label: 'Offerings & Bank Details', icon: Heart }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-3 text-xs sm:text-sm font-semibold whitespace-nowrap rounded-xl transition-all cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? 'bg-purple-900/70 text-amber-300 border-amber-400/50 shadow-inner'
                      : 'text-stone-400 hover:text-white hover:bg-stone-800/60 border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-stone-500'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Panes */}
          <div className="p-6 sm:p-8">
            {/* 1. ORDER OF SERVICE */}
            {activeTab === 'service' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-stone-800">
                  <div>
                    <h4 className="text-lg font-bold text-white font-serif flex items-center gap-2">
                      <Clock className="w-5 h-5 text-amber-400" />
                      <span>Order of Divine Service & Ministration</span>
                    </h4>
                    <p className="text-xs text-stone-400 mt-0.5">
                      Prompt arrival at 10:00 AM facilitates undisturbed spiritual concentration.
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-purple-900/60 text-purple-200 border border-purple-700/60">
                    {currentBulletin.orderOfService.length} Programme Items
                  </span>
                </div>

                <div className="relative pl-6 sm:pl-8 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-amber-400 before:via-purple-600 before:to-stone-700 space-y-5">
                  {currentBulletin.orderOfService.map((item, idx) => (
                    <div
                      key={idx}
                      className="relative bg-stone-800/50 hover:bg-stone-800 border border-stone-700/60 hover:border-amber-500/40 p-4 sm:p-5 rounded-2xl transition-all shadow-sm group"
                    >
                      {/* Timeline dot */}
                      <div className="absolute -left-6 sm:-left-8 top-5 w-4 h-4 rounded-full bg-stone-900 border-2 border-amber-400 group-hover:scale-125 transition-transform" />

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
                            {item.time}
                          </span>
                          <h5 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                            {item.title}
                          </h5>
                        </div>
                        {item.badge && (
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-purple-900/60 text-purple-300 border border-purple-700/50 self-start sm:self-auto">
                            {item.badge}
                          </span>
                        )}
                      </div>

                      {item.leader && (
                        <div className="text-xs text-amber-200/90 font-medium mb-1 flex items-center gap-1.5">
                          <Shield className="w-3 h-3 text-amber-400" />
                          <span>Led by: {item.leader}</span>
                        </div>
                      )}

                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pastoral Benediction Note */}
                <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-800/50 text-xs text-purple-200 flex items-start gap-3">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-300">Deliverance Consultation Notice:</span> First-time visitors and brethren seeking special deliverance appointments or pastoral counseling with Pastor Dr. Festus Ogunmola should wait in the church foyer immediately following the benediction.
                  </div>
                </div>
              </div>
            )}

            {/* 2. SCRIPTURES & BIBLE PLAN */}
            {activeTab === 'scriptures' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white font-serif flex items-center gap-2 mb-1">
                    <BookOpen className="w-5 h-5 text-amber-400" />
                    <span>Scripture Readings for Today’s Service</span>
                  </h4>
                  <p className="text-xs text-stone-400">
                    Follow along with your Bible during corporate readings and deliverance confessions.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentBulletin.scriptureReadings.map((reading, idx) => (
                    <div
                      key={idx}
                      className="bg-stone-800/60 border border-stone-700/70 hover:border-amber-500/40 p-5 rounded-2xl flex flex-col justify-between transition-all"
                    >
                      <div>
                        <div className="text-[11px] uppercase tracking-wider text-amber-400 font-bold mb-1">
                          {reading.title}
                        </div>
                        <div className="text-base font-bold text-white font-serif mb-2.5">
                          {reading.reference}
                        </div>
                        <p className="text-xs text-stone-300 italic leading-relaxed bg-stone-900/60 p-3 rounded-xl border border-stone-800/80">
                          “{reading.textSnippet}”
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-stone-700/60 flex items-center justify-between text-[11px] text-stone-400">
                        <span>Holy Bible (KJV)</span>
                        <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* 7-Day Deliverance Bible Reading Plan */}
                <div className="bg-gradient-to-r from-purple-950/60 to-stone-900 border border-purple-800/40 rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <h5 className="text-base font-bold text-white font-serif flex items-center gap-2">
                        <Flame className="w-4 h-4 text-amber-400" />
                        <span>7-Day Spiritual Warfare Bible Reading Plan</span>
                      </h5>
                      <p className="text-xs text-stone-300">
                        Sanctify your home daily by reciting these warfare psalms before retirement.
                      </p>
                    </div>
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/30 self-start sm:self-auto">
                      Mon – Sun Schedule
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
                    {currentBulletin.dailyReadingPlan.map((plan, idx) => (
                      <div
                        key={idx}
                        className="bg-stone-900/80 border border-stone-800 p-3 rounded-xl text-center hover:border-amber-400/50 transition-all group"
                      >
                        <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-1">
                          {plan.day}
                        </div>
                        <div className="text-xs font-semibold text-white group-hover:text-amber-300 font-mono">
                          {plan.passage}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 3. ANNOUNCEMENTS & CALENDAR */}
            {activeTab === 'announcements' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white font-serif flex items-center gap-2 mb-1">
                    <Calendar className="w-5 h-5 text-amber-400" />
                    <span>Weekly Announcements & Parish Notices</span>
                  </h4>
                  <p className="text-xs text-stone-400">
                    Important updates on special programmes, mid-week services, and community outreach.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentBulletin.announcements.map((ann) => (
                    <div
                      key={ann.id}
                      className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                        ann.important
                          ? 'bg-purple-950/40 border-amber-500/50 shadow-md ring-1 ring-amber-500/20'
                          : 'bg-stone-800/50 border-stone-700/60 hover:border-stone-600'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                              ann.category === 'Special Service'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                : ann.category === 'Workers'
                                ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                                : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                            }`}
                          >
                            {ann.category}
                          </span>
                          {ann.important && (
                            <span className="text-[10px] font-extrabold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/30 uppercase">
                              ★ High Priority
                            </span>
                          )}
                        </div>

                        <h5 className="text-base font-bold text-white mb-2 leading-snug">
                          {ann.title}
                        </h5>

                        <div className="space-y-1 text-xs text-stone-300 mb-3">
                          <div className="flex items-center gap-1.5 text-amber-300 font-medium">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>{ann.date} • {ann.time}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-stone-400">
                            <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0" />
                            <span className="truncate">{ann.location}</span>
                          </div>
                        </div>

                        <p className="text-xs text-stone-300 leading-relaxed bg-stone-900/50 p-3 rounded-xl border border-stone-800">
                          {ann.details}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. WARFARE PRAYER BULLETS */}
            {activeTab === 'prayers' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white font-serif flex items-center gap-2 mb-1">
                    <Flame className="w-5 h-5 text-amber-400" />
                    <span>Targeted Deliverance Prayer Bullets for the Week</span>
                  </h4>
                  <p className="text-xs text-stone-400">
                    Pray these violent prayers out loud with aggressive faith three times daily (morning, afternoon, and before bed).
                  </p>
                </div>

                {/* Pastoral Charge */}
                <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/60 border border-purple-800/60">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1 flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    Pastoral Exhortation — Pastor Dr. Festus Ogunmola
                  </div>
                  <p className="text-xs sm:text-sm text-stone-200 italic leading-relaxed">
                    “{currentBulletin.pastoralCharge}”
                  </p>
                </div>

                <div className="space-y-3">
                  {currentBulletin.prayerBullets.map((bullet, idx) => (
                    <div
                      key={idx}
                      className="bg-stone-800/60 hover:bg-stone-800 border border-stone-700/60 hover:border-amber-400/40 p-4 rounded-2xl flex items-start justify-between gap-4 transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-bold font-mono text-xs flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-white font-medium leading-relaxed">
                          {bullet}
                        </p>
                      </div>
                      <button
                        onClick={() => handleCopyPrayer(bullet, idx)}
                        className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-stone-700/80 hover:bg-amber-500 hover:text-stone-950 text-stone-300 transition-all shrink-0 flex items-center gap-1 cursor-pointer"
                        title="Copy prayer point"
                      >
                        {copiedPrayerIdx === idx ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green-400" />
                            <span className="text-green-300 font-bold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. GIVING & BANK DETAILS */}
            {activeTab === 'giving' && (
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white font-serif flex items-center gap-2 mb-1">
                    <Heart className="w-5 h-5 text-amber-400" />
                    <span>Church Accounts & Covenant Tithes / Offerings</span>
                  </h4>
                  <p className="text-xs text-stone-400">
                    Transfer tithes, thanksgiving seeds, and PMCH donations directly to MFM Edinburgh’s official UK bank account.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Bank Details Card */}
                  <div className="bg-stone-800/70 border border-amber-500/40 p-6 rounded-2xl flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="text-xs font-bold text-amber-400 uppercase tracking-widest">
                          Official UK Bank Account
                        </div>
                        <span className="text-xs px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-200 border border-purple-700">
                          UK Registered Charity
                        </span>
                      </div>

                      <div className="space-y-3 font-mono text-xs sm:text-sm">
                        <div className="flex justify-between border-b border-stone-700/60 pb-2">
                          <span className="text-stone-400 font-sans">Bank:</span>
                          <span className="text-white font-bold">{currentBulletin.bankDetails.bank}</span>
                        </div>
                        <div className="flex justify-between border-b border-stone-700/60 pb-2">
                          <span className="text-stone-400 font-sans">Account Name:</span>
                          <span className="text-white font-bold text-right text-xs">
                            {currentBulletin.bankDetails.accountName}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-stone-700/60 pb-2">
                          <span className="text-stone-400 font-sans">Sort Code:</span>
                          <span className="text-amber-300 font-bold text-base">
                            {currentBulletin.bankDetails.sortCode}
                          </span>
                        </div>
                        <div className="flex justify-between border-b border-stone-700/60 pb-2">
                          <span className="text-stone-400 font-sans">Account Number:</span>
                          <span className="text-amber-300 font-bold text-base">
                            {currentBulletin.bankDetails.accountNo}
                          </span>
                        </div>
                        <div className="flex justify-between pb-1">
                          <span className="text-stone-400 font-sans">Reference:</span>
                          <span className="text-stone-200">{currentBulletin.bankDetails.reference}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-700 flex items-center justify-between gap-3">
                      <button
                        onClick={handleCopyBank}
                        className="w-full py-2.5 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        {copiedBankInfo ? (
                          <>
                            <Check className="w-4 h-4 text-stone-950" />
                            <span>Account Details Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-stone-950" />
                            <span>Copy Complete Bank Details</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* UK Gift Aid & Pastoral Note */}
                  <div className="bg-purple-950/40 border border-purple-800/50 p-6 rounded-2xl flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        UK Gift Aid Declaration
                      </div>
                      <h5 className="text-base font-bold text-white mb-2 font-serif">
                        Maximize Your Kingdom Seed at No Extra Cost
                      </h5>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
                        If you are a UK taxpayer, MFM Edinburgh can reclaim 25p of Gift Aid for every £1 you give. Please collect a Gift Aid declaration envelope from the ushering desk or state Gift Aid in your transfer reference.
                      </p>
                      <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-800 text-xs text-purple-200">
                        <p className="font-semibold text-amber-300 mb-1">Card Machine Available:</p>
                        Debit & credit card giving terminals are set up at the church entrance for convenient and secure offerings.
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-purple-800/40 text-[11px] text-stone-400 flex items-center gap-1.5">
                      <Shield className="w-3.5 h-3.5 text-amber-400" />
                      <span>Scripture: 2 Corinthians 9:7 — God loveth a cheerful giver.</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bulletin Footer Bar */}
          <div className="bg-stone-950/80 border-t border-stone-800 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1 text-stone-300">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Pastoral Helpline: 07557 644650</span>
              </span>
              <span className="hidden sm:inline text-stone-600">•</span>
              <span className="flex items-center gap-1 text-stone-300">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>info@mfmedinburgh.org</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPreviewModalOpen(true)}
                className="text-amber-400 hover:text-amber-300 font-semibold underline underline-offset-4 cursor-pointer"
              >
                View PDF Layout
              </button>
              <span>•</span>
              <button
                onClick={handlePrint}
                className="text-stone-300 hover:text-white font-semibold flex items-center gap-1 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-amber-400" />
                <span>Print Copy</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FULL-SCREEN / PRINTABLE PDF PREVIEW MODAL */}
      {isPreviewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div className="bg-stone-950 border border-stone-800 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-auto">
            {/* Modal Control Header */}
            <div className="bg-stone-900 border-b border-stone-800 px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-amber-400" />
                <div>
                  <h4 className="text-base font-bold text-white">
                    Printable Ecclesiastical Bulletin (PDF Preview)
                  </h4>
                  <p className="text-xs text-stone-400">
                    Official format configured for standard A4 / Letter paper layout.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 transition-all flex items-center gap-1.5 shadow-md cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={() => setIsPreviewModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition-all cursor-pointer font-bold text-sm"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Printable Paper Canvas Preview (Simulated A4 Ecclesiastical Pamphlet) */}
            <div className="p-4 sm:p-8 overflow-y-auto bg-stone-900/60">
              <div
                ref={printableRef}
                className="bg-white text-stone-900 p-6 sm:p-10 rounded-xl shadow-xl max-w-3xl mx-auto border-2 border-stone-300 font-serif printable-bulletin"
              >
                {/* Print Sheet Header */}
                <div className="border-b-2 border-stone-900 pb-4 mb-6 text-center">
                  <div className="flex justify-center mb-2">
                    <img
                      src="/assets/aistudio/MFM_logo_a7697bcf.png"
                      alt="MFM Logo"
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-purple-950">
                    Mountain of Fire and Miracles Ministries
                  </h2>
                  <h3 className="text-base font-bold text-amber-800 uppercase tracking-widest">
                    Edinburgh Branch — Mount Zion Sanctuary
                  </h3>
                  <p className="text-xs text-stone-600 font-sans mt-1">
                    13 Bangor Road, Leith, Edinburgh EH6 5JY | Tel: 07557 644650 | Email: info@mfmedinburgh.org
                  </p>
                  <div className="text-xs font-bold text-stone-800 mt-2 border-t border-b border-stone-300 py-1 font-sans flex justify-between">
                    <span>General Overseer: {currentBulletin.generalOverseer}</span>
                    <span>Branch Pastor: {currentBulletin.minister}</span>
                  </div>
                </div>

                {/* Theme & Date */}
                <div className="bg-stone-100 p-3 rounded-lg border border-stone-300 mb-6 text-center">
                  <div className="text-xs font-bold uppercase text-purple-900 font-sans">
                    {currentBulletin.editionName} — {currentBulletin.dateStr}
                  </div>
                  <div className="text-base font-bold text-stone-950 mt-0.5">
                    Theme: “{currentBulletin.theme}”
                  </div>
                  <div className="text-xs italic text-stone-700 mt-1">
                    {currentBulletin.themeScripture}
                  </div>
                </div>

                {/* 2-Column Print Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
                  {/* Left Column: Order of Service & Daily Plan */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-purple-950 uppercase border-b border-stone-400 pb-1 mb-2 font-serif text-sm flex items-center justify-between">
                        <span>Order of Divine Service</span>
                        <span className="text-[10px] font-sans font-normal text-stone-500">10:00 AM Start</span>
                      </h4>
                      <div className="space-y-2">
                        {currentBulletin.orderOfService.map((item, idx) => (
                          <div key={idx} className="border-b border-stone-200 pb-1.5">
                            <div className="flex justify-between font-bold text-stone-900">
                              <span>{item.title}</span>
                              <span className="font-mono text-stone-600">{item.time}</span>
                            </div>
                            <div className="text-[11px] text-stone-600 italic">
                              {item.leader ? `Led by ${item.leader} — ` : ''}{item.description}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-purple-950 uppercase border-b border-stone-400 pb-1 mb-2 font-serif text-sm">
                        7-Day Bible Reading Plan
                      </h4>
                      <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                        {currentBulletin.dailyReadingPlan.map((d, i) => (
                          <div key={i} className="flex justify-between bg-stone-50 p-1 border border-stone-200 rounded">
                            <span className="font-bold text-purple-900">{d.day}:</span>
                            <span className="font-mono">{d.passage}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Scripture, Announcements & Prayer Bullets */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-purple-950 uppercase border-b border-stone-400 pb-1 mb-2 font-serif text-sm">
                        Today’s Key Scriptures
                      </h4>
                      <div className="space-y-2">
                        {currentBulletin.scriptureReadings.map((sc, i) => (
                          <div key={i} className="bg-stone-50 p-2 border border-stone-200 rounded">
                            <div className="font-bold text-stone-900">{sc.title} — {sc.reference}</div>
                            <div className="text-[11px] italic text-stone-700">“{sc.textSnippet}”</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-purple-950 uppercase border-b border-stone-400 pb-1 mb-2 font-serif text-sm">
                        Weekly Warfare Prayer Bullets
                      </h4>
                      <ol className="list-decimal list-inside space-y-1 text-[11px] text-stone-800 font-medium">
                        {currentBulletin.prayerBullets.map((p, i) => (
                          <li key={i} className="leading-snug">
                            {p}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-bold text-purple-950 uppercase border-b border-stone-400 pb-1 mb-2 font-serif text-sm">
                        Parish Notices & Bank Details
                      </h4>
                      <div className="text-[11px] space-y-1 text-stone-700">
                        <p><strong>PMCH Vigil:</strong> First Saturday monthly at 7:00 AM.</p>
                        <p><strong>Wednesday Manna Water:</strong> 6:30 PM (Bring water bottle).</p>
                        <div className="p-2 bg-stone-100 rounded border border-stone-300 font-mono text-[10px] mt-2">
                          <div><strong>RBS Account:</strong> MFM Edinburgh</div>
                          <div><strong>Sort Code:</strong> {currentBulletin.bankDetails.sortCode} | <strong>Acc:</strong> {currentBulletin.bankDetails.accountNo}</div>
                          <div><strong>Ref:</strong> {currentBulletin.bankDetails.reference}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Print Sheet Footer */}
                <div className="mt-6 pt-3 border-t-2 border-stone-900 text-center text-[10px] text-stone-500 font-sans flex justify-between items-center">
                  <span>Mountain of Fire and Miracles Ministries Edinburgh Branch</span>
                  <span>Obadiah 1:17 — Deliverance & Holiness</span>
                  <span>Printed on {new Date().toLocaleDateString('en-GB')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global CSS for Print Media to ensure clean, flawless paper output */}
      <style>{`
        @media print {
          body * {
            visibility: hidden !important;
          }
          .printable-bulletin, .printable-bulletin * {
            visibility: visible !important;
          }
          .printable-bulletin {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 15mm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            color: black !important;
          }
        }
      `}</style>
    </section>
  );
};
