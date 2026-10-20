import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] flex flex-col border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#0a192f] text-white p-4 sm:p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
            <h3 className="font-display font-bold text-base sm:text-lg">Privacy Policy</h3>
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
            Jetlift Standard Elevators Company | Lagos, Nigeria
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-1">1. Information We Collect</h4>
          <p>
            When you request a quotation or service inspection through this website, we collect your name,
            contact telephone number, optional email address, building location in Lagos, property type, and
            technical descriptions of your elevator requirements or reported faults.
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-1">2. Use of Information</h4>
          <p>
            Information provided is used exclusively to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Communicate with you regarding your elevator maintenance, repair, or installation request.</li>
            <li>Prepare accurate technical quotations and schedule site assessments.</li>
            <li>Coordinate field technician dispatch to your property in Lagos.</li>
          </ul>

          <h4 className="font-bold text-slate-900 text-sm pt-1">3. Data Protection &amp; Confidentiality</h4>
          <p>
            We do not sell, rent, or trade your personal or building information to third-party marketing companies.
            Your building access parameters and technical configurations are treated with commercial confidentiality.
          </p>

          <h4 className="font-bold text-slate-900 text-sm pt-1">4. Contacting Us</h4>
          <p>
            If you have questions regarding your data, contact Jetlift Standard Elevators at our Ikotun or Victoria
            Island offices in Lagos State, Nigeria.
          </p>
        </div>

        {/* Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded min-h-[44px] cursor-pointer"
          >
            Close Privacy Policy
          </button>
        </div>

      </div>
    </div>
  );
};
