'use client'

import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import SkillsMatrix from '../components/SkillsMatrix'
import AIIntegration from '../components/AIIntegration'
import ProjectCaseStudies from '../components/ProjectCaseStudies'
import ExperienceTimeline from '../components/ExperienceTimeline'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  const skills = {
    languages: ['TypeScript', 'JavaScript', 'Go', 'Python'],
    backend: ['Node.js', 'NestJS', 'Fastify', 'Express', 'Golang', 'Django', 'Flask','Gin' ],
    frontend: ['React', 'React Native', 'Vite', 'Next.js', 'TailwindCSS'],
    devops: ['Docker', 'CI/CD', 'GitHub Actions', 'Nginx', 'AWS'],
    databases: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'],
    tools: ['GraphQL', 'Apollo', 'Prisma', 'PM2', 'Kubernetes', 'Jenkins', 'TypeORM', 'RabbitMQ', 'Kafka', 'gRPC'],
    ai: ['Cursor', 'GitHub Copilot', 'OpenAI APIs', 'LangChain']
  }

  // Hero Section Skills and Achievements
  const heroSkills = [
    { icon: 'Code', text: "Node.js • TypeScript • Go • Python" },
    { icon: 'Database', text: "PostgreSQL • Redis • MongoDB • AWS" },
    { icon: 'Globe', text: "React • GraphQL • REST APIs • Microservices" },
    { icon: 'Zap', text: "AI/ML Integration • LLM Workflows • DevOps" }
  ];

  const heroAchievements = [
    { icon: 'Users', value: "7", label: "African Countries" },
    { icon: 'TrendingUp', value: "8+", label: "Years Experience" },
    { icon: 'Database', value: "99.9%", label: "System Uptime" },
    { icon: 'Zap', value: "40%", label: "Faster Delivery" }
  ];

  const projects = [
    {
      title: 'Real-time Note Sharing App',
      description: 'Built a collaborative note-taking platform with real-time synchronization using React and GraphQL.',
      role: 'Product Owner | Full-stack Developer',
      tools: ['React', 'GraphQL', 'Node.js', 'PostgreSQL', 'NestJs', 'RestAPI'],
      features: ['Real-time collaboration', 'Markdown support', 'User authentication', 'Version history'],
      demo: 'https://notes-app-demo.vercel.app',
      github: 'https://github.com/enexspecial/real-time-collab',
      image: '/api/placeholder/400/250'
    },
    {
      "title": "Intelligent Compliance Engine",
      "description": "Developed a modular, scalable compliance engine for electronic health records, enabling healthcare providers to automate compliance checks, manage documents, and ensure regulatory adherence. Features a microservices architecture with real-time analysis, secure authentication, and seamless integration with third-party systems.",
      "role": "Product Owner | Full-stack Developer",
      "tools": [
        "React Native",
        "NestJS",
        "Node.js",
        "Go",
        "PostgreSQL",
        "gRPC",
        "Docker",
        "BullMQ",
        "Redis",
        "FastAPI",
        "Python",
        "LLM",
        'Microservices',
      ],
      "features": [
        "Automated compliance analysis",
        "Document management",
        "User authentication & roles",
        "Job queue processing",
        "Microservices architecture",
        "API gateway",
        "Real-time notifications",
        "HIPAA compliance"
      ],
      "demo": "https://ehealth-demo.vercel.app",
      "github": "https://github.com/enexspecial/inteligent-compliance-engine",
      "image": "/api/placeholder/400/250"
    }
  ]

  const experience = [
    {
      company: 'AUTOCHEK',
      role: 'Senior Backend Engineer',
      period: 'Oct 2023 – Present',
      location: 'Lagos, Nigeria',
      achievements: [
        'Directed the migration of the codebase from Node.js 14 to 20, achieving performance improvements and aligning it with cutting-edge technologies and best security practices.',
        'Led the end–to-end development and unit testing of “Dealers Financing”, a specialized product tailored for financing dealers involved in importing vehicles across multiple African markets (Nigeria, Kenya, Ivory Coast, Senegal, Morocco, Uganda, and Egypt).',
        'Orchestrated a collaborative effort with a team of 10 Engineers to develop a sales conversion tool which empowered marketers & dealers to effectively track online vehicle sales, optimizing commission structures and enhancing overall performance.'
      ]
    },
    {
      company: 'PRIMED E-HEALTH',
      role: 'Chief Technical Officer (CTO)',
      period: 'Jan 2020 – Oct 2023',
      location: 'Remote',
      achievements: [
        'Overhauled and led the revamp of software architecture in use with a remote team of 6 in 3 months to keep up with industry standards.',
        'Repaired fractured business relationships with 4+ clients by proposing and successfully deploying updated user-friendly applications for the clients use in record time.',
        'Identified emerging technologies and trends, and evaluated potential impact on the organization within a projected timeframe of 18 months for consideration by Senior Management.'
      ]
    },
    {
      company: 'PRIMED E-HEALTH',
      role: 'Senior Software Developer',
      period: 'Jan 2020 – Oct 2023',
      location: 'Remote',
      achievements: [
        'Collaborated with a cross-functional remote team of 15 on the development of 3 software applications in 12 months.',
        'Defined the scope and process flows for projects alongside 2 Product Managers and UI/UX designers.',
        'Deployed 2 out of 3 projects within stipulated timeframe of 12 months.'
      ]
    },
    {
      company: 'NAHERE LIMITED',
      role: 'Backend Developer | DevOps',
      period: 'Nov 2018 – Mar 2022',
      location: '',
      achievements: [
        'Co-operated with technical teams from 3 companies to develop a Govt. owned platform which grants loans to petty traders.',
        'Debugged 50% of functional apps in company’s ERP SaaS portfolio and coached Junior colleagues on system server setups.',
        'Innovated and ideated with 3 other team mates with approval from Senior Management the design of HRM application and wrote 2k+ lines of code as Backend Web developer for the app.',
        'Maintained server operations and activities for over 15 web applications, websites and companies, and ensured daily functionality.',
        'Liaised with product managers and stakeholders to gather requirements and design solutions for scalable web applications utilizing 3+ frameworks inclusive of Python.'
      ]
    },
    {
      company: 'VERSCOM LIMITED',
      role: 'Backend Engineer',
      period: 'Nov 2017 – Nov 2018',
      location: '',
      achievements: [
        'Implemented and designed a scalable REST API in Nodejs and wrote unit and integration test to ensure API reliability daily.',
        'Monitored API performance using New Relic and combined forces with 4 Engineers to manage cloud infrastructures.',
        'Reviewed codes, provided constructive feedbacks to peers and proffered improvement suggestions.',
        'Supported clients by trouble shooting and rectifying Web application bugs.'
      ]
    }
  ]

  const testimonials = [
    {
      name: 'Ugochukwu Nwagba',
      role: 'CEO, NaHere Limited',
      content: 'John\'s ability to lead backend revamps saved our delivery timeline. His technical expertise and leadership skills are exceptional.',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Amin Balogun',
      role: 'Co Founder, Primed E-Health',
      content: 'John transformed our development process. His AI-assisted workflows helped us ship features 3x faster than before.',
      avatar: '/api/placeholder/60/60'
    },
    {
      name: 'Peter Edoja',
      role: 'Senior Developer, Autochek',
      content: 'Working with John has been incredible. His knowledge of modern backend patterns and AI tools is game-changing.',
      avatar: '/api/placeholder/60/60'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800">
      <Navbar />
      <HeroSection skills={heroSkills} achievements={heroAchievements} />
      <SkillsMatrix skills={skills} />
      <AIIntegration />
      <ProjectCaseStudies projects={projects} />
      <ExperienceTimeline experience={experience} />
      <Testimonials testimonials={testimonials} />
      <ContactSection />
      <Footer />
    </div>
  )
} 