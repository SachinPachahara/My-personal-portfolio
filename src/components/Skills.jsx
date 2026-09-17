import React from 'react';
import { Layers, Database, Wrench, CheckCircle2, Code, Sparkles, GraduationCap } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills, coreCS } = portfolioData;

  const getCategoryIcon = (category) => {
    const cat = category.toLowerCase();
    if (cat.includes('language')) {
      return <Code className="w-5 h-5 text-indigo-400" />;
    }
    if (cat.includes('ai') || cat.includes('generative')) {
      return <Sparkles className="w-5 h-5 text-amber-400" />;
    }
    if (cat.includes('frontend') || cat.includes('backend')) {
      return <Layers className="w-5 h-5 text-cyan-400" />;
    }
    if (cat.includes('database')) {
      return <Database className="w-5 h-5 text-emerald-400" />;
    }
    return <Wrench className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-mono text-xs font-medium mb-3">
              <span>// 02. TECHNICAL ARSENAL</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Skills & Technologies
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-xl">
              A practical overview of tools, frameworks, and foundational computer science principles I work with.
            </p>
          </div>
        </RevealOnScroll>

        {/* Compact Core CS Tag Strip with Subtle Pulse on Icon */}
        <RevealOnScroll direction="up" delay={50}>
          <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-slate-900/90 via-indigo-950/20 to-slate-900/90 border border-slate-800 shadow-md transition-all duration-300 hover:border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-300 font-bold shrink-0">
                <GraduationCap className="w-4 h-4 text-indigo-400 animate-pulse" />
                <span>Core CS:</span>
              </div>
              
              <div className="flex flex-wrap items-center gap-2">
                {coreCS.map((subject) => (
                  <span
                    key={subject.label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950/80 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900 hover:scale-105 text-xs sm:text-sm font-medium text-slate-200 transition-all duration-200 cursor-default"
                    title={subject.full}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    {subject.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Skills Cards Grid with Staggered Fade-in */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <RevealOnScroll key={skillGroup.category} direction="up" delay={idx * 80}>
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/50 transition-transform duration-200 group-hover:scale-105">
                      {getCategoryIcon(skillGroup.category)}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white">{skillGroup.category}</h3>
                      <p className="text-[11px] sm:text-xs text-slate-400">{skillGroup.description}</p>
                    </div>
                  </div>

                  {/* Badges / Items with Micro-Scale on Hover */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {skillGroup.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="group inline-flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-200 hover:border-indigo-500/40 hover:bg-slate-900 hover:scale-[1.03] transition-all duration-200 cursor-default shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-[10px] text-slate-500 font-mono border-l border-slate-800 pl-1.5">
                          {skill.level}
                        </span>
                      </div>
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
