import { describe, it, expect } from "vitest"
import {
  navLinks,
  personalInfo,
  heroTechPills,
  skillGroups,
  projects,
  experiences,
} from "@/lib/data"

describe("navLinks", () => {
  it("has 5 navigation links", () => {
    expect(navLinks).toHaveLength(5)
  })

  it("all links have label and href", () => {
    navLinks.forEach((link) => {
      expect(link.label).toBeTruthy()
      expect(link.href).toMatch(/^#/)
    })
  })

  it("includes required sections", () => {
    const labels = navLinks.map((l) => l.label)
    expect(labels).toContain("About")
    expect(labels).toContain("Projects")
    expect(labels).toContain("Contact")
  })
})

describe("personalInfo", () => {
  it("has all required fields", () => {
    expect(personalInfo.name).toBe("Madhuri Pokala")
    expect(personalInfo.email).toBe("madhurid0309@gmail.com")
    expect(personalInfo.location).toBe("Milton Keynes, UK")
    expect(personalInfo.github).toContain("github.com")
    expect(personalInfo.linkedin).toContain("linkedin.com")
  })

  it("email is valid format", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    expect(emailRegex.test(personalInfo.email)).toBe(true)
  })

  it("github and linkedin are valid URLs", () => {
    expect(personalInfo.github).toMatch(/^https:\/\//)
    expect(personalInfo.linkedin).toMatch(/^https:\/\//)
  })
})

describe("heroTechPills", () => {
  it("has at least 4 tech pills", () => {
    expect(heroTechPills.length).toBeGreaterThanOrEqual(4)
  })

  it("includes core technologies", () => {
    expect(heroTechPills).toContain("React 19")
    expect(heroTechPills).toContain("TypeScript")
    expect(heroTechPills).toContain("Next.js 14")
  })
})

describe("skillGroups", () => {
  it("has 4 skill categories", () => {
    expect(skillGroups).toHaveLength(4)
  })

  it("all groups have category, color and skills", () => {
    skillGroups.forEach((group) => {
      expect(group.category).toBeTruthy()
      expect(group.color).toBeTruthy()
      expect(group.skills.length).toBeGreaterThan(0)
    })
  })

  it("includes Frontend and AI categories", () => {
    const categories = skillGroups.map((g) => g.category)
    expect(categories).toContain("Frontend")
    expect(categories).toContain("AI & Prompt Engineering")
  })

  it("all colors are valid theme colors", () => {
    const validColors = ["blue", "green", "purple", "orange"]
    skillGroups.forEach((group) => {
      expect(validColors).toContain(group.color)
    })
  })
})

describe("projects", () => {
  it("has 4 projects", () => {
    expect(projects).toHaveLength(4)
  })

  it("all projects have required fields", () => {
    projects.forEach((project) => {
      expect(project.title).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.tech.length).toBeGreaterThan(0)
      expect(project.badge).toBeTruthy()
      expect(project.badgeColor).toBeTruthy()
    })
  })

  it("task manager, expense tracker, and AI cover letter generator are the only live projects", () => {
    const liveProjects = projects.filter((p) => !p.comingSoon)
    expect(liveProjects).toHaveLength(3)
    expect(liveProjects[0].title).toBe("Task Manager App")
    expect(liveProjects[1].title).toBe("Expense Tracker")
    expect(liveProjects[2].title).toBe("AI Cover Letter Generator")
  })

  it("live project has valid URLs", () => {
    const liveProject = projects.find((p) => !p.comingSoon)
    expect(liveProject?.live).toMatch(/^https:\/\//)
    expect(liveProject?.github).toMatch(/^https:\/\//)
  })

  it("coming soon projects have no live URLs", () => {
    const comingSoon = projects.filter((p) => p.comingSoon)
    comingSoon.forEach((p) => {
      expect(p.live).toBe("")
      expect(p.github).toBe("")
    })
  })
})

describe("experiences", () => {
  it("has 3 work experiences", () => {
    expect(experiences).toHaveLength(3)
  })

  it("all experiences have required fields", () => {
    experiences.forEach((exp) => {
      expect(exp.role).toBeTruthy()
      expect(exp.company).toBeTruthy()
      expect(exp.period).toBeTruthy()
      expect(exp.domain).toBeTruthy()
      expect(exp.points.length).toBeGreaterThan(0)
    })
  })

  it("includes IBM, Capgemini and Cognizant", () => {
    const companies = experiences.map((e) => e.company)
    expect(companies).toContain("IBM")
    expect(companies).toContain("Capgemini")
    expect(companies).toContain("Cognizant")
  })

  it("IBM is linked to MetLife", () => {
    const ibm = experiences.find((e) => e.company === "IBM")
    expect(ibm?.domain).toContain("MetLife")
  })

  it("Capgemini is linked to Synchrony", () => {
    const capgemini = experiences.find((e) => e.company === "Capgemini")
    expect(capgemini?.domain).toContain("Synchrony")
  })

  it("all periods follow year format", () => {
    const yearRegex = /^\d{4}\s*[–-]\s*\d{4}$/
    experiences.forEach((exp) => {
      expect(yearRegex.test(exp.period)).toBe(true)
    })
  })
})