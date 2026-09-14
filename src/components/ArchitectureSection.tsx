import React from 'react';
import { FileText, CheckSquare, Layers, GitBranch } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  return (
    <section id="how-it-works" className="py-14 px-4 sm:px-8 border-b-2 border-[#131A45] bg-[#FBF9F5]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-2.5 py-0.5 bg-[#131A45] text-white font-mono text-xs font-bold uppercase rounded mb-2">
            Architecture
          </div>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-[#131A45] mb-2 tracking-tight">
            How It Works
          </h2>
          <p className="text-sm text-[#2C3873] font-mono font-bold">
            Built and demonstrated end-to-end
          </p>
        </div>

        {/* Linear Step Workflow */}
        <div className="neo-box p-5 bg-white mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
            {/* Step 1 */}
            <div className="p-3 border-2 border-[#131A45] rounded-md bg-white shadow-[2px_2px_0px_0px_#131A45]">
              <span className="font-mono text-[10px] font-black uppercase bg-[#131A45] text-white px-1.5 py-0.5 rounded">01</span>
              <div className="font-heading font-black text-sm text-[#131A45] mt-2">User</div>
              <p className="text-[11px] text-neutral-600 mt-1 leading-tight">
                Plain-language change proposal
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-3 border-2 border-[#131A45] rounded-md bg-white shadow-[2px_2px_0px_0px_#131A45]">
              <span className="font-mono text-[10px] font-black uppercase bg-[#131A45] text-white px-1.5 py-0.5 rounded">02</span>
              <div className="font-heading font-black text-sm text-[#131A45] mt-2">BIA Agent</div>
              <p className="text-[11px] text-neutral-600 mt-1 leading-tight">
                Orchestrates multi-source queries
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-3 border-2 border-[#131A45] rounded-md bg-[#EAEFFA] shadow-[2px_2px_0px_0px_#131A45]">
              <span className="font-mono text-[10px] font-black uppercase bg-[#131A45] text-white px-1.5 py-0.5 rounded">03</span>
              <div className="font-heading font-black text-sm text-[#131A45] mt-2">4 Connectors</div>
              <p className="text-[11px] text-[#2C3873] mt-1 leading-tight">
                Authenticated, queried in parallel
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-3 border-2 border-[#131A45] rounded-md bg-[#F1F5F9] shadow-[2px_2px_0px_0px_#131A45]">
              <span className="font-mono text-[10px] font-black uppercase bg-[#131A45] text-white px-1.5 py-0.5 rounded">04</span>
              <div className="font-heading font-black text-sm text-[#131A45] mt-2">Approval</div>
              <p className="text-[11px] text-neutral-600 mt-1 leading-tight">
                Human review (no blind action)
              </p>
            </div>

            {/* Step 5 */}
            <div className="p-3 border-2 border-[#131A45] rounded-md bg-[#FDF3ED] shadow-[2px_2px_0px_0px_#131A45]">
              <span className="font-mono text-[10px] font-black uppercase bg-[#131A45] text-white px-1.5 py-0.5 rounded">05</span>
              <div className="font-heading font-black text-sm text-[#131A45] mt-2">Ticket Ready</div>
              <p className="text-[11px] text-neutral-700 mt-1 leading-tight">
                Context & files pre-populated
              </p>
            </div>
          </div>
        </div>

        {/* 4 Live Connectors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="neo-box-sm p-4 bg-white">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#2C3873]">
              <FileText className="w-4 h-4 text-[#131A45]" />
              <span>01. Documentation</span>
            </div>
            <div className="font-heading font-black text-sm text-[#131A45] mb-1">
              Policy & Specs
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Fetches documented rules and segment baseline configurations.
            </p>
          </div>

          <div className="neo-box-sm p-4 bg-white">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#2C3873]">
              <CheckSquare className="w-4 h-4 text-[#131A45]" />
              <span>02. Ticketing</span>
            </div>
            <div className="font-heading font-black text-sm text-[#131A45] mb-1">
              Active Sprints
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Detects overlapping in-flight stories, epics, and pending pull requests.
            </p>
          </div>

          <div className="neo-box-sm p-4 bg-white">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#2C3873]">
              <Layers className="w-4 h-4 text-[#131A45]" />
              <span>03. Service Catalog</span>
            </div>
            <div className="font-heading font-black text-sm text-[#131A45] mb-1">
              Service Registry
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Maps verified service owners and downstream consumers.
            </p>
          </div>

          <div className="neo-box-sm p-4 bg-white">
            <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-[#2C3873]">
              <GitBranch className="w-4 h-4 text-[#131A45]" />
              <span>04. Source Control</span>
            </div>
            <div className="font-heading font-black text-sm text-[#131A45] mb-1">
              Code & Flags
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Identifies concrete file paths, configs, and feature toggles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
