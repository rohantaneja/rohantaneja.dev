export interface TimelineItem {
  title: string;
  company?: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export const experience: TimelineItem[] = [
  {
    title: "Co-Founder & CTO",
    company: "MESO Lab",
    period: "Aug 2025 — Present",
    description: "Co-founded MESO Lab as a Trinity College Dublin spinout and lead all engineering. Built the AI planning platform teachers use for curriculum-aligned unit plans, lessons, assessments and resources: multi-agent generation on Vertex AI, a React + Supabase web app, and a GDPR-first platform on Google Cloud, now piloting in schools.",
  },
  {
    title: "AI Researcher (Research Fellow)",
    company: "ADAPT Centre, Trinity College Dublin",
    period: "May 2025 — Sep 2026",
    description: "Led the foundational research that became MESO, building the first LLM + RAG prototype for curriculum-aligned lesson planning. Embedded Responsible AI and GDPR-compliant data governance from the outset.",
  },
  {
    title: "Senior Software Engineer, Engineering, Data & AI",
    company: "Deloitte Ireland LLP",
    period: "Sep 2021 — Aug 2025",
    description: "Built AI-powered analytics on Azure and engineered document-identification & fraud-detection models into full-stack .NET platforms (cutting manual effort by 34%). Owned Deloitte Ireland's GitHub Enterprise platform and led the Software Engineering Community of Practice, upskilling 127+ engineers.",
  },
  {
    title: "Software Engineer Intern",
    company: "Fonz Music",
    period: "Jun 2021 — Sep 2021",
    description: "Re-architected API data access with an ORM layer, migrated the codebase to TypeScript with 95% error-handling coverage, and containerized the service with Docker on AWS.",
  },
];

export const education: TimelineItem[] = [
  {
    title: "Trinity College Dublin",
    period: "2017 — 2021",
    description: "B.A.I. Computer Engineering — First Class Honours (71%). Modules in Data Structures & Algorithms, Operating Systems, Cloud Computing, and Deep Learning.",
  },
  {
    title: "Blue Bells Model School",
    period: "2017",
    description: "AISSCE (93.2%) — equivalent to the Irish Leaving Certificate.",
  },
];

export const skills: Skill[] = [
  { name: "AI Systems (LLM Agents, RAG)", percentage: 92 },
  { name: "TypeScript / React", percentage: 90 },
  { name: "Cloud (Google Cloud / Azure / AWS)", percentage: 88 },
  { name: "Platform (Kubernetes / CI-CD)", percentage: 88 },
  { name: "Python", percentage: 85 },
  { name: "Postgres / Supabase", percentage: 85 },
  { name: ".NET / C#", percentage: 85 },
];
