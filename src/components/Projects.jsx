import React, { useState } from 'react';
import { FolderGit2, Sparkles, Filter } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects({ onOpenCaseStudy }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Full Stack', 'Flagship'];

  const filteredProjects = filter === 'All'
    ? projectsData
    : filter === 'Flagship'
    ? projectsData.filter(p => p.isFlagship)
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative bg-[#0a0a0c] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Sparkles size={13} /> Real-World Systems & Applications
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured <span className="text-indigo-400">Projects</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Selected full-stack software projects showcasing architecture design, database modeling, REST APIs, and client interactive interfaces.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-white/[0.03] border border-white/10 rounded-xl">
            <Filter size={14} className="text-gray-400 ml-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/50'
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={onOpenCaseStudy}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
