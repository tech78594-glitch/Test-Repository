export interface ServiceSchedule {
  id: string;
  day: string;
  time: string;
  title: string;
  description: string;
  location: string;
  isMainService?: boolean;
  dayOfWeek: number; // 0=Sun, 1=Mon, ..., 6=Sat
  hour: number;
  minute: number;
}

export interface Ministry {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  lead: string;
  meetingTime: string;
  activities: string[];
}

export interface Sermon {
  id: string;
  title: string;
  preacher: string;
  date: string;
  series: string;
  bibleVerse: string;
  youtubeId: string;
  summary: string;
  duration: string;
  keyPoints: string[];
}

export interface Testimony {
  id: string;
  name: string;
  location: string;
  title: string;
  testimony: string;
  date: string;
  category: string;
}

export const SERVICES: ServiceSchedule[] = [
  {
    id: 'sun-pentecostal',
    day: 'Every Sunday',
    time: '10:00 AM – 10:45 AM',
    title: 'Pentecostal Hour & Sunday School',
    description: 'Foundational biblical teaching, Sunday school classes for all ages, and preparatory intercession.',
    location: 'Main Sanctuary, 13 Bangor Rd, Leith',
    dayOfWeek: 0,
    hour: 10,
    minute: 0,
  },
  {
    id: 'sun-worship',
    day: 'Every Sunday',
    time: '10:45 AM – 1:00 PM',
    title: 'Glorious Worship & Deliverance Service',
    description: 'Apostolic worship, high praise, undiluted Word of God, and personal deliverance ministry.',
    location: 'Main Sanctuary & YouTube Live',
    isMainService: true,
    dayOfWeek: 0,
    hour: 10,
    minute: 45,
  },
  {
    id: 'tue-bible',
    day: 'Every Tuesday',
    time: '6:30 PM – 8:30 PM',
    title: 'Spiritual Clinic & Bible Study (Digging Deep)',
    description: 'Deep verse-by-verse scriptural exploration, spiritual diagnosis, practical Christian living, and targeted warfare prayers.',
    location: 'Main Sanctuary & Virtual Fellowship',
    dayOfWeek: 2,
    hour: 18,
    minute: 30,
  },
  {
    id: 'fri-intercession',
    day: 'Every Friday',
    time: '6:30 PM – 8:30 PM',
    title: 'Deliverance & Intercessory Prayer Session',
    description: 'Fervent prayer meeting standing in the gap for families, Scotland, personal breakthroughs, and breaking ancestral yokes.',
    location: 'Main Sanctuary, 13 Bangor Rd',
    dayOfWeek: 5,
    hour: 18,
    minute: 30,
  },
  {
    id: 'sat-pmch',
    day: '1st Saturday Monthly',
    time: '9:00 AM – 12:00 PM',
    title: 'Power Must Change Hands (PMCH)',
    description: 'Global MFM flagship miracle service connected live with the General Overseer Dr. D.K. Olukoya, fasting and breakthrough prayers.',
    location: 'Main Sanctuary & Global Live Feed',
    dayOfWeek: 6,
    hour: 9,
    minute: 0,
  },
];

export const MINISTRIES: Ministry[] = [
  {
    id: 'prayer',
    name: 'Prayer Warriors & Deliverance Team',
    subtitle: 'Intercession & Spiritual Warfare',
    description: 'The heartbeat of MFM. Dedicated intercessors who stand on the watchtower praying round the clock for souls, members, Scotland, and breaking every satanic embargo.',
    lead: 'Deliverance Department',
    meetingTime: 'Fridays at 6:00 PM',
    activities: [
      '24/7 Prayer Chains',
      'Confidential Deliverance Consultations',
      'Hospital & Home Prayer Support',
      'Spiritual Warfare Training Workshops',
    ],
  },
  {
    id: 'youth',
    name: 'MFM Youth & Campus Fellowship',
    subtitle: 'Next Generation of Prayer Champions',
    description: 'Empowering students and young professionals across Edinburgh, Heriot-Watt, Napier, and Queen Margaret universities with holy zeal, career guidance, and apostolic power.',
    lead: 'Youth Ministry Team',
    meetingTime: '2nd & 4th Saturdays at 4:00 PM',
    activities: [
      'Campus Outreach & Bible Discussions',
      'Career Mentorship & Academic Support',
      'Praise & Worship Acoustic Evenings',
      'Annual Youth Fire Conference',
    ],
  },
  {
    id: 'women',
    name: 'Women of Fire (Deborah Generation)',
    subtitle: 'Virtuous, Holy & Victorious Mothers',
    description: 'Nurturing godly women, mothers, and daughters who build their homes on the rock of prayer, spiritual discernment, and selfless service.',
    lead: 'Women Fellowship Leaders',
    meetingTime: '3rd Saturday Monthly at 11:00 AM',
    activities: [
      'Hannah Prayer Hours for Expectant Mothers',
      'Marriage & Family Enrichment Seminars',
      'Charity & Community Care Drives',
      'Spiritual Mentoring for Young Women',
    ],
  },
  {
    id: 'men',
    name: 'Men of Valour Fellowship',
    subtitle: 'Godly Priests & Family Protectors',
    description: 'Equipping Christian men to be righteous spiritual heads of their households, successful professionals, and mighty men of valour in the kingdom.',
    lead: 'Men Fellowship Leaders',
    meetingTime: 'Last Saturday Monthly at 9:00 AM',
    activities: [
      'Brothers’ Prayer Breakfast',
      'Business & Financial Stewardship Forum',
      'Fatherhood & Mentoring Workshops',
      'Community Outreach & Church Building Support',
    ],
  },
  {
    id: 'children',
    name: 'Children of Destiny (Sunday School)',
    subtitle: 'Rooted in God’s Word from Infancy',
    description: 'A joyful, safe, and engaging environment where children learn bible stories, memorize scripture, and learn how to talk to God in prayer with confidence.',
    lead: 'Certified Children Workers',
    meetingTime: 'Every Sunday at 10:00 AM',
    activities: [
      'Scripture Memory & Creative Arts',
      'Bible Quiz & Drama Presentations',
      'Annual Children’s Day Celebration',
      'Safe Child-Protection Certified Teachers',
    ],
  },
  {
    id: 'choir',
    name: 'Voices of Fire (Choir & Music)',
    subtitle: 'Anointed Praise & Apostolic Worship',
    description: 'Ministers of music who usher the congregation into the presence of God through high praise, anointed hymns, and Holy Ghost-inspired worship.',
    lead: 'Music Director',
    meetingTime: 'Saturdays at 5:00 PM',
    activities: [
      'Vocal Rehearsals & Instrumental Training',
      'Special Ministering at PMCH & Services',
      'Annual Festival of Hymns and Carols',
      'Contemporary & Traditional Gospel Repertoire',
    ],
  },
];

export const SERMONS: Sermon[] = [
  {
    id: 'sermon-1',
    title: 'Dismantling the Gates of Evil Limitation',
    preacher: 'Dr. Festus Ogunmola',
    date: 'Recent Sunday Message',
    series: 'Breakthrough & Possessing Your Possessions',
    bibleVerse: 'Obadiah 1:17; Psalm 24:7-10',
    youtubeId: 'eU2q6Y-J8a8',
    summary: 'A transformative revelation on how divine holiness and persistent warfare prayer shatter every generational and ancestral embargo holding your destiny down.',
    duration: '1 hr 15 min',
    keyPoints: [
      'Recognizing satanic checkpoints in life and career',
      'The covenant power of absolute holiness as your legal shield',
      'How the blood of Jesus silences speaking altars',
      'Aggressive decrees to recover lost ground',
    ],
  },
  {
    id: 'sermon-2',
    title: 'The Mystery of Midnight Prayers',
    preacher: 'Dr. D.K. Olukoya (Worldwide GO)',
    date: 'Power Must Change Hands',
    series: 'Spiritual Warfare Manual',
    bibleVerse: 'Acts 16:25-26; Matthew 13:25',
    youtubeId: 'Z1BCkC3C7_Y',
    summary: 'Discover the profound spiritual warfare secrets of rising between midnight and 3:00 AM to overthrow satanic plantation and declare victory before dawn.',
    duration: '1 hr 45 min',
    keyPoints: [
      'Why the kingdom of darkness operates while men sleep',
      'Midnight as the spiritual exchange market',
      'Paul and Silas: breaking physical and spiritual chains',
      '10 foundational midnight warfare prayer bulletins',
    ],
  },
  {
    id: 'sermon-3',
    title: 'Possessing Your Possessions in Scotland',
    preacher: 'Dr. Festus Ogunmola',
    date: 'Sunday Deliverance Service',
    series: 'Spiritual Clinic Series',
    bibleVerse: 'Deuteronomy 2:24; Obadiah 1:17',
    youtubeId: 'kJQP7kiw5Fk',
    summary: 'How believers residing in the diaspora can overcome territorial resistance, prosper legitimately, and walk in divine favor through the Holy Spirit.',
    duration: '58 min',
    keyPoints: [
      'Overcoming diaspora spiritual dryness and stagnation',
      'Territorial intercession and spiritual authority',
      'Living as a light and prayer altar in your workplace',
      'Divine direction for immigrant families and students',
    ],
  },
];

export const TESTIMONIES: Testimony[] = [
  {
    id: 'test-1',
    name: 'Sister Blessing A.',
    location: 'Edinburgh City Centre',
    title: 'Miraculous Permanent Residency & Career Promotion',
    testimony: 'I had faced immigration delays for almost three years with great stress. During the Tuesday Spiritual Clinic, Pastor prayed with me and handed me targeted prayer bullets against foundational stagnation. Within four weeks, my Home Office application was approved with complete sponsorship, and my NHS trust promoted me to senior specialist! God of MFM is real and living!',
    date: 'October 2026',
    category: 'Immigration & Career',
  },
  {
    id: 'test-2',
    name: 'Brother Emmanuel O.',
    location: 'Leith, Edinburgh',
    title: 'Supernatural Healing from Chronic Spinal Pain',
    testimony: 'For two years I could not bend or lift without excruciating pain, awaiting major surgery. At the Power Must Change Hands program in Edinburgh, as we engaged in aggressive prayer during the ministration, I felt a warm surge of electric heat down my lumbar spine. The stiffness vanished instantly. The specialist at Western General Hospital confirmed the spinal disc had normalized! All glory to Jesus!',
    date: 'September 2026',
    category: 'Divine Healing',
  },
  {
    id: 'test-3',
    name: 'Sister Chidinma & Family',
    location: 'Musselburgh / Lothians',
    title: 'Fruit of the Womb After 6 Years of Waiting',
    testimony: 'After multiple medical verdicts stating conception was nearly impossible, we joined the MFM Edinburgh Hannah Prayer fellowship. Pastor instructed us to engage in midnight praise and fasting on the 1st Saturday PMCH. God honored our faith—we are blessed parents of healthy twin boys! Truly, upon Mount Zion there is deliverance!',
    date: 'August 2026',
    category: 'Family & Deliverance',
  },
];

export const BELIEFS = [
  {
    title: 'The Scriptures',
    verse: '2 Timothy 3:16-17',
    description: 'We believe the Holy Bible is the inspired, infallible, and authoritative Word of God, our supreme guide in all matters of faith and conduct.',
  },
  {
    title: 'The Godhead (Trinity)',
    verse: '1 John 5:7; Matthew 28:19',
    description: 'We believe in one God, eternally existent in three persons: Father, Son, and Holy Ghost, equal in power and glory.',
  },
  {
    title: 'Salvation Through Jesus Christ',
    verse: 'John 3:16; Acts 4:12',
    description: 'We believe that Jesus Christ was born of a virgin, died on the cross for our sins, bodily resurrected, and is the only mediator between God and man.',
  },
  {
    title: 'Absolute Holiness',
    verse: 'Hebrews 12:14; 1 Peter 1:15-16',
    description: 'We believe that absolute holiness of heart and life—both inward purity and outward modesty—is an indispensable prerequisite to enter heaven.',
  },
  {
    title: 'Holy Ghost Baptism & Gifts',
    verse: 'Acts 1:8; Acts 2:1-4',
    description: 'We believe in the baptism of the Holy Ghost with the initial evidence of speaking in tongues, accompanied by supernatural spiritual gifts for service.',
  },
  {
    title: 'Deliverance & Spiritual Warfare',
    verse: 'Obadiah 1:17; Mark 16:17',
    description: 'We believe in total deliverance from satanic bondage, evil covenants, ancestral curses, and demonic oppression through the name of Jesus and the fire of the Holy Ghost.',
  },
  {
    title: 'Divine Healing & Miracles',
    verse: 'Isaiah 53:5; James 5:14-15',
    description: 'We believe healing is provided in the atonement of Jesus Christ for our physical bodies, sicknesses, and diseases through prayer of faith.',
  },
  {
    title: 'The Second Coming of Christ',
    verse: '1 Thessalonians 4:16-17',
    description: 'We believe in the imminent bodily return of Jesus Christ to rapture His holy church and reign in majesty and righteousness.',
  },
];

export const DAILY_PRAYER_POINTS = [
  {
    id: 1,
    title: 'Covenant of Preservation',
    scripture: 'Psalm 91:1-2',
    text: 'He that dwelleth in the secret place of the most High shall abide under the shadow of the Almighty.',
    bullet: 'O Lord, let the fire of the Holy Ghost surround my life, family, and going out against every arrow of darkness, in Jesus’ name.',
  },
  {
    id: 2,
    title: 'Shattering Satanic Embargoes',
    scripture: 'Micah 2:13',
    text: 'The breaker is come up before them: they have broken up, and have passed through the gate...',
    bullet: 'Every foundational embargo placed upon my breakthrough and promotion, catch fire and burn to ashes, in the mighty name of Jesus.',
  },
  {
    id: 3,
    title: 'Divine Acceleration & Favour',
    scripture: 'Psalm 102:13',
    text: 'Thou shalt arise, and have mercy upon Zion: for the time to favour her, yea, the set time, is come.',
    bullet: 'Father, let unmerited favor locate me in my workplace, studies, and residence here in Scotland, in Jesus’ name.',
  },
  {
    id: 4,
    title: 'Victory Over Generational Curses',
    scripture: 'Galatians 3:13-14',
    text: 'Christ hath redeemed us from the curse of the law, being made a curse for us...',
    bullet: 'By the blood of the Lamb, I renounce and break every ancestral covenant limiting my lineage, in the name of Jesus.',
  },
  {
    id: 5,
    title: 'Possessing Possessions',
    scripture: 'Obadiah 1:17',
    text: 'But upon mount Zion shall be deliverance, and there shall be holiness; and the house of Jacob shall possess their possessions.',
    bullet: 'My stolen blessings, delayed virtues, and confiscated opportunities, hear the word of the Lord: locate me now by fire, in Jesus’ name!',
  },
];

export interface DKOPublication {
  id: string;
  title: string;
  author: string;
  tagline: string;
  category: string;
  description: string;
  samplePrayer: string;
  color: string;
  badge: string;
  readTime: string;
}

export const DKO_PUBLICATIONS: DKOPublication[] = [
  {
    id: 'prayer-rain',
    title: 'Prayer Rain',
    author: 'Dr. D.K. Olukoya',
    tagline: 'The Master Blueprint for Aggressive Spiritual Warfare',
    category: 'Spiritual Warfare & Deliverance',
    description: 'The world-renowned compendium containing over 800 biblically anchored warfare prayer points. Prayer Rain has equipped millions worldwide to dismantle demonic yokes, terminate satanic harassment, and recover stolen virtues.',
    samplePrayer: 'Every power assigned to swallow my divine benefits and delay my glory, vomit them and catch fire, in the name of Jesus!',
    color: 'from-purple-950 via-purple-900 to-red-950',
    badge: 'Bestseller Worldwide',
    readTime: '800+ War Bullets',
  },
  {
    id: 'command-morning',
    title: 'Command The Morning',
    author: 'Dr. D.K. Olukoya',
    tagline: 'God’s Secret Weapon for Daily Supernatural Dominion',
    category: 'Morning Devotional & Authority',
    description: 'Discover how to take control of the elemental powers and spiritual atmosphere of your day before the sun rises. Based on Job 38:12, this timeless spiritual guide empowers believers to command every morning into favor and protection.',
    samplePrayer: 'I take authority over this day, in the name of Jesus. I decree that the sun shall not smite me by day, nor the moon by night. Every agenda of failure for today is cancelled!',
    color: 'from-amber-600 via-amber-700 to-purple-950',
    badge: 'Daily Necessity',
    readTime: 'Daily Strategy',
  },
  {
    id: 'deliverance-head',
    title: 'Deliverance of The Head',
    author: 'Dr. D.K. Olukoya',
    tagline: 'Liberating Your Destiny, Mind & Crown from Ancestral Evil',
    category: 'Destiny Restoration',
    description: 'Your physical and spiritual head represents your destiny, wisdom, glory, and leadership. This revelatory book exposes the mysteries of head bewitchment, evil laying of hands, and delivers your crown from foundational contamination.',
    samplePrayer: 'My head, my head, my head! Reject every foundational bewitchment, refuse the voice of stagnation, and arise to shine, in the name of Jesus!',
    color: 'from-red-900 via-purple-950 to-indigo-950',
    badge: 'Special Deliverance',
    readTime: 'Deep Deliverance',
  },
  {
    id: 'pray-breakthroughs',
    title: 'Pray Your Way to Breakthroughs',
    author: 'Dr. D.K. Olukoya',
    tagline: 'Targeted Prayers to Unlock Impossible Doors and Favour',
    category: 'Breakthrough & Promotion',
    description: 'A focused spiritual warfare manual engineered for times when you need God to make a miraculous way where there seems to be no way. Ideal for job breakthroughs, immigration victories, business expansion, and marital settlement.',
    samplePrayer: 'O God of Elijah, let the doors of exceptional breakthrough that no man can shut open unto me this season, in the mighty name of Jesus!',
    color: 'from-indigo-950 via-purple-900 to-slate-950',
    badge: 'Breakthrough Classic',
    readTime: 'Targeted Solutions',
  },
  {
    id: '101-weapons',
    title: '101 Weapons of Spiritual Warfare',
    author: 'Dr. D.K. Olukoya',
    tagline: 'The Celestial Armoury for Total Overcoming in End Times',
    category: 'Spiritual Armoury',
    description: 'An exhaustive analysis of 101 distinct supernatural weapons that God has deposited in the Holy Scriptures for believers: from the Blood of Jesus and the Fire of the Holy Ghost to Divine East Wind and Angellic Assistance.',
    samplePrayer: 'Let the weapon of the Holy Ghost fire arise and pursue every stubborn pursuer of my life and family until they are completely overthrown, in Jesus’ name!',
    color: 'from-purple-950 via-red-900 to-amber-900',
    badge: 'Advanced Warfare',
    readTime: 'Encyclopedic Guide',
  },
  {
    id: 'manna-water',
    title: 'Manna Water & Spiritual Clinic Guide',
    author: 'Dr. D.K. Olukoya',
    tagline: 'Spiritual Diagnosis, Healing, and Biblical Holiness',
    category: 'Spiritual Health',
    description: 'The companion resource for MFM midweek spiritual clinics and anointing services. Teaches divine diagnosis of stubborn illnesses, dream contamination, and steps to holistic physical and spiritual wholeness.',
    samplePrayer: 'Every poison in my blood, organs, and spiritual foundation, dry up by the blood of Jesus, and let divine health take over my body!',
    color: 'from-purple-900 via-indigo-900 to-purple-950',
    badge: 'Spiritual Health',
    readTime: 'Diagnostic Manual',
  },
];

export const MFM_WORLDWIDE_PILLARS = [
  {
    title: 'A Do-It-Yourself Gospel Ministry',
    scripture: 'Psalm 144:1',
    description: 'At Mountain of Fire and Miracles Ministries, believers are trained so that their own hands are taught to war and their fingers to fight. You learn to pray through to your own victory.',
    icon: 'Swords',
  },
  {
    title: 'Holiness Within and Without',
    scripture: 'Hebrews 12:14',
    description: 'Without holiness, no man shall see the Lord. MFM holds an uncompromising stance on inward purity of thought, moral integrity, outward modesty, and righteous living.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Total Deliverance on Mount Zion',
    scripture: 'Obadiah 1:17',
    description: 'Upon Mount Zion shall be deliverance, holiness, and the possession of possessions. We dismantle satanic networks, ancestral curses, and generational limitations by fire.',
    icon: 'Flame',
  },
  {
    title: 'Aggressive Prophetic Prayer',
    scripture: 'Matthew 11:12',
    description: 'The kingdom of heaven suffereth violence, and the violent take it by force. Fervent, passionate prayer releases the supernatural power of God in every human circumstance.',
    icon: 'Zap',
  },
];

