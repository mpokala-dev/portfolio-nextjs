import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Projects } from "@/components/Projects"

describe("Projects", () => {
  it("renders section heading", () => {
    render(<Projects />)
    expect(screen.getByText("Projects")).toBeInTheDocument()
  })

  it("renders all 4 project titles", () => {
    render(<Projects />)
    expect(screen.getByText("Task Manager App")).toBeInTheDocument()
    expect(screen.getByText("AI Cover Letter Generator")).toBeInTheDocument()
    expect(screen.getByText("AI Document Chat — RAG")).toBeInTheDocument()
    expect(screen.getByText("Expense Tracker")).toBeInTheDocument()
  })

  it("task manager has live demo link", () => {
    render(<Projects />)
    const demoLink = screen.getByRole("link", { name: /live-task manager app/i })
    expect(demoLink).toHaveAttribute(
      "href",
      "https://task-manager-ts-gamma.vercel.app"
    )
  })

  it("expense tracker has live demo link", () => {
    render(<Projects />)
    const demoLink = screen.getByRole("link", { name: /live-expense tracker/i })
    expect(demoLink).toHaveAttribute(
      "href",
      "https://expense-tracker-fullstack-fawn.vercel.app"
    )
  })

  it("live projects have  no coming soon badge", () => {
    render(<Projects />)
    expect(screen.queryByText("Coming soon")).not.toBeInTheDocument()
  })
})