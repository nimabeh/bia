import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export const InteractiveDemo: React.FC = () => {
  return (
    <section id="real-case" className="py-14 px-4 sm:px-8 border-b-2 border-[#131A45] bg-[#FBF9F5]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-2.5 py-0.5 bg-[#131A45] text-white font-mono text-xs font-bold uppercase rounded mb-2 border-2 border-[#131A45] shadow-[2px_2px_0px_0px_#2C3873]">
            Demonstrated on a Real Change
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#131A45] mb-2 tracking-tight">
            Regulatory Wait-Time Rule Unification
          </h2>
          <p className="text-base text-neutral-700 font-normal max-w-2xl leading-relaxed">
            A regulatory mandate required unifying customer-eligibility wait times to a single 72h threshold across previously inconsistent configurations. The agent ran the full workflow end-to-end from a plain-language prompt.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="neo-box p-4 bg-white">
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#131A45]">4</div>
            <div className="font-heading font-black text-sm text-[#131A45] mt-1">
              systems queried in parallel
            </div>
            <div className="text-[11px] font-mono text-[#2C3873] mt-1">
              documentation, tickets, catalog, git
            </div>
          </div>

          <div className="neo-box p-4 bg-white">
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#2C3873]">3</div>
            <div className="font-heading font-black text-sm text-[#131A45] mt-1">
              affected components found
            </div>
            <div className="text-[11px] font-mono text-[#2C3873] mt-1">
              spanning two owning teams
            </div>
          </div>

          <div className="neo-box p-4 bg-white">
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#E46535]">2</div>
            <div className="font-heading font-black text-sm text-[#131A45] mt-1">
              hidden dependencies surfaced
            </div>
            <div className="text-[11px] font-mono text-neutral-600 mt-1">
              unregistered in initial specs
            </div>
          </div>

          <div className="neo-box p-4 bg-[#EAEFFA]">
            <div className="font-mono text-3xl sm:text-4xl font-black text-[#131A45]">72h</div>
            <div className="font-heading font-black text-sm text-[#131A45] mt-1">
              unified threshold applied
            </div>
            <div className="text-[11px] font-mono text-[#2C3873] mt-1">
              across all segment configs
            </div>
          </div>
        </div>

        {/* Real-World Resilience Callout */}
        <div className="neo-box p-4 sm:p-5 bg-[#FDF6EE] border-l-[6px] border-l-[#E46535] flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#E46535] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
            <strong className="text-[#131A45] font-bold">Real-world resilience: </strong>
            One connector encountered an authentication error mid-run. Rather than silently skipping the data source, the agent flagged it for explicit human verification — preserving audit integrity before ticket creation.
          </div>
        </div>
      </div>
    </section>
  );
};
