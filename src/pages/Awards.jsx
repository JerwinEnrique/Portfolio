import { Link } from 'react-router-dom'
import { Cpu, Route, Award as AwardIcon, GraduationCap, Trophy } from 'lucide-react'
import { awards } from '../data/portfolio'

export default function Awards() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'cpu':
        return Cpu
      case 'route':
        return Route
      case 'award':
        return AwardIcon
      case 'graduation-cap':
        return GraduationCap
      default:
        return Trophy
    }
  }

  return (
    <div className="space-y-24 py-20">
      {/* Hero Section */}
      <section className="container-custom text-center space-y-6">
        <p className="text-sm text-accent-cyan font-mono">Recognition & Achievements</p>
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">Awards & Honors</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Recognition for academic excellence, robotics competitions, and technical achievements
          throughout my educational journey.
        </p>
      </section>

      {/* Awards Grid */}
      <section className="container-custom">
        <div className="grid md:grid-cols-2 gap-6">
          {awards.map((award) => {
            const Icon = getIcon(award.icon)

            return (
              <div
                key={award.id}
                className="glass p-6 rounded-xl hover:-translate-y-1 transition-transform"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-text-primary mb-1">
                      {award.title}
                    </h3>
                    <p className="text-sm text-text-tertiary mb-3">
                      {award.organizer} • {award.date}
                    </p>
                    <p className="text-sm text-text-secondary">{award.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Categories Summary */}
      <section className="container-custom">
        <div className="glass p-8 md:p-12 rounded-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
              Recognition Across Multiple Domains
            </h2>
            <p className="text-text-secondary">
              My awards span academic excellence, technical competitions, and specialized training.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <AwardIcon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Academic Excellence</h3>
              <p className="text-sm text-text-secondary">
                Consistent top performance throughout my Computer Engineering program, ranking Top
                8-9 for three consecutive years.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent-cyan/10 rounded-full flex items-center justify-center mx-auto">
                <Cpu className="w-8 h-8 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Robotics Competitions</h3>
              <p className="text-sm text-text-secondary">
                2nd place finishes in both Sumobot and Line Follower Robot competitions,
                demonstrating hands-on engineering and programming skills.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Honor Student</h3>
              <p className="text-sm text-text-secondary">
                Graduated with honors from Senior High School in the Computer System Servicing
                track, building a strong technical foundation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom">
        <div className="glass p-12 rounded-2xl text-center space-y-6">
          <Trophy className="w-16 h-16 text-primary mx-auto" />
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Ready for New Challenges
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            These awards reflect my dedication to excellence and continuous improvement. I&apos;m eager
            to bring this same commitment to meaningful projects and team environments.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/projects" className="btn-primary">
              View My Projects
            </Link>
            <Link to="/experience" className="btn-secondary">
              See My Experience
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
