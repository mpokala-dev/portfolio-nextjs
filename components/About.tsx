export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
        <div className="w-16 h-1 bg-blue-600 rounded mb-10"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed mb-4">
              I'm a Senior Frontend Developer with <strong>6+ years of commercial experience</strong> building
              scalable web applications for global clients in Banking and Insurance.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              I've delivered production React applications at <strong>IBM</strong> for MetLife,
              led frontend teams at <strong>Capgemini</strong> for Synchrony Bank, and worked across the full
              delivery lifecycle at <strong>Cognizant</strong>.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently levelling up with AI-powered development — building real products
              with <strong>OpenAI</strong> and <strong>Anthropic Claude APIs</strong> using
              prompt engineering and RAG patterns.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { label: "Location", value: "Milton Keynes, UK" },
              { label: "Experience", value: "6+ Years" },
              { label: "Availability", value: "Immediately available" },
              { label: "Work type", value: "Hybrid or Remote" },
              { label: "Email", value: "madhurid0309@gmail.com" },
              { label: "GitHub", value: "github.com/mpokala-dev" },
            ].map(({ label, value }) => (
              <div key={label} className="flex items-center gap-4 border-b border-gray-100 pb-3">
                <span className="text-sm font-medium text-gray-400 w-28 flex-shrink-0">{label}</span>
                <span className="text-sm text-gray-700 font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}