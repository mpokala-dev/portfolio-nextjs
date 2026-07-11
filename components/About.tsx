import { personalInfo } from "@/lib/data"

export const About = () => {
  const details = [
    { label: "Location",     value: personalInfo.location     },
    { label: "Experience",   value: `${personalInfo.yearsExp} Years` },
    { label: "Availability", value: personalInfo.availability },
    { label: "Work type",    value: personalInfo.workType     },
    { label: "Email",        value: personalInfo.email        },
    { label: "GitHub",       value: "github.com/mpokala-dev"  },
  ]

  return (
    <section id="about" className="py-24 px-6" style={{ background: "var(--cream-card)" }}>
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--brown-deep)" }}>About Me</h2>
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1" style={{ background: "var(--cream-border)" }}></div>
          <div className="w-12 h-0.5" style={{ background: "var(--rust)" }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="leading-relaxed mb-4" style={{ color: "var(--brown-mid)" }}>
              I&apos;m a Senior Frontend Developer with{" "}
              <strong style={{ color: "var(--brown-deep)" }}>{personalInfo.yearsExp} years of commercial experience</strong>{" "}
              building scalable web applications for global clients in Banking and Insurance.
            </p>
            <p className="leading-relaxed mb-4" style={{ color: "var(--brown-mid)" }}>
              I&apos;ve delivered production React applications at <strong style={{ color: "var(--brown-deep)" }}>IBM</strong> for the MetLife insurance portal,
              led frontend teams at <strong style={{ color: "var(--brown-deep)" }}>Capgemini</strong> for Synchrony Bank, and worked across
              the full delivery lifecycle at <strong style={{ color: "var(--brown-deep)" }}>Cognizant</strong> and{" "}
              <strong style={{ color: "var(--brown-deep)" }}>Avifauna Technology</strong>.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--brown-mid)" }}>
              Currently building AI-powered products with{" "}
              <strong style={{ color: "var(--brown-deep)" }}>OpenAI</strong> and{" "}
              <strong style={{ color: "var(--brown-deep)" }}>Anthropic Claude APIs</strong> using
              prompt engineering and RAG patterns.
            </p>
          </div>

          <div className="flex flex-col gap-0">
            {details.map(({ label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 py-3"
                style={{ borderBottom: "1px solid var(--cream-border)" }}
              >
                <span className="text-sm font-medium w-28 flex-shrink-0" style={{ color: "var(--brown-muted)" }}>{label}</span>
                <span className="text-sm font-medium" style={{ color: "var(--brown-deep)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
