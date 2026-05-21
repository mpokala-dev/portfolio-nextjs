import { experiences } from "@/lib/data"

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
        <div className="w-16 h-1 bg-blue-600 rounded mb-10"></div>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium text-sm">{exp.company}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{exp.domain}</p>
                </div>
                <span className="text-sm text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1 rounded-full self-start whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="flex flex-col gap-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
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