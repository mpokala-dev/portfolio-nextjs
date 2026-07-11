import { skillGroups } from "@/lib/data"
import type { SkillColor } from "@/lib/data"

const colorMap: Record<SkillColor, string> = {
  blue:   "skill-blue",
  green:  "skill-green",
  purple: "skill-purple",
  orange: "skill-orange",
}

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6" style={{ background: "var(--cream)" }}>
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--brown-deep)" }}>Skills</h2>
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1" style={{ background: "var(--cream-border)" }}></div>
          <div className="w-12 h-0.5" style={{ background: "var(--rust)" }}></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl p-6"
              style={{ background: "var(--cream-card)", border: "1px solid var(--cream-border)" }}
            >
              <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--brown-deep)" }}>{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`text-sm font-medium px-3 py-1.5 rounded-full border ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
