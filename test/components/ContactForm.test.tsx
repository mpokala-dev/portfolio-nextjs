import { describe, it, expect, vi, beforeEach } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { ContactForm } from "@/components/ContactForm"

// Mock the server action — it's a server-side function, can't run in jsdom
vi.mock("@/app/actions/contact", () => ({
  sendContactEmail: vi.fn().mockResolvedValue({
    status:  "success",
    message: "Message sent! I'll get back to you within 24 hours.",
  }),
}))

describe("ContactForm", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("renders all form fields", () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it("renders send message button", () => {
    render(<ContactForm />)
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).toBeInTheDocument()
  })

  it("user can type in all fields", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/name/i), "Test Recruiter")
    await user.type(screen.getByLabelText(/email/i), "recruiter@company.com")
    await user.type(screen.getByLabelText(/subject/i), "Job opportunity")
    await user.type(screen.getByLabelText(/message/i), "We have a great role for you")

    expect(screen.getByLabelText(/name/i)).toHaveValue("Test Recruiter")
    expect(screen.getByLabelText(/email/i)).toHaveValue("recruiter@company.com")
    expect(screen.getByLabelText(/subject/i)).toHaveValue("Job opportunity")
    expect(screen.getByLabelText(/message/i)).toHaveValue("We have a great role for you")
  })

  it("button is enabled by default", () => {
    render(<ContactForm />)
    expect(
      screen.getByRole("button", { name: /send message/i })
    ).not.toBeDisabled()
  })
  it("shows success message after successful submission", async () => {
  const user = userEvent.setup()
  render(<ContactForm />)

  await user.type(screen.getByLabelText(/name/i), "Test Recruiter")
  await user.type(screen.getByLabelText(/email/i), "recruiter@company.com")
  await user.type(screen.getByLabelText(/message/i), "Great opportunity for you")
  await user.click(screen.getByRole("button", { name: /send message/i }))

  expect(
    await screen.findByText(/Message sent/i)
  ).toBeInTheDocument()
})

it("shows error message when submission fails", async () => {
  // Override the mock to return an error for this test only
  const { sendContactEmail } = await import("@/app/actions/contact")
  vi.mocked(sendContactEmail).mockResolvedValueOnce({
    status:  "error",
    message: "Something went wrong. Please email me directly at madhurid0309@gmail.com",
  })

  const user = userEvent.setup()
  render(<ContactForm />)

  await user.type(screen.getByLabelText(/name/i), "Test")
  await user.type(screen.getByLabelText(/email/i), "test@test.com")
  await user.type(screen.getByLabelText(/message/i), "Test message")
  await user.click(screen.getByRole("button", { name: /send message/i }))

  expect(
    await screen.findByText(/Something went wrong/i)
  ).toBeInTheDocument()
})

})