import React from 'react';
import { ArrowUp, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon, FacebookIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#060608] border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10 text-center md:text-left">
          
          <div className="space-y-2">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5">
                <div className="w-full h-full bg-[#0a0a0c] rounded-[6px] flex items-center justify-center font-heading font-bold text-xs text-white">
                  YA
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {profileData.name}
              </span>
            </div>
            <p className="text-xs font-mono text-gray-400">
              CSTE Student • Full-Stack Developer • Competitive Programmer
            </p>
          </div>

          <div className="flex items-center gap-5 text-gray-400 text-xs font-mono flex-wrap justify-center">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#cp" className="hover:text-white transition-colors">Problem Solving</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={profileData.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/5 transition-all"
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href={profileData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/5 transition-all"
              title="LinkedIn"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href={profileData.socials.codeforces}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/5 transition-all"
              title="Codeforces"
            >
              <Code2 size={16} />
            </a>
            <a
              href={profileData.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/5 transition-all"
              title="LeetCode"
            >
              <LeetcodeIcon size={16} />
            </a>
            <a
              href={profileData.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/5 transition-all"
              title="Facebook"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={profileData.socials.email}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-400 hover:text-white border border-white/5 transition-all"
              title="Send Email"
            >
              <Mail size={16} />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-indigo-600/80 hover:bg-indigo-600 text-white shadow-md shadow-indigo-600/30 transition-all ml-1"
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-400 gap-4">
          <p>© 2026 {profileData.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with React + Vite + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
