import React from 'react';
import { ArrowDown, Sparkles, MapPin, Award, ExternalLink } from 'lucide-react';
import { LeetcodeIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal, contact } = portfolioData;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Subtle Animated Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-400/10 blur-[130px] -z-10 pointer-events-none rounded-full animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-500/10 blur-[110px] -z-10 pointer-events-none rounded-full animate-float-delayed" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 blur-[90px] -z-10 pointer-events-none rounded-full animate-float-slow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium mb-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/60 hover:scale-[1.02]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{personal.badge}</span>
        </div>

        {/* Humanized Headline with Animated Gradient Accent */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.14] mb-6">
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent animate-gradient-text">
            {personal.name}
          </span>
          .
          <br />
          <span className="text-slate-200 text-2xl sm:text-4xl md:text-5xl font-bold block mt-3">
            {personal.title}
          </span>
        </h1>

        {/* Subtitle / Tagline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          {personal.tagline}
        </p>

        {/* Clean Primary Action Buttons with Sheen Effect (No redundant social pills) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="#projects"
            className="sheen-effect group px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="sheen-effect group px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base border border-slate-800 hover:border-slate-700 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
          >
            <span>Let's Connect</span>
            <Sparkles className="w-4 h-4 text-indigo-400 transition-transform duration-200 group-hover:rotate-12" />
          </a>
        </div>

        {/* Key Vitals & LeetCode Milestone Card (De-duplicated) */}
        <div className="pt-6 border-t border-slate-900/80 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left">
          <div className="flex items-center gap-3 text-xs text-slate-400 p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-300 border border-slate-700/50 shrink-0">
              <MapPin className="w-4 h-4 text-indigo-400" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Location</p>
              <p className="text-slate-200 font-semibold">{personal.location}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs text-slate-400 p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-slate-700/80 transition-all duration-200 hover:-translate-y-0.5 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-slate-800/80 flex items-center justify-center text-slate-300 border border-slate-700/50 shrink-0">
              <Award className="w-4 h-4 text-amber-400" />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Academics</p>
              <p className="text-slate-200 font-semibold">CPI {personal.cpi} (B.Tech CSE)</p>
            </div>
          </div>

          {/* Direct Clickable LeetCode Milestone Card */}
          <a
            href={contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/50 border border-slate-800/60 hover:border-amber-500/50 hover:bg-slate-900/80 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            title="View LeetCode Profile"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-950/40 border border-amber-800/30 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-105 transition-transform">
                <LeetcodeIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">LeetCode Profile</p>
                <p className="text-slate-200 font-semibold group-hover:text-amber-300 transition-colors">
                  {personal.problemsSolved} Solved (DSA)
                </p>
              </div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
