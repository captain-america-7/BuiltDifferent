// AUDITED & CLEANED — 2026-03-09
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Extracurricular from './components/Extracurricular';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#000000] text-white min-h-screen font-body selection:bg-[#00f5d4]/30 selection:text-[#00f5d4]">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Extracurricular />
      <Contact />

      <footer className="bg-[#000000] py-8 border-t border-[#00f5d4]/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="relative z-10">
          <p className="text-[#4da6ff] font-code text-sm mb-2">&lt;System Offline /&gt;</p>
          <p className="text-gray-500 font-code text-xs">
            &copy; {new Date().getFullYear()} Nalla Aruntej. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
