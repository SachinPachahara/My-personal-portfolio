import React from 'react';
import { HeartHandshake, Code2, Sparkles, Users, Target, Cpu, Compass, GraduationCap, Award } from 'lucide-react';
import RevealOnScroll from './RevealOnScroll';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal, values, currently } = portfolioData;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-rose-400" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-indigo-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="mb-14 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-mono text-xs font-medium mb-3">
              <span>// 01. ABOUT ME</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Engineering with algorithmic discipline & clean execution.
            </h2>
          </div>
        </RevealOnScroll>

        {/* About Grid: Photo (Left) + Bio & Education (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16 items-start">
          {/* Photo Card (Left Column) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <RevealOnScroll direction="up" delay={60} className="w-full max-w-[320px] lg:max-w-none">
              <div className="relative group mx-auto">
                {/* Subtle Ambient Glow behind Photo */}
                <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-600 to-cyan-400 rounded-3xl blur-md opacity-25 group-hover:opacity-45 transition duration-500" />
                
                {/* Photo Frame */}
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl aspect-[3/4]">
                  <img
                    src={personal.avatarUrl || "/sachin.jpg"}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay on Bottom */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-transparent pt-10 pb-3 px-4 text-center">
                    <p className="text-base font-bold text-white tracking-tight">{personal.name}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Bio text & Details (Right Column) */}
          <div className="lg:col-span-8 space-y-6">
            <RevealOnScroll direction="up" delay={100}>
              <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
                {personal.bio.map((paragraph, idx) => (
                  <p key={idx} className="font-normal">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Credibility highlights: CPI 9.3, 600+ DSA, 5+ Projects */}
              <div className="pt-3 pb-6 flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-400">
                <span className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 shadow-sm transition-all duration-200 hover:border-amber-500/40 hover:-translate-y-0.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-amber-300 font-semibold">{personal.cpi} CPI</span> (Academic Rigor)
                </span>
                <span className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 shadow-sm transition-all duration-200 hover:border-indigo-500/40 hover:-translate-y-0.5">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span className="text-indigo-400 font-semibold">{personal.problemsSolved}</span> DSA Solved
                </span>
                <span className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-2 rounded-xl border border-slate-800 shadow-sm transition-all duration-200 hover:border-cyan-500/40 hover:-translate-y-0.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">{personal.projectsCompleted}</span> Projects Shipped
                </span>
              </div>
            </RevealOnScroll>

            {/* Education & Focus Card */}
            <RevealOnScroll direction="up" delay={150}>
              <div className="bg-gradient-to-br from-slate-900/90 to-slate-950/90 p-6 rounded-2xl border border-slate-800/80 shadow-xl relative overflow-hidden group transition-all duration-300 hover:border-slate-700">
                <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-75" />
                
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
                  <Compass className="w-5 h-5 text-cyan-400 animate-pulse" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                    Education & Focus
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-amber-500/10 text-amber-400 mt-0.5 shrink-0">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">University & Degree:</p>
                      <p className="text-slate-200 font-medium">{currently.education}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">DSA Milestone:</p>
                      <p className="text-slate-200 font-medium">{currently.dsaStatus}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-indigo-500/10 text-indigo-400 mt-0.5 shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">Currently mastering:</p>
                      <p className="text-slate-200 font-medium">{currently.learning}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-1.5 rounded-md bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0">
                      <Target className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">Daily discipline:</p>
                      <p className="text-slate-200 font-medium">{currently.dailyGoal}</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* Engineering Values Grid */}
        <div id="values" className="pt-4">
          <RevealOnScroll direction="up">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6">
              Core Principles I Practice
            </h3>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((val, idx) => (
              <RevealOnScroll key={val.title} direction="up" delay={idx * 100}>
                <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/70 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-slate-800/80 flex items-center justify-center mb-4 border border-slate-700/60 transition-transform duration-200 group-hover:scale-105">
                      {getIcon(val.icon)}
                    </div>
                    <h4 className="text-base font-semibold text-white mb-2">{val.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
