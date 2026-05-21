"use client"

import { useActionState } from "react"
import { sendContactEmail } from "@/app/actions/contact"
import type { ContactFormState } from "@/app/actions/contact"

const initialState: ContactFormState = {
  status:  "idle",
  message: "",
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
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300 mb-1.5"
          >
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-1.5"
          >
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Job opportunity / Freelance / Just saying hi"
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300 mb-1.5"
        >
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about the opportunity or project..."
          className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>

      {/* Status message */}
      {state.status !== "idle" && (
        <div className={`rounded-xl px-4 py-3 text-sm font-medium ${
          state.status === "success"
            ? "bg-green-500/10 text-green-400 border border-green-500/20"
            : "bg-red-500/10 text-red-400 border border-red-500/20"
        }`}>
          {state.status === "success" ? "✅ " : "❌ "}
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:cursor-not-allowed text-white font-medium px-8 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
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