import React from 'react';
import { X, FileText } from 'lucide-react';
import { QuoteForm } from '../QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full my-4 sm:my-8 border border-slate-300 relative animate-in fade-in duration-150">
        
        {/* Modal Header */}
        <div className="bg-[#0a192f] text-white p-4 sm:p-5 flex items-center justify-between rounded-t-lg">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg leading-tight">
                Request an Elevator Quote or Inspection
              </h3>
              <p className="text-[11px] sm:text-xs text-amber-400 font-mono">
                Jetlift Standard Elevators — Lagos, Nigeria
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-md transition-colors cursor-pointer min-w-[40px] min-h-[40px] flex items-center justify-center"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Embedded Form */}
        <div className="p-3 sm:p-6 max-h-[82vh] overflow-y-auto">
          <QuoteForm initialService={preselectedService} />
        </div>

      </div>
    </div>
  );
};
