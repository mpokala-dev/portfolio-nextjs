import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Hero } from "@/components/Hero"

describe("Hero", () => {
  it("renders the name", () => {
    render(<Hero />)
    expect(screen.getByText("Madhuri")).toBeInTheDocument()
  })

  it("renders the open to work badge", () => {
    render(<Hero />)
    expect(
      screen.getByText(/Open to Senior Frontend/i)
    ).toBeInTheDocument()
  })

  it("renders view my projects link", () => {
    render(<Hero />)
    const link = screen.getByRole("link", { name: /view my projects/i })
    expect(link).toHaveAttribute("href", "#projects")
  })

  it("renders github profile link", () => {
    render(<Hero />)
    const link = screen.getByRole("link", { name: /github profile/i })
    expect(link).toHaveAttribute("href", "https://github.com/mpokala-dev")
  })

  it("renders all tech pills", () => {
    render(<Hero />)
    expect(screen.getByText("React 19")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("Next.js 14")).toBeInTheDocument()
  })
})