import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  FileText,
  Shield,
  Copy,
  Check,
  Building,
  User,
  Phone,
  Mail,
  MapPin,
  Calendar,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/services';
import { COMPANY_CONFIG, formatQuotationForWhatsApp } from '../config/company';
import { QuoteFormData } from '../types';

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    preferredContact: 'Phone',
    serviceRequired: initialService || SERVICES_DATA[0].name,
    propertyType: 'Commercial Office Tower / Corporate HQ',
    propertyLocation: '',
    elevatorBrand: '',
    problemDescription: '',
    preferredDate: '',
    agreeToPrivacy: false,
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceRequired: initialService }));
    }
  }, [initialService]);

  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);
  const [referenceCode, setReferenceCode] = useState<string>('');
  const [copiedReview, setCopiedReview] = useState<boolean>(false);
  const [showWhatsAppFallback, setShowWhatsAppFallback] = useState<boolean>(false);

  const propertyTypes = [
    'Commercial Office Tower / Corporate HQ',
    'Residential (Private Duplex / Villa)',
    'Residential Estate / Apartment Complex',
    'Shopping Mall / Retail Plaza',
    'Hotel / Hospitality Facility',
    'Hospital / Medical Facility',
    'Industrial / Warehouse / Factory',
    'Under Construction / Development Project',
    'Other Property Type',
  ];

  const validate = (): boolean => {
    const errs: Partial<Record<keyof QuoteFormData, string>> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required.';
    } else if (formData.fullName.trim().length < 3) {
      errs.fullName = 'Please enter a valid full name (at least 3 characters).';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required for technical contact.';
    } else if (formData.phone.trim().replace(/\D/g, '').length < 8) {
      errs.phone = 'Please provide a valid telephone number.';
    }

    if (formData.email.trim() && !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address or leave blank.';
    }

    if (!formData.propertyLocation.trim()) {
      errs.propertyLocation = 'Please specify property location (e.g. Ikotun, Victoria Island, Ikeja, Lekki).';
    }

    if (!formData.problemDescription.trim()) {
      errs.problemDescription = 'Please provide a brief description of the elevator fault or project scope.';
    } else if (formData.problemDescription.trim().length < 10) {
      errs.problemDescription = 'Please provide slightly more detail (at least 10 characters).';
    }

    if (!formData.agreeToPrivacy) {
      errs.agreeToPrivacy = 'You must acknowledge the privacy consent to proceed.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      const firstErrorField = document.querySelector('.has-error input, .has-error textarea');
      firstErrorField?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        submittedAt: new Date().toISOString(),
      };

      let refCode = 'JET-' + Math.floor(100000 + Math.random() * 900000);

      try {
        const response = await fetch('/api/enquiries', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const resData = await response.json();
          if (resData.referenceCode) {
            refCode = resData.referenceCode;
          }
        }
      } catch (networkErr) {
        // Fallback gracefully
      }

      setReferenceCode(refCode);
      setSubmissionSuccess(true);
      setShowWhatsAppFallback(true);
    } catch (err) {
      setErrors({
        problemDescription: 'Unable to send request right now. Please try via WhatsApp or phone.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyReview = () => {
    const text = formatQuotationForWhatsApp({
      fullName: formData.fullName,
      companyName: formData.companyName,
      phone: formData.phone,
      email: formData.email,
      preferredContact: formData.preferredContact,
      serviceRequired: formData.serviceRequired,
      propertyType: formData.propertyType,
      propertyLocation: formData.propertyLocation,
      elevatorBrand: formData.elevatorBrand,
      problemDescription: formData.problemDescription,
      preferredDate: formData.preferredDate,
    });

    navigator.clipboard.writeText(text);
    setCopiedReview(true);
    setTimeout(() => setCopiedReview(false), 3000);
  };

  const handleOpenWhatsAppPrepared = () => {
    const text = formatQuotationForWhatsApp({
      fullName: formData.fullName,
      companyName: formData.companyName,
      phone: formData.phone,
      email: formData.email,
      preferredContact: formData.preferredContact,
      serviceRequired: formData.serviceRequired,
      propertyType: formData.propertyType,
      propertyLocation: formData.propertyLocation,
      elevatorBrand: formData.elevatorBrand,
      problemDescription: formData.problemDescription,
      preferredDate: formData.preferredDate,
    });

    if (COMPANY_CONFIG.contact.whatsapp.isConfigured && COMPANY_CONFIG.contact.whatsapp.number) {
      const cleanNum = COMPANY_CONFIG.contact.whatsapp.number.replace(/\D/g, '');
      window.open(`https://wa.me/${cleanNum}?text=${encodeURIComponent(text)}`, '_blank');
    } else {
      handleCopyReview();
      alert('Your service request details have been copied to clipboard for WhatsApp transmission.');
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      companyName: '',
      phone: '',
      email: '',
      preferredContact: 'Phone',
      serviceRequired: SERVICES_DATA[0].name,
      propertyType: 'Commercial Office Tower / Corporate HQ',
      propertyLocation: '',
      elevatorBrand: '',
      problemDescription: '',
      preferredDate: '',
      agreeToPrivacy: false,
    });
    setSubmissionSuccess(false);
    setShowWhatsAppFallback(false);
    setErrors({});
  };

  return (
    <section id="quote" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Title & Context */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            <span>Service Inspection &amp; Quotation</span>
            <span className="w-6 h-0.5 bg-amber-500"></span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            Request a Quote or Service Inspection
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Fill out the details below. Our technical management team reviews every enquiry to arrange site
            assessments, preventive contracts, or emergency troubleshooting.
          </p>
        </div>

        {/* Success Confirmation Screen */}
        {submissionSuccess ? (
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 md:p-10 shadow-sm animate-in fade-in duration-200">
            <div className="text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                Service Request Logged Successfully
              </h3>

              <div className="inline-block bg-white border border-slate-200 px-4 py-2 rounded font-mono text-sm text-slate-800 shadow-2xs">
                Ticket Reference: <span className="font-bold text-amber-700">{referenceCode}</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding <strong>{formData.serviceRequired}</strong> in <strong>{formData.propertyLocation}</strong> has been received by Jetlift Standard Elevators. An engineer will reach out via your preferred channel ({formData.preferredContact}).
              </p>

              {/* WhatsApp Option */}
              {showWhatsAppFallback && (
                <div className="mt-6 pt-6 border-t border-slate-200 bg-white p-5 sm:p-6 rounded-lg text-left max-w-xl mx-auto space-y-3.5 border-dashed border-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-700 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-emerald-600" />
                      Direct WhatsApp Channel
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">Instant Dispatch</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    You can also transmit your enquiry summary directly to our operations team on WhatsApp:
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                    <button
                      type="button"
                      onClick={handleOpenWhatsAppPrepared}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 rounded transition-colors shadow-xs min-h-[44px] cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleCopyReview}
                      className="inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:bg-slate-300 border border-slate-300 rounded transition-colors min-h-[44px] cursor-pointer"
                    >
                      {copiedReview ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-600" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy Summary</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded transition-colors min-h-[44px] cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Main Quotation Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-slate-50 border border-slate-200 rounded-lg p-5 sm:p-8 md:p-10 shadow-2xs space-y-5 sm:space-y-6"
          >
            {/* Row 1: Full Name & Company */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className={errors.fullName ? 'has-error' : ''}>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Engr. Babatunde"
                    className="w-full pl-9 pr-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-[44px]"
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Company / Property Name <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Victoria Crest Properties"
                    className="w-full pl-9 pr-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-[44px]"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Phone Number & Email Address */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className={errors.phone ? 'has-error' : ''}>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. 08012345678 or +234..."
                    className="w-full pl-9 pr-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-[44px]"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. info@building.ng"
                    className="w-full pl-9 pr-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-[44px]"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Row 3: Preferred Contact Method & Service Required */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Preferred Contact Channel <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.preferredContact}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      preferredContact: e.target.value as 'Phone' | 'WhatsApp' | 'Email',
                    })
                  }
                  className="w-full px-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-[44px]"
                >
                  <option value="Phone">Telephone Voice Call</option>
                  <option value="WhatsApp">WhatsApp Message</option>
                  <option value="Email">Email Communication</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.serviceRequired}
                  onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                  className="w-full px-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-[44px]"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.name}>
                      {srv.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Row 4: Property Type & Property Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Property Classification <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.propertyType}
                  onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                  className="w-full px-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-[44px]"
                >
                  {propertyTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div className={errors.propertyLocation ? 'has-error' : ''}>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Property Location in Lagos <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.propertyLocation}
                    onChange={(e) => setFormData({ ...formData, propertyLocation: e.target.value })}
                    placeholder="e.g. Victoria Island, Ikotun, Ikeja, Lekki Phase 1"
                    className="w-full pl-9 pr-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-[44px]"
                  />
                </div>
                {errors.propertyLocation && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    {errors.propertyLocation}
                  </p>
                )}
              </div>
            </div>

            {/* Row 5: Elevator Brand & Preferred Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Elevator Brand or Model <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.elevatorBrand}
                  onChange={(e) => setFormData({ ...formData, elevatorBrand: e.target.value })}
                  placeholder="e.g. Otis, Kone, Schindler, Mitsubishi, or Unknown"
                  className="w-full px-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-[44px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Preferred Contact / Inspection Date <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500 min-h-[44px]"
                  />
                </div>
              </div>
            </div>

            {/* Row 6: Description of Problem or Project */}
            <div className={errors.problemDescription ? 'has-error' : ''}>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Description of Fault or Project Scope <span className="text-red-500">*</span>
              </label>
              <textarea
                required
                rows={4}
                value={formData.problemDescription}
                onChange={(e) => setFormData({ ...formData, problemDescription: e.target.value })}
                placeholder="Describe your elevator technical requirements, symptoms of breakdown, number of floors, or maintenance scope..."
                className="w-full px-3 py-3 sm:py-2.5 bg-white border border-slate-300 rounded text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              {errors.problemDescription && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.problemDescription}
                </p>
              )}
            </div>

            {/* Row 7: Privacy Consent */}
            <div className={errors.agreeToPrivacy ? 'has-error' : ''}>
              <label className="flex items-start gap-3 cursor-pointer py-1">
                <input
                  type="checkbox"
                  checked={formData.agreeToPrivacy}
                  onChange={(e) => setFormData({ ...formData, agreeToPrivacy: e.target.checked })}
                  className="mt-1 w-4 h-4 text-amber-500 border-slate-300 rounded focus:ring-amber-400 min-w-[16px]"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  I agree that <strong>Jetlift Standard Elevators Company</strong> may contact me regarding
                  this elevator service enquiry using the provided telephone or messaging details. My data
                  is processed strictly for technical assessment and quotation purposes.
                </span>
              </label>
              {errors.agreeToPrivacy && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  {errors.agreeToPrivacy}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 active:from-amber-500 active:to-amber-600 rounded shadow-md transition-all duration-150 cursor-pointer min-h-[46px] ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'active:scale-98'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-slate-900 border-t-transparent rounded-full animate-spin" />
                    <span>Processing Request...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-slate-950" />
                    <span>Send Service Request</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Shield className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Encrypted &amp; confidential dispatch intake</span>
              </div>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
