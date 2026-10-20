import React, { useState } from 'react';
import {
  Wrench,
  ShieldCheck,
  AlertTriangle,
  ShoppingBag,
  TrendingUp,
  SearchCheck,
  Package,
  FileText,
  CalendarCheck,
  Layers,
  ArrowRight,
  MessageCircle,
  Check,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { ServiceItem } from '../types';

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
  onOpenWhatsAppModal: (serviceName?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  onOpenQuoteModal,
  onOpenWhatsAppModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers':
        return <Layers className="w-6 h-6 text-amber-500" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-amber-500" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      case 'AlertTriangle':
        return <AlertTriangle className="w-6 h-6 text-amber-500" />;
      case 'ShoppingBag':
        return <ShoppingBag className="w-6 h-6 text-amber-500" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-amber-500" />;
      case 'SearchCheck':
        return <SearchCheck className="w-6 h-6 text-amber-500" />;
      case 'Package':
        return <Package className="w-6 h-6 text-amber-500" />;
      case 'FileText':
        return <FileText className="w-6 h-6 text-amber-500" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-amber-500" />;
      default:
        return <Layers className="w-6 h-6 text-amber-500" />;
    }
  };

  const filteredServices = SERVICES_DATA.filter((srv) => {
    if (activeCategory === 'all') return true;
    return srv.category === activeCategory;
  });

  return (
    <section id="services" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <span className="w-6 h-0.5 bg-amber-500"></span>
              <span>Engineering &amp; Technical Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Our Elevator Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              End-to-end lift engineering solutions for residential complexes, commercial office buildings,
              hospitals, and industrial properties in Lagos, Nigeria.
            </p>
          </div>

          {/* Quick Request Button */}
          <button
            onClick={() => onOpenQuoteModal()}
            className="self-start md:self-auto inline-flex items-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded shadow-xs transition-colors cursor-pointer min-h-[44px]"
          >
            <span>Request Quotation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Category Filters (Mobile Horizontal Scroll) */}
        <div className="flex items-center gap-2 mb-8 pb-3 overflow-x-auto text-xs font-medium scrollbar-none">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-2 rounded-md whitespace-nowrap transition-colors cursor-pointer min-h-[38px] ${
              activeCategory === 'all'
                ? 'bg-[#0a192f] text-white font-semibold shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            All Services (10)
          </button>
          <button
            onClick={() => setActiveCategory('installation')}
            className={`px-3.5 py-2 rounded-md whitespace-nowrap transition-colors cursor-pointer min-h-[38px] ${
              activeCategory === 'installation'
                ? 'bg-[#0a192f] text-white font-semibold shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Installation &amp; Supply
          </button>
          <button
            onClick={() => setActiveCategory('maintenance')}
            className={`px-3.5 py-2 rounded-md whitespace-nowrap transition-colors cursor-pointer min-h-[38px] ${
              activeCategory === 'maintenance'
                ? 'bg-[#0a192f] text-white font-semibold shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Maintenance &amp; Repairs
          </button>
          <button
            onClick={() => setActiveCategory('technical')}
            className={`px-3.5 py-2 rounded-md whitespace-nowrap transition-colors cursor-pointer min-h-[38px] ${
              activeCategory === 'technical'
                ? 'bg-[#0a192f] text-white font-semibold shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Troubleshooting &amp; Parts
          </button>
          <button
            onClick={() => setActiveCategory('advisory')}
            className={`px-3.5 py-2 rounded-md whitespace-nowrap transition-colors cursor-pointer min-h-[38px] ${
              activeCategory === 'advisory'
                ? 'bg-[#0a192f] text-white font-semibold shadow-xs'
                : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
            }`}
          >
            Consultation &amp; Planning
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 flex flex-col justify-between hover:border-amber-400 hover:shadow-lg transition-all duration-200 group"
            >
              <div>
                {/* Icon & Category Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#0a192f]/5 flex items-center justify-center group-hover:bg-[#0a192f] group-hover:text-amber-400 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono uppercase text-slate-500 tracking-wider">
                    {service.category}
                  </span>
                </div>

                {/* Service Name */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {service.name}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDescription}
                </p>

                {/* Key Points Preview */}
                <ul className="space-y-1.5 mb-6 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  {service.keyPoints.slice(0, 2).map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                {/* Enquire About This Service (Quote Form) */}
                <button
                  onClick={() => onOpenQuoteModal(service.name)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded transition-colors cursor-pointer min-h-[44px]"
                >
                  <span>Enquire Service</span>
                  <ArrowRight className="w-3 h-3" />
                </button>

                {/* WhatsApp Enquiry with Service Name */}
                <button
                  onClick={() => onOpenWhatsAppModal(service.name)}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 active:bg-emerald-200 border border-emerald-200 rounded transition-colors cursor-pointer min-h-[44px]"
                  title="WhatsApp enquiry with service details"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Safety & Compliance Notice */}
        <div className="mt-10 sm:mt-12 bg-white border-l-4 border-amber-500 p-4 rounded-r shadow-2xs text-xs text-slate-600 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <span className="font-bold text-slate-900">Emergency Breakdown Protocol: </span>
            <span>
              For emergency breakdown situations, response times depend on traffic conditions, technician
              geographic availability, and the specific technical nature of the fault.
            </span>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Emergency Breakdown Support')}
            className="shrink-0 text-amber-700 hover:text-amber-800 font-bold underline underline-offset-2 py-1"
          >
            Log Emergency Call
          </button>
        </div>

      </div>
    </section>
  );
};
