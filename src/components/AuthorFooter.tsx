import React from 'react';
import { Mail, Github, FileDown } from 'lucide-react';

export const AuthorFooter: React.FC = () => {
  return (
    <footer className="bg-[#131A45] text-white py-8 px-4 sm:px-8 border-t-2 border-[#1E2760]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 font-mono text-xs">
        <div>
          <div className="font-heading font-black text-lg text-white tracking-tight">
            Nima Behravan
          </div>
          <div className="text-[#8992AF] mt-0.5 text-[11px]">
            Systems Architecture & AI Engineering
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <a
            href="mailto:behravan.nima@gmail.com"
            className="neo-button px-3 py-1.5 bg-[#E46535] text-white hover:bg-[#d05324] flex items-center gap-1.5 font-bold text-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>behravan.nima@gmail.com</span>
          </a>

          <a
            href="https://github.com/nimabeh"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button px-3 py-1.5 bg-white text-[#131A45] hover:bg-neutral-100 flex items-center gap-1.5 font-bold text-xs"
          >
            <Github className="w-3.5 h-3.5" />
            <span>github.com/nimabeh</span>
          </a>

          <a
            href="https://nimabeh.github.io/bia-use-case.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="neo-button px-3 py-1.5 bg-[#2C3873] text-white hover:bg-[#38468B] flex items-center gap-1.5 font-bold text-xs"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>PDF Use Case</span>
          </a>
        </div>
      </div>
    </footer>
  );
};
