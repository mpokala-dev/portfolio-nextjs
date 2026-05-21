import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Skills } from "@/components/Skills"

describe("Skills", () => {
  it("renders section heading", () => {
    render(<Skills />)
    expect(screen.getByText("Skills")).toBeInTheDocument()
  })

  it("renders all 4 skill categories", () => {
    render(<Skills />)
    expect(screen.getByText("Frontend")).toBeInTheDocument()
    expect(screen.getByText("Backend")).toBeInTheDocument()
    expect(screen.getByText("AI & Prompt Engineering")).toBeInTheDocument()
    expect(screen.getByText("Tools & DevOps")).toBeInTheDocument()
  })

  it("renders key skills", () => {
    render(<Skills />)
    expect(screen.getByText("React 19")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("OpenAI API")).toBeInTheDocument()
    expect(screen.getByText("GitHub Actions")).toBeInTheDocument()
  })
})