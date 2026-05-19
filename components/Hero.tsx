import Link from "next/link"

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Open to Senior Frontend & AI Engineer roles — UK & Remote
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Madhuri
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-6 font-medium">
          Senior Frontend Developer · React · TypeScript · AI Apps
        </p>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          6+ years building production web applications at IBM, Capgemini and Cognizant.
          Now building AI-powered React apps with OpenAI and Anthropic APIs.
          Based in Milton Keynes, UK.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-colors text-lg"
          >
            View my projects
          </Link>
          <a
            href="https://github.com/mpokala-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 hover:border-blue-400 text-gray-700 font-medium px-8 py-3 rounded-xl transition-colors text-lg"
          >
            GitHub profile
          </a>
        </div>

        {/* Tech pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["React 19", "TypeScript", "Next.js 14", "Node.js", "OpenAI API", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="bg-white border border-gray-200 text-gray-600 text-sm px-4 py-1.5 rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  )
}