import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { About } from "@/components/About"

describe("About", () => {
  it("renders section heading", () => {
    render(<About />)
    expect(screen.getByText("About Me")).toBeInTheDocument()
  })

  it("renders location", () => {
    render(<About />)
    expect(screen.getByText("Milton Keynes, UK")).toBeInTheDocument()
  })

  it("renders email", () => {
    render(<About />)
    expect(screen.getByText("madhurid0309@gmail.com")).toBeInTheDocument()
  })

  it("mentions IBM, Capgemini and Cognizant", () => {
    render(<About />)
    expect(screen.getByText("IBM")).toBeInTheDocument()
    expect(screen.getByText("Capgemini")).toBeInTheDocument()
    expect(screen.getByText("Cognizant")).toBeInTheDocument()
  })

  it("renders availability", () => {
    render(<About />)
    expect(screen.getByText("Immediately available")).toBeInTheDocument()
  })
})