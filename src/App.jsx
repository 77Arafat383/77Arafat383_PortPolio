import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CaseStudyModal from './components/CaseStudyModal';
import CompetitiveProgramming from './components/CompetitiveProgramming';
import ContributionGraph from './components/ContributionGraph';
import Education from './components/Education';
import Achievements from './components/Achievements';
import LearningJourney from './components/LearningJourney';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-gray-100 font-sans selection:bg-indigo-600 selection:text-white relative">
      
      {/* Fixed Sticky Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Single-Page Content Flow */}
      <main>
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)} />
        <CompetitiveProgramming />
        <ContributionGraph />
        <Education />
        <Achievements />
        <LearningJourney />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Deep Case Study Modal */}
      {selectedCaseStudy && (
        <CaseStudyModal
          project={selectedCaseStudy}
          onClose={() => setSelectedCaseStudy(null)}
        />
      )}

      {/* Resume Preview & Download Modal */}
      {resumeModalOpen && (
        <ResumeModal
          onClose={() => setResumeModalOpen(false)}
        />
      )}

    </div>
  );
}
