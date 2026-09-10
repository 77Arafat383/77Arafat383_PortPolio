import React from 'react';
import { Server, Layers, Cpu, BrainCircuit, Sparkles, ArrowRight, Check } from 'lucide-react';
import { learningData } from '../data/learning';

export default function LearningJourney() {
  const iconMap = {
    Server: Server,
    Layers: Layers,
    Cpu: Cpu,
    BrainCircuit: BrainCircuit
  };

  return (
    <section id="learning" className="py-24 relative bg-[#0d0d12] overflow-hidden">
      
      {/* Glow Ambient */}
      <div className="absolute top-1/2 left-10 w-[350px] h-[350px] bg-emerald-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
            <Sparkles size={13} /> Continuous Improvement
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Currently <span className="text-emerald-400">Learning</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Active areas of technical expansion, system engineering concepts, and algorithmic deep dives.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {learningData.map((item, lIdx) => {
            const IconComp = iconMap[item.icon] || Server;

            return (
              <div
                key={lIdx}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-all">
                      <IconComp size={20} />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {item.topic}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-white/5">
                    <span className="text-[11px] font-mono text-gray-500">Core Concepts & Tools:</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.04] text-emerald-300 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                  <Check size={13} />
                  <span>Active Skill Expansion</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
