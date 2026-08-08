import { Link } from 'react-router-dom'
import {
  FileText,
  GitBranch,
  Award,
  Cloud,
  Users,
  Trophy,
  Star,
  GraduationCap,
  BrainCircuit,
  Shield,
  Globe,
  Bot,
  Network,
  Wrench,
  Database,
  ArrowRight,
} from 'lucide-react'
import { personalInfo, summary, stats, certifications, awards } from '../data/portfolio'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured)
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center pt-20 pb-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Text Content */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-primary">
                  Open to internship & entry-level opportunities
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text leading-tight">
                Computer Engineering Student
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-text-secondary max-w-2xl">
                {summary.short}
              </p>

              {/* Credentials Badges */}
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <span className="badge">
                  <GraduationCap className="w-4 h-4" />
                  BS Computer Engineering, Class of {personalInfo.graduationYear}
                </span>
                <span className="badge">
                  <Award className="w-4 h-4" />
                  2x ICpEP Competition Finalist
                </span>
                <span className="badge">
                  <Cloud className="w-4 h-4" />
                  AWS Certified
                </span>
                <span className="badge">
                  <Users className="w-4 h-4" />
                  CTO, AWS Learning Community (JRU)
                </span>
                <span className="badge">
                  <Trophy className="w-4 h-4" />
                  Director of Sports, ICpEP (2 Terms)
                </span>
                <span className="badge">
                  <Star className="w-4 h-4" />
                  Top 8, BSCpE Academic Excellence
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/resume" className="btn-primary">
                  <FileText className="w-5 h-5" />
                  View Resume
                </Link>
                <Link to="/projects" className="btn-secondary">
                  <GitBranch className="w-5 h-5" />
                  View Projects
                </Link>
                <Link to="/experience" className="btn-secondary">
                  <GitBranch className="w-5 h-5" />
                  View Experience
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-cyan rounded-3xl animate-float" />
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm text-accent-cyan font-mono mb-4">Selected Work</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A few of the projects I&apos;m proudest of, spanning embedded systems, AI, and full-stack
            development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/projects" className="btn-secondary inline-flex">
            <GitBranch className="w-5 h-5" />
            View All Projects
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-custom">
        <div className="glass p-8 md:p-12 rounded-2xl space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Professional Summary
            </h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              A hardworking and motivated Computer Engineering student with basic technical and
              customer service skills. Able to work well in a team, communicate effectively, and
              adapt quickly in fast-paced environments. Willing to learn and gain experience while
              providing excellent service.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-text">{stats.certifications}</div>
              <div className="text-sm text-text-tertiary uppercase tracking-wide">Certifications</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-text">{personalInfo.graduationYear}</div>
              <div className="text-sm text-text-tertiary uppercase tracking-wide">Expected Graduation</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-text">{stats.projects}</div>
              <div className="text-sm text-text-tertiary uppercase tracking-wide">Projects Built</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold gradient-text">AWS</div>
              <div className="text-sm text-text-tertiary uppercase tracking-wide">Cloud Certified</div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Objective & Tech Stack */}
      <section className="container-custom">
        <div className="glass p-8 md:p-12 rounded-2xl space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">Career Objective</h2>
            <p className="text-text-secondary max-w-3xl mx-auto">
              Seeking an internship or entry-level opportunity in Computer Engineering, Embedded
              Systems, IoT, or Software Development where I can apply my hands-on experience in
              robotics, cloud computing, and full-stack development, while continuing to grow as a
              reliable, detail-oriented engineer who learns quickly and collaborates well within a
              team.
            </p>
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold gradient-text">Technology Stack</h2>
            <p className="text-text-secondary">
              Core tools and technologies I build with, spanning embedded systems, programming
              languages, web/mobile development, and cloud platforms.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'Arduino',
              'Raspberry Pi',
              'Python',
              'JavaScript',
              'C Programming',
              'Java',
              'MySQL / SQL',
              'AWS Cloud',
              'Flutter & Dart',
              'HTML / CSS',
              'Git & GitHub',
              'Cybersecurity Fundamentals',
            ].map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Certifications & Awards Preview */}
      <section className="container-custom">
        <div className="glass p-8 md:p-12 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Certifications & Awards
            </h2>
            <p className="text-text-secondary">
              A quick look — full details on the Experience and Awards pages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Certifications */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Certifications</h3>
              <div className="space-y-2">
                {certifications.slice(0, 5).map((cert) => (
                  <div
                    key={cert.id}
                    className="text-sm text-text-secondary py-2 border-b border-border-subtle last:border-0"
                  >
                    {cert.title}
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Awards</h3>
              <div className="space-y-2">
                {awards.slice(0, 5).map((award) => (
                  <div
                    key={award.id}
                    className="text-sm text-text-secondary py-2 border-b border-border-subtle last:border-0"
                  >
                    {award.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Grid */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm text-accent-cyan font-mono mb-4">What I bring</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Core Competencies
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A broad, hands-on skill set spanning hardware, software, and everything in between.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Wrench,
              title: 'Hardware & Software Troubleshooting',
              description:
                'Hands-on experience diagnosing and resolving computer hardware and software issues, gained through OJT and coursework.',
            },
            {
              icon: Network,
              title: 'Network Configuration',
              description:
                'Practical experience setting up and troubleshooting network connections as part of IT support and OJT work.',
            },
            {
              icon: Globe,
              title: 'Web Development',
              description:
                'Building frontend UIs and backend/database-driven web applications, with version control via Git/GitHub.',
            },
            {
              icon: Bot,
              title: 'Robotics & Embedded Systems',
              description:
                'PCB circuit design, Raspberry Pi and Arduino programming, and sensor/robot control — proven through 2 ICpEP robotics competition placements.',
            },
            {
              icon: BrainCircuit,
              title: 'AI & Machine Learning',
              description:
                'Applying AI/ML fundamentals in hands-on projects like Cybernate (AI scam detection) and AI-based plant disease detection.',
            },
            {
              icon: Cloud,
              title: 'Cloud Computing',
              description:
                'AWS Certified Cloud Practitioner with foundational knowledge of cloud concepts, core AWS services, security, and pricing.',
            },
            {
              icon: Shield,
              title: 'Cybersecurity',
              description:
                'CompTIA ITF+ grounding in security concepts, plus AWS cloud security/compliance basics and network security.',
            },
            {
              icon: Database,
              title: 'Database & SQL',
              description:
                'SQL query writing, relational database design, and MySQL database management for application backends.',
              },
          ].map((competency, index) => {
            const Icon = competency.icon
            return (
              <div key={index} className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {competency.title}
                </h3>
                <p className="text-sm text-text-secondary">{competency.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom">
        <div className="glass p-12 md:p-16 rounded-2xl text-center space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold gradient-text">Let&apos;s Work Together</h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I&apos;m open to entry-level and internship opportunities across the roles my Computer
            Engineering background prepares me for — where I can keep learning and contribute to a
            team.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'AI Engineer',
              'Cybersecurity Analyst',
              'Cloud Engineer',
              'Web / Software Developer',
              'Embedded Systems / IoT Developer',
              'Network Engineer',
              'IT Support Specialist',
              'Database Administrator',
            ].map((role) => (
              <span key={role} className="badge">
                {role}
              </span>
            ))}
          </div>
          <Link to="/projects" className="btn-primary inline-flex">
            <GitBranch className="w-5 h-5" />
            Explore My Work
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
