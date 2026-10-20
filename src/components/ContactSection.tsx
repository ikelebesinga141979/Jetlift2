import React from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Building,
  Navigation,
  Clock,
  ExternalLink,
  ShieldCheck,
  UserCheck,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

interface ContactSectionProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const { contact, leadership, offices, workingHours } = COMPANY_CONFIG;

  // Filter verified social accounts (hiding unconfigured ones from public view as per 4.J)
  const verifiedSocials = Object.entries(contact.socialMedia).filter(
    ([_, data]) => data.isConfigured && data.url
  );

  return (
    <section id="contact" className="py-16 md:py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
            <span className="w-6 h-0.5 bg-amber-400"></span>
            <span>Direct Technical Communication</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white tracking-tight">
            Contact Jetlift Standard Elevators
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            Reach out to our leadership and engineering teams for equipment consultations, maintenance
            quotations, or on-site inspections across Lagos, Nigeria.
          </p>
        </div>

        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 sm:mb-16">
          
          {/* Left Column: Official Contacts & Leadership */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Leadership Verification Card */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-4 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <UserCheck className="w-4 h-4" />
                <span>Executive Management</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 bg-slate-900/70 rounded border border-slate-700/60">
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Chief Executive Officer</p>
                  <p className="font-bold text-white text-base mt-0.5">{leadership[0].name}</p>
                  <p className="text-xs text-amber-400 mt-1">Strategic Leadership &amp; Quality</p>
                </div>
                <div className="p-3.5 bg-slate-900/70 rounded border border-slate-700/60">
                  <p className="text-[11px] font-mono text-slate-400 uppercase">Company Manager</p>
                  <p className="font-bold text-white text-base mt-0.5">{leadership[1].name}</p>
                  <p className="text-xs text-amber-400 mt-1">Operations &amp; Service Coordination</p>
                </div>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-5 sm:p-6 space-y-4">
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Technical Contact Channels
              </h3>

              {/* Telephone */}
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-900/70 rounded border border-slate-700/60">
                <div className="w-9 h-9 rounded bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Telephone Hotline</span>
                  {contact.phone.isConfigured ? (
                    <a
                      href={`tel:${contact.phone.value}`}
                      className="text-white hover:text-amber-400 font-bold text-sm sm:text-base transition-colors"
                    >
                      {contact.phone.raw}
                    </a>
                  ) : (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mt-1">
                      <span className="text-xs text-slate-300">
                        Dispatch Desk Active: Mon – Sat
                      </span>
                      <button
                        onClick={() => onOpenQuoteModal('Telephone Callback Request')}
                        className="text-xs text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Request Callback</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-900/70 rounded border border-slate-700/60">
                <div className="w-9 h-9 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">WhatsApp Operations</span>
                  {contact.whatsapp.isConfigured ? (
                    <a
                      href={`https://wa.me/${contact.whatsapp.number.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-400 font-bold text-sm sm:text-base transition-colors"
                    >
                      +{contact.whatsapp.number}
                    </a>
                  ) : (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mt-1">
                      <span className="text-xs text-slate-300">
                        Fast Inquiries &amp; Fault Reporting
                      </span>
                      <button
                        onClick={() => onOpenQuoteModal()}
                        className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Online Message Desk</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-3.5 bg-slate-900/70 rounded border border-slate-700/60">
                <div className="w-9 h-9 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Technical Inquiries</span>
                  {contact.email.isConfigured ? (
                    <a
                      href={`mailto:${contact.email.address}`}
                      className="text-white hover:text-blue-400 font-bold text-xs sm:text-sm transition-colors"
                    >
                      {contact.email.address}
                    </a>
                  ) : (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mt-1">
                      <span className="text-xs text-slate-300">
                        Submit Architectural Blueprints / Inquiries
                      </span>
                      <button
                        onClick={() => onOpenQuoteModal('Elevator Consultation')}
                        className="text-xs text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Send Proposal</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Social Media Links (Strictly showing only configured ones as required by 4.J) */}
              {verifiedSocials.length > 0 && (
                <div className="pt-3 border-t border-slate-700">
                  <span className="text-xs font-mono uppercase text-slate-400 block mb-2">Verified Channels</span>
                  <div className="flex flex-wrap gap-2">
                    {verifiedSocials.map(([platform, item]) => (
                      <a
                        key={platform}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1 bg-slate-900 text-xs font-medium text-slate-200 hover:text-amber-400 border border-slate-700 rounded transition-colors"
                      >
                        {platform.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Office Bases in Lagos */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-lg p-5 sm:p-6 space-y-5">
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Our Operating Bases in Lagos
              </h3>

              {offices.map((office) => (
                <div
                  key={office.id}
                  className="p-4 bg-slate-900/70 rounded border border-slate-700/60 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display font-bold text-white text-base">
                      {office.name}
                    </span>
                    <span className="font-mono text-xs text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-600/30">
                      {office.city}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {office.fullAddress}
                  </p>

                  <div className="pt-1 flex items-center justify-between">
                    <a
                      href={office.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors py-1"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open Directions in Google Maps</span>
                      <ExternalLink className="w-3 h-3 ml-0.5 opacity-60" />
                    </a>
                  </div>
                </div>
              ))}

              {/* Working Hours */}
              <div className="p-4 bg-slate-900/50 rounded border border-slate-700/40 text-xs text-slate-400 space-y-1">
                <p className="font-bold text-slate-200 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Technical Servicing Schedule</span>
                </p>
                <p>{workingHours.weekdays}</p>
                <p>{workingHours.saturday}</p>
                <p className="text-slate-400 italic pt-1">{workingHours.emergency}</p>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-amber-500/20 via-slate-800 to-slate-900 rounded-lg border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-white text-base">Ready to schedule a technical assessment?</h4>
            <p className="text-xs text-slate-300">
              Submit your project specifications or elevator breakdown notice directly to our desk.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal()}
            className="w-full sm:w-auto shrink-0 px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded shadow-sm transition-colors cursor-pointer min-h-[44px]"
          >
            Request Quotation
          </button>
        </div>

      </div>
    </section>
  );
};
