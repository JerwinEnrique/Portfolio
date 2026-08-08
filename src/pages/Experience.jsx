import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ChevronDown,
  ChevronUp,
  Briefcase,
  GraduationCap,
  Users,
  Clock,
  Award,
  Cloud,
  Brain,
  ShieldCheck,
  Code,
  ExternalLink,
} from 'lucide-react'
import { timeline, certifications, personalInfo } from '../data/portfolio'

export default function Experience() {
  const [expandedItems, setExpandedItems] = useState({})

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const getTypeIcon = (type) => {
    switch (type) {
      case 'work':
        return Briefcase
      case 'education':
        return GraduationCap
      case 'leadership':
        return Users
      case 'internship':
        return Clock
      default:
        return Briefcase
    }
  }

  const getTypeColor = (type) => {
    switch (type) {
      case 'work':
        return 'text-primary'
      case 'education':
        return 'text-accent-cyan'
      case 'leadership':
        return 'text-yellow-500'
      case 'internship':
        return 'text-green-500'
      default:
        return 'text-primary'
    }
  }

  const getCertIcon = (icon) => {
    switch (icon) {
      case 'cpu':
        return ShieldCheck
      case 'cloud':
        return Cloud
      case 'brain':
        return Brain
      case 'list':
        return Code
      default:
        return Award
    }
  }

  return (
    <div className="space-y-24 py-20">
      {/* Hero Section */}
      <section className="container-custom text-center space-y-6">
        <p className="text-sm text-accent-cyan font-mono">Professional Journey</p>
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">Experience & Timeline</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          A comprehensive look at my education, work experience, leadership roles, and professional
          certifications — from hands-on IT support to leading student tech organizations.
        </p>
      </section>

      {/* Timeline */}
      <section className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l-2 border-primary/30">
            {timeline.map((item) => {
              const TypeIcon = getTypeIcon(item.type)
              const isExpanded = expandedItems[item.id]

              return (
                <div key={item.id} className="mb-12 relative">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute -left-[calc(2rem+5px)] w-4 h-4 rounded-full border-2 border-background-primary ${getTypeColor(
                      item.type
                    ).replace('text-', 'bg-')}`}
                  />

                  {/* Content Card */}
                  <div className="glass p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-4 gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <TypeIcon className={`w-5 h-5 ${getTypeColor(item.type)}`} />
                          <span
                            className={`text-xs font-mono px-2 py-1 rounded ${getTypeColor(
                              item.type
                            ).replace('text-', 'bg-')}/10 ${getTypeColor(item.type)}`}
                          >
                            {item.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-text-primary">{item.role}</h3>
                        <p className="text-text-tertiary">{item.org}</p>
                        <p className="text-sm text-text-tertiary">{item.location}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-accent-cyan font-mono">
                          {item.dateStart} - {item.dateEnd}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-text-secondary mb-4">{item.summary}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded bg-background-tertiary text-text-tertiary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Expandable Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <>
                        <button
                          onClick={() => toggleItem(item.id)}
                          className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                        >
                          {isExpanded ? (
                            <>
                              <ChevronUp className="w-4 h-4" />
                              Hide Key Achievements
                            </>
                          ) : (
                            <>
                              <ChevronDown className="w-4 h-4" />
                              View Key Achievements ({item.achievements.length})
                            </>
                          )}
                        </button>

                        {isExpanded && (
                          <ul className="mt-4 space-y-2 pl-4">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary">
                                <span className="text-primary mt-1 flex-shrink-0">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container-custom">
        <div className="text-center mb-12">
          <p className="text-sm text-accent-cyan font-mono mb-4">Professional Credentials</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Certifications & Credentials
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Industry-recognized certifications validating my skills in IT fundamentals, cloud
            computing, entrepreneurship, and AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert) => {
            const Icon = getCertIcon(cert.icon)

            return (
              <div
                key={cert.id}
                className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">{cert.title}</h3>
                    <p className="text-sm text-text-tertiary mb-2">
                      {cert.issuer}
                      {cert.date && ` • ${cert.date}`}
                    </p>
                    <p className="text-sm text-text-secondary mb-3">{cert.whatItMeans}</p>
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      {cert.credentialId && (
                        <p className="text-xs text-text-tertiary font-mono">
                          ID: {cert.credentialId}
                        </p>
                      )}
                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                        >
                          Verify Credential
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom">
        <div className="glass p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I&apos;m actively seeking internship and entry-level opportunities where I can apply my
            technical skills, continue learning, and contribute to meaningful projects.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              Get in Touch
            </a>
            <Link to="/resume" className="btn-secondary">
              Download Resume
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
