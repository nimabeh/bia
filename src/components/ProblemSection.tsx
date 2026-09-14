import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-14 px-4 sm:px-8 border-b-2 border-[#131A45] bg-[#FAF7F0]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-2.5 py-0.5 bg-[#131A45] text-white font-mono text-xs font-bold uppercase rounded mb-2">
            The Problem
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#131A45] mb-2 tracking-tight">
            A business rule rarely lives in one place.
          </h2>
          <p className="text-base text-neutral-700 leading-relaxed font-normal max-w-2xl">
            It's documented in one system, implemented in code, consumed by multiple services, and referenced across disconnected tickets.
          </p>
        </div>

        {/* Real-World Trigger Quote */}
        <div className="neo-box p-5 sm:p-6 bg-[#FDF6EE] border-l-[6px] border-l-[#E46535] mb-8">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-[#E46535] uppercase mb-1.5">
            <AlertCircle className="w-4 h-4 text-[#E46535]" />
            Real-world trigger incident
          </div>
          <blockquote className="text-lg sm:text-xl font-heading font-bold text-[#131A45] italic">
            “A wait-time rule changed for one customer segment and reached the front-end team only after the ticket was already in development.”
          </blockquote>
          <div className="mt-2 font-mono text-xs text-[#131A45] font-bold">
            → 4 systems to cross-check manually, every time
          </div>
        </div>

        {/* 3 Core Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="neo-box p-5 bg-white">
            <div className="font-mono text-xl font-black text-[#E46535] mb-2">01</div>
            <h3 className="font-heading font-black text-base text-[#131A45] mb-1.5">
              No shared view
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Docs, tickets, service ownership, and repositories reside in 4 separate tools with no unified visibility.
            </p>
          </div>

          <div className="neo-box p-5 bg-white">
            <div className="font-mono text-xl font-black text-[#E46535] mb-2">02</div>
            <h3 className="font-heading font-black text-base text-[#131A45] mb-1.5">
              Manual cross-checks
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Assessing impact requires hopping across tools by hand and asking around to piece together dependencies.
            </p>
          </div>

          <div className="neo-box p-5 bg-white">
            <div className="font-mono text-xl font-black text-[#E46535] mb-2">03</div>
            <h3 className="font-heading font-black text-base text-[#131A45] mb-1.5">
              Downstream surprises
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              Consuming services discover changes mid-sprint or post-deployment, when remediation is slow and costly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
