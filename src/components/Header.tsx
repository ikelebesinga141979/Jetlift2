import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  FileText,
  MapPin,
  ChevronRight,
  Shield,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';

interface HeaderProps {
  onOpenQuoteModal?: (preselectedService?: string) => void;
  onOpenWhatsAppModal?: (serviceName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal,
  onOpenWhatsAppModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Projects', href: '#projects' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Offices', href: '#locations' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Engineering & Location Notice Bar */}
      <div className="bg-[#060e1a] text-slate-300 text-xs py-2 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 sm:gap-4 text-xs font-normal">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              Lagos Offices: Ikotun &amp; Victoria Island
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              Standard Elevator Engineering &amp; Safety
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            {COMPANY_CONFIG.contact.phone.isConfigured ? (
              <a
                href={`tel:${COMPANY_CONFIG.contact.phone.value}`}
                className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
              >
                <Phone className="w-3 h-3" />
                {COMPANY_CONFIG.contact.phone.raw}
              </a>
            ) : (
              <button
                onClick={() => handleNavClick('#contact')}
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors text-xs"
              >
                <Phone className="w-3 h-3 text-amber-400" />
                <span>Technical Dispatch Desk: Active</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a192f]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-slate-800'
            : 'bg-[#0a192f] border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 sm:h-20">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {/* Elevator Brand Icon */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-slate-900 to-[#102444] border border-amber-500/40 p-2 flex items-center justify-center relative shadow-sm group-hover:border-amber-400 transition-all shrink-0">
                <div className="relative w-full h-full flex flex-col items-center justify-between">
                  <div className="w-full flex justify-between items-center px-0.5">
                    <span className="w-1.5 h-1 bg-amber-400 rounded-xs"></span>
                    <span className="w-1.5 h-1 bg-amber-400 rounded-xs"></span>
                  </div>
                  {/* Elevator Cab Motif with Directional Arrows */}
                  <div className="w-4 h-4 sm:w-5 sm:h-5 border border-amber-400/90 rounded-xs flex items-center justify-center bg-slate-900/90">
                    <div className="flex flex-col items-center justify-center text-[7px] sm:text-[8px] font-bold text-amber-400 leading-none">
                      <span className="text-[6px] sm:text-[7px]">▲</span>
                      <span className="text-[6px] sm:text-[7px]">▼</span>
                    </div>
                  </div>
                  <div className="w-full h-0.5 bg-slate-700 rounded-full"></div>
                </div>
              </div>

              {/* Logo Typography */}
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-white text-base sm:text-lg tracking-wider uppercase leading-tight group-hover:text-amber-300 transition-colors">
                  JETLIFT
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-semibold tracking-[0.22em] sm:tracking-[0.25em] text-amber-400 leading-none">
                  STANDARD ELEVATORS
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="hover:text-amber-400 transition-colors duration-150 py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenWhatsAppModal?.()}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-emerald-400 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/60 border border-emerald-800/60 rounded-md transition-all duration-150 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </button>

              <button
                onClick={() => onOpenQuoteModal?.()}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-md shadow-md shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-150 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quote</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenQuoteModal?.()}
                className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 active:bg-amber-300 rounded-md min-h-[38px]"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-slate-300 hover:text-white active:bg-slate-800 rounded-md transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#060e1a] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal?.();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-3 text-xs font-bold text-slate-950 bg-amber-400 active:bg-amber-300 rounded-md shadow min-h-[44px]"
              >
                <FileText className="w-4 h-4" />
                <span>Request a Quote</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWhatsAppModal?.();
                }}
                className="w-full flex items-center justify-center gap-2 px-3 py-3 text-xs font-bold text-white bg-emerald-800/90 active:bg-emerald-700 rounded-md border border-emerald-700 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Chat</span>
              </button>
            </div>

            <div className="flex flex-col space-y-1 pt-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="flex items-center justify-between text-left px-3 py-3 text-sm font-medium text-slate-200 active:bg-slate-800 rounded-md transition-colors min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1.5">
              <p className="font-semibold text-slate-300">Operating Bases in Lagos:</p>
              <p>• Ikotun: No. 10 Rasaki Tijani Street, Off Igando–Ikotun Rd</p>
              <p>• Victoria Island: Plot 7 Nnamdi Azikiwe Road</p>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
