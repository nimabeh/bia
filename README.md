# Business Impact Agent (BIA)

**Business Impact Agent** is a proactive, agentic framework for product teams to analyze proposed business and regulatory changes across live systems and services *before* a ticket is committed.

It automatically evaluates two core questions:
- **Feasibility**: Which services, endpoints, and configs need to change, and what dependencies exist?
- **Impact**: Which downstream teams, shared contracts, and service owners need to know?

---

## Workflow

```text
[ Product Owner / Engineer ]
            │  (Plain-language change proposal)
            ▼
   ┌─────────────────┐
   │    BIA Agent    │ ─── Orchestrates multi-source queries
   └────────┬────────┘
            │
            ├─► Confluence / Docs (Business rules & specifications)
            ├─► Jira / Linear     (Active work & historical issues)
            ├─► Service Catalog   (Ownership, APIs & dependencies)
            └─► GitHub / GitLab   (Code references & config schemas)
            │
            ▼
   ┌─────────────────┐
   │  Dual Synthesis │ ─── Feasibility & Impact Analysis
   └────────┬────────┘
            │
            ▼
   ┌─────────────────┐
   │ Human Approval  │ ─── 100% human-in-the-loop review
   └────────┬────────┘
            │
            ▼
   [ Pre-populated, fully-documented ticket ready for sprint ]
```

---

## Live Case Study & Demo

- **Interactive Case Study**: [nimabeh.github.io/bia](https://nimabeh.github.io/bia)

---

## Author

- **Nima Behravan** — [github.com/nimabeh](https://github.com/nimabeh) · [behravan.nima@gmail.com](mailto:behravan.nima@gmail.com)
