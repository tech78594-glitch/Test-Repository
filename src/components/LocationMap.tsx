import React, { useState } from 'react';
import { MapPin, Navigation, Bus, Car, Train, Copy, Check, ExternalLink, Flame } from 'lucide-react';

export const LocationMap: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'buses' | 'parking' | 'tram'>('buses');

  const address = '13 Bangor Road, Leith, Edinburgh EH6 5JY, Scotland';

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-2xl border border-purple-200 bg-white overflow-hidden shadow-sm">
      {/* Map Header */}
      <div className="p-5 bg-gradient-to-r from-purple-950 via-purple-900 to-indigo-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-purple-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wider mb-1">
            <Flame className="w-3.5 h-3.5 fill-amber-400" />
            <span>Interactive Sanctuary Map</span>
          </div>
          <h3 className="text-lg font-bold text-white">
            13 Bangor Road, Leith, Edinburgh EH6 5JY
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            className="px-3 py-1.5 text-xs font-semibold text-purple-200 hover:text-white bg-purple-900/60 hover:bg-purple-800 rounded-xl border border-purple-700/80 transition-colors flex items-center gap-1.5"
            title="Copy address to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300 font-bold">Address Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Address</span>
              </>
            )}
          </button>

          <a
            href="https://maps.google.com/?q=13+Bangor+Rd,+Edinburgh+EH6+5JY"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xs transition-all flex items-center gap-1.5 whitespace-nowrap"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Open in Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Interactive Map Iframe */}
      <div className="relative w-full h-[360px] sm:h-[420px] bg-purple-950">
        <iframe
          title="MFM Edinburgh Sanctuary Location Map"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://maps.google.com/maps?q=13%20Bangor%20Road,%20Edinburgh%20EH6%205JY&t=&z=16&ie=UTF8&iwloc=&output=embed"
        />

        {/* Floating Map Overlay Badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-lg border border-purple-200 text-xs flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 fill-white" />
          </div>
          <div>
            <p className="font-extrabold text-purple-950 leading-none">MFM Edinburgh</p>
            <p className="text-[11px] text-slate-600 mt-0.5">Leith, Edinburgh</p>
          </div>
        </div>
      </div>

      {/* Interactive Transit Info Tabs */}
      <div className="p-5 bg-purple-50/50 border-t border-purple-100">
        <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab('buses')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              activeTab === 'buses'
                ? 'bg-purple-900 text-white shadow-xs'
                : 'bg-white text-purple-950 border border-purple-200 hover:bg-purple-100'
            }`}
          >
            <Bus className="w-3.5 h-3.5 text-amber-500" />
            <span>Lothian Buses (12, 16, 22, 34, 35)</span>
          </button>

          <button
            onClick={() => setActiveTab('parking')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              activeTab === 'parking'
                ? 'bg-purple-900 text-white shadow-xs'
                : 'bg-white text-purple-950 border border-purple-200 hover:bg-purple-100'
            }`}
          >
            <Car className="w-3.5 h-3.5 text-amber-500" />
            <span>Parking &amp; Driving</span>
          </button>

          <button
            onClick={() => setActiveTab('tram')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-colors whitespace-nowrap ${
              activeTab === 'tram'
                ? 'bg-purple-900 text-white shadow-xs'
                : 'bg-white text-purple-950 border border-purple-200 hover:bg-purple-100'
            }`}
          >
            <Train className="w-3.5 h-3.5 text-amber-500" />
            <span>Edinburgh Tram Link</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="text-xs text-slate-700 leading-relaxed bg-white p-4 rounded-xl border border-purple-100 shadow-2xs">
          {activeTab === 'buses' && (
            <div>
              <p className="font-bold text-purple-950 mb-1">
                Frequent Edinburgh Bus Routes:
              </p>
              <p className="mb-2">
                Services <strong className="text-purple-900">12, 16, 22, 34, and 35</strong> stop on 
                <strong> Great Junction Street</strong> or <strong>Leith Walk</strong>, just a 2 to 4-minute walk from 13 Bangor Road.
              </p>
              <div className="flex flex-wrap gap-2 pt-1 text-[11px]">
                <span className="bg-purple-100 text-purple-900 font-semibold px-2 py-0.5 rounded">From Princes St: Bus 16 or 22 (~15 mins)</span>
                <span className="bg-purple-100 text-purple-900 font-semibold px-2 py-0.5 rounded">From Waverley: Bus 12 or 22</span>
              </div>
            </div>
          )}

          {activeTab === 'parking' && (
            <div>
              <p className="font-bold text-purple-950 mb-1">
                Sunday &amp; Midweek Parking Guide:
              </p>
              <p>
                <strong>Sundays:</strong> Free on-street parking is available on Bangor Road and adjoining side streets around Leith.
              </p>
              <p className="mt-1">
                <strong>Midweek (Tuesday &amp; Friday):</strong> Pay &amp; display controls end by 5:30 PM on most surrounding bays, allowing free parking for evening 6:30 PM meetings.
              </p>
            </div>
          )}

          {activeTab === 'tram' && (
            <div>
              <p className="font-bold text-purple-950 mb-1">
                Edinburgh Trams Connection:
              </p>
              <p>
                Take the Edinburgh Tram to the <strong className="text-purple-900">Foot of the Walk</strong> or <strong className="text-purple-900">Balfour Street</strong> stop.
              </p>
              <p className="mt-1">
                From Foot of the Walk, walk west along Great Junction Street and turn right onto Bangor Road (approx. 5–6 minutes walking).
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
