const skillGroups = [
  {
    category: "Frontend",
    color: "blue",
    skills: ["React 19", "TypeScript", "Next.js 14", "JavaScript ES6+", "Redux", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    category: "Backend",
    color: "green",
    skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "JWT Auth", "Docker"],
  },
  {
    category: "AI & Prompt Engineering",
    color: "purple",
    skills: ["OpenAI API", "Anthropic Claude API", "Prompt Engineering", "RAG", "Vercel AI SDK", "LangChain"],
  },
  {
    category: "Tools & DevOps",
    color: "orange",
    skills: ["Git", "GitHub Actions", "CI/CD", "Vitest", "React Testing Library", "Jira", "Confluence"],
  },
]

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  green: "bg-green-50 text-green-700 border-green-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
}

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills</h2>
        <div className="w-16 h-1 bg-blue-600 rounded mb-10"></div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{group.category}</h3>
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