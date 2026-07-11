import { ContactForm } from "./ContactForm"
import { personalInfo } from "../lib/data"

export const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6" style={{ background: "var(--footer-bg)", color: "#fff" }}>
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#F5F0E8" }}>Let&apos;s Work Together</h2>
          <p className="max-w-xl mx-auto" style={{ color: "#A08070" }}>
            I&apos;m actively looking for Senior Frontend, Full-Stack, or AI Engineer roles
            in the UK. If you have an opportunity, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm mb-1" style={{ color: "#8C6B55" }}>Email</p>
              <a href={`mailto:${personalInfo.email}`} className="footer-email font-medium">
                {personalInfo.email}
              </a>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: "#8C6B55" }}>Location</p>
              <p className="font-medium" style={{ color: "#F5F0E8" }}>{personalInfo.location}</p>
            </div>
            <div>
              <p className="text-sm mb-1" style={{ color: "#8C6B55" }}>Availability</p>
              <p className="font-medium" style={{ color: "#F5F0E8" }}>{personalInfo.availability}</p>
            </div>
            <div>
              <p className="text-sm mb-3" style={{ color: "#8C6B55" }}>Profiles</p>
              <div className="flex gap-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                  className="footer-link font-medium px-5 py-2.5 rounded-xl text-sm">
                  LinkedIn
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                  className="footer-link font-medium px-5 py-2.5 rounded-xl text-sm">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>

        <div className="pt-8 text-center text-sm" style={{ borderTop: "1px solid var(--footer-border)", color: "#6B4A35" }}>
          Built with Next.js 14 &middot; TypeScript &middot; Tailwind CSS &middot; Deployed on Vercel
        </div>

      </div>
    </footer>
  )
}
