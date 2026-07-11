import { experiences } from "@/lib/data"

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--brown-deep)" }}>Experience</h2>
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1" style={{ background: "var(--cream-border)" }}></div>
          <div className="w-12 h-0.5" style={{ background: "var(--rust)" }}></div>
        </div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-2xl p-6"
              style={{ background: "var(--cream-card)", border: "1px solid var(--cream-border)" }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold" style={{ color: "var(--brown-deep)" }}>{exp.role}</h3>
                  <p className="font-medium text-sm mt-0.5" style={{ color: "var(--rust)" }}>{exp.company}</p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--brown-muted)" }}>{exp.domain}</p>
                </div>
                <span
                  className="text-sm px-3 py-1 rounded-full self-start whitespace-nowrap"
                  style={{ color: "var(--brown-muted)", background: "var(--cream)", border: "1px solid var(--cream-border)" }}
                >
                  {exp.period}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{ color: "var(--brown-mid)" }}>
                    <span className="mt-1 flex-shrink-0" style={{ color: "var(--rust)" }}>▸</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
