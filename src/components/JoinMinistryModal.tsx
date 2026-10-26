import React, { useState, useEffect } from 'react';
import { X, Users, Check, Send, Flame } from 'lucide-react';
import { MINISTRIES } from '@/src/data/churchData';

interface JoinMinistryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedMinistry?: string;
}

export const JoinMinistryModal: React.FC<JoinMinistryModalProps> = ({
  isOpen,
  onClose,
  preselectedMinistry,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ministry: preselectedMinistry || MINISTRIES[0].name,
    experience: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedMinistry) {
      setFormData((prev) => ({ ...prev, ministry: preselectedMinistry }));
    }
  }, [preselectedMinistry]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-white rounded-2xl border border-purple-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
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
                <span>Serve in God's House</span>
              </div>
              <h3 className="text-lg font-extrabold text-white">
                Join a Ministry or Fellowship
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

        <div className="p-6 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 bg-purple-100 text-purple-900 rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                <Check className="w-7 h-7 stroke-[3]" />
              </div>
              <h4 className="text-xl font-bold text-purple-950 mb-1">
                Welcome to Service, {formData.name}!
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 max-w-sm mx-auto mb-6 leading-relaxed">
                Your interest in the <strong className="text-purple-950">{formData.ministry}</strong> has been logged. 
                The department coordinator will reach out to invite you to our next rehearsal and orientation.
              </p>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-xs"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                  Department / Fellowship
                </label>
                <select
                  value={formData.ministry}
                  onChange={(e) => setFormData({ ...formData, ministry: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                >
                  {MINISTRIES.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                  <option value="Ushering & Protocol">Ushering &amp; Protocol</option>
                  <option value="Media & Sound Engineering">Media &amp; Sound Engineering</option>
                  <option value="Welfare & Community Outreach">Welfare &amp; Community Outreach</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Brother Daniel"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07xxx xxxxxx"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                  Brief Background or Spiritual Gifts
                </label>
                <textarea
                  rows={3}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  placeholder="Share any past experience in church work, musical instruments, prayer, teaching..."
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
                  <span>Submit Application</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
