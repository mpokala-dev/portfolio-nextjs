import Link from "next/link"
import { personalInfo, heroTechPills } from "@/lib/data"

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">

        <div
          className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full mb-8"
          style={{ background: "var(--rust-bg)", color: "var(--rust)", border: "1px solid var(--cream-border)" }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#4CAF50" }}></span>
          Open to Senior Frontend &amp; AI Engineer roles — UK &amp; Remote
        </div>

        <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight" style={{ color: "var(--brown-deep)" }}>
          Hi, I&apos;m{" "}
          <span style={{ color: "var(--rust)" }}>Madhuri</span>
        </h1>

        <p className="text-xl md:text-2xl mb-6 font-medium" style={{ color: "var(--brown-mid)" }}>
          {personalInfo.role}
        </p>

        <p className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--brown-muted)" }}>
          {personalInfo.yearsExp} years building production web applications at IBM, Capgemini, Cognizant and Avifauna.
          Now building AI-powered React apps with OpenAI and Anthropic APIs.
          Based in {personalInfo.location}.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#projects"
            className="hover-bg-rust font-medium px-8 py-3 rounded-xl transition-colors text-lg"
            style={{ background: "var(--rust)", color: "#fff" }}
          >
            View my projects
          </Link>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-rust font-medium px-8 py-3 rounded-xl transition-colors text-lg"
            style={{ border: "1px solid var(--cream-border)", color: "var(--brown-mid)" }}
          >
            GitHub profile
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {heroTechPills.map((tech) => (
            <span
              key={tech}
              className="text-sm px-4 py-1.5 rounded-full"
              style={{ background: "var(--cream-card)", border: "1px solid var(--cream-border)", color: "var(--brown-mid)" }}
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}
