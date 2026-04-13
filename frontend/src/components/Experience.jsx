import React, { useEffect, useRef } from 'react';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../mock';

const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('animate-in');
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#0f1629] to-[#050816] relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div ref={sectionRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 translate-y-10 transition-all duration-1000">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey in Identity and Access Management
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 to-blue-500/50 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Dot on timeline */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#050816] transform md:-translate-x-1/2 mt-6 z-10" />

              {/* Empty space for opposite side */}
              <div className="hidden md:block md:w-1/2" />

              {/* Card */}
              <div className="ml-8 md:ml-0 md:w-1/2 md:px-8">
                <div className="bg-[#0a0e27]/50 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                  {/* Role & Type */}
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-xs px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  {/* Company */}
                  <div className="flex items-center gap-2 text-cyan-400 font-medium mb-1">
                    <Briefcase size={14} />
                    <span>{exp.company}</span>
                  </div>

                  {/* Location & Duration */}
                  <div className="flex flex-wrap gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={13} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={13} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4">{exp.description}</p>

                  {/* Responsibilities */}
                  <ul className="space-y-1 mb-4">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <ChevronRight size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Experience;
