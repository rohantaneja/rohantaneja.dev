export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "/images/icon-ai.svg",
    title: "AI Agents & RAG",
    description: "Designing multi-agent systems that generate curriculum-aligned plans, lessons and assessments, grounded in retrieved sources.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Product Engineering",
    description: "Building the MESO Lab web app end to end with React, TypeScript and Supabase, from first prototype to the classroom.",
  },
  {
    icon: "/images/icon-cloud.svg",
    title: "Cloud Platform",
    description: "Running MESO Lab on Google Cloud (GKE, Cloud Run and Vertex AI) with automated delivery and EU data residency.",
  },
  {
    icon: "/images/icon-bulb.svg",
    title: "Responsible AI",
    description: "Building trust in from day one: GDPR-first data governance, privacy by design, and teachers in control of every output.",
  },
];
