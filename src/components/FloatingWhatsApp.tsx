import React, { useState } from 'react';
import { MessageCircle, X, Send, Copy, Check, Shield } from 'lucide-react';
import { COMPANY_CONFIG, getWhatsAppUrl } from '../config/company';

interface FloatingWhatsAppProps {
  onOpenQuoteModal: () => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  onOpenQuoteModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const isConfigured = COMPANY_CONFIG.contact.whatsapp.isConfigured && Boolean(COMPANY_CONFIG.contact.whatsapp.number);

  const defaultMsg = COMPANY_CONFIG.contact.whatsapp.defaultMessage;

  const handleLaunch = () => {
    if (isConfigured) {
      const url = getWhatsAppUrl();
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    } else {
      setIsOpen(true);
    }
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(defaultMsg);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Floating Action Button - Positioned safely above mobile bottom bar */}
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end">
        
        {/* Tooltip on hover/initial view (hidden on small touch screens) */}
        <div className="mb-2 hidden sm:flex items-center gap-1.5 bg-[#0a192f] text-slate-200 text-xs py-1.5 px-3 rounded shadow-lg border border-slate-700 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Chat on WhatsApp</span>
        </div>

        <button
          onClick={handleLaunch}
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-950/40 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40 cursor-pointer"
          aria-label="Contact Jetlift Standard Elevators on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        </button>
      </div>

      {/* WhatsApp Modal Dialog (for Message Review or Immediate Transmission) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="bg-[#0a192f] text-white p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base">WhatsApp Technical Support</h3>
                  <p className="text-xs text-amber-400 font-mono">Jetlift Standard Elevators — Lagos</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white rounded transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 space-y-4 text-slate-700 text-xs sm:text-sm">
              <p className="text-slate-600 leading-relaxed">
                Connect directly with our elevator engineering desk for rapid response regarding breakdown support,
                maintenance agreements, or new lift installations across Lagos.
              </p>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Prepared Service Inquiry Message:
                </label>
                <div className="p-3 bg-slate-50 border border-slate-200 rounded font-sans text-xs text-slate-800 leading-relaxed italic">
                  "{defaultMsg}"
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-1">
                {isConfigured ? (
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      const url = getWhatsAppUrl();
                      if (url) window.open(url, '_blank');
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 rounded transition-colors cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Proceed to WhatsApp Chat</span>
                  </button>
                ) : (
                  <button
                    onClick={handleCopyMessage}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded transition-colors cursor-pointer min-h-[44px]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Message Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>Copy Inquiry Message</span>
                      </>
                    )}
                  </button>
                )}

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors shadow-xs cursor-pointer min-h-[44px]"
                >
                  <span>Submit Service Request Online</span>
                </button>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5 justify-center">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct Technical Desk • Ikotun &amp; Victoria Island</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
