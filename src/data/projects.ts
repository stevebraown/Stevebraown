import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "khokha-pay",
    title: "KhokhaPay",
    shortTagline:
      "Payment platform for utilities and public services built for unreliable networks.",
    description:
      "Designed a transaction-based system supporting agents and direct users, prioritizing correctness, auditability, and recovery over rapid feature expansion.",
    role: "Product + systems engineering",
    bullets: [
      "Modeled explicit transaction states to prevent silent failure and double-charging.",
      "Supported agent-assisted and direct payments with traceable handoffs.",
      "Designed for recovery under partial network loss and retries."
    ],
    techStack: ["Rust", "TypeScript", "Node.js", "MongoDB", "Payment APIs"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: true,
    accent: "from-primary/25 via-primary-2/20 to-transparent",
    caseStudy: {
      problem:
        "Utility and public-service payments were fragmented and unreliable, with poor connectivity causing silent failures and limited traceability.",
      approach:
        "Designed a transaction-centric architecture that balances correctness, auditability, and recovery across agent-assisted and direct payment flows.",
      outcomes: [
        "Multi-channel payment support for agents and direct users.",
        "Explicit transaction state model to prevent silent failure.",
        "Architecture ready to scale across regions and providers."
      ]
    }
  },
  {
    id: "campus-connect",
    title: "Campus Connect",
    shortTagline:
      "Role-aware platform for structured coordination in academic environments.",
    description:
      "Built a multi-user platform with predictable workflows, real-time messaging, and profile-driven access control.",
    role: "Full-stack platform engineering",
    bullets: [
      "Designed role-aware workflows that kept coordination structured.",
      "Built profile completion gates to reduce onboarding gaps.",
      "Separated real-time features from core platform logic."
    ],
    techStack: ["TypeScript", "React", "Node.js", "Real-time messaging"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: true,
    accent: "from-primary-2/25 via-primary/20 to-transparent",
    caseStudy: {
      problem:
        "Students and staff relied on fragmented tools, making coordination inconsistent and hard to scale across cohorts.",
      approach:
        "Delivered a role-aware platform with structured workflows and predictable access control, prioritizing clarity over feature breadth.",
      outcomes: [
        "Supported dozens of concurrent users during testing.",
        "Reduced onboarding friction through enforced profile completion.",
        "Clear separation between real-time features and core logic."
      ]
    }
  },
  {
    id: "rust-kv",
    title: "Rust Key-Value Database",
    shortTagline:
      "Persistent key-value store built to explore systems design in Rust.",
    description:
      "Implemented a small database from first principles to study storage layout, indexing, and durability trade-offs.",
    role: "Systems engineering (Rust)",
    bullets: [
      "Implemented persistence and indexing with clear module boundaries.",
      "Applied Rust ownership to enforce safety in storage APIs.",
      "Documented trade-offs and future extensions as design notes."
    ],
    techStack: ["Rust"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: true,
    accent: "from-primary/20 via-transparent to-primary-2/20",
    caseStudy: {
      problem:
        "Most developers rely on databases without understanding how storage, indexing, and durability affect correctness and performance.",
      approach:
        "Built a small persistent database with a simple query interface to study real storage trade-offs using Rust's ownership model.",
      outcomes: [
        "Predictable persistence with clear performance characteristics.",
        "Practical experience applying Rust ownership and concurrency.",
        "Modular structure documented with short design notes."
      ]
    }
  },
  {
    id: "sentinel-pulse",
    title: "Sentinel Pulse",
    shortTagline: "Operational visibility for systems that cannot go dark.",
    description:
      "Designed a monitoring cockpit that keeps signal-to-noise high, with guided triage and dependable status surfaces.",
    role: "Product engineering",
    bullets: [
      "Designed telemetry surfaces that keep operators oriented under pressure.",
      "Built prioritization patterns to reduce alert fatigue.",
      "Delivered a reusable dashboard system for operational views."
    ],
    techStack: ["React", "TypeScript", "WebSockets", "Vite"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: false,
    accent: "from-primary/15 via-transparent to-primary-2/20",
    caseStudy: {
      problem:
        "Operational teams lacked clear visibility, with alert noise hiding meaningful signals.",
      approach:
        "Designed a monitoring cockpit with prioritization, guided triage, and stable status surfaces.",
      outcomes: [
        "Clearer signal prioritization for operators.",
        "Reusable dashboard components for ongoing visibility.",
        "Guided flows that reduce confusion under pressure."
      ]
    }
  },
  {
    id: "the-box",
    title: "The Box",
    shortTagline:
      "Secure document workflows with audit-ready visibility and integrity checks.",
    description:
      "A privacy-first workspace for sensitive files and approvals, built for traceability, integrity validation, and controlled access.",
    role: "Full-stack engineering",
    bullets: [
      "Delivered granular access control with audit-ready visibility.",
      "Built upload flows with integrity validation and history.",
      "Structured review workflows for decision-makers."
    ],
    techStack: ["Next.js", "PostgreSQL", "Node.js", "Auth", "Tailwind"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: false,
    accent: "from-primary-2/20 via-transparent to-primary/20",
    caseStudy: {
      problem:
        "Sensitive files and approvals needed secure access with clear accountability.",
      approach:
        "Built a privacy-first workspace with granular permissions, audit trails, and structured review steps.",
      outcomes: [
        "Audit-ready access history across sensitive content.",
        "Validated uploads with integrity checks.",
        "Clear approval workflows for decision-makers."
      ]
    }
  },
  {
    id: "staterail",
    title: "StateRail",
    shortTagline: "Workflow orchestration with predictable state transitions.",
    description:
      "An orchestration console that sequences tasks, monitors pipelines, and surfaces operational analytics with minimal friction.",
    role: "Product engineering",
    bullets: [
      "Built a workflow builder focused on predictable state transitions.",
      "Connected event streams to operational analytics.",
      "Designed feedback patterns that keep operators informed."
    ],
    techStack: ["React", "Node.js", "GraphQL", "TypeScript"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: false,
    accent: "from-primary/15 via-transparent to-primary-2/20",
    caseStudy: {
      problem:
        "Automation pipelines were hard to track, with unclear state and limited visibility.",
      approach:
        "Delivered an orchestration console with explicit workflow states and event-driven analytics.",
      outcomes: [
        "Predictable workflow execution and monitoring.",
        "Unified operational metrics for pipeline health.",
        "Operator feedback loops that improve reliability."
      ]
    }
  },
  {
    id: "atlas-commerce",
    title: "Atlas Commerce",
    shortTagline: "Payment-ready storefront with resilient checkout flows.",
    description:
      "A modern commerce experience focused on reliability, performance, and consistent purchase state.",
    role: "Frontend engineering",
    bullets: [
      "Refined checkout states to minimize abandonment paths.",
      "Introduced modular merchandising blocks for rapid updates.",
      "Improved performance signals across key journeys."
    ],
    techStack: ["React", "Redux", "Node.js", "Stripe", "Vercel"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: false,
    accent: "from-primary/15 via-transparent to-primary-2/20",
    caseStudy: {
      problem:
        "Checkout flows were inconsistent, making purchase outcomes harder to predict.",
      approach:
        "Refined purchase states and modular merchandising to keep behavior consistent at scale.",
      outcomes: [
        "More predictable checkout behavior under real traffic.",
        "Faster content updates without engineering bottlenecks.",
        "Improved performance signals across key journeys."
      ]
    }
  },
  {
    id: "nova-base",
    title: "NovaBase",
    shortTagline: "Knowledge base with semantic search and versioned content.",
    description:
      "A reading-focused knowledge base with semantic search, versioned content, and clear publishing workflows.",
    role: "Full-stack engineering",
    bullets: [
      "Implemented semantic search for dependable discovery.",
      "Designed reading-focused layouts for long-form clarity.",
      "Built versioned content workflows for traceability."
    ],
    techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: false,
    accent: "from-primary-2/20 via-transparent to-primary/20",
    caseStudy: {
      problem:
        "Knowledge was scattered across tools, making retrieval slow and unreliable.",
      approach:
        "Created structured content workflows with semantic search and versioned publishing.",
      outcomes: [
        "Faster discovery through structured search.",
        "Versioned content with clear editorial trails.",
        "Layouts optimized for deep reading and clarity."
      ]
    }
  },
  {
    id: "track-it",
    title: "Track It",
    shortTagline: "Habit tracker PWA with offline-first, local-only storage.",
    description:
      "A client-side habit tracker that keeps data fully local, supports custom cadences, and runs as an installable PWA on mobile.",
    role: "Frontend engineering",
    bullets: [
      "Built custom cadences, streaks, and statistics for daily habits.",
      "Added offline-ready PWA support with install flows on mobile.",
      "Enabled reflections, dark mode, and export/import for backups."
    ],
    techStack: ["TypeScript", "React", "PWA", "Vercel"],
    links: [
      { label: "Live Site", href: "https://track-it-omega-jet.vercel.app/" },
      { label: "View GitHub", href: "https://github.com/stevebraown/Track-It" }
    ],
    highlight: false,
    accent: "from-primary/20 via-transparent to-primary-2/20",
    caseStudy: {
      problem:
        "Most habit trackers require accounts or cloud sync, making daily usage slower and more fragile.",
      approach:
        "Designed a client-side PWA with offline support, local-only storage, and clear progress surfaces.",
      outcomes: [
        "Installable experience on iOS and Android.",
        "Offline-ready usage with zero account setup.",
        "Export/import for safe local backups."
      ]
    }
  }
];
