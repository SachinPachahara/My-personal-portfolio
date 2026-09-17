import React, { useState } from 'react';
import { Mail, Copy, Check, Send, ExternalLink, MessageSquare, Clock, Globe } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import RevealOnScroll from './RevealOnScroll';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact, personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }).catch(() => {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = contact.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const mailtoUrl = `mailto:${contact.email}?subject=${encodeURIComponent(
    contact.emailSubject
  )}&body=${encodeURIComponent(contact.emailBody)}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-900/30 border-t border-slate-900">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[120px] -z-10 pointer-events-none rounded-full animate-pulse-glow" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <RevealOnScroll direction="up">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-500/10 text-indigo-400 font-mono text-xs font-medium mb-3">
              <span>// 04. GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Let’s build something together.
            </h2>
            <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
              I'm currently seeking full-time Software Engineer, Full-Stack, and Generative AI roles. Reach out directly:
            </p>
          </div>
        </RevealOnScroll>

        {/* Main Contact Card with Scroll Animation */}
        <RevealOnScroll direction="up" delay={100}>
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-950/80 border border-slate-800 shadow-2xl backdrop-blur-md mb-8 transition-all duration-300 hover:border-slate-700">
            <div className="text-center mb-8">
              <div className="w-12 h-12 rounded-2xl bg-indigo-600/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mx-auto mb-3 transition-transform duration-200 hover:scale-105">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Direct Contact</h3>
              <p className="text-xs sm:text-sm text-slate-400">
                No forms or third-party gateways. Connect directly via Email, LinkedIn, or GitHub:
              </p>
            </div>

            {/* Primary Action Buttons: Email Me & Copy */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              {/* Direct Email Me Button with Sheen Effect */}
              <a
                href={mailtoUrl}
                className="sheen-effect w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm sm:text-base shadow-lg shadow-indigo-600/25 transition-all duration-200 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:scale-95"
              >
                <Send className="w-4 h-4" />
                <span>Email Me Directly</span>
              </a>

              {/* Copy Email Button with Animated Toast State */}
              <button
                onClick={handleCopyEmail}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border font-semibold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5 active:scale-95 ${
                  copied
                    ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300'
                    : 'bg-slate-900/90 border-slate-800 text-slate-200 hover:border-slate-700 hover:text-white'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Displayed Contact Info Chips */}
            <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
              <span className="inline-block font-mono text-xs sm:text-sm px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-300">
                {contact.email}
              </span>
            </div>

            {/* Strictly LinkedIn & GitHub Cards (No LeetCode here, LeetCode is in Achievements/Hero) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-900">
              {/* LinkedIn Card */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/50 border border-cyan-800/40 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-[11px] text-slate-400 font-medium">LinkedIn</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                      {contact.linkedinUsername}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>

              {/* GitHub Card */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/50 hover:bg-slate-900 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-950/50 border border-purple-800/40 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="text-left overflow-hidden">
                    <p className="text-[11px] text-slate-400 font-medium">GitHub</p>
                    <p className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-purple-300 transition-colors truncate">
                      {contact.githubUsername}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all shrink-0" />
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Reassurance / Meta Info */}
        <RevealOnScroll direction="up" delay={150}>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 text-center">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              {contact.responseTime}
            </span>
            <span className="text-slate-700">•</span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              Based in {personal.location}
            </span>
            <span className="text-slate-700">•</span>
            <span className="text-slate-300 font-medium">
              {contact.availabilityStatus}
            </span>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
