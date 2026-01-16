import type { SkillGroup } from "../types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    title: "Systems + Reliability",
    items: [
      "Failure-aware workflows",
      "State modeling and recovery",
      "Observability and incident triage",
      "Performance profiling",
      "Audit-friendly data design"
    ]
  },
  {
    title: "Product Engineering",
    items: [
      "Interface architecture and UX writing",
      "Design systems with clear hierarchy",
      "Cross-layer delivery and ownership",
      "Accessible, low-friction workflows",
      "Iterative release planning"
    ]
  },
  {
    title: "Platform + Services",
    items: [
      "API design and integrations",
      "Payments and authentication flows",
      "Event-driven orchestration",
      "Data consistency strategies",
      "Background processing"
    ]
  },
  {
    title: "Rust + Systems Growth",
    items: [
      "Ownership and borrowing in practice",
      "Concurrency patterns",
      "Storage engines and indexing",
      "Correctness-first API design",
      "Benchmarking and trade-offs"
    ]
  }
];
