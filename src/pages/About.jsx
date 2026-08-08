import {
  Code,
  Wrench,
  Bot,
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Cloud,
  Shield,
  Cpu,
} from 'lucide-react'
import { personalInfo, summary, currentlyLearning, certificationsInProgress } from '../data/portfolio'

export default function About() {
  const highlights = [
    {
      icon: Wrench,
      title: 'IT & Hardware Support',
      description:
        'Hands-on experience in computer hardware & software troubleshooting, network configuration, and preventive maintenance through OJT at Jose Rizal University.',
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description:
        'Building web applications with HTML, CSS, JavaScript, PHP, and MySQL. Experience with frontend UI design and backend database-driven logic.',
    },
    {
      icon: Bot,
      title: 'AI & Machine Learning',
      description:
        'Applied AI/ML fundamentals in projects like Cybernate (AI scam detection), plant disease detection, and drowsiness detection using computer vision.',
    },
    {
      icon: Cpu,
      title: 'Embedded Systems & IoT',
      description:
        'PCB circuit design, Arduino and Raspberry Pi programming, sensor integration. Built robotics projects that placed 2nd in ICpEP competitions.',
    },
    {
      icon: Users,
      title: 'Leadership & Teamwork',
      description:
        'Served as CTO of AWS Learning Community JRU chapter and Director of Sports for ICpEP (2 terms), organizing tech events and team-building activities.',
    },
    {
      icon: Cloud,
      title: 'Cloud Computing',
      description:
        'AWS Certified Cloud Practitioner with foundational knowledge of cloud services, deployment models, security, and billing.',
    },
  ]

  return (
    <div className="space-y-24 py-20">
      {/* Hero Section */}
      <section className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-cyan rounded-full animate-float" />
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="relative w-full h-full object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div>
              <p className="text-sm text-accent-cyan font-mono mb-2">About Me</p>
              <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
                {personalInfo.name}
              </h1>
              <p className="text-xl text-text-tertiary">
                {personalInfo.title} • {personalInfo.university}
              </p>
            </div>

            <p className="text-lg text-text-secondary leading-relaxed">{summary.full}</p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="badge">
                <Award className="w-4 h-4" />
                Top 8 Academic Excellence
              </span>
              <span className="badge">
                <Cloud className="w-4 h-4" />
                AWS Certified
              </span>
              <span className="badge">
                <Shield className="w-4 h-4" />
                CompTIA ITF+ Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm text-accent-cyan font-mono mb-4">Core Strengths</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            What I Bring to the Table
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            A diverse skill set spanning hardware support, software development, AI/ML, embedded
            systems, and leadership experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon
            return (
              <div
                key={index}
                className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-text-secondary">{highlight.description}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* Currently Learning */}
      <section className="container-custom">
        <div className="glass p-8 md:p-12 rounded-2xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 mb-4">
              <TrendingUp className="w-4 h-4 text-accent-cyan" />
              <span className="text-sm font-medium text-accent-cyan">Continuous Growth</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Currently Learning
            </h2>
            <p className="text-text-secondary">
              Technologies and skills I&apos;m actively developing to stay ahead in the field.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentlyLearning.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 glass p-4 rounded-lg hover:-translate-y-0.5 transition-transform"
              >
                <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications in Progress */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm text-accent-cyan font-mono mb-4">Next Milestones</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Certifications in Progress
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Building on my foundation with advanced certifications planned for 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificationsInProgress.map((cert, index) => (
            <div key={index} className="glass p-6 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent-cyan/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent-cyan" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">{cert.title}</h3>
                  <p className="text-sm text-text-tertiary mb-2">Expected: {cert.expectedDate}</p>
                  <p className="text-sm text-text-secondary">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education & Career Path */}
      <section className="container-custom">
        <div className="glass p-8 md:p-12 rounded-2xl space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Education & Career Path
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From Senior High School honor student to Computer Engineering undergraduate, with a
              clear path toward impactful tech careers.
            </p>
          </div>

          <div className="space-y-6">
            <div className="glass p-6 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Bachelor of Science in Computer Engineering
                  </h3>
                  <p className="text-text-tertiary">{personalInfo.university}</p>
                </div>
                <span className="text-sm text-accent-cyan font-mono">2023 - 2027</span>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Top 8 Academic Excellence Awards (1st, 2nd, and 3rd year)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Thesis: IoT-based Balance and Tremor Exercise Board for Parkinson&apos;s with Blood
                    Pressure Monitoring and Android Application
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Coursework: Computer architecture, embedded systems, programming, networking,
                    and AI/ML
                  </span>
                </li>
              </ul>
            </div>

            <div className="glass p-6 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Senior High School - ICT (Computer System Servicing)
                  </h3>
                  <p className="text-text-tertiary">Fort Bonifacio High School</p>
                </div>
                <span className="text-sm text-accent-cyan font-mono">2019 - 2023</span>
              </div>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Graduated as an Honor Student</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Specialized training in computer hardware, software troubleshooting, and network
                    configuration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="container-custom">
        <div className="glass p-8 md:p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Beyond the Resume</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-text-primary mb-2">🎯 Problem Solver</h3>
              <p className="text-sm text-text-secondary">
                I approach challenges methodically, breaking down complex problems into manageable
                pieces and finding practical solutions.
              </p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-text-primary mb-2">🤝 Team Player</h3>
              <p className="text-sm text-text-secondary">
                Two terms as Director of Sports and CTO of AWS Learning Community taught me the
                value of collaboration and clear communication.
              </p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="font-semibold text-text-primary mb-2">📚 Lifelong Learner</h3>
              <p className="text-sm text-text-secondary">
                From hardware troubleshooting to cloud computing and AI/ML, I&apos;m always expanding my
                skill set and staying current with technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
