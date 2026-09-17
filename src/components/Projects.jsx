import React, { useState } from 'react';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import RevealOnScroll from './RevealOnScroll';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Full Stack & AI', 'Full Stack'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-mono text-xs font-medium mb-3">
                <span>// 03. FEATURED WORK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                Projects & Case Studies
              </h2>
              <p className="text-sm sm:text-base text-slate-400 max-w-xl">
                Each project represents real problem-solving, thoughtful architectural decisions, and clean execution.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 rounded-xl border border-slate-800/80 w-fit">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 active:scale-95 ${
                    activeFilter === category
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <RevealOnScroll key={project.id} direction="up" delay={idx * 90}>
              <div className="group flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900/70 to-slate-950/70 border border-slate-800/80 hover:border-indigo-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 h-full">
                <div>
                  {/* Top Bar: Category badge & links */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-md bg-slate-800/80 text-indigo-300 border border-slate-700/50">
                      <FolderGit2 className="w-3 h-3" />
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-slate-800/70 hover:bg-slate-750 text-slate-300 hover:text-white border border-slate-700/60 transition-all duration-200 hover:scale-110 active:scale-95"
                          aria-label={`View ${project.title} source code on GitHub`}
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-300 hover:text-indigo-200 border border-indigo-500/30 transition-all duration-200 hover:scale-110 active:scale-95"
                          aria-label={`Visit ${project.title} live demo`}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-slate-400 mb-3 italic leading-relaxed">
                    "{project.tagline}"
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Problem solved highlight */}
                  {project.challengesSolved && (
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/70 text-xs text-slate-300 mb-5">
                      <span className="text-indigo-400 font-semibold block mb-0.5">
                        Key Engineering Win:
                      </span>
                      {project.challengesSolved}
                    </div>
                  )}
                </div>

                {/* Tech Stack Badges */}
                <div className="pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-mono rounded bg-slate-800/60 text-slate-300 border border-slate-700/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
