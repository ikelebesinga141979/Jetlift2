import React from 'react';
import {
  Phone,
  Mail,
  ArrowUp,
  MapPin,
  Shield,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import { SERVICES_DATA } from '../data/services';

interface FooterProps {
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacyModal,
  onOpenTermsModal,
  onOpenQuoteModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { contact, leadership, offices, currentYear } = COMPANY_CONFIG;

  const verifiedSocials = Object.entries(contact.socialMedia).filter(
    ([_, data]) => data.isConfigured && data.url
  );

  return (
    <footer className="bg-[#050c17] text-slate-300 text-xs border-t border-slate-800 pb-20 md:pb-0">
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
          
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-900 to-[#102444] border border-amber-500/40 p-1.5 flex items-center justify-center">
                <div className="w-full h-full border border-amber-400 rounded-xs flex items-center justify-center bg-slate-900 text-[8px] font-bold text-amber-400">
                  <span>▲▼</span>
                </div>
              </div>
              <div>
                <span className="font-display font-bold text-white text-base tracking-wider block">
                  JETLIFT
                </span>
                <span className="text-[10px] uppercase font-semibold tracking-widest text-amber-400 block">
                  STANDARD ELEVATORS
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Jetlift Standard Elevators Company provides dependable elevator installation, troubleshooting,
              preventive servicing, modernization, and technical equipment supply for residential and commercial
              properties in Lagos, Nigeria.
            </p>

            <div className="pt-2 text-slate-400 space-y-1 text-xs">
              <p>
                <span className="text-slate-200 font-semibold">Chief Executive Officer:</span>{' '}
                {leadership[0].name}
              </p>
              <p>
                <span className="text-slate-200 font-semibold">Company Manager:</span>{' '}
                {leadership[1].name}
              </p>
            </div>

            {/* Social Media (Verified only) */}
            {verifiedSocials.length > 0 && (
              <div className="pt-2 flex items-center gap-2">
                <span className="text-slate-400 text-[11px]">Follow Us:</span>
                {verifiedSocials.map(([platform, item]) => (
                  <a
                    key={platform}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-amber-400 rounded text-[11px] font-mono transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  Elevator Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  Projects &amp; Work
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  Our Leadership
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  Office Locations
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors py-1 inline-block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Elevator Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              {SERVICES_DATA.slice(0, 6).map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onOpenQuoteModal(srv.name)}
                    className="text-left hover:text-amber-400 transition-colors line-clamp-1 py-1 cursor-pointer"
                  >
                    {srv.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onOpenQuoteModal('Maintenance Contracts')}
                  className="text-left text-amber-400 hover:text-amber-300 font-semibold py-1 cursor-pointer"
                >
                  View All 10 Services →
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Lagos Office Addresses (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Lagos Offices
            </h4>

            {offices.map((office) => (
              <div key={office.id} className="space-y-1 text-slate-400">
                <p className="font-semibold text-slate-200 text-xs">{office.name}:</p>
                <p className="text-[11px] leading-relaxed">{office.fullAddress}</p>
              </div>
            ))}

            <div className="pt-2 text-slate-400 space-y-1.5 text-xs">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {contact.phone.isConfigured ? (
                  <span>{contact.phone.raw}</span>
                ) : (
                  <span>Technical Dispatch: Active Online</span>
                )}
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                {contact.email.isConfigured ? (
                  <span>{contact.email.address}</span>
                ) : (
                  <span>Inquiries: via Online Service Desk</span>
                )}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-[#03070e] py-6 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-center sm:text-left">
              © {currentYear} {COMPANY_CONFIG.name}. All rights reserved. Lagos State, Nigeria.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button
              onClick={onOpenPrivacyModal}
              className="hover:text-amber-400 transition-colors cursor-pointer py-1"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={onOpenTermsModal}
              className="hover:text-amber-400 transition-colors cursor-pointer py-1"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer py-1"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
