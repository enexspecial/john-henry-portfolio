import { motion } from "framer-motion";
import { ExternalLink, Download, Mail, Code, Database, Globe, Zap, Users, TrendingUp } from "lucide-react";
import { useState } from "react";

interface Skill {
  icon: string;
  text: string;
}

interface Achievement {
  icon: string;
  value: string;
  label: string;
}

interface HeroSectionProps {
  skills: Skill[];
  achievements: Achievement[];
}

export default function HeroSection({ skills, achievements }: HeroSectionProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Icon mapping
  const iconMap = {
    Code,
    Database,
    Globe,
    Zap,
    Users,
    TrendingUp
  };

  return (
    <section className="section-padding pt-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
      </div>
      
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            Open to New Opportunities
          </motion.div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-900 dark:text-white">
              Senior Fullstack Engineer
            </span>
            <span className="block gradient-text">
              Specialized in AI-Powered Backend Systems
            </span>
          </h1>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            I architect and build <strong>scalable backend systems</strong> that power mission-critical applications. 
            With 8+ years delivering high-performance solutions across fintech and e-health, I&apos;ve deployed systems 
            serving millions of users across 7 African countries with <strong>99.9% uptime</strong>.
          </p>

          {/* Technical Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            {skills.map((skill, index) => {
              const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
                >
                  <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {skill.text}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            {achievements.map((achievement, index) => {
              const IconComponent = iconMap[achievement.icon as keyof typeof iconMap];
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <IconComponent className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {achievement.value}
                    </span>
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {achievement.label}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a 
              href="#projects"
              className="btn-primary flex items-center gap-2 px-6 py-3 text-lg font-semibold relative overflow-hidden group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ExternalLink size={20} className="relative z-10" />
              <span className="relative z-10">View My Work</span>
            </a>
            
            <a 
              href="/myResume.pdf" 
              download
              className="btn-secondary flex items-center gap-2 px-6 py-3 text-lg font-semibold hover:scale-105 transition-transform"
              aria-label="Download resume as PDF"
            >
              <Download size={20} />
              Download Resume
            </a>
            
            <a 
              href="https://wa.me/+2348144093507?text=Hi%20John,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20opportunities%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              Let&apos;s Connect
            </a>
          </motion.div>

          {/* Availability Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-sm text-gray-500 dark:text-gray-400 mt-6"
          >
            Open to Backend, Fullstack, or Engineering Leadership roles • Flexible on work arrangement
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
