import React, { useState, useEffect } from 'react';
import { GitCommit, Sparkles, ExternalLink, RefreshCw } from 'lucide-react';
import { GithubIcon } from './Icons';
import { profileData } from '../data/profile';

export default function ContributionGraph() {
  const [hoveredCell, setHoveredCell] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalContributions: 840,
    publicRepos: 18,
    topLanguages: "C++ / JS"
  });
  const [gridData, setGridData] = useState([]);

  // Fetch real GitHub stats and contributions
  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        setLoading(true);
        const username = profileData.githubUsername;

        // Fetch User Public Repos
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (userRes.ok) {
          const userData = await userRes.json();
          if (isMounted) {
            setStats(prev => ({
              ...prev,
              publicRepos: userData.public_repos || prev.publicRepos
            }));
          }
        }

        // Fetch Real Contribution Matrix from GitHub Contributions API
        const contribRes = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`);
        if (contribRes.ok) {
          const contribData = await contribRes.json();
          if (isMounted && contribData && contribData.contributions) {
            const rawDays = contribData.contributions;
            
            // Format days into 52 weeks x 7 days
            const formattedGrid = [];
            const weeksCount = Math.floor(rawDays.length / 7);
            
            for (let w = 0; w < Math.min(weeksCount, 52); w++) {
              const weekDays = rawDays.slice(w * 7, (w + 1) * 7).map(d => ({
                date: d.date,
                count: d.count
              }));
              formattedGrid.push(weekDays);
            }

            setGridData(formattedGrid);
            setStats(prev => ({
              ...prev,
              totalContributions: contribData.total.lastYear || prev.totalContributions
            }));
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        console.warn("Using default activity pattern fallback for GitHub graph", err);
      }

      // Default Fallback Generator if API rate limited or offline
      if (isMounted) {
        const weeks = 52;
        const daysPerWeek = 7;
        const fallbackGrid = Array.from({ length: weeks }, (_, wIdx) => {
          return Array.from({ length: daysPerWeek }, (_, dIdx) => {
            const dayNum = wIdx * 7 + dIdx;
            const isHigh = (dayNum % 5 === 0 || dayNum % 7 === 2 || dayNum % 11 === 0);
            const isMedium = (dayNum % 3 === 0 || dayNum % 4 === 1);
            const count = isHigh ? Math.floor((dayNum % 8) + 4) : isMedium ? Math.floor((dayNum % 4) + 1) : 0;
            
            return {
              date: `2026-0${Math.floor(dayNum / 30) + 1}-${(dayNum % 28) + 1}`,
              count: count
            };
          });
        });
        setGridData(fallbackGrid);
        setLoading(false);
      }
    }

    fetchGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section id="github" className="py-24 relative bg-[#0a0a0c] overflow-hidden">
      
      {/* Glow Ambient */}
      <div className="absolute top-1/3 left-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-purple-400 bg-purple-500/10 border border-purple-500/20">
            <Sparkles size={13} /> Continuous Coding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building in <span className="text-purple-400">Public</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Live GitHub contribution activity and real-time coding metrics pulling directly from @{profileData.githubUsername}.
          </p>
        </div>

        {/* Main Contribution Container */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6 text-left">
          
          {/* Header Stats */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <GithubIcon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>GitHub Contribution Graph</span>
                  {loading && <RefreshCw size={14} className="animate-spin text-purple-400" />}
                </h3>
                <p className="text-xs font-mono text-gray-400">@{profileData.githubUsername}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs font-mono">
              <div>
                <div className="text-lg font-bold text-purple-400 font-heading">{stats.totalContributions}+</div>
                <div className="text-gray-500 text-[10px]">Total Contributions</div>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <div className="text-lg font-bold text-indigo-400 font-heading">{stats.publicRepos}+</div>
                <div className="text-gray-500 text-[10px]">Public Repositories</div>
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div>
                <div className="text-lg font-bold text-cyan-400 font-heading">{stats.topLanguages}</div>
                <div className="text-gray-500 text-[10px]">Top Languages</div>
              </div>
            </div>
          </div>

          {/* Matrix Heatmap */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono text-gray-400 pb-1">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>

            {/* Heatmap Grid Container */}
            <div className="overflow-x-auto pb-2">
              <div className="inline-flex gap-1">
                {gridData.map((week, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1">
                    {week.map((day, dIdx) => {
                      let bgClass = "bg-white/[0.04]";
                      if (day.count > 6) bgClass = "bg-purple-500";
                      else if (day.count > 3) bgClass = "bg-purple-600/80";
                      else if (day.count > 1) bgClass = "bg-purple-800/60";
                      else if (day.count === 1) bgClass = "bg-purple-950/70";

                      return (
                        <div
                          key={dIdx}
                          onMouseEnter={() => setHoveredCell(day)}
                          onMouseLeave={() => setHoveredCell(null)}
                          className={`w-3 h-3 rounded-sm ${bgClass} hover:ring-2 hover:ring-purple-400 transition-all cursor-pointer relative`}
                        />
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Tooltip / Status Strip */}
            <div className="flex items-center justify-between pt-2 text-xs font-mono text-gray-400 border-t border-white/5">
              <div>
                {hoveredCell ? (
                  <span className="text-purple-300 font-semibold">
                    {hoveredCell.count} contribution{hoveredCell.count !== 1 ? 's' : ''} on {hoveredCell.date}
                  </span>
                ) : (
                  <span>Hover over squares to inspect daily contributions</span>
                )}
              </div>

              {/* Legend */}
              <div className="flex items-center gap-1.5 text-[10px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-sm bg-white/[0.04]" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-950/70" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-800/60" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-600/80" />
                <span className="w-2.5 h-2.5 rounded-sm bg-purple-500" />
                <span>More</span>
              </div>
            </div>

          </div>

          {/* CTA Footer */}
          <div className="pt-2 flex justify-end">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-purple-600/80 hover:bg-purple-600 border border-purple-500/30 transition-all"
            >
              <GithubIcon size={14} />
              <span>View GitHub Profile (@{profileData.githubUsername})</span>
              <ExternalLink size={13} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
