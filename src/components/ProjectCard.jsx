import { useState } from 'react'
import {
  Github,
  ExternalLink,
  ChevronDown,
  Briefcase,
  Lock,
  Cpu,
  BrainCircuit,
  Radio,
  Smartphone,
  Database,
} from 'lucide-react'

// Priority order matters: a project can carry multiple categories (e.g. thesis + iot + mobile),
// so pick the most distinctive one first for its placeholder visual.
const CATEGORY_VISUALS = [
  { category: 'thesis', Icon: Cpu, label: 'Embedded / IoT' },
  { category: 'ai', Icon: BrainCircuit, label: 'AI / Machine Learning' },
  { category: 'iot', Icon: Radio, label: 'IoT / Embedded' },
  { category: 'mobile', Icon: Smartphone, label: 'Mobile App' },
  { category: 'client', Icon: Briefcase, label: 'Client Delivery' },
  { category: 'system', Icon: Database, label: 'Systems / Web' },
]
const DEFAULT_VISUAL = { Icon: Database, label: 'Web Application' }

function getProjectVisual(project) {
  return (
    CATEGORY_VISUALS.find((v) => project.category.includes(v.category)) || DEFAULT_VISUAL
  )
}

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)
  const hasLinks = Boolean(project.github || project.demo)
  const linkFallbackLabel = project.category.includes('client')
    ? 'Private Repository'
    : 'Academic Project'
  const { Icon: VisualIcon, label: visualLabel } = getProjectVisual(project)

  return (
    <article className="card group">
      {/* Project Image/Placeholder */}
      <div className="h-48 bg-gradient-to-br from-background-secondary to-background-tertiary relative overflow-hidden flex items-center justify-center">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent-cyan to-primary" />
            </div>
            <div className="relative z-10 flex flex-col items-center gap-2">
              <VisualIcon className="w-14 h-14 text-primary/60" />
              <span className="text-xs font-mono uppercase tracking-wide text-text-tertiary">
                {visualLabel}
              </span>
            </div>
          </>
        )}
        {project.featured && (
          <span className="absolute top-4 right-4 badge">Featured</span>
        )}
      </div>

      <div className="p-6 space-y-4">
        {/* Category Badge */}
        <div className="flex items-center gap-2">
          {project.category.includes('client') && (
            <span className="badge">
              <Briefcase className="w-3 h-3" />
              Client Project
            </span>
          )}
          {project.category.includes('thesis') && (
            <span className="badge">Thesis</span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-text-secondary line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map(tech => (
            <span key={tech} className="tag-outline text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* My Role */}
        {project.caseStudy?.role && (
          <p className="text-xs font-mono text-text-tertiary">
            <span className="text-primary">My Role:</span> {project.caseStudy.role}
          </p>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
          {project.caseStudy && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-sm font-medium text-primary hover:text-primary-light transition-colors flex items-center gap-1"
            >
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  expanded ? 'rotate-180' : ''
                }`}
              />
              {expanded ? 'Hide' : 'View'} Case Study
            </button>
          )}
          <div className="flex items-center gap-3 ml-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-primary transition-colors"
                aria-label="View source code"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-primary transition-colors"
                aria-label="View live demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {!hasLinks && (
              <span className="flex items-center gap-1.5 text-xs text-text-tertiary">
                <Lock className="w-3.5 h-3.5" />
                {linkFallbackLabel}
              </span>
            )}
          </div>
        </div>

        {/* Expanded Case Study */}
        {expanded && project.caseStudy && (
          <div className="mt-4 pt-4 border-t border-border-subtle space-y-4 text-sm">
            {project.caseStudy.background && (
              <div>
                <h4 className="font-semibold text-primary mb-2">Background</h4>
                <p className="text-text-secondary">{project.caseStudy.background}</p>
              </div>
            )}
            {project.caseStudy.problem && (
              <div>
                <h4 className="font-semibold text-primary mb-2">Problem</h4>
                <p className="text-text-secondary">{project.caseStudy.problem}</p>
              </div>
            )}
            {project.caseStudy.solution && (
              <div>
                <h4 className="font-semibold text-primary mb-2">Solution</h4>
                <p className="text-text-secondary">{project.caseStudy.solution}</p>
              </div>
            )}
            {project.caseStudy.features && (
              <div>
                <h4 className="font-semibold text-primary mb-2">Key Features</h4>
                <ul className="list-disc list-inside space-y-1 text-text-secondary">
                  {project.caseStudy.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {project.caseStudy.challenges && (
              <div>
                <h4 className="font-semibold text-primary mb-2">Challenges</h4>
                <p className="text-text-secondary">{project.caseStudy.challenges}</p>
              </div>
            )}
            {project.caseStudy.role && (
              <div className="flex items-center gap-2 text-text-tertiary">
                <span className="font-mono text-xs">{project.caseStudy.role}</span>
                {project.caseStudy.status && (
                  <>
                    <span>•</span>
                    <span className="text-xs">{project.caseStudy.status}</span>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
