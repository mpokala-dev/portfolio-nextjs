import type { StaticImageData } from "next/image"

// ── NAVIGATION ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"      },
  { label: "Projects",   href: "#projects"    },
  { label: "Experience", href: "#experience"  },
  { label: "Contact",    href: "#contact"     },
] as const

// ── PERSONAL INFO ─────────────────────────────────────────────────────────────
export const personalInfo = {
  name:         "Madhuri Pokala",
  role:         "Senior Frontend  & AI Engineer · React · TypeScript · AI Apps",
  location:     "Milton Keynes, UK",
  email:        "madhurid0309@gmail.com",
  github:       "https://github.com/mpokala-dev",
  linkedin:     "https://linkedin.com/in/madhuri-pokala",
  portfolio:    "https://portfolio-nextjs-rho-eight.vercel.app",
  availability: "Immediately available",
  workType:     "Hybrid or Remote",
  yearsExp:     "6+",
} as const

// ── HERO ──────────────────────────────────────────────────────────────────────
export const heroTechPills = [
  "React 19", "TypeScript", "Next.js 14",
  "Node.js", "OpenAI API", "Tailwind CSS",
] as const

// ── SKILLS ────────────────────────────────────────────────────────────────────
export type SkillColor = "blue" | "green" | "purple" | "orange"

export interface SkillGroup {
  category: string
  color:    SkillColor
  skills:   string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    color:    "blue",
    skills:   ["React 19", "TypeScript", "Next.js 14", "JavaScript ES6+", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    color:    "green",
    skills:   ["Node.js", "Express.js", "REST APIs", "MongoDB", "JWT Auth", "Docker"],
  },
  {
    category: "AI & Prompt Engineering",
    color:    "purple",
    skills:   ["OpenAI API", "Anthropic Claude API", "Prompt Engineering", "RAG", "Vercel AI SDK", "LangChain"],
  },
  {
    category: "Tools & DevOps",
    color:    "orange",
    skills:   ["Git", "GitHub Actions", "CI/CD", "Vitest", "React Testing Library", "Jira", "Confluence"],
  },
]

// ── PROJECTS ──────────────────────────────────────────────────────────────────
export type ProjectBadge = "Frontend" | "Full-Stack" | "AI App" | "AI + Full-Stack"

export interface Project {
  title:       string
  description: string
  tech:        string[]
  live:        string
  github:      string
  badge:       ProjectBadge
  badgeColor:  string
  comingSoon?: boolean
}

export const projects: Project[] = [
  {
    title:       "Task Manager App",
    description: "Production-quality task manager with TypeScript strict mode, inline editing, due dates, dark mode, and 93% test coverage with Vitest and GitHub Actions CI.",
    tech:        ["React 19", "TypeScript", "Tailwind CSS", "Vitest", "GitHub Actions"],
    live:        "https://task-manager-ts-gamma.vercel.app",
    github:      "https://github.com/mpokala-dev/task-manager-ts",
    badge:       "Frontend",
    badgeColor:  "bg-blue-50 text-blue-700",
  },
  {
    title:       "Expense Tracker",
    description: "Full-stack app with React frontend, Node.js + Express backend, MongoDB database, JWT authentication, and CI/CD pipeline.",
    tech:        ["React", "Node.js", "MongoDB", "JWT", "Docker"],
    live:        "https://expense-tracker-fullstack-fawn.vercel.app",
    github:      "https://github.com/mpokala-dev/expense-tracker-fullstack",
    badge:       "Full-Stack",
    badgeColor:  "bg-orange-50 text-orange-700",
  },
  {
    title:       "AI Cover Letter Generator",
    description: "React app using OpenAI and Anthropic Claude APIs to generate tailored cover letters from a job description. Built with real prompt engineering patterns.",
    tech:        ["React", "OpenAI API", "Claude API", "Prompt Engineering"],
    live:        "https://cover-letter-gen-phi.vercel.app",
    github:      "https://github.com/mpokala-dev/cover-letter-gen",
    badge:       "AI App",
    badgeColor:  "bg-purple-50 text-purple-700",
    comingSoon:  false,
  },
  {
    title:       "AI Document Chat — RAG",
    description: "Upload a PDF and have a natural conversation with it. Full RAG pipeline with OpenAI embeddings, semantic search, and streaming UI.",
    tech:        ["Next.js", "Vercel AI SDK", "OpenAI", "RAG", "PDF parsing"],
    live:        "https://rag-document-chat-dun.vercel.app",
    github:      "https://github.com/mpokala-dev/rag-document-chat",
    badge:       "AI + Full-Stack",
    badgeColor:  "bg-green-50 text-green-700",
    comingSoon:  false,
  },
]

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
export interface Experience {
  role:    string
  company: string
  period:  string
  domain:  string
  points:  string[]
}

export const experiences: Experience[] = [
  {
    role:    "Senior Developer",
    company: "Cognizant",
    period:  "2022 – 2023",
    domain:  "Financial Services",
    points:  [
      "Developed and maintained React components for financial services clients",
      "Built reusable UI components with HTML5, CSS3, and JavaScript ES6+",
      "Participated in Agile/Scrum ceremonies using Jira and Confluence",
    ],
  },
  {
    role:    "Senior Developer / Team Lead",
    company: "Capgemini",
    period:  "2019 – 2022",
    domain:  "Banking — Synchrony",
    points:  [
      "Led a frontend team of 4 developers building React applications for Synchrony Bank",
      "Architected reusable component library reducing development time by 30%",
      "Conducted technical interviews and code reviews",
      "Implemented Redux state management for complex financial data flows",
      
    ],
  },
  {
    role:    "Application Developer",
    company: "IBM",
    period:  "2016 – 2019",
    domain:  "Insurance — MetLife",
    points:  [
      "Built React.js components for MetLife insurance portal serving 500k+ users",
      "Collaborated with UX designers to implement pixel-perfect responsive layouts",
      "Integrated REST APIs and managed complex async state with Redux Thunk",
      "Mentored 2 junior developers in React best practices",
    ],
  },
]