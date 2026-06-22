export interface Service {
  icon: string;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: "/images/icon-ai.svg",
    title: "AI & Machine Learning",
    description: "Integrating AI models for document processing, fraud detection, and personalization.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Full-Stack Development",
    description: "Building scalable .NET platforms with responsive UIs and robust backend systems.",
  },
  {
    icon: "/images/icon-bulb.svg",
    title: "Research & Innovation",
    description: "Leading research in responsible AI, GDPR compliance, and ethical AI frameworks.",
  },
  {
    icon: "/images/icon-cloud.svg",
    title: "Cloud & DevOps",
    description: "Architecting secure cloud solutions on Azure and AWS with CI/CD pipelines.",
  },
];
