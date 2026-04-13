import React, { useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import { tools } from '../mock';

const Tools = () => {
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

    const toolCards = document.querySelectorAll('.tool-category');
    toolCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    const iconMap = {
      'shield-check': LucideIcons.ShieldCheck,
      'cloud': LucideIcons.Cloud,
      'anchor': LucideIcons.Anchor,
      'lock': LucideIcons.Lock,
      'radio': LucideIcons.Radio,
      'smartphone': LucideIcons.Smartphone,
      'key': LucideIcons.Key,
      'fingerprint': LucideIcons.Fingerprint,
      'database': LucideIcons.Database,
      'shield': LucideIcons.Shield,
      'code': LucideIcons.Code,
      'terminal': LucideIcons.Terminal,
      'braces': LucideIcons.Braces,
      'api': LucideIcons.Webhook,
      'git-branch': LucideIcons.GitBranch,
      'cloud-cog': LucideIcons.CloudCog,
      'container': LucideIcons.Container,
      'boxes': LucideIcons.Boxes,
      'blocks': LucideIcons.Blocks
    };
    return iconMap[iconName] || LucideIcons.Box;
  };

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-[#0f1629] to-[#050816] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Tools & Technologies
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The platforms and technologies I work with to build secure identity solutions
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {tools.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="tool-category bg-[#0a0e27]/50 border border-cyan-500/20 rounded-xl p-8 backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-500 opacity-0 translate-y-10"
            >
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full mr-3" />
                {category.category}
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {category.items.map((tool, toolIndex) => {
                  const Icon = getIcon(tool.icon);
                  return (
                    <div
                      key={toolIndex}
                      className="flex items-center p-4 bg-cyan-500/5 border border-cyan-500/10 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300 group"
                    >
                      <div className="p-2 bg-cyan-500/10 rounded-lg mr-4 group-hover:bg-cyan-500/20 transition-all duration-300">
                        <Icon className="text-cyan-400" size={20} />
                      </div>
                      <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
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

export default Tools;
