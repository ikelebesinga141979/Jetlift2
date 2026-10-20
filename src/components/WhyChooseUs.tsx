import React from 'react';
import {
  ShieldAlert,
  Headphones,
  Sliders,
  Calendar,
  Building,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      title: 'Safety-Conscious Work Practices',
      description:
        'We adhere to rigorous safety protocols on every hoistway and machine room task. Our technicians utilize mandatory safety harnesses, lock-out/tag-out procedures, and brake testing before returning cars to public operation.',
      icon: ShieldAlert,
    },
    {
      title: 'Responsive Customer Communication',
      description:
        'Elevator issues require rapid clarity. We maintain responsive contact channels for property managers and residents, providing updates on inspection schedules, fault findings, and technician arrival estimates.',
      icon: Headphones,
    },
    {
      title: 'Practical Technical Solutions',
      description:
        'We avoid unnecessary component replacements. Our focus is on identifying root causes—whether micro-switch misalignment, guide shoe wear, or relay contact oxidation—and implementing robust, cost-effective technical fixes.',
      icon: Sliders,
    },
    {
      title: 'Maintenance Planning and Support',
      description:
        'Structured preventive schedules help clients avoid costly emergency overhauls. We design routine maintenance intervals matching your building’s occupancy load, traffic intensity, and operating hours.',
      icon: Calendar,
    },
    {
      title: 'Service Tailored to Building Requirements',
      description:
        'A busy medical center with stretcher lifts has very different demands than a private duplex or an office tower. We adapt our service delivery and parts readiness to your specific facility type.',
      icon: Building,
    },
    {
      title: 'Commitment to Quality Workmanship',
      description:
        'From neat electrical wiring inside control cabinets to smooth door calibration and precise rail alignment, we take pride in clean, dependable engineering execution.',
      icon: CheckCircle2,
    },
    {
      title: 'Clear Communication & Quotation Processes',
      description:
        'Transparent scopes of work and itemized quotations. Building boards and facility managers receive clear breakdowns without hidden fees or ambiguous terms.',
      icon: FileCheck2,
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            <span>Technical Integrity &amp; Standards</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Why Choose Jetlift Standard Elevators?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            We build lasting partnerships with property developers, corporate facilities, residential estates,
            and healthcare centers across Lagos through dependable engineering, transparent communication,
            and uncompromising dedication to passenger safety.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.slice(0, 6).map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-slate-50 border border-slate-200/80 rounded-lg p-5 sm:p-6 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3.5">
                  <div className="w-10 h-10 rounded bg-[#0a192f] text-amber-400 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight 7th pillar full-width banner */}
        <div className="mt-6 sm:mt-8 bg-gradient-to-r from-[#0a192f] to-[#12284b] text-white rounded-lg p-5 sm:p-8 border border-slate-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-5 sm:gap-6">
          <div className="flex items-start gap-3.5 sm:gap-4">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded bg-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <FileCheck2 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">Pillar 07</span>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white mt-0.5">
                Clear Communication &amp; Quotation Processes
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                We believe in full engineering transparency. Before any major component replacement or installation
                work begins, you receive an itemized technical proposal and timeline breakdown.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="w-full md:w-auto text-center shrink-0 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded transition-colors min-h-[44px] flex items-center justify-center"
          >
            Contact Technical Team
          </a>
        </div>

      </div>
    </section>
  );
};
