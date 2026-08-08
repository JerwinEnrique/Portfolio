import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-border-subtle">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-display font-bold text-lg">
                Jerwin Enrique
              </span>
              <span className="w-2 h-4 bg-primary animate-blink" />
            </div>
            <p className="text-text-tertiary text-sm mb-4">
              Computer Engineering student building across web, mobile, AI/ML, cloud, and embedded systems.
            </p>
            <div className="flex items-center space-x-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-tertiary hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-tertiary hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg text-text-tertiary hover:text-primary hover:bg-primary/5 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Navigate</h3>
            <nav className="space-y-2">
              <Link to="/" className="block text-text-tertiary hover:text-primary text-sm transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-text-tertiary hover:text-primary text-sm transition-colors">
                About
              </Link>
              <Link to="/projects" className="block text-text-tertiary hover:text-primary text-sm transition-colors">
                Projects
              </Link>
              <Link to="/experience" className="block text-text-tertiary hover:text-primary text-sm transition-colors">
                Experience
              </Link>
              <Link to="/skills" className="block text-text-tertiary hover:text-primary text-sm transition-colors">
                Skills
              </Link>
            </nav>
          </div>

          {/* More */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">More</h3>
            <nav className="space-y-2">
              <Link to="/awards" className="block text-text-tertiary hover:text-primary text-sm transition-colors">
                Awards
              </Link>
              <Link to="/resume" className="block text-text-tertiary hover:text-primary text-sm transition-colors">
                Resume
              </Link>
              <a
                href={personalInfo.resumePdf}
                download
                className="block text-text-tertiary hover:text-primary text-sm transition-colors"
              >
                Download Resume
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Get in touch</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 text-text-tertiary hover:text-primary text-sm transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
              <div className="flex items-center gap-2 text-text-tertiary text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-text-tertiary">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border-subtle text-center space-y-2">
          <p className="text-text-tertiary text-sm">
            Built with React · Vite · Tailwind CSS · Deployed on GitHub Pages
          </p>
          <p className="text-text-tertiary text-sm">
            &copy; {currentYear} Jerwin Enrique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
