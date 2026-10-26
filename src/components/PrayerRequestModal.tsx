import React, { useState } from 'react';
import { X, Shield, Send, HeartHandshake, Flame } from 'lucide-react';

interface PrayerRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'Foundational Deliverance',
    burden: '',
    urgency: 'Standard',
    followUp: 'Pray in confidence (No call required)',
  });
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `MFM-PRAY-${Math.floor(10000 + Math.random() * 90000)}`;
    setRefId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'Foundational Deliverance',
      burden: '',
      urgency: 'Standard',
      followUp: 'Pray in confidence (No call required)',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-xl bg-white rounded-2xl border border-purple-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header in MFM Royal Purple */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white flex items-center justify-between border-b border-purple-800">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/MFM_logo_a7697bcf.png"
              alt="MFM Logo"
              className="w-10 h-10 object-contain rounded-full bg-white/10 p-0.5 border border-white/20 shrink-0"
            />
            <div>
              <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                <Flame className="w-3 h-3 fill-amber-400" />
                <span>Confidential Intercession</span>
              </div>
              <h3 className="text-lg font-extrabold text-white">
                Submit a Prayer Request
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-purple-300 hover:text-white rounded-lg bg-purple-900"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-purple-100 text-purple-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-purple-950 mb-1">
                Your Prayer Burden Has Been Laid on the Altar
              </h4>
              <p className="text-xs text-purple-800 font-semibold mb-3">
                Tracking Reference: <strong className="font-mono">{refId}</strong>
              </p>
              <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto mb-6 leading-relaxed">
                Pastor Dr. Festus Ogunmola and the MFM Edinburgh intercessory prayer team will stand in agreement 
                with you upon Mount Zion. <em>“Again I say unto you, That if two of you shall agree on earth as touching any thing that they shall ask, it shall be done for them of my Father which is in heaven.”</em> — Matthew 18:19
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-xs"
              >
                Return to Site
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-purple-900 leading-relaxed bg-purple-50/70 p-3 rounded-xl border border-purple-200">
                All requests are treated with strict pastoral confidentiality. Your details will only be seen by the pastor and anointed prayer warriors.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sister Mary"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                    Contact Email or Phone *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email or 07xxx xxxxxx"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                    Prayer Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                  >
                    <option value="Foundational Deliverance">Foundational &amp; Ancestral Deliverance</option>
                    <option value="Healing & Health">Divine Healing &amp; Health</option>
                    <option value="Career & Business Breakthrough">Career &amp; Financial Breakthrough</option>
                    <option value="Family & Marital Restoration">Family &amp; Marital Restoration</option>
                    <option value="Immigration & Legal Matters">Immigration &amp; Visa Breakthrough</option>
                    <option value="Fruit of the Womb">Fruit of the Womb (Hannah Hour)</option>
                    <option value="Spiritual Growth & Salvation">Salvation &amp; Spiritual Growth</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                    Pastoral Follow-Up
                  </label>
                  <select
                    value={formData.followUp}
                    onChange={(e) => setFormData({ ...formData, followUp: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                  >
                    <option value="Pray in confidence (No call required)">Pray in confidence (No call)</option>
                    <option value="Please call me for phone prayer">Please call me for prayer</option>
                    <option value="Send email with warfare scriptures">Send email with prayer bullets</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                  Describe Your Prayer Burden *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.burden}
                  onChange={(e) => setFormData({ ...formData, burden: e.target.value })}
                  placeholder="Share details of the challenge or breakthrough you desire God to do..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                />
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-purple-100">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-purple-800 hover:text-purple-950"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xs flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Prayer Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
