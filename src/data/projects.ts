import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: "khokha-pay",
    slug: "khokhapay-payments-platform",
    title: "KhokhaPay – resilient utility payments platform",
    shortTagline:
      "Resilient utility payments with auditable recovery on unreliable networks.",
    description:
      "Built a utility payment system that stays correct over intermittent networks, keeping every transaction auditable and recoverable without manual intervention.",
    role: "Product + systems engineering",
    bullets: [
      "Modeled explicit transaction states and idempotent APIs to prevent silent failures and double-charges under network loss.",
      "Shipped agent-assisted and direct payment flows with traceable handoffs; agent path cut onboarding friction by ~30%.",
      "Tested partial connectivity and concurrency with Jest + SuperTest; automated recovery finishes in under 10 seconds via Dockerized services."
    ],
    techStack: [
      "Rust",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Jest",
      "SuperTest",
      "Docker"
    ],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: true,
    accent: "from-primary/25 via-primary-2/20 to-transparent",
    featuredMetrics: [
      { value: "0", label: "Double-charges in network-loss tests" },
      { value: "<10s", label: "Automated recovery per txn" },
      { value: "~30%", label: "Onboarding friction drop via agents" }
    ],
    caseStudy: {
      problem:
        "Utilities and public-service payments face unreliable connectivity, causing double-charges, silent failures, and loss of trust.",
      approach:
        "Built a transaction-centric architecture with explicit states, idempotent endpoints, agent/direct flows, automated retries, and an audit trail using Rust services and TypeScript APIs.",
      outcomes: [
        "Zero double-charges observed under simulated network loss; failures surfaced through the state machine.",
        "Automated recovery completes in under 10 seconds while keeping transaction history auditable.",
        "Agent-assisted and direct flows both supported; assisted path cut onboarding friction by ~30%."
      ]
    }
  },
  {
    id: "campus-connect",
    slug: "campus-connect-student-platform",
    title: "Campus Connect – location-based student platform",
    shortTagline:
      "Role-aware campus coordination with predictable onboarding and real-time messaging.",
    description:
      "Built a location-based coordination platform with role-aware workflows so students onboard quickly, stay safe, and message in real time without overloading core services.",
    role: "Full-stack platform engineering",
    bullets: [
      "Implemented role-based workflows and profile completion gates; reduced onboarding drop-off by roughly 40%.",
      "Separated Firebase real-time messaging from Node.js core services; dozens of concurrent chats stayed under 500ms latency.",
      "Ran usability tests and weekly Git/Agile releases; 65%+ active users returned weekly across 3+ months."
    ],
    techStack: [
      "TypeScript",
      "React",
      "Node.js",
      "Firebase",
      "Git/GitHub",
      "Agile/Scrum"
    ],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: true,
    accent: "from-primary-2/25 via-primary/20 to-transparent",
    featuredMetrics: [
      { value: "~40%", label: "Onboarding drop-off reduced" },
      { value: "65%+", label: "Weekly returning users" },
      { value: "<500ms", label: "Real-time message latency" }
    ],
    caseStudy: {
      problem:
        "Campus coordination tools had high onboarding friction and lacked role-aware safety, causing drop-off and spam.",
      approach:
        "Delivered a role-aware platform with profile gates, real-time messaging separated from core services, and clear onboarding flows.",
      outcomes: [
        "Onboarding drop-off reduced by roughly 40%.",
        "Real-time messaging handled dozens of concurrent users under 500ms latency.",
        "65%+ of active users returned weekly for 3+ months with zero privacy incidents."
      ]
    }
  },
  {
    id: "rust-kv",
    slug: "rust-key-value-database",
    title: "Rust Key-Value Database – storage engine learning project",
    shortTagline:
      "Rust key-value store exploring storage, indexing, and durability trade-offs.",
    description:
      "Built a persistent key-value database from scratch to study Rust ownership, storage layout, and performance bottlenecks in a controlled system.",
    role: "Systems engineering (Rust)",
    bullets: [
      "Implemented log-structured storage, indexing, and query modules with ownership-enforced safety; no unsafe blocks in core paths.",
      "Benchmarked against a naive store and fixed I/O hotspots, delivering 1.5x faster range queries.",
      "Documented durability, concurrency, and compaction trade-offs as design notes guiding WAL and segment management work."
    ],
    techStack: ["Rust", "Storage design", "Indexing", "Benchmarking"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: true,
    accent: "from-primary/20 via-transparent to-primary-2/20",
    featuredMetrics: [
      { value: "1.5x", label: "Faster range queries" },
      { value: "0", label: "Unsafe blocks in core paths" },
      { value: "3", label: "Performance bottlenecks fixed" }
    ],
    caseStudy: {
      problem:
        "Understanding storage engines requires building them to see durability and performance trade-offs firsthand.",
      approach:
        "Built a persistent key-value database with log-structured storage, indexing, and clear module boundaries using Rust ownership to enforce safety.",
      outcomes: [
        "Fully functional indexing system with type-safe APIs and zero unsafe code in core paths.",
        "1.5x faster range queries after profiling and removing I/O hotspots.",
        "Documented three bottlenecks and next steps (compaction, write-ahead logging)."
      ]
    }
  },
  {
    id: "sentinel-pulse",
    slug: "sentinel-pulse-ops-telemetry",
    title: "Sentinel Pulse – ops telemetry and alerting cockpit",
    shortTagline: "Telemetry and alerting that reduce noise and guide triage.",
    description:
      "Designed a monitoring cockpit that prioritizes incidents, keeps operators oriented, and makes next actions obvious under pressure.",
    role: "Product engineering",
    bullets: [
      "Correlated related alerts into single incidents; reduced alert fatigue by ~35% and kept priority signals visible.",
      "Built operator-focused dashboards (what's broken, who is affected, next action) with WebSockets-driven updates.",
      "Ran pressure simulations with ops teams; issue identification time improved ~40% as operators spotted breakage in under a minute."
    ],
    techStack: ["React", "TypeScript", "WebSockets", "Vite", "CI/CD"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: false,
    accent: "from-primary/15 via-transparent to-primary-2/20",
    caseStudy: {
      problem:
        "Operations teams were overwhelmed by alert volume, making it hard to see what was failing and what to do next.",
      approach:
        "Built a prioritization engine that correlates alerts, dashboards aligned to operator mental models, and reusable components updated via WebSockets.",
      outcomes: [
        "Alert fatigue reduced by ~35%; high-priority incidents surfaced together.",
        "Issue identification time improved ~40%; operators answered 'what broke?' in under a minute.",
        "Dashboard components reused across 3+ internal tools, cutting duplicate code roughly in half."
      ]
    }
  },
  {
    id: "the-box",
    slug: "the-box-audit-workflows",
    title: "The Box – audit-ready document workflow",
    shortTagline:
      "Audit-ready document workflows with usable security for non-technical users.",
    description:
      "Built a secure document workspace that keeps permissions clear, validates integrity, and guides approvals without slowing non-technical users.",
    role: "Full-stack engineering",
    bullets: [
      "Implemented granular RBAC with visible permission boundaries and audit logs; zero access-related incidents.",
      "Added upload validation and cryptographic integrity checks; every version retains metadata for compliance review.",
      "Structured approval workflows with 'waiting for' states; decision-makers completed reviews about 50% faster."
    ],
    techStack: ["Next.js", "PostgreSQL", "Node.js", "Auth", "Tailwind"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: false,
    accent: "from-primary-2/20 via-transparent to-primary/20",
    caseStudy: {
      problem:
        "Teams needed secure document workflows with audit trails for compliance without sacrificing usability.",
      approach:
        "Built role-based access, integrity validation, and versioned approval flows using Next.js, PostgreSQL, and authenticated REST APIs.",
      outcomes: [
        "Audit trail trusted for compliance with zero integrity violations.",
        "Document reviews completed about 50% faster via clear workflow stages.",
        "Onboarding took under 10 minutes per user; compliance teams reported 95%+ audit readiness."
      ]
    }
  },
  {
    id: "staterail",
    slug: "staterail-workflow-orchestration",
    title: "StateRail – workflow orchestration console",
    shortTagline: "Workflow orchestration with predictable state transitions.",
    description:
      "Built a workflow orchestration console where state transitions are explicit, observable, and debuggable without digging through logs.",
    role: "Product engineering",
    bullets: [
      "Created a visual state machine builder with if-then transitions; workflow failures dropped ~25% by catching edge cases earlier.",
      "Streamed events into a real-time dashboard so operators diagnosed stuck jobs in under two minutes instead of 20+.",
      "Exposed GraphQL APIs for analytics self-serve, reducing reliance on engineering for incident and performance queries."
    ],
    techStack: ["React", "Node.js", "GraphQL", "TypeScript", "Jest"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: false,
    accent: "from-primary/15 via-transparent to-primary-2/20",
    caseStudy: {
      problem:
        "Automation pipelines stalled with unclear state and limited visibility, forcing operators to sift through logs.",
      approach:
        "Delivered an orchestration console with explicit workflow states, event-driven analytics, and GraphQL APIs tested across concurrency and retry edge cases.",
      outcomes: [
        "Workflow failures dropped ~25% as explicit state design caught edge cases sooner.",
        "Stuck jobs diagnosed in under two minutes rather than 20+ minutes.",
        "Ops and analytics teams self-served via GraphQL with zero runbooks for common failure modes."
      ]
    }
  },
  {
    id: "atlas-commerce",
    slug: "atlas-commerce-checkout",
    title: "Atlas Commerce – reliable checkout experience",
    shortTagline: "Payment-ready storefront with resilient checkout flows.",
    description:
      "Redesigned checkout to cut abandonment, speed merchandising changes, and strengthen Core Web Vitals.",
    role: "Frontend engineering",
    bullets: [
      "Mapped checkout states to user mental models and validated inputs early; drop-off improved from 35% to 28% (~18% reduction).",
      "Modularized merchandising blocks and A/B toggles; updates ship in under five minutes without redeploying.",
      "Optimized performance with code splitting, compressed assets, and ISR; LCP improved 3.2s to 1.8s and CLS improved by 60%."
    ],
    techStack: ["React", "Redux", "Node.js", "Stripe", "Vercel"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: false,
    accent: "from-primary/15 via-transparent to-primary-2/20",
    caseStudy: {
      problem:
        "Checkout abandonment was high (35% drop-off), merchandising updates were slow (2+ hours), and weak Core Web Vitals hurt SEO.",
      approach:
        "Remapped checkout states, modularized merchandising with A/B controls, integrated Stripe with clear validation, and optimized performance with code splitting and ISR.",
      outcomes: [
        "Checkout drop-off improved to 28% (~18% reduction), projecting roughly $45k/year revenue lift.",
        "Merchandising updates deploy in under five minutes, enabling weekly campaigns instead of quarterly.",
        "Core Web Vitals improved (LCP 3.2s -> 1.8s, CLS +60%, FID <50ms); repeat customers up ~12% and organic traffic up ~8%."
      ]
    }
  },
  {
    id: "nova-base",
    slug: "nova-base-knowledge-base",
    title: "NovaBase – semantic knowledge base",
    shortTagline: "Knowledge base with semantic search and versioned content.",
    description:
      "Built a semantic-search knowledge base with clean reading UX and versioned workflows so answers stay discoverable and auditable.",
    role: "Full-stack engineering",
    bullets: [
      "Integrated embedding-based semantic search; search success climbed from ~35% to ~85% on first attempt.",
      "Designed reading-focused layouts with fast SSR; average search response stayed under 200ms for 100k+ articles.",
      "Versioned all content with approvals and audit trails, cutting FAQ ticket volume by around 40%."
    ],
    techStack: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
    links: [{ label: "View GitHub", href: "https://github.com/stevebraown" }],
    highlight: false,
    accent: "from-primary-2/20 via-transparent to-primary/20",
    caseStudy: {
      problem:
        "Keyword search failed for most knowledge-base queries and no versioning existed for compliance or approvals.",
      approach:
        "Built semantic search with embeddings, reading-focused layouts, and versioned publishing using Next.js and Supabase.",
      outcomes: [
        "Search success improved from roughly 35% to 85% on first attempts.",
        "Average search responses under 200ms across 100k+ articles.",
        "FAQ tickets reduced by about 40% thanks to versioned content and clear approvals."
      ]
    }
  },
  {
    id: "track-it",
    slug: "track-it-offline-habit-tracker",
    title: "Track It – offline-first habit tracker",
    shortTagline: "Habit tracker PWA with offline-first, local-only storage.",
    description:
      "Shipped an offline-first habit tracker that keeps data local, supports custom cadences, and installs as a PWA to reinforce long-term routines.",
    role: "Frontend engineering",
    bullets: [
      "Built custom cadences, streaks, and stats; 65%+ users kept habit consistency over 3+ months.",
      "Implemented offline-ready PWA flows with install prompts and export/import backups; 400+ installs to date.",
      "Designed reflections and dark mode that drove roughly 70% repeat engagement."
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
        "65%+ habit consistency sustained over 3+ months with local streak tracking.",
        "400+ installs driven by the offline-first PWA and zero account setup.",
        "About 70% repeat engagement supported by reflections, dark mode, and export/import backups."
      ]
    }
  }
];
