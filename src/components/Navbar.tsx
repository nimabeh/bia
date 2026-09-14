import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FBF9F5]/90 backdrop-blur-md border-b-2 border-[#131A45] px-4 sm:px-8 py-3">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Clean Logo mark only */}
        <a href="#" className="flex items-center gap-2 group" aria-label="BIA Home">
          <div className="w-8 h-8 bg-[#131A45] text-white border-2 border-[#131A45] rounded flex items-center justify-center font-mono font-black text-sm shadow-[2px_2px_0px_0px_#2C3873] transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5">
            BIA
          </div>
        </a>

        {/* Section Navigation: exactly 4 items */}
        <nav className="hidden md:flex items-center gap-7 text-xs font-bold font-mono text-[#2C3873]">
          <a href="#problem" className="hover:text-[#131A45] hover:underline decoration-2 underline-offset-4 transition-colors">
            Problem
          </a>
          <a href="#how-it-works" className="hover:text-[#131A45] hover:underline decoration-2 underline-offset-4 transition-colors">
            How It Works
          </a>
          <a href="#two-answers" className="hover:text-[#131A45] hover:underline decoration-2 underline-offset-4 transition-colors">
            Dual Answers
          </a>
          <a href="#real-case" className="hover:text-[#131A45] hover:underline decoration-2 underline-offset-4 transition-colors">
            Real Case
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 border-2 border-[#131A45] rounded bg-white shadow-[2px_2px_0px_0px_#131A45]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-4 h-4 text-[#131A45]" /> : <Menu className="w-4 h-4 text-[#131A45]" />}
        </button>
      </div>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 pt-2 border-t-2 border-[#131A45] flex flex-col gap-2 font-mono font-bold text-xs bg-white p-3 rounded-lg border-2 border-[#131A45] shadow-[3px_3px_0px_0px_#131A45]">
          <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="py-1 text-[#2C3873] hover:text-[#131A45]">
            Problem
          </a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="py-1 text-[#2C3873] hover:text-[#131A45]">
            How It Works
          </a>
          <a href="#two-answers" onClick={() => setMobileMenuOpen(false)} className="py-1 text-[#2C3873] hover:text-[#131A45]">
            Dual Answers
          </a>
          <a href="#real-case" onClick={() => setMobileMenuOpen(false)} className="py-1 text-[#2C3873] hover:text-[#131A45]">
            Real Case
          </a>
        </div>
      )}
    </header>
  );
};
