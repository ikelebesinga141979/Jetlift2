import React from 'react';
import { MapPin, Navigation, ExternalLink, Building, Clock, Compass } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

export const OfficeLocations: React.FC = () => {
  return (
    <section id="locations" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            <span>Geographic Presence in Lagos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Our Office Locations
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            With dual operating bases on both the Lagos Mainland (Ikotun) and Lagos Island (Victoria Island),
            Jetlift Standard Elevators coordinates technical dispatch and client consultations across Lagos State.
          </p>
        </div>

        {/* Office Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {COMPANY_CONFIG.offices.map((office) => (
            <div
              key={office.id}
              className="bg-white border border-slate-200 rounded-lg p-5 sm:p-8 shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Office Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-[#0a192f] text-amber-400 flex items-center justify-center shrink-0">
                      <Building className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono font-semibold text-amber-600 uppercase tracking-wider">
                        {office.region}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-slate-900">
                        {office.name}
                      </h3>
                    </div>
                  </div>
                  {office.isMainOffice && (
                    <span className="px-2.5 py-1 text-[11px] font-semibold bg-amber-100 text-amber-800 rounded">
                      Mainland Base
                    </span>
                  )}
                </div>

                {/* Postal Address */}
                <div className="space-y-1 mb-5 text-slate-700 text-sm sm:text-base">
                  {office.addressLines.map((line, i) => (
                    <p key={i} className="leading-snug">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Landmarks / Area Details */}
                <div className="p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-600 mb-5 flex items-start gap-2">
                  <Compass className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">Area Landmark: </span>
                    <span>{office.landmarks}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <a
                  href={office.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded transition-colors shadow-2xs min-h-[44px]"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                </a>

                <span className="text-center sm:text-right text-[11px] font-mono text-slate-400">
                  Lagos State, Nigeria
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lagos Operating Footprint Banner */}
        <div className="bg-[#0a192f] text-white rounded-lg p-5 sm:p-8 border border-slate-800 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-white">Office &amp; Servicing Hours</h4>
                <p className="text-xs text-slate-300 mt-1">{COMPANY_CONFIG.workingHours.weekdays}</p>
                <p className="text-xs text-slate-400">{COMPANY_CONFIG.workingHours.saturday}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-white">Mainland &amp; Island Coverage</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Ikotun, Alimosho, Ikeja, Surulere, Maryland, Yaba, Victoria Island, Ikoyi, Lekki, and Ajah.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Navigation className="w-5 h-5 text-amber-400 shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-sm text-white">Site Visits &amp; Inspections</h4>
                <p className="text-xs text-slate-300 mt-1">
                  Scheduled on-site assessments for architects, builders, and facility managers across Lagos.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
