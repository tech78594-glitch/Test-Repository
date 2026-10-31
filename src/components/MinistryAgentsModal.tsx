import React, { useState } from 'react';
import { X, Flame, Shield, MapPin, Sparkles, Send, Copy, Check, RotateCcw, Bot, BookOpen } from 'lucide-react';

type AgentType = 'prayer' | 'visitor' | 'deliverance';

function getMinistryReply(agentType: AgentType, query: string): string {
  if (agentType === 'prayer') {
    return `🔥 Warfare Prayer Bullets for "${query}" (Anchored in Obadiah 1:17 & Psalm 91):\n\n1. In the mighty name of Jesus, let the fire of the Holy Ghost surround my life, career, and household against every satanic embargo!\n2. Every ancestral chain of limitation and delayed blessing, break by fire, in the name of Jesus! (Micah 2:13)\n3. O Lord, arise and let unmerited divine favor, open doors, and acceleration locate me in Edinburgh and Scotland! (Psalm 102:13)\n4. By the blood of the Lamb, I possess all my confiscated possessions, health, and joy, in Jesus' name!\n\nWe invite you to join our Friday Deliverance & Intercession Hour (6:30 PM) or Sunday Worship (10:45 AM) at 13 Bangor Road, Leith!`;
  }
  if (agentType === 'visitor') {
    return `Welcome to MFM Edinburgh! We look forward to receiving you at 13 Bangor Road, Leith, Edinburgh EH6 5JY.\n\n• Sunday Gathering: 10:00 AM (Sunday School) & 10:45 AM (Glorious Worship & Deliverance Service).\n• Getting Here: Lothian Buses 12, 16, 22, 34, and 35 stop nearby along Great Junction Street.\n• Parking: Free on-street parking is available on Bangor Road and surrounding side streets on Sundays.\n• Children: We have an active, safe Sunday school for children of all ages.\n\nOur ushers will greet you with a welcome pack at the door!`;
  }
  return `Deliverance is the bread of God's children (Obadiah 1:17).\n\n• Tuesday Spiritual Clinic (6:30 PM): Personal spiritual diagnosis and Digging Deep Bible Study.\n• Friday Deliverance Hour (6:30 PM): Fervent warfare prayers breaking ancestral yokes.\n• 1st Saturday Monthly: Power Must Change Hands (PMCH, 9:00 AM – 12:00 PM).\n\nFor confidential pastoral counseling with Pastor Dr. Festus Ogunmola, call 07557 644650.`;
}

interface MinistryAgentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultAgent?: 'prayer' | 'visitor' | 'deliverance';
}

export const MinistryAgentsModal: React.FC<MinistryAgentsModalProps> = ({
  isOpen,
  onClose,
  defaultAgent = 'prayer',
}) => {
  const [activeTab, setActiveTab] = useState<'prayer' | 'visitor' | 'deliverance'>(defaultAgent);
  const [inputQuery, setInputQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'user' | 'agent'; text: string; time: string }>>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputQuery.trim();
    if (!textToSend || loading) return;

    const userMsg = {
      sender: 'user' as const,
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setLoading(true);

    // Replies are generated in the browser, so the site needs no server or API key.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setMessages((prev) => [
      ...prev,
      {
        sender: 'agent',
        text: getMinistryReply(activeTab, textToSend),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setLoading(false);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const getPresetQuestions = () => {
    if (activeTab === 'prayer') {
      return [
        'Warfare prayers for job & career breakthrough in Edinburgh',
        'Prayer bullets against delay & generational limitation',
        'Midnight prayers for divine healing and health',
        'Prayer for visa & permanent residency approval',
      ];
    } else if (activeTab === 'visitor') {
      return [
        'How do I get to 13 Bangor Rd by Lothian bus?',
        'Where can I park on Sunday morning?',
        'What should I expect as a first-time visitor?',
        'Do you have Sunday school for young children?',
      ];
    } else {
      return [
        'How does the Tuesday Spiritual Clinic work?',
        'What are the guidelines for Power Must Change Hands fasting?',
        'How do I schedule a deliverance counseling session?',
        'Recommended MFM spiritual warfare books by Dr. Olukoya',
      ];
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-purple-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header with MFM Royal Purple */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white flex items-center justify-between border-b border-purple-800">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}assets/brand/mfm-logo.png`}
              alt="MFM Logo"
              className="w-10 h-10 object-contain rounded-full bg-white/10 p-0.5 border border-white/20 shrink-0"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                  MFM Edinburgh Interactive Agents
                </span>
                <span className="text-[10px] bg-purple-800 text-purple-200 px-2 py-0.5 rounded-full font-mono">
                  Active
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Spiritual &amp; Visitor Assistant Hub
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-purple-200 hover:text-white rounded-lg bg-purple-900/60 hover:bg-purple-800"
            aria-label="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-1 p-2 bg-purple-50/80 border-b border-purple-100 overflow-x-auto">
          <button
            onClick={() => setActiveTab('prayer')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'prayer'
                ? 'bg-purple-900 text-white shadow-sm'
                : 'text-purple-900 hover:bg-purple-200/50'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Warfare Prayer Agent</span>
          </button>

          <button
            onClick={() => setActiveTab('visitor')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'visitor'
                ? 'bg-purple-900 text-white shadow-sm'
                : 'text-purple-900 hover:bg-purple-200/50'
            }`}
          >
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span>Edinburgh Visitor Agent</span>
          </button>

          <button
            onClick={() => setActiveTab('deliverance')}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === 'deliverance'
                ? 'bg-purple-900 text-white shadow-sm'
                : 'text-purple-900 hover:bg-purple-200/50'
            }`}
          >
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>Deliverance Clinic Agent</span>
          </button>
        </div>

        {/* Content & Dialogue Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 min-h-[280px] max-h-[360px] bg-slate-50/50">
          {/* Introductory Agent Card */}
          <div className="p-3.5 bg-white rounded-xl border border-purple-100 shadow-xs flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-900 flex items-center justify-center shrink-0 mt-0.5">
              <Bot className="w-4 h-4" />
            </div>
            <div className="text-xs text-purple-950 leading-relaxed">
              {activeTab === 'prayer' && (
                <>
                  <strong className="block text-purple-900 mb-0.5">Warfare Prayer Agent Ready</strong>
                  Share your specific prayer need, battle, or circumstance. I will generate targeted, 
                  aggressive MFM-style prayer bullets anchored in God's Holy Word and Obadiah 1:17.
                </>
              )}
              {activeTab === 'visitor' && (
                <>
                  <strong className="block text-purple-900 mb-0.5">Edinburgh Visitor Agent Ready</strong>
                  Visiting MFM Edinburgh at 13 Bangor Road, Leith? Ask about service schedules, 
                  Lothian bus routes, Sunday parking, children’s church, or what to expect!
                </>
              )}
              {activeTab === 'deliverance' && (
                <>
                  <strong className="block text-purple-900 mb-0.5">Deliverance &amp; Spiritual Clinic Agent Ready</strong>
                  Learn about our Tuesday Spiritual Clinic, fasting preparations for Power Must Change Hands (PMCH), 
                  and biblical deliverance doctrines taught by Dr. D.K. Olukoya.
                </>
              )}
            </div>
          </div>

          {/* Quick Preset Prompts */}
          {messages.length === 0 && (
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-purple-900 uppercase tracking-wider block">
                Suggested Questions:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {getPresetQuestions().map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(preset)}
                    className="text-left p-2.5 bg-white hover:bg-purple-50 text-xs text-purple-950 font-medium rounded-xl border border-purple-100 hover:border-purple-300 transition-all shadow-2xs"
                  >
                    💬 {preset}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Message Thread */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[88%] p-3.5 rounded-2xl text-xs sm:text-sm whitespace-pre-wrap leading-relaxed shadow-xs ${
                  msg.sender === 'user'
                    ? 'bg-purple-900 text-white rounded-br-none'
                    : 'bg-white text-slate-800 border border-purple-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>

              <div className="flex items-center gap-2 mt-1 px-1">
                <span className="text-[10px] text-slate-400">{msg.time}</span>
                {msg.sender === 'agent' && (
                  <button
                    onClick={() => copyToClipboard(msg.text, index)}
                    className="text-[10px] text-purple-700 hover:text-purple-950 flex items-center gap-1 font-medium"
                    title="Copy response"
                  >
                    {copiedIndex === index ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2 text-xs text-purple-800 font-medium p-3 bg-purple-50/70 rounded-xl border border-purple-100">
              <Flame className="w-4 h-4 text-amber-500 animate-bounce" />
              <span>Seeking spiritual guidance &amp; generating scriptural bullets...</span>
            </div>
          )}
        </div>

        {/* Input Form */}
        <div className="p-3 sm:p-4 bg-white border-t border-purple-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder={
                activeTab === 'prayer'
                  ? 'Describe your need (e.g. career favor, visa delay, family peace)...'
                  : activeTab === 'visitor'
                  ? 'Ask about directions to Leith, bus routes, parking, service times...'
                  : 'Ask about spiritual clinic, fasting, or deliverance...'
              }
              className="flex-1 px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-purple-700 focus:bg-white text-slate-900"
            />
            <button
              type="submit"
              disabled={loading || !inputQuery.trim()}
              className="px-4 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5 shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ask Agent</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
