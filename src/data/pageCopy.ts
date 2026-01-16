export const homePage = {
  title: "Home",
  intro:
    "A systems-minded product engineer focused on reliable platforms, calm interfaces, and software that holds up under real-world constraints.",
  hero: {
    name: "Steve Braown",
    title: "Systems-minded full-stack product engineer",
    subtitle:
      "Building modern web platforms, payments, and infrastructure-adjacent software with a focus on correctness and long-term clarity.",
    ctas: ["View Work", "GitHub", "LinkedIn"]
  },
  aboutSummary:
    "I build software that stays reliable under load, recovers cleanly from failure, and remains understandable long after it ships."
};

export const aboutPage = {
  title: "About",
  intro:
    "I am a systems-minded full-stack product engineer focused on reliable, scalable software that solves real operational problems.",
  paragraphs: [
    "I work across frontend, backend, and platform layers, with a growing emphasis on Rust for performance-critical and correctness-driven systems. The thread across my work is clear state modeling, careful trade-offs, and interfaces that make complex systems understandable.",
    "My recent work spans payment workflows, role-aware platforms, and operational tooling where failure handling and traceability matter. I am most engaged when the product needs both robust engineering and calm user experiences.",
    "I value long-term ownership: software that holds up under load, evolves cleanly, and is legible to future operators."
  ]
};

export const workPage = {
  title: "Work",
  intro:
    "A selection of projects focused on reliability, clear system behavior, and product outcomes. Each case study highlights the problem, the key trade-offs, and the path to a stable system.",
  sections: [
    {
      title: "Anchor case studies",
      subtitle: "Deep dives into payments, platform coordination, and systems work."
    },
    {
      title: "Selected projects",
      subtitle: "Smaller builds that still prioritize clarity, scale, and recovery."
    }
  ],
  microcopy: {
    viewCaseStudy: "Read case study",
    viewRepo: "View on GitHub",
    highlightLabel: "Featured",
    outcomesLabel: "Outcomes"
  }
};

export const systemsPage = {
  title: "Systems / Rust",
  intro:
    "I am drawn to systems work because reliability is not a feature, it is a foundation. Rust gives me the tools to model correctness and performance constraints explicitly, and I bring that mindset into payments and platform software.",
  learningTitle: "What I am learning",
  learningItems: [
    "Rust ownership and borrowing in real systems",
    "Storage engines, indexing, and durability trade-offs",
    "Failure modes, recovery strategies, and state modeling",
    "Performance profiling, observability, and bottleneck analysis"
  ],
  currentProject: {
    title: "Rust Key-Value Database",
    summary:
      "I am building a lightweight persistent key-value database to understand storage layout, indexing, and system guarantees from first principles.",
    lessons: [
      "How to design data layouts that balance simplicity and extensibility",
      "How to use ownership and borrowing to keep storage APIs safe",
      "Where concurrency, durability, and performance trade-offs appear"
    ],
    nextSteps: [
      "Add compaction and segment management",
      "Introduce a write-ahead log for durability guarantees",
      "Improve query ergonomics while keeping the core simple"
    ]
  },
  microcopy: {
    crossLinkLabel: "View the case study in Work",
    notesLabel: "Design notes and trade-offs"
  }
};

export const writingPage = {
  title: "Writing",
  intro:
    "Short notes on systems thinking, product decisions, and reliability lessons from real builds. I keep them concise and grounded.",
  sections: [
    {
      title: "Notes and observations",
      subtitle: "Small, practical lessons from building and shipping systems."
    },
    {
      title: "Long-form pieces",
      subtitle: "Deeper dives when a topic deserves more detail."
    }
  ],
  microcopy: {
    emptyState: "New notes are in progress. Check back soon.",
    readLabel: "Read article",
    tagLabel: "Topic"
  }
};

export const nowPage = {
  title: "Now",
  intro:
    "I am currently deepening systems and performance skills through Rust while continuing to build and ship production web platforms. I am most interested in roles that are close to infrastructure, data, or reliability-critical systems.",
  bullets: [
    "Refining the Rust key-value database with persistence and indexing work",
    "Studying failure modes, recovery strategies, and observability patterns",
    "Shipping platform features that improve reliability and traceability",
    "Writing short notes on system design trade-offs",
    "Looking for teams where product and platform thinking meet"
  ]
};

export const contactPage = {
  title: "Contact",
  intro:
    "Open to roles and collaborations in payments, platforms, and infrastructure-adjacent product engineering. I prefer work that values reliability, ownership, and long-term system clarity.",
  form: {
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    submitLabel: "Send message",
    messagePlaceholder: "Tell me about the system you are building..."
  },
  sidebar: {
    title: "Direct channels",
    description:
      "Reach out for full-time roles, contract work, or scoped advisory support.",
    links: ["wizkidadrien@gmail.com", "github.com/stevebraown", "linkedin.com/in/steve-braown"]
  },
  microcopy: {
    availability: "Open to roles with systems, platform, or reliability focus.",
    responseTime: "Replies within one business day."
  }
};
