import React from 'react';
import {
  FileText,
  MessageCircle,
  Phone,
  ShieldCheck,
  Building2,
  MapPin,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import heroElevatorImg from '../assets/images/hero_elevator_modern_1792502908792.jpg';

interface HeroProps {
  onOpenQuoteModal: (serviceName?: string) => void;
  onOpenWhatsAppModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onOpenWhatsAppModal,
}) => {
  return (
    <section className="relative bg-[#0a192f] text-white overflow-hidden border-b border-slate-800">
      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(197, 160, 89, 0.25) 1px, transparent 0)`,
            backgroundSize: '36px 36px',
          }}
        />
      </div>

      {/* Subtle Glows */}
      <div className="absolute -top-32 -left-32 w-80 sm:w-96 h-80 sm:h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-80 sm:w-96 h-80 sm:h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Trust Statement */}
            <div className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wider text-amber-400 uppercase py-1 border-b border-amber-400/30">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>{COMPANY_CONFIG.trustStatement}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight leading-[1.18] sm:leading-[1.15]">
              Reliable Elevator Solutions.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 block sm:inline">
                Safe Vertical Movement.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {COMPANY_CONFIG.heroSupportingText}
            </p>

            {/* Action Buttons - Stacked on mobile, side-by-side on sm+ */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              {/* Primary: Request a Quote */}
              <button
                onClick={() => onOpenQuoteModal()}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:from-amber-500 active:to-amber-600 rounded-md shadow-lg shadow-amber-500/15 transition-all duration-200 cursor-pointer min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Request a Quote</span>
              </button>

              {/* Secondary: Chat With Us on WhatsApp */}
              <button
                onClick={onOpenWhatsAppModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-slate-100 hover:text-white bg-slate-900/90 hover:bg-slate-800 active:bg-slate-700 border border-slate-700/80 rounded-md transition-all duration-200 cursor-pointer min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Chat on WhatsApp</span>
              </button>

              {/* Phone / Call Request Button */}
              {COMPANY_CONFIG.contact.phone.isConfigured ? (
                <a
                  href={`tel:${COMPANY_CONFIG.contact.phone.value}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 bg-amber-950/30 border border-amber-500/30 hover:border-amber-400/50 rounded-md transition-colors min-h-[44px]"
                >
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Call {COMPANY_CONFIG.contact.phone.raw}</span>
                </a>
              ) : (
                <button
                  onClick={() => onOpenQuoteModal('Telephone Callback Request')}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-xs font-semibold text-slate-200 bg-slate-900/80 border border-slate-700 rounded-md hover:border-amber-400/60 active:bg-slate-800 transition-colors cursor-pointer min-h-[44px]"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Lagos Dispatch: Request Call</span>
                </button>
              )}
            </div>

            {/* Operational Footprint & Credentials */}
            <div className="pt-4 sm:pt-6 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Mainland Branch</p>
                  <p className="text-slate-400">Ikotun Operations Center</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Island Branch</p>
                  <p className="text-slate-400">Victoria Island Hub</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Standard Safety</p>
                  <p className="text-slate-400">Rigorous Technical Protocols</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Elevator Architectural Showcase */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Image Frame with Industrial Accent Lines */}
              <div className="relative rounded-lg overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
                <img
                  src={heroElevatorImg}
                  alt="Modern commercial elevator system in corporate building in Lagos"
                  className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
                  loading="eager"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060e1a] via-transparent to-transparent opacity-85" />

                {/* Floating On-Image Credential Box */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-3 sm:p-3.5 rounded text-xs space-y-1">
                  <div className="flex items-center justify-between text-amber-400 font-semibold uppercase tracking-wider text-[10px] sm:text-[11px]">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-amber-400" />
                      Commercial &amp; Residential
                    </span>
                    <span className="text-slate-400 font-mono text-[10px]">Lagos, Nigeria</span>
                  </div>
                  <p className="text-slate-200 text-[11px] sm:text-xs leading-snug">
                    Passenger lifts, scheduled maintenance, and precision hoistway servicing across Lagos State.
                  </p>
                </div>
              </div>

              {/* Decorative engineering corner tags */}
              <div className="hidden sm:block absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-amber-400 pointer-events-none" />
              <div className="hidden sm:block absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-amber-400 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
