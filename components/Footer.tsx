export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          I&apos;m actively looking for Senior Frontend, Full-Stack, or AI Engineer roles
          in the UK. If you have an opportunity, I&apos;d love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:madhurid0309@gmail.com"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-xl transition-colors"
          >
            madhurid0309@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/madhuri-pokala"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-blue-400 text-gray-300 font-medium px-8 py-3 rounded-xl transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mpokala-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 hover:border-blue-400 text-gray-300 font-medium px-8 py-3 rounded-xl transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="border-t border-gray-800 pt-8 text-gray-500 text-sm">
          Built with Next.js 14 &middot; TypeScript &middot; Tailwind CSS &middot; Deployed on Vercel
        </div>

      </div>
    </footer>
  )
}
