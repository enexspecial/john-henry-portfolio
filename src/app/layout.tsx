import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'John Henry - Modern Software Engineer',
  description: 'I build scalable systems and ship real products using AI-accelerated workflows. Senior Backend Engineer specializing in Node.js, TypeScript, and modern web technologies.',
  keywords: ['Software Engineer', 'Backend Developer', 'Node.js', 'TypeScript', 'React', 'AI', 'Fintech', 'E-Health'],
  authors: [{ name: 'John Henry' }],
  creator: 'John Henry',
  openGraph: {
    title: 'John Henry - Modern Software Engineer',
    description: 'I build scalable systems and ship real products using AI-accelerated workflows.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'John Henry - Modern Software Engineer',
    description: 'I build scalable systems and ship real products using AI-accelerated workflows.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 