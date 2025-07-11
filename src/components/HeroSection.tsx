import { motion } from "framer-motion";
import { ExternalLink, Download, Mail } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="section-padding pt-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            I build scalable systems and deliver high-impact products using{" "}
            <span className="gradient-text">
              AI-assisted development workflows.
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 text-balance">
            Fullstack Engineer with a backend core — experienced in building
            distributed systems and delivering business-critical applications
            across fintech and e-health sectors. Over 8 years of hands-on
            engineering, with products deployed in 7 African countries. I
            specialize in{" "}
            <strong>
              Node.js, TypeScript, Go, Python, and backend architecture
            </strong>
            , and extend into fullstack delivery using React, GraphQL, and
            LLM-powered integrations.
            <br />
            <br />
            Open to remote backend or fullstack roles — focused on performance,
            reliability, and fast execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary flex items-center gap-2">
              <ExternalLink size={20} />
              View Projects
            </button>
            <a 
              href="/myResume.pdf" 
              download
              className="btn-secondary flex items-center gap-2"
            >
              <Download size={20} />
              Download Resume
            </a>
            <button className="btn-primary flex items-center gap-2">
              <Mail size={20} />
              Let&apos;s Work Together
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
