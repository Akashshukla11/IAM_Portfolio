import React, { useEffect, useRef } from 'react';
import { ExternalLink, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { projects } from '../mock';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0f1629] to-[#050816] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div ref={projectsRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my key IAM implementations and security projects that have made a real impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="project-card group bg-[#0a0e27]/50 border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 opacity-0 translate-y-10"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    variant="outline"
                    className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
                  >
                    {project.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {project.year}
                  </div>
                </div>
                <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-base leading-relaxed mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-2 flex items-center">
                    <Award size={14} className="mr-1" />
                    Key Outcomes:
                  </h4>
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-start">
                        <span className="text-cyan-400 mr-2">▹</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
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

export default Projects;
