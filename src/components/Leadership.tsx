import React from 'react';
import { UserCheck, Shield, Award, ArrowRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

interface LeadershipProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Leadership: React.FC<LeadershipProps> = ({ onOpenQuoteModal }) => {
  return (
    <section id="leadership" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            <span>Corporate Governance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Our Leadership
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Jetlift Standard Elevators is guided by hands-on engineering stewardship, direct customer
            accountability, and a commitment to safe, dependable vertical mobility across Nigeria.
          </p>
        </div>

        {/* Leadership Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl">
          {COMPANY_CONFIG.leadership.map((leader) => (
            <div
              key={leader.id}
              className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div className="p-6 sm:p-8">
                {/* Header with Avatar / Portrait */}
                <div className="flex items-center gap-4 mb-6">
                  {leader.avatarUrl ? (
                    <img
                      src={leader.avatarUrl}
                      alt={leader.name}
                      className="w-16 h-16 rounded-lg object-cover border-2 border-amber-400 shadow-sm"
                    />
                  ) : (
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gradient-to-br from-[#0a192f] to-[#12284b] border-2 border-amber-400/80 flex flex-col items-center justify-center text-amber-400 shadow-sm shrink-0">
                      <UserCheck className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                  )}

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold block">
                      {leader.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                      {leader.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">
                      {leader.title}
                    </p>
                  </div>
                </div>

                {/* Role Description - Word-for-word as specified */}
                <div className="pt-4 border-t border-slate-200/80">
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic bg-white p-4 rounded border border-slate-200/60 shadow-2xs">
                    “{leader.description}”
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 sm:px-8 py-3.5 bg-slate-100/80 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-800">
                  <Shield className="w-3.5 h-3.5 text-amber-600" />
                  Executive Management
                </span>
                <button
                  onClick={() => onOpenQuoteModal('Elevator Consultation')}
                  className="text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
