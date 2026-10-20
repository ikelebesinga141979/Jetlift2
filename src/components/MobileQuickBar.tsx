import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

interface MobileQuickBarProps {
  onOpenQuoteModal: () => void;
  onOpenWhatsAppModal: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  onOpenQuoteModal,
  onOpenWhatsAppModal,
}) => {
  const isPhoneConfigured = COMPANY_CONFIG.contact.phone.isConfigured;
  const phoneValue = COMPANY_CONFIG.contact.phone.value;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Mobile Action Bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#060e1a]/95 backdrop-blur-md border-t border-slate-800 shadow-2xl px-3 py-2 flex items-center justify-between gap-2 safe-bottom"
    >
      {/* Action 1: Call or Dispatch Desk */}
      {isPhoneConfigured ? (
        <a
          href={`tel:${phoneValue}`}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-slate-900 border border-slate-800 text-slate-200 active:bg-slate-800 transition-colors min-h-[44px]"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Call Line</span>
        </a>
      ) : (
        <button
          type="button"
          onClick={scrollToContact}
          className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-slate-900 border border-slate-800 text-slate-200 active:bg-slate-800 transition-colors min-h-[44px] cursor-pointer"
        >
          <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-semibold tracking-wide">Contact Desk</span>
        </button>
      )}

      {/* Action 2: WhatsApp Chat */}
      <button
        type="button"
        onClick={onOpenWhatsAppModal}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-md bg-emerald-950/70 border border-emerald-800/80 text-emerald-300 active:bg-emerald-900/80 transition-colors min-h-[44px] cursor-pointer"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400 mb-0.5" />
        <span className="text-[10px] font-semibold tracking-wide">WhatsApp</span>
      </button>

      {/* Action 3: Request Quote */}
      <button
        type="button"
        onClick={onOpenQuoteModal}
        className="flex-[1.3] flex items-center justify-center gap-1.5 py-2 px-3 rounded-md bg-gradient-to-r from-amber-400 to-amber-500 active:from-amber-500 active:to-amber-600 text-slate-950 font-bold text-xs shadow-md min-h-[44px] cursor-pointer"
      >
        <FileText className="w-4 h-4 text-slate-950" />
        <span>Get Quote</span>
      </button>
    </nav>
  );
};
