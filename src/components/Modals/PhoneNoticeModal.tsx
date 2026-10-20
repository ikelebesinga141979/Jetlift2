import React from 'react';
import { X, Phone, Info, FileText } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

interface PhoneNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteModal: () => void;
  onOpenAdminGuide: () => void;
}

export const PhoneNoticeModal: React.FC<PhoneNoticeModalProps> = ({
  isOpen,
  onClose,
  onOpenQuoteModal,
  onOpenAdminGuide,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden border border-slate-300">
        <div className="bg-[#0a192f] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <Phone className="w-5 h-5 text-amber-400" />
            <h3 className="font-display font-bold text-base">Telephone Line Status</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 text-xs sm:text-sm text-slate-700">
          <div className="p-3 bg-amber-50 border border-amber-200 rounded text-amber-900 text-xs flex items-start gap-2">
            <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-bold">Official Telephone Number Pending</p>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                As per company policy, phone numbers are not fabricated. Once official lines are supplied
                by Mr Julius Omogiafo or Mr Joshua Omogiafo, direct telephone dialing will become available.
              </p>
            </div>
          </div>

          <p className="text-slate-600">
            In the meantime, you can submit your technical service request, maintenance inquiry, or breakdown
            alert through our online quote form:
          </p>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded text-center transition-colors shadow-xs"
            >
              Submit Service Request Online
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenAdminGuide();
              }}
              className="text-center text-xs text-amber-700 hover:underline pt-1"
            >
              Configure Phone Number (Admin Guide)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
