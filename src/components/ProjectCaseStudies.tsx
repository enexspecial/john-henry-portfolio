import { motion } from 'framer-motion'
import { Code, Play, Github } from 'lucide-react'

type Project = {
  title: string;
  description: string;
  role: string;
  tools: string[];
  features: string[];
  demo: string | null;
  github: string | null;
  image: string;
}

type ProjectCaseStudiesProps = {
  projects: Project[]
}

export default function ProjectCaseStudies({ projects }: ProjectCaseStudiesProps) {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Project Case Studies</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Real products I&apos;ve built and shipped</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card group"
            >
              <div className="aspect-video bg-gray-200 dark:bg-dark-700 rounded-lg mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-purple-100 dark:from-primary-900 dark:to-purple-900 flex items-center justify-center">
                  <Code size={48} className="text-primary-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <span className="text-sm font-semibold text-primary-600">Role: {project.role}</span>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Tools Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded text-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-3">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2 text-sm py-2 px-4"
                  >
                    <Play size={16} />
                    Live Demo
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary flex items-center gap-2 text-sm py-2 px-4"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 