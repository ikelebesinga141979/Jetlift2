import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectGallery } from './components/ProjectGallery';
import { Leadership } from './components/Leadership';
import { OfficeLocations } from './components/OfficeLocations';
import { QuoteForm } from './components/QuoteForm';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileQuickBar } from './components/MobileQuickBar';
import { QuoteModal } from './components/Modals/QuoteModal';
import { PrivacyModal } from './components/Modals/PrivacyModal';
import { TermsModal } from './components/Modals/TermsModal';
import { COMPANY_CONFIG, getWhatsAppUrl, getServiceWhatsAppMessage } from './config/company';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>();
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const handleOpenQuoteModal = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setQuoteModalOpen(true);
  };

  const handleOpenWhatsAppModal = (serviceName?: string) => {
    if (COMPANY_CONFIG.contact.whatsapp.isConfigured && COMPANY_CONFIG.contact.whatsapp.number) {
      const msg = serviceName
        ? getServiceWhatsAppMessage(serviceName)
        : COMPANY_CONFIG.contact.whatsapp.defaultMessage;
      const url = getWhatsAppUrl(msg);
      if (url) {
        window.open(url, '_blank', 'noopener,noreferrer');
        return;
      }
    }
    // If pending direct WhatsApp configuration, open quote modal prefilled with the service
    handleOpenQuoteModal(serviceName || 'WhatsApp Service Enquiry');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans selection:bg-amber-500 selection:text-white antialiased overflow-x-hidden">
      {/* Corporate Header */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenWhatsAppModal={handleOpenWhatsAppModal}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
        />

        {/* About Us */}
        <AboutUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Services */}
        <Services
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenWhatsAppModal={handleOpenWhatsAppModal}
        />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Project Gallery */}
        <ProjectGallery
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Executive Leadership */}
        <Leadership
          onOpenQuoteModal={handleOpenQuoteModal}
        />

        {/* Lagos Office Locations */}
        <OfficeLocations />

        {/* Main Quote & Inspection Form */}
        <QuoteForm />

        {/* Frequently Asked Questions */}
        <FaqSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Prominent Contact Section */}
        <ContactSection
          onOpenQuoteModal={handleOpenQuoteModal}
        />
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenTermsModal={() => setTermsModalOpen(true)}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Mobile-Only Bottom Sticky Action Bar */}
      <MobileQuickBar
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenWhatsAppModal={() => handleOpenWhatsAppModal()}
      />

      {/* Pop-up Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={preselectedService}
      />

      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />

      <TermsModal
        isOpen={termsModalOpen}
        onClose={() => setTermsModalOpen(false)}
      />
    </div>
  );
}
