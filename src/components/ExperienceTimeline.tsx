import { motion } from 'framer-motion'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
}

type ExperienceTimelineProps = {
  experience: Experience[]
}

export default function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience Timeline</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">My professional journey in software engineering</p>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {job.company.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold">{job.company}</h3>
                    <span className="text-primary-600 font-semibold">{job.role}</span>
                  </div>
                  <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      {job.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      {job.location}
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {job.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight size={16} className="text-primary-600 mt-1 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 