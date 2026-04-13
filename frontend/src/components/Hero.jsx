import React, { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, FileDown, ExternalLink, Shield, Lock, KeyRound } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mock';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleDownloadResume = () => {
    // In real implementation, this would download the actual resume
    alert('Resume download would start here');
  };

  const socialLinks = [
    { icon: Github, url: personalInfo.social.github, label: 'GitHub' },
    { icon: Linkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: ExternalLink, url: personalInfo.social.medium, label: 'Medium' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-[#050816] via-[#0a0e27] to-[#0f1629]">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Floating security icons */}
      <div className="absolute top-20 right-20 opacity-10 animate-float hidden lg:block">
        <Shield size={80} className="text-cyan-400" />
      </div>
      <div className="absolute bottom-40 left-20 opacity-10 animate-float-delayed hidden lg:block">
        <Lock size={60} className="text-blue-400" />
      </div>
      <div className="absolute top-1/2 right-40 opacity-10 animate-float-slow hidden lg:block">
        <KeyRound size={70} className="text-cyan-300" />
      </div>

      <div ref={heroRef} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 opacity-0 translate-y-10 transition-all duration-1000">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              {/* Greeting */}
              <div className="inline-block mb-6 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
                <span className="text-cyan-400 text-sm font-medium">👋 Hello, I'm</span>
              </div>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent leading-tight">
                {personalInfo.name}
              </h1>

              {/* Title with animated underline */}
              <div className="mb-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-cyan-400 inline-block relative">
                  {personalInfo.title}
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                </h2>
              </div>

              {/* Tagline */}
              <p className="text-lg sm:text-xl text-gray-400 mb-6 leading-relaxed">
                {personalInfo.tagline}
              </p>

              {/* Bio */}
              <p className="text-base text-gray-300 mb-8 leading-relaxed">
                {personalInfo.bio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-8">
                <Button
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) {
                      const offset = 80;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - offset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                    }
                  }}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg rounded-lg font-medium shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
                >
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Button>
                <Button
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 px-8 py-6 text-lg rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  <FileDown className="mr-2" size={20} />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Profile Picture */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative group">
                {/* Animated border rings */}
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 animate-pulse"></div>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow"></div>
                
                {/* Profile image container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  {/* Hexagonal frame effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full border-4 border-cyan-500/30"></div>
                  
                  {/* Profile picture - Using a placeholder that can be replaced */}
                  <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-[#0a0e27] to-[#050816] border-2 border-cyan-500/50 flex items-center justify-center">
                    <img
                      src="/photo.jpg"
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-2xl shadow-xl shadow-cyan-500/30 border border-cyan-400/50 backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300">
                    <div className="flex items-center gap-2">
                      <Shield className="text-white" size={24} />
                      <div className="text-left">
                        <div className="text-xs text-cyan-100 font-semibold">Certified</div>
                        <div className="text-xs text-white">IAM Expert</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tech stack badges around the image */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm hidden sm:block">
                  <span className="text-cyan-300 text-xs font-medium">OAuth 2.0</span>
                </div>
                <div className="absolute top-1/4 -left-8 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full backdrop-blur-sm hidden lg:block">
                  <span className="text-blue-300 text-xs font-medium">Zero Trust</span>
                </div>
                <div className="absolute top-1/4 -right-8 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm hidden lg:block">
                  <span className="text-cyan-300 text-xs font-medium">SAML</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cyan-400 rounded-full" />
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-25px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
