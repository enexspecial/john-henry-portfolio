import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md dark:bg-dark-900/80 z-50 border-b border-gray-200 dark:border-dark-700">
      <div className="container-custom px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold gradient-text"
          >
            JH
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#skills" className="hover:text-primary-600 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary-600 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-primary-600 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary-600 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  )
} 