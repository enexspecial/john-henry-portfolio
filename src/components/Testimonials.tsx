import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

type Testimonial = {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">What People Say</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">Testimonials from colleagues and clients</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users size={24} className="text-primary-600" />
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 