import React, { useState } from 'react';
import { X, Clock, Users, Check, Heart, Flame } from 'lucide-react';

interface PlanVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PlanVisitModal: React.FC<PlanVisitModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendingDate: 'This Sunday',
    partySize: '1',
    hasChildren: 'No',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-purple-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-purple-200 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Header in MFM Royal Purple */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white flex items-center justify-between border-b border-purple-800">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/MFM_logo_a7697bcf.png"
              alt="MFM Logo"
              className="w-10 h-10 object-contain rounded-full bg-white/10 p-0.5 border border-white/20 shrink-0 hidden sm:block"
            />
            <div>
              <div className="text-[10px] font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                <span>First-Time Guest Guide</span>
              </div>
              <h3 className="text-xl font-extrabold text-white">
                Plan Your Visit to MFM Edinburgh
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

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-purple-100 text-purple-900 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="text-xl font-bold text-purple-950 mb-2">
                We Can’t Wait to Welcome You, {formData.name}!
              </h4>
              <p className="text-sm text-slate-700 max-w-md mx-auto mb-6 leading-relaxed">
                Your visit reservation has been received. Our hospitality team at 13 Bangor Road, Leith, 
                will be waiting with your welcome pack. We pray your life will never remain the same!
              </p>
              <div className="bg-purple-50/70 p-4 rounded-xl border border-purple-200 text-xs text-left max-w-md mx-auto space-y-2 mb-6 text-purple-950">
                <div><strong>When:</strong> {formData.attendingDate} (10:00 AM Sunday School / 10:45 AM Worship)</div>
                <div><strong>Where:</strong> 13 Bangor Road, Leith, Edinburgh EH6 5JY</div>
                <div><strong>Questions?</strong> Call 07557 644650 or email info@mfmedinburgh.org</div>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors shadow-xs"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {/* Quick Expectations text blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-1.5 font-bold text-purple-950 mb-1">
                    <Clock className="w-3.5 h-3.5 text-purple-700" />
                    <span>When to Arrive</span>
                  </div>
                  <p className="text-slate-600">Arrive by 10:30 AM to meet our welcoming ushers and get seated comfortably.</p>
                </div>

                <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-1.5 font-bold text-purple-950 mb-1">
                    <Users className="w-3.5 h-3.5 text-purple-700" />
                    <span>Children's Class</span>
                  </div>
                  <p className="text-slate-600">Dedicated safe Sunday school with trained workers for toddlers to teens.</p>
                </div>

                <div className="p-3 bg-purple-50/60 rounded-xl border border-purple-100">
                  <div className="flex items-center gap-1.5 font-bold text-purple-950 mb-1">
                    <Heart className="w-3.5 h-3.5 text-red-600" />
                    <span>What to Expect</span>
                  </div>
                  <p className="text-slate-600">Warm community, reverent worship, solid biblical teaching, and warfare prayer.</p>
                </div>
              </div>

              {/* RSVP Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <h4 className="text-sm font-bold text-purple-950 uppercase tracking-wider">
                  Let Us Know You're Coming
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Campbell"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Visiting Date
                    </label>
                    <select
                      value={formData.attendingDate}
                      onChange={(e) => setFormData({ ...formData, attendingDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    >
                      <option value="This Sunday">This Coming Sunday</option>
                      <option value="Next Sunday">Next Sunday</option>
                      <option value="Upcoming PMCH">Upcoming PMCH (1st Sat)</option>
                      <option value="Tuesday Bible Study">Tuesday Bible Study</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Number of Guests
                    </label>
                    <select
                      value={formData.partySize}
                      onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    >
                      <option value="1">Just Me (1)</option>
                      <option value="2">2 People</option>
                      <option value="3-4">Family (3–4)</option>
                      <option value="5+">Group (5+)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                    Special Requests or Questions
                  </label>
                  <input
                    type="text"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="e.g. Accessibility needs, traveling from outside Edinburgh..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-3 border-t border-purple-100">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs font-bold text-purple-800 hover:text-purple-950"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md transition-colors"
                  >
                    Confirm Visit Reservation
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
