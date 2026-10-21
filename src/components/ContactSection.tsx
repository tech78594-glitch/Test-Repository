import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Bus, Car, Send, Check, ExternalLink, Flame } from 'lucide-react';
import { LocationMap } from './LocationMap';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'General Inquiry',
          message: '',
        });
      }, 4000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>09. Visit &amp; Get in Touch</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight"
            style={{ textWrap: 'balance' }}
          >
            We Look Forward to Welcoming You
          </h2>
          <p className="mt-3 text-slate-700 text-sm sm:text-base leading-relaxed">
            Have questions about services, spiritual counseling, baptism, or directions? 
            Reach out directly or visit us at our sanctuary in Leith, Edinburgh.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Location & Transit Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white border border-purple-800 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4">
                Church Sanctuary &amp; Office
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-purple-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Physical Location:</strong>
                    <span>13 Bangor Road, Near Great Junction Street,</span>
                    <span className="block">Leith, Edinburgh EH6 5JY, Scotland</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Helpline &amp; Pastoral Care:</strong>
                    <a href="tel:07557644650" className="text-amber-300 hover:underline font-bold">
                      07557 644650
                    </a>
                    <span className="block text-purple-300 text-xs">
                      Alternative: 0131 553 4300 / 07949 059483
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Official Email:</strong>
                    <a href="mailto:info@mfmedinburgh.org" className="text-amber-300 hover:underline">
                      info@mfmedinburgh.org
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Sunday Service Times:</strong>
                    <span>Sunday School: 10:00 AM · Worship: 10:45 AM</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-purple-800">
                <a
                  href="https://maps.google.com/?q=13+Bangor+Rd,+Edinburgh+EH6+5JY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
                >
                  <MapPin className="w-4 h-4 text-slate-950" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Transit & Parking Guide */}
            <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-200">
              <h4 className="text-xs font-bold text-purple-950 uppercase tracking-wider mb-3">
                Transit &amp; Parking Information
              </h4>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-2.5">
                  <Bus className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-purple-950">Lothian Buses:</strong>
                    <p>Buses 12, 16, 22, 34, and 35 stop nearby along Great Junction Street and Leith Walk.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-purple-950">Parking Advice:</strong>
                    <p>On-street parking is available on Bangor Road and neighbouring side streets (free on Sundays).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7 bg-purple-50/40 rounded-2xl border border-purple-200 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-purple-950 mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Our administration and pastoral team usually respond within 24 hours.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-white rounded-xl border border-emerald-200 shadow-sm animate-fade-in">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-slate-600">
                  Thank you for reaching out to MFM Edinburgh. A member of our team will contact you shortly. God bless you!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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
                      placeholder="e.g. Samuel Davies"
                      className="w-full px-3.5 py-2.5 bg-white border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
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
                      placeholder="name@example.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="07xxx xxxxxx"
                      className="w-full px-3.5 py-2.5 bg-white border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="First-Time Visitor">First-Time Visitor Question</option>
                      <option value="Spiritual Counseling">Spiritual Counseling with Pastor</option>
                      <option value="Water Baptism">Water Baptism &amp; Membership</option>
                      <option value="Giving &amp; Gift Aid">Giving &amp; Gift Aid</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="How can we assist you or pray with you?"
                    className="w-full px-3.5 py-2.5 bg-white border border-purple-200 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-purple-700 focus:outline-none text-purple-950"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Location Map Section */}
        <div id="map" className="mt-14">
          <LocationMap />
        </div>
      </div>
    </section>
  );
};
