import { useState } from 'react'
import { Terminal, Hash } from 'lucide-react'
import { skillCategories, stats } from '../data/portfolio'

const TIER_DEFS = [
  { id: 'core', label: 'Core', minLevel: 4, desc: 'Strong, proven proficiency' },
  { id: 'working', label: 'Working Knowledge', minLevel: 3, maxLevel: 3, desc: 'Comfortable applying in projects' },
  { id: 'familiar', label: 'Familiar', maxLevel: 2, desc: 'Foundational exposure' },
]

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState('all')

  const allSkills = skillCategories.flatMap((cat) => cat.skills)
  const tiers = TIER_DEFS.map((tier) => ({
    ...tier,
    skills: allSkills.filter(
      (skill) =>
        (tier.minLevel === undefined || skill.level >= tier.minLevel) &&
        (tier.maxLevel === undefined || skill.level <= tier.maxLevel)
    ),
  }))

  const filteredCategories =
    activeFilter === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeFilter)

  const allFilters = [
    { id: 'all', label: 'all' },
    ...skillCategories.map((cat) => ({ id: cat.id, label: cat.label })),
  ]

  return (
    <div className="space-y-24 py-20">
      {/* Hero Section */}
      <section className="container-custom text-center space-y-6">
        <p className="text-sm text-accent-cyan font-mono">Technical Proficiency</p>
        <h1 className="text-4xl md:text-6xl font-bold gradient-text">Skills Matrix</h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          A comprehensive overview of my technical skills across {skillCategories.length} domains,
          from hardware support to AI/ML and cloud computing.
        </p>
        <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full">
          <Hash className="w-5 h-5 text-primary" />
          <span className="text-2xl font-bold gradient-text">{stats.skills}</span>
          <span className="text-text-tertiary">Total Skills</span>
        </div>
      </section>

      {/* Proficiency Tiers — at a glance */}
      <section className="container-custom">
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div key={tier.id} className="glass p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-text-primary mb-1">{tier.label}</h3>
              <p className="text-xs text-text-tertiary mb-4">{tier.desc}</p>
              <div className="flex flex-wrap gap-2">
                {tier.skills.map((skill) => (
                  <span key={skill.name} className="tag-outline text-xs">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Terminal-style Filter */}
      <section className="container-custom">
        <div className="glass p-6 rounded-xl font-mono">
          <div className="flex items-center gap-2 mb-4 text-sm">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-text-tertiary">jerwin@portfolio:~$</span>
            <span className="text-primary">skills</span>
            <span className="text-text-tertiary">--filter=</span>
            <span className="text-accent-cyan">{activeFilter}</span>
            <span className="animate-pulse">_</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {allFilters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-3 py-1 rounded text-sm transition-all ${
                  activeFilter === filter.id
                    ? 'bg-primary text-white'
                    : 'bg-background-tertiary text-text-tertiary hover:bg-background-tertiary/80'
                }`}
              >
                [{filter.id}]
              </button>
            ))}
          </div>

          <div className="mt-4 text-xs text-text-tertiary">
            <span className="text-green-500">✓</span> Showing {filteredCategories.length}{' '}
            {filteredCategories.length === 1 ? 'category' : 'categories'} •{' '}
            {filteredCategories.reduce((sum, cat) => sum + cat.skills.length, 0)} skills
          </div>
        </div>
      </section>

      {/* Skills by Category */}
      <section className="container-custom space-y-12">
        {filteredCategories.map((category) => (
          <div key={category.id} className="glass p-8 rounded-xl">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                  {category.label}
                </h2>
                <p className="text-sm text-text-tertiary">
                  {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'} •
                  Domain: <span className="font-mono text-accent-cyan">{category.id}</span>
                </p>
              </div>
              <div
                className={`hidden md:block w-3 h-3 rounded-full ${
                  category.accent === 'cyan' ? 'bg-accent-cyan' : 'bg-primary'
                }`}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="glass p-4 rounded-lg flex items-center justify-between hover:-translate-y-0.5 transition-transform"
                >
                  <span className="text-text-secondary text-sm flex-1">{skill.name}</span>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {/* Level Dots */}
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            i < skill.level
                              ? category.accent === 'cyan'
                                ? 'bg-accent-cyan'
                                : 'bg-primary'
                              : 'bg-border-subtle'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-text-tertiary font-mono ml-2">
                      {skill.level}/5
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Legend */}
      <section className="container-custom">
        <div className="glass p-6 rounded-xl">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Proficiency Legend</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { level: 1, label: 'Beginner', desc: 'Basic understanding' },
              { level: 2, label: 'Elementary', desc: 'Working knowledge' },
              { level: 3, label: 'Intermediate', desc: 'Practical application' },
              { level: 4, label: 'Advanced', desc: 'Strong proficiency' },
              { level: 5, label: 'Expert', desc: 'Extensive mastery' },
            ].map((item) => (
              <div key={item.level} className="text-center space-y-2">
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        i < item.level ? 'bg-primary' : 'bg-border-subtle'
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">{item.label}</div>
                  <div className="text-xs text-text-tertiary">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="container-custom">
        <div className="glass p-12 rounded-2xl text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Continuous Skill Development
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            I&apos;m committed to staying current with evolving technologies and industry best practices.
            My skill set continues to grow through coursework, certifications, hands-on projects,
            and self-directed learning.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="badge">Active Learner</span>
            <span className="badge">AWS Certified</span>
            <span className="badge">CompTIA ITF+</span>
            <span className="badge">Hands-on Projects</span>
            <span className="badge">Team Leadership</span>
          </div>
        </div>
      </section>
    </div>
  )
}
