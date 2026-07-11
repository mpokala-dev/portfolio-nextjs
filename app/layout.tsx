import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/Navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Madhuri Pokala — Senior Frontend Developer",
  description: "Senior Frontend Developer specialising in React, TypeScript, Next.js and AI-powered applications. Based in Milton Keynes, UK.",
  openGraph: {
    title: "Madhuri Pokala — Senior Frontend Developer",
    description: "React · TypeScript · Next.js · AI Apps · Open to UK Roles",
    url: "https://portfolio-nextjs-rho-eight.vercel.app",
    siteName: "Madhuri Pokala Portfolio",
    locale: "en_GB",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`} style={{ background: "var(--cream)", color: "var(--brown-mid)" }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
