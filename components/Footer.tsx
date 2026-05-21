import { ContactForm } from "./ContactForm"
import { personalInfo } from "../lib/data"

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I&apos;m actively looking for Senior Frontend, Full-Stack, or AI Engineer roles
            in the UK. If you have an opportunity, I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">

          {/* Left — contact details */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-white hover:text-blue-400 transition-colors font-medium"
              >
                {personalInfo.email}
              </a>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Location</p>
              <p className="text-white font-medium">{personalInfo.location}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Availability</p>
              <p className="text-white font-medium">{personalInfo.availability}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-3">Profiles</p>
              <div className="flex gap-4">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-medium px-5 py-2.5 rounded-xl transition-colors text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 hover:border-blue-400 text-gray-300 hover:text-white font-medium px-5 py-2.5 rounded-xl transition-colors text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <ContactForm />
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          Built with Next.js 14 &middot; TypeScript &middot; Tailwind CSS &middot; Deployed on Vercel
        </div>

      </div>
    </footer>
  )
}
