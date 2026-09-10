import { profileData } from './profile';

export const cpData = {
  totalSolved: "1500+",
  headline: "Competitive Programming & Problem Solving",
  description: "Regular contest participant on major competitive programming platforms. Focused on Data Structures, Graph Algorithms, Dynamic Programming, and Number Theory.",
  platforms: [
    {
      name: "Codeforces",
      handle: profileData.codeforcesHandle,
      rank: "Specialist",
      rankColor: "text-cyan-400 border-cyan-500/40 bg-cyan-500/10",
      rating: "1400+",
      maxRating: "Specialist",
      solvedCount: "750+",
      profileUrl: profileData.socials.codeforces,
      badgeIcon: "Code",
      highlights: "Div. 2 & Div. 3 Contestant, Graph & DP problem solver"
    },
    {
      name: "CodeChef",
      handle: profileData.codechefHandle,
      rank: "3★ Star",
      rankColor: "text-blue-400 border-blue-500/40 bg-blue-500/10",
      rating: "1600+",
      maxRating: "3★ Star Division 2",
      solvedCount: "400+",
      profileUrl: profileData.socials.codechef,
      badgeIcon: "Award",
      highlights: "Regular Long & Starters Contest participant"
    },
    {
      name: "LeetCode",
      handle: profileData.leetcodeUsername,
      rank: "Active Solver",
      rankColor: "text-amber-400 border-amber-500/40 bg-amber-500/10",
      rating: "DSA Specialist",
      maxRating: "Arrays, DP & Graphs",
      solvedCount: "300+",
      profileUrl: profileData.socials.leetcode,
      badgeIcon: "LeetCode",
      highlights: "Algorithmic Problem Solving, DSA Interview Prep"
    },
    {
      name: "AtCoder",
      handle: profileData.atcoderHandle,
      rank: "Active Contestant",
      rankColor: "text-emerald-400 border-emerald-500/40 bg-emerald-500/10",
      rating: "Regular",
      maxRating: "AtCoder Beginner Contests",
      solvedCount: "150+",
      profileUrl: profileData.socials.atcoder || "https://atcoder.jp/",
      badgeIcon: "Zap",
      highlights: "Participates in ABCs (AtCoder Beginner Contests)"
    },
    {
      name: "ICPC & IUPC Contests",
      handle: "NSTU_Falcon",
      rank: "Regional Participant",
      rankColor: "text-purple-400 border-purple-500/40 bg-purple-500/10",
      rating: "Regional",
      maxRating: "Asia Dhaka Regional",
      solvedCount: "Contest Ready",
      profileUrl: "#achievements",
      badgeIcon: "Trophy",
      highlights: "Represented NSTU at ICPC Asia Dhaka Regional & Multiple IUPCs"
    }
  ],
  topicDistribution: [
    { topic: "Data Structures & Graphs", count: 450, color: "bg-indigo-500" },
    { topic: "Dynamic Programming", count: 320, color: "bg-purple-500" },
    { topic: "Math & Number Theory", count: 280, color: "bg-cyan-500" },
    { topic: "Greedy & Two Pointers", count: 300, color: "bg-emerald-500" },
    { topic: "Implementation & Search", count: 220, color: "bg-amber-500" }
  ]
};
