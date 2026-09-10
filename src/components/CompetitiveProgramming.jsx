import React from 'react';
import { Code, Trophy, Award, ExternalLink, Sparkles, Zap } from 'lucide-react';
import { LeetcodeIcon } from './Icons';
import { cpData } from '../data/cpData';

export default function CompetitiveProgramming() {
  const renderIcon = (iconName) => {
    if (iconName === 'LeetCode') return <LeetcodeIcon size={20} />;
    if (iconName === 'Award') return <Award size={20} />;
    if (iconName === 'Zap') return <Zap size={20} />;
    if (iconName === 'Trophy') return <Trophy size={20} />;
    return <Code size={20} />;
  };

  return (
    <section id="cp" className="py-24 relative bg-[#0d0d12] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
            <Sparkles size={13} /> Algorithmic Mastery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competitive <span className="text-cyan-400">Programming</span> & LeetCode
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Active contest participant with <strong>{cpData.totalSolved}</strong> problems solved across Codeforces, CodeChef, LeetCode, and AtCoder.
          </p>
        </div>

        {/* Total Solved Hero Banner */}
        <div className="mb-14 glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-[#12121a] to-indigo-950/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-300">
              <Trophy size={16} className="text-amber-400" />
              <span>Contest Achievements & Solved Problem Count</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              1500+ Algorithmic Problems Solved
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              Consistent problem solving focused on Data Structures, Dynamic Programming, Graph Theory, and Number Theory algorithms.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-black/40 px-6 py-4 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-cyan-400 font-heading">1500+</div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Total Solved</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-extrabold text-indigo-400 font-heading">CF Specialist</div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider font-semibold">Max Rank</div>
            </div>
          </div>

        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cpData.platforms.map((platform, pIdx) => (
            <div
              key={pIdx}
              className="glass-card p-6 rounded-2xl border border-white/5 hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-5 text-left group"
            >
              <div className="space-y-3">
                
                {/* Platform Header */}
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    {renderIcon(platform.badgeIcon)}
                  </div>
                  
                  <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${platform.rankColor}`}>
                    {platform.rank}
                  </span>
                </div>

                {/* Platform Title */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {platform.name}
                  </h3>
                  <p className="text-xs font-mono text-gray-400">
                    @{platform.handle}
                  </p>
                </div>

                {/* Highlight Specs */}
                <div className="space-y-1.5 pt-2 border-t border-white/5 text-xs text-gray-300">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Solved:</span>
                    <span className="font-mono text-cyan-300 font-semibold">{platform.solvedCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Status / Rank:</span>
                    <span className="font-mono text-white">{platform.maxRating}</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed pt-1">
                  {platform.highlights}
                </p>

              </div>

              {/* Profile Link */}
              {platform.profileUrl.startsWith('http') && (
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-white/10 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View Profile</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Topic Breakdown Progress */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 text-left space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Topic-Wise Problem Distribution</h3>
              <p className="text-xs text-gray-400">Distribution of solved problems by algorithmic category</p>
            </div>
            <span className="text-xs font-mono text-cyan-400">1500+ Solved</span>
          </div>

          <div className="space-y-4">
            {cpData.topicDistribution.map((item, tIdx) => (
              <div key={tIdx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-300">{item.topic}</span>
                  <span className="text-gray-400">{item.count} problems</span>
                </div>
                <div className="h-2 w-full bg-white/[0.05] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-500`}
                    style={{ width: `${(item.count / 450) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
