/**
 * JETLIFT STANDARD ELEVATORS COMPANY
 * Centralized Company Configuration File
 *
 * Update this single file whenever official contact details, phone numbers,
 * WhatsApp lines, email addresses, social media handles, or office addresses change.
 * 
 * NOTE: As per company policy, placeholders are strictly used until official
 * credentials are provided. Incomplete social media links will be hidden automatically.
 */

export interface ContactInfo {
  phone: {
    raw: string; // The formatted display phone number
    value: string; // E.164 clean number for tel: links (e.g., '2348000000000')
    isConfigured: boolean; // Set to true when actual company phone is provided
    placeholderLabel: string;
  };
  whatsapp: {
    number: string; // Clean international format without '+' or spaces, e.g. '2348012345678'
    isConfigured: boolean; // Set to true when actual WhatsApp number is provided
    placeholderLabel: string;
    defaultMessage: string;
  };
  email: {
    address: string;
    isConfigured: boolean; // Set to true when actual official email is provided
    placeholderLabel: string;
  };
  socialMedia: {
    facebook: { url: string; isConfigured: boolean; label: string };
    instagram: { url: string; isConfigured: boolean; label: string };
    linkedin: { url: string; isConfigured: boolean; label: string };
    tiktok: { url: string; isConfigured: boolean; label: string };
  };
}

export interface OfficeLocation {
  id: string;
  name: string;
  city: string;
  region: string;
  addressLines: string[];
  fullAddress: string;
  landmarks: string;
  googleMapsQuery: string;
  googleMapsUrl: string;
  googleMapsEmbedQuery: string;
  isMainOffice?: boolean;
}

export interface LeadershipProfile {
  id: string;
  name: string;
  role: string;
  title: string;
  description: string;
  avatarUrl?: string; // Optional custom portrait
}

export const COMPANY_CONFIG = {
  name: 'Jetlift Standard Elevators Company',
  shortName: 'Jetlift Standard Elevators',
  tagline: 'Reliable Elevator Solutions. Safe Vertical Movement.',
  heroSupportingText:
    'Jetlift Standard Elevators provides professional elevator installation, repairs, maintenance, upgrades, and lift supply solutions for residential and commercial properties.',
  trustStatement:
    'Professional Service | Safety-Focused Solutions | Reliable Technical Support',
  industry:
    'Elevator and lift installation, repairs, maintenance, sales, and technical services.',
  country: 'Nigeria',
  state: 'Lagos State',
  currentYear: new Date().getFullYear(),

  // Executive Leadership
  leadership: [
    {
      id: 'ceo',
      name: 'Mr Julius Omogiafo',
      role: 'Chief Executive Officer',
      title: 'Chief Executive Officer (CEO)',
      description:
        'Provides company leadership and strategic direction, with a focus on business development, service quality, customer relationships, and the long-term growth of Jetlift Standard Elevators.',
      avatarUrl: '', // Path to portrait if supplied: e.g. '/images/leadership/julius_omogiafo.jpg'
    },
    {
      id: 'manager',
      name: 'Mr Joshua Omogiafo',
      role: 'Manager',
      title: 'Manager',
      description:
        'Supports daily operations, service coordination, customer communication, and the organization of elevator maintenance and technical service activities.',
      avatarUrl: '', // Path to portrait if supplied: e.g. '/images/leadership/joshua_omogiafo.jpg'
    },
  ] as LeadershipProfile[],

  // Office Locations in Lagos State
  offices: [
    {
      id: 'ikotun',
      name: 'Office 1 — Ikotun Branch',
      city: 'Ikotun',
      region: 'Lagos Mainland',
      addressLines: [
        'No. 10 Rasaki Tijani Street,',
        'off Igando–Ikotun Road,',
        'Ikotun, Lagos State, Nigeria.',
      ],
      fullAddress:
        'No. 10 Rasaki Tijani Street, off Igando–Ikotun Road, Ikotun, Lagos State, Nigeria',
      landmarks: 'Off Igando-Ikotun Road, Alimosho Local Government Area',
      googleMapsQuery:
        'No. 10 Rasaki Tijani Street, off Igando–Ikotun Road, Ikotun, Lagos, Nigeria',
      googleMapsUrl:
        'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(
          'No. 10 Rasaki Tijani Street, off Igando–Ikotun Road, Ikotun, Lagos State, Nigeria'
        ),
      googleMapsEmbedQuery:
        'Rasaki+Tijani+Street+Ikotun+Lagos+Nigeria',
      isMainOffice: true,
    },
    {
      id: 'vi',
      name: 'Office 2 — Victoria Island Branch',
      city: 'Victoria Island',
      region: 'Lagos Island',
      addressLines: [
        'Plot 7 Nnamdi Azikiwe Road,',
        'Victoria Island,',
        'Lagos State, Nigeria.',
      ],
      fullAddress:
        'Plot 7 Nnamdi Azikiwe Road, Victoria Island, Lagos State, Nigeria',
      landmarks: 'Commercial and Business District, Victoria Island',
      googleMapsQuery:
        'Plot 7 Nnamdi Azikiwe Road, Victoria Island, Lagos, Nigeria',
      googleMapsUrl:
        'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent(
          'Plot 7 Nnamdi Azikiwe Road, Victoria Island, Lagos State, Nigeria'
        ),
      googleMapsEmbedQuery:
        'Nnamdi+Azikiwe+Road+Victoria+Island+Lagos+Nigeria',
      isMainOffice: false,
    },
  ] as OfficeLocation[],

  // Centralized Contact Settings
  contact: {
    phone: {
      raw: 'Technical Dispatch Desk',
      value: '', // e.g. '2348012345678'
      isConfigured: false,
      placeholderLabel: 'Lagos Technical Hotline',
    },
    whatsapp: {
      number: '', // e.g. '2348012345678' (international format without + or spaces)
      isConfigured: false,
      placeholderLabel: 'WhatsApp Operations Helpdesk',
      defaultMessage:
        'Hello Jetlift Standard Elevators, I would like to enquire about your elevator services. Please contact me with more information.',
    },
    email: {
      address: '', // e.g. 'info@jetliftelevators.com'
      isConfigured: false,
      placeholderLabel: 'Corporate Inquiries via Online Form',
    },
    socialMedia: {
      facebook: {
        url: '', // e.g. 'https://facebook.com/jetliftelevators'
        isConfigured: false,
        label: 'Facebook',
      },
      instagram: {
        url: '', // e.g. 'https://instagram.com/jetliftelevators'
        isConfigured: false,
        label: 'Instagram',
      },
      linkedin: {
        url: '', // e.g. 'https://linkedin.com/company/jetliftelevators'
        isConfigured: false,
        label: '[INSERT OFFICIAL COMPANY PAGE URL]',
      },
      tiktok: {
        url: '', // e.g. 'https://tiktok.com/@jetliftelevators'
        isConfigured: false,
        label: '[INSERT OFFICIAL PROFILE URL]',
      },
    },
  } as ContactInfo,

  // Working Hours for Lagos operations
  workingHours: {
    weekdays: 'Monday – Friday: 8:00 AM – 6:00 PM',
    saturday: 'Saturday: 9:00 AM – 3:00 PM',
    emergency: 'Emergency Technical Breakdown Support: Available on call subject to technician dispatch',
  },
};

/**
 * Builds a valid WhatsApp click-to-chat URL with a prefilled message.
 * Returns null if the WhatsApp number has not yet been configured.
 */
export function getWhatsAppUrl(customMessage?: string): string | null {
  if (!COMPANY_CONFIG.contact.whatsapp.isConfigured || !COMPANY_CONFIG.contact.whatsapp.number) {
    return null;
  }
  const cleanNumber = COMPANY_CONFIG.contact.whatsapp.number.replace(/\D/g, '');
  const msg = encodeURIComponent(customMessage || COMPANY_CONFIG.contact.whatsapp.defaultMessage);
  return `https://wa.me/${cleanNumber}?text=${msg}`;
}

/**
 * Generates a service-specific prefilled WhatsApp message.
 */
export function getServiceWhatsAppMessage(serviceName: string): string {
  return `Hello Jetlift Standard Elevators, I would like to enquire about your "${serviceName}" service for my building in Lagos. Please share information regarding site assessment and quotation.`;
}

/**
 * Generates quotation summary text for WhatsApp review and sending.
 */
export function formatQuotationForWhatsApp(data: {
  fullName: string;
  companyName?: string;
  phone: string;
  email?: string;
  preferredContact: string;
  serviceRequired: string;
  propertyType: string;
  propertyLocation: string;
  elevatorBrand?: string;
  problemDescription: string;
  preferredDate?: string;
}): string {
  return (
    `*NEW SERVICE ENQUIRY — JETLIFT STANDARD ELEVATORS*\n\n` +
    `👤 *Client Name:* ${data.fullName}\n` +
    (data.companyName ? `🏢 *Company/Org:* ${data.companyName}\n` : '') +
    `📞 *Phone:* ${data.phone}\n` +
    (data.email ? `✉️ *Email:* ${data.email}\n` : '') +
    `💬 *Preferred Contact:* ${data.preferredContact}\n` +
    `⚙️ *Service Required:* ${data.serviceRequired}\n` +
    `🏛️ *Property Type:* ${data.propertyType}\n` +
    `📍 *Location:* ${data.propertyLocation}\n` +
    (data.elevatorBrand ? `🏷️ *Elevator Brand/Model:* ${data.elevatorBrand}\n` : '') +
    (data.preferredDate ? `📅 *Preferred Date:* ${data.preferredDate}\n` : '') +
    `\n📝 *Project/Fault Details:*\n${data.problemDescription}\n\n` +
    `_Sent via Jetlift Standard Elevators Website Quote Request_`
  );
}
