import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { Experience } from "@/components/Experience"

describe("Experience", () => {
  it("renders section heading", () => {
    render(<Experience />)
    expect(screen.getByText("Experience")).toBeInTheDocument()
  })

  it("renders all 3 companies", () => {
    render(<Experience />)
    expect(screen.getByText("IBM")).toBeInTheDocument()
    expect(screen.getByText("Capgemini")).toBeInTheDocument()
    expect(screen.getByText("Cognizant")).toBeInTheDocument()
  })

  it("IBM is associated with MetLife", () => {
    render(<Experience />)
    expect(screen.getByText("Insurance — MetLife")).toBeInTheDocument()
  })

  it("Capgemini is associated with Synchrony", () => {
    render(<Experience />)
    expect(screen.getByText("Banking — Synchrony")).toBeInTheDocument()
  })

  it("renders all work periods", () => {
    render(<Experience />)
    expect(screen.getByText("2022 – 2023")).toBeInTheDocument()
    expect(screen.getByText("2019 – 2022")).toBeInTheDocument()
    expect(screen.getByText("2016 – 2019")).toBeInTheDocument()
  })
})