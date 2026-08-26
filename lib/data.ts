import type { StaticImageData } from "next/image";

// ── NAVIGATION ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

// ── PERSONAL INFO ─────────────────────────────────────────────────────────────
export const personalInfo = {
  name: "Madhuri Pokala",
  role: "Senior Frontend & AI Engineer · React · TypeScript · AI Apps",
  location: "Milton Keynes, UK",
  email: "madhurid0309@gmail.com",
  github: "https://github.com/mpokala-dev",
  linkedin: "https://linkedin.com/in/madhuripokala",
  portfolio: "https://portfolio-nextjs-rho-eight.vercel.app",
  availability: "Immediately available",
  workType: "Hybrid or Remote",
  yearsExp: "10",
} as const;

// ── HERO ──────────────────────────────────────────────────────────────────────
export const heroTechPills = [
  "React 19",
  "TypeScript",
  "Next.js 14",
  "Node.js",
  "OpenAI API",
  "Tailwind CSS",
] as const;

// ── SKILLS ────────────────────────────────────────────────────────────────────
export type SkillColor = "blue" | "green" | "purple" | "orange";

export interface SkillGroup {
  category: string;
  color: SkillColor;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    color: "blue",
    skills: [
      "React 19",
      "TypeScript",
      "Next.js 14",
      "JavaScript ES6+",
      "Redux",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    category: "Backend",
    color: "green",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "MongoDB",
      "JWT Auth",
      "Docker",
    ],
  },
  {
    category: "AI & Prompt Engineering",
    color: "purple",
    skills: [
      "OpenAI API",
      "Anthropic Claude API",
      "Prompt Engineering",
      "RAG",
      "Vercel AI SDK",
      "LangChain",
    ],
  },
  {
    category: "Tools & DevOps",
    color: "orange",
    skills: [
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Vitest",
      "React Testing Library",
      "Jira",
      "Confluence",
    ],
  },
];

// ── PROJECTS ──────────────────────────────────────────────────────────────────
export type ProjectBadge =
  | "Frontend"
  | "Full-Stack"
  | "AI App"
  | "AI + Full-Stack";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  live: string;
  github: string;
  badge: ProjectBadge;
  badgeColor: string;
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    title: "Dev Tinder App",
    description:
      "DevTinder is a full-stack developer networking application that is built to demonstrate React and full-stack development skills. The frontend is a React-based single-page application, and the backend is built using Node.js and Express with MongoDB and Mongoose.",
    tech: [
      "React 19",
      "JavaScript",
      "Tailwind CSS",
      "Vitest",
      "Daisy UI",
      "Node.js",
      "Express",
      "Mongoose",
      "MongoDB",
      "JWT",
      "websockets",
      "RTL",
      "AWS EC2 instance deployment",
    ],
    live: "http://13.50.248.247",
    github: "https://github.com/mpokala-dev/Dev-Tinder",
    badge: "Full-Stack",
    badgeColor: "badge-pink",
  },
  {
    title: "Task Manager App",
    description:
      "Production-quality task manager with TypeScript strict mode, inline editing, due dates, dark mode, and 93% test coverage with Vitest and GitHub Actions CI.",
    tech: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vitest",
      "GitHub Actions",
    ],
    live: "https://task-manager-ts-gamma.vercel.app",
    github: "https://github.com/mpokala-dev/task-manager-ts",
    badge: "Frontend",
    badgeColor: "badge-blue",
  },
  {
    title: "Expense Tracker",
    description:
      "Full-stack app with React frontend, Node.js + Express backend, MongoDB database, JWT authentication, 34 backend tests at 84% coverage, and CI/CD pipeline.",
    tech: ["React 19", "Node.js", "Express", "MongoDB", "JWT", "Vitest"],
    live: "https://expense-tracker-fullstack-fawn.vercel.app",
    github: "https://github.com/mpokala-dev/expense-tracker-fullstack",
    badge: "Full-Stack",
    badgeColor: "badge-orange",
  },
  {
    title: "AI Cover Letter Generator",
    description:
      "React app using OpenAI and Anthropic Claude APIs to generate tailored cover letters from a job description. Built with real prompt engineering patterns.",
    tech: ["React", "OpenAI API", "Claude API", "Prompt Engineering"],
    live: "https://cover-letter-gen-phi.vercel.app",
    github: "https://github.com/mpokala-dev/cover-letter-gen",
    badge: "AI App",
    badgeColor: "badge-purple",
    comingSoon: false,
  },
  {
    title: "AI Document Chat — RAG",
    description:
      "Upload a PDF and have a natural conversation with it. Full RAG pipeline with OpenAI embeddings, semantic search, and streaming UI.",
    tech: ["Next.js", "Vercel AI SDK", "OpenAI", "RAG", "PDF parsing"],
    live: "https://rag-document-chat-dun.vercel.app",
    github: "https://github.com/mpokala-dev/rag-document-chat",
    badge: "AI + Full-Stack",
    badgeColor: "badge-green",
    comingSoon: false,
  },
];

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
export interface Experience {
  role: string;
  company: string;
  period: string;
  domain: string;
  points: string[];
}

export const experiences: Experience[] = [
  {
    role: "Technology Support Developer (Volunteer)",
    company: "BABY-I (Reach Volunteering)",
    period: "2026 – Present",
    domain: "Charity — Infant Safety",
    points: [
      "Configuring an Odoo v19 CMS for a youth-led charity, defining user roles and permissions across six user groups.",
      "Gathered stakeholder requirements and authored a technical specification covering role-based dashboards, folder hierarchy with ACLs, and system administration procedures.",
      "Leveraged frontend and enterprise systems experience to deliver a structured platform supporting the charity's infant safety initiatives.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Avifauna Technology Limited",
    period: "2023 – 2026",
    domain: "Contract — Remote UK",
    points: [
      "Developed scalable, component-based web applications using React.js, TypeScript, and JavaScript ES6+, integrating Supabase for backend services, authentication, and data management across multiple client projects.",
      "Improved rendering performance by reducing unnecessary re-renders using React.memo, useMemo, and useCallback; optimised load times through code splitting, lazy loading, and API optimisation.",
      "Collaborated with stakeholders at all levels, translating technical concepts into clear, actionable insights across the full delivery lifecycle.",
    ],
  },
  {
    role: "Senior Developer",
    company: "Cognizant",
    period: "2022 – 2023",
    domain: "Financial Services",
    points: [
      "Developed and maintained reusable React components for an enterprise-scale platform, establishing a shared component architecture with strict TypeScript standards.",
      "Enhanced performance for data-intensive interfaces through memoisation, lazy loading, and code splitting.",
      "Collaborated with UX designers and backend engineers to deliver accessible user experiences within an Agile environment using Jira and Confluence.",
    ],
  },
  {
    role: "Senior Developer / Team Lead",
    company: "Capgemini",
    period: "2019 – 2022",
    domain: "Banking — Synchrony",
    points: [
      "Led a frontend team of 4 developers building React applications for Synchrony Bank, maintaining zero critical production incidents across three years.",
      "Architected a reusable React component library that reduced development effort by 30% and became the foundation for all new feature development.",
      "Implemented OIDC and OAuth2 authentication flows with secure token and session management, meeting stringent financial services compliance requirements.",
      "Recognised twice with the Award of Excellence for outstanding contribution to enterprise banking platform delivery.",
    ],
  },
  {
    role: "Application Developer",
    company: "IBM",
    period: "2016 – 2019",
    domain: "Insurance — MetLife",
    points: [
      "Built React.js interfaces for the MetLife insurance portal serving 500,000+ customers, maintaining zero critical production defects.",
      "Translated UX wireframes into responsive, WCAG-compliant web applications across desktop, tablet, and mobile.",
      "Integrated RESTful APIs and managed complex async data flows using Redux Thunk; designed reusable component libraries adopted across multiple enterprise applications.",
    ],
  },
];
