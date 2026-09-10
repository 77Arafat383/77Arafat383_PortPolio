import React from 'react';
import { ArrowRight, FileText, Code2, Terminal, Sparkles, CheckCircle2, Trophy } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, FacebookIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      
      {/* Glow background ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 backdrop-blur-md">
                <Sparkles size={13} className="text-indigo-400" /> Hello, I'm
              </span>

              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {profileData.statusBadge}
              </span>
            </div>

            {/* Main Name with Avatar */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl p-0.5 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 shadow-lg shadow-indigo-500/30 shrink-0 lg:hidden">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
                Md. Yeasin <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  Arafat
                </span>
              </h1>
            </div>

            {/* Professional Subtitle */}
            <p className="text-base sm:text-lg font-mono text-indigo-300/90 font-medium">
              CSTE Student • Competitive Programmer • Full-Stack Developer
            </p>

            {/* Short Bio Paragraph */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              {profileData.bioHeadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-gray-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                <FileText size={16} className="text-indigo-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2 text-gray-400 text-xs font-mono">
              <span className="text-gray-500 mr-1">Profiles:</span>
              <a
                href={profileData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <GithubIcon size={14} className="text-indigo-400" />
                <span>GitHub</span>
              </a>

              <a
                href={profileData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <LinkedinIcon size={14} className="text-cyan-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={profileData.socials.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <Code2 size={14} className="text-purple-400" />
                <span>Codeforces</span>
              </a>

              <a
                href={profileData.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <LeetcodeIcon size={14} className="text-amber-400" />
                <span>LeetCode</span>
              </a>

              <a
                href={profileData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors py-1 px-2.5 rounded-lg bg-white/[0.03] border border-white/5"
              >
                <FacebookIcon size={14} className="text-blue-400" />
                <span>Facebook</span>
              </a>
            </div>

          </div>

          {/* Right Column: Avatar & Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="glass-card rounded-3xl p-6 border border-white/10 shadow-2xl relative z-10 overflow-hidden space-y-5">
                
                <div className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="relative w-20 h-20 rounded-2xl p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 shadow-xl shrink-0">
                    <img
                      src={profileData.avatarUrl}
                      alt={profileData.name}
                      className="w-full h-full object-cover rounded-[12px]"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0a0a0c]" />
                  </div>

                  <div className="text-left space-y-1">
                    <h3 className="text-lg font-extrabold text-white font-heading">
                      {profileData.name}
                    </h3>
                    <p className="text-xs font-mono text-indigo-300">
                      B.Sc. in CSTE @ NSTU
                    </p>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      1500+ CP Solved • Full-Stack
                    </span>
                  </div>
                </div>

                <div className="font-mono text-xs text-gray-300 space-y-1.5 leading-relaxed bg-[#060608] p-4 rounded-xl border border-white/5 text-left">
                  <p><span className="text-purple-400">#include</span> <span className="text-emerald-400">&lt;iostream&gt;</span></p>
                  <p><span className="text-purple-400">struct</span> <span className="text-yellow-400">Engineer</span> &#123;</p>
                  <p className="pl-4"><span className="text-indigo-300">string</span> name = <span className="text-emerald-300">"{profileData.name}"</span>;</p>
                  <p className="pl-4"><span className="text-indigo-300">int</span> solvedCount = <span className="text-cyan-300">1500</span>;</p>
                  <p className="pl-4"><span className="text-indigo-300">string</span> cf = <span className="text-emerald-300">"@{profileData.codeforcesHandle}"</span>;</p>
                  <p className="pl-4"><span className="text-indigo-300">string</span> leetcode = <span className="text-emerald-300">"@{profileData.leetcodeUsername}"</span>;</p>
                  <p>&#125;;</p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-left">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                    <span className="text-xs text-gray-300 font-medium">NSTU CGPA 3.82</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center gap-2">
                    <Trophy size={15} className="text-amber-400 shrink-0" />
                    <span className="text-xs text-gray-300 font-medium">ICPC Regionalist</span>
                  </div>
                </div>

              </div>

              <div className="absolute -top-5 -left-4 z-20 px-3.5 py-2 rounded-xl bg-[#12121a]/90 border border-indigo-500/30 text-xs font-mono text-indigo-300 shadow-xl backdrop-blur-md animate-float">
                ⚡ React • Node • Express
              </div>

              <div className="absolute -bottom-5 -right-4 z-20 px-3.5 py-2 rounded-xl bg-[#12121a]/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-xl backdrop-blur-md animate-float" style={{ animationDelay: '1.5s' }}>
                🏆 1500+ CP Problems Solved
              </div>

            </div>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {profileData.heroStats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all duration-300 text-center sm:text-left group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading group-hover:text-indigo-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-gray-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-gray-400 mt-0.5">
                {stat.highlight}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
