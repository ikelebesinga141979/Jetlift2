import React, { useState } from 'react';
import {
  Eye,
  X,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { ProjectItem } from '../types';

interface ProjectGalleryProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  onOpenQuoteModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterOptions = [
    { id: 'all', label: 'All Projects' },
    { id: 'maintenance', label: 'Elevator Maintenance' },
    { id: 'control', label: 'Control Equipment' },
    { id: 'installation', label: 'Installation & Servicing' },
    { id: 'troubleshooting', label: 'Technical Troubleshooting' },
  ];

  const filteredProjects = PROJECTS_DATA.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
              <span className="w-6 h-0.5 bg-amber-500"></span>
              <span>Fieldwork &amp; Technical Operations</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
              Our Projects &amp; Work Gallery
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              Real technical operations conducted across elevator shafts, electrical control rooms,
              and machine rooms across commercial and residential buildings in Lagos.
            </p>
          </div>

          <div className="self-start md:self-auto">
            <button
              onClick={() => onOpenQuoteModal('Elevator Inspection and Troubleshooting')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 rounded shadow-xs transition-colors cursor-pointer"
            >
              <span>Schedule Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-2 border-b border-slate-200 text-xs font-medium">
          {filterOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setActiveFilter(opt.id)}
              className={`px-3.5 py-2 rounded-md transition-colors cursor-pointer ${
                activeFilter === opt.id
                  ? 'bg-[#0a192f] text-white shadow-xs font-semibold'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col"
            >
              {/* Image Container with Hover Action */}
              <div className="relative h-60 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={project.imagePath}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Category Caption Badge */}
                <div className="absolute top-3 right-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-[#0a192f]/90 text-amber-300 border border-amber-400/30 rounded backdrop-blur-xs shadow-xs">
                    {project.caption}
                  </span>
                </div>

                {/* Zoom Click Overlay */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="absolute inset-0 bg-[#0a192f]/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer"
                  aria-label={`View enlarged image of ${project.title}`}
                >
                  <div className="px-4 py-2.5 bg-slate-900/95 text-white text-xs font-semibold rounded-md border border-slate-700 flex items-center gap-2 shadow-lg">
                    <Eye className="w-4 h-4 text-amber-400" />
                    <span>View Work Details</span>
                  </div>
                </button>
              </div>

              {/* Text Description Block */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono text-[11px] text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Safety Certified Operation
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-amber-700 hover:text-amber-800 font-semibold inline-flex items-center gap-1 cursor-pointer py-1"
                  >
                    <span>Inspect Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-lg max-w-3xl w-full overflow-hidden shadow-2xl relative text-white">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 p-2 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full z-10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative max-h-[50vh] sm:max-h-[60vh] bg-black flex items-center justify-center">
              <img
                src={selectedProject.imagePath}
                alt={selectedProject.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-5 sm:p-6 bg-slate-900 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400">
                  {selectedProject.caption}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Lagos State, Nigeria
                </span>
              </div>

              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                {selectedProject.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {selectedProject.worksiteNote && (
                <div className="p-3 bg-slate-800/80 rounded border border-slate-700 text-xs text-amber-300">
                  <span className="font-bold">Engineering Specification: </span>
                  <span>{selectedProject.worksiteNote}</span>
                </div>
              )}

              <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenQuoteModal(selectedProject.title);
                  }}
                  className="px-4 py-2 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded transition-colors cursor-pointer"
                >
                  Request Similar Service
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
