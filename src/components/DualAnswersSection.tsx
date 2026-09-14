import React from 'react';

export const DualAnswersSection: React.FC = () => {
  return (
    <section id="two-answers" className="py-14 px-4 sm:px-8 border-b-2 border-[#131A45] bg-[#FAF7F0]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-2.5 py-0.5 bg-[#131A45] text-white font-mono text-xs font-bold uppercase rounded mb-2">
            The Two Answers
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#131A45] mb-2 tracking-tight">
            Every request gets the same two answers
          </h2>
          <p className="text-sm font-bold text-[#2C3873] font-mono">
            Kept separate on purpose so reasoning stays auditable rather than a single black-box verdict.
          </p>
        </div>

        {/* Dual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Validation */}
          <div className="neo-box p-6 bg-white border-t-[6px] border-t-[#2C3873]">
            <div className="flex items-center gap-3 border-b-2 border-[#131A45] pb-3 mb-5">
              <div className="w-9 h-9 rounded bg-[#EAEFFA] border-2 border-[#131A45] flex items-center justify-center font-mono font-black text-base text-[#131A45] shadow-[2px_2px_0px_0px_#131A45]">
                V
              </div>
              <div>
                <h3 className="font-heading font-black text-lg text-[#131A45]">Validation</h3>
                <p className="text-xs font-mono font-bold text-[#2C3873]">Can this change be made?</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-[#FAF9F5] border border-[#131A45]/30 rounded">
                <div className="font-heading font-black text-[#131A45] mb-0.5">Current state</div>
                <div className="text-neutral-600">Active rule definition pulled live from documentation.</div>
              </div>

              <div className="p-3 bg-[#FAF9F5] border border-[#131A45]/30 rounded">
                <div className="font-heading font-black text-[#131A45] mb-0.5">Feasibility & conflicts</div>
                <div className="text-neutral-600">Structural viability and any overlapping open work.</div>
              </div>

              <div className="p-3 bg-[#FAF9F5] border border-[#131A45]/30 rounded">
                <div className="font-heading font-black text-[#131A45] mb-0.5">Code location</div>
                <div className="text-neutral-600">Exact repository paths and configuration anchors.</div>
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className="neo-box p-6 bg-white border-t-[6px] border-t-[#E46535]">
            <div className="flex items-center gap-3 border-b-2 border-[#131A45] pb-3 mb-5">
              <div className="w-9 h-9 rounded bg-[#FDF3ED] border-2 border-[#131A45] flex items-center justify-center font-mono font-black text-base text-[#E46535] shadow-[2px_2px_0px_0px_#131A45]">
                I
              </div>
              <div>
                <h3 className="font-heading font-black text-lg text-[#131A45]">Impact</h3>
                <p className="text-xs font-mono font-bold text-[#E46535]">Who else needs to know?</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-[#FAF9F5] border border-[#131A45]/30 rounded">
                <div className="font-heading font-black text-[#131A45] mb-0.5">Affected components</div>
                <div className="text-neutral-600">Downstream services and pipelines that consume the rule.</div>
              </div>

              <div className="p-3 bg-[#FAF9F5] border border-[#131A45]/30 rounded">
                <div className="font-heading font-black text-[#131A45] mb-0.5">Owning teams</div>
                <div className="text-neutral-600">Official owners from the service registry, avoiding tribal guesses.</div>
              </div>

              <div className="p-3 bg-[#FAF9F5] border border-[#131A45]/30 rounded">
                <div className="font-heading font-black text-[#131A45] mb-0.5">Hidden dependencies</div>
                <div className="text-neutral-600">Transitive consumers that manual checks routinely overlook.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
