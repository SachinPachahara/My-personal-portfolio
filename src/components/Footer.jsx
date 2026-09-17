import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal, contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-900 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <p className="text-slate-200 font-semibold text-sm">{personal.name}</p>
            <p className="text-slate-500 text-[11px]">
              Crafted with React, Tailwind CSS & clean intentions.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-indigo-400 transition-colors"
          >
            Email
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={contact.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            LeetCode
          </a>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-slate-800 transition-all flex items-center gap-1.5"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Top</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-8 pt-6 border-t border-slate-900/60 text-center text-slate-600 text-[11px]">
        © {new Date().getFullYear()} {personal.name}. All rights reserved. Open for collaboration.
      </div>
    </footer>
  );
}
