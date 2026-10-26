import React, { useState } from 'react';
import { X, Flame, Shield, MapPin, Sparkles, Send, Copy, Check, RotateCcw, Bot, BookOpen } from 'lucide-react';

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

    try {
      const response = await fetch('/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          agentType: activeTab,
          query: textToSend,
        }),
      });

      if (!response.ok) {
        throw new Error('Network error');
      }

      const data = await response.json();
      const agentMsg = {
        sender: 'agent' as const,
        text: data.reply || 'God bless you. We have received your prayer request upon Mount Zion.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, agentMsg]);
    } catch (err) {
      // Local fallback
      let fallbackText = '';
      if (activeTab === 'prayer') {
        fallbackText = `🔥 Warfare Prayer Bullets for "${textToSend}":\n\n1. In the mighty name of Jesus, let the fire of the Holy Ghost consume every spiritual hindrance assigned against my destiny (Obadiah 1:17)!\n2. Every ancestral padlock holding my breakthrough in Edinburgh, break by thunder, in the name of Jesus!\n3. I possess my divine possession and favor in Scotland, by the blood of Jesus (Psalm 102:13).\n\nJoin our Friday Deliverance & Intercessory Hour at 6:30 PM (13 Bangor Rd, Leith)!`;
      } else if (activeTab === 'visitor') {
        fallbackText = `We look forward to welcoming you at 13 Bangor Road, Leith, Edinburgh EH6 5JY!\n\n• Sunday School: 10:00 AM | Worship Service: 10:45 AM.\n• Buses: Lothian Buses 12, 16, 22, 34, 35 stop nearby at Great Junction Street.\n• Free on-street parking is available on Bangor Road on Sundays.\n• We have a dedicated children's Sunday school and hospitality ushers to welcome you!`;
      } else {
        fallbackText = `At MFM, deliverance breaks invisible spiritual chains (Obadiah 1:17).\n\n• Join our Tuesday Spiritual Clinic at 6:30 PM for personal diagnosis and Digging Deep Bible Study.\n• 1st Saturday Power Must Change Hands (9:00 AM – 12:00 PM).\n• For counseling with Pastor Dr. Festus Ogunmola, call 07557 644650.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'agent',
          text: fallbackText,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
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
              src="/assets/aistudio/MFM_logo_a7697bcf.png"
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
