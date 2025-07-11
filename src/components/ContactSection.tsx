import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Ready to build something amazing? Let&apos;s connect!</p>
        </motion.div>
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="card text-center"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I&apos;m always interested in new opportunities and exciting projects.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:john04star@gmail.com"
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <Mail size={20} />
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/henry-john-879282b7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/enexspecial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Github size={20} />
                  GitHub
                </a>
              </div>
              <div className="pt-6 border-t border-gray-200 dark:border-dark-700">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Available for full-time positions, contract work, and consulting projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 