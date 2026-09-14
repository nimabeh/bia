import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-14 px-4 sm:px-8 border-b-2 border-[#131A45] bg-[#FBF9F5] overflow-hidden">
      {/* Background subtle dot pattern */}
      <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Left: Text & Info (8 cols) */}
          <div className="lg:col-span-8">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border-2 border-[#131A45] rounded font-mono text-xs font-bold text-[#131A45] shadow-[2px_2px_0px_0px_#131A45] mb-5">
              <span className="w-2 h-2 rounded-full bg-[#F27C4F] animate-ping" />
              <span>Self-Service Impact Analysis</span>
            </div>

            {/* Title: exactly "BUSINESS IMPACT AGENT" */}
            <h1 className="font-heading font-black text-4xl sm:text-6xl text-[#131A45] tracking-tight leading-[1.06] mb-5">
              BUSINESS IMPACT AGENT
            </h1>

            {/* Core Statement */}
            <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-xl font-normal">
              An agentic framework that answers two questions before a ticket is raised: <span className="font-bold text-[#131A45]">is this change feasible</span>, and <span className="font-bold text-[#131A45]">who else needs to know</span>.
            </p>
          </div>

          {/* Right: Animated Faded Orange Circle with Radiating Radius Rings (no text inside) */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
              {/* Outer Radius Ring 3 (dashed slate navy) */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#2C3873]/25 animate-ripple" />
              
              {/* Radius Ring 2 (solid subtle navy) */}
              <div className="absolute inset-7 rounded-full border-2 border-[#131A45]/20 animate-ripple-delayed" />
              
              {/* Radius Ring 1 (warm faded amber/coral accent ring) */}
              <div className="absolute inset-14 rounded-full border-2 border-dashed border-[#F27C4F]/40" />
              
              {/* Crosshair axis markers */}
              <div className="absolute w-full h-[1px] bg-[#131A45]/15" />
              <div className="absolute h-full w-[1px] bg-[#131A45]/15" />

              {/* Central Faded Orange Sphere - exactly as depicted in reference, NO title inside */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full faded-orange-sphere animate-sphere flex items-center justify-center pointer-events-none" />

              {/* Orbiting system indicator tags */}
              <div className="absolute top-2 right-4 bg-white border border-[#131A45] px-2 py-0.5 rounded font-mono text-[10px] font-bold text-[#131A45] shadow-[1.5px_1.5px_0px_0px_#131A45]">
                Docs
              </div>
              <div className="absolute bottom-4 right-2 bg-white border border-[#131A45] px-2 py-0.5 rounded font-mono text-[10px] font-bold text-[#131A45] shadow-[1.5px_1.5px_0px_0px_#131A45]">
                Tickets
              </div>
              <div className="absolute bottom-2 left-3 bg-white border border-[#131A45] px-2 py-0.5 rounded font-mono text-[10px] font-bold text-[#131A45] shadow-[1.5px_1.5px_0px_0px_#131A45]">
                Services
              </div>
              <div className="absolute top-4 left-2 bg-white border border-[#131A45] px-2 py-0.5 rounded font-mono text-[10px] font-bold text-[#131A45] shadow-[1.5px_1.5px_0px_0px_#131A45]">
                Code
              </div>
            </div>
          </div>

        </div>

        {/* 4 Stat Highlights in balanced warm + navy palette */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="neo-box-sm p-3 bg-white text-center">
            <div className="font-mono text-xl sm:text-2xl font-black text-[#131A45]">4 Systems</div>
            <div className="text-xs font-bold text-neutral-600 mt-0.5">Queried in parallel</div>
          </div>

          <div className="neo-box-sm p-3 bg-[#EAEFFA] text-center">
            <div className="font-mono text-xl sm:text-2xl font-black text-[#131A45]">Pre-Ticket</div>
            <div className="text-xs font-bold text-[#2C3873] mt-0.5">Active intervention</div>
          </div>

          <div className="neo-box-sm p-3 bg-[#FDF3ED] text-center">
            <div className="font-mono text-xl sm:text-2xl font-black text-[#E46535]">2 Answers</div>
            <div className="text-xs font-bold text-neutral-800 mt-0.5">Validation & Impact</div>
          </div>

          <div className="neo-box-sm p-3 bg-white text-center">
            <div className="font-mono text-xl sm:text-2xl font-black text-[#131A45]">100% Loop</div>
            <div className="text-xs font-bold text-neutral-600 mt-0.5">Human approval gate</div>
          </div>
        </div>

      </div>
    </section>
  );
};
