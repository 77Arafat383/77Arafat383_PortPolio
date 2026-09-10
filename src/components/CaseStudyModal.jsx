import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Layers, Database, AlertCircle, CheckCircle2, Server, ArrowRight, Lightbulb } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;
  const cs = project.caseStudy;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-xl animate-fadeIn overflow-y-auto">
      
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#0f0f17] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.thumbnailGradient} border-b border-white/10 relative flex flex-col justify-between`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-gray-300 hover:text-white border border-white/10 transition-colors"
            aria-label="Close Case Study"
          >
            <X size={18} />
          </button>

          <div className="space-y-2 text-left pr-12">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
              Technical Case Study
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm font-mono text-gray-300">
              {project.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 pt-4">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-gray-200 bg-black/40 hover:bg-black/60 border border-white/10 transition-colors"
            >
              <GithubIcon size={14} />
              <span>Source Code</span>
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-colors"
            >
              <ExternalLink size={14} />
              <span>Live Application</span>
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 px-6 pt-4 border-b border-white/10 overflow-x-auto bg-[#0a0a0c]">
          {[
            { id: 'overview', label: 'Overview & Features', icon: Layers },
            { id: 'architecture', label: 'System Architecture', icon: Server },
            { id: 'database', label: 'Database Design', icon: Database },
            { id: 'challenges', label: 'Challenges & Learnings', icon: AlertCircle }
          ].map((tab) => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-indigo-400 font-semibold'
                    : 'border-transparent text-gray-400 hover:text-gray-200'
                }`}
              >
                <IconComp size={15} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left text-gray-300 text-sm leading-relaxed">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Lightbulb size={18} className="text-amber-400" />
                  <span>Project Overview</span>
                </h3>
                <p className="text-gray-300">{cs.overview}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/20 space-y-2">
                  <h4 className="font-bold text-red-400 text-xs font-mono uppercase tracking-wider">The Problem</h4>
                  <p className="text-xs text-gray-300">{cs.problem}</p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                  <h4 className="font-bold text-emerald-400 text-xs font-mono uppercase tracking-wider">The Solution</h4>
                  <p className="text-xs text-gray-300">{cs.solution}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <h3 className="text-base font-bold text-white">Key Functional Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cs.features.map((f, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                      <div className="font-semibold text-white text-xs flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-indigo-400 shrink-0" />
                        <span>{f.title}</span>
                      </div>
                      <p className="text-xs text-gray-400 pl-5">{f.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Server size={18} className="text-indigo-400" />
                  <span>Component Architecture & Execution Flow</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Visual node layout illustrating communication between frontend client, middleware layers, services, and database persistence.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cs.architecture.nodes.map((node, nIdx) => (
                  <div key={nIdx} className="p-4 rounded-xl bg-white/[0.03] border border-indigo-500/20 space-y-1.5">
                    <div className="font-bold text-indigo-300 text-xs font-mono">
                      0{nIdx + 1}. {node.label}
                    </div>
                    <p className="text-xs text-gray-300">{node.role}</p>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 space-y-2">
                <div className="text-xs font-mono font-bold text-indigo-300 uppercase">
                  Data Flow Pipeline:
                </div>
                <div className="text-xs font-mono text-gray-200 bg-[#060608] p-3 rounded-xl border border-white/10 overflow-x-auto">
                  {cs.architecture.flow}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'database' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Database size={18} className="text-cyan-400" />
                  <span>Database Collections & Data Schemas</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Data modeling structure, schema entities, and collection field specifications.
                </p>
              </div>

              <div className="space-y-3">
                {cs.databaseDesign.map((col, cIdx) => (
                  <div key={cIdx} className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 font-mono">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-cyan-300">Collection / Table: {col.collection}</span>
                      <span className="text-[10px] text-gray-500">Document Schema</span>
                    </div>
                    <div className="text-xs text-gray-300 bg-[#060608] p-2.5 rounded-lg border border-white/5">
                      {col.fields}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'challenges' && (
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <AlertCircle size={18} className="text-amber-400" />
                  <span>Engineering Challenges Faced</span>
                </h3>

                <div className="space-y-3">
                  {cs.challenges.map((c, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                      <div className="font-bold text-amber-300 text-xs">
                        Challenge #{idx + 1}: {c.challenge}
                      </div>
                      <div className="text-xs text-gray-300 flex items-start gap-2 pt-1 border-t border-white/5">
                        <ArrowRight size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong className="text-emerald-400 font-mono">Solution:</strong> {c.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10">
                <h3 className="text-base font-bold text-white">What I Learned & Took Away</h3>
                <ul className="space-y-2">
                  {cs.learnings.map((lrn, lIdx) => (
                    <li key={lIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 size={14} className="text-indigo-400 shrink-0" />
                      <span>{lrn}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

        </div>

        <div className="p-4 sm:p-6 bg-[#0a0a0c] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-mono text-gray-400">
            Md. Yeasin Arafat — Full-Stack Project Case Study
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-semibold text-gray-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
