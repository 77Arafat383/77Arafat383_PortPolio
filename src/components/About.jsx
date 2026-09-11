import React from 'react';
import { BookOpen, Code, Cpu, Database, Server, Terminal, Sparkles, ShieldCheck } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Algorithmic Problem Solving",
      description: "Active competitive programmer with 1500+ problems solved across Codeforces (Specialist) & CodeChef (3★)."
    },
    {
      icon: Server,
      title: "Backend & API Architecture",
      description: "Proficient in designing robust RESTful APIs, JWT stateless authentication, middleware guards, and Express pipelines."
    },
    {
      icon: Database,
      title: "Database Modeling",
      description: "Designing schema relationships and indexing in PostgreSQL (Supabase) and MySQL for optimal query execution."
    },
    {
      icon: Cpu,
      title: "CSTE Undergraduate",
      description: "Pursuing B.Sc. in Computer Science & Telecommunication Engineering at NSTU (Current CGPA: 3.82)."
    }
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0a0a0c] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Sparkles size={13} /> Who I Am
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-indigo-400">Me</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Computer Science student passionate about software engineering, competitive programming, and backend development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen size={20} className="text-indigo-400" />
                <span>My Journey & Philosophy</span>
              </h3>

              {profileData.bioFull.map((paragraph, index) => (
                <p key={index} className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
                  <ShieldCheck size={16} className="text-emerald-400" />
                  <span>NSTU CSTE Undergraduate</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                  <Terminal size={14} />
                  <span>BUILD • SOLVE • LEARN</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:-translate-y-1 transition-all duration-300 text-left group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
