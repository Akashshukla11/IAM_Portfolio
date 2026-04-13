import React, { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { skills, certifications } from '../mock';

const Skills = () => {
  const skillsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryColor = (category) => {
    const colors = {
      core: 'from-cyan-500 to-blue-500',
      protocols: 'from-blue-500 to-purple-500',
      architecture: 'from-purple-500 to-pink-500',
      security: 'from-pink-500 to-red-500',
      governance: 'from-red-500 to-orange-500',
      compliance: 'from-orange-500 to-yellow-500'
    };
    return colors[category] || 'from-cyan-500 to-blue-500';
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#050816] to-[#0f1629] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div ref={skillsRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 translate-y-10 transition-all duration-1000">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Core competencies in identity and access management, security, and compliance
          </p>
        </div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#0a0e27]/50 border border-cyan-500/20 rounded-lg p-6 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-white font-medium">{skill.name}</h3>
                  <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getCategoryColor(skill.category)} rounded-full transition-all duration-1000 ease-out`}
                    style={{
                      width: isVisible ? `${skill.level}%` : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-[#0a0e27]/50 border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Award className="text-cyan-400" size={20} />
                    <span className="text-gray-500 text-sm">{cert.year}</span>
                  </div>
                  <CardTitle className="text-lg text-white leading-tight">
                    {cert.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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

export default Skills;
