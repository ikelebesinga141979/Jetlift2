import React from 'react';
import { X, FileText } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#0a192f] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-amber-400 shrink-0" />
            <h3 className="font-display font-bold text-base sm:text-lg">Terms of Service</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded min-w-[36px] min-h-[36px] flex items-center justify-center cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          <p className="font-semibold text-slate-900">
            Terms &amp; Technical Engagement Standards | Jetlift Standard Elevators Company
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-1">1. Scope of Quotations and Initial Enquiries</h4>
          <p>
            Informational estimates submitted through the website do not constitute binding contracts until an official
            on-site inspection is performed and a signed formal agreement is executed. All work is subject to physical
            shaft conditions, hoistway access, and electrical power verifications.
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-1">2. Emergency Technical Response Disclaimer</h4>
          <p>
            While Jetlift Standard Elevators maintains a dedicated triage route for emergency breakdowns, response
            times in Lagos are contingent upon location, prevailing road traffic, technician availability, and safety
            feasibility.
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-1">3. Building Safety &amp; Access</h4>
          <p>
            Clients must provide secure, well-illuminated access to elevator machine rooms, pits, and hoistways.
            Unauthorized personnel must not attempt manual passenger release or electrical tampering before qualified
            technicians arrive.
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-1">4. Governing Law</h4>
          <p>
            These terms are governed by the laws of Lagos State and the Federal Republic of Nigeria.
          </p>
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded min-h-[44px] cursor-pointer"
          >
            Close Terms of Service
          </button>
        </div>

      </div>
    </div>
  );
};
