import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { DualAnswersSection } from './components/DualAnswersSection';
import { InteractiveDemo } from './components/InteractiveDemo';
import { ComparisonSection } from './components/ComparisonSection';
import { AuthorFooter } from './components/AuthorFooter';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBF9F5] text-neutral-900 selection:bg-[#2C3873] selection:text-white">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <ArchitectureSection />
        <DualAnswersSection />
        <InteractiveDemo />
        <ComparisonSection />
      </main>

      <AuthorFooter />
    </div>
  );
}
