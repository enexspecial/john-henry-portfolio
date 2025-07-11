import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

export default function AIIntegration() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">AI Integration & Productivity</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">How I leverage AI tools to ship faster and better code</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">AI-Accelerated Development</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold">Built auth + role-based API in 2 hours with Cursor</h4>
                  <p className="text-gray-600 dark:text-gray-300">Complete authentication system with JWT, role-based access control, and API documentation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold">3x faster feature development with GitHub Copilot</h4>
                  <p className="text-gray-600 dark:text-gray-300">Automated boilerplate generation, test writing, and code documentation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-primary-600 rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold">AI-powered code reviews and optimization</h4>
                  <p className="text-gray-600 dark:text-gray-300">Automated performance analysis, security scanning, and best practice suggestions</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-600 mb-4">3x</div>
              <h4 className="text-xl font-semibold mb-2">Faster Development</h4>
              <p className="text-gray-600 dark:text-gray-300">Average time reduction using AI tools</p>
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center">
                <span>Code Quality</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Development Speed</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Bug Reduction</span>
                <div className="flex gap-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 