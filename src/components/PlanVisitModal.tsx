import React, { useState } from 'react';
import { X, Clock, Users, Check, Heart, Flame, Loader2, CheckCircle2, MapPin, Calendar } from 'lucide-react';
import { AnimatedSuccessBadge } from './AnimatedSuccessBadge';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  const handleReset = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    onClose();
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
            className="p-1.5 text-purple-300 hover:text-white rounded-lg bg-purple-900 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 animate-success-enter">
              {/* Animated checkmark badge */}
              <AnimatedSuccessBadge variant="gold" />

              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold mb-3 border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Visit Confirmed &amp; Hospitality Team Notified</span>
              </div>

              <h4 className="text-2xl font-black text-purple-950 mb-2">
                We Can’t Wait to Welcome You, {formData.name}!
              </h4>
              <p className="text-sm text-slate-700 max-w-md mx-auto mb-6 leading-relaxed">
                Your visit reservation has been received. Our hospitality team at 13 Bangor Road, Leith, 
                will be waiting with your welcome pack. We pray your life will never remain the same!
              </p>
              
              <div className="bg-purple-50/80 p-4 rounded-xl border border-purple-200 text-xs text-left max-w-md mx-auto space-y-2.5 mb-6 text-purple-950 shadow-xs">
                <div className="flex items-start gap-2">
                  <Calendar className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div><strong>When:</strong> {formData.attendingDate} (10:00 AM Sunday School / 10:45 AM Worship)</div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div><strong>Where:</strong> 13 Bangor Road, Leith, Edinburgh EH6 5JY</div>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-4 h-4 text-purple-700 shrink-0 mt-0.5" />
                  <div><strong>Party Size:</strong> {formData.partySize} {formData.partySize === '1' ? 'Person' : 'People'}</div>
                </div>
                <div className="pt-2 border-t border-purple-200/60 text-[11px] text-purple-800">
                  Questions? Call <strong>07557 644650</strong> or email <strong>info@mfmedinburgh.org</strong>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-purple-900 hover:text-purple-950 border border-purple-200 hover:bg-purple-50 rounded-xl transition-colors"
                >
                  Edit Details
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-7 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md hover:shadow-lg"
                >
                  Done
                </button>
              </div>
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
                    disabled={isSubmitting}
                    className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 disabled:opacity-75 rounded-xl shadow-md cursor-pointer transition-all flex items-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-950" />
                        <span>Preparing Welcome Pack...</span>
                      </>
                    ) : (
                      <span>Confirm Visit Reservation</span>
                    )}
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
