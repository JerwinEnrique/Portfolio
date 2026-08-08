import { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { projects, projectCategories } from '../data/projects'

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredProjects = projects.filter(
    project => activeFilter === 'all' || project.category.includes(activeFilter)
  )

  return (
    <div className="space-y-16 py-20">
      {/* Hero */}
      <section className="container-custom text-center space-y-6">
        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4">
          <span className="text-sm font-mono text-primary">01 // Project Portfolio</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">Featured Projects</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          A list of academic and personal projects, including my undergraduate thesis and real client work. 
          Detailed case studies included for major projects.
        </p>
      </section>

      {/* Filters */}
      <section className="container-custom">
        <div className="flex flex-wrap gap-3 justify-center">
          {projectCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeFilter === category.id
                  ? 'bg-primary text-white'
                  : 'bg-background-tertiary text-text-secondary hover:bg-background-tertiary/80 hover:text-primary'
              }`}
            >
              [{category.label}]
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container-custom">
        <p className="text-center text-sm text-text-tertiary mb-8">
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
          {activeFilter !== 'all' && ` in ${projectCategories.find(c => c.id === activeFilter)?.label}`}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-tertiary">No projects found in this category.</p>
          </div>
        )}
      </section>
    </div>
  )
}
