import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-custom text-center">
        <div className="text-2xl font-bold gradient-text mb-4">John Henry</div>
        <p className="text-gray-400 mb-6">
          Modern Software Engineer • Building scalable systems with AI-accelerated workflows
        </p>
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://github.com/johnhenry" className="text-gray-400 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com/in/johnhenry" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:john.henry@example.com" className="text-gray-400 hover:text-white transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} John Henry. Built with Next.js, TailwindCSS, and Framer Motion.
        </p>
      </div>
    </footer>
  )
} 