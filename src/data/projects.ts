import { ProjectItem } from '../types';

import technicianHelmetImg from '../assets/images/elevator_technician_helmet_1792502909168.jpg';
import controlPanelImg from '../assets/images/elevator_control_panel_1792502909869.jpg';
import cabinInteriorImg from '../assets/images/elevator_cabin_interior_1792502927795.jpg';
import machineRoomImg from '../assets/images/elevator_machine_room_1792502928130.jpg';

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-1',
    title: 'Elevator Maintenance & Hoistway Safety Inspection',
    category: 'maintenance',
    caption: 'Elevator Maintenance',
    description:
      'Scheduled preventive servicing and mechanical inspection of elevator car suspension ropes, guide shoe clearances, and hoistway safety switches conducted by our certified field technician wearing standard safety helmet and company protective gear.',
    imagePath: technicianHelmetImg,
    isAuthenticWorksitePhoto: true,
    worksiteNote:
      'Hoistway inspection: Field technician verifying car top emergency stop, suspension wire rope tension, and guide shoe tolerances.',
    dateAdded: 'October 2026',
  },
  {
    id: 'project-2',
    title: 'Microcomputer Control Cabinet Diagnostics',
    category: 'control',
    caption: 'Elevator Control Equipment',
    description:
      'Technical electrical diagnosis, relay logic verification, and signal cable harness continuity testing on a multi-floor elevator microprocessor control panel in a building machine room.',
    imagePath: controlPanelImg,
    isAuthenticWorksitePhoto: true,
    worksiteNote:
      'Machine room diagnostics: Senior technicians testing microprocessor terminal blocks, relay coil voltages, and safety circuitry.',
    dateAdded: 'October 2026',
  },
  {
    id: 'project-3',
    title: 'Elevator Traction Machine & Hoist Mechanism',
    category: 'installation',
    caption: 'Installation and Servicing',
    description:
      'Heavy-duty elevator traction machine motor, steel wire suspension sheaves, and mechanical governor safety gear within an overhead elevator mechanical room.',
    imagePath: machineRoomImg,
    isAuthenticWorksitePhoto: true,
    worksiteNote:
      'Traction hoist motor calibration and speed governor safety tensioning in commercial overhead machine room.',
    dateAdded: 'October 2026',
  },
  {
    id: 'project-4',
    title: 'Luxury Passenger Cabin Modernization',
    category: 'troubleshooting',
    caption: 'Technical Troubleshooting',
    description:
      'Finished elevator car interior featuring brushed gold stainless steel trims, illuminated digital floor display panel, mirror back wall, and precision door operators.',
    imagePath: cabinInteriorImg,
    isAuthenticWorksitePhoto: true,
    worksiteNote:
      'Architectural cabin fit-out featuring brushed stainless steel trims and microprocessor floor indicators.',
    dateAdded: 'October 2026',
  },
];
