import React from 'react';
import { X, Settings, Image, Phone, Database, FileCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';

interface AdminConfigGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminConfigGuideModal: React.FC<AdminConfigGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-slate-300">
        
        {/* Header */}
        <div className="bg-[#0a192f] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-amber-400/20 text-amber-400 flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">
                Administrator &amp; Developer Configuration Guide
              </h3>
              <p className="text-xs text-amber-400 font-mono">
                Jetlift Standard Elevators Company — Management Documentation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded transition-colors"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
          
          {/* Section 1: Centralized Configuration File */}
          <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 space-y-2">
            <h4 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
              <Phone className="w-4 h-4 text-amber-600" />
              1. Updating Phone, WhatsApp, Email &amp; Social Links
            </h4>
            <p className="text-slate-600">
              All company contact information is centrally maintained in one file:
              <br />
              <code className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-mono text-xs">
                /src/config/company.ts
              </code>
            </p>
            <p className="text-slate-600">
              When Mr Julius Omogiafo or Mr Joshua Omogiafo supply the official phone numbers and email:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-slate-600">
              <li>Open <code>src/config/company.ts</code>.</li>
              <li>Under <code>contact.phone</code>: update <code>raw</code> (display format e.g. <code>+234 803 123 4567</code>), set <code>value</code> to <code>2348031234567</code>, and change <code>isConfigured: true</code>.</li>
              <li>Under <code>contact.whatsapp</code>: enter the clean number (e.g. <code>2348031234567</code>) and set <code>isConfigured: true</code>. Direct WhatsApp chat links will activate automatically!</li>
              <li>Under <code>contact.email</code>: set the official address and <code>isConfigured: true</code>.</li>
              <li>Under <code>contact.socialMedia</code>: fill in verified URLs and set <code>isConfigured: true</code>. Incomplete links remain hidden from public view until configured.</li>
            </ol>
          </div>

          {/* Section 2: Adding Worksite Photographs */}
          <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 space-y-2">
            <h4 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
              <Image className="w-4 h-4 text-amber-600" />
              2. Adding Worksite Photographs &amp; Official Logo
            </h4>
            <p className="text-slate-600">
              The project currently uses authentic worksite assets for:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Photograph 1:</strong> Field technician in white safety helmet and company work gear inspecting hoistway components.</li>
              <li><strong>Photograph 2:</strong> Technicians testing elevator microcomputer electrical control equipment.</li>
            </ul>
            <p className="text-slate-600 pt-1">
              To add new photographs or replace existing assets:
            </p>
            <ol className="list-decimal pl-5 space-y-1 text-slate-600">
              <li>Save your image files into <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-900 font-mono text-xs">/public/images/projects/</code> (or <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-900 font-mono text-xs">/src/assets/images/</code>).</li>
              <li>Open <code className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded font-mono text-xs">src/data/projects.ts</code> and add an entry with the title, caption, category, and whether it is an authentic worksite photo.</li>
              <li>To replace the text logo with a custom company logo graphic, update the logo container inside <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-900 font-mono text-xs">src/components/Header.tsx</code> and <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-900 font-mono text-xs">src/components/Footer.tsx</code> with an <code>&lt;img src="/images/logo.png" /&gt;</code> tag.</li>
              <li>To add portraits for Mr Julius Omogiafo and Mr Joshua Omogiafo, set their <code>avatarUrl</code> in <code>src/config/company.ts</code>.</li>
            </ol>
          </div>

          {/* Section 3: Connecting Real Backend for Quotes */}
          <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 space-y-2">
            <h4 className="font-display font-bold text-slate-900 text-sm flex items-center gap-2">
              <Database className="w-4 h-4 text-amber-600" />
              3. Backend Integration &amp; Deployment
            </h4>
            <p className="text-slate-600">
              The quote request form is equipped with two complementary delivery pipelines:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li><strong>Server-Side API:</strong> Calls <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-900 font-mono text-xs">POST /api/enquiries</code> on the Express fullstack server, which logs requests and issues real tracking codes (e.g. <code>JET-XXXXXX</code>).</li>
              <li><strong>WhatsApp Direct Transmission:</strong> A built-in fallback option allows the customer to format, review, and send their complete enquiry parameters directly into WhatsApp in one click.</li>
              <li><strong>Firebase Firestore:</strong> You can optionally connect Firebase by initializing the Firestore SDK in <code className="bg-slate-200 px-1.5 py-0.5 rounded text-slate-900 font-mono text-xs">src/lib/firebase.ts</code> to store enquiries in a cloud database.</li>
            </ul>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded shadow-xs"
          >
            Close Guide
          </button>
        </div>

      </div>
    </div>
  );
};
