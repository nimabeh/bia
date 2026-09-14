import React from 'react';

export const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="py-14 px-4 sm:px-8 border-b-2 border-[#131A45] bg-[#FAF7F0]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-2.5 py-0.5 bg-[#131A45] text-white font-mono text-xs font-bold uppercase rounded mb-2">
            Comparison
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#131A45] mb-2 tracking-tight">
            What makes this different
          </h2>
          <p className="text-sm text-[#2C3873] font-mono font-bold">
            Passive lineage analysis vs. proactive agentic intervention
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Traditional Lineage */}
          <div className="neo-box p-6 bg-white border-t-[6px] border-t-neutral-400">
            <h3 className="font-heading font-black text-lg text-neutral-800 mb-4 pb-2 border-b-2 border-[#131A45]">
              Lineage & process-mining tools
            </h3>

            <ul className="space-y-3 font-medium text-xs sm:text-sm text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="font-bold text-neutral-400">–</span>
                <span><strong>Analytical & passive:</strong> Describe connections after changes have merged.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-neutral-400">–</span>
                <span><strong>Manual retrieval:</strong> Engineers must actively search tools for answers.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-neutral-400">–</span>
                <span><strong>Reconstruct history:</strong> Built primarily for audits and retrospective discovery.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-neutral-400">–</span>
                <span><strong>No action:</strong> Does not prevent cross-team surprises before coding starts.</span>
              </li>
            </ul>
          </div>

          {/* Business Impact Agent */}
          <div className="neo-box p-6 bg-white border-t-[6px] border-t-[#E46535]">
            <h3 className="font-heading font-black text-lg text-[#131A45] mb-4 pb-2 border-b-2 border-[#131A45]">
              Business Impact Agent
            </h3>

            <ul className="space-y-3 font-medium text-xs sm:text-sm text-neutral-800">
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#E46535]">→</span>
                <span><strong>Active & triggered:</strong> Engages at the moment a change is proposed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#E46535]">→</span>
                <span><strong>Plain-language input:</strong> Requires zero specialized query syntax or tool expertise.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#E46535]">→</span>
                <span><strong>Pre-ticket synthesis:</strong> Delivers cross-team validation before work is committed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-[#E46535]">→</span>
                <span><strong>Action-oriented:</strong> Produces an approved, fully-documented ticket in one click.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
