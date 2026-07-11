"use client"

import { useActionState } from "react"
import { sendContactEmail } from "@/app/actions/contact"
import type { ContactFormState } from "@/app/actions/contact"

const initialState: ContactFormState = {
  status:  "idle",
  message: "",
}

const inputStyle = {
  width: "100%",
  background: "#2C1A0E",
  border: "1px solid #3A1F10",
  color: "#F5F0E8",
  borderRadius: "12px",
  padding: "12px 16px",
  fontSize: "14px",
  outline: "none",
}

export const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  )

  return (
    <form action={formAction} className="flex flex-col gap-4">

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: "#A08070" }}>
            Name <span style={{ color: "#C4622A" }}>*</span>
          </label>
          <input
            id="name" name="name" type="text" required
            placeholder="Your name"
            style={{ ...inputStyle }}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "#A08070" }}>
            Email <span style={{ color: "#C4622A" }}>*</span>
          </label>
          <input
            id="email" name="email" type="email" required
            placeholder="your@email.com"
            style={{ ...inputStyle }}
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-1.5" style={{ color: "#A08070" }}>
          Subject
        </label>
        <input
          id="subject" name="subject" type="text"
          placeholder="Job opportunity / Freelance / Just saying hi"
          style={{ ...inputStyle }}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "#A08070" }}>
          Message <span style={{ color: "#C4622A" }}>*</span>
        </label>
        <textarea
          id="message" name="message" required rows={5}
          placeholder="Tell me about the opportunity or project..."
          style={{ ...inputStyle, resize: "none" }}
        />
      </div>

      {state.status !== "idle" && (
        <div
          className="rounded-xl px-4 py-3 text-sm font-medium"
          style={
            state.status === "success"
              ? { background: "rgba(76,175,80,0.1)", color: "#4CAF50", border: "1px solid rgba(76,175,80,0.2)" }
              : { background: "rgba(196,98,42,0.1)", color: "#C4622A", border: "1px solid rgba(196,98,42,0.2)" }
          }
        >
          {state.status === "success" ? "✅ " : "❌ "}
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="font-medium px-8 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
        style={{ background: "var(--rust)", color: "#fff", opacity: isPending ? 0.7 : 1 }}
      >
        {isPending ? (
          <>
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

    </form>
  )
}
