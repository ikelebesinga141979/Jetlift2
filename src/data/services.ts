import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'elevator-installation',
    name: 'Elevator Installation',
    category: 'installation',
    shortDescription:
      'Professional installation solutions for suitable residential and commercial buildings, subject to site assessment and technical requirements.',
    fullDescription:
      'Jetlift Standard Elevators coordinates and executes structured elevator installation for new constructions and retrofit building projects in Lagos. All installations follow rigorous structural alignments, electrical connections, guide rail calibration, and baseline safety tests tailored to the specific shaft dimensions and load requirements.',
    keyPoints: [
      'Comprehensive pre-installation site assessment & shaft verification',
      'Residential passenger lifts, commercial passenger lifts, & service lifts',
      'Precision mechanical hoistway rigging & electrical cabling',
      'Systematic pre-commissioning safety & brake inspections',
    ],
    icon: 'Layers',
    suitableFor: [
      'New Residential Developments',
      'Commercial Office Towers',
      'Private Duplexes & Villas',
      'Hotels & Mixed-Use Plazas',
    ],
  },
  {
    id: 'elevator-repairs',
    name: 'Elevator Repairs',
    category: 'maintenance',
    shortDescription:
      'Fault diagnosis, troubleshooting, repair coordination, and restoration of elevator systems by qualified technicians.',
    fullDescription:
      'When an elevator malfunctions, prompt technical diagnosis is vital to protect building occupants and avoid cascading damage. Our technicians inspect mechanical drives, door locks, microcomputer controllers, leveling sensors, and traveling cables to isolate the root cause and execute safe repairs.',
    keyPoints: [
      'Root-cause electrical & mechanical fault diagnosis',
      'Door operator repairs, interlocks, and sensor replacements',
      'Traction drive, rope, and hoist motor corrective interventions',
      'Verification testing prior to returning elevator to active service',
    ],
    icon: 'Wrench',
    suitableFor: [
      'Offices with Malfunctioning Lifts',
      'Apartment Blocks with Stalled Cars',
      'Shopping Malls & Retail Centres',
    ],
  },
  {
    id: 'preventive-maintenance',
    name: 'Preventive Elevator Maintenance',
    category: 'maintenance',
    shortDescription:
      'Scheduled inspections, servicing, cleaning of relevant components, performance checks, and maintenance reporting.',
    fullDescription:
      'Regular servicing prevents costly breakdowns and extends equipment operational life. Our preventive routines cover hoistway lubrication, brake shoe adjustments, safety switch verifications, car door tracking, pit cleanouts, and ride quality balancing.',
    keyPoints: [
      'Scheduled monthly or quarterly multi-point inspections',
      'Lubrication of guide rails, bearings, and door mechanisms',
      'Electrical control panel dusting, wire tightness, & contactor checks',
      'Detailed maintenance report and advisory recommendations',
    ],
    icon: 'ShieldCheck',
    suitableFor: [
      'Residential Estates & Gated Communities',
      'Corporate Headquarters',
      'Hospitals & Medical Centres',
      'Hotels & Hospitality Facilities',
    ],
  },
  {
    id: 'emergency-breakdown',
    name: 'Emergency Breakdown Support',
    category: 'maintenance',
    shortDescription:
      'A dedicated contact route for customers experiencing elevator breakdowns. (Response times depend on location, technician availability, and the nature of the fault).',
    fullDescription:
      'Elevator breakdowns can disrupt tenants and pose serious inconveniences. Jetlift Standard Elevators maintains a direct technical triage route for urgent fault reports across Lagos. Response times vary depending on traffic conditions, technician dispatch availability, and the complexity of the fault.',
    keyPoints: [
      'Direct dispatch channel for urgent breakdown calls',
      'Immediate technical telephone triage to assess passenger safety',
      'Rapid deployment of field service personnel across Lagos',
      'Transparent communication regarding parts and repair timelines',
    ],
    icon: 'AlertTriangle',
    suitableFor: [
      'High-Occupancy Commercial Buildings',
      'Hospital Patient & Stretcher Lifts',
      'Residential High-Rise Complexes',
    ],
  },
  {
    id: 'elevator-sales-supply',
    name: 'Elevator Sales and Supply',
    category: 'installation',
    shortDescription:
      'Assistance with sourcing and supplying suitable elevator systems based on building requirements, capacity, budget, and specifications.',
    fullDescription:
      'Selecting the right vertical transport equipment requires balancing passenger traffic, architectural constraints, energy efficiency, and long-term maintenance costs. We assist property owners, architects, and developers in sourcing dependable elevator packages.',
    keyPoints: [
      'Traffic flow, cabin capacity, and speed requirement evaluations',
      'Passenger, panoramic glass, bed/stretcher, and goods lift models',
      'Energy-efficient gearless traction and machine-room-less (MRL) options',
      'Transparent procurement guidance without hidden markups',
    ],
    icon: 'ShoppingBag',
    suitableFor: [
      'Property Developers & Building Contractors',
      'Architects & Mechanical/Electrical (M&E) Consultants',
      'Estate Developers across Lagos',
    ],
  },
  {
    id: 'modernization-upgrades',
    name: 'Elevator Modernization and Upgrades',
    category: 'installation',
    shortDescription:
      'Assessment of existing elevator systems for suitable control, component, performance, and modernization improvements.',
    fullDescription:
      'Aging elevators often experience frequent breakdowns, jerky leveling, high power consumption, and outdated cabins. Modernization replaces outdated control logic, door operators, and aesthetics with modern, energy-efficient components without requiring a full structural replacement.',
    keyPoints: [
      'Microprocessor controller upgrades with variable frequency drives (VFD)',
      'Cabin interior refurbishments: stainless steel, LED lighting, & mirrors',
      'Landing operating panels (LOP) and car operating panels (COP) modernization',
      'Smoother leveling, reduced energy consumption, & enhanced safety features',
    ],
    icon: 'TrendingUp',
    suitableFor: [
      'Older Commercial Buildings in Marina / VI',
      'Residential Towers with Legacy Lift Controllers',
      'Hotels Seeking Upgraded Cabin Aesthetics',
    ],
  },
  {
    id: 'inspection-troubleshooting',
    name: 'Elevator Inspection and Troubleshooting',
    category: 'technical',
    shortDescription:
      'Technical assessment of reported faults and operating concerns, with recommendations for corrective work.',
    fullDescription:
      'Unusual sounds, erratic door cycles, vibration during travel, or intermittent safety circuit trips require systematic diagnostic testing. Our technicians use diagnostic meters and mechanical gauges to identify worn bearings, misaligned guide shoes, or intermittent relays.',
    keyPoints: [
      'Objective third-party condition surveys and audit reports',
      'Investigation of unusual noises, vibrations, or leveling errors',
      'Electrical safety interlock, governor, and safety gear verification',
      'Clear, actionable technical recommendations for building managers',
    ],
    icon: 'SearchCheck',
    suitableFor: [
      'Property Managers Taking Over New Buildings',
      'Facilities with Chronic Unresolved Lift Faults',
      'Insurance & Pre-Purchase Technical Audits',
    ],
  },
  {
    id: 'lift-parts-accessories',
    name: 'Lift Parts and Accessories',
    category: 'technical',
    shortDescription:
      'Enquiries for compatible elevator components and accessories, subject to availability and equipment specifications.',
    fullDescription:
      'Maintaining uptime depends on sourcing verified compatible spare parts. Jetlift Standard Elevators assists clients with identifying and acquiring quality elevator components, replacement contactors, door guide shoes, light curtains, and safety switches.',
    keyPoints: [
      'Enquiries for electrical contactors, relays, and power supplies',
      'Infrared safety light curtains, door rollers, and interlock contacts',
      'Guide shoe liners, push buttons, indicators, and traveling cables',
      'Equipment specification matching to ensure correct compatibility',
    ],
    icon: 'Package',
    suitableFor: [
      'In-House Facility Management Teams',
      'Elevator Maintenance Technicians & Contractors',
      'Building Maintenance Departments',
    ],
  },
  {
    id: 'elevator-consultation',
    name: 'Elevator Consultation',
    category: 'advisory',
    shortDescription:
      'Guidance for property owners, contractors, developers, facility managers, and building projects.',
    fullDescription:
      'Early vertical transportation planning prevents costly structural modifications down the line. We provide practical guidance on shaft dimensions, pit depth, overhead clearance, electrical power supply requirements, and expected passenger handling capacity.',
    keyPoints: [
      'Architectural review of lift shafts, pit depths, and headroom',
      'Power supply (generator/grid) and backup UPS capacity planning',
      'Lifecycle cost, maintenance feasibility, and equipment selection advice',
      'Independent technical review of contractor proposals',
    ],
    icon: 'FileText',
    suitableFor: [
      'Architectural & Engineering Design Firms',
      'General Building Contractors',
      'Real Estate Investors & Project Developers',
    ],
  },
  {
    id: 'maintenance-contracts',
    name: 'Maintenance Contracts',
    category: 'maintenance',
    shortDescription:
      'Scheduled servicing arrangements for residential estates, offices, hotels, hospitals, commercial buildings, and property managers.',
    fullDescription:
      'Ensure predictable operating budgets and sustained lift reliability with tailored service contracts. We offer structured routine servicing plans designed around your building’s traffic intensity and operating hours, with documented service records.',
    keyPoints: [
      'Customized monthly, bi-monthly, or quarterly servicing schedules',
      'Comprehensive preventive service checklist with signed maintenance logs',
      'Priority technician routing for scheduled contract holders',
      'Clear, structured commercial terms for facility managers and boards',
    ],
    icon: 'CalendarCheck',
    suitableFor: [
      'Residential Estates & Property Management Firms',
      'Hospitals & Healthcare Facilities',
      'Hotels, Event Venues, & Corporate Towers',
    ],
  },
];
