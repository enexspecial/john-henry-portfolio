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
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium mb-6"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for Remote Opportunities
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
            <button 
              className="btn-primary flex items-center gap-2 px-6 py-3 text-lg font-semibold relative overflow-hidden group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ExternalLink size={20} className="relative z-10" />
              <span className="relative z-10">View My Work</span>
            </button>
            
            <a 
              href="/myResume.pdf" 
              download
              className="btn-secondary flex items-center gap-2 px-6 py-3 text-lg font-semibold hover:scale-105 transition-transform"
              aria-label="Download resume as PDF"
            >
              <Download size={20} />
              Download Resume
            </a>
            
            <button className="btn-primary flex items-center gap-2 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700">
              <Mail size={20} />
              Let&apos;s Connect
            </button>
          </motion.div>

          {/* Availability Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-sm text-gray-500 dark:text-gray-400 mt-6"
          >
            Open to Backend, Fullstack, or Engineering Leadership roles • Remote or Hybrid
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
