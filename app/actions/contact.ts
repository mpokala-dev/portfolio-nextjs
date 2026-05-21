"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormState {
  status: "idle" | "success" | "error"
  message: string
}

export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {

  const name    = formData.get("name")?.toString().trim()
  const email   = formData.get("email")?.toString().trim()
  const subject = formData.get("subject")?.toString().trim()
  const message = formData.get("message")?.toString().trim()

  // Server-side validation
  if (!name || !email || !message) {
    return {
      status:  "error",
      message: "Please fill in all required fields.",
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      status:  "error",
      message: "Please enter a valid email address.",
    }
  }

  try {
    await resend.emails.send({
      from:    "Portfolio Contact <onboarding@resend.dev>",
      to:      process.env.CONTACT_EMAIL ?? "madhurid0309@gmail.com",
      subject: `Portfolio enquiry: ${subject ?? "New message"} — from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1d4ed8;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #6b7280; width: 80px;">Name</td>
              <td style="padding: 8px 0; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Email</td>
              <td style="padding: 8px 0; font-weight: 500;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #6b7280;">Subject</td>
              <td style="padding: 8px 0; font-weight: 500;">${subject ?? "—"}</td>
            </tr>
          </table>
          <hr style="border: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="color: #374151; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
          <hr style="border: 1px solid #e5e7eb; margin: 16px 0;" />
          <p style="color: #9ca3af; font-size: 12px;">
            Sent from your portfolio at portfolio-nextjs-rho-eight.vercel.app
          </p>
        </div>
      `,
    })

    return {
      status:  "success",
      message: "Message sent! I'll get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Email error:", error)
    return {
      status:  "error",
      message: "Something went wrong. Please email me directly at madhurid0309@gmail.com",
    }
  }
}