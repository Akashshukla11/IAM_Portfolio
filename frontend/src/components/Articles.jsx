import React, { useEffect } from 'react';
import { Calendar, Clock, ExternalLink, Tag } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { articles } from '../mock';

const Articles = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, index * 80);
          }
        });
      },
      { threshold: 0.1 }
    );

    const articleCards = document.querySelectorAll('.article-card');
    articleCards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section id="articles" className="py-20 bg-gradient-to-b from-[#050816] to-[#0f1629] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Articles & Insights
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing knowledge and experiences in identity management and cybersecurity
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="article-card group bg-[#0a0e27]/50 border-cyan-500/20 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 opacity-0 translate-y-10 flex flex-col"
            >
              <CardHeader className="flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {formatDate(article.date)}
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock size={14} className="mr-1" />
                    {article.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors duration-300 leading-tight">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-gray-400 text-sm leading-relaxed mt-2">
                  {article.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10 text-xs"
                    >
                      <Tag size={10} className="mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all duration-300 group/btn"
                  onClick={() => window.open(article.url, '_blank')}
                >
                  Read Article
                  <ExternalLink size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </Button>
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

export default Articles;
