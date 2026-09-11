import React, { useEffect } from 'react';
import { X, Download, Printer, ExternalLink, Mail, Phone, MapPin, Globe, Code, GraduationCap, Trophy, Briefcase, Layers } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeforcesIcon, LeetcodeIcon } from './Icons';
import { profileData } from '../data/profile';
import { projectsData } from '../data/projects';
import { cpData } from '../data/cpData';
import { achievementsData } from '../data/achievements';
import { educationData } from '../data/education';
import { skillsData } from '../data/skills';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleDownloadPDF = () => {
    const sheet = document.getElementById('resume-a4-sheet');
    if (!sheet) return;

    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed';
    iframe.style.right = '0';
    iframe.style.bottom = '0';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = '0';
    document.body.appendChild(iframe);

    const doc = iframe.contentWindow.document;
    doc.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Md_Yeasin_Arafat_Resume</title>
          <link rel="preconnect" href="https://fonts.googleapis.com">
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            @page { size: A4 portrait; margin: 0; }
            body { 
              margin: 0; 
              padding: 0; 
              background: #ffffff !important; 
              color: #111827 !important; 
              font-family: 'Inter', sans-serif; 
              -webkit-print-color-adjust: exact !important; 
              print-color-adjust: exact !important; 
            }
            .font-heading { font-family: 'Space Grotesk', sans-serif; }
            .font-mono { font-family: 'JetBrains Mono', monospace; }
            #resume-sheet {
              width: 210mm;
              min-height: 297mm;
              margin: 0 auto;
              padding: 12mm 15mm;
              box-sizing: border-box;
              background: #ffffff;
            }
          </style>
        </head>
        <body>
          <div id="resume-sheet">
            ${sheet.innerHTML}
          </div>
          <script>
            setTimeout(() => {
              window.focus();
              window.print();
              setTimeout(() => {
                window.frameElement.remove();
              }, 1000);
            }, 500);
          </script>
        </body>
      </html>
    `);
    doc.close();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn overflow-y-auto print:p-0 print:bg-white print:static print:block">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0f0f17] border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto text-left print:max-h-none print:border-none print:shadow-none print:rounded-none print:bg-white print:text-black print:w-full print:m-0"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Controls Header */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-indigo-900/50 via-[#12121e] to-purple-900/50 border-b border-white/10 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold font-mono text-sm">
              A4
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                Curriculum Vitae (A4 PDF Format)
              </h3>
              <p className="text-xs font-mono text-indigo-300">
                Md. Yeasin Arafat — Full-Stack Developer & Competitive Programmer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadPDF}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 flex items-center gap-1.5 transition-colors"
              title="Download clean A4 PDF Resume"
            >
              <Download size={15} />
              <span className="hidden sm:inline">Download A4 PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-black/40 hover:bg-black/80 text-gray-300 hover:text-white border border-white/10 transition-colors"
              aria-label="Close Resume Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Body Container with A4 Page Paper Preview */}
        <div className="p-4 sm:p-8 overflow-y-auto flex justify-center bg-[#09090e] print:p-0 print:bg-white print:overflow-visible">
          
          {/* Exact A4 Sheet Page Container (210mm x 297mm aspect ratio) */}
          <div 
            id="resume-a4-sheet"
            className="w-full max-w-[210mm] min-h-[297mm] bg-white text-gray-900 p-8 sm:p-10 shadow-2xl rounded-sm text-left flex flex-col justify-between font-sans leading-snug print:shadow-none print:p-6 print:w-full print:max-w-none print:min-h-0 print:rounded-none"
            style={{ color: '#111827' }}
          >
            
            {/* Header: Name, Professional Photo Avatar & Contact Details */}
            <div className="border-b-2 border-indigo-600 pb-5 mb-5 flex flex-col sm:flex-row justify-between items-start gap-4">
              
              <div className="flex items-start gap-4">
                <img
                  src={profileData.avatarUrl}
                  alt={profileData.name}
                  className="w-20 h-20 rounded-xl object-cover border-2 border-indigo-600 shadow-md shrink-0"
                />
                
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-indigo-950 font-heading uppercase tracking-tight">
                    {profileData.name}
                  </h1>
                  <p className="text-sm font-semibold text-indigo-700 font-mono mt-0.5">
                    Computer Science & Telecommunication Engineering Student
                  </p>
                  <p className="text-xs text-gray-600 font-mono">
                    Competitive Programmer • Full-Stack Developer • Backend API Design
                  </p>
                </div>
              </div>

              <div className="text-xs font-mono text-gray-700 space-y-1 text-left sm:text-right shrink-0">
                <div className="flex items-center sm:justify-end gap-1.5 text-indigo-900 font-semibold">
                  <Mail size={12} className="text-indigo-600" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-gray-700">
                  <MapPin size={12} className="text-indigo-600" />
                  <span>Noakhali, Bangladesh</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5 text-indigo-800 text-[11px] pt-1 flex-wrap">
                  <a href={profileData.socials.github} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    <GithubIcon size={12} /> GitHub
                  </a>
                  <span>•</span>
                  <a href={profileData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    <LinkedinIcon size={12} /> LinkedIn
                  </a>
                  <span>•</span>
                  <a href={profileData.socials.codeforces} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    <CodeforcesIcon size={12} /> Codeforces
                  </a>
                  <span>•</span>
                  <a href={profileData.socials.leetcode} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1">
                    <LeetcodeIcon size={12} /> LeetCode
                  </a>
                </div>
              </div>
            </div>

            {/* Main Resume Content Stack */}
            <div className="space-y-5 text-xs">
              
              {/* Executive Summary */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-bold font-mono text-indigo-900 uppercase tracking-wider border-b border-gray-300 pb-1 flex items-center gap-1.5">
                  <Globe size={13} className="text-indigo-600" /> Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed text-[11.5px]">
                  CSTE undergraduate student at Noakhali Science and Technology University (NSTU) with strong analytical skills and a passion for full-stack software development. Competitive programmer with <strong>1500+ solved problems</strong> across Codeforces (Specialist), CodeChef (3★), and LeetCode. Experienced in building scalable RESTful APIs, relational & NoSQL databases, JWT authentication, real-time WebSockets, and modern React interfaces.
                </p>
              </div>

              {/* Education Section */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold font-mono text-indigo-900 uppercase tracking-wider border-b border-gray-300 pb-1 flex items-center gap-1.5">
                  <GraduationCap size={13} className="text-indigo-600" /> Education
                </h2>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-gray-900 text-xs">
                      Noakhali Science and Technology University (NSTU)
                    </h3>
                    <p className="text-indigo-800 text-[11px] font-medium">
                      B.Sc. in Computer Science & Telecommunication Engineering (CSTE)
                    </p>
                  </div>
                  <div className="text-right font-mono text-[11px]">
                    <span className="font-bold text-indigo-900">CGPA: 3.82 / 4.00</span>
                    <p className="text-gray-600 text-[10px]">2021 — Expected 2027</p>
                  </div>
                </div>
              </div>

              {/* Technical Skills Section */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold font-mono text-indigo-900 uppercase tracking-wider border-b border-gray-300 pb-1 flex items-center gap-1.5">
                  <Code size={13} className="text-indigo-600" /> Technical Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[11px]">
                  <div>
                    <span className="font-bold text-gray-900">Programming Languages:</span> C++, JavaScript (ES6+), SQL
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">Backend Engineering:</span> Node.js, Express.js, REST APIs, JWT Auth, Socket.io
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">Frontend Web:</span> React.js, Vite, Tailwind CSS, HTML5/CSS3
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">Database Systems:</span> PostgreSQL (Supabase), MySQL (Schema Design, Indexing)
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">Tools & Environment:</span> Git, GitHub, VS Code, Postman, Linux
                  </div>
                  <div>
                    <span className="font-bold text-gray-900">Core Computer Science:</span> Data Structures, Graph Algorithms, Dynamic Programming, System Design Basics
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div className="space-y-3">
                <h2 className="text-xs font-bold font-mono text-indigo-900 uppercase tracking-wider border-b border-gray-300 pb-1 flex items-center gap-1.5">
                  <Layers size={13} className="text-indigo-600" /> Key Technical Projects
                </h2>

                {projectsData.map((project, pIdx) => (
                  <div key={pIdx} className="space-y-1 text-[11px]">
                    <div className="flex justify-between items-center font-bold">
                      <span className="text-gray-900 text-xs">
                        {project.title} — <span className="font-normal text-gray-600">{project.subtitle}</span>
                      </span>
                      <span className="font-mono text-[10px] text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                        {project.techStack.join(' • ')}
                      </span>
                    </div>

                    <p className="text-gray-700 leading-snug">
                      {project.tagline}
                    </p>

                    <ul className="list-disc pl-4 text-[10.5px] text-gray-600 space-y-0.5">
                      {project.keyHighlights.map((hl, hIdx) => (
                        <li key={hIdx}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Competitive Programming & Contest Achievements */}
              <div className="space-y-2">
                <h2 className="text-xs font-bold font-mono text-indigo-900 uppercase tracking-wider border-b border-gray-300 pb-1 flex items-center gap-1.5">
                  <Trophy size={13} className="text-indigo-600" /> Competitive Programming & Achievements
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                  <div>
                    • <strong>Codeforces Specialist</strong> (@{profileData.codeforcesHandle}, 750+ Solved)
                  </div>
                  <div>
                    • <strong>CodeChef 3★ Star</strong> (@{profileData.codechefHandle}, 400+ Solved)
                  </div>
                  <div>
                    • <strong>LeetCode Problem Solver</strong> (@{profileData.leetcodeUsername}, 300+ Solved)
                  </div>
                  <div>
                    • <strong>ICPC Asia Dhaka Regional</strong> Participant (2025)
                  </div>
                  <div>
                    • <strong>2nd Place (1st Runner-Up)</strong> — NSTU EEE Day Contest (2026)
                  </div>
                  <div>
                    • <strong>1st Runner-Up</strong> — Intra CSTE Contest (2026)
                  </div>
                </div>
              </div>

              {/* Coursework & Academic Focus */}
              <div className="space-y-1.5">
                <h2 className="text-xs font-bold font-mono text-indigo-900 uppercase tracking-wider border-b border-gray-300 pb-1 flex items-center gap-1.5">
                  <Briefcase size={13} className="text-indigo-600" /> Relevant Coursework
                </h2>
                <p className="text-[10.5px] text-gray-700 leading-relaxed font-mono">
                  Data Structures & Algorithms, Database Management Systems, Operating Systems, Computer Networks, Software Engineering, Web Engineering, Artificial Intelligence, Machine Learning.
                </p>
              </div>

            </div>

            {/* A4 Sheet Footer */}
            <div className="pt-4 mt-6 border-t border-gray-200 text-[10px] font-mono text-gray-500 flex justify-between items-center">
              <span>Md. Yeasin Arafat — Curriculum Vitae</span>
              <span>Updated September 2026</span>
            </div>

          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 sm:p-5 bg-[#0a0a0c] border-t border-white/10 flex items-center justify-between print:hidden">
          <span className="text-xs font-mono text-gray-400">
            A4 PDF Resume with LeetCode & Profile Photo
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10"
            >
              Close Window
            </button>

            <button
              onClick={handleDownloadPDF}
              className="px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-600/30 flex items-center gap-2"
            >
              <Download size={14} />
              <span>Download A4 PDF</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
