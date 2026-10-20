import React from 'react';
import {
  ShieldCheck,
  Target,
  Eye,
  CheckCircle,
  Award,
  Users,
  Compass,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_CONFIG } from '../config/company';
import machineRoomImg from '../assets/images/elevator_machine_room_1792502928130.jpg';

interface AboutUsProps {
  onOpenQuoteModal: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenQuoteModal }) => {
  const coreValues = [
    {
      title: 'Safety',
      description:
        'Zero compromise on passenger and technician safety. Every intervention adheres to strict mechanical locking, safety switch, and brake testing standards.',
      icon: ShieldCheck,
    },
    {
      title: 'Professionalism',
      description:
        'From prompt communication and transparent technical assessments to disciplined worksite housekeeping and accountable service delivery.',
      icon: Award,
    },
    {
      title: 'Integrity',
      description:
        'Honest equipment diagnosis, genuine component recommendations, and clear quotation processes without hidden charges or unnecessary replacements.',
      icon: Compass,
    },
    {
      title: 'Reliability',
      description:
        'Dependable elevator performance through thorough maintenance routines designed to prevent unexpected downtime and passenger inconvenience.',
      icon: CheckCircle,
    },
    {
      title: 'Quality Workmanship',
      description:
        'Precision alignment of guide rails, exact electrical wiring terminations, and diligent calibration of door operators and control systems.',
      icon: Target,
    },
    {
      title: 'Customer Satisfaction',
      description:
        'Attentive support for property owners, facility managers, estate associations, and hospital administrators across Lagos.',
      icon: Users,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
            <span className="w-6 h-0.5 bg-amber-500"></span>
            <span>Who We Are</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-slate-900 tracking-tight">
            About Jetlift Standard Elevators
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
            Jetlift Standard Elevators Company is dedicated to delivering dependable vertical
            transportation solutions, precision engineering workmanship, responsive technical
            assistance, and customer-focused service across Lagos State, Nigeria.
          </p>
        </div>

        {/* Narrative & Engineering Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20">
          
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              In modern residential and commercial properties, vertical mobility is not a luxury—it is
              a critical building infrastructure that directly impacts daily business operations, tenant
              wellbeing, accessibility, and property value.
            </p>
            <p>
              At <strong>Jetlift Standard Elevators</strong>, our core priority is safeguarding passenger
              security while ensuring smooth, continuous elevator operation. We focus on preventive
              servicing, rigorous fault diagnosis, and equipment reliability, helping building owners
              and facility managers prevent disruptive breakdowns before they occur.
            </p>
            <p>
              Whether installing passenger lifts in emerging residential complexes, modernizing legacy
              control systems in commercial towers, or managing scheduled servicing contracts, we build
              long-term relationships grounded in technical accountability and honest customer communication.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 rounded transition-colors shadow-xs min-h-[44px] cursor-pointer"
              >
                <span>Discuss Your Building Needs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#locations"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-4 text-center sm:text-left py-2"
              >
                Visit Our Lagos Offices
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <img
                src={machineRoomImg}
                alt="Jetlift Standard Elevators engineering equipment and traction motor"
                className="w-full h-[260px] sm:h-[320px] object-cover"
                loading="lazy"
              />
              <div className="p-4 bg-slate-900 text-white text-xs space-y-1">
                <p className="font-semibold text-amber-400">Technical Rigor &amp; Equipment Reliability</p>
                <p className="text-slate-300">
                  Precision maintenance of hoisting drives, safety governors, and electrical logic cabinets.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mission and Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          
          {/* Mission */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-lg p-6 sm:p-8 relative overflow-hidden">
            <div className="w-12 h-12 rounded bg-[#0a192f] text-amber-400 flex items-center justify-center mb-5 shadow-xs">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              To deliver safe, reliable, and high-efficiency vertical transportation solutions to building
              owners, developers, and facility managers across Nigeria through uncompromising technical
              standards, transparent customer communication, and proactive maintenance stewardship.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-lg p-6 sm:p-8 relative overflow-hidden">
            <div className="w-12 h-12 rounded bg-[#0a192f] text-amber-400 flex items-center justify-center mb-5 shadow-xs">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-display font-bold text-slate-900 mb-2">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
              To be recognized as the premier and most dependable elevator engineering and servicing
              partner in Lagos and across Nigeria, setting benchmark standards for safety, technical
              competence, and sustainable customer trust.
            </p>
          </div>

        </div>

        {/* Core Values */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600">Principles That Guide Us</span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mt-1">
              Our Core Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Every maintenance visit, installation project, and customer conversation is held to these six standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {coreValues.map((val) => {
              const IconComponent = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 hover:border-amber-400/80 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded bg-amber-50 text-amber-700">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className="font-display font-bold text-base text-slate-900">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
