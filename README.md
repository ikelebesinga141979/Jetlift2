# Jetlift Standard Elevators Company — Official Website

Modern, responsive, professional corporate website for **Jetlift Standard Elevators Company**, an elevator services company operating across Lagos, Nigeria (Ikotun & Victoria Island branches).

Built with React 19, TypeScript, Tailwind CSS, Express, and Lucide icons.

---

## 1. Company Overview

- **Company Name:** Jetlift Standard Elevators Company
- **Industry:** Elevator and lift installation, repairs, maintenance, sales, and technical services
- **Executive Leadership:**
  - **CEO:** Mr Julius Omogiafo
  - **Manager:** Mr Joshua Omogiafo
- **Operating Bases in Lagos State, Nigeria:**
  - **Office 1 (Mainland):** No. 10 Rasaki Tijani Street, off Igando–Ikotun Road, Ikotun, Lagos State, Nigeria.
  - **Office 2 (Island):** Plot 7 Nnamdi Azikiwe Road, Victoria Island, Lagos State, Nigeria.

---

## 2. Centralized Configuration File (`src/config/company.ts`)

All phone numbers, WhatsApp lines, email addresses, social media links, leadership profiles, and office locations are centralized in:

```
src/config/company.ts
```

### How to Update Contact Details:
Open `src/config/company.ts`:

1. **Phone Number:**
   ```ts
   phone: {
     raw: '+234 803 123 4567', // Visual display
     value: '2348031234567',    // Clean tel: format
     isConfigured: true,        // Activates click-to-call
   }
   ```
2. **WhatsApp Chat:**
   ```ts
   whatsapp: {
     number: '2348031234567',   // International number without '+' or spaces
     isConfigured: true,        // Activates direct WhatsApp button
   }
   ```
3. **Email Address:**
   ```ts
   email: {
     address: 'contact@jetliftstandard.com',
     isConfigured: true,
   }
   ```
4. **Social Media:**
   Set `url` and `isConfigured: true` for Facebook, Instagram, LinkedIn, and TikTok. Incomplete social links are automatically hidden from public view until configured.

---

## 3. Worksite Photographs & Logo Customization

### Supplied Authentic Worksite Photographs
The project comes pre-configured with authentic worksite imagery matching:
1. **Photograph 1:** Field technician wearing a white industrial safety helmet and company work gear inspecting hoistway components.
2. **Photograph 2:** Technicians testing elevator microcomputer electrical control equipment.
3. **Engineering References:** Traction hoist machine room and luxury passenger car interior (transparently marked as engineering references).

### How to Add New Project Photos:
1. Place your new image files into `public/images/projects/` or `src/assets/images/`.
2. Open `src/data/projects.ts` and add a new item:
   ```ts
   {
     id: 'project-new',
     title: 'Installation at Lekki Phase 1',
     category: 'installation',
     caption: 'Installation and Servicing',
     description: 'Field installation of 8-passenger gearless traction lift...',
     imagePath: '/images/projects/my-new-photo.jpg',
     isAuthenticWorksitePhoto: true,
     worksiteNote: 'Lagos site commissioning',
     dateAdded: 'November 2026'
   }
   ```

### How to Add Official Leadership Portraits:
In `src/config/company.ts`, update `avatarUrl` under `leadership`:
```ts
avatarUrl: '/images/leadership/julius_omogiafo.jpg'
avatarUrl: '/images/leadership/joshua_omogiafo.jpg'
```

### How to Swap the Logo:
In `src/components/Header.tsx` and `src/components/Footer.tsx`, replace the SVG elevator badge with an `<img>` tag pointing to your official company logo file (e.g. `/images/jetlift-logo.png`).

---

## 4. Key Website Sections

1. **Header & Sticky Bar:** Lagos office presence indicator, phone hotline status, quick quote button, mobile drawer menu.
2. **Hero Section:**
   - Headline: *“Reliable Elevator Solutions. Safe Vertical Movement.”*
   - Supporting text: *“Jetlift Standard Elevators provides professional elevator installation, repairs, maintenance, upgrades, and lift supply solutions for residential and commercial properties.”*
   - Direct CTA buttons: "Request a Quote", "Chat With Us on WhatsApp", and telephone action.
   - Trust Statement: *“Professional Service | Safety-Focused Solutions | Reliable Technical Support”*.
3. **About Us:** Mission, Vision, and 6 Core Values (Safety, Professionalism, Integrity, Reliability, Quality Workmanship, Customer Satisfaction).
4. **Our Services (All 10 Services):**
   - Elevator Installation
   - Elevator Repairs
   - Preventive Elevator Maintenance
   - Emergency Breakdown Support (with location & availability notice)
   - Elevator Sales and Supply
   - Elevator Modernization and Upgrades
   - Elevator Inspection and Troubleshooting
   - Lift Parts and Accessories
   - Elevator Consultation
   - Maintenance Contracts
   - Each card features an enquiry modal trigger and WhatsApp prefilled message action.
5. **Why Choose Us:** 7 engineering and communication pillars.
6. **Project Gallery:** Filterable showcase with authentic worksite assets, lightbox modal, and transparency disclosures.
7. **Leadership Profiles:** Dedicated cards for CEO Mr Julius Omogiafo and Manager Mr Joshua Omogiafo with exact descriptions.
8. **Office Locations:** Dual cards for Ikotun and Victoria Island with verified Google Maps search links.
9. **Request a Quote Form:**
   - Full Name, Company, Phone, Email, Preferred Contact, Service Required, Property Type, Lagos Location, Brand/Model, Fault Description, Preferred Date, and Privacy Consent.
   - Live validation, anti-duplicate submission lock, reference code generator, and WhatsApp transmission fallback.
10. **Frequently Asked Questions (FAQ):** Accordion with all 9 questions and search filter.
11. **Contact Us Section:** Verified corporate data and offices.
12. **Floating WhatsApp Button:** Sticky launcher with preview modal.
13. **Footer:** Quick links, verified offices, Privacy Policy modal, Terms of Service modal, and Admin Guide.

---

## 5. Development & Deployment

### Running Locally
```bash
npm install
npm run dev
```
The server will start at `http://localhost:3000` with the Express API and Vite middleware.

### Production Build
```bash
npm run build
npm start
```

### Backend API Endpoint
- `POST /api/enquiries`: Validates and records quote submissions, returning a reference tracking number (`JET-XXXXXX`).
- `GET /api/enquiries`: Returns logged submissions.

---

## 6. SEO & Schema.org Structured Data
- Schema.org `HomeAndConstructionBusiness` structured data embedded in `index.html`.
- OpenGraph and Twitter cards configured for social sharing.
- Optimized for targeted Lagos queries:
  - *Elevator company in Lagos*
  - *Elevator repairs in Lagos*
  - *Elevator maintenance in Lagos*
  - *Lift installation in Lagos*
  - *Elevator servicing in Ikotun*
  - *Elevator maintenance in Victoria Island*
