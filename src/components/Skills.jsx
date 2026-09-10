import React, { useState } from 'react';
import { Code2, Layout, Server, Database, Wrench, Cpu, Sparkles, Check } from 'lucide-react';
import { skillsData } from '../data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categoryIcons = {
    'Programming Languages': Code2,
    'Frontend Development': Layout,
    'Backend Development': Server,
    'Database Systems': Database,
    'Developer Tools': Wrench,
    'Core Computer Science': Cpu
  };

  const categories = ['All', ...skillsData.map(s => s.category)];

  const filteredData = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-[#0d0d12] overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles size={13} /> Technical Toolkit
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Categorized technical capabilities across software development, databases, backend systems, and competitive programming.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 shadow-md shadow-cyan-500/20'
                  : 'bg-white/[0.03] border border-white/5 text-gray-400 hover:text-white hover:bg-white/[0.08]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="space-y-10">
          {filteredData.map((catItem, idx) => {
            const IconComp = categoryIcons[catItem.category] || Code2;

            return (
              <div key={idx} className="space-y-4">
                
                {/* Category Title */}
                <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <IconComp size={18} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-white">
                      {catItem.category}
                    </h3>
                    <p className="text-xs text-gray-400 font-mono">
                      {catItem.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid for this Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {catItem.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="glass-card p-4 rounded-xl border border-white/5 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 text-left flex flex-col justify-between space-y-3 group"
                    >
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {skill.badge}
                          </span>
                        </div>
                        
                        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                          {skill.detail}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                        <span className="flex items-center gap-1 text-emerald-400">
                          <Check size={12} /> {skill.level}
                        </span>
                        <span>Competency</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
