import { motion } from 'framer-motion'
import { Code, Server, Smartphone, Zap, Database, Globe, Shield } from 'lucide-react'

type SkillsMatrixProps = {
  skills: {
    languages: string[];
    backend: string[];
    frontend: string[];
    devops: string[];
    databases: string[];
    tools: string[];
    ai: string[];
  }
}

export default function SkillsMatrix({ skills }: SkillsMatrixProps) {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills Matrix</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Technologies I use to build amazing products</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex items-center gap-3 mb-4">
                {category === 'languages' && <Code className="text-primary-600" size={24} />}
                {category === 'backend' && <Server className="text-primary-600" size={24} />}
                {category === 'frontend' && <Smartphone className="text-primary-600" size={24} />}
                {category === 'devops' && <Zap className="text-primary-600" size={24} />}
                {category === 'databases' && <Database className="text-primary-600" size={24} />}
                {category === 'tools' && <Globe className="text-primary-600" size={24} />}
                {category === 'ai' && <Shield className="text-primary-600" size={24} />}
                <h3 className="text-xl font-semibold capitalize">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium dark:bg-primary-900 dark:text-primary-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 