import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Download, Check, Youtube, ExternalLink, Flame, FileText } from 'lucide-react';
import { SERVICES } from '@/src/data/churchData';

interface ServicesSectionProps {
  onOpenPlanVisit: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenPlanVisit }) => {
  const [filter, setFilter] = useState<'all' | 'sunday' | 'midweek' | 'special'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredServices = SERVICES.filter((service) => {
    if (filter === 'sunday') return service.dayOfWeek === 0;
    if (filter === 'midweek') return service.dayOfWeek === 2 || service.dayOfWeek === 5;
    if (filter === 'special') return service.dayOfWeek === 6;
    return true;
  });

  const handleDownloadIcs = (service: typeof SERVICES[0]) => {
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//MFM Edinburgh//Service Schedule//EN',
      'BEGIN:VEVENT',
      `SUMMARY:MFM Edinburgh - ${service.title}`,
      `DESCRIPTION:${service.description}\\nLocation: ${service.location}`,
      `LOCATION:${service.location}`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${service.id}-mfm-edinburgh.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCopiedId(service.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  return (
    <section id="services" className="py-20 bg-purple-50/40 border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-bold text-purple-800 tracking-wider uppercase mb-2 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>02. Service Times &amp; Schedule</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight leading-tight"
              style={{ textWrap: 'balance' }}
            >
              Gather With Us in Holy Ghost Power &amp; Prayer
            </h2>
            <p className="mt-2 text-slate-700 max-w-2xl text-sm sm:text-base">
              Experience the undeniable presence of God every week at 13 Bangor Road, Leith. All services are open to everyone.
            </p>
          </div>

          {/* Interactive Filter Control in MFM Purple */}
          <div className="flex items-center gap-1 p-1 bg-purple-100/80 rounded-xl shrink-0 self-start md:self-auto border border-purple-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-purple-900 text-white shadow-xs'
                  : 'text-purple-900 hover:bg-purple-200/60'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setFilter('sunday')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'sunday'
                  ? 'bg-purple-900 text-white shadow-xs'
                  : 'text-purple-900 hover:bg-purple-200/60'
              }`}
            >
              Sunday
            </button>
            <button
              onClick={() => setFilter('midweek')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'midweek'
                  ? 'bg-purple-900 text-white shadow-xs'
                  : 'text-purple-900 hover:bg-purple-200/60'
              }`}
            >
              Midweek
            </button>
            <button
              onClick={() => setFilter('special')}
              className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors whitespace-nowrap ${
                filter === 'special'
                  ? 'bg-purple-900 text-white shadow-xs'
                  : 'text-purple-900 hover:bg-purple-200/60'
              }`}
            >
              Monthly (PMCH)
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`p-6 rounded-2xl bg-white border transition-all duration-200 flex flex-col justify-between ${
                service.isMainService
                  ? 'border-purple-600 ring-2 ring-purple-600/25 shadow-md'
                  : 'border-purple-100 hover:border-purple-300 shadow-xs'
              }`}
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs mb-3">
                  <div className="flex items-center gap-1.5 font-bold text-purple-900">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>{service.day}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-purple-800 font-mono tabular-nums font-semibold">
                    <Clock className="w-3.5 h-3.5 text-purple-500" />
                    <span>{service.time}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-purple-950 mb-2 leading-snug">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs text-slate-500 border-t border-purple-100 pt-4 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                  <span className="truncate">{service.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleDownloadIcs(service)}
                    className="flex-1 py-2 px-3 text-xs font-semibold text-purple-900 hover:text-purple-950 bg-purple-50 hover:bg-purple-100 border border-purple-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                    title="Add to Google / Apple Calendar"
                  >
                    {copiedId === service.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700">Calendar Saved</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5 text-purple-600" />
                        <span>Add to Calendar</span>
                      </>
                    )}
                  </button>

                  {service.isMainService && (
                    <button
                      onClick={onOpenPlanVisit}
                      className="py-2 px-3 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-colors whitespace-nowrap"
                    >
                      Plan Visit
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Global Broadcast & Live Stream Info Box in MFM Royal Purple */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white border border-purple-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
              <Youtube className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Can't Join In Person?</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Watch MFM Edinburgh &amp; Worldwide Broadcasts Live
            </h3>
            <p className="text-sm text-purple-200 leading-relaxed">
              Every Sunday morning and during Power Must Change Hands, we stream live for our diaspora members, 
              isolated brethren, and international followers across Scotland and the UK on our official YouTube channel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href="https://www.youtube.com/@MFMEDINBURGH"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <Youtube className="w-4 h-4 text-red-600 fill-red-600" />
              <span>Open YouTube Channel</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="#bulletin"
              className="px-4 py-3 text-xs font-semibold text-amber-300 hover:text-white bg-purple-900/80 hover:bg-purple-800 border border-amber-400/50 rounded-xl transition-all shadow-xs flex items-center justify-center gap-1.5 whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              <span>Weekly Bulletin & Order</span>
            </a>
            <button
              onClick={onOpenPlanVisit}
              className="px-4 py-3 text-xs font-semibold text-purple-200 hover:text-white bg-purple-900/60 hover:bg-purple-800 border border-purple-700 rounded-xl transition-colors whitespace-nowrap"
            >
              First-Time Guest Guide
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
