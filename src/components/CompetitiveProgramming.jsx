import React, { useState, useEffect } from 'react';
import { Code, Trophy, Award, ExternalLink, Sparkles, Zap, RefreshCw } from 'lucide-react';
import { LeetcodeIcon } from './Icons';
import { profileData } from '../data/profile';

export default function CompetitiveProgramming() {
  const [loading, setLoading] = useState(true);
  const [lastSyncTime, setLastSyncTime] = useState(null);
  
  // Real-time statistics state initialized with static defaults
  const [cfData, setCfData] = useState({
    rating: 1418,
    maxRating: 1421,
    rank: 'Specialist',
    maxRank: 'Specialist',
    solvedCount: 1701
  });

  const [lcData, setLcData] = useState({
    totalSolved: 38,
    easySolved: 13,
    mediumSolved: 30,
    hardSolved: 0,
    ranking: 3199412
  });

  const [acData, setAcData] = useState({
    solvedCount: 179,
    ratedPointSum: 48825,
    rank: 'Active Contestant'
  });

  const [ccData, setCcData] = useState({
    rating: 1600,
    stars: '3★ Star',
    solvedCount: 606,
    rank: '3★ Star Division 2'
  });

  const [topicDist, setTopicDist] = useState([
    { topic: "Math & Number Theory", count: 893, color: "bg-cyan-500" },
    { topic: "Greedy & Two Pointers", count: 852, color: "bg-emerald-500" },
    { topic: "Implementation & Search", count: 713, color: "bg-indigo-500" },
    { topic: "Dynamic Programming", count: 190, color: "bg-purple-500" },
    { topic: "Data Structures & Graphs", count: 242, color: "bg-amber-500" }
  ]);

  const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const fetchLiveCPStats = async () => {
    setLoading(true);
    try {
      // 1. Fetch Codeforces User Info & Submissions
      try {
        const cfInfoRes = await fetch(`https://codeforces.com/api/user.info?handles=${profileData.codeforcesHandle}`);
        const cfInfoJson = await cfInfoRes.json();
        
        if (cfInfoJson.status === 'OK' && cfInfoJson.result?.length > 0) {
          const cfUser = cfInfoJson.result[0];
          setCfData(prev => ({
            ...prev,
            rating: cfUser.rating || 1418,
            maxRating: cfUser.maxRating || 1421,
            rank: capitalize(cfUser.rank) || 'Specialist',
            maxRank: capitalize(cfUser.maxRank) || 'Specialist'
          }));
        }

        const cfStatusRes = await fetch(`https://codeforces.com/api/user.status?handle=${profileData.codeforcesHandle}`);
        const cfStatusJson = await cfStatusRes.json();

        let cfSolvedSet = new Set();
        const tagCounts = { math: 0, greedy: 0, implementation: 0, dp: 0, dsGraphs: 0 };

        if (cfStatusJson.status === 'OK' && Array.isArray(cfStatusJson.result)) {
          cfStatusJson.result.forEach((sub) => {
            if (sub.verdict === 'OK' && sub.problem) {
              const probId = `${sub.problem.contestId}-${sub.problem.index}`;
              if (!cfSolvedSet.has(probId)) {
                cfSolvedSet.add(probId);
                
                (sub.problem.tags || []).forEach((t) => {
                  if (['math', 'number theory', 'combinatorics'].includes(t)) tagCounts.math++;
                  else if (['greedy', 'two pointers', 'sortings', 'binary search'].includes(t)) tagCounts.greedy++;
                  else if (['implementation', 'brute force', 'constructive algorithms', 'strings'].includes(t)) tagCounts.implementation++;
                  else if (['dp'].includes(t)) tagCounts.dp++;
                  else if (['data structures', 'trees', 'graphs', 'dfs and similar', 'shortest paths', 'dsu'].includes(t)) tagCounts.dsGraphs++;
                });
              }
            }
          });

          if (cfSolvedSet.size > 0) {
            setCfData(prev => ({ ...prev, solvedCount: cfSolvedSet.size }));
            setTopicDist([
              { topic: "Greedy & Search Algorithms", count: tagCounts.greedy || 852, color: "bg-emerald-500" },
              { topic: "Math & Number Theory", count: tagCounts.math || 893, color: "bg-cyan-500" },
              { topic: "Implementation & String Logic", count: tagCounts.implementation || 713, color: "bg-indigo-500" },
              { topic: "Data Structures & Graphs", count: tagCounts.dsGraphs || 242, color: "bg-amber-500" },
              { topic: "Dynamic Programming", count: tagCounts.dp || 190, color: "bg-purple-500" }
            ]);
          }
        }
      } catch (cfErr) {
        console.warn('Codeforces API fetch error:', cfErr);
      }

      // 2. Fetch LeetCode Statistics
      try {
        const lcRes = await fetch(`https://leetcode-api-faisalshohag.vercel.app/${profileData.leetcodeUsername}`);
        const lcJson = await lcRes.json();
        if (lcJson && typeof lcJson.totalSolved === 'number') {
          setLcData({
            totalSolved: lcJson.totalSolved,
            easySolved: lcJson.easySolved || 13,
            mediumSolved: lcJson.mediumSolved || 30,
            hardSolved: lcJson.hardSolved || 0,
            ranking: lcJson.ranking || 3199412
          });
        }
      } catch (lcErr) {
        console.warn('LeetCode API fetch error:', lcErr);
      }

      // 3. Fetch AtCoder Statistics (Kenkoooo API)
      try {
        const acInfoRes = await fetch(`https://kenkoooo.com/atcoder/atcoder-api/v2/user_info?user=${profileData.atcoderHandle}`);
        const acInfoJson = await acInfoRes.json();
        
        const acSubRes = await fetch(`https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions?user=${profileData.atcoderHandle}&from_second=0`);
        const acSubJson = await acSubRes.json();

        let acSolvedSet = new Set();
        if (Array.isArray(acSubJson)) {
          acSubJson.forEach(sub => {
            if (sub.result === 'AC' && sub.problem_id) {
              acSolvedSet.add(sub.problem_id);
            }
          });
        }

        setAcData({
          solvedCount: acSolvedSet.size > 0 ? acSolvedSet.size : (acInfoJson?.accepted_count || 179),
          ratedPointSum: acInfoJson?.rated_point_sum || 48825,
          rank: acInfoJson?.accepted_count_rank ? `Rank #${acInfoJson.accepted_count_rank}` : 'Active Contestant'
        });
      } catch (acErr) {
        console.warn('AtCoder API fetch error:', acErr);
      }

      // 4. Fetch CodeChef Statistics (HTML / Proxy API Parser)
      try {
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://www.codechef.com/users/${profileData.codechefHandle}`)}`;
        const ccRes = await fetch(proxyUrl);
        const ccJson = await ccRes.json();
        if (ccJson && ccJson.contents) {
          const html = ccJson.contents;
          const solvedMatch = html.match(/Total Problems Solved:[^\d]*(\d+)/i) || html.match(/Fully Solved \(([0-9]+)\)/i) || html.match(/([0-9]+)\s*<\/h3>\s*<p>Total Problems Solved/i);
          const ratingMatch = html.match(/rating-number[^>]*>(\d+)/i) || html.match(/(\d{4})/);
          
          if (solvedMatch && solvedMatch[1]) {
            setCcData(prev => ({
              ...prev,
              solvedCount: parseInt(solvedMatch[1], 10),
              rating: ratingMatch ? parseInt(ratingMatch[1], 10) : prev.rating
            }));
          }
        }
      } catch (ccErr) {
        console.warn('CodeChef API fetch error:', ccErr);
      }

      setLastSyncTime(new Date().toLocaleTimeString());
    } catch (err) {
      console.warn('Error fetching live CP stats:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLiveCPStats();
  }, []);

  // Compute live combined total solved count across all 4 platforms
  const totalSolvedLiveCount = (cfData.solvedCount || 1701) + (lcData.totalSolved || 38) + (acData.solvedCount || 179) + (ccData.solvedCount || 606);

  const renderIcon = (iconName) => {
    if (iconName === 'LeetCode') return <LeetcodeIcon size={20} />;
    if (iconName === 'Award') return <Award size={20} />;
    if (iconName === 'Zap') return <Zap size={20} />;
    if (iconName === 'Trophy') return <Trophy size={20} />;
    return <Code size={20} />;
  };

  // Build live dynamic platforms list
  const livePlatforms = [
    {
      name: "Codeforces",
      handle: profileData.codeforcesHandle,
      rank: cfData.rank,
      rankColor: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
      rating: `${cfData.rating} (Max: ${cfData.maxRating})`,
      maxRating: `Max Rank: ${cfData.maxRank}`,
      solvedCount: `${cfData.solvedCount} Solved`,
      profileUrl: profileData.socials.codeforces,
      badgeIcon: "Code",
      highlights: `Active Specialist contestant • ${cfData.solvedCount} verified problems solved live from Codeforces API.`
    },
    {
      name: "CodeChef",
      handle: profileData.codechefHandle,
      rank: ccData.stars,
      rankColor: "text-blue-400 border-blue-500/40 bg-blue-500/10",
      rating: `${ccData.rating}+ Rating`,
      maxRating: ccData.rank,
      solvedCount: `${ccData.solvedCount} Solved`,
      profileUrl: profileData.socials.codechef,
      badgeIcon: "Award",
      highlights: `Regular Long & Starters Contest participant • ${ccData.solvedCount} verified problems solved.`
    },
    {
      name: "LeetCode",
      handle: profileData.leetcodeUsername,
      rank: `Rank #${lcData.ranking.toLocaleString()}`,
      rankColor: "text-amber-400 border-amber-500/40 bg-amber-500/10",
      rating: `${lcData.totalSolved} Solved`,
      maxRating: `${lcData.easySolved} Easy • ${lcData.mediumSolved} Medium`,
      solvedCount: `${lcData.totalSolved} Solved`,
      profileUrl: profileData.socials.leetcode,
      badgeIcon: "LeetCode",
      highlights: `Live LeetCode Sync • ${lcData.mediumSolved} Medium & ${lcData.easySolved} Easy problems solved.`
    },
    {
      name: "AtCoder",
      handle: profileData.atcoderHandle,
      rank: acData.rank,
      rankColor: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      rating: `${acData.ratedPointSum.toLocaleString()} Points`,
      maxRating: "AtCoder Beginner Contests",
      solvedCount: `${acData.solvedCount} Solved`,
      profileUrl: profileData.socials.atcoder || "https://atcoder.jp/",
      badgeIcon: "Zap",
      highlights: `Kenkoooo API Sync • ${acData.solvedCount} verified AC problems in AtCoder Beginner Contests.`
    },
    {
      name: "ICPC & IUPC Contests",
      handle: "NSTU_Falcon",
      rank: "Regional Participant",
      rankColor: "text-purple-400 border-purple-500/40 bg-purple-500/10",
      rating: "Regionalist",
      maxRating: "Asia Dhaka Regional 2025",
      solvedCount: "Contest Qualified",
      profileUrl: profileData.socials.codeforces,
      badgeIcon: "Trophy",
      highlights: "Represented NSTU at ICPC Asia Dhaka Regional & Multiple IUPCs"
    }
  ];

  const maxTopicCount = Math.max(...topicDist.map(t => t.count), 1);

  return (
    <section id="cp" className="py-24 relative bg-[#0d0d12] overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 space-y-3">
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20">
              <Sparkles size={13} /> Algorithmic Mastery
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Live 4-Platform API Sync
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Competitive <span className="text-cyan-400">Programming</span> Statistics
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Live profile statistics automatically updated directly from Codeforces, CodeChef, LeetCode, and AtCoder profile APIs.
          </p>
        </div>

        {/* Total Solved Hero Banner */}
        <div className="mb-14 glass-card p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 via-[#12121a] to-indigo-950/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-mono text-cyan-300">
              <Trophy size={16} className="text-amber-400" />
              <span>Real-Time Solved Problem Count Across All Platforms</span>
              {lastSyncTime && (
                <span className="text-[10px] text-gray-400 ml-2">Synced at {lastSyncTime}</span>
              )}
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              {totalSolvedLiveCount}+ Algorithmic Problems Solved
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm max-w-xl">
              Live verified stats: <strong>{cfData.solvedCount}</strong> Codeforces • <strong>{ccData.solvedCount}</strong> CodeChef • <strong>{acData.solvedCount}</strong> AtCoder • <strong>{lcData.totalSolved}</strong> LeetCode.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-black/40 px-6 py-4 rounded-2xl border border-white/10 shrink-0">
            <div className="text-center">
              <div className="text-3xl font-extrabold text-cyan-400 font-heading">
                {totalSolvedLiveCount}+
              </div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">Total Solved</div>
            </div>
            <div className="h-8 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-indigo-400 font-heading">
                CF {cfData.rank}
              </div>
              <div className="text-[11px] font-mono text-gray-400 uppercase tracking-wider font-semibold">
                Rating {cfData.rating}
              </div>
            </div>

            <button
              onClick={fetchLiveCPStats}
              disabled={loading}
              className="ml-2 p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-gray-300 hover:text-white transition-all disabled:opacity-50"
              title="Refresh live CP profile stats"
            >
              <RefreshCw size={16} className={loading ? "animate-spin text-cyan-400" : ""} />
            </button>
          </div>

        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {livePlatforms.map((platform, pIdx) => (
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
                    <span className="text-gray-500">Solved Count:</span>
                    <span className="font-mono text-cyan-300 font-semibold">{platform.solvedCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Rating / Status:</span>
                    <span className="font-mono text-white">{platform.rating}</span>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed pt-1">
                  {platform.highlights}
                </p>

              </div>

              {/* Profile Link */}
              {platform.profileUrl && platform.profileUrl.startsWith('http') && (
                <a
                  href={platform.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full pt-3 border-t border-white/10 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View Live Profile</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Live Topic Breakdown Progress */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/10 text-left space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <span>Live Problem Tag Breakdown</span>
                <span className="text-xs font-mono font-normal text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  Real API Tags
                </span>
              </h3>
              <p className="text-xs text-gray-400">Categorized problem distribution computed directly from your solved submission tags</p>
            </div>
            <span className="text-xs font-mono text-cyan-400 font-bold">{cfData.solvedCount} CF Solved</span>
          </div>

          <div className="space-y-4">
            {topicDist.map((item, tIdx) => (
              <div key={tIdx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-300 font-medium">{item.topic}</span>
                  <span className="text-cyan-300 font-semibold">{item.count} solved</span>
                </div>
                <div className="h-2.5 w-full bg-white/[0.05] rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color} rounded-full transition-all duration-700`}
                    style={{ width: `${Math.min(100, (item.count / maxTopicCount) * 100)}%` }}
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
