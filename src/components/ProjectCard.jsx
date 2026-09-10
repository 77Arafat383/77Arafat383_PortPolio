import React from 'react';
import { ArrowUpRight, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <div className={`glass-card rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
      project.isFlagship 
        ? 'border-indigo-500/40 bg-gradient-to-b from-[#161624] to-[#0f0f17] shadow-xl shadow-indigo-600/10 hover:border-indigo-500/70' 
        : 'border-white/10 hover:border-white/20 bg-[#12121a]'
    }`}>
      
      {/* Top Visual Gradient Header */}
      <div className={`h-36 sm:h-44 w-full bg-gradient-to-tr ${project.thumbnailGradient} relative p-6 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
        
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />

        <div className="relative z-10 flex items-center justify-between">
          {project.isFlagship ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm backdrop-blur-md">
              <Sparkles size={13} className="text-indigo-400" /> Flagship Case Study
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-mono text-gray-300 bg-black/40 border border-white/10 backdrop-blur-md">
              {project.category}
            </span>
          )}

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-black/40 hover:bg-black/60 text-gray-300 hover:text-white border border-white/10 transition-colors backdrop-blur-md"
              title="View Source on GitHub"
            >
              <GithubIcon size={14} />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-black/40 hover:bg-black/60 text-gray-300 hover:text-white border border-white/10 transition-colors backdrop-blur-md"
              title="Live Demo"
            >
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>

        <div className="relative z-10 text-left">
          <h3 className="text-2xl font-extrabold text-white font-heading tracking-wide group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs font-mono text-gray-300 mt-0.5 opacity-90">
            {project.subtitle}
          </p>
        </div>

      </div>

      <div className="p-6 flex flex-col flex-grow justify-between space-y-5 text-left">
        <div className="space-y-4">
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-1.5">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.04] text-indigo-300 border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="space-y-2 pt-2 border-t border-white/5">
            {project.keyHighlights.slice(0, 3).map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-400">
                <CheckCircle2 size={13} className="text-indigo-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-3">
          <button
            onClick={() => onOpenCaseStudy(project)}
            className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
              project.isFlagship
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-md shadow-indigo-600/30'
                : 'bg-white/[0.05] hover:bg-white/[0.1] text-gray-200 border border-white/10 hover:border-indigo-500/40'
            }`}
          >
            <Layers size={15} />
            <span>View Full Case Study & Architecture</span>
            <ArrowUpRight size={14} />
          </button>
        </div>

      </div>

    </div>
  );
}
