import { MetricItem, ConnectorInfo, ProblemPoint, DualAnswerDetail, ComparisonRow, RoadmapItem } from '../types';

export const CASE_STUDY_META = {
  title: "BUSINESS IMPACT AGENT",
  acronym: "BIA",
  tagline: "Self-service impact analysis for rule changes",
  subheading: "An agentic framework that answers two questions before a ticket is raised: is this change feasible, and who else needs to know.",
  author: {
    name: "Nima Behravan",
    email: "behravan.nima@gmail.com",
    role: "Digital & AI Systems Builder",
    githubUrl: "https://github.com/nimabeh",
    portfolioUrl: "https://nimabeh.github.io/bia",
    pdfUrl: "https://nimabeh.github.io/bia-use-case.pdf",
    context: "Self-service impact analysis for enterprise rule changes"
  },
  statsSummary: [
    { label: "Systems Queried", val: "4 in parallel" },
    { label: "Downstream Blindspots", val: "0 undiscovered" },
    { label: "Human Verification", val: "100% in-the-loop" },
    { label: "Workflow Trigger", val: "Pre-ticket intent" }
  ]
};

export const PROBLEM_DATA = {
  headline: "A business rule rarely lives in one place.",
  subtext: "It's written up somewhere, implemented somewhere else, consumed by several services, and referenced in tickets nobody has cross-checked.",
  realWorldQuote: {
    text: "A wait-time rule changed for one customer segment and reached the front-end team only after the ticket was already in development.",
    attribution: "The real-world trigger for this build",
    sourceOrg: "Production Incident"
  },
  points: [
    {
      id: "no-shared-view",
      number: "01",
      title: "No shared view",
      description: "Documentation, tickets, service ownership, and code live in four separate systems with no single place to check impact.",
      impactTag: "Fragmented context",
      color: "#FEF08A" // Yellow
    },
    {
      id: "manual-cross-checks",
      number: "02",
      title: "Manual, informal cross-checks",
      description: "Validating a change means searching multiple tools by hand, then asking around on Slack/Teams to find out who is affected.",
      impactTag: "Tribal knowledge dependency",
      color: "#BAE6FD" // Sky
    },
    {
      id: "downstream-surprises",
      number: "03",
      title: "Downstream teams find out too late",
      description: "A change often reaches the consuming team only after a ticket is already in development, when the fix costs far more to patch.",
      impactTag: "Costly late rework",
      color: "#FECDD3" // Rose
    }
  ] as ProblemPoint[]
};

export const CONNECTORS: ConnectorInfo[] = [
  {
    id: "docs",
    name: "Documentation",
    iconName: "FileText",
    category: "Knowledge Base",
    description: "Confluence, wikis, and business policy specifications detailing the rule's documented intent and historical threshold variations.",
    whatItProvides: "Live business policy definition, target customer segments, and documented compliance requirements.",
    realRunResult: {
      status: "success",
      details: "Read live policy doc: 'Customer Segment Wait-Time Rules v3.2'. Detected previous multi-tier split.",
      itemsFound: [
        "Tier A (Gold/VIP): 48h wait-time",
        "Tier B (Standard): 96h wait-time",
        "Tier C (Regional): 72h wait-time"
      ]
    }
  },
  {
    id: "ticketing",
    name: "Ticketing & Backlog",
    iconName: "CheckSquare",
    category: "Active Work",
    description: "Jira and project tracking boards to detect active in-flight sprints, overlapping epics, or open PRs touching the same parameters.",
    whatItProvides: "Active sprint items, recent PRs, and concurrent regulatory roadmaps.",
    realRunResult: {
      status: "success",
      details: "Found active Sprint 14 ticket 'PROD-4829: Passenger Rebooking SLA overhaul' currently in Progress.",
      itemsFound: [
        "PROD-4829 (Status: In Progress, Assignee: Core Booking)",
        "Potential conflict with pending batch schedule job",
        "No conflicting architectural blockers"
      ]
    }
  },
  {
    id: "service-catalog",
    name: "Service Catalog",
    iconName: "Layers",
    category: "Ownership & Topology",
    description: "Internal developer portal (e.g. Backstage / Cortex) mapping microservice registry, API interfaces, and owning team slack handles.",
    whatItProvides: "Verified owning teams, direct downstream consumers, on-call contacts.",
    realRunResult: {
      status: "warning",
      details: "Queried service dependencies. One connector hit an auth expiration mid-run and gracefully alerted user.",
      itemsFound: [
        "Passenger Eligibility Service (Owner: Team Mercury)",
        "Booking Gateway API (Owner: Team FlightOps)",
        "⚠️ Alert: Auth token expired on secondary booking query — surfaced for human manual verification"
      ]
    }
  },
  {
    id: "source-control",
    name: "Source Control",
    iconName: "GitBranch",
    category: "Implementation",
    description: "GitHub / GitLab repositories hosting configuration files, feature flags, constants, and rule enforcement pipelines.",
    whatItProvides: "Exact code files, line numbers, repo branches, and feature flag keys.",
    realRunResult: {
      status: "success",
      details: "Located hardcoded config references and dynamic feature toggle definitions.",
      itemsFound: [
        "repo: passenger-services/src/rules/eligibility_rules.py (L142-158)",
        "config: config/regulatory_tiers.yaml ('wait_time_threshold_hours')",
        "flags: launchdarkly key 'enable-unified-72h-sla'"
      ]
    }
  }
];

export const DUAL_ANSWERS: { validation: DualAnswerDetail; impact: DualAnswerDetail } = {
  validation: {
    title: "Validation",
    question: "Can this change be made?",
    badge: "V",
    color: "#86EFAC", // Mint
    items: [
      {
        title: "Current state",
        description: "What the rule looks like today, pulled live from documentation.",
        concreteExample: "Retrieves live policies showing previously fragmented thresholds (48h, 72h, 96h) rather than guessing from old design docs."
      },
      {
        title: "Feasibility & conflicts",
        description: "Whether the change is structurally straightforward, and any open work that overlaps.",
        concreteExample: "Cross-checks active Jira sprints to ensure another squad isn't concurrently refactoring eligibility thresholds."
      },
      {
        title: "Code location",
        description: "Exactly where the implementation lives, so the change isn't a search exercise.",
        concreteExample: "Pinned down to `passenger-services/src/rules/eligibility_rules.py:142` and `config/regulatory_tiers.yaml`."
      }
    ]
  },
  impact: {
    title: "Impact",
    question: "Who else needs to know?",
    badge: "I",
    color: "#DDD6FE", // Lilac
    items: [
      {
        title: "Affected components",
        description: "Every downstream service or component the rule feeds into.",
        concreteExample: "Surfaced 3 distinct components: Passenger Eligibility Service, Mobile Notification Dispatcher, and Booking Gateway."
      },
      {
        title: "Owning teams",
        description: "Who to notify, pulled from the service catalog rather than tribal knowledge.",
        concreteExample: "Identified Team Mercury (Passenger Services) and Team FlightOps (Booking Gateway), preventing blind deployment."
      },
      {
        title: "Hidden dependencies",
        description: "Consumers a few steps removed that a manual check would likely miss.",
        concreteExample: "Caught 2 asynchronous background cron jobs and customer refund notification listeners not listed in top-level docs."
      }
    ]
  }
};

export const DEMO_REAL_CHANGE = {
  title: "Demonstrated on a real change",
  subtitle: "A regulatory update unified a customer-eligibility wait-time threshold to a single value across several previously inconsistent configurations.",
  promptUsed: "Unify customer eligibility wait-time threshold to 72 hours across all tiers to comply with the updated regional passenger rights directive.",
  unattendedExecution: "Given only a plain-language description, the agent ran the full workflow unattended.",
  metrics: [
    {
      id: "m1",
      value: "4",
      label: "systems queried in parallel",
      subtext: "documentation, tickets, service catalog, source control",
      accentColor: "#FEF08A"
    },
    {
      id: "m2",
      value: "3",
      label: "affected components found",
      subtext: "spanning two separate owning teams",
      accentColor: "#86EFAC"
    },
    {
      id: "m3",
      value: "2",
      label: "hidden dependencies surfaced",
      subtext: "not obvious from the rule definition itself",
      accentColor: "#DDD6FE"
    },
    {
      id: "m4",
      value: "72h",
      label: "unified threshold identified",
      subtext: "with per-configuration current values pulled live",
      accentColor: "#BAE6FD"
    }
  ] as MetricItem[],
  resilienceCallout: {
    title: "Real-World Resilience & Human in the Loop",
    text: "One connector hit an authentication error mid-run. Rather than skip it silently, the agent flagged it for a manual check, an explicit trade-off from keeping a human in the loop.",
    tradeoff: "Graceful failure beats silent assumptions every time in enterprise production."
  }
};

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    aspect: "Operational Trigger",
    traditional: "Analytical and passive — describes what's connected after the fact.",
    bia: "Active and triggered at the exact moment someone proposes a change.",
    impact: "Stops the problem before the code is even touched."
  },
  {
    aspect: "Discovery Effort",
    traditional: "You have to go looking for the answer, manually navigating dashboards.",
    bia: "Takes a plain-language description as input and does the investigation for you.",
    impact: "Zero specialized query language or tribal navigation needed."
  },
  {
    aspect: "Data Origin",
    traditional: "Reconstructs history from historical logs, traces, and stale metadata.",
    bia: "Queries live systems (docs, code, active tickets, service catalog) in real-time.",
    impact: "Reflects current in-flight state, not last week's snapshot."
  },
  {
    aspect: "Target Objective",
    traditional: "Valuable for post-mortem audit, compliance, and retroactive discovery.",
    bia: "Engineered specifically to stop bugs and misalignments before work starts.",
    impact: "Prevents high-cost rework during development sprints."
  },
  {
    aspect: "Final Outcome",
    traditional: "Static graph, dependency matrix, or analytical report.",
    bia: "An approved, pre-filled, cross-team validated ticket with human sign-off.",
    impact: "Directly bridges intent to execution."
  }
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: "auto-detect",
    title: "Automatic Change Detection",
    description: "Change descriptions generated automatically from document diffs and database schema modifications.",
    status: "Upcoming",
    tag: "Proactive Triggers"
  },
  {
    id: "persistent-backend",
    title: "Persistent Backend & Audit Trail",
    description: "Full audit trail of all queried configurations with reusable, cached impact lookups across squad boundaries.",
    status: "In Design",
    tag: "Enterprise Scale"
  },
  {
    id: "unregistered-deps",
    title: "Unregistered Dependencies Discovery",
    description: "Surfaced dynamically from deep AST code analysis and data lineage, not merely the declared service catalog.",
    status: "Research",
    tag: "Deep Static Analysis"
  },
  {
    id: "severity-routing",
    title: "Severity-Based Action Routing",
    description: "Intelligent triage that automatically chooses whether to notify on Slack, draft a Jira ticket, or log only.",
    status: "Planned",
    tag: "Smart Dispatch"
  }
];
