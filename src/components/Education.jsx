import React from 'react';
import { GraduationCap, Award, BookOpen, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import { educationData } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-[#0d0d12] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/20">
            <Sparkles size={13} /> Academic Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & <span className="text-indigo-400">Coursework</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Undergraduate degree timeline and core computer science curriculum at Noakhali Science and Technology University.
          </p>
        </div>

        {/* Main Degree Card */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-[#12121c] via-[#0d0d14] to-[#141424] shadow-2xl mb-12 text-left space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shrink-0 mt-1">
                <GraduationCap size={26} />
              </div>
              <div className="space-y-1">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {educationData.period} • {educationData.expectedGraduation}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white font-heading">
                  {educationData.institution}
                </h3>
                <p className="text-sm font-semibold text-indigo-300">
                  {educationData.degree}
                </p>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 pt-1">
                  <MapPin size={13} className="text-indigo-400" />
                  <span>{educationData.location}</span>
                </div>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-center shrink-0">
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {educationData.cgpa}
              </div>
              <div className="text-[11px] font-mono text-indigo-300 font-medium uppercase tracking-wider">
                Current CGPA
              </div>
            </div>

          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            {educationData.summary}
          </p>

        </div>

        {/* Relevant Coursework Grid */}
        <div className="space-y-6 text-left">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <BookOpen size={20} className="text-indigo-400" />
            <span>Relevant CS & Engineering Coursework</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {educationData.relevantCoursework.map((course, idx) => (
              <div
                key={idx}
                className="glass-card p-4 rounded-2xl border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all duration-300 space-y-2 group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-white group-hover:text-indigo-300 transition-colors">
                  <CheckCircle2 size={14} className="text-indigo-400 shrink-0" />
                  <span>{course.title}</span>
                </div>
                <p className="text-[11px] text-gray-400 leading-relaxed pl-5">
                  {course.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
