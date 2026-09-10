import React from 'react';
import { Trophy, Award, Medal, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative bg-[#0a0a0c] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20">
            <Sparkles size={13} /> Honors & Competitions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contest <span className="text-amber-400">Achievements</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Track record of university programming contest awards, national IUPCs, and ICPC Asia Dhaka Regional participation.
          </p>
        </div>

        {/* Timeline Tree */}
        <div className="space-y-12 max-w-4xl mx-auto text-left">
          {achievementsData.map((yearGroup, yIdx) => (
            <div key={yIdx} className="space-y-6">
              
              {/* Year Marker Header */}
              <div className="flex items-center gap-3">
                <span className="px-4 py-1.5 rounded-full text-sm font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm">
                  {yearGroup.year}
                </span>
                <div className="h-px flex-grow bg-white/10" />
              </div>

              {/* Contest Items Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {yearGroup.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="glass-card p-5 rounded-2xl border border-white/10 hover:border-amber-500/40 hover:-translate-y-1 transition-all duration-300 space-y-3 flex flex-col justify-between group"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/20">
                          {item.badge}
                        </span>
                        <span className="text-[11px] font-mono text-gray-500">
                          {item.category}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                        {item.title}
                      </h3>

                      <div className="text-xs font-semibold text-gray-300 flex items-center gap-1.5">
                        <Trophy size={14} className="text-amber-400" />
                        <span>{item.event}</span>
                      </div>

                      <p className="text-xs text-gray-400 leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                      <span>Team: <strong className="text-gray-300">{item.team}</strong></span>
                      <span>Verified Record</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
